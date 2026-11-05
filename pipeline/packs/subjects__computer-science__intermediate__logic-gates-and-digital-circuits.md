# Source pack — subjects/computer-science/intermediate/logic-gates-and-digital-circuits
Lesson title: Logic Gates & Digital Circuits
Level: intermediate
Match confidence: 1.28

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.28 — Physics-WEB_Sab7RrQ § 19.3 Parallel Circuits

Section Learning Objectives
By the end of this section, you will be able to do the following:
•
Interpret circuit diagrams with parallel resistors
•
Calculate equivalent resistance of resistor combinations containing series and parallel resistors
Section Key Terms
in parallel
Resistors in Parallel
In the previous section, we learned that resistors in series are resistors that are connected one after the other. If we instead
combine resistors by connecting them next to each other, as shown in Figure 19.16, then the resistors are said to be connected in
parallel. Resistors are in parallel when both ends of each resistor are connected directly together.
Note that the tops of the resistors are all connected to the same wire, so the voltage at the top of the each resistor is the same.
Likewise, the bottoms of the resistors are all connected to the same wire, so the voltage at the bottom of each resistor is the
same. This means that the voltage drop across each resistor is the same. In this case, the voltage drop is the voltage rating V of
the battery, because the top and bottom wires connect to the positive and negative terminals of the battery, respectively.
Although the voltage drop across each resistor is the same, we cannot say the same for the current running through each
resistor. Thus,
are not necessarily the same, because the resistors
do not necessarily have the same
19.20
19.3 • Parallel Circuits
621

resistance.
Note that the three resistors in Figure 19.16 provide three different paths through which the current can flow. This means that
the equivalent resistance for these three resistors must be less than the smallest of the three resistors. To understand this,
imagine that the smallest resistor is the only path through which the current can flow. Now add on the alternate paths by
connecting other resistors in parallel. Because the current has more paths to go through, the overall resistance (i.e., the
equivalent resistance) will decrease. Therefore, the equivalent resistance must be less than the smallest resistance of the parallel
resistors.
Figure 19.16 The left circuit diagram shows three resistors in parallel. The voltage V of the battery is applied across all three resistors. The
currents that flow through each branch are not necessarily equal. The right circuit diagram shows an equivalent resistance that replaces the
three parallel resistors.
To find the equivalent resistance
of the three resistors
, we apply Ohm’s law to each resistor. Because the
voltage drop across each resistor is V, we obtain
or
We also know from conservation of charge that the three currents
must add up to give the current I that goes
through the battery. If this were not true, current would have to be mysteriously created or destroyed somewhere in the circuit,
which is physically impossible. Thus, we have
Inserting the expressions for
into this equation gives
or
This formula is just Ohm’s law, with the factor in parentheses being the equivalent resistance.
Thus, the equivalent resistance for three resistors in parallel is
The same logic works for any number of resistors in parallel, so the general form of the equation that gives the equivalent
resistance of N resistors connected in parallel is
 
 
19.21
 
 
19.22
19.23
19.24
19.25
19.26
19.27
19.28
622
Chapter 19 • Electrical Circuits
Access for free at openstax.org.

WORKED EXAMPLE
Find the Current through Parallel Resistors
The three circuits below are equivalent. If the voltage rating of the battery is
, what is the equivalent resistance of
the circuit and what current runs through the circuit?
STRATEGY
The three resistors are connected in parallel and the voltage drop across them is Vbattery. Thus, we can apply the equation for the
equivalent resistance of resistors in parallel, which takes the form
The circuit with the equivalent resistance is shown below. Once we know the equivalent resistance, we can use Ohm’s law to find
the current in the circuit.
Solution
Inserting the given values for the resistance into the equation for equivalent resistance gives
The current through the circuit is thus
Discussion
Although 0.62 A flows through the entire circuit, note that this current does not flow through each resistor. However, because
19.29
19.30
19.31
19.3 • Parallel Circuits
623

electric charge must be conserved in a circuit, the sum of the currents going through each branch of the circuit must add up to
the current going through the battery. In other words, we cannot magically create charge somewhere in the circuit and add this
new charge to the current. Let’s check this reasoning by using Ohm’s law to find the current through each resistor.
As expected, these currents add up to give 0.62 A, which is the total current found going through the equivalent resistor. Also,
note that the smallest resistor has the largest current flowing through it, and vice versa.
WORKED EXAMPLE
Reasoning with Parallel Resistors
Without doing any calculation, what is the equivalent resistance of three identical resistors R in parallel?
STRATEGY
Three identical resistors R in parallel make three identical paths through which the current can flow. Thus, it is three times
easier for the current to flow through these resistors than to flow through a single one of them.
Solution
If it is three times easier to flow through three identical resistors R than to flow through a single one of them, the equivalent
resistance must be three times less: R/3.
Discussion
Let’s check our reasoning by calculating the equivalent resistance of three identical resistors R in parallel. The equation for the
equivalent resistance of resistors in parallel gives
Thus, our reasoning was correct. In general, when more paths are available through which the current can flow, the equivalent
resistance decreases. For example, if we have identical resistors R in parallel, the equivalent resistance would be R/10.
Practice Problems
10. Three resistors, 10, 20, and 30 Ω, are connected in parallel. What is the equivalent resistance?
a.
The equivalent resistance is 5.5 Ω
b.
The equivalent resistance is 60 Ω
c.
The equivalent resistance is 6 × 103 Ω
d.
The equivalent resistance is 6 × 104 Ω
11. If a
drop occurs across
, and
is connected in parallel to
, what is the voltage drop across
?
a.
Voltage drop across is
.
b.
Voltage drop across is
.
c.
Voltage drop across is
.
d.
Voltage drop across is
.
Resistors in Parallel and in Series
More complex connections of resistors are sometimes just combinations of series and parallel. Combinations of series and
parallel resistors can be reduced to a single equivalent resistance by using the technique illustrated in Figure 19.17. Various parts
are identified as either series or parallel, reduced to their equivalents, and further reduced until a single resistance is left. The
19.32
19.33
624
Chapter 19 • Electrical Circuits
Access for free at openstax.org.

process is more time consuming than difficult.
Figure 19.17 This combination of seven resistors has both series and parallel parts. Each is identified and reduced to an equivalent
resistance, and these are further reduced until a single equivalent resistance is reached.
Let’s work through the four steps in Figure 19.17 to reduce the seven resistors to a single equivalent resistor. To avoid distracting
algebra, we’ll assume each resistor is 10
. In step 1, we reduce the two sets of parallel resistors circled by the blue dashed loop.
The upper set has three resistors in parallel and will be reduced to a single equivalent resistor
. The lower set has two
resistors in parallel and will be reduced to a single equivalent resistor
. Using the equation for the equivalent resistance of
resistors in parallel, we obtain
These two equivalent resistances are encircled by the red dashed loop following step 1. They are in series, so we can use the
19.34
19.3 • Parallel Circuits
625

equation for the equivalent resistance of resistors in series to reduce them to a single equivalent resistance
. This is done in
step 2, with the result being
The equivalent resistor
appears in the green dashed loop following step 2. This resistor is in parallel with resistor
, so the
pair can be replaced by the equivalent resistor
, which is given by
This is done in step 3. The resistor
is in series with the resistor
, as shown in the purple dashed loop following step 3.
These two resistors are combined in the final step to form the final equivalent resistor
, which is
Thus, the entire combination of seven resistors may be replaced by a single resistor with a resistance of about 14.5
.
That was a lot of work, and you might be asking why we do it. It’s important for us to know the equivalent resistance of the
entire circuit so that we can calculate the current flowing through the circuit. Ohm’s law tells us that the current flowing through
a circuit depends on the resistance of the circuit and the voltage across the circuit. But to know the current, we must first know
the equivalent resistance.
Here is a general approach to find the equivalent resistor for any arbitrary combination of resistors:
1.
Identify a group of resistors that are only in parallel or only in series.
2.
For resistors in series, use the equation for the equivalent resistance of resistors in series to reduce them to a single
equivalent resistance. For resistors in parallel, use the equation for the equivalent resistance of resistors in parallel to
reduce them to a single equivalent resistance.
3.
Draw a new circuit diagram with the resistors from step 1 replaced by their equivalent resistor.
4.
If more than one resistor remains in the circuit, return to step 1 and repeat. Otherwise, you are finished.
FUN IN PHYSICS
Robot
Robots have captured our collective imagination for over a century. Now, this dream of creating clever machines to do our dirty
work, or sometimes just to keep us company, is becoming a reality. Robotics has become a huge field of research and
development, with some technology already being commercialized. Think of the small autonomous vacuum cleaners, for
example.
Figure 19.18 shows just a few of the multitude of different forms robots can take. The most advanced humanoid robots can walk,
pour drinks, even dance (albeit not very gracefully). Other robots are bio-inspired, such as the dogbot shown in the middle
photograph of Figure 19.18. This robot can carry hundreds of pounds of load over rough terrain. The photograph on the right in
Figure 19.18 shows the inner workings of an M-block, developed by the Massachusetts Institute of Technology. These simple-
looking blocks contain inertial wheels and electromagnets that allow them to spin and flip into the air and snap together in a
variety of shapes. By communicating wirelessly between themselves, they self-assemble into a variety of shapes, such as desks,
chairs, and someday maybe even buildings.
All robots involve an immense amount of physics and engineering. The simple act of pouring a drink has only recently been
mastered by robots, after over 30 years of research and development! The balance and timing that we humans take for granted is
in fact a very tricky act to follow, requiring excellent balance, dexterity, and feedback. To master this requires sensors to detect
balance, computing power to analyze the data and communicate the appropriate compensating actions, and joints and
actuators to implement the required actions.
In addition to sensing gravity or acceleration, robots can contain multiple different sensors to detect light, sound, temperature,
smell, taste, etc. These devices are all based on the physical principles that you are studying in this text. For example, the optics
used for robotic vision are similar to those used in your digital cameras: pixelated semiconducting detectors in which light is
19.35
19.36
19.37
626
Chapter 19 • Electrical Circuits
Access for free at openstax.org.

converted into electrical signals. To detect temperature, simple thermistors may be used, which are resistors whose resistance
changes depending on temperature.
Building a robot today is much less arduous than it was a few years ago. Numerous companies now offer kits for building
robots. These range in complexity something suitable for elementary school children to something that would challenge the best
professional engineers. If interested, you may find these easily on the Internet and start making your own robot today.
Figure 19.18 Robots come in many shapes and sizes, from the classic humanoid type to dogbots to small cubes that self-assemble to
perform a variety of tasks.
WATCH PHYSICS
Resistors in Parallel
This video shows a lecturer discussing a simple circuit with a battery and a pair of resistors in parallel. He emphasizes that
electrons flow in the direction opposite to that of the positive current and also makes use of the fact that the voltage is the same
at all points on an ideal wire. The derivation is quite similar to what is done in this text, but the lecturer goes through it well,
explaining each step.
Click to view content (https://www.openstax.org/l/28resistors)
GRASP CHECK
True or false—In a circuit diagram, we can assume that the voltage is the same at every point in a given wire.
a.
false
b.
true
WATCH PHYSICS
Resistors in Series and in Parallel
This video shows how to calculate the equivalent resistance of a circuit containing resistors in parallel and in series. The lecturer
uses the same approach as outlined above for finding the equivalent resistance.
Click to view content (https://www.openstax.org/l/28resistorssp)
GRASP CHECK
Imagine connected N identical resistors in parallel. Each resistor has a resistance of R. What is the equivalent resistance for
this group of parallel resistors?
a.
The equivalent resistance is (R)N.
19.3 • Parallel Circuits
627

b.
The equivalent resistance is NR.
c.
The equivalent resistance is
d.
The equivalent resistance is
WORKED EXAMPLE
Find the Current through a Complex Resistor Circuit
The battery in the circuit

## Match 1.08 — LibreTexts: 5.9.4: Projects
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Courses/Los_Angeles_City_College/Math_230-Mathematics_for_Liberal_Arts_Students/05%3A_Logic/5.09%3A_Chapter_Summary/5.9.04%3A_Projects

5.9.4: Projects
-
- Last updated
- Save as PDF
Projects
Logic Gates
Logic gates are the basis for all digital circuits.
- Research and document the following terms: logic gate, OR gate, AND gate, and NOT gate.
- Construct a diagram of a NAND gate, NOR gate, and a XOR gate by using at least two of the following gates: AND, OR, and NOT.
- Digital electronics use a 1 for true or on, and a 0 for false or off. Create a truth table documenting all possible cases using 0s and 1s for the NAND gate, NOR gate and XOR gate.
- Use a truth table to explain how XOR is related to the biconditional statement.
Logical Fallacies
Fallacies are false or deceptive logical arguments.
- Research and document the structure of five of the following named fallacies: hasty generalization, limited choice, false cause, appeal to popularity, appeal to emotion, appeal to authority, personal attack, gamblers' ruin, slippery slope, and circular reasoning.
- Create a presentation highlighting one of the five fallacies researched in the previous question. The presentation must include an introductory slide with the title of the fallacy and the form or structure of the argument. The second slide must include an example of this fallacy as used in a commercial, a political cartoon or a current event or new article. The third slide must include an explanation of why the example on slide to is a representative example of the fallacy. The last slide must include citations for any materials used. No textbooks should be used as reference.
Careers in Logic
Lawyers, mathematicians, and computer programmers are a few of the careers that require knowledge of logic.
- What career are you interested in? Research how knowledge of logic applies to your chosen field of study. Then, write a cover letter for a position in your field you'd like to apply to. In the cover letter, include how your knowledge of logic qualifies you for the position you are applying for. If you do not think logic is important for your given career choice, find a position where logic is an essential element of the position and complete the project by pretending you are writing a cover letter for that job.

## Match 1.05 — LibreTexts: 2.3: Introduction to Logic
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://workforce.libretexts.org/Bookshelves/Electronics_Technology/Troubleshooting_Motors_and_Controls_(Dickson-Self)/02%3A_Lesson_2/2.03%3A_Introduction_to_Logic

2.3: Introduction to Logic
Logic in Electronics
While this lesson is a brief introduction to logic, understand that almost no part of our modern society can function without the touch of digital electronics. Everything from our TVs to phones, cars to gaming consoles, and computers to even the cash registers at the local grocery store would not be possible without these electronic devices. In this lesson, you’ll learn how to hard-wire these types of logical functions. Later, when you learn to use Programmable Logic Controllers (PLCs), you’ll also learn about the small electronic devices that perform the following functions.
AND
In words, the logical AND sounds something like this, “If A AND B are pressed, then Y is energized.”
Considering A and B as our inputs , we can determine when Y (our output ) is energized. Folks sometimes use a truth table to help analyze these functions. We use binary (using only the numerals 0 and 1) to help represent the state of our circuit. Binary can be used any time something only has two states (true/false, high/low, yes/no, open/closed, etc.). If “0” is the normal state, and “1” denotes an activated or energized state, let’s look a truth table for the AND function.
| AND | ||
| A | B | Y |
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |
The table is read row-by-row. In the first case, neither A or B is pressed, and Y is not activate. In the second row, A is not pressed, B is pressed, and Y is not energized. Notice that Y is only energized when both A and B are pressed. In any other case, lamp Y is not lit.
OR
In words, the logical OR description might be, “If button A OR B are pressed, then Y is energized.”
The truth table for OR logic looks like the following. Notice that in this case, the only time lamp Y is not lit is in the first row when neither button is pressed. In all other cases, Y is energized.
| OR | ||
| A | B | Y |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |
NOT
Not is the simplest logical operation. It simply takes the input and inverts it. In our case, if button A is NOT pressed, then Y is energized (you could also say that if A is pressed, then Y is NOT energized). The truth table is shorter, since there’s only one input, and it looks like this:
| OR | |
| A | Y |
| 0 | 1 |
| 1 | 0 |
NOR
In the case of NOR, Y is energized as long as neither A NOR B is pushed. Notice that the truth table is an exact inverse of OR. In the case of OR, Y was energized if either button was pressed. With NOR, Y is de-energized if either button is pushed.
| NOR | ||
| A | B | Y |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |
NAND
With NAND, if both A and B are not pressed, then Y is energized. Notice the wording NOT AND . Looking at the truth table might confirm your suspicions. The output column for NAND is an inverse of the AND truth table.
| NAND | ||
| A | B | Y |
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |
XOR
XOR (pronounced “ex-or” or “exclusive or”) allows us to energize Y if either A or B is pressed, but not if both are pressed. So, it’s function is like OR logic, but the load is not energized if both buttons are pressed.
