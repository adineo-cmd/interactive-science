# Source pack — subjects/physics/expert/quantum-field-theory
Lesson title: Quantum Field Theory
Level: expert
Match confidence: 3.03

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.03 — LibreTexts: 4.4: Quantum Field Theory
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Bookshelves/Quantum_Mechanics/Quantum_Mechanics_III_(Chong)/04%3A_Identical_Particles/4.04%3A_Quantum_Field_Theory

4.4: Quantum Field Theory
Field operators
So far, we have been agnostic about the nature of the single-particle states \(\{|\varphi_1\rangle,|\varphi_2\rangle,\dots\}\) used to construct the creation and annihilation operators. Let us now consider the special case where these quantum states are representable by wavefunctions. Let \(|\mathbf{r}\rangle\) denote a position eigenstate for a \(d\) -dimensional space. A single-particle state \(|\varphi_\mu\rangle\) has a wavefunction
\[\varphi_\mu(\mathbf{r}) = \langle\mathbf{r}|\varphi_\mu\rangle.\]
Due to the completeness and orthonormality of the basis, these wavefunctions satisfy
\[\begin{align} \begin{aligned}\int d^dr \; \varphi_\mu^*(\mathbf{r})\, \varphi_\nu(\mathbf{r}) &= \langle\varphi_\mu| \left(\int d^dr\, |\mathbf{r}\rangle\langle\mathbf{r}|\right) |\varphi_\nu\rangle \,= \delta_{\mu\nu}, \\\sum_\mu \varphi_\mu^*(\mathbf{r}) \varphi_\mu(\mathbf{r}') &=\, \langle \mathbf{r}'| \left(\sum_\mu |\varphi_\mu\rangle\langle\varphi_\mu|\right)|\mathbf{r}\rangle \;\;=\, \delta^d(\mathbf{r}-\mathbf{r}').\end{aligned}\end{align}\]
We can use the wavefunctions and the creation/annihilation operators to construct a new and interesting set of operators. For simplicity, suppose the particles are bosons, and let
\[\hat{\psi}(\mathbf{r}) = \sum_\mu \varphi_\mu(\mathbf{r}) \, \hat{a}_\mu, \quad\;\; \hat{\psi}^\dagger(\mathbf{r}) = \sum_\mu \varphi_\mu^*(\mathbf{r}) \, \hat{a}_\mu^\dagger.\]
Using the aforementioned wavefunction properties, we can derive the inverse relations
\[\hat{a}_\mu = \int d^dr \; \varphi_\mu^*(\mathbf{r}) \, \hat{\psi}(\mathbf{r}), \quad\;\; \hat{a}_\mu^\dagger = \int d^dr \; \varphi_\mu(\mathbf{r}) \, \hat{\psi}^\dagger(\mathbf{r}).\]
From the commutation relations for the bosonic \(a_\mu\) and \(a_\mu^\dagger\) operators, we can show that
\[\left[\hat{\psi}(\mathbf{r}), \hat{\psi}(\mathbf{r}')\right] = \left[\hat{\psi}^\dagger(\mathbf{r}), \hat{\psi}^\dagger(\mathbf{r}')\right] = 0, \quad \left[\hat{\psi}(\mathbf{r}), \hat{\psi}^\dagger(\mathbf{r}')\right] = \delta^d(\mathbf{r}-\mathbf{r}').\]
In the original commutation relations, the operators for different single-particle states commute; now, the operators for different positions commute. A straightforward interpretion for the operators \(\hat{\psi}^\dagger(\mathbf{r})\) and \(\hat{\psi}(\mathbf{r})\) is that they respectively create and annihilate one particle at a point \(\mathbf{r}\) (rather than one particle in a given eigenstate).
It is important to note that \(\mathbf{r}\) here does not play the role of an observable. It is an index , in the sense that each \(\mathbf{r}\) is associated with distinct \(\hat{\psi}(\mathbf{r})\) and \(\hat{\psi}^\dagger(\mathbf{r})\) operators. These \(\mathbf{r}\) -dependent operators serve to generalize the classical concept of a field . In a classical field theory, each point \(\mathbf{r}\) is assigned a set of numbers corresponding to physical quantities, such as the electric field components \(E_x(\mathbf{r})\) , \(E_y(\mathbf{r})\) , and \(E_z(\mathbf{r})\) . In the present case, each \(\mathbf{r}\) is assigned a set of quantum operators. This kind of quantum theory is called a quantum field theory .
We can use the \(\hat{\psi}(\mathbf{r})\) and \(\hat{\psi}^\dagger(\mathbf{r})\) operators to write second quantized observables in a way that is independent of the choice of single-particle basis wavefunctions. As discussed in the previous section, given a Hermitian single-particle operator \(\hat{A}_1\) we can define a multi-particle observable \(\hat{A} = \sum_{\mu\nu} \hat{a}^\dagger_\mu A_{\mu\nu} \hat{a}_\nu\) , where \(A_{\mu\nu} = \langle\varphi_\mu|\hat{A}_1|\varphi_\nu\rangle\) . This multi-particle observable can be re-written as
\[\hat{A} = \int d^dr \,d^dr' \;\hat{\psi}^\dagger(\mathbf{r}) \;\langle \mathbf{r}|\hat{A}_1|\mathbf{r}'\rangle \; \hat{\psi}(\mathbf{r}'),\]
which makes no explicit reference to the single-particle basis states.
For example, consider the familiar single-particle Hamiltonian describing a particle in a potential \(V(\mathbf{r})\) :
\[\hat{H}_1 = \hat{T}_1 + \hat{V}_1, \;\;\; \hat{T}_1 = \frac{|\hat{\mathbf{p}}|^2}{2m}, \;\;\; \hat{V}_1 = V(\hat{\mathbf{r}}),\]
where \(\hat{\mathbf{r}}\) and \(\hat{\mathbf{p}}\) are position and momentum operators (single-particle observables). The corresponding second quantized operators for the kinetic energy and potential energy are
\[\begin{align} \begin{aligned}\hat{T} &= \frac{\hbar^2}{2m} \int d^dr\; d^dr'\; \hat{\psi}^\dagger(\mathbf{r}) \left(\int\frac{d^dk}{(2\pi)^d} \; |\mathbf{k}|^2 \; e^{i\mathbf{k}\cdot(\mathbf{r}-\mathbf{r}')}\right) \; \hat{\psi}(\mathbf{r}') \\ &= \frac{\hbar^2}{2m} \int d^d r\; \nabla \hat{\psi}^\dagger (\mathbf{r}) \, \cdot \, \nabla \hat{\psi}(\mathbf{r}) \\ \hat{V} &= \int d^dr \;\hat{\psi}^\dagger(\mathbf{r}) \;V(\mathbf{r}) \; \hat{\psi}(\mathbf{r}).\end{aligned}\end{align}\]
(In going from the first to the second line, we performed integrations by parts.) This result is strongly reminiscent of the expression for the expected kinetic and potential energies in single-particle quantum mechanics:
\[\langle T\rangle = \frac{\hbar^2}{2m} \int d^d r \left|\nabla\psi(\mathbf{r})\right|^2, \;\;\; \langle V\rangle = \int d^dr \; V(\mathbf{r}) \; |\psi(\mathbf{r})|^2,\]
where \(\psi(\mathbf{r})\) is the single-particle wavefunction.
How are the particle creation and annihilation operators related to the classical notion of “the value of a field at point \(\mathbf{r}\) ”, like an electric field \(\mathbf{E}(\mathbf{r})\) or magnetic field \(\mathbf{B}(\mathbf{r})\) ? Field variables are measurable quantities, and should be described by Hermitian operators. As we have just seen, Hermitian operators corresponding to the kinetic and potential energy can be constructed via products of \(\hat{\psi}^\dagger(\mathbf{r})\) with \(\hat{\psi}(\mathbf{r})\) . But there is another type of Hermitian operator that we can construct by taking linear combinations of of \(\hat{\psi}^\dagger(\mathbf{r})\) with \(\hat{\psi}(\mathbf{r})\) . One example is
\[\psi(\mathbf{r}) + \psi(\mathbf{r})^\dagger.\]
Other possible Hermitian operators have the form
\[F(\mathbf{r}) = \int d^dr' \Big(f(\mathbf{r},\mathbf{r}') \hat{\psi}(\mathbf{r}) + f^*(\mathbf{r},\mathbf{r}') \hat{\psi}^\dagger(\mathbf{r}') \Big), \label{fieldop}\]
where \(f(\mathbf{r},\mathbf{r}')\) is some complex function. As we shall see, it is this type of Hermitian operator that corresponds to the classical notion of a field variable like an electric or magnetic field.
In the next two sections, we will try to get a better understanding of the relationship between classical fields and bosonic quantum fields. (For fermionic quantum fields, the situation is more complicated; they cannot be related to classical fields of the sort we are familiar with, for reasons that lie outside the scope of this course.)
Revisiting the harmonic oscillator
Before delving into the links between classical fields and bosonic quantum fields, it is first necessary to revisit the harmonic oscillator, to see how the concept of a mode of oscillation carries over from classical to quantum mechanics.
A classical harmonic oscillator is described by the Hamiltonian
\[H(x,p) = \frac{p^2}{2m} + \frac{1}{2}m\omega^2x^2, \label{Hclass}\]
where \(x\) is the “position” of the oscillator, which we call the oscillator variable ; \(p\) is the corresponding momentum variable; \(m\) is the mass; and \(\omega\) is the natural frequency of oscillation. We know that the classical equation of motion has the general form
\[x(t) = \mathcal{A}\, e^{-i\omega t} + \mathcal{A}^*\, e^{i\omega t}. \label{xt0}\]
This describes an oscillation of frequency \(\omega\) . It is parameterized by the mode amplitude \(\mathcal{A}\) , a complex number that determines the magnitude and phase of the oscillation.
For the quantum harmonic oscillator, \(x\) and \(p\) are replaced by the Hermitian operators \(\hat{x}\) and \(\hat{p}\) . From these, the operators \(\hat{a}\) and \(\hat{a}^\dagger\) can be defined:
\[\begin{align} \left\{ \begin{aligned} \hat{a} &= \sqrt{\frac{m\omega}{2\hbar}} \left(\hat{x} + \frac{i\hat{p}}{m\omega}\right), \\ \hat{a}^\dagger &= \sqrt{\frac{m\omega}{2\hbar}} \left(\hat{x} - \frac{i\hat{p}}{m\omega}\right). \end{aligned}\right. \quad \Leftrightarrow\quad\left\{ \begin{aligned} \hat{x} &= \;\;\;\;\sqrt{\frac{\hbar}{2m\omega}} \, \left(\hat{a}+\hat{a}^\dagger\right) \\ \hat{p} &= -i \sqrt{\frac{m\omega\hbar}{2}} \, \left(\hat{a}-\hat{a}^\dagger\right). \end{aligned}\right. \label{create_annihilate}\end{align}\]
We can then show that
\[\left[\,\hat{a}\,,\,\hat{a}^\dagger\,\right] = 1, \;\;\; \hat{H} = \hbar\omega\left(\hat{a}^\dagger\hat{a}+\frac{1}{2}\right), \label{create_annihilate_qho}\]
and from these the energy spectrum of the quantum harmonic oscillator can be derived. These facts should have been covered in an earlier course.
Here, we are interested in how the creation and annihilation operators relate to the dynamics of the quantum harmonic oscillator. In the Heisenberg picture, with \(t = 0\) as the reference time, we define the time-dependent operator
\[\hat{x}(t) = \hat{U}^\dagger(t) \,\hat{x}\, \hat{U}(t), \;\;\; \hat{U}(t) \equiv \exp\left(-\frac{i}{\hbar}\hat{H}t\right).\]
We will adopt the convention that all operators written with an explicit time dependence are Heisenberg picture operators, while operators without an explicit time dependence are Schrödinger picture operators; hence, \(\hat{x} \equiv \hat{x}(0)\) . The Heisenberg picture creation and annihilation operators, \(\hat{a}^\dagger(t)\) and \(\hat{a}(t)\) , are related to \(\hat{x}(t)\) by
\[\hat{x}(t) = \sqrt{\frac{\hbar}{2m\omega}} \, \Big(\hat{a}(t)+\hat{a}^\dagger(t)\Big). \label{xt1}\]
The Heisenberg equation for the annihilation operator is
\[\begin{align} \begin{aligned} \frac{d\hat{a}(t)}{dt} &= \frac{i}{\hbar} \left[\hat{H},\hat{a}(t)\right] \\ &= \frac{i}{\hbar} \,\hat{U}^\dagger(t) \left[\hat{H},\hat{a}\right] \hat{U}(t) \\ &= \frac{i}{\hbar} \,\hat{U}^\dagger(t) \Big(-\hbar\omega \hat{a}\Big) \hat{U}(t) \\ &= -i\omega \hat{a}(t). \end{aligned} \label{heisenbergeq}\end{align}\]
Hence, the solution for this differential equation is
\[\hat{a}(t) = \hat{a} \, e^{-i\omega t}, \label{at}\]
and Equation \(\eqref{xt1}\) becomes
\[\hat{x}(t) = \sqrt{\frac{\hbar}{2m\omega}} \, \Big(\hat{a} \,e^{-i\omega t} \,+\, \hat{a}^\dagger\, e^{i\omega t}\Big). \label{xtquantum}\]
This has exactly the same form as the classical oscillatory solution \(\eqref{xt0}\)! Comparing the two, we see that \(\hat{a}\) times the scale factor \(\sqrt{\hbar/2m\omega}\) plays the role of the mode amplitude \(\mathcal{A}\) .
Now, suppose we come at things from the opposite end. Let’s say we start with creation and annihilation operators satisfying Equation \(\eqref{create_annihilate_qho}\), from which Equations \(\eqref{heisenbergeq}\)–\(\eqref{at}\) follow. Using the creation and annihilation operators, we would like to construct an observable that corresponds to a classical oscillator variable. A natural Hermitian ansatz is
\[\hat{x}(t) = \mathcal{C} \left(\hat{a} \,e^{-i\omega t} \,+\, \hat{a}^\dagger\, e^{i\omega t}\right), \label{xtc}\]
where \(\mathcal{C}\) is a constant that is conventionally taken to be real.
How might \(\mathcal{C}\) be chosen? A convenient way is to study the behavior of the oscillator variable in the classical limit . The classical limit of a quantum harmonic oscillator is described by a coherent state . The details of how this state is defined need not concern us for now (see Appendix E). The most important things to know are that (i) it can be denoted by \(|\alpha\rangle\) where \(\alpha \in \mathbb{C}\) , (ii) it is an eigenstate of the annihilation operator:
\[\hat{a}|\alpha\rangle = \alpha|\alpha\rangle. \label{coherent}\]
And (iii) its energy expectation value is
\[\langle E\rangle = \ \langle\alpha|\hat{H}|\alpha\rangle = \hbar \omega

## Match 2.36 — LibreTexts: 5.1: Primer on Quantum Theory
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/3.0/ · https://chem.libretexts.org/Bookshelves/General_Chemistry/Chem1_(Lower)/05%3A_Atoms_and_the_Periodic_Table/5.01%3A_Primer_on_Quantum_Theory

5.1: Primer on Quantum Theory
Part 1: Particles and waves
Q1. What is a particle?
A particle is a discrete unit of matter having the attributes of mass , momentum (and thus kinetic energy ) and optionally of electric charge .
Q2. What is a wave?
A wave is a periodic variation of some quantity as a function of location or time. For example, the wave motion of a vibrating guitar string is defined by the displacement of the string from its center as a function of distance along the string. A sound wave consists of variations in the pressure with location.
A wave is characterized by its wavelength \( λ\) (lambda) and frequency \(\nu\ ) (nu), which are connected by the relation
\[ \lmabda =\dfrac{u}{\nu}
in which u is the velocity of propagation of the disturbance in the medium.
The velocity of sound in the air is 330 m s –1 . What is the wavelength of A440 on the piano keyboard?
Solution
\[ \lambda =\dfrac{330\, m S^{-1}}{440 \,s^{-1}} = 0.75\,m\]
Two other attributes of waves are the amplitude (the height of the wave crests with respect to the base line) and the phase , which measures the position of a crest with respect to some fixed point. The square of the amplitude gives the intensity of the wave: the energy transmitted per unit time).
A unique property of waves is their ability to combine constructively or destructively, depending on the relative phases of the combining waves.
Q3. What is light?
Phrasing the question in this way reflects the deterministic mode of Western thought which assumes that something cannot "be" two quite different things at the same time. The short response to this question is that all we know about light (or anything else, for that matter) are the results of experiments, and that some kinds of experiments show that light behaves like particles , and that other experiments reveal light to have the properties of waves .
Q4. What is the wave theory of light?
In the early 19th century, the English scientist Thomas Young carried out the famous two-slit experiment which demonstrated that a beam of light, when split into two beams and then recombined, will show interference effects that can only be explained by assuming that light is a wavelike disturbance. By 1820, Augustin Fresnel had put this theory on a sound mathematical basis, but the exact nature of the waves remained unclear until the 1860's when James Clerk Maxwell developed his electromagnetic theory .
From the laws of electromagnetic induction that were discovered in the period 1820-1830 by Hans Christien Oersted and Michael Faraday, it was known that a moving electric charge gives rise to a magnetic field, and that a changing magnetic field can induce electric charges to move. Maxwell showed theoretically that when an electric charge is accelerated (by being made to oscillate within a piece of wire, for example), electrical energy will be lost, and an equivalent amount of energy is radiated into space, spreading out as a series of waves extending in all directions.
What is "waving" in electromagnetic radiation? According to Maxwell, it is the strengths of the electric and magnetic fields as they travel through space. The two fields are oriented at right angles to each other and to the direction of travel.
As the electric field changes, it induces a magnetic field, which then induces a new electric field, etc., allowing the wave to propagate itself through space
These waves consist of periodic variations in the electrostatic and electromagnetic field strengths. These variations occur at right angles to each other. Each electrostatic component of the wave induces a magnetic component, which then creates a new electrostatic component, so that the wave, once formed, continues to propagate through space, essentially feeding on itself. In one of the most brilliant mathematical developments in the history of science, Maxwell expounded a detailed theory, and even showed that these waves should travel at about 3E8 m s –1 , a value which experimental observations had shown corresponded to the speed of light. In 1887, the German physicist Heinrich Hertz demonstrated that an oscillating electric charge (in what was in essence the world's first radio transmitting antenna) actually does produce electromagnetic radiation just as Maxwell had predicted, and that these waves behave exactly like light.
It is now understood that light is electromagnetic radiation that falls within a range of wavelengths that can be perceived by the eye. The entire electromagnetic spectrum runs from radio waves at the long-wavelength end, through heat, light, X-rays, and to gamma radiation.
Part 2: Quantum theory of light
Q5. How did the quantum theory of light come about?
It did not arise from any attempt to explain the behavior of light itself; by 1890 it was generally accepted that the electromagnetic theory could explain all of the properties of light that were then known.
Certain aspects of the interaction between light and matter that were observed during the next decade proved rather troublesome, however. The relation between the temperature of an object and the peak wavelength emitted by it was established empirically by Wilhelm Wien in 1893. This put on a quantitative basis what everyone knows: the hotter the object, the "bluer" the light it emits.
Q6. What is black body radiation?
All objects above the temperature of absolute zero emit electromagnetic radiation consisting of a broad range of wavelengths described by a distribution curve whose peak wavelength l at absolute temperature T for a "perfect radiator" known as a black body is given by Wien's law.
\[ \lambda_{peak} (cm) = 0.0029\,m\,K\]
At ordinary temperatures this radiation is entirely in the infrared region of the spectrum, but as the temperature rises above about 1000K, more energy is emitted in the visible wavelength region and the object begins to glow, first with red light, and then shifting toward the blue as the temperature is increased.
This type of radiation has two important characteristics. First, the spectrum is a continuous one, meaning that all wavelengths are emitted, although with intensities that vary smoothly with wavelength. The other curious property of black body radiation is that it is independent of the composition of the object; all that is important is the temperature.
Q7. How did black body radiation lead to quantum physics?
Black body radiation, like all electromagnetic radiation, must originate from oscillations of electric charges which in this case were assumed to be the electrons within the atoms of an object acting somewhat as miniature Hertzian oscillators. It was presumed that since all wavelengths seemed to be present in the continuous spectrum of a glowing body, these tiny oscillators could send or receive any portion of their total energy. However, all attempts to predict the actual shape of the emission spectrum of a glowing object on the basis of classical physical theory proved futile.
In 1900, the great German physicist Max Planck (who earlier in the same year had worked out an empirical formula giving the detailed shape of the black body emission spectrum) showed that the shape of the observed spectrum could be exactly predicted if the energies emitted or absorbed by each oscillator were restricted to integral values of hν, where ν ("nu") is the frequency and h is a constant 6.626E–34 J s which we now know as Planck's Constant . The allowable energies of each oscillator are quantized, but the emission spectrum of the body remains continuous because of differences in frequency among the uncountable numbers of oscillators it contains.This modification of classical theory, the first use of the quantum concept, was as unprecedented as it was simple, and it set the stage for the development of modern quantum physics.
Q8. What is the photoelectric effect?
Shortly after J.J. Thompson's experiments led to the identification of the elementary charged particles we now know as electrons, it was discovered that the illumination of a metallic surface by light can cause electrons to be emitted from the surface. This phenomenon, the photoelectric effect, is studied by illuminating one of two metal plates in an evacuated tube.
The kinetic energy of the photoelectrons causes them to move to the opposite electrode, thus completing the circuit and producing a measurable current. However, if an opposing potential (the retarding potential ) is imposed between the two plates, the kinetic energy can be reduced to zero so that the electron current is stopped. By observing the value of the retarding potential V r , the kinetic energy of the photoelectrons can be calculated from the electron charge e , its mass m and the frequency of the incident light:
These two diagrams are taken from a web page by Joseph Alward of the University of the Pacific.
The plot at the right shows how the kinetic energy of the photoelectrons falls to zero at the critical wavelength corresponding to frequency f 0 .
Q9. What peculiarity of the photoelectric effect led to the photon?
Although the number of electrons ejected from the metal surface per second depends on the intensity of the light, as expected, the kinetic energies of these electrons (as determined by measuring the retarding potential needed to stop them) does not, and this was definitely not expected. Just as a more intense physical disturbance will produce higher energy waves on the surface of the ocean, it was supposed that a more intense light beam would confer greater energy on the photoelectrons. But what was found, to everyone's surprise, is that the photoelectron energy is controlled by the wavelength of the light, and that there is a critical wavelength below which no photoelectrons are emitted at all.
Albert Einstein quickly saw that if the kinetic energy of the photoelectrons depends on the wavelength of the light, then so must its energy. Further, if Planck was correct in supposing that energy must be exchanged in packets restricted to certain values, then light must similarly be organized into energy packets. But a light ray consists of electric and magnetic fields that spread out in a uniform, continuous manner; how can a continuously-varying wave front exchange energy in discrete amounts? Einstein's answer was that the energy contained in each packet of the light must be concentrated into a tiny region of the wave front. This is tantamount to saying that light has the nature of a quantized particle whose energy is given by the product of Planck's constant and the frequency:
Einstein's publication of this explanation in 1905 led to the rapid acceptance of Planck's idea of energy quantization, which had not previously attracted much support from the physics community of the time. It is interesting to note, however, that this did not make Planck happy at all. Planck, ever the conservative, had been reluctant to accept that his own quantized-energy hypothesis was much more than an artifice to explain black-body radiation; to extend it to light seemed an absurdity that would negate the well-established electromagnetic theory and would set science back to the time before Maxwell.
Q10. Where does relativity come in?
Einstein's special theory of relativity arose from his attempt to understand why the laws of physics that describe the current induced in a fixed conductor when a magnet moves past it are not formulated in the same way as the ones that describe the magnetic field produced by a moving conductor. The details of this development are not relevant to our immediate purpose, but some of the conclusions that this line of thinking led to very definitely are. Einstein showed that the velocity of light, unlike that of a material body, has the same value no matter what velocity the observer has. Further, the mass of any material object, which had previously been regarded as an absolute, is itself a function of the velocity of the body relative to that of the observer (hence "relativity"), the 

## Match 2.05 — LibreTexts: 2.E: Quantum Theory and Electronic Structure (Exercises)
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://chem.libretexts.org/Courses/Thompson_Rivers_University/CHEM_1500%3A_Chemical_Bonding_and_Organic_Chemistry/02%3A_Quantum_Theory_and_Electronic_Structure_of_Atoms/2.E%3A_Quantum_Theory_and_Electronic_Structure_(Exercises)

2.E: Quantum Theory and Electronic Structure (Exercises)
Electromagnetic Energy
The light produced by a red neon sign is due to the emission of light by excited neon atoms. Qualitatively describe the spectrum produced by passing light from a neon lamp through a prism.
- Answer
-
The spectrum consists of colored lines, at least one of which (probably the brightest) is red.
An FM radio station found at 103.1 on the FM dial broadcasts at a frequency of 1.031 × 10 8 s −1 (103.1 MHz). What is the wavelength of these radio waves in meters?
- Answer
-
\(λ=\dfrac{c}{ν}\)
\(λ = \dfrac{2.998 \times10^{8}\: \dfrac{m}{s}}{1.031 \times10^{8}\: \dfrac{1}{s}} = 2.908\:m\)
FM-95, an FM radio station, broadcasts at a frequency of 9.51 × 10 7 s −1 (95.1 MHz). What is the wavelength of these radio waves in meters?
- Answer
-
\(λ=\dfrac{c}{ν}\)
\(λ = \dfrac{2.998 \times10^{8}\: \dfrac{m}{s}}{9.51 \times10^{7}\: \dfrac{1}{s}} = 3.15 \:m\)
A bright violet line occurs at 435.8 nm in the emission spectrum of mercury vapor. What amount of energy, in joules, must be released by an electron in a mercury atom to produce a photon of this light?
- Answer
-
\(E= \dfrac{hc}{λ}\)
\(E= \dfrac{(2.998 \times 10^{8} \dfrac{m}{s})\: (6.6262 \times 10^{-34} Js)}{4.358 \times 10^{-7} m}\)
\(=4.56\times 10^{-19}J\)
Light with a wavelength of 614.5 nm looks orange. What is the energy, in joules, per photon of this orange light? What is the energy in eV (1 eV = 1.602 × 10 −19 J)?
- Answer
-
First convert 614.5 nm into meters
\(6.145 nm\) = \(6.145 \times10^{-7} m\)
Then calculate the amount of energy this wavelength of light contains using the equations:
\(E = hν\) and \(ν=\dfrac{c}{λ}\) which can be manipulated algebraically into: \(E=\dfrac{hc}{λ}\)
h = Plancks constant → \(6.6262 \times10^{-34} Js\) c = Speed of light → \(2.998\times 10^{8}\; \dfrac {m}{s}\) λ = wavelength of photon → \(6.145 \times10^{-7} m\)Then convert Joules into eV:
\[=(3.233 \times 10^{−19}J) \times\dfrac{1eV}{1.602\times 10^{-19}J} \]\[=2.018 eV\]
\[= \dfrac{(6.6262\times 10^{−34}\;Js) \ (2.998\times 10^{8}\; \dfrac {m}{s}) } {6.145 \times 10^{−7}m \ } =3.233 \times 10^{-19} J\]
Heated lithium atoms emit photons of light with an energy of 2.961 × 10 −19 J. Calculate the frequency and wavelength of one of these photons. What is the total energy in 1 mole of these photons? What is the color of the emitted light?
- Answer
-
\(E = hν\) and \(ν=\dfrac{E}{h}\)
h = Plancks constant → \(6.6262 \times10^{-34} Js\)Frequency: \(ν=\dfrac{ 2.961\times 10^{-19}J}{6.6262\times 10^{-34}Js}\ = 4.469\times 10^{14} Hz\)
\(λ=\dfrac{c}{ν}\)
c = Speed of light → \(2.998\times 10^{8}\; \dfrac {m}{s}\)
Wavelength: \(λ=\dfrac{ 2.998\times 10^{8}\dfrac {m}{s}}{4.469\times 10^{14}\dfrac {1}{s}}\ = 6.709\times 10^{-7} m\) = Red Light
Total energy:
\(E= \dfrac{2.961 \times 10^{-19}J}{1\: photon}\times\dfrac{6.022\times 10^{23}\: photons}{1\: mole} = 1.783\times 10^{5} J \)
A photon of light produced by a surgical laser has an energy of 3.027 × 10 −19 J. Calculate the frequency and wavelength of the photon. What is the total energy in 1 mole of photons? What is the color of the emitted light?
- Answer
-
ν = 4.568 × 10 14 s; λ = 656.3 nm; Energy mol −1 = 1.823 × 10 5 J mol −1 ; red
When rubidium ions are heated to a high temperature, two lines are observed in its line spectrum at wavelengths (a) 7.9 × 10 −7 m and (b) 4.2 × 10 −7 m. What are the frequencies of the two lines? What color do we see when we heat a rubidium compound?
- Answer
-
Add texts here. Do not delete this text first.
The emission spectrum of cesium contains two lines whose frequencies are (a) 3.45 × 10 14 Hz and (b) 6.53 × 10 14 Hz. What are the wavelengths and energies per photon of the two lines? What color are the lines?
- Answer
-
(a) λ = 8.69 × 10 −7 m; E = 2.29 × 10 −19 J; (b) λ = 4.59 × 10 −7 m; E = 4.33 × 10 −19 J; The color of (a) is red; (b) is blue.
Photons of infrared radiation are responsible for much of the warmth we feel when holding our hands before a fire. These photons will also warm other objects. How many infrared photons with a wavelength of 1.5 × 10 −6 m must be absorbed by the water to warm a cup of water (175 g) from 25.0 °C to 40 °
- Answer
-
First we must use the equation: q=mCΔT ° to calculate the amount of Energy in Joules (J) to warm 175g of H 2 O a total of 15 ° Celsius
m = mass in grams(g) → 175g C = Specific heat of H 2 O (l) → \(\dfrac {4.184 J}{g°C}\) ΔT ° = Difference in temperature → 40 - 25 =15°\[= \dfrac{(6.6262\times 10^{−34}\;Js) \ (2.998\times 10^{8}\; \dfrac {m}{s}) } {1.5 \times 10^{−6}m \ } =1.3 \times 10^{-19} J\]
This is the energy in one photon, so now we have to see how many times 1.3x10 -19 J fits into the 11,000 J from our first calculation:
\[= \dfrac{11,000\;J} {1.3 \times 10^{−19}\; \dfrac {J}{photon} } =8.3\times 10^{22} photons\]
\[= 8.3\times 10^{22} photons\]
\[q = 175g\times \dfrac {4.184 J}{g°C}\times 15° C\]
q= 11,000 J
Now we need to calculate the amount of energy in Joules (J) that one Photon with a wavelength of 1.5x10 -6 m contains. We will use the equations:
\(E = hν\) and \(ν=\dfrac{c}{λ}\) which can be manipulated algebraically into: \(E=\dfrac{hc}{λ}\)
h = Plancks constant → \(6.6262 \times10^{-34} Js\) c = Speed of light → \(2.998\times 10^{8}\; \dfrac {m}{s}\) λ = wavelength of photon → \(1.5 \times10^{-6} m\)
One of the radiographic devices used in a dentist's office emits an X-ray of wavelength 2.090 × 10 −11 m. What is the energy, in joules, and frequency of this X-ray?
- Answer
-
E = 9.502 × 10 −15 J; ν = 1.434 × 10 19 s − 1
The eyes of certain reptiles pass a single visual signal to the brain when the visual receptors are struck by photons of a wavelength of 850 nm. If a total energy of 3.15 × 10 −14 J is required to trip the signal, what is the minimum number of photons that must strike the receptor?
- Answer
-
First we need to convert nanometers to meters
850nm = 8.5 x 10 -7 m
Then calculate Energy in Joules a photon of this wavelength (λ) produces:
\[(E=\dfrac{hc}{λ}) = \dfrac{(6.6262\times 10^{−34}\;Js) \ (2.998\times 10^{8}\; \dfrac {m}{s}) } {8.5 \times 10^{−7}m \ } = 2.3 \times 10^{-19} \dfrac {J}{photon}\]
Then we need to find out how many of these photons it will take to trip the visual signal to the brain:
\[ \begin{align} &= \dfrac{3.15\times 10^{-14}\;\cancel{J}} {2.3 \times 10^{−19}\; \dfrac {\cancel{J}}{photon} } \\[5pt] &=1.3\times 10^{5}\, photons \end{align}\]
RGB color television and computer displays use cathode ray tubes that produce colors by mixing red, green, and blue light. If we look at the screen with a magnifying glass, we can see individual dots turn on and off as the colors change. Using a spectrum of visible light, determine the approximate wavelength of each of these colors. What is the frequency and energy of a photon of each of these colors?
- Answer
-
Red: 660 nm; 4.54 × 10 14 Hz; 3.01 × 10 −19 J.
Green: 520 nm; 5.77 × 10 14 Hz; 3.82 × 10 −19 J.
Blue: 440 nm; 6.81 × 10 14 Hz; 4.51 × 10 −19 J.
Somewhat different numbers are also possible.
Answer the following questions about a Blu-ray laser:
- The laser on a Blu-ray player has a wavelength of 405 nm. In what region of the electromagnetic spectrum is this radiation? What is its frequency?
- A Blu-ray laser has a power of 5 milliwatts (1 watt = 1 J s −1 ). How many photons of light are produced by the laser in 1 hour?
- The ideal resolution of a player using a laser (such as a Blu-ray player), which determines how close together data can be stored on a compact disk, is determined using the following formula: Resolution = 0.60( λ /NA), where λ is the wavelength of the laser and NA is the numerical aperture. Numerical aperture is a measure of the size of the spot of light on the disk; the larger the NA, the smaller the spot. In a typical Blu-ray system, NA = 0.95. If the 405-nm laser is used in a Blu-ray player, what is the closest that information can be stored on a Blu-ray disk?
- The data density of a Blu-ray disk using a 405-nm laser is 1.5 × 10 7 bits mm −2 . Disks have an outside diameter of 120 mm and a hole of 15-mm diameter. How many data bits can be contained on the disk? If a Blu-ray disk can hold 9,400,000 pages of text, how many data bits are needed for a typed page? (Hint: Determine the area of the disk that is available to hold data. The area inside a circle is given by A = πr 2 , where the radius r is one-half of the diameter.)
- Answer
-
Add texts here. Do not delete this text first.
What is the threshold frequency for sodium metal if a photon with frequency 6.66 × 10 14 s −1 ejects a photon with 7.74 × 10 −20 J kinetic energy? Will the photoelectric effect be observed if sodium is exposed to orange light?
- Answer
-
5.49 × 10 14 s −1 ; no
The Bohr Model
Why is the electron in a Bohr hydrogen atom bound less tightly when it has a quantum number of 3 than when it has a quantum number of 1?
- Answer
-
Add texts here. Do not delete this text first.
What does it mean to say that the energy of the electrons in an atom is quantized?
- Answer
-
Quantized energy means that the electrons can possess only certain discrete energy values; values between those quantized values are not permitted.
Using the Bohr model, determine the energy, in joules, necessary to ionize a ground-state hydrogen atom. Show your calculations.
- Answer
-
Add texts here. Do not delete this text first.
The electron volt (eV) is a convenient unit of energy for expressing atomic-scale energies. It is the amount of energy that an electron gains when subjected to a potential of 1 volt; \(1 \;eV = 1.602 \times 10^{-19}\; J\). Using the Bohr model, determine the energy, in electron volts, of the photon produced when an electron in a hydrogen atom moves from the orbit with \(n = 5\) to the orbit with \(n = 2\). Show your calculations.
- Answer
-
\[E=E_2−E_5=2.179 \times 10^{−18} \left (\dfrac{1}{n_2^2}−\dfrac{1}{n^2_5}\right) \; J\]
\[ = 2.179 \times 10^{-18} \left (\dfrac{1}{2^2}−\dfrac{1}{5^2}\right)=4.576 \times 10^{−19}\; J\]
\[= \dfrac{4.576\times 10^{−19}\;J} {1.602 \times 10^{−19}\;J \; eV^{−1} } =2.856\; eV\]
Using the Bohr model, determine the lowest possible energy for the electron in the \(He^+\) ion.
- Answer
-
Add texts here. Do not delete this text first.
Using the Bohr model, determine the energy of an electron with \(n = 6\) in a hydrogen atom.
- Answer
-
−8.716 × 10−18 J
Using the Bohr model, determine the energy of an electron with \(n = 8\) in a hydrogen atom.
- Answer
-
Add texts here. Do not delete this text first.
How far from the nucleus in angstroms (1 angstrom = \(1 \times 10^{–10}\; \ce m\)) is the electron in a hydrogen atom if it has an energy of \(-8.72 \times 10^{-20}\; \ce J\)?
- Answer
-
\(−3.405 \times 10^{−20} J\)
What is the radius, in angstroms, of the orbital of an electron with n = 8 in a hydrogen atom?
- Answer
-
Add texts here. Do not delete this text first.
Using the Bohr model, determine the energy in joules of the photon produced when an electron in a \(\ce{He^{+}}\) ion moves from the orbit with n = 5 to the orbit with n = 2.
- Answer
-
Add texts here. Do not delete this text first.
Using the Bohr model, determine the energy in joules of the photon produced when an electron in a Li2+ ion moves from the orbit with n = 2 to the orbit with n = 1.
- Answer
-
1.471 × 10−17 J
Consider a large number of hydrogen atoms with electrons randomly distributed in the n = 1, 2, 3, and 4 orbits
- How many different wavelengths of light are emitted by these atoms as the electrons fall into lower-energy orbitals?
- Calculate the lowest and highest energies of light produced by the transitions described in part (a).
- Calculate the frequencies and wavelengths of the light produced by the transitions described in part (b).
- Answer
-
Add texts here. Do not delete this text first.
How are the Bohr model and the Rutherford model of the atom similar? How are they different?
- Answer
-
Add texts here. Do not delete this text first.
The spectra of hydrog
