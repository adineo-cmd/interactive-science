# Source pack — subjects/math/expert/linear-algebra
Lesson title: Linear Algebra (Full Treatment)
Level: expert
Match confidence: 1.53

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.53 — LibreTexts: 5: Linear Algebra
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/3.0/ · https://math.libretexts.org/Bookshelves/Scientific_Computing_Simulations_and_Modeling/Scientific_Computing_(Chasnov)/I%3A_Numerical_Methods/5%3A_Linear_Algebra

5: Linear Algebra
Consider the system of \(n\) linear equations and \(n\) unknowns, given by
\[\begin{array}{cc} a_{11} x_{1}+a_{12} x_{2}+\cdots+a_{1 n} x_{n}= & b_{1}, \\ a_{21} x_{1}+a_{22} x_{2}+\cdots+a_{2 n} x_{n}= & b_{2}, \\ \vdots & \vdots \\ a_{n 1} x_{1}+a_{n 2} x_{2}+\cdots+a_{n n} x_{n}= & b_{n} . \end{array} \nonumber \]
We can write this system as the matrix equation
\[A x=b \text {, } \nonumber \]
with
\[\mathrm{A}=\left(\begin{array}{cccc} a_{11} & a_{12} & \cdots & a_{1 n} \\ a_{21} & a_{22} & \cdots & a_{2 n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n 1} & a_{n 2} & \cdots & a_{n n} \end{array}\right), \quad \mathbf{x}=\left(\begin{array}{c} x_{1} \\ x_{2} \\ \vdots \\ x_{n} \end{array}\right), \quad \mathbf{b}=\left(\begin{array}{c} b_{1} \\ b_{2} \\ \vdots \\ b_{n} \end{array}\right) \nonumber \]
This chapter details the numerical solution of (5.1).
Gaussian Elimination
The standard numerical algorithm to solve a system of linear equations is called Gaussian Elimination. We can illustrate this algorithm by example.
Consider the system of equations
\[\begin{aligned} -3 x_{1}+2 x_{2}-x_{3} &=-1, \\ 6 x_{1}-6 x_{2}+7 x_{3} &=-7, \\ 3 x_{1}-4 x_{2}+4 x_{3} &=-6 . \end{aligned} \nonumber \]
To perform Gaussian elimination, we form an Augmented Matrix by combining the matrix A with the column vector \(\vec{b}\) :
\[\left(\begin{array}{rrrr} -3 & 2 & -1 & -1 \\ 6 & -6 & 7 & -7 \\ 3 & -4 & 4 & -6 \end{array}\right) \text {. } \nonumber \]
Row reduction is then performed on this matrix. Allowed operations are (1) multiply any row by a constant, (2) add multiple of one row to another row, (3) interchange the order of any rows. The goal is to convert the original matrix into an upper-triangular matrix. We start with the first row of the matrix and work our way down as follows. First we multiply the first row by 2 and add it to the second row, and add the first row to the third row:
\[\left(\begin{array}{rrrr} -3 & 2 & -1 & -1 \\ 0 & -2 & 5 & -9 \\ 0 & -2 & 3 & -7 \end{array}\right) \text {. } \nonumber \]
We then go to the second row. We multiply this row by \(-1\) and add it to the third row:
\[\left(\begin{array}{rrrr} -3 & 2 & -1 & -1 \\ 0 & -2 & 5 & -9 \\ 0 & 0 & -2 & 2 \end{array}\right) \text {. } \nonumber \]
The resulting equations can be determined from the matrix and are given by
\[\begin{aligned} -3 x_{1}+2 x_{2}-x_{3} &=-1 \\ -2 x_{2}+5 x_{3} &=-9 \\ -2 x_{3} &=2 . \end{aligned} \nonumber \]
These equations can be solved by backward substitution, starting from the last equation and working backwards. We have
\[\begin{aligned} &-2 x_{3}=2 \rightarrow x_{3}=-1 \\ &-2 x_{2}=-9-5 x_{3}=-4 \rightarrow x_{2}=2 \\ &-3 x_{1}=-1-2 x_{2}+x_{3}=-6 \rightarrow x_{1}=2 \end{aligned} \nonumber \]
Therefore,
\[\left(\begin{array}{l} x_{1} \\ x_{2} \\ x_{3} \end{array}\right)=\left(\begin{array}{r} 2 \\ 2 \\ -1 \end{array}\right) \nonumber \]
LU decomposition
The process of Gaussian Elimination also results in the factoring of the matrix A to
\[\mathrm{A}=\mathrm{LU} \text {, } \nonumber \]
where \(\mathrm{L}\) is a lower triangular matrix and \(\mathrm{U}\) is an upper triangular matrix. Using the same matrix A as in the last section, we show how this factorization is realized. We have
\[\left(\begin{array}{rrr} -3 & 2 & -1 \\ 6 & -6 & 7 \\ 3 & -4 & 4 \end{array}\right) \rightarrow\left(\begin{array}{rrr} -3 & 2 & -1 \\ 0 & -2 & 5 \\ 0 & -2 & 3 \end{array}\right)=\mathrm{M}_{1} \mathrm{~A} \nonumber \]
where
\[\mathrm{M}_{1} \mathrm{~A}=\left(\begin{array}{lll} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 1 & 0 & 1 \end{array}\right)\left(\begin{array}{rrr} -3 & 2 & -1 \\ 6 & -6 & 7 \\ 3 & -4 & 4 \end{array}\right)=\left(\begin{array}{rrr} -3 & 2 & -1 \\ 0 & -2 & 5 \\ 0 & -2 & 3 \end{array}\right) . \nonumber \]
Note that the matrix \(\mathrm{M}_{1}\) performs row elimination on the first column. Two times the first row is added to the second row and one times the first row is added to the third row. The entries of the column of \(\mathrm{M}_{1}\) come from \(2=-(6 /-3)\) and \(1=-(3 /-3)\) as required for row elimination. The number \(-3\) is called the pivot.
The next step is
\[\left(\begin{array}{rrr} -3 & 2 & -1 \\ 0 & -2 & 5 \\ 0 & -2 & 3 \end{array}\right) \rightarrow\left(\begin{array}{rrr} -3 & 2 & -1 \\ 0 & -2 & 5 \\ 0 & 0 & -2 \end{array}\right)=\mathrm{M}_{2}\left(\mathrm{M}_{1} \mathrm{~A}\right) \text {, } \nonumber \]
where
\[\mathrm{M}_{2}\left(\mathrm{M}_{1} \mathrm{~A}\right)=\left(\begin{array}{rrr} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & -1 & 1 \end{array}\right)\left(\begin{array}{rrr} -3 & 2 & -1 \\ 0 & -2 & 5 \\ 0 & -2 & 3 \end{array}\right)=\left(\begin{array}{rrr} -3 & 2 & -1 \\ 0 & -2 & 5 \\ 0 & 0 & -2 \end{array}\right) . \nonumber \]
Here, \(\mathrm{M}_{2}\) multiplies the second row by \(-1=-(-2 /-2)\) and adds it to the third row. The pivot is \(-2\) .
We now have
\[\mathrm{M}_{2} \mathrm{M}_{1} \mathrm{~A}=\mathrm{U} \nonumber \]
or
\[\mathrm{A}=\mathrm{M}_{1}^{-1} \mathrm{M}_{2}^{-1} \mathrm{U} \text {. } \nonumber \]
The inverse matrices are easy to find. The matrix \(\mathrm{M}_{1}\) multiples the first row by 2 and adds it to the second row, and multiplies the first row by 1 and adds it to the third row. To invert these operations, we need to multiply the first row by \(-2\) and add it to the second row, and multiply the first row by \(-1\) and add it to the third row. To check, with
\[\mathrm{M}_{1} \mathrm{M}_{1}^{-1}=\mathrm{I}, \nonumber \]
we have
\[\left(\begin{array}{lll} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 1 & 0 & 1 \end{array}\right)\left(\begin{array}{rrr} 1 & 0 & 0 \\ -2 & 1 & 0 \\ -1 & 0 & 1 \end{array}\right)=\left(\begin{array}{lll} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{array}\right) \text {. } \nonumber \]
Similarly,
\[\mathrm{M}_{2}^{-1}=\left(\begin{array}{ccc} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & 1 \end{array}\right) \nonumber \]
Therefore,
\[\mathrm{L}=\mathrm{M}_{1}^{-1} \mathrm{M}_{2}^{-1} \nonumber \]
is given by
\[\mathrm{L}=\left(\begin{array}{rll} 1 & 0 & 0 \\ -2 & 1 & 0 \\ -1 & 0 & 1 \end{array}\right)\left(\begin{array}{lll} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & 1 \end{array}\right)=\left(\begin{array}{rrr} 1 & 0 & 0 \\ -2 & 1 & 0 \\ -1 & 1 & 1 \end{array}\right) \nonumber \]
which is lower triangular. The off-diagonal elements of \(\mathrm{M}_{1}^{-1}\) and \(\mathrm{M}_{2}^{-1}\) are simply combined to form L. Our LU decomposition is therefore
\[\left(\begin{array}{rrr} -3 & 2 & -1 \\ 6 & -6 & 7 \\ 3 & -4 & 4 \end{array}\right)=\left(\begin{array}{rrr} 1 & 0 & 0 \\ -2 & 1 & 0 \\ -1 & 1 & 1 \end{array}\right)\left(\begin{array}{rrr} -3 & 2 & -1 \\ 0 & -2 & 5 \\ 0 & 0 & -2 \end{array}\right) \text {. } \nonumber \]
CHAPTER 5. LINEAR ALGEBRA Another nice feature of the LU decomposition is that it can be done by overwriting A, therefore saving memory if the matrix \(\mathrm{A}\) is very large.
The LU decomposition is useful when one needs to solve \(\mathrm{A} \mathbf{x}=\mathbf{b}\) for \(\mathbf{x}\) when \(\mathrm{A}\) is fixed and there are many different \(\mathbf{b}\) ’s. First one determines \(\mathrm{L}\) and \(\mathrm{U}\) using Gaussian elimination. Then one writes
\[(\mathrm{LU}) \mathbf{x}=\mathrm{L}(\mathrm{Ux})=\mathbf{b} \text {. } \nonumber \]
We let
\[\mathbf{y}=\mathrm{Ux}, \nonumber \]
and first solve
\[\text { Ly }=b \nonumber \]
for \(\mathbf{y}\) by forward substitution. We then solve
\[\mathrm{Ux}=\mathrm{y} \nonumber \]
for \(\mathbf{x}\) by backward substitution. If we count operations, we can show that solving (LU) \(\mathbf{x}=\mathbf{b}\) is substantially faster once \(\mathrm{L}\) and \(\mathrm{U}\) are in hand than solving \(\mathrm{Ax}=\mathbf{b}\) directly by Gaussian elimination.
We now illustrate the solution of \(L U x=b\) using our previous example, where
\[\mathrm{L}=\left(\begin{array}{rrr} 1 & 0 & 0 \\ -2 & 1 & 0 \\ -1 & 1 & 1 \end{array}\right), \quad \mathrm{U}=\left(\begin{array}{rrr} -3 & 2 & -1 \\ 0 & -2 & 5 \\ 0 & 0 & -2 \end{array}\right), \quad \mathbf{b}=\left(\begin{array}{l} -1 \\ -7 \\ -6 \end{array}\right) \nonumber \]
With \(\mathbf{y}=\mathrm{Ux}\) , we first solve \(\mathbf{L y}=\mathbf{b}\) , that is
\[\left(\begin{array}{rrr} 1 & 0 & 0 \\ -2 & 1 & 0 \\ -1 & 1 & 1 \end{array}\right)\left(\begin{array}{l} y_{1} \\ y_{2} \\ y_{3} \end{array}\right)=\left(\begin{array}{l} -1 \\ -7 \\ -6 \end{array}\right) \text {. } \nonumber \]
Using forward substitution
\[\begin{aligned} &y_{1}=-1, \\ &y_{2}=-7+2 y_{1}=-9, \\ &y_{3}=-6+y_{1}-y_{2}=2 . \end{aligned} \nonumber \]
We now solve \(U x=\mathbf{y}\) , that is
\[\left(\begin{array}{rrr} -3 & 2 & -1 \\ 0 & -2 & 5 \\ 0 & 0 & -2 \end{array}\right)\left(\begin{array}{l} x_{1} \\ x_{2} \\ x_{3} \end{array}\right)=\left(\begin{array}{r} -1 \\ -9 \\ 2 \end{array}\right) \text {. } \nonumber \]
Using backward substitution,
\[\begin{aligned} -2 x_{3} &=2 \rightarrow x_{3}=-1, \\ -2 x_{2} &=-9-5 x_{3}=-4 \rightarrow x_{2}=2, \\ -3 x_{1} &=-1-2 x_{2}+x_{3}=-6 \rightarrow x_{1}=2, \end{aligned} \nonumber \]
and we have once again determined
\[\left(\begin{array}{l} x_{1} \\ x_{2} \\ x_{3} \end{array}\right)=\left(\begin{array}{r} 2 \\ 2 \\ -1 \end{array}\right) \text {. } \nonumber \]
Partial pivoting
When performing Gaussian elimination, the diagonal element that one uses during the elimination procedure is called the pivot. To obtain the correct multiple, one uses the pivot as the divisor to the elements below the pivot. Gaussian elimination in this form will fail if the pivot is zero. In this situation, a row interchange must be performed.
Even if the pivot is not identically zero, a small value can result in big round-off errors. For very large matrices, one can easily lose all accuracy in the solution. To avoid these round-off errors arising from small pivots, row interchanges are made, and this technique is called partial pivoting (partial pivoting is in contrast to complete pivoting, where both rows and columns are interchanged). We will illustrate by example the LU decomposition using partial pivoting.
Consider
\[\mathrm{A}=\left(\begin{array}{rrr} -2 & 2 & -1 \\ 6 & -6 & 7 \\ 3 & -8 & 4 \end{array}\right) \text {. } \nonumber \]
We interchange rows to place the largest element (in absolute value) in the pivot, or \(a_{11}\) , position. That is,
\[\mathrm{A} \rightarrow\left(\begin{array}{rrr} 6 & -6 & 7 \\ -2 & 2 & -1 \\ 3 & -8 & 4 \end{array}\right)=\mathrm{P}_{12} \mathrm{~A} \nonumber \]
where
\[\mathrm{P}_{12}=\left(\begin{array}{ccc} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{array}\right) \nonumber \]
is a permutation matrix that when multiplied on the left interchanges the first and second rows of a matrix. Note that \(P_{12}^{-1}=P_{12}\) . The elimination step is then
\[\mathrm{P}_{12} \mathrm{~A} \rightarrow\left(\begin{array}{rrc} 6 & -6 & 7 \\ 0 & 0 & 4 / 3 \\ 0 & -5 & 1 / 2 \end{array}\right)=\mathrm{M}_{1} \mathrm{P}_{12} \mathrm{~A} \nonumber \]
where
\[\mathrm{M}_{1}=\left(\begin{array}{ccc} 1 & 0 & 0 \\ 1 / 3 & 1 & 0 \\ -1 / 2 & 0 & 1 \end{array}\right) . \nonumber \]
The final step requires one more row interchange:
\[\mathrm{M}_{1} \mathrm{P}_{12} \mathrm{~A} \rightarrow\left(\begin{array}{rrc} 6 & -6 & 7 \\ 0 & -5 & 1 / 2 \\ 0 & 0 & 4 / 3 \end{array}\right)=\mathrm{P}_{23} \mathrm{M}_{1} \mathrm{P}_{12} \mathrm{~A}=\mathrm{U} . \nonumber \]
Since the permutation matrices given by \(\mathrm{P}\) are their own inverses, we can write our result as
\[\left(\mathrm{P}_{23} \mathrm{M}_{1} \mathrm{P}_{23}\right) \mathrm{P}_{23} \mathrm{P}_{12} \mathrm{~A}=\mathrm{U} \text {. } \nonumber \]
Multiplication of \(\mathrm{M}\) on the left by \(\mathrm{P}\) interchanges rows while multiplication on the right by \(P\) interchanges columns. That is,
\[P_{23}\left(\begin{array}{ccc} 1 & 0 & 0 \\ 1 / 3 & 1 & 0 \\ -1 / 2 & 0 & 1 \end{array}\right) P_{23}=\left(\begin{array}{ccc} 1 & 0 & 0 \\ -1 / 2 & 0 & 1 \\ 1 / 3 & 1 & 0 \end{array}\right) P_{23}=\left(\begin{array}{ccc} 1 & 0 & 0 \\ -1 / 2 & 1 & 0 \\ 1 / 3 & 0 & 1 \end{array}\right) \text {. } \nonu

## Match 1.28 — LibreTexts: 15.2: General Linear Model
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/3.0/ · https://socialsci.libretexts.org/Bookshelves/Social_Work_and_Human_Services/Social_Science_Research_-_Principles_Methods_and_Practices_(Bhattacherjee)/15%3A_Quantitative_Analysis-_Inferential_Statistics/15.02%3A_General_Linear_Model

15.2: General Linear Model
-
- Last updated
- Save as PDF
Most inferential statistical procedures in social science research are derived from a general family of statistical models called the general linear model (GLM). A model is an estimated mathematical equation that can be used to represent a set of data, and linear refers to a straight line. Hence, a GLM is a system of equations that can be used to represent linear patterns of relationships in observed data.
The simplest type of GLM is a two-variable linear model that examines the relationship between one independent variable (the cause or predictor) and one dependent variable (the effect or outcome). Let us assume that these two variables are age and self-esteem respectively. The bivariate scatterplot for this relationship is shown in Figure 15.1, with age (predictor) along the horizontal or -axis and self-esteem (outcome) along the vertical or -axis. From the scatterplot, it appears that individual observations representing combinations of age and self-esteem generally seem to be scattered around an upward sloping straight line. We can estimate parameters of this line, such as its slope and intercept from the GLM. From high school algebra, recall that straight lines can be represented using the mathematical equation , where is the slope of the straight line (how much does change for unit change in ?) and is the intercept term (what is the value of when is zero?). In GLM, this equation is represented formally as:
where is the slope, is the intercept term, and is the error term . represents the deviation of actual observations from their estimated values, since most observations are close to the line but do not fall exactly on the line—i.e., the GLM is not perfect. Note that a linear model can have more than two predictors. To visualise a linear model with two predictors, imagine a three-dimensional cube, with the outcome ( ) along the vertical axis, and the two predictors (say, and ) along the two horizontal axes at the base of the cube. A line that describes the relationship between two or more variables is called a regression line, and (and other beta values) are called regression coefficients , and the process of estimating regression coefficients is called regression analysis . The GLM for regression analysis with n predictor variables is:
In the above equation, predictor variables may represent independent variables or covariates (control variables). Covariates are variables that are not of theoretical interest but may have some impact on the dependent variable y and should be controlled, so that the residual effects of the independent variables of interest are detected more precisely. Covariates capture systematic errors in a regression equation while the error term ( ) captures random errors. Though most variables in the GLM tend to be interval or ratio-scaled, this does not have to be the case. Some predictor variables may even be nominal variables (e.g., gender: male or female), which are coded as dummy variables . These are variables that can assume one of only two possible values: 0 or 1 (in the gender example, ‘male’ may be designated as 0 and ‘female’ as 1 or vice versa). A set of n nominal variables is represented using dummy variables. For instance, industry sector, consisting of the agriculture, manufacturing, and service sectors, may be represented using a combination of two dummy variables , with for agriculture, for manufacturing, and for service. It does not matter which level of a nominal variable is coded as 0 and which level as 1, because 0 and 1 values are treated as two distinct groups (such as treatment and control groups in an experimental design), rather than as numeric quantities, and the statistical parameters of each group are estimated separately.
The GLM is a very powerful statistical tool because it is not one single statistical method, but rather a family of methods that can be used to conduct sophisticated analysis with different types and quantities of predictor and outcome variables. If we have a dummy predictor variable, and we are comparing the effects of the two levels—0 and 1—of this dummy variable on the outcome variable, we are doing an analysis of variance (ANOVA). If we are doing ANOVA while controlling for the effects of one or more covariates, we have an analysis of covariance (ANCOVA). We can also have multiple outcome variables—e.g., , , —which are represented using a ‘system of equations’ consisting of a different equation for each outcome variable, each with its own unique set of regression coefficients. If multiple outcome variables are modelled as being predicted by the same set of predictor variables, the resulting analysis is called multivariate regression . If we are doing ANOVA or ANCOVA analysis with multiple outcome variables, the resulting analysis is a multivariate ANOVA (MANOVA) or multivariate ANCOVA (MANCOVA) respectively. If we model the outcome in one regression equation as a predictor in another equation in an interrelated system of regression equations, then we have a very sophisticated type of analysis called structural equation modelling . The most important problem in GLM is model specification —i.e., how to specify a regression equation or a system of equations—to best represent the phenomenon of interest. Model specification should be based on theoretical considerations about the phenomenon being studied, rather than what fits the observed data best. The role of data is in validating the model, and not in its specification.

## Match 1.28 — LibreTexts: 2.2: Linear Equations in One Variable
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Algebra/Algebra_and_Trigonometry_1e_(OpenStax)/02%3A_Equations_and_Inequalities/2.02%3A_Linear_Equations_in_One_Variable

2.2: Linear Equations in One Variable
- Solve equations in one variable algebraically.
- Solve a rational equation.
- Find a linear equation.
- Given the equations of two lines, determine whether their graphs are parallel or perpendicular.
- Write the equation of a line parallel or perpendicular to a given line.
Caroline is a full-time college student planning a spring break vacation. To earn enough money for the trip, she has taken a part-time job at the local bank that pays \($15.00/hr\), and she opened a savings account with an initial deposit of \($400\) on January 15. She arranged for direct deposit of her payroll checks. If spring break begins March 20 and the trip will cost approximately \($2,500\), how many hours will she have to work to earn enough to pay for her vacation? If she can only work \(4\) hours per day, how many days per week will she have to work? How many weeks will it take? In this section, we will investigate problems like this and others, which generate graphs like the line in Figure \(\PageIndex{1}\).
Solving Linear Equations in One Variable
A linear equation is an equation of a straight line, written in one variable. The only power of the variable is \(1\). Linear equations in one variable may take the form \(ax +b=0\) and are solved using basic algebraic operations. We begin by classifying linear equations in one variable as one of three types: identity, conditional, or inconsistent.
- An identity equation is true for all values of the variable. Here is an example of an identity equation: \[3x=2x+x \nonumber \] The solution set consists of all values that make the equation true. For this equation, the solution set is all real numbers because any real number substituted for \(x\) will make the equation true.
- A conditional equation is true for only some values of the variable. For example, if we are to solve the equation \(5x+2=3x−6\), we have the following: \[\begin{align*} 5x+2&=3x-6 \\ 2x &=-8 \\ x&=-4 \end{align*} \] The solution set consists of one number: \({−4}\). It is the only solution and, therefore, we have solved a conditional equation.
- An inconsistent equation results in a false statement. For example, if we are to solve \(5x−15=5(x−4)\), we have the following: \[\begin{align*} 5x−15 &=5x−20 \\ 5x−15-5x &= 5x−20-5x \\ −15 &\neq −20 \end{align*}\]Indeed, \(−15≠−20\). There is no solution because this is an inconsistent equation.
Solving linear equations in one variable involves the fundamental properties of equality and basic algebraic operations. A brief review of those operations follows.
A linear equation in one variable can be written in the form
\[ax+b=0\]
where a and b are real numbers, \(a≠0\).
The following steps are used to manipulate an equation and isolate the unknown variable, so that the last line reads \(x=\)_________, if \(x\) is the unknown. There is no set order, as the steps used depend on what is given:
- We may add, subtract, multiply, or divide an equation by a number or an expression as long as we do the same thing to both sides of the equal sign. Note that we cannot divide by zero.
- Apply the distributive property as needed: \(a(b+c)=ab+ac\).
- Isolate the variable on one side of the equation.
- When the variable is multiplied by a coefficient in the final stage, multiply both sides of the equation by the reciprocal of the coefficient.
Solve the following equation: \(2x+7=19\).
Solution
This equation can be written in the form \(ax +b=0\) by subtracting 19 from both sides. However, we may proceed to solve the equation in its original form by performing algebraic operations.
\[\begin{align*} 2x+7&=19\\ 2x&=12\qquad \text{Subtract 7 from both sides}\\ x&=6\qquad \text{Multiply both sides by } \dfrac{1}{2} \text{ or divide by } 2 \end{align*}\]
The solution is \(6\).
Solve the linear equation in one variable: \(2x+1=−9\).
- Answer
-
\(x=−5\)
Solve the following equation: \(4(x−3)+12=15−5(x+6)\).
Solution
Apply standard algebraic properties.
\[\begin{align*} 4(x-3)+12&=15-5(x+6)\\ 4x-12+12&=15-5x-30\qquad \text{Apply the distributive property}\\ 4x&=-15-5x\qquad \text{Combine like terms}\\ 9x&=-15\qquad \text{Place x terms on one side and simplify}\\ x&=-\dfrac{15}{9}\qquad \text{Multiply both sides by } \dfrac{1}{9} \text { , the reciprocal of } 9\\ x&=-\dfrac{5}{3} \end{align*}\]
Analysis
This problem requires the distributive property to be applied twice, and then the properties of algebra are used to reach the final line, \(x=-\dfrac{5}{3}\).
Solve the equation in one variable: \(−2(3x−1)+x=14−x\).
- Answer
-
\(x=-3\)
Solving a Rational Equation
In this section, we look at rational equations that, after some manipulation, result in a linear equation. If an equation contains at least one rational expression, it is a considered a rational equation . Recall that a rational number is the ratio of two numbers, such as \(\dfrac{2}{3}\) or \(\dfrac{7}{2}\). A rational expression is the ratio, or quotient, of two polynomials. Here are three examples.
\[\dfrac{x+1}{x^2-4} \nonumber \]
\[\dfrac{1}{x-3} \nonumber \]
or
\[\dfrac{4}{x^2+x-2} \nonumber \]
Rational equations have a variable in the denominator in at least one of the terms. Our goal is to perform algebraic operations so that the variables appear in the numerator. In fact, we will eliminate all denominators by multiplying both sides of the equation by the least common denominator (LCD). Finding the LCD is identifying an expression that contains the highest power of all of the factors in all of the denominators. We do this because when the equation is multiplied by the LCD, the common factors in the LCD and in each denominator will equal one and will cancel out.
Solve the rational equation:
\[\dfrac{7}{2x}-\dfrac{5}{3x}=\dfrac{22}{3} \nonumber \]
Solution
We have three denominators; \(2x\),\(3x\), and \(3\). The LCD must contain \(2x\),\(3x\), and \(3\). An LCD of \(6x\) contains all three denominators. In other words, each denominator can be divided evenly into the LCD. Next, multiply both sides of the equation by the LCD \(6x\).
\[\begin{align*}
(6x)\left[\dfrac{7}{2x}-\dfrac{5}{3x}\right]&=\left[\dfrac{22}{3}\right](6x)\\
(6x)\left(\dfrac{7}{2x}\right)-(6x)\left(\dfrac{5}{3x}\right)&=\left(\dfrac{22}{3}\right)(6x)\qquad \text{Use the distributive property. Cancel out the common factors}\\
3(7)-2(5)&=22(2x)\qquad \text{Multiply remaining factors by each numerator.}\\
21-10&=44x\\
11&=44x\\
\dfrac{11}{44}&=x\\
\dfrac{1}{4}&=x
\end{align*}\]
A common mistake made when solving rational equations involves finding the LCD when one of the denominators is a binomial—two terms added or subtracted—such as \((x+1)\). Always consider a binomial as an individual factor—the terms cannot be separated. For example, suppose a problem has three terms and the denominators are \(x\), \(x−1\), and \(3x−3\). First, factor all denominators. We then have \(x\), \((x−1)\), and \(3(x−1)\) as the denominators. (Note the parentheses placed around the second denominator.) Only the last two denominators have a common factor of \((x−1)\). The x in the first denominator is separate from the \(x\) in the \((x−1)\) denominators. An effective way to remember this is to write factored and binomial denominators in parentheses, and consider each parentheses as a separate unit or a separate factor. The LCD in this instance is found by multiplying together the \(x\), one factor of \((x−1)\), and the 3. Thus, the LCD is the following:
\(x(x−1)3=3x(x−1)\)
So, both sides of the equation would be multiplied by \(3x(x−1)\). Leave the LCD in factored form, as this makes it easier to see how each denominator in the problem cancels out.
Another example is a problem with two denominators, such as \(x\) and \(x^2+2x\). Once the second denominator is factored as \(x^2+2x=x(x+2)\), there is a common factor of \(x\) in both denominators and the LCD is \(x(x+2)\).
Sometimes we have a rational equation in the form of a proportion; that is, when one fraction equals another fraction and there are no other terms in the equation.
\[\dfrac{a}{b}=\dfrac{c}{d}\]
We can use another method of solving the equation without finding the LCD: cross-multiplication. We multiply terms by crossing over the equal sign.
Multiply a(d) and b(c), which results in \(ad=bc\).
Any solution that makes a denominator in the original expression equal zero must be excluded from the possibilities.
A r ational equation contains at least one rational expression where the variable appears in at least one of the denominators.
- Factor all denominators in the equation.
- Find and exclude values that set each denominator equal to zero.
- Find the LCD.
- Multiply the whole equation by the LCD. If the LCD is correct, there will be no denominators left.
- Solve the remaining equation.
- Make sure to check solutions back in the original equations to avoid a solution producing zero in a denominator
Solve the following rational equation:
\(\dfrac{2}{x}-\dfrac{3}{2}=\dfrac{7}{2x}\)
SolutionWe have three denominators: \(x\), \(2\), and \(2x\). No factoring is required. The product of the first two denominators is equal to the third denominator, so, the LCD is \(2x\). Only one value is excluded from a solution set, \(0\). Next, multiply the whole equation (both sides of the equal sign) by \(2x\).
\[\begin{align*} 2x\left[\dfrac{2}{x}-\dfrac{3}{2}\right]&=\left[\dfrac{7}{2x}\right](2x)\\ 2x\left(\dfrac{2}{x}\right)-2x\left(\dfrac{3}{2}\right)&=\left(\dfrac{7}{2x}\right)(2x)\qquad \text{Distribute } 2x\\ 2(2)-3x&=7\qquad \text{Denominators cancel out.}\\ 4-3x&=7\\ -3x&=3\\ x&=-1 \text { or } \{-1\} \end{align*}\]
The proposed solution is \(−1\), which is not an excluded value, so the solution set contains one number, \(x=−1\), or \(\{−1\}\) written in set notation.
Solve the rational equation:
\(\dfrac{2}{3x}=\dfrac{1}{4}-\dfrac{1}{6x}\)
- Answer
-
\(x=\dfrac{10}{3}\)
Solve the following rational equation:
\(\dfrac{1}{x}=\dfrac{1}{10}-\dfrac{3}{4x}\)
Solution
First find the common denominator. The three denominators in factored form are \(x,10=2⋅5\), and \(4x=2⋅2⋅x\). The smallest expression that is divisible by each one of the denominators is \(20x\). Only \(x=0\) is an excluded value. Multiply the whole equation by \(20x\).
\[\begin{align*} 20x\left(\dfrac{1}{x}\right)&= \left(\dfrac{1}{10}-\dfrac{3}{4x}\right)20x\\ 20&= 2x-15\\ 35&= 2x\\ \dfrac{35}{2}&= x \end{align*}\]
The solution is \(\dfrac{35}{2}\).
Solve the rational equation:
\[-\dfrac{5}{2x}+\dfrac{3}{4x}=-\dfrac{7}{4} \nonumber \]
- Answer
-
\(x=1\)
Solve the following rational equations and state the excluded values:
- \(\dfrac{3}{x-6}=\dfrac{5}{x}\)
- \(\dfrac{x}{x-3}=\dfrac{5}{x-3}-\dfrac{1}{2}\)
- \(\dfrac{x}{x-2}=\dfrac{5}{x-2}-\dfrac{1}{2}\)
Solution
a.
The denominators \(x\) and \(x−6\) have nothing in common. Therefore, the LCD is the product \(x(x−6)\). However, for this problem, we can cross-multiply.
\[\begin{align*} \dfrac{3}{x-6}&=\dfrac{5}{x}\\ 3x&=5(x-6)\qquad \text{Distribute.}\\ 3x&=5x-30\\ -2x&=-30\\ x&=15 \end{align*}\]
The solution is \(15\). The excluded values are \(6\) and \(0\).
b.
The LCD is \(2(x−3)\). Multiply both sides of the equation by \(2(x−3)\).
\[\begin{align*} 2(x-3)\left [\dfrac{x}{x-3} \right ]&= \left [\dfrac{5}{x-3}-\dfrac{1}{2} \right ]2(x-3)\\ \dfrac{2(x-3)x}{x-3}&= \dfrac{2(x-3)5}{x-3}-\dfrac{2(x-3)}{2}\\ 2x&= 10-(x-3)\\ 2x&= 13-x\\ 3x&= 13\\ x&= \dfrac{13}{3} \end{align*}\]
The solution is \(\dfrac{13}{3}\). The excluded value is \(3\).
c.
The least common denominator is \(2(x−2)\). Multiply both sides of the equation by \(x(x−2)\).
\[\begin{align*} 2(x-2)\left [\dfrac{x}{x-2} \right ]&= \left [\dfrac{5}{x-2}-\dfrac{1}{2} \right ]2(x-2)\\ 2x&= 10-(x-2)\\ 2x&= 12-x\\ 3x&= 12\\ x&= 4 \end{align*}\]
The solution is \(4\). The excluded value is \(2\).
Solve \(\dfrac{-3}{2x+1}=\dfrac{4}{3x+1}\). State the excluded values.
- Answer
-
\(x=-\dfrac{7}{17}\). Excluded values are \(x=−12\) and \(x=−13\).
Solve the rational equation after factoring the denominator
