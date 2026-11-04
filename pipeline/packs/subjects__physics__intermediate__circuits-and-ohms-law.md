# Source pack — subjects/physics/intermediate/circuits-and-ohms-law
Lesson title: Circuits & Ohm's Law
Level: intermediate
Match confidence: 3.12

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.12 — College_Physics_for_AP_Courses_2e-WEB_DkhNbxV § 21.6 DC Circuits Containing Resistors and Capacitors

Electric circuits are commonplace in our everyday lives. Some circuits are
simple, such as those in flashlights while others are extremely complex, such as those used in supercomputers. This
chapter takes the topic of electric circuits a step beyond simple circuits by addressing both changes that result from
interactions between systems (Big Idea 4) and constraints on such changes due to laws of conservation (Big Idea 5).
When the circuit is purely resistive, everything in this chapter applies to both DC and AC. However, matters become
more complex when capacitance is involved. We do consider what happens when capacitors are connected to DC
voltage sources, but the interaction of capacitors (and other nonresistive devices) with AC sources is left for a later
chapter. In addition, a number of important DC instruments, such as meters that measure voltage and current, are
covered in this chapter.
Information and examples presented in the chapter examine cause-effect relationships inherent in interactions
involving electrical systems. The electrical properties of an electric circuit can change due to other systems
(Enduring Understanding 4.E). More specifically, values of currents and potential differences in electric circuits
depend on arrangements of individual circuit components (Essential Knowledge 4.E.5). In this chapter several
series and parallel combinations of resistors are discussed and their effects on currents and potential differences
FIGURE 21.1 Electric circuits in computers and servers allow large amounts of data to be quickly and accurately analyzed. (credit:
WOCinTech Chat/Flickr)
CHAPTER OUTLINE

are analyzed.
In electric circuits the total energy (Enduring Understanding 5.B) and the total electric charge (Enduring
Understanding 5.C) are conserved. Kirchoff’s rules describe both, energy conservation (Essential Knowledge 5.B.9)
and charge conservation (Essential Knowledge 5.C.3). Energy conservation is discussed in terms of the loop rule
which specifies that the potential around any closed circuit path must be zero. Charge conservation is applied as
conservation of current by equating the sum of all currents entering a junction to the sum of all currents leaving the
junction (also known as the junction rule). Kirchoff’s rules are used to calculate currents and potential differences in
circuits that combine resistors in series and parallel, and resistors and capacitors.
The concepts in this chapter support:
Big Idea 4 Interactions between systems can result in changes in those systems.
Enduring Understanding 4.E The electric and magnetic properties of a system can change in response to the
presence of, or changes in, other objects or systems.
Essential Knowledge 4.E.5 The values of currents and electric potential differences in an electric circuit are
determined by the properties and arrangement of the individual circuit elements such as sources of emf, resistors,
and capacitors.
Big Idea 5 Changes that occur as a result of interactions are constrained by conservation laws.
Enduring Understanding 5.B The energy of a system is conserved.
Essential Knowledge 5.B.9 Kirchhoff’s loop rule describes conservation of energy in electrical circuits.
Enduring Understanding 5.C The electric charge of a system is conserved.
Essential Knowledge 5.C.3 Kirchhoff’s junction rule describes the conservation of electric charge in electrical
circuits. Since charge is conserved, current must be conserved at each junction in the circuit. Examples should
include circuits that combine resistors in series and parallel.

## Match 3.09 — College_Physics-WEB_2s5sHvR § 23.12 RLC Series AC Circuits

Impedance
When alone in an AC circuit, inductors, capacitors, and resistors all impede current. How do they behave when all three occur
together? Interestingly, their individual resistances in ohms do not simply add. Because inductors and capacitors behave in
opposite ways, they partially to totally cancel each other’s effect. Figure 23.48 shows an RLC series circuit with an AC voltage
source, the behavior of which is the subject of this section. The crux of the analysis of an RLC circuit is the frequency
dependence of
and
, and the effect they have on the phase of voltage versus current (established in the preceding section).
These give rise to the frequency dependence of the circuit, with important “resonance” features that are the basis of many
applications, such as radio tuners.
Figure 23.48 An RLC series circuit with an AC voltage source.
The combined effect of resistance
, inductive reactance
, and capacitive reactance
is defined to be impedance, an AC
analogue to resistance in a DC circuit. Current, voltage, and impedance in an RLC circuit are related by an AC version of Ohm’s
law:
Here
is the peak current,
the peak source voltage, and
is the impedance of the circuit. The units of impedance are ohms,
and its effect on the circuit is as you might expect: the greater the impedance, the smaller the current. To get an expression for
AC Voltage in a Resistor
When a sinusoidal voltage is applied to a resistor, the voltage is exactly in phase with the current—they have a
phase
angle.
23.63
1022
Chapter 23 • Electromagnetic Induction, AC Circuits, and Electrical Technologies
Access for free at openstax.org.

in terms of
,
, and
, we will now examine how the voltages across the various components are related to the source
voltage. Those voltages are labeled
,
, and
in Figure 23.48.
Conservation of charge requires current to be the same in each part of the circuit at all times, so that we can say the currents in
,
, and
are equal and in phase. But we know from the preceding section that the voltage across the inductor
leads the
current by one-fourth of a cycle, the voltage across the capacitor
follows the current by one-fourth of a cycle, and the voltage
across the resistor
is exactly in phase with the current. Figure 23.49 shows these relationships in one graph, as well as
showing the total voltage around the circuit
, where all four voltages are the instantaneous values.
According to Kirchhoff’s loop rule, the total voltage around the circuit
is also the voltage of the source.
You can see from Figure 23.49 that while
is in phase with the current,
leads by
, and
follows by
. Thus
and
are
out of phase (crest to trough) and tend to cancel, although not completely unless they have the same magnitude.
Since the peak voltages are not aligned (not in phase), the peak voltage
of the source does not equal the sum of the peak
voltages across
,
, and
. The actual relationship is
where
,
, and
are the peak voltages across
,
, and
, respectively. Now, using Ohm’s law and definitions from
Reactance, Inductive and Capacitive, we substitute
into the above, as well as
,
, and
, yielding
cancels to yield an expression for
:
which is the impedance of an RLC series AC circuit. For circuits without a resistor, take
; for those without an inductor,
take
; and for those without a capacitor, take
.
Figure 23.49 This graph shows the relationships of the voltages in an RLC circuit to the current. The voltages across the circuit elements
add to equal the voltage of the source, which is seen to be out of phase with the current.
EXAMPLE 23.12
Calculating Impedance and Current
An RLC series circuit has a
resistor, a 3.00 mH inductor, and a
capacitor. (a) Find the circuit’s impedance at
60.0 Hz and 10.0 kHz, noting that these frequencies and the values for
and
are the same as in Example 23.10 and Example
23.11. (b) If the voltage source has
, what is
at each frequency?
23.64
23.65
23.66
23.12 • RLC Series AC Circuits
1023

Strategy
For each frequency, we use
to find the impedance and then Ohm’s law to find current. We can take
advantage of the results of the previous two examples rather than calculate the reactances again.
Solution for (a)
At 60.0 Hz, the values of the reactances were found in Example 23.10 to be
and in Example 23.11 to be
. Entering these and the given
for resistance into
yields
Similarly, at 10.0 kHz,
and
, so that
Discussion for (a)
In both cases, the result is nearly the same as the largest value, and the impedance is definitely not the sum of the individual
values. It is clear that
dominates at high frequency and
dominates at low frequency.
Solution for (b)
The current
can be found using the AC version of Ohm’s law in Equation
:
at 60.0 Hz
Finally, at 10.0 kHz, we find
at 10.0 kHz
Discussion for (a)
The current at 60.0 Hz is the same (to three digits) as found for the capacitor alone in Example 23.11. The capacitor dominates at
low frequency. The current at 10.0 kHz is only slightly different from that found for the inductor alone in Example 23.10. The
inductor dominates at high frequency.
Resonance in RLC Series AC Circuits
How does an RLC circuit behave as a function of the frequency of the driving voltage source? Combining Ohm’s law,
, and the expression for impedance
from
gives
The reactances vary with frequency, with
large at high frequencies and
large at low frequencies, as we have seen in three
previous examples. At some intermediate frequency
, the reactances will be equal and cancel, giving
—this is a
minimum value for impedance, and a maximum value for
results. We can get an expression for
by taking
Substituting the definitions of
and
,
Solving this expression for
yields
23.67
23.68
23.69
23.70
23.71
1024
Chapter 23 • Electromagnetic Induction, AC Circuits, and Electrical Technologies
Access for free at openstax.org.

where
is the resonant frequency of an RLC series circuit. This is also the natural frequency at which the circuit would oscillate
if not driven by the voltage source. At
, the effects of the inductor and capacitor cancel, so that
, and
is a
maximum.
Resonance in AC circuits is analogous to mechanical resonance, where resonance is defined to be a forced oscillation—in this
case, forced by the voltage source—at the natural frequency of the system. The receiver in a radio is an RLC circuit that oscillates
best at its
. A variable capacitor is often used to adjust
to receive a desired frequency and to reject others. Figure 23.50 is a
graph of current as a function of frequency, illustrating a resonant peak in
at
. The two curves are for two different
circuits, which differ only in the amount of resistance in them. The peak is lower and broader for the higher-resistance circuit.
Thus the higher-resistance circuit does not resonate as strongly and would not be as selective in a radio receiver, for example.
Figure 23.50 A graph of current versus frequency for two RLC series circuits differing only in the amount of resistance. Both have a
resonance at
, but that for the higher resistance is lower and broader. The driving AC voltage source has a fixed amplitude
.
EXAMPLE 23.13
Calculating Resonant Frequency and Current
For the same RLC series circuit having a
resistor, a 3.00 mH inductor, and a
capacitor: (a) Find the resonant
frequency. (b) Calculate
at resonance if
is 120 V.
Strategy
The resonant frequency is found by using the expression in
. The current at that frequency is the same as if the
resistor alone were in the circuit.
Solution for (a)
Entering the given values for
and
into the expression given for
in
yields
Discussion for (a)
We see that the resonant frequency is between 60.0 Hz and 10.0 kHz, the two frequencies chosen in earlier examples. This was
to be expected, since the capacitor dominated at the low frequency and the inductor dominated at the high frequency. Their
effects are the same at this intermediate frequency.
Solution for (b)
The current is given by Ohm’s law. At resonance, the two reactances are equal and cancel, so that the impedance equals the
resistance alone. Thus,
23.72
23.73
23.12 • RLC Series AC Circuits
1025

Discussion for (b)
At resonance, the current is greater than at the higher and lower frequencies considered for the same circuit in the preceding
example.
Power in RLC Series AC Circuits
If current varies with frequency in an RLC circuit, then the power delivered to it also varies with frequency. But the average
power is not simply current times voltage, as it is in purely resistive circuits. As was seen in Figure 23.49, voltage and current are
out of phase in an RLC circuit. There is a phase angle
between the source voltage
and the current , which can be found
from
For example, at the resonant frequency or in a purely resistive circuit
, so that
. This implies that
and
that voltage and current are in phase, as expected for resistors. At other frequencies, average power is less than at resonance.
This is both because voltage and current are out of phase and because
is lower. The fact that source voltage and current are
out of phase affects the power delivered to the circuit. It can be shown that the average power is
Thus
is called the power factor, which can range from 0 to 1. Power factors near 1 are desirable when designing an
efficient motor, for example. At the resonant frequency,
.
EXAMPLE 23.14
Calculating the Power Factor and Power
For the same RLC series circuit having a
resistor, a 3.00 mH inductor, a
capacitor, and a voltage source with a
of 120 V: (a) Calculate the power factor and phase angle for
. (b) What is the average power at 50.0 Hz? (c) Find
the average power at the circuit’s resonant frequency.
Strategy and Solution for (a)
The power factor at 60.0 Hz is found from
We know
from Example 23.12, so that
This small value indicates the voltage and current are significantly out of phase. In fact, the phase angle is
Discussion for (a)
The phase angle is close to
, consistent with the fact that the capacitor dominates the circuit at this low frequency (a pure RC
circuit has its voltage and current
out of phase).
Strategy and Solution for (b)
The average power at 60.0 Hz is
was found to be 0.226 A in Example 23.12. Entering the known values gives
23.74
23.75
23.76
23.77
23.78
23.79
23.80
1026
Chapter 23 • Electromagnetic Induction, AC Circuits, and Electrical Technologies
Access for free at openstax.org.

Strategy and Solution for (c)
At the resonant frequency, we know
, and
was found to be 6.00 A in Example 23.13. Thus,
at resonance (1.30 kHz)
Discussion
Both the current and the power factor are greater at resonance, producing significantly greater power than at higher and lower
frequencies.
Power delivered to an RLC series AC circuit is dissipated by the resistance alone. The inductor and capacitor have energy input
and output but do not dissipate it out of the circuit. Rather they transfer energy back and forth to one another, with the resistor
dissipating exactly what the voltage source puts into the circuit. This assumes no significant electromagnetic radiation from the
inductor and capacitor, such as radio waves. Such radiation can happen and may even be desired, as we will see in the next
chapter on electromagnetic radiation, but it can also be suppressed as is the case in this chapter. The circuit is analogous to the
wheel of a car driven over a corrugated road as shown in Figure 23.51. The regularly spaced bumps in the road are analogous to
the voltage source, driving the wheel up and down. The shock absorber is analogous to the resistance damping and limiting the
amplitude of the oscillation. Energy within the system goes back and forth between kinetic (analogous to maximum current,
and energy stored in an inductor) and potential energy stored in the car spring (analogous to no current, and energy stored in
the electric field of a capacitor). The amplitude of the wheels’ motion is a maximum if the bumps in the road are hit at the
resonant frequency.
Figure 23.51 The forced but damped motion of the wheel on the car spring is analogous to an RLC series AC circuit. The shock absorber
damps the motion and dissipates energy, analogous to the resistance in an RLC circuit. The mass and spring determine the resonant
frequency.
A pure LC circuit with negligible resistance oscillates at
, the same resonant frequency as an RLC circuit. It can serve as a
frequency standard or clock circuit—for example, in a digital wristwatch. With a very small resistance, only a very small energy
input is necessary to maintain the oscillations. The circuit is analogous to a car with no shock absorbers. Once it starts
oscillating, it continues at its natural frequency for some time. Figure 23.52 shows the analogy between an LC circuit and a mass
on a spring.
23.81
23.12 • RLC Series AC Circuits
1027

Figure 23.52 An LC circuit is analogous to a mass oscillating on a spring with no friction and no driving force. Energy moves back and forth
between the inductor and capacitor, just as it moves from kinetic to potential in the mass-spring system.
PHET EXPLORATIONS
Circuit Construction Kit (AC+DC), Virtual Lab
Build circuits with capacitors, inductors, resistors and AC or DC voltage sources, and inspect them using lab instruments such
as voltmeters and ammeters.
Click to view content (https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html)
Figure 23.53
1028
Chapter 23 • Electromagnetic Induction, AC Circuits, and Electrical Technologies
Access for free at openstax.org.

GLOSSARY
back emf
the emf generated by a running motor, because it
consists of a coil turning in a magnetic field; it opposes
the voltage powering the motor
capacitive reactance
the opposition of a capacitor to a
change in current; calculated by
characteristic time constant
denoted by , of a particular
series RL circuit is calculated by
, where
is the
inductance and
is the resistance
eddy current
a current loop in a conductor caused by
motional emf
electric generator
a device for co

## Match 3.09 — College_Physics_2e-WEB_7Zesafu § 23.12 RLC Series AC Circuits

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Calculate the impedance, phase angle, resonant frequency, power, power factor, voltage, and/or current
in a RLC series circuit.
•
Draw the circuit diagram for an RLC series circuit.
•
Explain the significance of the resonant frequency.
Impedance
When alone in an AC circuit, inductors, capacitors, and resistors all impede current. How do they behave when all
three occur together? Interestingly, their individual resistances in ohms do not simply add. Because inductors and
capacitors behave in opposite ways, they partially to totally cancel each other’s effect. Figure 23.46 shows an RLC
series circuit with an AC voltage source, the behavior of which is the subject of this section. The crux of the analysis
of an RLC circuit is the frequency dependence of
and
, and the effect they have on the phase of voltage
versus current (established in the preceding section). These give rise to the frequency dependence of the circuit,
with important “resonance” features that are the basis of many applications, such as radio tuners.
FIGURE 23.46 An RLC series circuit with an AC voltage source.
The combined effect of resistance
, inductive reactance
, and capacitive reactance
is defined to be
impedance, an AC analogue to resistance in a DC circuit. Current, voltage, and impedance in an RLC circuit are
related by an AC version of Ohm’s law:
AC Voltage in a Resistor
When a sinusoidal voltage is applied to a resistor, the voltage is exactly in phase with the current—they have a
phase angle.
1042
23 • Electromagnetic Induction, AC Circuits, and Electrical Technologies
Access for free at openstax.org

Here
is the peak current,
the peak source voltage, and
is the impedance of the circuit. The units of
impedance are ohms, and its effect on the circuit is as you might expect: the greater the impedance, the smaller the
current. To get an expression for
in terms of
,
, and
, we will now examine how the voltages across the
various components are related to the source voltage. Those voltages are labeled
,
, and
in Figure 23.46.
Conservation of charge requires current to be the same in each part of the circuit at all times, so that we can say the
currents in
,
, and
are equal and in phase. But we know from the preceding section that the voltage across the
inductor
leads the current by one-fourth of a cycle, the voltage across the capacitor
follows the current by
one-fourth of a cycle, and the voltage across the resistor
is exactly in phase with the current. Figure 23.47 shows
these relationships in one graph, as well as showing the total voltage around the circuit
, where
all four voltages are the instantaneous values. According to Kirchhoff’s loop rule, the total voltage around the circuit
is also the voltage of the source.
You can see from Figure 23.47 that while
is in phase with the current,
leads by
, and
follows by
.
Thus
and
are
out of phase (crest to trough) and tend to cancel, although not completely unless they
have the same magnitude. Since the peak voltages are not aligned (not in phase), the peak voltage
of the source
does not equal the sum of the peak voltages across
,
, and
. The actual relationship is
where
,
, and
are the peak voltages across
,
, and
, respectively. Now, using Ohm’s law and
definitions from Reactance, Inductive and Capacitive, we substitute
into the above, as well as
,
, and
, yielding
cancels to yield an expression for
:
which is the impedance of an RLC series AC circuit. For circuits without a resistor, take
; for those without an
inductor, take
; and for those without a capacitor, take
.
FIGURE 23.47 This graph shows the relationships of the voltages in an RLC circuit to the current. The voltages across the circuit elements
add to equal the voltage of the source, which is seen to be out of phase with the current.
23.63
23.64
23.65
23.66
23.12 • RLC Series AC Circuits
1043

EXAMPLE 23.12
Calculating Impedance and Current
An RLC series circuit has a
resistor, a 3.00 mH inductor, and a
capacitor. (a) Find the circuit’s
impedance at 60.0 Hz and 10.0 kHz, noting that these frequencies and the values for
and
are the same as in
Example 23.10 and Example 23.11. (b) If the voltage source has
, what is
at each frequency?
Strategy
For each frequency, we use
to find the impedance and then Ohm’s law to find current. We
can take advantage of the results of the previous two examples rather than calculate the reactances again.
Solution for (a)
At 60.0 Hz, the values of the reactances were found in Example 23.10 to be
and in Example 23.11 to
be
. Entering these and the given
for resistance into
yields
Similarly, at 10.0 kHz,
and
, so that
Discussion for (a)
In both cases, the result is nearly the same as the largest value, and the impedance is definitely not the sum of the
individual values. It is clear that
dominates at high frequency and
dominates at low frequency.
Solution for (b)
The current
can be found using the AC version of Ohm’s law in Equation
:
at 60.0 Hz
Finally, at 10.0 kHz, we find
at 10.0 kHz
Discussion for (a)
The current at 60.0 Hz is the same (to three digits) as found for the capacitor alone in Example 23.11. The capacitor
dominates at low frequency. The current at 10.0 kHz is only slightly different from that found for the inductor alone
in Example 23.10. The inductor dominates at high frequency.
Resonance in RLC Series AC Circuits
How does an RLC circuit behave as a function of the frequency of the driving voltage source? Combining Ohm’s law,
, and the expression for impedance
from
gives
The reactances vary with frequency, with
large at high frequencies and
large at low frequencies, as we have
seen in three previous examples. At some intermediate frequency
, the reactances will be equal and cancel,
giving
—this is a minimum value for impedance, and a maximum value for
results. We can get an
23.67
23.68
23.69
1044
23 • Electromagnetic Induction, AC Circuits, and Electrical Technologies
Access for free at openstax.org

expression for
by taking
Substituting the definitions of
and
,
Solving this expression for
yields
where
is the resonant frequency of an RLC series circuit. This is also the natural frequency at which the circuit
would oscillate if not driven by the voltage source. At
, the effects of the inductor and capacitor cancel, so that
, and
is a maximum.
Resonance in AC circuits is analogous to mechanical resonance, where resonance is defined to be a forced
oscillation—in this case, forced by the voltage source—at the natural frequency of the system. The receiver in a radio
is an RLC circuit that oscillates best at its
. A variable capacitor is often used to adjust
to receive a desired
frequency and to reject others. Figure 23.48 is a graph of current as a function of frequency, illustrating a resonant
peak in
at
. The two curves are for two different circuits, which differ only in the amount of resistance in
them. The peak is lower and broader for the higher-resistance circuit. Thus the higher-resistance circuit does not
resonate as strongly and would not be as selective in a radio receiver, for example.
FIGURE 23.48 A graph of current versus frequency for two RLC series circuits differing only in the amount of resistance. Both have a
resonance at
, but that for the higher resistance is lower and broader. The driving AC voltage source has a fixed amplitude
.
EXAMPLE 23.13
Calculating Resonant Frequency and Current
For the same RLC series circuit having a
resistor, a 3.00 mH inductor, and a
capacitor: (a) Find the
resonant frequency. (b) Calculate
at resonance if
is 120 V.
Strategy
The resonant frequency is found by using the expression in
. The current at that frequency is the same
as if the resistor alone were in the circuit.
Solution for (a)
Entering the given values for
and
into the expression given for
in
yields
23.70
23.71
23.72
23.73
23.12 • RLC Series AC Circuits
1045

Discussion for (a)
We see that the resonant frequency is between 60.0 Hz and 10.0 kHz, the two frequencies chosen in earlier
examples. This was to be expected, since the capacitor dominated at the low frequency and the inductor dominated
at the high frequency. Their effects are the same at this intermediate frequency.
Solution for (b)
The current is given by Ohm’s law. At resonance, the two reactances are equal and cancel, so that the impedance
equals the resistance alone. Thus,
Discussion for (b)
At resonance, the current is greater than at the higher and lower frequencies considered for the same circuit in the
preceding example.
Power in RLC Series AC Circuits
If current varies with frequency in an RLC circuit, then the power delivered to it also varies with frequency. But the
average power is not simply current times voltage, as it is in purely resistive circuits. As was seen in Figure 23.47,
voltage and current are out of phase in an RLC circuit. There is a phase angle
between the source voltage
and
the current
, which can be found from
For example, at the resonant frequency or in a purely resistive circuit
, so that
. This implies that
and that voltage and current are in phase, as expected for resistors. At other frequencies, average power is
less than at resonance. This is both because voltage and current are out of phase and because
is lower. The
fact that source voltage and current are out of phase affects the power delivered to the circuit. It can be shown that
the average power is
Thus
is called the power factor, which can range from 0 to 1. Power factors near 1 are desirable when
designing an efficient motor, for example. At the resonant frequency,
.
EXAMPLE 23.14
Calculating the Power Factor and Power
For the same RLC series circuit having a
resistor, a 3.00 mH inductor, a
capacitor, and a voltage
source with a
of 120 V: (a) Calculate the power factor and phase angle for
. (b) What is the average
power at 50.0 Hz? (c) Find the average power at the circuit’s resonant frequency.
Strategy and Solution for (a)
The power factor at 60.0 Hz is found from
We know
from Example 23.12, so that
This small value indicates the voltage and current are significantly out of phase. In fact, the phase angle is
23.74
23.75
23.76
23.77
23.78
1046
23 • Electromagnetic Induction, AC Circuits, and Electrical Technologies
Access for free at openstax.org

Discussion for (a)
The phase angle is close to
, consistent with the fact that the capacitor dominates the circuit at this low
frequency (a pure RC circuit has its voltage and current
out of phase).
Strategy and Solution for (b)
The average power at 60.0 Hz is
was found to be 0.226 A in Example 23.12. Entering the known values gives
Strategy and Solution for (c)
At the resonant frequency, we know
, and
was found to be 6.00 A in Example 23.13. Thus,
at resonance (1.30 kHz)
Discussion
Both the current and the power factor are greater at resonance, producing significantly greater power than at higher
and lower frequencies.
Power delivered to an RLC series AC circuit is dissipated by the resistance alone. The inductor and capacitor have
energy input and output but do not dissipate it out of the circuit. Rather they transfer energy back and forth to one
another, with the resistor dissipating exactly what the voltage source puts into the circuit. This assumes no
significant electromagnetic radiation from the inductor and capacitor, such as radio waves. Such radiation can
happen and may even be desired, as we will see in the next chapter on electromagnetic radiation, but it can also be
suppressed as is the case in this chapter. The circuit is analogous to the wheel of a car driven over a corrugated road
as shown in Figure 23.49. The regularly spaced bumps in the road are analogous to the voltage source, driving the
wheel up and down. The shock absorber is analogous to the resistance damping and limiting the amplitude of the
oscillation. Energy within the system goes back and forth between kinetic (analogous to maximum current, and
energy stored in an inductor) and potential energy stored in the car spring (analogous to no current, and energy
stored in the electric field of a capacitor). The amplitude of the wheels’ motion is a maximum if the bumps in the
road are hit at the resonant frequency.
FIGURE 23.49 The forced but damped motion of the wheel on the car spring is analogous to an RLC series AC circuit. The shock absorber
damps the motion and dissipates energy, analogous to the resistance in an RLC circuit. The mass and spring determine the resonant
frequency.
A pure LC circuit with negligible resistance oscillates at
, the same resonant frequency as an RLC circuit. It can
serve as a frequency standard or clock circuit—for example, in a digital wristwatch. With a very small resistance, only
a very small energy input is necessary to maintain the oscillations. The circuit is analogous to a car with no shock
absorbers. Once it starts oscillating, it continues at its natural frequency for some time. Figure 23.50 shows the
23.79
23.80
23.81
23.12 • RLC Series AC Circuits
1047

analogy between an LC circuit and a mass on a spring.
FIGURE 23.50 An LC circuit is analogous to a mass oscillating on a spring with no friction and no driving force. Energy moves back and forth
between the inductor and capacitor, just as it moves from kinetic to potential in the mass-spring system.
PHET EXPLORATIONS
Circuit Construction Kit (AC+DC), Virtual Lab
Build circuits with capacitors, inductors, resistors and AC or DC voltage sources, and inspect them using lab
instruments such as voltmeters and ammeters.
Click to view content (https://openstax.org/books/college-physics-2e/pages/23-12-rlc-series-ac-circuits)
1048
23 • Electromagnetic Induction, AC Circuits, and Electrical Technologies
Access for free at openstax.org

Glossary
back emf
the emf generated by a running motor,
because it consists of a coil turning in a magnetic
field; it opposes the voltage powering the motor
capacitive reactance
the opposition of a capacitor to
a change in current; calculated by
character
