# Source pack — subjects/math/expert/complex-analysis
Lesson title: Complex Analysis
Level: expert
Match confidence: 3.03

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.03 — LibreTexts: 3.9: Exercise- A More Complex Analysis
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://socialsci.libretexts.org/Bookshelves/Psychology/Book%3A_Applied_Event-Related_Potential_Data_Analysis_(Luck)/03%3A_Processing_Multiple_Participants_in_the_ERP_CORE_N400_Experiment/3.09%3A_Exercise-_A_More_Complex_Analysis

3.9: Exercise- A More Complex Analysis
-
- Last updated
- Save as PDF
In this exercise, we’re going to repeat the N400 analysis from the previous exercises, but we’re going to make it more complex by measuring and analyzing the N400 at multiple electrode sites. We’ll set this up with two electrode factors: laterality (left hemisphere, midline, and right hemisphere) and anterior-posterior (frontal, central, and parietal). That is, we’ll obtain scores from F3, Fz, F4, C3, Cz, C4, P3, Pz, and P4. When we combine this with the relatedness factor, this will give us a factorial design with three total factors. We won’t include CPz in these analyses because we don’t have electrodes at CP3 and CP4 and we don’t want an unbalanced design.
Launch the Measurement Tool again and set it up exactly as before (Screenshot 3.7) except for the list of channels. If you click the Browse button next to the text box for the channels, you’ll be able to select the nine electrode sites that we want. After you’ve selected them, click OK to go back to the Measurement Tool. You should now see 2 5 7 13 16 17 21 22 24 in the text box. These are the channels we want. You should also change the name of the output file to be mean_amplitude_multiple_channels.txt . Use the Viewer to make sure that everything looks OK, and then click RUN in the Measurement Tool.
Now open the mean_amplitude_multiple_channels.txt file in the Matlab text editor. The text editor doesn’t deal with the tabs very well, so you might want to import the file into Excel instead. Now we have 19 columns: 9 channels x 2 bins plus the ERPset column. Unfortunately, the channels are in the order that they appear in the ERPsets, which is not very convenient. If you’re not sure whether the amplitude scores are correct, you can launch the Measurement Tool again and use the Viewer to see the single-subject scores.
Once you’ve verified that the scores are correct, you can enter the data into a statistical analysis. You should use a 3-way repeated-measures ANOVA with factors of relatedness, laterality, and anterior-posterior. I ran this ANOVA in JASP, and the results are shown in Screenshot 3.9.
Again, start by looking at the descriptive statistic and make sure they match the grand average waveforms in Screenshot 3.4. For example, in both cases the amplitude for the related trials increases from the frontal to the central and parietal channels, and it tends to be larger for the midline and right-hemisphere channels than for the left-hemisphere channels. You can also see the basic N400 effect in both the grand average waveforms and the group means: the voltage is more negative (less positive) for the unrelated targets than for the related targets.
If you look at the F and p values, you’ll see that the main effect of relatedness (related vs. unrelated) was significant at the p < .001 level. The laterality and anterior-posterior main effects were also significant, and these factors both interacted significantly with relatedness. That is, the difference between related and unrelated words was largest at the sites where the voltage was largest. This pattern of interactions is exactly what would be expected given the multiplicative relationship between the magnitude of an internal ERP generator and the observed scalp distribution (see Chapter 10 in Luck, 2014).
You’ve now completed a fairly sophisticated analysis of the N400 experiment. Congratulations! That was a lot of steps, and it took us two chapters to get to this point.
However, I should note that I don’t generally recommend scoring a component from multiple sites and including electrode site factors in the statistical analysis. The reasoning is described in the text box below. Sometimes it is justifiable, such as when your scientific hypothesis leads to a prediction of different effects over the left and right hemispheres. But unless you have a real reason to compare the effects across electrode sites, it’s usually better to limit your analysis to a single site or create a waveform that averages across multiple sites. We’ll explore the latter option in the next exercise.
Minimizing the Number of Factors in an Analysis
The problem with including one or more electrode site factors is that it leads to a large number of statistical tests, increasing the likelihood that you’ll get one or more significant effects that are a result of random noise in the data. Look at the table of statistics at the top of Screenshot 3.9—how many p values do you see? Seven!
Ordinarily, you would expect a 5% probability that an effect will be significant (p < .05) when the null hypothesis is true. However, if the null hypothesis were true for all seven of these tests, the chance that one or more would be significant (p < .05) would be greater than 30%!
As we increase the number of factors in an ANOVA, the number of main effects and interactions skyrockets, and the odds that one or more will be significant by chance becomes extremely high (Cramer et al., 2015; Frane, 2021). For example, in a 5-way ANOVA, you are more likely than not to obtain a significant-but-bogus-effect. As a result, it is difficult to trust the results of such analyses. My general advice is therefore to minimize the number of factors (see Luck & Gaspelin, 2017 for a detailed discussion).

## Match 2.07 — LibreTexts: 8.3: Polar Form of Complex Numbers
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Precalculus/Book%3A_Precalculus__An_Investigation_of_Functions_(Lippman_and_Rasmussen)/08%3A_Further_Applications_of_Trigonometry/8.03%3A_Polar_Form_of_Complex_Numbers

8.3: Polar Form of Complex Numbers
From previous classes, you may have encountered “imaginary numbers” – the square roots of negative numbers – and, more generally, complex numbers which are the sum of a real number and an imaginary number. While these are useful for expressing the solutions to quadratic equations, they have much richer applications in electrical engineering, signal analysis, and other fields. Most of these more advanced applications rely on properties that arise from looking at complex numbers from the perspective of polar coordinates.
We will begin with a review of the definition of complex numbers.
Definition: IMAGINARY NUMBER
The most basic complex number is \(i\), defined to be \(i = \sqrt{-1}\), commonly called an imaginary number . Any real multiple of \(i\) is also an imaginary number.
Example \(\PageIndex{1}\)
Simplify \(\sqrt{-9}\).
Solution
We can separate \(\sqrt{-9}\) as \(\sqrt{9}\)\(\sqrt{-1}\). We can take the square root of 9, and write the square root of -1 as \(i\).
\[\sqrt{-9} = \sqrt{9}\sqrt{-1} = 3i\nonumber\]
A complex number is the sum of a real number and an imaginary number.
Definition: COMPLEX NUMBER
A complex number is a number \(z = a + bi\), where \(a\) and \(b\) are real numbers
\(a\) is the real part of the complex number
\(b\) is the imaginary part of the complex number
\[i = \sqrt{-1}\nonumber\]
Plotting a complex number
We can plot real numbers on a number line. For example, if we wanted to show the number 3, we plot a point:
To plot a complex number like \(3 − 4i\), we need more than just a number line since there are two components to the number. To p lot this number, we need two number lines, crossed to form a complex plane.
COMPLEX PLANE
In the complex plane , the horizontal axis is the real axis and the vertical axis is the imaginary axis.
Example \(\PageIndex{2}\)
Plot the number \(3 − 4i\) on the complex plane.
Solution
The real part of this number is 3, and the imaginary part is - 4. To plot this, we draw a point 3 units to the right of the origin in the horizontal direction and 4 units down in the vertical direction.
Because this is analogous to the Cartesian coordinate system for plotting points, we can think about plotting our complex number \(z = a + bi\) as if we were plotting the point (\(a\), \(b\)) in Cartesian coordinates. Sometimes people write complex numbers as \(z = x + yi\) to highlight this relation.
Arithmetic on Complex Numbers
Before we dive into the more complicated uses of complex numbers, let’s make sure we remember the basic arithmetic involved. To add or subtract complex numbers, we simply add the like terms, combining the real parts and combining the imaginary parts.
Example \(\PageIndex{3}\)
Add \(3 - 4i\) and \(2 + 5i\).
Solution
Adding \((3 - 4i) + (2 + 5i)\), we add the real [arts and the imaginary parts
\[3 + 2 - 4i + 5i\nonumber\]
\[5 + i\nonumber\]
Exercise \(\PageIndex{1}\)
Subtract \(2 + 5i\) from \(3 - 4i\).
- Answer
-
\[(3 - 4i) - (2 + 5i) = 1 - 9i\nonumber\]
We can also multiply and divide complex numbers.
Example \(\PageIndex{4}\)
Multiply: \(4(2 + 5i)\).
Solution
To multiply the complex number by a real number, we simply distribute as we would when multiplying polynomials.
\[4 (2 + 5i)\nonumber\]Distribute
\[= 4 \cdot 2 + 4 \cdot 5i\nonumber\]Simplify
\[= 8 + 20i\nonumber\]
Example \(\PageIndex{5}\)
Multiply: \(2 - 3i)(1 + 4i)\).
Solution
To multiply two complex numbers, we expand the product as we would with polynomials (the process commonly called FOIL – “first outer inner last”).
\[(2 - 3i)(1 + 4i)\nonumber\]Expand
\[= 2 + 8i - 3i - 12i^2\nonumber\] Since \(i = \sqrt{-1}\), \(i^2 = -1\)
\[= 2 + 8i - 3i - 12(-1)\nonumber\] Simplify
\[= 14 + 5i\nonumber\]
Example \(\PageIndex{6}\)
Divide \(\dfrac{(2 + 5i)}{(4 - i)}\).
Solution
To divide two complex numbers, we have to devise a way to write this as a complex number with a real part and an imaginary part.
We start this process by eliminating the complex number in the denominator. To do this, we multiply the numerator and denominator by a special complex number so that the result in the denominator is a real number. The number we need to multiply by is called the complex conjugate , in which the sign of the imaginary part is changed. Here, \(4 + i\) is the complex conjugate of \(4 – i\). Of course, obeying our algebraic rules, we must multiply by \(4 + i\) on both the top and bottom.
\[\dfrac{(2 + 5i)}{(4 - i)} \cdot \dfrac{(4 + i)}{(4 + i)}\nonumber\]
In the numerator,
\[(2 + 4i)(4 + i)\nonumber\]Expand
\[= 8 + 20i + 2i + 5i^2\nonumber\]Since \(i = \sqrt{-1}\), \(i^2 = -1\)
\[= 8 + 20i + 2i + 5(-1)\nonumber\]Simplify
\[= 3 + 22i\nonumber\]
Multiplying the denominator
\[(4 - i) ( 4 + i)\nonumber\]Expand
\[(16 - 4i + 4i - i^2)\nonumber\]Since \(i = \sqrt{-1}\), \(i^2 = -1\)
\[(16 - (-1))\nonumber\]
\[=17\nonumber\]
Combining this we get \[\dfrac{3 + 22i}{17} = \dfrac{3}{17} + \dfrac{22i}{17}\nonumber\]
Exercise \(\PageIndex{2}\)
Multiply \(3 - 4i\) and \(2 + 3i\).
- Answer
-
\[(3 - 4i) (2 + 3i) = 18 + i\nonumber\]
With the interpretation of complex numbers as points in a plane, which can be related to the Cartesian coordinate system, you might be starting to guess our next step – to refer to this point not by its horizontal and vertical components, but using its polar location, given by the distance from the origin and an angle.
Polar Form of Complex Numbers
Remember, because the complex plane is analogous to the Cartesian plane that we can think of a complex number \(z = x + yi\) as analogous to the Cartesian point (\(x\), \(y\)) and recall how we converted from (\(x\), \(y\)) to polar (\(r\), \(\theta\)) coordinates in the last section.
Bringing in all of our old rules we remember the following:
\[\cos(\theta) = \dfrac{x}{r}\quad x = r\cos(\theta)\nonumber\]
\[\sin(\theta) = \dfrac{y}{r}\quad y = r\sin(\theta)\nonumber\]
\[\tan(\theta) = \dfrac{y}{x}\quad x^2 + y^2 = r^2\nonumber\]
With this in mind, we can write \(z = x + yi = r\cos(\theta) + ir \sin(\theta)\).
Example \(\PageIndex{7}\)
Express the complex number \(4i\) using polar coordinates.
Solution
On the complex plane, the number \(4i\) is a distance of 4 from the origin at an angle of \(\dfrac{\pi}{2}\), so \(4i = 4\cos(\dfrac{pi}{2}) + i 4\sin(\dfrac{\pi}{2})\)
Note that the real part of this complex number is 0.
In the \(18^{\text{th}}\) century, Leonhard Euler demonstrated a relationship between exponential and trigonometric functions that allows the use of complex numbers to greatly simplify some trigonometric calculations. While the proof is beyond the scope of this class, you will likely see it in a later calculus class.
Definition: POLAR FORM OF A COMPLEX NUMBER AND EULER'S FORMULA
The polar form of a complex number is \[z = r\cos(\theta) + ir\sin(\theta)\]
An alternate form, which will be the primary one used, is \(z = re^{i\theta}\)
Euler's Formula states \[re^{i\theta} = r\cos(\theta) + ir\sin(\theta)\]
Similar to plotting a point in the polar coordinate system we need \(r\) and \(\theta\) to find the polar form of a complex number.
Example \(\PageIndex{8}\)
Find the polar form of the complex number -8.
Solution
Treating this is a complex number, we can write it as \(-8 + 0i\).
Plotted in the complex plane, the number -8 is on the negative horizontal axis, a distance of 8 from the origin at an angle of \(\pi\) from the positive horizontal axis.
The polar form of the number -8 is \(8e^{i\pi}\)
Plugging \(r = 8\) and \(\theta = \pi\) back into Euler's formula, we have:
\[8e^{i\pi} = 8\cos(\pi) + 8i\sin(\pi) = -8 + 0i = -8\nonumber\]as desired.
Example \(\PageIndex{9}\)
Find the polar form of \(-4 + 4i\).
Solution
On the complex plane, this complex number would correspond to the point (-4, 4) on a Cartesian plane. We can find the distance \(r\) and angle \(\theta\) as we did in the last section.
\[r^2 = x^2 + y^2\nonumber\]
\[r^2 = (-4)^2 + 4^2\nonumber\]
\[r = \sqrt{32} = 4\sqrt{2}\nonumber\]
To find \(\theta\), we can use \(\cos(\theta) = \dfrac{x}{r}\)
\[\cos(\theta) = \dfrac{-4}{4\sqrt{2}} = -\dfrac{\sqrt{2}}{2}\nonumber\]
This is one of known cosine values, and since the point is in the second quadrant, we can conclude that \(\theta = \dfrac{3\pi}{4}\).
The polar form of this complex number is \(4\sqrt{2}e^{\dfrac{3\pi}{4} i}\)
Example \(\PageIndex{10}\)
Find the polar form of \(-3 -5i\).
Solution
On the complex plane, this complex number would correspond to the point (-3, -5) on a Cartesian plane. First, we find \(r\).
\[r^2 = x^2 + y^2\nonumber\]
\[r^2 = (-3)^2 + (-5)^2\nonumber\]
\[r = \sqrt{34}\nonumber\]
To find \(\theta\), we might use \(\tan(\theta) = \dfrac{y}{x}\)
\[\tan(\theta) = \dfrac{-5}{-3}\nonumber\]
\[\theta = \tan^{-1} (\dfrac{5}{3}) = 1.0304\nonumber\]
This angle is in the wrong quadrant, so we need to find a second solution. For tangent, we can find that by adding \(\pi\).
\[\theta = 1.0304 + \pi = 4.1720\nonumber\]
The polar form of this complex number is \(\sqrt{34}e^{4.1720i}\).
Exercise \(\PageIndex{3}\)
Write \(\sqrt{3} + i\) in polar form.
- Answer
-
\(\sqrt{3} + i\) would correspond with the point \((\sqrt{3}, 1)\) in the first quadrant.
\[r = \sqrt{\sqrt{3}^2 + 1^2} = \sqrt{4} = 2\nonumber\]
\[\sin(\theta) = \dfrac{1}{2}\text{, so }\theta = \dfrac{\pi}{6}\nonumber\]
\[\sqrt{3} + i\text{ in polar form is }2e^{i\pi/6}\nonumber\]
Example \(\PageIndex{11}\)
Write \(3e^{\dfrac{\pi}{6}i}\) in complex \(a + bi\) form.
Solution
\[3e^{\dfrac{\pi}{6}i} = 3\cos(\dfrac{\pi}{6}) + i3\sin(\dfrac{\pi}{6})\nonumber\]Evaluate the trig functions
\[= 3 \cdot \dfrac{\sqrt{3}}{2} + i 3 \cdot \dfrac{1}{2}\nonumber\]Simplify
\[= \dfrac{3\sqrt{3}}{2} + i\dfrac{3}{2}\nonumber\]
The polar form of a complex number provides a powerful way to compute powers and roots of complex numbers by using exponent rules you learned in algebra. To compute a power of a complex number, we:
1) Convert to polar form
2) Raise to the power, using exponent rules to simplify
3) Convert back to \(a + bi\) form, if needed
Example \(\PageIndex{12}\)
Evaluate \((-4 + 4i)^6\).
Solution
While we could multiply this number by itself five times, that would be very tedious. To compute this more efficiently, we can utilize the polar form of the complex number.
In an earlier example, we found that \(-4 + 4i = 4\sqrt{2}e^{\dfrac{3\pi}{4}i}\). Using this,
\[(-4 + 4i)^6\nonumber\]Writing the complex number in polar form
\[= (4\sqrt{2} e^{\dfrac{3\pi}{4}i})^6\nonumber\]Utilize the exponent rule \((ab)^m = a^m b^m\)
\[= (4\sqrt{2})^6 (e^{\dfrac{3\pi}{4}i})^6\nonumber\]On the second factor, use the rule \((a^m)^n = a^{mn}\)
\[= (4\sqrt{2})^6 e^{\dfrac{3\pi}{4}i \cdot 6}\nonumber\]Simplify
\[= 32768e^{\dfrac{2\pi}{2}i}\nonumber\]
At this point, we have found the power as a complex number in polar form. If we want the answer in standard \(a + bi\) form, we can utilize Euler’s formula.
\[32768e^{\dfrac{9\pi}{2}i} = 32768 \cos (\dfrac{9\pi}{2}) + i 32768\sin(\dfrac{9\pi}{2})\nonumber\]
Since \(\dfrac{9\pi}{2}\) is coterminal with \(\dfrac{\pi}{2}\), we can use our special angle knowledge to evaluate the sine and cosine.
\[32768 \cos (\dfrac{9\pi}{2}) + i32768 \sin (\dfrac{9\pi}{2}) = 32768(0) + i32768(1) = 32768i\nonumber\]
We have found that \(-4 + 4i)^6 = 32768i\).
The result of the process can be summarized by DeMoivre’s Theorem. This is a shorthand to using exponent rules.
DEMOIVRE'S THEOREM
If \[z = r(\cos(\theta) + i\sin(\theta))\], then for any integer, \[z^n = r^n (\cos(n\theta) + i\sin(n \theta))\]
We omit the proof, but note we can easily verify it holds in one case using Example 12:
\[(-4 + 4i)^6 = (4\sqrt{2})^6 (\cos(6 \cdot \dfrac{3\pi}{4} + i\sin(6 \cdot \dfrac{3\pi}{4})) = 32768 (\cos(\dfrac{9\pi}{2}) + i\sin(\dfrac{9\pi}{2})) = 32768i\nonumber\]
Example \(\PageIndex{13}\)
Evaluate \(\sqrt{9i}\).
Solution
To evaluate the square root of a complex number, we can first note that the square root is the same as having an exponent of \(\dfrac{1}{2}\): \[\sqrt{9i} = (9i)^{1/2}\nonumber\]
T

## Match 2.06 — LibreTexts: 4.7: Why Complex Numbers?
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Bookshelves/Mathematical_Physics_and_Pedagogy/Complex_Methods_for_the_Sciences_(Chong)/04%3A_Complex_Numbers/4.07%3A_Why_Complex_Numbers

4.7: Why Complex Numbers?
Here are some questions that might have occurred to you:
-
If we extend the concept of numbers to complex numbers, why stop here? Why not extend the concept further, and formulate other abstract number systems that are even more complicated than complex numbers?
-
Integers and real numbers have intuitive connections to the phenomena we experience in everyday life, such as the counting of discrete objects, or measuring lengths and weights. Complex numbers, however, seem like completely abstract concepts. Why should we study them?
As we have seen, complex numbers are appealing mathematical objects because they can be manipulated via the same rules of algebra as real numbers. We can add, subtract, multiply, and divide them (apart from division by zero), without running into any logical inconsistencies. One limitation is that complex numbers have no ordering (Section 4.4), so complex algebra only involves equations, not inequality relations.
One very important feature possessed by complex numbers and not real numbers is that the complex numbers are algebraically closed . This means that all complex polynomial equations have solutions in \(\mathbb{C}\) . The set of real numbers, \(\mathbb{R}\) , lacks this property: there are certain real algebraic equations, like \(x^2 + 1 = 0\) , which have no solution in \(\mathbb{R}\) . The “closure” property of \(\mathbb{C}\) is called the Fundamental Theorem of Algebra , which gives an idea of its importance. As a consequence, \(\mathbb{C}\) cannot be generalized to a more complicated number system via the same route used to extend \(\mathbb{R}\) into \(\mathbb{C}\) .
There do exist number systems more complicated than the complex numbers, which are formulated not by algebraic extension but by discarding one or more of the usual rules of algebra. The quaternions are a system of four-component numbers obeying an algebra that is non-commutative (i.e., \(ab = ba\) is not generally true). The octonions are an even more complicated system of eight-component numbers which are not only non-commutative but also non-associative (i.e., \((ab)c = a(bc)\) is not generally true). These and other still-more-complicated number systems have a few applications in physics and other fields, but are overall much less important than \(\mathbb{C}\) .
One big reason that complex numbers have proven to be so important and useful is that it’s easy to formulate a version of calculus for them. The study of smooth complex functions, and their derivatives and integrals, is called complex analysis . We will discuss this subject extensively later in the course. We shall see that complex analysis has important implications for the real calculus; for example, many real integrals can be easily solved by first generalizing them into complex integrals. By contrast, since quaternions and octonions are not commutative, the concept of “derivative” is tricky to define for these number systems, making it harder to formulate a useful calculus with them.
