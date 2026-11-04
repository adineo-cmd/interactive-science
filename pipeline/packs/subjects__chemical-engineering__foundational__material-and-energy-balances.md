# Source pack — subjects/chemical-engineering/foundational/material-and-energy-balances
Lesson title: Material and Energy Balances
Level: foundational
Match confidence: 1.39

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.39 — UniversityPhysicsVolume2-WEB_5eNhMSa § 7.1 Electric Potential Energy

Learning Objectives
By the end of this section, you will be able to:
•
Define the work done by an electric force
•
Define electric potential energy
•
Apply work and potential energy in systems with electric charges
When a free positive charge q is accelerated by an electric field, it is given kinetic energy (Figure 7.2). The
process is analogous to an object being accelerated by a gravitational field, as if the charge were going down an
electrical hill where its electric potential energy is converted into kinetic energy, although of course the
sources of the forces are very different. Let us explore the work done on a charge q by the electric field in this
process, so that we may develop a definition of electric potential energy.
Figure 7.2
A charge accelerated by an electric field is analogous to a mass going down a hill. In both cases, potential energy decreases as
kinetic energy increases,
. Work is done by a force, but since this force is conservative, we can write
.
The electrostatic or Coulomb force is conservative, which means that the work done on q is independent of the
path taken, as we will demonstrate later. This is exactly analogous to the gravitational force. When a force is
conservative, it is possible to define a potential energy associated with the force. It is usually easier to work
with the potential energy (because it depends only on position) than to calculate the work directly.
To show this explicitly, consider an electric charge
fixed at the origin and move another charge
toward
q in such a manner that, at each instant, the applied force
exactly balances the electric force
on Q (Figure
7.3). The work done by the applied force
on the charge Q changes the potential energy of Q. We call this
potential energy the electrical potential energy of Q.
Figure 7.3
Displacement of “test” charge Q in the presence of fixed “source” charge q.
The work
done by the applied force
when the particle moves from
to
may be calculated by
280
7 • Electric Potential
Access for free at openstax.org.

Since the applied force
balances the electric force
on Q, the two forces have equal magnitude and
opposite directions. Therefore, the applied force is
where we have defined positive to be pointing away from the origin and r is the distance from the origin. The
directions of both the displacement and the applied force in the system in Figure 7.3 are parallel, and thus the
work done on the system is positive.
We use the letter U to denote electric potential energy, which has units of joules (J). When a conservative force
does negative work, the system gains potential energy. When a conservative force does positive work, the
system loses potential energy,
In the system in Figure 7.3, the Coulomb force acts in the opposite
direction to the displacement; therefore, the work is negative. However, we have increased the potential energy
in the two-charge system.
EXAMPLE 7.1
Kinetic Energy of a Charged Particle
A
charge Q is initially at rest a distance of 10 cm (
) from a
charge q fixed at the origin
(Figure 7.4). Naturally, the Coulomb force accelerates Q away from q, eventually reaching 15 cm (
).
Figure 7.4
The charge Q is repelled by q, thus having work done on it and gaining kinetic energy.
a.
What is the work done by the electric field between
and
?
b.
How much kinetic energy does Q have at
?
Strategy
Calculate the work with the usual definition. Since Q started from rest, this is the same as the kinetic energy.
Solution
Integrating force over distance, we obtain
This is also the value of the kinetic energy at
Significance
Charge Q was initially at rest; the electric field of q did work on Q, so now Q has kinetic energy equal to the
work done by the electric field.
CHECK YOUR UNDERSTANDING 7.1
If Q has a mass of
what is the speed of Q at
7.1 • Electric Potential Energy
281

In this example, the work W done to accelerate a positive charge from rest is positive and results from a loss in
U, or a negative
. A value for U can be found at any point by taking one point as a reference and calculating
the work needed to move a charge to the other point.
Gravitational potential energy and electric potential energy are quite analogous. Potential energy accounts for
work done by a conservative force and gives added insight regarding energy and energy transformation
without the necessity of dealing with the force directly. It is much more common, for example, to use the
concept of electric potential energy than to deal with the Coulomb force directly in real-world applications.
In polar coordinates with q at the origin and Q located at r, the displacement element vector is
and
thus the work becomes
Notice that this result only depends on the endpoints and is otherwise independent of the path taken. To
explore this further, compare path
to
with path
in Figure 7.5.
Figure 7.5
Two paths for displacement
to
The work on segments
and
are zero due to the electrical force being
perpendicular to the displacement along these paths. Therefore, work on paths
and
are equal.
The segments
and
are arcs of circles centered at q. Since the force on Q points either toward or
away from q, no work is done by a force balancing the electric force, because it is perpendicular to the
displacement along these arcs. Therefore, the only work done is along segment
which is identical to
One implication of this work calculation is that if we were to go around the path
the net work
would be zero (Figure 7.6). Recall that this is how we determine whether a force is conservative or not. Hence,
because the electric force is related to the electric field by
, the electric field is itself conservative. That
is,
Note that Q is a constant.
Electric Potential Energy
Work W done to accelerate a positive charge from rest is positive and results from a loss in U, or a negative
. Mathematically,
7.1
282
7 • Electric Potential
Access for free at openstax.org.

Figure 7.6
A closed path in an electric field. The net work around this path is zero.
Another implication is that we may define an electric potential energy. Recall that the work done by a
conservative force is also expressed as the difference in the potential energy corresponding to that force.
Therefore, the work
to bring a charge from a reference point to a point of interest may be written as
and, by Equation 7.1, the difference in potential energy
of the test charge Q between the two points
is
Therefore, we can write a general expression for the potential energy of two point charges (in spherical
coordinates):
We may take the second term to be an arbitrary constant reference level, which serves as the zero reference:
A convenient choice of reference that relies on our common sense is that when the two charges are infinitely
far apart, there is no interaction between them. (Recall the discussion of reference potential energy in
Potential Energy and Conservation of Energy.) Taking the potential energy of this state to be zero removes the
term
from the equation (just like when we say the ground is zero potential energy in a gravitational
potential energy problem), and the potential energy of Q when it is separated from q by a distance r assumes
the form
This formula is symmetrical with respect to q and Q, so it is best described as the potential energy of the two-
charge system.
EXAMPLE 7.2
Potential Energy of a Charged Particle
A
charge Q is initially at rest a distance of 10 cm (
) from a
charge q fixed at the origin
(Figure 7.7). Naturally, the Coulomb force accelerates Q away from q, eventually reaching 15 cm (
).
∞
7.2
7.1 • Electric Potential Energy
283

Figure 7.7
The charge Q is repelled by q, thus having work done on it and losing potential energy.
What is the change in the potential energy of the two-charge system from
to
Strategy
Calculate the potential energy with the definition given above:
Since Q started from
rest, this is the same as the kinetic energy.
Solution
We have
Significance
The change in the potential energy is negative, as expected, and equal in magnitude to the change in kinetic
energy in this system. Recall from Example 7.1 that the change in kinetic energy was positive.
CHECK YOUR UNDERSTANDING 7.2
What is the potential energy of Q relative to the zero reference at infinity at
in the above example?
Due to Coulomb’s law, the forces due to multiple charges on a test charge Q superimpose; they may be
calculated individually and then added. This implies that the work integrals and hence the resulting potential
energies exhibit the same behavior. To demonstrate this, we consider an example of assembling a system of
four charges.
EXAMPLE 7.3
Assembling Four Positive Charges
Find the amount of work an external agent must do in assembling four charges
and
at the vertices of a square of side 1.0 cm, starting each charge from infinity (Figure 7.8).
Figure 7.8
How much work is needed to assemble this charge configuration?
284
7 • Electric Potential
Access for free at openstax.org.

Strategy
We bring in the charges one at a time, giving them starting locations at infinity and calculating the work to
bring them in from infinity to their final location. We do this in order of increasing charge.
Solution
Step 1. First bring the
charge to the origin. Since there are no other charges at a finite distance from
this charge yet, no work is done in bringing it from infinity,
Step 2. While keeping the
charge fixed at the origin, bring the
charge to
(Figure 7.9). Now, the applied force must do work against the force exerted by the
charge fixed at the origin. The work done equals the change in the potential energy of the
charge:
Figure 7.9
Step 2. Work
to bring the
charge from infinity.
Step 3. While keeping the charges of
and
fixed in their places, bring in the
charge to
(Figure 7.10). The work done in this step is
Figure 7.10
Step 3. The work
to bring the
charge from infinity.
Step 4. Finally, while keeping the first three charges in their places, bring the
charge to
(Figure 7.11). The work done here is
7.1 • Electric Potential Energy
285

Figure 7.11
Step 4. The work
to bring the
charge from infinity.
Hence, the total work done by the applied force in assembling the four charges is equal to the sum of the work
in bringing each charge from infinity to its final position:
Significance
The work on each charge depends only on its pairwise interactions with the other charges. No more
complicated interactions need to be considered; the work on the third charge only depends on its interaction
with the first and second charges, the interaction between the first and second charge does not affect the third.
CHECK YOUR UNDERSTANDING 7.3
Is the electrical potential energy of two point charges positive or negative if the charges are of the same sign?
Opposite signs? How does this relate to the work necessary to bring the charges into proximity from infinity?
Note that the electrical potential energy is positive if the two charges are of the same type, either positive or
negative, and negative if the two charges are of opposite types. This makes sense if you think of the change in
the potential energy
as you bring the two charges closer or move them farther apart. Depending on the
relative types of charges, you may have to work on the system or the system would do work on you, that is, your
work is either positive or negative. If you have to do positive work on the system (actually push the charges
closer), then the energy of the system should increase. If you bring two positive charges or two negative
charges closer, you have to do positive work on the system, which raises their potential energy. Since potential
energy is proportional to 1/r, the potential energy goes up when r goes down between two positive or two
negative charges.
On the other hand, if you bring a positive and a negative charge nearer, you have to do negative work on the
system (the charges are pulling you), which means that you take energy away from the system. This reduces
the potential energy. Since potential energy is negative in the case of a positive and a negative charge pair, the
increase in 1/r makes the potential energy more negative, which is the same as a reduction in potential energy.
The result from Example 7.1 may be extended to systems with any arbitrary number of charges. In this case, it
is most convenient to write the formula as
7.3
286
7 • Electric Potential
Access for free at openstax.org.

The factor of 1/2 accounts for adding each pair of charges twice.

## Match 1.37 — ChemistryAtomsFirst2e-WEB § 20.4 Transmutation and Nuclear Energy

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Describe the synthesis of transuranium nuclides
•
Explain nuclear fission and fusion processes
•
Relate the concepts of critical mass and nuclear chain reactions
•
Summarize basic requirements for nuclear fission and fusion reactors
After the discovery of radioactivity, the field of nuclear chemistry was created and developed rapidly during
the early twentieth century. A slew of new discoveries in the 1930s and 1940s, along with World War II,
combined to usher in the Nuclear Age in the mid-twentieth century. Scientists learned how to create new
substances, and certain isotopes of certain elements were found to possess the capacity to produce
unprecedented amounts of energy, with the potential to cause tremendous damage during war, as well as
produce enormous amounts of power for society’s needs during peace.
Synthesis of Nuclides
Nuclear transmutation is the conversion of one nuclide into another. It can occur by the radioactive decay of a
nucleus, or the reaction of a nucleus with another particle. The first manmade nucleus was produced in Ernest
Rutherford’s laboratory in 1919 by a transmutation reaction, the bombardment of one type of nuclei with
other nuclei or with neutrons. Rutherford bombarded nitrogen atoms with high-speed α particles from a
natural radioactive isotope of radium and observed protons resulting from the reaction:
The
and
nuclei that are produced are stable, so no further (nuclear) changes occur.
To reach the kinetic energies necessary to produce transmutation reactions, devices called particle
accelerators are used. These devices use magnetic and electric fields to increase the speeds of nuclear
particles. In all accelerators, the particles move in a vacuum to avoid collisions with gas molecules. When
neutrons are required for transmutation reactions, they are usually obtained from radioactive decay reactions
or from various nuclear reactions occurring in nuclear reactors. The Chemistry in Everyday Life feature that
follows discusses a famous particle accelerator that made worldwide news.
Chemistry in Everyday Life
CERN Particle Accelerator
Located near Geneva, the CERN (“Conseil Européen pour la Recherche Nucléaire,” or European Council for
Nuclear Research) Laboratory is the world’s premier center for the investigations of the fundamental
particles that make up matter. It contains the 27-kilometer (17 mile) long, circular Large Hadron Collider
(LHC), the largest particle accelerator in the world (Figure 20.13). In the LHC, particles are boosted to high
energies and are then made to collide with each other or with stationary targets at nearly the speed of light.
Superconducting electromagnets are used to produce a strong magnetic field that guides the particles
around the ring. Specialized, purpose-built detectors observe and record the results of these collisions,
which are then analyzed by CERN scientists using powerful computers.
1002
20 • Nuclear Chemistry
Access for free at openstax.org

LINK TO LEARNING
Famous physicist Brian Cox talks about his work on the Large Hadron Collider at CERN, providing an
entertaining and engaging tour (http://openstax.org/l/16tedCERN) of this massive project and the physics
behind it.
View a short video (http://openstax.org/l/16CERNvideo) from CERN, describing the basics of how its particle
accelerators work.
Prior to 1940, the heaviest-known element was uranium, whose atomic number is 92. Now, many artificial
elements have been synthesized and isolated, including several on such a large scale that they have had a
profound effect on society. One of these—element 93, neptunium (Np)—was first made in 1940 by McMillan
and Abelson by bombarding uranium-238 with neutrons. The reaction creates unstable uranium-239, with a
half-life of 23.5 minutes, which then decays into neptunium-239. Neptunium-239 is also radioactive, with a
half-life of 2.36 days, and it decays into plutonium-239. The nuclear reactions are:
Plutonium is now mostly formed in nuclear reactors as a byproduct during the fission of U-235. Additional
neutrons are released during this fission process (see the next section), some of which combine with U-238
nuclei to form uranium-239; this undergoes β decay to form neptunium-239, which in turn undergoes β decay
to form plutonium-239 as illustrated in the preceding three equations. These processes are summarized in the
equation:
Heavier isotopes of plutonium—Pu-240, Pu-241, and Pu-242—are also produced when lighter plutonium
FIGURE 20.13
A small section of the LHC is shown with workers traveling along it. (credit: Christophe Delaere)
In 2012, CERN announced that experiments at the LHC showed the first observations of the Higgs boson,
an elementary particle that helps explain the origin of mass in fundamental particles. This long-
anticipated discovery made worldwide news and resulted in the awarding of the 2013 Nobel Prize in
Physics to François Englert and Peter Higgs, who had predicted the existence of this particle almost 50
years previously.
20.4 • Transmutation and Nuclear Energy
1003

nuclei capture neutrons. Some of this highly radioactive plutonium is used to produce military weapons, and
the rest presents a serious storage problem because they have half-lives from thousands to hundreds of
thousands of years.
Although they have not been prepared in the same quantity as plutonium, many other synthetic nuclei have
been produced. Nuclear medicine has developed from the ability to convert atoms of one type into other types
of atoms. Radioactive isotopes of several dozen elements are currently used for medical applications. The
radiation produced by their decay is used to image or treat various organs or portions of the body, among other
uses.
The elements beyond element 92 (uranium) are called transuranium elements. As of this writing, 22
transuranium elements have been produced and officially recognized by IUPAC; several other elements have
formation claims that are waiting for approval. Some of these elements are shown in Table 20.3.
Preparation of Some of the Transuranium Elements
Name
Symbol
Atomic Number
Reaction
americium
Am
95
curium
Cm
96
californium
Cf
98
einsteinium
Es
99
mendelevium
Md
101
nobelium
No
102
rutherfordium
Rf
104
seaborgium
Sg
106
meitnerium
Mt
107
TABLE 20.3
Nuclear Fission
Many heavier elements with smaller binding energies per nucleon can decompose into more stable elements
that have intermediate mass numbers and larger binding energies per nucleon—that is, mass numbers and
binding energies per nucleon that are closer to the “peak” of the binding energy graph near 56 (see Figure
20.3). Sometimes neutrons are also produced. This decomposition is called fission, the breaking of a large
nucleus into smaller pieces. The breaking is rather random with the formation of a large number of different
products. Fission usually does not occur naturally, but is induced by bombardment with neutrons. The first
reported nuclear fission occurred in 1939 when three German scientists, Lise Meitner, Otto Hahn, and Fritz
Strassman, bombarded uranium-235 atoms with slow-moving neutrons that split the U-238 nuclei into
smaller fragments that consisted of several neutrons and elements near the middle of the periodic table. Since
then, fission has been observed in many other isotopes, including most actinide isotopes that have an odd
number of neutrons. A typical nuclear fission reaction is shown in Figure 20.14.
1004
20 • Nuclear Chemistry
Access for free at openstax.org

FIGURE 20.14
When a slow neutron hits a fissionable U-235 nucleus, it is absorbed and forms an unstable U-236
nucleus. The U-236 nucleus then rapidly breaks apart into two smaller nuclei (in this case, Ba-141 and Kr-92) along
with several neutrons (usually two or three), and releases a very large amount of energy.
Among the products of Meitner, Hahn, and Strassman’s fission reaction were barium, krypton, lanthanum, and
cerium, all of which have nuclei that are more stable than uranium-235. Since then, hundreds of different
isotopes have been observed among the products of fissionable substances. A few of the many reactions that
occur for U-235, and a graph showing the distribution of its fission products and their yields, are shown in
Figure 20.15. Similar fission reactions have been observed with other uranium isotopes, as well as with a
variety of other isotopes such as those of plutonium.
FIGURE 20.15
(a) Nuclear fission of U-235 produces a range of fission products. (b) The larger fission products of
U-235 are typically one isotope with a mass number around 85–105, and another isotope with a mass number that
is about 50% larger, that is, about 130–150.
LINK TO LEARNING
View this link (http://openstax.org/l/16fission) to see a simulation of nuclear fission.
A tremendous amount of energy is produced by the fission of heavy elements. For instance, when one mole of
20.4 • Transmutation and Nuclear Energy
1005

U-235 undergoes fission, the products weigh about 0.2 grams less than the reactants; this “lost” mass is
converted into a very large amount of energy, about 1.8
1010 kJ per mole of U-235. Nuclear fission reactions
produce incredibly large amounts of energy compared to chemical reactions. The fission of 1 kilogram of
uranium-235, for example, produces about 2.5 million times as much energy as is produced by burning 1
kilogram of coal.
As described earlier, when undergoing fission U-235 produces two “medium-sized” nuclei, and two or three
neutrons. These neutrons may then cause the fission of other uranium-235 atoms, which in turn provide more
neutrons that can cause fission of even more nuclei, and so on. If this occurs, we have a nuclear chain reaction
(see Figure 20.16). On the other hand, if too many neutrons escape the bulk material without interacting with a
nucleus, then no chain reaction will occur.
FIGURE 20.16
The fission of a large nucleus, such as U-235, produces two or three neutrons, each of which is
capable of causing fission of another nucleus by the reactions shown. If this process continues, a nuclear chain
reaction occurs.
1006
20 • Nuclear Chemistry
Access for free at openstax.org

Material that can sustain a nuclear fission chain reaction is said to be fissile or fissionable. (Technically, fissile
material can undergo fission with neutrons of any energy, whereas fissionable material requires high-energy
neutrons.) Nuclear fission becomes self-sustaining when the number of neutrons produced by fission equals
or exceeds the number of neutrons absorbed by splitting nuclei plus the number that escape into the
surroundings. The amount of a fissionable material that will support a self-sustaining chain reaction is a
critical mass. An amount of fissionable material that cannot sustain a chain reaction is a subcritical mass. An
amount of material in which there is an increasing rate of fission is known as a supercritical mass. The
critical mass depends on the type of material: its purity, the temperature, the shape of the sample, and how the
neutron reactions are controlled (Figure 20.17).
FIGURE 20.17
(a) In a subcritical mass, the fissile material is too small and allows too many neutrons to escape
the material, so a chain reaction does not occur. (b) In a critical mass, a large enough number of neutrons in the
fissile material induce fission to create a chain reaction.
An atomic bomb (Figure 20.18) contains several pounds of fissionable material,
or
a source of
neutrons, and an explosive device for compressing it quickly into a small volume. When fissionable material is
in small pieces, the proportion of neutrons that escape through the relatively large surface area is great, and a
chain reaction does not take place. When the small pieces of fissionable material are brought together quickly
to form a body with a mass larger than the critical mass, the relative number of escaping neutrons decreases,
and a chain reaction and explosion result.
20.4 • Transmutation and Nuclear Energy
1007

FIGURE 20.18
(a) The nuclear fission bomb that destroyed Hiroshima on August 6, 1945, consisted of two
subcritical masses of U-235, where conventional explosives were used to fire one of the subcritical masses into the
other, creating the critical mass for the nuclear explosion. (b) The plutonium bomb that destroyed Nagasaki on
August 9, 1945, consisted of a hollow sphere of plutonium that was rapidly compressed by conventional explosives.
This led to a concentration of plutonium in the center that was greater than the critical mass necessary for the
nuclear explosion.
Fission Reactors
Chain reactions of fissionable materials can be controlled and sustained without an explosion in a nuclear
reactor (Figure 20.19). Any nuclear reactor that produces power via the fission of uranium or plutonium by
bombardment with neutrons must have at least five components: nuclear fuel consisting of fissionable
material, a nuclear moderator, reactor coolant, control rods, and a shield and containment system. We will
discuss these components in greater detail later in the section. The reactor works by separating the fissionable
nuclear material such that a critical mass cannot be formed, controlling both the flux and absorption of
neutrons to allow shutting down the fission reactions. In a nuclear reactor used for the production of
electricity, the energy released by fission reactions is trapped as thermal energy and used to boil water and
produce steam. The steam is used to turn a turbine, which powers a generator for the production of electricity.
1008
20 • Nuclear Chemistry
Access for free at openstax.org

FIGURE 20.19
(a) The Diablo Canyon Nuclear Power Plant near San Luis Obispo is the only nuclear power plant
currently in operation in California. The domes are the containment structures for the nuclear reactors, and the
brown building houses the turbine where electricity is generated. Ocean water is used for cooling. (b) The Diablo
C

## Match 1.37 — Chemistry2e-WEB § 21.4 Transmutation and Nuclear Energy

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Describe the synthesis of transuranium nuclides
•
Explain nuclear fission and fusion processes
•
Relate the concepts of critical mass and nuclear chain reactions
•
Summarize basic requirements for nuclear fission and fusion reactors
After the discovery of radioactivity, the field of nuclear chemistry was created and developed rapidly during
the early twentieth century. A slew of new discoveries in the 1930s and 1940s, along with World War II,
combined to usher in the Nuclear Age in the mid-twentieth century. Scientists learned how to create new
substances, and certain isotopes of certain elements were found to possess the capacity to produce
unprecedented amounts of energy, with the potential to cause tremendous damage during war, as well as
produce enormous amounts of power for society’s needs during peace.
Synthesis of Nuclides
Nuclear transmutation is the conversion of one nuclide into another. It can occur by the radioactive decay of a
nucleus, or the reaction of a nucleus with another particle. The first manmade nucleus was produced in Ernest
Rutherford’s laboratory in 1919 by a transmutation reaction, the bombardment of one type of nuclei with
other nuclei or with neutrons. Rutherford bombarded nitrogen atoms with high-speed α particles from a
natural radioactive isotope of radium and observed protons resulting from the reaction:
The
and
nuclei that are produced are stable, so no further (nuclear) changes occur.
To reach the kinetic energies necessary to produce transmutation reactions, devices called particle
accelerators are used. These devices use magnetic and electric fields to increase the speeds of nuclear
particles. In all accelerators, the particles move in a vacuum to avoid collisions with gas molecules. When
neutrons are required for transmutation reactions, they are usually obtained from radioactive decay reactions
or from various nuclear reactions occurring in nuclear reactors. The Chemistry in Everyday Life feature that
follows discusses a famous particle accelerator that made worldwide news.
Chemistry in Everyday Life
CERN Particle Accelerator
Located near Geneva, the CERN (“Conseil Européen pour la Recherche Nucléaire,” or European Council for
Nuclear Research) Laboratory is the world’s premier center for the investigations of the fundamental
particles that make up matter. It contains the 27-kilometer (17 mile) long, circular Large Hadron Collider
(LHC), the largest particle accelerator in the world (Figure 21.13). In the LHC, particles are boosted to high
energies and are then made to collide with each other or with stationary targets at nearly the speed of light.
Superconducting electromagnets are used to produce a strong magnetic field that guides the particles
around the ring. Specialized, purpose-built detectors observe and record the results of these collisions,
which are then analyzed by CERN scientists using powerful computers.
1042
21 • Nuclear Chemistry
Access for free at openstax.org

LINK TO LEARNING
Famous physicist Brian Cox talks about his work on the Large Hadron Collider at CERN, providing an
entertaining and engaging tour (http://openstax.org/l/16tedCERN) of this massive project and the physics
behind it.
View a short video (http://openstax.org/l/16CERNvideo) from CERN, describing the basics of how its particle
accelerators work.
Prior to 1940, the heaviest-known element was uranium, whose atomic number is 92. Now, many artificial
elements have been synthesized and isolated, including several on such a large scale that they have had a
profound effect on society. One of these—element 93, neptunium (Np)—was first made in 1940 by McMillan
and Abelson by bombarding uranium-238 with neutrons. The reaction creates unstable uranium-239, with a
half-life of 23.5 minutes, which then decays into neptunium-239. Neptunium-239 is also radioactive, with a
half-life of 2.36 days, and it decays into plutonium-239. The nuclear reactions are:
Plutonium is now mostly formed in nuclear reactors as a byproduct during the fission of U-235. Additional
neutrons are released during this fission process (see the next section), some of which combine with U-238
nuclei to form uranium-239; this undergoes β decay to form neptunium-239, which in turn undergoes β decay
to form plutonium-239 as illustrated in the preceding three equations. These processes are summarized in the
equation:
Heavier isotopes of plutonium—Pu-240, Pu-241, and Pu-242—are also produced when lighter plutonium
FIGURE 21.13
A small section of the LHC is shown with workers traveling along it. (credit: Christophe Delaere)
In 2012, CERN announced that experiments at the LHC showed the first observations of the Higgs boson,
an elementary particle that helps explain the origin of mass in fundamental particles. This long-
anticipated discovery made worldwide news and resulted in the awarding of the 2013 Nobel Prize in
Physics to François Englert and Peter Higgs, who had predicted the existence of this particle almost 50
years previously.
21.4 • Transmutation and Nuclear Energy
1043

nuclei capture neutrons. Some of this highly radioactive plutonium is used to produce military weapons, and
the rest presents a serious storage problem because they have half-lives from thousands to hundreds of
thousands of years.
Although they have not been prepared in the same quantity as plutonium, many other synthetic nuclei have
been produced. Nuclear medicine has developed from the ability to convert atoms of one type into other types
of atoms. Radioactive isotopes of several dozen elements are currently used for medical applications. The
radiation produced by their decay is used to image or treat various organs or portions of the body, among other
uses.
The elements beyond element 92 (uranium) are called transuranium elements. As of this writing, 22
transuranium elements have been produced and officially recognized by IUPAC; several other elements have
formation claims that are waiting for approval. Some of these elements are shown in Table 21.3.
Preparation of Some of the Transuranium Elements
Name
Symbol
Atomic Number
Reaction
americium
Am
95
curium
Cm
96
californium
Cf
98
einsteinium
Es
99
mendelevium
Md
101
nobelium
No
102
rutherfordium
Rf
104
seaborgium
Sg
106
meitnerium
Mt
107
TABLE 21.3
Nuclear Fission
Many heavier elements with smaller binding energies per nucleon can decompose into more stable elements
that have intermediate mass numbers and larger binding energies per nucleon—that is, mass numbers and
binding energies per nucleon that are closer to the “peak” of the binding energy graph near 56 (see Figure
21.3). Sometimes neutrons are also produced. This decomposition is called fission, the breaking of a large
nucleus into smaller pieces. The breaking is rather random with the formation of a large number of different
products. Fission usually does not occur naturally, but is induced by bombardment with neutrons. The first
reported nuclear fission occurred in 1939 when three German scientists, Lise Meitner, Otto Hahn, and Fritz
Strassman, bombarded uranium-235 atoms with slow-moving neutrons that split the U-238 nuclei into
smaller fragments that consisted of several neutrons and elements near the middle of the periodic table. Since
then, fission has been observed in many other isotopes, including most actinide isotopes that have an odd
number of neutrons. A typical nuclear fission reaction is shown in Figure 21.14.
1044
21 • Nuclear Chemistry
Access for free at openstax.org

FIGURE 21.14
When a slow neutron hits a fissionable U-235 nucleus, it is absorbed and forms an unstable U-236
nucleus. The U-236 nucleus then rapidly breaks apart into two smaller nuclei (in this case, Ba-141 and Kr-92) along
with several neutrons (usually two or three), and releases a very large amount of energy.
Among the products of Meitner, Hahn, and Strassman’s fission reaction were barium, krypton, lanthanum, and
cerium, all of which have nuclei that are more stable than uranium-235. Since then, hundreds of different
isotopes have been observed among the products of fissionable substances. A few of the many reactions that
occur for U-235, and a graph showing the distribution of its fission products and their yields, are shown in
Figure 21.15. Similar fission reactions have been observed with other uranium isotopes, as well as with a
variety of other isotopes such as those of plutonium.
FIGURE 21.15
(a) Nuclear fission of U-235 produces a range of fission products. (b) The larger fission products of
U-235 are typically one isotope with a mass number around 85–105, and another isotope with a mass number that
is about 50% larger, that is, about 130–150.
LINK TO LEARNING
View this link (http://openstax.org/l/16fission) to see a simulation of nuclear fission.
A tremendous amount of energy is produced by the fission of heavy elements. For instance, when one mole of
21.4 • Transmutation and Nuclear Energy
1045

U-235 undergoes fission, the products weigh about 0.2 grams less than the reactants; this “lost” mass is
converted into a very large amount of energy, about 1.8
1010 kJ per mole of U-235. Nuclear fission reactions
produce incredibly large amounts of energy compared to chemical reactions. The fission of 1 kilogram of
uranium-235, for example, produces about 2.5 million times as much energy as is produced by burning 1
kilogram of coal.
As described earlier, when undergoing fission U-235 produces two “medium-sized” nuclei, and two or three
neutrons. These neutrons may then cause the fission of other uranium-235 atoms, which in turn provide more
neutrons that can cause fission of even more nuclei, and so on. If this occurs, we have a nuclear chain reaction
(see Figure 21.16). On the other hand, if too many neutrons escape the bulk material without interacting with a
nucleus, then no chain reaction will occur.
FIGURE 21.16
The fission of a large nucleus, such as U-235, produces two or three neutrons, each of which is
capable of causing fission of another nucleus by the reactions shown. If this process continues, a nuclear chain
reaction occurs.
1046
21 • Nuclear Chemistry
Access for free at openstax.org

Material that can sustain a nuclear fission chain reaction is said to be fissile or fissionable. (Technically, fissile
material can undergo fission with neutrons of any energy, whereas fissionable material requires high-energy
neutrons.) Nuclear fission becomes self-sustaining when the number of neutrons produced by fission equals
or exceeds the number of neutrons absorbed by splitting nuclei plus the number that escape into the
surroundings. The amount of a fissionable material that will support a self-sustaining chain reaction is a
critical mass. An amount of fissionable material that cannot sustain a chain reaction is a subcritical mass. An
amount of material in which there is an increasing rate of fission is known as a supercritical mass. The
critical mass depends on the type of material: its purity, the temperature, the shape of the sample, and how the
neutron reactions are controlled (Figure 21.17).
FIGURE 21.17
(a) In a subcritical mass, the fissile material is too small and allows too many neutrons to escape
the material, so a chain reaction does not occur. (b) In a critical mass, a large enough number of neutrons in the
fissile material induce fission to create a chain reaction.
An atomic bomb (Figure 21.18) contains several pounds of fissionable material,
or
a source of
neutrons, and an explosive device for compressing it quickly into a small volume. When fissionable material is
in small pieces, the proportion of neutrons that escape through the relatively large surface area is great, and a
chain reaction does not take place. When the small pieces of fissionable material are brought together quickly
to form a body with a mass larger than the critical mass, the relative number of escaping neutrons decreases,
and a chain reaction and explosion result.
21.4 • Transmutation and Nuclear Energy
1047

FIGURE 21.18
(a) The nuclear fission bomb that destroyed Hiroshima on August 6, 1945, consisted of two
subcritical masses of U-235, where conventional explosives were used to fire one of the subcritical masses into the
other, creating the critical mass for the nuclear explosion. (b) The plutonium bomb that destroyed Nagasaki on
August 9, 1945, consisted of a hollow sphere of plutonium that was rapidly compressed by conventional explosives.
This led to a concentration of plutonium in the center that was greater than the critical mass necessary for the
nuclear explosion.
Fission Reactors
Chain reactions of fissionable materials can be controlled and sustained without an explosion in a nuclear
reactor (Figure 21.19). Any nuclear reactor that produces power via the fission of uranium or plutonium by
bombardment with neutrons must have at least five components: nuclear fuel consisting of fissionable
material, a nuclear moderator, reactor coolant, control rods, and a shield and containment system. We will
discuss these components in greater detail later in the section. The reactor works by separating the fissionable
nuclear material such that a critical mass cannot be formed, controlling both the flux and absorption of
neutrons to allow shutting down the fission reactions. In a nuclear reactor used for the production of
electricity, the energy released by fission reactions is trapped as thermal energy and used to boil water and
produce steam. The steam is used to turn a turbine, which powers a generator for the production of electricity.
1048
21 • Nuclear Chemistry
Access for free at openstax.org

FIGURE 21.19
(a) The Diablo Canyon Nuclear Power Plant near San Luis Obispo is the only nuclear power plant
currently in operation in California. The domes are the containment structures for the nuclear reactors, and the
brown building houses the turbine where electricity is generated. Ocean water is used for cooling. (b) The Diablo
C
