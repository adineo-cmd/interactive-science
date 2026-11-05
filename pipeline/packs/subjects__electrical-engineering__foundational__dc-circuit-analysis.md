# Source pack — subjects/electrical-engineering/foundational/dc-circuit-analysis
Lesson title: DC Circuit Analysis
Level: foundational
Match confidence: 3.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.05 — LibreTexts: 4.9: Circuit Analysis
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/3.0/ · https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Introductory_Electrical_Engineering/A_First_Course_in_Electrical_and_Computer_Engineering_(Scharf)/04%3A_Linear_Algebra/4.09%3A_Circuit_Analysis

4.9: Circuit Analysis
In this section we use the linear algebra we have developed to find the voltages and currents in a simple electrical circuit, such as the one shown in Figure 1. There are many reasons why this might be necessary; in this example we need to know the current flowing through the lamp to tell whether or not it will glow. Too little current will have no visible effect; too much current will cause the lamp to burn out. We will apply a few physical laws relating the voltages and currents in a circuit, turn these laws into systems of linear equations, and solve the equations for the voltages and currents.
Current, Voltage, and Resistance
We will use three physical quantities in our analysis of electrical circuits: current, voltage, and resistance. Current is the flow of electrical charge from one place to another. Electrons flowing through a wire or through some other electronic device comprise a current. Voltage is a difference in electric potential that makes electrons flow. Voltage is sometimes called electromotive force because it is like a “force” that moves electrons. Resistance is a property of the device through which the electron current flows. The lower the resistance of a device, the more easily current can flow through the device.
The analogy of water flowing through pipes can help you develop intuition about electrical circuits. In this analogy, electrical current corresponds to the flow rate of water. Voltage corresponds to the pressure that forces the water to flow, and resistance is the friction of flow. A small pipe would impede the flow of water more than would a large pipe, so the small pipe would correspond to a higher resistance. While this analogy can be helpful, keep in mind that electricity is not water. All analogies break down at some point.
We measure electrical current in amperes . The standard symbol for current is \(i\), and the direction of positive flow is indicated by an arrow on the circuit diagram. The arrow is for reference only; if the true current is in the opposite direction, we get negative values for \(i\). Because electrons are negatively charged, current is defined as flowing in the opposite direction as electron motion. But to reduce confusion, you should learn to think in terms of current rather than electron motion.
A point in a circuit where several devices are connected together is called a node . The conservation law for current says that “what flows in must flow out of a node,” a principle known as Kirchhoff ' s current law . Kirchhoff's current law states that the sum of all currents leaving a node is zero . In this law, a current entering the node is considered to be a negative current leaving the node.
Voltage is measured in volts and is usually written as \(\nu\) (or \(e\)). Since voltage is a difference in potential between two points (nodes), we can show it on a circuit diagram with a + and a –sign to indicate which two nodes we are comparing and which one of the nodes is considered negative. As with current, the markings are for reference only and we may end up with a negative value of \(\nu\).
In an electrical circuit, one node is usually chosen as a reference node and is considered to have a voltage of zero. Then the voltage at every other node is measured with respect to the reference node. This saves us the trouble of always specifying pairs of nodes for voltage measurements and marking + and – signs for each voltage. Other names for the reference node are common and ground .
A constant voltage source is a device that always forces the voltage between its two terminals to be a constant value. In Figure 1 the circle at the left represents a constant voltage source of 5 volts, so that the voltage at the upper (+) end is always exactly 5 volts higher than the voltage at the lower (-) end. A voltage source is something like a battery, but idealized. Real batteries do not maintain a constant output voltage under all conditions.
Resistance is measured in ohms and is denoted by \(R\). A resistor is shown as a zig-zag line in circuit diagrams and labeled with the value of its resistance in ohms. In this chapter we will consider only devices whose resistance is positive and the same in both directions. Ohm's law , also called the resistor law , relates the voltage and current in a resistor. For the resistor shown in Figure 2, with reference directions assigned to \(\nu\) and \(i\) as shown, Ohm's law is
\[\nu=i R \nonumber \]
Note that current flows from + to - through the resistor.
Ohm's law and Kirchhoff's current law are the only principles we need to write equations that will allow us to find the voltages and currents in the resistive circuit of Figure 1. We begin by choosing a reference node and assigning variables to the voltages at every other node (with respect to the reference node). These choices are shown in Figure 3.
The constant voltage source forces \(\nu _1\) to be exactly 5 volts higher than the reference node. Thus
\[\nu _{1}=5 \nonumber \]
Next we write equations by applying Kirchhoff's current law to each node in the circuit (except the reference node and \(\nu _1\), whose voltages we already know). At the node labeled \(\nu _2\) are three paths for leaving current. The current leaving through the 50 ohm resistor can be found by Ohm's law, where the voltage across that resistor is \(\nu _2 − \nu _1\):
\[i_{50}=\frac{v}{R}=\frac{\left(v_{2}-v_{1}\right)}{50} \nonumber \]
For current leaving through the 300 ohm resistor, the voltage is \(\nu _2\). Pay careful attention to the sign; since we are interested in the current leaving the node labeled \(\nu _2\), Figure 4.14 indicates that to apply Ohm's law we should take the voltage as \(+ \nu _2 −\) reference = \(\nu _2 − 0 = \nu _2\). So
\[i_{300}=\frac{v_{2}}{300} \nonumber \]
For the 100 ohm resistor, we can write
\[i_{100}=\frac{\left(v_{2}-v_{3}\right)}{100} \nonumber \]
According to Kirchhoff's current law, the sum of these three leaving currents is zero:
\[\begin{align}
\quad \tfrac{\left(v_{2}-v_{1}\right)}{50}+\tfrac{v_{2}}{300}+\tfrac{\left(v_{2}-v_{3}\right)}{100}=0 \nonumber \\
\Rightarrow 6\left(v_{2}-v_{1}\right)+v_{2}+3\left(v_{2}-v_{3}\right)=0 \nonumber \\
\Rightarrow \qquad \quad -6 v_{1}+10 v_{2}-3 v_{3}=0 \label{}
\end{align} \nonumber \]
Notice that when we wrote the equation for the node labeled \(\nu _2\), the variable \(\nu _2\) had a + sign each time it occurred in the equation, while the others had a - sign. This is always the case, and watching for it can help you avoid sign errors. Now we apply Kirchhoff's current law at the node labeled \(\nu _3\) to get the equation
\[\begin{align}
\frac{\left(v_{3}-v_{2}\right)}{100}+\frac{v_{3}}{2}=0 \nonumber \\
\Rightarrow \quad\left(v_{3}-v_{2}\right)+50 v_{3}=0 \nonumber \\
\Rightarrow \quad 0 v_{1}-1 v_{2}+51 v_{3}=0 \label{}
\end{align} \nonumber \]
Note that this time it is \(\nu _3\) that always shows up with a + sign.
Equations 2 , 6 , and 7 give us a system of three equations in the three unknown variables \(\nu _1\), \(\nu _2\), and \(\nu _3\). We now write them in matrix form as
\[\left[\begin{array}{lll}
1 & 0 & 0 \\
-6 & 10 & -3 \\
0 & -1 & 51
\end{array}\right]\left[\begin{array}{l}
v_{1} \\
v_{2} \\
v_{3}
\end{array}\right]=\left[\begin{array}{l}
5 \\
0 \\
0
\end{array}\right] \nonumber \]
(MATLAB) Use MATLAB to solve Equation 8 . You should find
\(\nu _1\) = 5.0000 volts
\(\nu _2\) = 3.0178 volts
\(\nu _3\) = 0.0592 volt
What is the determinant of the coefficient matrix \(A\)? Is the solution unique?
We can determine the current flowing through the lamp from \(\nu _3\) to ground in Example 1 by Ohm's law:
\[i=\frac{\nu}{R}=\frac{\nu _{3}}{2}=0.0296 \text { ampere } \nonumber \]
The visible effect will, of course, depend on the lamp. Let us assume that the specifications for our lamp indicate that 0.05 ampere or more is required before it will glow, and more than 0.075 ampere will cause it to burn out. In this case, our circuit would not make the lamp glow.
(MATLAB) Write and solve equations for the circuit in Figure 4. What are the voltages at the nodes labeled \(\nu _1\) through \(\nu _4\)? What is the current labeled \(i_1\)? And \(i_2\)?

## Match 2.11 — LibreTexts: 10: DC Network Analysis
License: GNU Free Documentation License · https://workforce.libretexts.org/Bookshelves/Electronics_Technology/Book%3A_Electric_Circuits_I_-_Direct_Current_(Kuphaldt)/10%3A_DC_Network_Analysis

Skip to main content
-
-
10.1: What is Network Analysis?
-
Generally speaking, network analysis is any structured technique used to mathematically analyze a circuit (a “network” of interconnected components). Quite often the technician or engineer will encounter circuits containing multiple sources of power or component configurations which defy simplification by series/parallel analysis techniques. In those cases, he or she will be forced to use other means. This chapter presents a few techniques useful in analyzing such complex circuits.
-
-
10.2: Branch Current Method
-
he first and most straightforward network analysis technique is called the Branch Current Method. In this method, we assume directions of currents in a network, then write equations describing their relationships to each other through Kirchhoff’s and Ohm’s Laws. Once we have one equation for every unknown current, we can solve the simultaneous equations and determine all currents, and therefore all voltage drops in the network.
-
-
10.3: Mesh Current Method and Analysis
-
The Mesh Current Method, also known as the Loop Current Method, is quite similar to the Branch Current method in that it uses simultaneous equations, Kirchhoff’s Voltage Law, and Ohm’s Law to determine unknown currents in a network. It differs from the Branch Current method in that it does not use Kirchhoff’s Current Law, and it is usually able to solve a circuit with less unknown variables and less simultaneous equations, which is especially nice if you’re forced to solve without a calculator.
-
-
10.4: Node Voltage Method
-
The node voltage method of analysis solves for unknown voltages at circuit nodes in terms of a system of KCL equations. This analysis looks strange because it involves replacing voltage sources with equivalent current sources. Also, resistor values in ohms are replaced by equivalent conductances in siemens, G = 1/R. The siemens (S) is the unit of conductance, having replaced the mho unit. In any event S = Ω-1. And S = mho (obsolete).
-
-
10.5: Introduction to Network Theorems
-
-
-
10.6: Millman’s Theorem
-
In Millman’s Theorem, the circuit is re-drawn as a parallel network of branches, each branch containing a resistor or series battery/resistor combination. Millman’s Theorem is applicable only to those circuits which can be re-drawn accordingly.
-
-
10.7: Superposition Theorem
-
Superposition theorem is one of those strokes of genius that takes a complex subject and simplifies it in a way that makes perfect sense. A theorem like Millman’s certainly works well, but it is not quite obvious why it works so well. Superposition, on the other hand, is obvious.
-
-
10.8: Thevenin’s Theorem
-
Thevenin’s Theorem states that it is possible to simplify any linear circuit, no matter how complex, to an equivalent circuit with just a single voltage source and series resistance connected to a load. The qualification of “linear” is identical to that found in the Superposition Theorem, where all the underlying equations must be linear (no exponents or roots). If we’re dealing with passive components (such as resistors, and later, inductors and capacitors), this is true. However, there are som
-
-
10.9: Norton’s Theorem
-
-
-
10.10: Thevenin-Norton Equivalencies
-
Since Thevenin’s and Norton’s Theorems are two equally valid methods of reducing a complex network down to something simpler to analyze, there must be some way to convert a Thevenin equivalent circuit to a Norton equivalent circuit, and vice versa (just what you were dying to know, right?). Well, the procedure is very simple.
-
-
10.11: Millman’s Theorem Revisited
-
-
-
10.12: Maximum Power Transfer Theorem
-
The Maximum Power Transfer Theorem is not so much a means of analysis as it is an aid to system design. Simply stated, the maximum amount of power will be dissipated by a load resistance when that load resistance is equal to the Thevenin/Norton resistance of the network supplying the power. If the load resistance is lower or higher than the Thevenin/Norton resistance of the source network, its dissipated power will be less than the maximum.
-
-
10.13: Δ-Y and Y-Δ Conversions
-

## Match 2.06 — LibreTexts: 10.1: What is Network Analysis?
License: GNU Free Documentation License · https://workforce.libretexts.org/Bookshelves/Electronics_Technology/Book%3A_Electric_Circuits_I_-_Direct_Current_(Kuphaldt)/10%3A_DC_Network_Analysis/10.01%3A_What_is_Network_Analysis%3F

10.1: What is Network Analysis?
To illustrate how even a simple circuit can defy analysis by breakdown into series and parallel portions, take start with this series-parallel circuit:
To analyze the above circuit, one would first find the equivalent of R 2 and R 3 in parallel, then add R 1 in series to arrive at a total resistance. Then, taking the voltage of battery B 1 with that total circuit resistance, the total current could be calculated through the use of Ohm’s Law (I=E/R), then that current figure used to calculate voltage drops in the circuit. All in all, a fairly simple procedure.
However, the addition of just one more battery could change all of that:
Resistors R 2 and R 3 are no longer in parallel with each other, because B 2 has been inserted into R 3 ‘s branch of the circuit. Upon closer inspection, it appears there are no two resistors in this circuit directly in series or parallel with each other. This is the crux of our problem: in series-parallel analysis, we started off by identifying sets of resistors that were directly in series or parallel with each other, reducing them to single equivalent resistances. If there are no resistors in a simple series or parallel configuration with each other, then what can we do?
It should be clear that this seemingly simple circuit, with only three resistors, is impossible to reduce as a combination of simple series and simple parallel sections: it is something different altogether. However, this is not the only type of circuit defying series/parallel analysis:
Here we have a bridge circuit, and for the sake of example we will suppose that it is not balanced (ratio R 1 /R 4 not equal to ratio R 2 /R 5 ). If it were balanced, there would be zero current through R 3 , and it could be approached as a series/parallel combination circuit (R 1 —R 4 // R 2 —R 5 ). However, any current through R 3 makes a series/parallel analysis impossible. R 1 is not in series with R 4 because there’s another path for electrons to flow through R 3 . Neither is R 2 in series with R 5 for the same reason. Likewise, R 1 is not in parallel with R 2 because R 3 is separating their bottom leads. Neither is R 4 in parallel with R 5 . Aaarrggghhhh!
Although it might not be apparent at this point, the heart of the problem is the existence of multiple unknown quantities. At least in a series/parallel combination circuit, there was a way to find total resistance and total voltage, leaving total current as a single unknown value to calculate (and then that current was used to satisfy previously unknown variables in the reduction process until the entire circuit could be analyzed). With these problems, more than one parameter (variable) is unknown at the most basic level of circuit simplification.
With the two-battery circuit, there is no way to arrive at a value for “total resistance,” because there are two sources of power to provide voltage and current (we would need two “total” resistances in order to proceed with any Ohm’s Law calculations). With the unbalanced bridge circuit, there is such a thing as total resistance across the one battery (paving the way for a calculation of total current), but that total current immediately splits up into unknown proportions at each end of the bridge, so no further Ohm’s Law calculations for voltage (E=IR) can be carried out.
So what can we do when we’re faced with multiple unknowns in a circuit? The answer is initially found in a mathematical process known as simultaneous equations or systems of equations , whereby multiple unknown variables are solved by relating them to each other in multiple equations. In a scenario with only one unknown (such as every Ohm’s Law equation we’ve dealt with thus far), there only needs to be a single equation to solve for the single unknown:
However, when we’re solving for multiple unknown values, we need to have the same number of equations as we have unknowns in order to reach a solution. There are several methods of solving simultaneous equations, all rather intimidating and all too complex for explanation in this chapter. However, many scientific and programmable calculators are able to solve for simultaneous unknowns, so it is recommended to use such a calculator when first learning how to analyze these circuits.
This is not as scary as it may seem at first . Trust me!
Later on we’ll see that some clever people have found tricks to avoid having to use simultaneous equations on these types of circuits. We call these tricks network theorems , and we will explore a few later in this chapter.
Review
- Some circuit configurations (“networks”) cannot be solved by reduction according to series/parallel circuit rules, due to multiple unknown values.
- Mathematical techniques to solve for multiple unknowns (called “simultaneous equations” or “systems”) can be applied to basic Laws of circuits to solve networks.
