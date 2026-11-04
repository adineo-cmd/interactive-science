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

## Match 2.02 — College_Success_-_WEB_uM60O3O § 11.6 Your Safety

Introduction
Student Survey
How do you feel about health and wellness? These questions will help you determine how the chapter
concepts relate to you right now. As we are introduced to new concepts and practices, it can be informative to
reflect on how your understanding changes over time. We’ll revisit these questions at the end of the chapter
to help you identify opportunities for improved health. Take this quick survey to figure it out, ranking
questions on a scale of 1–4, 1 meaning “least like me” and 4 meaning “most like me.”
1.
I eat enough fruits and vegetables every day.
2.
I get enough sleep.
3.
I have, for the most part, healthy relationships with friends and family.
4.
I feel like I know how to manage stress.
You can also take the Chapter 11 survey (https://openstax.org/l/collegesurvey11) anonymously online.
Figure 11.1 Movement, in all its forms, is an important element of health and wellness. Movement
contributes to balance, cardiovascular health, strength, and flexibility; it can also help clear your mind in the
midst of study and stress. (Credit: Steven Pisano / Flickr / Attribution 2.0 Generic (CC-BY 2.0))
11
Engaging in a Healthy Lifestyle

About this Chapter
This chapter explores the many ways your health is impacted by your lifestyle choices. The goal of this material
is to help you do the following:
- Describe actions you can take to improve your physical health.
- Identify ways to maintain and enhance your emotional health.
- Understand mental health risks and warning signs.
- Articulate reasons and ways to maintain healthy relationships.
- Outline steps you can take to be more safety conscious.
Recent headlines were buzzing with news about a 17-year-old boy who lost his eyesight because of a poor diet.
While the boy ate enough food and his weight was considered normal, when doctors investigated, they
discovered he didn’t eat enough nutrient-rich food. A self-described picky eater, the teen’s daily diet consisted
of sausage, deli ham, white bread, Pringles, and french fries. His food choices led to numerous nutritional
deficiencies of several essential vitamins and minerals, causing nutritional optic neuropathy.
[1]
Have you heard the saying “you are what you eat”? If so, likely a parent or someone who loves you said it
while coaxing you to eat your vegetables. Are we really what we eat, and what does this phrase actually mean?
While the example of the boy who lost his vision may be extreme, the food we eat does impact our physical
and mental health. What’s at the end of our fork can keep us healthy or eventually make us sick. Every 27 days,
our skin replaces itself and our body makes new cells from the food we eat.
[2] And according to Dr. Libby
Weaver, every three months we completely rebuild and replace our blood supply. What you eat becomes you.
It’s not only what you eat that impacts your health but also how much you exercise, how effectively you deal
"My freshman year of college, I started at a pretty big university. I had what some call “social anxiety”
and even cried before getting out the car on my first day. That year was a struggle for me, and I
constantly had to fight with myself to step out of my comfort zone in order to succeed. I knew that if I
made positive changes to my life then I would easily succeed in school. I joined a group of students who
were a support system for me during my first year of college. Together we studied together and even
worked out together. It helped me be more involved on my campus and less worried. Being connected
with other students has taught me a lot of ways to cope with common problems many students face.
"My first advice would be first and foremost, always make sure you are being kind to yourself. It’s not
advisable to work 40 hours a week and also try to be a full time student. You need to set up a realistic
home and school life so that way you are balanced with your assignments and other responsibilities. You
need to give your body and your brain time to rest so you can absorb as much as you want to without
restrictions. I found it useful to start working out to make sure that I’m dedicating the time I should be
to myself and not working myself until exhaustion. Little things like exercise, yoga and meditation can do
amazing things for your body as well as your mind. If you take care of your body, your body will take
care of you."
–Felicia Santiago, Delgado Community College
S T U D E N T  P R O F I L E
1
Harrison, Warburton, Lux, and Atan. Blindness caused by a junk food diet. Annals of Intern Med. September 3, 2019.
2
https://www.webmd.com/beauty/cosmetic-procedures-overview-skin#1
366
Chapter 11 Engaging in a Healthy Lifestyle
This OpenStax book is available for free at http://cnx.org/content/col30990/1.7

with stress, how well you sleep, your work habits, and even your relationships—these things all have an impact
on your well-being.
There are two primary reasons we become unhealthy. First, we do not deliver enough nutrients for our cells to
operate properly, and second, our cells are bombarded with too many toxins. Keeping it simple, good health is
proper nutrients in, toxins out. Toxins come from a host of sources—certain foods, the environment, stressful
relationships, smoking, vaping, and alcohol and drug use. And if we don’t sleep and exercise enough, toxins
can hang around long enough to cause us harm.
As a first-year college student you will make many choices without parental oversight, including the food you
eat and the way you take care of your body and brain. Some choices put you on a path to health, and other
choices can lead you down a path toward illness. There is a strong connection between success in college and
your ability to stay healthy.
Health is more than a strong body that doesn’t get sick. Health also includes your overall sense of well-being
(mental, emotional) and healthy relationships. Good health is about making positive choices in all of these
areas, and avoiding destructive choices. It’s about learning to be smart, to set boundaries, to watch out for
your safety, and to take care of the one body that will carry you through life.
While health and wellness are often interchanged, it is important to differentiate the two concepts.Health is a
state of physical, mental, and social well-being, while wellness is a process through which people become
aware of and make choices toward a healthy and fulfilling life.
11.1
Taking Care of Your Physical Health
Estimated completion time: 26 minutes.
Questions to consider:
•
What is healthy eating?
•
Why is it important to stay hydrated?
•
How important is exercise to a healthy body?
•
Are you getting enough sleep to be healthy?
•
What are toxins, and how can they affect your health?
You have one body. Treat it well so as to maximize its ability to serve you throughout your life. Often physical
health gets moved to the bottom of the priority list when we are busy. Taking care of your physical health
doesn’t mean six-pack abs or training for a marathon. It means honoring your physical needs so your body
can function properly, feeding your cells the nutrients that will keep your body working well your entire life,
and minimizing exposure to toxins to reduce your risk of disease.
Healthy Eating
While it’s not the only thing that contributes to great health, what you eat makes a huge difference. We have
37 trillion cells in our body. The only way they function optimally is with good nutrition. As a college student,
you will be surrounded by temptations to eat poorly or even to overeat. It’s now up to you to make wise
choices in the face of these temptations. Your dining hall is likely full of many healthy foods and just as many
unhealthy foods. You may grab food on the run while racing to class or order a pizza at midnight while
studying for a test. Lobby vending machines or a stash of snacks in your room should not turn into a
substitute for real meals. The downside of fast food and easy access treats is that many are loaded with sugar,
Chapter 11 Engaging in a Healthy Lifestyle
367

salt, or both.
The United States Department of Agriculture (USDA) updated their Healthy Plate Guidelines in 2011. MyPlate
illustrates five different food groups considered the building blocks for a healthy diet—vegetables, fruits,
protein, grains, and dairy.
Figure 11.2
Eating healthy is a journey shaped by many factors, including our state of life, situations,
preferences, access to food, culture, traditions, and the personal decisions we make over time. The USDA
recommends that vegetables and fruits make up the largest portions of your diet, and dairy the smallest
portion. All your food and beverage choices count. MyPlate offers ideas and tips to help you create a healthier
eating style that meets your individual needs and improves your health. (Credit: USDA / Public Domain)
It’s also important to know what is not a healthy plate. A healthy plate is low in refined carbohydrates (donuts,
pastries, pasta, cookies), low in sugar, and low in saturated fat (although we need healthy fats like avocado
and nuts). You can learn more at https://www.choosemyplate.gov/.
While the USDA’s MyPlate was revised to reflect some key findings at that time, nutritionists at Harvard felt it
didn’t offer the most complete picture when it comes to basic nutrition guidelines. They created The Healthy
Eating Plate, which is based on what they consider to be the best available science. Similar to MyPlate, half the
plate is vegetables and fruit. Aim for eight servings of veggies or fruits a day, more veggies than fruits. It’s
important to note that the Harvard version was created without the political pressure from food industry
lobbyists (for example, the dairy industry). Note that grains are further defined as whole grains, protein is now
healthy protein, and water is emphasized over dairy/milk. What other differences do you see?
This table (https://openstax.org/l/healthyeatingplate) provides more detail on how The Healthy Eating plate
compares to USDA’s MyPlate.
Healthy eating also includes choosing organic fruits and vegetables when possible. By choosing organic, you
help lower the amount of toxins your body encounters (since conventional fruits and vegetables are often
sprayed with pesticides). Organic foods may not be readily available on your campus or in your local grocery
store, so strive to choose the best options possible given availability and your budget. Many college and
universities are adding organic food as a result of student demand. If healthy eating is something you are
passionate about, consider organizing an effort to influence the dining options on your campus. When
shopping on your own, the Dirty Dozen list provided by the Environmental Working Group (EWG) is a good
guide of which produce is most important to eat organic, as these are the fruits and vegetables with the most
368
Chapter 11 Engaging in a Healthy Lifestyle
This OpenStax book is available for free at http://cnx.org/content/col30990/1.7

pesticide residue. The EWG also compiles a Clean 15 list (https://openstax.org/l/producepesticideguide) of the
vegetables and fruits with the least amount of pesticides.
Whole Foods vs. Processed Foods
Choose whole foods. Whole foods are any foods that have not been processed, packaged, or altered in any
way. Whole foods are an essential part of a healthy diet because they contain the vitamins and minerals our
bodies need.
Examples of whole foods include the following:
•
Vegetables: Carrots, broccoli, kale, avocados, cauliflower, spinach, peppers
•
Fruits: Apples, bananas, blueberries, strawberries, grapes, melons, peaches
•
Grains: Brown rice, oatmeal, barley, buckwheat, quinoa, millet
•
Beans: Black, pinto, kidney, black-eyed peas, chickpeas
Minimize non-whole foods. These are foods that have been processed, such as cookies, hot dogs, chips, pasta,
deli meat, and ice cream. Even seemingly healthy foods like yogurt, granola, and protein bars are processed
and should be checked for added sugar and other unhealthy ingredients.
The average American eats 62 percent of their daily calories from processed foods.
[3] In order for your body to
be as healthy as possible, it’s extremely important to include lots of whole foods in your diet.
"When you eat junk food you think junk thoughts."
— Michael Bernard Beckwith
How to Read a Food Label
The U.S. government requires food manufacturers to put a label on every processed food product. This is so
we, as consumers, know what we are putting into our bodies and can make good dietary choices. A quick
review of the label will provide a lot of important information about what you are eating, yet most people
don’t take the time to read the label. This is a big mistake.
Think of the front of the package as a marketing billboard. Don’t be fooled by the marketing. Every day
millions of dollars are spent to persuade us to eat foods that are not healthy for us. Through visuals (like the
strawberry on the bottle of dressing below) and words (like natural, healthy, or gluten free), the food industry
wants us to make assumptions about the nature of a food product without looking at the facts. For example,
many people eat protein bars thinking they are a healthy choice, but protein bars can have up to 30 grams of
sugar! Understanding the nutrition information and ingredients will help you make healthier choices. When
you take the time to read the labeled ingredients, you are no longer being marketed to—you are staring at the
facts.
3
Dr. Joel Furhman https://www.mensjournal.com/features/joel-fuhrman-the-doctor-is-out-there-20121107/
Chapter 11 Engaging in a Healthy Lifestyle
369

Figure 11.3
This label displays the key nutritional information about a common container of fruit salad.
Though fruit is generally healthy, be aware of the amount of calories and sugars, and particularly the serving
size to which those amounts are tied. Note that the US government has updated food label requirements and
this 

## Match 1.53 — World_History_Volume_2-WEB_LdwoslB § 15.3 Science and Technology for Today’s World

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Discuss the development of complex digital computers and their effects on human society
•
Analyze the effects of the internet and social media on society
•
Describe important medical developments of the last fifty years and current medical challenges
World War II brought about a massive technological transformation as countries like Germany and the United
States rapidly innovated to avoid destruction and defeat their enemies. In the decades after the war, there was
major progress in medical technology, the creation of new vaccines, and the elimination of deadly diseases. All
642
15 • The Contemporary World and Ongoing Challenges
Access for free at openstax.org

these achievements had profound effects on the way people lived, traveled, and worked. Underlying them were
major advancements in the field of information technologies, such as computers. Once the war was over, the
development of increasingly powerful computers ushered in a computer revolution as powerful as the
nineteenth century’s Industrial Revolution, and with it a digital age.
The Digital Computer Revolution
Many of the technological advancements of the 1940s and 1950s came in the form of increasingly powerful
analog computers, which analyze a continuous stream of information, much like that recorded on vinyl
records. Analog computers worked well for solving big mathematical problems, such as the calculations
related to electrical power delivery systems or the study of nuclear physics. However, one of their weaknesses
was that they were inefficient at managing large amounts of data. Digital computers, or those that translate
information into a complex series of ones and zeros, were far more capable of managing bulk data. Just a few
years after the war, digital computing received a huge boost with the invention of the transistor, a device with
far more computing potential than its predecessor the vacuum tube. Scientists could amplify this enlarged
computing capacity even further by wiring multiple transistors together in increasingly complex ways.
The use of multiple transistors for computing purposes was an important step, but it had obvious drawbacks.
Making machines capable of processing a great deal of information required connecting many transistors,
which took up a great deal of space. Then, in the late 1950s, inventors in the United States developed an
innovative solution. Using silicon, they could integrate transistors and capacitors in a way that clumsy wiring
could not accomplish. The silicon-based integrated circuit freed computer technology from size constraints
and opened the door to additional advancements in computing power.
Even so, digital computers remained large, expensive, and complicated to operate, and their use was largely
confined to universities and the military. Only gradually over the 1970s did computing technology become
more widely available, largely thanks to mass-produced general-purpose computers, sometimes called
minicomputers, designed by IBM and the Digital Equipment Company. These served a variety of government
and private purposes, such as calculating the Census, managing the flow of tax monies, and processing
calculations related to creditworthiness (Figure 15.15). But despite being somewhat cheaper, minicomputers
remained out of reach for average users.
15.3 • Science and Technology for Today’s World
643

FIGURE 15.15 Computers, 1950s. In the 1950s, computers required complex data management systems to
operate. The U.S. Census Bureau used this device to transfer data from paper questionnaires to microfilm to allow
for rapid processing by its computers. (credit: modification of work “Woman inspecting FOSDIC film” by U. S. Census
Bureau/Wikimedia Commons, Public Domain)
The journey from minicomputers to personal computers began with the Intel Corporation, established in 1968
in Mountain View, California, in a region now commonly called Silicon Valley. During the 1970s, Intel
developed a line of integrated circuits that were not only more powerful than their predecessors but also
programmable. These became known as microprocessors, and they revolutionized computing by holding all of
a computer’s processing power in a single integrated circuit. In 1975, a company in New Mexico released the
first marketed personal computer, the Altair 8800. This used an Intel microprocessor and was promoted to
computer hobbyists eager to wield a level of computing power once available to only a few. The Altair’s
popularity inspired competing products like the Apple, the Commodore, and the Tandy Radio Shack computer
(Figure 15.16). These personal computer systems were far easier to use and appealed to a much larger market
than just hobbyists.
644
15 • The Contemporary World and Ongoing Challenges
Access for free at openstax.org

FIGURE 15.16 Personal Computer, 1980s. The Tandy Color Computer 3 shown here, released in 1986 and
nicknamed the CoCo 3, was one of many personal computers released in the 1980s that average consumers were
able to buy for their homes. (credit: “CoCo3system” by Unknown/Wikimedia Commons, Public Domain)
By 1982, there were 5.5 million personal computers in the United States, and over the next decade, their
number and computing power rose exponentially. Computers proliferated in government offices, private firms,
and family homes. Then, in 1984, Apple introduced the world to the Macintosh computer, which not only used
a mouse but also replaced the standard code-based user interface with one based on graphics and icons.
Recognizing the user-friendly possibilities of this graphic interface, competitors followed suit. Before long, the
design popularized by Apple had become the norm.
By the end of the 1980s, not only had personal computers become common, but the microprocessor itself
could be found everywhere. Microprocessors were incorporated into automobiles, cash registers, televisions,
and household appliances and made possible a variety of other electronic devices like videocassette recorders
and video game systems (Figure 15.17). Computer systems were created to store and manage financial,
educational, and health-care information. In one form or another and whether they realized it or not, by the
1990s, almost everyone in the developed world was interacting with computers.
FIGURE 15.17 The Atari Video Computer System, 1977. Released in 1977, the Atari Video Computer System could
be connected to almost any television, allowing users to play video games at home. The software was stored on
small plastic cartridges that were plugged directly into the machine. (credit: “Atari 2600 mit Joystick” by
“joho345”/Wikimedia Commons, Public Domain)
Modems were hardly new in the 1990s, but they became much faster and more common with the rise of the
internet. The origins of the internet date back to the 1960s and the efforts by government researchers in the
15.3 • Science and Technology for Today’s World
645

United States to use computers to share information. These developments were especially important for the
U.S. Department of Defense during the Cold War and resulted in the emergence of the Advanced Research
Projects Agency Network (ARPANET). In creating ARPANET, researchers developed many of the technologies
that over the next few decades formed the basis for the internet we know today.
The Internet and Social Media
The process of globalization has been accelerated by the rise of the internet and the various social media
platforms like Instagram, Facebook, and Twitter that exist there. Many people were introduced to the potential
of computer networks for sharing information and creating small social networks in the 1980s, when
individual users became able to connect their computers to others by using modems and telephone networks.
This connectivity gave rise to regional bulletin board systems (BBSs), in which one person’s computer served
as a host for those of other users (Figure 15.18). BBSs functioned much like websites today. Though they ran
far more slowly and had limited capabilities, they allowed users to share computer files like games and images,
post messages for others to read, participate in virtual discussions and debates, and play text-based online
games. BBSs used phone networks to communicate, and long-distance calls were then expensive, so their
users tended to be local.
FIGURE 15.18 A Bulletin Board System, 1980s. Bulletin board systems like this one relied on colorful text and
simple graphics to make them appealing. They appear very limited compared to today’s websites, but in the 1980s,
they were revolutionary and opened new possibilities for the future of communication. (credit: “Screenshot of
OpenTG’s Group Permissions Editor” by Chris Tusa/Wikimedia Commons, Public Domain)
Throughout the 1980s, BBSs continued to be popular with computer hobbyists and those intrigued by the idea
of unique virtual communities, while networking technology improved steadily behind the scenes. The United
States, Europe, and other developed countries were busy adopting a uniform protocol system that would allow
computers around the world to easily communicate with others. Once this protocol had been established, the
commercial internet as we currently understand it was born.
As early as 1987, about thirty thousand hosts resided on the burgeoning internet. Soon telecommunications
and software companies began to exploit this new network by creating online service providers like America
Online (AOL) to act as gateways to the internet. Initially, they used standard phone lines and modems to
connect, much as BBSs had. But as the volume of information on the internet increased exponentially, service
providers turned to more expensive broadband connections that used cable television lines and even
dedicated lines to connect. During the 1990s, the first websites, the first internet search engines, and the first
commercial internet platforms were established.
646
15 • The Contemporary World and Ongoing Challenges
Access for free at openstax.org

By 2005, more than one billion people worldwide were using the internet regularly. They were able to shop
online, make phone calls around the world, and even create their own websites with almost no technical
training. Never before had the world been so connected. In 2004, Facebook was launched. Originally a
networking tool for Harvard students, it quickly expanded globally to become a giant in the new world of social
media. By 2010, nearly half a billion Facebook users around the world were sharing images and messages,
creating communities, and linking to news stories. By 2022, the number of Facebook users had reached nearly
three billion.
Before 2007, almost all internet users gained access to the network via a personal computer, either at home or
at work. That year, however, Apple Inc. released the first iPhone, a powerful cell phone but also a portable
computer capable of performing all the tasks it once required a desktop computer to do. Even more
revolutionary, it connected to the internet wirelessly through cell-phone infrastructure. While the iPhone was
not the first phone to connect to the internet, its revolutionary touch-screen interface was far superior to
earlier systems. Within just a few years, other cell-phone manufacturers were imitating its design and putting
smartphones, and thus internet access, in the pockets of users around the world.
Smartphones have transformed life in developing countries, where they have helped bypass some of the
traditional stages of infrastructure creation. In Africa, for example, people living where no landlines existed
can now communicate with others using cell phones. Small farmers and traders can use cell phones for
banking and to connect with potential suppliers and customers. In communities without libraries,
schoolchildren can access the internet’s resources to study.
Smartphones have also democratized the internet, serving as powerful tools for organizing and promoting
political change. The large pro-democracy movement in Cairo’s Tahrir Square captured the world’s attention in
2011, for example. But it began with twenty-five-year-old activist Asmaa Mahfouz’s YouTube video of January
18, 2011, in which she spoke directly to the camera and urged young Egyptians to protest at the square as part
of the larger Arab Spring, a call for government reform and democracy that echoed across in the Arab world.
The Arab Spring was touched off in December 2010 when Muhammad Bouazizi, a young college graduate, set
himself on fire in Tunisia after government officials there tried to interfere with the fruit cart that was his only
source of income. Other young Tunisians took to the streets in protest, and demonstrations began again in
January 2011. As people died in confrontations with government forces, President Zine al-Abidine Ben Ali fled
the country, and Tunisia’s prime minister resigned shortly thereafter.
The Tunisian protests led to similar demonstrations in Egypt. On January 17, 2011, an Egyptian set himself on
fire near the nation’s Parliament to protest the lack of economic opportunities. Crowds of mostly young people
responded with massive demonstrations that lasted weeks (Figure 15.19). These demonstrations were fueled
by and broadcast to the world through text messages, photos, tweets, videos, and Facebook posts sent by
thousands of mobile phones, including that of Mahfouz. The devices amplified the calls for democracy and
showed the world the Egyptian government’s use of violence to try to silence the protestors. Egyptian president
Hosni Mubarak resigned on February 11, 2011. He was later convicted for his role in ordering government
forces to harm and kill protestors.
15.3 • Science and Technology for Today’s World
647

FIGURE 15.19 The Egyptian Revolution. (a) Internet-connected cell phones using social media applications like
Facebook were a common site at the large 2011 protests at Ta
