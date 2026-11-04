# Source pack — subjects/philosophy/foundational/free-will-and-determinism
Lesson title: Free Will & Determinism
Level: foundational
Match confidence: 1.54

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.54 — Introduction_to_Philosophy-WEB_cszrKYp § 6.4 Free Will

Defining metaphysics is difficult. On a summary level, one possible definition is that
metaphysics is the field of philosophy concerned with identifying that which is real. You may wonder why any
reasonable person would invest time pursuing an answer to that which, at first glance, seems obvious. But on
deeper inspection of the world around you, it can be challenging to identify what is real.
Consider the acorn. As you probably learned through life science, an acorn is destined to become an oak. If you
were to look at the acorn and compare it to the oak, you would see two radically different things. How can a
thing change and remain the same thing?
Aristotle offers insight into how the acorn and the oak represent change but within the same being. Within
Aristotle’s thinking, each being has a specific end or purpose. As telos is Greek for “end” (end as target or goal),
this view is known as teleological. In addition, each being is described as having a specific function (ergon) by
6
Metaphysics

which that being seeks the proper end.
In the case of an oak tree, the oak tree works from its acorn to the fullness of the oak. Aristotle describes the
becoming as movement from a state of potentiality to actuality. You might say that which is most real
concerning the oak stands beneath the movement from acorn to oak. The movement from potentiality toward
actuality is one method to make sense of change while maintaining a constant or underlying sense of true
being.
As you will discover, the topic of metaphysics is far-reaching and broaches many questions.
•
What is real?
•
What is being?
•
Is there a purpose to our being?
•
What is the self?
•
Is there a God?
•
Do human beings (however defined) possess free will?
Metaphysical questions tend not to be resting points but starting points. This chapter begins to explore many
simple yet interrelated questions as part of seeking the real.
FIGURE 6.2 The term metaphysics comes from Aristotle’s book of the same name. The opening sentence translates
as “All men by nature desire to know.” Our desire to lay bare the deepest and most discrete understanding of reality
is at the heart of metaphysics. (credit: “Aristotle: Metaphysica, first page in Immanuel Bekker’s edition, 1837.” by
Wikimedia, Public Doman)
172
6 • Metaphysics
Access for free at openstax.org


## Match 1.53 — UniversityPhysicsVolume3-WEB § 9.4 Free Electron Model of Metals

Learning Objectives
By the end of this section, you will be able to:
•
Describe the classical free electron model of metals in terms of the concept electron number density
•
Explain the quantum free-electron model of metals in terms of Pauli’s exclusion principle
•
Calculate the energy levels and energy-level spacing of a free electron in a metal
Metals, such as copper and aluminum, are held together by bonds that are very different from those of
molecules. Rather than sharing and exchanging electrons, a metal is essentially held together by a system of
free electrons that wander throughout the solid. The simplest model of a metal is the free electron model.
This model views electrons as a gas. We first consider the simple one-dimensional case in which electrons
move freely along a line, such as through a very thin metal rod. The potential function U(x) for this case is a
one-dimensional infinite square well where the walls of the well correspond to the edges of the rod. This model
ignores the interactions between the electrons but respects the exclusion principle. For the special case of
N electrons fill up the energy levels, from lowest to highest, two at a time (spin up and spin down),
until the highest energy level is filled. The highest energy filled is called the Fermi energy.
The one-dimensional free electron model can be improved by considering the three-dimensional case:
electrons moving freely in a three-dimensional metal block. This system is modeled by a three-dimensional
9.4 • Free Electron Model of Metals
409

infinite square well. Determining the allowed energy states requires us to solve the time-independent
Schrödinger equation
where we assume that the potential energy inside the box is zero and infinity otherwise. The allowed wave
functions describing the electron’s quantum states can be written as
where
and
are positive integers representing quantum numbers corresponding to the motion in the
x-, y-, and z-directions, respectively, and
are the dimensions of the box in those directions.
Equation 9.27 is simply the product of three one-dimensional wave functions. The allowed energies of an
electron in a cube
are
Associated with each set of quantum numbers
are two quantum states, spin up and spin down. In a
real material, the number of filled states is enormous. For example, in a cubic centimeter of metal, this
number is on the order of
Counting how many particles are in which state is difficult work, which often
requires the help of a powerful computer. The effort is worthwhile, however, because this information is often
an effective way to check the model.
EXAMPLE 9.4
Energy of a Metal Cube
Consider a solid metal cube of edge length 2.0 cm. (a) What is the lowest energy level for an electron within the
metal? (b) What is the spacing between this level and the next energy level?
Strategy
An electron in a metal can be modeled as a wave. The lowest energy corresponds to the largest wavelength and
smallest quantum number:
Equation 9.28 supplies this “ground state” energy value.
Since the energy of the electron increases with the quantum number, the next highest level involves the
smallest increase in the quantum numbers, or
or (1, 1, 2).
Solution
The lowest energy level corresponds to the quantum numbers
From Equation 9.28, the
energy of this level is
The next-higher energy level is reached by increasing any one of the three quantum numbers by 1. Hence,
there are actually three quantum states with the same energy. Suppose we increase
by 1. Then the energy
becomes
9.26
9.27
ℏ
9.28
410
9 • Condensed Matter Physics
Access for free at openstax.org.

The energy spacing between the lowest energy state and the next-highest energy state is therefore
Significance
This is a very small energy difference. Compare this value to the average kinetic energy of a particle,
,
where
is Boltzmann’s constant and T is the temperature. The product
is about 1000 times greater than
the energy spacing.
CHECK YOUR UNDERSTANDING 9.4
What happens to the ground state energy of an electron if the dimensions of the solid increase?
Often, we are not interested in the total number of particles in all states, but rather the number of particles dN
with energies in a narrow energy interval. This value can be expressed by
where n(E) is the electron number density, or the number of electrons per unit volume; g(E) is the density of
states, or the number of allowed quantum states per unit energy; dE is the size of the energy interval; and F is
the Fermi factor. The Fermi factor is the probability that the state will be filled. For example, if g(E)dE is 100
available states, but F is only
, then the number of particles in this narrow energy interval is only five.
Finding g(E) requires solving Schrödinger’s equation (in three dimensions) for the allowed energy levels. The
calculation is involved even for a crude model, but the result is simple:
where V is the volume of the solid,
is the mass of the electron, and E is the energy of the state. Notice that
the density of states increases with the square root of the energy. More states are available at high energy than
at low energy. This expression does not provide information of the density of the electrons in physical space,
but rather the density of energy levels in “energy space.” For example, in our study of the atomic structure, we
learned that the energy levels of a hydrogen atom are much more widely spaced for small energy values (near
than ground state) than for larger values.
This equation tells us how many electron states are available in a three-dimensional metallic solid. However, it
does not tell us how likely these states will be filled. Thus, we need to determine the Fermi factor, F. Consider
the simple case of
. From classical physics, we expect that all the electrons
would
simply go into the ground state to achieve the lowest possible energy. However, this violates Pauli’s exclusion
principle, which states that no two electrons can be in the same quantum state. Hence, when we begin filling
the states with electrons, the states with lowest energy become occupied first, then states with progressively
higher energies. The last electron we put in has the highest energy. This energy is the Fermi energy
of the
free electron gas. A state with energy
is occupied by a single electron, and a state with energy
is unoccupied. To describe this in terms of a probability F(E) that a state of energy E is occupied, we write for
:
9.29
9.30
9.4 • Free Electron Model of Metals
411

The density of states, Fermi factor, and electron number density are plotted against energy in Figure 9.12.
Figure 9.12
(a) Density of states for a free electron gas; (b) probability that a state is occupied at
; (c) density of occupied states
at
.
A few notes are in order. First, the electron number density (last row) distribution drops off sharply at the
Fermi energy. According to the theory, this energy is given by
Fermi energies for selected materials are listed in the following table.
Element
Conduction Band Electron Density
Free-Electron Model Fermi Energy
Table 9.3 Conduction Electron Densities and Fermi Energies for Some Metals
Note also that only the graph in part (c) of the figure, which answers the question, “How many particles are
found in the energy range?” is checked by experiment. The Fermi temperature or effective “temperature” of
an electron at the Fermi energy is
EXAMPLE 9.5
Fermi Energy of Silver
Metallic silver is an excellent conductor. It has
conduction electrons per cubic meter. (a) Calculate
its Fermi energy. (b) Compare this energy to the thermal energy
of the electrons at a room temperature of
300 K.
Solution
a.
From Equation 9.31, the Fermi energy is
9.31
9.32
412
9 • Condensed Matter Physics
Access for free at openstax.org.

This is a typical value of the Fermi energy for metals, as can be seen from Table 9.3.
b.
We can associate a Fermi temperature
with the Fermi energy by writing
We then find for
the Fermi temperature
which is much higher than room temperature and also the typical melting point
of a metal. The
ratio of the Fermi energy of silver to the room-temperature thermal energy is
To visualize how the quantum states are filled, we might imagine pouring water slowly into a glass, such as that
of Figure 9.13. The first drops of water (the electrons) occupy the bottom of the glass (the states with lowest
energy). As the level rises, states of higher and higher energy are occupied. Furthermore, since the glass has a
wide opening and a narrow stem, more water occupies the top of the glass than the bottom. This reflects the
fact that the density of states g(E) is proportional to
, so there is a relatively large number of higher energy
electrons in a free electron gas. Finally, the level to which the glass is filled corresponds to the Fermi energy.
Figure 9.13
An analogy of how electrons fill energy states in a metal. As electrons fill energy states, lowest to highest, the number of
available states increases. The highest energy state (corresponding to the water line) is the Fermi energy. (credit: modification of work by
“Didriks”/Flickr)
Suppose that at
, the number of conduction electrons per unit volume in our sample is
. Since each
field state has one electron, the number of filled states per unit volume is the same as the number of electrons
per unit volume.
9.4 • Free Electron Model of Metals
413


## Match 1.53 — UniversityPhysicsVol1-WEB § 3.5 Free Fall

Learning Objectives
By the end of this section, you will be able to:
•
Use the kinematic equations with the variables y and g to analyze free-fall motion.
•
Describe how the values of the position, velocity, and acceleration change during a free fall.
•
Solve for the position, velocity, and acceleration as functions of time when an object is in a free fall.
An interesting application of Equation 3.4 through Equation 3.14 is called free fall, which describes the motion
of an object falling in a gravitational field, such as near the surface of Earth or other celestial objects of
planetary size. Let’s assume the body is falling in a straight line perpendicular to the surface, so its motion is
one-dimensional. For example, we can estimate the depth of a vertical mine shaft by dropping a rock into it
and listening for the rock to hit the bottom. But “falling,” in the context of free fall, does not necessarily imply
the body is moving from a greater height to a lesser height. If a ball is thrown upward, the equations of free fall
apply equally to its ascent as well as its descent.
Gravity
The most remarkable and unexpected fact about falling objects is that if air resistance and friction are
negligible, then in a given location all objects fall toward the center of Earth with the same constant
acceleration, independent of their mass. This experimentally determined fact is unexpected because we are so
accustomed to the effects of air resistance and friction that we expect light objects to fall slower than heavy
ones. Until Galileo Galilei (1564–1642) proved otherwise, people believed that a heavier object has a greater
acceleration in a free fall. We now know this is not the case. In the absence of air resistance, heavy objects
arrive at the ground at the same time as lighter objects when dropped from the same height Figure 3.26.
Figure 3.26
A hammer and a feather fall with the same constant acceleration if air resistance is negligible. This is a general characteristic
of gravity not unique to Earth, as astronaut David R. Scott demonstrated in 1971 on the Moon, where the acceleration from gravity is only
1.67 m/s2 and there is no atmosphere.
In the real world, air resistance can cause a lighter object to fall slower than a heavier object of the same size. A
tennis ball reaches the ground after a baseball dropped at the same time. (It might be difficult to observe the
difference if the height is not large.) Air resistance opposes the motion of an object through the air, and friction
between objects—such as between clothes and a laundry chute or between a stone and a pool into which it is
dropped—also opposes motion between them.
For the ideal situations of these first few chapters, an object falling without air resistance or friction is defined
to be in free fall. The force of gravity causes objects to fall toward the center of Earth. The acceleration of free-
3.5 • Free Fall
129

falling objects is therefore called acceleration due to gravity. Acceleration due to gravity is constant, which
means we can apply the kinematic equations to any falling object where air resistance and friction are
negligible. This opens to us a broad class of interesting situations.
Acceleration due to gravity is so important that its magnitude is given its own symbol, g. It is constant at any
given location on Earth and has the average value
Although g varies from 9.78 m/s2 to 9.83 m/s2, depending on latitude, altitude, underlying geological
formations, and local topography, let’s use an average value of 9.8 m/s2 rounded to two significant figures in
this text unless specified otherwise. Neglecting these effects on the value of g as a result of position on Earth’s
surface, as well as effects resulting from Earth’s rotation, we take the direction of acceleration due to gravity to
be downward (toward the center of Earth). In fact, its direction defines what we call vertical. Note that whether
acceleration a in the kinematic equations has the value +g or −g depends on how we define our coordinate
system. If we define the upward direction as positive, then
and if we define the downward
direction as positive, then
.
One-Dimensional Motion Involving Gravity
The best way to see the basic features of motion involving gravity is to start with the simplest situations and
then progress toward more complex ones. So, we start by considering straight up-and-down motion with no air
resistance or friction. These assumptions mean the velocity (if there is any) is vertical. If an object is dropped,
we know the initial velocity is zero when in free fall. When the object has left contact with whatever held or
threw it, the object is in free fall. When the object is thrown, it has the same initial speed in free fall as it did
before it was released. When the object comes in contact with the ground or any other object, it is no longer in
free fall and its acceleration of g is no longer valid. Under these circumstances, the motion is one-dimensional
and has constant acceleration of magnitude g. We represent vertical displacement with the symbol y.
PROBLEM-SOLVING STRATEGY
Free Fall
1.
Decide on the sign of the acceleration of gravity. In Equation 3.15 through Equation 3.17, acceleration g is
negative, which says the positive direction is upward and the negative direction is downward. In some
problems, it may be useful to have acceleration g as positive, indicating the positive direction is downward.
2.
Draw a sketch of the problem. This helps visualize the physics involved.
3.
Record the knowns and unknowns from the problem description. This helps devise a strategy for selecting
the appropriate equations to solve the problem.
4.
Decide which of Equation 3.15 through Equation 3.17 are to be used to solve for the unknowns.
Kinematic Equations for Objects in Free Fall
We assume here that acceleration equals −g (with the positive direction upward).
3.15
3.16
3.17
130
3 • Motion Along a Straight Line
Access for free at openstax.org.

EXAMPLE 3.14
Free Fall of a Ball
Figure 3.27 shows the positions of a ball, at 1-s intervals, with an initial velocity of 4.9 m/s downward, that is
thrown from the top of a 98-m-high building. (a) How much time elapses before the ball reaches the ground?
(b) What is the velocity when it arrives at the ground?
Figure 3.27
The positions and velocities at 1-s intervals of a ball thrown downward from a tall building at 4.9 m/s.
Strategy
Choose the origin at the top of the building with the positive direction upward and the negative direction
downward. To find the time when the position is −98 m, we use Equation 3.16, with
.
Solution
a.
Substitute the given values into the equation:
This simplifies to
This is a quadratic equation with roots
. The positive root is the one we are
interested in, since time
is the time when the ball is released at the top of the building. (The time
represents the fact that a ball thrown upward from the ground would have been in the air for 5.0
s when it passed by the top of the building moving downward at 4.9 m/s.)
b.
Using Equation 3.15, we have
Significance
For situations when two roots are obtained from a quadratic equation in the time variable, we must look at the
physical significance of both roots to determine which is correct. Since
corresponds to the time when the
ball was released, the negative root would correspond to a time before the ball was released, which is not
physically meaningful. When the ball hits the ground, its velocity is not immediately zero, but as soon as the
ball interacts with the ground, its acceleration is not g and it accelerates with a different value over a short time
to zero velocity. This problem shows how important it is to establish the correct coordinate system and to keep
the signs of g in the kinematic equations consistent.
3.5 • Free Fall
131

EXAMPLE 3.15
Vertical Motion of a Baseball
A batter hits a baseball straight upward at home plate and the ball is caught 5.0 s after it is struck Figure 3.28.
(a) What is the initial velocity of the ball? (b) What is the maximum height the ball reaches? (c) How long does it
take to reach the maximum height? (d) What is the acceleration at the top of its path? (e) What is the velocity of
the ball when it is caught? Assume the ball is hit and caught at the same location.
Figure 3.28
A baseball hit straight up is caught by the catcher 5.0 s later.
Strategy
Choose a coordinate system with a positive y-axis that is straight up and with an origin that is at the spot where
the ball is hit and caught.
Solution
a.
Equation 3.16 gives
which gives
.
b.
At the maximum height,
. With
, Equation 3.17 gives
or
c.
To find the time when
, we use Equation 3.15:
This gives
. Since the ball rises for 2.5 s, the time to fall is 2.5 s.
d.
The acceleration is 9.8 m/s2 everywhere, even when the velocity is zero at the top of the path. Although the
velocity is zero at the top, it is changing at the rate of 9.8 m/s2 downward.
e.
The velocity at
can be determined with Equation 3.15:
132
3 • Motion Along a Straight Line
Access for free at openstax.org.

Significance
The ball returns with the speed it had when it left. This is a general property of free fall for any initial velocity.
We used a single equation to go from throw to catch, and did not have to break the motion into two segments,
upward and downward. We are used to thinking that the effect of gravity is to create free fall downward toward
Earth. It is important to understand, as illustrated in this example, that objects moving upward away from
Earth are also in a state of free fall.
CHECK YOUR UNDERSTANDING 3.7
A chunk of ice breaks off a glacier and falls 30.0 m before it hits the water. Assuming it falls freely (there is no
air resistance), how long does it take to hit the water? Which quantity increases faster, the speed of the ice
chunk or its distance traveled?
EXAMPLE 3.16
Rocket Booster
A small rocket with a booster blasts off and heads straight upward. When at a height of
and velocity of
200.0 m/s, it releases its booster. (a) What is the maximum height the booster attains? (b) What is the velocity
of the booster at a height of 6.0 km? Neglect air resistance.
Figure 3.29
A rocket releases its booster at a given height and velocity. How high and how fast does the booster go?
3.5 • Free Fall
133

Strategy
We need to select the coordinate system for the acceleration of gravity, which we take as negative downward.
We are given the initial velocity of the booster and its height. We consider the point of release as the origin. We
know the velocity is zero at the maximum position within the acceleration interval; thus, the velocity of the
booster is zero at its maximum height, so we can use this information as well. From these observations, we use
Equation 3.17, which gives us the maximum height of the booster. We also use Equation 3.17 to give the
velocity at 6.0 km. The initial velocity of the booster is 200.0 m/s.
Solution
a.
From Equation 3.17,
. With
, we can solve for y:
This solution gives the maximum height of the booster in our coordinate system, which has its origin at
the point of release, so the maximum height of the booster is roughly 7.0 km.
b.
An altitude of 6.0 km corresponds to
in the coordinate system we are using. The other
initial conditions are
.
We have, from Equation 3.17,
Significance
We have both a positive and negative solution in (b). Since our coordinate system has the positive direction
upward, the +142.8 m/s corresponds to a positive upward velocity at 6000 m during the upward leg of the
trajectory of the booster. The value v = −142.8 m/s corresponds to the velocity at 6000 m on the downward leg.
This example is also important in that an object is given an initial velocity at the origin of our coordinate
system, but the origin is at an altitude above the surface of Earth, which must be taken into account when
forming the solution.
INTERACTIVE
Visit this site (https://openstax.org/l/21equatgraph) to learn about graphing polynomials. The shape of the
curve changes as the constants are adjusted. View the curves for the individual terms (for example, y = bx) to
see how they add to generate the polynomial curve.
