# Source pack — subjects/photography/foundational/the-exposure-triangle
Lesson title: The Exposure Triangle
Level: foundational
Match confidence: 1.53

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.53 — LibreTexts: 11.3: Three angles of triangle
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Geometry/Euclidean_Plane_and_its_Relatives_(Petrunin)/11%3A_Neutral_plane/11.03%3A_Three_angles_of_triangle

11.3: Three angles of triangle
Let \(\triangle ABC\) and \(\triangle A'B'C'\) be two triangles in the neutral plane such that \(AC = A'C'\) and \(BC = B'C'\). Then
\(AB < A'B'\) if and only if \(|\measuredangle ACB| < |\measuredangle A'C'B'|\).
- Proof
-
Without loss of generality, we may assume that \(A = A'\), \(C = C'\), and \(\measuredangle ACB\), \(\measuredangle ACB' \ge 0\). In this case we need to show that
\(AB < AB' \Leftrightarrow \measuredangle ACB < \measuredangle ACB'.\)
Choose a point \(X\) so that
\(\measuredangle ACX = \dfrac{1}{2} \cdot (\measuredangle ACB + \measuredangle ACB').\)
Note that
- \((CX)\) bisects \(\angle BCB'\).
- \((CX)\) is the perpendicular bisector of \([BB']\).
- \(A\) and \(B\) lie on the same side of \((CX)\) if and only if
\(\measuredangle ACB < \measuredangle ACB'\).
From Exercise 5.2.1 , \(A\) and \(B\) lie on the same side of \((CX)\) if and only if \(AB < AB'\). Hence the result.
Let \(\triangle ABC\) be a triangle in the neutral plane. Then
\(|\measuredangle ABC| + |\measuredangle BCA| + |\measuredangle CAB| \le \pi.\)
The following proof is due to Legendre [ 12 ], earler proofs were due to Saccheri [ 16 ] and Lambert [ 11 ].
- Proof
-
Set
\(\begin{array} {rclcrclcrcl} {a} & = & {BC,} & \ \ \ \ \ & {b} & = & {CA,} & \ \ \ \ \ & {c} & = & {AB,} \\ {\alpha} & = & {\measuredangle CAB,} & \ \ \ \ \ & {\beta} & = & {\measuredangle ABC,} & \ \ \ \ \ & {\gamma} & = & {\measuredangle BCA.} \end{array}\)
Without loss of generality, we may assume that \(\alpha, \beta, \gamma \ge 0\).
Fix a positive integer \(n\). Consider the points \(A_0, A_1, ..., A_n\) on the half-line \([BA)\), such that \(BA_i = i \cdot c\) for each \(i\). (In particular, \(A_0 = B\) and \(A_1 = A\).) Let us construct the points \(C_1, C_2, ..., C_n\), so that \(\measuredangle A_iA_{i-1}C_i = \beta\) and \(A_{i-1} C_i = a\) for each \(i\).
By SAS, we have constructed n congruent triangles
\(\triangle ABC = \triangle A_1A_0C_1 \cong \triangle A_2A_1C_2 \cong ... \cong \triangle A_nA_{n-1} C_n.\)
Set \(d = C_1C_2\) and \(\delta = \measuredangle C_2A_1C_1\). Note that
\[\alpha + \beta + \delta = \pi.\]
By Proposition 11.2.1 , we get that \(\Delta \ge 0\).
By construction
\(\triangle A_1C_1C_2 \cong \triangle A_2C_2C_3 \cong ... \cong \triangle A_{n - 1} C_{n - 1} C_n.\)
In particular, \(C_i C_{i + 1} = d\) for each \(i\).
By repeated application of the triangle inequality, we get that
\(\begin{array} {rcl} {n \cdot c} & = & {A_0A_n \le} \\ {} & \le & {A_0 C_1 + C_1 C_2 + \cdots + C_{n - 1} C_n + C_n A_n =} \\ {} & = & {a + (n - 1) \cdot d + b.} \end{array}\)
In particular,
\(c \le d + \dfrac{1}{n} \cdot (a + b - d).\)
Since \(n\) is arbitrary positive integer, the latter implies \(c \le d\). By Proposition \(\PageIndex{1}\), it is equivalent to
\(\gamma \le \delta.\)
From 11.3.1, the theorem follows.
Let \(ABCD\) be a quadrangle in the neutral plane. Suppose that the angles \(DAB\) and \(ABC\) are right. Show that \(AB \le CD\).
- Hint
-
Set \(a = AB, b = BC, c = CD\), and \(d = DA\); we nned to show that \(c \ge a\).
Mimic the proof of Theorem \(\PageIndex{1}\) for the shown fence made from copies of quadrangle \(ABCD\).

## Match 1.53 — LibreTexts: 3.5: Triangle with the given sides
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Geometry/Euclidean_Plane_and_its_Relatives_(Petrunin)/03%3A_Half-Planes/3.05%3A_Triangle_with_the_given_sides

3.5: Triangle with the given sides
Consider the triangle \(ABC\). Set
\(a = BC\), \(b = CA\), \(c = AB.\)
Without loss of generality, we may assume that
\(a \le b \le c.\)
Then all three triangle inequalities for \(\triangle ABC\) hold if and only if
\(c \le a + b\).
The following theorem states that this is the only restriction on \(a\), \(b\), and \(c\).
Assume that \(0 < a \le b \le c \le a + b\). Then there is a triangle with sides \(a, b\), and \(c\); that is, there is \(\triangle ABC\) such that \(a = BC\), \(b = CA\), and \(c = AB\).
- Proof
-
Fix the points \(A\) and \(B\) such that \(AB = c\). Given \(\beta \in [0, \pi]\), suppose that \(C_{\beta}\) denotes the point in the plane such that \(BC_{\beta} = a\) and \(\measuredangle ABC = \beta\).
According the Corollary \(\PageIndex{1}\), the map \(\beta \mapsto C_{\beta}\) is continuous. Therefore, the function \(b(\beta) = AC_{\beta}\)is continous (formally, it follows from Exercise 1.9.1 and Exercise 1.9.2 ).
Note that \(b(0) = c - a\) and \(b (\pi) = c + a\). Since \(c - a \le b \le c + a\), by the intermediate value theorem ( Theorem 3.2.1 ) there is \(\beta_0 \in [0, \pi]\) such that \(b(\beta_0) = b\), hence the result.
Assume \(r > 0\) and \(\pi > \beta > 0\). Consider the triangle \(ABC\) such that \(AB = BC = r\) and \(\measuredangle ABC = \beta\). The existence of such a triangle follows from Axiom IIIa and Proposition 2.2.2 .
Note that according to Axiom IV , the values \(\beta\) and \(r\) define the triangle \(ABC\) up to the congruence. In particular, the distance \(AC\) depends only on \(\beta\) and \(r\).
\[s(\beta, r):= AC.\]
Given \(r > 0\) and \(\varepsilon > 0\), there is \(\delta > 0\) such that
\(0 < \beta < \delta \Rightarrow s(r, \beta) < \varepsilon.\)
- Proof
-
Fix two points \(A\) and \(B\) such that \(AB = r\).
Choose a point \(X\) such that \(AY = \dfrac{\varepsilon}{2}\); it exists by Proposition 2.2.2 .
Note that \(X\) and \(Y\) lie on the same side of \((AB)\); therefore, \(\angle ABY\) is positive. Set \(\delta = \measuredangle ABY\).
Suppose \(0 < \beta < \delta\); by Axiom IIIa , we can choose \(B\) so that \(\measuredangle ABC = \beta\) and \(BC = r\). Further we can choose a half-line \([BZ)\) such that \(\measuredangle ABZ = \dfrac{1}{2} \cdot \beta\).
Note that \(A\) and \(Y\) lie on opposite sides of \((BZ)\) and moreover \(\measuredangle ABZ \equiv - \measuredangle CBZ\). In particular, \((BZ)\) intersects \([AY]\); denote by \(D\) the point of intersection.
Since \(D\) lies between \(A\) and \(Y\), we have that \(AD < AY\).
Since \(D\) lies on \((BZ)\) we have that \(\measuredangle ABD \equiv \measuredangle CBD\). By Axiom IV , \(\triangle ABD \cong \triangle CBD\). It follows that
\[\begin{array} {rcl} {s(r, \beta)} & = & {AC \le} \\ {} & \le & {AD + DC =} \\ {} & = & {2 \cdot AD <} \\ {} & < & {2 \cdot AY =} \\ {} & = & {\varepsilon} \end{array}\]
Fix a real number \(r > 0\) and two distinct points \(A\) and \(B\). Then for any real number \(\beta \in [0, \pi]\), there is a unique point \(C_{\beta}\) such that \(BC_{\beta} = r\) and \(\measuredangle ABC_{\beta} = \beta\). Moreover, \(\beta \mapsto C_{\beta}\) is a continuous map from \([0, \pi]\) to the plane.
- Proof
-
The existence and uniqueness of \(C_{\beta}\) follows from Axiom IIIa and Proposition 2.2.2 .
Note taht if \(\beta_1 \ne \beta_2\), then
\[C_{\beta_1} C_{\beta_2} = s(r, |\beta_1 - \beta_2|).\]
By Proposition \(\PageIndex{1}\), the map \(\beta \mapsto C_{\beta}\) is continuous.
Given a positive real number \(r\) and a pint \(O\), the set \(\Gamma\) of all points on distance \(r\) from \(O\) is called a circle with radius \(r\) and center \(O\).
Exercise \(\PageIndex{1}\)
Show that two circles intersect if and only if
\[|R - r| \le d \le R + r,\]
where \(R\) and \(r\) denote their radiuses, and \(d\) — the distance between their centers.
- Hint
-
The "only-if" part follows from the triangle inequality. To prove "if" part, observe that Theorem \(\PageIndex{1}\) implies existence of a triangle with sides \(r_1\), \(r_2\), and \(d\). Use this triangle to show that there is a point \(X\) such that \(O_1X = r_1\) and \(O_2X = r_2\), where \(O_1\) and \(O_2\) are the centers of the corresponding circles.

## Match 1.52 — LibreTexts: 3.3: Formula for the Area of a Triangle
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Arithmetic_and_Basic_Math/Basic_Math_(Grade_6)/01%3A_Area_and_Surface_Area/03%3A_Triangles/3.03%3A_Formula_for_the_Area_of_a_Triangle

3.3: Formula for the Area of a Triangle
Lesson
Let's write and use a formula to find the area of a triangle.
Exercise \(\PageIndex{1}\): Bases and Heights of a Triangle
Study the examples and non-examples of bases and heights in a triangle.
- Examples: These dashed segments represent heights of the triangle.
- Non-examples: These dashed segments do not represent heights of the triangle.
Select all the statements that are true about bases and heights in a triangle.
- Any side of a triangle can be a base.
- There is only one possible height.
- A height is always one of the sides of a triangle.
- A height that corresponds to a base must be drawn at an acute angle to the base.
- A height that corresponds to a base must be drawn at a right angle to the base.
- Once we choose a base, there is only one segment that represents the corresponding height.
- A segment representing a height must go through a vertex.
Exercise \(\PageIndex{2}\): Finding a Formula for Area of a Triangle
For each triangle:
- Identify a base and a corresponding height, and record their lengths in the table.
- Find the area of the triangle and record it in the last column of the table.
| triangle | base (units) | height (units) | area (square units) |
|---|---|---|---|
| A | |||
| B | |||
| C | |||
| D | |||
| any triangle | \(b\) | \(h\) |
In the last row, write an expression for the area of any triangle, using \(b\) and \(h\).
Exercise \(\PageIndex{3}\): Applying the Formula for Area of Triangles
For each triangle, circle a base measurement that you can use to find the area of the triangle. Then, find the area of any three triangles. Show your reasoning.
Summary
- We can choose any of the three sides of a triangle to call the base . The term “base” refers to both the side and its length (the measurement).
- The corresponding height is the length of a perpendicular segment from the base to the vertex opposite of it. The opposite vertex is the vertex that is not an endpoint of the base.
Here are three pairs of bases and heights for the same triangle. The dashed segments in the diagrams represent heights.
A segment showing a height must be drawn at a right angle to the base, but it can be drawn in more than one place. It does not have to go through the opposite vertex, as long as it connects the base and a line that is parallel to the base and goes through the opposite vertex, as shown here.
The base-height pairs in a triangle are closely related to those in a parallelogram. Recall that two copies of a triangle can be composed into one or more parallelograms. Each parallelogram shares at least one base with the triangle.
For any base that they share, the corresponding height is also shared, as shown by the dashed segments.
We can use the base-height measurements and our knowledge of parallelograms to find the area of any triangle.
- The formula for the area of a parallelogram with base \(b\) and height \(h\) is \(b\cdot h\).
- A triangle takes up half of the area of a parallelogram with the same base and height. We can therefore express the area \(A\) of a triangle as: \(A=\frac{1}{2}\cdot b\cdot h\)
- The area of Triangle A is 15 square units because \(\frac{1}{2}\cdot 5\cdot 6=15\).
- The area of Triangle B is 4.5 square units because \(\frac{1}{2}\cdot 3\cdot 3=4.5\).
- The area of Triangle C is 24 square units because \(\frac{1}{2}\cdot 12\cdot 4=24\).
In each case, one side of the triangle is the base but neither of the other sides is the height. This is because the angle between them is not a right angle.
In right triangles, however, the two sides that are perpendicular can be a base and a height.
The area of this triangle is 18 square units whether we use 4 units or 9 units for the base.
Glossary Entries
Definition: Opposite Vertex
For each side of a triangle, there is one vertex that is not on that side. This is the opposite vertex.
For example, point \(A\) is the opposite vertex to side \(BC\).
Practice
Exercise \(\PageIndex{4}\)
Select all drawings in which a corresponding height \(h\) for a given base \(b\) is correctly identified.
- A
- B
- C
- D
- E
- F
Exercise \(\PageIndex{5}\)
For each triangle, a base and its corresponding height are labeled.
- Find the area of each triangle.
- How is the area related to the base and its corresponding height?
Exercise \(\PageIndex{6}\)
Here is a right triangle. Name a corresponding height for each base.
- Side \(d\)
- Side \(e\)
- Side \(f\)
Exercise \(\PageIndex{7}\)
Find the area of the shaded triangle. Show your reasoning.
(From Unit 1.3.2)
Exercise \(\PageIndex{8}\)
Andre drew a line connecting two opposite corners of a parallelogram. Select all true statements about the triangles created by the line Andre drew.
- Each triangle has two sides that are 3 units long.
- Each triangle has a side that is the same length as the diagonal line.
- Each triangle has one side that is 3 units long.
- When one triangle is placed on top of the other and their sides are aligned, we will see that one triangle is larger than the other.
- The two triangles have the same area as each other.
(From Unit 1.3.1)
Exercise \(\PageIndex{9}\)
Here is an octagon. (Note: The diagonal sides of the octagon are not 4 inches long.)
- While estimating the area of the octagon, Lin reasoned that it must be less than 100 square inches. Do you agree? Explain your reasoning.
- Find the exact area of the octagon. Show your reasoning.
(From Unit 1.1.3)
