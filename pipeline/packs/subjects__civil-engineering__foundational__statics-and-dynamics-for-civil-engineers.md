# Source pack — subjects/civil-engineering/foundational/statics-and-dynamics-for-civil-engineers
Lesson title: Statics and Dynamics for Civil Engineers
Level: foundational
Match confidence: 1.03

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.03 — College_Physics-WEB_2s5sHvR § 10.3 Dynamics of Rotational Motion: Rotational Inertia

If you have ever spun a bike wheel or pushed a merry-go-round, you know that force is needed to change angular velocity as seen
in Figure 10.10. In fact, your intuition is reliable in predicting many of the factors that are involved. For example, we know that a
door opens slowly if we push too close to its hinges. Furthermore, we know that the more massive the door, the more slowly it
opens. The first example implies that the farther the force is applied from the pivot, the greater the angular acceleration; another
implication is that angular acceleration is inversely proportional to mass. These relationships should seem very similar to the
familiar relationships among force, mass, and acceleration embodied in Newton’s second law of motion. There are, in fact,
precise rotational analogs to both force and mass.
10.37
10.38
10.39
394
Chapter 10 • Rotational Motion and Angular Momentum
Access for free at openstax.org.

Figure 10.10 Force is required to spin the bike wheel. The greater the force, the greater the angular acceleration produced. The more
massive the wheel, the smaller the angular acceleration. If you push on a spoke closer to the axle, the angular acceleration will be smaller.
To develop the precise relationship among force, mass, radius, and angular acceleration, consider what happens if we exert a
force
on a point mass
that is at a distance
from a pivot point, as shown in Figure 10.11. Because the force is perpendicular
to , an acceleration
is obtained in the direction of
. We can rearrange this equation such that
and then look
for ways to relate this expression to expressions for rotational quantities. We note that
, and we substitute this
expression into
, yielding
Recall that torque is the turning effectiveness of a force. In this case, because
is perpendicular to , torque is simply
.
So, if we multiply both sides of the equation above by , we get torque on the left-hand side. That is,
or
This last equation is the rotational analog of Newton’s second law (
), where torque is analogous to force, angular
acceleration is analogous to translational acceleration, and
is analogous to mass (or inertia). The quantity
is called the
rotational inertia or moment of inertia of a point mass
a distance
from the center of rotation.
Figure 10.11 An object is supported by a horizontal frictionless table and is attached to a pivot point by a cord that supplies centripetal
force. A force
is applied to the object perpendicular to the radius , causing it to accelerate about the pivot point. The force is kept
perpendicular to .
Rotational Inertia and Moment of Inertia
Before we can consider the rotation of anything other than a point mass like the one in Figure 10.11, we must extend the idea of
10.40
10.41
10.42
Making Connections: Rotational Motion Dynamics
Dynamics for rotational motion is completely analogous to linear or translational dynamics. Dynamics is concerned with
force and mass and their effects on motion. For rotational motion, we will find direct analogs to force and mass that behave
just as we would expect from our earlier experiences.
10.3 • Dynamics of Rotational Motion: Rotational Inertia
395

rotational inertia to all types of objects. To expand our concept of rotational inertia, we define the moment of inertia
of an
object to be the sum of
for all the point masses of which it is composed. That is,
. Here
is analogous to
in
translational motion. Because of the distance , the moment of inertia for any object depends on the chosen axis. Actually,
calculating
is beyond the scope of this text except for one simple case—that of a hoop, which has all its mass at the same
distance from its axis. A hoop’s moment of inertia around its axis is therefore
, where
is its total mass and
its radius.
(We use
and
for an entire object to distinguish them from
and
for point masses.) In all other cases, we must consult
Figure 10.12 (note that the table is piece of artwork that has shapes as well as formulae) for formulas for
that have been derived
from integration over the continuous body. Note that
has units of mass multiplied by distance squared (
), as we might
expect from its definition.
The general relationship among torque, moment of inertia, and angular acceleration is
or
where net
is the total torque from all forces relative to a chosen axis. For simplicity, we will only consider torques exerted by
forces in the plane of the rotation. Such torques are either positive or negative and add like ordinary numbers. The relationship
in
is the rotational analog to Newton’s second law and is very generally applicable. This equation is actually
valid for any torque, applied to any object, relative to any axis.
As we might expect, the larger the torque is, the larger the angular acceleration is. For example, the harder a child pushes on a
merry-go-round, the faster it accelerates. Furthermore, the more massive a merry-go-round, the slower it accelerates for the
same torque. The basic relationship between moment of inertia and angular acceleration is that the larger the moment of
inertia, the smaller is the angular acceleration. But there is an additional twist. The moment of inertia depends not only on the
mass of an object, but also on its distribution of mass relative to the axis around which it rotates. For example, it will be much
easier to accelerate a merry-go-round full of children if they stand close to its axis than if they all stand at the outer edge. The
mass is the same in both cases, but the moment of inertia is much larger when the children are at the edge.
10.43
10.44
Take-Home Experiment
Cut out a circle that has about a 10 cm radius from stiff cardboard. Near the edge of the circle, write numbers 1 to 12 like
hours on a clock face. Position the circle so that it can rotate freely about a horizontal axis through its center, like a wheel.
(You could loosely nail the circle to a wall.) Hold the circle stationary and with the number 12 positioned at the top, attach a
lump of blue putty (sticky material used for fixing posters to walls) at the number 3. How large does the lump need to be to
just rotate the circle? Describe how you can change the moment of inertia of the circle. How does this change affect the
amount of blue putty needed at the number 3 to just rotate the circle? Change the circle’s moment of inertia and then try
rotating the circle by using different amounts of blue putty. Repeat this process several times.
Problem-Solving Strategy for Rotational Dynamics
1.
Examine the situation to determine that torque and mass are involved in the rotation. Draw a careful sketch of the
situation.
2.
Determine the system of interest.
3.
Draw a free body diagram. That is, draw and label all external forces acting on the system of interest.
4.
Apply
, the rotational equivalent of Newton’s second law, to solve the problem. Care must be
taken to use the correct moment of inertia and to consider the torque about the point of rotation.
5.
As always, check the solution to see if it is reasonable.
396
Chapter 10 • Rotational Motion and Angular Momentum
Access for free at openstax.org.

EXAMPLE 10.7
Calculating the Effect of Mass Distribution on a Merry-Go-Round
Consider the father pushing a playground merry-go-round in Figure 10.13. He exerts a force of 250 N at the edge of the 50.0-kg
merry-go-round, which has a 1.50 m radius. Calculate the angular acceleration produced (a) when no one is on the merry-go-
round and (b) when an 18.0-kg child sits 1.25 m away from the center. Consider the merry-go-round itself to be a uniform disk
with negligible retarding friction.
Making Connections
In statics, the net torque is zero, and there is no angular acceleration. In rotational motion, net torque is the cause of
angular acceleration, exactly as in Newton’s second law of motion for rotation.
Figure 10.12 Some rotational inertias.
10.3 • Dynamics of Rotational Motion: Rotational Inertia
397

Figure 10.13 A father pushes a playground merry-go-round at its edge and perpendicular to its radius to achieve maximum torque.
Strategy
Angular acceleration is given directly by the expression
:
To solve for
, we must first calculate the torque
(which is the same in both cases) and moment of inertia
(which is greater in
the second case). To find the torque, we note that the applied force is perpendicular to the radius and friction is negligible, so
that
Solution for (a)
The moment of inertia of a solid disk about this axis is given in Figure 10.12 to be
where
and
, so that
Now, after we substitute the known values, we find the angular acceleration to be
Solution for (b)
We expect the angular acceleration for the system to be less in this part, because the moment of inertia is greater when the child
is on the merry-go-round. To find the total moment of inertia , we first find the child’s moment of inertia
by considering the
child to be equivalent to a point mass at a distance of 1.25 m from the axis. Then,
The total moment of inertia is the sum of moments of inertia of the merry-go-round and the child (about the same axis). To
justify this sum to yourself, examine the definition of :
Substituting known values into the equation for
gives
Discussion
The angular acceleration is less when the child is on the merry-go-round than when the merry-go-round is empty, as expected.
The angular accelerations found are quite large, partly due to the fact that friction was considered to be negligible. If, for
10.45
10.46
10.47
10.48
10.49
10.50
10.51
10.52
398
Chapter 10 • Rotational Motion and Angular Momentum
Access for free at openstax.org.

example, the father kept pushing perpendicularly for 2.00 s, he would give the merry-go-round an angular velocity of 13.3 rad/s
when it is empty but only 8.89 rad/s when the child is on it. In terms of revolutions per second, these angular velocities are 2.12
rev/s and 1.41 rev/s, respectively. The father would end up running at about 50 km/h in the first case. Summer Olympics, here he
comes! Confirmation of these numbers is left as an exercise for the reader.
CHECK YOUR UNDERSTANDING
Torque is the analog of force and moment of inertia is the analog of mass. Force and mass are physical quantities that depend on
only one factor. For example, mass is related solely to the numbers of atoms of various types in an object. Are torque and
moment of inertia similarly simple?
Solution
No. Torque depends on three factors: force magnitude, force direction, and point of application. Moment of inertia depends on
both mass and its distribution relative to the axis of rotation. So, while the analogies are precise, these rotational quantities
depend on more factors.

## Match 1.03 — College_Physics_for_AP_Courses_2e-WEB_DkhNbxV § 10.3 Dynamics of Rotational Motion: Rotational Inertia

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Understand the relationship between force, mass and acceleration.
•
Study the turning effect of force.
•
Study the analogy between force and torque, mass and moment of inertia, and linear acceleration and
angular acceleration.
If you have ever spun a bike wheel or pushed a merry-go-round, you know that force is needed to change angular
velocity as seen in Figure 10.9. In fact, your intuition is reliable in predicting many of the factors that are involved.
For example, we know that a door opens slowly if we push too close to its hinges. Furthermore, we know that the
more massive the door, the more slowly it opens. The first example implies that the farther the force is applied from
the pivot, the greater the angular acceleration; another implication is that angular acceleration is inversely
10.37
10.38
10.39
10.3 • Dynamics of Rotational Motion: Rotational Inertia
429

proportional to mass. These relationships should seem very similar to the familiar relationships among force, mass,
and acceleration embodied in Newton’s second law of motion. There are, in fact, precise rotational analogs to both
force and mass.
FIGURE 10.9 Force is required to spin the bike wheel. The greater the force, the greater the angular acceleration produced. The more
massive the wheel, the smaller the angular acceleration. If you push on a spoke closer to the axle, the angular acceleration will be smaller.
To develop the precise relationship among force, mass, radius, and angular acceleration, consider what happens if
we exert a force
on a point mass
that is at a distance
from a pivot point, as shown in Figure 10.10. Because
the force is perpendicular to , an acceleration
is obtained in the direction of
. We can rearrange this
equation such that
and then look for ways to relate this expression to expressions for rotational quantities.
We note that
, and we substitute this expression into
, yielding
Recall that torque is the turning effectiveness of a force. In this case, because
is perpendicular to , torque is
simply
. So, if we multiply both sides of the equation above by , we get torque on the left-hand side. That is,
or
This last equation is the rotational analog of Newton’s second law (
), where torque is analogous to force,
angular acceleration is analogous to translational acceleration, and
is analogous to mass (or inertia). The
quantity
is called the rotational inertia or moment of inertia of a point mass
a distance
from the center of
rotation.
FIGURE 10.10 An object is supported by a horizontal frictionless table and is attached to a pivot point by a cord that supplies centripetal
force. A force
is applied to the object perpendicular to the radius , causing it to accelerate about the pivot point. The force is kept
perpendicular to .
10.40
10.41
10.42
MAKING CONNECTIONS: ROTATIONAL MOTION DYNAMICS
Dynamics for rotational motion is completely analogous to linear or translational dynamics. Dynamics is
concerned with force and mass and their effects on motion. For rotational motion, we will find direct analogs to
force and mass that behave just as we would expect from our earlier experiences.
430
10 • Rotational Motion and Angular Momentum
Access for free at openstax.org

Rotational Inertia and Moment of Inertia
Before we can consider the rotation of anything other than a point mass like the one in Figure 10.10, we must
extend the idea of rotational inertia to all types of objects. To expand our concept of rotational inertia, we define the
moment of inertia
of an object to be the sum of
for all the point masses of which it is composed. That is,
. Here
is analogous to
in translational motion. Because of the distance , the moment of inertia for
any object depends on the chosen axis. Actually, calculating
is beyond the scope of this text except for one simple
case—that of a hoop, which has all its mass at the same distance from its axis. A hoop’s moment of inertia around its
axis is therefore
, where
is its total mass and
its radius. (We use
and
for an entire object to
distinguish them from
and
for point masses.) In all other cases, we must consult Figure 10.11 (note that the
table is piece of artwork that has shapes as well as formulae) for formulas for
that have been derived from
integration over the continuous body. Note that
has units of mass multiplied by distance squared (
), as we
might expect from its definition.
The general relationship among torque, moment of inertia, and angular acceleration is
or
where net
is the total torque from all forces relative to a chosen axis. For simplicity, we will only consider torques
exerted by forces in the plane of the rotation. Such torques are either positive or negative and add like ordinary
numbers. The relationship in
is the rotational analog to Newton’s second law and is very generally
applicable. This equation is actually valid for any torque, applied to any object, relative to any axis.
As we might expect, the larger the torque is, the larger the angular acceleration is. For example, the harder a child
pushes on a merry-go-round, the faster it accelerates. Furthermore, the more massive a merry-go-round, the slower
it accelerates for the same torque. The basic relationship between moment of inertia and angular acceleration is
that the larger the moment of inertia, the smaller is the angular acceleration. But there is an additional twist. The
moment of inertia depends not only on the mass of an object, but also on its distribution of mass relative to the axis
around which it rotates. For example, it will be much easier to accelerate a merry-go-round full of children if they
stand close to its axis than if they all stand at the outer edge. The mass is the same in both cases, but the moment of
inertia is much larger when the children are at the edge.
10.43
10.44
TAKE-HOME EXPERIMENT
Cut out a circle that has about a 10 cm radius from stiff cardboard. Near the edge of the circle, write numbers 1
to 12 like hours on a clock face. Position the circle so that it can rotate freely about a horizontal axis through its
center, like a wheel. (You could loosely nail the circle to a wall.) Hold the circle stationary and with the number
12 positioned at the top, attach a lump of blue putty (sticky material used for fixing posters to walls) at the
number 3. How large does the lump need to be to just rotate the circle? Describe how you can change the
moment of inertia of the circle. How does this change affect the amount of blue putty needed at the number 3 to
just rotate the circle? Change the circle’s moment of inertia and then try rotating the circle by using different
amounts of blue putty. Repeat this process several times.
PROBLEM-SOLVING STRATEGY FOR ROTATIONAL DYNAMICS
1.
Examine the situation to determine that torque and mass are involved in the rotation. Draw a careful sketch
of the situation.
2.
Determine the system of interest.
3.
Draw a free body diagram. That is, draw and label all external forces acting on the system of interest.
4.
Apply
, the rotational equivalent of Newton’s second law, to solve the problem. Care
10.3 • Dynamics of Rotational Motion: Rotational Inertia
431

EXAMPLE 10.7
Calculating the Effect of Mass Distribution on a Merry-Go-Round
Consider the father pushing a playground merry-go-round in Figure 10.12. He exerts a force of 250 N at the edge of
the 50.0-kg merry-go-round, which has a 1.50 m radius. Calculate the angular acceleration produced (a) when no
one is on the merry-go-round and (b) when an 18.0-kg child sits 1.25 m away from the center. Consider the merry-
go-round itself to be a uniform disk with negligible retarding friction.
must be taken to use the correct moment of inertia and to consider the torque about the point of rotation.
5.
As always, check the solution to see if it is reasonable.
MAKING CONNECTIONS
In statics, the net torque is zero, and there is no angular acceleration. In rotational motion, net torque is the
cause of angular acceleration, exactly as in Newton’s second law of motion for rotation.
FIGURE 10.11 Some rotational inertias.
432
10 • Rotational Motion and Angular Momentum
Access for free at openstax.org

FIGURE 10.12 A father pushes a playground merry-go-round at its edge and perpendicular to its radius to achieve maximum torque.
Strategy
Angular acceleration is given directly by the expression
:
To solve for
, we must first calculate the torque
(which is the same in both cases) and moment of inertia
(which
is greater in the second case). To find the torque, we note that the applied force is perpendicular to the radius and
friction is negligible, so that
Solution for (a)
The moment of inertia of a solid disk about this axis is given in Figure 10.11 to be
where
and
, so that
Now, after we substitute the known values, we find the angular acceleration to be
Solution for (b)
We expect the angular acceleration for the system to be less in this part, because the moment of inertia is greater
when the child is on the merry-go-round. To find the total moment of inertia
, we first find the child’s moment of
inertia
by considering the child to be equivalent to a point mass at a distance of 1.25 m from the axis. Then,
The total moment of inertia is the sum of moments of inertia of the merry-go-round and the child (about the same
axis). To justify this sum to yourself, examine the definition of
:
Substituting known values into the equation for
gives
Discussion
The angular acceleration is less when the child is on the merry-go-round than when the merry-go-round is empty, as
expected. The angular accelerations found are quite large, partly due to the fact that friction was considered to be
10.45
10.46
10.47
10.48
10.49
10.50
10.51
10.52
10.3 • Dynamics of Rotational Motion: Rotational Inertia
433

negligible. If, for example, the father kept pushing perpendicularly for 2.00 s, he would give the merry-go-round an
angular velocity of 13.3 rad/s when it is empty but only 8.89 rad/s when the child is on it. In terms of revolutions per
second, these angular velocities are 2.12 rev/s and 1.41 rev/s, respectively. The father would end up running at
about 50 km/h in the first case. Summer Olympics, here he comes! Confirmation of these numbers is left as an
exercise for the reader.
CHECK YOUR UNDERSTANDING
Torque is the analog of force and moment of inertia is the analog of mass. Force and mass are physical quantities
that depend on only one factor. For example, mass is related solely to the numbers of atoms of various types in an
object. Are torque and moment of inertia similarly simple?
Solution
No. Torque depends on three factors: force magnitude, force direction, and point of application. Moment of inertia
depends on both mass and its distribution relative to the axis of rotation. So, while the analogies are precise, these
rotational quantities depend on more factors.

## Match 1.03 — College_Physics_2e-WEB_7Zesafu § 10.3 Dynamics of Rotational Motion: Rotational Inertia

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Understand the relationship between force, mass and acceleration.
•
Study the turning effect of force.
•
Study the analogy between force and torque, mass and moment of inertia, and linear acceleration and
angular acceleration.
If you have ever spun a bike wheel or pushed a merry-go-round, you know that force is needed to change angular
velocity as seen in Figure 10.9. In fact, your intuition is reliable in predicting many of the factors that are involved.
For example, we know that a door opens slowly if we push too close to its hinges. Furthermore, we know that the
more massive the door, the more slowly it opens. The first example implies that the farther the force is applied from
the pivot, the greater the angular acceleration; another implication is that angular acceleration is inversely
proportional to mass. These relationships should seem very similar to the familiar relationships among force, mass,
and acceleration embodied in Newton’s second law of motion. There are, in fact, precise rotational analogs to both
force and mass.
FIGURE 10.9 Force is required to spin the bike wheel. The greater the force, the greater the angular acceleration produced. The more
massive the wheel, the smaller the angular acceleration. If you push on a spoke closer to the axle, the angular acceleration will be smaller.
To develop the precise relationship among force, mass, radius, and angular acceleration, consider what happens if
we exert a force
on a point mass
that is at a distance
from a pivot point, as shown in Figure 10.10. Because
the force is perpendicular to , an acceleration
is obtained in the direction of
. We can rearrange this
equation such that
and then look for ways to relate this expression to expressions for rotational quantities.
We note that
, and we substitute this expression into
, yielding
Recall that torque is the turning effectiveness of a force. In this case, because
is perpendicular to , torque is
simply
. So, if we multiply both sides of the equation above by , we get torque on the left-hand side. That is,
10.40
402
10 • Rotational Motion and Angular Momentum
Access for free at openstax.org

or
This last equation is the rotational analog of Newton’s second law (
), where torque is analogous to force,
angular acceleration is analogous to translational acceleration, and
is analogous to mass (or inertia). The
quantity
is called the rotational inertia or moment of inertia of a point mass
a distance
from the center of
rotation.
FIGURE 10.10 An object is supported by a horizontal frictionless table and is attached to a pivot point by a cord that supplies centripetal
force. A force
is applied to the object perpendicular to the radius , causing it to accelerate about the pivot point. The force is kept
perpendicular to .
Rotational Inertia and Moment of Inertia
Before we can consider the rotation of anything other than a point mass like the one in Figure 10.10, we must
extend the idea of rotational inertia to all types of objects. To expand our concept of rotational inertia, we define the
moment of inertia
of an object to be the sum of
for all the point masses of which it is composed. That is,
. Here
is analogous to
in translational motion. Because of the distance , the moment of inertia for
any object depends on the chosen axis. Actually, calculating
is beyond the scope of this text except for one simple
case—that of a hoop, which has all its mass at the same distance from its axis. A hoop’s moment of inertia around its
axis is therefore
, where
is its total mass and
its radius. (We use
and
for an entire object to
distinguish them from
and
for point masses.) In all other cases, we must consult Figure 10.11 (note that the
table is piece of artwork that has shapes as well as formulae) for formulas for
that have been derived from
integration over the continuous body. Note that
has units of mass multiplied by distance squared (
), as we
might expect from its definition.
The general relationship among torque, moment of inertia, and angular acceleration is
or
where net
is the total torque from all forces relative to a chosen axis. For simplicity, we will only consider torques
exerted by forces in the plane of the rotation. Such torques are either positive or negative and add like ordinary
numbers. The relationship in
is the rotational analog to Newton’s second law and is very generally
applicable. This equation is actually valid for any torque, applied to any object, relative to any axis.
As we might expect, the larger the torque is, the larger the angular acceleration is. For example, the harder a child
10.41
10.42
Making Connections: Rotational Motion Dynamics
Dynamics for rotational motion is completely analogous to linear or translational dynamics. Dynamics is
concerned with force and mass and their effects on motion. For rotational motion, we will find direct analogs to
force and mass that behave just as we would expect from our earlier experiences.
10.43
10.44
10.3 • Dynamics of Rotational Motion: Rotational Inertia
403

pushes on a merry-go-round, the faster it accelerates. Furthermore, the more massive a merry-go-round, the slower
it accelerates for the same torque. The basic relationship between moment of inertia and angular acceleration is
that the larger the moment of inertia, the smaller is the angular acceleration. But there is an additional twist. The
moment of inertia depends not only on the mass of an object, but also on its distribution of mass relative to the axis
around which it rotates. For example, it will be much easier to accelerate a merry-go-round full of children if they
stand close to its axis than if they all stand at the outer edge. The mass is the same in both cases, but the moment of
inertia is much larger when the children are at the edge.
Take-Home Experiment
Cut out a circle that has about a 10 cm radius from stiff cardboard. Near the edge of the circle, write numbers 1
to 12 like hours on a clock face. Position the circle so that it can rotate freely about a horizontal axis through its
center, like a wheel. (You could loosely nail the circle to a wall.) Hold the circle stationary and with the number
12 positioned at the top, attach a lump of blue putty (sticky material used for fixing posters to walls) at the
number 3. How large does the lump need to be to just rotate the circle? Describe how you can change the
moment of inertia of the circle. How does this change affect the amount of blue putty needed at the number 3 to
just rotate the circle? Change the circle’s moment of inertia and then try rotating the circle by using different
amounts of blue putty. Repeat this process several times.
Problem-Solving Strategy for Rotational Dynamics
1.
Examine the situation to determine that torque and mass are involved in the rotation. Draw a careful sketch
of the situation.
2.
Determine the system of interest.
3.
Draw a free body diagram. That is, draw and label all external forces acting on the system of interest.
4.
Apply
, the rotational equivalent of Newton’s second law, to solve the problem. Care
must be taken to use the correct moment of inertia and to consider the torque about the point of rotation.
5.
As always, check the solution to see if it is reasonable.
Making Connections
In statics, the net torque is zero, and there is no angular acceleration. In rotational motion, net torque is the
cause of angular acceleration, exactly as in Newton’s second law of motion for rotation.
404
10 • Rotational Motion and Angular Momentum
Access for free at openstax.org

EXAMPLE 10.7
Calculating the Effect of Mass Distribution on a Merry-Go-Round
Consider the father pushing a playground merry-go-round in Figure 10.12. He exerts a force of 250 N at the edge of
the 50.0-kg merry-go-round, which has a 1.50 m radius. Calculate the angular acceleration produced (a) when no
one is on the merry-go-round and (b) when an 18.0-kg child sits 1.25 m away from the center. Consider the merry-
go-round itself to be a uniform disk with negligible retarding friction.
FIGURE 10.11 Some rotational inertias.
10.3 • Dynamics of Rotational Motion: Rotational Inertia
405

FIGURE 10.12 A father pushes a playground merry-go-round at its edge and perpendicular to its radius to achieve maximum torque.
Strategy
Angular acceleration is given directly by the expression
:
To solve for
, we must first calculate the torque
(which is the same in both cases) and moment of inertia
(which
is greater in the second case). To find the torque, we note that the applied force is perpendicular to the radius and
friction is negligible, so that
Solution for (a)
The moment of inertia of a solid disk about this axis is given in Figure 10.11 to be
where
and
, so that
Now, after we substitute the known values, we find the angular acceleration to be
Solution for (b)
We expect the angular acceleration for the system to be less in this part, because the moment of inertia is greater
when the child is on the merry-go-round. To find the total moment of inertia
, we first find the child’s moment of
inertia
by considering the child to be equivalent to a point mass at a distance of 1.25 m from the axis. Then,
The total moment of inertia is the sum of moments of inertia of the merry-go-round and the child (about the same
axis). To justify this sum to yourself, examine the definition of
:
Substituting known values into the equation for
gives
Discussion
The angular acceleration is less when the child is on the merry-go-round than when the merry-go-round is empty, as
expected. The angular accelerations found are quite large, partly due to the fact that friction was considered to be
10.45
10.46
10.47
10.48
10.49
10.50
10.51
10.52
406
10 • Rotational Motion and Angular Momentum
Access for free at openstax.org

negligible. If, for example, the father kept pushing perpendicularly for 2.00 s, he would give the merry-go-round an
angular velocity of 13.3 rad/s when it is empty but only 8.89 rad/s when the child is on it. In terms of revolutions per
second, these angular velocities are 2.12 rev/s and 1.41 rev/s, respectively. The father would end up running at
about 50 km/h in the first case. Summer Olympics, here he comes! Confirmation of these numbers is left as an
exercise for the reader.
CHECK YOUR UNDERSTANDING
Torque is the analog of force and moment of inertia is the analog of mass. Force and mass are physical quantities
that depend on only one factor. For example, mass is related solely to the numbers of atoms of various types in an
object. Are torque and moment of inertia similarly simple?
Solution
No. Torque depends on three factors: force magnitude, force direction, and point of application. Moment of inertia
depends on both mass and its distribution relative to the axis of rotation. So, while the analogies are precise, these
rotational quantities depend on more factors.
