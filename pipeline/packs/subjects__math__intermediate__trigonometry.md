# Source pack — subjects/math/intermediate/trigonometry
Lesson title: Trigonometry: Sines & Cosines
Level: intermediate
Match confidence: 2.39

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.39 — LibreTexts: 8.1: Non-Right Triangles - Laws of Sines and Cosines
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Precalculus/Book%3A_Precalculus__An_Investigation_of_Functions_(Lippman_and_Rasmussen)/08%3A_Further_Applications_of_Trigonometry/8.01%3A_Non-Right_Triangles_-_Laws_of_Sines_and_Cosines

8.1: Non-Right Triangles - Laws of Sines and Cosines
Although right triangles allow us to solve many applications, it is more common to find scenarios where the triangle we are interested in does not have a right angle.
Two radar stations located 20 miles apart both detect a UFO located between them. The angle of elevatio n measured by the first station is 35 degrees. The angle of elevation measured by the second station is 15 degrees. What is the altitude of the UFO?
We see that the triangle formed by the UFO and the two stations is not a right triangle. Of course, in any triangle we could draw an altitude, a perpendicular line from one vertex to the opposite side, forming two right triangles, but it would be nice to have methods for working directly with non-right triangles. In this section, we will expand upon the right triangle trigonometry we learned in Chapter 5, and adapt it to non-right triangles.
Law of Sines
Given an arbitrary non-right triangle, we can drop an altitude, which we temporarily label \(h\), to create two right triangles.
Using the right triangle relationships,
\[\sin (\alpha ) = \dfrac{h}{b}\text{ and }\sin (\beta ) = \dfrac{h}{a}\nonumber\]
Solving both equations for \(h\), we get \(b\sin (\alpha ) = h\) and \(a\sin (\beta ) = h\). Since the \(h\) is the same in both equations, we establish \(b\sin (\alpha ) = a\sin (\beta )\). Dividing both sides by \(ab\), we conclude that
\[\dfrac{\sin (\alpha )}{a} = \dfrac{\sin (\beta )}{b}\nonumber\]
Had we drawn the altitude to be perpendicular to side \(b\) or \(a\), we could similarly establish
\[\dfrac{\sin (\alpha )}{a} = \dfrac{\sin (\gamma )}{c}\text{ and }\dfrac{\sin (\beta )}{b} = \dfrac{\sin (\gamma )}{c}\nonumber\]
Collectively, these relationships are called the Law of Sines.
LAW OF SINES
Given a triangle with angles and sides opposite labeled as shown, the ratio of sine of angle to length of the opposite side will always be equal, or, symbolically,
\[\dfrac{\sin (\alpha )}{a} = \dfrac{\sin (\beta )}{b} = \dfrac{\sin (\gamma )}{c}\]
For clarity, we call side \(a\) the corresponding side of angle \(\alpha\).
Similarly, we call angle \(\alpha\), the corresponding angle of side \(a\).
Likewise for side \(b\) and angle \(\beta\), and for side \(c\) and angle \(\gamma\).
When we use the law of sines, we use any pair of ratios as an equation. In the most straightforward case, we know two angles and one of the corresponding sides.
Example \(\PageIndex{1}\)
In the triangle shown here, solve for the unknown sides and angle.
Solution
Solving for the unknown angle is relatively easy, since the three angles must add to 180 degrees.
From this, we can determine that
\[\gamma = 180^{\circ} - 50^{\circ} - 30^{\circ} = 100^{\circ}\nonumber\]
To find an unknown side, we need to know the corresponding angle, and we also need another known ratio.
Since we know the angle \(50^{\circ}\) and its corresponding side, we can use this for one of the two ratios. To look for side \(b\), we would use its corresponding angle, \(30^{\circ}\).
\[\dfrac{\sin (50^\circ )}{10} = \dfrac{\sin (30^\circ )}{b}\nonumber\]Multiply both sides by \(b\)
\[b\dfrac{\sin (50^\circ )}{10} = \sin (30^\circ )\nonumber\]Divide, or multiply by the reciprocal, to solve for \(b\)
\[b = \sin (30^\circ )\dfrac{10}{\sin (50^\circ )} \approx 6.527\nonumber\]
Similarly, to solve for side \(c\), we set up the equation
\[\dfrac{\sin (50^\circ )}{10} = \dfrac{\sin (100^\circ )}{c}\nonumber\]
\[c = \sin (100^\circ )\dfrac{10}{\sin (50^\circ )} \approx 12.856\nonumber\]
Example \(\PageIndex{2}\)
Find the elevation of the UFO from the beginning of the section.
Solution
To find the elevation of the UFO, we first find the distance from one station to the UFO, such as the side a in the picture, then use right triangle relationships to find the height of the UFO, \(h\).
Since the angles in the triangle add to 180 degrees, the unknown angle of the triangle must be \(180^{\circ} - 15^{\circ} - 35^{\circ} = 130^{\circ}\). This angle is opposite the side of length 20, allowing us to set up a Law of Sines relationship:
\[\dfrac{\sin (130^\circ )}{20} = \dfrac{\sin (35^\circ )}{a}\nonumber\]Multiply by \(a\)
\[a\dfrac{\sin (130^\circ )}{20} = \sin (35^\circ )\nonumber\]Divide, or multiply by the reciprocal, to solve for \(a\)
\[a = \dfrac{20\sin (35^\circ )}{\sin (130^\circ )} \approx 14.975\nonumber\]Simplify
The distance from one station to the UFO is about 15 miles. Now that we know a, we can use right triangle relationships to solve for \(h\).
\[\sin (15^\circ ) = \dfrac{opposite}{hypotenuse} = \dfrac{h}{a} = \dfrac{h}14.975\nonumber\]Solve for \(h\)
\[h = 14.975\sin (15^\circ ) \approx 3.876\nonumber\]
The UFO is at an altitude of 3.876 miles.
In addition to solving triangles in which two angles are known, the law of sines can be used to solve for an angle when two sides and one corresponding angle are known.
Example \(\PageIndex{3}\)
In the triangle shown here, solve for the unknown sides and angles.
Solution
In choosing which pair of ratios from the Law of Sines to use, we always want to pick a pair where we know three of the four pieces of information in the equation. In this case, we know the angle \(85^{\circ}\) and its corresponding side, so we will use that ratio. Since our only other known information is the side with length 9, we will use that side and solve for its corresponding angle.
\[\dfrac{\sin (85^\circ )}{12} = \dfrac{\sin (\beta )}{9}\nonumber\]Isolate the unknown
\[\dfrac{9\sin (85^\circ )}{12} = \sin (\beta )\nonumber\]Use the inverse sine to find a first solution
Remember when we use the inverse function that there are two possible answers.
\[\beta = {\sin ^{ - 1}}\left( \dfrac{9\sin (85^\circ )}{12} \right) \approx 48.3438^\circ \nonumber\]By symmetry we find the second possible solution
\[\beta = 180^\circ - 48.3438^\circ = 131.6562^\circ \nonumber\]
In this second case, if \(\beta \approx 132^{\circ}\), then \(\alpha\) would be \(\alpha = 180^{\circ} - 85^{\circ} - 132^{\circ} = -37^{\circ}\), which doesn’t make sense, so the only possibility for this triangle is \(\beta = 48.3438^{\circ}\).
With a second angle, we can now easily find the third angle, since the angles must add to \(180^{\circ}\), so \(\alpha = 180^{\circ} – 85^{\circ} – 48.3438^{\circ} = 46.6562^{\circ}\).
Now that we know \(\alpha\), we can proceed as in earlier examples to find the unknown side \(a\).
\[\dfrac{\sin (85^\circ )}{12} = \dfrac{\sin (46.6562^\circ )}{a}\nonumber\]
\[a = \dfrac{12\sin (46.6562^\circ )}{\sin (85^\circ )} \approx 8.7603\nonumber\]
Notice that in the problem above, when we use Law of Sines to solve for an unknown angle, there can be two possible solutions. This is called the ambiguous case, and can arise when we know two sides and a non-included angle. In the ambiguous case we may find that a particular set of given information can lead to 2, 1 or no solution at all. However, when an accurate picture of the triangle or suitable context is available, we can determine which angle is desired.
Exercise \(\PageIndex{1}\)
Given \(\alpha = 80^\circ ,a = 120,{\rm{ and }}b = 121\), find the corresponding and missing side and angles. If there is more than one possible solution, show both.
- Answer
-
\[\frac{\sin (80^{\circ })}{120}=\frac{\sin (\beta )}{121}\nonumber\]
\[1^{\text{st}}\text{ possible solution }\begin{array}{l}\beta = 83.2^\circ \\\gamma = 16.8^\circ \\c = 35.2\end{array}\nonumber\]
\[2^{\text{nd}}\text{ solution }\begin{array}{l}\beta = 96.8^\circ \\\gamma = 3.2^\circ \\c = 6.9\end{array}\nonumber\]
If we were given a picture of the triangle it may be possible to eliminate one of these
Example \(\PageIndex{4}\)
Find all possible triangles if one side has length 4 opposite an angle of \(50^{\circ}\) and a second side has length 10.
Solution
Using the given information, we can look for the angle opposite the side of length 10.
\[\dfrac{\sin (50^\circ )}{4} = \dfrac{\sin (\alpha )}{10}\nonumber\]
\[\sin (\alpha ) = \dfrac{10\sin (50^\circ )}{4} \approx 1.915\nonumber\]
Since the range of the sine function is [-1, 1], it is impossible for the sine value to be 1.915. There are no triangles that can be drawn with the provided dimensions.
Example \(\PageIndex{5}\)
Find all possible triangles if one side has length 6 opposite an angle of \(50^{circ}\) and a second side has length 4.
Solution
Using the given information, we can look for the angle opposite the side of length 4.
\[\dfrac{\sin (50^\circ )}{6} = \dfrac{\sin (\alpha )}{4}\nonumber\]
\[\sin (\alpha ) = \dfrac{4\sin (50^\circ )}{6} \approx 0.511\nonumber\]Use the inverse to find one solution
\[\alpha = {\sin ^{ - 1}}\left( {0.511} \right) \approx 30.710^\circ \nonumber\]By symmetry there is a second possible solution
\[\alpha = 180^\circ - 30.710^\circ = 149.290^\circ \nonumber\]
If we use the angle \(30.710^\circ \), the third angle would be \(180^\circ - 50^\circ - 30.710^\circ = 99.290^\circ \). We can then use Law of Sines again to find the third side.
\[\dfrac{\sin (50^\circ )}{6} = \dfrac{\sin (99.290^\circ )}{c}\nonumber\]Solve for \(c\)
\[c = 7.730\nonumber\]
If we used the angle \(\alpha = 149.290^{\circ}\), the third angle would be \(180^{\circ} – 50^{\circ} – 149.290^{\circ} = –19.29^{\circ}\), which is impossible, so the previous triangle is the only possible one.
Exercise \(\PageIndex{2}\)
Given \(\alpha = 80^\circ ,a = 100,{\rm{ and }}b = 10\) find the missing side and angles. If there is more than one possible solution, show both.
- Answer
-
\[\dfrac{\sin \left( {80^\circ } \right)}{120} = \dfrac{\sin \left( \beta \right)}{10}\quad \beta = 5.65^\circ \text{ or }\beta = 174.35^\circ \nonumber\]; only the first is reasonable.
\[\gamma = 180^\circ - 5.65^\circ - 80^\circ = 94.35^\circ \nonumber\]
\[\frac{\sin (80^{\circ })}{120}=\frac{\sin (94.35 ^{\circ })}{c}\nonumber\]
\[\beta = 5.65^\circ ,\gamma = 94.35^\circ ,c = 101.25\nonumber\]
Law of Cosines
Suppose a boat leaves port, travels 10 miles, turns 20 degrees, and travels another 8 miles. How far from port is the boat?
Unfortunately, while the Law of Sines lets us address many non-right triangle cases, it does not allow us to address triangles where the one known angle is included between two known sides, which means it is not a corresponding angle for a known side. For this, we need another tool.
Given an arbitrary non-right triangle, we can drop an altitude, which we te mporarily label \(h\), to create two right triangles. We will divide the base \(b\) into two pieces, one of which we will temporarily label \(x\).
From this picture, we can establish the right triangle relationship
\[\cos (\alpha ) = \dfrac{x}{c}\text{ or equivalently,} x = c\cos \left( \alpha \right)\nonumber\]
Using the Pythagorean Theorem, we can establish
\[{\left( {b - x} \right)^2} + {h^2} = {a^2}\text{ and }{x^2} + {h^2} = {c^2}\nonumber\]
Both of these equations can be solved for \({h^2}\)
\[{h^2} = {a^2} - {\left( {b - x} \right)^2}\text{ and }{h^2} = {c^2} - {x^2}\nonumber\]
Since the left side of each equation is \({h^2}\), the right sides must be equal
\[{c^2} - {x^2} = {a^2} - {\left( {b - x} \right)^2}\nonumber\]Multiply out the right
\[{c^2} - {x^2} = {a^2} - \left( {b^2} - 2bx + {x^2} \right)\nonumber\]Simplify
\[{c^2} - {x^2} = {a^2} - {b^2} + 2bx - {x^2}\nonumber\]
\[{c^2} = {a^2} - {b^2} + 2bx\nonumber\]Isolate \({a^2}\)
\[{a^2} = {c^2} + {b^2} - 2bx\nonumber\]Substitute in \(c\cos (\alpha ) = x\) from above
\[{a^2} = {c^2} + {b^2} - 2bc\cos (\alpha )\nonumber\]
This result is called the Law of Cosines. Depending upon which side we dropped the altitude down from, we could have established this relationship using any of the angles. The important thing to note is that the right side of the equation involves an angle and the sides adjacent to that angle – the left side of the equation involves the side opposite that angle.
LAW OF COSINES
Given a triangle with angles and opposite sides labeled as shown,
\[{a^2} = {c^2} + {b^2} - 2bc\cos (\alp

## Match 2.06 — LibreTexts: 8.1.1: Non-Right Triangles - Laws of Sines and Cosines (Exercises)
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Precalculus/Book%3A_Precalculus__An_Investigation_of_Functions_(Lippman_and_Rasmussen)/08%3A_Further_Applications_of_Trigonometry/8.01%3A_Non-Right_Triangles_-_Laws_of_Sines_and_Cosines/8.1.01%3A_Non-Right_Triangles_-_Laws_of_Sines_and_Cosines_(Exercises)

8.1.1: Non-Right Triangles - Laws of Sines and Cosines (Exercises)
section 8.1 exercises
Solve for the unknown sides and angles of the triangles shown.
1. 2.
3. 4.
5. 6.
7. 8.
Assume \(\alpha\) is opposite side \(a\), \(\beta\) is opposite side \(b\), and \(\gamma\) is opposite side \(c\). Solve each triangle for the unknown sides and angles if possible. If there is more than one possible solution, give both.
9. \(\alpha = 43^{\circ}\), \(\gamma = 69^{circ}\), \(b = 20\)
10. \(\alpha = 35^{\circ}\), \(\gamma = 73^{circ}\), \(b = 19\)
11. \(\alpha = 119^{\circ}\), \(a = 26\), \(b = 14\)
12. \(\gamma = 113^{circ}\), \(b = 10\), \(c = 32\)
13. \(\beta = 50^{circ}\), \(a = 105\), \(b = 45\)
14. \(\beta = 67^{circ}\), \(a = 49\), \(b = 38\)
15. \(\alpha = 43.1^{circ}\), \(a = 184.2\), \(b = 242.8\)
16. \(\alpha = 36.6^{\circ}\), \(a = 186.2\), \(b = 242.2\)
Solve for the unknown sides and angles of the triangles shown.
17. 18.
19. 20.
Assume \(\alpha\) is opposite side \(a\), \(\beta\) is opposite side \(b\), and \(\gamma\) is opposite side \(c\). Solve each triangle for the unknown sides and angles if possible. If there is more than one possible solution, give both.
21. \(\gamma = 41.2^{\circ}\), \(a = 2.49\), \(b = 3.13\)
22. \(\beta = 58.7^{\circ}\), \(a = 10.6\), \(c = 15.7\)
23. \(\alpha = 120^{\circ}\), \(b = 6\), \(c = 7\)
24. \(\gamma = 115^{\circ}\), \(a = 18\), \(b = 23\)
25. Find the area of a triangle with sides of length 18, 21, and 32.
26. Find the area of a triangle with sides of length 20, 26, and 37.
27. To find the distance across a small lake, a surveyor has taken the measurements shown. Find the distance across the lake.
28. To find the distance between two cities, a satellite calculates the distances and angle shown (\(not to scale\)). Find the distance between the cities.
29. o determine how far a boat is from shore, two radar stations 500 feet apart determine the angles out to the boat, as shown. Find the distance of the boat from the station A , and the distance of the boat from shore.
30. The path of a satellite orbiting the earth causes it to pass directly over two tracking stations \(A\) and \(B\), which are 69 mi apart. When the satellite is on one side of the two stations, the angles of elevation at \(A\) and \(B\) are measured to be \(86.2^{\circ}\) and \(83.9^{\circ}\), respectively. How far is the satellite from station \(A\) and how high is the satellite above the ground?
31. A communications tower is located at the top of a steep hill, as shown. The angle of inclination of the hill is \(67^{\circ}\). A guy-wire is to be attached to the top of the tower and to the ground, 165 m downhill from the base of the tower. The angle formed by the guy-wire and the hill is \(16^{\circ}\). Find the length of the cable required for the guy wire.
32. The roof of a house is at a \(20^{\circ}\) angle. An 8 foot solar panel is to be mounted on the roof, and should be angled \(38^{\circ}\) relative to the horizontal for optimal results. How long does the vertical support holding up the back of the panel need to be?
33. A 127 foot tower is located on a hill that is inclined \(38^{\circ}\) to the horizontal. A guy-wire is to be attached to the top of the tower and anchored at a point 64 feet downhill from the base of the tower. Find the length of wire needed.
34. A 113 foot tower is located on a hill that is inclined \(34^{\circ}\) to the horizontal. A guy-wire is to be attached to the top of the tower and anchored at a point 98 feet uphill from the base of the tower. Find the length of wire needed.
35. A pilot is flying over a straight highway. He determines the angles of depression to two mileposts, 6.6 km apart, to be \(37^{\circ}\) and \(44^{\circ}\), as shown in the figure. Find the distance of the plane from point \(A\), and the elevation of the plane.
36. A pilot is flying over a straight highway. He determines the angles of depression to two mileposts, 4.3 km apart, to be \(32^{\circ}\) and \(56^{\circ}\), as shown in the figure. Find the distance of the plane from point \(A\), and the elevation of the plane.
37. To estimate the height of a building, two students find the angle of elevation from a point (at ground level) down the street from the building to the top of the building is \(39^{\circ}\). From a point that is 300 feet closer to the building, the angle of elevation (at ground level) to the top of the building is \(50^{\circ}\). If we assume that the street is level, use this information to estimate the height of the building.
38. To estimate the height of a building, two students find the angle of elevation from a point (at ground level) down the street from the building to the top of the building is \(35^{\circ}\). From a point that is 300 feet closer to the building, the angle of elevation (at ground level) to the top of the building is \(53^{\circ}\). If we assume that the street is level, use this information to estimate the height of the building.
39. A pilot flies in a straight path for 1 hour 30 min. She then makes a course correction, heading 10 degrees to the right of her original course, and flies 2 hours in the new direction. If she maintains a constant speed of 680 miles per hour, how far is she from her starting position?
40. Two planes leave the same airport at the same time. One flies at 20 degrees east of north at 500 miles per hour. The second flies at 30 east of south at 600 miles per hour. How far apart are the planes after 2 hours?
41. The four sequential sides of a quadrilateral have lengths 4.5 cm, 7.9 cm, 9.4 cm, and 12.9 cm. The angle between the two smallest sides is \(117^{\circ}\). What is the area of this quadrilateral?
42. The four sequential sides of a quadrilateral have lengths 5.7 cm, 7.2 cm, 9.4 cm, and 12.8 cm. The angle between the two smallest sides is \(106^{\circ}\). What is the area of this quadrilateral?
43. Three circles with radii 6, 7, and 8, all touch as shown. Find the shaded area bounded by the three circles.
44. A rectangle is inscribed in a circle of radius 10 cm as shown. Find the shaded area, inside the circle but outside the rectangle.
- Answer
-
1.
3.
5.
7.
9. \(\beta = 68^(\circ)\), \(a = 14.711\), \(c = 20.138\)
11. \(\beta = 28.096^(\circ)\), \(\gamma = 32.904^(\circ)\), \(c = 16.149\)
13. Not possible.
15. \(\beta = 64.243^(\circ)\), \(\gamma = 72.657^(\circ)\), \(c = 257.328\) OR \(\beta = 115.757^(\circ)\), \(\gamma = 21.143^(\circ)\), \(c = 97.238\)
17.
19.
21. \(c = 2.066\), \(\alpha = 52.545^(\circ)\), \(\beta = 86.255^(\circ)\)
23. \(\alpha = 11.269\), \(\beta = 27.457^(\circ)\), \(\gamma = 32.543^(\circ)\)
25. 177.562
27. 978.515 ft
29. Distance to A: 565.258ft. Distance to shore: 531.169 ft
31. 529.014
33. 173.877 feet
35. 4.642 km, 2.794 km
37. 757.963 ft
39. 2371.129 miles
41. 65.375 cm\(^(2)\)
43. 7.72

## Match 1.75 — LibreTexts: 4: Further Applications of Trigonometry
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Courses/Reedley_College/Trigonometry/04%3A_Further_Applications_of_Trigonometry

4: Further Applications of Trigonometry
In this chapter, we will explore applications of trigonometry that will enable us to solve many different kinds of problems, including finding the height of a tree. We extend topics we introduced in Trigonometric Functions and investigate applications more deeply and meaningfully.
-
- 4.1: Non-right Triangles - Law of Sines
- In this section, we will find out how to solve problems involving non-right triangles. The Law of Sines can be used to solve oblique triangles. According to the Law of Sines, the ratio of the measurement of one of the angles to the length of its opposite side equals the other two ratios of angle measure to opposite side. There are three possible cases: ASA, AAS, SSA. Depending on the information given, we can choose the appropriate equation to find the requested solution.
-
- 4.2: Non-right Triangles - Law of Cosines
- Unfortunately, while the Law of Sines enables us to address many non-right triangle cases, it does not help us with triangles where the known angle is between two known sides, a SAS (side-angle-side) triangle, or when all three sides are known, but no angles are known, a SSS (side-side-side) triangle. In this section, we will investigate another tool for solving oblique triangles described by these last two cases.
-
- 4.3: Polar Coordinates
- When we think about plotting points in the plane, we usually think of rectangular coordinates (x,y) in the Cartesian coordinate plane. However, there are other ways of writing a coordinate pair and other types of grid systems. In this section, we introduce to polar coordinates, which are points labeled (r,θ) and plotted on a polar grid. The polar grid is represented as a series of concentric circles radiating out from the pole, or the origin of the coordinate plane.
-
- 4.4: Polar Coordinates - Graphs
- A polar equation describes a relationship between r and θ on a polar grid. It is easier to graph polar equations if we can test the equations for symmetry. There are three symmetry tests that indicate whether the graph of a polar equation will exhibit symmetry. If an equation fails a symmetry test, the graph may or may not exhibit symmetry.
-
- 4.5: Polar Form of Complex Numbers
- In this section, we will focus on the mechanics of working with complex numbers: translation of complex numbers from polar form to rectangular form and vice versa, interpretation of complex numbers in the scheme of applications, and application of De Moivre’s Theorem.
-
- 4.6: Vectors
- Ground speed refers to the speed of a plane relative to the ground. Airspeed refers to the speed a plane can travel relative to its surrounding air mass. These two quantities are not the same because of the effect of wind. In an earlier section, we used triangles to solve a similar problem involving the movement of boats. Later in this section, we will find the airplane’s ground speed and bearing, while investigating another approach to problems of this type.
Thumbnail: A polar equation describes a curve on the polar grid. The graph of a polar equation can be evaluated for three types of symmetry. Ths image shows one type with a graph is symmetric with respect to the vertical line.
Contributors and Attributions
-
Jay Abramson (Arizona State University) with contributing authors. Textbook content produced by OpenStax College is licensed under a Creative Commons Attribution License 4.0 license. Download for free at https://openstax.org/details/books/precalculus .
