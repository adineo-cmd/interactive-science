# Source pack — subjects/physics/intermediate/projectile-and-2d-motion
Lesson title: Projectile & 2D Motion
Level: intermediate
Match confidence: 3.06

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.06 — APCollegePhysics-OP_js6ZFp7 § 3.4 Projectile Motion

Learning Objectives
By the end of this section, you will be able to:
•
Identify and explain the properties of a projectile, such as acceleration due to gravity, range, maximum height, and
trajectory.
•
Determine the location and velocity of a projectile at different points in its trajectory.
•
Apply the principle of independence of motion to solve projectile motion problems.
The information presented in this section supports the following AP® learning objectives:
•
3.A.1.1 The student is able to express the motion of an object using narrative, mathematical, and graphical
representations. (S.P. 1.5, 2.1, 2.2)
•
3.A.1.3 The student is able to analyze experimental data describing the motion of an object and is able to express the
results of the analysis using narrative, mathematical, and graphical representations. (S.P. 5.1)
Projectile motion is the motion of an object thrown or projected into the air, subject to only the acceleration of gravity. The
object is called a projectile, and its path is called its trajectory. The motion of falling objects, as covered in Problem-Solving
Basics for One-Dimensional Kinematics, is a simple one-dimensional type of projectile motion in which there is no horizontal
movement. In this section, we consider two-dimensional projectile motion, such as that of a football or other object for which air
resistance is negligible.
The most important fact to remember here is that motions along perpendicular axes are independent and thus can be analyzed
separately. This fact was discussed in Kinematics in Two Dimensions: An Introduction, where vertical and horizontal motions
were seen to be independent. The key to analyzing two-dimensional projectile motion is to break it into two motions, one along
the horizontal axis and the other along the vertical. (This choice of axes is the most sensible, because acceleration due to gravity
is vertical—thus, there will be no acceleration along the horizontal axis when air resistance is negligible.) As is customary, we call
the horizontal axis the x-axis and the vertical axis the y-axis. Figure 3.37 illustrates the notation for displacement, where s is
defined to be the total displacement and x and y are its components along the horizontal and vertical axes, respectively. The
magnitudes of these vectors are s, x, and y. (Note that in the last section we used the notation A to represent a vector with
components Ax and Ay . If we continued this format, we would call displacement s with components sx and sy . However, to
simplify the notation, we will simply represent the component vectors as x and y .)
Of course, to describe motion we must deal with velocity and acceleration, as well as with displacement. We must find their
components along the x- and y-axes, too. We will assume all forces except gravity (such as air resistance and friction, for
example) are negligible. The components of acceleration are then very simple: ay = – g = – 9.80 m/s2 . (Note that this
definition assumes that the upwards direction is defined as the positive direction. If you arrange the coordinate system instead
such that the downwards direction is positive, then acceleration due to gravity takes a positive value.) Because gravity is vertical,
ax = 0 . Both accelerations are constant, so the kinematic equations can be used.
Review of Kinematic Equations (constant a )
(3.28)
x = x0 + v- t
(3.29)
v- = v0 + v
2
(3.30)
v = v0 + at
(3.31)
x = x0 + v0t + 1
2at2
(3.32)
v2 = v0
2 + 2a(x − x0).
Chapter 3 | Two-Dimensional Kinematics
115

Figure 3.37 The total displacement s of a soccer ball at a point along its path. The vector s has components x and y along the horizontal and
vertical axes. Its magnitude is s , and it makes an angle θ with the horizontal.
Given these assumptions, the following steps are then used to analyze projectile motion:
Step 1. Resolve or break the motion into horizontal and vertical components along the x- and y-axes. These axes are
perpendicular, so Ax = A cos θ and Ay = A sin θ are used. The magnitude of the components of displacement s along
these axes are x and y. The magnitudes of the components of the velocity v are vx = v cos θ and vy = v sin θ, where v
is the magnitude of the velocity and θ is its direction, as shown in Figure 3.38. Initial values are denoted with a subscript 0, as
usual.
Step 2. Treat the motion as two independent one-dimensional motions, one horizontal and the other vertical. The kinematic
equations for horizontal and vertical motion take the following forms:
(3.33)
Horizontal Motion(ax = 0)
(3.34)
x = x0 + vxt
(3.35)
vx = v0x = vx = velocity is a constant.
(3.36)
Vertical Motion(assuming positive is up ay = −g = −9.80m/s2)
(3.37)
y = y0 + 1
2(v0y + vy)t
(3.38)
vy = v0y − gt
(3.39)
y = y0 + v0yt − 1
2gt2
(3.40)
vy2 = v0y
2 − 2g(y − y0).
Step 3. Solve for the unknowns in the two separate motions—one horizontal and one vertical. Note that the only common
variable between the motions is time t . The problem solving procedures here are the same as for one-dimensional kinematics
and are illustrated in the solved examples below.
Step 4. Recombine the two motions to find the total displacement s and velocity v . Because the x - and y -motions are
perpendicular, we determine these vectors by using the techniques outlined in the Vector Addition and Subtraction: Analytical
Methods and employing A =
Ax2 + Ay2 and θ = tan−1(Ay / Ax) in the following form, where θ is the direction of the
displacement s and θv is the direction of the velocity v :
Total displacement and velocity
(3.41)
s =
x2 + y2
(3.42)
θ = tan−1(y / x)
(3.43)
v = vx2 + vy2
(3.44)
θv = tan−1(vy / vx).
116
Chapter 3 | Two-Dimensional Kinematics
This OpenStax book is available for free at http://cnx.org/content/col11844/1.14

Figure 3.38 (a) We analyze two-dimensional projectile motion by breaking it into two independent one-dimensional motions along the vertical and
horizontal axes. (b) The horizontal motion is simple, because ax = 0 and vx is thus constant. (c) The velocity in the vertical direction begins to
decrease as the object rises; at its highest point, the vertical velocity is zero. As the object falls towards the Earth again, the vertical velocity increases
again in magnitude but points in the opposite direction to the initial vertical velocity. (d) The x - and y -motions are recombined to give the total velocity
at any given point on the trajectory.
Example 3.4 A Fireworks Projectile Explodes High and Away
During a fireworks display, a shell is shot into the air with an initial speed of 70.0 m/s at an angle of 75.0° above the
horizontal, as illustrated in Figure 3.39. The fuse is timed to ignite the shell just as it reaches its highest point above the
ground. (a) Calculate the height at which the shell explodes. (b) How much time passed between the launch of the shell and
the explosion? (c) What is the horizontal displacement of the shell when it explodes?
Strategy
Because air resistance is negligible for the unexploded shell, the analysis method outlined above can be used. The motion
can be broken into horizontal and vertical motions in which ax = 0 and ay = – g . We can then define x0 and y0 to be
zero and solve for the desired quantities.
Solution for (a)
By “height” we mean the altitude or vertical position y above the starting point. The highest point in any trajectory, called the
Chapter 3 | Two-Dimensional Kinematics
117

apex, is reached when vy = 0 . Since we know the initial and final velocities as well as the initial position, we use the
following equation to find y :
(3.45)
vy2 = v0y
2 − 2g(y − y0).
Figure 3.39 The trajectory of a fireworks shell. The fuse is set to explode the shell at the highest point in its trajectory, which is found to be at a
height of 233 m and 125 m away horizontally.
Because y0 and vy are both zero, the equation simplifies to
(3.46)
0 = v0y
2 − 2gy.
Solving for y gives
(3.47)
y =
v0y
2
2g .
Now we must find v0y , the component of the initial velocity in the y-direction. It is given by v0y = v0 sin θ , where v0y is
the initial velocity of 70.0 m/s, and θ0 = 75.0° is the initial angle. Thus,
(3.48)
v0y = v0 sin θ0 = (70.0 m/s)(sin 75°) = 67.6 m/s.
and y is
(3.49)
y = (67.6 m/s)2
2(9.80 m/s2)
,
so that
(3.50)
y = 233m.
Discussion for (a)
Note that because up is positive, the initial velocity is positive, as is the maximum height, but the acceleration due to gravity
is negative. Note also that the maximum height depends only on the vertical component of the initial velocity, so that any
projectile with a 67.6 m/s initial vertical component of velocity will reach a maximum height of 233 m (neglecting air
resistance). The numbers in this example are reasonable for large fireworks displays, the shells of which do reach such
heights before exploding. In practice, air resistance is not completely negligible, and so the initial velocity would have to be
somewhat larger than that given to reach the same height.
Solution for (b)
As in many physics problems, there is more than one way to solve for the time to the highest point. In this case, the easiest
method is to use y = y0 + 1
2(v0y + vy)t . Because y0 is zero, this equation reduces to simply
(3.51)
y = 1
2(v0y + vy)t.
118
Chapter 3 | Two-Dimensional Kinematics
This OpenStax book is available for free at http://cnx.org/content/col11844/1.14

Note that the final vertical velocity, vy , at the highest point is zero. Thus,
(3.52)
t =
2y
(v0y + vy) = 2(233 m)
(67.6 m/s)
= 6.90 s.
Discussion for (b)
This time is also reasonable for large fireworks. When you are able to see the launch of fireworks, you will notice several
seconds pass before the shell explodes. (Another way of finding the time is by using y = y0 + v0yt − 1
2gt2 , and solving
the quadratic equation for t .)
Solution for (c)
Because air resistance is negligible, ax = 0 and the horizontal velocity is constant, as discussed above. The horizontal
displacement is horizontal velocity multiplied by time as given by x = x0 + vxt , where x0 is equal to zero:
(3.53)
x = vxt,
where vx is the x-component of the velocity, which is given by vx = v0 cos θ0 . Now,
(3.54)
vx = v0 cos θ0 = (70.0 m/s)(cos 75.0°) = 18.1 m/s.
The time t for both motions is the same, and so x is
(3.55)
x = (18.1 m/s)(6.90 s) = 125 m.
Discussion for (c)
The horizontal motion is a constant velocity in the absence of air resistance. The horizontal displacement found here could
be useful in keeping the fireworks fragments from falling on spectators. Once the shell explodes, air resistance has a major
effect, and many fragments will land directly below.
In solving part (a) of the preceding example, the expression we found for y is valid for any projectile motion where air resistance
is negligible. Call the maximum height y = h ; then,
(3.56)
h =
v0y
2
2g .
This equation defines the maximum height of a projectile and depends only on the vertical component of the initial velocity.
Defining a Coordinate System
It is important to set up a coordinate system when analyzing projectile motion. One part of defining the coordinate system is
to define an origin for the x and y positions. Often, it is convenient to choose the initial position of the object as the origin
such that x0 = 0 and y0 = 0 . It is also important to define the positive and negative directions in the x and y directions.
Typically, we define the positive vertical direction as upwards, and the positive horizontal direction is usually the direction of
the object's motion. When this is the case, the vertical acceleration, g , takes a negative value (since it is directed
downwards towards the Earth). However, it is occasionally useful to define the coordinates differently. For example, if you
are analyzing the motion of a ball thrown downwards from the top of a cliff, it may make sense to define the positive direction
downwards since the motion of the ball is solely in the downwards direction. If this is the case, g takes a positive value.
Example 3.5 Calculating Projectile Motion: Hot Rock Projectile
Kilauea in Hawaii is the world's most continuously active volcano. Very active volcanoes characteristically eject red-hot rocks
and lava rather than smoke and ash. Suppose a large rock is ejected from the volcano with a speed of 25.0 m/s and at an
angle 35.0° above the horizontal, as shown in Figure 3.40. The rock strikes the side of the volcano at an altitude 20.0 m
lower than its starting point. (a) Calculate the time it takes the rock to follow this path. (b) What are the magnitude and
direction of the rock's velocity at impact?
Chapter 3 | Two-Dimensional Kinematics
119

Figure 3.40 The trajectory of a rock ejected from the Kilauea volcano.
Strategy
Again, resolving this two-dimensional motion into two independent one-dimensional motions will allow us to solve for the
desired quantities. The time a projectile is in the air is governed by its vertical motion alone. We will solve for t first. While
the rock is rising and falling vertically, the horizontal motion continues at a constant velocity. This example asks for the final
velocity. Thus, the vertical and horizontal results will be recombined to obtain v and θv at the final time t determined in
the first part of the example.
Solution for (a)
While the rock is in the air, it rises and then falls to a final position 20.0 m lower than its starting altitude. We can find the time
for this by using
(3.57)
y = y0 + v0yt − 1
2gt2.
If we take the initial position y0 to be zero, then the final position is y = −20.0 m. Now the initial vertical velocity is the
vertical component of the initial velocity, found from v0y = v0 sin θ0 = ( 25.0 m/s )( sin 35.0° ) = 14.3 m/s . Substituting
known values yields
(3.58)
−20.0 m = (14.3 m/s)t − ⎛
⎝4.90 m/s2⎞
⎠t2.
Rearranging terms gives a quadratic equation in t :
(3.59)
⎛
⎝4.90 m/s2⎞
⎠t2 − (14.3 m/s)t − (20.0 m) = 0.
This expression is a quadratic equation of the form at2 + bt + c = 0 , where the constants are a = 4.90 , b = – 14.3 ,
and c = – 20.0. Its solution

## Match 3.06 — College_Physics_for_AP_Courses_2e-WEB_DkhNbxV § 3.4 Projectile Motion

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Identify and explain the properties of a projectile, such as acceleration due to gravity, range, maximum
height, and trajectory.
•
Determine the location and velocity of a projectile at different points in its trajectory.
•
Apply the principle of independence of motion to solve projectile motion problems.
Projectile motion is the motion of an object thrown or projected into the air, subject to only the acceleration of
gravity. The object is called a projectile, and its path is called its trajectory. The motion of falling objects, as covered
in Problem-Solving Basics for One-Dimensional Kinematics, is a simple one-dimensional type of projectile motion in
which there is no horizontal movement. In this section, we consider two-dimensional projectile motion, such as that
of a football or other object for which air resistance is negligible.
The most important fact to remember here is that motions along perpendicular axes are independent and thus can
be analyzed separately. This fact was discussed in Kinematics in Two Dimensions: An Introduction, where vertical
and horizontal motions were seen to be independent. The key to analyzing two-dimensional projectile motion is to
break it into two motions, one along the horizontal axis and the other along the vertical. (This choice of axes is the
most sensible, because acceleration due to gravity is vertical—thus, there will be no acceleration along the
horizontal axis when air resistance is negligible.) As is customary, we call the horizontal axis the x-axis and the
vertical axis the y-axis. Figure 3.34 illustrates the notation for displacement, where
is defined to be the total
displacement and
and
are its components along the horizontal and vertical axes, respectively. The magnitudes of
these vectors are s, x, and y. (Note that in the last section we used the notation
to represent a vector with
components
and
. If we continued this format, we would call displacement
with components
and
.
However, to simplify the notation, we will simply represent the component vectors as
and
.)
Of course, to describe motion we must deal with velocity and acceleration, as well as with displacement. We must
find their components along the x- and y-axes, too. We will assume all forces except gravity (such as air resistance
and friction, for example) are negligible. The components of acceleration are then very simple:
3.4 • Projectile Motion
121

. (Note that this definition assumes that the upwards direction is defined as the positive
direction. If you arrange the coordinate system instead such that the downwards direction is positive, then
acceleration due to gravity takes a positive value.) Because gravity is vertical,
. Both accelerations are
constant, so the kinematic equations can be used.
FIGURE 3.34 The total displacement
of a soccer ball at a point along its path. The vector
has components
and
along the horizontal
and vertical axes. Its magnitude is , and it makes an angle
with the horizontal.
Given these assumptions, the following steps are then used to analyze projectile motion:
Step 1. Resolve or break the motion into horizontal and vertical components along the x- and y-axes. These axes are
perpendicular, so
and
are used. The magnitude of the components of displacement
along these axes are
and
The magnitudes of the components of the velocity
are
and
where
is the magnitude of the velocity and
is its direction, as shown in Figure 3.35. Initial values
are denoted with a subscript 0, as usual.
Step 2. Treat the motion as two independent one-dimensional motions, one horizontal and the other vertical. The
kinematic equations for horizontal and vertical motion take the following forms:
REVIEW OF KINEMATIC EQUATIONS (CONSTANT
)
3.28
3.29
3.30
3.31
3.32
3.33
3.34
3.35
3.36
3.37
3.38
3.39
122
3 • Two-Dimensional Kinematics
Access for free at openstax.org

Step 3. Solve for the unknowns in the two separate motions—one horizontal and one vertical. Note that the only
common variable between the motions is time . The problem solving procedures here are the same as for one-
dimensional kinematics and are illustrated in the solved examples below.
Step 4. Recombine the two motions to find the total displacement
and velocity
. Because the x - and y -motions
are perpendicular, we determine these vectors by using the techniques outlined in the Vector Addition and
Subtraction: Analytical Methods and employing
and
in the following form,
where
is the direction of the displacement
and
is the direction of the velocity
:
Total displacement and velocity
3.40
3.41
3.42
3.43
3.44
3.4 • Projectile Motion
123

FIGURE 3.35 (a) We analyze two-dimensional projectile motion by breaking it into two independent one-dimensional motions along the
vertical and horizontal axes. (b) The horizontal motion is simple, because
and
is thus constant. (c) The velocity in the vertical
direction begins to decrease as the object rises; at its highest point, the vertical velocity is zero. As the object falls towards the Earth again,
the vertical velocity increases again in magnitude but points in the opposite direction to the initial vertical velocity. (d) The x - and y
-motions are recombined to give the total velocity at any given point on the trajectory.
EXAMPLE 3.4
A Fireworks Projectile Explodes High and Away
During a fireworks display, a shell is shot into the air with an initial speed of 70.0 m/s at an angle of
above the
horizontal, as illustrated in Figure 3.36. The fuse is timed to ignite the shell just as it reaches its highest point above
the ground. (a) Calculate the height at which the shell explodes. (b) How much time passed between the launch of
the shell and the explosion? (c) What is the horizontal displacement of the shell when it explodes?
Strategy
Because air resistance is negligible for the unexploded shell, the analysis method outlined above can be used. The
motion can be broken into horizontal and vertical motions in which
and
. We can then define
and
to be zero and solve for the desired quantities.
124
3 • Two-Dimensional Kinematics
Access for free at openstax.org

Solution for (a)
By “height” we mean the altitude or vertical position
above the starting point. The highest point in any trajectory,
called the apex, is reached when
. Since we know the initial and final velocities as well as the initial position,
we use the following equation to find
:
FIGURE 3.36 The trajectory of a fireworks shell. The fuse is set to explode the shell at the highest point in its trajectory, which is found to be
at a height of 233 m and 125 m away horizontally.
Because
and
are both zero, the equation simplifies to
Solving for
gives
Now we must find
, the component of the initial velocity in the y-direction. It is given by
, where
is the initial velocity of 70.0 m/s, and
is the initial angle. Thus,
and
is
so that
Discussion for (a)
Note that because up is positive, the initial velocity is positive, as is the maximum height, but the acceleration due to
gravity is negative. Note also that the maximum height depends only on the vertical component of the initial velocity,
so that any projectile with a 67.6 m/s initial vertical component of velocity will reach a maximum height of 233 m
(neglecting air resistance). The numbers in this example are reasonable for large fireworks displays, the shells of
which do reach such heights before exploding. In practice, air resistance is not completely negligible, and so the
initial velocity would have to be somewhat larger than that given to reach the same height.
3.45
3.46
3.47
3.48
3.49
3.50
3.4 • Projectile Motion
125

Solution for (b)
As in many physics problems, there is more than one way to solve for the time to the highest point. In this case, the
easiest method is to use
. Because
is zero, this equation reduces to simply
Note that the final vertical velocity,
, at the highest point is zero. Thus,
Discussion for (b)
This time is also reasonable for large fireworks. When you are able to see the launch of fireworks, you will notice
several seconds pass before the shell explodes. (Another way of finding the time is by using
,
and solving the quadratic equation for .)
Solution for (c)
Because air resistance is negligible,
and the horizontal velocity is constant, as discussed above. The
horizontal displacement is horizontal velocity multiplied by time as given by
, where
is equal to
zero:
where
is the x-component of the velocity, which is given by
Now,
The time
for both motions is the same, and so
is
Discussion for (c)
The horizontal motion is a constant velocity in the absence of air resistance. The horizontal displacement found here
could be useful in keeping the fireworks fragments from falling on spectators. Once the shell explodes, air
resistance has a major effect, and many fragments will land directly below.
In solving part (a) of the preceding example, the expression we found for
is valid for any projectile motion where
air resistance is negligible. Call the maximum height
; then,
This equation defines the maximum height of a projectile and depends only on the vertical component of the initial
velocity.
3.51
3.52
3.53
3.54
3.55
3.56
DEFINING A COORDINATE SYSTEM
It is important to set up a coordinate system when analyzing projectile motion. One part of defining the
coordinate system is to define an origin for the
and
positions. Often, it is convenient to choose the initial
position of the object as the origin such that
and
. It is also important to define the positive and
negative directions in the
and
directions. Typically, we define the positive vertical direction as upwards, and
the positive horizontal direction is usually the direction of the object’s motion. When this is the case, the vertical
acceleration,
, takes a negative value (since it is directed downwards towards the Earth). However, it is
occasionally useful to define the coordinates differently. For example, if you are analyzing the motion of a ball
126
3 • Two-Dimensional Kinematics
Access for free at openstax.org

EXAMPLE 3.5
Calculating Projectile Motion: Hot Rock Projectile
Kilauea in Hawaii is the world’s most continuously active volcano. Very active volcanoes characteristically eject red-
hot rocks and lava rather than smoke and ash. Suppose a large rock is ejected from the volcano with a speed of 25.0
m/s and at an angle
above the horizontal, as shown in Figure 3.37. The rock strikes the side of the volcano at
an altitude 20.0 m lower than its starting point. (a) Calculate the time it takes the rock to follow this path. (b) What
are the magnitude and direction of the rock’s velocity at impact?
FIGURE 3.37 The trajectory of a rock ejected from the Kilauea volcano.
Strategy
Again, resolving this two-dimensional motion into two independent one-dimensional motions will allow us to solve
for the desired quantities. The time a projectile is in the air is governed by its vertical motion alone. We will solve for
first. While the rock is rising and falling vertically, the horizontal motion continues at a constant velocity. This
example asks for the final velocity. Thus, the vertical and horizontal results will be recombined to obtain
and
at
the final time
determined in the first part of the example.
Solution for (a)
While the rock is in the air, it rises and then falls to a final position 20.0 m lower than its starting altitude. We can find
the time for this by using
If we take the initial position
to be zero, then the final position is
Now the initial vertical velocity is
the vertical component of the initial velocity, found from
= (
)(
) =
.
Substituting known values yields
Rearranging terms gives a quadratic equation in :
This expression is a quadratic equation of the form
, where the constants are
,
,
and
Its solutions are given by the quadratic formula:
This equation yields two solutions:
and
. (It is left as an exercise for the reader to verify these
thrown downwards from the top of a cliff, it may make sense to define the positive direction downwards since
the motion of the ball is solely in the downwards direction. If this is the case,
takes a positive value.
3.57
3.58
3.59
3.60
3.4 • Projectile Motion
127

solutions.) The time is
or
. The negative value of time implies an event before the start of motion,
and so we discard it. Thus,
Discussion for (a)
The time for projectile motion is completely determined by the vertical motion. So any projectile that has an initial
vertical velocity of 14.3 m/s and lands 20.0 m below its starting altitude will spend 3.96 s in the air.
Solution for (b)
From the information now in hand, we can find the final horizontal and vertical velocities
and
and combine
them to find the total velocity
and the angle
it makes with the horizontal. Of course,
is constant so we can
solve for it at any horizontal location. In this case, we chose the starting point since we know both the initial velocity
and initial angle. Therefore:
The final vertical velocity is given by the following equation:
where
was found in part (a) to be
. Thus,
so that
To find the magnitude of the final velocity
we combine its perpendicular components, using the following
equation:
which gives
The direction
is found from the equation:
so that
Thus,
Discussion for (b)
The negative angle means that the velocity is
below the horizontal. This result is consistent with the fact that
the final vertical velocity is negative and hence downward—as you would expect because the final altitude is 20.0 m
lower than the initial altitude. (See Figure 3.37.)
One of the most important things illustrated by projectile motion is that vertical and horizontal motions are
independent of each other. Galileo was the first person to fully comprehend this characteristic. He used it to predict
the range of a projectile. On level ground, we define range to be the horizontal distance
traveled by a projectile.
Galileo and many others were interested in the range of projectiles primarily for military purp

## Match 3.06 — College_Physics_2e-WEB_7Zesafu § 3.4 Projectile Motion

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Identify and explain the properties of a projectile, such as acceleration due to gravity, range, maximum
height, and trajectory.
•
Determine the location and velocity of a projectile at different points in its trajectory.
•
Apply the principle of independence of motion to solve projectile motion problems.
Projectile motion is the motion of an object thrown or projected into the air, subject to only the acceleration of
gravity. The object is called a projectile, and its path is called its trajectory. The motion of falling objects, as covered
in Problem-Solving Basics for One-Dimensional Kinematics, is a simple one-dimensional type of projectile motion in
which there is no horizontal movement. In this section, we consider two-dimensional projectile motion, such as that
of a football or other object for which air resistance is negligible.
The most important fact to remember here is that motions along perpendicular axes are independent and thus can
be analyzed separately. This fact was discussed in Kinematics in Two Dimensions: An Introduction, where vertical
and horizontal motions were seen to be independent. The key to analyzing two-dimensional projectile motion is to
break it into two motions, one along the horizontal axis and the other along the vertical. (This choice of axes is the
most sensible, because acceleration due to gravity is vertical—thus, there will be no acceleration along the
horizontal axis when air resistance is negligible.) As is customary, we call the horizontal axis the x-axis and the
vertical axis the y-axis. Figure 3.34 illustrates the notation for displacement, where
is defined to be the total
displacement and
and
are its components along the horizontal and vertical axes, respectively. The magnitudes of
these vectors are s, x, and y. (Note that in the last section we used the notation
to represent a vector with
components
and
. If we continued this format, we would call displacement
with components
and
.
However, to simplify the notation, we will simply represent the component vectors as
and
.)
Of course, to describe motion we must deal with velocity and acceleration, as well as with displacement. We must
find their components along the x- and y-axes, too. We will assume all forces except gravity (such as air resistance
and friction, for example) are negligible. The components of acceleration are then very simple:
. (Note that this definition assumes that the upwards direction is defined as the positive
3.4 • Projectile Motion
117

direction. If you arrange the coordinate system instead such that the downwards direction is positive, then
acceleration due to gravity takes a positive value.) Because gravity is vertical,
. Both accelerations are
constant, so the kinematic equations can be used.
FIGURE 3.34 The total displacement
of a soccer ball at a point along its path. The vector
has components
and
along the horizontal
and vertical axes. Its magnitude is , and it makes an angle
with the horizontal.
Given these assumptions, the following steps are then used to analyze projectile motion:
Step 1. Resolve or break the motion into horizontal and vertical components along the x- and y-axes. These axes are
perpendicular, so
and
are used. The magnitude of the components of displacement
along these axes are
and
The magnitudes of the components of the velocity
are
and
where
is the magnitude of the velocity and
is its direction, as shown in Figure 3.35. Initial values
are denoted with a subscript 0, as usual.
Step 2. Treat the motion as two independent one-dimensional motions, one horizontal and the other vertical. The
kinematic equations for horizontal and vertical motion take the following forms:
Review of Kinematic Equations (constant
)
3.28
3.29
3.30
3.31
3.32
3.33
3.34
3.35
3.36
3.37
3.38
3.39
118
3 • Two-Dimensional Kinematics
Access for free at openstax.org

Step 3. Solve for the unknowns in the two separate motions—one horizontal and one vertical. Note that the only
common variable between the motions is time . The problem solving procedures here are the same as for one-
dimensional kinematics and are illustrated in the solved examples below.
Step 4. Recombine the two motions to find the total displacement
and velocity
. Because the x - and y -motions
are perpendicular, we determine these vectors by using the techniques outlined in the Vector Addition and
Subtraction: Analytical Methods and employing
and
in the following form,
where
is the direction of the displacement
and
is the direction of the velocity
:
Total displacement and velocity
3.40
3.41
3.42
3.43
3.44
3.4 • Projectile Motion
119

FIGURE 3.35 (a) We analyze two-dimensional projectile motion by breaking it into two independent one-dimensional motions along the
vertical and horizontal axes. (b) The horizontal motion is simple, because
and
is thus constant. (c) The velocity in the vertical
direction begins to decrease as the object rises; at its highest point, the vertical velocity is zero. As the object falls towards the Earth again,
the vertical velocity increases again in magnitude but points in the opposite direction to the initial vertical velocity. (d) The x - and y
-motions are recombined to give the total velocity at any given point on the trajectory.
EXAMPLE 3.4
A Fireworks Projectile Explodes High and Away
During a fireworks display, a shell is shot into the air with an initial speed of 70.0 m/s at an angle of
above the
horizontal, as illustrated in Figure 3.36. The fuse is timed to ignite the shell just as it reaches its highest point above
the ground. (a) Calculate the height at which the shell explodes. (b) How much time passed between the launch of
the shell and the explosion? (c) What is the horizontal displacement of the shell when it explodes?
Strategy
Because air resistance is negligible for the unexploded shell, the analysis method outlined above can be used. The
motion can be broken into horizontal and vertical motions in which
and
. We can then define
and
to be zero and solve for the desired quantities.
120
3 • Two-Dimensional Kinematics
Access for free at openstax.org

Solution for (a)
By “height” we mean the altitude or vertical position
above the starting point. The highest point in any trajectory,
called the apex, is reached when
. Since we know the initial and final velocities as well as the initial position,
we use the following equation to find
:
FIGURE 3.36 The trajectory of a fireworks shell. The fuse is set to explode the shell at the highest point in its trajectory, which is found to be
at a height of 233 m and 125 m away horizontally.
Because
and
are both zero, the equation simplifies to
Solving for
gives
Now we must find
, the component of the initial velocity in the y-direction. It is given by
, where
is the initial velocity of 70.0 m/s, and
is the initial angle. Thus,
and
is
so that
Discussion for (a)
Note that because up is positive, the initial velocity is positive, as is the maximum height, but the acceleration due to
gravity is negative. Note also that the maximum height depends only on the vertical component of the initial velocity,
so that any projectile with a 67.6 m/s initial vertical component of velocity will reach a maximum height of 233 m
(neglecting air resistance). The numbers in this example are reasonable for large fireworks displays, the shells of
which do reach such heights before exploding. In practice, air resistance is not completely negligible, and so the
initial velocity would have to be somewhat larger than that given to reach the same height.
3.45
3.46
3.47
3.48
3.49
3.50
3.4 • Projectile Motion
121

Solution for (b)
As in many physics problems, there is more than one way to solve for the time to the highest point. In this case, the
easiest method is to use
. Because
is zero, this equation reduces to simply
Note that the final vertical velocity,
, at the highest point is zero. Thus,
Discussion for (b)
This time is also reasonable for large fireworks. When you are able to see the launch of fireworks, you will notice
several seconds pass before the shell explodes. (Another way of finding the time is by using
,
and solving the quadratic equation for .)
Solution for (c)
Because air resistance is negligible,
and the horizontal velocity is constant, as discussed above. The
horizontal displacement is horizontal velocity multiplied by time as given by
, where
is equal to
zero:
where
is the x-component of the velocity, which is given by
Now,
The time
for both motions is the same, and so
is
Discussion for (c)
The horizontal motion is a constant velocity in the absence of air resistance. The horizontal displacement found here
could be useful in keeping the fireworks fragments from falling on spectators. Once the shell explodes, air
resistance has a major effect, and many fragments will land directly below.
In solving part (a) of the preceding example, the expression we found for
is valid for any projectile motion where
air resistance is negligible. Call the maximum height
; then,
This equation defines the maximum height of a projectile and depends only on the vertical component of the initial
velocity.
3.51
3.52
3.53
3.54
3.55
3.56
Defining a Coordinate System
It is important to set up a coordinate system when analyzing projectile motion. One part of defining the
coordinate system is to define an origin for the
and
positions. Often, it is convenient to choose the initial
position of the object as the origin such that
and
. It is also important to define the positive and
negative directions in the
and
directions. Typically, we define the positive vertical direction as upwards, and
the positive horizontal direction is usually the direction of the object’s motion. When this is the case, the vertical
acceleration,
, takes a negative value (since it is directed downwards towards the Earth). However, it is
occasionally useful to define the coordinates differently. For example, if you are analyzing the motion of a ball
122
3 • Two-Dimensional Kinematics
Access for free at openstax.org

EXAMPLE 3.5
Calculating Projectile Motion: Hot Rock Projectile
Kilauea in Hawaii is the world’s most continuously active volcano. Very active volcanoes characteristically eject red-
hot rocks and lava rather than smoke and ash. Suppose a large rock is ejected from the volcano with a speed of 25.0
m/s and at an angle
above the horizontal, as shown in Figure 3.37. The rock strikes the side of the volcano at
an altitude 20.0 m lower than its starting point. (a) Calculate the time it takes the rock to follow this path. (b) What
are the magnitude and direction of the rock’s velocity at impact?
FIGURE 3.37 The trajectory of a rock ejected from the Kilauea volcano.
Strategy
Again, resolving this two-dimensional motion into two independent one-dimensional motions will allow us to solve
for the desired quantities. The time a projectile is in the air is governed by its vertical motion alone. We will solve for
first. While the rock is rising and falling vertically, the horizontal motion continues at a constant velocity. This
example asks for the final velocity. Thus, the vertical and horizontal results will be recombined to obtain
and
at
the final time
determined in the first part of the example.
Solution for (a)
While the rock is in the air, it rises and then falls to a final position 20.0 m lower than its starting altitude. We can find
the time for this by using
If we take the initial position
to be zero, then the final position is
Now the initial vertical velocity is
the vertical component of the initial velocity, found from
= (
)(
) =
.
Substituting known values yields
Rearranging terms gives a quadratic equation in :
This expression is a quadratic equation of the form
, where the constants are
,
,
and
Its solutions are given by the quadratic formula:
This equation yields two solutions:
and
. (It is left as an exercise for the reader to verify these
thrown downwards from the top of a cliff, it may make sense to define the positive direction downwards since
the motion of the ball is solely in the downwards direction. If this is the case,
takes a positive value.
3.57
3.58
3.59
3.60
3.4 • Projectile Motion
123

solutions.) The time is
or
. The negative value of time implies an event before the start of motion,
and so we discard it. Thus,
Discussion for (a)
The time for projectile motion is completely determined by the vertical motion. So any projectile that has an initial
vertical velocity of 14.3 m/s and lands 20.0 m below its starting altitude will spend 3.96 s in the air.
Solution for (b)
From the information now in hand, we can find the final horizontal and vertical velocities
and
and combine
them to find the total velocity
and the angle
it makes with the horizontal. Of course,
is constant so we can
solve for it at any horizontal location. In this case, we chose the starting point since we know both the initial velocity
and initial angle. Therefore:
The final vertical velocity is given by the following equation:
where
was found in part (a) to be
. Thus,
so that
To find the magnitude of the final velocity
we combine its perpendicular components, using the following
equation:
which gives
The direction
is found from the equation:
so that
Thus,
Discussion for (b)
The negative angle means that the velocity is
below the horizontal. This result is consistent with the fact that
the final vertical velocity is negative and hence downward—as you would expect because the final altitude is 20.0 m
lower than the initial altitude. (See Figure 3.37.)
One of the most important things illustrated by projectile motion is that vertical and horizontal motions are
independent of each other. Galileo was the first person to fully comprehend this characteristic. He used it to predict
the range of a projectile. On level ground, we define range to be the horizontal distance
traveled by a projectile.
Galileo and many others were interested in the range of projectiles primarily for military purp
