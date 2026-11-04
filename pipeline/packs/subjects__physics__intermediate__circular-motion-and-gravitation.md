# Source pack — subjects/physics/intermediate/circular-motion-and-gravitation
Lesson title: Circular Motion & Gravitation
Level: intermediate
Match confidence: 2.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.05 — UniversityPhysicsVol1-WEB § 4.4 Uniform Circular Motion

Learning Objectives
By the end of this section, you will be able to:
•
Solve for the centripetal acceleration of an object moving on a circular path.
•
Use the equations of circular motion to find the position, velocity, and acceleration of a particle executing
circular motion.
•
Explain the differences between centripetal acceleration and tangential acceleration resulting from
nonuniform circular motion.
•
Evaluate centripetal and tangential acceleration in nonuniform circular motion, and find the total
acceleration vector.
Uniform circular motion is a specific type of motion in which an object travels in a circle with a constant speed.
For example, any point on a propeller spinning at a constant rate is executing uniform circular motion. Other
examples are the second, minute, and hour hands of a watch. It is remarkable that points on these rotating
objects are actually accelerating, although the rotation rate is a constant. To see this, we must analyze the
172
4 • Motion in Two and Three Dimensions
Access for free at openstax.org.

motion in terms of vectors.
Centripetal Acceleration
In one-dimensional kinematics, objects with a constant speed have zero acceleration. However, in two- and
three-dimensional kinematics, even if the speed is a constant, a particle can have acceleration if it moves along
a curved trajectory such as a circle. In this case the velocity vector is changing, or
This is shown in
Figure 4.18. As the particle moves counterclockwise in time
on the circular path, its position vector moves
from
to
The velocity vector has constant magnitude and is tangent to the path as it changes from
to
changing its direction only. Since the velocity vector
is perpendicular to the position
vector
the triangles formed by the position vectors and
and the velocity vectors and
are similar.
Furthermore, since
and
the two triangles are isosceles. From these facts
we can make the assertion
or
Figure 4.18
(a) A particle is moving in a circle at a constant speed, with position and velocity vectors at times
and
(b) Velocity
vectors forming a triangle. The two triangles in the figure are similar. The vector
points toward the center of the circle in the limit
We can find the magnitude of the acceleration from
The direction of the acceleration can also be found by noting that as
and therefore
approach zero, the
vector
approaches a direction perpendicular to
In the limit
is perpendicular to
Since
is
tangent to the circle, the acceleration
points toward the center of the circle. Summarizing, a particle
moving in a circle at a constant speed has an acceleration with magnitude
4.4 • Uniform Circular Motion
173

The direction of the acceleration vector is toward the center of the circle (Figure 4.19). This is a radial
acceleration and is called the centripetal acceleration, which is why we give it the subscript c. The word
centripetal comes from the Latin words centrum (meaning “center”) and petere (meaning “to seek”), and thus
takes the meaning “center seeking.”
Figure 4.19
The centripetal acceleration vector points toward the center of the circular path of motion and is an acceleration in the radial
direction. The velocity vector is also shown and is tangent to the circle.
Let’s investigate some examples that illustrate the relative magnitudes of the velocity, radius, and centripetal
acceleration.
EXAMPLE 4.10
Creating an Acceleration of 1 g
A jet is flying at 134.1 m/s along a straight line and makes a turn along a circular path level with the ground.
What does the radius of the circle have to be to produce a centripetal acceleration of 1 g on the pilot and jet
toward the center of the circular trajectory?
Strategy
Given the speed of the jet, we can solve for the radius of the circle in the expression for the centripetal
acceleration.
Solution
Set the centripetal acceleration equal to the acceleration of gravity:
Solving for the radius, we find
Significance
To create a greater acceleration than g on the pilot, the jet would either have to decrease the radius of its
circular trajectory or increase its speed on its existing trajectory or both.
CHECK YOUR UNDERSTANDING 4.5
A flywheel has a radius of 20.0 cm. What is the speed of a point on the edge of the flywheel if it experiences a
centripetal acceleration of
4.27
174
4 • Motion in Two and Three Dimensions
Access for free at openstax.org.

Centripetal acceleration can have a wide range of values, depending on the speed and radius of curvature of
the circular path. Typical centripetal accelerations are given in the following table.
Object
Centripetal Acceleration (m/s2 or factors of
g)
Earth around the Sun
Moon around the Earth
Satellite in geosynchronous orbit
0.233
Outer edge of a CD when playing
Jet in a barrel roll
(2–3 g)
Roller coaster
(5 g)
Electron orbiting a proton in a simple Bohr model of the
atom
Table 4.1 Typical Centripetal Accelerations
Equations of Motion for Uniform Circular Motion
A particle executing circular motion can be described by its position vector
Figure 4.20 shows a particle
executing circular motion in a counterclockwise direction. As the particle moves on the circle, its position
vector sweeps out the angle
with the x-axis. Vector
making an angle
with the x-axis is shown with its
components along the x- and y-axes. The magnitude of the position vector is
and is also the radius of
the circle, so that in terms of its components,
Here,
is a constant called the angular frequency of the particle. The angular frequency has units of radians
(rad) per second and is simply the number of radians of angular measure through which the particle passes
per second. The angle
that the position vector has at any particular time is
.
If T is the period of motion, or the time to complete one revolution (
rad), then
4.28
4.4 • Uniform Circular Motion
175

Figure 4.20
The position vector for a particle in circular motion with its components along the x- and y-axes. The particle moves
counterclockwise. Angle
is the angular frequency
in radians per second multiplied by t.
Velocity and acceleration can be obtained from the position function by differentiation:
It can be shown from Figure 4.20 that the velocity vector is tangential to the circle at the location of the
particle, with magnitude
Similarly, the acceleration vector is found by differentiating the velocity:
From this equation we see that the acceleration vector has magnitude
and is directed opposite the
position vector, toward the origin, because
EXAMPLE 4.11
Circular Motion of a Proton
A proton has speed
and is moving in a circle in the xy plane of radius r = 0.175 m. What is its
position in the xy plane at time
At t = 0, the position of the proton is
and it
circles counterclockwise. Sketch the trajectory.
Solution
From the given data, the proton has period and angular frequency:
The position of the particle at
with A = 0.175 m is
From this result we see that the proton is located slightly below the x-axis. This is shown in Figure 4.21.
4.29
4.30
176
4 • Motion in Two and Three Dimensions
Access for free at openstax.org.

Figure 4.21
Position vector of the proton at
The trajectory of the proton is shown. The angle through which
the proton travels along the circle is 5.712 rad, which a little less than one complete revolution.
Significance
We picked the initial position of the particle to be on the x-axis. This was completely arbitrary. If a different
starting position were given, we would have a different final position at t = 200 ns.
Nonuniform Circular Motion
Circular motion does not have to be at a constant speed. A particle can travel in a circle and speed up or slow
down, showing an acceleration in the direction of the motion.
In uniform circular motion, the particle executing circular motion has a constant speed and the circle is at a
fixed radius. If the speed of the particle is changing as well, then we introduce an additional acceleration in the
direction tangential to the circle. Such accelerations occur at a point on a top that is changing its spin rate, or
any accelerating rotor. In Displacement and Velocity Vectors we showed that centripetal acceleration is the
time rate of change of the direction of the velocity vector. If the speed of the particle is changing, then it has a
tangential acceleration that is the time rate of change of the magnitude of the velocity:
The direction of tangential acceleration is tangent to the circle whereas the direction of centripetal
acceleration is radially inward toward the center of the circle. Thus, a particle in circular motion with a
tangential acceleration has a total acceleration that is the vector sum of the centripetal and tangential
accelerations:
The acceleration vectors are shown in Figure 4.22. Note that the two acceleration vectors
and
are
perpendicular to each other, with
in the radial direction and
in the tangential direction. The total
acceleration
points at an angle between
and
4.31
4.32
4.4 • Uniform Circular Motion
177

Figure 4.22
The centripetal acceleration points toward the center of the circle. The tangential acceleration is tangential to the circle at the
particle’s position. The total acceleration is the vector sum of the tangential and centripetal accelerations, which are perpendicular.
EXAMPLE 4.12
Total Acceleration during Circular Motion
A particle moves in a circle of radius r = 2.0 m. During the time interval from t = 1.5 s to t = 4.0 s its speed
varies with time according to
What is the total acceleration of the particle at t = 2.0 s?
Strategy
We are given the speed of the particle and the radius of the circle, so we can calculate centripetal acceleration
easily. The direction of the centripetal acceleration is toward the center of the circle. We find the magnitude of
the tangential acceleration by taking the derivative with respect to time of
using Equation 4.31 and
evaluating it at t = 2.0 s. We use this and the magnitude of the centripetal acceleration to find the total
acceleration.
Solution
Centripetal acceleration is
directed toward the center of the circle. Tangential acceleration is
Total acceleration is
and
from the tangent to the circle. See Figure 4.23.
178
4 • Motion in Two and Three Dimensions
Access for free at openstax.org.

Figure 4.23
The tangential and centripetal acceleration vectors. The net acceleration
is the vector sum of the two accelerations.
Significance
The directions of centripetal and tangential accelerations can be described more conveniently in terms of a
polar coordinate system, with unit vectors in the radial and tangential directions. This coordinate system,
which is used for motion along curved paths, is discussed in detail later in the book.

## Match 2.05 — UniversityPhysicsVol1-WEB § 15.3 Comparing Simple Harmonic Motion and Circular Motion

Learning Objectives
By the end of this section, you will be able to:
•
Describe how the sine and cosine functions relate to the concepts of circular motion
•
Describe the connection between simple harmonic motion and circular motion
An easy way to model SHM is by considering uniform circular motion. Figure 15.17 shows one way of using
this method. A peg (a cylinder of wood) is attached to a vertical disk, rotating with a constant angular
frequency. Figure 15.18 shows a side view of the disk and peg. If a lamp is placed above the disk and peg, the
peg produces a shadow. Let the disk have a radius of
and define the position of the shadow that coincides
with the center line of the disk to be
. As the disk rotates at a constant rate, the shadow oscillates
between
and
. Now imagine a block on a spring beneath the floor as shown in Figure 15.18.
15.12
15.13
740
15 • Oscillations
Access for free at openstax.org.

Figure 15.17
SHM can be modeled as rotational motion by looking at the shadow of a peg on a wheel rotating at a constant angular
frequency.
15.3 • Comparing Simple Harmonic Motion and Circular Motion
741

Figure 15.18
Light shines down on the disk so that the peg makes a shadow. If the disk rotates at just the right angular frequency, the
shadow follows the motion of the block on a spring. If there is no energy dissipated due to nonconservative forces, the block and the
shadow will oscillate back and forth in unison. In this figure, four snapshots are taken at four different times. (a) The wheel starts at
and the shadow of the peg is at
, representing the mass at position
. (b) As the disk rotates through an angle
, the
shadow of the peg is between
and
. (c) The disk continues to rotate until
, at which the shadow follows the mass to
. (d) The disk continues to rotate, the shadow follows the position of the mass.
If the disk turns at the proper angular frequency, the shadow follows along with the block. The position of the
shadow can be modeled with the equation
Recall that the block attached to the spring does not move at a constant velocity. How often does the wheel have
to turn to have the peg’s shadow always on the block? The disk must turn at a constant angular frequency
equal to
times the frequency of oscillation
.
15.14
742
15 • Oscillations
Access for free at openstax.org.

Figure 15.19 shows the basic relationship between uniform circular motion and SHM. The peg lies at the tip of
the radius, a distance A from the center of the disk. The x-axis is defined by a line drawn parallel to the ground,
cutting the disk in half. The y-axis (not shown) is defined by a line perpendicular to the ground, cutting the
disk into a left half and a right half. The center of the disk is the point
The projection of the
position of the peg onto the fixed x-axis gives the position of the shadow, which undergoes SHM analogous to
the system of the block and spring. At the time shown in the figure, the projection has position x and moves to
the left with velocity v. The tangential velocity of the peg around the circle equals
of the block on the
spring. The x-component of the velocity is equal to the velocity of the block on the spring.
Figure 15.19
A peg moving on a circular path with a constant angular velocity
is undergoing uniform circular motion. Its projection on
the x-axis undergoes SHM. Also shown is the velocity of the peg around the circle,
, and its projection, which is v. Note that these
velocities form a similar triangle to the displacement triangle.
We can use Figure 15.19 to analyze the velocity of the shadow as the disk rotates. The peg moves in a circle
with a speed of
. The shadow moves with a velocity equal to the component of the peg’s velocity that
is parallel to the surface where the shadow is being produced:
It follows that the acceleration is
CHECK YOUR UNDERSTANDING 15.3
Identify an object that undergoes uniform circular motion. Describe how you could trace the SHM of this
object.
15.15
15.16
15.3 • Comparing Simple Harmonic Motion and Circular Motion
743


## Match 2.03 — College_Physics-WEB_2s5sHvR § 16.6 Uniform Circular Motion and Simple Harmonic Motion

Figure 16.17 The horses on this merry-go-round exhibit uniform circular motion. (credit: Wonderlane, Flickr)
There is an easy way to produce simple harmonic motion by using uniform circular motion. Figure 16.18 shows one way of using
this method. A ball is attached to a uniformly rotating vertical turntable, and its shadow is projected on the floor as shown. The
shadow undergoes simple harmonic motion. Hooke’s law usually describes uniform circular motions (
constant) rather than
systems that have large visible displacements. So observing the projection of uniform circular motion, as in Figure 16.18, is often
easier than observing a precise large-scale simple harmonic oscillator. If studied in sufficient depth, simple harmonic motion
produced in this manner can give considerable insight into many aspects of oscillations and waves and is very useful
mathematically. In our brief treatment, we shall indicate some of the major features of this relationship and how they might be
useful.
16.45
16.46
16.47
16.6 • Uniform Circular Motion and Simple Harmonic Motion
683

Figure 16.18 The shadow of a ball rotating at constant angular velocity
on a turntable goes back and forth in precise simple harmonic
motion.
Figure 16.19 shows the basic relationship between uniform circular motion and simple harmonic motion. The point P travels
around the circle at constant angular velocity
. The point P is analogous to an object on the merry-go-round. The projection of
the position of P onto a fixed axis undergoes simple harmonic motion and is analogous to the shadow of the object. At the time
shown in the figure, the projection has position
and moves to the left with velocity . The velocity of the point P around the
circle equals
.The projection of
on the -axis is the velocity
of the simple harmonic motion along the -axis.
Figure 16.19 A point P moving on a circular path with a constant angular velocity
is undergoing uniform circular motion. Its projection on
the x-axis undergoes simple harmonic motion. Also shown is the velocity of this point around the circle,
, and its projection, which is .
Note that these velocities form a similar triangle to the displacement triangle.
To see that the projection undergoes simple harmonic motion, note that its position
is given by
where
,
is the constant angular velocity, and
is the radius of the circular path. Thus,
The angular velocity
is in radians per unit time; in this case
radians is the time for one revolution
. That is,
.
Substituting this expression for
, we see that the position
is given by:
This expression is the same one we had for the position of a simple harmonic oscillator in Simple Harmonic Motion: A Special
16.48
16.49
16.50
684
Chapter 16 • Oscillatory Motion and Waves
Access for free at openstax.org.

Periodic Motion. If we make a graph of position versus time as in Figure 16.20, we see again the wavelike character (typical of
simple harmonic motion) of the projection of uniform circular motion onto the -axis.
Figure 16.20 The position of the projection of uniform circular motion performs simple harmonic motion, as this wavelike graph of
versus
indicates.
Now let us use Figure 16.19 to do some further analysis of uniform circular motion as it relates to simple harmonic motion. The
triangle formed by the velocities in the figure and the triangle formed by the displacements (
and
) are similar
right triangles. Taking ratios of similar sides, we see that
We can solve this equation for the speed
or
This expression for the speed of a simple harmonic oscillator is exactly the same as the equation obtained from conservation of
energy considerations in Energy and the Simple Harmonic Oscillator.You can begin to see that it is possible to get all of the
characteristics of simple harmonic motion from an analysis of the projection of uniform circular motion.
Finally, let us consider the period
of the motion of the projection. This period is the time it takes the point P to complete one
revolution. That time is the circumference of the circle
divided by the velocity around the circle,
. Thus, the period
is
We know from conservation of energy considerations that
Solving this equation for
gives
Substituting this expression into the equation for
yields
16.51
16.52
16.53
16.54
16.55
16.6 • Uniform Circular Motion and Simple Harmonic Motion
685

Thus, the period of the motion is the same as for a simple harmonic oscillator. We have determined the period for any simple
harmonic oscillator using the relationship between uniform circular motion and simple harmonic motion.
Some modules occasionally refer to the connection between uniform circular motion and simple harmonic motion. Moreover, if
you carry your study of physics and its applications to greater depths, you will find this relationship useful. It can, for example,
help to analyze how waves add when they are superimposed.
CHECK YOUR UNDERSTANDING
Identify an object that undergoes uniform circular motion. Describe how you could trace the simple harmonic motion of this
object as a wave.
Solution
A record player undergoes uniform circular motion. You could attach dowel rod to one point on the outside edge of the turntable
and attach a pen to the other end of the dowel. As the record player turns, the pen will move. You can drag a long piece of paper
under the pen, capturing its motion as a wave.
