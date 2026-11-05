# Source pack — subjects/film/advanced/documentary-form
Lesson title: Documentary Form
Level: advanced
Match confidence: 1.53

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.53 — LibreTexts: 3.2: Disjunctive Normal Form
License: GNU Free Documentation License · https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Elementary_Foundations%3A_An_Introduction_to_Topics_in_Discrete_Mathematics_(Sylvestre)/03%3A_Boolean_algebra/3.02%3A_Disjunctive_Normal_Form

3.2: Disjunctive Normal Form
It is often desired (e.g. in computer programming or logic circuit design) to reverse the process: starting with a desired truth table, can we construct a Boolean polynomial with the same outputs?
Determine a Boolean polynomial \(p(x,y)\) that has the truth table below.
| \(x\) | \(y\) | \(p(x,y)\) |
|---|---|---|
| \(1\) | \(1\) | \(1\) |
| \(1\) | \(0\) | \(0\) |
| \(0\) | \(1\) | \(0\) |
| \(0\) | \(0\) | \(1\) |
Solution
We want a “true” output when the inputs match the first or fourth rows, and only then. The inputs match the first row precisely when both \(x\) and \(y\) are true (i.e. when the conjunction \(x \land y\) is true), and they match the fourth row precisely when both \(x\) is not true and \(y\) is not true (i.e. when the conjunction \(x' \land y'\) is true). So take the disjunction of these two conjunctions: \(p(x,y) = (x \land y) \lor (x' \land y')\text{.}\)
In the solution to the above worked example, it might seem like we should take a conjunction of the two conjunctions instead of a disjunction , since we see an output of \(1\) in the first row and in the fourth row. However, we cannot be in the input “state” described by those two rows simultaneously, since neither \(x\) nor \(y\) can be both \(1\) and \(0\) simultaneously. So you should think of it this way instead: if we see an output state of \(1\text{,}\) then we know we must be either in the input state of the first row or of the fourth row.
a Boolean polynomial in variables \(x_1,x_2,\ldots,x_n\) which is the disjunction of distinct terms of the form \(a_1 \land a_2 \land \cdots \land a_n\text{,}\) where each \(a_i\) is either \(x_i\) or \(x_i'\text{.}\)
The zero polynomial is also considered to be in disjunctive normal form.
Disjunctive normal form is usually not the “nicest” or “simplest” Boolean polynomial with a desired truth table, but there is a relatively simple procedure to produce it.
Given a truth table with nonzero output, we may obtain a Boolean polynomial in disjunctive normal form with that truth table as follows.
- Identify rows the in truth table for which the desired output is \(1\)
- For each such row, form the conjunction of all variables, but negate those variables that have input value \(0\) for that row.
- Form a polynomial by taking the disjunction of all those conjunctions.
Determine a Boolean polynomial \(p(x,y,z)\) that has the truth table below.
| \(x\) | \(y\) | \(z\) | \(p(x,y,z)\) |
| \(1\) | \(1\) | \(1\) | \(0\) |
| \(1\) | \(1\) | \(0\) | \(0\) |
| \(1\) | \(0\) | \(1\) | \(0\) |
| \(1\) | \(0\) | \(0\) | \(1\) |
| \(0\) | \(1\) | \(1\) | \(1\) |
| \(0\) | \(1\) | \(0\) | \(0\) |
| \(0\) | \(0\) | \(1\) | \(1\) |
| \(0\) | \(0\) | \(0\) | \(1\) |
Solution
The fourth, fifth, seventh, and eigth rows have outcome \(1\text{.}\) The corresponding conjunctions are
fourth row
\(x \land y' \land z'\text{;}\)
fifth row
\(x' \land y \land z\text{;}\)
seventh row
\(x' \land y' \land z\text{;}\) and
eigth row
\(x' \land y' \land z'\text{.}\)
Therefore, the Boolean polynomial
is both in disjunctive normal form and will have the desired truth table.
Determine a Boolean polynomial \(q(x,y,z)\) that has the truth table below.
| \(x\) | \(y\) | \(z\) | \(q(x,y,z)\) |
| \(1\) | \(1\) | \(1\) | \(1\) |
| \(1\) | \(1\) | \(0\) | \(1\) |
| \(1\) | \(0\) | \(1\) | \(0\) |
| \(1\) | \(0\) | \(0\) | \(1\) |
| \(0\) | \(1\) | \(1\) | \(1\) |
| \(0\) | \(1\) | \(0\) | \(1\) |
| \(0\) | \(0\) | \(1\) | \(1\) |
| \(0\) | \(0\) | \(0\) | \(1\) |
Solution 1
Every row except the third has outcome \(1\text{,}\) so we must form conjunctions for all rows except that one:
first row
\(x \land y \land z\text{;}\)
second row
\(x \land y \land z'\text{;}\)
fourth row
\(x \land y' \land z'\text{;}\)
fifth row
\(x' \land y \land z\text{;}\)
sixth row
\(x' \land y \land z'\text{;}\)
seventh row
\(x' \land y' \land z\text{;}\) and
eigth row
\(x' \land y' \land z'\text{.}\)
Therefore, the Boolean polynomial
\begin{align*} q(x,y,z) & = (x \land y \land z) \lor (x \land y \land z') \lor (x \land y' \land z') \lor (x' \land y \land z)\\ & \phantom{=} \lor (x' \land y \land z') \lor (x' \land y' \land z) \lor (x' \land y' \land z') \end{align*}
is both in disjunctive normal form and will have the desired truth table.
Solution. 2 Alternative solution
We can get a much simpler expression for \(q(x,y,z)\) by not using the procedure (though of course the result will not be in disjunctive normal form).
Notice that we want the third row to have output value \(0\text{.}\) In logic terms, we want that combination (and only that combination) of input values to result in an output that is “not true”. So the Boolean polynomial
\begin{equation*} q(x,y,z) = (x \land y' \land z)' = x' \lor y \lor z' \end{equation*}
will produce the desired truth table.
The polynomials in the solutions to the preceding examples are in disjunctive normal form, but the alternative solution to the second example is not.
From Procedure \(\PageIndex{1}\), it is easy to see that any Boolean polynomial can be expressed in disjunctive normal form.
Rewrite the Boolean polynomial \(p(x,y,z) = (x \land z)' \lor (x'\land y)\) in disjunctive normal form.
Solution
First, produce the truth table.
| \(x\) | \(y\) | \(z\) | \(x\land z\) | \(x' \land y\) | \(p(x,y,z)\) |
| 1 | \(1\) | \(1\) | \(1\) | \(0\) | 0 |
| 1 | \(1\) | \(0\) | \(0\) | \(0\) | 1 |
| 1 | \(0\) | \(1\) | \(1\) | \(0\) | 0 |
| 1 | \(0\) | \(0\) | \(0\) | \(0\) | 1 |
| 0 | \(1\) | \(1\) | \(0\) | \(1\) | 1 |
| 0 | \(1\) | \(0\) | \(0\) | \(1\) | 1 |
| 0 | \(0\) | \(1\) | \(0\) | \(0\) | 1 |
| 0 | \(0\) | \(0\) | \(0\) | \(0\) | 1 |
Then apply the disjunctive normal form procedure to obtain
\begin{align*} p(x,y,z) =& (x \land y \land z') \lor (x \land y' \land z') \lor (x' \land y \land z)\\ & \lor (x' \land y \land z') \lor (x' \land y' \land z) \lor (x' \land y' \land z')\text{.} \end{align*}
Check your understanding
What do you think conjunctive normal form should mean? Can you come up with a procedure which takes a truth table and determines a Boolean polynomial in conjunctive normal form with the desired truth table?
- Hint
-
Extend the idea of the Alternative solution for Worked Example \(\PageIndex{3}\)

## Match 1.52 — LibreTexts: 11.3: Solving Equations of the Form x + a = b and x - a = b
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/PreAlgebra/Fundamentals_of_Mathematics_(Burzynski_and_Ellis)/11%3A_Algebraic_Expressions_and_Equations/11.03%3A_Solving_Equations_of_the_Form_x__a__b_and_x_-_a__b

11.3: Solving Equations of the Form x + a = b and x - a = b
- understand the meaning and function of an equation
- understand what is meant by the solution to an equation
- be able to solve equations of the form \(x + a = b\) and \(x - a = b\)
Equations
Equation
An equation is a statement that two algebraic expressions are equal.
The following are examples of equations:
\(\begin{array} {c} {\underbrace{x + 6}_{\text{This}}} & = & {\underbrace{10}_{\text{This}}} \\ {^\text{expression}} & ^= & {^\text{expression}} \end{array}\) \(\begin{array} {c} {\underbrace{x - 4}_{\text{This}}} & = & {\underbrace{-11}_{\text{This}}} \\ {^\text{expression}} & ^= & {^\text{expression}} \end{array}\) \(\begin{array} {c} {\underbrace{3y - 5}_{\text{This}}} & = & {\underbrace{-2 + 2y}_{\text{This}}} \\ {^\text{expression}} & ^= & {^\text{expression}} \end{array}\)
Notice that \(x + 6\), \(x - 4\), and \(3y - 5\) are not equations. They are expressions. They are not equations because there is no statement that each of these expressions is equal to another expression.
Solutions and Equivalent Equations
Conditional
Equations
The truth of some equations is conditional upon the value chosen for the variable. Such equations are called
conditional equations
. There are two additional types of equations. They are examined in courses in algebra, so we will not consider them now.
Solutions and Solving an
Equation
The set of values that, when substituted for the variables, make the equation true, are called the
solutions
of the equation.
An equation has been
solved
when all its solutions have been found.
Verify that 3 is a solution to \(x + 7 = 10\).
Solution
When \(x = 3\),
becomes \(\begin{array} {rcll} {x + 7} & = & {10} & {} \\ {3 + 7} & = & {10} & {} \\ {10} & = & {10} & {\text{which is a } true \text{ statement, verifying that}} \\ {} & & {} & {\text{3 is a solution to } x + 7 = 10} \end{array}\)
Verify that -6 is a solution to \(5y + 8 = -22\).
Solution
When \(y = -6\),
becomes \(\begin{array} {rcll} {5y + 8} & = & {-22} & {} \\ {5(-6) + 8} & = & {-22} & {} \\ {-30 + 8} & = & {-22} & {} \\ {-22} & = & {-22} & {\text{which is a } true \text{ statement, verifying that}} \\ {} & & {} & {\text{-6 is a solution to } 5y + 8 = -22} \end{array}\)
Verify that 5 is not a solution to \(a - 1 = 2a + 3\).
Solution
When \(a = 5\),
becomes \(\begin{array} {rcll} {a - 1} & = & {2a + 3} & {} \\ {5 - 1} & = & {2 \cdot 5 + 3} & {} \\ {5 - 1} & = & {10 + 3} & {} \\ {4} & = & {13} & {\text{a } false \text{ statement, verifying that 5}} \\ {} & & {} & {\text{is not a solution to } a - 1 = 2a + 3} \end{array}\)
Verify that -2 is a solution to \(3m - 2 = -4m - 16\).
Solution
When \(m = -2\),
becomes \(\begin{array} {rcll} {3m - 2} & = & {-4m - 16} & {} \\ {3(-2) - 2} & = & {-4(-2) - 16} & {} \\ {-6 - 2} & = & {8 - 16} & {} \\ {-8} & = & {-8} & {\text{which is a } true \text{ statement, verifying that}} \\ {} & & {} & {\text{-2 is a solution to } 3m - 2 = -4m - 16} \end{array}\)
Practice Set A
Verify that 5 is a solution to \(m + 6 = 11\).
- Answer
-
Substitute 5 into \(m + 6 = 11\).
Thus, 5 is a solution.
Practice Set A
Verify that −5 is a solution to \(2m - 4 = -14\).
- Answer
-
Substitute -5 into \(2m - 4 = -14\).
Thus, -5 is a solution.
Practice Set A
Verify that 0 is a solution to \(5x + 1 = 1\).
- Answer
-
Substitute 0 into \(5x + 1 = 1\).
Thus, 0 is a solution.
Practice Set A
Verify that 3 is not a solution to \(-3y + 1 = 4y + 5\).
- Answer
-
Substitute 3 into \(-3y + 1 = 4y + 5\).
Thus, 3 is not a solution.
Practice Set A
Verify that -1 is a solution to \(6m - 5 + 2m = 7m - 6\).
- Answer
-
Substitute -1 into \(6m - 5 + 2m = 7m - 6\).
Thus, -1 is a solution.
Equivalent Equations
Some equations have precisely the same collection of solutions. Such equations are called equivalent equations. For example, \(x - 5 = -1, x + 7 = 11,\) and \(x = 4\) are all equivalent equations since the only solution to each is \(x = 4\). (Can you verify this?)
Solving Equations
We know that the equal sign of an equation indicates that the number represented by the expression on the left side is the same as the number represented by the expression on the right side.
| This number | is the same as | this number |
| \(\downarrow\) | \(\downarrow\) | \(\downarrow\) |
| \(x\) | = | 4 |
| \(x + 7\) | = | 11 |
| \(x - 5\) | = | -1 |
Addition/Subtraction Property of
Equality
From this, we can suggest the
addition/subtraction property of equality
.
Given any equation,
- We can obtain an equivalent equation by adding the same number to both sides of the equation.
- We can obtain an equivalent equation by subtracting the same number from both sides of the equation.
The Idea Behind Equation Solving
The idea behind
equation solving
is to isolate the variable on one side of the equation. Signs of operation (+, -, \(\cdot\), \(\div\)) are used to associate two numbers. For example, in the expression \(5 + 3\), the numbers 5 and 3 are associated by addition. An association can be
undone
by performing the opposite operation. The addition/subtraction property of equality can be used to undo an association that is made by addition or subtraction.
Subtraction is used to undo an addition.
Addition is used to undo a subtraction.
The procedure is illustrated in the problems of [link] .
Use the addition/subtraction property of equality to solve each equation.
\(x + 4 = 6\).
Solution
4 is associated with \(x\) by addition. Undo the association by subtracting 4 from both sides.
\(x + 4 - 4 = 6 - 4\)
\(x + 0 =2\)
\(x = 2\)
Check: When \(x = 2\), \(x + 4\) becomes
The solution to \(x + 4 = 6\) is \(x = 2\).
\(m - 8 = 5\).
Solution
8 is associated with \(m\) by subtraction. Undo the association by adding 8 to both sides.
\(m - 8 + 8 = 5 + 8\)
\(m + 0 = 13\)
\(m = 13\)
Check: When \(m = 13\),
becomes
a true statement.
The solution to \(m - 8 = 5\) is \(m = 13\).
\(-3 - 5 = y - 2 + 8\).
Solution
Before we use the addition/subtraction property, we should simplify as much as possible.
\(-3 - 5 = y - 2 + 8\).
\(-8 = y + 6\)
6 is associated with \(y\) by addition. Undo the association by subtracting 6 from both sides.
\(-8 - 6 = y + 6 - 6\)
\(-14 = y + 0\)
\(-14 = y\)
This is equivalent to \(y = -14\).
Check: When \(y = -14\),
\(-3 - 5 = y - 2 + 8\)
becomes
a true statement.
The solution to \(-3 - 5 = y - 2 + 8\) is \(y = -14\).
\(-5a + 1 + 6a = -2\).
Solution
Begin by simplifying the left side of the equation.
\(\underbrace{-5a + 1 + 6a}_{-5 + 6 = 1} = -2\)
\(a + 1 = -2\) 1 is associated with aa by addition. Undo the association by subtracting 1 from both sides.
\(a + 1 - 1 = -2 - 1\)
\(a + 0 = -3\)
\(a = -3\)
Check: When \(a = -3\),
\(-5a + 1 + 6a = -2\)
becomes
a true statement.
The solution to \(-5a + 1 + 6a = -2\) is \(a = -3\).
\(7k - 4 = 6k + 1\).
Solution
In this equation, the variable appears on both sides. We need to isolate it on one side. Although we can choose either side, it will be more convenient to choose the side with the larger coefficient. Since 8 is greater than 6, we’ll isolate \(k\) on the left side.
\(7 k - 4 = 6k + 1\) Since \(6k\) represents \(+6k\), subtract \(6k\) from each side.
\(\underbrace{7 k - 4 - 6k}_{7 - 6 = 1} = \underbrace{6k + 1 - 6k}_{6 - 6 = 0}\)
\(k - 4 = 1\) 4 is associated with \(k\) by subtraction. Undo the association by adding 4 to both sides.
\(k - 4 + 4 = 1 + 4\0
\(k = 5\)
Check: When \(k = 5\).
\(7k - 4 = 6k + 1\)
becomes
a true statement.
The solution to \(7k - 4 = 6k + 1\) is \(k = 5\)
\(-8 + x = 5\).
Solution
-8 is associated with \(x\) by addition. Undo the by subtracting -8 from both sides. Subtracting -8 we get \(-(-8) = +8\). We actually add 8 to both sides.
\(-8 + x + 8 = 5 + 8\)
\(x = 13\)
Check: When \(x = 13\)
\(-8 + x = 5\)
becomes
a true statement.
The solution to \(-8 + x = 5\) is \(x = 13\).
Practice Set B
\(y + 9 = 4\)
- Answer
-
\(y = -5\)
Practice Set B
\(a - 4 = 11\)
- Answer
-
\(a = 15\)
Practice Set B
\(-1 + 7 = x + 3\)
- Answer
-
\(x = 3\)
Practice Set B
\(8m + 4 - 7m = (-2) (-3)\)
- Answer
-
\(m = 2\)
Practice Set B
\(12k - 4 = 9k - 6 + 2k\)
- Answer
-
\(k = -2\)
Practice Set B
\(-3 + a = -4\)
- Answer
-
\(a = -1\)
Exercises
For the following 10 problems, verify that each given value is a solution to the given equation.
Exercise \(\PageIndex{1}\)
\(x - 11 = 5\), \(x = 16\)
- Answer
-
Substitue \(x = 4\) into the equation \(4x - 11 = 5\).
\(16 - 11 = 5\)
\(5 = 5\)
\(x = 4\) is a solution
Exercise \(\PageIndex{2}\)
\(y - 4 = -6\), \(y = -2\)
Exercise \(\PageIndex{3}\)
\(2m - 1 = 1\), \(m = 1\)
- Answer
-
Substitue \(m = 1\) into the equation \(2m - 1 = 1\).
\(m = 1\) is a solution.
Exercise \(\PageIndex{4}\)
\(5y + 6 = -14\), \(y = -4\)
Exercise \(\PageIndex{5}\)
\(3x + 2 - 7x = -5x - 6\), \(x = -8\)
- Answer
-
Substitue \(x = -8\) into the equation \(3x + 2 - 7 = -5x - 6\).
\(x = -8\) is a solution.
Exercise \(\PageIndex{6}\)
\(-6a + 3 + 3a = 4a + 7 - 3a\), \(a = -1\)
Exercise \(\PageIndex{7}\)
\(-8 + x = -8\), \(x = 0\)
- Answer
-
Substitue \(x = 0\) into the equation \(-8 + x = -8\).
\(x = 0\) is a solution.
Exercise \(\PageIndex{8}\)
\(8b + 6 = 6 - 5b\), \(b = 0\)
Exercise \(\PageIndex{9}\)
\(4x - 5 = 6x - 20\), \(x = \dfrac{15}{2}\)
- Answer
-
Substitue \(x = \dfrac{15}{2}\) into the equation \(4x - 5 = 6x - 20\).
\(x = \dfrac{15}{2}\) is a solution
Exercise \(\PageIndex{10}\)
\(-3y + 7 = 2y - 15\), \(y = \dfrac{22}{5}\)
Solve each equation. Be sure to check each result.
Exercise \(\PageIndex{11}\)
\(y - 6 = 5\)
- Answer
-
\(y = 11\)
Exercise \(\PageIndex{12}\)
\(m + 8 = 4\)
Exercise \(\PageIndex{13}\)
\(k - 1 = 4\)
- Answer
-
\(k = 5\)
Exercise \(\PageIndex{14}\)
\(h - 9 = 1\)
Exercise \(\PageIndex{15}\)
\(a + 5 = -4\)
- Answer
-
\(a = -9\)
Exercise \(\PageIndex{16}\)
\(b - 7 = -1\)
Exercise \(\PageIndex{17}\)
\(x + 4 - 9 = 6\)
- Answer
-
\(x = 11\)
Exercise \(\PageIndex{18}\)
\(y - 8 + 10 = 2\)
Exercise \(\PageIndex{19}\)
\(z + 6 = 6\)
- Answer
-
\(z = 0\)
Exercise \(\PageIndex{20}\)
\(w - 4 = -4\)
Exercise \(\PageIndex{21}\)
\(x + 7 - 9 = 6\)
- Answer
-
\(x = 8\)
Exercise \(\PageIndex{22}\)
\(y - 2 + 5 = 4\)
Exercise \(\PageIndex{23}\)
\(m + 3 - 8 = -6 + 2\)
- Answer
-
\(m = 1\)
Exercise \(\PageIndex{24}\)
\(z + 10 - 8 = -8 + 10\)
Exercise \(\PageIndex{25}\)
\(2 + 9 = k - 8\)
- Answer
-
\(k = 19\)
Exercise \(\PageIndex{26}\)
\(-5 + 3 = h - 4\)
Exercise \(\PageIndex{27}\)
\(3m - 4 = 2m + 6\)
- Answer
-
\(m = 10\)
Exercise \(\PageIndex{28}\)
\(5a + 6 = 4a - 8\)
Exercise \(\PageIndex{29}\)
\(8b + 6 + 2b = 3b - 7 + 6b - 8\)
- Answer
-
\(b = -21\)
Exercise \(\PageIndex{30}\)
\(12h - 1 - 3 - 5h = 2h + 5h + 3(-4)\)
Exercise \(\PageIndex{31}\)
\(-4a + 5 - 2a = -3a - 11 - 2a\)
- Answer
-
\(a = 16\)
Exercise \(\PageIndex{32}\)
\(-9n - 2 - 6 + 5n = 3n - (2) (-5) - 6n\)
Calculator Exercises
Exercise \(\PageIndex{33}\)
\(y - 2.161 = 6.063\)
- Answer
-
\(y = 7.224\)
Exercise \(\PageIndex{34}\)
\(a - 44.0014 = -21.1625\)
Exercise \(\PageIndex{35}\)
\(-0.362 - 0.416 = 5.63m - 4.63m\)
- Answer
-
\(m = -0.778\)
Exercise \(\PageIndex{36}\)
\(8.078 - 9.112 = 2.106y - 1.106y\)
Exercise \(\PageIndex{37}\)
\(4.23k + 3.18 = 3.23k - 5.83\)
- Answer
-
\(k = -9.01\)
Exercise \(\PageIndex{38}\)
\(6.1185x - 4.0031 = 5.1185x - 0.0058\)
Exercise \(\PageIndex{39}\)
\(21.63y + 12.40 - 5.09y = 6.11y - 15.66 + 9.43y\)
- Answer
-
\(y = -28.06\)
Exercise \(\PageIndex{40}\)
\(0.029a - 0.013 - 0.034 -0.057 = -0.038 + 0.56 + 1.01a\)
Exercises for Review
Exercise \(\PageIndex{41}\)
Is \(\dfrac{\text{7 calculators}}{\text{12 students}}\) an example of a ratio or a rate?
- Answer
-
rate
Exercise \(\PageIndex{42}\)
Convert \(\dfrac{3}{8}\)% to a decimal
Exercise \(\PageIndex{43}\)
0.4% of what number is 0.014?
- Answer
-
3.5
Exercise \(\PageIndex{44}\)
Use the clustering method to estimate the sum: \(89 + 93 + 206 + 198 + 91\)
Exercise \(\PageIndex{45}\)
Combine like terms: \(4x + 8y + 12y + 9x - 2y\).
- Answer
-
\(13x + 18y\)

## Match 1.52 — LibreTexts: 3.3: Solving Quadratic Equations of the Form- (x-a)²=c
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://workforce.libretexts.org/Bookshelves/Water_Systems_Technology/Mathematics_for_Wastewater_Management_(Brooks)/03%3A_Solving_Equations_and_Formulas/3.03%3A_Solving_Quadratic_Equations_of_the_Form-_(x-a)c

3.3: Solving Quadratic Equations of the Form- (x-a)²=c
When solving equations of the form: \({\left(x-a\right)}^2=c\), we can use the square root property which states to drop the square and take the positive and negative square root of the constant, c. Mathematically, we say the following:
If \({\left(x-a\right)}^2=c\),
then \(x-a=\pm \sqrt{c}\)
next, add a on both sides of the equation to obtain
\(x=a\pm \sqrt{c}\)
Solve \({\left(x-5\right)}^2=16\)
Solution
To solve, we first drop the square from the left side and take the positive and negative square root of 16 to obtain
\[x-5=\pm \sqrt{16}\]
Next, we simplify the square root
\[x-5=\pm 4\]
Next, we isolate the variable, x by adding 5 on both sides of the equation:
\[x-5+\boldsymbol{5}=+\boldsymbol{5}\pm 4\]
Such that after simplifying, we obtain two answers
\[x=5\pm 4\]
\[x=5+4 \,\,\text{ and }\,\, x=5-4\]
\[x=9\,\, \text{ and }\,\, x=1\]
Solve \(3{\left(x+2\right)}^2+5=80\)
Solution
To solve, we must first isolate the perfect square to create the form: \({\left(x-a\right)}^2=c\), so we first subtract 5 on both sides of the equation, then divide both sides by 3
\[3{\left(x+2\right)}^2+5-\boldsymbol{5}=80-\boldsymbol{5}\]
\[3{\left(x+2\right)}^2=75\]
\[\frac{3\left(x+2\right)^2}{\boldsymbol{3}}=\frac{75}{\boldsymbol{3}}\]
\[{\left(x+2\right)}^2=25\]
Next, we drop the square and take the positive and negative square root of 25 to obtain
\[x+2=\pm \sqrt{25}\]
\[x+2=\pm 5\]
Next, we isolate the x by subtracting 2 on both sides of the equation
\[x+2-\boldsymbol{2}=-\boldsymbol{2}\pm 5\]
After simplifying, we obtain two answers
\[x=-2\pm 5\]
\[x=-2+5 \,\,\text{ and }\,\, x=-2-5\]
\[x=3 \,\,\text{ and }\,\, x=-7\]
