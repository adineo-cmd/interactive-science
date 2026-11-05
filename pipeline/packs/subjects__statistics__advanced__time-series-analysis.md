# Source pack — subjects/statistics/advanced/time-series-analysis
Lesson title: Time Series Analysis
Level: advanced
Match confidence: 2.36

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.36 — LibreTexts: 7.2: Analysis Techniques for Series Parallel Resistor Circuits
License: GNU Free Documentation License · https://workforce.libretexts.org/Bookshelves/Electronics_Technology/Book%3A_Electric_Circuits_I_-_Direct_Current_(Kuphaldt)/07%3A_Series-parallel_Combination_Circuits/7.02%3A_Analysis_Techniques_for_Series_Parallel_Resistor_Circuits

7.2: Analysis Techniques for Series Parallel Resistor Circuits
Process of Series-Parallel Resistor Circuit Analysis
The goal of series-parallel resistor circuit analysis is to be able to determine all voltage drops, currents, and power dissipations in a circuit. The general strategy to accomplish this goal is as follows:
- Step 1: Assess which resistors in a circuit are connected together in simple series or simple parallel.
- Step 2: Re-draw the circuit, replacing each of those series or parallel resistor combinations identified in step 1 with a single, equivalent-value resistor. If using a table to manage variables, make a new table column for each resistance equivalent.
- Step 3: Repeat steps 1 and 2 until the entire circuit is reduced to one equivalent resistor.
- Step 4: Calculate total current from total voltage and total resistance (I=E/R).
- Step 5: Taking total voltage and total current values, go back to last step in the circuit reduction process and insert those values where applicable.
- Step 6: From known resistances and total voltage / total current values from step 5, use Ohm’s Law to calculate unknown values (voltage or current) (E=IR or I=E/R).
- Step 7: Repeat steps 5 and 6 until all values for voltage and current are known in the original circuit configuration. Essentially, you will proceed step-by-step from the simplified version of the circuit back into its original, complex form, plugging in values of voltage and current where appropriate until all values of voltage and current are known.
- Step 8: Calculate power dissipations from known voltage, current, and/or resistance values.
This may sound like an intimidating process, but its much easier understood through example than through description.
In the example circuit above, R 1 and R 2 are connected in a simple parallel arrangement, as are R 3 and R 4 . Having been identified, these sections need to be converted into equivalent single resistors, and the circuit re-drawn:
The double slash (//) symbols represent “parallel” to show that the equivalent resistor values were calculated using the 1/(1/R) formula. The 71.429 Ω resistor at the top of the circuit is the equivalent of R 1 and R 2 in parallel with each other. The 127.27 Ω resistor at the bottom is the equivalent of R 3 and R 4 in parallel with each other.
Our table can be expanded to include these resistor equivalents in their own columns:
It should be apparent now that the circuit has been reduced to a simple series configuration with only two (equivalent) resistances. The final step in reduction is to add these two resistances to come up with a total circuit resistance. When we add those two equivalent resistances, we get a resistance of 198.70 Ω. Now, we can re-draw the circuit as a single equivalent resistance and add the total resistance figure to the rightmost column of our table. Note that the “Total” column has been relabeled (R 1 //R 2 —R 3 //R 4 ) to indicate how it relates electrically to the other columns of figures. The “—” symbol is used here to represent “series,” just as the “//” symbol is used to represent “parallel.”
Now, total circuit current can be determined by applying Ohm’s Law (I=E/R) to the “Total” column in the table:
Back to our equivalent circuit drawing, our total current value of 120.78 milliamps is shown as the only current here:
Now we start to work backwards in our progression of circuit re-drawings to the original configuration. The next step is to go to the circuit where R 1 //R 2 and R 3 //R 4 are in series:
Since R 1 //R 2 and R 3 //R 4 are in series with each other, the current through those two sets of equivalent resistances must be the same. Furthermore, the current through them must be the same as the total current, so we can fill in our table with the appropriate current values, simply copying the current figure from the Total column to the R 1 //R 2 and R 3 //R 4 columns:
Now, knowing the current through the equivalent resistors R 1 //R 2 and R 3 //R 4 , we can apply Ohm’s Law (E=IR) to the two right vertical columns to find voltage drops across them:
Because we know R 1 //R 2 and R 3 //R 4 are parallel resistor equivalents, and we know that voltage drops in parallel circuits are the same, we can transfer the respective voltage drops to the appropriate columns on the table for those individual resistors. In other words, we take another step backwards in our drawing sequence to the original configuration, and complete the table accordingly:
Finally, the original section of the table (columns R 1 through R 4 ) is complete with enough values to finish. Applying Ohm’s Law to the remaining vertical columns (I=E/R), we can determine the currents through R 1 , R 2 , R 3 , and R 4 individually:
Placing Voltage and Current Values into Diagrams
Having found all voltage and current values for this circuit, we can show those values in the schematic diagram as such:
As a final check of our work, we can see if the calculated current values add up as they should to the total.  Likewise, since R 3 and R 4 are in parallel, their combined currents should also add up to the total of 120.78 mA. You can check for yourself to verify that these figures do add up as expected.
A computer simulation can also be used to verify the accuracy of these figures. The following SPICE analysis will show all resistor voltages and currents (note the current-sensing vi1, vi2, . . . “dummy” voltage sources in series with each resistor in the netlist, necessary for the SPICE computer program to track current through each path). These voltage sources will be set to have values of zero volts each so they will not affect the circuit in any way.
I’ve annotated SPICE’s output figures to make them more readable, denoting which voltage and current figures belong to which resistors.
As you can see, all the figures do agree with our calculated values.
Review
- To analyze a series-parallel combination circuit, follow these steps:
- Reduce the original circuit to a single equivalent resistor, re-drawing the circuit in each step of reduction as simple series and simple parallel parts are reduced to single, equivalent resistors.
- Solve for total resistance.
- Solve for total current (I=E/R).
- Determine equivalent resistor voltage drops and branch currents one stage at a time, working backwards to the original circuit configuration again.

## Match 2.04 — Statistics-WEB § 2.2 Histograms, Frequency Polygons, and Time Series Graphs

12. 65 randomly selected car salespersons were asked the number of cars they generally sell in one week. 14 people
answered that they generally sell three cars, 19 generally sell four cars, 12 generally sell five cars, nine generally sell six
cars, and 11 generally sell seven cars. Complete the table.
Data Value (Number of
Cars)
Frequency
Relative
Frequency
Cumulative Relative
Frequency
Table 2.45
13. What does the frequency column in Table 2.45 sum to? Why?
Chapter 2 | Descriptive Statistics
135

14. What does the relative frequency column in Table 2.45 sum to? Why?
15. What is the difference between relative frequency and frequency for each data value in Table 2.45?
16. What is the difference between cumulative relative frequency and relative frequency for each data value?
17. To construct the histogram for the data in Table 2.45, determine appropriate minimum and maximum x- and y-values
and the scaling. Sketch the histogram. Label the horizontal and vertical axes with words. Include numerical scaling.
Figure 2.33
136
Chapter 2 | Descriptive Statistics
This OpenStax book is available for free at http://cnx.org/content/col30309/1.8

18. Construct a frequency polygon for the following.
a.
Pulse Rates for Women
Frequency
60–69
12
70–79
14
80–89
11
90–99
1
100–109
1
110–119
0
120–129
1
Table 2.46
b.
Actual Speed in a 30-MPH Zone
Frequency
42–45
25
46–49
14
50–53
7
54–57
3
58–61
1
Table 2.47
c.
Tar (mg) in Nonfiltered Cigarettes
Frequency
10–13
1
14–17
0
18–21
15
22–25
7
26–29
2
Table 2.48
Chapter 2 | Descriptive Statistics
137

19. Construct a frequency polygon from the frequency distribution for the 50 highest-ranked countries for depth of hunger.
Depth of Hunger
Frequency
230–259
21
260–289
13
290–319
5
320–349
7
350–379
1
380–409
1
410–439
1
Table 2.49
20. Use the two frequency tables to compare the life expectancy of men and women from 20 randomly selected countries.
Include an overlaid frequency polygon and discuss the shapes of the distributions, the center, the spread, and any outliers.
What can we conclude about the life expectancy of women compared to men?
Life Expectancy at Birth – Women
Frequency
49–55
3
56–62
3
63–69
1
70–76
3
77–83
8
84–90
2
Table 2.50
Life Expectancy at Birth – Men
Frequency
49–55
3
56–62
3
63–69
1
70–76
1
77–83
7
84–90
5
Table 2.51
138
Chapter 2 | Descriptive Statistics
This OpenStax book is available for free at http://cnx.org/content/col30309/1.8

21. Construct a times series graph for (a) the number of male births, (b) the number of female births, and (c) the total
number of births.
Sex/Year
1855
1856
1857
1858
1859
1860
1861
Female
45,545 49,582
50,257
50,324
51,915
51,220
52,403
Male
47,804 52,239
53,158
53,694
54,628
54,409
54,606
Total
93,349 101,821 103,415 104,018 106,543 105,629 107,009
Table 2.52
Sex/Year
1862
1863
1864
1865
1866
1867
1868
1869
Female
51,812
53,115
54,959
54,850
55,307
55,527
56,292
55,033
Male
55,257
56,226
57,374
58,220
58,360
58,517
59,222
58,321
Total
107,069 109,341 112,333 113,070 113,667 114,044 115,514 113,354
Table 2.53
Sex/Year
1871
1870
1872
1871
1872
1827
1874
1875
Female
56,099
56,431
57,472
56,099
57,472
58,233
60,109
60,146
Male
60,029
58,959
61,293
60,029
61,293
61,467
63,602
63,432
Total
116,128 115,390 118,765 116,128 118,765 119,700 123,711 123,578
Table 2.54
22. The following data sets list full-time police per 100,000 citizens along with incidents of a certain crime per 100,000
citizens for the city of Detroit, Michigan, during the period from 1961 to 1973.
Year
1961
1962
1963
1964
1965
1966
1967
Police
260.35 269.8 272.04 272.96 272.51 261.34 268.89
Incidents
8.6
8.9
8.52
8.89
13.07
14.57
21.36
Table 2.55
Year
1968
1969
1970
1971
1972
1973
Police
295.99 319.87 341.43 356.59 376.69 390.19
Incidents
28.03
31.49
37.39
46.26
47.24
52.33
Table 2.56
a.
Construct a double time series graph using a common x-axis for both sets of data.
b.
Which variable increased the fastest? Explain.
c.
Did Detroit’s increase in police officers have an impact on the incident rate? Explain.
Chapter 2 | Descriptive Statistics
139


## Match 2.04 — LibreTexts: 2.3: Histograms, Frequency Polygons, and Time Series Graphs
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Courses/Coastline_College/Math_C160%3A_Introduction_to_Statistics_(Lee)/02%3A_Descriptive_Statistics/2.03%3A_Histograms_Frequency_Polygons_and_Time_Series_Graphs

2.3: Histograms, Frequency Polygons, and Time Series Graphs
-
- Last updated
- Save as PDF
For most of the work you do in this book, you will use a histogram to display the data. One advantage of a histogram is that it can readily display large data sets. A rule of thumb is to use a histogram when the data set consists of 100 values or more.
A histogram consists of contiguous (adjoining) boxes. It has both a horizontal axis and a vertical axis. The horizontal axis is labeled with what the data represents (for instance, distance from your home to school). The vertical axis is labeled either frequency or relative frequency (or percent frequency or probability). The graph will have the same shape with either label. The histogram (like the stemplot) can give you the shape of the data, the center, and the spread of the data.
The relative frequency is equal to the frequency for an observed value of the data divided by the total number of data values in the sample.(Remember, frequency is defined as the number of times an answer occurs.) If:
- \(f\) is frequency
- \(n\) is total number of data values (or the sum of the individual frequencies), and
- \(RF\) is relative frequency,
then:
\[RF=\dfrac{f}{n} \label{2.3.1}\]
For example, if three students in Mr. Ahab's English class of 40 students received from 90% to 100%, then, f = 3, n = 40, and RF = fn = 340 = 0.075. 7.5% of the students received 90–100%. 90–100% are quantitative measures.
To construct a histogram, first decide how many bars or intervals, also called classes, represent the data. Many histograms consist of five to 15 bars or classes for clarity. The number of bars needs to be chosen. Choose a starting point for the first interval to be less than the smallest data value. A convenient starting point is a lower value carried out to one more decimal place than the value with the most decimal places. For example, if the value with the most decimal places is 6.1 and this is the smallest value, a convenient starting point is \(6.05 (6.1 – 0.05 = 6.05)\). We say that 6.05 has more precision. If the value with the most decimal places is 2.23 and the lowest value is 1.5, a convenient starting point is \(1.495 (1.5 – 0.005 = 1.495)\). If the value with the most decimal places is 3.234 and the lowest value is 1.0, a convenient starting point is \(0.9995 (1.0 – 0.0005 = 0.9995)\). If all the data happen to be integers and the smallest value is two, then a convenient starting point is \(1.5 (2 - 0.5 = 1.5)\). Also, when the starting point and other boundaries are carried to one additional decimal place, no data value will fall on a boundary. The next two examples go into detail about how to construct a histogram using continuous data and how to create a histogram using discrete data.
Example 2.3.1
The following data are the heights (in inches to the nearest half inch) of 100 male semiprofessional soccer players. The heights are continuous data, since height is measured.
60; 60.5; 61; 61; 61.5
63.5; 63.5; 63.5
64; 64; 64; 64; 64; 64; 64; 64.5; 64.5; 64.5; 64.5; 64.5; 64.5; 64.5; 64.5
66; 66; 66; 66; 66; 66; 66; 66; 66; 66; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5; 66.5; 67; 67; 67; 67; 67; 67; 67; 67; 67; 67; 67; 67; 67.5; 67.5; 67.5; 67.5; 67.5; 67.5; 67.5
68; 68; 69; 69; 69; 69; 69; 69; 69; 69; 69; 69; 69.5; 69.5; 69.5; 69.5; 69.5
70; 70; 70; 70; 70; 70; 70.5; 70.5; 70.5; 71; 71; 71
72; 72; 72; 72.5; 72.5; 73; 73.5
74
The smallest data value is 60. Since the data with the most decimal places has one decimal (for instance, 61.5), we want our starting point to have two decimal places. Since the numbers 0.5, 0.05, 0.005, etc. are convenient numbers, use 0.05 and subtract it from 60, the smallest value, for the convenient starting point.
60 – 0.05 = 59.95 which is more precise than, say, 61.5 by one decimal place. The starting point is, then, 59.95.
The largest value is 74, so 74 + 0.05 = 74.05 is the ending value.
Next, calculate the width of each bar or class interval. To calculate this width, subtract the starting point from the ending value and divide by the number of bars (you must choose the number of bars you desire). Suppose you choose eight bars.
\[\dfrac{74.05−59.95}{8}=1.76\]We will round up to two and make each bar or class interval two units wide. Rounding up to two is one way to prevent a value from falling on a boundary. Rounding to the next number is often necessary even if it goes against the standard rules of rounding. For this example, using 1.76 as the width would also work. A guideline that is followed by some for the width of a bar or class interval is to take the square root of the number of data values and then round to the nearest whole number, if necessary. For example, if there are 150 values of data, take the square root of 150 and round to 12 bars or intervals.
The boundaries are:
- 59.95
- 59.95 + 2 = 61.95
- 61.95 + 2 = 63.95
- 63.95 + 2 = 65.95
- 65.95 + 2 = 67.95
- 67.95 + 2 = 69.95
- 69.95 + 2 = 71.95
- 71.95 + 2 = 73.95
- 73.95 + 2 = 75.95
The heights 60 through 61.5 inches are in the interval 59.95–61.95. The heights that are 63.5 are in the interval 61.95–63.95. The heights that are 64 through 64.5 are in the interval 63.95–65.95. The heights 66 through 67.5 are in the interval 65.95–67.95. The heights 68 through 69.5 are in the interval 67.95–69.95. The heights 70 through 71 are in the interval 69.95–71.95. The heights 72 through 73.5 are in the interval 71.95–73.95. The height 74 is in the interval 73.95–75.95.
The following histogram displays the heights on the x -axis and relative frequency on the y -axis.
Figure 2.3.1: Histogram of somethingExercise 2.3.1
continuous data since shoe size is measured. Construct a histogram and calculate the width of each bar or class interval. Suppose you choose six bars.
9; 9; 9.5; 9.5; 10; 10; 10; 10; 10; 10; 10.5; 10.5; 10.5; 10.5; 10.5; 10.5; 10.5; 10.5
11; 11; 11; 11; 11; 11; 11; 11; 11; 11; 11; 11; 11; 11.5; 11.5; 11.5; 11.5; 11.5; 11.5; 11.5
12; 12; 12; 12; 12; 12; 12; 12.5; 12.5; 12.5; 12.5; 14
Answer
Smallest value: 9
Largest value: 14
Convenient starting value: 9 – 0.05 = 8.95
Convenient ending value: 14 + 0.05 = 14.05
\(\frac{14.05-8.95}{6}\) = 0.85
The calculations suggests using 0.85 as the width of each bar or class interval. You can also use an interval with a width equal to one.
Example 2.3.2
The following data are the number of books bought by 50 part-time college students at ABC College. The number of books is discrete data , since books are counted.
1; 1; 1; 1; 1; 1; 1; 1; 1; 1; 1
2; 2; 2; 2; 2; 2; 2; 2; 2; 2
3; 3; 3; 3; 3; 3; 3; 3; 3; 3; 3; 3; 3; 3; 3; 3
4; 4; 4; 4; 4; 4
5; 5; 5; 5; 5
6; 6
Eleven students buy one book. Ten students buy two books. Sixteen students buy three books. Six students buy four books. Five students buy five books. Two students buy six books.
Because the data are integers, subtract 0.5 from 1, the smallest data value and add 0.5 to 6, the largest data value. Then the starting point is 0.5 and the ending value is 6.5.
Next, calculate the width of each bar or class interval. If the data are discrete and there are not too many different values, a width that places the data values in the middle of the bar or class interval is the most convenient. Since the data consist of the numbers 1, 2, 3, 4, 5, 6, and the starting point is 0.5, a width of one places the 1 in the middle of the interval from 0.5 to 1.5, the 2 in the middle of the interval from 1.5 to 2.5, the 3 in the middle of the interval from 2.5 to 3.5, the 4 in the middle of the interval from _______ to _______, the 5 in the middle of the interval from _______ to _______, and the _______ in the middle of the interval from _______ to _______ .
Answer
Calculate the number of bars as follows:
\(\frac{6.5 - 0.5}{\text{number of bars}}\) = 1
where 1 is the width of a bar. Therefore, bars = 6.
The following histogram displays the number of books on the x -axis and the frequency on the y -axis.
Figure 2.3.2.Exercise 2.3.2
The following data are the number of sports played by 50 student athletes. The number of sports is discrete data since sports are counted.
1; 1; 1; 1; 1; 1; 1; 1; 1; 1; 1; 1; 1; 1; 1; 1; 1; 1; 1; 1
2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2; 2
3; 3; 3; 3; 3; 3; 3; 3
20 student athletes play one sport. 22 student athletes play two sports. Eight student athletes play three sports.
Fill in the blanks for the following sentence. Since the data consist of the numbers 1, 2, 3, and the starting point is 0.5, a width of one places the 1 in the middle of the interval 0.5 to _____, the 2 in the middle of the interval from _____ to _____, and the 3 in the middle of the interval from _____ to _____.
Answer
1.5
1.5 to 2.5
2.5 to 3.5
Example 2.3.3
Using this data set, construct a histogram.
| 9.95 | 10 | 2.25 | 16.75 | 0 |
| 19.5 | 22.5 | 7.5 | 15 | 12.75 |
| 5.5 | 11 | 10 | 20.75 | 17.5 |
| 23 | 21.9 | 24 | 23.75 | 18 |
| 20 | 15 | 22.9 | 18.8 | 20.5 |
Answer
Figure 2.3.3.Some values in this data set fall on boundaries for the class intervals. A value is counted in a class interval if it falls on the left boundary, but not if it falls on the right boundary. Different researchers may set up histograms for the same data in different ways. There is more than one correct way to set up a histogram.
Query \(\PageIndex{1}\)
Exercise 2.3.3
The following data represent the number of employees at various restaurants in New York City. Using this data, create a histogram.
22; 35; 15; 26; 40; 28; 18; 20; 25; 34; 39; 42; 24; 22; 19; 27; 22; 34; 40; 20; 38 and 28
Use 10–19 as the first interval.
Count the money (bills and change) in your pocket or purse. Your instructor will record the amounts. As a class, construct a histogram displaying the data. Discuss how many intervals you think is appropriate. You may want to experiment with the number of intervals.
Frequency Polygons
Frequency polygons are analogous to line graphs, and just as line graphs make continuous data visually easy to interpret, so too do frequency polygons. To construct a frequency polygon, first examine the data and decide on the number of intervals, or class intervals, to use on the x -axis and y -axis. After choosing the appropriate ranges, begin plotting the data points. After all the points are plotted, draw line segments to connect them.
Example 2.3.4
A frequency polygon was constructed from the frequency table below.
| Lower Bound | Upper Bound | Frequency | Cumulative Frequency |
|---|---|---|---|
| 49.5 | 59.5 | 5 | 5 |
| 59.5 | 69.5 | 10 | 15 |
| 69.5 | 79.5 | 30 | 45 |
| 79.5 | 89.5 | 40 | 85 |
| 89.5 | 99.5 | 15 | 100 |
The first label on the x -axis is 44.5. This represents an interval extending from 39.5 to 49.5. Since the lowest test score is 54.5, this interval is used only to allow the graph to touch the x -axis. The point labeled 54.5 represents the next interval, or the first “real” interval from the table, and contains five scores. This reasoning is followed for each of the remaining intervals with the point 104.5 representing the interval from 99.5 to 109.5. Again, this interval contains no data and is only used so that the graph will touch the x -axis. Looking at the graph, we say that this distribution is skewed because one side of the graph does not mirror the other side.
Exercise 2.3.4
Construct a frequency polygon of U.S. Presidents’ ages at inauguration shown in Table .
| Age at Inauguration | Frequency |
|---|---|
| 41.5–46.5 | 4 |
| 46.5–51.5 | 11 |
| 51.5–56.5 | 14 |
| 56.5–61.5 | 9 |
| 61.5–66.5 | 4 |
| 66.5–71.5 | 2 |
Answer
The first label on the x -axis is 39. This represents an interval extending from 36.5 to 41.5. Since there are no ages less than 41.5, this interval is used only to allow the graph to touch the x -axis. The point labeled 44 represents the next interval, or the first “real” interval from the table, and contains four scores. This reasoning is followed for each of the remaining intervals with the point 74 representing the interv
