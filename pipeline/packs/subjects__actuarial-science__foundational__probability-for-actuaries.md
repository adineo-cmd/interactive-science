# Source pack — subjects/actuarial-science/foundational/probability-for-actuaries
Lesson title: Probability for Actuaries
Level: foundational
Match confidence: 1.57

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.57 — LibreTexts: 5: Discrete Probability Distributions
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Courses/Cosumnes_River_College/STAT_300%3A_Introduction_to_Probability_and_Statistics_(Nam_Lam)/05%3A_Discrete_Probability_Distributions

Skip to main content
5: Discrete Probability Distributions
-
-
Last updated
-
-
Save as PDF
-
-
-
5.1: Basics of Probability Distributions
-
There are different types of quantitative variables, called discrete or continuous. What is the difference between discrete and continuous data? Discrete data can only take on particular values in a range. Continuous data can take on any value in a range. Discrete data usually arises from counting while continuous data usually arises from measuring.
-
-
5.2: Binomial Probability Distribution
-
The focus of the section was on discrete probability distributions (pdf). To find the pdf for a situation, you usually needed to actually conduct the experiment and collect data. Then you can calculate the experimental probabilities. Normally you cannot calculate the theoretical probabilities instead. However, there are certain types of experiment that allow you to calculate the theoretical probability. One of those types is called a Binomial Experiment.
-
-
5.3: Mean and Standard Deviation of Binomial Distribution
-
If you list all possible values of x in a Binomial distribution, you get the Binomial Probability Distribution (pdf). You can draw a histogram of the pdf and find the mean, variance, and standard deviation of it.

## Match 1.57 — LibreTexts: 17.6: Appendix F to Applied Probability- Properties of conditional expectation, given a random vector
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/3.0/ · https://stats.libretexts.org/Bookshelves/Probability_Theory/Applied_Probability_(Pfeiffer)/17%3A_Appendices/17.06%3A_Appendix_F_to_Applied_Probability-_Properties_of_conditional_expectation_given_a_random_vector

17.6: Appendix F to Applied Probability- Properties of conditional expectation, given a random vector
We suppose, without repeated assertion, that the random variables and functions of random vectors are integrable, as needed.
(CE1):
Defining condition
. \(e(X) = E[g(Y)|X]\) a.s. iff \(E[I_M (X) g(Y)] = E[I_M (X) e(X)]\) for each Borel set \(M\) on the codomain of \(X\).
(CE1a): If \(P(X \in M) > 0\), then \(E[I_M(X) e(X)] = E[g(Y)|X \in M] P(X \in M)\)
(CE1b): Law of total probability. \(E[g(Y)] = E\{[g(Y)|X]\}\)
(CE2):
Linearity
. For any constants \(a, b\)
\(E[ag(Y) + bh(Z)|X] = aE[g(Y)|X] + bE[h(Z)|X]\) a.s.
(Extends to any finite linear combination)
(CE3): positivity; monotonicty.
a. \(g(Y) \ge 0\) a.s. implies \(E[g(Y)|X] \ge 0\) a.s.
b. \(g(Y) \ge h(Z)\) a.s. implies \(E[g(Y)|X] \ge E[h(Z)|X]\) a.s.
(CE4):
Monotone convergence
. \(Y_n \to Y\) a.s. monotonically implies \(E[Y_n |X] \to E[Y|X]\) a.s.
(CE5):
Independence
. \(\{X, Y\}\) is an independent pair
a. iff \(E[g(Y)|X] = E[g(Y)]\) a.s. for all Borel functions \(g\)
b. iff \(E[I_N (Y)|X] = E[I_N (Y)]\) a.s. for all Borel sets \(N\) on the codomain of \(Y\)
(CE6): \(e(X) = E[g(Y)|X]\) a.s. iff \(E[h(X)g(Y)] = E[h(X)e(X)]\) a.s. for any Borel function \(h\)
(CE7): \(E[h(X)|X] = h(X)\) a.s. for any Borel function \(h\)
(CE8): \(E[h(X)g(Y)|X] = h(X) E[g(Y)|X]\) a.s. for any Borel function \(h\)
(CE9): If \(X = h(W)\) and \(W = k(X)\), with \(h, k\) Borel functions, then \(E[g(Y)|X] = E[g(Y)|W]\) a.s.
(CE10): If \(g\)is a Borel function such that \(E[g(t, Y)]\) is finite for all \(t\) on the range of \(X\) and \(E[g(X, Y)]\) is finite, then
a. \(E[g(X, Y)|X = t] = E[g(t, Y)|X = t]\) a.s. \([P_X]\)
b. If \(\{X, Y\}\) is independent, then \(E[g(X, Y)|X = t] = E[g(t, Y)]\) a.s. \([P_X]\)
(CE11): Suppose \(\{X(t): t \in T\}\) is a real-valued measurable random process whose parameter set \(T\) is a Borel subset of the real line and \(S\) is a random variable whose range is a subset of \(T\), so that \(X(S)\) is a random variable.
If \(E[X(t)]\) is finite for all \(t\) in \(T\) and \(E[X(S)]\) is finite, then
a. \9E[X(S)|S = t] = E[X(t)|S = t]\) a.s \([P_S]\)
b. If, in addition, \(\{S, X_T\}\) is independent, then \(E[X(S)|S = t] = E[X(t)]\) a.s. \([P_S]\)
(CE12):
Countable additivity and countable sums
.
a. If \(Y\) is integrable on \(A\) and \(A = \bigvee_{n = 1}^{\infty} A_n\).
then \(E[I_A Y|X] = \sum_{n = 1}^{\infty} E[I_A Y|X]\) a.s.
b. If \(\sum_{n = 1}^{\infty} E[|Y_n|] < \infty\), thne \(E[\sum_{n = 1}^{\infty} Y_n|X]\) a.s.
(CE13):
Triangle inequality
. \(|E[g(Y)|X]| \le E[|g(Y)||X]\) a.s.
(CE14):
Jensen's inequality
. If \(g\) is a convex function on an interval \(I\) which contains the range of a real random variable \(Y\), then \(g\{E[Y|X]\} \le E[g(Y)|X]\) a.s.
(CE15): Suppose \(E[|Y|^p] < \infty\) and \(E[|Z|^p] < \infty\) for \(1 \le p < \infty\). Then \(E\{|E[Y|X] - E[Z|X]|^p\} \le E[|Y - Z|^p] < \infty\)

## Match 1.56 — LibreTexts: 4: Probability Distributions
License: Public Domain · https://stats.libretexts.org/Courses/Fort_Hays_State_University/Elements_of_Statistics/04%3A_Probability_Distributions

Skip to main content
-
-
4.1: Random Variables
-
A random variable is a quantitative variable that assigns a number to each outcome in the sample space of a given random experiment. A random variable can be either discrete (having specific values) or continuous (any value in a continuous range). The use of random variables is most common in probability and statistics as they quantify outcomes of random occurrences.
-
-
4.2: Analyzing Discrete Random Variables
-
In this section, we discuss methods of describing and analyzing discrete random variables.
-
-
4.3: Binomial Distributions
-
In the present section, we consider probability distributions for which there are just two possible outcomes with fixed probabilities summing to one. These distributions are called binomial distributions.
-
-
-
4.4: Continuous Probability Distributions
-
This section introduces the ideas surrounding the probability distributions of continuous random variables.
-
-
4.5: Common Continuous Probability Distributions
-
In this section, we name and explore key properties of some of the most commonly used probability density functions in statistical work. We will end by examining how certain regions within our distributions can directly relate to other regions within our distributions using some basic geometric reasoning.
-
-
4.6: Accumulation Functions And Area Measures in Normal Distributions
-
We have discussed the relationship between the area of regions within a continuous random variable's probability distribution and the probability of occurrence in relation to that variable. We now focus on how to produce these left-region area measures on normal distributions using technology. Once we reasonably master these concepts in relation to normal distributions, similar ideas are used in t− and χ2− distributions, as well as many other specialized distributions.
