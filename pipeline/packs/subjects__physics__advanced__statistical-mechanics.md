# Source pack — subjects/physics/advanced/statistical-mechanics
Lesson title: Statistical Mechanics
Level: advanced
Match confidence: 3.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.05 — LibreTexts: 1.19: Equilibrium Statistical Mechanics
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://phys.libretexts.org/Courses/University_of_California_Davis/Physics_156%3A_A_Cosmology_Workbook/01%3A_Workbook/1.19%3A_Equilibrium_Statistical_Mechanics

1.19: Equilibrium Statistical Mechanics
Out of the early Universe we get the light elements, a lot of photons and, as it turns out, a bunch of neutrinos and other relics of our hot past as well. To understand the production of these particles we now turn to the subject of Equilibrium Statistical Mechanics.
Phase Space
A collection of particles is conveniently described by how it is distributed in both position and momentum. We usually assume three spatial dimensions, and in this case, the momentum of a particle is a three-dimensional quantity (it takes 3 numbers to specify the momentum of a particle, \(p_x\), \(p_y\) and \(p_z\)). We refer to the space itself as “configuration space” (\(x\), \(y\), \(z\)) and the three-dimensional space associated with momentum as “momentum space.” We can put these spaces together into one six-dimensional object (\(x\), \(y\), \(z\), \(p_x\), \(p_y\), \(p_z\)) we call “phase space.”
The phase space distribution function
We conventionally describe the location in phase space of large numbers of particles in a statistical manner, where we just state the average number of particles as a function of location in phase space. More specifically, we define a phase space distribution function, \(f\), such that the number of particles at (\(x\), \(y\), \(z\), \(p_x\), \(p_y\), \(p_z\)) in a phase-space volume of size \(dx\,dy\,dz\,dp_x\,dp_y\,dp_z\) is
\[dN = \frac{f(\vec x, \vec p)}{h^3} dx\,dy\,dz\,dp_x\,dp_y\,dp_z \label{eqn:Definef}\]
where \(h\) is Planck's constant. This equation serves to define \(f\): It tells us the number of particles in a phase space volume equal to \(h^3\).
Types of Equilibria
We are going to introduce some results of statistical mechanics that are quite amazing and useful and that apply in equilibrium . So let us first define equilibrium. In fact, we will define two different kinds of equilibrium: kinetic and chemical.
Kinetic equilibrium obtains when reactions that exchange energy between particles (such as collisions) occur rapidly compared to the time-scale under which conditions are changing. For example, the gas particles in this room interact very rapidly. For a given particle, the typical time between collisions is well below a second. Given that conditions in the room are not changing rapidly (that is, the temperature in the room is quite stable), the gas particles in the room will be in kinetic equilibrium.
Chemical equilibrium obtains when reactions that exchange particle type are rapidly occurring. An example of a reaction that changes particle type is electron, positron annihilation:
\[e^- + e^+ \rightarrow 2\gamma\]
where \(\gamma\) is a photon. Another example is given by chemical processes, and is where “chemical equilibrium” gets its name, such as
\[\ce{2H + O <=>H_2O}.\]
When these reactions are fast, chemical equilibrium is rapidly achieved. In chemical equilibrium, just as many forward reactions as backward reactions are happening (so the number densities of all the particles are independent of time).
Equilibrium forms for \(f\)
The first of two amazing results from statistical mechanics we will use (without proof) is the following. In kinetic equilibrium the phase space distribution function always has the following form:
\[f = \left[\exp\left(\frac{E(p)-\mu}{k_BT}\right) \pm 1\right]^{-1}. \label{eqn:f}\]
where the + is for fermions and the - is for bosons, \(T\) is the temperature, \(\mu\) is the chemical potential and \(E\) is the energy of each particle, \(E^2 = p^2c^2 + m^2c^4\).
You already have some intuition for what is meant by temperature. We will soon do some exercises to see how the way that \(T\) affects \(f\) is consistent with your ideas about temperature. You may have less of a feeling about the physical meaning of \(\mu\). We'll do some exercises to address that. In the meantime, I'll tell you that when two systems are allowed to exchange kinetic energy, after a sufficiently long time if conditions are not changing, then their temperatures become related (in fact, equal). Similarly, if particles are allowed to change type , then the chemical potentials of the different types of particles also become related (though not necessarily equal). For example, if this reaction is proceeding rapidly, in both the forwards and backwards direction:
\[a+b \leftarrow \rightarrow c+d\]
then chemical equilibrium will obtain and the number densities \(n_a\), \(n_b\), \(n_c\) and \(n_d\) will be independent of time. Further, and this is our second result from statistical mechanics, we will have this relation between their chemical potentials:
\[\mu_a + \mu_b = \mu_c + \mu_d.\]
More generally, for
\[a+b+... \leftarrow \rightarrow c+d+ …\]
happening rapidly, then \(\mu_a + \mu_b + ... = \mu_c + \mu_d + ....\)
As a further example, if the reactions
\[e^- + e^+ \leftarrow \rightarrow 2\gamma\]
are happening rapidly then \(\mu_{e^{-}} + \mu_{e^{+}} = 2 \mu_\gamma\).
How to go from \(f\) to number density, energy density and pressure
The number density, energy density and pressure of a collection of free particles is:
\[\begin{equation}
\begin{aligned}
n({\vec x}) &= g \int \frac{d^3p}{h^3} f({\vec x},{\vec p}) \\ \\ \epsilon({\vec x}) &= g \int \frac{d^3p}{h^3} E(p) f({\vec x},{\vec p}) \\ \\ P({\vec x}) &= g \int \frac{d^3p}{h^3} \frac{p^2c^2}{3E}f({\vec x},{\vec p})
\end{aligned} \label{eqn:n}
\end{equation}\]
where \(f\) is the phase-space distribution function and \(g\) counts the number of internal degrees of freedom for the particles. For example, electrons have two spin states so for them \(g=2\).
Box \(\PageIndex{1}\)
Exercise 19.1.1: From the definition of \(f\) in Eq.\ref{eqn:Definef}, derive the above expression for the number density \(n({\vec x})\) assuming that \(f\) is the same for each internal degree of freedom. (If this "internal degrees of freedom" part is concerning you, it's OK to simplify the problem a bit by doing it for a particle with a single internal degree of freedom, so \(g=1\); i.e., just ignore \(g\).)
Exercise 19.1.2: From the definition of \(f\), derive the above expression for the energy density \(\epsilon({\vec x})\).
Exercise 19.1.3: (Optional) From the definition of \(f\), derive the above expression for the pressure \(P({\vec x})\). This one is significantly harder. You need to recall that pressure is force per unit area. The force on a wall from particles hitting it in time interval \(\Delta t\) is equal to the sum of the changes in each particle's momentum as it bounces off the wall, divided by \(\Delta t\). First show that for a wall perpendicular to the \(x\) axis this force is given by \(F =\frac{1}{2} \int d^3p f A (v_x \Delta t) (2p_x)/\Delta t\) so that \(P = \int d^3p f v_x p_x\). Then use the fact that \(v_x = p_xc^2/E\) (see footnote 2 ) and that \(\int d^3p f p_x^2 = 1/3\int d^3p f p^2\) as long as \(f\) only depends on \(p^2 = p_x^2+p_y^2 + p_z^2\) to get \(P = \int d^3p f p^2c^2/(3E)\). If there are \(g\) internal degrees of freedom, that's that many more particles doing exactly the same thing (\(f\) tells us the distribution for each internal degree of freedom) so we get the desired result including the factor of \(g\).
An example: black body (thermal) radiation
From Equation \ref{eqn:f} and Equation \ref{eqn:n} we can derive a lot of results. For example, a gas of photons (\(g=2\)) in kinetic equilibrium with \(\mu = 0\) (how this arises physically to be explained later) has a contribution to its number density from particles with magnitude of momentum between \(p\) and \(p+dp\) equal to
\[n(p)dp = \frac{8\pi }{h^3} \frac{p^2dp}{\exp(pc/(k_B T)) -1}.\]
Note that by \(n(p)\) we mean the function of the magnitude of momentum that when integrated over \(p\) gives number density \(n = \int_0^\infty dp \, n(p)\).
Box \(\PageIndex{2}\)
Exercise 19.2.1: Derive the above equation for \(n(p) dp\). Start from the integral above (one of equations \ref{eqn:n}) that gives the number density. Because the energy of each particle (and therefore the whole integrand) only depends on the magnitude of the momentum, \(p = \sqrt{p_x^2+p_y^2+p_z^2}\), switch from Cartesian to spherical coordinates and integrate over the angular variables. That is, replace \(d^3p = dp_xdp_ydp_z\) with \(p^2dp d(\cos\theta_p)d\phi_p\) and integrate over the angular variables \(\theta_p\) and \(\phi_p\). Remember that \(E(p) = pc\) for photons.
Exercise 19.2.2: If you sampled one photon out of the distribution, there is a probability that it will have a magnitude of momentum between \(p\) and \(p+dp\). For what value of \(p\) does this probability peak? Note that answering this question will require you to solve a transcendental equation. That's a bit too much work so instead you can just show that \(p = 1.58 k_B T/c\) is quite close to the peak.
Exercise 19.2.3: How does that most probable \(p\) depend on temperature? Notice that this is qualitatively consistent with what you expect for temperature.
To perform the integral over \(p\) and obtain an expression for the number density of photons in kinetic equilibrium with zero chemical potential, we make a change of variables \(x = pc/(k_BT)\) to remove all dimensionful constants from the integral and find:
\[\int_0^\infty n(p) dp = \frac{8\pi }{c^3h^3}(k_BT)^3 \int_0^\infty \frac{x^2dx}{\exp(x) -1}.\]
The integral can be looked up in a table or performed numerically. It's equal to 2\(\zeta(3) \simeq 2.404\) where \(\zeta\) is the Riemann zeta function.
What physical conditions lead to \(\mu = 0\)?
If a particle can be freely created or destroyed, without other particles being created or destroyed, and these reactions are sufficiently fast, then the chemical potential will be driven towards zero. We can see this from the rule we already learned.
Assume this reaction is fast, called free-free, or Bremstrahlung:
\[e^- + p^+ \rightarrow e^- + p^+ + \gamma\]
in which an electron is accelerated in the electric field of a proton and thus radiates a photon. If the photon can get absorbed in some way, then we also effectively have the reverse reaction as well. In this case we would have \(\mu_{e^-} + \mu_{p^+} = \mu_{e^-} + \mu_{p^+}+\mu_\gamma\) which leads us to \(\mu_\gamma = 0\).
Equilibrium Statistical Mechanics Results in Various Limits
All of these results come from doing the appropriate integral over \(f = \left(\exp\left[(E(p)-\mu)/(k_BT)\right] \pm 1\right)^{-1}\). We will refer back to these later.
In the relativistic \((k_BT >> mc^2\)) and \(k_B T >> \mu\) limit for bosons
\[\begin{equation}
\begin{aligned}
\epsilon &= \frac{\pi^2}{30\hbar^3 c^3} g(k_BT)^4 \\ \\ n &= \frac{\zeta(3)}{\pi^2 \hbar^3 c^3} g (k_BT)^3 \\ \\ P &= \epsilon/3.
\end{aligned}
\end{equation}\]
where \(\zeta\) is the Riemann Zeta function and \(\zeta(3) = 1.202...\).
In the relativistic and \(k_B T >> \mu\) limit for fermions we get
\[\begin{equation}
\begin{aligned}
\epsilon &= \frac{7}{8}\frac{\pi^2}{30\hbar^3c^3} g(k_BT)^4 \\ \\ n &= \frac{3}{4}\frac{\zeta(3)}{\pi^2\hbar^3 c^3} g (k_BT)^3 \\ \\ P &= \epsilon/3.
\end{aligned}
\end{equation}\]
In the non-relativistic and dilute (\(f <<1\) for most particles) limits we can neglect the \(\pm 1\) factor in the denominator of \(f\) so we get the same result for both bosons and fermions:
\[\begin{equation}
\begin{aligned}
n &= g\left(\frac{mc^2 k_BT}{2\pi \hbar^2 c^2}\right)^{3/2} \exp\left[-(mc^2-\mu)/(k_BT)\right] \\ \\ \epsilon &= mc^2n \\ \\ P &= nk_BT << \epsilon.
\end{aligned}
\end{equation}\]
Homework
19.1: Starting from the appropriate integrals of the phase space distribution function over momentum space show that for relativistic massless bosons with \(\mu = 0\) that \(P = \epsilon/3\). [Note: this is a result you've seen before.]
19.2: The gas in this room consists of non-relativistic particles so to a very good approximation \(E(p) = mc^2 + p^2/(2m)\). Derive this approximation from \(E^2 = p^2c^2 + m^2 c^4\).
19.3: Derive the Maxwell-Boltzmann distribution of velocities for the gas in the room (assuming for simp

## Match 3.05 — LibreTexts: 2.16: S20 Equilibrium Statistical Mechanics SOLUTIONS
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://phys.libretexts.org/Courses/University_of_California_Davis/Physics_156%3A_A_Cosmology_Workbook/02%3A_Exercise_Solutions/2.16%3A_S20_Equilibrium_Statistical_Mechanics_SOLUTIONS

2.16: S20 Equilibrium Statistical Mechanics SOLUTIONS
Exercise 20.1.1
- Answer
-
Since \(f/h^3\) is the density of particles in phase space, the number in some small volume V, small enough such that \(f\) does not change much throughout the volume, is given by N = V\(\int d^3p f/h^3\). So the number density is \(n = \int d^3p f/h^3.\) If every internal degree of freedom has the same value of \(f\) and if we want to count all the particles, regardless of internal state, then we have \(n = g \int d^3p f/h^3.\)
Exercise 20.1.2
- Answer
-
Same as above except instead of calculating the total number in some small volume, we want the total energy. Therefore we just insert E(p) into the integral, to add up the energy from each region of momentum space, instead of just the number of particles from each region of momentum space.
Exercise 20.1.3
- Answer
-
I have not produced a written solution for this yet.
Exercise 20.2.1
- Answer
-
The integral over angular variables results in \(n = \frac{g}{h^3} \int_0^\infty 4\pi p^2 dp f\). Now the integral is adding up numbers of particles from momentum space shells of momentum space volume \(4\pi p^2 dp\). We need only substitute in the appropriate expression for \(f\), set \(E=pc, \mu = 0\) and \(g=2\) to get the answer.
Exercise 20.2.2
- Answer
-
To find the peak of the distribution set \(dn(p)/dp = 0\) and solve for \(p\). One ends up with a transcendental equation to solve. Setting \(x = pc/kT\) makes it possible to write it down fairly compactly as \( (2-x)e^x = 2\). One can narrow in on the solution numerically with a calculator -- especially a graphing one if you just plot the left-hand side and choose the value of \(x\) that gives 2. I used a calculator and in a few tries had \(x=1.6\) which is pretty close as \((2-1.6)e^{1.6} = 1.98.\) So the most probable \(p\) is \(p = 1.6 k_B T/c\).
Exercise 20.2.3
- Answer
-
The most probable \(p\) corresponds to an energy that is \(pc = 1.6 k_B T\). This corresponds to what we expect since we see that \(\simeq k_B T\) is a typical particle kinetic energy.

## Match 2.07 — LibreTexts: 4: Some Basic Applications of Statistical Thermodynamics
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://chem.libretexts.org/Courses/Pacific_Union_College/Kinetics/04%3A_Some_Basic_Applications_of_Statistical_Thermodynamics

Skip to main content
4: Some Basic Applications of Statistical Thermodynamics
-
-
Last updated
-
-
Save as PDF
-
-
-
4.1: Interpreting the Partition Function
-
Only quantum states whose energy is less than kT can make substantial contributions to the magnitude of a partition function. Very approximately, we can say that the partition function is equal to the number of quantum states for which the energy is less than kT . Each such quantum state will contribute approximately one to the sum that comprises the partition function; the contribution of the corresponding energy level will be approximately equal to its degeneracy.
-
-
4.2: Conditions under which Integrals Approximate Partition Functions
-
A common approximation is to substitue integrals for sums. This section looks at the constraints that must be satisfied in order to make the integral a good approximation to the sum.
-
-
4.3: Probability Density Functions from the Energies of Classical-mechanical Models
-
We could postulate probability density functions apply to other energies derived from classical-mechanical models for molecular motion. We will see that this can indeed be done. The results correspond to the results that we get from the Boltzmann equation, where we assume for both derivations that many energy levels satisfy ϵ≪kT. The point is that, at a sufficiently high temperature, the behavior predicted by the quantum mechanical model and that predicted from classical mechanics converge.
-
-
4.4: Partition Functions and Average Energies at High Temperatures
-
It is important to remember that the use of integrals to approximate Boltzmann-equation sums assumes that there are a large number of energy levels, ϵi , for which ϵi≪kT . If we select a high enough temperature, the energy levels for any motion will always satisfy this condition. The energy levels for translational motion satisfy this condition even at sub-ambient temperatures. This is the reason that Maxwell’s derivation of the probability density function for translational motion is successf
-
-
4.5: Energy Levels for a Three-dimensional Harmonic Oscillator
-
One of the earliest applications of quantum mechanics was Einstein’s demonstration that the union of statistical mechanics and quantum mechanics explains the temperature variation of the heat capacities of solid materials. The physical model underlying Einstein’s development is that a monatomic solid consists of atoms vibrating about fixed points in a lattice. The particles of this solid are distinguishable from one another, because the location of each lattice point is uniquely specified.
-
-
4.6: Energy and Heat Capacity of the "Einstein Crystal"
-
-
-
4.7: Applications of Other Entropy Relationships
-
-
-
4.8: Problems
-
