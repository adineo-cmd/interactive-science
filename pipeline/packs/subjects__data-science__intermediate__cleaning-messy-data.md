# Source pack — subjects/data-science/intermediate/cleaning-messy-data
Lesson title: Cleaning Messy Data
Level: intermediate
Match confidence: 1.37

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.37 — LibreTexts: 14.15: Transforming Data
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://biz.libretexts.org/Courses/Lumen_Learning/Book%3A_Computer_Applications_for_Managers_(Lumen)/14%3A_Microsoft_Access_Advanced_Skills/14.15%3A_Transforming_Data

14.15: Transforming Data
Learning Outcomes
- Transform data
Transforming data is the process by which data is prepared for use in a database. One of the banes of a database administrator’s existence is the need to “clean” data. Often, new data is available to be imported into a database but it is flawed in ways that make it unusable. One example would be a dataset that includes duplicate data. Other examples of data that requires cleaning or transformation are datasets with blank fields and concatenated strings.
Access provides some automated means of handling data transformation for duplicate records. If a dataset is suspected of containing duplicates, select the “Create” command from the toolbar and click “Query Wizard” and select “Find Duplicates Query Wizard,” identify the dataset in question and follow the instructions. A datasheet view will be created that shows records that appear to be duplicates.
Dealing with impurities in datasets is a job not just for one application like MS Access. IT professionals in all disciplines are confronted with the need for some sort of data “scrubbing” or another, and it is safe to say that there are no bullet-proof, automated means of doing so. Using Access queries, views, and its programming language, does provide a means of identifying and correcting faulty datasets.
Contributors and Attributions
- Transforming Data. Authored by : Robert Danielson. Provided by : Lumen Learning. License : CC BY: Attribution

## Match 1.37 — LibreTexts: 2.9: Measures of Variance and Standard Deviation on Grouped Data
License: Public Domain · https://stats.libretexts.org/Courses/Fort_Hays_State_University/Elements_of_Statistics/02%3A_Descriptive_Statistics/2.09%3A_Measures_of_Variance_and_Standard_Deviation_on_Grouped_Data

2.9: Measures of Variance and Standard Deviation on Grouped Data
Learning Objectives
- Determine range, variance, and standard deviation of grouped discrete data
- Determine range, variance, and standard deviation of grouped relative frequency data
Section \(2.9\) Excel File (contains all of the data sets for this section)
Introduction to Measures of Spread on Grouped Data
As mentioned in the previous section, there are times when we may be given data in a summarized frequency distribution format instead of a collection of "raw" data. We now examine finding descriptive statistic measures of dispersion in grouped data: range, variance, and standard deviation. If the data is grouped over intervals, we can only estimate such measures since the grouping action has caused us to lose some data information. However, if the data is grouped into single-value classes, we can usually produce the same spread measures as if we had the raw data.
Range, Variance, and Standard Deviation of Grouped (non-interval) Data in a Frequency Table
Look at the frequency table from Text Exercise \(2.8.1\) regarding quiz scores of twenty students:
| Quiz Scores | Frequency |
|---|---|
| \( 5 \) | \( 2 \) |
| \( 6 \) | \( 6 \) |
| \( 7 \) | \( 5 \) |
| \( 8 \) | \( 4 \) |
| \( 9 \) | \( 3 \) |
With such a table, we can easily find the range with no new ideas needed. The table shows the minimum data value is \(5\) and the maximum is \(9\). Because \(9 - 5 \) \(= 4,\) the range is a score difference of \(4.\)
Next, assuming the data is population data, we examine the variance and standard deviation. Recall that variance is the average of all the various squared deviations of the individual data values from the mean of the data. In the previous section, we found the mean of this distribution to be \( \mu\) \(= \frac{ \sum \left( x_j \cdot f_j \right) }{\sum f_j}\) \(= \frac{140}{20}\) \(= 7.\) In a new column, we can construct the deviations from the mean and square those deviations as a first step. It becomes imperative that we not get tied up with all the messy numbers as we move through our work but keep our focus on what we are measuring:
Table \(\PageIndex{2}\): Computation of squared deviations from the mean
| \(x_j\) | \(f_j\) | \( \left( x_j - \mu \right)^2 \) |
|---|---|---|
| \( 5 \) | \( 2 \) | \( \left( 5 - 7 \right) ^2 =4 \) |
| \( 6 \) | \( 6 \) | \( \left( 6 - 7 \right) ^2 =1 \) |
| \( 7 \) | \( 5 \) | \( \left( 7 - 7 \right) ^2 =0 \) |
| \( 8 \) | \( 4 \) | \( \left( 8 - 7 \right) ^2 =1 \) |
| \( 9 \) | \( 3 \) | \( \left( 9 - 7 \right) ^2 =4 \) |
| Totals: | \( \sum f = 20\) |
Before we can average these squared deviation measures, we must remember that some squared deviations occur more frequently (as given by the frequency column) than others. For example, the frequency column shows that many more squared deviations are tied to the data values of \(6\) than those of the squared deviations associated with the data value of \(9.\) We must "weight" these squared deviations by the frequency of their occurrence to account for the various twenty data values. In another new column, we form the products of \( \left( x_j - \mu \right)^2 \cdot f_j \) to accomplish this, and then proceed to "average" those weighted squared deviations:
Table \(\PageIndex{3}\): Computation of the variance
| \(x_j\) | \(f_j\) | \( \left( x_j - \mu \right)^2 \) | \( \left( x_j - \mu \right)^2 \cdot f_j\) |
|---|---|---|---|
| \( 5 \) | \( 2 \) | \( 4 \) | \( 4 \cdot 2 = 8 \) |
| \( 6 \) | \( 6 \) | \( 1 \) | \( 1 \cdot 6 = 6 \) |
| \( 7 \) | \( 5 \) | \( 0 \) | \( 0 \cdot 5 = 0 \) |
| \( 8 \) | \( 4 \) | \( 1 \) | \( 1 \cdot 4 = 4 \) |
| \( 9 \) | \( 3 \) | \( 4 \) | \( 4 \cdot 3 = 12 \) |
| Totals: | \( \sum f_j = 20\) | \( \sum \left( x_j - \mu \right)^2 \cdot f_j = 30\) | |
| Variance: | \( \sigma^2=\frac{\sum\left[\left( x_j - \mu \right)^2 \cdot f_j\right]}{\sum f_j }=\frac{30}{20}=1.5 \) |
As shown in the last two rows above, with our weighted squared deviations determined, we can find a meaningful average by summing our squared deviations and dividing by the number of data values involved. We have a variance measure of \( \sigma ^2\( \)=1.5\) in the bottom right table cell. We can find the standard deviation by taking the square root of our variance: \( \sigma\) \(= \sqrt{\sigma^2}\) \(= \sqrt{1.5}\) \(\approx 1.2247.\) We note that our calculation work was for population data. If the table referenced sample data, we would have divided by \( \sum (f_j) - 1 \) instead on the last computation:
Variance and Standard Deviation from a Frequency Distribution
\[ \text{Variance for sample data: }s^{2} = \frac{\sum\left[\left( x_j - \bar{x} \right)^2 \cdot f_j\right]}{\sum{(f_j)} -1 } \nonumber\]
\[ \text{Standard Deviation for sample data: }s = \sqrt{\frac{\sum\left[\left( x_j - \bar{x} \right)^2 \cdot f_j\right]}{\sum{(f_j)} -1 }} = \sqrt{s^{2}} \nonumber\]
\[ \text{Variance for population data: } \sigma^{2} = \frac{\sum\left[\left( x_j - \mu \right)^2 \cdot f_j\right]}{\sum f_j } \nonumber\]
\[ \text{Standard Deviation for population data: } \sigma = \sqrt{\frac{\sum\left[\left( x_j - \mu \right)^2 \cdot f_j\right]}{\sum f_j}} = \sqrt{\sigma^{2}} \nonumber\]
As mentioned, working in a spreadsheet will often make the computation quicker and easier, especially when working with such columns of information.
The frequency table from Section \(2.1\) shows thirty student scores (discrete 10-point scale) for an assignment.
Table \(\PageIndex{4}\): Student quiz score data
| Student Score | Frequency |
|---|---|
| \( 3 \) | \( 1 \) |
| \( 4 \) | \( 1 \) |
| \( 5 \) | \( 3 \) |
| \( 6 \) | \( 5 \) |
| \( 7 \) | \( 5 \) |
| \( 8 \) | \( 7 \) |
| \( 9 \) | \( 5 \) |
| \( 10 \) | \( 3 \) |
Find the range, variance, and standard deviation of this grouped (non-interval) data. Assume the data is a sample from a larger population.
- Answer
-
The table shows that the minimum data value is \(3\) and the maximum data value is \(10\). Because \(10 - 3\) \(= 7,\) the range is a score difference of \(7.\)
Next, we determine the variance by averaging the squared deviations from the mean, once weighted by the frequency counts. Since this is sample data, we also remember to divide by one less in the averaging step. In the previous section, we found the mean of this distribution to be \( \bar{x}\) \(= \frac{ \sum \left( x_j \cdot f_j \right) }{\sum f_j}\) \(= \frac{218}{30}\) \(\approx 7.2667.\) We can construct the deviations from the mean and square those as the first step. Again, it becomes imperative that we not get distracted by the messy decimals we compute in our work. Keep focusing on what we measure in the computational work (squared deviations from the mean to be averaged) and calculate it accurately.
Table \(\PageIndex{5}\): Computation of square deviations from the mean
\(x_j\) \(f_j\) \( \left( x_j - \mu \right)^2 \) \( 3 \) \( 1 \) \( \left( 3 - 7.2667 \right) ^2 \approx 18.2044 \) \( 4 \) \( 1 \) \( \left( 4 - 7.2667 \right) ^2 \approx 10.6711\) \( 5 \) \( 3 \) \( \left( 5 - 7.2667 \right) ^2 \approx 5.1378\) \( 6 \) \( 5 \) \( \left( 6 - 7.2667 \right) ^2 \approx 1.6044 \) \( 7 \) \( 5 \) \( \left( 7 - 7.2667 \right) ^2 \approx 0.0711\) \( 8 \) \( 7 \) \( \left( 8 - 7.2667 \right) ^2 \approx 0.5378 \) \( 9 \) \( 5 \) \( \left( 9 - 7.2667 \right) ^2 \approx 3.0044\) \( 10 \) \( 3 \) \( \left( 10 - 7.2667 \right) ^2 \approx 7.4711\) Totals: \( \sum f_j = 30\) Next, we weight our various squared deviations by their frequency of occurrence, forming the products of \( \left( x_j - \mu \right)^2 \cdot f_j \) to accomplish this:
Table \(\PageIndex{6}\): Computation of variance
\(x_j\) \(f_j\) \( \left( x_j - \mu \right)^2 \) \( \left( x_j - \mu \right)^2 \cdot f_j\) \( 3 \) \( 1 \) \( \left( 3 - 7.2667 \right) ^2 \approx 18.2044 \) \( 18.2044 \cdot 1 \approx 18.2044 \) \( 4 \) \( 1 \) \( \left( 4 - 7.2667 \right) ^2 \approx 10.6711\) \( 10.6711 \cdot 1 \approx 10.6711 \) \( 5 \) \( 3 \) \( \left( 5 - 7.2667 \right) ^2 \approx 5.1378\) \( 5.1378 \cdot 3 \approx 15.4133 \) \( 6 \) \( 5 \) \( \left( 6 - 7.2667 \right) ^2 \approx 1.6044 \) \( 1.6044 \cdot 5 \approx 8.0222 \) \( 7 \) \( 5 \) \( \left( 7 - 7.2667 \right) ^2 \approx 0.0711 \) \( 0.0711 \cdot 5 \approx 0.3556 \) \( 8 \) \( 7 \) \( \left( 8 - 7.2667 \right) ^2 \approx 0.5378 \) \( 0.5378 \cdot 7 \approx 3.7645 \) \( 9 \) \( 5 \) \( \left( 9 - 7.2667 \right) ^2 \approx 3.0044 \) \( 3.0044 \cdot 5 \approx 15.0222 \) \( 10 \) \( 3 \) \( \left( 10 - 7.2667 \right) ^2 \approx 7.4711 \) \( 7.4711 \cdot 3 \approx 22.4133 \) Totals: \( \sum f_j = 30\) Variance: \( s = \frac{\sum\left[\left( x_j - \mu \right)^2 \cdot f_j\right]}{\sum{(f_j)} - 1 } \approx 3.2368 \) Again, our last row of the table shows the "averaging" of those weighted squared variations when working with sample data. If the data were given as population data, we would have divided by the sum of the frequencies instead of one less than that sum. This would have resulted in a slightly different value of \( \sigma ^2\) \(\approx 3.1289.\) When calculating, we must vigilantly remember the difference between sample and population variance. These data measures are distinct and continue to emphasize one, among other, reasons for knowing if the data is sample data or population data. As shown by the bottom right measure in the table, this grouped sample data has a variance measure of \( s^{2}\) \(\approx 3.2368.\) The sample standard deviation measure is: \( s \) \(= \sqrt{s^{2}}\) \(\approx \sqrt{3.2368}\) \(\approx 1.7991.\) We can compare this result with the calculated variance for the ungrouped data set to see that we have produced the same measure.
Range, Variance, and Standard Deviation of Grouped (non-interval) Data in a Relative Frequency Table
What must we do to measure the variation of the data if, instead of a frequency distribution table, we have a relative frequency distribution of population data? The approach presented here only produces valid measures in population data since the relative frequency measures do not always disclose the sample size. Recall the sample size is essential for the computation of the sample variance as we must use \(n-1\) in our averaging step. We start with the same example of twenty quiz scores.
| Quiz Scores | Relative Frequency \(P(x_j)\) |
|---|---|
| \( 5 \) | \(\frac{2}{20}=10\%\) |
| \( 6 \) | \(\frac{2}{20}=30\%\) |
| \( 7 \) | \(\frac{5}{20}=25\%\) |
| \( 8 \) | \(\frac{4}{20}=20\%\) |
| \( 9 \) | \(\frac{3}{20}=15\%\) |
| Totals: | \(\sum P(x_j) = 100\%\) |
Again, we can easily find the range--the table shows the minimum data value is \(5\) and the maximum data value is \( 9, \) leading us to a range of \(9 - 5\) \(= 4.\)
Next, we use the same ideas as above to determine the variance and standard deviation of the data from this table. We need to find the average squared deviations of the data values from the mean. In Section \(2.8,\) we found the mean of this relative frequency distribution to be \( \mu\) \(= \sum \left( x_j \cdot P(x_j) \right)\) \(= 7.\) We will add a column to our table to create the squared deviations from the mean.
Table \(\PageIndex{7}\): Computation of the squared deviations from the mean
| \(x_j\) | \( P(x_j) \) | \((x_j - \mu )^2\) |
|---|---|---|
| \( 5 \) | \(\frac{2}{20}=10\%\) | \(( 5 - 7 )^2 =4\) |
| \( 6 \) | \(\frac{2}{20}=30\%\) | \((6 - 7)^2 =1\) |
| \( 7 \) | \(\frac{5}{20}=25\%\) | \((7 - 7)^2 =0\) |
| \( 8 \) | \(\frac{4}{20}=20\%\) | \((8 - 7)^2 =1\) |
| \( 9 \) | \(\frac{3}{20}=15\%\) | \((9 - 7)^2 =4\) |
| Totals: | \(\sum P(x_j) = 100\%\) |
Before we can average these squared deviation measures, we must weight these squared deviations by the relative frequency of occurrence to account for the fact that some data values, such as the \(6,\) occur with different relative frequency than others, such as the \(9.\) To do so, we form a new column for the products of \( \left( x_j - \mu \right)^2 \cdot P(x_j) \) and then proceed to "aver

## Match 1.36 — LibreTexts: 2.4F: Analyzing Data and Drawing Conclusions
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://socialsci.libretexts.org/Courses/Collin_College/Introduction_to_Sociology/02%3A_Sociological_Research/2.04%3A_The_Research_Process/2.4F%3A_Analyzing_Data_and_Drawing_Conclusions

2.4F: Analyzing Data and Drawing Conclusions
-
- Last updated
- Save as PDF
- Anonymous
- LibreTexts
Data analysis in sociological research aims to identify meaningful sociological patterns.
Learning Objectives
- Compare and contrast the analysis of quantitative vs. qualitative data
Key Points
- Analysis of data is a process of inspecting, cleaning, transforming, and modeling data with the goal of highlighting useful information, suggesting conclusions, and supporting decision making. Data analysis is a process, within which several phases can be distinguished.
- One way in which analysis can vary is by the nature of the data. Quantitative data is often analyzed using regressions. Regression analyses measure relationships between dependent and independent variables, taking the existence of unknown parameters into account.
- Qualitative data can be coded–that is, key concepts and variables are assigned a shorthand, and the data gathered are broken down into those concepts or variables. Coding allows sociologists to perform a more rigorous scientific analysis of the data.
- Sociological data analysis is designed to produce patterns. It is important to remember, however, that correlation does not imply causation; in other words, just because variables change at a proportional rate, it does not follow that one variable influences the other.
- Without a valid design, valid scientific conclusions cannot be drawn. Internal validity concerns the degree to which conclusions about causality can be made. External validity concerns the extent to which the results of a study are generalizable.
Key Terms
- correlation : A reciprocal, parallel or complementary relationship between two or more comparable objects.
- causation : The act of causing; also the act or agency by which an effect is produced.
- Regression analysis : In statistics, regression analysis includes many techniques for modeling and analyzing several variables, when the focus is on the relationship between a dependent variable and one or more independent variables. More specifically, regression analysis helps one understand how the typical value of the dependent variable changes when any one of the independent variables is varied, while the other independent variables are held fixed.
The Process of Data Analysis
Analysis of data is a process of inspecting, cleaning, transforming, and modeling data with the goal of highlighting useful information, suggesting conclusions, and supporting decision making. In statistical applications, some people divide data analysis into descriptive statistics, exploratory data analysis (EDA), and confirmatory data analysis (CDA). EDA focuses on discovering new features in the data and CDA focuses on confirming or falsifying existing hypotheses. Predictive analytics focuses on the application of statistical or structural models for predictive forecasting or classification. Text analytics applies statistical, linguistic, and structural techniques to extract and classify information from textual sources, a species of unstructured data.
Data analysis is a process, within which several phases can be distinguished. The initial data analysis phase is guided by examining, among other things, the quality of the data (for example, the presence of missing or extreme observations), the quality of measurements, and if the implementation of the study was in line with the research design. In the main analysis phase, either an exploratory or confirmatory approach can be adopted. Usually the approach is decided before data is collected. In an exploratory analysis, no clear hypothesis is stated before analyzing the data, and the data is searched for models that describe the data well. In a confirmatory analysis, clear hypotheses about the data are tested.
Regression Analysis
The type of data analysis employed can vary. One way in which analysis often varies is by the quantitative or qualitative nature of the data.
Quantitative data can be analyzed in a variety of ways, regression analysis being among the most popular. Regression analyses measure relationships between dependent and independent variables, taking the existence of unknown parameters into account. More specifically, regression analysis helps one understand how the typical value of the dependent variable changes when any one of the independent variables is varied, while the other independent variables are held fixed.
A large body of techniques for carrying out regression analysis has been developed. In practice, the performance of regression analysis methods depends on the form of the data generating process and how it relates to the regression approach being used. Since the true form of the data-generating process is generally not known, regression analysis often depends to some extent on making assumptions about this process. These assumptions are sometimes testable if a large amount of data is available. Regression models for prediction are often useful even when the assumptions are moderately violated, although they may not perform optimally. However, in many applications, especially with small effects or questions of causality based on observational data, regression methods give misleading results.
Coding
Qualitative data can involve coding–that is, key concepts and variables are assigned a shorthand, and the data gathered is broken down into those concepts or variables. Coding allows sociologists to perform a more rigorous scientific analysis of the data. Coding is the process of categorizing qualitative data so that the data becomes quantifiable and thus measurable. Of course, before researchers can code raw data such as taped interviews, they need to have a clear research question. How data is coded depends entirely on what the researcher hopes to discover in the data; the same qualitative data can be coded in many different ways, calling attention to different aspects of the data.
Sociological Data Analysis
Sociological data analysis is designed to produce patterns. It is important to remember, however, that correlation does not imply causation; in other words, just because variables change at a proportional rate, it does not follow that one variable influences the other.
Correlation, Causation, and Spurious Relationships : This mock newscast gives three competing interpretations of the same survey findings and demonstrates the dangers of assuming that correlation implies causation.
Conclusions
In terms of the kinds of conclusions that can be drawn, a study and its results can be assessed in multiple ways. Without a valid design, valid scientific conclusions cannot be drawn. Internal validity is an inductive estimate of the degree to which conclusions about causal relationships can be made (e.g., cause and effect), based on the measures used, the research setting, and the whole research design. External validity concerns the extent to which the (internally valid) results of a study can be held to be true for other cases, such as to different people, places, or times. In other words, it is about whether findings can be validly generalized. Learning about and applying statistics (as well as knowing their limitations) can help you better understand sociological research and studies. Knowledge of statistics helps you makes sense of the numbers in terms of relationships, and it allows you to ask relevant questions about sociological phenomena.
