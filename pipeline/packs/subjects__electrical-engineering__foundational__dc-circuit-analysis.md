# Source pack — subjects/electrical-engineering/foundational/dc-circuit-analysis
Lesson title: DC Circuit Analysis
Level: foundational
Match confidence: 1.53

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.53 — UniversityPhysicsVolume2-WEB_5eNhMSa § 15.5 Resonance in an AC Circuit

Learning Objectives
By the end of this section, you will be able to:
•
Determine the peak ac resonant angular frequency for a RLC circuit
•
Explain the width of the average power versus angular frequency curve and its significance using terms like
bandwidth and quality factor
In the RLC series circuit of Figure 15.11, the current amplitude is, from Equation 15.10,
If we can vary the frequency of the ac generator while keeping the amplitude of its output voltage constant,
then the current changes accordingly. A plot of
versus
is shown in Figure 15.17.
Figure 15.17
At an RLC circuit’s resonant frequency,
the current amplitude is at its maximum value.
15.15
660
15 • Alternating-Current Circuits
Access for free at openstax.org.

In Oscillations, we encountered a similar graph where the amplitude of a damped harmonic oscillator was
plotted against the angular frequency of a sinusoidal driving force (see Forced Oscillations). This similarity is
more than just a coincidence, as shown earlier by the application of Kirchhoff’s loop rule to the circuit of
Figure 15.11. This yields
or
where we substituted dq(t)/dt for i(t). A comparison of Equation 15.16 and, from Oscillations, Damped
Oscillations for damped harmonic motion clearly demonstrates that the driven RLC series circuit is the
electrical analog of the driven damped harmonic oscillator.
The resonant frequency
of the RLC circuit is the frequency at which the amplitude of the current is a
maximum and the circuit would oscillate if not driven by a voltage source. By inspection, this corresponds to
the angular frequency
at which the impedance Z in Equation 15.15 is a minimum, or when
and
This is the resonant angular frequency of the circuit. Substituting
into Equation 15.9, Equation 15.10, and
Equation 15.11, we find that at resonance,
 
 
 
Therefore, at resonance, an RLC circuit is purely resistive, with the applied emf and current in phase.
What happens to the power at resonance? Equation 15.14 tells us how the average power transferred from an
ac generator to the RLC combination varies with frequency. In addition,
reaches a maximum when Z,
which depends on the frequency, is a minimum, that is, when
Thus, at resonance, the
average power output of the source in an RLC series circuit is a maximum. From Equation 15.14, this
maximum is
Figure 15.18 is a typical plot of
versus
in the region of maximum power output. The bandwidth
of
the resonance peak is defined as the range of angular frequencies
over which the average power
is
greater than one-half the maximum value of
The sharpness of the peak is described by a dimensionless
quantity known as the quality factor Q of the circuit. By definition,
where
is the resonant angular frequency. A high Q indicates a sharp resonance peak. We can give Q in
terms of the circuit parameters as
15.16
15.17
15.18
15.19
15.5 • Resonance in an AC Circuit
661

Figure 15.18
Like the current, the average power transferred from an ac generator to an RLC circuit peaks at the resonant frequency.
Resonant circuits are commonly used to pass or reject selected frequency ranges. This is done by adjusting the
value of one of the elements and hence “tuning” the circuit to a particular resonant frequency. For example, in
radios, the receiver is tuned to the desired station by adjusting the resonant frequency of its circuitry to match
the frequency of the station. If the tuning circuit has a high Q, it will have a small bandwidth, so signals from
other stations at frequencies even slightly different from the resonant frequency encounter a high impedance
and are not passed by the circuit. Cell phones work in a similar fashion, communicating with signals of around
1 GHz that are tuned by an inductor-capacitor circuit. One of the most common applications of capacitors is
their use in ac-timing circuits, based on attaining a resonant frequency. A metal detector also uses a shift in
resonance frequency in detecting metals (Figure 15.19).
Figure 15.19
When a metal detector comes near a piece of metal, the self-inductance of one of its coils changes. This causes a shift in the
resonant frequency of a circuit containing the coil. That shift is detected by the circuitry and transmitted to the diver by means of the
headphones. (credit: modification of work by Eric Lippmann, U.S. Navy)
EXAMPLE 15.4
Resonance in an RLC Series Circuit
(a) What is the resonant frequency of a circuit using the voltage and LRC values all wired in series from
662
15 • Alternating-Current Circuits
Access for free at openstax.org.

Example 15.1? (b) If the ac generator is set to this frequency without changing the amplitude of the output
voltage, what is the amplitude of the current?
Strategy
The resonant frequency for a RLC circuit is calculated from Equation 15.17, which comes from a balance
between the reactances of the capacitor and the inductor. Since the circuit is at resonance, the impedance is
equal to the resistor. Then, the peak current is calculated by the voltage divided by the resistance.
Solution
a.
The resonant frequency is found from Equation 15.17:
b.
At resonance, the impedance of the circuit is purely resistive, and the current amplitude is
Significance
If the circuit were not set to the resonant frequency, we would need the impedance of the entire circuit to
calculate the current.
EXAMPLE 15.5
Power Transfer in an RLC Series Circuit at Resonance
(a) What is the resonant angular frequency of an RLC circuit with
and
(b) If an ac source of constant amplitude 4.00 V is set to this frequency, what is the
average power transferred to the circuit? (c) Determine Q and the bandwidth of this circuit.
Strategy
The resonant angular frequency is calculated from Equation 15.17. The average power is calculated from the
rms voltage and the resistance in the circuit. The quality factor is calculated from Equation 15.19 and by
knowing the resonant frequency. The bandwidth is calculated from Equation 15.18 and by knowing the quality
factor.
Solution
a.
The resonant angular frequency is
b.
At this frequency, the average power transferred to the circuit is a maximum. It is
c.
The quality factor of the circuit is
15.5 • Resonance in an AC Circuit
663

We then find for the bandwidth
Significance
If a narrower bandwidth is desired, a lower resistance or higher inductance would help. However, a lower
resistance increases the power transferred to the circuit, which may not be desirable, depending on the
maximum power that could possibly be transferred.
CHECK YOUR UNDERSTANDING 15.6
In the circuit of Figure 15.11,
and
(a) What is the resonant
frequency? (b) What is the impedance of the circuit at resonance? (c) If the voltage amplitude is 10 V, what is
i(t) at resonance? (d) The frequency of the AC generator is now changed to 200 Hz. Calculate the phase
difference between the current and the emf of the generator.
CHECK YOUR UNDERSTANDING 15.7
What happens to the resonant frequency of an RLC series circuit when the following quantities are increased
by a factor of 4: (a) the capacitance, (b) the self-inductance, and (c) the resistance?
CHECK YOUR UNDERSTANDING 15.8
The resonant angular frequency of an RLC series circuit is
An ac source operating at this
frequency transfers an average power of
to the circuit. The resistance of the circuit is
Write an expression for the emf of the source.

## Match 1.52 — UniversityPhysicsVolume2-WEB_5eNhMSa § 15.4 Power in an AC Circuit

Learning Objectives
By the end of this section, you will be able to:
•
Describe how average power from an ac circuit can be written in terms of peak current and voltage and of
rms current and voltage
•
Determine the relationship between the phase angle of the current and voltage and the average power,
known as the power factor
A circuit element dissipates or produces power according to
where I is the current through the
element and V is the voltage across it. Since the current and the voltage both depend on time in an ac circuit,
the instantaneous power
is also time dependent. A plot of p(t) for various circuit elements is
shown in Figure 15.16. For a resistor, i(t) and v(t) are in phase and therefore always have the same sign (see
Figure 15.5). For a capacitor or inductor, the relative signs of i(t) and v(t) vary over a cycle due to their phase
differences (see Figure 15.7 and Figure 15.9). Consequently, p(t) is positive at some times and negative at
others, indicating that capacitive and inductive elements produce power at some instants and absorb it at
others.
656
15 • Alternating-Current Circuits
Access for free at openstax.org.

Figure 15.16
Graph of instantaneous power for various circuit elements. (a) For the resistor,
whereas for (b) the capacitor
and (c) the inductor,
(d) For the source,
which may be positive, negative, or zero, depending on
Because instantaneous power varies in both magnitude and sign over a cycle, it seldom has any practical
importance. What we’re almost always concerned with is the power averaged over time, which we refer to as
the average power. It is defined by the time average of the instantaneous power over one cycle:
where
is the period of the oscillations. With the substitutions
and
this integral becomes
15.4 • Power in an AC Circuit
657

Using the trigonometric relation
we obtain
Evaluation of these two integrals yields
and
Hence, the average power associated with a circuit element is given by
In engineering applications,
is known as the power factor, which is the amount by which the power
delivered in the circuit is less than the theoretical maximum of the circuit due to voltage and current being out
of phase. For a resistor,
so the average power dissipated is
A comparison of p(t) and
is shown in Figure 15.16(d). To make
look like its dc
counterpart, we use the rms values
of the current and the voltage. By definition, these are
where
With
we obtain
We may then write for the average power dissipated by a resistor,
This equation further emphasizes why the rms value is chosen in discussion rather than peak values. Both
equations for average power are correct for Equation 15.13, but the rms values in the formula give a cleaner
representation, so the extra factor of 1/2 is not necessary.
Alternating voltages and currents are usually described in terms of their rms values. For example, the 110 V
from a household outlet is an rms value. The amplitude of this source is
Because most ac
meters are calibrated in terms of rms values, a typical ac voltmeter placed across a household outlet will read
110 V.
For a capacitor and an inductor,
respectively. Since
we find
15.12
15.13
658
15 • Alternating-Current Circuits
Access for free at openstax.org.

from Equation 15.12 that the average power dissipated by either of these elements is
Capacitors and
inductors absorb energy from the circuit during one half-cycle and then discharge it back to the circuit during
the other half-cycle. This behavior is illustrated in the plots of Figure 15.16, (b) and (c), which show p(t)
oscillating sinusoidally about zero.
The phase angle for an ac generator may have any value. If
the generator produces power; if
it absorbs power. In terms of rms values, the average power of an ac generator is written as
For the generator in an RLC circuit,
and
Hence the average power of the generator is
This can also be written as
which designates that the power produced by the generator is dissipated in the resistor. As we can see, Ohm’s
law for the rms ac is found by dividing the rms voltage by the impedance.
EXAMPLE 15.3
Power Output of a Generator
An ac generator whose emf is given by
is connected to an RLC circuit for which
,
, and
. (a) What is
the rms voltage across the generator? (b) What is the impedance of the circuit? (c) What is the average power
output of the generator?
Strategy
The rms voltage is the amplitude of the voltage times
. The impedance of the circuit involves the
resistance and the reactances of the capacitor and the inductor. The average power is calculated by Equation
15.14, or more specifically, the last part of the equation, because we have the impedance of the circuit Z, the
rms voltage
, and the resistance R.
Solution
a.
Since
the rms voltage across the generator is
b.
The impedance of the circuit is
15.14
15.4 • Power in an AC Circuit
659

c.
From Equation 15.14, the average power transferred to the circuit is
Significance
If the resistance is much larger than the reactance of the capacitor or inductor, the average power is a dc
circuit equation of
where V replaces the rms voltage.
CHECK YOUR UNDERSTANDING 15.4
An ac voltmeter attached across the terminals of a 45-Hz ac generator reads 7.07 V. Write an expression for the
emf of the generator.
CHECK YOUR UNDERSTANDING 15.5
Show that the rms voltages across a resistor, a capacitor, and an inductor in an ac circuit where the rms current
is
are given by
respectively. Determine these values for the components of
the RLC circuit of Equation 15.12.

## Match 1.52 — UniversityPhysicsVol1-WEB § 1.4 Dimensional Analysis

Learning Objectives
By the end of this section, you will be able to:
•
Find the dimensions of a mathematical expression involving physical quantities.
•
Determine whether an equation involving physical quantities is dimensionally consistent.
The dimension of any physical quantity expresses its dependence on the base quantities as a product of
symbols (or powers of symbols) representing the base quantities. Table 1.3 lists the base quantities and the
symbols used for their dimension. For example, a measurement of length is said to have dimension L or L1, a
measurement of mass has dimension M or M1, and a measurement of time has dimension T or T1. Like units,
dimensions obey the rules of algebra. Thus, area is the product of two lengths and so has dimension L2, or
length squared. Similarly, volume is the product of three lengths and has dimension L3, or length cubed. Speed
has dimension length over time, L/T or LT–1. Volumetric mass density has dimension M/L3 or ML–3, or mass
over length cubed. In general, the dimension of any physical quantity can be written as
for
some powers
and g. We can write the dimensions of a length in this form with
and the
remaining six powers all set equal to zero:
Any quantity with a dimension that can
be written so that all seven powers are zero (that is, its dimension is
) is called
dimensionless (or sometimes “of dimension 1,” because anything raised to the zero power is one). Physicists
often call dimensionless quantities pure numbers.
Base Quantity
Symbol for Dimension
Length
L
Mass
M
Time
T
Current
I
Thermodynamic temperature
Θ
Amount of substance
N
Luminous intensity
J
Table 1.3 Base Quantities and Their Dimensions
Physicists often use square brackets around the symbol for a physical quantity to represent the dimensions of
that quantity. For example, if
is the radius of a cylinder and
is its height, then we write
and
to indicate the dimensions of the radius and height are both those of length, or L. Similarly, if we use the
symbol
for the surface area of a cylinder and
for its volume, then [A] = L2 and [V] = L3. If we use the symbol
for the mass of the cylinder and
for the density of the material from which the cylinder is made, then
and
The importance of the concept of dimension arises from the fact that any mathematical equation relating
physical quantities must be dimensionally consistent, which means the equation must obey the following
rules:
•
Every term in an expression must have the same dimensions; it does not make sense to add or subtract
quantities of differing dimension (think of the old saying: “You can’t add apples and oranges”). In
particular, the expressions on each side of the equality in an equation must have the same dimensions.
•
The arguments of any of the standard mathematical functions such as trigonometric functions (such as
1.4 • Dimensional Analysis
21

sine and cosine), logarithms, or exponential functions that appear in the equation must be dimensionless.
These functions require pure numbers as inputs and give pure numbers as outputs.
If either of these rules is violated, an equation is not dimensionally consistent and cannot possibly be a correct
statement of physical law. This simple fact can be used to check for typos or algebra mistakes, to help
remember the various laws of physics, and even to suggest the form that new laws of physics might take. This
last use of dimensions is beyond the scope of this text, but is something you will undoubtedly learn later in
your academic career.
EXAMPLE 1.4
Using Dimensions to Remember an Equation
Suppose we need the formula for the area of a circle for some computation. Like many people who learned
geometry too long ago to recall with any certainty, two expressions may pop into our mind when we think of
circles:
and
One expression is the circumference of a circle of radius r and the other is its area. But
which is which?
Strategy
One natural strategy is to look it up, but this could take time to find information from a reputable source.
Besides, even if we think the source is reputable, we shouldn’t trust everything we read. It is nice to have a way
to double-check just by thinking about it. Also, we might be in a situation in which we cannot look things up
(such as during a test). Thus, the strategy is to find the dimensions of both expressions by making use of the
fact that dimensions follow the rules of algebra. If either expression does not have the same dimensions as
area, then it cannot possibly be the correct equation for the area of a circle.
Solution
We know the dimension of area is L2. Now, the dimension of the expression
is
since the constant
is a pure number and the radius
is a length. Therefore,
has the dimension of area.
Similarly, the dimension of the expression
is
since the constants
and
are both dimensionless and the radius
is a length. We see that
has the
dimension of length, which means it cannot possibly be an area.
We rule out
because it is not dimensionally consistent with being an area. We see that
is dimensionally
consistent with being an area, so if we have to choose between these two expressions,
is the one to choose.
Significance
This may seem like kind of a silly example, but the ideas are very general. As long as we know the dimensions
of the individual physical quantities that appear in an equation, we can check to see whether the equation is
dimensionally consistent. On the other hand, knowing that true equations are dimensionally consistent, we
can match expressions from our imperfect memories to the quantities for which they might be expressions.
Doing this will not help us remember dimensionless factors that appear in the equations (for example, if you
had accidentally conflated the two expressions from the example into
then dimensional analysis is no
help), but it does help us remember the correct basic form of equations.
CHECK YOUR UNDERSTANDING 1.5
Suppose we want the formula for the volume of a sphere. The two expressions commonly mentioned in
elementary discussions of spheres are
and
One is the volume of a sphere of radius r and the other
is its surface area. Which one is the volume?
22
1 • Units and Measurement
Access for free at openstax.org.

EXAMPLE 1.5
Checking Equations for Dimensional Consistency
Consider the physical quantities
and
with dimensions
and
Determine whether each of the following equations is dimensionally consistent: (a)
(b)
and (c)
Strategy
By the definition of dimensional consistency, we need to check that each term in a given equation has the same
dimensions as the other terms in that equation and that the arguments of any standard mathematical
functions are dimensionless.
Solution
a.
There are no trigonometric, logarithmic, or exponential functions to worry about in this equation, so we
need only look at the dimensions of each term appearing in the equation. There are three terms, one in the
left expression and two in the expression on the right, so we look at each in turn:
All three terms have the same dimension, so this equation is dimensionally consistent.
b.
Again, there are no trigonometric, exponential, or logarithmic functions, so we only need to look at the
dimensions of each of the three terms appearing in the equation:
None of the three terms has the same dimension as any other, so this is about as far from being
dimensionally consistent as you can get. The technical term for an equation like this is nonsense.
c.
This equation has a trigonometric function in it, so first we should check that the argument of the sine
function is dimensionless:
The argument is dimensionless. So far, so good. Now we need to check the dimensions of each of the two
terms (that is, the left expression and the right expression) in the equation:
The two terms have different dimensions—meaning, the equation is not dimensionally consistent. This
equation is another example of “nonsense.”
Significance
If we are trusting people, these types of dimensional checks might seem unnecessary. But, rest assured, any
textbook on a quantitative subject such as physics (including this one) almost certainly contains some
equations with typos. Checking equations routinely by dimensional analysis save us the embarrassment of
using an incorrect equation. Also, checking the dimensions of an equation we obtain through algebraic
manipulation is a great way to make sure we did not make a mistake (or to spot a mistake, if we made one).
CHECK YOUR UNDERSTANDING 1.6
Is the equation v = at dimensionally consistent?
1.4 • Dimensional Analysis
23

One further point that needs to be mentioned is the effect of the operations of calculus on dimensions. We have
seen that dimensions obey the rules of algebra, just like units, but what happens when we take the derivative of
one physical quantity with respect to another or integrate a physical quantity over another? The derivative of a
function is just the slope of the line tangent to its graph and slopes are ratios, so for physical quantities v and t,
we have that the dimension of the derivative of v with respect to t is just the ratio of the dimension of v over
that of t:
Similarly, since integrals are just sums of products, the dimension of the integral of v with respect to t is simply
the dimension of v times the dimension of t:
By the same reasoning, analogous rules hold for the units of physical quantities derived from other quantities
by integration or differentiation.
