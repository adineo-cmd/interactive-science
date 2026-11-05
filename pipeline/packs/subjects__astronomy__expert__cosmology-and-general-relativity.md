# Source pack — subjects/astronomy/expert/cosmology-and-general-relativity
Lesson title: Cosmology & General Relativity
Level: expert
Match confidence: 2.41

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.41 — LibreTexts: 8.E:  Sources in General Relativity (Exercise)
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Bookshelves/Relativity/General_Relativity_(Crowell)/08%3A_Sources/8.E%3A__Sources_in_General_Relativity_(Exercise)

8.E: Sources in General Relativity (Exercise)
-
-
Last updated
-
-
Save as PDF
-
-
Verify, as claimed in
section 8.1
, that the electromagnetic pressure inside a medium-weight atomic nucleus is on the order of 10
33
Pa.
-
Is the Big Bang singularity removable by the coordinate transformation t → \(\frac{1}{t}\)?
-
Verify the claim made in
section 8.2
that a is a linear function of time in the case of the Milne universe, and that k = −1.
-
Examples
16
and
18
discussed ropes with cosmological lengths. Reexamine these examples in the case of the Milne universe.
-
(a) Show that the Friedmann equations are symmetric under time reversal. (b) The spontaneous breaking of this symmetry in perpetually expanding solutions was discussed in
section 8.2
. Use the definition of a manifold to show that this symmetry cannot be restored by gluing together an expanding solution and a contracting one “back to back” to create a single solution on a single, connected manifold.
-
The Einstein field equations are $$G_{ab} = 8 \pi T_{ab} + \Lambda g_{ab},$$and when it is possible to adopt a frame of reference in which the local mass-energy is at rest on average, we can interpret the stress-energy tensor as $$T^{\mu}_{\nu} = diag(- \rho, P, P, P),$$where \(\rho\) is the mass-energy density and P is the pressure. Fix some point as the origin of a local Lorentzian coordinate system. Analyze the properties of these relations under a reflection such as x → −x or t → −t.
-
(a) Show that a positive cosmological constant violates the strong energy condition in a vacuum. In applying the definition of the strong energy condition, treat the cosmological constant as a form of matter, i.e., “roll in” the cosmological constant term to the stress-energy term in the field equations. (b) Comment on how this affects the results of the following paper: Hawking and Ellis, “The Cosmic Black-Body Radiation and the Existence of Singularities in Our Universe,” Astrophysical Journal, 152 (1968) 25, articles.adsabs.harvard.edu/f...pJ...152...25H.
-
In
problem 7
in chapter 5, we analyzed the properties of the metric $$ds^{2} = e^{2gz} dt^{2} - dz^{2} \ldotp$$
-
In that problem we found that this metric had the same properties at all points in space. Verify in particular that it has the same scalar curvature R at all points in space.
-
Show that this is a vacuum solution in the two-dimensional (t, z) space.
-
Suppose we try to generalize this metric to four dimensions as $$ds^{2} = e^{2gz} dt^{2} - dx^{2} - dy^{2} - dz^{2} \ldotp$$Show that this requires an Einstein tensor with unphysical properties.
-
Consider the following proposal for defeating relativity’s prohibition on velocities greater than c. Suppose we make a chain billions of light-years long and attach one end of the chain to a particular galaxy. At its other end, the chain is free, and it sweeps past the local galaxies at a very high speed. This speed is proportional to the length of the chain, so by making the chain long enough, we can make the speed exceed c.
Debunk this proposal in the special case of the Milne universe.
-
Make a rigorous definition of the volume V of the
observable
universe. Suppose someone asks whether V depends on the observer’s state of motion. Does this question have a well-defined answer? If so, what is it? Can we calculate V ’s observer-dependence by applying a Lorentz contraction?
-
For a perfect fluid, we have P = w\(\rho\), where w is a constant. The cases w = 0 and w = \(\frac{1}{3}\) correspond, respectively, to dust and radiation. Show that for a flat universe with \(\Lambda\) = 0 dominated by a single component that is a perfect fluid, the solution to the Friedmann equations is of the form a \(\propto\) t
\(\delta\)
, and determine the exponent \(\delta\). Check your result in the dust case against the one in
section 8.2
, then find the exponent in the radiation case. Although the w = −1 case corresponds to a cosmological constant, show that the solution is not of this form for w = −1.
-
Apply the result of problem 11 to generalize the result of
example 22
for the size of the observable universe. What is the result in the case of the radiation-dominated universe?
-
The Kantowski-Sachs metric is $$ds^{2} = dt^{2} - \Lambda^{-1} (d \theta^{2} + \sin^{2} \theta d \phi^{2}) - e^{2 \sqrt{\Lambda} t} dz^{2} \ldotp$$It describes a universe with the spatial topology of a 3-cylinder. Use a computer algebra system such as Maxima to verify the following facts.
-
Any world-line of the form (t, \(\theta, \phi\), z) = (\(\lambda\), constants) is a geodesic parametrized by proper time. (If using Maxima, you will find that the function cgeodesic() saves time here.)
-
If two such geodesics are separated only in the z direction, the distance between them along a surface of fixed t increases exponentially with t, while geodesics separated only in \(\theta\) and \(\phi\) do not recede from one another.
-
There are no matter fields, only a cosmological constant \(\Lambda\).
-
The Ricci scalar R = −4\(\Lambda\) (+ − −− signature) equals \(\frac{1}{3}\) of the value for the de Sitter vacuum-dominated cosmology (
sec. 8.2
), the factor of 3 occurring because there is expansion along only one axis rather than three.
-
The vacuum-dominated cosmology found by de Sitter and presented in the text was supposed to be the unique cosmological solution of this type. Why is the Kantowski-Sachs metric not a counterexample?
Contributors and Attributions

## Match 2.38 — LibreTexts: 8.1: Sources in General Relativity (Part 1)
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Bookshelves/Relativity/General_Relativity_(Crowell)/08%3A_Sources/8.01%3A_Sources_in_General_Relativity_(Part_1)

8.1: Sources in General Relativity (Part 1)
Point Sources in a Background-independent Theory
The Schrödinger equation and Maxwell’s equations treat spacetime as a stage on which particles and fields act out their roles. General relativity, however, is essentially a theory of spacetime itself. The role played by atoms or rays of light is so peripheral that by the time Einstein had derived an approximate version of the Schwarzschild metric, and used it to find the precession of Mercury’s perihelion, he still had only vague ideas of how light and matter would fit into the picture. In his calculation, Mercury played the role of a test particle: a lump of mass so tiny that it can be tossed into spacetime in order to measure spacetime’s curvature, without worrying about its effect on the spacetime, which is assumed to be negligible. Likewise the sun was treated as in one of those orchestral pieces in which some of the brass play from off-stage, so as to produce the effect of a second band heard from a distance. Its mass appears simply as an adjustable parameter m in the metric, and if we had never heard of the Newtonian theory we would have had no way of knowing how to interpret m.
When Schwarzschild published his exact solution to the vacuum field equations, Einstein suffered from philosophical indigestion. His strong belief in Mach’s principle led him to believe that there was a paradox implicit in an exact spacetime with only one mass in it. If Einstein’s field equations were to mean anything, he believed that they had to be interpreted in terms of the motion of one body relative to another. In a universe with only one massive particle, there would be no relative motion, and so, it seemed to him, no motion of any kind, and no meaningful interpretation for the surrounding spacetime.
Not only that, but Schwarzschild’s solution had a singularity at its center. When a classical field theory contains singularities, Einstein believed, it contains the seeds of its own destruction. As we’ve seen in section 6.3 , this issue is still far from being resolved, a century later.
However much he might have liked to disown it, Einstein was now in possession of a solution to his field equations for a point source. In a linear, background-dependent theory like electromagnetism, knowledge of such a solution leads directly to the ability to write down the field equations with sources included. If Coulomb’s law tells us the \(\frac{1}{r^{2}}\) variation of the electric field of a point charge, then we can infer Gauss’s law. The situation in general relativity is not this simple. The field equations of general relativity, unlike the Gauss’s law, are nonlinear, so we can’t simply say that a planet or a star is a solution to be found by adding up a large number of point-source solutions. It’s also not clear how one could represent a moving source, since the singularity is a point that is not even part of the continuous structure of spacetime (and its location is also hidden behind an event horizon, so it cannot be observed from the outside).
The Einstein Field Equation
The Einstein Tensor
Given these difficulties, it’s not surprising that Einstein’s first attempt at incorporating sources into his field equation was a dead end. He postulated that the field equation would have the Ricci tensor on one side, and the stress-energy tensor \(T^{ab}\) ( Section 5.2 ) on the other,
\[R_{ab} = 8 \pi T_{ab},\]
where a factor of \(\frac{G}{c^{4}}\) on the right is suppressed by our choice of units, and the 8\(\pi\) is determined on the basis of consistency with Newtonian gravity in the limit of weak fields and low velocities. The problem with this version of the field equations can be demonstrated by counting variables. R and T are symmetric tensors, so the field equation contains 10 constraints on the metric: 4 from the diagonal elements and 6 from the off-diagonal ones.
In addition, local conservation of mass-energy requires the divergence-free property \(\nabla_{b}T^{ab} = 0\). In order to construct an example, we recall that the only component of \(T\) for which we have so far introduced any physical interpretation is \(T^{tt}\), which gives the density of mass-energy. Suppose we had a stress-energy tensor whose components were all zero, except for a time-time component varying as \(T^{tt} = kt\). This would describe a region of space in which mass-energy was uniformly appearing or disappearing everywhere at a constant rate. To forbid such examples, we need the divergence-free property to hold. This is exactly analogous to the continuity equation in fluid mechanics or electromagnetism,
\[\dfrac{\partial \rho}{\partial t} + \nabla \cdot \textbf{J} = 0\]
(or \(\nabla_{a} J^{a}\) = 0), which states that the quantity of fluid or charge is conserved.
But imposing the divergence-free condition adds four more constraints on the metric, for a total of 14. The metric, however, is a symmetric rank-2 tensor itself, so it only has 10 independent components. This overdetermination of the metric suggests that the proposed field equation will not in general allow a solution to be evolved forward in time from a set of initial conditions given on a spacelike surface, and this turns out to be true. It can in fact be shown that the only possible solutions are those in which the traces R = R a a and \(T = T^a_a\) are constant throughout spacetime.
The solution is to replace \(R_{ab}\) in the field equations with a different tensor \(G_{ab}\), called the Einstein tensor , defined by
\[G_{ab} = R_{ab} − \left(\dfrac{1}{2}\right)Rg_{ab}\]
or
\[G_{ab} = 8 \pi T_{ab}\]
The Einstein tensor is constructed exactly so that it is divergence-free, \(\nabla_{b} G^{ab}\) = 0. (This is not obvious, but can be proved by direct computation.) Therefore any stress-energy tensor that satisfies the field equation is automatically divergence-less, and thus no additional constraints need to be applied in order to guarantee conservation of mass-energy.
Exercise \(\PageIndex{1}\):
Self-check: Does replacing R ab with G ab invalidate the Schwarzschild metric?
This procedure of making local conservation of mass-energy “baked in” to the field equations is analogous to the way conservation of charge is treated in electricity and magnetism, where it follows from Maxwell’s equations rather than having to be added as a separate constraint.
Interpretation of the Stress-energy Tensor
The stress-energy tensor was briefly introduced in section 5.2 . By applying the Newtonian limit of the field equation to the Schwarzschild metric, we find that T tt is to be identified as the mass density \(\rho\). The Schwarzschild metric describes a spacetime using coordinates in which the mass is at rest. In the cosmological applications we’ll be considering shortly, it also makes sense to adopt a frame of reference in which the local mass-energy is, on average, at rest, so we can continue to think of T tt as the (average) mass density. By symmetry, T must be diagonal in such a frame. For example, if we had T tx ≠ 0, then the positive x direction would be distinguished from the negative x direction, but there is nothing that would allow such a distinction.
Example 1: Dust in a different frame
As discussed in example 14 , it is convenient in cosmology to distinguish between radiation and “dust,” meaning noninteracting, nonrelativistic materials such as hydrogen gas or galaxies. Here “nonrelativistic” means that in the comoving frame, in which the average flow of dust vanishes, the dust particles all have |v| << 1. What is the stress-energy tensor associated with dust?
Since the dust is nonrelativistic, we can obtain the Newtonian limit by using units in which c ≠ 1, and letting c approach infinity. In Cartesian coordinates, the components of the stress-energy have units that cause them to scale like
\[T^{\mu \nu} \propto \begin{pmatrix} 1 & \frac{1}{c} & \frac{1}{c} & \frac{1}{c} \\ \frac{1}{c} & \frac{1}{c^{2}} & \frac{1}{c^{2}} & \frac{1}{c^{2}} \\ \frac{1}{c} & \frac{1}{c^{2}} & \frac{1}{c^{2}} & \frac{1}{c^{2}} \\ \frac{1}{c} & \frac{1}{c^{2}} & \frac{1}{c^{2}} & \frac{1}{c^{2}} \end{pmatrix}\]
In the limit of c → ∞, we can therefore take the only source of gravitational fields to be T tt , which in Newtonian gravity must be the mass density \(\rho\), so
\[T^{\mu \nu} = \begin{pmatrix} \rho & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix} \ldotp\]
Under a Lorentz boost by v in the x direction, the tensor transformation law gives
\[T^{\mu' \nu'} = \begin{pmatrix} \gamma^{2} \rho & \gamma^{2} v \rho & 0 & 0 \\ \gamma^{2} v \rho & \gamma^{2} v^{2} \rho & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix} \ldotp\]
The over-all factor of \(\gamma^{2}\) arises because of the combination of two effects: each dust particle’s mass-energy is increased by a factor of \(\gamma\), and length contraction also multiplies the density of dust particles by a factor of \(\gamma\). In the limit of small boosts, the stress-energy tensor becomes
\[T^{\mu' \nu'} \approx \begin{pmatrix} \rho & v \rho & 0 & 0 \\ v \rho & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix} \ldotp\]
This motivates the interpretation of the time-space components of T as the flux of mass-energy along each axis. In the primed frame, mass-energy with density \(\rho\) flows in the x direction at velocity v, so that the rate at which mass-energy passes through a window of area A in the y − z plane is given by \(\rho vA\).
This is also consistent with our imposition of the divergence-free property, by which we were essentially stating T tx to be the rate of flow of T tt .
Example 2: The center of mass-energy
In Newtonian mechanics, for motion in one dimension, the total momentum of a system of particles is given by p tot = Mv cm , where M is the total mass and v cm the velocity of the center of mass. Is there such a relation in relativity?
Since mass and energy are equivalent, we expect that the relativistic equivalent of the center of mass would have to be a center of mass-energy.
It should also be clear that a center of mass-energy can only be well defined for a region of spacetime that is small enough so that effects due to curvature are negligible. For example, we can have cosmological models in which space is finite, and expands like the surface of a balloon being blown up. If the model is homogeneous (there are no “special points” on the surface of the balloon), then there is no point in space that could be a center. (A real balloon has a center, but in our metaphor only the balloon’s spherical surface correponds to physical space.) The fundamental issue here is the same geometrical one that caused us to conclude that there is no global conservation of mass-energy in general relativity (see section 4.5 ). In a curved spacetime, parallel transport is pathdependent, so we can’t unambiguously define a way of adding vectors that occur in different places. The center of mass is defined by a sum of position vectors. From these considerations we conclude that the center of mass-energy is only well defined in special relativity, not general relativity.
For simplicity, let’s restrict ourselves to 1+1 dimensions, and adopt a frame of reference in which the center of mass is at rest at x = 0.
Since T tt is interpreted as the density of mass-energy, the position of the center of mass must be given by
\[0 = \int x T^{tt} dx \ldotp\]
By analogy with the Newtonian relation p tot = Mv cm , let’s see what happens when we differentiate with respect to time. The velocity of the center of mass is then 0 = \(\frac{dx_{cm}}{dt} = \int \partial_{t} T^{tt} x dx\). Applying the divergence-free property \(\partial_{t} T^{tt} + \partial_{x} T^{tx} = 0\), this becomes 0 = \(− \int \partial_{x} T^{tx} x dx\). Integration by parts gives us finally
\[0 = \int T^{tx} dx \ldotp\]
We’ve already interpreted T tx as the rate of flow of mass-energy, which is another way of describing momentum. We can therefore int

## Match 2.04 — College_Physics_for_AP_Courses_2e-WEB_DkhNbxV § 34.2 General Relativity and Quantum Gravity

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Explain the effect of gravity on light.
•
Discuss black hole.
•
Explain quantum gravity.
When we talk of black holes or the unification of forces, we are actually discussing aspects of general relativity and
quantum gravity. We know from Special Relativity that relativity is the study of how different observers measure the
same event, particularly if they move relative to one another. Einstein’s theory of general relativity describes all
types of relative motion including accelerated motion and the effects of gravity. General relativity encompasses
special relativity and classical relativity in situations where acceleration is zero and relative velocity is small
compared with the speed of light. Many aspects of general relativity have been verified experimentally, some of
which are better than science fiction in that they are bizarre but true. Quantum gravity is the theory that deals with
particle exchange of gravitons as the mechanism for the force, and with extreme conditions where quantum
mechanics and general relativity must both be used. A good theory of quantum gravity does not yet exist, but one
will be needed to understand how all four forces may be unified. If we are successful, the theory of quantum gravity
will encompass all others, from classical physics to relativity to quantum mechanics—truly a Theory of Everything
(TOE).
General Relativity
Einstein first considered the case of no observer acceleration when he developed the revolutionary special theory of
relativity, publishing his first work on it in 1905. By 1916, he had laid the foundation of general relativity, again
almost on his own. Much of what Einstein did to develop his ideas was to mentally analyze certain carefully and
clearly defined situations—doing this is to perform a thought experiment. Figure 34.10 illustrates a thought
experiment like the ones that convinced Einstein that light must fall in a gravitational field. Think about what a
person feels in an elevator that is accelerated upward. It is identical to being in a stationary elevator in a
gravitational field. The feet of a person are pressed against the floor, and objects released from hand fall with
1608
34 • Frontiers of Physics
Access for free at openstax.org

identical accelerations. In fact, it is not possible, without looking outside, to know what is happening—acceleration
upward or gravity. This led Einstein to correctly postulate that acceleration and gravity will produce identical effects
in all situations. So, if acceleration affects light, then gravity will, too. Figure 34.10 shows the effect of acceleration
on a beam of light shone horizontally at one wall. Since the accelerated elevator moves up during the time light
travels across the elevator, the beam of light strikes low, seeming to the person to bend down. (Normally a tiny
effect, since the speed of light is so great.) The same effect must occur due to gravity, Einstein reasoned, since there
is no way to tell the effects of gravity acting downward from acceleration of the elevator upward. Thus gravity affects
the path of light, even though we think of gravity as acting between masses and photons are massless.
FIGURE 34.10 (a) A beam of light emerges from a flashlight in an upward-accelerating elevator. Since the elevator moves up during the
time the light takes to reach the wall, the beam strikes lower than it would if the elevator were not accelerated. (b) Gravity has the same
effect on light, since it is not possible to tell whether the elevator is accelerating upward or acted upon by gravity.
Einstein’s theory of general relativity got its first verification in 1919 when starlight passing near the Sun was
observed during a solar eclipse. (See Figure 34.11.) During an eclipse, the sky is darkened and we can briefly see
stars. Those in a line of sight nearest the Sun should have a shift in their apparent positions. Not only was this shift
observed, but it agreed with Einstein’s predictions well within experimental uncertainties. This discovery created a
scientific and public sensation. Einstein was now a folk hero as well as a very great scientist. The bending of light by
matter is equivalent to a bending of space itself, with light following the curve. This is another radical change in our
concept of space and time. It is also another connection that any particle with mass or energy (massless photons) is
affected by gravity.
There are several current forefront efforts related to general relativity. One is the observation and analysis of
gravitational lensing of light. Another is analysis of the definitive proof of the existence of black holes. Direct
observation of gravitational waves or moving wrinkles in space is being searched for. Theoretical efforts are also
being aimed at the possibility of time travel and wormholes into other parts of space due to black holes.
Gravitational lensing As you can see in Figure 34.11, light is bent toward a mass, producing an effect much like a
converging lens (large masses are needed to produce observable effects). On a galactic scale, the light from a
distant galaxy could be “lensed” into several images when passing close by another galaxy on its way to Earth.
Einstein predicted this effect, but he considered it unlikely that we would ever observe it. A number of cases of this
effect have now been observed; one is shown in Figure 34.12. This effect is a much larger scale verification of
general relativity. But such gravitational lensing is also useful in verifying that the red shift is proportional to
34.2 • General Relativity and Quantum Gravity
1609

distance. The red shift of the intervening galaxy is always less than that of the one being lensed, and each image of
the lensed galaxy has the same red shift. This verification supplies more evidence that red shift is proportional to
distance. Confidence that the multiple images are not different objects is bolstered by the observations that if one
image varies in brightness over time, the others also vary in the same manner.
FIGURE 34.11 This schematic shows how light passing near a massive body like the Sun is curved toward it. The light that reaches the
Earth then seems to be coming from different locations than the known positions of the originating stars. Not only was this effect observed,
the amount of bending was precisely what Einstein predicted in his general theory of relativity.
FIGURE 34.12 (a) Light from a distant galaxy can travel different paths to the Earth because it is bent around an intermediary galaxy by
gravity. This produces several images of the more distant galaxy. (b) The images around the central galaxy are produced by gravitational
lensing. Each image has the same spectrum and a larger red shift than the intermediary. (credit: NASA, ESA, and STScI)
Black holes Black holes are objects having such large gravitational fields that things can fall in, but nothing, not
even light, can escape. Bodies, like the Earth or the Sun, have what is called an escape velocity. If an object moves
straight up from the body, starting at the escape velocity, it will just be able to escape the gravity of the body. The
greater the acceleration of gravity on the body, the greater is the escape velocity. As long ago as the late 1700s, it
was proposed that if the escape velocity is greater than the speed of light, then light cannot escape. Simon Laplace
(1749–1827), the French astronomer and mathematician, even incorporated this idea of a dark star into his
writings. But the idea was dropped after Young’s double slit experiment showed light to be a wave. For some time,
light was thought not to have particle characteristics and, thus, could not be acted upon by gravity. The idea of a
black hole was very quickly reincarnated in 1916 after Einstein’s theory of general relativity was published. It is now
thought that black holes can form in the supernova collapse of a massive star, forming an object perhaps 10 km
across and having a mass greater than that of our Sun. It is interesting that several prominent physicists who
1610
34 • Frontiers of Physics
Access for free at openstax.org

worked on the concept, including Einstein, firmly believed that nature would find a way to prohibit such objects.
Black holes are difficult to observe directly, because they are small and no light comes directly from them. In fact,
no light comes from inside the event horizon, which is defined to be at a distance from the object at which the
escape velocity is exactly the speed of light. The radius of the event horizon is known as the Schwarzschild radius
and is given by
where
is the universal gravitational constant,
is the mass of the body, and
is the speed of light. The event
horizon is the edge of the black hole and
is its radius (that is, the size of a black hole is twice
). Since
is
small and
is large, you can see that black holes are extremely small, only a few kilometers for masses a little
greater than the Sun’s. The object itself is inside the event horizon.
Physics near a black hole is fascinating. Gravity increases so rapidly that, as you approach a black hole, the tidal
effects tear matter apart, with matter closer to the hole being pulled in with much more force than that only slightly
farther away. This can pull a companion star apart and heat inflowing gases to the point of producing X rays. (See
Figure 34.13.) We have observed X rays from certain binary star systems that are consistent with such a picture.
This is not quite proof of black holes, because the X rays could also be caused by matter falling onto a neutron star.
These objects were first discovered in 1967 by the British astrophysicists, Jocelyn Bell and Anthony Hewish.
Neutron stars are literally a star composed of neutrons. They are formed by the collapse of a star’s core in a
supernova, during which electrons and protons are forced together to form neutrons (the reverse of neutron
decay). Neutron stars are slightly larger than a black hole of the same mass and will not collapse further because of
resistance by the strong force. However, neutron stars cannot have a mass greater than about eight solar masses or
they must collapse to a black hole. With recent improvements in our ability to resolve small details, such as with the
orbiting Chandra X-ray Observatory, it has become possible to measure the masses of X-ray-emitting objects by
observing the motion of companion stars and other matter in their vicinity. What has emerged is a plethora of X-ray-
emitting objects too massive to be neutron stars. This evidence is considered conclusive and the existence of black
holes is widely accepted. These black holes are concentrated near galactic centers.
We also have evidence that supermassive black holes may exist at the cores of many galaxies, including the Milky
Way. Such a black hole might have a mass millions or even billions of times that of the Sun, and it would probably
have formed when matter first coalesced into a galaxy billions of years ago. Supporting this is the fact that very
distant galaxies are more likely to have abnormally energetic cores. Some of the moderately distant galaxies, and
hence among the younger, are known as quasars and emit as much or more energy than a normal galaxy but from a
region less than a light year across. Quasar energy outputs may vary in times less than a year, so that the energy-
emitting region must be less than a light year across. The best explanation of quasars is that they are young galaxies
with a supermassive black hole forming at their core, and that they become less energetic over billions of years. In
closer superactive galaxies, we observe tremendous amounts of energy being emitted from very small regions of
space, consistent with stars falling into a black hole at the rate of one or more a month. The Hubble Space Telescope
(1994) observed an accretion disk in the galaxy M87 rotating rapidly around a region of extreme energy emission.
(See Figure 34.13.) A jet of material being ejected perpendicular to the plane of rotation gives further evidence of a
supermassive black hole as the engine.
FIGURE 34.13 A black hole is shown pulling matter away from a companion star, forming a superheated accretion disk where X rays are
emitted before the matter disappears forever into the hole. The in-fall energy also ejects some material, forming the two vertical spikes.
(See also the photograph in the Introduction to Frontiers of Physics.) There are several X-ray-emitting objects in space that are consistent
with this picture and are likely to be black holes.
Gravitational waves If a massive object distorts the space around it, like the foot of a water bug on the surface of a
34.2
34.2 • General Relativity and Quantum Gravity
1611

pond, then movement of the massive object should create waves in space like those on a pond. Gravitational
waves are mass-created distortions in space that propagate at the speed of light and are predicted by general
relativity. Since gravity is by far the weakest force, extreme conditions are needed to generate significant
gravitational waves. Gravity near binary neutron star systems is so great that significant gravitational wave energy is
radiated as the two neutron stars orbit one another. American astronomers, Joseph Taylor and Russell Hulse,
measured changes in the orbit of such a binary neutron star system. They found its orbit to change precisely as
predicted by general relativity, a strong indication of gravitational waves, and were awarded the 1993 Nobel Prize.
But direct detection of gravitational waves on Earth would be conclusive. For many years, various attempts have
been made to detect gravitational waves by observing vibrations induced in matter distorted by these waves.
American physicist Joseph Weber pioneered this field in the 1960s, but no conclusive events have been observed.
(No gravity wave detectors were in operation at the time of t
