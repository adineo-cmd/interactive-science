# Source pack — subjects/statistics/expert/causal-inference
Lesson title: Causal Inference
Level: expert
Match confidence: 1.56

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.56 — LibreTexts: 12.3: Inference for Regression and Correlation
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Courses/Cosumnes_River_College/STAT_300%3A_Introduction_to_Probability_and_Statistics_(Nam_Lam)/12%3A_Linear_Regression/12.03%3A_Inference_for_Regression_and_Correlation

12.3: Inference for Regression and Correlation
How do you really say you have a correlation? Can you test to see if there really is a correlation? Of course, the answer is yes. The hypothesis test for correlation is as follows:
Hypothesis Test for Correlation:
-
State the random variables in words.
x = independent variable
y = dependent variable -
State the null and alternative hypotheses and the level of significance
\(\begin{array}{l}{H_{o} : \rho=0 \text { (There is no correlation) }} \\ {H_{A} : \rho \neq 0 \text { (There is a correlation) }} \\ {\text { or }} \\ {H_{A} : \rho<0 \text { (There is a negative correlation) }} \\ {\text { or }} \\ {H_{A} : \rho>0 \text { (There is a postive correlation) }}\end{array}\)
Also, state your \(\alpha\) level here. -
State and check the assumptions for the hypothesis test
The assumptions for the hypothesis test are the same assumptions for regression and correlation. -
Find the test statistic and p-value
\(t=\dfrac{r}{\sqrt{\dfrac{1-r^{2}}{n-2}}}\)
with degrees of freedom = df = n - 2
p-value: Using the TI-83/84: tcdf(lower limit, upper limit, df )Note
If \(H_{A} : \rho<0\), then lower limit is -1E99 and upper limit is your test statistic. If \(H_{A} : \rho>0\), then lower limit is your test statistic and the upper limit is 1E99. If \(H_{A} : \rho \neq 0\), then find the p-value for \(H_{A} : \rho<0\), and multiply by 2.
Using R: pt( t, df )
Note
If \(H_{A} : \rho<0\), then use pt( t, df ), If \(H_{A} : \rho>0\), then use \(1-\mathrm{pt}(t, d f)\). If \(H_{A} : \rho \neq 0\), then find the p-value for \(H_{A} : \rho<0\), and multiply by 2.
-
Conclusion
This is where you write reject \(H_{o}\) or fail to reject \(H_{o}\). The rule is: if the p-value < \(\alpha\), then reject \(H_{o}\). If the p-value \(\geq \alpha\), then fail to reject \(H_{o}\). -
Interpretation
This is where you interpret in real world terms the conclusion to the test. The conclusion for a hypothesis test is that you either have enough evidence to show \(H_{A}\) is true, or you do not have enough evidence to show \(H_{A}\) is true.
Note
The TI-83/84 calculator results give you the test statistic and the p-value. In R, the command for getting the test statistic and p-value is cor.test(independent variable, dependent variable, alternative = "less" or "greater"). Use less for \(H_{A} : \rho<0\), use greater for \(H_{A} : \rho>0\), and leave off this command for \(H_{A} : \rho \neq 0\).
Example \(\PageIndex{1}\) Testing the claim of a linear correlation
Is there a positive correlation between beer’s alcohol content and calories? To determine if there is a positive linear correlation, a random sample was taken of beer’s alcohol content and calories for several different beers ("Calories in beer," 2011), and the data is in Example \(\PageIndex{1}\). Test at the 5% level.
Solution
-
State the random variables in words.
x = alcohol content in the beer
y = calories in 12 ounce beer -
State the null and alternative hypotheses and the level of significance.
Since you are asked if there is a positive correlation, \(\rho> 0\).
\(\begin{array}{l}{H_{o} : \rho=0} \\ {H_{A} : \rho>0} \\ {\alpha=0.05}\end{array}\) -
State and check the assumptions for the hypothesis test.
The assumptions for the hypothesis test were already checked in Example \(\PageIndex{2}\) . -
Find the test statistic and p-value.
The results from the TI-83/84 calculator are in Figure \(\PageIndex{1}\) .
Figure \(\PageIndex{1}\) : Results for Linear Regression Test on TI-83/84
Test statistic: t \(\approx\) 5.938 and p-value: \(p \approx 2.884 \times 10^{-4}\)
The results from R are
cor.test(alcohol, calories, alternative = "greater")
Pearson's product-moment correlation
data: alcohol and calories
t = 5.9384, df = 7, p-value = 0.0002884
alternative hypothesis: true correlation is greater than 0
95 percent confidence interval:
0.7046161 1.0000000
sample estimates:
cor
0.9134414
Test statistic: t \(\approx\) 5.9384 and p-value: \(p \approx 0.0002884\) -
Conclusion
Reject \(H_{o}\) since the p-value is less than 0.05. -
Interpretation
There is enough evidence to show that there is a positive correlation between alcohol content and number of calories in a 12-ounce bottle of beer.
Prediction Interval
Using the regression equation you can predict the number of calories from the alcohol content. However, you only find one value. The problem is that beers vary a bit in calories even if they have the same alcohol content. It would be nice to have a range instead of a single value. The range is called a prediction interval. To find this, you need to figure out how much error is in the estimate from the regression equation. This is known as the standard error of the estimate .
Definition
Standard Error of the Estimate
This is the sum of squares of the residuals
\(s_{e}=\sqrt{\dfrac{\sum(y-\hat{y})^{2}}{n-2}}\)
This formula is hard to work with, so there is an easier formula. You can also find the value from technology, such as the calculator.
\(s_{e}=\sqrt{\dfrac{S S_{y}-b^{*} S S_{x y}}{n-2}}\)
Example \(\PageIndex{2}\) finding the standard error of the estimate
Find the standard error of the estimate for the beer data. To determine if there is a positive linear correlation, a random sample was taken of beer’s alcohol content and calories for several different beers ("Calories in beer," 2011), and the data are in Example \(\PageIndex{1}\).
Solution
x = alcohol content in the beer
y = calories in 12 ounce beer
Using the TI-83/84, the results are in Figure \(\PageIndex{2}\) .
Figure \(\PageIndex{2}\): Results for Linear Regression Test on TI-83/84The s in the results is the standard error of the estimate. So \(s_{e} \approx 15.64\).
To find the standard error of the estimate in R, the commands are
lm.out = lm(dependent variable ~ independent variable) – this defines the linear model with a name so you can use it later. Then
summary(lm.out) – this will produce most of the information you need for a regression and correlation analysis. In fact, the only thing R doesn’t produce with this command is the correlation coefficient. Otherwise, you can use the command to find the regression equation, coefficient of determination, test statistic, p-value for a two-tailed test, and standard error of the estimate.
The results from R are
lm.out=lm(calories~alcohol)
summary(lm.out)
Call:
lm(formula = calories ~ alcohol)
Residuals:
\(\begin{array} {ccccc} {\text{Min}} & {\text{1Q}} & {\text{Median}} & {\text{3Q}} & {\text{Max}} \\{-30.253}&{-1.624}&{2.744}&{9.271}&{14.271} \end{array}\)
Coefficients:
\(\begin{array}{ccccc} {}&{\text{Estimate Std.}}&{\text{Error}}&{\text{t value}}&{\text{Pr(>|t|)}} \\ {\text{(Intercept)}}&{25.031}&{24.999}&{1.001}&{0.350038}\\{\text{alcohol}}&{26.319}&{4.432}&{5.938}&{0.000577}\end{array}\)
---
Signif. codes: 0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1
Residual standard error: 15.64 on 7 degrees of freedom
Multiple R-squared: 0.8344, Adjusted R-squared: 0.8107
F-statistic: 35.26 on 1 and 7 DF, p-value: 0.0005768
From this output, you can find the y-intercept is 25.031, the slope is 26.319, the test statistic is t = 5.938, the p-value for the two-tailed test is 0.000577. If you want the p-value for a one-tailed test, divide this number by 2. The standard error of the estimate is the residual standard error and is 15.64. There is some information in this output that you do not need.
If you want to know how to calculate the standard error of the estimate from the formula, refer to Example \(\PageIndex{3}\).
Example \(\PageIndex{3}\) finding the standard error of the estimate from the formula
Find the standard error of the estimate for the beer data using the formula. To determine if there is a positive linear correlation, a random sample was taken of beer’s alcohol content and calories for several different beers ("Calories in beer," 2011), and the data are in Example \(\PageIndex{1}\).
Solution
x = alcohol content in the beer
y = calories in 12 ounce beer
From Example \(\PageIndex{3}\) :
\(\begin{array}{l}{S S_{y}=\sum(y-\overline{y})^{2}=10335.56} \\ {S S_{x y}=\sum(x-\overline{x})(y-\overline{y})=327.6666} \\ {n=9} \\ {b=26.3}\end{array}\)
The standard error of the estimate is
\(\begin{aligned} s_{e} &=\sqrt{\dfrac{S S_{y}-b^{*} S S_{x y}}{n-2}} \\ &=\sqrt{\dfrac{10335.56-26.3(327.6666)}{9-2}} \\ &=15.67 \end{aligned}\)
Prediction Interval for an Individual y
Given the fixed value \(x_{0}\), the prediction interval for an individual y is
\(\hat{y}-E<y<\hat{y}+E\)
where
\(\begin{array}{l}{\hat{y}=a+b x} \\ {E=t_{c} s_{e} \sqrt{1+\dfrac{1}{n}+\dfrac{\left(x_{o}-\overline{x}\right)^{2}}{S S_{x}}}} \\ {d f=n-2}\end{array}\)
Note
To find \(S S_{x}=\sum(x-\overline{x})^{2}\) remember, the standard derivation formula from chapter 3 \(s_{x}=\sqrt{\dfrac{\sum(x-\overline{x})^{2}}{n-1}}\)
So, \(s_{x}=\sqrt{\dfrac{S S_{x}}{n-1}}\)
Now solve for \(S S_{x}\)
\(S S_{x}=s_{x}^{2}(n-1)\)
You can get the standard deviation from technology.
R will produce the prediction interval for you. The commands are (Note you probably already did the lm.out command. You do not need to do it again.)
lm.out = lm(dependent variable ~ independent variable) – calculates the linear model
predict(lm.out, newdata=list(independent variable = value), interval="prediction", level=C) – will compute a prediction interval for the independent variable set to a particular value (put that value in place of the word value), at a particular C level (given as a decimal)
Example \(\PageIndex{4}\) find the prediction interval
Find a 95% prediction interval for the number of calories when the alcohol content is 6.5% using a random sample taken of beer’s alcohol content and calories ("Calories in beer," 2011). The data are in Example \(\PageIndex{1}\).
Solution
x = alcohol content in the beer
y = calories in 12 ounce beer
Computing the prediction interval using the TI-83/84 calculator:
From Example \(\PageIndex{2}\)
\(\begin{array}{l}{\hat{y}=25.0+26.3 x} \\ {x_{o}=6.50} \\ {\hat{y}=25.0+26.3(6.50)=196 \text { calories }}\end{array}\)
From Example #10.3.2
\(s_{e} \approx 15.64\)
Figure \(\PageIndex{3}\): Results of 1-Var Stats on TI-83/84\(\begin{array}{l}{\overline{x}=5.517} \\ {s_{x}=1.247497495} \\ {n=9}\end{array}\)
Now you can find
\(\begin{aligned} S S_{x} &=s_{x}^{2}(n-1) \\ &=(1.247497495)^{2}(9-1) \\ &=12.45 \\ d f &=n-2=9-2=7 \end{aligned}\)
Now look in table A.2. Go down the first column to 7, then over to the column headed with 95%.
\(t_{c}=2.365\)
\(\begin{aligned} E &=t_{c} s_{e} \sqrt{1+\dfrac{1}{n}+\dfrac{\left(x_{o}-\overline{x}\right)^{2}}{S S_{x}}} \\ &=2.365(15.64) \sqrt{1+\dfrac{1}{9}+\dfrac{(6.50-5.517)^{2}}{12.45}} \\ &=40.3 \end{aligned}\)
Prediction interval is
\(\begin{array}{l}{\hat{y}-E<y<\hat{y}+E} \\ {196-40.3<y<196+40.3} \\ {155.7<y<236.3}\end{array}\)
Computing the prediction interval using R:
predict(lm.out, newdata=list(alcohol=6.5), interval = "prediction", level=0.95)
\(\begin{array}{ccc}{}&{\text { fit }} & {\text { lwr }} & {\text { upr }} \\ {1} & {196.1022} & {155.7847}&{236 .4196}\end{array}\)
fit = \(\hat{\mathcal{Y}}\) when x = 6.5%. lwr = lower limit of prediction interval. upr = upper limit of prediction interval. So the prediction interval is \(155.8<y<236.4\).
Statistical interpretation: There is a 95% chance that the interval \(155.8<y<236.4\) contains the true value for the calories when the alcohol content is 6.5%.
Real world interpretation: If a beer has an alcohol content of 6.50% then it has between 156 and 236 calories.
Example \(\PageIndex{5}\) Doing a correlation and regression analysis using the ti-83/84
Example \(\PageIndex{1}\) contains randomly selected high temperatures at various cities on a single day and the elevation of the city.
| Elevation (in feet) | 7000 | 4000 | 6000 | 3000 | 7000 | 4500 | 5000 |
|---|---|---|---|---|---|---|---|
| Temperature (°F) | 50 | 60 | 48 | 70 | 55 | 55 | 60 |
- State the random variables.
- Find a regression equation for elevation and high temperature on a 

## Match 1.54 — LibreTexts: 9.2: Causal Reasoning
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://human.libretexts.org/Bookshelves/Philosophy/Thinking_Well_-_A_Logic_And_Critical_Thinking_Textbook_4e_(Lavin)/09%3A_Inductive_Reasoning_-_hypothetical_causal_statistical_and_others/9.02%3A_Causal_Reasoning

9.2: Causal Reasoning
We make causal judgments all the time. We think that the world is full of things causing other things to happen. He made me do it. The woman lost the race because she was anemic. The frog jumped off the leaf, causing it to shake and shower dew drops onto the ground below. You’re only cheating on this test because if you fail it, then you’ll have to drop out of college (don’t cheat, students, even if you are failing a course :) ). Roasting meat until it is charred and black causes cancer.
How, though, do we know that there’s a causal connection between two factors or events or things? We have to go through a particular process to demonstrate it. It’s sort of a more specific version of the hypothetical method we discussed above.
First , we establish that there is in fact a correlation between two things. There’s a correlation between alcohol use and liver disease. As one drinks more alcohol more regularly, one’s chances of developing liver disease increase proportionately.
Correlation, though, is cheap. There is a hilarious website called Spurious Correlations with a collection of graphs demonstrating the odd things that are correlated with one another. Check it out! It turns out Nick Cage films correlate quite closely with deaths by drowning in a pool. Per capita mozzarella consumption correlates with civil engineering doctorate awards. So we need to get beyond mere correlation in order to posit a causal connection. We need to give an account and run some tests.
Second , we need to develop a causal story or an account of how they actually might be correlated. The more doctorate awards are presented, the more wine and cheese receptions there are and the more wine and cheese receptions there are, the more mozzarella cheese is consumed. Plausible? Meh, not really. But that would be how we would fill in the gap between the two factors.
Gamma radiation exposure causes cancer. We know it is highly correlated, but beyond that, we actually have a story of how it causes cancer. Gamma radiation mutates cellular DNA, which either activates or creates genes which code for uncontrolled growth. That’s more or less the story of how gamma radiation and cancer are causally linked. We need this story because we need to understand how it possibly could be that gamma radiation has a causal effect on cancer.
Finally , we need to do perhaps the most important step: we need to test our hypothesis. We need to establish that the more radiation one is exposed to, the more likely one is to have cancer . Or if there were no civil engineering doctoral degrees awarded, then no one would consume mozzarella that year . We need to actually manipulate the variables involved until we have satisfied ourselves that by manipulating the cause we can manipulate the effect. For example, by removing the gamma exposure, we should dramatically decrease someone’s chances of developing cancer. 
1. Establish a prima facie correlation
2. Develop a causal theory or story or account
3. Test for concomitant variation
If we’ve only established a correlation between two variables or factors and then came up with a story about how they might share a causal connection, then we’ve stopped short of truly knowing that there is a causal connection between the two. We have to intervene between the two factors to be sure that one truly causes the other. Otherwise the cause might be something that we haven’t yet thought of.

## Match 1.54 — LibreTexts: 13.5: Inference for Linear Regression
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/3.0/ · https://stats.libretexts.org/Courses/Cerritos_College/Introduction_to_Statistics_with_R/13%3A_Introduction_to_Linear_Regression/13.05%3A_Inference_for_Linear_Regression

13.5: Inference for Linear Regression
-
- Last updated
- Save as PDF
In this section we discuss uncertainty in the estimates of the slope and y-intercept for a regression line. Just as we identified standard errors for point estimates in previous chapters, we first discuss standard errors for these new estimates. However, in the case of regression, we will identify standard errors using statistical software.
Midterm elections and unemployment
Elections for members of the United States House of Representatives occur every two years, coinciding every four years with the U.S. Presidential election. The set of House elections occurring during the middle of a Presidential term are called midterm elections. In America's two-party system, one political theory suggests the higher the unemployment rate, the worse the President's party will do in the midterm elections.
To assess the validity of this claim, we can compile historical data and look for a connection. We consider every midterm election from 1898 to 2010, with the exception of those elections during the Great Depression. Figure \(\PageIndex{1}\) shows these data and the least-squares regression line:
\[\text {% change in House seats for President's party}\]
\[= -6.71 - 1.00 \times \text {(unemployment rate)}\]
We consider the percent change in the number of seats of the President's party (e.g. percent change in the number of seats for Democrats in 2010) against the unemployment rate.
Examining the data, there are no clear deviations from linearity, the constant variance condition, or in the normality of residuals (though we don't examine a normal probability plot here). While the data are collected sequentially, a separate analysis was used to check for any apparent correlation between successive observations; no such correlation was found.
Exercise \(\PageIndex{1}\)
The data for the Great Depression (1934 and 1938) were removed because the unemployment rate was 21% and 18%, respectively. Do you agree that they should be removed for this investigation? Why or why not?
- Answer
-
We will provide two considerations. Each of these points would have very high leverage on any least-squares regression line, and years with such high unemployment may not help us understand what would happen in other years where the unemployment is only modestly high. On the other hand, these are exceptional cases, and we would be discarding important information if we exclude them from a final analysis.
There is a negative slope in the line shown in Figure \(\PageIndex{1}\). However, this slope (and the y-intercept) are only estimates of the parameter values. We might wonder, is this convincing evidence that the "true" linear model has a negative slope? That is, do the data provide strong evidence that the political theory is accurate? We can frame this investigation into a one-sided statistical hypothesis test:
- H 0 : \(\beta _1 = 0\). The true linear model has slope zero.
- HA: \(\beta _1 < 0\). The true linear model has a slope less than zero. The higher the unemployment, the greater the losses for the President's party in the House of Representatives.
We would reject H 0 in favor of H A if the data provide strong evidence that the true slope parameter is less than zero. To assess the hypotheses, we identify a standard error for the estimate, compute an appropriate test statistic, and identify the p-value.
Understanding regression output from software
Just like other point estimates we have seen before, we can compute a standard error and test statistic for \(\beta_1\). We will generally label the test statistic using a T, since it follows the t distribution.
We will rely on statistical software to compute the standard error and leave the explanation of how this standard error is determined to a second or third statistics course. Table \(\PageIndex{1}\) shows software output for the least squares regression line in Figure \(\PageIndex{1}\). The row labeled unemp represents the information for the slope, which is the coefficient of the unemployment variable.
| Estimate | Std. Error | t value | Pr(>|t|) | |
|---|---|---|---|---|
| (Intercept) | -6.7142 |
5.4567 |
-1.23 |
0.2300 |
| unemp | -1.0010 | 0.8717 | -1.15 | 0.2617 |
Example \(\PageIndex{2}\)
What do the first and second columns of Table \(\PageIndex{1}\) represent?
Solution
The entries in the first column represent the least squares estimates, \(\beta_0\) and \(\beta_1\), and the values in the second column correspond to the standard errors of each estimate.
We previously used a t test statistic for hypothesis testing in the context of numerical data. Regression is very similar. In the hypotheses we consider, the null value for the slope is 0, so we can compute the test statistic using the T (or Z) score formula:
\[T = \frac {\text {estimate - null value}}{SE} = \frac {-1.0010 - 0}{0.8717} = -1.15 \nonumber\]
We can look for the one-sided p-value - shown in Figure \(\PageIndex{2}\) - using the probability table for the t distribution in Appendix B.2
Exercise \(\PageIndex{2}\)
Table \(\PageIndex{1}\) offers the degrees of freedom for the test statistic T: df = 25. Identify the p-value for the hypothesis test.
- Answer
-
Add answer text here and it will automatically be hidden if you have a "AutoNum" template active on the page.
Looking in the 25 degrees of freedom row in Appendix B.2, we see that the absolute value of the test statistic is smaller than any value listed, which means the tail area and therefore also the p-value is larger than 0.100 (one tail!). Because the p-value is so large, we fail to reject the null hypothesis. That is, the data do not provide convincing evidence that a higher unemployment rate has any correspondence with smaller or larger losses for the President's party in the House of Representatives in midterm elections.
We could have identified the t test statistic from the software output in Table \(\PageIndex{1}\), shown in the second row (unemp) and third column (t value). The entry in the second row and last column in Table \(\PageIndex{1}\) represents the p-value for the two-sided hypothesis test where the null value is zero. The corresponding one-sided test would have a p-value half of the listed value.
Inference for regression
We usually rely on statistical software to identify point estimates and standard errors for parameters of a regression line. After verifying conditions hold for fitting a line, we can use the methods learned in Section 5.3 for the t distribution to create con dence intervals for regression parameters or to evaluate hypothesis tests.
Caution: Don't carelessly use the p-value from regression output
The last column in regression output often lists p-values for one particular hypothesis: a two-sided test where the null value is zero. If your test is one-sided and the point estimate is in the direction of HA, then you can halve the software's p-value to get the one-tail area. If neither of these scenarios match your hypothesis test, be cautious about using the software output to obtain the p-value.
Example \(\PageIndex{3}\)
Examine Figure 7.16, which relates the Elmhurst College aid and student family income. How sure are you that the slope is statistically significantly different from zero? That is, do you think a formal hypothesis test would reject the claim that the true slope of the line should be zero?
Solution
While the relationship between the variables is not perfect, there is an evident decreasing trend in the data. This suggests the hypothesis test will reject the null claim that the slope is zero.
Exercise \(\PageIndex{3}\)
Table \(\PageIndex{2}\) shows statistical software output from tting the least squares regression line shown in Figure 7.16. Use this output to formally evaluate the following hypotheses.
- H 0 : The true coefficient for family income is zero.
- H A : The true coefficient for family income is not zero.
| Estimate | Std. Error | t value |
Pr(>|t|) |
|
|---|---|---|---|---|
|
(Intercept) family_income |
24.3193 -0.0431 |
1.2915 0.0108 |
18.83 -3.98 |
0.0000 0.0002 |
- Answer
-
We look in the second row corresponding to the family income variable. We see the point estimate of the slope of the line is -0.0431, the standard error of this estimate is 0.0108, and the t test statistic is -3.98. The p-value corresponds exactly to the two-sided test we are interested in: 0.0002. The p-value is so small that we reject the null hypothesis and conclude that family income and nancial aid at Elmhurst College for freshman entering in the year 2011 are negatively correlated and the true slope parameter is indeed less than 0, just as we believed in Example 7.27.
TIP: Always check assumptions
If conditions for tting the regression line do not hold, then the methods presented here should not be applied. The standard error or distribution assumption of the point estimate - assumed to be normal when applying the t test statistic - may not be valid.
An alternative Test Statistic
We considered the t test statistic as a way to evaluate the strength of evidence for a hypothesis test in Section 7.4.2. However, we could focus on R 2 . Recall that R 2 described the proportion of variability in the response variable (y) explained by the explanatory variable (x). If this proportion is large, then this suggests a linear relationship exists between the variables. If this proportion is small, then the evidence provided by the data may not be convincing.
This concept - considering the amount of variability in the response variable explained by the explanatory variable - is a key component in some statistical techniques. The analysis of variance (ANOVA) technique introduced in Section 5.5 uses this general principle. The method states that if enough variability is explained away by the categories, then we would conclude the mean varied between the categories. On the other hand, we might not be convinced if only a little variability is explained. ANOVA can be further employed in advanced regression modeling to evaluate the inclusion of explanatory variables, though we leave these details to a later course.
