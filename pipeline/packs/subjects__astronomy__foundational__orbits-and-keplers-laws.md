# Source pack — subjects/astronomy/foundational/orbits-and-keplers-laws
Lesson title: Orbits and Kepler's Laws
Level: foundational
Match confidence: 2.42

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.42 — LibreTexts: 13.2: Kepler's Laws
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Courses/Merrimack_College/Conservation_Laws_Newton's_Laws_and_Kinematics_version_2.0/13%3A_Application_-_Orbits_and_Kepler's_Laws/13.02%3A_Kepler's_Laws

13.2: Kepler's Laws
Kepler's Laws
The first great success of Newton’s theory was to account for the results that Johannes Kepler had extracted from astronomical data on the motion of the planets around the sun. Kepler had managed to find a number of regularities in a mountain of data (most of which were observations by his mentor, the Danish astronomer Tycho Brahe), and expressed them in a succinct way in mathematical form. These results have come to be known as Kepler’s laws , and they are as follows:
- The planets move around the sun in elliptical orbits, with the sun at one focus of the ellipse
- (Law of areas) A line that connects the planet to the sun (the planet’s position vector) sweeps equal areas in equal times.
- The square of the orbital period of any planet is proportional to the cube of the semimajor axis of its orbit (the same proportionality constant holds for all the planets).
I have discussed the first “law” at length in the previous section, and also pointed out that the math necessary to prove it is far from trivial. The second law, on the other hand, while it sounds complicated, turns out to be a straightforward consequence of the conservation of angular momentum. To see what it means, consider Figure \(\PageIndex{7}\).
Figure \(\PageIndex{7}\): Illustrating Kepler’s law of areas. The two gray “curved triangles” have the same area, so the particle must take the same time to go from A to A\(^{\prime}\) as it does to go from B to B\(^{\prime}\).
Suppose that, at some time \(t_A\), the particle is at point A, and a time \(\Delta t\) later it has moved to A\(^{\prime}\). The area “swept” by its position vector is shown in grey in the figure, and Kepler’s second law states that it must be the same, for the same time interval, at any point in the trajectory; so, for instance, if the particle starts out at B instead, then in the same time interval \(\Delta t\) it will move to a point B\(^{\prime}\) such that the area of the “curved triangle” OBB\(^{\prime}\) equals the area of OAA\(^{\prime}\).
Qualitatively, this means that the particle needs to move more slowly when it is farther from the center of attraction, and faster when it is closer. Quantitatively, this actually just means that its angular momentum is constant! To see this, note that the straight distance from A to A\(^{\prime}\) is the displacement vector \(\Delta \vec{r}_A\), which, for a sufficiently short interval \(\Delta t\), will be approximately equal to \(\vec{v}_A \Delta t\). Again, for small \(\Delta t\), the area of the curved triangle will be approximately the same as that of the straight triangle OAA\(^{\prime}\). It is a well-known result in trigonometry that the area of a triangle is equal to 1/2 the product of the lengths of any two of its sides times the sine of the angle they make. So, if the two triangles in the figures have the same areas, we must have
\[ \left|\vec{r}_{A}\right|\left|\vec{v}_{A}\right| \Delta t \sin \theta_{A}=\left|\vec{r}_{B}\right|\left|\vec{v}_{B}\right| \Delta t \sin \theta_{B} \label{eq:10.17} \]
and we recognize here the condition \(\left|\vec{L}_{\boldsymbol{A}}\right|=\left|\vec{L}_{B}\right|\), which is to say, conservation of angular momentum. (Once the result is established for infinitesimally small \(\Delta t\), we can establish it for finite-size areas by using integral calculus, which is to say, in essence, by breaking up large triangles into sums of many small ones.)
As for Kepler’s third result, it is easy to establish for a circular orbit, and definitely not easy for an elliptical one. Let us call \(T\) the orbital period, that is, the time it takes for the less massive object to go around the orbit once. For a circular orbit, the angular velocity \(\omega\) can be written in terms of \(T\) as \(\omega = 2\pi / T\), and hence the regular speed \(v = R\omega = 2\pi R/T\). Substituting this in Equation (\ref{eq:10.11}), we get \(GM/R^2 = 4\pi^{2}R/T^{2}\), which can be simplified further to read
\[ T^{2}=\frac{4 \pi^{2}}{G M} R^{3} \label{eq:10.18} .\]
Again, this turns out to work for an elliptical orbit if we replace \(R\) by \(a\).
Note that the proportionality constant in Equation (\ref{eq:10.18}) depends only on the mass of the central body. For the solar system, that would be the sun, of course, and then the formula would apply to any planet, asteroid, or comet, with the same proportionality constant. This gives you a quick way to calculate the orbital period of anything orbiting the sun, if you know its distance (or vice-versa), based on the fact that you know what these quantities are for the Earth.
More generally, suppose you have two planets, 1 and 2, both orbiting the same star, at distances \(R_1\) and \(R_2\), respectively. Then their orbital periods \(T_1\) and \(T_2\) must satisfy \(T_{1}^{2}=\left(4 \pi^{2} / G M\right) R_{1}^{3}\) and \( T_{2}^{2}=\left(4 \pi^{2} / G M\right) R_{2}^{3} \). Divide one equation by the other, and the proportionality constant cancels, so you get
\[ \left(\frac{T_{2}}{T_{1}}\right)^{2}=\left(\frac{R_{2}}{R_{1}}\right)^{3} \label{eq:10.19} .\]
From this, some simple manipulation gives you
\[ T_{2}=T_{1}\left(\frac{R_{2}}{R_{1}}\right)^{3 / 2} \label{eq:10.20} .\]
Note you can express \(R_1\) and \(R_2\) in any units you like, as long as you use the same units for both, and similarly \(T_1\) and \(T_2\). For instance, if you use the Earth as your reference “planet 1,” then you know that \(T_1\) = 1 (in years), and \(R_1\) = 1, in AU (an AU, or “astronomical unit,” is the distance from the Earth to the sun). A hypothetical planet at a distance of 4 AU from the sun should then have an orbital period of 8 Earth-years, since \(4^{3 / 2}=\sqrt{4^{3}}=\sqrt{64}=8\).
A formula just like (\ref{eq:10.18}), but with a different proportionality constant, would apply to the satellites of any given planet; for instance, the myriad of artificial satellites that orbit the Earth. Again, you could introduce a “reference satellite” labeled 1, with known period and distance to the Earth (the moon, for instance?), and derive again the result (\ref{eq:10.20}), which would allow you to get the period of any other satellite, if you knew how its distance to the earth compares to the moon’s (or, conversely, the distance at which you would need to place it in order to get a desired orbital period).
For instance, suppose I want to place a satellite on a “geosynchronous” orbit, meaning that it takes 1 day for it to orbit the Earth. I know the moon takes 29 days, so I can write Equation (\ref{eq:10.20}) as \(1 = 29(R_2/R_1)^{3/2}\), or, solving it, \(R_2/R_1 = (1/29)^{2/3} = 0.106\), meaning the satellite would have to be approximately 1/10 of the Earth-moon distance from (the center of) the Earth.
In hindsight, it is somewhat remarkable that Kepler’s laws are as accurate, for the solar system, as they turned out to be, since they can only be mathematically derived from Newton’s theory by making a number of simplifying approximations: that the sun does not move, that the gravitational force of the other planets has no effect on each planet’s orbit, and that the planets (and the sun) are perfect spheres, for instance. The first two of these approximations work as well as they do because the sun is so massive; the third one works because the sizes of all the objects involved (including the sun) are much smaller than the corresponding orbits. Nevertheless, Newton’s work made it clear that Kepler’s laws could only be approximately valid, and scientists soon set to work on developing ways to calculate the corrections necessary to deal with, for instance, the trajectories of comets or the orbit of the moon.
Of the main approximations I have listed above, the easiest one to get rid of (mathematically) is the first one, namely, that the sun does not move. Instead, what one finds is that, as long as the sun and the planet are still treated as an isolated system, they will both revolve around the system’s center of mass. Of course, the sun’s motion (a slight “wobble”) is very small, but not completely negligible. You can even see it in the simulation I mentioned earlier, at
phet.colorado.edu/en/simulation/gravity-and-orbits.
What is much harder to deal with, mathematically, is the fact that none of the planets in the solar system actually forms an isolated system with the sun, since all the planets are really pulling gravitationally on each other all the time. Particularly, Jupiter and Saturn have a non-negligible influence on each other’s orbits, and on the orbits of every other planet, which can only be perceived over centuries. Basically, the orbits still look like ellipses to a very good degree, but the ellipses rotate very, very slowly (so they fail to exactly close in on themselves). This effect, known as orbital precession, is most dramatic for Mercury, where the ellipse’s axes rotate by more than one degree per century.
Nevertheless, the Newtonian theory is so accurate, and the calculation techniques developed over the centuries so sophisticated, that by the early 20th century the precession of the orbits of all planets except Mercury had been calculated to near exact agreement with the best observational data. The unexplained discrepancy for Mercury amounted only to 43 seconds of arc per century, out of 5600 (an error of only 0.8%). It was eventually resolved by Einstein’s general theory of relativity.

## Match 2.42 — Physics-WEB_Sab7RrQ § 7.1 Kepler's Laws of Planetary Motion

Section Learning Objectives
By the end of this section, you will be able to do the following:
•
Explain Kepler’s three laws of planetary motion
•
Apply Kepler’s laws to calculate characteristics of orbits
Figure 7.1 Johannes Kepler (left) showed how the planets move, and Isaac Newton (right) discovered that
gravitational force caused them to move that way. ((left) unknown, Public Domain; (right) Sir Godfrey Kneller, Public
Domain)
Chapter Outline

Section Key Terms
aphelion
Copernican model
eccentricity
Kepler’s laws of planetary motion
perihelion
Ptolemaic model
Concepts Related to Kepler’s Laws of Planetary Motion
Examples of orbits abound. Hundreds of artificial satellites orbit Earth together with thousands of pieces of debris. The moon’s
orbit around Earth has intrigued humans from time immemorial. The orbits of planets, asteroids, meteors, and comets around
the sun are no less interesting. If we look farther, we see almost unimaginable numbers of stars, galaxies, and other celestial
objects orbiting one another and interacting through gravity.
All these motions are governed by gravitational force. The orbital motions of objects in our own solar system are simple enough
to describe with a few fairly simple laws. The orbits of planets and moons satisfy the following two conditions:
•
The mass of the orbiting object, m, is small compared to the mass of the object it orbits, M.
•
The system is isolated from other massive objects.
Based on the motion of the planets about the sun, Kepler devised a set of three classical laws, called Kepler’s laws of planetary
motion, that describe the orbits of all bodies satisfying these two conditions:
1.
The orbit of each planet around the sun is an ellipse with the sun at one focus.
2.
Each planet moves so that an imaginary line drawn from the sun to the planet sweeps out equal areas in equal times.
3.
The ratio of the squares of the periods of any two planets about the sun is equal to the ratio of the cubes of their average
distances from the sun.
These descriptive laws are named for the German astronomer Johannes Kepler (1571–1630). He devised them after careful study
(over some 20 years) of a large amount of meticulously recorded observations of planetary motion done by Tycho Brahe
(1546–1601). Such careful collection and detailed recording of methods and data are hallmarks of good science. Data constitute
the evidence from which new interpretations and meanings can be constructed. Let’s look closer at each of these laws.
Kepler’s First Law
The orbit of each planet about the sun is an ellipse with the sun at one focus, as shown in Figure 7.2. The planet’s closest
approach to the sun is called aphelion and its farthest distance from the sun is called perihelion.
230
Chapter 7 • Newton's Law of Gravitation
Access for free at openstax.org.

Figure 7.2 (a) An ellipse is a closed curve such that the sum of the distances from a point on the curve to the two foci (f1 and f2) is constant.
(b) For any closed orbit, m follows an elliptical path with M at one focus. (c) The aphelion (ra) is the closest distance between the planet and
the sun, while the perihelion (rp) is the farthest distance from the sun.
If you know the aphelion (ra) and perihelion (rp) distances, then you can calculate the semi-major axis (a) and semi-minor axis
(b).
Figure 7.3 You can draw an ellipse as shown by putting a pin at each focus, and then placing a loop of string around a pen and the pins and
tracing a line on the paper.
7.1 • Kepler's Laws of Planetary Motion
231

Kepler’s Second Law
Each planet moves so that an imaginary line drawn from the sun to the planet sweeps out equal areas in equal times, as shown
in Figure 7.4.
Figure 7.4 The shaded regions have equal areas. The time for m to go from A to B is the same as the time to go from C to D and from E to F.
The mass m moves fastest when it is closest to M. Kepler’s second law was originally devised for planets orbiting the sun, but it has broader
validity.
TIPS FOR SUCCESS
Note that while, for historical reasons, Kepler’s laws are stated for planets orbiting the sun, they are actually valid for all
bodies satisfying the two previously stated conditions.
Kepler’s Third Law
The ratio of the periods squared of any two planets around the sun is equal to the ratio of their average distances from the sun
cubed. In equation form, this is
where T is the period (time for one orbit) and r is the average distance (also called orbital radius). This equation is valid only for
comparing two small masses orbiting a single large mass. Most importantly, this is only a descriptive equation; it gives no
information about the cause of the equality.
LINKS TO PHYSICS
History: Ptolemy vs. Copernicus
Before the discoveries of Kepler, Copernicus, Galileo, Newton, and others, the solar system was thought to revolve around Earth
as shown in Figure 7.5 (a). This is called the Ptolemaic model, named for the Greek philosopher Ptolemy who lived in the second
century AD. The Ptolemaic model is characterized by a list of facts for the motions of planets, with no explanation of cause and
effect. There tended to be a different rule for each heavenly body and a general lack of simplicity.
Figure 7.5 (b) represents the modern or Copernican model. In this model, a small set of rules and a single underlying force
explain not only all planetary motion in the solar system, but also all other situations involving gravity. The breadth and
simplicity of the laws of physics are compelling.
232
Chapter 7 • Newton's Law of Gravitation
Access for free at openstax.org.

Figure 7.5 (a) The Ptolemaic model of the universe has Earth at the center with the moon, the planets, the sun, and the stars revolving
about it in complex circular paths. This geocentric (Earth-centered) model, which can be made progressively more accurate by adding more
circles, is purely descriptive, containing no hints about the causes of these motions. (b) The Copernican heliocentric (sun-centered) model
is a simpler and more accurate model.
Nicolaus Copernicus (1473–1543) first had the idea that the planets circle the sun, in about 1514. It took him almost 20 years to
work out the mathematical details for his model. He waited another 10 years or so to publish his work. It is thought he hesitated
because he was afraid people would make fun of his theory. Actually, the reaction of many people was more one of fear and
anger. Many people felt the Copernican model threatened their basic belief system. About 100 years later, the astronomer Galileo
was put under house arrest for providing evidence that planets, including Earth, orbited the sun. In all, it took almost 300 years
for everyone to admit that Copernicus had been right all along.
GRASP CHECK
Explain why Earth does actually appear to be the center of the solar system.
a.
Earth appears to be the center of the solar system because Earth is at the center of the universe, and everything revolves
around it in a circular orbit.
b.
Earth appears to be the center of the solar system because, in the reference frame of Earth, the sun, moon, and planets
all appear to move across the sky as if they were circling Earth.
c.
Earth appears to be at the center of the solar system because Earth is at the center of the solar system and all the
heavenly bodies revolve around it.
d.
Earth appears to be at the center of the solar system because Earth is located at one of the foci of the elliptical orbit of
the sun, moon, and other planets.
Virtual Physics
Acceleration
This simulation allows you to create your own solar system so that you can see how changing distances and masses
determines the orbits of planets. Click Help for instructions.
Click to view content (https://archive.cnx.org/specials/ee816dff-0b5f-4e6f-8250-f9fb9e39d716/my-solar-system/)
GRASP CHECK
When the central object is off center, how does the speed of the orbiting object vary?
a.
The orbiting object moves fastest when it is closest to the central object and slowest when it is farthest away.
b.
The orbiting object moves slowest when it is closest to the central object and fastest when it is farthest away.
7.1 • Kepler's Laws of Planetary Motion
233

Calculations Related to Kepler’s Laws of Planetary Motion
Kepler’s First Law
Refer back to Figure 7.2 (a). Notice which distances are constant. The foci are fixed, so distance
is a constant. The definition
of an ellipse states that the sum of the distances
is also constant. These two facts taken together mean that the
perimeter of triangle
must also be constant. Knowledge of these constants will help you determine positions and
distances of objects in a system that includes one object orbiting another.
Kepler’s Second Law
Refer back to Figure 7.4. The second law says that the segments have equal area and that it takes equal time to sweep through
each segment. That is, the time it takes to travel from A to B equals the time it takes to travel from C to D, and so forth. Velocity v
equals distance d divided by time t:
. Then,
, so distance divided by velocity is also a constant. For example, if we
know the average velocity of Earth on June 21 and December 21, we can compare the distance Earth travels on those days.
The degree of elongation of an elliptical orbit is called its eccentricity (e). Eccentricity is calculated by dividing the distance f
from the center of an ellipse to one of the foci by half the long axis a.
When
, the ellipse is a circle.
The area of an ellipse is given by
, where b is half the short axis. If you know the axes of Earth’s orbit and the area Earth
sweeps out in a given period of time, you can calculate the fraction of the year that has elapsed.
WORKED EXAMPLE
Kepler’s First Law
At its closest approach, a moon comes within 200,000 km of the planet it orbits. At that point, the moon is 300,000 km from the
other focus of its orbit, f2. The planet is focus f1 of the moon’s elliptical orbit. How far is the moon from the planet when it is
260,000 km from f2?
Strategy
Show and label the ellipse that is the orbit in your solution. Picture the triangle f1mf2 collapsed along the major axis and add up
the lengths of the three sides. Find the length of the unknown side of the triangle when the moon is 260,000 km from f2.
Solution
Perimeter of
Discussion
The perimeter of triangle f1mf2 must be constant because the distance between the foci does not change and Kepler’s first law
says the orbit is an ellipse. For any ellipse, the sum of the two sides of the triangle, which are f1m and mf2, is constant.
WORKED EXAMPLE
Kepler’s Second Law
Figure 7.6 shows the major and minor axes of an ellipse. The semi-major and semi-minor axes are half of these, respectively.
c.
The orbiting object moves with the same speed at every point on the circumference of the elliptical orbit.
d.
There is no relationship between the speed of the object and the location of the planet on the circumference of the
orbit.
7.1
234
Chapter 7 • Newton's Law of Gravitation
Access for free at openstax.org.

Figure 7.6
The major axis is the length of the ellipse, and the minor axis is the width of the ellipse. The semi-major axis is half the major
axis, and the semi-minor axis is half the minor axis.
Earth’s orbit is slightly elliptical, with a semi-major axis of 152 million km and a semi-minor axis of 147 million km. If Earth’s
period is 365.26 days, what area does an Earth-to-sun line sweep past in one day?
Strategy
Each day, Earth sweeps past an equal-sized area, so we divide the total area by the number of days in a year to find the area
swept past in one day. For total area use
. Calculate A, the area inside Earth’s orbit and divide by the number of days in
a year (i.e., its period).
Solution
The area swept out in one day is thus
.
Discussion
The answer is based on Kepler’s law, which states that a line from a planet to the sun sweeps out equal areas in equal times.
Kepler’s Third Law
Kepler’s third law states that the ratio of the squares of the periods of any two planets (T1, T2) is equal to the ratio of the cubes of
their average orbital distance from the sun (r1, r2). Mathematically, this is represented by
From this equation, it follows that the ratio r3/T2 is the same for all planets in the solar system. Later we will see how the work of
Newton leads to a value for this constant.
WORKED EXAMPLE
Kepler’s Third Law
Given that the moon orbits Earth each 27.3 days and that it is an average distance of
from the center of Earth,
calculate the period of an artificial satellite orbiting at an average altitude of 1,500 km above Earth’s surface.
Strategy
The period, or time for one orbit, is related to the radius of the orbit by Kepler’s third law, given in mathematical form by
7.2
7.1 • Kepler's Laws of Planetary Motion
235

. Let us use the subscript 1 for the moon and the subscript 2 for the satellite. We are asked to find T2. The given
information tells us that the orbital radius of the moon is
, and that the period of the moon is
. The height of the artificial satellite above Earth’s surface is given, so to get the distance r2 from the center of
Earth we must add the height to the radius of Earth (6380 km). This gives
. Now all
quantities are known, so T2 can be found.
Solution
To solve for T2, we cross-multiply and take the square root, yielding
Discussion
This is a reasonable period for a satellite in a fairly low orbit. It is interesting that any satellite at this altitude will complete one
orbit in the same amount of time.
Practice Problems
1. A planet with no axial tilt is located in another solar system. It circles its sun in a very elliptical orbit so that the temperature
varies greatly throughout the year. If the year there has 612 days and the inhabitants celebrate the coldest day on day 1 of their
calendar, when is the warmest day?
a.
Day 1
b.
Day 153
c.
Day 306
d.
Day 459
2. A geosynchronous Earth satellite is one that has an orbital period of precisely 1 day. Such orbits are useful for
communication and weather 

## Match 2.42 — LibreTexts: 7.2: Kepler's Laws
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Courses/University_of_California_Davis/UCD%3A_Classical_Mechanics/7%3A_Gravitation/7.2%3A_Kepler's_Laws

7.2: Kepler's Laws
More than 20 years before Newton was born, a fellow named Johannes Kepler took a shot at explaining the orbits of the planets. He too posited that physical laws might be able to explain the motions, but didn’t possess the tools (mathematical and physical) at Newton’s disposal decades later (though admittedly, Newton did develop these tools for himself). Instead, what Kepler had were the remarkably detailed and accurate measurements of planetary motions made by an astronomer named Tycho Brahe, which he used to look for patterns in the motions. Amazingly, he found that the planets indeed moved with mathematical precision, and published his three laws of celestial motion, all of which are in exact accordance with the law of universal gravitation. While reading about his three laws, consider what a monumental accomplishment this was. Tycho Brahe's data detailed the motions of the planets as he viewed them from Earth (which itself is orbiting the sun).
Kepler’s First Law
Kepler's First Law: The paths of bodies trapped in orbits form closed ellipses, with the gravitating body at one of the foci.
The many elements of an ellipse and how an orbit fits into the picture are expressed in Figure 7.2.1 .
 A common way is to write the distance between the two bodies as a function of the angle that the line between them makes with the major (longer) axis:
Figure 7.2.2 – Polar Coordinate Description of Ellipse
The formula for the ellipse in these coordinates is:
\[ r\left(\theta\right)=\dfrac{a\left(1-e^2\right)}{1-e\cos\theta} \]
[ Note: It is also possible to measure the angle in the opposite direction (with \(\theta=0\) corresponding to the perihelion), in which case the denominator is a sum rather than a difference. ]
Circles are special cases of ellipses (eccentricity equal to zero), so naturally circular orbits are possible. Notice that if we plug in \(e=0\) above, we get the simple orbit equation \(r=a\). With a great deal of mathematics (first surmounted by Isaac Newton), one can can show that in fact this is a natural consequence of the inverse-square force law we already stated for gravitation. While we won't go quite so far as to perform this derivation, below we will make a closer examination of features of the ellipse (which we have expressed as a purely mathematical object here) in terms of physical quantities.
Kepler’s Second Law
Kepler's Second Law: An orbiting planet sweeps out equal areas in equal times during its orbit.
Kepler noticed that the planet moved faster when it was near the perihelion than when it was near the aphelion, and through painstaking examination of the data determined that in fact the amount of area the orbit sweeps out in a given period of time is the same everywhere in the orbit.
Figure 7.2.3 – Equal Areas in Equal Times
Note that while the diagram compares areas swept out through the perihelion and aphelion, the result applies to any part of the orbit – if we wait the same period of time, the area swept out will be the same: \(A_1=A_2\). We will soon look into the physical aspects of gravitational orbits that lead to this result, but again one can't help but marvel at what it must have taken to derive this remarkable discovery from the raw data.
Kepler’s Third Law
Kepler's Third Law: For every object orbiting the same gravitational source, the ratio of the cube of the semi-major axis of the orbital ellipse and the square of the orbital period is the same constant: \(\dfrac{a^3}{T^2} = constant\).
While the first law makes a general statement about all gravitational orbits, and the second law relates two different parts of a specific gravitational orbit, the third law gives a way of comparing different orbits of the same gravitating object (in Kepler's case, this gravitating object was the sun). Of the three laws, this one has the greatest practical value, because it means that even without knowing anything about the law of gravitation, one can make a prediction about one orbiting body based on observations of another orbiting body, if both are going around the same gravitating object. We will see what this mysterious constant is in terms of physical details, but to solve certain problems, knowing the actual value of the constant isn't necessary.
Example \(\PageIndex{1}\)
An astronomer notices that an asteroid is positioned such that the Earth is directly between it and the Sun. It has a roughly circular orbit (like the Earth), which is in the same plane and in the same direction as the Earth. This asteroid is far away from the Earth – about 8 times farther from the Earth than the distance separating the Earth and the Sun. These are all approximations, but about how long will this astronomer have to wait see these three bodies reach these same positions?
- Solution
-
For a circular orbit, the semi-major axis of the orbit is simply the radius of the orbit, and since the asteroid and Earth are both orbiting the same gravitational source (the sun), then Kepler's third law results in the same constant for both:
\[ \dfrac{R_{earth}^3}{T_{earth}^2} = constant = \dfrac{R_{asteroid}^3}{T_{asteroid}^2} \;\;\; \Rightarrow \;\;\; T_{asteroid}=\left(\dfrac{R_{asteroid}}{R_{earth}}\right)^{\frac{3}{2}}T_{earth} \nonumber \]
The period of the Earth's orbit is exactly 1 year, and the asteroid is 9 times farther from the sun as the Earth, so the time it will take the asteroid to come back to the same spot will be:
\[ T_{asteroid} = 27years \nonumber \]
Of course, in 27 years, the Earth will also be in the spot where it started, so this is our answer.
Note that if the question asked for the time that elapses before the sun, Earth, and asteroid are all aligned again (which is different from reaching their original positions), the answer is different: When they realign for the first time, the Earth will have completed one orbit plus a bit more, while the asteroid will have completed a fraction of an orbit. Let's call the angle that the asteroid moves through in that first year \(\Delta \theta\). The Earth catches up to it after a full revolution, so the angle the Earth moves through is:
\[ \theta_{earth} = 2\pi + \Delta \theta \nonumber \]
The Earth is moving 27 times as fast as the asteroid, so in this equal time frame the Earth has moved through an angle 27 times as great as the asteroid, which gives:
\[ 2\pi + \Delta \theta = 27\Delta \theta \;\;\; \Rightarrow \;\;\; \Delta \theta = \dfrac{2 \pi}{26} \nonumber \]
That is, the asteroid completes 1/26th of its orbit at the point when the Earth catches up to it. The asteroid's orbit takes 27 years, so the first alignment occurs at:
\[\Delta T = \dfrac{27years}{26} = 1 year, 14 days \nonumber \]
A nice application of Kepler’s 3rd law involves man-made satellites that orbit the Earth. Telecommunications satellites we like to remain at a single position in the sky, so that we don’t have to turn our satellite dishes to find them – we just point them in the right direction and leave it. To accomplish this, we need two things: The satellite has to be directly above the equator, and it has to be orbiting the Earth in the same direction that the Earth is rotating, with an orbital period of exactly 1 day. This is known as a geostationary orbit. We can use Kepler’s 3rd law to determine how high off the Earth’s surface this satellite needs to be.
Reconciling Kepler’s Laws with Universal Gravitation
There are a couple of things we can say about the physics of gravitational orbits. First, gravity is a conservative force, which means that the mechanical energy of the system is conserved. We don't yet know how to describe the potential energy due to the gravitational force (hopefully it is clear that our old "\(U\left(y\right) = mgy + U_o\)" treatment is no longer adequate, since this results in a constant force), but we will look at this in Section 7.3 . The point is that the mechanical energy is a "constant of the motion," which we can use, for example, to describe the speed of the orbiting body as a function of the distance from the gravitational source.
Consider the Earth + sun system. The fraction of this system's mass that belongs to the Earth is about \(3 \times 10^{-6}\), which means that the distance from the center of the sun to the center of mass of the system is this fraction multiplied by the (on average) 92 million miles separating the two bodies. The distance from the center of the sun to the center of mass of the system is therefore:
\[ r_{cm} = \left(3 \times 10^{-6}\right)\left(92 \times 10^6\;miles\right) = 276 \; miles\]
The radius of the sun is about 432,000 miles, so the center of mass of the system lies less than one tenth of one percent of the sun's radius from the sun's center. It's therefore a pretty good approximation to treat the center of the sun as a fixed point. [ Note: Even the center of mass of the Jupiter + sun system barely lies outside the sun's radius, even though Jupiter is much more massive than Earth, and is much farther away. ] The gravitational force is directed at this fixed point, so it constitutes a central force. As we found in Section 6.2 , central forces have the property of conserving the angular momentum of the system (since they produce no torque). We therefore conclude that like the mechanical energy, the angular momentum of an orbiting body is also a constant of the motion, when the gravitating body is significantly more massive than the orbiting body. [ Note: The angular momentum of the whole system is always conserved, even when the two masses are comparable, but in that case we can't treat one object as orbiting another stationary one, which means we have to consider the motion of both objects, complicating our picture. ]
Kepler's First Law
Showing that elliptical orbits are a direct result of the law of universal gravitation is a mathematical exercise that is somewhat beyond the scope of this work. While this derivation could nevertheless be included here, the value of doing so is minimal, and will therefore be left for the reader to explore in an upper-division treatment of classical mechanics. Instead, we will look at only small – but very instructive – aspects of Kepler's first law.
Never mind that we have no reason to expect that orbits will be elliptical... Why would we even expect them to be closed ? That is, it certainly isn't clear that when the polar angle \(\theta\) changes by \(2\pi\), that the orbiting body's distance from the gravitating body will be the same. It turns out, however, that this element of gravitational orbits is not hard to demonstrate. Start by applying Newton's second law to the orbiting body on which a net force due to gravity is acting:
\[ m\dfrac{d\overrightarrow v}{dt} = -\dfrac{GMm}{r^2} \widehat r \]
We can rewrite this in terms of how the velocity changes with the angle \(\theta\) by using the chain rule:
\[ m\dfrac{d\overrightarrow v}{d\theta}\dfrac{d\theta}{dt} = -\dfrac{GMm}{r^2} \widehat r \]
The angular momentum of the orbiting body can be written in terms of its mass, its angular velocity \(\omega = \dfrac{d\theta}{dt}\), and its distance from the fixed point:
\[ L = mr^2\omega \]
This angular momentum is a constant of the motion (i.e. it is conserved throughout the orbit), so we find that the rate at which the velocity vector changes with respect to \(\theta\) is a vector with a constant magnitude:
\[ \dfrac{d\overrightarrow v}{d\theta} = -\dfrac{GMm}{L} \widehat r \]
We can write the position unit vector in terms of the angle relative to a cartesian coordinate system, as we did in Equation 1.6.11 :
\[ \dfrac{d\overrightarrow v}{d\theta} = -\dfrac{GMm}{L} \left( \cos \theta \; \widehat i \ + \sin \theta \; \widehat j \right) \]
Integrating over the angle gives the velocity vector as a function of \(\theta\) (and an undetermined constant of integration \(\overrightarrow v_o\)):
From this result we can conclude that the magnitude and direction of the velocity return to the same value every time \(\theta\) changes 
