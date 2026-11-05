# Source pack — subjects/math/expert/real-analysis
Lesson title: Real Analysis
Level: expert
Match confidence: 2.04

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.04 — LibreTexts: 8.5: Continuous Real Functions
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_(Ernst)/08%3A_New_Page/8.5%3A_Continuous_Real_Functions

8.5: Continuous Real Functions
In this section, we will explore the concept of continuity, which you likely encountered in high school.
Definition 8.95. A real function is any function \(f:A\to \mathbb{R}\) such that \(A\) is a nonempty subset of \(\mathbb{R}\) .
There are several equivalent definitions of continuity for real functions. The following characterization is typically referred to as the epsilon-delta definition of continuity . Our definition mimics the definition of continuity used in metric spaces, which \(\mathbb{R}\) equipped with absolute value happens to be an example of. Recall that \(|a-b|<r\) means that the distance between \(a\) and \(b\) is less than \(r\) (see discussion below Corollary 5.31).
Definition 8.96. Suppose \(f\) is a real function such that \(a\in dom(f)\) . We say that \(f\) is continuous at \(a\) if for every \(\varepsilon>0\) , there exists \(\delta>0\) such that if \(x\in dom(f)\) and \(|x-a|<\delta\) , then \(|f(x)-f(a)|<\varepsilon\) . If \(f\) is continuous at every point in \(B\subseteq dom(f)\) , then we say that \(f\) is continuous on \(B\) . If \(f\) is continuous on its entire domain, we simply say that \(f\) is continuous .
Loosely speaking, a real function \(f\) is continuous at the point \(a\in dom(f)\) if we can get \(f(x)\) arbitrarily close to \(f(a)\) by considering all \(x\in dom(f)\) sufficiently close to \(a\) . The value \(\varepsilon\) is indicating how close to \(f(a)\) we need to be while the value \(\delta\) is providing the “window" around \(a\) needed to guarantee that all points in the window (and in the domain) yield outputs within \(\varepsilon\) of \(f(a)\) . Figure 8.5 illustrates our definition of continuity. Note that in the figure, the point \(a\) is fixed while we need to consider all \(x\in dom(f)\) such that \(|x-a|<\delta\) . The dashed box in the figure has dimensions \(2\delta\) by \(2\varepsilon\) and is centered at the point \((a,f(a))\) . Intuitively, the function is continuous at \(a\) since given \(\varepsilon>0\) , we could find \(\delta >0\) so that the graph of the function never exits the top or bottom of the dashed box.
Perhaps you have encountered the phrase “a function is continuous if you can draw its graph without lifting your pencil." While this description provides some intuition about what continuity of a function means, it is neither accurate nor precise enough to capture the meaning of continuity.
When proving that a function is continuous at a point, the choice of \(\delta\) depends on both the point in question and the value of \(\varepsilon\) . An example should be helpful.
Example 8.97. Define \(f:\mathbb{R}\to\mathbb{R}\) via \(f(x)=3x+2\) . Let’s prove that \(f\) is continuous (at every point in the domain). Let \(a\in\mathbb{R}\) and let \(\varepsilon>0\) . Choose \(\delta=\varepsilon/3\) . We will see in a moment why this is a good choice for \(\delta\) . Suppose \(x\in\mathbb{R}\) such that \(|x-a|<\delta\) . We see that \[|f(x)-f(a)|=|(3x+2)-(3a+2)|=|3x-3a| = 3\cdot |x-a|<3\cdot \delta = 3\cdot \varepsilon/3 =\varepsilon.\] We have shown that \(f\) is continuous at \(a\) , and since \(a\) was arbitrary, \(f\) is continuous.
Problem 8.98. Prove that each of the following real functions is continuous using Definition 8.96.
- \(f:\mathbb{R}\to \mathbb{R}\) defined via \(f(x)=x\) .
- \(g:\mathbb{R}\to \mathbb{R}\) defined via \(g(x)=x+42\) .
- \(h:\mathbb{R}\to \mathbb{R}\) defined via \(h(x)=5x\) .
The next result tells us that every linear real function is continuous. Do not forget to handle the case when \(m=0\) in your proof. Note that the case when \(m=0\) proves that every constant function is continuous.
Theorem 8.99. If \(f:\mathbb{R}\to\mathbb{R}\) is defined via \(f(x)=mx+b\) for \(m,b\in\mathbb{R}\) , then \(f\) is continuous.
The second part of the next problem is much harder than you might expect.
Problem 8.100. Define \(f:\mathbb{R}\to\mathbb{R}\) via \(f(x)=x^2\) .
- Prove that \(f\) is continuous at 0.
- Prove that \(f\) is continuous at 1.
Problem 8.101. Define \(f:\mathbb{R}\to\mathbb{R}\) via \(f(x)=\sqrt{x}\) . Prove that \(f\) is continuous at 0.
Problem 8.102. Suppose \(f\) is a real function. Write a precise statement for what it means for \(f\) to not be continuous at \(a\in dom(f)\) .
Problem 8.103. Define \(f:\mathbb{R}\to\mathbb{R}\) via \[f(x)=\begin{cases} 1, & \text{if }x=0\\ x, & \text{otherwise}. \end{cases}\] Determine where \(f\) is continuous and justify your assertion.
Problem 8.104. Define \(f:\mathbb{R}\to\mathbb{R}\) via \[f(x)=\begin{cases} 1, & \text{if }x\in \mathbb{Q}\\ 0, & \text{otherwise}. \end{cases}\] Determine where \(f\) is continuous and justify your assertion.
After completing the next problem, reflect on the statement “a function is continuous if you can draw its graph without lifting your pencil."
Problem 8.105. Define \(f:\mathbb{N}\to\mathbb{R}\) via \(f(x)=1\) . Notice the domain! Determine where \(f\) is continuous and justify your assertion.
Theorem 8.106. Suppose \(f\) is a real function. Then \(f\) is continuous if and only if the preimage \(f^{-1}(U)\) of every open set \(U\) is an open set intersected with the domain of \(f\) .
The previous characterization of continuity is often referred to as the “open set definition of continuity," although for us it is a theorem instead of a definition. This is the definition used in topology. Another notion of continuity, called “sequential continuity", makes use of convergent sequences. All of these characterizations of continuity are equivalent for the real numbers (using the standard definition of an open set). However, there are contexts in mathematics where the epsilon-delta definition of continuity is undefined (because there is not a notion of distance in either the domain or codomain) and others where continuity and sequential continuity are not equivalent.
Since every open set is the union of bounded open intervals (Definition 5.53), the union of open sets is open (Theorem 5.58), and preimages respect unions (Theorem 8.92), we can strengthen Theorem 8.106 into a slightly more useful result.
Theorem 8.107. Suppose \(f\) is a real function. Then \(f\) is continuous if and only if the preimage \(f^{-1}(I)\) of every bounded open interval \(I\) is an open set intersected with the domain of \(f\) .
Now that we have two methods for verifying continuity (Definition 8.96 and Theorem 8.106/8.107), you can use either one when approaching the remaining problems in this section. Sometimes it does not matter which approach you take and other times one method might be better suited to the task.
Problem 8.108. Define \(f:\mathbb{R}\to\mathbb{R}\) via \(f(x)=x^2\) . Prove that \(f\) is continuous.
Problem 8.109. Define \(f:\mathbb{R}\setminus\{0\}\to\mathbb{R}\) via \(f(x)=\frac{1}{x}\) . Determine where \(f\) is continuous and justify your assertion.
The previous problems once again calls into question the phrase “a function is continuous if you can draw its graph without lifting your pencil."
Problem 8.110. Find a continuous real function \(f\) and an open interval \(I\) such that the preimage \(f^{-1}(I)\) is not an open interval.
For the next few problems, if you attempt to construct counterexamples, you may rely on your previous knowledge about various functions that you encountered in high school and calculus.
Problem 8.111. Suppose \(f\) is a continuous real function. If \(U\) is an open set contained in \(dom(f)\) , is the image \(f(U)\) always open? If so, prove it. Otherwise, provide a counterexample.
Problem 8.112. Suppose \(f\) is a continuous real function. If \(C\) is a closed set, is the preimage \(f^{-1}(C)\) always a closed set? If so, prove it. Otherwise, provide a counterexample.
Problem 8.113. Suppose \(f\) is a continuous real function. If \([a,b]\) is a closed interval contained in \(dom(f)\) , is the image \(f([a,b])\) always a closed interval? If so, prove it. Otherwise, provide a counterexample.
Problem 8.114. Suppose \(f\) is a continuous real function. If \(C\) is a closed set contained in \(dom(f)\) , is the image \(f(C)\) always a closed set? If so, prove it. Otherwise, provide a counterexample.
Problem 8.115. Suppose \(f\) is a continuous real function. If \(B\) is bounded set contained in \(dom(f)\) , is the image \(f(B)\) always a bounded set? If so, prove it. Otherwise, provide a counterexample.
Problem 8.116. Suppose \(f\) is a continuous real function. If \(B\) is a bounded set, is the preimage \(f^{-1}(B)\) always a bounded set? If so, prove it. Otherwise, provide a counterexample.
Problem 8.117. Suppose \(f\) is a continuous real function. If \(K\) is a compact set, is the preimage \(f^{-1}(B)\) always a compact set? If so, prove it. Otherwise, provide a counterexample.
Problem 8.118. Suppose \(f\) is a continuous real function. If \(C\) is a connected set contained in \(dom(f)\) , is the image \(f(C)\) always connected? If so, prove it. Otherwise, provide a counterexample.
Problem 8.119. Suppose \(f\) is a continuous real function. If \(C\) is a connected set, is the preimage \(f^{-1}(C)\) always a connected set? If so, prove it. Otherwise, provide a counterexample.
Perhaps you noticed the absence of one natural question in the previous sequence of problems. If \(f\) is a continuous real function and \(K\) is a subset of the domain of \(f\) , is the image \(f(K)\) a compact set? It turns out that the answer is “yes", but proving this fact is beyond the scope of this book. This theorem is often proved in a real analysis course and is then used to prove the Extreme Value Theorem, which you may have encountered in your calculus course.
The next result is a special case of the well-known Intermediate Value Theorem , which states that if \(f\) is a continuous real function whose domain contains the interval \([a,b]\) , then \(f\) attains every value between \(f(a)\) and \(f(b)\) at some point within the interval \([a,b]\) . To prove the special case, utilize Theorem 5.87 and Problem 8.118 together with a proof by contradiction.
Theorem 8.120. Suppose \(f\) is a real function. If \(f\) is continuous on \([a,b]\) such that \(f(a)<0<f(b)\) or \(f(a)>0>f(b)\) , then there exists \(r\in [a,b]\) such that \(f(r)=0\) .
If we generalize the previous result, we obtain the Intermediate Value Theorem.
Theorem 8.121. Suppose \(f\) is a real function. If \(f\) is continuous on \([a,b]\) such that \(f(a)<c<f(b)\) or \(f(a)>c>f(b)\) for some \(c\in \mathbb{R}\) , then there exists \(r\in [a,b]\) such that \(f(r)=c\) .
Problem 8.122. Is the converse of the Intermediate Value Theorem true? If so, prove it. Otherwise, provide a counterexample.

## Match 2.04 — LibreTexts: 4.9: Circuit Analysis
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

## Match 2.03 — LibreTexts: 1.1.6: Activity of Solvents- Classic Analysis
License: Public Domain · https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Topics_in_Thermodynamics_of_Solutions_and_Liquid_Mixtures/01%3A_Modules/1.01%3A_Activity/1.1.06%3A_Activity_of_Solvents-_Classic_Analysis

1.1.6: Activity of Solvents- Classic Analysis
Thermodynamics underpins a classic topic in physical chemistry concerning the depression of freezing point, \(\Delta \mathrm{T}_{\mathrm{f}}\) of a liquid by added solute [1,2]. We note the superscript ‘id’ in equation (a) relating the activity of a solvent in an ideal solution, molality \(\mathrm{m}_{j}\).
\[\ln \left(\mathrm{a}_{1}\right)^{\mathrm{id}}=-\mathrm{M}_{1} \, \mathrm{m}_{\mathrm{j}}=-\mathrm{M}_{1} \, \mathrm{n}_{\mathrm{j}} / \mathrm{n}_{1}^{0} \, \mathrm{M}_{1}=-\mathrm{n}_{\mathrm{j}} / \mathrm{n}_{1}^{0} \nonumber \]
If the properties of a given aqueous solution are determined to a significant extent by solute-solute interactions, a determined molar mass for a given solute will be in error. Otherwise an observed depression is not a function of solute-solute interactions. Glasstone [2] comments that the ratio \(\Delta \mathrm{T}_{\mathrm{f}} / \mathrm{m}_{\mathrm{j}}\) decreases with increasing concentration of solute, emphasising that a simple analysis is only valid for dilute solutions. Nevertheless the general idea is that the depression for a given mj is not a function of the hydration of a solute. Barrow [3] noted that the ratio \(\Delta \mathrm{T}_{\mathrm{f}} / \mathrm{m}_{\mathrm{j}}\) for mannitol(aq) in very dilute solutions [4] is effectively constant. A similar opinion is advanced by Adam [5] who nevertheless comments on the importance of the condition ’dilute solution’ in a determination of the molar mass of a given solute.
In summary, classic physical chemistry emphasises the importance of the superscript ‘id’ in equation (a). For very dilute solutions in a given solvent \(\ln \left(a_{1}\right)\) is linear function of \(\mathrm{m}_{j}\), leading to description of such properties as ‘depression of freezing point ‘ and ‘elevation of boiling point ’ under the heading ‘colligative properties. Only the molality of solute mj is important; solute-solute interactions and hydration characteristics of solutes apparently play no part in determining these colligative properties.
The key to these statements is provided by the Gibbs-Duhem equation. For a solution prepared using 1 kg of water(\(\lambda\)) and \(\mathrm{m}_{j}\) moles of a simple solute \(j\), the Gibbs energy is given by equation (b).
\[\mathrm{G}(\mathrm{aq})=\left(1 / \mathrm{M}_{1}\right) \, \mu_{1}(\mathrm{aq})+\mathrm{m}_{\mathrm{j}} \, \mu_{\mathrm{j}}(\mathrm{aq}) \nonumber \]
Then, \(\mathrm{G}(\mathrm{aq})=\left(1 / \mathrm{M}_{1}\right) \,\left[\mu_{1}^{*}(\lambda)-\phi \, \mathrm{R} \, \mathrm{T} \, \mathrm{M}_{1} \, \mathrm{m}_{\mathrm{j}}\right]\)
\[+\mathrm{m}_{\mathrm{j}} \,\left[\mu_{\mathrm{j}}^{0}\left(\mathrm{aq} ; \mathrm{id} ; \mathrm{m}_{\mathrm{j}}=1\right)+\mathrm{R} \, \mathrm{T} \, \ln \left(\mathrm{m}_{\mathrm{j}} \, \gamma_{\mathrm{j}} / \mathrm{m}^{0}\right)\right] \text { (c) } \nonumber \]
According to the Gibbs - Duhem Equation, the chemical potentials of solvent and solute are linked. At fixed \(\mathrm{T}\) and \(p\),
\[\mathrm{n}_{1} \, \mathrm{d} \mu_{1}(\mathrm{aq})+\mathrm{n}_{\mathrm{j}} \, \mathrm{d} \mu_{\mathrm{j}}(\mathrm{aq})=0 \nonumber \]
Or, \(\left(1 / \mathrm{M}_{1}\right) \, \mathrm{d}\left[\mu_{1}^{*}(\lambda)-\phi \, \mathrm{R} \, \mathrm{T} \, \mathrm{M}_{1} \, \mathrm{m}_{\mathrm{j}}\right]\)
\[+\mathrm{m}_{\mathrm{j}} \, \mathrm{d}\left[\mu_{\mathrm{j}}^{0}\left(\mathrm{aq} ; \mathrm{id} ; \mathrm{m}_{\mathrm{j}}=1\right)+\mathrm{R} \, \mathrm{T} \, \ln \left(\mathrm{m}_{\mathrm{j}} \, \gamma_{\mathrm{j}} / \mathrm{m}^{0}\right)\right]=0 \nonumber \]
\[\text { Or, } \quad-\mathrm{d}\left(\phi \, \mathrm{m}_{\mathrm{j}}\right)+\mathrm{m}_{\mathrm{j}} \, \mathrm{d} \ln \left(\mathrm{m}_{\mathrm{j}} \, \gamma_{\mathrm{j}} / \mathrm{m}^{0}\right)=0 \nonumber \]
\[\text { Or, } \quad-\mathrm{d}\left(\phi \, \mathrm{m}_{\mathrm{j}}\right)+\mathrm{m}_{\mathrm{j}} \, \mathrm{d} \ln \left(\mathrm{m}_{\mathrm{j}} \, \gamma_{\mathrm{j}} / \mathrm{m}^{0}\right)=0 \nonumber \]
\[\text { Hence, } \quad(\phi-1) \, \frac{\mathrm{dm}_{\mathrm{j}}}{\mathrm{m}_{\mathrm{j}}}+\mathrm{d} \phi=\mathrm{d} \ln \left(\gamma_{\mathrm{j}}\right) \nonumber \]
The latter equation forms the basis of the oft-quoted statement that if the thermodynamic properties of a solute are ideal then so are the properties of the solvent. Similarly if the thermodynamic properties of the solute are ideal then so are the properties of the solvent.
\[\text { From equation }(h), \phi=1+\frac{1}{m_{j}} \, \int_{0}^{m(j)} m_{j} \, d \ln \left(\gamma_{j}\right) \nonumber \]
The importance of equation (i) emerges from the idea that \(\gamma_{j}\) describes the impact of solute-solute interactions on the properties of a given solution. If we can formulate an equation for \(\ln \left(\gamma_{j}\right)\) in terms of the properties of the solution, we obtain \(\phi\) from equation (i). If the properties of a real solution containing a neutral solute are not ideal, both \(\gamma_{j}\) and \(\phi\) are linked functions of the solute molality. Pitzer [6] suggests equations (j) and (k) for \(\ln \left(\gamma_{j}\right)\) and \(\phi\) in terms of solute molalities using two parameters, \(\lambda\) and \(\mu\).
\[\ln \left(\gamma_{\mathrm{j}}\right)=2 \, \lambda \, \mathrm{m}_{\mathrm{j}}+3 \, \mu \,\left(\mathrm{m}_{\mathrm{j}}\right)^{2} \nonumber \]
\[\phi-1=\lambda \, \mathrm{m}_{\mathrm{j}}+2 \, \mu \,\left(\mathrm{m}_{\mathrm{j}}\right)^{2} \nonumber \]
For example in the case of mannitol(aq) and butan-1-ol(aq), Pitzer [6] suggests the following equations for \(\ln \left(\gamma_{j}\right)\).
\[\text { For mannitol(aq) } \quad \ln \left(\gamma_{\mathrm{j}}\right)=-0.040 \, \mathrm{m}_{\mathrm{j}} \nonumber \]
\[\text { For butan-1-ol(aq) } \ln \left(\gamma_{\mathrm{j}}\right)=-0.38 \, \mathrm{m}_{\mathrm{j}}+0.51 \,\left(\mathrm{m}_{\mathrm{j}}\right)^{2} \nonumber \]
Guggenheim[7] using the mole fraction scale suggests equation (n) where \(\mathrm{A}\) and \(\mathrm{B}\) are characteristic of the solute.
\[1-\phi=A \, x_{j}+B \,\left(x_{j}\right)^{2} \nonumber \]
Prigogine and Defay [1] comment that the non-ideal properties of solutions can be understood in terms of the different molecular sizes of solute and solvent. A similar comment is made by Robinson and Stokes [8] who use a parameter describing the ratio of molar volumes of solute and solvent. The extent to which the properties of a solution differ from ideal can often be traced to a variety of causes including solvation, molecular size and shape.
Footnotes
[1] I. Prigogine and R. Defay, Chemical Thermodynamics, trans. D. H. Everett, Longmans Green , London 1953.
[2] S. Glasstone, Physical Chemistry, McMillan, London, 2nd. edn., 1948,page 645.
[3] G. M. Barrow, Physical Chemistry, McGraw-Hill, New York, 4th edn.,1979, page 298.
[4] L. H. Adams, J. Am. Chem. Soc.,1915,37,481.
[5] Neil Kensington Adam, Physical Chemistry, Oxford,1956, page 284.
[6] K. S. Pitzer, Thermodynamics , McGraw-Hill, New York, 3rd. edn., 1995.
[7] E. A. Guggenheim, Thermodynamics, North-Holland Publishing Co., Amsterdam, 1950, pages 252-3
[8] R. A. Robinson and R. H. Stokes, Electrolyte Solutions, Butterworths, London 2nd edn. Revised, 1965.
