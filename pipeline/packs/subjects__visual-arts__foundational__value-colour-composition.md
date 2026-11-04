# Source pack — subjects/visual-arts/foundational/value-colour-composition
Lesson title: Value, Colour, Composition
Level: foundational
Match confidence: 1.36

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.36 — Precalculus_2e-WEB § 1.4 Composition of Functions

Learning Objectives
In this section, you will:
Combine functions using algebraic operations.
Create a new function by composition of functions.
Evaluate composite functions.
Find the domain of a composite function.
Decompose a composite function into its component functions.
Suppose we want to calculate how much it costs to heat a house on a particular day of the year. The cost to heat a house
will depend on the average daily temperature, and in turn, the average daily temperature depends on the particular day
of the year. Notice how we have just defined two relationships: The cost depends on the temperature, and the
temperature depends on the day.
Using descriptive variables, we can notate these two functions. The function
gives the cost
of heating a house
for a given average daily temperature in
degrees Celsius. The function
gives the average daily temperature on
day
of the year. For any given day,
means that the cost depends on the temperature, which in turns
depends on the day of the year. Thus, we can evaluate the cost function at the temperature
For example, we could
evaluate
to determine the average daily temperature on the 5th day of the year. Then, we could evaluate the cost
function at that temperature. We would write
By combining these two relationships into one function, we have performed function composition, which is the focus of
this section.
Combining Functions Using Algebraic Operations
Function composition is only one way to combine existing functions. Another way is to carry out the usual algebraic
operations on functions, such as addition, subtraction, multiplication and division. We do this by performing the
operations with the function outputs, defining the result as the output of our new function.
Suppose we need to add two columns of numbers that represent a husband and wife’s separate annual incomes over a
period of years, with the result being their total household income. We want to do this for every year, adding only that
year’s incomes and then collecting all the data in a new column. If
is the wife’s income and
is the husband’s
1.4 • Composition of Functions
73

income in year
and we want
to represent the total income, then we can define a new function.
If this holds true for every year, then we can focus on the relation between the functions without reference to a year and
write
Just as for this sum of two functions, we can define difference, product, and ratio functions for any pair of functions that
have the same kinds of inputs (not necessarily numbers) and also the same kinds of outputs (which do have to be
numbers so that the usual operations of algebra can apply to them, and which also must have the same units or no units
when we add and subtract). In this way, we can think of adding, subtracting, multiplying, and dividing functions.
For two functions
and
with real number outputs, we define new functions
and
by the
relations
EXAMPLE 1
Performing Algebraic Operations on Functions
Find and simplify the functions
and
given
and
Are they the same
function?
Solution
Begin by writing the general form, and then substitute the given functions.
No, the functions are not the same.
Note: For
the condition
is necessary because when
the denominator is equal to 0, which makes
the function undefined.
TRY IT
#1
Find and simplify the functions
and
Are they the same function?
Create a Function by Composition of Functions
Performing algebraic operations on functions combines them into a new function, but we can also create functions by
74
1 • Functions
Access for free at openstax.org

composing functions. When we wanted to compute a heating cost from a day of the year, we created a new function that
takes a day as input and yields a cost as output. The process of combining functions so that the output of one function
becomes the input of another is known as a composition of functions. The resulting function is known as a composite
function. We represent this combination by the following notation:
We read the left-hand side as
composed with
at
and the right-hand side as
of
of
The two sides of the
equation have the same mathematical meaning and are equal. The open circle symbol
is called the composition
operator. We use this operator mainly when we wish to emphasize the relationship between the functions themselves
without referring to any particular input value. Composition is a binary operation that takes two functions and forms a
new function, much as addition or multiplication takes two numbers and gives a new number. However, it is important
not to confuse function composition with multiplication because, as we learned above, in most cases
It is also important to understand the order of operations in evaluating a composite function. We follow the usual
convention with parentheses by starting with the innermost parentheses first, and then working to the outside. In the
equation above, the function
takes the input
first and yields an output
Then the function
takes
as an
input and yields an output
In general,
and
are different functions. In other words, in many cases
for all
We will also
see that sometimes two functions can be composed only in one specific order.
For example, if
and
then
but
These expressions are not equal for all values of
so the two functions are not equal. It is irrelevant that the
expressions happen to be equal for the single input value
Note that the range of the inside function (the first function to be evaluated) needs to be within the domain of the
outside function. Less formally, the composition has to make sense in terms of inputs and outputs.
Composition of Functions
When the output of one function is used as the input of another, we call the entire operation a composition of
functions. For any input
and functions
and
this action defines a composite function, which we write as
such that
The domain of the composite function
is all
such that
is in the domain of
and
is in the domain of
It is important to realize that the product of functions
is not the same as the function composition
because, in general,
1.4 • Composition of Functions
75

EXAMPLE 2
Determining whether Composition of Functions is Commutative
Using the functions provided, find
and
Determine whether the composition of the functions is
commutative.
Solution
Let’s begin by substituting
into
Now we can substitute
into
We find that
so the operation of function composition is not commutative.
EXAMPLE 3
Interpreting Composite Functions
The function
gives the number of calories burned completing
sit-ups, and
gives the number of sit-ups a person
can complete in
minutes. Interpret
Solution
The inside expression in the composition is
Because the input to the s-function is time,
represents 3 minutes,
and
is the number of sit-ups completed in 3 minutes.
Using
as the input to the function
gives us the number of calories burned during the number of sit-ups that can
be completed in 3 minutes, or simply the number of calories burned in 3 minutes (by doing sit-ups).
EXAMPLE 4
Investigating the Order of Function Composition
Suppose
gives miles that can be driven in
hours and
gives the gallons of gas used in driving
miles. Which of
these expressions is meaningful:
or
Solution
The function
is a function whose output is the number of miles driven corresponding to the number of hours
driven.
The function
is a function whose output is the number of gallons used corresponding to the number of miles
driven. This means:
The expression
takes miles as the input and a number of gallons as the output. The function
requires a
number of hours as the input. Trying to input a number of gallons does not make sense. The expression
is
meaningless.
The expression
takes hours as input and a number of miles driven as the output. The function
requires a
number of miles as the input. Using
(miles driven) as an input value for
where gallons of gas depends on
miles driven, does make sense. The expression
makes sense, and will yield the number of gallons of gas used,
driving a certain number of miles,
in
hours.
76
1 • Functions
Access for free at openstax.org

Q&A
Are there any situations where
and
would both be meaningful or useful expressions?
Yes. For many pure mathematical functions, both compositions make sense, even though they usually
produce different new functions. In real-world problems, functions whose inputs and outputs have the
same units also may give compositions that are meaningful in either order.
TRY IT
#2
The gravitational force on a planet a distance r from the sun is given by the function
The
acceleration of a planet subjected to any force
is given by the function
Form a meaningful
composition of these two functions, and explain what it means.
Evaluating Composite Functions
Once we compose a new function from two existing functions, we need to be able to evaluate it for any input in its
domain. We will do this with specific numerical inputs for functions expressed as tables, graphs, and formulas and with
variables as inputs to functions expressed as formulas. In each case, we evaluate the inner function using the starting
input and then use the inner function’s output as the input for the outer function.
Evaluating Composite Functions Using Tables
When working with functions given as tables, we read input and output values from the table entries and always work
from the inside to the outside. We evaluate the inside function first and then use the output of the inside function as the
input to the outside function.
EXAMPLE 5
Using a Table to Evaluate a Composite Function
Using Table 1, evaluate
and
1
6
3
2
8
5
3
3
2
4
1
7
Table 1
Solution
To evaluate
we start from the inside with the input value 3. We then evaluate the inside expression
using
the table that defines the function
We can then use that result as the input to the function
so
is
replaced by 2 and we get
Then, using the table that defines the function
we find that
To evaluate
we first evaluate the inside expression
using the first table:
Then, using the table for
  we can evaluate
Table 2 shows the composite functions
and
as tables.
Table 2
1.4 • Composition of Functions
77

...
3
2
8
3
2
Table 2
TRY IT
#3
Using Table 1, evaluate
and
Evaluating Composite Functions Using Graphs
When we are given individual functions as graphs, the procedure for evaluating composite functions is similar to the
process we use for evaluating tables. We read the input and output values, but this time, from the
and
axes of the
graphs.
HOW TO
Given a composite function and graphs of its individual functions, evaluate it using the information provided
by the graphs.
1.
Locate the given input to the inner function on the
axis of its graph.
2.
Read off the output of the inner function from the
axis of its graph.
3.
Locate the inner function output on the
axis of the graph of the outer function.
4.
Read the output of the outer function from the
axis of its graph. This is the output of the composite function.
EXAMPLE 6
Using a Graph to Evaluate a Composite Function
Using Figure 1, evaluate
Figure 1
Solution
To evaluate
we start with the inside evaluation. See Figure 2.
78
1 • Functions
Access for free at openstax.org

Figure 2
We evaluate
using the graph of
finding the input of 1 on the
axis and finding the output value of the graph
at that input. Here,
We use this value as the input to the function
We can then evaluate the composite function by looking to the graph of
finding the input of 3 on the
axis and
reading the output value of the graph at this input. Here,
so
Analysis
Figure 3 shows how we can mark the graphs with arrows to trace the path from the input value to the output value.
Figure 3
TRY IT
#4
Using Figure 1, evaluate
Evaluating Composite Functions Using Formulas
When evaluating a composite function where we have either created or been given formulas, the rule of working from
the inside out remains the same. The input value to the outer function will be the output of the inner function, which
may be a numerical value, a variable name, or a more complicated expression.
While we can compose the functions for each individual input value, it is sometimes helpful to find a single formula that
will calculate the result of a composition
To do this, we will extend our idea of function evaluation. Recall that,
when we evaluate a function like
we substitute the value inside the parentheses into the formula wherever
1.4 • Composition of Functions
79

...
...
we see the input variable.
HOW TO
Given a formula for a composite function, evaluate the function.
1.
Evaluate the inside function using the input value or variable provided.
2.
Use the resulting output as the input to the outside function.
EXAMPLE 7
Evaluating a Composition of Functions Expressed as Formulas with a Numerical Input
Given
and
evaluate
Solution
Because the inside expression is
we start by evaluating
at 1.
Then
so we evaluate
at an input of 5.
Analysis
It makes no difference what the input variables
and
were called in this problem because we evaluated for specific
numerical values.
TRY IT
#5
Given
and
evaluate
ⓐ
ⓑ
Finding the Domain of a Composite Function
As we discussed previously, the domain of a composite function such as
is dependent on the domain of
and the
domain of
It is important to know when we can apply a composite function and when we cannot, that is, to know the
domain of a function such as
Let us assume we know the domains of the functions
and
separately. If we write
the composite function for an input
as
we can see right away that
must be a member of the domain of
in
order for the expression to be meaningful, because otherwise we cannot complete the inner function evaluation.
However, we also see that
must be a member of the domain of
otherwise the second function evaluation in
cannot be completed, and the expression is still undefined. Thus the domain of
consists of only those
inputs in the domain of
that produce outputs from
belonging to the domain of
Note that the domain of
composed with
is the set of all
such that
is in the domai

## Match 1.36 — College-Algebra-2e-WEB § 3.4 Composition of Functions

Learning Objectives
In this section, you will:
Combine functions using algebraic operations.
Create a new function by composition of functions.
Evaluate composite functions.
Find the domain of a composite function.
Decompose a composite function into its component functions.
Suppose we want to calculate how much it costs to heat a house on a particular day of the year. The cost to heat a house
will depend on the average daily temperature, and in turn, the average daily temperature depends on the particular day
of the year. Notice how we have just defined two relationships: The cost depends on the temperature, and the
temperature depends on the day.
Using descriptive variables, we can notate these two functions. The function
gives the cost
of heating a house
for a given average daily temperature in
degrees Celsius. The function
gives the average daily temperature on
day
of the year. For any given day,
means that the cost depends on the temperature, which in turns
depends on the day of the year. Thus, we can evaluate the cost function at the temperature
For example, we could
evaluate
to determine the average daily temperature on the 5th day of the year. Then, we could evaluate the cost
function at that temperature. We would write
By combining these two relationships into one function, we have performed function composition, which is the focus of
this section.
Combining Functions Using Algebraic Operations
Function composition is only one way to combine existing functions. Another way is to carry out the usual algebraic
operations on functions, such as addition, subtraction, multiplication and division. We do this by performing the
operations with the function outputs, defining the result as the output of our new function.
Suppose we need to add two columns of numbers that represent a husband and wife’s separate annual incomes over a
period of years, with the result being their total household income. We want to do this for every year, adding only that
3.4 • Composition of Functions
239

year’s incomes and then collecting all the data in a new column. If
is the wife’s income and
is the husband’s
income in year
and we want
to represent the total income, then we can define a new function.
If this holds true for every year, then we can focus on the relation between the functions without reference to a year and
write
Just as for this sum of two functions, we can define difference, product, and ratio functions for any pair of functions that
have the same kinds of inputs (not necessarily numbers) and also the same kinds of outputs (which do have to be
numbers so that the usual operations of algebra can apply to them, and which also must have the same units or no units
when we add and subtract). In this way, we can think of adding, subtracting, multiplying, and dividing functions.
For two functions
and
with real number outputs, we define new functions
and
by the
relations
EXAMPLE 1
Performing Algebraic Operations on Functions
Find and simplify the functions
and
given
and
Are they the same
function?
Solution
Begin by writing the general form, and then substitute the given functions.
No, the functions are not the same.
Note: For
the condition
is necessary because when
the denominator is equal to 0, which makes
the function undefined.
TRY IT
#1
Find and simplify the functions
and
Are they the same function?
240
3 • Functions
Access for free at openstax.org

Create a Function by Composition of Functions
Performing algebraic operations on functions combines them into a new function, but we can also create functions by
composing functions. When we wanted to compute a heating cost from a day of the year, we created a new function that
takes a day as input and yields a cost as output. The process of combining functions so that the output of one function
becomes the input of another is known as a composition of functions. The resulting function is known as a composite
function. We represent this combination by the following notation:
We read the left-hand side as
composed with
at
and the right-hand side as
of
of
The two sides of the
equation have the same mathematical meaning and are equal. The open circle symbol
is called the composition
operator. We use this operator mainly when we wish to emphasize the relationship between the functions themselves
without referring to any particular input value. Composition is a binary operation that takes two functions and forms a
new function, much as addition or multiplication takes two numbers and gives a new number. However, it is important
not to confuse function composition with multiplication because, as we learned above, in most cases
It is also important to understand the order of operations in evaluating a composite function. We follow the usual
convention with parentheses by starting with the innermost parentheses first, and then working to the outside. In the
equation above, the function
takes the input
first and yields an output
Then the function
takes
as an
input and yields an output
In general,
and
are different functions. In other words, in many cases
for all
We will also
see that sometimes two functions can be composed only in one specific order.
For example, if
and
then
but
These expressions are not equal for all values of
so the two functions are not equal. It is irrelevant that the
expressions happen to be equal for the single input value
Note that the range of the inside function (the first function to be evaluated) needs to be within the domain of the
outside function. Less formally, the composition has to make sense in terms of inputs and outputs.
Composition of Functions
When the output of one function is used as the input of another, we call the entire operation a composition of
functions. For any input
and functions
and
this action defines a composite function, which we write as
such that
The domain of the composite function
is all
such that
is in the domain of
and
is in the domain of
It is important to realize that the product of functions
is not the same as the function composition
because, in general,
3.4 • Composition of Functions
241

EXAMPLE 2
Determining whether Composition of Functions is Commutative
Using the functions provided, find
and
Determine whether the composition of the functions is
commutative.
Solution
Let’s begin by substituting
into
Now we can substitute
into
We find that
so the operation of function composition is not commutative.
EXAMPLE 3
Interpreting Composite Functions
The function
gives the number of calories burned completing
sit-ups, and
gives the number of sit-ups a person
can complete in
minutes. Interpret
Solution
The inside expression in the composition is
Because the input to the s-function is time,
represents 3 minutes,
and
is the number of sit-ups completed in 3 minutes.
Using
as the input to the function
gives us the number of calories burned during the number of sit-ups that can
be completed in 3 minutes, or simply the number of calories burned in 3 minutes (by doing sit-ups).
EXAMPLE 4
Investigating the Order of Function Composition
Suppose
gives miles that can be driven in
hours and
gives the gallons of gas used in driving
miles. Which of
these expressions is meaningful:
or
Solution
The function
is a function whose output is the number of miles driven corresponding to the number of hours
driven.
The function
is a function whose output is the number of gallons used corresponding to the number of miles
driven. This means:
The expression
takes miles as the input and a number of gallons as the output. The function
requires a
number of hours as the input. Trying to input a number of gallons does not make sense. The expression
is
meaningless.
The expression
takes hours as input and a number of miles driven as the output. The function
requires a
number of miles as the input. Using
(miles driven) as an input value for
where gallons of gas depends on
miles driven, does make sense. The expression
makes sense, and will yield the number of gallons of gas used,
driving a certain number of miles,
in
hours.
242
3 • Functions
Access for free at openstax.org

Q&A
Are there any situations where
and
would both be meaningful or useful expressions?
Yes. For many pure mathematical functions, both compositions make sense, even though they usually
produce different new functions. In real-world problems, functions whose inputs and outputs have the
same units also may give compositions that are meaningful in either order.
TRY IT
#2
The gravitational force on a planet a distance r from the sun is given by the function
The
acceleration of a planet subjected to any force
is given by the function
Form a meaningful
composition of these two functions, and explain what it means.
Evaluating Composite Functions
Once we compose a new function from two existing functions, we need to be able to evaluate it for any input in its
domain. We will do this with specific numerical inputs for functions expressed as tables, graphs, and formulas and with
variables as inputs to functions expressed as formulas. In each case, we evaluate the inner function using the starting
input and then use the inner function’s output as the input for the outer function.
Evaluating Composite Functions Using Tables
When working with functions given as tables, we read input and output values from the table entries and always work
from the inside to the outside. We evaluate the inside function first and then use the output of the inside function as the
input to the outside function.
EXAMPLE 5
Using a Table to Evaluate a Composite Function
Using Table 1, evaluate
and
1
6
3
2
8
5
3
3
2
4
1
7
Table 1
Solution
To evaluate
we start from the inside with the input value 3. We then evaluate the inside expression
using
the table that defines the function
We can then use that result as the input to the function
so
is
replaced by 2 and we get
Then, using the table that defines the function
we find that
To evaluate
we first evaluate the inside expression
using the first table:
Then, using the table for
  we can evaluate
Table 2 shows the composite functions
and
as tables.
Table 2
3.4 • Composition of Functions
243

...
3
2
8
3
2
Table 2
TRY IT
#3
Using Table 1, evaluate
and
Evaluating Composite Functions Using Graphs
When we are given individual functions as graphs, the procedure for evaluating composite functions is similar to the
process we use for evaluating tables. We read the input and output values, but this time, from the
and
axes of the
graphs.
HOW TO
Given a composite function and graphs of its individual functions, evaluate it using the information provided
by the graphs.
1.
Locate the given input to the inner function on the
axis of its graph.
2.
Read off the output of the inner function from the
axis of its graph.
3.
Locate the inner function output on the
axis of the graph of the outer function.
4.
Read the output of the outer function from the
axis of its graph. This is the output of the composite function.
EXAMPLE 6
Using a Graph to Evaluate a Composite Function
Using Figure 1, evaluate
Figure 1
Solution
To evaluate
we start with the inside evaluation. See Figure 2.
244
3 • Functions
Access for free at openstax.org

Figure 2
We evaluate
using the graph of
finding the input of 1 on the
axis and finding the output value of the graph
at that input. Here,
We use this value as the input to the function
We can then evaluate the composite function by looking to the graph of
finding the input of 3 on the
axis and
reading the output value of the graph at this input. Here,
so
Analysis
Figure 3 shows how we can mark the graphs with arrows to trace the path from the input value to the output value.
Figure 3
TRY IT
#4
Using Figure 1, evaluate
Evaluating Composite Functions Using Formulas
When evaluating a composite function where we have either created or been given formulas, the rule of working from
the inside out remains the same. The input value to the outer function will be the output of the inner function, which
may be a numerical value, a variable name, or a more complicated expression.
While we can compose the functions for each individual input value, it is sometimes helpful to find a single formula that
will calculate the result of a composition
To do this, we will extend our idea of function evaluation. Recall that,
when we evaluate a function like
we substitute the value inside the parentheses into the formula wherever
3.4 • Composition of Functions
245

...
...
we see the input variable.
HOW TO
Given a formula for a composite function, evaluate the function.
1.
Evaluate the inside function using the input value or variable provided.
2.
Use the resulting output as the input to the outside function.
EXAMPLE 7
Evaluating a Composition of Functions Expressed as Formulas with a Numerical Input
Given
and
evaluate
Solution
Because the inside expression is
we start by evaluating
at 1.
Then
so we evaluate
at an input of 5.
Analysis
It makes no difference what the input variables
and
were called in this problem because we evaluated for specific
numerical values.
TRY IT
#5
Given
and
evaluate
ⓐ
ⓑ
Finding the Domain of a Composite Function
As we discussed previously, the domain of a composite function such as
is dependent on the domain of
and the
domain of
It is important to know when we can apply a composite function and when we cannot, that is, to know the
domain of a function such as
Let us assume we know the domains of the functions
and
separately. If we write
the composite function for an input
as
we can see right away that
must be a member of the domain of
in
order for the expression to be meaningful, because otherwise we cannot complete the inner function evaluation.
However, we also see that
must be a member of the domain of
otherwise the second function evaluation in
cannot be completed, and the expression is still undefined. Thus the domain of
consists of only those
inputs in the domain of
that produce outputs from
belonging to the domain of
Note that the domain of
composed with
is the set of all
such that
is in th

## Match 1.36 — Algebra-and-Trigonometry-2e-WEB § 3.4 Composition of Functions

Learning Objectives
In this section, you will:
Combine functions using algebraic operations.
Create a new function by composition of functions.
Evaluate composite functions.
Find the domain of a composite function.
Decompose a composite function into its component functions.
Suppose we want to calculate how much it costs to heat a house on a particular day of the year. The cost to heat a house
will depend on the average daily temperature, and in turn, the average daily temperature depends on the particular day
of the year. Notice how we have just defined two relationships: The cost depends on the temperature, and the
temperature depends on the day.
Using descriptive variables, we can notate these two functions. The function
gives the cost
of heating a house
for a given average daily temperature in
degrees Celsius. The function
gives the average daily temperature on
day
of the year. For any given day,
means that the cost depends on the temperature, which in turns
depends on the day of the year. Thus, we can evaluate the cost function at the temperature
For example, we could
evaluate
to determine the average daily temperature on the 5th day of the year. Then, we could evaluate the cost
function at that temperature. We would write
By combining these two relationships into one function, we have performed function composition, which is the focus of
this section.
Combining Functions Using Algebraic Operations
Function composition is only one way to combine existing functions. Another way is to carry out the usual algebraic
operations on functions, such as addition, subtraction, multiplication and division. We do this by performing the
operations with the function outputs, defining the result as the output of our new function.
Suppose we need to add two columns of numbers that represent a husband and wife’s separate annual incomes over a
period of years, with the result being their total household income. We want to do this for every year, adding only that
3.4 • Composition of Functions
239

year’s incomes and then collecting all the data in a new column. If
is the wife’s income and
is the husband’s
income in year
and we want
to represent the total income, then we can define a new function.
If this holds true for every year, then we can focus on the relation between the functions without reference to a year and
write
Just as for this sum of two functions, we can define difference, product, and ratio functions for any pair of functions that
have the same kinds of inputs (not necessarily numbers) and also the same kinds of outputs (which do have to be
numbers so that the usual operations of algebra can apply to them, and which also must have the same units or no units
when we add and subtract). In this way, we can think of adding, subtracting, multiplying, and dividing functions.
For two functions
and
with real number outputs, we define new functions
and
by the
relations
EXAMPLE 1
Performing Algebraic Operations on Functions
Find and simplify the functions
and
given
and
Are they the same
function?
Solution
Begin by writing the general form, and then substitute the given functions.
No, the functions are not the same.
Note: For
the condition
is necessary because when
the denominator is equal to 0, which makes
the function undefined.
TRY IT
#1
Find and simplify the functions
and
Are they the same function?
240
3 • Functions
Access for free at openstax.org

Create a Function by Composition of Functions
Performing algebraic operations on functions combines them into a new function, but we can also create functions by
composing functions. When we wanted to compute a heating cost from a day of the year, we created a new function that
takes a day as input and yields a cost as output. The process of combining functions so that the output of one function
becomes the input of another is known as a composition of functions. The resulting function is known as a composite
function. We represent this combination by the following notation:
We read the left-hand side as
composed with
at
and the right-hand side as
of
of
The two sides of the
equation have the same mathematical meaning and are equal. The open circle symbol
is called the composition
operator. We use this operator mainly when we wish to emphasize the relationship between the functions themselves
without referring to any particular input value. Composition is a binary operation that takes two functions and forms a
new function, much as addition or multiplication takes two numbers and gives a new number. However, it is important
not to confuse function composition with multiplication because, as we learned above, in most cases
It is also important to understand the order of operations in evaluating a composite function. We follow the usual
convention with parentheses by starting with the innermost parentheses first, and then working to the outside. In the
equation above, the function
takes the input
first and yields an output
Then the function
takes
as an
input and yields an output
In general,
and
are different functions. In other words, in many cases
for all
We will also
see that sometimes two functions can be composed only in one specific order.
For example, if
and
then
but
These expressions are not equal for all values of
so the two functions are not equal. It is irrelevant that the
expressions happen to be equal for the single input value
Note that the range of the inside function (the first function to be evaluated) needs to be within the domain of the
outside function. Less formally, the composition has to make sense in terms of inputs and outputs.
Composition of Functions
When the output of one function is used as the input of another, we call the entire operation a composition of
functions. For any input
and functions
and
this action defines a composite function, which we write as
such that
The domain of the composite function
is all
such that
is in the domain of
and
is in the domain of
It is important to realize that the product of functions
is not the same as the function composition
because, in general,
3.4 • Composition of Functions
241

EXAMPLE 2
Determining whether Composition of Functions is Commutative
Using the functions provided, find
and
Determine whether the composition of the functions is
commutative.
Solution
Let’s begin by substituting
into
Now we can substitute
into
We find that
so the operation of function composition is not commutative.
EXAMPLE 3
Interpreting Composite Functions
The function
gives the number of calories burned completing
sit-ups, and
gives the number of sit-ups a person
can complete in
minutes. Interpret
Solution
The inside expression in the composition is
Because the input to the s-function is time,
represents 3 minutes,
and
is the number of sit-ups completed in 3 minutes.
Using
as the input to the function
gives us the number of calories burned during the number of sit-ups that can
be completed in 3 minutes, or simply the number of calories burned in 3 minutes (by doing sit-ups).
EXAMPLE 4
Investigating the Order of Function Composition
Suppose
gives miles that can be driven in
hours and
gives the gallons of gas used in driving
miles. Which of
these expressions is meaningful:
or
Solution
The function
is a function whose output is the number of miles driven corresponding to the number of hours
driven.
The function
is a function whose output is the number of gallons used corresponding to the number of miles
driven. This means:
The expression
takes miles as the input and a number of gallons as the output. The function
requires a
number of hours as the input. Trying to input a number of gallons does not make sense. The expression
is
meaningless.
The expression
takes hours as input and a number of miles driven as the output. The function
requires a
number of miles as the input. Using
(miles driven) as an input value for
where gallons of gas depends on
miles driven, does make sense. The expression
makes sense, and will yield the number of gallons of gas used,
driving a certain number of miles,
in
hours.
242
3 • Functions
Access for free at openstax.org

Q&A
Are there any situations where
and
would both be meaningful or useful expressions?
Yes. For many pure mathematical functions, both compositions make sense, even though they usually
produce different new functions. In real-world problems, functions whose inputs and outputs have the
same units also may give compositions that are meaningful in either order.
TRY IT
#2
The gravitational force on a planet a distance r from the sun is given by the function
The
acceleration of a planet subjected to any force
is given by the function
Form a meaningful
composition of these two functions, and explain what it means.
Evaluating Composite Functions
Once we compose a new function from two existing functions, we need to be able to evaluate it for any input in its
domain. We will do this with specific numerical inputs for functions expressed as tables, graphs, and formulas and with
variables as inputs to functions expressed as formulas. In each case, we evaluate the inner function using the starting
input and then use the inner function’s output as the input for the outer function.
Evaluating Composite Functions Using Tables
When working with functions given as tables, we read input and output values from the table entries and always work
from the inside to the outside. We evaluate the inside function first and then use the output of the inside function as the
input to the outside function.
EXAMPLE 5
Using a Table to Evaluate a Composite Function
Using Table 1, evaluate
and
1
6
3
2
8
5
3
3
2
4
1
7
Table 1
Solution
To evaluate
we start from the inside with the input value 3. We then evaluate the inside expression
using
the table that defines the function
We can then use that result as the input to the function
so
is
replaced by 2 and we get
Then, using the table that defines the function
we find that
To evaluate
we first evaluate the inside expression
using the first table:
Then, using the table for
  we can evaluate
Table 2 shows the composite functions
and
as tables.
Table 2
3.4 • Composition of Functions
243

...
3
2
8
3
2
Table 2
TRY IT
#3
Using Table 1, evaluate
and
Evaluating Composite Functions Using Graphs
When we are given individual functions as graphs, the procedure for evaluating composite functions is similar to the
process we use for evaluating tables. We read the input and output values, but this time, from the
and
axes of the
graphs.
HOW TO
Given a composite function and graphs of its individual functions, evaluate it using the information provided
by the graphs.
1.
Locate the given input to the inner function on the
axis of its graph.
2.
Read off the output of the inner function from the
axis of its graph.
3.
Locate the inner function output on the
axis of the graph of the outer function.
4.
Read the output of the outer function from the
axis of its graph. This is the output of the composite function.
EXAMPLE 6
Using a Graph to Evaluate a Composite Function
Using Figure 1, evaluate
Figure 1
Solution
To evaluate
we start with the inside evaluation. See Figure 2.
244
3 • Functions
Access for free at openstax.org

Figure 2
We evaluate
using the graph of
finding the input of 1 on the
axis and finding the output value of the graph
at that input. Here,
We use this value as the input to the function
We can then evaluate the composite function by looking to the graph of
finding the input of 3 on the
axis and
reading the output value of the graph at this input. Here,
so
Analysis
Figure 3 shows how we can mark the graphs with arrows to trace the path from the input value to the output value.
Figure 3
TRY IT
#4
Using Figure 1, evaluate
Evaluating Composite Functions Using Formulas
When evaluating a composite function where we have either created or been given formulas, the rule of working from
the inside out remains the same. The input value to the outer function will be the output of the inner function, which
may be a numerical value, a variable name, or a more complicated expression.
While we can compose the functions for each individual input value, it is sometimes helpful to find a single formula that
will calculate the result of a composition
To do this, we will extend our idea of function evaluation. Recall that,
when we evaluate a function like
we substitute the value inside the parentheses into the formula wherever
3.4 • Composition of Functions
245

...
...
we see the input variable.
HOW TO
Given a formula for a composite function, evaluate the function.
1.
Evaluate the inside function using the input value or variable provided.
2.
Use the resulting output as the input to the outside function.
EXAMPLE 7
Evaluating a Composition of Functions Expressed as Formulas with a Numerical Input
Given
and
evaluate
Solution
Because the inside expression is
we start by evaluating
at 1.
Then
so we evaluate
at an input of 5.
Analysis
It makes no difference what the input variables
and
were called in this problem because we evaluated for specific
numerical values.
TRY IT
#5
Given
and
evaluate
ⓐ
ⓑ
Finding the Domain of a Composite Function
As we discussed previously, the domain of a composite function such as
is dependent on the domain of
and the
domain of
It is important to know when we can apply a composite function and when we cannot, that is, to know the
domain of a function such as
Let us assume we know the domains of the functions
and
separately. If we write
the composite function for an input
as
we can see right away that
must be a member of the domain of
in
order for the expression to be meaningful, because otherwise we cannot complete the inner function evaluation.
However, we also see that
must be a member of the domain of
otherwise the second function evaluation in
cannot be completed, and the expression is still undefined. Thus the domain of
consists of only those
inputs in the domain of
that produce outputs from
belonging to the domain of
Note that the domain of
composed with
is the set of all
such that
is in th
