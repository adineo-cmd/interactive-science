# Source pack — subjects/statistics/foundational/describing-data
Lesson title: Describing Data
Level: foundational
Match confidence: 2.07

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.07 — Statistics-WEB § 2.26 Follow the steps you used to graph a box-and-whisker plot for the data values shown:

0, 5, 5, 15, 30, 30, 45, 50, 50, 60, 75, 110, 140, 240, 330
2.5 | Measures of the Center of the Data
The center of a data set is also a way of describing location. The two most widely used measures of the center of the data
are the mean (average) and the median. To calculate the mean weight of 50 people, add the 50 weights together and divide
by 50. To find the median weight of the 50 people, order the data and find the number that splits the data into two equal
parts. The median is generally a better measure of the center when there are extreme values or outliers because it is not
affected by the precise numerical values of the outliers. The mean is the most common measure of the center.
NOTE
The words mean and average are often used interchangeably. The substitution of one word for the other is common
practice. The technical term is arithmetic mean and average is technically a center location. However, in practice
among non statisticians, average is commonly accepted for arithmetic mean.
When each value in the data set is not unique, the mean can be calculated by multiplying each distinct value by its frequency
and then dividing the sum by the total number of data values. The letter used to represent the sample mean is an x with a
bar over it (pronounced “x bar”): x¯ . The sample mean is a statistic.
The Greek letter μ (pronounced "mew") represents the population mean. The population mean is a parameter. One of the
requirements for the sample mean to be a good estimate of the population mean is for the sample taken to be truly random.
To see that both ways of calculating the mean are the same, consider the following sample:
1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 4
106
Chapter 2 | Descriptive Statistics
This OpenStax book is available for free at http://cnx.org/content/col30309/1.8

x¯ = 1 + 1 + 1 + 2 + 2 + 3 + 4 + 4 + 4 + 4 + 4
11
= 2.7
x¯ = 3(1) + 2(2) + 1(3) + 5(4)
11
= 2.7.
In the second example, the frequencies are 3(1) + 2(2) + 1(3) + 5(4).
You can quickly find the location of the median by using the expression n + 1
2
.
The letter n is the total number of data values in the sample. As discussed earlier, if n is an odd number, the median is the
middle value of the ordered data (ordered smallest to largest). If n is an even number, the median is equal to the two middle
values added together and divided by two after the data have been ordered. For example, if the total number of data values
is 97, then n + 1
2
= 97 + 1
2
= 49. The median is the 49th value in the ordered data. If the total number of data values is 100,
then n + 1
2
= 100 + 1
2
= 50.5. The median occurs midway between the 50th and 51st values. The location of the median and
the value of the median are not the same. The uppercase letter M is often used to represent the median. The next example
illustrates the location of the median and the value of the median.
Example 2.27
Data indicating the number of months a patient with a specific disease lives after taking a new antibody drug are
as follows (smallest to largest):
3, 4, 8, 8, 10, 11, 12, 13, 14, 15, 15, 16, 16, 17, 17, 18, 21, 22, 22, 24, 24, 25, 26, 26, 27, 27, 29, 29, 31, 32, 33,
33, 34, 34, 35, 37, 40, 44, 44, 47
Calculate the mean and the median.
Solution 2.27
The calculation for the mean is
x¯ = [3 + 4 + (8)(2) + 10 + 11 + 12 + 13 + 14 + (15)(2) + (16)(2) + (17)(2) + 18 + 21 + (22)(2) + (24)(2) + 25 + (26)(2)
+ (27)(2) + (29)(2) + 31 + 32 + (33)(2) + (34)(2) + 35 + 37 + 40 + (44)(2) + 47] / 40 = 23.6.
To find the median, M, first use the formula for the location. The location is
n + 1
2
= 40 + 1
2
= 20.5.
Start from the smallest value and count up; the median is located between the 20th and 21st values (the two 24s):
3, 4, 8, 8, 10, 11, 12, 13, 14, 15, 15, 16, 16, 17, 17, 18, 21, 22, 22, 24, 24, 25, 26, 26, 27, 27, 29, 29, 31, 32, 33,
33, 34, 34, 35, 37, 40, 44, 44, 47
M = 24 + 24
2
= 24
To find the mean and the median:
Clear list L1. Pres STAT 4:ClrList. Enter 2nd 1 for list L1. Press ENTER.
Enter data into the list editor. Press STAT 1:EDIT.
Put the data values into list L1.
Press STAT and arrow to CALC. Press 1:1-VarStats. Press 2nd 1 for L1 and then ENTER.
Press the down and up arrow keys to scroll.
x¯ = 23.6, M = 24
Chapter 2 | Descriptive Statistics
107

2.27 The following data show the number of months patients typically wait on a transplant list before getting surgery.
The data are ordered from smallest to largest. Calculate the mean and median.
3, 4, 5, 7, 7, 7, 7, 8, 8, 9, 9, 10, 10, 10, 10, 10, 11, 12, 12, 13, 14, 14, 15, 15, 17, 17, 18, 19, 19, 19, 21, 21, 22, 22, 23,
24, 24, 24, 24
Example 2.28
Suppose that in a small town of 50 people, one person earns $5,000,000 per year and the other 49 each earn
$30,000. Which is the better measure of the center: the mean or the median?
Solution 2.28
x¯ = 5, 000, 000 + 49(30, 000)
50
= 129,400
M = 30,000
There are 49 people who earn $30,000 and one person who earns $5,000,000.
The median is a better measure of the center than the mean because 49 of the values are 30,000 and one is
5,000,000. The 5,000,000 is an outlier. The 30,000 gives us a better sense of the middle of the data.
2.28 In a sample of 60 households, one house is worth $2,500,000. Half of the rest are worth $280,000, and all the
others are worth $315,000. Which is the better measure of the center: the mean or the median?
Another measure of the center is the mode. The mode is the most frequent value. There can be more than one mode in a
data set as long as those values have the same frequency and that frequency is the highest. A data set with two modes is
called bimodal.
Example 2.29
Statistics exam scores for 20 students are as follows:
50, 53, 59, 59, 63, 63, 72, 72, 72, 72, 72, 76, 78, 81, 83, 84, 84, 84, 90, 93
Find the mode.
Solution 2.29
The most frequent score is 72, which occurs five times. Mode = 72.

## Match 2.04 — OrganicChemistry-SAMPLE_9ADraVJ § 6.8 Describing a Reaction: Bond Dissociation Energies

We’ve just seen that heat is released (negative ΔH) when a bond is formed because the products are more stable
and have stronger bonds than the reactants. Conversely, heat is absorbed (positive ΔH) when a bond is broken
because the products are less stable and have weaker bonds than the reactants. The amount of energy needed to
break a given bond to produce two radical fragments when the molecule is in the gas phase at 25 °C is a quantity
called the bond strength, or bond dissociation energy (D).
Each specific bond has its own characteristic strength, and extensive tables of such data are available. For
example, a C−H bond in methane has a bond dissociation energy D = 439.3 kJ/mol (105.0 kcal/mol), meaning
that 439.3 kJ/mol must be added to break a C−H bond of methane to give the two radical fragments ·CH3 and
·H. Conversely, 439.3 kJ/mol of energy is released when a methyl radical and a hydrogen atom combine to form
methane. TABLE 6.3 lists some other bond strengths.
6.8 • Describing a Reaction: Bond Dissociation Energies
187

TABLE 6.3 Some Bond Dissociation Energies, D
Bond
D (kJ/mol)
Bond
D (kJ/mol)
Bond
D (kJ/mol)
H―H
436
(CH3)2CH―H
410
C2H5―CH3
370
H―F
570
(CH3)2CH―CI
354
(CH3)2CH―CH3
369
H―CI
431
(CH3)2CH―Br
299
(CH3)3C―CH3
363
H―Br
366
(CH3)3C―H
400
H2C═CH―CH3
426
H―I
298
(CH3)3C―CI
352
H2C═CHCH2―CH3
318
CI―CI
242
(CH3)3C―Br
293
H2C═CH2
728
Br―Br
194
(CH3)3C―I
227
427
I―I
152
H2C═CH―H
464
325
CH3―H
439
H2C═CH―CI
396
374
CH3―CI
350
H2C═CHCH2―H
369
HO―H
497
CH3―Br
294
H2C═CHCH2―CI
298
HO―OH
211
CH3―I
239
472
CH3O―H
440
CH3―OH
385
400
CH3S―H
366
CH3―NH2
386
375
C2H5O―H
441
C2H5―H
421
300
352
C2H5―CI
352
336
CH3CH2O―CH3
355
188
6 • An Overview of Organic Reactions
Access for free at openstax.org

TABLE 6.3 Some Bond Dissociation Energies, D
Bond
D (kJ/mol)
Bond
D (kJ/mol)
Bond
D (kJ/mol)
C2H5―Br
293
464
NH2―H
450
C2H5―I
233
―
558
H―CN
528
C2H5―OH
391
CH3―CH3
377
Think again about the connection between bond strengths and chemical reactivity. In an exothermic reaction,
more heat is released than is absorbed. But because making bonds in the products releases heat and breaking
bonds in the reactants absorbs heat, the bonds in the products must be stronger than the bonds in the reactants.
In other words, exothermic reactions are favored by products with strong bonds and by reactants with weak,
easily broken bonds.
Sometimes, particularly in biochemistry, reactive substances that undergo highly exothermic reactions, such
as ATP (adenosine triphosphate), are referred to as “energy-rich” or “high-energy” compounds. Such a label
doesn’t mean that ATP is special or different from other compounds, it only means that ATP has relatively weak
bonds that require a relatively small amount of heat to break, thus leading to a larger release of heat when a
strong new bond forms in a reaction. When a typical organic phosphate such as glycerol 3-phosphate reacts
with water, for instance, only 9 kJ/mol of heat is released (ΔH°′ = −9 kJ/mol), but when ATP reacts with water,
30 kJ/mol of heat is released (ΔH°′ = −30 kJ/mol). The difference between the two reactions is due to the fact
that the bond broken in ATP is substantially weaker than the bond broken in glycerol 3-phosphate. We’ll see the
metabolic importance of this reaction in later chapters.

## Match 1.56 — Statistics-WEB § 2.34 The following data show the different types of pet food that stores in the area carry:

6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12
Calculate the sample mean and the sample standard deviation to one decimal place using a TI-83+ or TI-84 calculator.
Standard deviation of Grouped Frequency Tables
Recall that for grouped data we do not know individual data values, so we cannot describe the typical value of the data with
precision. In other words, we cannot find the exact mean, median, or mode. We can, however, determine the best estimate of
the measures of center by finding the mean of the grouped data with the formula Mean of Frequency Table = ∑ fm
∑ f
,
where f = interval frequencies and m = interval midpoints.
Just as we could not find the exact mean, neither can we find the exact standard deviation. Remember that standard deviation
describes numerically the expected deviation a data value has from the mean. In simple English, the standard deviation
allows us to compare how unusual individual data are when compared to the mean.
Example 2.35
Find the standard deviation for the data in Table 2.34.
Class
Frequency, f
Midpoint, m
m2
x¯ 2
fm2
Standard Deviation
0–2
1
1
1
7.58
1
3.5
3–5
6
4
16
7.58
96
3.5
6–8
10
7
49
7.58
490
3.5
9–11
7
10
100
7.58
700
3.5
12–14
0
13
169
7.58
0
3.5
15–17
2
16
256
7.58
512
3.5
Table 2.34
For this data set, we have the mean, x¯ = 7.58, and the standard deviation, sx = 3.5. This means that a randomly
selected data value would be expected to be 3.5 units from the mean. If we look at the first class, we see that the
class midpoint is equal to one. This is almost two full standard deviations from the mean since 7.58 – 3.5 – 3.5
124
Chapter 2 | Descriptive Statistics
This OpenStax book is available for free at http://cnx.org/content/col30309/1.8

= .58. While the formula for calculating the standard deviation is not complicated, sx =
f(m − x¯ )
2
n − 1
, where sx
= sample standard deviation, x¯ = sample mean; the calculations are tedious. It is usually best to use technology
when performing the calculations.
2.35 Find the standard deviation for the data from the previous example:
Class
Frequency, f
0–2
1
3–5
6
6–8
10
9–11
7
12–14
0
15–17
2
Table 2.35
First, press the STAT key and select 1:Edit.
Figure 2.28
Input the midpoint values into L1 and the frequencies into L2.
Chapter 2 | Descriptive Statistics
125

Figure 2.29
Select STAT, CALC, and 1: 1-Var Stats.
Figure 2.30
Select 2nd, then 1, then, 2nd, then 2 Enter.
Figure 2.31
You will see displayed both a population standard deviation, σx, and the sample standard deviation, sx.
Comparing Values from Different Data Sets
As explained before, a z-score allows us to compare statistics from different data sets. If the data sets have different means
and standard deviations, then comparing the data values directly can be misleading.
•
For each data value, calculate how many standard deviations away from its mean the value is.
•
In symbols, the formulas for calculating z-scores become the following.
126
Chapter 2 | Descriptive Statistics
This OpenStax book is available for free at http://cnx.org/content/col30309/1.8

Sample
z = x −  x¯
s
Population
z = x −  μ
σ
Table 2.36
As shown in the table, when only a sample mean and sample standard deviation are given, the top formula is used. When
the population mean and population standard deviation are given, the bottom formula is used.
Example 2.36
Two students, John and Ali, from different high schools, wanted to find out who had the highest GPA when
compared to his school. Which student had the highest GPA when compared to his school?
Student
GPA
School Mean GPA
School Standard Deviation
John
2.85
3.0
.7
Ali
77
80
10
Table 2.37
Solution 2.36
For each student, determine how many standard deviations (#ofSTDEVs) his GPA is away from the average, for
his school. Pay careful attention to signs when comparing and interpreting the answer.
z = # of STDEVs =
value – mean
standard deviation = x + μ
σ
For John, z = # ofSTDEVs = 2.85 – 3.0
.7
= − 0.21
For Ali, z = # ofSTDEVs = 77 − 80
10
= − 0.3
John has the better GPA when compared to his school because his GPA is 0.21 standard deviations below his
school's mean, while Ali's GPA is .3 standard deviations below his school's mean.
John's z-score of –.21 is higher than Ali's z-score of –.3. For GPA, higher values are better, so we conclude that
John has the better GPA when compared to his school. The z-score representing John's score does not fall as far
below the mean as the z-score representing Ali's score.
Chapter 2 | Descriptive Statistics
127

2.36 Two swimmers, Angie and Beth, from different teams, wanted to find out who had the fastest time for the
50-meter freestyle when compared to her team. Which swimmer had the fastest time when compared to her team?
Swimmer
Time (seconds)
Team Mean Time
Team Standard Deviation
Angie
26.2
27.2
.8
Beth
27.3
30.1
1.4
Table 2.38
The following lists give a few facts that provide a little more insight into what the standard deviation tells us about the
distribution of the data.
For any data set, no matter what the distribution of the data is, the following are true:
•
At least 75 percent of the data is within two standard deviations of the mean.
•
At least 89 percent of the data is within three standard deviations of the mean.
•
At least 95 percent of the data is within 4.5 standard deviations of the mean.
•
This is known as Chebyshev's Rule.
A bell-shaped distribution is one that is normal and symmetric, meaning the curve can be folded along a line of symmetry
drawn through the median, and the left and right sides of the curve would fold on each other symmetrically.. With a bell-
shaped distribution, the mean, median, and mode are all located at the same place.
For data having a distribution that is bell-shaped and symmetric, the following are true:
•
Approximately 68 percent of the data is within one standard deviation of the mean.
•
Approximately 95 percent of the data is within two standard deviations of the mean.
•
More than 99 percent of the data is within three standard deviations of the mean.
•
This is known as the Empirical Rule.
•
It is important to note that this rule applies only when the shape of the distribution of the data is bell-shaped and
symmetric; we will learn more about this when studying the Normal or Gaussian probability distribution in later
chapters.
2.8 | Descriptive Statistics
128
Chapter 2 | Descriptive Statistics
This OpenStax book is available for free at http://cnx.org/content/col30309/1.8

