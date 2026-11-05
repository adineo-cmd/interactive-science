# Source pack — subjects/math/foundational/euclidean-geometry
Lesson title: Angles, Triangles & Euclidean Geometry
Level: foundational
Match confidence: 2.07

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.07 — LibreTexts: 5.2: Euclidean geometry- a brief summary
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Applied_Mathematics/The_Essence_of_Mathematics_Through_Elementary_Problems_(Borovik_and_Gardiner)/05%3A_Geometry/5.02%3A_Euclidean_geometry-_a_brief_summary

5.2: Euclidean geometry- a brief summary
Philosophy is written in this grand book - I mean the universe - which stands continually open to our gaze, but it cannot be understood unless one first learns to comprehend the language and to interpret the characters in which it is written. It is written in the language of mathematics, and its characters are triangles, circles, and other geometrical figures, without which it is humanly impossible to understand a single word of it; without these, one is wandering about in a dark labyrinth.
Galileo Galilei (1564-1642)
This section provides a detailed, but compressed, outline of an initial formalisation of school geometry - of a kind that one would like good students and all teachers to appreciate. It is unashamedly a semi -formal approach for beginners, not a strictly formal treatment (such as that provided by David Hilbert (1862-1943) in his 1899 book Foundations of Geometry, or in the more detailed exposition by Edwin Moise (1918-1998) Elementary Geometry from an Advanced Standpoint, published in 1963). In particular:
- we work with relatively informal notions of points, lines, and angles in the plane;
- we focus attention on certain simple issues which really matter at school level (such as how points, lines, line segments, and angles are referred to; the notion of a triangle as an ordered triple of vertices; the fact that the vertices of a quadrilateral must be labelled cyclically; etc.);
- we limit the formal deductive structure to just three central criteria, namely the criteria for congruence , for parallels , and for similarity , and show how they allow one to develop results and methods in a logical sequence.
We begin with the intuitive idea of points and lines in the plane. Two points A, B determine
- the line segment AB (with endpoints A and B ), and
- the line AB (which extends the line segment AB in both directions - beyond A , and beyond B ).
Three points A , B , C determine an angle ∠ ABC (between the two line segments BA and BC ).
We can then begin to build more complicated figures, such as
- a triangle ABC (with three vertices A, B, C ; three sides AB , BC , CA ; and three angles ∠ ABC at the vertex B , ∠ BCA at C , and ∠ CAB at A ),
- a quadrilateral ABCD (with four vertices A, B, C, D; and four sides AB , BC , CD , DA which meet only at their endpoints).
And so on. Two given points A, B also allow us to construct the circle with centre A , and passing through B (that is, with radius AB ).
This very limited beginning already opens up the world of ruler and compasses constructions. In particular, given a line segment AB one can draw:
- the circle with centre A , and passing through B , and
- the circle with centre B , and passing through A .
If the two circles meet at C ,
- then AB = AC (radii of the first circle), and BA = BC (radii of the second circle).
Hence we have constructed the equilateral triangle Δ ABC on the given segment AB . This construction is the very first proposition in Book 1 of the Elements of Euclid (flourished c. 300 BC). Euclid’s second proposition is presented next as a problem.
Problem 137 Given three points A, B, C, show how to construct - without measuring - a point D such that the segments AB and CD are equal (in length).
Problem 137 looks like a simple starter (where the only available construction is to produce the third vertex of an equilateral triangle on a given line segment). However, to produce a valid solution requires a clear head and a degree of ingenuity.
Given two points A, B, the process of constructing an equilateral triangle Δ ABC illustrates how we are allowed to construct new points from old.
- Whenever we construct two lines or circles that cross, the points where they cross (such as the point C in the above construction of the equilateral triangle Δ ABC ) become available for further constructions. So, if points A and B are given, then once C has been constructed, we may proceed to draw the lines AC and BC .
However, the fact that we can construct a line segment AB does not allow us to ‘measure’ the segment with a ruler, and then to use the resulting measurement to ‘copy’ the segment AB to the point C in order to construct the required point D such that AB = CD . The “ruler” in ruler and compasses constructions is used only to draw the line through two known points - not to measure. (Measuring is an approximate physical action, rather than an exact “mental construction”, and so is not really part of mathematics.) Hence in Problem 137 we have to find another way to produce a copy CD of the segment AB starting at the point C . Similarly, we can construct the circle with centre A and passing through B , but this does not allow us to use the pair of compasses to transfer distances physically (e.g. by picking up the compasses from AB and placing the compass point at C , like using the old geometrical drawing instrument that was called a pair of dividers ). In seeking the construction required in Problem 137 , we are restricted to “exact mental constructions” which may be described in terms of:
- drawing (or constructing) the line joining any two known points,
- constructing the circle with centre at a known point and passing through a known point, and
- obtaining a new point D as the intersection of two constructed lines or circles (or of a line and a circle).
If on the line AB , the point X lies between A and B, then we obtain a straight angle ∠AXB at X (or rather two straight angles at X - one on each side of the line AB ). If we assume that all straight angles are equal, then it follows easily that “vertically opposite angles are always equal”.
Problem 138 Two lines AB and CD cross at X , where X lies between A and B and between C and D . Prove that ∠ AXC =∠ BXD .
Define a right angle to be ‘half a straight angle’. Then we say that two lines which cross at a point X are perpendicular if an angle at X is a right angle (or equivalently, if all four angles at X are equal). The next step requires us to notice two things - partly motivated by experience when coordinating hand, eye and brain to construct, and to think about, physical structures.
- First we need to recognise that triangles hold the key to the analysis of more complicated shapes.
- Then we need to realise that triangles in different positions can still be “equal”, or congruent - which then focuses attention on the minimal conditions under which two triangles can be guaranteed to be congruent.
The first of these two bullet points has an important consequence - namely that solving any problem in 2- or in 3-dimensions generally reduces to working with triangles . In particular, solving problems in 3-dimensions reduces to working in some 2-dimensional cross-section of the given figure (since three points not only determine a triangle, but also determine the plane in which that triangle lies). It follows that 2-dimensional geometry holds the key to solving problems in 3-dimensions, and that working with triangles is central in all geometry .
The second bullet point forces us to think carefully about:
- what we mean by a triangle (and in particular, to understand why Δ ABC and Δ BCA are in some sense different triangles, even though they use the same three vertices and sides), and
- what it means for two triangles to be “the same”.
A triangle Δ ABC incorporates six pieces of data, or information: the three sides AB , BC , CA and the three angles ∠ ABC , ∠ BCA , ∠ CAB . We say that two (ordered) triangles Δ ABC and Δ AʹBʹCʹ are congruent (which we write as
where the order in which the vertices are listed matters) if their sides and angles “match up” in pairs, so that
As a result of drawing and experimenting with our hands, our minds may realise that certain subsets of these six conditions suffice to imply the others. In particular:
SAS-congruence criterion: if
then
(where the name “SAS” indicates that the three listed match-ups occur in the specified order S (side), A (angle), S (side) as one goes round each triangle).
SSS-congruence criterion: if
then
ASA-congruence criterion: if
then
If in a given triangle Δ ABC we have AB = AC , then we say that Δ ABC is isosceles with apex A , and base BC (iso = same, or equal; sceles = legs).
Problem 139 Let Δ ABC be an isosceles triangle with apex A . Let M be the midpoint of the base BC . Prove that Δ AMB = Δ AMC and conclude that AM is perpendicular to the base BC .
Problem 140 Construct two non-congruent triangles, Δ ABC and Δ AʹBʹCʹ , where
Conclude that there is in general no “ASS-congruence criterion”.
The congruence criteria allow one to prove basic results such as:
Claim In any isosceles triangle Δ ABC with apex A (i.e. with AB = AC ), the two base angles ∠ B and ∠ C are equal.
Proof 1 Let M be the midpoint of BC .
Then Δ AMB = Δ AMC (by the SSS-congruence criterion, since
AM = AM ,
MB = MC (by construction of M as the midpoint)
BA = CA (given)).
QED
Proof 2 Δ BAC = Δ CAB (by the SAS-congruence criterion, since BA
BA = CA (given),
∠ BAC = ∠ CAB (same angle),
AC = AB (given),
QED
We also have the converse result:
Claim In any triangle Δ ABC , if the base angles ∠ B and ∠ C are equal, then the triangle is isosceles with apex A (i.e. AB = AC ).
Proof Δ ABC = Δ ACB (by the ASA-congruence criterion, since
∠ABC = ∠ACB (given),
BC = CB , and
∠ B AC = ∠ C AB (given)).
QED
Problem 141
(i) A circle with centre O passes through the point A . The line AO meets the circle again at B . If C is a third point on the circle, prove that ∠ ACB is equal to ∠ CAB + ∠ CAB .
(ii) Conclude that, if the angles in Δ ABC add to a straight angle, then ∠ ACB is a right angle.
Once we introduce the parallel criterion, and hence can prove that the three angles in any triangle add to a straight angle, Problem 141 will guarantee that “the angle subtended on the circumference by a diameter is always a right angle”.
Problem 142 Show how to implement the basic ruler and compasses constructions:
(i) to construct the midpoint M of a given line segment AB ;
(ii) to bisect a given angle ∠ ABC ;
(iii) to drop a perpendicular from P to a line AB (that is, to locate X on the line AB, so that the two angles that PX makes with the line AB on either side of PX are equal).
Prove that your constructions do what you claim.
Problem 143 Given two points A and B .
(a) Prove that each point X on the perpendicular bisector of AB is equidistant from A and from B (that is, that XA = XB ).
(b) Prove that, if X is equidistant from A and from B , then X lies on the perpendicular bisector of AB .
Problem 143 shows that, given a line segment AB , the perpendicular bisector of AB is the locus of all points X which are equidistant from A and from B . This observation is what lay behind the construction of the circumcentre of a triangle (back in Chapter 1 , Problem 32 (a)):
Given any Δ ABC .
Let O be the point where the perpendicular bisectors of AB and BC meet.
Then OA = OB
and OB = OC .
Hence O is the centre of a circle passing through all three vertices A, B, C .
Moreover O also lies on the perpendicular bisector of CA .
This circle is called the circumcircle of Δ ABC , and O is called the circumcentre of Δ ABC . As indicated back in Problem 32 , the radius of the circumcircle of Δ ABC (called the circumradius of the triangle) is generally denoted by R. Later we will meet other circles and “centres” associated with a given triangle Δ ABC .
Before moving on it is worth extending Problem 143 to three dimensions
Problem 144 Given any two points N , S in 3D space, prove that the locus of all points X which are equidistant from N and from S form the plane perpendicular to the line NS and passing through the midpoint M of NS .
The next two fundamental results are often neglected.
Problem 145 Given any Δ ABC , if we extend the side BC beyond C to a point X , then the “exterior angle” ∠ ACX at C is greater than each of the “two interior opposite angles” ∠ A and ∠ B .
Problem 146
(a) If in Δ ABC we have AB > AC , then ∠ ACB > ∠ ABC . (“In

## Match 2.05 — LibreTexts: 9.5: Non-Euclidean Geometry
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Courses/College_of_the_Canyons/Math_100%3A_Liberal_Arts_Mathematics_(Saburo_Matsumoto)/09%3A_Selected_Topics/9.05%3A_Non-Euclidean_Geometry

9.5: Non-Euclidean Geometry
In your geometry class, you probably learned that the sum of the three angles in any triangle is 180 degrees. This is a well-known theorem in geometry—more specifically, “plane” or “Euclidean” geometry, which has served as the foundation for all learning since the time of the Greek civilization (In fact, the word “mathematics” comes from the Greek word meaning “lessons” or “things to be learned.”) But it turns out that if you go away from the “plane,” then plane geometry may not work. This gives rise to non-Euclidean geometry.
An example of Non-Euclidian geometry can be seen by drawing lines on a sphere or other round object; straight lines that are parallel at the equator can meet at the poles. This “triangle” has an angle sum of 90+90+50=230 degrees!
It is called "Non-Euclidean" because it is different from Euclidean geometry, which was developed by an ancient Greek mathematician called Euclid.
Some History…
The birth of non-Euclidean geometry was REALLY a big deal. It was truly a ground-shaking event, not only in the history of mathematics and but also in philosophy. You see, Euclid (who lived over 2300 years ago!) wrote a textbook that was so popular that practically every educated person in the world used it to study geometry for the next 2000 plus years. This subject, “Euclidean geometry” (the type of geometry you studied in high school), was so popular and dominant that no one, for over two millennia, doubted its truthfulness, questioned its authority, or thought of coming up with an alternative. Well, almost no one. The conception and arrival of non-Euclidean geometry involved three mathematicians—one very famous and two completely unknown. The story is worthy of a movie or a play. It is that dramatic. It teaches us that
- Common sense could be the greatest obstacle to finding truth.
- What stands the “test of time” may not be absolutely true.
- What many experts feel is offensive and repugnant may actually be true.
Here, a very abbreviated version of the story is presented. The reader is encouraged to find out more by doing a search under “non-Euclidean geometry.”
Euclid, who lived around 300 B.C., is best known for his book The Elements , a 13- volume masterpiece laying the foundations of geometry (and some number theory as well). This book may be the most widely read treatise in world history because no other books have been read longer or by more people, with the exception of the Bible. It was the standard book in geometry for over 2000 years, and there are over 1000 editions of the book in hundreds of languages.
It’s too bad that the notions of copyrights and intellectual properties did not exist back then. He could have been quite wealthy all the royalties he could have earned (except he would not have cared—there is a well-known story of Euclid embarrassing and humiliating one of his students who wanted to know what he would gain by learning geometry).
What made this book so good?
Well, for one thing, it was the first book that laid the foundation of deductive logic—to prove general statements (called propositions) by definitions, general assumptions, and already known propositions. If you remember your high school geometry, you may recall memorizing postulates (general assumptions) and proving theorems based on known properties and other theorems. That whole thing—which is the fundamental structure of mathematics—was first established by Euclid.
Another amazing accomplishment of Euclid was that he proved tons of propositions—465 to be exact—based on a very small number of assumptions. In fact, he started with only five axioms. What is an axiom? It is a (self-evident) statement assumed true without proof. Just as you cannot define every word you use (because each definition uses other words, each of which also needs to be defined using other words), you cannot prove everything; some statements must be assumed true at the beginning. (And they’d better be obvious to everyone so that no one would question them.) Here are the first four:
Definition: Euclid's Axioms
- A line can be drawn through any two points.
- A line can be extended indefinitely in both directions
- A circle can be drawn with any center point and any radius.
- All right angles are congruent (equal measure of 90 degrees).
They sound obvious, right? Join the club. Over 2200 years passed without anyone seriously challenging these.
But the last of his five axioms was much longer and complex than the other four, and it seems that even Euclid himself hesitated using it. It is his fifth axiom (thus often called “Euclid’s Fifth,” like “Beethoven’s Fifth”):
Euclid's Fifth Axiom (Parallel Postulate)
Given a line L and a point P that is not on the line, there is one and only one line through P parallel to L.
(Originally this statement was more like this: “If two lines both crossing another line form two interior angles on the same side whose sum is less than two right angles (180 degrees), then the two lines, when extended indefinitely on that side, will eventually meet.”)
The original statement is weird, right? This is exactly what caused the controversy and, eventually, a revolution.
Now, using the example at the beginning of this section (the “triangle” on the sphere), you may be able to see that this postulate is not true on the sphere. You saw the two vertical lines (both perpendicular to the equator) are parallel at the equator but end up meeting each other at the North Pole. In fact, on the sphere, there are no parallel lines. “Yeah, but these are not lines,” you may say. That’s understandable. You must define what a line is carefully here. But anyway, people did not figure out for a long, long time that spherical geometry is one of the models of non-Euclidean geometry. People had that much faith in Euclid.
Because this one particular axiom was so odd, many mathematicians wanted to clean up the system—more specifically, they wanted to prove that Axiom 5 follows directly from the first four axioms so they could eliminate it altogether.
But they all failed. Some of the most intelligent people who ever lived could not do it. It wasn’t just a few folks either. Ptolemy tried it in the 2nd century, and Girolamo Saccheri in the 18th century, and many others in between. In fact, so many had attempted this that in 1763, G. S. Glugel wrote a paper on how NOT to prove it.
Let’s review the problem again. What were they trying to do? Remember that axioms (postulates) are assumptions we begin with (and accept as truths), perhaps what Thomas Jefferson (who, as a political philosopher and an architect, knew Euclid’s textbook extremely well) referred to as “self-evident” truths. Everyone was fine with Axioms 1 through 4. Axiom 5, on the other hand, was quite different, lengthy, and awkward. There were over 400 statements proved by Euclid based on these five axioms. Many of them depended on Axiom 5. If someone could prove Axiom 5 from the first four axioms, then we could simply take Axiom 5 as another proposition, and all of those 400+ propositions would still be true, based on four axioms. That would be really cool.
By the way, among the more than 400 propositions were quite obvious statements like the following:
- The sum of the three angles of any triangle equals 180 degrees.
- There are bigger and smaller triangles with the same set of three angle measures (called similar triangles).
- There are 4-sided polygons with four right angles (we simply call them rectangles).
This may be hard to believe, but there were mathematicians who had dedicated their lives to solve this problem—and failed. Among them was Wolfgang Bolyai, a long-time friend and classmate of Carl F. Gauss, one of the most celebrated mathematicians of all times. After years of frustration, Wolfgang Bolyai wrote to his son John (Janos), telling him not to waste a lifetime as he himself had. These were the words of Wolfgang to his son:
I have traversed this bottomless night, which extinguished all light and joy of my life. I entreat you, leave the science of parallels alone. . . . I saw that no man can reach the bottom of the night. . . . I have traveled past all reefs on this infernal Dead Sea and have always come back with broken mast and torn sail. . . . I thoughtlessly risked my life and happiness.
Pretty depressing, right? Well, what would a boy do when his father tells him NOT to do something? Yes, that’s exactly what the son Janos did. The young, unknown student Janos Bolyai worked really hard on this problem, and within a few years he wrote back to his father:
“I have discovered such wonderful things that I was amazed…. Out of nothing I have created a strange new universe.”
A young crazy dreamer, correct? Maybe he was. In fact, he did not solve the problem. He did not prove Axiom 5 using the first four. In fact, he did exactly the opposite; he assumed that Axiom 5 was false and pursued what difference it would make. The difference turned out to be huge. The three “obvious” facts listed above would be all false in this “strange new universe” Janos Bolyai had created. Now, that was a bold statement. Who would question the existence of a rectangle? (Remember, though, this was all theoretical, so it would be possible to imagine such a world which is consistent with the four axioms plus the negation of the fifth.)
Recognizing his son’s marvelous work (maybe as a proud and biased dad), Wolfgang Bolyai decided to publish Janos’ results in 1832—but not as a book or a paper, but as an appendix to his own book he was publishing. Remember he had a famous friend? Wolfgang sent a copy of this book to Prof. Gauss, wondering what kind of reaction Gauss would have. Perhaps Bolyai was hoping that Gauss would be so impressed that he would praise the work of his son Janos.
The response? Well, in a sense, Gauss was impressed. But this is what Gauss said about the “strange new universe” created by young Janos Bolyai: “To praise it would amount to praising myself.”
What?? Gauss was saying that he had secretly been working on the same thing and came up with pretty much the same results as Janos Bolyai, except Gauss had stuffed all the notes in his drawer, hoping that perhaps someone would publish them after his death. He was afraid of ruining his reputation because it was such a crazy idea. Who would challenge the truthfulness of Axiom 5, which the entire world had accepted as absolute truth for over 2000 years? Some people claim that Gauss was especially afraid of being ridiculed by the philosophical group that had been following Immanuel Kant (1724—1804), a leading philosopher who had scoffed at anyone challenging Euclid’s axioms.
So here we have a brilliant, well-known German mathematician trying to avoid criticism, his old Hungarian friend with a brilliant son, and that inquisitive, incredibly smart son who had developed a crazy new idea. Oh, by the way, what do you think happened to this son Janos? After receiving the reply from Gauss, this gifted young man stopped studying mathematics altogether and never published anything else, except those few pages known as “the most important appendix in the history of the world.” The fact that the whole academic world pretty much ignored the appendix did not help the situation either.
Meanwhile, over in Russia (yes, in a totally different country), there was another person who was independently working on the same idea, coming up with pretty much the same results. His name is Nikolai Lobachevsky (1792—1856). Without electronic communications or social media, this Russian mathematician had no idea what Gauss and Bolyai were up to. In 1829, two years before Janos Bolyai’s appendix was published, Lobachevsky had published his work on non-Euclidean geometry in a little-known journal, written in Russian, published at Kazan University. Bolyai and Guass did not read Russian. Even if they had, they would not have known about this journal. But because of this publication, Lobachevsky became the fir

## Match 1.81 — LibreTexts: 9.4: Use Properties of Angles, Triangles, and the Pythagorean Theorem (Part 1)
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/PreAlgebra/Prealgebra_1e_(OpenStax)/09%3A_Math_Models_and_Geometry/9.04%3A_Use_Properties_of_Angles_Triangles_and_the_Pythagorean_Theorem_(Part_1)

9.4: Use Properties of Angles, Triangles, and the Pythagorean Theorem (Part 1)
- Use the properties of angles
- Use the properties of triangles
- Use the Pythagorean Theorem
Before you get started, take this readiness quiz.
- Solve: x + 3 + 6 = 11. If you missed this problem, review Example 8.1.6 .
- Solve: \(\dfrac{a}{45} = \dfrac{4}{3}\). If you missed this problem, review Example 6.5.3 .
- Simplify: \(\sqrt{36 + 64}\). If you missed this problem, review Example 5.12.4 .
So far in this chapter, we have focused on solving word problems, which are similar to many real-world applications of algebra. In the next few sections, we will apply our problem-solving strategies to some common geometry problems.
Use the Properties of Angles
Are you familiar with the phrase ‘do a 180’? It means to turn so that you face the opposite direction. It comes from the fact that the measure of an angle that makes a straight line is 180 degrees. See Figure \(\PageIndex{1}\).
Figure \(\PageIndex{1}\)
An angle is formed by two rays that share a common endpoint. Each ray is called a side of the angle and the common endpoint is called the vertex . An angle is named by its vertex. In Figure \(\PageIndex{2}\), ∠A is the angle with vertex at point A. The measure of ∠A is written m ∠ A.
Figure \(\PageIndex{2}\) - ∠ A is the angle with vertex at point A.
We measure angles in degrees, and use the symbol ° to represent degrees. We use the abbreviation m for the measure of an angle. So if ∠A is 27°, we would write m ∠ A = 27.
If the sum of the measures of two angles is 180°, then they are called supplementary angles . In Figure \(\PageIndex{3}\), each pair of angles is supplementary because their measures add to 180°. Each angle is the supplement of the other.
Figure \(\PageIndex{3}\) - The sum of the measures of supplementary angles is 180°.
If the sum of the measures of two angles is 90°, then the angles are complementary angles . In Figure \(\PageIndex{4}\), each pair of angles is complementary, because their measures add to 90°. Each angle is the complement of the other.
Figure \(\PageIndex{4}\) - The sum of the measures of complementary angles is 90°.
If the sum of the measures of two angles is 180°, then the angles are supplementary.
If ∠A and ∠B are supplementary, then m∠A + m∠B = 180°.
If the sum of the measures of two angles is 90°, then the angles are complementary.
If ∠A and ∠B are complementary, then m∠A + m∠B = 90°.
In this section and the next, you will be introduced to some common geometry formulas. We will adapt our Problem Solving Strategy for Geometry Applications. The geometry formula will name the variables and give us the equation to solve.
In addition, since these applications will all involve geometric shapes, it will be helpful to draw a figure and then label it with the information from the problem. We will include this step in the Problem Solving Strategy for Geometry Applications.
Step 1. Read the problem and make sure you understand all the words and ideas. Draw a figure and label it with the given information.
Step 2. Identify what you are looking for
Step 3. Name what you are looking for and choose a variable to represent it.
Step 4. Translate into an equation by writing the appropriate formula or model for the situation. Substitute in the given information.
Step 5. Solve the equation using good algebra techniques.
Step 6. Check the answer in the problem and make sure it makes sense.
Step 7. Answer the question with a complete sentence.
The next example will show how you can use the Problem Solving Strategy for Geometry Applications to answer questions about supplementary and complementary angles.
An angle measures 40°. Find (a) its supplement, and (b) its complement.
Solution
(a)
| Step 1. Read the problem. Draw the figure and label it with the given information. | |
| Step 2. Identify what you are looking for. | the supplement of a 40° |
| Step 3. Name . Choose a variable to represent it. | let s = the measure of the supplement |
| Step 4. Translate . Write the appropriate formula for the situation and substitute in the given information. | $$m \angle A + m \angle B = 180$$ |
| Step 5. Solve the equation. | $$\begin{split} s + 40 &= 180 \\ s &= 140 \end{split}$$ |
| Step 6. Check. | $$\begin{split} 140 + 40 &\stackrel{?}{=} 180 \\ 180 &= 180\; \checkmark \end{split}$$ |
| Step 7. Answer the question. | The supplement of the 40° angle is 140°. |
(b)
| Step 1. Read the problem. Draw the figure and label it with the given information. | |
| Step 2. Identify what you are looking for. | the complement of a 40° |
| Step 3. Name . Choose a variable to represent it. | let c = the measure of the complement |
| Step 4. Translate . Write the appropriate formula for the situation and substitute in the given information. | $$m \angle A + m \angle B = 90$$ |
| Step 5. Solve the equation. | $$\begin{split} c + 40 &= 90 \\ c &= 50 \end{split}$$ |
| Step 6. Check. | $$\begin{split} 50 + 40 &\stackrel{?}{=} 90 \\ 90 &= 90\; \checkmark \end{split}$$ |
| Step 7. Answer the question. | The supplement of the 40° angle is 50°. |
An angle measures 25°. Find (a) its supplement, and (b) its complement.
- Answer a
-
155°
- Answer b
-
65°
An angle measures 77°. Find (a) its supplement, and (b) its complement.
- Answer a
-
103°
- Answer b
-
13°
Did you notice that the words complementary and supplementary are in alphabetical order just like 90 and 180 are in numerical order?
Two angles are supplementary. The larger angle is 30° more than the smaller angle. Find the measure of both angles.
Solution
| Step 1. Read the problem. Draw the figure and label it with the given information. | |
| Step 2. Identify what you are looking for. | the measures of both angles |
| Step 3. Name . Choose a variable to represent it. |
let a = measure of the smaller angle a + 30 = measure of larger angle |
| Step 4. Translate . Write the appropriate formula for the situation and substitute in the given information. | $$m \angle A + m \angle B = 180$$ |
| Step 5. Solve the equation. | $$\begin{split} (a + 30) + a &= 180 \\ 2a + 30 &= 180 \\ 2a &= 150 \\ a &= 75\quad measure\; of\; smaller\; angle \\ a &+ 30\quad measure\; of\; larger\; angle \\ 75 &+ 30 \\ &105 \end{split}$$ |
| Step 6. Check. | $$\begin{split} m \angle A + m \angle B &= 180 \\ 75 + 105 &\stackrel{?}{=} 180 \\ 180 &= 180\; \checkmark \end{split}$$ |
| Step 7. Answer the question. | The measures of the angles are 75° and 105°. |
Two angles are supplementary. The larger angle is 100° more than the smaller angle. Find the measures of both angles.
- Answer
-
40°, 140°
Two angles are complementary. The larger angle is 40° more than the smaller angle. Find the measures of both angles.
- Answer
-
25°, 65°
Use the Properties of Triangles
What do you already know about triangles? Triangle have three sides and three angles. Triangles are named by their vertices. The triangle in Figure \(\PageIndex{5}\) is called ΔABC, read ‘triangle ABC’. We label each side with a lower case letter to match the upper case letter of the opposite vertex.
Figure \(\PageIndex{5}\) - ΔABC has vertices A, B, and C and sides a, b, and c.
The three angles of a triangle are related in a special way. The sum of their measures is 180°.
\[m \angle A + m \angle B + m \angle C = 180°\]
For any ΔABC, the sum of the measures of the angles is 180°.
\[m \angle A + m \angle B + m \angle C = 180°\]
The measures of two angles of a triangle are 55° and 82°. Find the measure of the third angle.
Solution
| Step 1. Read the problem. Draw the figure and label it with the given information. | |
| Step 2. Identify what you are looking for. | the measure of the third angle in a triangle |
| Step 3. Name . Choose a variable to represent it. | let x = the measure of the angle |
| Step 4. Translate . Write the appropriate formula for the situation and substitute in the given information. | $$m \angle A + m \angle B + m \angle C = 180$$ |
| Step 5. Solve the equation. | $$\begin{split} 55 + 82 + x &= 180 \\ 137 + x &= 180 \\ x &= 43 \end{split}$$ |
| Step 6. Check. | $$\begin{split} 55 + 82 + 43 &\stackrel{?}{=} 180 \\ 180 &= 180\; \checkmark \end{split}$$ |
| Step 7. Answer the question. | The measure of the third angle is 43 degrees. |
The measures of two angles of a triangle are 31° and 128°. Find the measure of the third angle.
- Answer
-
21°
A triangle has angles of 49° and 75°. Find the measure of the third angle.
- Answer
-
56°
Right Triangles
Some triangles have special names. We will look first at the right triangle . A right triangle has one 90° angle, which is often marked with the symbol shown in Figure \(\PageIndex{6}\).
Figure \(\PageIndex{6}\)
If we know that a triangle is a right triangle, we know that one angle measures 90° so we only need the measure of one of the other angles in order to determine the measure of the third angle.
One angle of a right triangle measures 28°. What is the measure of the third angle?
Solution
| Step 1. Read the problem. Draw the figure and label it with the given information. | |
| Step 2. Identify what you are looking for. | the measure of an angle |
| Step 3. Name . Choose a variable to represent it. | let x = the measure of the angle |
| Step 4. Translate . Write the appropriate formula for the situation and substitute in the given information. | $$m \angle A + m \angle B + m \angle C = 180$$ |
| Step 5. Solve the equation. | $$\begin{split} x + 90 + 28 &= 180 \\ x + 118 &= 180 \\ x &= 62 \end{split}$$ |
| Step 6. Check. | $$\begin{split} 180 &\stackrel{?}{=} 90 + 28 + 62 \\ 180 &= 180\; \checkmark \end{split}$$ |
| Step 7. Answer the question. | The measure of the third angle is 62°. |
One angle of a right triangle measures 56°. What is the measure of the other angle?
- Answer
-
34°
One angle of a right triangle measures 45°. What is the measure of the other angle?
- Answer
-
45°
In the examples so far, we could draw a figure and label it directly after reading the problem. In the next example, we will have to define one angle in terms of another. So we will wait to draw the figure until we write expressions for all the angles we are looking for.
The measure of one angle of a right triangle is 20° more than the measure of the smallest angle. Find the measures of all three angles.
Solution
| Step 1. Read the problem. | |
| Step 2. Identify what you are looking for. | the measures of all three angles |
| Step 3. Name . Choose a variable to represent it. Now draw the figure and label it with the given information. |
Let a = 1 st angle a + 20 = 2 nd angle 90 = 3 rd angle (the right angle)
|
| Step 4. Translate . Write the appropriate formula for the situation and substitute in the given information. | $$\begin{split} m \angle A + m \angle B + m \angle C &= 180 \\ a + (a + 20) + 90 &= 180 \end{split}$$ |
| Step 5. Solve the equation. | $$\begin{split} 2a + 110 &= 180 \\ 2a &= 70 \\ a &= 35 \quad first\; angle \\ a + &20 \quad second\; angle \\ \textcolor{red}{35} + &20 \\ &55 \\ &90 \quad third\; angle \end{split}$$ |
| Step 6. Check. | $$\begin{split} 35 + 55 + 90 &\stackrel{?}{=} 180 \\ 180 &= 180\; \checkmark \end{split}$$ |
| Step 7. Answer the question. | The three angles measure 35°, 55°, and 90°. |
The measure of one angle of a right triangle is 50° more than the measure of the smallest angle. Find the measures of all three angles.
- Answer
-
20°, 70°, 90°
The measure of one angle of a right triangle is 30° more than the measure of the smallest angle. Find the measures of all three angles.
- Answer
-
30°, 60°, 90°
Similar Triangles
When we use a map to plan a trip, a sketch to build a bookcase, or a pattern to sew a dress, we are working with similar figures. In geometry, if two figures have exactly the same shape but different sizes, we say they are similar figures . One is a scale model of the other. The corresponding sides of the two figures have the same ratio, and all their corresponding angles are have the same measures.
The two triangles in Figure \(\PageIn
