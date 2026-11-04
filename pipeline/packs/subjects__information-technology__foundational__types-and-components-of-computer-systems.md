# Source pack — subjects/information-technology/foundational/types-and-components-of-computer-systems
Lesson title: Types and components of computer systems
Level: foundational
Match confidence: 1.77

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.77 — UniversityPhysicsVol1-WEB § 2.2 Coordinate Systems and Components of a Vector

Learning Objectives
By the end of this section, you will be able to:
•
Describe vectors in two and three dimensions in terms of their components, using unit vectors along the
axes.
•
Distinguish between the vector components of a vector and the scalar components of a vector.
•
Explain how the magnitude of a vector is defined in terms of the components of a vector.
•
Identify the direction angle of a vector in a plane.
•
Explain the connection between polar coordinates and Cartesian coordinates in a plane.
Vectors are usually described in terms of their components in a coordinate system. Even in everyday life we
naturally invoke the concept of orthogonal projections in a rectangular coordinate system. For example, if you
ask someone for directions to a particular location, you will more likely be told to go 40 km east and 30 km
north than 50 km in the direction
north of east.
2.2 • Coordinate Systems and Components of a Vector
55

In a rectangular (Cartesian) xy-coordinate system in a plane, a point in a plane is described by a pair of
coordinates (x, y). In a similar fashion, a vector
in a plane is described by a pair of its vector coordinates. The
x-coordinate of vector
is called its x-component and the y-coordinate of vector
is called its y-component.
The vector x-component is a vector denoted by
. The vector y-component is a vector denoted by
. In the
Cartesian system, the x and y vector components of a vector are the orthogonal projections of this vector onto
the x- and y-axes, respectively. In this way, following the parallelogram rule for vector addition, each vector on
a Cartesian plane can be expressed as the vector sum of its vector components:
As illustrated in Figure 2.16, vector
is the diagonal of the rectangle where the x-component
is the side
parallel to the x-axis and the y-component
is the side parallel to the y-axis. Vector component
is
orthogonal to vector component
.
Figure 2.16
Vector
in a plane in the Cartesian coordinate system is the vector sum of its vector x- and y-components. The x-vector
component
is the orthogonal projection of vector
onto the x-axis. The y-vector component
is the orthogonal projection of vector
onto the y-axis. The numbers
and
that multiply the unit vectors are the scalar components of the vector.
It is customary to denote the positive direction on the x-axis by the unit vector
and the positive direction on
the y-axis by the unit vector
. Unit vectors of the axes,
and
, define two orthogonal directions in the plane.
As shown in Figure 2.16, the x- and y- components of a vector can now be written in terms of the unit vectors of
the axes:
The vectors
and
defined by Equation 2.11 are the vector components of vector
. The numbers
and
that define the vector components in Equation 2.11 are the scalar components of vector
. Combining
Equation 2.10 with Equation 2.11, we obtain the component form of a vector:
If we know the coordinates
of the origin point of a vector (where b stands for “beginning”) and the
coordinates
of the end point of a vector (where e stands for “end”), we can obtain the scalar
components of a vector simply by subtracting the origin point coordinates from the end point coordinates:
2.10
2.11
2.12
56
2 • Vectors
Access for free at openstax.org.

EXAMPLE 2.3
Displacement of a Mouse Pointer
A mouse pointer on the display monitor of a computer at its initial position is at point (6.0 cm, 1.6 cm) with
respect to the lower left-side corner. If you move the pointer to an icon located at point (2.0 cm, 4.5 cm), what is
the displacement vector of the pointer?
Strategy
The origin of the xy-coordinate system is the lower left-side corner of the computer monitor. Therefore, the
unit vector
on the x-axis points horizontally to the right and the unit vector
on the y-axis points vertically
upward. The origin of the displacement vector is located at point b(6.0, 1.6) and the end of the displacement
vector is located at point e(2.0, 4.5). Substitute the coordinates of these points into Equation 2.13 to find the
scalar components
and
of the displacement vector
. Finally, substitute the coordinates into Equation
2.12 to write the displacement vector in the vector component form.
Solution
We identify
,
,
, and
, where the physical unit is 1 cm. The scalar x- and
y-components of the displacement vector are
The vector component form of the displacement vector is
This solution is shown in Figure 2.17.
Figure 2.17
The graph of the displacement vector. The vector points from the origin point at b to the end point at e.
Significance
Notice that the physical unit—here, 1 cm—can be placed either with each component immediately before the
unit vector or globally for both components, as in Equation 2.14. Often, the latter way is more convenient
because it is simpler.
2.13
2.14
2.2 • Coordinate Systems and Components of a Vector
57

The vector x-component
of the displacement vector has the magnitude
because the magnitude of the unit vector is
. Notice, too, that the direction of the
x-component is
, which is antiparallel to the direction of the +x-axis; hence, the x-component vector
points to the left, as shown in Figure 2.17. The scalar x-component of vector
is
.
Similarly, the vector y-component
of the displacement vector has magnitude
because the magnitude of the unit vector is
. The direction of the y-component is
, which is parallel to
the direction of the +y-axis. Therefore, the y-component vector
points up, as seen in Figure 2.17. The scalar
y-component of vector
is
. The displacement vector
is the resultant of its two vector
components.
The vector component form of the displacement vector Equation 2.14 tells us that the mouse pointer has been
moved on the monitor 4.0 cm to the left and 2.9 cm upward from its initial position.
CHECK YOUR UNDERSTANDING 2.4
A blue fly lands on a sheet of graph paper at a point located 10.0 cm to the right of its left edge and 8.0 cm
above its bottom edge and walks slowly to a point located 5.0 cm from the left edge and 5.0 cm from the bottom
edge. Choose the rectangular coordinate system with the origin at the lower left-side corner of the paper and
find the displacement vector of the fly. Illustrate your solution by graphing.
When we know the scalar components
and
of a vector
, we can find its magnitude A and its direction
angle
. The direction angle—or direction, for short—is the angle the vector forms with the positive direction
on the x-axis. The angle
is measured in the counterclockwise direction from the +x-axis to the vector
(Figure 2.18). Because the lengths A,
, and
form a right triangle, they are related by the Pythagorean
theorem:
This equation works even if the scalar components of a vector are negative. The direction angle
of a vector
is defined via the tangent function of angle
in the triangle shown in Figure 2.18:
Figure 2.18
When the vector lies either in the first quadrant or in the fourth quadrant, where component
is positive (Figure 2.19), the
2.15
2.16
58
2 • Vectors
Access for free at openstax.org.

direction angle
in Equation 2.16) is identical to the angle
.
When the vector lies either in the first quadrant or in the fourth quadrant, where component
is positive
(Figure 2.19), the angle
in Equation 2.16 is identical to the direction angle
. For vectors in the fourth
quadrant, angle
is negative, which means that for these vectors, direction angle
is measured clockwise
from the positive x-axis. Similarly, for vectors in the second quadrant, angle
is negative. When the vector lies
in either the second or third quadrant, where component
is negative, the direction angle is
(Figure 2.19).
Figure 2.19
Scalar components of a vector may be positive or negative. Vectors in the first quadrant (I) have both scalar components
positive and vectors in the third quadrant have both scalar components negative. For vectors in quadrants II and III, the direction angle of a
vector is
.
EXAMPLE 2.4
Magnitude and Direction of the Displacement Vector
You move a mouse pointer on the display monitor from its initial position at point (6.0 cm, 1.6 cm) to an icon
located at point (2.0 cm, 4.5 cm). What are the magnitude and direction of the displacement vector of the
pointer?
Strategy
In Example 2.3, we found the displacement vector
of the mouse pointer (see Equation 2.14). We identify its
scalar components
and
and substitute into Equation 2.15 and Equation 2.16 to
find the magnitude D and direction
, respectively.
Solution
The magnitude of vector
is
The direction angle is
Vector
lies in the second quadrant, so its direction angle is
2.2 • Coordinate Systems and Components of a Vector
59

CHECK YOUR UNDERSTANDING 2.5
If the displacement vector of a blue fly walking on a sheet of graph paper is
, find its
magnitude and direction.
In many applications, the magnitudes and directions of vector quantities are known and we need to find the
resultant of many vectors. For example, imagine 400 cars moving on the Golden Gate Bridge in San Francisco
in a strong wind. Each car gives the bridge a different push in various directions and we would like to know
how big the resultant push can possibly be. We have already gained some experience with the geometric
construction of vector sums, so we know the task of finding the resultant by drawing the vectors and
measuring their lengths and angles may become intractable pretty quickly, leading to huge errors. Worries like
this do not appear when we use analytical methods. The very first step in an analytical approach is to find
vector components when the direction and magnitude of a vector are known.
Let us return to the right triangle in Figure 2.18. The quotient of the adjacent side
to the hypotenuse A is
the cosine function of direction angle
,
, and the quotient of the opposite side
to the
hypotenuse A is the sine function of
,
. When magnitude A and direction
are known, we
can solve these relations for the scalar components:
When calculating vector components with Equation 2.17, care must be taken with the angle. The direction
angle
of a vector is the angle measured counterclockwise from the positive direction on the x-axis to the
vector. The clockwise measurement gives a negative angle.
EXAMPLE 2.5
Components of Displacement Vectors
A rescue party for a missing child follows a search dog named Trooper. Trooper wanders a lot and makes many
trial sniffs along many different paths. Trooper eventually finds the child and the story has a happy ending, but
his displacements on various legs seem to be truly convoluted. On one of the legs he walks 200.0 m southeast,
then he runs north some 300.0 m. On the third leg, he examines the scents carefully for 50.0 m in the direction
west of north. On the fourth leg, Trooper goes directly south for 80.0 m, picks up a fresh scent and turns
west of south for 150.0 m. Find the scalar components of Trooper’s displacement vectors and his
displacement vectors in vector component form for each leg.
Strategy
Let’s adopt a rectangular coordinate system with the positive x-axis in the direction of geographic east, with
the positive y-direction pointed to geographic north. Explicitly, the unit vector
of the x-axis points east and
the unit vector
of the y-axis points north. Trooper makes five legs, so there are five displacement vectors. We
start by identifying their magnitudes and direction angles, then we use Equation 2.17 to find the scalar
components of the displacements and Equation 2.12 for the displacement vectors.
Solution
On the first leg, the displacement magnitude is
and the direction is southeast. For direction
angle
we can take either
measured clockwise from the east direction or
measured
counterclockwise from the east direction. With the first choice,
. With the second choice,
. We can use either one of these two angles. The components are
2.17
60
2 • Vectors
Access for free at openstax.org.

The displacement vector of the first leg is
On the second leg of Trooper’s wanderings, the magnitude of the displacement is
and the
direction is north. The direction angle is
. We obtain the following results:
On the third leg, the displacement magnitude is
and the direction is
west of north. The
direction angle measured counterclockwise from the eastern direction is
. This gives
the following answers:
On the fourth leg of the excursion, the displacement magnitude is
and the direction is south. The
direction angle can be taken as either
or
. We obtain
On the last leg, the magnitude is
and the angle is
west of south),
which gives
CHECK YOUR UNDERSTANDING 2.6
If Trooper runs 20 m west before taking a rest, what is his displacement vector?
Polar Coordinates
To describe locations of points or vectors in a plane, we need two orthogonal directions. In the Cartesian
coordinate system these directions are given by unit vectors
and
along the x-axis and the y-axis,
respectively. The Cartesian coordinate system is very convenient to use in describing displacements and
velocities of objects and the forces acting on them. However, it becomes cumbersome when we need to
describe the rotation of objects. When describing rotation, we usually work in the polar coordinate system.
In the polar coordinate system, the location of point P in a plane is given by two polar coordinates (Figure
2.20). The first polar coordinate is the radial coordinate r, which is the distance of point P from the origin. The
second polar coordinate is an angle
that the radial vector makes with some chosen direction, usually the
positive x-direction. In polar coordinates, angles are measured in radians, or rads. The radial vector is
attached at the origin and points away from the origin to point P. This radial direction is described by a unit
radial vector
. The second unit vector
is a vector orthogonal to the radial direction
. The positive
direction indicates how the angle
changes in the counterclockwise direction. In this way, a point P that has
2.2 • Coordinate Systems and Components of a Vector
61

coordinates (x, y) in the rectangular system can 

## Match 1.52 — Biology2e-WEB_ICOFkGu § 38.1 Types of Skeletal Systems

By the end of this section, you will be able to do the following:
•
Discuss the different types of skeletal systems
•
Explain the role of the human skeletal system
•
Compare and contrast different skeletal systems
Figure 38.1 Improvements in the design of prostheses have allowed for a wider range of activities
in recipients. (credit: modification of work by Stuart Grout)
INTRODUCTION The muscular and skeletal systems provide support to the body and allow for a wide
range of movement. The bones of the skeletal system protect the body’s internal organs and support the
weight of the body. The muscles of the muscular system contract and pull on the bones, allowing for
movements as diverse as standing, walking, running, and grasping items.
Injury or disease affecting the musculoskeletal system can be very debilitating. In humans, the most
common musculoskeletal diseases worldwide are caused by malnutrition. Ailments that affect the joints
are also widespread, such as arthritis, which can make movement difficult and—in advanced
cases—completely impair mobility. In severe cases in which the joint has suffered extensive damage,
joint replacement surgery may be needed.
Progress in the science of prosthesis design has resulted in the development of artificial joints, with joint
replacement surgery in the hips and knees being the most common. Replacement joints for shoulders,
elbows, and fingers are also available. Even with this progress, there is still room for improvement in the
design of prostheses. The state-of-the-art prostheses have limited durability and therefore wear out
quickly, particularly in young or active individuals. Current research is focused on the use of new
materials, such as carbon fiber, that may make prostheses more durable.
Chapter Outline

## Match 1.51 — Introduction_to_Political_Science_-_WEB § 11.3 Types of Legal Systems around the World

LEARNING OUTCOMES
By the end of this section, you will be able to:
•
Describe the different types of legal systems and explain how they differ.
•
Explain how the rule of law applies in different judicial systems.
•
Analyze how different judicial systems operate.
There are five basic types of legal systems in the world. They are civil law, common law, customary law,
religious law, and hybrid or mixed systems. Today, mixed or hybrid systems are common. Because each
system varies by country, this chapter will focus on the characteristic traits of each kind of system.
11.3 • Types of Legal Systems around the World
345

FIGURE 11.4 This map shows the different types of legal systems in place around the world.43 (attribution:
Copyright Rice University, OpenStax, under CC BY 4.0 license)
Note that before discussing different law systems, it is important to distinguish between what the term civil
means in the context of legal systems and what it means in terms of civil versus criminal laws.
Common Law Systems
The US legal system, and other legal systems that emanate from British rule, is a common law system.44
Originally, common law meant judge-made law that filled in gaps when there was no written law. Judges looked
to prior decisions to determine the unwritten judge-made law and apply it to new cases. However, today,
almost all law is in writing and enacted by a legislature as statutes. Many statutes codify established common
law, change it, or abolish it altogether, depending on the topic of the law. There are instances in which some
unwritten common law is still enforced, but these are rare.
In a common law system such as the one in the United States, the courts’ reliance on precedent is referred to
as stare decisis, or a policy of using judicial decisions made in the past to interpret written laws and
appropriately apply those laws to the facts in the present case.45 The court interprets written laws, and these
interpretations and applications of precedent from prior interpretations constitute what is meant by common
law today. Precedent is critical for interpreting later cases, and only the same or a higher court can overturn
precedent. The court process is adversarial rather than investigatory, with each side trying to win or persuade
the court to agree with its perspective.46
VIDEO
What Is Precedent?
Click to view content (https://openstax.org/books/introduction-political-science/pages/11-3-types-of-legal-
systems-around-the-world)
This video discusses precedent and its importance in common law systems.
Common law courts are adversarial; that is, there is a winner-takes-all attitude in the court. In an adversarial
system, each side determines the issues and questions it wants the court to resolve, conducts its own
investigation, and prepares and presents its own evidence. Each side calls witnesses, who are questioned
directly and by cross-examination. Each side brings out information it thinks is pertinent to prove its point. In
a criminal case, the police and prosecutor work together closely to establish their viewpoint using the
346
11 • Courts and Law
Access for free at openstax.org

government’s resources. Defendants must rely on their own resources to defend against the charges, either
hiring an attorney or using a court-appointed one. In a civil case, the procedures are similar; however, each
side must rely on its resources to prove its point. If a jury is present, it decides all factual questions while the
judge determines the legal issues and moderates the proceedings. In some cases, the judge can act as a fact
finder in place of a jury.
Civil Law Systems
Most of Europe and South America use a civil law system.47 A civil law system relies on comprehensive legal
codes that contain all laws for the country. Case law—that is, judicial decisions—is secondary to these codes.
Decisions are binding only on the parties to the case, not as a precedent for later cases on the same issues.
While attorneys will consult prior decisions when advising clients, judges are rarely bound to follow precedent.
For this reason, codes of statutes are usually more extensive and detailed than in common law systems.
In civil law systems, court cases are investigations by the court to see how the facts fit into the already
established codes applicable to the situation. The court system is set up so that the jurisdiction of each court is
a specific type of code: tax courts, administrative courts, maritime courts, constitutional courts, and so on.
The system is more inquisitorial than adversarial. The process is a series of meetings, hearings, and written
communications in which the judge takes testimony. The judge crafts the issues to be decided based on
discussions with the parties. Typically, the judge questions the witnesses and can include or exclude any
queries submitted by the attorneys when crafting questions. Finally, the judge determines the issues and
gathers the evidence before announcing a decision.48 Only at the final hearing do the attorneys and parties
make arguments to the judge. If there is a jury, its members usually are not drawn from the general public but
are selected for their expertise in the particular area in question. While juries of ordinary people are rare in
civil law systems, they are increasingly used in serious criminal cases.
These two systems, common law and civil law systems, are the most widely used legal systems in the world.
They differ in terms of the weight they give to judicial precedent and their views on the purpose of the trial
process.
Religious Systems
In a religious law system, the law relies on religious texts as its primary basis, and the courts interpret the
present facts and statutes in light of those religious texts. Many Middle Eastern countries use religious law
systems for all or part of their laws.49 For example, in Saudi Arabia, the legal system is based on sharia law,
derived from the Koran, the Islamic religious text, as well as from the Sunnah and the Hadith.50 The legislature
enacts statutes, but all are tested against Islamic tenets. Certain religious leaders can overrule any government
act, including court decisions, on religious grounds. The legal system includes general and summary sharia
courts, with some administrative tribunals for specific topics. Religious law systems do not use juries, and
criminal trials do not present defensive evidence to the same extent as in other legal systems. Each judge, a
specialist in the religious sharia text, makes their interpretation of the law and is not bound by any precedent.
Israel also uses some religious laws and courts to determine cases.51 For example, religious courts in Israel
include Jewish rabbinical courts, Islamic sharia courts, Druze religious courts, and ecclesiastical courts of the
10 recognized Christian communities. In Israel, these courts are limited to some specific issues of family law.
The secular court system decides all other matters.
Customary Systems
A customary law system is a system based on long-standing traditions in a particular community. The
traditions have become so ingrained in society that the courts recognize them as enforceable rules. However, it
is rare for customary laws to be interpreted and enforced by the government. Instead, select leaders of the
group usually implement the customary laws. As a result, customary laws are typically unwritten and revealed
only to group members. Today, customary laws are found in closed, isolated communities combined with
11.3 • Types of Legal Systems around the World
347

common or civil law systems, allowing them to exist alongside government systems in a hybrid system.
Andorra, a small country in the Pyrenees bordering Spain and France, relies partly on customary law. In
Andorra, sources of customary law include canon law, the ecclesiastical law of the Catholic Church, Castilian
law, French law, and Roman law. Andorra was invaded and under the control of other European powers at
different times in its history, and the Andorran legal system now reflects elements of each invader’s laws.
Today, Andorra is a parliamentary co-principality between the president of France and the Roman Catholic
bishop of Catalonia (Urgell). Andorra also has an elected parliament that can enact new laws.52
Common Law
Civil Law
Religious Law
Customary Law
Other Names
Judge-made law; Anglo-
American law
Continental law;
European law; Roman
law
Differs by religion;
two prominent ones
are sharia (Islamic
law) and halakha
(Jewish law)
Differs by area,
ethnicity, and tribe
Source of Law
Case law and statutes,
which may be organized
in codes
Statutes organized in
codes
Religious texts
Long-standing
customs, which
may be oral or
written
Degree of
Judicial
Independence
High; important to society
that judiciary appears to
be independent of
executive and legislature
High; important to
society that judiciary
appears to be
independent of
executive and
legislature
Wide range, from
very limited to high
Wide range, from
limited to high
Judges
Wide variety of selection
and qualification
standards
Career position
requiring training and
testing; civil servants
Religious and legal
training
Varies widely with
customs of the area
Policy-Making
Role
Due to stare decisis,
shares power with
individuals who come
before the court and with
government branches
Equal but separate
power as the enforcer
of codes
Depends on territory
and topic area;
paramount in some
cases, advisory only
in others
Depends on
territory and topic
area; paramount in
some cases,
advisory only in
others
Examples
US (except Louisiana),
UK, Canada (except
Quebec)
All European Union
countries, Quebec,
Louisiana
Saudi Arabia, Iran,
United Arab
Emirates, Israel
Guernsey, Andorra
TABLE 11.1 Differences among Major Legal Systems
The island of Guernsey is another example of a customary law system. Though it is one of the Channel Islands
off the coast of England, Guernsey is not part of the United Kingdom. Guernsey’s legal system is derived from
the medieval power of the monarch, the Duke of Normandy.53 The ancient duchy law of Normandy is an
influential source of law in Guernsey. The duchy laws developed in two periods, the Ancienne coutume of
1199–1538 and the Coutume reformée of 1538–1804.54 Guernsey’s legal system also has elements of English
common law and modern statutory law enacted by the island’s elected legislature. Guernsey enjoys almost
348
11 • Courts and Law
Access for free at openstax.org

complete autonomy over its internal affairs, and the country determines many issues based on ancient
customary laws, with elected bailiffs and jurats making decisions.55
In the United States, some customary laws may be used in tribal matters on tribal lands recognized by the US
government.56 However, the US government does exercise some control over tribal legal systems in the United
States. There is a growing worldwide movement to recognize tribal autonomy and customary legal systems.57
For example, some Maori customary law is now recognized in New Zealand.58
Hybrid or Mixed Systems
A hybrid legal system combines parts of more than one approach to create a system unique to the country.
Many countries have mixed legal systems incorporating common, civil, religious, and customary law
systems.59 For example, the US state of Louisiana has a hybrid system. Louisiana uses some common law, but
it also utilizes a civil law system for much of its state law and procedures because of its origins as a French
territory. Also, on recognized tribal lands, customary laws of the tribe may be used rather than state or federal
laws. Another example is the Philippine system, which includes French civil law, US-style common law, sharia
law, and Indigenous customary law due to its history.60 Many African countries include a parallel tribal or
ethnic legal system to adjudicate family law matters.61
FIGURE 11.5 This map shows the different types of legal systems present in Africa. (attribution: Copyright Rice
University, OpenStax, under CC BY 4.0 license)
11.3 • Types of Legal Systems around the World
349

