# Source pack — subjects/surveying/foundational/surveying-mathematics
Lesson title: Surveying Mathematics
Level: foundational
Match confidence: 1.53

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.53 — UniversityPhysicsVolume3-WEB § 3.2 Mathematics of Interference

Learning Objectives
By the end of this section, you will be able to:
•
Determine the angles for bright and dark fringes for double slit interference
•
Calculate the positions of bright fringes on a screen
Figure 3.7(a) shows how to determine the path length difference
for waves traveling from two slits to a
common point on a screen. If the screen is a large distance away compared with the distance between the slits,
then the angle
between the path and a line from the slits to the screen [part (b)] is nearly the same for each
path. In other words,
and
are essentially parallel. The lengths of
and
differ by
, as indicated by the
two dashed lines in the figure. Simple trigonometry shows
where d is the distance between the slits. Combining this result with Equation 3.1, we obtain constructive
interference for a double slit when the path length difference is an integral multiple of the wavelength, or
Similarly, to obtain destructive interference for a double slit, the path length difference must be a half-integral
multiple of the wavelength, or
where
is the wavelength of the light, d is the distance between slits, and
is the angle from the original
direction of the beam as discussed above. We call m the order of the interference. For example,
is
fourth-order interference.
3.3
3.4
3.5
3.2 • Mathematics of Interference
117

Figure 3.7
(a) To reach P, the light waves from
and
must travel different distances. (b) The path difference between the two rays is
.
The equations for double-slit interference imply that a series of bright and dark lines are formed. For vertical
slits, the light spreads out horizontally on either side of the incident beam into a pattern called interference
fringes (Figure 3.8). The closer the slits are, the more the bright fringes spread apart. We can see this by
examining the equation
. For fixed
and m, the smaller d is, the larger
must be, since
. This is consistent with our contention that wave effects are most noticeable when the object the
wave encounters (here, slits a distance d apart) is small. Small d gives large , hence, a large effect.
Referring back to part (a) of the figure,
is typically small enough that
, where
is the
distance from the central maximum to the mth bright fringe and D is the distance between the slit and the
screen. Equation 3.4 may then be written as
or
3.6
118
3 • Interference
Access for free at openstax.org.

Figure 3.8
The interference pattern for a double slit has an intensity that falls off with angle. The image shows multiple bright and dark
lines, or fringes, formed by light passing through a double slit.
EXAMPLE 3.1
Finding a Wavelength from an Interference Pattern
Suppose you pass light from a He-Ne laser through two slits separated by 0.0100 mm and find that the third
bright line on a screen is formed at an angle of
relative to the incident beam. What is the wavelength of
the light?
Strategy
The phenomenon is two-slit interference as illustrated in Figure 3.8 and the third bright line is due to third-
order constructive interference, which means that
. We are given
and
. The
wavelength can thus be found using the equation
for constructive interference.
Solution
Solving
for the wavelength
gives
Substituting known values yields
Significance
To three digits, this is the wavelength of light emitted by the common He-Ne laser. Not by coincidence, this red
color is similar to that emitted by neon lights. More important, however, is the fact that interference patterns
can be used to measure wavelength. Young did this for visible wavelengths. This analytical techinque is still
widely used to measure electromagnetic spectra. For a given order, the angle for constructive interference
increases with
, so that spectra (measurements of intensity versus wavelength) can be obtained.
3.2 • Mathematics of Interference
119

EXAMPLE 3.2
Calculating the Highest Order Possible
Interference patterns do not have an infinite number of lines, since there is a limit to how big m can be. What is
the highest-order constructive interference possible with the system described in the preceding example?
Strategy
The equation
(for
) describes constructive interference from two slits. For
fixed values of
, the larger m is, the larger
is. However, the maximum value that
can have is 1,
for an angle of
. (Larger angles imply that light goes backward and does not reach the screen at all.) Let us
find what value of m corresponds to this maximum diffraction angle.
Solution
Solving the equation
for m gives
Taking
and substituting the values of
from the preceding example gives
Therefore, the largest integer m can be is 15, or
.
Significance
The number of fringes depends on the wavelength and slit separation. The number of fringes is very large for
large slit separations. However, recall (see The Propagation of Light and the introduction for this chapter) that
wave interference is only prominent when the wave interacts with objects that are not large compared to the
wavelength. Therefore, if the slit separation and the sizes of the slits become much greater than the
wavelength, the intensity pattern of light on the screen changes, so there are simply two bright lines cast by the
slits, as expected, when light behaves like rays. We also note that the fringes get fainter farther away from the
center. Consequently, not all 15 fringes may be observable.
CHECK YOUR UNDERSTANDING 3.1
In the system used in the preceding examples, at what angles are the first and the second bright fringes
formed?

## Match 1.52 — UniversityPhysicsVol1-WEB § 16.2 Mathematics of Waves

Learning Objectives
By the end of this section, you will be able to:
•
Model a wave, moving with a constant wave velocity, with a mathematical expression
•
Calculate the velocity and acceleration of the medium
•
Show how the velocity of the medium differs from the wave velocity (propagation velocity)
In the previous section, we described periodic waves by their characteristics of wavelength, period, amplitude,
and wave speed of the wave. Waves can also be described by the motion of the particles of the medium through
which the waves move. The position of particles of the medium can be mathematically modeled as wave
functions, which can be used to find the position, velocity, and acceleration of the particles of the medium of
the wave at any time.
Pulses
A pulse can be described as wave consisting of a single disturbance that moves through the medium with a
constant amplitude. The pulse moves as a pattern that maintains its shape as it propagates with a constant
wave speed. Because the wave speed is constant, the distance the pulse moves in a time
is equal to
(Figure 16.8).
Figure 16.8
The pulse at time
is centered on
with amplitude A. The pulse moves as a pattern with a constant shape, with a
constant maximum value A. The velocity is constant and the pulse moves a distance
in a time
The distance traveled is
measured with any convenient point on the pulse. In this figure, the crest is used.
Modeling a One-Dimensional Sinusoidal Wave using a Wave Function
Consider a string kept at a constant tension
where one end is fixed and the free end is oscillated between
and
by a mechanical device at a constant frequency. Figure 16.9 shows snapshots of the wave
at an interval of an eighth of a period, beginning after one period
774
16 • Waves
Access for free at openstax.org.

Figure 16.9
Snapshots of a transverse wave moving through a string under tension, beginning at time
and taken at intervals of
Colored dots are used to highlight points on the string. Points that are a wavelength apart in the x-direction are highlighted with the same
color dots.
Notice that each select point on the string (marked by colored dots) oscillates up and down in simple harmonic
motion, between
and
with a period T. The wave on the string is sinusoidal and is translating
in the positive x-direction as time progresses.
At this point, it is useful to recall from your study of algebra that if f(x) is some function, then
is the
same function translated in the positive x-direction by a distance d. The function
is the same
function translated in the negative x-direction by a distance d. We want to define a wave function that will give
the y-position of each segment of the string for every position x along the string for every time t.
Looking at the first snapshot in Figure 16.9, the y-position of the string between
and
can be
modeled as a sine function. This wave propagates down the string one wavelength in one period, as seen in the
last snapshot. The wave therefore moves with a constant wave speed of
Recall that a sine function is a function of the angle , oscillating between
and
, and repeating every
radians (Figure 16.10). However, the y-position of the medium, or the wave function, oscillates between
and
, and repeats every wavelength
.
16.2 • Mathematics of Waves
775

Figure 16.10
A sine function oscillates between
and
every
radians.
To construct our model of the wave using a periodic function, consider the ratio of the angle and the position,
Using
and multiplying the sine function by the amplitude A, we can now model the y-position of the
string as a function of the position x:
The wave on the string travels in the positive x-direction with a constant velocity v, and moves a distance vt in
a time t. The wave function can now be defined by
It is often convenient to rewrite this wave function in a more compact form. Multiplying through by the ratio
leads to the equation
The value
is defined as the wave number. The symbol for the wave number is k and has units of inverse
meters,
Recall from Oscillations that the angular frequency is defined as
The second term of the wave function
becomes
The wave function for a simple harmonic wave on a string reduces to
where A is the amplitude,
is the wave number,
is the angular frequency, the minus sign is for
waves moving in the positive x-direction, and the plus sign is for waves moving in the negative x-direction. The
velocity of the wave is equal to
Think back to our discussion of a mass on a spring, when the position of the mass was modeled as
16.2
16.3
776
16 • Waves
Access for free at openstax.org.

The angle
is a phase shift, added to allow for the fact that the mass may have initial
conditions other than
and
For similar reasons, the initial phase is added to the wave function.
The wave function modeling a sinusoidal wave, allowing for an initial phase shift
is
The value
is known as the phase of the wave, where
is the initial phase of the wave function. Whether the temporal
term
is negative or positive depends on the direction of the wave. First consider the minus sign for a wave
with an initial phase equal to zero
The phase of the wave would be
Consider following a
point on a wave, such as a crest. A crest will occur when
, that is, when
for any integral value of n. For instance, one particular crest occurs at
As the wave moves, time
increases and x must also increase to keep the phase equal to
Therefore, the minus sign is for a wave
moving in the positive x-direction. Using the plus sign,
As time increases, x must decrease to
keep the phase equal to
The plus sign is used for waves moving in the negative x-direction. In summary,
models a wave moving in the positive x-direction and
models a wave moving in the negative x-direction.
Equation 16.4 is known as a simple harmonic wave function. A wave function is any function such that
Later in this chapter, we will see that it is a solution to the linear wave equation. Note that
works equally well because it corresponds to a different phase shift
PROBLEM-SOLVING STRATEGY
Finding the Characteristics of a Sinusoidal Wave
1.
To find the amplitude, wavelength, period, and frequency of a sinusoidal wave, write down the wave
function in the form
2.
The amplitude can be read straight from the equation and is equal to A.
3.
The period of the wave can be derived from the angular frequency
4.
The frequency can be found using
5.
The wavelength can be found using the wave number
EXAMPLE 16.3
Characteristics of a Traveling Wave on a String
A transverse wave on a taut string is modeled with the wave function
Find the amplitude, wavelength, period, and speed of the wave.
Strategy
All these characteristics of the wave can be found from the constants included in the equation or from simple
combinations of these constants.
Solution
1.
The amplitude, wave number, and angular frequency can be read directly from the wave equation:
16.4
16.5
16.2 • Mathematics of Waves
777

2.
The wave number can be used to find the wavelength:
3.
The period of the wave can be found using the angular frequency:
4.
The speed of the wave can be found using the wave number and the angular frequency. The direction of
the wave can be determined by considering the sign of
: A negative sign suggests that the wave is
moving in the positive x-direction:
Significance
All of the characteristics of the wave are contained in the wave function. Note that the wave speed is the speed
of the wave in the direction parallel to the motion of the wave. Plotting the height of the medium y versus the
position x for two times
and
can provide a graphical visualization of the wave (Figure
16.11).
Figure 16.11
A graph of height of the wave y as a function of position x for snapshots of the wave at two times. The dotted line represents
the wave at time
and the solid line represents the wave at
Since the wave velocity is constant, the distance the wave
travels is the wave velocity times the time interval. The black dots indicate the points used to measure the displacement of the wave. The
medium moves up and down, whereas the wave moves to the right.
There is a second velocity to the motion. In this example, the wave is transverse, moving horizontally as the
medium oscillates up and down perpendicular to the direction of motion. The graph in Figure 16.12 shows the
motion of the medium at point
as a function of time. Notice that the medium of the wave oscillates
up and down between
and
every period of 4.0 seconds.
778
16 • Waves
Access for free at openstax.org.

Figure 16.12
A graph of height of the wave y as a function of time t for the position
The medium oscillates between
and
every period. The period represented picks two convenient points in the oscillations to measure the period.
The period can be measured between any two adjacent points with the same amplitude and the same velocity,
The velocity can be
found by looking at the slope tangent to the point on a y-versus-t plot. Notice that at times
and
the heights and the
velocities are the same and the period of the oscillation is 4.00 s.
CHECK YOUR UNDERSTANDING 16.3
The wave function above is derived using a sine function. Can a cosine function be used instead?
Velocity and Acceleration of the Medium
As seen in Example 16.4, the wave speed is constant and represents the speed of the wave as it propagates
through the medium, not the speed of the particles that make up the medium. The particles of the medium
oscillate around an equilibrium position as the wave propagates through the medium. In the case of the
transverse wave propagating in the x-direction, the particles oscillate up and down in the y-direction,
perpendicular to the motion of the wave. The velocity of the particles of the medium is not constant, which
means there is an acceleration. The velocity of the medium, which is perpendicular to the wave velocity in a
transverse wave, can be found by taking the partial derivative of the position equation with respect to time. The
partial derivative is found by taking the derivative of the function, treating all variables as constants, except for
the variable in question. In the case of the partial derivative with respect to time t, the position x is treated as a
constant. Although this may sound strange if you haven’t seen it before, the object of this exercise is to find the
transverse velocity at a point, so in this sense, the x-position is not changing. We have
The magnitude of the maximum velocity of the medium is
. This may look familiar from the
Oscillations and a mass on a spring.
We can find the acceleration of the medium by taking the partial derivative of the velocity equation with
respect to time,
16.2 • Mathematics of Waves
779

The magnitude of the maximum acceleration is
The particles of the medium, or the mass
elements, oscillate in simple harmonic motion for a mechanical wave.
The Linear Wave Equation
We have just determined the velocity of the medium at a position x by taking the partial derivative, with
respect to time, of the position y. For a transverse wave, this velocity is perpendicular to the direction of
propagation of the wave. We found the acceleration by taking the partial derivative, with respect to time, of the
velocity, which is the second time derivative of the position:
Now consider the partial derivatives with respect to the other variable, the position x, holding the time
constant. The first derivative is the slope of the wave at a point x at a time t,
The second partial derivative expresses how the slope of the wave changes with respect to position—in other
words, the curvature of the wave, where
The ratio of the acceleration and the curvature leads to a very important relationship in physics known as the
linear wave equation. Taking the ratio and using the equation
yields the linear wave equation (also
known simply as the wave equation or the equation of a vibrating string),
Equation 16.6 is the linear wave equation, which is one of the most important equations in physics and
engineering. We derived it here for a transverse wave, but it is equally important when investigating
longitudinal waves. This relationship was also derived using a sinusoidal wave, but it successfully describes
any wave or pulse that has the form
These waves result due to a linear restoring force of
the medium—thus, the name linear wave equation. Any wave function that satisfies this equation is a linear
wave function.
An interesting aspect of the linear wave equation is that if two wave functions are individually solutions to the
linear wave equation, then the sum of the two linear wave functions is also a solution to the wave equation.
Consider two transverse waves that propagate along the x-axis, occupying the same medium. Assume that the
individual waves can be modeled with the wave functions
and
which are solutions to the linear wave equations and are therefore linear wave functions. The sum of the wave
functions is the wave function
Consider the linear wave equation:
16.6
780
16 • Waves
Access for free at openstax.org.

This has shown that if two linear wave functions are added algebraically, the resulting wave function is also
linear. This wave function models the displacement of the medium of the resulting wave at each position along
the x-axis. If two linear waves occupy the same medium, they are said to interfere. If these waves can be
modeled with a linear wave function, these wave functions add to form the wave equation of the wave resulting
from the interference of the individual waves. The displacement of the medium at every point of the resulting
wave is the algebraic sum of the displacements due to the individual waves.
Taking this analysis a step further, if wave functions
and
are
solutions to the linear wave equation, then
where A and B are constants, is also a
solution to the linear wave equation. This property is known as the principle of superposition. Interference
and superposition are covered in more detail in Interference of Waves.
EXAMPLE 16.4
Interfe

## Match 1.04 — ContemporaryMathematics-WEB § 10.8 Right Triangle Trigonometry

Figure 10.137 In the lower left corner of the fresco The School of Athens by Raphael, the figure in white writing in the
book represents Pythagoras. Alongside him, to the right, the figure with the long, light-brown hair is said to depict
Archimedes. (credit: modification of work “School of Athens” by Raphael (1483–1520), Vatican Museums/Wikimedia,
Public Domain)
Learning Objectives
After completing this section, you should be able to:
1.
Apply the Pythagorean Theorem to find the missing sides of a right triangle.
2.
Apply the
and
right triangle relationships to find the missing sides of a triangle.
3.
Apply trigonometric ratios to find missing parts of a right triangle.
4.
Solve application problems involving trigonometric ratios.
This is another excerpt from Raphael’s The School of Athens. The man writing in the book represents Pythagoras, the
namesake of one of the most widely used formulas in geometry, engineering, architecture, and many other fields, the
Pythagorean Theorem. However, there is evidence that the theorem was known as early as 1900–1100 BC by the
Babylonians. The Pythagorean Theorem is a formula used for finding the lengths of the sides of right triangles.
Born in Greece, Pythagoras lived from 569–500 BC. He initiated a cult-like group called the Pythagoreans, which was a
secret society composed of mathematicians, philosophers, and musicians. Pythagoras believed that everything in the
world could be explained through numbers. Besides the Pythagorean Theorem, Pythagoras and his followers are
credited with the discovery of irrational numbers, the musical scale, the relationship between music and mathematics,
and many other concepts that left an immeasurable influence on future mathematicians and scientists.
The focus of this section is on right triangles. We will look at how the Pythagorean Theorem is used to find the
unknown sides of a right triangle, and we will also study the special triangles, those with set ratios between the lengths
of sides. By ratios we mean the relationship of one side to another side. When you think about ratios, you should think
about fractions. A fraction is a ratio, the ratio of the numerator to the denominator. Finally, we will preview trigonometry.
We will learn about the basic trigonometric functions, sine, cosine and tangent, and how they are used to find not only
unknown sides but unknown angles, as well, with little information.
1098
10 • Geometry
Access for free at openstax.org

Pythagorean Theorem
The Pythagorean Theorem is used to find unknown sides of right triangles. The theorem states that the sum of the
squares of the two legs of a right triangle equals the square of the hypotenuse (the longest side of the right triangle).
FORMULA
The Pythagorean Theorem states
where
and
are two sides (legs) of a right triangle and
is the hypotenuse, as shown in Figure 10.138.
Figure 10.138 Pythagorean Right Triangle
For example, given that side
and side
we can find the measure of side
using the Pythagorean Theorem.
Thus,
EXAMPLE 10.64
Using the Pythagorean Theorem
Find the length of the missing side of the triangle (Figure 10.139).
Figure 10.139
Solution
Using the Pythagorean Theorem, we have
10.8 • Right Triangle Trigonometry
1099

When we take the square root of a number, the answer is usually both the positive and negative root. However, lengths
cannot be negative, which is why we only consider the positive root.
YOUR TURN 10.64
1. Use the Pythagorean Theorem to find the missing side of the right triangle shown.
Distance
The applications of the Pythagorean Theorem are countless, but one especially useful application is that of distance. In
fact, the distance formula stems directly from the theorem. It works like this:
In Figure 10.140, the problem is to find the distance between the points
and
We call the length from
point
to point
side
, and the length from point
to point
side
. To find side , we use the
distance formula and we will explain it relative to the Pythagorean Theorem. The distance formula is
such that
is a substitute for
in the Pythagorean Theorem and is equal to
and
is a substitute for
in the Pythagorean Theorem and is equal to
When we
plug in these numbers to the distance formula, we have
Thus,
, the hypotenuse, in the Pythagorean Theorem.
1100
10 • Geometry
Access for free at openstax.org

Figure 10.140 Distance
EXAMPLE 10.65
Calculating Distance Using the Distance Formula
You live on the corner of First Street and Maple Avenue, and work at Star Enterprises on Tenth Street and Elm Drive
(Figure 10.141). You want to calculate how far you walk to work every day and how it compares to the actual distance (as
the crow flies). Each block measures 200 ft by 200 ft.
Figure 10.141
Solution
You travel 7 blocks south and 9 blocks west. If each block measures 200 ft by 200 ft, then
.
As the crow flies, use the distance formula. We have
YOUR TURN 10.65
1. How far is it to your workplace (as the crow flies) if the blocks in the previous example measure 100 ft by 100 ft?
10.8 • Right Triangle Trigonometry
1101

EXAMPLE 10.66
Calculating Distance with the Pythagorean Theorem
The city has specific building codes for wheelchair ramps. Every vertical rise of 1 in requires that the horizontal length be
12 inches. You are constructing a ramp at your business. The plan is to make the ramp 130 inches in horizontal length
and the slanted distance will measure approximately 132.4 inches (Figure 10.142). What should the vertical height be?
Figure 10.142
Solution
The Pythagorean Theorem states that the horizontal length of the base of the ramp, side a, is 130 in. The length of c, or
the length of the hypotenuse, is 132.4 in. The length of the height of the triangle is side b.
Then, by the Pythagorean Theorem, we have:
If you construct the ramp with a 25 in vertical rise, will it fulfill the building code? If not, what will have to change?
The building code states 12 in of horizontal length for each 1 in of vertical rise. The vertical rise is 25 in, which means
that the horizontal length has to be
So, no, this will not pass the code. If you must keep the vertical rise
at 25 in, what will the other dimensions have to be? Since we need a minimum of 300 in for the horizontal length:
The new ramp will look like Figure 10.143.
Figure 10.143
YOUR TURN 10.66
1. If 10 in is the maximum possible vertical rise as shown in the figure, how long would the ramp have to be to pass
the building code rule of 12 horizontal inches to 1 vertical inch?
Triangles
In geometry, as in all fields of mathematics, there are always special rules for special circumstances. An example is the
perfect square rule in algebra. When expanding an expression like
we do not have to expand it the long way:
1102
10 • Geometry
Access for free at openstax.org

If we know the perfect square formula, given as
we can skip the middle step and just start writing down the answer. This may seem trivial with problems like
However, what if you have a problem like
That is a different story. Nevertheless, we use the same
perfect square formula. The same idea applies in geometry. There are special formulas and procedures to apply in
certain types of problems. What is needed is to remember the formula and remember the kind of problems that fit.
Sometimes we believe that because a formula is labeled special, we will rarely have use for it. That assumption is
incorrect. So, let us identify the
triangle and find out why it is special. See Figure 10.144.
Figure 10.144 The
We see that the shortest side is opposite the smallest angle, and the longest side, the hypotenuse, will always be
opposite the right angle. There is a set ratio of one side to another side for the
triangle given as
or
Thus, you only need to know the length of one side to find the other two sides in a
triangle.
EXAMPLE 10.67
Finding Missing Lengths in a
Triangle
Find the measures of the missing lengths of the triangle (Figure 10.145).
Figure 10.145
Solution
We can see that this is a
triangle because we have a right angle and a
angle. The remaining angle,
therefore, must equal
Because this is a special triangle, we have the ratios of the sides to help us identify the
missing lengths. Side
is the shortest side, as it is opposite the smallest angle
and we can substitute
The
ratios are
We have the hypotenuse equaling 10, which corresponds to side , and side
is equal to 2 .
Now, we must solve for
:
Side
is equal to
or
The lengths are
10.8 • Right Triangle Trigonometry
1103

YOUR TURN 10.67
1. Find the lengths of the missing sides in the given figure.
EXAMPLE 10.68
Applying
Triangle to the Real World
A city worker leans a 40-foot ladder up against a building at a
angle to the ground (Figure 10.146). How far up the
building does the ladder reach?
Figure 10.146
Solution
We have a
triangle, and the hypotenuse is 40 ft. This length is equal to 2 , where
is the shortest side. If
, then
. The ladder is leaning on the wall 20 ft up from the ground.
YOUR TURN 10.68
1. You want to repair a window on the second floor of your home. If you place the ladder at a
angle to the
ground, the ladder just about reaches the window. How far from the wall should you place the ladder? How far
up will the ladder reach? Make a sketch as an aid.
1104
10 • Geometry
Access for free at openstax.org

Triangles
The
triangle is another special triangle such that with the measure of one side we can find the measures of
all the sides. The two angles adjacent to the
angle are equal, and each measures
If two angles are equal, so are
their opposite sides. The ratio among sides is
or
as shown in Figure 10.147.
Figure 10.147
Triangles
EXAMPLE 10.69
Finding Missing Lengths of a
Triangle
Find the measures of the unknown sides in the triangle (Figure 10.148).
Figure 10.148
Solution
Because we have a
triangle, we know that the two legs are equal in length and the hypotenuse is a product
of one of the legs and
One leg measures 3, so the other leg,
, measures 3. Remember the ratio of
Then, the hypotenuse, , equals
YOUR TURN 10.69
1. Find the measures of the unknown sides in the given figure.
Trigonometry Functions
Trigonometry developed around 200 BC from a need to determine distances and to calculate the measures of angles in
the fields of astronomy and surveying. Trigonometry is about the relationships (or ratios) of angle measurements to side
lengths in primarily right triangles. However, trigonometry is useful in calculating missing side lengths and angles in
other triangles and many applications.
NOTE: You will need either a scientific calculator or a graphing calculator for this section. It must have the capability
to calculate trigonometric functions and express angles in degrees.
Trigonometry is based on three functions. We title these functions using the following abbreviations:
10.8 • Right Triangle Trigonometry
1105

•
•
•
Letting
which is the hypotenuse of a right triangle, we have Table 10.1. The functions are given in terms
of
,
, and , and in terms of sides relative to the angle, like opposite, adjacent, and the hypotenuse.
Table 10.1 Trigonometric Ratios
We will be applying the sine function, cosine function, and tangent function to find side lengths and angle
measurements for triangles we cannot solve using any of the techniques we have studied to this point. In Figure 10.149,
we have an illustration mainly to identify
and the sides labeled
and
.
Figure 10.149 Angle
An angle
sweeps out in a counterclockwise direction from the positive
-axis and stops when the angle reaches the
desired measurement. That ray extending from the origin that marks
is called the terminal side because that is where
the angle terminates. Regardless of the information given in the triangle, we can find all missing sides and angles using
the trigonometric functions. For example, in Figure 10.150, we will solve for the missing sides.
Figure 10.150 Solving for Missing Sides
Let’s use the trigonometric functions to find the sides
and
. As long as your calculator mode is set to degrees, you do
not have to enter the degree symbol. First, let’s solve for
.
We have
and
Then,
Next, let’s find
. This is the cosine function. We have
Then,
1106
10 • Geometry
Access for free at openstax.org

Now we have all sides,
You can also check the sides using the
ratio of
Table 10.2 is a list
of common angles, which you should find helpful.
Table 10.2 Common Angles
EXAMPLE 10.70
Using Trigonometric Functions
Find the lengths of the missing sides for the triangle (Figure 10.151).
Figure 10.151
Solution
We have a
angle, and the length of the triangle on the
-axis is 6 units.
Step 1: To find the length of , we can use the cosine function, as
We manipulate this equation a bit to solve
for :
Step 2: We can use the Pythagorean Theorem to find the length of
. Prove that your answers are correct by using other
trigonometric ratios:
Step 3: Now that we have
, we can use the sine function to prove that
is correct. We have
10.8 • Right Triangle Trigonometry
1107

YOUR TURN 10.70
1. Find the lengths of the missing sides in the given figure.
To find angle measurements when we have two side measurements, we use the inverse trigonometric functions
symbolized as
or
The –1 looks like an exponent, but it means inverse. For example, in the previous
example, we had
and
To find what angle has these values, enter the values for the inverse cosine
function
in your calculator:
You can also use the inverse sine function and enter the values of
in your calculator given
and
We have
Finally, we can also use the inverse tangent function. Recall
We have
EXAMPLE 10.71
Solving for Lengths in a Right Triangle
Solve for the lengths of a right triangle in which
and
(Figure 10.152).
1108
10 • Geometry
Access for free at openstax.org

Figure 10.152
Solution
Step 1: To find side
, we use the sine function:
Step 2: To find
, we use the cosine function:
Step 3: Since this is a
triangle and side
should equal
if we input 3 for
, we have
Put this in
your calculator and you will get
YOUR TURN 10.71
1. Find the mis
