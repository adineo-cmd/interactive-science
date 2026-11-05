# Source pack — subjects/statistics/expert/multivariate-statistics
Lesson title: Multivariate Statistics
Level: expert
Match confidence: 1.55

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.55 — LibreTexts: 1: Sampling and Descriptive Statistics
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Courses/Coalinga_College/Introduction_to_Statistics_(MATH_025_CID%3A_110)/01%3A_Sampling_and_Descriptive_Statistics

1: Sampling and Descriptive Statistics
Included in this chapter are the basic ideas and words of probability and statistics. You will soon understand that statistics and probability work together. You will also learn how data are gathered and what "good" data can be distinguished from "bad."
-
- 1.3: Data, Sampling, and Variation in Data and Sampling
- Data are individual items of information that come from a population or sample. Data may be classified as qualitative, quantitative continuous, or quantitative discrete. Because it is not practical to measure the entire population in a study, researchers use samples to represent the population. A random sample is a representative group from the population chosen by using a method that gives each individual in the population an equal chance of being included in the sample.
-
- 1.4: Frequency, Frequency Tables, and Levels of Measurement
- Some calculations generate numbers that are artificially precise. It is not necessary to report a value to eight decimal places when the measures that generated that value were only accurate to the nearest tenth. Round off your final answer to one more decimal place than was present in the original data. This means that if you have data measured to the nearest tenth of a unit, report the final statistic to the nearest hundredth.
-
- 1.5: Experimental Design and Ethics
- A poorly designed study will not produce reliable data. There are certain key components that must be included in every experiment. To eliminate lurking variables, subjects must be assigned randomly to different treatment groups. One of the groups must act as a control group, demonstrating what happens when the active treatment is not applied. Participants in the control group receive a placebo treatment that looks exactly like the active treatments but cannot influence the response variable.
-
- 1.6: Prelude to Descriptive Statistics
- In this chapter, you will study numerical and graphical ways to describe and display your data. This area of statistics is called "Descriptive Statistics." You will learn how to calculate, and even more importantly, how to interpret these measurements and graphs. In this chapter, we will briefly look at stem-and-leaf plots, line graphs, and bar graphs, as well as frequency polygons, and time series graphs. Our emphasis will be on histograms and box plots.
-
- 1.7: Stem-and-Leaf Graphs (Stemplots), Line Graphs, and Bar Graphs
- A stem-and-leaf plot is a way to plot data and look at the distribution, where all data values within a class are visible. The advantage in a stem-and-leaf plot is that all values are listed, unlike a histogram, which gives classes of data values. A line graph is often used to represent a set of data values in which a quantity varies with time. These graphs are useful for finding trends. A bar graph is a chart that uses either horizontal or vertical bars to show comparisons among categories.
-
- 1.8: Histograms, Frequency Polygons, and Time Series Graphs
- A histogram is a graphic version of a frequency distribution. The graph consists of bars of equal width drawn adjacent to each other. The horizontal scale represents classes of quantitative data values and the vertical scale represents frequencies. The heights of the bars correspond to frequency values. Histograms are typically used for large, continuous, quantitative data sets. A frequency polygon can also be used when graphing large data sets with data points that repeat.
-
- 1.9: Box Plots
- Box plots are a type of graph that can help visually organize data. To graph a box plot the following data points must be calculated: the minimum value, the first quartile, the median, the third quartile, and the maximum value. Once the box plot is graphed, you can display and compare distributions of data.
-
- 1.10: Measures of the Location of the Data
- The values that divide a rank-ordered set of data into 100 equal parts are called percentiles and are used to compare and interpret data. For example, an observation at the 50th percentile would be greater than 50 % of the other obeservations in the set. Quartiles divide data into quarters. The first quartile is the 25th percentile, the second quartile is 50th percentile, and the third quartile is the the 75th percentile. The interquartile range is the range of the middle 50 % of the data values
-
- 1.11: Measures of the Center of the Data
- The mean and the median can be calculated to help you find the "center" of a data set. The mean is the best estimate for the actual data set, but the median is the best measurement when a data set contains several outliers or extreme values. The mode will tell you the most frequently occurring datum (or data) in your data set. The mean, median, and mode are extremely helpful when you need to analyze your data.
-
- 1.12: Measures of the Spread of the Data
- An important characteristic of any set of data is the variation in the data. In some data sets, the data values are concentrated closely near the mean; in other data sets, the data values are more widely spread out from the mean. The most common measure of variation, or spread, is the standard deviation. The standard deviation is a number that measures how far data values are from their mean.
-
- 1.13: Skewness and the Mean, Median, and Mode
- Looking at the distribution of data can reveal a lot about the relationship between the mean, the median, and the mode. There are three types of distributions. A right (or positive) skewed distribution, a left (or negative) skewed distribution and a symmetrical distribution.
Contributors and Attributions
Barbara Illowsky and Susan Dean (De Anza College) with many other contributing authors. Content produced by
OpenStax College
is licensed under a Creative Commons Attribution License 4.0 license. Download for free at
<EMAIL_ADDRESS>.

## Match 1.55 — LibreTexts: 5.7: The Multivariate Normal Distribution
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Bookshelves/Probability_Theory/Probability_Mathematical_Statistics_and_Stochastic_Processes_(Siegrist)/05%3A_Special_Distributions/5.07%3A_The_Multivariate_Normal_Distribution

5.7: The Multivariate Normal Distribution
The multivariate normal distribution is among the most important of multivariate distributions, particularly in statistical inference and the study of Gaussian processes such as Brownian motion. The distribution arises naturally from linear transformations of independent normal variables. In this section, we consider the bivariate normal distribution first, because explicit results can be given and because graphical interpretations are possible. Then, with the aid of matrix notation, we discuss the general multivariate distribution.
The Bivariate Normal Distribution
The Standard Distribution
Recall that the probability density function \( \phi \) of the standard normal distribution is given by \[ \phi(z) = \frac{1}{\sqrt{2 \pi}} e^{-z^2/2}, \quad z \in \R\] The corresponding distribution function is denoted \( \Phi \) and is considered a special function in mathematics: \[ \Phi(z) = \int_{-\infty}^z \phi(x) \, dx = \int_{-\infty}^z \frac{1}{\sqrt{2 \pi}} e^{-x^2/2} \, dx, \quad z \in \R \] Finally, the moment generating function \( m \) is given by \[ m(t) = \E\left(e^{t Z}\right) = \exp\left[\frac{1}{2} \var(t Z)\right] = e^{t^2/2}, \quad t \in \R \]
Suppose that \( Z \) and \( W \) are independent random variables, each with the standard normal distribution. The distribution of \( (Z, W) \) is known as the standard bivariate normal distribution .
The basic properties of the standard bivariate normal distribution follow easily from independence and properties of the (univariate) normal distribution. Recall first that the graph of a function \( f: \R^2 \to \R \) is a surface. For \( c \in \R \), the set of points \( \left\{(x, y) \in \R^2: f(x, y) = c\right\} \) is the level curve of \( f \) at level \( c \). The graph of \( f \) can be understood by means of the level curves.
The probability density function \( \phi_2 \) of the standard bivariate normal distribution is given by \[ \phi_2(z, w) = \frac{1}{2 \pi} e^{-\frac{1}{2}\left(z^2 + w^2\right)}, \quad (z, w) \in \R^2 \]
- The level curves of \( \phi_2 \) are circles centered at the origin.
- The mode of the distribution is \( (0, 0) \).
- \( \phi_2 \) is concave downward on \( \left\{(z, w) \in \R^2: z^2 + w^2 \lt 1\right\} \)
Proof
By independence, \( \phi_2(z, w) = \phi(z) \phi(w) \) for \( (z, w) \in \R^2 \). Parts (a) and (b) are clear. For part (c), the second derivative matrix of \( \phi_2 \) is \[ \left[\begin{matrix} \phi_2(z, w)\left(z^2 - 1\right) & \phi_2(z, w) z w \\ \phi_2(z, w) z w & \phi_2(z, w)\left(w^2 - 1\right) \end{matrix}\right]\] with determinant \( \phi_2^2(z, w) \left(1 - z^2 - w^2\right) \). The determinant is positive and the diagonal entries negative on the circular region \( \left\{(z, w) \in \R^2: z^2 + w^2 \lt 1\right\} \), so the matrix is negative definite on this region.
Clearly \( \phi \) has a number of symmetry properties as well: \( \phi_2(z, w) \) is symmetric in \( z \) about 0 so that \(\phi_2(-z, w) = \phi_2(z, w)\); \( \phi_2(z, w) \) is symmetric in \( w \) about 0 so that \( \phi_2(z, -w) = \phi_2(z, w) \); \( \phi_2(z, w) \) is symmetric in \( (z, w) \) so that \( \phi_2(z, w) = \phi_2(w, z) \). In short, \( \phi_2 \) has the classical
bell shape
that we associate with normal distributions.
Open the bivariate normal experiment, keep the default settings to get the standard bivariate normal distribution. Run the experiment 1000 times. Observe the cloud of points in the scatterplot, and compare the empirical density functions to the probability density functions.
Suppose that \( (Z, W) \) has the standard bivariate normal distribution. The moment generating function \( m_2 \) of \( (Z, W) \) is given by \[ m_2(s, t) = \E\left[\exp(s Z + t W)\right] = \exp\left[\frac{1}{2} \var(s Z + t W)\right] = \exp\left[\frac{1}{2}\left(s^2 + t^2\right)\right], \quad (s, t) \in \R^2 \]
Proof
By independence, \( m_2(s, t) = m(s) m(t) \) for \( (s, t) \in \R^2 \) where \( m \) is the standard normal MGF.
The General Distribution
The general bivariate normal distribution can be constructed by means of an affine transformation on a standard bivariate normal vector. The distribution has 5 parameters. As we will see, two are location parameters, two are scale parameters, and one is a correlation parameter.
Suppose that \( (Z, W) \) has the standard bivariate normal distribution. Let \(\mu, \, \nu \in \R\); \(\sigma, \, \tau \in (0, \infty)\); and \(\rho \in (-1, 1)\), and let \(X\) and \(Y\) be new random variables defined by \begin{align} X & = \mu + \sigma \, Z \\ Y & = \nu + \tau \rho Z + \tau \sqrt{1 - \rho^2} W \end{align} The joint distribution of \((X, Y)\) is called the bivariate normal distribution with parameters \((\mu, \nu, \sigma, \tau, \rho)\).
We can use the change of variables formula to find the joint probability density function.
Suppose that \( (X, Y) \) has the bivariate normal distribution with the parameters \( (\mu, \nu, \sigma, \tau, \rho) \) as specified above. The joint probability density function \( f \) of \((X, Y)\) is given by \[ f(x, y) = \frac{1}{2 \pi \sigma \tau \sqrt{1 - \rho^2}} \exp \left\{ -\frac{1}{2 (1 - \rho^2)} \left[ \frac{(x - \mu)^2}{\sigma^2} - 2 \rho \frac{(x - \mu)(y - \nu)}{\sigma \tau} + \frac{(y - \nu)^2}{\tau^2} \right] \right\}, \quad (x, y) \in \R^2 \]
- The level curves of \( f \) are ellipses centered at \((\mu, \nu)\).
- The mode of the distribution is \( (\mu, \nu) \).
Proof
Consider the transformation that defines \((x, y)\) from \((z, w)\) in the definition . The inverse transformation is given by \begin{align} z & = \frac{x - \mu}{\sigma} \\ w & = \frac{x - \mu}{\sigma \, \sqrt{1 - \rho^2}} - \rho \frac{y - \nu}{\tau \, \sqrt{1 - \rho^2}} \end{align} The Jacobian of the inverse transformation is \[ \frac{\partial(z, w)}{\partial(x, y)} = \frac{1}{\sigma \tau \sqrt{1 - \rho^2}} \] Note that the Jacobian is a constant, because the transformation is affine. The result now follows from the independence of \(Z\) and \(W\), and the change of variables formula
- Note that \( f \) has the form \( f(x, y) = a \exp\left[- b g(x, y)\right] \) where \( a \) and \( b \) are positive constants and \[ g(x, y) = \frac{(x - \mu)^2}{\sigma^2} - 2 \rho \frac{(x - \mu)(y - \nu)}{\sigma \tau} + \frac{(y - \nu)^2}{\tau^2}, \quad (x, y) \in \R^2 \] The graph of \( g \) is a paraboloid opening upward. The level curves of \( f \) are the same as the level curves of \( g \) (but at different levels of course).
- The maximum of \( f \) occurs at the minimum of \( g \), at the point \( (\mu, \nu) \).
The following theorem gives fundamental properties of the bivariate normal distribution.
Suppose that \((X, Y)\) has the bivariate normal distribution with parameters \((\mu, \nu, \sigma, \tau, \rho)\) as specified above. Then
- \(X\) is normally distributed with mean \(\mu\) and standard deviation \(\sigma\).
- \(Y\) is normally distributed with mean \(\nu\) and standard deviation \(\tau\).
- \(\cor(X, Y) = \rho\).
- \( X \) and \( Y \) are independent if and only if \( \rho = 0 \).
Proof
These result can be proved from the probability density function, but it's easier and more helpful to use the transformation definition. So, assume that \( (X, Y) \) is defined in terms of the standard bivariate normal pair \( (Z, W) \) as in the definition .
- \( X = \mu + \sigma Z \) so \( X \) has the normal distribution with mean \( \mu \) and standard deviation \( \sigma \). This is a basic property of the normal distribution, and indeed is the way that the general normal variable is constructed from a standard normal variable.
- Since \( Z \) and \( W \) are independent and each has the standard normal distribution, \( Y = \nu + \tau \rho Z + \tau \sqrt{1 - \rho^2} W \) is normally distributed by another basic property. Because \( Z \) and \( W \) have mean 0, it follows from the linear property of expected value that \( \E(Y) = \nu \). Similarly, since \( Z \) and \( W \) have variance 1, it follows from basic properties of variance that \( \var(Y) = \tau^2 \rho^2 + \tau^2 (1 - \rho^2) = \tau^2\).
- Using the bi-linear property of covariance and independence we have \( \cov(X, Y) = \rho \tau \sigma \, \cov(Z, Z) = \rho \tau \sigma \), and hence from (a) and (b), \( \cor(X, Y) = \rho \).
- As a general property, recall that if \( X \) and \( Y \) are independent then \( \cor(X, Y) = 0 \). Conversely, if \( \rho = 0 \) then \( X = \mu + \sigma Z \) and \( Y = \nu + \tau W \). Since \( Z \) and \( W \) are independent, so are \( X \) and \( Y \).
Thus, two random variables with a joint normal distribution are independent if and only if they are uncorrelated.
In the bivariate normal experiment, change the standard deviations of \(X\) and \(Y\) with the scroll bars. Watch the change in the shape of the probability density functions. Now change the correlation with the scroll bar and note that the probability density functions do not change. For various values of the parameters, run the experiment 1000 times. Observe the cloud of points in the scatterplot, and compare the empirical density functions to the probability density functions.
In the case of perfect correlation (\( \rho = 1 \) or \( \rho = -1 \)), the distribution of \( (X, Y) \) is also said to be bivariate normal, but degenerate . In this case, we know from our study of covariance and correlation that \( (X, Y) \) takes values on the regression line \( \left\{(x, y) \in \R^2: y = \nu + \rho \frac{\tau}{\sigma} (x - \mu)\right\} \), and hence does not have a probability density function (with respect to Lebesgue measure on \( \R^2 \)). Degenerate normal distributions will be discussed in more detail below .
In the bivariate normal experiment, run the experiment 1000 times with the values of \( \rho \) given below and selected values of \( \sigma \) and \( \tau \). Observe the cloud of points in the scatterplot and compare the empirical density functions to the probability density functions.
- \( \rho \in \{0, 0.3, 0.5, 0.7, 1\} \)
- \( \rho \in \{-0.3, -0.5, -0.7, -1\} \)
The conditional distributions are also normal.
Suppose that \( (X, Y) \) has the bivariate normal distribution with parameters \( (\mu, \nu, \sigma, \tau, \rho) \) as specified above.
- For \( x \in \R \), the conditional distribution of \(Y\) given \(X = x\) is normal with mean \( \E(Y \mid X = x) = \nu + \rho \frac{\tau}{\sigma} (x - \mu) \) and variance \(\var(Y \mid X = x) = \tau^2 \left(1 - \rho^2\right)\).
- For \( y \in \R \), the conditional distribution of \(X\) given \(Y = y\) is normal with mean \( \E(X \mid Y = y) = \mu + \rho \frac{\sigma}{\tau} (y - \nu) \) and variance \(\var(X \mid Y = y) = \sigma^2 \left(1 - \rho^2\right)\).
Proof from density functions
By symmetry, we need only prove (a). The conditional PDF of \( Y \) given \( X = x \) is \( y \mapsto f(x, y) \big/ g(x) \) where \( f \) is the joint PDF , and where \( g \) is the PDF of \( X \), namely the normal PDF with mean \( \mu \) and standard deviation \( \sigma \). The result then follows after some algebra.
Proof from random variables
Again, we only need to prove (a). We can assume that \( (X, Y) \) is defined in terms of a standard normal pair \( (Z, W) \) as in the definition . Hence \[ Y = \nu + \rho \tau \frac{X - \mu}{\sigma} + \tau \sqrt{1 - \rho^2} W \] Since that \(X\) and \(W\) are independent, the conditional distribution of \( Y \) given \( X = x \) is the distribution of \( \nu + \rho \tau \frac{x - \mu}{\sigma} + \tau \sqrt{1 - \rho^2} W \). The latter distribution is normal, with mean and variance specified in the theorem.
Note that the conditional variances do not depend on the value of the given variable.
In the bivariate normal experiment, set the standard deviation of \(X\) to 1.5, the standard deviation of \(Y\) to 0.5, and the correlation to 0.7.
- Run the experiment 100 times.
- For each run, compute \(\E(Y \mid X = x)\) the predicted value of \(Y\) for the given the value of \(X\).
- Over all 100 runs, comp

## Match 1.55 — LibreTexts: 12: Nonparametric Statistics
License: Public Domain · https://stats.libretexts.org/Courses/Las_Positas_College/Math_40%3A_Statistics_and_Probability/12%3A_Nonparametric_Statistics

12: Nonparametric Statistics
Because distribution-free tests do not assume normality, they can be less susceptible to non-normality and extreme values. Therefore, they can be more powerful than the standard tests of means that assume normality.
-
- 12.1: Benefits of Distribution Free Tests
- Tests assuming normality can have particularly low power when there are extreme values or outliers. A contributing factor is the sensitivity of the mean to extreme values. Although transformations can ameliorate this problem in some situations, they are not a universal solution. Tests assuming normality often have low power for leptokurtic distributions. Transformations are generally less effective for reducing kurtosis than for reducing skew.
-
- 12.4: Randomization Association
- A significance test for Pearson's r is described in the section inferential statistics for b and r . The significance test described in that section assumes normality. This section describes a method for testing the significance of r that makes no distributional assumptions.
-
- 12.5: Fisher's Exact Test
- The chapter on Chi Square showed one way to test the relationship between two nominal variables. A special case of this kind of relationship is the difference between proportions. This section shows how to compute a significance test for a difference in proportions using a randomization test.
-
- 12.6: Rank Randomization Two Conditions
- The major problem with randomization tests is that they are very difficult to compute. Rank randomization tests are performed by first converting the scores to ranks and then computing a randomization test. The primary advantage of rank randomization tests is that there are tables that can be used to determine significance. The disadvantage is that some information is lost when the numbers are converted to ranks. Rank randomization tests are generally less powerful than randomization tests.
-
- 12.12: Spearman Rank Correlation
- Use Spearman rank correlation when you have two ranked variables, and you want to see whether the two variables covary; whether, as one variable increases, the other variable tends to increase or decrease. You also use Spearman rank correlation if you have one measurement variable and one ranked variable; in this case, you convert the measurement variable to ranks and use Spearman rank correlation on the two sets of ranks.
Contributors and Attributions
-
Online Statistics Education: A Multimedia Course of Study ( http://onlinestatbook.com/ ). Project Leader: David M. Lane, Rice University.
