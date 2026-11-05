# Source pack — subjects/statistics/advanced/non-parametric-methods
Lesson title: Non-parametric Methods
Level: advanced
Match confidence: 2.03

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.03 — LibreTexts: 10.6: Parametric Equations
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Algebra/Algebra_and_Trigonometry_1e_(OpenStax)/10%3A_Further_Applications_of_Trigonometry/10.06%3A_Parametric_Equations

10.6: Parametric Equations
- Parameterize a curve.
- Eliminate the parameter.
- Find a rectangular equation for a curve defined parametrically.
- Find parametric equations for curves defined by rectangular equations.
Consider the path a moon follows as it orbits a planet, which simultaneously rotates around the sun, as seen in Figure \(\PageIndex{1}\). At any moment, the moon is located at a particular spot relative to the planet. But how do we write and solve the equation for the position of the moon when the distance from the planet, the speed of the moon’s orbit around the planet, and the speed of rotation around the sun are all unknowns? We can solve only for one variable at a time.
In this section, we will consider sets of equations given by \(x(t)\) and \(y(t)\) where \(t\) is the independent variable of time. We can use these parametric equations in a number of applications when we are looking for not only a particular position but also the direction of the movement. As we trace out successive values of \(t\), the orientation of the curve becomes clear. This is one of the primary advantages of using parametric equations: we are able to trace the movement of an object along a path according to time. We begin this section with a look at the basic components of parametric equations and what it means to parameterize a curve. Then we will learn how to eliminate the parameter, translate the equations of a curve defined parametrically into rectangular equations, and find the parametric equations for curves defined by rectangular equations.
Parameterizing a Curve
When an object moves along a curve—or curvilinear path—in a given direction and in a given amount of time, the position of the object in the plane is given by the \(x\) - coordinate and the \(y\) - coordinate. However, both \(x\) and \(y\) vary over time and so are functions of time. For this reason, we add another variable, the parameter, upon which both \(x\) and \(y\) are dependent functions. In the example in the section opener, the parameter is time, \(t\). The \(x\) position of the moon at time, \(t\), is represented as the function \(x(t)\), and the \(y\) position of the moon at time, \(t\), is represented as the function \(y(t)\). Together, \(x(t)\) and \(y(t)\) are called parametric equations, and generate an ordered pair \((x(t), y(t))\). Parametric equations primarily describe motion and direction.
When we parameterize a curve, we are translating a single equation in two variables, such as \(x\) and \(y\),into an equivalent pair of equations in three variables, \(x\), \(y\), and \(t\). One of the reasons we parameterize a curve is because the parametric equations yield more information: specifically, the direction of the object’s motion over time.
When we graph parametric equations, we can observe the individual behaviors of \(x\) and of \(y\). There are a number of shapes that cannot be represented in the form \(y=f(x)\), meaning that they are not functions. For example, consider the graph of a circle, given as \(r^2=x^2+y^2\). Solving for \(y\) gives \(y=\pm \sqrt{r^2−x^2}\), or two equations: \(y_1=\sqrt{r^2−x^2}\) and \(y_2=−\sqrt{r^2−x^2}\). If we graph \(y_1\) and \(y_2\) together, the graph will not pass the vertical line test, as shown in Figure \(\PageIndex{2}\). Thus, the equation for the graph of a circle is not a function.
However, if we were to graph each equation on its own, each one would pass the vertical line test and therefore would represent a function. In some instances, the concept of breaking up the equation for a circle into two functions is similar to the concept of creating parametric equations, as we use two functions to produce a non-function. This will become clearer as we move forward.
Suppose \(t\) is a number on an interval, \(I\). The set of ordered pairs, \((x(t), y(t))\), where \(x=f(t)\) and \(y=g(t)\),forms a plane curve based on the parameter \(t\). The equations \(x=f(t)\) and \(y=g(t)\) are the parametric equations.
Parameterize the curve \(y=x^2−1\) letting \(x(t)=t\). Graph both equations.
Solution
If \(x(t)=t\), then to find \(y(t)\) we replace the variable \(x\) with the expression given in \(x(t)\). In other words, \(y(t)=t^2−1\).Make a table of values similar to Table \(\PageIndex{1}\), and sketch the graph.
| \(t\) | \(x(t)\) | \(y(t)\) |
|---|---|---|
| \(−4\) | \(−4\) | \(y(−4)={(−4)}^2−1=15\) |
| \(−3\) | \(−3\) | \(y(−3)={(−3)}^2−1=8\) |
| \(−2\) | \(−2\) | \(y(−2)={(−2)}^2−1=3\) |
| \(−1\) | \(−1\) | \(y(−1)={(−1)}^2−1=0\) |
| \(0\) | \(0\) | \(y(0)={(0)}^2−1=−1\) |
| \(1\) | \(1\) | \(y(1)={(1)}^2−1=0\) |
| \(2\) | \(2\) | \(y(2)={(2)}^2−1=3\) |
| \(3\) | \(3\) | \(y(3)={(3)}^2−1=8\) |
| \(4\) | \(4\) | \(y(4)={(4)}^2−1=15\) |
See the graphs in Figure \(\PageIndex{3}\) . It may be helpful to use the TRACE feature of a graphing calculator to see how the points are generated as \(t\) increases.
Analysis
The arrows indicate the direction in which the curve is generated. Notice the curve is identical to the curve of \(y=x^2−1\).
Construct a table of values and plot the parametric equations: \(x(t)=t−3\), \(y(t)=2t+4\); \(−1≤t≤2\).
- Answer
-
\(t\) \(x(t)\) \(y(t)\) \(-1\) \(-4\) \(2\) \(0\) \(-3\) \(4\) \(1\) \(-2\) \(6\) \(2\) \(-1\) \(8\)
Find a pair of parametric equations that models the graph of \(y=1−x^2\), using the parameter \(x(t)=t\). Plot some points and sketch the graph.
Solution
If \(x(t)=t\) and we substitute \(t\) for \(x\) into the \(y\) equation, then \(y(t)=1−t^2\). Our pair of parametric equations is
\[\begin{align*} x(t) &=t \\ y(t) &= 1−t^2 \end{align*}\]
To graph the equations, first we construct a table of values like that in Table \(\PageIndex{2}\). We can choose values around \(t=0\), from \(t=−3\) to \(t=3\). The values in the \(x(t)\) column will be the same as those in the \(t\) column because \(x(t)=t\). Calculate values for the column \(y(t)\).
| \(t) | \(x(t)=t\) | \(y(t)=1−t^2\) |
|---|---|---|
| \(−3\) | \(−3\) | \(y(−3)=1−{(−3)}^2=−8\) |
| \(−2\) | \(−2\) | \(y(−2)=1−{(−2)}^2=−3\) |
| \(−1\) | \(−1\) | \(y(−1)=1−{(−1)}^2=0\) |
| \(0\) | \(0\) | \(y(0)=1−0=1\) |
| \(1\) | \(1\) | \(y(1)=1−{(1)}^2=0\) |
| \(2\) | \(2\) | \(y(2)=1−{(2)}^2=−3\) |
| \(3\) | \(3\) | \(y(3)=1−{(3)}^2=−8\) |
The graph of \(y=1−t^2\) is a parabola facing downward, as shown in Figure \(\PageIndex{5}\). We have mapped the curve over the interval \([−3, 3]\), shown as a solid line with arrows indicating the orientation of the curve according to \(t\). Orientation refers to the path traced along the curve in terms of increasing values of \(t\). As this parabola is symmetric with respect to the line \(x=0\), the values of \(x\) are reflected across the y -axis.
Parameterize the curve given by \(x=y^3−2y\).
- Answer
-
\(x(t)=t^3−2t\)
\(y(t)=t\)
An object travels at a steady rate along a straight path \((−5, 3)\) to \((3, −1)\) in the same plane in four seconds. The coordinates are measured in meters. Find parametric equations for the position of the object.
Solution
The parametric equations are simple linear expressions, but we need to view this problem in a step-by-step fashion. The x -value of the object starts at \(−5\) meters and goes to \(3\) meters. This means the distance \(x\) has changed by \(8\) meters in \(4\) seconds, which is a rate of \(\dfrac{8\space m}{4\space s}\), or \(2\space m/s\). We can write the x -coordinate as a linear function with respect to time as \(x(t)=2t−5\). In the linear function template \(y=mx+b\), \(2t=mx\) and \(−5=b\).
Similarly, the \(y\)-value of the object starts at \(3\) and goes to \(−1\), which is a change in the distance \(y\) of \(−4\) meters in \(4\) seconds, which is a rate of \(\dfrac{−4\space m}{4\space s}\), or \(−1\space m/s\). We can also write the y -coordinate as the linear function \(y(t)=−t+3\). Together, these are the parametric equations for the position of the object, where \(x\) and \(y\) are expressed in meters and \(t\) represents time:
\[\begin{align*} x(t) &= 2t−5 \\ y(t) &= −t+3 \end{align*}\]
Using these equations, we can build a table of values for \(t\), \(x\), and \(y\) (see Table \(\PageIndex{3}\)). In this example, we limited values of \(t\) to non-negative numbers. In general, any value of \(t\) can be used.
| \(t\) | \(x(t)=2t−5\) | \(y(t)=−t+3\) |
|---|---|---|
| \(0\) | \(x=2(0)−5=−5\) | \(y=−(0)+3=3\) |
| \(1\) | \(x=2(1)−5=−3\) | \(y=−(1)+3=2\) |
| \(2\) | \(x=2(2)−5=−1\) | \(y=−(2)+3=1\) |
| \(3\) | \(x=2(3)−5=1\) | \(y=−(3)+3=0\) |
| \(4\) | \(x=2(4)−5=3\) | \(y=−(4)+3=−1\) |
From this table, we can create three graphs, as shown in Figure \(\PageIndex{6}\).
Analysis
Again, we see that, in Figure \(\PageIndex{6}\) (c), when the parameter represents time, we can indicate the movement of the object along the path with arrows.
Eliminating the Parameter
In many cases, we may have a pair of parametric equations but find that it is simpler to draw a curve if the equation involves only two variables, such as \(x\) and \(y\). Eliminating the parameter is a method that may make graphing some curves easier. However, if we are concerned with the mapping of the equation according to time, then it will be necessary to indicate the orientation of the curve as well. There are various methods for eliminating the parameter \(t\) from a set of parametric equations; not every method works for every type of equation. Here we will review the methods for the most common types of equations.
Eliminating the Parameter from Polynomial, Exponential, and Logarithmic Equations
For polynomial, exponential, or logarithmic equations expressed as two parametric equations, we choose the equation that is most easily manipulated and solve for \(t\). We substitute the resulting expression for \(t\) into the second equation. This gives one equation in \(x\) and \(y\).
Given \(x(t)=t^2+1\) and \(y(t)=2+t\), eliminate the parameter, and write the parametric equations as a Cartesian equation.
Solution
We will begin with the equation for \(y\) because the linear equation is easier to solve for \(t\).
\[\begin{align*} y &= 2+t \\ y−2 &=t \end{align*}\]
Next, substitute \(y−2\) for \(t\) in \(x(t)\).
\[\begin{align*} x &= t^2+1 \\ x &= {(y−2)}^2+1 \;\;\;\;\;\;\;\; \text{Substitute the expression for }t \text{ into }x. \\ x &= y^2−4y+4+1 \\ x &= y^2−4y+5 \\ x &= y^2−4y+5 \end{align*}\]
The Cartesian form is \(x=y^2−4y+5\).
Analysis
This is an equation for a parabola in which, in rectangular terms, \(x\) is dependent on \(y\). From the curve’s vertex at \((1,2)\), the graph sweeps out to the right. See Figure \(\PageIndex{7}\). In this section, we consider sets of equations given by the functions \(x(t)\) and \(y(t)\), where \(t\) is the independent variable of time. Notice, both \(x\) and \(y\) are functions of time; so in general \(y\) is not a function of \(x\).
Given the equations below, eliminate the parameter and write as a rectangular equation for \(y\) as a function of \(x\).
\[\begin{align*} x(t) &= 2t^2+6 \\ y(t) &= 5−t \end{align*}\]
- Answer
-
\(y=5−\sqrt{\frac{1}{2}x−3}\)
Eliminate the parameter and write as a Cartesian equation: \(x(t)=e^{−t}\) and \(y(t)=3e^t\),\(t>0\).
Solution
Isolate \(e^t\).
\[\begin{align*} x &=e^{−t} \\ e^t &= \dfrac{1}{x} \end{align*}\]
Substitute the expression into \(y(t)\).
\[\begin{align*} y &= 3e^t \\ y &= 3 \left(\dfrac{1}{x}\right) \\ y &= \dfrac{3}{x} \end{align*}\]
The Cartesian form is \(y=\dfrac{3}{x}\).
Analysis
The graph of the parametric equation is shown in Figure \(\PageIndex{8a}\). The domain is restricted to \(t>0\). The Cartesian equation, \(y=\dfrac{3}{x}\) is shown in Figure \(\PageIndex{8b}\) and has only one restriction on the domain, \(x≠0\).
Eliminate the parameter and write as a Cartesian equation: \(x(t)=\sqrt{t}+2\) and \(y(t)=\log(t)\).
Solution
Solve the first equation for \(t\).
\[\begin{align*} x &= \sqrt{t}+2 \\ x−2 &= \sqrt{t} \\ {(x−2)}^2 &= t \;\;\;\;\;\;\;\; \text{Square both sides.} \end{align*}\]
Then, substitute the expression for \(t\) into

## Match 2.03 — Precalculus_2e-WEB § 8.6 Parametric Equations

Learning Objectives
In this section, you will:
Parameterize a curve.
Eliminate the parameter.
Find a rectangular equation for a curve defined parametrically.
Find parametric equations for curves defined by rectangular equations.
Consider the path a moon follows as it orbits a planet, which simultaneously rotates around the sun, as seen in Figure 1.
At any moment, the moon is located at a particular spot relative to the planet. But how do we write and solve the
equation for the position of the moon when the distance from the planet, the speed of the moon’s orbit around the
planet, and the speed of rotation around the sun are all unknowns? We can solve only for one variable at a time.
8.6 • Parametric Equations
863

Figure 1
In this section, we will consider sets of equations given by
and
where
is the independent variable of time. We
can use these parametric equations in a number of applications when we are looking for not only a particular position
but also the direction of the movement. As we trace out successive values of
the orientation of the curve becomes
clear. This is one of the primary advantages of using parametric equations: we are able to trace the movement of an
object along a path according to time. We begin this section with a look at the basic components of parametric
equations and what it means to parameterize a curve. Then we will learn how to eliminate the parameter, translate the
equations of a curve defined parametrically into rectangular equations, and find the parametric equations for curves
defined by rectangular equations.
Parameterizing a Curve
When an object moves along a curve—or curvilinear path—in a given direction and in a given amount of time, the
position of the object in the plane is given by the x-coordinate and the y-coordinate. However, both
and
vary over
time and so are functions of time. For this reason, we add another variable, the parameter, upon which both
and
are
dependent functions. In the example in the section opener, the parameter is time,
The
position of the moon at time,
is represented as the function
and the
position of the moon at time,
is represented as the function
Together,
and
are called parametric equations, and generate an ordered pair
Parametric equations
primarily describe motion and direction.
When we parameterize a curve, we are translating a single equation in two variables, such as
and   into an
equivalent pair of equations in three variables,
and
One of the reasons we parameterize a curve is because the
parametric equations yield more information: specifically, the direction of the object’s motion over time.
When we graph parametric equations, we can observe the individual behaviors of
and of
There are a number of
shapes that cannot be represented in the form
meaning that they are not functions. For example, consider the
graph of a circle, given as
Solving for
gives
or two equations:
and
If we graph
and
together, the graph will not pass the vertical line test, as shown in Figure 2.
Thus, the equation for the graph of a circle is not a function.
Figure 2
864
8 • Further Applications of Trigonometry
Access for free at openstax.org

However, if we were to graph each equation on its own, each one would pass the vertical line test and therefore would
represent a function. In some instances, the concept of breaking up the equation for a circle into two functions is similar
to the concept of creating parametric equations, as we use two functions to produce a non-function. This will become
clearer as we move forward.
Parametric Equations
Suppose
is a number on an interval,
The set of ordered pairs,
where
and
forms a
plane curve based on the parameter
The equations
and
are the parametric equations.
EXAMPLE 1
Parameterizing a Curve
Parameterize the curve
letting
Graph both equations.
Solution
If
then to find
we replace the variable
with the expression given in
In other words,
Make a table of values similar to Table 1, and sketch the graph.
Table 1
See the graphs in Figure 3. It may be helpful to use the TRACE feature of a graphing calculator to see how the points are
generated as
increases.
8.6 • Parametric Equations
865

Figure 3
(a) Parametric
(b) Rectangular
Analysis
The arrows indicate the direction in which the curve is generated. Notice the curve is identical to the curve of
TRY IT
#1
Construct a table of values and plot the parametric equations:
EXAMPLE 2
Finding a Pair of Parametric Equations
Find a pair of parametric equations that models the graph of
using the parameter
Plot some points
and sketch the graph.
Solution
If
and we substitute
for
into the
equation, then
Our pair of parametric equations is
To graph the equations, first we construct a table of values like that in Table 2. We can choose values around
from
to
The values in the
column will be the same as those in the
column because
Calculate
values for the column
Table 2
866
8 • Further Applications of Trigonometry
Access for free at openstax.org

The graph of
is a parabola facing downward, as shown in Figure 4. We have mapped the curve over the
interval
shown as a solid line with arrows indicating the orientation of the curve according to
Orientation
refers to the path traced along the curve in terms of increasing values of
As this parabola is symmetric with respect to
the line
the values of
are reflected across the y-axis.
Figure 4
TRY IT
#2
Parameterize the curve given by
EXAMPLE 3
Finding Parametric Equations That Model Given Criteria
An object travels at a steady rate along a straight path
to
in the same plane in four seconds. The
coordinates are measured in meters. Find parametric equations for the position of the object.
Solution
The parametric equations are simple linear expressions, but we need to view this problem in a step-by-step fashion. The
x-value of the object starts at
meters and goes to 3 meters. This means the distance x has changed by 8 meters in 4
seconds, which is a rate of
or
We can write the x-coordinate as a linear function with respect to time as
In the linear function template
and
Similarly, the y-value of the object starts at 3 and goes to
which is a change in the distance y of −4 meters in 4
seconds, which is a rate of
or
We can also write the y-coordinate as the linear function
Together, these are the parametric equations for the position of the object, where
and
are expressed in meters and
represents time:
Using these equations, we can build a table of values for
and
(see Table 3). In this example, we limited values of
to non-negative numbers. In general, any value of
can be used.
Table 3
8.6 • Parametric Equations
867

Table 3
From this table, we can create three graphs, as shown in Figure 5.
Figure 5
(a) A graph of
vs.
representing the horizontal position over time. (b) A graph of
vs.
representing the
vertical position over time. (c) A graph of
vs.
representing the position of the object in the plane at time
Analysis
Again, we see that, in Figure 5(c), when the parameter represents time, we can indicate the movement of the object
along the path with arrows.
Eliminating the Parameter
In many cases, we may have a pair of parametric equations but find that it is simpler to draw a curve if the equation
involves only two variables, such as
and
Eliminating the parameter is a method that may make graphing some
curves easier. However, if we are concerned with the mapping of the equation according to time, then it will be
necessary to indicate the orientation of the curve as well. There are various methods for eliminating the parameter
from a set of parametric equations; not every method works for every type of equation. Here we will review the methods
for the most common types of equations.
Eliminating the Parameter from Polynomial, Exponential, and Logarithmic Equations
For polynomial, exponential, or logarithmic equations expressed as two parametric equations, we choose the equation
that is most easily manipulated and solve for
We substitute the resulting expression for
into the second equation.
This gives one equation in
and
EXAMPLE 4
Eliminating the Parameter in Polynomials
Given
and
eliminate the parameter, and write the parametric equations as a Cartesian
equation.
Solution
We will begin with the equation for
because the linear equation is easier to solve for
Next, substitute
for
in
868
8 • Further Applications of Trigonometry
Access for free at openstax.org

The Cartesian form is
Analysis
This is an equation for a parabola in which, in rectangular terms,
is dependent on
From the curve’s vertex at
the graph sweeps out to the right. See Figure 6. In this section, we consider sets of equations given by the functions
and
where
is the independent variable of time. Notice, both
and
are functions of time; so in general
is not a
function of
Figure 6
TRY IT
#3
Given the equations below, eliminate the parameter and write as a rectangular equation for
as a
function of
EXAMPLE 5
Eliminating the Parameter in Exponential Equations
Eliminate the parameter and write as a Cartesian equation:
and
Solution
Isolate
Substitute the expression into
The Cartesian form is
8.6 • Parametric Equations
869

Analysis
The graph of the parametric equation is shown in Figure 7(a). The domain is restricted to
The Cartesian equation,
is shown in Figure 7(b) and has only one restriction on the domain,
Figure 7
EXAMPLE 6
Eliminating the Parameter in Logarithmic Equations
Eliminate the parameter and write as a Cartesian equation:
and
Solution
Solve the first equation for
Then, substitute the expression for
into the
equation.
The Cartesian form is
Analysis
To be sure that the parametric equations are equivalent to the Cartesian equation, check the domains. The parametric
equations restrict the domain on
to
we restrict the domain on
to
The domain for the
parametric equation
is restricted to
we limit the domain on
to
TRY IT
#4
Eliminate the parameter and write as a rectangular equation.
Eliminating the Parameter from Trigonometric Equations
Eliminating the parameter from trigonometric equations is a straightforward substitution. We can use a few of the
familiar trigonometric identities and the Pythagorean Theorem.
First, we use the identities:
Solving for
and
we have
870
8 • Further Applications of Trigonometry
Access for free at openstax.org

Then, use the Pythagorean Theorem:
Substituting gives
EXAMPLE 7
Eliminating the Parameter from a Pair of Trigonometric Parametric Equations
Eliminate the parameter from the given pair of trigonometric equations where
and sketch the graph.
Solution
Solving for
and
we have
Next, use the Pythagorean identity and make the substitutions.
The graph for the equation is shown in Figure 8.
Figure 8
Analysis
Applying the general equations for conic sections (introduced in Analytic Geometry, we can identify
as an
ellipse centered at
Notice that when
the coordinates are
and when
the coordinates are
This shows the orientation of the curve with increasing values of
TRY IT
#5
Eliminate the parameter from the given pair of parametric equations and write as a Cartesian
8.6 • Parametric Equations
871

equation:
and
Finding Cartesian Equations from Curves Defined Parametrically
When we are given a set of parametric equations and need to find an equivalent Cartesian equation, we are essentially
“eliminating the parameter.” However, there are various methods we can use to rewrite a set of parametric equations as
a Cartesian equation. The simplest method is to set one equation equal to the parameter, such as
In this case,
can be any expression. For example, consider the following pair of equations.
Rewriting this set of parametric equations is a matter of substituting
for
Thus, the Cartesian equation is
EXAMPLE 8
Finding a Cartesian Equation Using Alternate Methods
Use two different methods to find the Cartesian equation equivalent to the given set of parametric equations.
Solution
Method 1. First, let’s solve the
equation for
Then we can substitute the result into the
equation.
Now substitute the expression for
into the
equation.
Method 2. Solve the
equation for
and substitute this expression in the
equation.
Make the substitution and then solve for
TRY IT
#6
Write the given parametric equations as a Cartesian equation:
and
Finding Parametric Equations for Curves Defined by Rectangular Equations
Although we have just shown that there is only one way to interpret a set of parametric equations as a rectangular
equation, there are multiple ways to interpret a rectangular equation as a set of parametric equations. Any strategy we
may use to find the parametric equations is valid if it produces equivalency. In other words, if we choose an expression
to represent
and then substitute it into the
equation, and it produces the same graph over the same domain as the
872
8 • Further Applications of Trigonometry
Access for free at openstax.org

rectangular equation, then the set of parametric equations is valid. If the domain becomes restricted in the set of
parametric equations, and the function does not allow the same values for
as the domain of the rectangular equation,
then the graphs will be different.
EXAMPLE 9
Finding a Set of Parametric Equations for Curves Defined by Rectangular Equations
Find a set of equivalent parametric equations for
Solution
An obvious choice would be to let
Then
But let’s try something more interesting. What if we
let
Then we have
The set of parametric equations is
See Figure 9.
Figure 9
MEDIA
Access these online resources for additional instruction and practice with parametric equations.
Introduction to Parametric Equations (http://openstax.org/l/introparametric)
Converting Parametric Equations to Rectangular Form (http://openstax.org/l/convertpara)
8.6 • Parametric Equations
873

