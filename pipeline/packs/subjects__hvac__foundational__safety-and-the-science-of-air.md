# Source pack — subjects/hvac/foundational/safety-and-the-science-of-air
Lesson title: Safety and the Science of Air
Level: foundational
Match confidence: 2.03

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.03 — APCollegePhysics-OP_js6ZFp7 § 23.8 Electrical Safety: Systems and Devices

Learning Objectives
By the end of this section, you will be able to:
•
Explain how various modern safety features in electric circuits work, with an emphasis on how induction is employed.
The information presented in this section supports the following AP® learning objectives and science practices:
•
4.E.2.1 The student is able to construct an explanation of the function of a simple electromagnetic device in which an
induced emf is produced by a changing magnetic flux through an area defined by a current loop (i.e., a simple
microphone or generator) or of the effect on behavior of a device in which an induced emf is produced by a constant
magnetic field through a changing area. (S.P. 6.4)
Electricity has two hazards. A thermal hazard occurs when there is electrical overheating. A shock hazard occurs when electric
current passes through a person. Both hazards have already been discussed. Here we will concentrate on systems and devices
that prevent electrical hazards.
Figure 23.31 shows the schematic for a simple AC circuit with no safety features. This is not how power is distributed in practice.
Modern household and industrial wiring requires the three-wire system, shown schematically in Figure 23.32, which has
several safety features. First is the familiar circuit breaker (or fuse) to prevent thermal overload. Second, there is a protective
case around the appliance, such as a toaster or refrigerator. The case’s safety feature is that it prevents a person from touching
exposed wires and coming into electrical contact with the circuit, helping prevent shocks.
1046
Chapter 23 | Electromagnetic Induction, AC Circuits, and Electrical Technologies
This OpenStax book is available for free at http://cnx.org/content/col11844/1.14

Figure 23.31 Schematic of a simple AC circuit with a voltage source and a single appliance represented by the resistance R . There are no safety
features in this circuit.
Figure 23.32 The three-wire system connects the neutral wire to the earth at the voltage source and user location, forcing it to be at zero volts and
supplying an alternative return path for the current through the earth. Also grounded to zero volts is the case of the appliance. A circuit breaker or fuse
protects against thermal overload and is in series on the active (live/hot) wire. Note that wire insulation colors vary with region and it is essential to
check locally to determine which color codes are in use (and even if they were followed in the particular installation).
There are three connections to earth or ground (hereafter referred to as “earth/ground”) shown in Figure 23.32. Recall that an
earth/ground connection is a low-resistance path directly to the earth. The two earth/ground connections on the neutral wire force
it to be at zero volts relative to the earth, giving the wire its name. This wire is therefore safe to touch even if its insulation, usually
white, is missing. The neutral wire is the return path for the current to follow to complete the circuit. Furthermore, the two earth/
ground connections supply an alternative path through the earth, a good conductor, to complete the circuit. The earth/ground
connection closest to the power source could be at the generating plant, while the other is at the user’s location. The third earth/
ground is to the case of the appliance, through the green earth/ground wire, forcing the case, too, to be at zero volts. The live or
hot wire (hereafter referred to as “live/hot”) supplies voltage and current to operate the appliance. Figure 23.33 shows a more
pictorial version of how the three-wire system is connected through a three-prong plug to an appliance.
Figure 23.33 The standard three-prong plug can only be inserted in one way, to assure proper function of the three-wire system.
Chapter 23 | Electromagnetic Induction, AC Circuits, and Electrical Technologies
1047

A note on insulation color-coding: Insulating plastic is color-coded to identify live/hot, neutral and ground wires but these codes
vary around the world. Live/hot wires may be brown, red, black, blue or grey. Neutral wire may be blue, black or white. Since the
same color may be used for live/hot or neutral in different parts of the world, it is essential to determine the color code in your
region. The only exception is the earth/ground wire which is often green but may be yellow or just bare wire. Striped coatings are
sometimes used for the benefit of those who are colorblind.
The three-wire system replaced the older two-wire system, which lacks an earth/ground wire. Under ordinary circumstances,
insulation on the live/hot and neutral wires prevents the case from being directly in the circuit, so that the earth/ground wire may
seem like double protection. Grounding the case solves more than one problem, however. The simplest problem is worn
insulation on the live/hot wire that allows it to contact the case, as shown in Figure 23.34. Lacking an earth/ground connection
(some people cut the third prong off the plug because they only have outdated two hole receptacles), a severe shock is possible.
This is particularly dangerous in the kitchen, where a good connection to earth/ground is available through water on the floor or a
water faucet. With the earth/ground connection intact, the circuit breaker will trip, forcing repair of the appliance. Why are some
appliances still sold with two-prong plugs? These have nonconducting cases, such as power tools with impact resistant plastic
cases, and are called doubly insulated. Modern two-prong plugs can be inserted into the asymmetric standard outlet in only one
way, to ensure proper connection of live/hot and neutral wires.
Figure 23.34 Worn insulation allows the live/hot wire to come into direct contact with the metal case of this appliance. (a) The earth/ground connection
being broken, the person is severely shocked. The appliance may operate normally in this situation. (b) With a proper earth/ground, the circuit breaker
trips, forcing repair of the appliance.
Electromagnetic induction causes a more subtle problem that is solved by grounding the case. The AC current in appliances can
induce an emf on the case. If grounded, the case voltage is kept near zero, but if the case is not grounded, a shock can occur as
pictured in Figure 23.35. Current driven by the induced case emf is called a leakage current, although current does not
1048
Chapter 23 | Electromagnetic Induction, AC Circuits, and Electrical Technologies
This OpenStax book is available for free at http://cnx.org/content/col11844/1.14

necessarily pass from the resistor to the case.
Figure 23.35 AC currents can induce an emf on the case of an appliance. The voltage can be large enough to cause a shock. If the case is grounded,
the induced emf is kept near zero.
A ground fault interrupter (GFI) is a safety device found in updated kitchen and bathroom wiring that works based on
electromagnetic induction. GFIs compare the currents in the live/hot and neutral wires. When live/hot and neutral currents are not
equal, it is almost always because current in the neutral is less than in the live/hot wire. Then some of the current, again called a
leakage current, is returning to the voltage source by a path other than through the neutral wire. It is assumed that this path
presents a hazard, such as shown in Figure 23.36. GFIs are usually set to interrupt the circuit if the leakage current is greater
than 5 mA, the accepted maximum harmless shock. Even if the leakage current goes safely to earth/ground through an intact
earth/ground wire, the GFI will trip, forcing repair of the leakage.
Figure 23.36 A ground fault interrupter (GFI) compares the currents in the live/hot and neutral wires and will trip if their difference exceeds a safe
value. The leakage current here follows a hazardous path that could have been prevented by an intact earth/ground wire.
Figure 23.37 shows how a GFI works. If the currents in the live/hot and neutral wires are equal, then they induce equal and
opposite emfs in the coil. If not, then the circuit breaker will trip.
Chapter 23 | Electromagnetic Induction, AC Circuits, and Electrical Technologies
1049

Figure 23.37 A GFI compares currents by using both to induce an emf in the same coil. If the currents are equal, they will induce equal but opposite
emfs.
Another induction-based safety device is the isolation transformer, shown in Figure 23.38. Most isolation transformers have
equal input and output voltages. Their function is to put a large resistance between the original voltage source and the device
being operated. This prevents a complete circuit between them, even in the circumstance shown. There is a complete circuit
through the appliance. But there is not a complete circuit for current to flow through the person in the figure, who is touching only
one of the transformer’s output wires, and neither output wire is grounded. The appliance is isolated from the original voltage
source by the high resistance of the material between the transformer coils, hence the name isolation transformer. For current to
flow through the person, it must pass through the high-resistance material between the coils, through the wire, the person, and
back through the earth—a path with such a large resistance that the current is negligible.
Figure 23.38 An isolation transformer puts a large resistance between the original voltage source and the device, preventing a complete circuit
between them.
The basics of electrical safety presented here help prevent many electrical hazards. Electrical safety can be pursued to greater
depths. There are, for example, problems related to different earth/ground connections for appliances in close proximity. Many
other examples are found in hospitals. Microshock-sensitive patients, for instance, require special protection. For these people,
currents as low as 0.1 mA may cause ventricular fibrillation. The interested reader can use the material presented here as a
basis for further study.

## Match 2.02 — LibreTexts: 1.1: Safety Training and Orientation
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://geo.libretexts.org/Bookshelves/Soil_Science/Soils_Laboratory_Manual_(Moorberg_and_Crouse)/01%3A_Introduction_and_Review/01.1%3A_Safety_Training_and_Orientation

1.1: Safety Training and Orientation
Learning Objectives
- Orient students on all safety aspects of the Soils Teaching Lab.
- Review the course syllabus and the structure of the Soils Laboratory Manual.
Proper safety precautions are essential for any laboratory or fieldwork in soil science, and the first step towards ensuring safety for all students and instructors is to review the potential hazards, safety equipment, and procedures for the Soils Teaching Lab. In addition, a thorough understanding of the structure of this laboratory manual, and instructor expectations is essential for student success.
Materials
- Course syllabus
Course Syllabus
You will receive a syllabus for AGRON 305 during lab. This syllabus will contain information for both the lecture and the lab components of the course. If updates are required, the most up-to-date syllabus version is available on K-State Online.
Lab Safety Training
- All students must exercise proper safety precautions in the laboratory. The safety guidelines below will be reviewed during the first lab period and as required during the semester.
- Food and drink are not allowed in the Agronomy 305 teaching laboratory.
- In the event of a fire alarm, the class will make an orderly exit of the laboratory, calmly proceed down the hall to the exit near the loading dock, and regroup on the loading dock parking lot.
- The emergency shower is on the east side of the laboratory near the bookshelf.
- Eyewashes are on the east side of the laboratory near the bookshelf.
- Sandals, flip-flops, and other open-toed shoes that do not fully cover the foot are not acceptable footwear for Agronomy 305 labs activities and field trips.
- Shorts, mini-skirts and other clothing that not fully covering the leg above the knee are not allowed for Agronomy 305 labs activities and field trips.
- Chemical spills should be immediately reported to the lab instructor.
- Broken glassware should be immediately reported to the lab instructor.
- Injuries during the laboratory activities should be immediately reported to the lab instructor.
- Transportation will be provided by K-State for all field trips.
- Some field trips may involve short hikes over uneven terrain. If you are unable to partake in such hikes, please notify the instructor at the beginning of the semester so that other arrangements can be made.
- Guests are not allow guests to join you during AGRON 305 laboratory sessions.

## Match 2.02 — LibreTexts: 1.4: Social Science Theories
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://socialsci.libretexts.org/Bookshelves/Psychology/Culture_and_Community/Dress_Appearance_and_Diversity_in_U.S._Society_(Reddy-Best_Elder_and_Hassall)/01%3A_Dress_Theories_and_Concepts/1.04%3A_Social_Science_Theories

MLO 4.1 Identify foundational concepts and theories related to identity and dress. [CLO 1]
MLO 4.2 Summarize the role of dress in identity development. [CLO 1]
MLO 4.3 Analyze identity and dress with social science theories and concepts. [CLO 2]
MLO 4.4 Analyze the norms that influence your own identities and dress. [CLO 4]
There are thousands of social science theories that relate to and help explain dress, appearance, and identity. This chapter describes a few of these.
Role Theory
A role
is a position a person occupies in a social relationship (Biddle & Thomas, 1966). Roles require and shape
behavior associated with the role, including dress
knowledge and values needed to perform the role
status.
For example, police officers have uniforms that must be worn according to regulations, as well as codes of behavior guiding their performance of this role. They need to learn laws and procedures to perform the role. If a police officer does not value and take pride in their role, they are not likely to perform well.
Many of our roles have less specific dress regulations. University students, for example, display some variety in their dress, but the norm on campus tends to be fairly casual and comfortable. Students usually dress recognizably different from faculty and administrators.
Status
: position in relation to other positions. These include
complementary positions
within a general role type, such as
family roles of mom, dad, child, grandma, parent
gender roles of man, woman, nonbinary person
positions on a continuum,
where someone ranks higher than another in terms of wealth, authority, or prestige. Examples include
owner, manager, assistant manager, salespersons in a store
upper, middle, and lower socioeconomic classes.
Role norms
are expected sets of behaviors for persons holding roles and status (Biddle & Thomas, 1966). Role norms regulate behaviors including dress, demeanor, and expressions of politeness. For example, we expect medical doctors to dress in specific attire in a hospital or at the office. If a doctor violates these expectations (working in shorts and a T-shirt, for instance), some patients may perceive them as less competent or serious. Other patients may find the violation of expectations to be amusing in this era of lax dress rules.
Purpose of Role Dress
learning a role
performing a role
identify others performing a role
shape reactions of others
assist in role change
Role dress helps an individual take on a role and be perceived by others as fitting that role. If a person looks like they have a role, other people are likely to assume that the person has the skills and knowledge to carry out the role. Solomon (1983) proposed that
people who are early in their careers often dress more in accordance with role dress expectations. Responses from coworkers and clients to the role-appropriate dress help the newcomer to feel more adept in and a part of the role while learning it.
as people become more experienced and recognized as competent, they are more likely to feel comfortable relaxing the dress rules or exploring more variety in role appearance.
Research supports these propositions for many, but not all, roles and individuals.
Some restrictions of role adoption include (Horn & Gurel, 1981)
Some restrictions of the ways individuals adopt rules are
Intrinsic:
An individual lacks resources to acquire role props and settings. Resources include money and time.
Example: Most of us do not have the wealth or connections to be wealthy jetsetters who attend exclusive parties with the rich and famous.
Moral:
An individual has morals or values that keep them from performing behaviors essential to a role.
Example: Due to misalignment with morals about selling sex for money, an individual does not want to dress like a prostitute and perform that role, even if it might be affordable to dress like a prostitute.
Organic:
One’s body does not fit the appearance requirements of the role.
Example: Many women do not fit beauty pageant “appearance requirements.”
Cultivation
and
socialization:
The individual lacks the knowledge and training to take on a role.
Example: A person might be able to don a lab coat and stethoscope, but most could not effectively carry off the role of a medical doctor when the time came to demonstrate expertise about medicine. In many US hospitals, physician interns are required to wear shorter, blazer-length white coats while licensed doctors wear knee-length white coats. The shorter coats indicate doctors-in-training who do not yet have full credentials to practice medicine (Coleman, 2000).
Identity
is defined to a great extent by the roles we play (Kaiser, 1990). In a sense, we have multiple identities because we all have many roles.
 Your dress may vary greatly or slightly in these roles, and it may reflect several of these role identities at one time.

Role Conflict
In carrying out some roles, individuals may experience conflicts. An
inter-role conflict
, or a conflict between two roles, may occur when an individual finds that two sets of role demands are not always compatible. Appearance can help solve role conflicts if the individual changes clothes for each role or wears the attire for the most demanding role.
For example, a parent who is a marketing director prefers to change clothes after arriving home to spend time with their infant, who throws food around and perhaps spits up on the parent’s clothes. But work stress and time limitations may require the individual to be a parent sometimes while wearing their work suit.
In contrast, an
intra-role conflict
is one that conflicts within a role due to changing expectations for that role across different groups in a society. In these situations, the role player may change clothes with differing audiences or limit the audiences with access to them.
An example of intra-role conflict might be a medical doctor who prefers to wear semicasual street clothes when seeing patients at the office. They do this to seem more approachable and easier to talk to. But ome older patients expect to see the doctor in a lab coat, so the doctor may put on a traditional white doctor’s coat when seeing older patients (Blumhagen, 1979).
Role embracement vs. role distance (Goffman, 1959)
An individual who takes on a role and learns to embrace it as part of identity is more likely to accept role-appropriate clothing than an individual who has a role but feels distanced from it or from societal definitions of the roles.
Conformity
Conformity
is a change in an individual’s behavior or attitude to achieve consistency with real or imagined group norms (Kaiser, 1990).
Watch this short video to demonstrate the power of cultural norms
Dress is an outward sign of conformity. Conformity
faciliatates a sense of identification, belonging, definition of self, role embracement
supports safety or comfort in group acceptance
fosters group solidarity, peer bonding; conformity through dress defines group boundaries by identifying who is in a group and who is not
indicates similarity, which is conducive to attraction
emphasizes social inclusion vs. social uniqueness.
Conformity has its negative outcomes. It can be boring and monotonous. Too much required conformity can stifle creativity. Some people are more prone to conformity through dress, while others are more interested in differentiating themselves from others. Some basic personality characteristics may incline individuals to be (Storm, 1987)
Check out this object video from ISU’s Textiles and Clothing Museum Collection. The video features a 1930s Girl Scout uniform with patches on the sleeve demonstrating the wearer’s various achievements in the program.
Uniforms
indicate the prestige level of the wearer
symbolize skill level attained by the wearer
facilitate efficiency and organizational control
suppress the expression of individuality and idiosyncrasy
encourage group behavior and thinking rather than focus on the self.
Uniformity more likely for role dress when the role requires special expertise and extensive training (i.e., hospital surgeons)
involves safety or security control (i.e., armed forces, police)
requires dress that protects the body or facilitates task performance (i.e., fire fighters)
benefits from group or team solidarity and identification (i.e., players on sports teams)
establishes brand or organization image (i.e., McDonald’s servers, Target employees)
enforces identity control (i.e., prisoners).
In coercive total institutions such as prisons, uniforms are used to (Goffman, 1961)
strip personal identity to force an inmate to become part of the system
help (i.e., force) the inmates to leave their independent lives outside.
Symbolic Interactionism—Public, Intimate, and Secret Self
According to Eicher (1981), there are three ways to think about the self: the public, intimate, and secret selves.
The
public self
is the part of a person in front of others in public, including those outside of the friend or family network. Therefore, the public self is usually a part of the self that one is comfortable sharing in a broader sense. For example, some people are comfortable sharing their occupations. That is, if an individual works as a public transportation bus driver, they might wear their uniform to the grocery store after work without feeling uncomfortable sharing this part of who they are. However, if someone has a stigmatized occupation, such as a sex worker, they may conceal this from their public self-presentation (
Oselin, 2018
).
The
intimate self
is a part of the self that individuals share only with those close to them, such as friends or family. For example, an individual might be more relaxed after work and wear casual or pajama-style garments around the house in front of their family members.
Finally,
secret self
refers to aspects of the self that one does not share with others. For example, one transwoman describes how she would sometimes dress in female-gendered garments without letting others know (
Coates, 2016
). Trans people experience significant discrimination (
National Center for
Transgender Equality
, 2022
)
; therefore, the transition and coming-out process for trans people is complex and may include a variety of experiences, such as experimenting in the secret-self space with different clothing styles.
According to
symbolic interaction theory
, individuals negotiate their appearances (and public and intimate selves) in social interactions (Goffman, 1959). In this theory, the
program
is a term that refers to your response to your own appearance. In the process of the program, you evaluate your own appearance based on how you look in the mirror and/or how you think others might perceive you. The concept of the
generalized other
is what you expect others to think of a particular identity. For example, if you are a librarian, you might wear a cardigan and glasses, as these are sometimes stereotypes associated with librarians or how individuals might assume librarians dress. In symbolic interaction theory, the
review
is also a part of identity negotiations in symbolic interaction theory. The review is others’ evaluation of one’s appearance. People can give both verbal and nonverbal reviews. Verbal examples include “Wow, I love that shirt” or “That makes you look terrible.” Nonverbal reviews include, for example, a person holding their purse closer to their chest as they walk by you; Black men frequently report this experience (
Lowe, 2000
).
Focused Example: Prison Uniforms
The Stanford Prison Experiment is a famous study that was conducted at Stanford University in the 1970s. Watch this short film and pay attention to how dress was used to strip inmates of their identities and to enable the guards to enact control.
Step Two: Submit your complete assignment on Canvas.
Format your document.
Remember to check the submission against the rubric.
References
Biddle, B. J., & Thomas, E. J. (1966).
Role theory: Concepts and research
. New York: Wiley.
Blumha
