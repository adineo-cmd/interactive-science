# Source pack — subjects/psychology/advanced/psychometrics-and-testing
Lesson title: Psychometrics & Testing
Level: advanced
Match confidence: 1.57

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.57 — LibreTexts: 13.3: Testing the Significance of the Correlation Coefficient
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Courses/Fresno_City_College/Book%3A_Business_Statistics_Customized_(OpenStax)/13%3A_Linear_Regression_and_Correlation/13.03%3A_Testing_the_Significance_of_the_Correlation_Coefficient

13.3: Testing the Significance of the Correlation Coefficient
The correlation coefficient, \(r\), tells us about the strength and direction of the linear relationship between \(X_1\) and \(X_2\).
The sample data are used to compute \(r\), the correlation coefficient for the sample. If we had data for the entire population, we could find the population correlation coefficient. But because we have only sample data, we cannot calculate the population correlation coefficient. The sample correlation coefficient, r, is our estimate of the unknown population correlation coefficient.
-
The hypothesis test lets us decide whether the value of the population correlation coefficient \rho is "close to zero" or "significantly different from zero". We decide this based on the sample correlation coefficient \(r\) and the sample size \(n\).
If the test concludes that the correlation coefficient is significantly different from zero, we say that the correlation coefficient is "significant."
-
What the Hypotheses Mean in Words
-
Drawing a
Conclusion
There are two methods of making the decision concerning the hypothesis. The test statistic to test this hypothesis is:
\[t_{c}=\frac{r}{\sqrt{\left(1-r^{2}\right) /(n-2)}}\nonumber\]
\[t_{c}=\frac{r \sqrt{n-2}}{\sqrt{1-r^{2}}}\nonumber\]
Where the second formula is an equivalent form of the test statistic, \(n\) is the sample size and the degrees of freedom are \(n-2\). This is a \(t\)-statistic and operates in the same way as other \(t\) tests. Calculate the \(t\)-value and compare that with the critical value from the \(t\)-table at the appropriate degrees of freedom and the level of confidence you wish to maintain. If the calculated value is in the tail then reject the null hypothesis that there is no linear relationship between these two independent random variables. If the calculated \(t\)-value is NOT in the tailed then cannot reject the null hypothesis that there is no linear relationship between the two variables.
A quick shorthand way to test correlations is the relationship between the sample size and the correlation. If:
\[|r| \geq \frac{2}{\sqrt{n}}\nonumber\]
then this implies that the correlation between the two variables demonstrates that a linear relationship exists and is statistically significant at approximately the 0.05 level of significance. As the formula indicates, there is an inverse relationship between the sample size and the required correlation for significance of a linear relationship. With only 10 observations, the required correlation for significance is 0.6325, for 30 observations the required correlation for significance decreases to 0.3651 and at 100 observations the required level is only 0.2000.
Correlations may be helpful in visualizing the data, but are not appropriately used to "explain" a relationship between two variables. Perhaps no single statistic is more misused than the correlation coefficient. Citing correlations between health conditions and everything from place of residence to eye color have the effect of implying a cause and effect relationship. This simply cannot be accomplished with a correlation coefficient. The correlation coefficient is, of course, innocent of this misinterpretation. It is the duty of the analyst to use a statistic that is designed to test for cause and effect relationships and report only those results if they are intending to make such a claim. The problem is that passing this more rigorous test is difficult so lazy and/or unscrupulous "researchers" fall back on correlations when they cannot make their case legitimately.
-
Drawing a
Conclusion
There are two methods of making the decision concerning the hypothesis. The test statistic to test this hypothesis is:
-
What the Hypotheses Mean in Words

## Match 1.57 — LibreTexts: 10.3: Testing the Significance of the Correlation Coefficient
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://biz.libretexts.org/Courses/Gettysburg_College/MGT_235%3A_Introductory_Business_Statistics_(2nd_edition)/10%3A_Linear_Regression_and_Correlation/10.03%3A_Testing_the_Significance_of_the_Correlation_Coefficient

10.3: Testing the Significance of the Correlation Coefficient
The correlation coefficient, \(r\), tells us about the strength and direction of the linear relationship between \(X\) and \(Y\).
The sample data are used to compute \(r\), the correlation coefficient for the sample. If we had data for the entire population, we could find the population correlation coefficient. But because we have only sample data, we cannot calculate the population correlation coefficient. The sample correlation coefficient, \(r\), is our estimate of the unknown population correlation coefficient.
- \(\rho\) = population correlation coefficient (unknown)
- \(r\) = sample correlation coefficient (known; calculated from sample data)
The hypothesis test lets us decide whether the value of the population correlation coefficient \(\rho\) is "close to zero" or "significantly different from zero". We decide this based on the sample correlation coefficient \(r\) and the sample size \(n\).
If the test concludes that the correlation coefficient is significantly different from zero, we say that the correlation coefficient is "significant."
- Conclusion: There is sufficient evidence to conclude that there is a significant linear relationship between variables \(X\) and \(Y\) because the correlation coefficient is significantly different from zero.
- What the conclusion means: There is a significant linear relationship between variables \(X\) and \(Y\). If the test concludes that the correlation coefficient is not significantly different from zero (it is close to zero), we say that correlation coefficient is "not significant".
Performing the Hypothesis Test
- Null Hypothesis: \(H_{0} : \rho=0\)
- Alternate Hypothesis: \(H_{a} : \rho \neq 0\)
What the Hypotheses Mean in Words:
- Null Hypothesis \(H_{0}\): The population correlation coefficient IS NOT significantly different from zero. There IS NOT a significant linear relationship (correlation) between \(X\) and \(Y\) in the population.
- Alternate Hypothesis \(H_{a}\): The population correlation coefficient is significantly different from zero. There is a significant linear relationship (correlation) between \(X\) and \(Y\) in the population.
Drawing a Conclusion There are two methods of making the decision concerning the hypothesis. The test statistic to test this hypothesis is:
\[t_{obs}=\frac{r-\rho}{\sqrt{\left(1-r^{2}\right) /(n-2)}}\nonumber\]
\[\textbf{OR}\nonumber\]
\[t_{obs}=\frac{(r-\rho)*\sqrt{n-2}}{\sqrt{1-r^{2}}}\nonumber\]
Where the second formula is an equivalent form of the test statistic, \(n\) is the sample size and the degrees of freedom are \(n-2\). This is a \(t\)-statistic and operates in the same way as other \(t\)-tests. Calculate the \(t\)-value and compare that with the critical value from the \(t\)-table at the appropriate degrees of freedom and the level of confidence you wish to maintain. If the calculated (observed) value is in the tail, then reject the null hypothesis that there is no linear relationship between these two independent random variables. If the calculated (observed) \(t\)-value is NOT in the tail, then we cannot reject the null hypothesis that there is no linear relationship between the two variables.
A quick shorthand way to test correlations is the relationship between the sample size and the correlation. If:
\[|r| \geq \frac{2}{\sqrt{n}}\nonumber\]
then this implies that the correlation between the two variables demonstrates that a linear relationship exists and is statistically significant at approximately the 0.05 level of significance. As the formula indicates, there is an inverse relationship between the sample size and the required correlation for significance of a linear relationship. With only 10 observations, the required correlation for significance is 0.6325, for 30 observations the required correlation for significance decreases to 0.3651 and at 100 observations the required level is only 0.2000.
Correlations may be helpful in visualizing the data, but are not appropriately used to "explain" a relationship between two variables. Perhaps no single statistic is more misused than the correlation coefficient. Citing correlations between health conditions and everything from place of residence to eye color have the effect of implying a cause and effect relationship. This simply cannot be accomplished with a correlation coefficient. The correlation coefficient is, of course, innocent of this misinterpretation. It is the duty of the analyst to use a statistic that is designed to test for cause and effect relationships and report only those results if they are intending to make such a claim. The problem is that passing this more rigorous test is difficult so lazy and/or unscrupulous "researchers" fall back on correlations when they cannot make their case legitimately.

## Match 1.56 — LibreTexts: 8.7: Hypothesis Testing (1 of 5)
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Courses/Lumen_Learning/Concepts_in_Statistics_(Lumen)/08%3A_Inference_for_One_Proportion/8.07%3A_Hypothesis_Testing_(1_of_5)

8.7: Hypothesis Testing (1 of 5)
Learning Objectives
- When testing a claim, distinguish among situations involving one population mean, one population proportion, two population means, or two population proportions.
- Given a claim about a population, determine null and alternative hypotheses.
Introduction
In inference, we use a sample to draw a conclusion about a population. Two types of inference are the focus of our work in this course:
- Estimate a population parameter with a confidence interval.
- Test a claim about a population parameter with a hypothesis test.
We can also use samples from two populations to compare those populations. In this situation, the two types of inference focus on differences in the parameters.
- Estimate a difference in population parameters with a confidence interval.
- Test a claim about a difference in population parameters with a hypothesis test.
In “Estimating a Population Proportion,” we learned to estimate a population proportion using a confidence interval. For example, we estimated the proportion of all Tallahassee Community College students who are female and the proportion of all American adults who used the Internet to obtain medical information in the previous month. We will revisit confidence intervals in future modules.
Now we look more carefully at how to test a claim with a hypothesis test. Statistical investigations begin with research questions. We begin our discussion of hypothesis tests with research questions that require us to test a claim. Later we look at how a claim becomes a hypothesis.
Example
Research Questions about Testing Claims
Let’s revisit some of the research questions from examples in the module Types of Statistical Studies and Producing Data that involve testing a claim.
Is the average course load for community college students less than 12 semester hours? This question contains a claim about a population mean. The question contains information about the population, the variable, and the parameter. The population is all community college students. The variable is course load in semester hours . It is quantitative, so the parameter is a mean. The claim is, “The mean course load for all community college students is less than 12 semester hours.”
Do the majority of community college students qualify for federal student loans? This question contains a claim about a population proportion and information about the population, the variable, and the parameter. The population is all community college students. The variable is Qualify for federal student loan (yes or no). It is categorical, so the parameter is a proportion. The claim is, “The proportion of community college students who qualify is greater than 0.5” (a majority means more than half, or 0.5).
In community colleges, do female students and male students have different mean GPAs? This question contains a claim that compares two population means. Again, we see information about the populations, the variable, and the parameters. The two populations are female community college students and male community college students. The variable is GPA . It is quantitative, so the parameters are means. The claim is, “The mean GPA for female community college students is different from the mean GPA for male community college students.” Notice that the claim compares the two population means, but there is no claim about the numeric value of either mean.
Are college athletes more likely than nonathletes to receive academic advising? This question contains a claim that compares two population proportions: college athletes and college students who are not athletes. The variable is Receive academic advising (yes or no). The variable is categorical, so the parameters are proportions. The claim is, “The proportion of all college athletes who receive academic advising is greater than the proportion of all nonathletes in college who receive academic advising.” Notice that the claim compares two population proportions, but there is no claim about the numeric value of either proportion.
In the case of testing a claim about a single population parameter, we compare it to a numeric value. In the case of testing a claim about two population parameters, we compare them to each other.
Try It
Identify the type of claim in each research question below.
https://assessments.lumenlearning.co...sessments/3960
https://assessments.lumenlearning.co...sessments/3961
Next Steps: Forming Hypotheses
We already know that in inference we use a sample to draw a conclusion about a population. If the research question contains a claim about the population, we translate the claim into two related hypotheses.
The null hypothesis is a hypothesis about the value of the parameter. The null hypothesis relates to our work in Linking Probability to Statistical Inference where we drew a conclusion about a population parameter on the basis of the sampling distribution. We started with an assumption about the value of the parameter, then used a simulation to simulate the selection of random samples from a population with this parameter value. Or we used the parameter value in a mathematical model to describe the center and spread of the sampling distribution. The null hypothesis gives the value of the parameter that we will use to create the sampling distribution. In this way, the null hypothesis states what we assume to be true about the population.
The alternative hypothesis usually reflects the claim in the research question about the value of the parameter. The alternative hypothesis says the parameter is “greater than” or “less than” or “not equal to” the value we assume to true in the null hypothesis.
Example
Stating Hypotheses
Here are the hypotheses for the research questions from the previous example. The null hypothesis is abbreviated H 0 . The alternative hypothesis is abbreviated H a .
Is the average course load for community college students less than 12 semester hours?
- H 0 : The mean course load for community college students is equal to 12 semester hours.
- H a : The mean course load for community college students is less than 12 semester hours.
Do the majority of community college students qualify for federal student loans?
- H 0 : The proportion of community college students who qualify for federal student loans is 0.5.
- H a : The proportion of community college students who qualify for federal student loans is greater than 0.5.
When the research question contains a claim that compares two populations, the null hypothesis states that the parameters are equal. We will see in Modules 9 and 10 that we translate the null hypothesis into a statement about “no difference” in parameter values. We revisit this idea in more depth later.
In community colleges, do female students and male students have different mean GPAs?
- H 0 : In community colleges, female and male students have the same mean GPAs.
- H a : In community colleges, female and male students have different mean GPAs.
Are college athletes more likely than nonathletes to receive academic advising?
- H 0 : In colleges, the proportion of athletes who receive academic advising is equal to the proportion of nonathletes who receive academic advising.
- H a : In colleges, the proportion of athletes who receive academic advising is greater than the proportion of nonathletes who receive academic advising.
Comment
Here are some general observations about null and alternative hypotheses.
- The hypotheses are competing claims about the parameter or about the comparison of parameters.
- Both hypotheses are statements about the same population parameter or same two population parameters.
- The null hypothesis contains an equal sign.
- The alternative hypothesis is always an inequality statement. It contains a “less than” or a “greater than” or a “not equal to” symbol.
- In a statistical investigation, we determine the research question, and thus the hypotheses, before we collect data.
The process of forming hypotheses, collecting data, and using the data to draw a conclusion about the hypotheses is called hypothesis testing .
Contributors and Attributions
- Concepts in Statistics. Provided by : Open Learning Initiative. Located at : http://oli.cmu.edu . License : CC BY: Attribution
