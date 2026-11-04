# Source pack — subjects/operations-research/foundational/linear-programming
Lesson title: Linear Programming
Level: foundational
Match confidence: 3.02

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.02 — ContemporaryMathematics-WEB § 5.11 Linear Programming

Figure 5.98 The aftermath of an earthquake and tsunami. (credit: modification of work "Earthquake and Tsunami Japan"
by Climate and Ecosystems Change Adaptation Research University Network/Flickr, CC BY 2.0)
Learning Objectives
After completing this section, you should be able to:
1.
Compose an objective function to be minimized or maximized.
2.
Compose inequalities representing a system application.
3.
Apply linear programming to solve application problems.
518
5 • Algebra
Access for free at openstax.org

Imagine you hear about some natural disaster striking a far-away country; it could be an earthquake, a fire, a tsunami, a
tornado, a hurricane, or any other type of natural disaster. The survivors of this disaster need help—they especially need
food, water, and medical supplies. You work for a company that has these supplies, and your company has decided to
help by flying the needed supplies into the disaster area. They want to maximize the number of people they can help.
However, there are practical constraints that need to be taken into consideration; the size of the airplanes, how much
weight each airplane can carry, and so on. How do you solve this dilemma? This is where linear programming comes into
play. Linear programming is a mathematical technique to solve problems involving finding maximums or minimums
where a linear function is limited by various constraints.
As a field, linear programming began in the late 1930s and early 1940s. It was used by many countries during World War
II; countries used linear programming to solve problems such as maximizing troop effectiveness, minimizing their own
casualties, and maximizing the damage they could inflict upon the enemy. Later, businesses began to realize they could
use the concept of linear programming to maximize output, minimize expenses, and so on. In short, linear programming
is a method to solve problems that involve finding a maximum or minimum where a linear function is constrained by
various factors.
WHO KNEW?
A Mathematician Invents a “Tsunami Cannon”
On December 26, 2004, a massive earthquake occurred in the Indian Ocean. This earthquake, which scientists
estimate had a magnitude of 9.0 or 9.1 on the Richter Scale, set off a wave of tsunamis across the Indian Ocean. The
waves of the tsunami averaged over 30 feet (10 meters) high, and caused massive damage and loss of life across the
coastal regions bordering the Indian Ocean.
Usama Kadri works as an applied mathematician at Cardiff University in Wales. His areas of research include fluid
dynamics and non-linear phenomena. Lately, he has been focusing his research on the early detection and easing of
the effects of tsunamis. One of his theories involves deploying a series of devices along coastlines which would fire
acoustic-gravity waves (AGWs) into an oncoming tsunami, which in theory would lessen the force of the tsunami. Of
course, this is all in theory, but Kadri believes it will work. There are issues with creating such a device: they would
take a tremendous amount of electricity to generate an AGW, for instance, but if it would save lives, it may well be
worth it.
Compose an Objective Function to Be Minimized or Maximized
An objective function is a linear function in two or more variables that describes the quantity that needs to be
maximized or minimized.
EXAMPLE 5.96
Composing an Objective Function for Selling Two Products
Miriam starts her own business, where she knits and sells scarves and sweaters out of high-quality wool. She can make a
profit of $8 per scarf and $10 per sweater. Write an objective function that describes her profit.
Solution
Let
represent the number of scarves sold, and let
represent the number of sweaters sold. Let
represent profit.
Since each scarf has a profit of $8 and each sweater has a profit of $10, the objective function is
.
YOUR TURN 5.96
1. For a fundraiser at school, the Robotics Club is selling bags of apples and bunches of bananas during lunch. They
will make a profit of $4 per bag of apples and $6 per bunch of bananas. Write an objective function that
describes the profit the Robotics Club will make.
5.11 • Linear Programming
519

EXAMPLE 5.97
Composing an Objective Function for Production
William’s factory produces two products, widgets and wadgets. It takes 24 minutes for his factory to make 1 widget, and
32 minutes for his factory to make 1 wadget. Write an objective function that describes the time it takes to make the
products.
Solution
Let
equal the number of widgets made; let
equal the number of wadgets made; let
represent total time. The
objective function is
.
YOUR TURN 5.97
1. Suppose William has a second factory that can make widgets in 20 minutes and wadgets in 28 minutes. Write an
objective function that describes the time it takes to make the products.
Composing Inequalities Representing a System Application
For our two examples of profit and production, in an ideal world the profit a person makes and/or the number of
products a company produces would have no restrictions. After all, who wouldn’t want to have an unrestricted profit?
However in reality this is not the case; there are usually several variables that can restrict how much profit a person can
make or how many products a company can produce. These restrictions are called constraints.
Many different variables can be constraints. When making or selling a product, the time available, the cost of
manufacturing and the amount of raw materials are all constraints. In the opening scenario with the tsunami, the
maximum weight on an airplane and the volume of cargo it can carry would be constraints. Constraints are expressed as
linear inequalities; the list of constraints defined by the problem forms a system of linear inequalities that, along with the
objective function, represent a system application.
EXAMPLE 5.98
Representing the Constraints for Selling Two Products
Two friends start their own business, where they knit and sell scarves and sweaters out of high-quality wool. They can
make a profit of $8 per scarf and $10 per sweater. To make a scarf, 3 bags of knitting wool are needed; to make a
sweater, 4 bags of knitting wool are needed. The friends can only make 8 items per day, and can use not more than 27
bags of knitting wool per day. Write the inequalities that represent the constraints. Then summarize what has been
described thus far by writing the objective function for profit and the two constraints.
Solution
Let
represent the number of scarves sold, and let
represent the number of sweaters sold. There are two constraints:
the number of items the business can make in a day (a maximum of 8) and the number of bags of knitting wool they can
use per day (a maximum of 27). The first constraint (total number of items in a day) is written as:
Since each scarf takes 3 bags of knitting wool and each sweater takes 4 bags of knitting wool, the second constraint,
total bags of knitting wool per day, is written as:
In summary, here are the equations that represent the new business:
; This is the profit equation: The business makes $8 per scarf and $10 per sweater.
520
5 • Algebra
Access for free at openstax.org

YOUR TURN 5.98
1. For a fundraiser at school, the Robotics Club is selling bags of apples and bunches of bananas during lunch. They
will make a profit of $4 per bag of apples and $6 per bunch of bananas. Due to school health regulations, the
club is allowed to have only 20 bags and bunches of fruit on school grounds each day to sell. Another regulation:
the container where the Robotics Club keeps the fruit has a maximum weight capacity of 70 pounds. Each bag of
apples weighs 3 pounds, while each bunch of bananas weighs 5 pounds. Write the inequalities that represent
these constraints. Then summarize the equations that represent this system.
EXAMPLE 5.99
Representing Constraints for Production
A factory produces two products, widgets and wadgets. It takes 24 minutes for the factory to make 1 widget, and 32
minutes for the factory to make 1 wadget. Research indicates that long-term demand for products from the factory will
result in average sales of 12 widgets per day and 10 wadgets per day. Because of limitations on storage at the factory, no
more than 20 widgets or 17 wadgets can be made each day. Write the inequalities that represent the constraints. Then
summarize what has been described thus far by writing the objective function for time and the two constraints.
Solution
Let
equal the number of widgets made; let
equal the number of wadgets made. Based on the long-term demand, we
know the factory must produce a minimum of 12 widgets and 10 wadgets per day. We also know because of storage
limitations, the factory cannot produce more than 20 widgets per day or 17 wadgets per day. Writing those as
inequalities, we have:
The number of widgets made per day must be between 12 and 20, and the number of wadgets made per day must be
between 10 and 17. Therefore, we have:
The system is:
is the variable for time; it takes 24 minutes to make a widget and 32 minutes to make a wadget.
YOUR TURN 5.99
1. Suppose a second factory can make widgets in 20 minutes and wadgets in 28 minutes. Research for this factory
indicates that long-term demand for products from this second factory will result in average sales of 15 widgets
per day and 13 wadgets per day. Because of limitations on storage at his factory, no more than 22 widgets or 19
wadgets can be made each day. Write the inequalities that represent the constraints. Then summarize what has
been described thus far by writing the objective function for time and the two constraints.
Applying Linear Programming to Solve Application Problems
There are four steps that need to be completed when solving a problem using linear programming. They are as follows:
5.11 • Linear Programming
521

Step 1: Compose an objective function to be minimized or maximized.
Step 2: Compose inequalities representing the constraints of the system.
Step 3: Graph the system of inequalities representing the constraints.
Step 4: Find the value of the objective function at each corner point of the graphed region.
The first two steps you have already learned. Let’s continue to use the same examples to illustrate Steps 3 and 4.
EXAMPLE 5.100
Solving a Linear Programming Problem for Two Products
Three friends start their own business, where they knit and sell scarves and sweaters out of high-quality wool. They can
make a profit of $8 per scarf and $10 per sweater. To make a scarf, 3 bags of knitting wool are needed; to make a
sweater, 4 bags of knitting wool are needed. The friends can only make 8 items per day, and can use not more than 27
bags of knitting wool per day. Determine the number of scarves and sweaters they should make each day to maximize
their profit.
Solution
Step 1: Compose an objective function to be minimized or maximized. From Example 5.98, the objective function is
.
Step 2: Compose inequalities representing the constraints of the system. From Example 5.98, the constraints are
and
.
Step 3: Graph the system of inequalities representing the constraints. Using methods discussed in Graphing Linear
Equations and Inequalities, the graphs of the constraints are shown below. Because the number of scarves ( ) and the
number of sweaters ( ) both must be non-negative numbers (i.e.,
and
), we need to graph the system of
inequalities in Quadrant I only. Figure 5.99 shows each constraint graphed on its own axes, while Figure 5.100 shows the
graph of the system of inequalities (the two constraints graphed together). In Figure 5.100, the large shaded region
represents the area where the two constraints intersect. If you are unsure how to graph these regions, refer back to
Graphing Linear Equations and Inequalities.
Figure 5.99 Graphs of each constraint
522
5 • Algebra
Access for free at openstax.org

Figure 5.100 Graph of the System of Inequalities
Step 4: Find the value of the objective function at each corner point of the graphed region. The “graphed region” is the
area where both of the regions intersect; in Figure 5.101, it is the large shaded area. The “corner points” refer to each
vertex of the shaded area. Why the corner points? Because the maximum and minimum of every objective function will
occur at one (or more) of the corner points. Figure 5.101 shows the location and coordinates of each corner point.
Figure 5.101 Graph of Region with Corner Points
Three of the four points are readily found, as we used them to graph the regions; the fourth point, the intersection point
of the two constraint lines, will have to be found using methods discussed in Systems of Linear Equations in Two
Variables, either using substitution or elimination. As a reminder, set up the two equations of the constraint lines:
For this example, substitution will be used.
Substituting
into the first equation for
, we have
5.11 • Linear Programming
523

Now, substituting the 5 in for
in either equation to solve for
. Choosing the second equation, we have:
Therefore,
, and
.
To find the value of the objective function,
, put the coordinates for each corner point into the equation
and solve. The largest solution found when doing this will be the maximum value, and thus will be the answer to the
question originally posed: determining the number of scarves and sweaters the new business should make each day to
maximize their profit.
Corner ( ,
)
Objective Function
The maximum value for the profit
occurs when
and
. This means that to maximize their profit, the new
business should make 5 scarves and 3 sweaters every day.
YOUR TURN 5.100
1. For a fundraiser at school, the Robotics Club is selling bags of apples and bunches of bananas during lunch. They
will make a profit of $4 per bag of apples and $6 per bunch of bananas. Due to school health regulations, the
club is allowed to have only 20 bags and bunches of fruit on school grounds each day to sell. Another regulation:
the container where the Robotics Club keeps the frui

## Match 1.54 — ContemporaryMathematics-WEB § 5.9 Systems of Linear Equations in Two Variables

Figure 5.82 Fruits and vegetables at a farmer’s market. (credit: “California Ave. Farmers’ Market” by Jun Seita/Flickr, CC BY
2.0)
Learning Objectives
After completing this section, you should be able to:
1.
Determine and show whether an ordered pair is a solution to a system of equations.
2.
Solve systems of linear equations using graphical methods.
3.
Solve systems of linear equations using substitution.
4.
Solve systems of linear equations using elimination.
5.
Identify systems with no solution or infinitely many solutions.
6.
Solve applications of systems of linear equations.
In this section, we will learn how to solve systems of linear equations in two variables. There are several real-world
scenarios that can be represented by systems of linear equalities. Suppose two friends, Andrea and Bart, go shopping at
a farmers market to buy some vegetables. Andrea buys 2 tomatoes and 4 cucumbers and spends $2.00. Bart buys 4
tomatoes and 5 cucumbers and spends $2.95. What is the price of each vegetable?
Determining If an Ordered Pair Is a Solution to a System of Equations
When we solved linear equations in Linear Equations in One Variable with Applications and Linear Inequalities in One
Variable with Applications, we learned how to solve linear equations with one variable. Now we will work with two or
more linear equations grouped together, which is known as a system of linear equations.
In this section, we will focus our work on systems of two linear equations in two unknowns (variables) and applications of
systems of linear equations. An example of a system of two linear equations is shown below. We use a brace to show the
two equations are grouped together to form a system of equations.
A linear equation in two variables, such as
, has an infinite number of solutions. Its graph is a line. Remember,
every point on the line is a solution to the equation and every solution to the equation is a point on the line. To solve a
system of two linear equations, we want to find the values of the variables that are solutions to both equations. In other
words, we are looking for the ordered pairs ( ,
) that make both equations true. These are called the solutions of a
system of equations.
To determine if an ordered pair is a solution to a system of two equations, we substitute the values of the variables into
each equation. If the ordered pair makes both equations true, it is a solution to the system.
474
5 • Algebra
Access for free at openstax.org

EXAMPLE 5.81
Determining Whether an Ordered Pair Is a Solution to the System
Determine whether the ordered pair is a solution to the system.
1.
2.
Solution
1.
We substitute
and
into both equations.
does not make both equations true.
is not a solution.
2.
We substitute
and
into both equations.
makes both equations true.
is a solution.
YOUR TURN 5.81
Determine whether the ordered pair is a solution to the system.
1.
2.
EXAMPLE 5.82
Determining Whether an Ordered Pair Is a Solution to the System
Determine whether the ordered pair is a solution to the system
1.
2.
Solution
1.
Substitute
for
and
for
into both equations.
5.9 • Systems of Linear Equations in Two Variables
475

is a solution.
2.
Substitute
for
and
for
into both equations.
is not a solution.
YOUR TURN 5.82
Determine whether the ordered pair is a solution to the system.
1.
2.
Solving Systems of Linear Equations Using Graphical Methods
We will use three methods to solve a system of linear equations. The first method we will use is graphing. The graph of a
linear equation is a line. Each point on the line is a solution to the equation. For a system of two equations, we will graph
two lines. Then we can see all the points that are solutions to each equation. And, by finding what points the lines have
in common, we will find the solution to the system.
Most linear equations in one variable have one solution; but for some equations called contradictions, there are no
solutions, and for other equations called identities, all numbers are solutions. Similarly, when we solve a system of two
linear equations represented by a graph of two lines in the same plane, there are three possible cases, as shown in
Figure 5.83.
476
5 • Algebra
Access for free at openstax.org

Figure 5.83
Each time we demonstrate a new method, we will use it on the same system of linear equations. At the end you will
decide which method was the most convenient way to solve this system.
The steps to use to solve a system of linear equations by graphing are shown here.
Step 1: Graph the first equation.
Step 2: Graph the second equation on the same rectangular coordinate system.
Step 3: Determine whether the lines intersect, are parallel, or are the same line.
Step 4: Identify the solution to the system.
If the lines intersect, identify the point of intersection. This is the solution to the system.
If the lines are parallel, the system has no solution.
If the lines are the same, the system has an infinite number of solutions.
Step 5: Check the solution in both equations.
EXAMPLE 5.83
Solving a System of Linear Equations by Graphing
Solve this system of linear equations by graphing.
5.9 • Systems of Linear Equations in Two Variables
477

Solution
Step 1: Graph the first
equation.
To graph the first line,
write the equation in
slope-intercept form.
Step 2: Graph the
second equation on the
same rectangular
coordinate system.
To graph the second
line, use intercepts.
478
5 • Algebra
Access for free at openstax.org

Step 3: Determine
whether the lines
intersect, are parallel,
or are the same line.
Look at the graph of
the lines.
The lines intersect.
Step 4 and Step 5:
Identify the solution to
the system.
If the lines intersect,
identify the point of
intersection. Check to
make sure it is a
solution to both
equations. This is the
solution to the system.
If the lines are parallel,
the system has no
solution.
If the lines are the
same, the system has
an infinite number of
solutions.
Since the lines
intersect, find the
point of intersection.
Check the point in
both equations.
The lines intersect at
.
The solution is
.
YOUR TURN 5.83
1. Solve this system of linear equations by graphing.
Solving Systems of Linear Equations Using Substitution
We will now solve systems of linear equations by the substitution method. We will use the same system we used for
graphing.
We will first solve one of the equations for either
or
. We can choose either equation and solve for either
variable—but we’ll try to make a choice that will keep the work easy. Then, we substitute that expression into the other
equation. The result is an equation with just one variable—and we know how to solve those!
After we find the value of one variable, we will substitute that value into one of the original equations and solve for the
other variable. Finally, we check our solution and make sure it makes both equations true. This process is summarized
here:
Step 1: Solve one of the equations for either variable.
Step 2: Substitute the expression from Step 1 into the other equation.
Step 3: Solve the resulting equation.
Step 4: Substitute the solution in Step 3 into either of the original equations to find the other variable.
Step 5: Write the solution as an ordered pair.
Step 6: Check that the ordered pair is a solution to both original equations.
5.9 • Systems of Linear Equations in Two Variables
479

EXAMPLE 5.84
Solving a System of Linear Equations Using Substitution
Solve this system of linear equations by substitution:
Solution
Step 1: Solve one of the equations for
either variable.
We’ll solve the first equation
for
.
Step 2: Substitute the expression from
Step 1 into the other equation.
We replace
in the second
equation with the expression
.
Step 3: Solve the resulting equation.
Now we have an equation with
just 1 variable. We know how
to solve this!
Step 4: Substitute the solution from Step
3 into one of the original equations to
find the other variable.
We’ll use the first equation and
replace
with 4.
Step 5: Write the solution as an ordered
pair.
The ordered pair is ( ,
).
Step 6: Check that the ordered pair is a
solution to both original equations.
Substitute
,
into
both equations and make sure
they are both true.
Both equations are true.
is the solution to the system.
YOUR TURN 5.84
1. Solve this system of linear equations by substitution:
Solving Systems of Linear Equations Using Elimination
We have solved systems of linear equations by graphing and by substitution. Graphing works well when the variable
coefficients are small, and the solution has integer values. Substitution works well when we can easily solve one
equation for one of the variables and not have too many fractions in the resulting expression.
The third method of solving systems of linear equations is called the elimination method. When we solved a system by
substitution, we started with two equations and two variables and reduced it to one equation with one variable. This is
480
5 • Algebra
Access for free at openstax.org

what we’ll do with the elimination method, too, but we’ll have a different way to get there.
The elimination method is based on the Addition Property of Equality. The Addition Property of Equality says that when
you add the same quantity to both sides of an equation, you still have equality. We will extend the Addition Property of
Equality to say that when you add equal quantities to both sides of an equation, the results are equal. For any
expressions
,
, , and
:
if
and
then
.
To solve a system of equations by elimination, we start with both equations in standard form. Then we decide which
variable will be easiest to eliminate. How do we decide? We want to have the coefficients of one variable be opposites, so
that we can add the equations together and eliminate that variable. Notice how that works when we add these two
equations together:
The
’s add to zero and we have one equation with one variable. Let us try another one:
This time we do not see a variable that can be immediately eliminated if we add the equations. But if we multiply the first
equation by
, we will make the coefficients of
opposites. We must multiply every term on both sides of the equation
by
.
Then rewrite the system of equations.
Now we see that the coefficients of the
terms are opposites, so
will be eliminated when we add these two equations.
Once we get an equation with just one variable, we solve it. Then we substitute that value into one of the original
equations to solve for the remaining variable. And, as always, we check our answer to make sure it is a solution to both
of the original equations. Here’s a summary of using the elimination method:
Step 1: Write both equations in standard form. If any coefficients are fractions, clear them.
Step 2: Make the coefficients of one variable opposites.
Decide which variable you will eliminate.
Multiply one or both equations so that the coefficients of that variable are opposites.
Step 3: Add the equations resulting from Step 2 to eliminate one variable.
Step 4: Solve for the remaining variable.
Step 5: Substitute the solution from Step 4 into one of the original equations. Then solve for the other variable.
Step 6: Write the solution as an ordered pair.
Step 7: Check that the ordered pair is a solution to both original equations.
5.9 • Systems of Linear Equations in Two Variables
481

EXAMPLE 5.85
Solving a System of Linear Equations Using Elimination
Solve this system of linear equations by elimination:
Solution
Step 1: Write both equations in
standard form.
If any coefficients are fractions, clear
them.
Both equations are in standard
form,
. There are no
fractions.
Step 2: Make the coefficients of one
variable opposites.
Decide which variable you will
eliminate.
Multiply one or both equations so that
the coefficients of that variable are
opposites.
We can eliminate the
’s by
multiplying the first equation by
2.
Multiply both sides of
by 2.
Step 3: Add the equations resulting
from Step 2 to eliminate one variable.
We add the
’s,
’s, and
constants.
Step 4: Solve for the remaining
variable.
Solve for
.
Step 5: Substitute the solution from
Step 4 into one of the original
equations. Then solve for the other
variable.
Substitute
into the second
equation,
. Then solve
for
.
Step 6: Write the solution as an
ordered pair.
Write it as
.
Step 7: Check that the ordered pair is
a solution to both original equations.
Substitute
,
into
and
. Do
they make both equations true?
Yes!
The solution is
.
YOUR TURN 5.85
1. Solve this system of linear equations by elimination:
482
5 • Algebra
Access for free at openstax.org

Identifying Systems with No Solution or Infinitely Many Solutions
In all the systems of linear equations so far, the lines intersected, and the solution was one point. In Example 5.86 and
Example 5.87, we will look at a system of equations that has no solution and at a system of equations that has an infinite
number of solutions.
EXAMPLE 5.86
Solving a System of Linear Equations with No Solution
Solve the system by a method of your choice:
Solution
Let us solve the system of linear equations by graphing.
To graph the first equation, we will use its slope and
-intercept.
To graph the second equation, we will use the intercepts.
0
−2
4
0
Graph the lines (Figure 5.84).
5.9 • Systems of Linear Equations in Two Variables
483

Figure 5.84
Determine the points of intersection. The lines are parallel. Since no point is on both lines, there is no ordered pair that
makes both equations true. There is no solution to this system.
YOUR TURN 5.86
1. Solve the system by a method of your choice:
EXAMPLE 5.87
Solving a System of Linear Equations with Infinite Solutions
Solve the system by a method of your choice:
Solution
Let us solve the system of linear equations by graphing.
Find the slope and
-intercept of the first equation.
Find the intercepts of the second equation.
484
5 • Algebra
Access for free at openstax.org

0
−3
0
Graph the lines (Figure 5.85).
Figure 5.85
The lines are the same! Since every point on the line makes 

## Match 1.53 — College-Algebra-2e-WEB § 4.1 Linear Functions

Learning Objectives
In this section, you will:
Represent a linear function.
Determine whether a linear function is increasing, decreasing, or constant.
Interpret slope as a rate of change.
Write and interpret an equation for a linear function.
Graph linear functions.
Determine whether lines are parallel or perpendicular.
Write the equation of a line parallel or perpendicular to a given line.
LINEAR FUNCTIONS
4
1
http://www.guinnessworldrecords.com/records-3000/fastest-growing-plant/
4 • Introduction
323

Figure 1
Shanghai MagLev Train (credit: "kanegen"/Flickr)
Just as with the growth of a bamboo plant, there are many situations that involve constant change over time. Consider,
for example, the first commercial maglev train in the world, the Shanghai MagLev Train (Figure 1). It carries passengers
comfortably for a 30-kilometer trip from the airport to the subway station in only eight minutes2 .
Suppose a maglev train travels a long distance, and maintains a constant speed of 83 meters per second for a period of
time once it is 250 meters from the station. How can we analyze the train’s distance from the station as a function of
time? In this section, we will investigate a kind of function that is useful for this purpose, and use it to investigate real-
world situations such as the train’s distance from the station at a given point in time.
Representing Linear Functions
The function describing the train’s motion is a linear function, which is defined as a function with a constant rate of
change. This is a polynomial of degree 1. There are several ways to represent a linear function, including word form,
function notation, tabular form, and graphical form. We will describe the train’s motion as a function using each method.
Representing a Linear Function in Word Form
Let’s begin by describing the linear function in words. For the train problem we just considered, the following word
sentence may be used to describe the function relationship.
•
The train’s distance from the station is a function of the time during which the train moves at a constant speed plus
its original distance from the station when it began moving at constant speed.
The speed is the rate of change. Recall that a rate of change is a measure of how quickly the dependent variable changes
with respect to the independent variable. The rate of change for this example is constant, which means that it is the
same for each input value. As the time (input) increases by 1 second, the corresponding distance (output) increases by
83 meters. The train began moving at this constant speed at a distance of 250 meters from the station.
Representing a Linear Function in Function Notation
Another approach to representing linear functions is by using function notation. One example of function notation is an
equation written in the slope-intercept form of a line, where
is the input value,
is the rate of change, and
is the
initial value of the dependent variable.
In the example of the train, we might use the notation
where the total distance
is a function of the time
The
rate,
is 83 meters per second. The initial value of the dependent variable
is the original distance from the station,
250 meters. We can write a generalized equation to represent the motion of the train.
Representing a Linear Function in Tabular Form
A third method of representing a linear function is through the use of a table. The relationship between the distance
from the station and the time is represented in Figure 2. From the table, we can see that the distance changes by 83
meters for every 1 second increase in time.
2
http://www.chinahighlights.com/shanghai/transportation/maglev-train.htm
324
4 • Linear Functions
Access for free at openstax.org

Figure 2
Tabular representation of the function
showing selected input and output values
Q&A
Can the input in the previous example be any real number?
No. The input represents time so while nonnegative rational and irrational numbers are possible, negative
real numbers are not possible for this example. The input consists of non-negative real numbers.
Representing a Linear Function in Graphical Form
Another way to represent linear functions is visually, using a graph. We can use the function relationship from above,
to draw a graph as represented in Figure 3. Notice the graph is a line. When we plot a linear function,
the graph is always a line.
The rate of change, which is constant, determines the slant, or slope of the line. The point at which the input value is zero
is the vertical intercept, or y-intercept, of the line. We can see from the graph that the y-intercept in the train example we
just saw is
and represents the distance of the train from the station when it began moving at a constant speed.
Figure 3
The graph of
. Graphs of linear functions are lines because the rate of change is constant.
Notice that the graph of the train example is restricted, but this is not always the case. Consider the graph of the line
Ask yourself what numbers can be input to the function. In other words, what is the domain of the
function? The domain is comprised of all real numbers because any number may be doubled, and then have one added
to the product.
Linear Function
A linear function is a function whose graph is a line. Linear functions can be written in the slope-intercept form of a
line
where
is the initial or starting value of the function (when input,
), and
is the constant rate of change, or
slope of the function. The y-intercept is at
EXAMPLE 1
Using a Linear Function to Find the Pressure on a Diver
The pressure,
in pounds per square inch (PSI) on the diver in Figure 4 depends upon her depth below the water
surface,
in feet. This relationship may be modeled by the equation,
Restate this function in
words.
4.1 • Linear Functions
325

Figure 4
(credit: Ilse Reijs and Jan-Noud Hutten)
Solution
To restate the function in words, we need to describe each part of the equation. The pressure as a function of depth
equals four hundred thirty-four thousandths times depth plus fourteen and six hundred ninety-six thousandths.
Analysis
The initial value, 14.696, is the pressure in PSI on the diver at a depth of 0 feet, which is the surface of the water. The rate
of change, or slope, is 0.434 PSI per foot. This tells us that the pressure on the diver increases 0.434 PSI for each foot her
depth increases.
Determining Whether a Linear Function Is Increasing, Decreasing, or Constant
The linear functions we used in the two previous examples increased over time, but not every linear function does. A
linear function may be increasing, decreasing, or constant. For an increasing function, as with the train example, the
output values increase as the input values increase. The graph of an increasing function has a positive slope. A line with
a positive slope slants upward from left to right as in Figure 5(a). For a decreasing function, the slope is negative. The
output values decrease as the input values increase. A line with a negative slope slants downward from left to right as in
Figure 5(b). If the function is constant, the output values are the same for all input values so the slope is zero. A line with
a slope of zero is horizontal as in Figure 5(c).
Figure 5
Increasing and Decreasing Functions
The slope determines if the function is an increasing linear function, a decreasing linear function, or a constant
326
4 • Linear Functions
Access for free at openstax.org

function.
is an increasing function if
is a decreasing function if
is a constant function if
EXAMPLE 2
Deciding Whether a Function Is Increasing, Decreasing, or Constant
Studies from the early 2010s indicated that teens sent about 60 texts a day, while more recent data indicates much
higher messaging rates among all users, particularly considering the various apps with which people can
communicate.3 . For each of the following scenarios, find the linear function that describes the relationship between the
input value and the output value. Then, determine whether the graph of the function is increasing, decreasing, or
constant.
ⓐ The total number of texts a teen sends is considered a function of time in days. The input is the number of days,
and output is the total number of texts sent.
ⓑ A person has a limit of 500 texts per month in their data plan. The input is the number of days, and output is the
total number of texts remaining for the month.
ⓒ A person has an unlimited number of texts in their data plan for a cost of $50 per month. The input is the number
of days, and output is the total cost of texting each month.
Solution
Analyze each function.
ⓐ The function can be represented as
where
is the number of days. The slope, 60, is positive so the
function is increasing. This makes sense because the total number of texts increases with each day.
ⓑ The function can be represented as
where
is the number of days. In this case, the slope is
negative so the function is decreasing. This makes sense because the number of texts remaining decreases each day
and this function represents the number of texts remaining in the data plan after
days.
ⓒ The cost function can be represented as
because the number of days does not affect the total cost. The
slope is 0 so the function is constant.
Interpreting Slope as a Rate of Change
In the examples we have seen so far, the slope was provided to us. However, we often need to calculate the slope given
input and output values. Recall that given two values for the input,
and
and two corresponding values for the
output,
and
—which can be represented by a set of points,
and
—we can calculate the slope
Note that in function notation we can obtain two corresponding values for the output
and
for the function
and
so we could equivalently write
Figure 6 indicates how the slope of the line between the points,
and
is calculated. Recall that the slope
measures steepness, or slant. The greater the absolute value of the slope, the steeper the slant is.
3
http://www.cbsnews.com/8301-501465_162-57400228-501465/teens-are-sending-60-texts-a-day-study-says/
4.1 • Linear Functions
327

...
Figure 6
The slope of a function is calculated by the change in
divided by the change in
It does not matter which
coordinate is used as the
and which is the
as long as each calculation is started with the elements from
the same coordinate pair.
Q&A
Are the units for slope always
Yes. Think of the units as the change of output value for each unit of change in input value. An example of
slope could be miles per hour or dollars per day. Notice the units appear as a ratio of units for the output
per units for the input.
Calculate Slope
The slope, or rate of change, of a function
can be calculated according to the following:
where
and
are input values,
and
are output values.
HOW TO
Given two points from a linear function, calculate and interpret the slope.
1.
Determine the units for output and input values.
2.
Calculate the change of output values and change of input values.
3.
Interpret the slope as the change in output values per unit of the input value.
EXAMPLE 3
Finding the Slope of a Linear Function
If
is a linear function, and
and
are points on the line, find the slope. Is this function increasing or
decreasing?
Solution
The coordinate pairs are
and
To find the rate of change, we divide the change in output by the change in
input.
We could also write the slope as
The function is increasing because
328
4 • Linear Functions
Access for free at openstax.org

Analysis
As noted earlier, the order in which we write the points does not matter when we compute the slope of the line as long
as the first output value, or y-coordinate, used corresponds with the first input value, or x-coordinate, used. Note that if
we had reversed them, we would have obtained the same slope.
TRY IT
#1
If
is a linear function, and
and
are points on the line, find the slope. Is this
function increasing or decreasing?
EXAMPLE 4
Finding the Population Change from a Linear Function
The population of a city increased from 23,400 to 27,800 between 2008 and 2012. Find the change of population per year
if we assume the change was constant from 2008 to 2012.
Solution
The rate of change relates the change in population to the change in time. The population increased by
people over the four-year time interval. To find the rate of change, divide the change in the
number of people by the number of years.
So the population increased by 1,100 people per year.
Analysis
Because we are told that the population increased, we would expect the slope to be positive. This positive slope we
calculated is therefore reasonable.
TRY IT
#2
The population of a small town increased from 1,442 to 1,868 between 2009 and 2012. Find the
change of population per year if we assume the change was constant from 2009 to 2012.
Writing and Interpreting an Equation for a Linear Function
Recall from Equations and Inequalities that we wrote equations in both the slope-intercept form and the point-slope
form. Now we can choose which method to use to write equations for linear functions based on the information we are
given. That information may be provided in the form of a graph, a point and a slope, two points, and so on. Look at the
graph of the function
in Figure 7.
Figure 7
4.1 • Linear Functions
329

...
We are not given the slope of the line, but we can choose any two points on the line to find the slope. Let’s choose
and
Now we can substitute the slope and the coordinates of one of the points into the point-slope form.
If we want to rewrite the equation in the slope-intercept form, we would find
If we want to find the slope-intercept form without first writing the point-slope form, we could have recognized that the
line crosses the y-axis when the output value is 7. Therefore,
We now have the initial value
and the slope
so
we can substitute
and
into the slope-intercept form of a line.
So the function is
and the linear equation would be
HOW TO
Given the graph of a linear function, write an equation
