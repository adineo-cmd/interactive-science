# Source pack — subjects/data-science/advanced/machine-learning-basics
Lesson title: Machine Learning Basics
Level: advanced
Match confidence: 2.03

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.03 — LibreTexts: 7.3: Machine learning
License: Public Domain · https://stats.libretexts.org/Bookshelves/Introductory_Statistics/Book%3A_Visual_Statistics_Use_R_(Shipunov)/07%3A_Multidimensional_Data_-_Analysis_of_Structure/7.03%3A_Machine_learning

7.3: Machine learning
Methods explained in this section are not only visualizations. Together, they frequently called “classification with learning”, “supervised classification”, “machine learning”, or just “classification”. All of them are based on the idea of learning :
... He scrambled through and rose to his feet. ... He saw nothing but colours—colours that refused to form themselves into things. Moreover, he knew nothing yet well enough to see it: you cannot see things till you know roughly what they are\(^{[1]}\). His first impression was of a bright, pale world—a watercolour world out
of a child’s paint-box; a moment later he recognized the flat belt of light blue as a sheet of water, or of something like water, which came nearly to his feet. They were on the shore of a lake or river...
C.S.Lewis. Out of the Silent Planet.
First, small part of data where identity is already known ( training dataset ) used to develop (fit) the model of classification (Figure \(\PageIndex{2}\)). On the next step, this model is used to classify objects with unknown identity ( testing dataset ). In most of these methods, it is possible to estimate the quality of the classification and also assess the significance of the every character.
Let us create training and testing datasets from iris data:
Code \(\PageIndex{1}\) (R):
( iris.unknown is of course the fake unknown so to use it properly, we must specify iris.unknown[, -5] . On the other hand, species information will help to create misclassification table (confusion matrix, see below).)
Learning with regression
Linear discriminant analysis
One of the simplest methods of classification is the linear discriminant analysis (LDA). The basic idea is to create the set of linear functions which “decide” how to classify the particular object.
Code \(\PageIndex{2}\) (R):
Training resulted in the hypothesis which allowed almost all plants (with an exception of seven Iris virginica ) to be placed into the proper group. Please note that LDA does not require scaling of variables.
It is possible to check LDA results with inferential methods. Multidimensional analysis of variation (MANOVA) allows to understand the relation between data and model (classification from LDA):
Code \(\PageIndex{3}\) (R):
Important here are both p-value based on Fisher statistics, and also the value of Wilks’ statistics which is the likelihood ratio (in our case, the probability that groups are not different ).
It is possible to check the relative importance of every character in LDA with ANOVA-like techniques:
Code \(\PageIndex{4}\) (R):
(This idea is applicable to other classification methods too.)
... and also visualize LDA results (Figure \(\PageIndex{3}\)):
Code \(\PageIndex{5}\) (R):
(Please note 95% confidence ellipses with centers.)
To place all points on the plot, we simply used all data as training. Note the good discrimination (higher than in PCA, MDS or clustering), even between close Iris versicolor and I. virginica . This is because LDA frequently overestimates the differences between groups. This feature, and also the parametricity and linearity of LDA made it less used over the last years.
With LDA, it is easy to illustrate one more important concept of machine learning: quality of training . Consider the following example:
Code \(\PageIndex{6}\) (R):
Misclassification error here almost two times bigger! Why?
Code \(\PageIndex{7}\) (R):
Well, using sample() (and particular set.seed() value) resulted in biased training sample, this is why our second model was trained so poorly. Our first way to sample (every 5th iris) was better, and if there is a need to use sample() , consider to sample each species separately .
Now, return to the default random number generator settings:
Code \(\PageIndex{8}\) (R):
Please note that it is widely known that while LDA was developed on biological material, this kind of data rarely meets two key assumptions of this method: (1) multivariate normality and (2) multivariate homoscedasticity. Amazingly, even Fisher’s Iris data with which LDA was invented, does not meet these assumptions! Therefore, we do not recommend to use LDA and keep it here mostly for teaching purposes.
Recursive partitioning
To replace linear discriminant analysis, multiple methods with similar background ideas were invented. Recursive partitioning, or decision trees (regression trees, classification trees), allow, among other, to make and visualize the sort of discrimination key where every step results in splitting objects in two groups (Figure \(\PageIndex{4}\)):
Code \(\PageIndex{9}\) (R):
We loaded first the tree package containing tree() function ( rpart is another package which makes classification trees). Then we again used the whole dataset as training data. The plot shows that all plants with petal length less than 2.45 cm belong to Iris setosa , and from the rest those plants which have petal width less than 1.75 cm and petal length more than 4.95 cm, are I. versicolor ; all other irises belong to I. virginica .
In fact, these trees are result of something similar to “hierarchical discriminant analysis”, and it is possible to use them for the supervised classification:
Code \(\PageIndex{10}\) (R):
Try to find out which characters distinguish species of horsetails described in eq.txt data file. File eq_c.txt contains the description of characters.
Package party offers sophisticated recursive partitioning methods together with advanced tree plots (Figure \(\PageIndex{5}\)):
Code \(\PageIndex{11}\) (R):
(For species names, we used one-letter abbreviations.)
Ensemble learnig
Random Forest
The other method, internally similar to regression trees, rapidly gains popularity. This is the Random Forest . Its name came from the ability to use numerous decision trees and build the complex classification model. Random Forest belongs to bagging ensemble methods ; it uses bootstrap (see in Appendix) to multiply the number of trees in the model (hence “forest”). Below is an example of Random Forest classifier made from the iris data:
Code \(\PageIndex{12}\) (R):
Here results are similar to LDA but Random Forest allows for more. For example, it can clarify the importance of each character (with function
importance()
), and reveal classification distances (proximities) between all objects of training subset (these distances could be in turn used for clustering). Random Forest could also visualize the multidimensional dataset (Figure \(\PageIndex{6}\)):
Code \(\PageIndex{13}\) (R):
(We applied several tricks to show convex hulls and their centroids.)
Package ranger implements even faster variant of Random Forest algorithm, it also can employ parallel calculations.
Gradient boosting
There are many weak classification methods which typically make high misclassification errors. However, many of them are also ultra-fast. So, is it possible to combine many weak learners to make the strong one? Yes! This is what boosting methods do. Gradient boosting employs multi-step optimization and is now among most frequently using learning techniques. In R , there are several gradient boosting packages, for example, xgboost and gbm :
Code \(\PageIndex{14}\) (R):
(Plot is purely technical; in the above form, it will show the marginal effect (effect on membership) of the 1st variable. Please make it yourself. “Membership trick” selects the “best species” from three alternatives as gbm() reports classification result in fuzzy form.)
Learning with proximity
k-Nearest Neighbors algorithm (or kNN) is the “lazy classifier” because it does not work until unknown data is supplied:
Code \(\PageIndex{15}\) (R):
kNN is based on distance calculation and “voting”. It calculates distances from every unknown object to the every object of the training set. Next, it considers several (5 in the case above) nearest neighbors with known identity and finds which id is prevalent. This prevalent id assigned to the unknown member. Function knn() uses Euclidean distances but in principle, any distance would work for kNN.
To illustrate idea of nearest neighbors, we use Voronoi decomposition , the technique which is close to both kNN and distance calculation:
Code \(\PageIndex{16}\) (R):
The plot (Figure \(\PageIndex{7}\)) contains multiple cells which represent neighborhoods of training sample (big dots). This is not exactly what kNN does, but idea is just the same. In fact, Voronoi plot is a good tool to visualize any distance-based approach.
Depth classification based on how close an arbitrary point of the space is located to an implicitly defined center of a multidimensional data cloud:
Code \(\PageIndex{17}\) (R):
Learning with rules
Naïve Bayes classifier is one of the simplest machine learning algorithms which tries to classify objects based on the probabilities of previously seen attributes. Quite unexpectedly, it is typically a good classifier:
Code \(\PageIndex{18}\) (R):
Note that Naïve Bayes classifier could use not only numerical like above, but also nominal predictors (which is similar to correspondence analysis.)
Apriori method is similar to regression trees but instead of classifying objects, it researches association rules between classes of objects. This method could be used not only to find these rules but also to make classification. Note that measurement iris data is less suitable for association rules then nominal data, and it needs discretization first:
Code \(\PageIndex{19}\) (R):
(Rules are self-explanatory. What do you think, does this method performs better for the nominal data? Please find it out.)
Learning from the black box
Famous SVM, Support Vector Machines is a kernel technique which calculates parameters of the hyper-planes dividing multiple groups in the multidimensional space of characters:
Code \(\PageIndex{20}\) (R):
Classification, or prediction grid often helps to illustrate the SVM method. Data points are arranged with PCA to reduce dimensionality, and then classifier predicts the identity for the every point in the artificially made grid (Figure \(\PageIndex{8}\)). This is possible to perform manually but Gradd() function simplifies plotting:
Code \(\PageIndex{21}\) (R):
And finally, neural networks ! This name is used for the statistical technique based on some features of neural cells, neurons . First, we need to prepare data and convert categorical variable Species into three logical dummy variables :
Code \(\PageIndex{22}\) (R):
Now, we call neuralnet package and proceed to the main calculation. The package “wants” to supply all terms in the model explicitly:
Code \(\PageIndex{23}\) (R):
(Note use of set.seed() , this is to make your results similar to presented here.)
Now predict (with compute() function) and check misclassification:
Code \(\PageIndex{24}\) (R):
Results of neural network prediction are fuzzy, similar to the results of fuzzy clustering or regression trees, this is why which.max() was applied for every row. As you see, this is one of the lowest misclassification errors.
It is possible to plot the actual network:
Code \(\PageIndex{25}\) (R):
The plot (Figure 7.4.1) is a bit esoteric for the newbie, but hopefully will introduce into the method because there is an apparent multi-layered structure which is used for neural networks decisions.
References
1. Emphasis mine.

## Match 2.03 — LibreTexts: 18.3: Learning the Basics, and Learning Them in R
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://stats.libretexts.org/Bookshelves/Applied_Statistics/Learning_Statistics_with_R_-_A_tutorial_for_Psychology_Students_and_other_Beginners_(Navarro)/18%3A_Epilogue/18.03%3A_Learning_the_Basics_and_Learning_Them_in_R

18.3: Learning the Basics, and Learning Them in R
Okay, that was… long. And even that listing is massively incomplete. There really are a lot of big ideas in statistics that I haven’t covered in this book. It can seem pretty depressing to finish a 600-page textbook only to be told that this only the beginning, especially when you start to suspect that half of the stuff you’ve been taught is wrong. For instance, there are a lot of people in the field who would strongly argue against the use of the classical ANOVA model, yet I’ve devote two whole chapters to it! Standard ANOVA can be attacked from a Bayesian perspective, or from a robust statistics perspective, or even from a “it’s just plain wrong” perspective (people very frequently use ANOVA when they should actually be using mixed models). So why learn it at all?
As I see it, there are two key arguments. Firstly, there’s the pure pragmatism argument. Rightly or wrongly, ANOVA is widely used. If you want to understand the scientific literature, you need to understand ANOVA. And secondly, there’s the “incremental knowledge” argument. In the same way that it was handy to have seen one-way ANOVA before trying to learn factorial ANOVA, understanding ANOVA is helpful for understanding more advanced tools, because a lot of those tools extend on or modify the basic ANOVA setup in some way. For instance, although mixed models are way more useful than ANOVA and regression, I’ve never heard of anyone learning how mixed models work without first having worked through ANOVA and regression. You have to learn to crawl before you can climb a mountain.
Actually, I want to push this point a bit further. One thing that I’ve done a lot of in this book is talk about fundamentals. I spent a lot of time on probability theory. I talked about the theory of estimation and hypothesis tests in more detail than I needed to. When talking about R, I spent a lot of time talking about how the language works, and talking about things like writing your own scripts, functions and programs. I didn’t just teach you how to draw a histogram using
hist()
, I tried to give a basic overview of how the graphics system works. Why did I do all this? Looking back, you might ask whether I really
needed
to spend all that time talking about what a probability distribution is, or why there was even a section on probability density. If the goal of the book was to teach you how to run a t-test or an ANOVA, was all that really necessary? Or, come to think of it, why bother with R at all? There are lots of free alternatives out there: PSPP, for instance, is an SPSS-like clone that is totally free, has simple “point and click” menus, and can (I think) do every single analysis that I’ve talked about in this book. And you can learn PSPP in about 5 minutes. Was this all just a huge waste of everyone’s time???
The answer, I hope you’ll agree, is no. The goal of an introductory stats is
not
to teach ANOVA. It’s not to teach t-tests, or regressions, or histograms, or p-values. The goal is to start you on the path towards becoming a skilled data analyst. And in order for you to become a skilled data analyst, you need to be able to do more than ANOVA, more than t-tests, regressions and histograms. You need to be able to
think properly
about data. You need to be able to learn the more advanced statistical models that I talked about in the last section, and to understand the theory upon which they are based. And you need to have access to software that will let you use those advanced tools. And this is where – in my opinion at least – all that extra time I’ve spent on the fundamentals pays off. If you understand the graphics system in R, then you can draw the plots that
you
want, not just the canned plots that someone else has built into R for you. If you understand probability theory, you’ll find it much easier to switch from frequentist analyses to Bayesian ones. If you understand the core mechanics of R, you’ll find it much easier to generalise from linear regressions using
lm()
to using generalised linear models with
glm()
or linear mixed effects models using
lme()
and
lmer()
. You’ll even find that a basic knowledge of R will go a long way towards teaching you how to use other statistical programming languages that are based on it. Bayesians frequently rely on tools like WinBUGS and JAGS, which have a number of similarities to R, and can in fact be called from within R. In fact, because R is the “lingua franca of statistics”, what you’ll find is that most ideas in the statistics literature has been implemented somewhere as a package that you can download from CRAN. The same cannot be said for PSPP, or even SPSS.
In short, I think that the big payoff for learning statistics this way is extensibility . For a book that only covers the very basics of data analysis, this book has a massive overhead in terms of learning R, probability theory and so on. There’s a whole lot of other things that it pushes you to learn besides the specific analyses that the book covers. So if your goal had been to learn how to run an ANOVA in the minimum possible time, well, this book wasn’t a good choice. But as I say, I don’t think that is your goal. I think you want to learn how to do data analysis. And if that really is your goal, you want to make sure that the skills you learn in your introductory stats class are naturally and cleanly extensible to the more complicated models that you need in real world data analysis. You want to make sure that you learn to use the same tools that real data analysts use, so that you can learn to do what they do. And so yeah, okay, you’re a beginner right now (or you were when you started this book), but that doesn’t mean you should be given a dumbed-down story, a story in which I don’t tell you about probability density, or a story where I don’t tell you about the nightmare that is factorial ANOVA with unbalanced designs. And it doesn’t mean that you should be given baby toys instead of proper data analysis tools. Beginners aren’t dumb; they just lack knowledge. What you need is not to have the complexities of real world data analysis hidden from from you. What you need are the skills and tools that will let you handle those complexities when they inevitably ambush you in the real world.
And what I hope is that this book – or the finished book that this will one day turn into – is able to help you with that.
References
Adair, G. 1984. “The Hawthorne Effect: A Reconsideration of the Methodological Artifact.” Journal of Applied Psychology 69: 334–45.
Agresti, A. 1996. An Introduction to Categorical Data Analysis . Hoboken, NJ: Wiley.
———. 2002. Categorical Data Analysis . 2nd ed. Hoboken, NJ: Wiley.
Akaike, H. 1974. “A New Look at the Statistical Model Identification.” IEEE Transactions on Automatic Control 19: 716–23.
Bickel, P. J., E. A. Hammel, and J. W. O’Connell. 1975. “Sex Bias in Graduate Admissions: Data from Berkeley.” Science 187: 398–404.
Box, J. F. 1987. “Guinness, Gosset, Fisher, and Small Samples.” Statistical Science 2: 45–52.
Braun, John, and Duncan J Murdoch. 2007. A First Course in Statistical Programming with R . Cambridge University Press Cambridge.
Brown, M. B., and A. B. Forsythe. 1974. “Robust Tests for Equality of Variances.” Journal of the American Statistical Association 69: 364–67.
Campbell, D. T., and J. C. Stanley. 1963. Experimental and Quasi-Experimental Designs for Research . Boston, MA: Houghton Mifflin.
Cohen, J. 1988. Statistical Power Analysis for the Behavioral Sciences . 2nd ed. Lawrence Erlbaum.
Cook, R. D., and S. Weisberg. 1983. “Diagnostics for Heteroscedasticity in Regression.” Biometrika 70: 1–10.
Cramér, H. 1946. Mathematical Methods of Statistics . Princeton: Princeton University Press.
Dunn, O.J. 1961. “Multiple Comparisons Among Means.” Journal of the American Statistical Association 56: 52–64.
Ellis, P. D. 2010. The Essential Guide to Effect Sizes: Statistical Power, Meta-Analysis, and the Interpretation of Research Results . Cambridge, UK: Cambridge University Press.
Ellman, Michael. 2002. “Soviet Repression Statistics: Some Comments.” Europe-Asia Studies 54 (7). Taylor & Francis: 1151–72.
Evans, J. St. B. T., J. L. Barston, and P. Pollard. 1983. “On the Conflict Between Logic and Belief in Syllogistic Reasoning.” Memory and Cognition 11: 295–306.
Evans, M., N. Hastings, and B. Peacock. 2011. Statistical Distributions (3rd Ed) . Wiley.
Fisher, R. A. 1922a. “On the Interpretation of χ2 from Contingency Tables, and the Calculation of p.” Journal of the Royal Statistical Society 84: 87–94.
———. 1922b. “On the Mathematical Foundation of Theoretical Statistics.” Philosophical Transactions of the Royal Society A 222: 309–68.
———. 1925. Statistical Methods for Research Workers . Edinburgh, UK: Oliver; Boyd.
Fox, J., and S. Weisberg. 2011. An R Companion to Applied Regression . 2nd ed. Los Angeles: Sage.
Gelman, A., and H. Stern. 2006. “The Difference Between ‘Significant’ and ‘Not Significant’ Is Not Itself Statistically Significant.” The American Statistician 60: 328–31.
Gunel, Erdogan, and James Dickey. 1974. “Bayes Factors for Independence in Contingency Tables.” Biometrika , 545–57.
Hays, W. L. 1994. Statistics . 5th ed. Fort Worth, TX: Harcourt Brace.
Hedges, L. V. 1981. “Distribution Theory for Glass’s Estimator of Effect Size and Related Estimators.” Journal of Educational Statistics 6: 107–28.
Hedges, L. V., and I. Olkin. 1985. Statistical Methods for Meta-Analysis . New York: Academic Press.
Hogg, R. V., J. V. McKean, and A. T. Craig. 2005. Introduction to Mathematical Statistics . 6th ed. Upper Saddle River, NJ: Pearson.
Holm, S. 1979. “A Simple Sequentially Rejective Multiple Test Procedure.” Scandinavian Journal of Statistics 6: 65–70.
Hothersall, D. 2004. History of Psychology . McGraw-Hill.
Hsu, J. C. 1996. Multiple Comparisons: Theory and Methods . London, UK: Chapman; Hall.
Ioannidis, John P. A. 2005. “Why Most Published Research Findings Are False.” PLoS Med 2 (8). Public Library of Science: 697–701.
Jeffreys, Harold. 1961. The Theory of Probability . 3rd ed. Oxford.
Johnson, Valen E. 2013. “Revised Standards for Statistical Evidence.” Proceedings of the National Academy of Sciences , no. 48: 19313–7.
Kahneman, D., and A. Tversky. 1973. “On the Psychology of Prediction.” Psychological Review 80: 237–51.
Kass, Robert E., and Adrian E. Raftery. 1995. “Bayes Factors.” Journal of the American Statistical Association 90: 773–95.
Keynes, John Maynard. 1923. A Tract on Monetary Reform . London: Macmillan; Company.
Kruschke, J. K. 2011. Doing Bayesian Data Analysis: A Tutorial with R and BUGS . Burlington, MA: Academic Press.
Kruskal, W. H., and W. A. Wallis. 1952. “Use of Ranks in One-Criterion Variance Analysis.” Journal of the American Statistical Association 47: 583–621.
Kühberger, A, A Fritz, and T. Scherndl. 2014. “Publication Bias in Psychology: A Diagnosis Based on the Correlation Between Effect Size and Sample Size.” Public Library of Science One 9: 1–8.
Lee, Michael D, and Eric-Jan Wagenmakers. 2014. Bayesian Cognitive Modeling: A Practical Course . Cambridge University Press.
Lehmann, Erich L. 2011. Fisher, Neyman, and the Creation of Classical Statistics . Springer.
Levene, H. 1960. “Robust Tests for Equality of Variances.” In Contributions to Probability and Statistics: Essays in Honor of Harold Hotelling , edited by I. Olkin et al, 278–92. Palo Alto, CA: Stanford University Press.
Long, J.S., and L.H. Ervin. 2000. “Using Heteroscedasticity Consistent Standard Errors in Thee Linear Regression Model.” The American Statistician 54: 217–24.
Matloff, Norman, and Norman S Matloff. 2011. The Art of R Programming: A Tour of Statistical Software Design . No Starch Press.
McGrath, R. E., and G. J. Meyer. 2006. “When Effect Sizes Disagree: The Case of r and d.” Psychological Methods 11: 386–401.
McNemar, Q. 1947. “Note on the Sampling Error of the Difference Between Correlated Proportions or Percentages.” Psychome

## Match 1.37 — LibreTexts: 7.4: Basics of DNA Replication
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://bio.libretexts.org/Courses/City_College_of_San_Francisco/Introduction_to_Genetics/07%3A_DNA_Structure_and_Function/7.04%3A_Basics_of_DNA_Replication

7.4: Basics of DNA Replication
-
- Last updated
- Save as PDF
- Ying Liu
- City College of San Francisco
Learning Objectives
By the end of this section, you will be able to do the following:
- Explain how the structure of DNA reveals the replication process
- Describe the Meselson and Stahl experiments
The elucidation of the structure of the double helix provided a hint as to how DNA divides and makes copies of itself. In their 1953 paper, Watson and Crick penned an incredible understatement: "It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material." With specific base pairs, the sequence of one DNA strand can be predicted from its complement. The double-helix model suggests that the two strands of the double helix separate during replication, and each strand serves as a template from which the new complementary strand is copied. What was not clear was how the replication took place. There were three models suggested (Figure 14.12): conservative, semi-conservative, and dispersive .
In conservative replication, the parental DNA remains together, and the newly formed daughter strands are together. The semi-conservative method suggests that each of the two parental DNA strands acts as a template for new DNA to be synthesized; after replication, each double-stranded DNA includes one parental or “old” strand and one “new” strand. In the dispersive model, both copies of DNA have double-stranded segments of parental DNA and newly synthesized DNA interspersed.
Meselson and Stahl were interested in understanding how DNA replicates. They grew E. coli for several generations in a medium containing a “heavy” isotope of nitrogen ( 15 N), which gets incorporated into nitrogenous bases, and eventually into the DNA (Figure 14.13).
The E. coli culture was then placed into medium containing 14 N and allowed to grow for several generations. After each of the first few generations, the cells were harvested and the DNA was isolated, then centrifuged at high speeds in an ultracentrifuge. During the centrifugation, the DNA was loaded into a gradient (typically a solution of salt such as cesium chloride or sucrose) and spun at high speeds of 50,000 to 60,000 rpm. Under these circumstances, the DNA will form a band according to its buoyant density : the density within the gradient at which it floats. DNA grown in 15 N will form a band at a higher density position (i.e., farther down the centrifuge tube) than that grown in 14 N. Meselson and Stahl noted that after one generation of growth in 14 N after they had been shifted from 15 N, the single band observed was intermediate in position in between DNA of cells grown exclusively in 15 N and 14 N. This suggested either a semi-conservative or dispersive mode of replication. The DNA harvested from cells grown for two generations in 14 N formed two bands: one DNA band was at the intermediate position between 15 N and 14 N, and the other corresponded to the band of 14 N DNA. These results could only be explained if DNA replicates in a semi-conservative manner. And for this reason, therefore, the other two models were ruled out.
During DNA replication, each of the two strands that make up the double helix serves as a template from which new strands are copied. The new strands will be complementary to the parental or “old” strands. When two daughter DNA copies are formed, they have the same sequence and are divided equally into the two daughter cells.
Link to Learning
