# Source pack — subjects/journalism/advanced/data-journalism
Lesson title: Data Journalism
Level: advanced
Match confidence: 1.55

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.55 — LibreTexts: 5.1: Why It Matters- Relationships in Categorical Data with Intro to Probability
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Courses/Lumen_Learning/Concepts_in_Statistics_(Lumen)/05%3A_Relationships_in_Categorical_Data_with_Intro_to_Probability/5.01%3A_Why_It_Matters-_Relationships_in_Categorical_Data_with_Intro_to_Probability

5.1: Why It Matters- Relationships in Categorical Data with Intro to Probability
Why understand the relationships within categorical data?
Before we begin Relationships in Categorical Data with Intro to Probability , it is helpful to consider how it relates to the work we have already done in previous modules.
At the start of Summarizing Data Graphically and Numerically , we stated the difference between quantitative and categorical variables:
- Quantitative variables have numeric values that can be averaged. A quantitative variable is frequently a measurement – for example, a person’s height in inches.
- Categorical variables are variables that can have one of a limited number of values, or labels. Values that can be represented by categorical variables include, for example, a person’s eye color, gender, or home state; a vehicle’s body style (sedan, SUV, minivan, etc.); a dog’s breed (bulldog, greyhound, beagle, etc.).
The remainder of Summarizing Data Graphically and Numerically focused on describing the overall pattern (shape, center, and spread) of the distribution of a quantitative variable.
In and Examining Relationships: Quantitative Data and Nonlinear Models , our goal was to identify and model the relationship between two quantitative variables.
Now, in this module, we turn our full attention back to categorical variables. Our objective is to study the relationship between two categorical variables. Just as in Examining Relationships: Quantitative Data and Nonlinear Models , we will be looking for patterns in the data.
As we organize and analyze data from two categorical variables, we make extensive use of two-way tables . Two-way tables for two categorical variables are in some ways like scatterplots for two quantitative variables: they give us a useful snapshot of all of the data organized in terms of the two variables of interest. This will be helpful in finding and comparing patterns. This part of Relationships in Categorical Data with Intro to Probability is exploratory data analysis in the Big Picture of Statistics.
A second important objective of this module is to introduce you to the concept of probability . Two-way tables give us a practical context for talking about probability. We also use two-way tables to help us visualize and solve real-world problems involving probability. This part of the module is part of probability in the Big Picture of Statistics.
Contributors and Attributions
- Concepts in Statistics. Provided by : Open Learning Initiative. Located at : http://oli.cmu.edu . License : CC BY: Attribution

## Match 1.55 — LibreTexts: 3.8: Putting It Together- Examining Relationships- Quantitative Data
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Courses/Lumen_Learning/Concepts_in_Statistics_(Lumen)/03%3A_Examining_Relationships-_Quantitative_Data/3.08%3A_Putting_It_Together-_Examining_Relationships-_Quantitative_Data

3.8: Putting It Together- Examining Relationships- Quantitative Data
Let’s Summarize
- We use a scatterplot to graph the relationship between two quantitative variables. In a scatterplot, each dot represents an individual. We always plot the explanatory variable on the horizontal x-axis.
- When we explore a relationship between two quantitative variables using a scatterplot, we describe the overall pattern ( direction , form , and strength ) and deviations from the pattern ( outliers ).
-
When the
form of a relationship is linear
, we use the correlation coefficient,
r
, to measure the strength and direction of the linear relationship. The correlation ranges between −1 an 1. If the pattern is linear, an
r
-value near −1 indicates a strong negative linear relationship and an
r
-value near +1 indicates a strong positive linear relationship. Following are some cautions about interpreting correlation:
- Always make a scatterplot before interpreting r . Correlation is affected by outliers and should be used only when the pattern in the data is linear.
- Association does not imply causation. Do not interpret a high correlation between explanatory and response variables as a cause-and-effect relationship.
- Beware of lurking variables that may be explaining the relationship seen in the data.
- The line that best summarizes a linear relationship is the least-squares regression line . The least-squares line is the best fit for the data because it gives the best predictions with the least amount of error. The most common measurement of overall error is the sum of the squares of the errors, SSE. The least-squares line is the line with the smallest SSE.
- We use the least-squares regression line to predict the value of the response variable from a value of the explanatory variable. Avoid making predictions outside the range of the data. (This is called extrapolation .)
-
We have two methods for
finding the equation of the least-squares regression line:
Predicted
y
=
a
+
b
*
x
- We use technology to find the equation of the least-squares regression line: Predicted y = a + b * x
- We use summary statistics for x and y and the correlation. Using this method, we can calculate the slope b and the y -intercept a using the following:
- The slope of the least-squares regression line is the average change in the predicted values when the explanatory variable increases by 1 unit.
- When we use a regression line to make predictions, there is error in the prediction. We calculate this error as Observed value − Predicted value. This prediction error is also called a residual .
- We use residual plots to determine whether a linear model is a good summary of the relationship between the explanatory and response variables. In particular, we look for any unexpected patterns in the residuals that may suggest that the data is not linear in form.
-
We have two numeric measures to help us judge how well the regression line models the data:
- The square of the correlation, r 2 , is the proportion of the variation in the response variable that is explained by the least-squares regression line.
- The standard error of the regression, s e , gives a typical prediction error based on all of the data. It roughly measures the average distance of the data from the regression line. In this way, it is similar to the standard deviation, which roughly measures average distance from the mean.
Contributors and Attributions
CC licensed content, Shared previously
- Concepts in Statistics. Provided by : Open Learning Initiative. Located at : http://oli.cmu.edu . License : CC BY: Attribution

## Match 1.55 — LibreTexts: 3.1: Why It Matters- Examining Relationships- Quantitative Data
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Courses/Lumen_Learning/Concepts_in_Statistics_(Lumen)/03%3A_Examining_Relationships-_Quantitative_Data/3.01%3A_Why_It_Matters-_Examining_Relationships-_Quantitative_Data

3.1: Why It Matters- Examining Relationships- Quantitative Data
Why learn how to analyze data by examining the relationships within quantitative data?
Before we begin Examining Relationships: Quantitative Data , let’s see how the new ideas in this module relate to what we learned in the previous modules, Types of Statistical Studies and Producing Data and Summarizing Data Graphically and Numerically .
Recall the Big Picture:
We begin a statistical investigation with a research question. The investigation proceeds with the following steps:
- Produce Data: Determine what to measure, then collect the data. ← Types of Statistical Studies and Producing Data
- Explore the Data: Analyze and summarize the data. ← Summarizing Data Graphically and Numerically, Examining Relationships: Quantitative Data
- Draw a Conclusion: Use the data, probability, and statistical inference to draw a conclusion about the population.
Types of Statistical Studies and Producing Data focused on methods for collecting reliable data. Summarizing Data Graphically and Numerically focused on summarizing and analyzing data for a quantitative variable. In this module, we focus on summarizing and analyzing the relationship between two quantitative variables. In the Big Picture of Statistics, the material in Examining Relationships: Quantitative Data is still part of exploratory data analysis.
Contributors and Attributions
- Concepts in Statistics. Provided by : Open Learning Initiative. Located at : http://oli.cmu.edu . License : CC BY: Attribution
