# Source pack — subjects/physics/foundational/motion-1d
Lesson title: Motion in One Dimension
Level: foundational
Match confidence: 3.07

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.07 — LibreTexts: 3: Describing Motion in One Dimension
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Courses/Berea_College/Introductory_Physics%3A_Berea_College/03%3A_Describing_Motion_in_One_Dimension

3: Describing Motion in One Dimension
- Describe motion in 1D using functions and defining an axis.
- Define position, velocity, speed, and acceleration.
- Use calculus to describe motion
- Define the meaning of an inertial frame of reference.
- Use Galilean and Lorentz transformations to convert the description of an object’s position from one inertial frame to another.
In this chapter, we will introduce the tools required to describe motion in one dimension. In later chapters, we will use the theories of physics to model the motion of objects, but first, we need to make sure that we have the tools to describe the motion. We generally use the word “kinematics” to label the tools for describing motion (e.g. speed, acceleration, position, etc), whereas we refer to “dynamics” when we use the laws of physics to predict motion (e.g. what motion will occur if a force is applied to an object).
 Assume there is no air resistance. When you catch the ball, its speed will be...
- greater than \(v\).
- equal to \(v\).
- less than \(v\).
- in the opposite direction.
The most simple type of motion to describe is that of a particle that is constrained to move along a straight line (one-dimensional motion); much like a train along a straight piece of track. When we say that we want to describe the motion of the particle (or train), what we mean is that we want to be able to say where it is at what time. Formally, we want to know the particle’s position as a function of time , which we will label as \(x(t)\). The function will only be meaningful if:
- we specify an x-axis and the direction that corresponds to increasing values of \(x\)
- we specify an origin where \(x = 0\)
- we specify the units for the quantity, \(x\).
That is, unless all of these are specified, you would have a hard time describing the motion of an object to one of your friends over the phone.
Consider Figure 3.1 where we would like to describe the motion of the grey ball as it moves along a straight line. In order to quantify where the ball is, we introduce the “\(x\)-axis”, illustrated by the black arrow. The direction of the arrow corresponds to the direction where x increases (i.e. becomes more positive). We have also chosen a point where \(x=0\), and by convention, we choose to express \(x\) in units of meters (the S.I. unit for the dimension of length).
Note that we are completely free to choose both the direction of the \(x\)-axis and the location of the origin. The \(x\)-axis is a mathematical construct that we introduce in order to describe the physical world; we could just as easily have chosen for it to point in the opposite direction with a different origin. Since we are completely free to choose where we define the \(x\)-axis, we should choose the option that is most convenient to us.

## Match 3.05 — College_Physics_for_AP_Courses_2e-WEB_DkhNbxV § 2.5 Motion Equations for Constant Acceleration in One Dimension

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Calculate displacement of an object that is not accelerating, given initial position and velocity.
•
Calculate final velocity of an accelerating object, given initial velocity, acceleration, and time.
•
Calculate displacement and final position of an accelerating object, given initial position, initial velocity,
time, and acceleration.
FIGURE 2.24 Kinematic equations can help us describe and predict the motion of moving objects such as these kayaks racing in Newbury,
England. (credit: Barry Skeates, Flickr)
We might know that the greater the acceleration of, say, a car moving away from a stop sign, the greater the
displacement in a given time. But we have not developed a specific equation that relates acceleration and
displacement. In this section, we develop some convenient equations for kinematic relationships, starting from the
definitions of displacement, velocity, and acceleration already covered.
Notation: t, x, v, a
First, let us make some simplifications in notation. Taking the initial time to be zero, as if time is measured with a
stopwatch, is a great simplification. Since elapsed time is
, taking
means that
, the final
time on the stopwatch. When initial time is taken to be zero, we use the subscript 0 to denote initial values of
position and velocity. That is,
is the initial position and
is the initial velocity. We put no subscripts on the final
values. That is,
is the final time,
is the final position, and
is the final velocity. This gives a simpler expression for
elapsed time—now,
. It also simplifies the expression for displacement, which is now
. Also, it
simplifies the expression for change in velocity, which is now
. To summarize, using the simplified
notation, with the initial time taken to be zero,
where the subscript 0 denotes an initial value and the absence of a subscript denotes a final value in whatever
motion is under consideration.
2.24
60
2 • Kinematics
Access for free at openstax.org

We now make the important assumption that acceleration is constant. This assumption allows us to avoid using
calculus to find instantaneous acceleration. Since acceleration is constant, the average and instantaneous
accelerations are equal. That is,
so we use the symbol
for acceleration at all times. Assuming acceleration to be constant does not seriously limit
the situations we can study nor degrade the accuracy of our treatment. For one thing, acceleration is constant in a
great number of situations. Furthermore, in many other situations we can accurately describe motion by assuming a
constant acceleration equal to the average acceleration for that motion. Finally, in motions where acceleration
changes drastically, such as a car accelerating to top speed and then braking to a stop, the motion can be
considered in separate parts, each of which has its own constant acceleration.
The equation
reflects the fact that, when acceleration is constant,
is just the simple average of the
initial and final velocities. For example, if you steadily increase your velocity (that is, with constant acceleration)
from 30 to 60 km/h, then your average velocity during this steady increase is 45 km/h. Using the equation
to check this, we see that
which seems logical.
EXAMPLE 2.8
Calculating Displacement: How Far does the Jogger Run?
A jogger runs down a straight stretch of road with an average velocity of 4.00 m/s for 2.00 min. What is his final
position, taking his initial position to be zero?
Strategy
Draw a sketch.
2.25
SOLVING FOR DISPLACEMENT (
) AND FINAL POSITION ( ) FROM AVERAGE
VELOCITY WHEN ACCELERATION ( ) IS CONSTANT
To get our first two new equations, we start with the definition of average velocity:
Substituting the simplified notation for
and
yields
Solving for
yields
where the average velocity is
2.26
2.27
2.28
2.29
2.30
2.5 • Motion Equations for Constant Acceleration in One Dimension
61

FIGURE 2.25
The final position
is given by the equation
To find
, we identify the values of
,
, and
from the statement of the problem and substitute them into the
equation.
Solution
1. Identify the knowns.
,
, and
.
2. Enter the known values into the equation.
Discussion
Velocity and final displacement are both positive, which means they are in the same direction.
The equation
gives insight into the relationship between displacement, average velocity, and time. It
shows, for example, that displacement is a linear function of average velocity. (By linear function, we mean that
displacement depends on
rather than on
raised to some other power, such as
. When graphed, linear
functions look like straight lines with a constant slope.) On a car trip, for example, we will get twice as far in a given
time if we average 90 km/h than if we average 45 km/h.
FIGURE 2.26 There is a linear relationship between displacement and average velocity. For a given time , an object moving twice as fast as
another object will move twice as far as the other object.
2.31
2.32
SOLVING FOR FINAL VELOCITY
We can derive another useful equation by manipulating the definition of acceleration.
62
2 • Kinematics
Access for free at openstax.org

EXAMPLE 2.9
Calculating Final Velocity: An Airplane Slowing Down after Landing
An airplane lands with an initial velocity of 70.0 m/s and then decelerates at
for 40.0 s. What is its final
velocity?
Strategy
Draw a sketch. We draw the acceleration vector in the direction opposite the velocity vector because the plane is
decelerating.
FIGURE 2.27
Solution
1. Identify the knowns.
,
,
.
2. Identify the unknown. In this case, it is final velocity,
.
3. Determine which equation to use. We can calculate the final velocity using the equation
.
4. Plug in the known values and solve.
Discussion
The final velocity is much less than the initial velocity, as desired when slowing down, but still positive. With jet
engines, reverse thrust could be maintained long enough to stop the plane and start moving it backward. That would
be indicated by a negative final velocity, which is not the case here.
FIGURE 2.28 The airplane lands with an initial velocity of 70.0 m/s and slows to a final velocity of 10.0 m/s before heading for the terminal.
Substituting the simplified notation for
and
gives us
Solving for
yields
2.33
2.34
2.35
2.36
2.5 • Motion Equations for Constant Acceleration in One Dimension
63

Note that the acceleration is negative because its direction is opposite to its velocity, which is positive.
In addition to being useful in problem solving, the equation
gives us insight into the relationships
among velocity, acceleration, and time. From it we can see, for example, that
•
final velocity depends on how large the acceleration is and how long it lasts
•
if the acceleration is zero, then the final velocity equals the initial velocity
, as expected (i.e., velocity is
constant)
•
if
is negative, then the final velocity is less than the initial velocity
(All of these observations fit our intuition, and it is always useful to examine basic equations in light of our intuition
and experiences to check that they do indeed describe nature accurately.)
MAKING CONNECTIONS: REAL-WORLD CONNECTION
FIGURE 2.29 The Space Shuttle Endeavor blasts off from the Kennedy Space Center in February 2010. (credit: Matthew Simantov,
Flickr)
An intercontinental ballistic missile (ICBM) has a larger average acceleration than the Space Shuttle and
achieves a greater velocity in the first minute or two of flight (actual ICBM burn times are classified—short-burn-
time missiles are more difficult for an enemy to destroy). But the Space Shuttle obtains a greater final velocity,
so that it can orbit the earth rather than come directly back down as an ICBM does. The Space Shuttle does this
by accelerating for a longer time.
SOLVING FOR FINAL POSITION WHEN VELOCITY IS NOT CONSTANT (
)
We can combine the equations above to find a third equation that allows us to calculate the final position of an
object experiencing constant acceleration. We start with
Adding
to each side of this equation and dividing by 2 gives
Since
for constant acceleration, then
Now we substitute this expression for
into the equation for displacement,
, yielding
2.37
2.38
2.39
2.40
64
2 • Kinematics
Access for free at openstax.org

EXAMPLE 2.10
Calculating Displacement of an Accelerating Object: Dragsters
Dragsters can achieve average accelerations of
. Suppose such a dragster accelerates from rest at this
rate for 5.56 s. How far does it travel in this time?
FIGURE 2.30 U.S. Army Top Fuel pilot Tony “The Sarge” Schumacher begins a race with a controlled burnout. (credit: Lt. Col. William
Thurmond. Photo Courtesy of U.S. Army.)
Strategy
Draw a sketch.
FIGURE 2.31
We are asked to find displacement, which is
if we take
to be zero. (Think about it like the starting line of a race.
It can be anywhere, but we call it 0 and measure all other positions relative to it.) We can use the equation
once we identify
,
, and
from the statement of the problem.
Solution
1. Identify the knowns. Starting from rest means that
,
is given as
and
is given as 5.56 s.
2. Plug the known values into the equation to solve for the unknown
:
Since the initial position and velocity are both zero, this simplifies to
Substituting the identified values of
and
gives
yielding
2.41
2.42
2.43
2.44
2.5 • Motion Equations for Constant Acceleration in One Dimension
65

Discussion
If we convert 402 m to miles, we find that the distance covered is very close to one quarter of a mile, the standard
distance for drag racing. So the answer is reasonable. This is an impressive displacement in only 5.56 s, but top-
notch dragsters can do a quarter mile in even less time than this.
What else can we learn by examining the equation
We see that:
•
displacement depends on the square of the elapsed time when acceleration is not zero. In Example 2.10, the
dragster covers only one fourth of the total distance in the first half of the elapsed time
•
if acceleration is zero, then the initial velocity equals average velocity (
) and
becomes
EXAMPLE 2.11
Calculating Final Velocity: Dragsters
Calculate the final velocity of the dragster in Example 2.10 without using information about time.
Strategy
Draw a sketch.
FIGURE 2.32
The equation
is ideally suited to this task because it relates velocities, acceleration, and
displacement, and no time information is required.
Solution
1. Identify the known values. We know that
, since the dragster starts from rest. Then we note that
(this was the answer in Example 2.10). Finally, the average acceleration was given to be
.
2. Plug the knowns into the equation
and solve for
SOLVING FOR FINAL VELOCITY WHEN VELOCITY IS NOT CONSTANT (
)
A fourth useful equation can be obtained from another algebraic manipulation of previous equations.
If we solve
for , we get
Substituting this and
into
, we get
2.45
2.46
2.47
66
2 • Kinematics
Access for free at openstax.org

Thus
To get
, we take the square root:
Discussion
145 m/s is about 522 km/h or about 324 mi/h, but even this breakneck speed is short of the record for the quarter
mile. Also, note that a square root has two values; we took the positive value to indicate a velocity in the same
direction as the acceleration.
An examination of the equation
can produce further insights into the general relationships
among physical quantities:
•
The final velocity depends on how large the acceleration is and the distance over which it acts
•
For a fixed deceleration, a car that is going twice as fast doesn’t simply stop in twice the distance—it takes much
further to stop. (This is why we have reduced speed zones near schools.)
Putting Equations Together
In the following examples, we further explore one-dimensional motion, but in situations requiring slightly more
algebraic manipulation. The examples also give insight into problem-solving techniques. The box below provides
easy reference to the equations needed.
EXAMPLE 2.12
Calculating Displacement: How Far Does a Car Go When Coming to a Halt?
On dry concrete, a car can decelerate at a rate of
, whereas on wet concrete it can decelerate at only
. Find the distances necessary to stop a car moving at 30.0 m/s (about 110 km/h) (a) on dry concrete and
(b) on wet concrete. (c) Repeat both calculations, finding the displacement from the point where the driver sees a
traffic light turn red, taking into account his reaction time of 0.500 s to get his foot on the brake.
Strategy
Draw a sketch.
2.48
2.49
SUMMARY OF KINEMATIC EQUATIONS (CONSTANT
)
2.50
2.51
2.52
2.53
2.54
2.5 • Motion Equations for Constant Acceleration in One Dimension
67

FIGURE 2.33
In order to determine which equations are best to use, we need to list all of the known values and identify exactly
what we need to solve for. We shall do this explicitly in the next several examples, using tables to set them off.
Solution for (a)
1. Identify the knowns and what we want to solve for. We know that
;
;
(
is
negative because it is in a direction opposite to velocity). We take
to be 0. We are looking for displacement
, or
.
2. Identify the equation that will help up solve the problem. The best equation to use is
This equation is best because it includes only one unknown,
. We know the values of all the other variables in this
equation. (There are other equations that would allow us to solve for
, but they require us to know the stopping
time, , which we do not know. We could use them but it would entail additional calculations.)
3. Rearrange the equation to solve for
.
4. Enter known values.
Thus,
Solution for (b)
This part can be solved in exactly the same manner as Part A. The only difference is that the deceleration is
. The result is
Solution for (c)
Once the driver reacts, the stopping distance is the same as it is in Parts A and B for dry and wet concrete. So to
answer this question, we need to calculate how far the car travels during the reaction time, and then add that to the
stopping time. It is reasonable to assume that
