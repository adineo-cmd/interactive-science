# Source pack — subjects/physics/foundational/newtons-laws
Lesson title: Newton's Three Laws
Level: foundational
Match confidence: 2.39

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.39 — APCollegePhysics-OP_js6ZFp7 § 4.7 Further Applications of Newton's Laws of Motion

Learning Objectives
By the end of this section, you will be able to:
•
Apply problem-solving techniques to solve for quantities in more complex systems of forces.
•
Integrate concepts from kinematics to solve problems using Newton's laws of motion.
The information presented in this section supports the following AP® learning objectives and science practices:
•
3.A.2.1 The student is able to represent forces in diagrams or mathematically using appropriately labeled vectors with
magnitude, direction, and units during the analysis of a situation. (S.P. 1.1)
•
3.A.3.1 The student is able to analyze a scenario and make claims (develop arguments, justify assertions) about the
forces exerted on an object by other objects for different types of forces or components of forces. (S.P. 6.4, 7.2)
•
3.A.3.3 The student is able to describe a force as an interaction between two objects and identify both objects for any
force. (S.P. 1.4)
•
3.B.1.1 The student is able to predict the motion of an object subject to forces exerted by several objects using an
application of Newton's second law in a variety of physical situations with acceleration in one dimension. (S.P. 6.4, 7.2)
•
3.B.1.3 The student is able to re-express a free-body diagram representation into a mathematical representation and
solve the mathematical representation for the acceleration of the object. (S.P. 1.5, 2.2)
•
3.B.2.1 The student is able to create and use free-body diagrams to analyze physical situations to solve problems with
motion qualitatively and quantitatively. (S.P. 1.1, 1.4, 2.2)
There are many interesting applications of Newton’s laws of motion, a few more of which are presented in this section. These
serve also to illustrate some further subtleties of physics and to help build problem-solving skills.
Example 4.7 Drag Force on a Barge
Suppose two tugboats push on a barge at different angles, as shown in Figure 4.23. The first tugboat exerts a force of
2.7×105 N in the x-direction, and the second tugboat exerts a force of 3.6×105 N in the y-direction.
Chapter 4 | Dynamics: Force and Newton's Laws of Motion
169

Figure 4.23 (a) A view from above of two tugboats pushing on a barge. (b) The free-body diagram for the ship contains only forces acting in the
plane of the water. It omits the two vertical forces—the weight of the barge and the buoyant force of the water supporting it cancel and are not
shown. Since the applied forces are perpendicular, the x- and y-axes are in the same direction as Fx and Fy . The problem quickly becomes a
one-dimensional problem along the direction of Fapp , since friction is in the direction opposite to Fapp .
If the mass of the barge is 5.0×106 kg and its acceleration is observed to be 7.5×10−2 m/s2 in the direction shown,
what is the drag force of the water on the barge resisting the motion? (Note: drag force is a frictional force exerted by fluids,
such as air or water. The drag force opposes the motion of the object.)
Strategy
The directions and magnitudes of acceleration and the applied forces are given in Figure 4.23(a). We will define the total
force of the tugboats on the barge as Fapp so that:
(4.59)
Fapp=Fx + Fy
Since the barge is flat bottomed, the drag of the water FD will be in the direction opposite to Fapp , as shown in the free-
body diagram in Figure 4.23(b). The system of interest here is the barge, since the forces on it are given as well as its
acceleration. Our strategy is to find the magnitude and direction of the net applied force Fapp , and then apply Newton’s
second law to solve for the drag force FD .
Solution
Since Fx and Fy are perpendicular, the magnitude and direction of Fapp are easily found. First, the resultant magnitude
is given by the Pythagorean theorem:
(4.60)
Fapp =
Fx2 + Fy2
Fapp =
(2.7×105 N)2 + (3.6×105 N)2 = 4.5×105 N.
The angle is given by
(4.61)
θ = tan−1⎛
⎝
Fy
Fx
⎞
⎠
θ = tan−1⎛
⎝
3.6×105 N
2.7×105 N
⎞
⎠ = 53º,
which we know, because of Newton’s first law, is the same direction as the acceleration. FD is in the opposite direction of
Fapp , since it acts to slow down the acceleration. Therefore, the net external force is in the same direction as Fapp , but its
magnitude is slightly less than Fapp . The problem is now one-dimensional. From Figure 4.23(b), we can see that
(4.62)
Fnet = Fapp − FD.
But Newton’s second law states that
(4.63)
Fnet = ma.
Thus,
(4.64)
Fapp − FD = ma.
170
Chapter 4 | Dynamics: Force and Newton's Laws of Motion
This OpenStax book is available for free at http://cnx.org/content/col11844/1.14

This can be solved for the magnitude of the drag force of the water FD in terms of known quantities:
(4.65)
FD = Fapp − ma.
Substituting known values gives
(4.66)
FD = (4.5×105 N) − (5.0×106 kg)(7.5×10–2 m/s2 ) = 7.5×104 N.
The direction of FD has already been determined to be in the direction opposite to Fapp , or at an angle of 53º south of
west.
Discussion
The numbers used in this example are reasonable for a moderately large barge. It is certainly difficult to obtain larger
accelerations with tugboats, and small speeds are desirable to avoid running the barge into the docks. Drag is relatively
small for a well-designed hull at low speeds, consistent with the answer to this example, where FD is less than 1/600th of
the weight of the ship.
In the earlier example of a tightrope walker we noted that the tensions in wires supporting a mass were equal only because the
angles on either side were equal. Consider the following example, where the angles are not equal; slightly more trigonometry is
involved.
Example 4.8 Different Tensions at Different Angles
Consider the traffic light (mass 15.0 kg) suspended from two wires as shown in Figure 4.24. Find the tension in each wire,
neglecting the masses of the wires.
Chapter 4 | Dynamics: Force and Newton's Laws of Motion
171

Figure 4.24 A traffic light is suspended from two wires. (b) Some of the forces involved. (c) Only forces acting on the system are shown here. The
free-body diagram for the traffic light is also shown. (d) The forces projected onto vertical (y) and horizontal (x) axes. The horizontal components
of the tensions must cancel, and the sum of the vertical components of the tensions must equal the weight of the traffic light. (e) The free-body
diagram shows the vertical and horizontal forces acting on the traffic light.
Strategy
The system of interest is the traffic light, and its free-body diagram is shown in Figure 4.24(c). The three forces involved are
not parallel, and so they must be projected onto a coordinate system. The most convenient coordinate system has one axis
vertical and one horizontal, and the vector projections on it are shown in part (d) of the figure. There are two unknowns in
this problem ( T1 and T2 ), so two equations are needed to find them. These two equations come from applying Newton’s
second law along the vertical and horizontal axes, noting that the net external force is zero along each axis because
acceleration is zero.
Solution
First consider the horizontal or x-axis:
(4.67)
Fnetx = T2x − T1x = 0.
Thus, as you might expect,
172
Chapter 4 | Dynamics: Force and Newton's Laws of Motion
This OpenStax book is available for free at http://cnx.org/content/col11844/1.14

(4.68)
T1x = T2x.
This gives us the following relationship between T1 and T2 :
(4.69)
T1 cos (30º) = T2 cos (45º).
Thus,
(4.70)
T2 = (1.225)T1.
Note that T1 and T2 are not equal in this case, because the angles on either side are not equal. It is reasonable that T2
ends up being greater than T1 , because it is exerted more vertically than T1 .
Now consider the force components along the vertical or y-axis:
(4.71)
Fnet y = T1y + T2y − w = 0.
This implies
(4.72)
T1y + T2y = w.
Substituting the expressions for the vertical components gives
(4.73)
T1 sin (30º) + T2 sin (45º) = w.
There are two unknowns in this equation, but substituting the expression for T2 in terms of T1 reduces this to one
equation with one unknown:
(4.74)
T1(0.500) + (1.225T1)(0.707) = w = mg,
which yields
(4.75)
(1.366)T1 = (15.0 kg)(9.80 m/s2).
Solving this last equation gives the magnitude of T1 to be
(4.76)
T1 = 108 N.
Finally, the magnitude of T2 is determined using the relationship between them, T2 = 1.225 T1 , found above. Thus we
obtain
(4.77)
T2 = 132 N.
Discussion
Both tensions would be larger if both wires were more horizontal, and they will be equal if and only if the angles on either
side are the same (as they were in the earlier example of a tightrope walker).
The bathroom scale is an excellent example of a normal force acting on a body. It provides a quantitative reading of how much it
must push upward to support the weight of an object. But can you predict what you would see on the dial of a bathroom scale if
you stood on it during an elevator ride? Will you see a value greater than your weight when the elevator starts up? What about
when the elevator moves upward at a constant speed: will the scale still read more than your weight at rest? Consider the
following example.
Example 4.9 What Does the Bathroom Scale Read in an Elevator?
Figure 4.25 shows a 75.0-kg man (weight of about 165 lb) standing on a bathroom scale in an elevator. Calculate the scale
reading: (a) if the elevator accelerates upward at a rate of 1.20 m/s2 , and (b) if the elevator moves upward at a constant
speed of 1 m/s.
Chapter 4 | Dynamics: Force and Newton's Laws of Motion
173

Figure 4.25 (a) The various forces acting when a person stands on a bathroom scale in an elevator. The arrows are approximately correct for
when the elevator is accelerating upward—broken arrows represent forces too large to be drawn to scale. T is the tension in the supporting
cable, w is the weight of the person, ws is the weight of the scale, we is the weight of the elevator, Fs is the force of the scale on the
person, Fp is the force of the person on the scale, Ft is the force of the scale on the floor of the elevator, and N is the force of the floor
upward on the scale. (b) The free-body diagram shows only the external forces acting on the designated system of interest—the person.
Strategy
If the scale is accurate, its reading will equal Fp , the magnitude of the force the person exerts downward on it. Figure
4.25(a) shows the numerous forces acting on the elevator, scale, and person. It makes this one-dimensional problem look
much more formidable than if the person is chosen to be the system of interest and a free-body diagram is drawn as in
Figure 4.25(b). Analysis of the free-body diagram using Newton’s laws can produce answers to both parts (a) and (b) of this
example, as well as some other questions that might arise. The only forces acting on the person are his weight w and the
upward force of the scale Fs . According to Newton’s third law Fp and Fs are equal in magnitude and opposite in
direction, so that we need to find Fs in order to find what the scale reads. We can do this, as usual, by applying Newton’s
second law,
(4.78)
Fnet = ma.
From the free-body diagram we see that Fnet = Fs − w , so that
(4.79)
Fs − w = ma.
Solving for Fs gives an equation with only one unknown:
(4.80)
Fs = ma + w,
or, because w = mg , simply
(4.81)
Fs = ma + mg.
No assumptions were made about the acceleration, and so this solution should be valid for a variety of accelerations in
addition to the ones in this exercise.
Solution for (a)
174
Chapter 4 | Dynamics: Force and Newton's Laws of Motion
This OpenStax book is available for free at http://cnx.org/content/col11844/1.14

In this part of the problem, a = 1.20 m/s2 , so that
(4.82)
Fs = (75.0 kg)(1.20 m/s2 ) + (75.0 kg)(9.80 m/s2),
yielding
(4.83)
Fs = 825 N.
Discussion for (a)
This is about 185 lb. What would the scale have read if he were stationary? Since his acceleration would be zero, the force
of the scale would be equal to his weight:
(4.84)
Fnet = ma = 0 = Fs − w
Fs
= w = mg
Fs
= (75.0 kg)(9.80 m/s2)
Fs
= 735 N.
So, the scale reading in the elevator is greater than his 735-N (165 lb) weight. This means that the scale is pushing up on
the person with a force greater than his weight, as it must in order to accelerate him upward. Clearly, the greater the
acceleration of the elevator, the greater the scale reading, consistent with what you feel in rapidly accelerating versus slowly
accelerating elevators.
Solution for (b)
Now, what happens when the elevator reaches a constant upward velocity? Will the scale still read more than his weight?
For any constant velocity—up, down, or stationary—acceleration is zero because a = Δv
Δt , and Δv = 0 .
Thus,
(4.85)
Fs = ma + mg = 0 + mg.
Now
(4.86)
Fs = (75.0 kg)(9.80 m/s2),
which gives
(4.87)
Fs = 735 N.
Discussion for (b)
The scale reading is 735 N, which equals the person’s weight. This will be the case whenever the elevator has a constant
velocity—moving up, moving down, or stationary.
The solution to the previous example also applies to an elevator accelerating downward, as mentioned. When an elevator
accelerates downward, a is negative, and the scale reading is less than the weight of the person, until a constant downward
velocity is reached, at which time the scale reading again becomes equal to the person’s weight. If the elevator is in free-fall and
accelerating downward at g , then the scale reading will be zero and the person will appear to be weightless.
Integrating Concepts: Newton’s Laws of Motion and Kinematics
Physics is most interesting and most powerful when applied to general situations that involve more than a narrow set of physical
principles. Newton’s laws of motion can also be integrated with other concepts that have been discussed previously in this text to
solve problems of motion. For example, forces produce accelerations, a topic of kinematics, and hence the relevance of earlier
chapters. When approaching problems that involve various types of forces, acceleration, velocity, and/or position, use the
following steps to approach the problem:
Problem-Solving Strategy
Step 1. Identify which physical principl

## Match 2.39 — College_Physics_for_AP_Courses_2e-WEB_DkhNbxV § 4.7 Further Applications of Newton’s Laws of Motion

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Apply problem-solving techniques to solve for quantities in more complex systems of forces.
•
Integrate concepts from kinematics to solve problems using Newton's laws of motion.
There are many interesting applications of Newton’s laws of motion, a few more of which are presented in this
section. These serve also to illustrate some further subtleties of physics and to help build problem-solving skills.
EXAMPLE 4.7
Drag Force on a Barge
Suppose two tugboats push on a barge at different angles, as shown in Figure 4.21. The first tugboat exerts a force
of
in the x-direction, and the second tugboat exerts a force of
in the y-direction.
FIGURE 4.21 (a) A view from above of two tugboats pushing on a barge. (b) The free-body diagram for the ship contains only forces acting
in the plane of the water. It omits the two vertical forces—the weight of the barge and the buoyant force of the water supporting it cancel
and are not shown. Since the applied forces are perpendicular, the x- and y-axes are in the same direction as
and
. The problem
quickly becomes a one-dimensional problem along the direction of
, since friction is in the direction opposite to
.
If the mass of the barge is
and its acceleration is observed to be
in the direction
APPLYING NEWTON’S SECOND LAW
Before you write net force equations, it is critical to determine whether the system is accelerating in a particular
direction. If the acceleration is zero in a particular direction, then the net force is zero in that direction. Similarly,
if the acceleration is nonzero in a particular direction, then the net force is described by the equation:
.
For example, if the system is accelerating in the horizontal direction, but it is not accelerating in the vertical
direction, then you will have the following conclusions:
You will need this information in order to determine unknown forces acting in a system.
4.57
4.58
180
4 • Dynamics: Force and Newton's Laws of Motion
Access for free at openstax.org

shown, what is the drag force of the water on the barge resisting the motion? (Note: drag force is a frictional force
exerted by fluids, such as air or water. The drag force opposes the motion of the object.)
Strategy
The directions and magnitudes of acceleration and the applied forces are given in Figure 4.21(a). We will define the
total force of the tugboats on the barge as
so that:
Since the barge is flat bottomed, the drag of the water
will be in the direction opposite to
, as shown in the
free-body diagram in Figure 4.21(b). The system of interest here is the barge, since the forces on it are given as well
as its acceleration. Our strategy is to find the magnitude and direction of the net applied force
, and then apply
Newton’s second law to solve for the drag force
.
Solution
Since
and
are perpendicular, the magnitude and direction of
are easily found. First, the resultant
magnitude is given by the Pythagorean theorem:
The angle is given by
which we know, because of Newton’s first law, is the same direction as the acceleration.
is in the opposite
direction of
, since it acts to slow down the acceleration. Therefore, the net external force is in the same
direction as
, but its magnitude is slightly less than
. The problem is now one-dimensional. From Figure
4.21(b), we can see that
But Newton’s second law states that
Thus,
This can be solved for the magnitude of the drag force of the water
in terms of known quantities:
Substituting known values gives
The direction of
has already been determined to be in the direction opposite to
, or at an angle of
south
of west.
Discussion
The numbers used in this example are reasonable for a moderately large barge. It is certainly difficult to obtain
larger accelerations with tugboats, and small speeds are desirable to avoid running the barge into the docks. Drag is
relatively small for a well-designed hull at low speeds, consistent with the answer to this example, where
is less
than 1/600th of the weight of the ship.
4.59
4.60
4.61
4.62
4.63
4.64
4.65
4.66
4.7 • Further Applications of Newton’s Laws of Motion
181

In the earlier example of a tightrope walker we noted that the tensions in wires supporting a mass were equal only
because the angles on either side were equal. Consider the following example, where the angles are not equal;
slightly more trigonometry is involved.
EXAMPLE 4.8
Different Tensions at Different Angles
Consider the traffic light (mass 15.0 kg) suspended from two wires as shown in Figure 4.22. Find the tension in each
wire, neglecting the masses of the wires.
FIGURE 4.22 A traffic light is suspended from two wires. (b) Some of the forces involved. (c) Only forces acting on the system are shown
here. The free-body diagram for the traffic light is also shown. (d) The forces projected onto vertical (y) and horizontal (x) axes. The
horizontal components of the tensions must cancel, and the sum of the vertical components of the tensions must equal the weight of the
traffic light. (e) The free-body diagram shows the vertical and horizontal forces acting on the traffic light.
182
4 • Dynamics: Force and Newton's Laws of Motion
Access for free at openstax.org

Strategy
The system of interest is the traffic light, and its free-body diagram is shown in Figure 4.22(c). The three forces
involved are not parallel, and so they must be projected onto a coordinate system. The most convenient coordinate
system has one axis vertical and one horizontal, and the vector projections on it are shown in part (d) of the figure.
There are two unknowns in this problem (
and
), so two equations are needed to find them. These two
equations come from applying Newton’s second law along the vertical and horizontal axes, noting that the net
external force is zero along each axis because acceleration is zero.
Solution
First consider the horizontal or x-axis:
Thus, as you might expect,
This gives us the following relationship between
and
:
Thus,
Note that
and
are not equal in this case, because the angles on either side are not equal. It is reasonable that
ends up being greater than
, because it is exerted more vertically than
.
Now consider the force components along the vertical or y-axis:
This implies
Substituting the expressions for the vertical components gives
There are two unknowns in this equation, but substituting the expression for
in terms of
reduces this to one
equation with one unknown:
which yields
Solving this last equation gives the magnitude of
to be
Finally, the magnitude of
is determined using the relationship between them,
= 1.225
, found above. Thus
we obtain
Discussion
Both tensions would be larger if both wires were more horizontal, and they will be equal if and only if the angles on
either side are the same (as they were in the earlier example of a tightrope walker).
The bathroom scale is an excellent example of a normal force acting on a body. It provides a quantitative reading of
how much it must push upward to support the weight of an object. But can you predict what you would see on the
4.67
4.68
4.69
4.70
4.71
4.72
4.73
4.74
4.75
4.76
4.77
4.7 • Further Applications of Newton’s Laws of Motion
183

dial of a bathroom scale if you stood on it during an elevator ride? Will you see a value greater than your weight
when the elevator starts up? What about when the elevator moves upward at a constant speed: will the scale still
read more than your weight at rest? Consider the following example.
EXAMPLE 4.9
What Does the Bathroom Scale Read in an Elevator?
Figure 4.23 shows a 75.0-kg man (weight of about 165 lb) standing on a bathroom scale in an elevator. Calculate the
scale reading: (a) if the elevator accelerates upward at a rate of
, and (b) if the elevator moves upward at a
constant speed of 1 m/s.
FIGURE 4.23 (a) The various forces acting when a person stands on a bathroom scale in an elevator. The arrows are approximately correct
for when the elevator is accelerating upward—broken arrows represent forces too large to be drawn to scale.
is the weight of the scale,
is the weight of the elevator,
is the force of the scale on the person,
is the force of the person on the scale,
is the force of the
scale on the floor of the elevator, and
is the force of the floor upward on the scale. (b) The free-body diagram shows only the external
forces acting on the designated system of interest—the person.
Strategy
If the scale is accurate, its reading will equal
, the magnitude of the force the person exerts downward on it.
Figure 4.23(a) shows the numerous forces acting on the elevator, scale, and person. It makes this one-dimensional
problem look much more formidable than if the person is chosen to be the system of interest and a free-body
diagram is drawn as in Figure 4.23(b). Analysis of the free-body diagram using Newton’s laws can produce answers
to both parts (a) and (b) of this example, as well as some other questions that might arise. The only forces acting on
the person are his weight
and the upward force of the scale
. According to Newton’s third law
and
are
equal in magnitude and opposite in direction, so that we need to find
in order to find what the scale reads. We
can do this, as usual, by applying Newton’s second law,
From the free-body diagram we see that
, so that
4.78
184
4 • Dynamics: Force and Newton's Laws of Motion
Access for free at openstax.org

Solving for
gives an equation with only one unknown:
or, because
, simply
No assumptions were made about the acceleration, and so this solution should be valid for a variety of accelerations
in addition to the ones in this exercise.
Solution for (a)
In this part of the problem,
, so that
yielding
Discussion for (a)
This is about 185 lb. What would the scale have read if he were stationary? Since his acceleration would be zero, the
force of the scale would be equal to his weight:
So, the scale reading in the elevator is greater than his 735-N (165 lb) weight. This means that the scale is pushing
up on the person with a force greater than his weight, as it must in order to accelerate him upward. Clearly, the
greater the acceleration of the elevator, the greater the scale reading, consistent with what you feel in rapidly
accelerating versus slowly accelerating elevators.
Solution for (b)
Now, what happens when the elevator reaches a constant upward velocity? Will the scale still read more than his
weight? For any constant velocity—up, down, or stationary—acceleration is zero because
, and
.
Thus,
Now
which gives
Discussion for (b)
The scale reading is 735 N, which equals the person’s weight. This will be the case whenever the elevator has a
constant velocity—moving up, moving down, or stationary.
The solution to the previous example also applies to an elevator accelerating downward, as mentioned. When an
elevator accelerates downward,
is negative, and the scale reading is less than the weight of the person, until a
constant downward velocity is reached, at which time the scale reading again becomes equal to the person’s weight.
If the elevator is in free-fall and accelerating downward at
, then the scale reading will be zero and the person will
appear to be weightless.
4.79
4.80
4.81
4.82
4.83
4.84
4.85
4.86
4.87
4.7 • Further Applications of Newton’s Laws of Motion
185

Integrating Concepts: Newton’s Laws of Motion and Kinematics
Physics is most interesting and most powerful when applied to general situations that involve more than a narrow
set of physical principles. Newton’s laws of motion can also be integrated with other concepts that have been
discussed previously in this text to solve problems of motion. For example, forces produce accelerations, a topic of
kinematics, and hence the relevance of earlier chapters. When approaching problems that involve various types of
forces, acceleration, velocity, and/or position, use the following steps to approach the problem:
Problem-Solving Strategy
Step 1. Identify which physical principles are involved. Listing the givens and the quantities to be calculated will
allow you to identify the principles involved.
Step 2. Solve the problem using strategies outlined in the text. If these are available for the specific topic, you
should refer to them. You should also refer to the sections of the text that deal with a particular topic. The following
worked example illustrates how these strategies are applied to an integrated concept problem.
EXAMPLE 4.10
What Force Must a Soccer Player Exert to Reach Top Speed?
A soccer player starts from rest and accelerates forward, reaching a velocity of 8.00 m/s in 2.50 s. (a) What was his
average acceleration? (b) What average force did he exert backward on the ground to achieve this acceleration? The
player’s mass is 70.0 kg, and air resistance is negligible.
Strategy
1.
To solve an integrated concept problem, we must first identify the physical principles involved and identify the
chapters in which they are found. Part (a) of this example considers acceleration along a straight line. This is a
topic of kinematics. Part (b) deals with force, a topic of dynamics found in this chapter.
2.
The following solutions to each part of the example illustrate how the specific problem-solving strategies are
applied. These involve identifying knowns and unknowns, checking to see if the answer is reasonable, and so
forth.
Solution for (a)
We are given the initial and final velocities (zero and 8.00 m/s forward); thus, the change in velocity is
. We are given the elapsed time, and so
. The unknown is acceleration, which can be
found from its definition:
Substituting the known values yields
Discussion for (a)
This is an attainable acceleration for an athlete in good condition.
Solution for (b)
Here we are asked to find the average force the player exerts backward to achieve this forward acceleration.
Neglecting air resistance, this would be equal in magnitude to the net external force on the player, since this force
causes his acceleration. Since we now know

## Match 2.39 — College_Physics_2e-WEB_7Zesafu § 4.7 Further Applications of Newton’s Laws of Motion

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Apply problem-solving techniques to solve for quantities in more complex systems of forces.
•
Integrate concepts from kinematics to solve problems using Newton's laws of motion.
There are many interesting applications of Newton’s laws of motion, a few more of which are presented in this
section. These serve also to illustrate some further subtleties of physics and to help build problem-solving skills.
EXAMPLE 4.7
Drag Force on a Barge
Suppose two tugboats push on a barge at different angles, as shown in Figure 4.21. The first tugboat exerts a force
of
in the x-direction, and the second tugboat exerts a force of
in the y-direction.
FIGURE 4.21 (a) A view from above of two tugboats pushing on a barge. (b) The free-body diagram for the ship contains only forces acting
in the plane of the water. It omits the two vertical forces—the weight of the barge and the buoyant force of the water supporting it cancel
and are not shown. Since the applied forces are perpendicular, the x- and y-axes are in the same direction as
and
. The problem
quickly becomes a one-dimensional problem along the direction of
, since friction is in the direction opposite to
.
If the mass of the barge is
and its acceleration is observed to be
in the direction
Applying Newton’s Second Law
Before you write net force equations, it is critical to determine whether the system is accelerating in a particular
direction. If the acceleration is zero in a particular direction, then the net force is zero in that direction. Similarly,
if the acceleration is nonzero in a particular direction, then the net force is described by the equation:
.
For example, if the system is accelerating in the horizontal direction, but it is not accelerating in the vertical
direction, then you will have the following conclusions:
You will need this information in order to determine unknown forces acting in a system.
4.57
4.58
172
4 • Dynamics: Force and Newton's Laws of Motion
Access for free at openstax.org

shown, what is the drag force of the water on the barge resisting the motion? (Note: drag force is a frictional force
exerted by fluids, such as air or water. The drag force opposes the motion of the object.)
Strategy
The directions and magnitudes of acceleration and the applied forces are given in Figure 4.21(a). We will define the
total force of the tugboats on the barge as
so that:
Since the barge is flat bottomed, the drag of the water
will be in the direction opposite to
, as shown in the
free-body diagram in Figure 4.21(b). The system of interest here is the barge, since the forces on it are given as well
as its acceleration. Our strategy is to find the magnitude and direction of the net applied force
, and then apply
Newton’s second law to solve for the drag force
.
Solution
Since
and
are perpendicular, the magnitude and direction of
are easily found. First, the resultant
magnitude is given by the Pythagorean theorem:
The angle is given by
which we know, because of Newton’s first law, is the same direction as the acceleration.
is in the opposite
direction of
, since it acts to slow down the acceleration. Therefore, the net external force is in the same
direction as
, but its magnitude is slightly less than
. The problem is now one-dimensional. From Figure
4.21(b), we can see that
But Newton’s second law states that
Thus,
This can be solved for the magnitude of the drag force of the water
in terms of known quantities:
Substituting known values gives
The direction of
has already been determined to be in the direction opposite to
, or at an angle of
south
of west.
Discussion
The numbers used in this example are reasonable for a moderately large barge. It is certainly difficult to obtain
larger accelerations with tugboats, and small speeds are desirable to avoid running the barge into the docks. Drag is
relatively small for a well-designed hull at low speeds, consistent with the answer to this example, where
is less
than 1/600th of the weight of the ship.
4.59
4.60
4.61
4.62
4.63
4.64
4.65
4.66
4.7 • Further Applications of Newton’s Laws of Motion
173

In the earlier example of a tightrope walker we noted that the tensions in wires supporting a mass were equal only
because the angles on either side were equal. Consider the following example, where the angles are not equal;
slightly more trigonometry is involved.
EXAMPLE 4.8
Different Tensions at Different Angles
Consider the traffic light (mass 15.0 kg) suspended from two wires as shown in Figure 4.22. Find the tension in each
wire, neglecting the masses of the wires.
FIGURE 4.22 A traffic light is suspended from two wires. (b) Some of the forces involved. (c) Only forces acting on the system are shown
here. The free-body diagram for the traffic light is also shown. (d) The forces projected onto vertical (y) and horizontal (x) axes. The
horizontal components of the tensions must cancel, and the sum of the vertical components of the tensions must equal the weight of the
traffic light. (e) The free-body diagram shows the vertical and horizontal forces acting on the traffic light.
174
4 • Dynamics: Force and Newton's Laws of Motion
Access for free at openstax.org

Strategy
The system of interest is the traffic light, and its free-body diagram is shown in Figure 4.22(c). The three forces
involved are not parallel, and so they must be projected onto a coordinate system. The most convenient coordinate
system has one axis vertical and one horizontal, and the vector projections on it are shown in part (d) of the figure.
There are two unknowns in this problem (
and
), so two equations are needed to find them. These two
equations come from applying Newton’s second law along the vertical and horizontal axes, noting that the net
external force is zero along each axis because acceleration is zero.
Solution
First consider the horizontal or x-axis:
Thus, as you might expect,
This gives us the following relationship between
and
:
Thus,
Note that
and
are not equal in this case, because the angles on either side are not equal. It is reasonable that
ends up being greater than
, because it is exerted more vertically than
.
Now consider the force components along the vertical or y-axis:
This implies
Substituting the expressions for the vertical components gives
There are two unknowns in this equation, but substituting the expression for
in terms of
reduces this to one
equation with one unknown:
which yields
Solving this last equation gives the magnitude of
to be
Finally, the magnitude of
is determined using the relationship between them,
= 1.225
, found above. Thus
we obtain
Discussion
Both tensions would be larger if both wires were more horizontal, and they will be equal if and only if the angles on
either side are the same (as they were in the earlier example of a tightrope walker).
The bathroom scale is an excellent example of a normal force acting on a body. It provides a quantitative reading of
how much it must push upward to support the weight of an object. But can you predict what you would see on the
4.67
4.68
4.69
4.70
4.71
4.72
4.73
4.74
4.75
4.76
4.77
4.7 • Further Applications of Newton’s Laws of Motion
175

dial of a bathroom scale if you stood on it during an elevator ride? Will you see a value greater than your weight
when the elevator starts up? What about when the elevator moves upward at a constant speed: will the scale still
read more than your weight at rest? Consider the following example.
EXAMPLE 4.9
What Does the Bathroom Scale Read in an Elevator?
Figure 4.23 shows a 75.0-kg man (weight of about 165 lb) standing on a bathroom scale in an elevator. Calculate the
scale reading: (a) if the elevator accelerates upward at a rate of
, and (b) if the elevator moves upward at a
constant speed of 1 m/s.
FIGURE 4.23 (a) The various forces acting when a person stands on a bathroom scale in an elevator. The arrows are approximately correct
for when the elevator is accelerating upward—broken arrows represent forces too large to be drawn to scale.
is the weight of the scale,
is the weight of the elevator,
is the force of the scale on the person,
is the force of the person on the scale,
is the force of the
scale on the floor of the elevator, and
is the force of the floor upward on the scale. (b) The free-body diagram shows only the external
forces acting on the designated system of interest—the person.
Strategy
If the scale is accurate, its reading will equal
, the magnitude of the force the person exerts downward on it.
Figure 4.23(a) shows the numerous forces acting on the elevator, scale, and person. It makes this one-dimensional
problem look much more formidable than if the person is chosen to be the system of interest and a free-body
diagram is drawn as in Figure 4.23(b). Analysis of the free-body diagram using Newton’s laws can produce answers
to both parts (a) and (b) of this example, as well as some other questions that might arise. The only forces acting on
the person are his weight
and the upward force of the scale
. According to Newton’s third law
and
are
equal in magnitude and opposite in direction, so that we need to find
in order to find what the scale reads. We
can do this, as usual, by applying Newton’s second law,
From the free-body diagram we see that
, so that
4.78
176
4 • Dynamics: Force and Newton's Laws of Motion
Access for free at openstax.org

Solving for
gives an equation with only one unknown:
or, because
, simply
No assumptions were made about the acceleration, and so this solution should be valid for a variety of accelerations
in addition to the ones in this exercise.
Solution for (a)
In this part of the problem,
, so that
yielding
Discussion for (a)
This is about 185 lb. What would the scale have read if he were stationary? Since his acceleration would be zero, the
force of the scale would be equal to his weight:
So, the scale reading in the elevator is greater than his 735-N (165 lb) weight. This means that the scale is pushing
up on the person with a force greater than his weight, as it must in order to accelerate him upward. Clearly, the
greater the acceleration of the elevator, the greater the scale reading, consistent with what you feel in rapidly
accelerating versus slowly accelerating elevators.
Solution for (b)
Now, what happens when the elevator reaches a constant upward velocity? Will the scale still read more than his
weight? For any constant velocity—up, down, or stationary—acceleration is zero because
, and
.
Thus,
Now
which gives
Discussion for (b)
The scale reading is 735 N, which equals the person’s weight. This will be the case whenever the elevator has a
constant velocity—moving up, moving down, or stationary.
The solution to the previous example also applies to an elevator accelerating downward, as mentioned. When an
elevator accelerates downward,
is negative, and the scale reading is less than the weight of the person, until a
constant downward velocity is reached, at which time the scale reading again becomes equal to the person’s weight.
If the elevator is in free-fall and accelerating downward at
, then the scale reading will be zero and the person will
appear to be weightless.
4.79
4.80
4.81
4.82
4.83
4.84
4.85
4.86
4.87
4.7 • Further Applications of Newton’s Laws of Motion
177

Integrating Concepts: Newton’s Laws of Motion and Kinematics
Physics is most interesting and most powerful when applied to general situations that involve more than a narrow
set of physical principles. Newton’s laws of motion can also be integrated with other concepts that have been
discussed previously in this text to solve problems of motion. For example, forces produce accelerations, a topic of
kinematics, and hence the relevance of earlier chapters. When approaching problems that involve various types of
forces, acceleration, velocity, and/or position, use the following steps to approach the problem:
Problem-Solving Strategy
Step 1. Identify which physical principles are involved. Listing the givens and the quantities to be calculated will
allow you to identify the principles involved.
Step 2. Solve the problem using strategies outlined in the text. If these are available for the specific topic, you
should refer to them. You should also refer to the sections of the text that deal with a particular topic. The following
worked example illustrates how these strategies are applied to an integrated concept problem.
EXAMPLE 4.10
What Force Must a Soccer Player Exert to Reach Top Speed?
A soccer player starts from rest and accelerates forward, reaching a velocity of 8.00 m/s in 2.50 s. (a) What was his
average acceleration? (b) What average force did he exert backward on the ground to achieve this acceleration? The
player’s mass is 70.0 kg, and air resistance is negligible.
Strategy
1.
To solve an integrated concept problem, we must first identify the physical principles involved and identify the
chapters in which they are found. Part (a) of this example considers acceleration along a straight line. This is a
topic of kinematics. Part (b) deals with force, a topic of dynamics found in this chapter.
2.
The following solutions to each part of the example illustrate how the specific problem-solving strategies are
applied. These involve identifying knowns and unknowns, checking to see if the answer is reasonable, and so
forth.
Solution for (a)
We are given the initial and final velocities (zero and 8.00 m/s forward); thus, the change in velocity is
. We are given the elapsed time, and so
. The unknown is acceleration, which can be
found from its definition:
Substituting the known values yields
Discussion for (a)
This is an attainable acceleration for an athlete in good condition.
Solution for (b)
Here we are asked to find the average force the player exerts backward to achieve this forward acceleration.
Neglecting air resistance, this would be equal in magnitude to the net external force on the player, since this force
causes his acceleration. Since we now know
