# Source pack — subjects/math/foundational/quadratics
Lesson title: Quadratics and Parabolas
Level: foundational
Match confidence: 2.04

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.04 — LibreTexts: 9.3: Parabolas and Non-Linear Systems
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Precalculus/Book%3A_Precalculus__An_Investigation_of_Functions_(Lippman_and_Rasmussen)/09%3A_Conics/9.03%3A_Parabolas_and_Non-Linear_Systems

9.3: Parabolas and Non-Linear Systems
To listen for signals from space, a radio telescope uses a dish in the shape of a parabola to focus and collec t the signals in the receiver.
While we studied parabolas earlier when we explored quadratics, at the time we did not discuss them as a conic section. A parabola is the shape resulting from when a plane parallel to the side of the cone intersects the cone (Pbroks13 (commons.wikimedia.org/wiki/F...with_plane.svg), “Conic sections with plane”, cropped to show only parabola, CC BY 3.0).
Definition: PARABOLA Definition AND VOCABULARY
A parabola with vertex at the origin can be defined by placing a fixed point at \(F\left( 0,p \right)\) called the focus , and drawing a line at \(y = - p\), called the directrix . The parabola is the set of all points \(Q\left( x,y \right)\) that are an equal distance between the fixed point and the directrix.
For general parabolas,
The
axis of symmetry
is the line passing through the foci, perpendicular to the directrix.
The
vertex
is the point where the parabola crosses the axis of symmetry.
The distance from the vertex to the focus, \(p\), is the
focal length
.
Equations for Parabolas with Vertex at the Origin
From the definition above we can find an equation of a parabola. We will find it for a parabola with vertex at the origin, \(C\left( 0,0 \right)\), opening upward with focus at \(F\left( 0,p \right)\) and directrix at \(y = - p\).
Suppose\(Q\left( x,y \right)\) is some point on the parabola. The distance from \(Q\) to the focus is
\[d(Q,F)=\sqrt{(x-0)^{2}+(y-p)^{2}}=\sqrt{x^{2}+(y-p)^{2}}\nonumber\]
The distance from the point \(Q\) to the directrix is the difference of the \(y\)-values:
\[d = y - ( - p) = y + p\nonumber\]
From the definition of the parabola, these distances should be equal:
\[\sqrt {x^2 + \left( y - p \right)^2} = y + p\nonumber\]Square both sides
\[x^2 + \left( y - p \right)^2 = \left( y + p \right)^2\nonumber\]Expand
\[x^2 + y^2 - 2py + p^2 = y^2 + 2py +p^2\nonumber\]Combine like terms
\[x^2 = 4py\nonumber\]
This is the standard conic form of a parabola that opens up or down (vertical axis of symmetry), centered at the origin. Note that if we divided by \(4p\), we would get a more familiar equation for the parabola, \(y = \dfrac{x^2}{4p}\). We can recognize this as a transformation of the parabola \(y = x^2\), vertically compressed or stretched by \(\dfrac{1}{4p}\).
Using a similar process, we could find an equation of a parabola with vertex at the origin opening left or right. The focus will be at (\(p\),0) and the graph will have a horizontal axis of symmetry and a vertical directrix. The standard conic form of its equation will be \(y^2 = 4px\), which we could also write as \(x = \dfrac{y^2}{4p}\).
Example \(\PageIndex{1}\)
Write the standard conic equation for a parabola with vertex at the origin and focus at (0, -2).
Solution
With focus at (0, -2), the axis of symmetry is vertical, so the standard conic equation is \(x^2 = 4py\). Since the focus is (0, -2), \(p = -2\).
The standard conic equation for the parabola is \[x^2 = 4( - 2)y\text{, or }x^2 = - 8y\nonumber\]
For parabolas with vertex not at the origin, we can shift these equations, leading to the equations summarized next.
EQUATION OF A PARABOLA WITH VERTEX AT \(h,k\) IN STANDARD CONIC FORM
The standard conic form of an equation of a parabola with vertex at the point \(\left( h,k \right)\) depends on whether the axis of symmetry is horizontal or vertical. The table below gives the standard equation, vertex, axis of symmetry, directrix, focus, and graph for each.
| Horizontal | Vertical | |
|---|---|---|
| Standard Equation | \((y - k)^2 = 4p(x - h)\) | \((x - h)^2 = 4p(y - k)\) |
| Vertex | \((h, k)\) | \((h, k)\) |
| Axis of symmetry | \(y = k\) | \(x = h\) |
| Directrix | \(x = h - p\) | \(y = k - p\) |
| Focus | \((h +p, k)\) | \((h, k + p)\) |
| Graph |
An example with \(p < 0\)
|
An example with \(p > 0\)
|
Since you already studied quadratics in some depth earlier, we will primarily explore the new concepts associated with parabolas, particularly the focus.
Example \(\PageIndex{2}\)
Put the equation of the parabola \(y = 8{(x - 1)^2} + 2\) in standard conic form. Find the vertex, focus, and axis of symmetry.
Solution
From your earlier work with quadratics, you may already be able to identify the vertex as (1,2), but we’ll go ahead and put the parabola in the standard conic form. To do so, we need to isolate the squared factor.
\[y = 8(x - 1)^2 + 2\nonumber\]Subtract 2 from both sides
\[y - 2 = 8(x - 1)^2\nonumber\]Divide by 8
\[\dfrac{\left( y - 2 \right)}{8} = (x - 1)^2\nonumber\]
This matches the general form for a vertical parabola, \(\left( x - h \right)^2 = 4p\left( y - k \right)\), where \(4p = \dfrac{1}{8}\). Solving this tells us \(p = \dfrac{1}{32}\). The standard conic form of the equation is
\[\left( x - 1 \right)^2 = 4\left( \dfrac{1}{32} \right)\left( y - 2 \right). \nonumber\]
The vertex is at (1,2). The axis of symmetry is at \(x = 1\).
The directrix is at \[y = 2 - \dfrac{1}{32} = \dfrac{63}{32}\nonumber\]
The focus is at \[\left( 1,2 + \dfrac{1}{32} \right) = \left( 1,\dfrac{65}{32} \right)\nonumber\]
Example \(\PageIndex{3}\)
A parabola has its vertex at (1, 5) and focus at (3, 5). Find an equation for the parabola.
Solution
Since the vertex and focus lie on the line \(y = 5\), that is our axis of symmetry.
The vertex (1, 5) tells us \(h = 1\) and \(k = 5\).
Looking at the distance from the vertex to the focus, \(p = 3 – 1 = 2\).
Substituting these values into the standard conic form of an equation for a horizontal parabola gives the equation
\[\left( y - 5 \right)^2 = 4(2)\left( x - 1 \right)\nonumber\]
\[\left( y - 5 \right)^2 = 8\left( x - 1 \right)\nonumber\]
Note this could also be rewritten by solving for \(x\), resulting in
\[x = \dfrac{1}{8}{\left( {y - 5} \right)^2} + 1\nonumber\]
Exercise \(\PageIndex{1}\)
A parabola has its vertex at (-2,3) and focus at (-2,2). Find an equation for this parabola.
- Answer
-
Axis of symmetry is vertical, and the focus is below the vertex.
\[p = 2 – 3 = -1\nonumber\]
\[\left( x - ( - 2) \right)^2 = 4( - 1)\left( y - 3 \right)\text{, or }\left( x + 2 \right)^2 = - 4\left( y - 3 \right)\nonumber\]
Applications of Parabolas
In an earlier section, we learned that ellipses have a special property that a ray emanating from one focus will be reflected back to the other focus, the property that enables the whispering chamber to work. Parabolas also have a special property, that any ray emanating from the focus will be reflected parallel to the axis of symmetry. Reflectors in flashlights take advantage of this property to focus the light from the bulb into a collimated beam. The same property can be used in reverse, taking parallel rays of sunlight or radio signals and directing them all to the focus.
Example \(\PageIndex{4}\)
A solar cooker is a parabolic dish that reflects the sun’s rays to a central point allowing you to cook food. If a solar cooker has a parabolic dish 16 inches in diameter and 4 inches tall, where should the food be placed?
Solution
We need to determine the location of the focus, since that’s where the food should be placed. Positioning th e base of the dish at the origin, the shape from the side looks like:
The standard conic form of an equation for the parabola would be \({x^2} = 4py\). The parabola passes through (4, 8), so substituting that into the equation, we can solve for \(p\):
\[8^2 = 4(p)(4)\nonumber\]
\[p = \dfrac{8^2}{16} = 4\nonumber\]
The focus is 4 inches above the vertex. This makes for a very convenient design, since then a grate could be placed on top of the dish to hold the food.
Exercise \(\PageIndex{2}\)
A radio telescope is 100 meters in diameter and 20 meters deep. Where should the receiver be placed?
- Answer
-
The standard conic form of the equation is \[x^2 = 4py\nonumber\]
Using (50,20), we can find that \(50^2 = 4p(20)\), so \(p = 31.25\) meters.
The receiver should be placed 31.25 meters above the vertex.
Non-Linear Systems of Equations
In many applications, it is necessary to solve for the intersection of two curves. Many of the techniques you may have used before to solve systems of linear equations will work for non-linear equations as well, particularly substitution. You have already solved some examples of non-linear systems when you found the intersection of a parabola and line while studying quadratics, and when you found the intersection of a circle and line while studying circles.
Example \(\PageIndex{4}\)
Find the points where the ellipse \(\dfrac{x^2}{4} + \dfrac{y^2}{25} = 1\) intersects the circle \(x^2+ y^2 = 9\).
Solution
To start, we might multiply the ellipse equation by 100 on both sides to clear the fractions, giving \[25x^2 + 4y^2 = 100\nonumber\]
A common approach for finding intersections is substitution. With these equations, rather than solving for \(x\) or \(y\), it might be easier to solve for \(x^2\) or \(y^2\). Solving the circle equation for \(x^2\) gives \(x^2 = 9 - y^2\). We can then substitute that expression for \(x^2\) into the ellipse equation.
\[25x^2 + 4y^2= 100\nonumber\]Substitute \(x^2 = 9 - y^2\)
\[25\left( 9 - y^2 \right) + 4y^2 = 100\nonumber\]Distribute
\[225 - 25y^2 + 4y^2 = 100\nonumber\]Combine like terms
\[ - 21y^2 = - 125\nonumber\]Divide by -21
\[y^2 = \dfrac{125}{21}\nonumber\]Use the square root to solve
\[y = \pm \sqrt {\dfrac{125}{21}} = \pm \dfrac{5\sqrt 5 }{\sqrt {21} }\nonumber\]
We can substitute each of these \(y\) values back in to \(x^2 = 9 - y^2\) to find \(x\)
\[x^{2}=9-\left(\sqrt{\frac{125}{21}} \right)^{2}=9-\frac{125}{21}=\frac{189}{21}-\frac{125}{21}=\frac{64}{21}\nonumber\]
\[x = \pm \sqrt {\dfrac{64}{21}} = \pm \dfrac{8}{\sqrt {21} }\nonumber\]
There are four points of intersection: \[\left( \pm \dfrac{8}{\sqrt {21} }, \pm \dfrac{5\sqrt 5 }{\sqrt {21} } \right)\nonumber\]
It’s worth noting there is a second technique we could have used in the previous example, called elimination. If we multiplied the circle equation by -4 to get \( - 4x^2 - 4y^2 = - 36\), we can then add it to the ellipse equation, eliminating the variable \(y\).
\[25x^2 + 4y^2 = 100\nonumber\]
\[ - 4x^2 - 4y^2 = - 36\nonumber\]Add the left sides, and add the right sides
\[21x^2 = 64\nonumber\]Solve for \(x\)
\[x = \pm \sqrt {\dfrac{64}{21}} = \pm \dfrac{8}{\sqrt {21} }\nonumber\]
Example \(\PageIndex{5}\)
Find the points where the hyperbola \(\dfrac{y^2}{4} - \dfrac{x^2}{9} = 1\) intersects the parabola \(y = 2x^2\).
Solution
We can solve this system of equations by substituting \(y = 2{x^2}\) into the hyperbola equation.
\[\dfrac{(2x^2)^2}{4} - \dfrac{x^2}{9} = 1\nonumber\]Simplify
\[\dfrac{4x^4}{4} - \dfrac{x^2}{9} = 1\nonumber\]Simplify, and multiply by 9
\[9x^4 - x^2 = 9\nonumber\]Move the 9 to the left
\[9x^4 - x^2 - 9 = 0\nonumber\]
While this looks challenging to solve, we can think of it as a “quadratic in disguise,” since \(x^4 = (x^2)^2\). Letting \(u = x^2\), the equation becomes
\[9u^2 - u^2 - 9 = 0\nonumber\]Solve using the quadratic formula
\[u = \dfrac{ - ( - 1) \pm \sqrt ( - 1)^2 - 4(9)( - 9) }{2(9)} = \dfrac{1 \pm \sqrt {325} }{18}\nonumber\]Solve for \(x\)
\[x^2 = \dfrac{1 \pm \sqrt {325} }{18}\nonumber\]But \(1 - \sqrt {325} < 0\), so
\[x = \pm \sqrt {\dfrac{1 + \sqrt {325} }{18}} \nonumber\]This leads to two real solutions
\[x \approx 1.028, -1.028\nonumber\]
Substituting these into \(y = 2{x^2}\), we can find the corresponding y values.
The curves intersect at the points (1.028, 2.114) and (-1.028, 2.114).
Exercise \(\PageIndex{3}\)
Find the points where the line \(y = 4x\) intersect the ellipse \(\dfrac{y^2}{4} - \dfrac{x^2}{16} = 1\)
- Answer
-
Substituting \(y = 4x\) gives \(\dfrac{\left( 4x \right)^2}{4} - \dfrac{x^2}{16} = 1\).
Simplify
\[\dfrac{16x^2}{4} - \dfrac{x^2}{16} = 1\nonumber\]Multiply by 16 to get
\[64x^2 - x^2 = 16\nonumber\]
\[x = \pm \sqrt {\dfrac{16}{63}} = \pm 0.504\nonumber\]Substituting those into \(y = 4x\) gives the c

## Match 1.54 — LibreTexts: 9.3E: Parabolas and Non-Linear Systems (Exercises)
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Precalculus/Book%3A_Precalculus__An_Investigation_of_Functions_(Lippman_and_Rasmussen)/09%3A_Conics/9.03%3A_Parabolas_and_Non-Linear_Systems/9.3E%3A_Parabolas_and_Non-Linear_Systems_(Exercises)

9.3E: Parabolas and Non-Linear Systems (Exercises)
Section 9.3 Exercises
In problems 1–4, match each graph with one of the equations A–D.
A. \(y^2 = 4x\)
B. \(x^2 = 4y\)
C. \(x^2 = 8y\)
D. \(y^2 + 4x = 0\)
1. 2. 3. 4.
In problems 5–14, find the vertex, axis of symmetry, directrix, and focus of the parabola.
5. \(y^2 = 16x\)
6. \(x^2 = 12y\)
7. \(y = 2x^2\)
8. \(x = - \dfrac{y^2}{8}\)
9. \(x + 4y^2 = 0\)
10. \(8y + x^2 = 0\)
11. \((x - 2)^2 = 8(y + 1)\)
12. \((y + 3)^2 = 4(x - 2)\)
13. \(y = \dfrac{1}{4}(x + 1)^2 + 4\)
14. \(x = - \dfrac{1}{12}(y + 1)^2 + 1\)
In problems 15–16, write an equation for the graph.
15.
16.
In problems 17-20, find the standard form of the equation for a parabola satisfying the given conditions.
17. Vertex at (2, 3), opening to the right, focal length 3
18. Vertex at (-1, 2), opening down, focal length 1
19. Vertex at (0, 3), focus at (0, 4)
20. Vertex at (1, 3), focus at (0, 3)
21. The mirror in an automobile headlight has a parabolic cross-section with the light bulb at the focus. On a schematic, the equation of the parabola is given as?\(x^2 = 4y^2\).At what coordinates should you place the light bulb?
22. If we want to construct the mirror from the previous exercise so that the focus is located at (0, 0.25), what should the equation of the parabola be?
23. A satellite dish is shaped like a paraboloid of revolution. This means that it can be formed by rotating a parabola around its axis of symmetry. The receiver is to be located at the focus. If the dish is 12 feet across at its opening and 4 feet deep at its center, where should the receiver be placed?
24. Consider the satellite dish from the previous exercise. If the dish is 8 feet across at the opening and 2 feet deep, where should we place the receiver?
25. A searchlight is shaped like a paraboloid of revolution. A light source is located 1 foot from the base along the axis of symmetry. If the opening of the searchlight is 2 feet across, find the depth.
26. If the searchlight from the previous exercise has the light source located 6 inches from the base along the axis of symmetry and the opening is 4 feet wide, find the depth.
In problems 27–34, solve each system of equations for the intersections of the two curves.
27. \(\begin{array}{l} {y = 2x} \\ {y^2 - x^2} = 1 \end{array}\)
28. \(\begin{array}{l} {y = x + 1} \\ {2x^2 + y^2} = 1 \end{array}\)
29. \(\begin{array}{l} {x^2 + y^2} = 11 \\ {x^2 - 4y^2} = 1 \end{array}\)
30. \(\begin{array}{l} {2x^2 + y^2} = 4 \\ {y^2 - x^2} = 1 \end{array}\)
31. \(\begin{array}{l} {y = x^2} \\ {y^2 - 6x^2} = 16 \end{array}\)
32. \(\begin{array}{l} {x = y^2} \\ {\dfrac{x^2}{4} + \dfrac{y^2}{9} = 1} \end{array}\)
33. \(\begin{array}{l} {x^2 - y^2} = 1 \\ {4y^2 - x^2 = 1} \end{array}\)
34. \(\begin{array}{l} {x^2 = 4(y - 2)} \\ {x^2 = 8(y + 1)} \end{array}\)
35. A LORAN system has transmitter stations A, B, C, and D at (-125, 0), (125, 0), (0, 250), and (0, -250), respectively. A ship in quadrant two computes the difference of its distances from A and B as 100 miles and the difference of its distances from C and D as 180 miles. Find the x- and y-coordinates of the ship’s location. Round to two decimal places.
36. A LORAN system has transmitter stations A, B, C, and D at (-100, 0), (100, 0), (-100, -300), and (100, -300), respectively. A ship in quadrant one computes the difference of its distances from A and B as 80 miles and the difference of its distances from C and D as 120 miles. Find the \(x\)- and \(y\)-coordinates of the ship’s location. Round to two decimal places.
- Answer
-
1. C
3. A
5. Vertex: (0, 0). Axis of symmetry: \(y = 0\). Directrix: \(x = -4\). Focus: (4, 0)
7. Vertex: (0, 0). Axis of symmetry: \(x = 0\). Directrix: \(y = -1/8\). Focus: (0, 1/8)
9. Vertex: (0, 0). Axis of symmetry: \(y = 0\). Directrix: \(x = 1/16\). Focus: (-1/16, 0)
11. Vertex: (2, -1). Axis of symmetry: \(x = 2\). Directrix: \(y = -3\). Focus: (2, 1)
13. Vertex: (-1, 4). Axis of symmetry: \(x = -1\). Directrix: \(y = 3\). Focus: (-1, 5)
15. \((y - 1)^2 = -(x - 3)\)
17. \((y - 3)^2 = 12(x - 2)\)
19. \(x^2 = 4(y - 3)\)
21. At the focus, (0,1)
23. 2.25 feet above the vertex.
25. 0.25 ft
27. \((\dfrac{1}{\sqrt{3}}, \dfrac{2}{\sqrt{3}})\), \((\dfrac{-1}{\sqrt{3}}, \dfrac{-2}{\sqrt{3}})\)
29. \((3, \sqrt{2})\), \((3, -\sqrt{2})\), \((-3, \sqrt{2})\), \((-3, -\sqrt{2})\)
31. \((2\sqrt{2}, 8)\), \((-2\sqrt{2}, 8)\)
33. \((\dfrac{5}{3}, \dfrac{2}{3})\), \((-\dfrac{5}{3}, \dfrac{2}{3})\), \((\dfrac{5}{3}, -\dfrac{2}{3})\), \((-\dfrac{5}{3}, -\dfrac{2}{3})\)
35. (-64.50476622, 93.37848007) \(\approx\) (-64.50, 93.38)

## Match 1.53 — LibreTexts: 11.3: Parabolas
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Algebra/Intermediate_Algebra_1e_(OpenStax)/11%3A_Conics/11.03%3A_Parabolas

11.3: Parabolas
By the end of this section, you will be able to:
- Graph vertical parabolas
- Graph horizontal parabolas
- Solve applications with parabolas
Before you get started, take this readiness quiz.
-
Graph: \(y=-3 x^{2}+12 x-12\).
If you missed this problem, review Example 9.47. -
Solve by completing the square: \(x^{2}-6 x+6=0\).
If you missed this problem, review Example 9.12. -
Write in standard form: \(y=3 x^{2}-6 x+5\).
If you missed this problem, review Example 9.59.
Graph Vertical Parabolas
The next conic section we will look at is a parabola . We define a parabola as all points in a plane that are the same distance from a fixed point and a fixed line. The fixed point is called the focus, and the fixed line is called the directrix of the parabola.
A parabola is all points in a plane that are the same distance from a fixed point and a fixed line. The fixed point is called the focus, and the fixed line is called the directrix of the parabola.
Previously, we learned to graph vertical parabolas from the general form or the standard form using properties. Those methods will also work here. We will summarize the properties here.
Vertical Parabolas
|
General form \(y=a x^{2}+b x+c\) |
Standard Form \(y=a(x-h)^{2}+k\) |
|
|---|---|---|
| Orientation | \(a>0\) up; \(a<0\) down | \(a>0\) up; \(a<0\) down |
| Axis of Symmetry | \(x=-\dfrac{b}{2 a}\) | \(x=h\) |
| Vertex |
Substitute \(x=-\dfrac{b}{2 a}\) and
solve for \(y .\) |
\((h, k)\) |
| \(y\)-intercept | Let \(x=0\) | Let \(x=0\) |
| \(x\)-intercepts | Let \(y=0\) | Let \(y=0\) |
The graphs show what the parabolas look like when they open up or down. Their position in relation to the \(x\)- or \(y\)-axis is merely an example.
To graph a parabola from these forms, we used the following steps.
How to Graph Vertical Parabolas \(y=a x^{2}+b x+c\) or \(f(x)=a(x-h)^{2}+k\) using Properties.
- Step 1: Determine whether the parabola opens upward or downward.
- Step 2. Find the axis of symmetry.
- Step 3. Find the vertex.
- Step 4. Find the \(y\)-intercept. Find the point symmetric to the \(y\)-intercept across the axis of symmetry.
- Step 5. Find the \(x\)-intercepts.
- Step 6. Graph the parabola.
The next example reviews the method of graphing a parabola from the general form of its equation.
Graph \(y=-x^{2}+6 x-8\) by using properties.
Solution :
| \( \begin{align*} \color{red}{y} &\color{red}{=} a x^{2}+b x+c \\[4pt] \color{black}{y} &=-x^{2}+6 x-8 \end{align*}\) | |
| Since \(a\) is \(-1\), the parabola opens downward. | |
| To find the axis of symmetry, find \(x=-\dfrac{b}{2 a}\). | \( \begin{align*} x &=-\dfrac{b}{2 a}\\[4pt] x &=-\dfrac{6}{2(-1)} \\[4pt] x &= 3 \end{align*}\) |
| The axis of symmetry is \(x=3\). | |
| The vertex is on the line \(x=3\). | \(y=-x^{2}+6 x-8\) |
| Let \(x=3\). | |
| \(\begin{align*} y &=-9+18-8 \\[4pt] y &=1 \end{align*}\) | |
| The vertex is \((3,1)\). | |
| The \(y\)-intercept occurs when \(x=0\). | \(y=-x^{2}+6 x-8\) |
| Substitute \(x=0\). | \(y=-\color{red}{0}^{\color{black}{2}}+6 \cdot \color{red}{0} \color{black}{-} 8\) |
| Simplify. | \(y=-8\) |
| The \(y\)-intercept is \((0,-8)\). | |
| The point \((0,−8)\) is three units to the left of the line of symmetry. The point three units to the right of the line of symmetry is \((6,−8)\). | Point symmetric to the \(y\)-intercept is \((6,−8)\). |
| The \(x\)-intercept occurs when \(y=0\). | \(y=-x^{2}+6 x-8\) |
| Let \(y=0\). | \(\color{red}{0} \color{black}{=}-x^{2}+6 x-8\) |
| Factor the GCF. | \(0=-\left(x^{2}-6 x+8\right)\) |
| Factor the trinomial. | \(0=-(x-4)(x-2)\) |
| Solve for \(x\). | \(x=4, \quad x=2\) |
| The \(x\)-intercepts are \((4,0),(2,0)\). | |
| Graph the parabola. |
Graph \(y=-x^{2}+5 x-6\) by using properties.
- Answer
Graph \(y=-x^{2}+8 x-12\) by using properties.
- Answer
The next example reviews the method of graphing a parabola from the standard form of its equation, \(y=a(x-h)^{2}+k\).
Write \(y=3 x^{2}-6 x+5\) in standard form and then use properties of standard form to graph the equation.
Solution :
| Rewrite the function in \(y=a(x-h)^{2}+k\) form by completing the square. | \(\begin{align*} y &=3 x^{2}-6 x+5 \\[4pt] y &=3\left(x^{2}-2 x\right)+5 \\[4pt] y &=3\left(x^{2}-2 x+1\right) + 5-3 \\[4pt] y &=3(x-1)^{2}+2 \end{align*}\) |
| Identify the constants \(a, h, k\). | \(a=3, h=1, k=2\) |
| Since \(a=2\), the parabola opens upward. | |
| The axis of symmetry is \(x=h\). | The axis of symmetry is \(x=1\). |
| The vertex is \((h,k)\). | The vertex is \((1,2)\). |
| Find the \(y\)-intercept by substituting \(x=0\), | \( \begin{align*} y &=3(x-1)^{2}+2 \\[4pt] y &=3 \cdot 0^{2}-6 \cdot 0+5 \\[4pt] y &=0 \end{align*} \) |
| \(y\)-intercept \((0,5)\) | |
| Find the point symmetric to \((0,5)\) across the axis of symmetry. | \((2,5)\) |
| Find the \(x\)-intercepts. | \(\begin{aligned} y &=3(x-1)^{2}+2 \\[4pt] 0 &=3(x-1)^{2}+2 \\[4pt] -2 &=3(x-1)^{2} \\[4pt] -\dfrac{2}{3} &=(x-1)^{2} \\[4pt] \pm \sqrt{-\dfrac{2}{3}} &=x-1 \end{aligned}\) |
| The square root of a negative number tells us the solutions are complex numbers. So there are no \(x\)-intercepts. | |
| Graph the parabola. |
- Write \(y=2 x^{2}+4 x+5\) in standard form and
- use properties of standard form to graph the equation.
- Answer
-
- \(y=2(x+1)^{2}+3\)
- Write \(y=-2 x^{2}+8 x-7\) in standard form and
- use properties of standard form to graph the equation.
- Answer
-
- \(y=-2(x-2)^{2}+1\)
Graph Horizontal Parabolas
Our work so far has only dealt with parabolas that open up or down. We are now going to look at horizontal parabolas. These parabolas open either to the left or to the right. If we interchange the \(x\) and \(y\) in our previous equations for parabolas, we get the equations for the parabolas that open to the left or to the right.
Horizontal Parabolas
|
General form \(x=a y^{2}+b y+c\) |
Standard form \(x=a(y-k)^{2}+h\) |
|
|---|---|---|
| Orientation | \(a>0\) right; \(a<0\) left | \(a>0\) right; \(a<0\) left |
| Axis of Symmetry | \(y=-\dfrac{b}{2 a}\) | \(y=k\) |
| Vertex |
Substitute \(y=-\dfrac{b}{2 a}\) and
solve for \(x .\) |
\((h, k)\) |
| \(x\)-intercepts | Let \(x=0\) | Let \(x=0\) |
| \(y\)-intercept | Let \(y=0\) | Let \(y=0\) |
The graphs show what the parabolas look like when they to the left or to the right. Their position in relation to the \(x\)- or \(y\)-axis is merely an example.
Looking at these parabolas, do their graphs represent a function? Since both graphs would fail the vertical line test, they do not represent a function.
To graph a parabola that opens to the left or to the right is basically the same as what we did for parabolas that open up or down, with the reversal of the \(x\) and \(y\) variables.
- Step 1: Determine whether the parabola opens to the left or to the right.
- Step 2: Find the axis of symmetry.
- Step 3: Find the vertex.
- Step 4: Find the \(x\)-intercept. Find the point symmetric to the \(x\)-intercept across the axis of symmetry.
- Step 5: Find the \(y\)-intercepts.
- Step 6: Graph the parabola.
Graph \(x=2 y^{2}\) by using properties.
Solution :
| Since \(a=2\), the parabola opens to the right. | |
| To find the axis of symmetry, find \(y=-\dfrac{b}{2 a}\) | \(y=-\dfrac{b}{2 a}\) |
| \(y=-\dfrac{0}{2(2)}\) | |
| \(y=0\) | |
| The axis of symmetry is \(y=0\). | |
| The vertex is on the line \(y=0\). | \(x=2 y^{2}\) |
| Let \(y=0\). | |
| \(x=0\) | |
| The vertex is \((0,0)\). |
Since the vertex is \((0,0)\), both the \(x\)- and \(y\)-intercepts are the point \((0,0)\). To graph the parabola we need more points. In this case it is easiest to choose values of \(y\).
We also plot the points symmetric to \((2,1)\) and \((8,2)\) across the \(y\)-axis, the points \((2,−1),(8,−2)\).
Graph the parabola.
Graph \(x=y^{2}\) by using properties.
- Answer
Graph \(x=-y^{2}\) by using properties.
- Answer
In the next example, the vertex is not the origin.
Graph \(x=-y^{2}+2 y+8\) by using properties.
Solution :
| Since \(a=-1\), the parabola opens to the left. | |
|
To find the axis of symmetry,
find \(y=-\dfrac{b}{2 a}\) |
\(y=-\dfrac{b}{2 a}\) |
| \(y=-\dfrac{2}{2(-1)}\) | |
| \(y=1\) | |
| The axis of symmetry is \(y=1\). | |
| The vertex is on the line \(y=1\). | \(x=-y^{2}+2 y+8\) |
| Let \(y=1\). | |
| \(x=9\) | |
| The vertex is \((9,1)\). | |
| The \(x\)-intercept occurs when \(y=0\). | \(x=-y^{2}+2 y+8\) |
| \(x=8\) | |
| The \(x\)-intercept is \((8,0)\). | |
|
The point \((8,0)\) is one unit below the line of
symmetry. The symmetric point one unit above the line of symmetry is \((8,2)\) |
Symmetric point is \((8,2)\). |
| The \(y\)-intercept occurs when \(x=0\). | \(x=-y^{2}+2 y+8\) |
| Substitute \(x=0\). | \(0=-y^{2}+2 y+8\) |
| Solve. | \(y^{2}-2 y-8=0\) |
| \((y-4)(y+2)=0\) | |
| \(y=4, \quad y=-2\) | |
| The \(y\) -intercepts are \((0,4)\) and \((0,-2)\). | |
| Connect the points to graph the parabola. |
Graph \(x=-y^{2}-4 y+12\) by using properties.
- Answer
Graph \(x=-y^{2}+2 y-3\) by using properties.
- Answer
In Table 11.2.4, we see the relationship between the equation in standard form and the properties of the parabola. The How To box lists the steps for graphing a parabola in the standard form \(x=a(y-k)^{2}+h\). We will use this procedure in the next example.
Graph \(x=2(y-2)^{2}+1\) using properties.
Solution :
| Identify the constants \(a, h, k\). | \(a=2, h=1, k=2\) |
| Since \(a=2\), the parabola opens to the right. | |
| The axis of symmetry is \(y=k\). | The axis of symmetry is \(y=2\). |
| The vertex is \((h,k)\). | The vertex is \((1,2)\). |
| Find the \(x\)-intercept by substituting \(y=0\). |
\(x=2(y-2)^{2}+1\)
\(x=2(0-2)^{2}+1\) \(x=9\) |
| The \(x\)-intercept is \((9,0)\). | |
| Find the point symmetric to \((9,0)\) across the axis of symmetry. | \((9,4)\) |
| Find the \(y\)-intercepts. Let \(x=0\). | \(\begin{aligned} x &=2(y-2)^{2}+1 \\ 0 &=2(y-2)^{2}+1 \\-1 &=2(y-2)^{2} \end{aligned}\) |
| A square cannot be negative, so there is no real solution. So there are no \(y\)-intercepts. | |
| Graph the parabola. |
Graph \(x=3(y-1)^{2}+2\) using properties.
- Answer
Graph \(x=2(y-3)^{2}+2\) using properties.
- Answer
In the next example, we notice the a is negative and so the parabola opens to the left.
Graph \(x=-4(y+1)^{2}+4\) using properties.
Solution :
| Identify the constants \(a, h, k\). | \(a=-4, h=4, k=-1\) |
| Since \(a=-4\), the parabola opens to the left. | |
| The axis of symmetry is \(y=k\). | The axis of symmetry is \(y=-1\). |
| The vertex is \((h,k)\). | The vertex is \((4,-1)\). |
| Find the \(x\)-intercept by substituting \(y=0\). |
\(x=-4(y+1)^{2}+4\)
\(x=-4(0+1)^{2}+4\) \(x=0\) |
| The \(x\)-intercept is \((0,0)\). | |
| Find the point symmetric to \((0,0)\) across the axis of symmetry. | \((0,-2)\) |
| Find the \(y\)-intercepts. | \(x=-4(y+1)^{2}+4\) |
| Let \(x=0\). | \(\begin{aligned} 0 &=-4(y+1)^{2}+4 \\-4 &=-4(y+1)^{2} \\ 1 &=(y+1)^{2} \\ y+1 &=\pm 1 \end{aligned}\) |
| \(y=-1+1 \quad y=-1-1\) | |
| \(y=0 \quad\quad y=-2\) | |
| The \(y\)-intercepts are \((0,0)\) and \((0,-2)\). | |
| Graph the parabola. |
Graph \(x=-4(y+2)^{2}+4\) using properties.
- Answer
Graph \(x=-2(y+3)^{2}+2\) using properties.
- Answer
The next example requires that we first put the equation in standard form and then use the properties.
Write \(x=2 y^{2}+12 y+17\) in standard form and then use the properties of the standard form to graph the equation.
Solution :
| \(x=2 y^{2}+12 y+17\) | |
| Rewrite the function in \(x=a(y-k)^{2}+h\) form by completing the square. | \(x=2\left(y^{2}+6 y\right)+17\) |
| \(x=2(y+3)^{2}-1\) | |
| Identify the constants \(a, h, k\). | \(a=2, h=-1, k=-3\) |
| Since \(a=2\), the parabola opens to the right. | |
| The axis of symmetry is \(y=k\). | The axis of symmetry is \(y=-3\). |
| The vertex is \((h,k)\). | The vertex is \((-1,-3)\). |
| Find the \(x\)-intercept by substituting \(y=0\). |
\(x=2(y+3)^{2}-1\)
\(x=2(0+3)^{2}-1\) \(x=17\) |
| The \(x\)-intercept is \((17,0)\). | |
| Find the point symmetric to \((17,0)\) across the axis of s
