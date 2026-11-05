# Source pack — subjects/engineering/advanced/signal-processing
Lesson title: Signal Processing
Level: advanced
Match confidence: 2.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.05 — LibreTexts: 14: Appendix 3: Example Processing Pipeline
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://socialsci.libretexts.org/Bookshelves/Psychology/Book%3A_Applied_Event-Related_Potential_Data_Analysis_(Luck)/14%3A_Appendix_3%3A_Example_Processing_Pipeline

14: Appendix 3: Example Processing Pipeline
-
- Last updated
- Save as PDF
This appendix provides an example of a typical EEG preprocessing pipeline for a single participant, including all the steps prior to averaging. It is nearly identical to the pipeline scripts provided in the second half of the chapter on Scripting (Chapter 10). Much of the logic for the ordering of the steps is spelled out in Luck (2014), especially Appendix 1.
This pipeline is optimized for the kinds of experiments typically conducted in my lab, such as the ERP CORE experiments, in which highly cooperative college student participants are tested with in relatively simple cognitive tasks. Changes will often be necessary for different types of tasks and/or participants. In other words, don’t blindly follow this pipeline!
Step 1: Preprocessing Prior to ICA-Based Artifact Correction
-
Import the participant’s original EEG data file(s) into EEGLAB
-
If there are multiple data files (e.g., one per trial block), combine them into a single dataset.
- If the cap was removed and replaced between data files (e.g., because you had recording sessions on multiple days), you should merge the data files after the ICA step (because the electrodes might not be in exactly the same places for the different files, which will mess up ICA but isn’t a big deal for most other kinds of analyses).
- If a given channel is bad in a subset of the blocks, you could interpolate that channel for those blocks at this stage. If you do this, you should apply the filtering step described below at this stage, which will make the interpolation work better. (And then you will skip the filtering at the later stage.)
- If your data were recorded without a reference (usually this is only for the BioSemi ActiveTwo system), you may receive a warning that strongly encourages you to reference the data now. Do not do it. You will reference the data at a later step.
- Recommended: Save this dataset as a file
-
If there are multiple data files (e.g., one per trial block), combine them into a single dataset.
-
If appropriate, shift the stimulus event codes in time to account for any consistent mismatch between the time of the event code and the actual stimulus onset time
- All LCD displays interpose a constant delay between the time that the video information arrives from the computer’s video card and the time that the image is presented on the screen. This delay cannot be detected by the computer and cannot be determined reliably from the manufacturer’s specifications. It must be measured with some kind of photosensor. This delay is often greater than 25 ms, so it must be accounted for.
- Almost all video displays (LCD and CRT) have a delay that depends on the vertical position of the stimulus on the display. This delay is typically ~15 ms for the bottom of the display relative to the top (assuming a refresh rate of 60 Hz). If you are using stimuli at very different vertical locations in your different experimental conditions, you should measure the delay separately for the different locations and adjust accordingly. For large stimuli that are vertically centered, we measure the delay in the vertical center of the display.
- Delays may also occur for stimuli in other modalities. The delay should be measured and, if substantial, accounted for by shifting the event codes.
- Make sure that you shift only the stimulus event codes and not the response event codes (unless the there is also a delay for the responses). Use a positive shift value because the event code needs to be shifted later in time (because the stimulus occurred after the event code).
- ERPLAB’s function for shifting event codes creates a CSV file showing how each event code was shifted. You should look at this file to verify that the shifting was correct.
- It’s also important to verify that the delay is consistent (±1 sample period). If it is not consistent, there is probably a problem with the stimulus presentation script.
-
If desired, downsample your data to a lower sampling rate
- My lab typically records at 500 Hz and then downsamples to 250 Hz. This gives us a higher sampling rate if we ever need it, but downsampling to 250 Hz makes the subsequent data processing faster and the data files half as large.
- Note that EEGLAB’s pop_resample routine will automatically apply an appropriate antialiasing filter prior to the resampling process.
-
Apply a bandpass filter to the EEG and EOG channels
-
We ordinarily use a non-causal Butterworth impulse response function, 0.1–30 Hz half-amplitude cut-off, 12 dB/oct roll-off.
- Some researchers prefer a lower cutoff for the high-pass filter (e.g., .05 Hz or .01 Hz), especially when looking at slow components like the late positive potential. However, we find that 0.1 Hz works best in most cases. Do not use anything higher than 0.1 Hz unless you really know what you’re doing!
- You should apply the option for removing the DC offset in the data prior to filtering. This can reduce the edge artifacts that occur at the beginning and end of each recording period.
- If extensive 60 Hz noise is present, you can apply the cleanline plugin (Mitra & Pesaran, 1999; see Bigdely-Shamlo et al., 2015 for important details about implementing this tool). If cleanline doesn't work well for you, you can try the newer Zapline method (de Cheveigné, 2020; Klug & Kloosterman, 2022). Alternatively, you could decrease the low-pass frequency to 20 Hz and/or increase the slope of the low-pass filter to 48 dB/octave (which requires doing the low-pass and high-pass filtering as separate steps).
- If you have also recorded other signals (e.g., a photosensor), you may not want to filter those channels (or you might want different filtering parameters for those channels).
-
We ordinarily use a non-causal Butterworth impulse response function, 0.1–30 Hz half-amplitude cut-off, 12 dB/oct roll-off.
- Add channel location information specifying the 3-D locations of the electrodes.
-
Perform channel operations to create bipolar channels (and to reference the data if they were not referenced during the recording).
-
Create a bipolar HEOG channel (HEOG-left minus HEOG-right or vice versa)
- If you do not have HEOG electrodes, you can use F7 minus F8 (or just skip this step).
- If your data already contain a bipolar HEOG channel, you should skip this step.
-
Create a bipolar VEOG channel (VEOG-lower minus the closest electrode that is above the eyes). For example, if the VEOG-lower electrode is under the left eye, the FP1 signal would ordinarily be subtracted from the VEOG-lower signal.
- If your data already contain a bipolar VEOG channel, you should skip this step.
- Keep the original, monopolar EOG channels, which will be important for ICA.
- Make sure that the channel location information is preserved by the Channel Operations routine.
-
If your data were not recorded with a reference, reference the data now.
- In some systems (e.g., BioSemi ActiveTwo), the data saved to disk are not referenced and you should perform referencing now. However, if your data were referenced during recording, do not re-reference now. The re-referencing will be performed later, after artifact correction.
- In most labs that use the Brain Products ActiCHamp system, the data are already referenced at this point. However, our lab has a custom version of the data acquisition system in which the data are not referenced. Our lab therefore references at this point (and we re-reference later, after artifact correction).
- If you are referencing now, use a single electrode site as the reference. If a combination of sites is desired in the long run (e.g., the average of all sites, the average of the mastoids), you will re-reference to that combination later.
- It doesn’t really matter what site is used as the reference at this point. My lab uses P9.
- Recommended: Save the resulting dataset as a file. We call this dataset the pre-ICA dataset .
-
Create a bipolar HEOG channel (HEOG-left minus HEOG-right or vice versa)
-
View the EEG to make sure everything looks okay and to identify channels that require interpolation. These channels will be left out of the ICA decomposition process. The actual interpolation will be done after the ICA correction has been performed.
-
To identify channels that should be interpolated:
- Visually inspect the EEG on both short (e.g., 5-second) and long (e.g., 60-second) time scales. This video demonstrates how to perform an initial visual inspection of continuous EEG data https://doi.org/10.18115/D5V638 .
- If the voltage drifts around or there are many sudden changes in voltage, that channel should be interpolated.
- If a channel is fine for most of the session but shows occasional periods of large deflections, this channel can be interpolated after epoching but limited to epochs in which the large deflections occur (as determined with the artifact detection procedures).
-
If a channel shows a lot of high-frequency noise, it may not actually need to be interpolated.
- If the main dependent variable will be the mean voltage over some time range (e.g., 200-300 ms for N2pc or 300-500 ms for N400), high-frequency noise is not usually a problem. The best way to tell if it will be a problem is to look at the standardized measurement error (SME). If the SME for that channel is >2 SD beyond the mean SME of the other channels (excluding EOG, Fp1, and Fp2), then the channel should be interpolated. If the channel is the main channel for data analysis, you could interpolate if it is >1.5 SD beyond the mean.
- If there is a lot of high-frequency noise, the signal may also be corrupted in this channel. To see this, make a note to check the averaged ERP for that channel and surrounding channels after the averaging process. If the channel looks quite different from the surrounding channels, the signal is probably corrupted and the channel should be interpolated (which will require going back to this stage and repeating all the subsequent processes.
- If the main dependent variable will be a latency value and/or a peak-related variable, high-frequency noise is more likely to be a problem. You can confirm this by computing the bootstrapped SME when you get to the averaging step.
- Save information about channels that should be interpolated in an Excel file. That makes it possible to repeat the processing with a script.
- If a given channel misbehaves only occasionally, save this information the Excel file that controls artifact detection.
-
To identify channels that should be interpolated:
Step 2: ICA-Based Artifact Correction
- Make a copy of the pre-ICA dataset . We will use this new dataset for the ICA decomposition. This new dataset is called the ICA decomposition dataset .
-
Apply the following operations to the
ICA decomposition dataset
.
-
Bandpass filter with half-amplitude cutoffs at 1 and 30 Hz, 48 dB/octave
- It’s OK that we’ve double-filtered the data. The original filtering is so much milder that it will be dwarfed by the new filter.
- If your previous low-pass cutoff was at 20 Hz, use 20 Hz here as well
- If your previous low-pass slope was 48 dB/octave, just do a high-pass filter at this stage (1 Hz, 48 dB/octave).
- Note: It is important that this filtering is done before the following steps. Some of the following steps introduce discontinuities in the EEG data, and those can lead to edge artifacts if the filtering is applied later.
-
Resample the data at 100 Hz.
- This is not strictly necessary, but it makes the ICA decomposition faster.
- Don’t resample if the recording was brief. You need enough data to train the ICA decomposition routine. See the chapter on artifact correction for details on how much data is necessary.
-
Delete break periods, because the EEG is often “crazy” during breaks, which degrades the ICA decomposition.
- A break is defined as a period of at least X ms without an event code, where X is some reasonable value (e.g., 2000 ms, assuming that you never have 

## Match 2.05 — LibreTexts: 13.10: ¹³C NMR Spectroscopy - Signal Averaging and FT-NMR
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://chem.libretexts.org/Courses/Smith_College/Organic_Chemistry_(LibreTexts)/13%3A_Structure_Determination_-_Nuclear_Magnetic_Resonance_Spectroscopy/13.10%3A_C_NMR_Spectroscopy_-_Signal_Averaging_and_FT-NMR

13.10: ¹³C NMR Spectroscopy - Signal Averaging and FT-NMR
-
- Last updated
- Save as PDF
Objectives
After completing this section, you should be able to
- Understand why the nuclei C NMR looks at is 13 C and not 12 C.
- Know why more scans are needed in 13 C NMR than 1 H NMR.
Most of what we have learned about 1 H-NMR spectroscopy also applies to 13 C-NMR, although there are several important differences.
Signal strength in 13 C-NMR spectroscopy
The 12 C isotope of carbon - which accounts for more than 98% of the carbons in organic molecules - does not have a nuclear magnetic moment, and thus is NMR-inactive. Fortunately for organic chemists, however, the 13 C isotope, which accounts for 1.1% of the remaining carbon atoms in nature, has a magnetic moment just like protons.
The magnetic moment of a 13 C nucleus is much weaker than that of a proton, meaning that NMR signals from 13 C nuclei are inherently much weaker than proton signals. This, combined with the low natural abundance of 13 C, means that it is much more difficult to observe carbon signals and there is a much lower signal-to-noise ratio than in 1 H NMR. Therefore, more concentrated samples are required to generate a useful spectrum, and often the data from hundreds of scans must be averaged in order to bring the signal-to-noise ratio down to acceptable levels. This type of signal averaging works since background noise in a spectrum is typically random while the signal caused by the 13 C nuclei is not. Therefore if the spectra from multiple scans is averaged, the noise gets closer to 0 while the signal stays the same, increasing the signal-to-noise ratio.
Fourier Transform (FT) NMR
Earlier versions of NMR instruments used variable magnetic fields which required recording of each signal in the spectrum sequentially which is called continuous wave (CW) NMR. The Fourier Transform allows recording of all signals simultaneously by introducing a short pulse of all RF frequencies that cause resonance for a given nucleus. This complex signal is then manipulated through complex mathematical processing that creates an NMR spectrum that looks similar to a CW spectrum, but in much less time.

## Match 2.04 — LibreTexts: 2.3: Data Processing in Biosystems Engineering
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://eng.libretexts.org/Bookshelves/Biological_Engineering/Introduction_to_Biosystems_Engineering_(Holden_et_al.)/02%3A_Information_Technology_Sensors_and_Control_Systems/2.03%3A_Data_Processing_in_Biosystems_Engineering

2.3: Data Processing in Biosystems Engineering
Yao Ze Feng
College of Engineering, Huazhong Agricultural University and Key Laboratory of Agricultural Equipment in Mid-lower Yangtze River, Ministry of Agriculture and Rural Affairs Wuhan, Hubei, China
Variables
Introduction
Novel sensing technologies and data processing play a very important role in most scenarios across the wide varieties of biosystems engineering applications, such as environmental control and monitoring, food processing and safety control, agricultural machinery design and its automation, and biomass and bioenergy production, particularly in the big data era. For instance, to achieve automatic, non-destructive grading of agricultural products according to their physical and chemical properties, raw data from different types of sensors should be acquired and carefully processed to accurately describe the samples so that the products can be classified into different categories correctly (Gowen et al., 2007; Feng et al., 2013; O’Donnell et al., 2014; Baietto and Wilson, 2015; Park and Lu, 2016). For the environmental control of greenhouses, temperature, humidity, and the concentration of particular gases should be determined by processing the raw data acquired from thermistors, hydrometers, and electronic noses or optical sensors (Bai et al., 2018). Successful use of measurements relies heavily on data processing that converts the raw data into meaningful information for easier interpretation and understanding the targets of interest.
The purpose of data processing is to turn raw data into useful information that can help understand the nature of objects or a process. To make this whole procedure successful, particular attention should be paid to ensure the quality of raw data. However, the raw data obtained from biological systems are always affected by environmental factors and the status of samples. For example, the optical profiles of meat are vulnerable to temperature variation, light conditions, breeds, age and sex of animals, type of feeds, and geographical origins, among other factors. To ensure the best quality of raw data, data pretreatment is essential.
In this chapter, data pretreatment methods, including smoothing, derivatives, and normalization, are introduced. With good quality data, a modeling process correlating the raw data with features of the object or process of interest can be developed. This can be realized by employing different modeling methods. After validation, the established model can then be used for real applications.
Outcomes
After reading this chapter, you should be able to:
- • Describe the principles of various data processing methods
- • Determine appropriate data processing methods for model development
- • Evaluate the performance of established models
- • List examples of the application of data processing
Concepts
Data Pretreatment
Data Smoothing
To understand the features of biological objects, different sensors or instruments can be employed to acquire signals representing their properties. For example, a near-infrared (NIR) spectrometer is used to collect the optical properties across different wavelengths, called the spectrum, of a food or agricultural product. However, during signal (i.e., spectrum) acquisition, random noise will inevitably be introduced, which can deteriorate signal quality. For example, short-term fluctuations may be present in signals, which may be due to environmental effects, such as the dark current response and readout noise of the instrument. Dark current is composed of electrons produced by thermal energy variations, and readout noise refers to information derived from imperfect operation of electronic devices. Neither of them contribute to the understanding of the objects under investigation. In order to decrease such effects, data smoothing is usually applied. Some popular data smoothing methods include moving average (MV) and S-G (Savitzky and Golay) smoothing.
The idea of moving average is to apply “sliding windows” to smooth out random noises at each segment of the signal by calculating the average value in the segment so that the random noise in the whole signal can be reduced. Given a window with an even number of data points at a certain position, the average value of the original data within the window is calculated and used as the smoothed new value for the central point position. This procedure is repeated until reaching the end of the original signal. For the data points at the two edges of the signal that cannot be covered by a complete window, one can still assume the window is applied but only calculate the average of the data available in the window. The width of window is a key factor that should be determined carefully. It is not always true that the signal-to-noise ratio increases with window width since a too-large window will tend to smooth out useful signal as well. Moreover, since the average value is calculated for each window, all data points in the window are considered as equal contributors for the signal; this will sometimes result in signal distortion. To avoid this problem, S-G smoothing can be introduced.
Instead of using a simple average in the moving average process, Savitzky and Golay (1964) proposed assigning weights to different data in the window. Given an original signal X , the smoothed signal XS can be obtained as:
\[ XS_{i}=\frac{\sum^{r}_{j=-r} X_{i+j}W_{j}}{\sum{^{r}_{j=-r}W_{j}}} \]
where 2 r + 1 is window width and W i is the weight for the i th data point in the window. W is obtained by fitting the data points in the window to a polynomial form following the least squares principle to minimize the errors between the original signal X and the smoothed signal XS and calculating the central points of the window from the polynomial. In applying S-G smoothing, the smoothing points and order of polynomials should be decided first. Once the two parameters are determined, the weight coefficients can then be applied to the data points in the window to calculate the value of the central point using Equation 2.3.1.
Figure 2.3.1 shows the smoothing effect by applying S-G smoothing to a spectrum of beef sample (Figure 2.3.1b-d). It is clearly shown that after S-G smoothing, the random noise in the original signal (Figure 2.3.1a) is greatly suppressed when the window width is 3 (Figure 2.3.1b). An even better result is achieved when the window width increases to 5 and 7, where the curve becomes smoother (Figure 2.3.1d) and the short fluctuations are barely seen.
Derivatives
Derivatives are methods for recovering useful information from data while removing slow change of signals (or low frequency signals) that could be useless in determining the properties of biological samples. For example, for a spectrum defined as a function y = f ( x ), the first and second derivatives can be calculated as:
\[ \frac{dy}{dx} = \frac{f(x+\Delta x)-f(x)}{\Delta x} \]
From Equations 2.3.2 and 2.3.3, it can be understood that the offset (e.g., constant shift of signals) of the signal can be eliminated after first derivative processing, while both offset and slope in the original signal can be excluded after second derivative processing. Specifically, for the first derivative, the constant values (corresponding to the offset) can be eliminated due to the difference operation in the numerator of Equation 2.3.2. After the first derivative, the spectral curve with the same slope can be converted to a new offset and this can be further eliminated by a second derivative. Since offset variations and slope information always indicate environmental effects on the signal and irrelevant factors that are closely correlated with independent variables, application of derivative methods will help reduce such noises. Moreover, processing signals with derivatives offer an efficient approach to enhance the resolution of signals by uncovering more peaks, particularly in spectral analysis.
For biological samples with complicated chemical components, the spectra are normally the combination of different absorbance peaks arising from these components. Such superimposed peaks, however, can be well separated in second derivative spectra. Nevertheless, it should be noted that the signal-to-noise ratio of the signal will deteriorate with the increase of derivative orders since the noise is also enhanced substantially, particularly for the higher order derivatives, though high order derivatives are sometimes found to be useful in understanding the detailed properties of the objects. To avoid noise enhancement, a S-G derivative can be introduced where signal derivatives are attained by computing the derivatives of the polynomial. Specifically, the data points in a sliding window are fitted to a polynomial of a certain order following the procedure of S-G smoothing. Within the window, derivatives of the fitted polynomial are then calculated to produce new weights for the central point. When the sliding window reaches the end of the signal, derivatives of the current signal are then attained.
Figure 2.3.2 shows absorbance and derivative spectra of bacterial suspensions (Feng et al., 2015). It is demonstrated that after S-G derivative operation with 5 smoothing points and polynomial order of 2, the constant offset and linear baseline shift in the original spectrum (Figure 2.3.2a) are effectively removed in the first (Figure 2.3.2b) and second (Figure 2.3.2c) derivative spectra, respectively. Particularly, the second derivative technique is also a useful tool to separate overlapped peaks where a peak at ~1450 nm is resolved into two peaks at 1412 and 1462 nm.
Normalization
The purpose of data normalization is to equalize the magnitude of sample signals so that all variables for a sample can be treated equally for further analysis. For example, the surface temperature of pigs and environmental factors (temperature, humidity, and air velocity) can be combined to detect the rectal temperature of sows. Since the values for pig surface temperature can be around 39°C while the air velocity is mostly below 2 m/s, if these values are used directly for further data analysis, the surface temperature will intrinsically play a more dominant role than air velocity does simply due to its larger values. This may lead to biased interpretation of the importance of variables. Data normalization is also helpful when signals from different sensors are combined as variables (i.e., data fusion) to characterize biological samples that are complex in composition and easily affected by environmental conditions. However, since data normalization removes the average as well as the standard deviation of the sample variables, it might give confusing information about the samples if variabilities of variables in different units are important in characterizing sample properties.
Standard normal variate (SNV), or standardization, is one of the most popular methods used to normalize sample data (Dhanoa et al., 1994). Given a sample data X , the normalized X nor can be obtained as:
\[ X_{nor}=\frac{X-mean(X)}{SD(X)} \]
where mean( X ) and SD( X ) are the mean and standard deviation of X , respectively.
After SNV transformation, a new signal with a mean value of 0 and unit standard deviation is produced. Therefore, SNV is useful in eliminating dimensional variance among variables since all variables are compared at the same level. In addition, as shown in Figure 2.3.3, SNV is capable of correcting the scattering effect of samples due to physical structure of samples during light-matter interactions (Feng and Sun, 2013). Specifically, the large variations in visible NIR (vis-NIR) spectra of beef samples (Figure 2.3.3a) are substantially suppressed as shown in Figure 2.3.3b.
Modeling Methods
The purpose of modeling in data processing is mainly to establish the relationship between independent variables and dependent variables. Independent variables are defined as stand-alone factors that c
