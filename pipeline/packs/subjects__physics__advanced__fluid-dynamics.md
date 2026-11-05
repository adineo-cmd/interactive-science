# Source pack — subjects/physics/advanced/fluid-dynamics
Lesson title: Fluid Dynamics
Level: advanced
Match confidence: 3.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.05 — UniversityPhysicsVol1-WEB § 14.5 Fluid Dynamics

Learning Objectives
By the end of this section, you will be able to:
•
Describe the characteristics of flow
•
Calculate flow rate
•
Describe the relationship between flow rate and velocity
•
Explain the consequences of the equation of continuity to the conservation of mass
The first part of this chapter dealt with fluid statics, the study of fluids at rest. The rest of this chapter deals
with fluid dynamics, the study of fluids in motion. Even the most basic forms of fluid motion can be quite
complex. For this reason, we limit our investigation to ideal fluids in many of the examples. An ideal fluid is a
fluid with negligible viscosity. Viscosity is a measure of the internal friction in a fluid; we examine it in more
detail in Viscosity and Turbulence. In a few examples, we examine an incompressible fluid—one for which an
extremely large force is required to change the volume—since the density in an incompressible fluid is
constant throughout.
Characteristics of Flow
Velocity vectors are often used to illustrate fluid motion in applications like meteorology. For example,
wind—the fluid motion of air in the atmosphere—can be represented by vectors indicating the speed and
direction of the wind at any given point on a map. Figure 14.24 shows velocity vectors describing the winds
during Hurricane Arthur in 2014.
14.5 • Fluid Dynamics
691

Figure 14.24
The velocity vectors show the flow of wind in Hurricane Arthur. Notice the circulation of the wind around the eye of the
hurricane. Wind speeds are highest near the eye. The colors represent the relative vorticity, a measure of turning or spinning of the air.
(credit: modification of work by Joseph Trout, Stockton University)
Another method for representing fluid motion is a streamline. A streamline represents the path of a small
volume of fluid as it flows. The velocity is always tangential to the streamline. The diagrams in Figure 14.25 use
streamlines to illustrate two examples of fluids moving through a pipe. The first fluid exhibits a laminar flow
(sometimes described as a steady flow), represented by smooth, parallel streamlines. Note that in the example
shown in part (a), the velocity of the fluid is greatest in the center and decreases near the walls of the pipe due
to the viscosity of the fluid and friction between the pipe walls and the fluid. This is a special case of laminar
flow, where the friction between the pipe and the fluid is high, known as no slip boundary conditions. The
second diagram represents turbulent flow, in which streamlines are irregular and change over time. In
turbulent flow, the paths of the fluid flow are irregular as different parts of the fluid mix together or form small
circular regions that resemble whirlpools. This can occur when the speed of the fluid reaches a certain critical
speed.
Figure 14.25
(a) Laminar flow can be thought of as layers of fluid moving in parallel, regular paths. (b) In turbulent flow, regions of fluid
move in irregular, colliding paths, resulting in mixing and swirling.
Flow Rate and its Relation to Velocity
The volume of fluid passing by a given location through an area during a period of time is called flow rate Q, or
more precisely, volume flow rate. In symbols, this is written as
692
14 • Fluid Mechanics
Access for free at openstax.org.

where V is the volume and t is the elapsed time. In Figure 14.26, the volume of the cylinder is Ax, so the flow
rate is
Figure 14.26
Flow rate is the volume of fluid flowing past a point through the area A per unit time. Here, the shaded cylinder of fluid flows
past point P in a uniform pipe in time t.
The SI unit for flow rate is
but several other units for Q are in common use, such as liters per minute (L/
min). Note that a liter (L) is 1/1000 of a cubic meter or 1000 cubic centimeters
Flow rate and velocity are related, but quite different, physical quantities. To make the distinction clear,
consider the flow rate of a river. The greater the velocity of the water, the greater the flow rate of the river. But
flow rate also depends on the size and shape of the river. A rapid mountain stream carries far less water than
the Amazon River in Brazil, for example. Figure 14.26 illustrates the volume flow rate. The volume flow rate is
where
is the cross-sectional area of the pipe and v is the magnitude of the velocity.
The precise relationship between flow rate Q and average speed v is
where A is the cross-sectional area and
is the average speed. The relationship tells us that flow rate is directly
proportional to both the average speed of the fluid and the cross-sectional area of a river, pipe, or other
conduit. The larger the conduit, the greater its cross-sectional area. Figure 14.26 illustrates how this
relationship is obtained. The shaded cylinder has a volume
, which flows past the point P in a time t.
Dividing both sides of this relationship by t gives
We note that
and the average speed is
. Thus the equation becomes
.
Figure 14.27 shows an incompressible fluid flowing along a pipe of decreasing radius. Because the fluid is
incompressible, the same amount of fluid must flow past any point in the tube in a given time to ensure
continuity of flow. The flow is continuous because they are no sources or sinks that add or remove mass, so the
mass flowing into the pipe must be equal the mass flowing out of the pipe. In this case, because the cross-
sectional area of the pipe decreases, the velocity must necessarily increase. This logic can be extended to say
that the flow rate must be the same at all points along the pipe. In particular, for arbitrary points 1 and 2,
This is called the equation of continuity and is valid for any incompressible fluid (with constant density). The
consequences of the equation of continuity can be observed when water flows from a hose into a narrow spray
nozzle: It emerges with a large speed—that is the purpose of the nozzle. Conversely, when a river empties into
14.13
14.14
14.5 • Fluid Dynamics
693

one end of a reservoir, the water slows considerably, perhaps picking up speed again when it leaves the other
end of the reservoir. In other words, speed increases when cross-sectional area decreases, and speed
decreases when cross-sectional area increases.
Figure 14.27
When a tube narrows, the same volume occupies a greater length. For the same volume to pass points 1 and 2 in a given
time, the speed must be greater at point 2. The process is exactly reversible. If the fluid flows in the opposite direction, its speed decreases
when the tube widens. (Note that the relative volumes of the two cylinders and the corresponding velocity vector arrows are not drawn to
scale.)
Since liquids are essentially incompressible, the equation of continuity is valid for all liquids. However, gases
are compressible, so the equation must be applied with caution to gases if they are subjected to compression
or expansion.
EXAMPLE 14.5
Calculating Fluid Speed through a Nozzle
A nozzle with a diameter of 0.500 cm is attached to a garden hose with a radius of 0.900 cm. The flow rate
through hose and nozzle is 0.500 L/s. Calculate the speed of the water (a) in the hose and (b) in the nozzle.
Strategy
We can use the relationship between flow rate and speed to find both speeds. We use the subscript 1 for the
hose and 2 for the nozzle.
Solution
a.
We solve the flow rate equation for speed and use
for the cross-sectional area of the hose, obtaining
Substituting values and using appropriate unit conversions yields
b.
We could repeat this calculation to find the speed in the nozzle
, but we use the equation of continuity to
give a somewhat different insight. The equation states
Solving for
and substituting
for the cross-sectional area yields
Substituting known values,
694
14 • Fluid Mechanics
Access for free at openstax.org.

Significance
A speed of 1.96 m/s is about right for water emerging from a hose with no nozzle. The nozzle produces a
considerably faster stream merely by constricting the flow to a narrower tube.
The solution to the last part of the example shows that speed is inversely proportional to the square of the
radius of the tube, making for large effects when radius varies. We can blow out a candle at quite a distance, for
example, by pursing our lips, whereas blowing on a candle with our mouth wide open is quite ineffective.
Mass Conservation
The rate of flow of a fluid can also be described by the mass flow rate or mass rate of flow. This is the rate at
which a mass of the fluid moves past a point. Refer once again to Figure 14.26, but this time consider the mass
in the shaded volume. The mass can be determined from the density and the volume:
The mass flow rate is then
where
is the density, A is the cross-sectional area, and v is the magnitude of the velocity. The mass flow rate
is an important quantity in fluid dynamics and can be used to solve many problems. Consider Figure 14.28.
The pipe in the figure starts at the inlet with a cross sectional area of
and constricts to an outlet with a
smaller cross sectional area of
. The mass of fluid entering the pipe has to be equal to the mass of fluid
leaving the pipe. For this reason the velocity at the outlet
is greater than the velocity of the inlet
. Using
the fact that the mass of fluid entering the pipe must be equal to the mass of fluid exiting the pipe, we can find
a relationship between the velocity and the cross-sectional area by taking the rate of change of the mass in and
the mass out:
Equation 14.15 is also known as the continuity equation in general form. If the density of the fluid remains
constant through the constriction—that is, the fluid is incompressible—then the density cancels from the
continuity equation,
The equation reduces to show that the volume flow rate into the pipe equals the volume flow rate out of the
pipe.
Figure 14.28
Geometry for deriving the equation of continuity. The amount of liquid entering the cross-sectional (shaded) area must
equal the amount of liquid leaving the cross-sectional area if the liquid is incompressible.
14.15
14.5 • Fluid Dynamics
695


## Match 3.05 — LibreTexts: 12.E: Fluid Dynamics and Its Biological and Medical Applications (Exercises)
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://phys.libretexts.org/Bookshelves/College_Physics/College_Physics_1e_(OpenStax)/12%3A_Fluid_Dynamics_and_Its_Biological_and_Medical_Applications/12.E%3A_Fluid_Dynamics_and_Its_Biological_and_Medical_Applications_(Exercises)

12.E: Fluid Dynamics and Its Biological and Medical Applications (Exercises)
-
- Last updated
- Save as PDF
Conceptual Questions
12.1: Flow Rate and Its Relation to Velocity
1. What is the difference between flow rate and fluid velocity? How are they related?
2. Many figures in the text show streamlines. Explain why fluid velocity is greatest where streamlines are closest together. (Hint: Consider the relationship between fluid velocity and the cross-sectional area through which it flows.)
3. Identify some substances that are incompressible and some that are not.
12.2: Bernoulli’s Equation
4. You can squirt water a considerably greater distance by placing your thumb over the end of a garden hose and then releasing, than by leaving it completely uncovered. Explain how this works.
5. Water is shot nearly vertically upward in a decorative fountain and the stream is observed to broaden as it rises. Conversely, a stream of water falling straight down from a faucet narrows. Explain why, and discuss whether surface tension enhances or reduces the effect in each case.
6. Look back to Figure. Answer the following two questions. Why is \(\displaystyle P_o\) less than atmospheric? Why is \(\displaystyle P_o\) greater than \(\displaystyle P_i\)?
7. Give an example of entrainment not mentioned in the text.
8. Many entrainment devices have a constriction, called a Venturi, such as shown in Figure. How does this bolster entrainment?
A tube with a narrow segment designed to enhance entrainment is called a Venturi. These are very commonly used in carburetors and aspirators.
9. Some chimney pipes have a T-shape, with a crosspiece on top that helps draw up gases whenever there is even a slight breeze. Explain how this works in terms of Bernoulli’s principle.
10. Is there a limit to the height to which an entrainment device can raise a fluid? Explain your answer.
11. Why is it preferable for airplanes to take off into the wind rather than with the wind?
12. Roofs are sometimes pushed off vertically during a tropical cyclone, and buildings sometimes explode outward when hit by a tornado. Use Bernoulli’s principle to explain these phenomena.
13. Why does a sailboat need a keel?
14. It is dangerous to stand close to railroad tracks when a rapidly moving commuter train passes. Explain why atmospheric pressure would push you toward the moving train.
15. Water pressure inside a hose nozzle can be less than atmospheric pressure due to the Bernoulli effect. Explain in terms of energy how the water can emerge from the nozzle against the opposing atmospheric pressure.
16. A perfume bottle or atomizer sprays a fluid that is in the bottle. (Figure.) How does the fluid rise up in the vertical tube in the bottle?
Atomizer: perfume bottle with tube to carry perfume up through the bottle. (credit: Antonia Foy, Flickr)
17. If you lower the window on a car while moving, an empty plastic bag can sometimes fly out the window. Why does this happen?
12.3: The Most General Applications of Bernoulli’s Equation
18. Based on Bernoulli’s equation, what are three forms of energy in a fluid? (Note that these forms are conservative, unlike heat transfer and other dissipative forms not included in Bernoulli’s equation.)
19. Water that has emerged from a hose into the atmosphere has a gauge pressure of zero. Why? When you put your hand in front of the emerging stream you feel a force, yet the water’s gauge pressure is zero. Explain where the force comes from in terms of energy.
20. The old rubber boot shown in Figure has two leaks. To what maximum height can the water squirt from Leak 1? How does the velocity of water emerging from Leak 2 differ from that of leak 1? Explain your responses in terms of energy.
Water emerges from two leaks in an old boot.
21. Water pressure inside a hose nozzle can be less than atmospheric pressure due to the Bernoulli effect. Explain in terms of energy how the water can emerge from the nozzle against the opposing atmospheric pressure.
12.4: Viscosity and Laminar Flow; Poiseuille’s Law
22. Explain why the viscosity of a liquid decreases with temperature—that is, how might increased temperature reduce the effects of cohesive forces in a liquid? Also explain why the viscosity of a gas increases with temperature—that is, how does increased gas temperature create more collisions between atoms and molecules?
23. When paddling a canoe upstream, it is wisest to travel as near to the shore as possible. When canoeing downstream, it may be best to stay near the middle. Explain why.
24. Why does flow decrease in your shower when someone flushes the toilet?
25. Plumbing usually includes air-filled tubes near water faucets, as shown in Figure. Explain why they are needed and how they work.
The vertical tube near the water tap remains full of air and serves a useful purpose.
12.5: The Onset of Turbulence
26. Doppler ultrasound can be used to measure the speed of blood in the body. If there is a partial constriction of an artery, where would you expect blood speed to be greatest, at or nearby the constriction? What are the two distinct causes of higher resistance in the constriction?
27. Sink drains often have a device such as that shown in Figure to help speed the flow of water. How does this work?
You will find devices such as this in many drains. They significantly increase flow rate.
28. Some ceiling fans have decorative wicker reeds on their blades. Discuss whether these fans are as quiet and efficient as those with smooth blades.
12.6: Motion of an Object in a Viscous Fluid
29. What direction will a helium balloon move inside a car that is slowing down—toward the front or back? Explain your answer.
30. Will identical raindrops fall more rapidly in 5º C air or 25º C air, neglecting any differences in air density? Explain your answer.
31. If you took two marbles of different sizes, what would you expect to observe about the relative magnitudes of their terminal velocities?
12.7: Molecular Transport Phenomena: Diffusion, Osmosis, and Related Processes
32. Why would you expect the rate of diffusion to increase with temperature? Can you give an example, such as the fact that you can dissolve sugar more rapidly in hot water?
33. How are osmosis and dialysis similar? How do they differ?
Problem & Exercises
12.1: Flow Rate and Its Relation to Velocity
34. What is the average flow rate in \(\displaystyle cm^3/s\) of gasoline to the engine of a car traveling at 100 km/h if it averages 10.0 km/L?
Solution
\(\displaystyle 2.78cm^3/s\)
35. The heart of a resting adult pumps blood at a rate of 5.00 L/min.
(a) Convert this to \(\displaystyle cm^3/s\).
(b) What is this rate in \(\displaystyle m^3/s\)?
36. Blood is pumped from the heart at a rate of 5.0 L/min into the aorta (of radius 1.0 cm). Determine the speed of blood through the aorta.
Solution
27 cm/s
37. Blood is flowing through an artery of radius 2 mm at a rate of 40 cm/s. Determine the flow rate and the volume that passes through the artery in a period of 30 s.
38. The Huka Falls on the Waikato River is one of New Zealand’s most visited natural tourist attractions (see Figure). On average the river has a flow rate of about 300,000 L/s. At the gorge, the river narrows to 20 m wide and averages 20 m deep.
(a) What is the average speed of the river in the gorge?
(b) What is the average speed of the water in the river downstream of the falls when it widens to 60 m and its depth increases to an average of 40 m?
The Huka Falls in Taupo, New Zealand, demonstrate flow rate. (credit: RaviGogna, Flickr
Solution
(a) 0.75 m/s
(b) 0.13 m/s
39. A major artery with a cross-sectional area of \(\displaystyle 1.00cm^2\) branches into 18 smaller arteries, each with an average cross-sectional area of \(\displaystyle 0.400cm^2\). By what factor is the average velocity of the blood reduced when it passes into these branches?
40. (a) As blood passes through the capillary bed in an organ, the capillaries join to form venules (small veins). If the blood speed increases by a factor of 4.00 and the total cross-sectional area of the venules is 10.0cm2, what is the total cross-sectional area of the capillaries feeding these venules?
(b) How many capillaries are involved if their average diameter is \(\displaystyle 10.0μm\)?
Solution
(a) \(\displaystyle 40.0cm^2\)
(b) \(\displaystyle 5.09×10^7\)
41. The human circulation system has approximately \(\displaystyle 1×10^9\) capillary vessels. Each vessel has a diameter of about 8μm. Assuming cardiac output is 5 L/min, determine the average velocity of blood flow through each capillary vessel.
42. (a) Estimate the time it would take to fill a private swimming pool with a capacity of 80,000 L using a garden hose delivering 60 L/min.
(b) How long would it take to fill if you could divert a moderate size river, flowing at \(\displaystyle 5000m^3/s\), into it?
Solution
(a) 22 h
(b) 0.016 s
43. The flow rate of blood through a \(\displaystyle 2.00×10^{–6}-m\) -radius capillary is \(\displaystyle 3.80×10^{-9}cm^3/s\).
(a) What is the speed of the blood flow? (This small speed allows time for diffusion of materials to and from the blood.)
(b) Assuming all the blood in the body passes through capillaries, how many of them must there be to carry a total flow of 90.0cm3/s? (The large number obtained is an overestimate, but it is still reasonable.)
44. (a) What is the fluid speed in a fire hose with a 9.00-cm diameter carrying 80.0 L of water per second? (b) What is the flow rate in cubic meters per second? (c) Would your answers be different if salt water replaced the fresh water in the fire hose?
Solution
(a) 12.6 m/s
(b) \(\displaystyle 0.0800m^3/s\)
(c) No, independent of density.
45. The main uptake air duct of a forced air gas heater is 0.300 m in diameter. What is the average speed of air in the duct if it carries a volume equal to that of the house’s interior every 15 min? The inside volume of the house is equivalent to a rectangular solid 13.0 m wide by 20.0 m long by 2.75 m high.
46. Water is moving at a velocity of 2.00 m/s through a hose with an internal diameter of 1.60 cm.
(a) What is the flow rate in liters per second?
(b) The fluid velocity in this hose’s nozzle is 15.0 m/s. What is the nozzle’s inside diameter?
Solution
(a) 0.402 L/s
(b) 0.584 cm
47. Prove that the speed of an incompressible fluid through a constriction, such as in a Venturi tube, increases by a factor equal to the square of the factor by which the diameter decreases. (The converse applies for flow out of a constriction into a larger-diameter region.)
48. Water emerges straight down from a faucet with a 1.80-cm diameter at a speed of 0.500 m/s. (Because of the construction of the faucet, there is no variation in speed across the stream.)
(a) What is the flow rate in \(\displaystyle cm^3/s\)?
(b) What is the diameter of the stream 0.200 m below the faucet? Neglect any effects due to surface tension.
Solution
(a) \(\displaystyle 127cm^3/s\)
(b) 0.890 cm
49. Unreasonable Results
A mountain stream is 10.0 m wide and averages 2.00 m in depth. During the spring runoff, the flow in the stream reaches \(\displaystyle 100,000m^3/s\).
(a) What is the average velocity of the stream under these conditions?
(b) What is unreasonable about this velocity?
(c) What is unreasonable or inconsistent about the premises?
12.2: Bernoulli’s Equation
50. Verify that pressure has units of energy per unit volume.
Solution
\(\displaystyle P=\frac{Force}{Area}\),
\(\displaystyle (P)_{units}=N/m^2=N⋅m/m^3=J/m^3\)
\(\displaystyle =energy/volume\)
51. Suppose you have a wind speed gauge like the pitot tube shown in [link](b). By what factor must wind speed increase to double the value of \(\displaystyle h\) in the manometer? Is this independent of the moving fluid and the fluid in the manometer?
52. If the pressure reading of your pitot tube is 15.0 mm Hg at a speed of 200 km/h, what will it be at 700 km/h at the same altitude?
Solution
184 mm Hg
53. Calculate the maximum height to which water could

## Match 3.04 — LibreTexts: 14.7: Fluid Dynamics
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/Book%3A_University_Physics_I_-_Mechanics_Sound_Oscillations_and_Waves_(OpenStax)/14%3A_Fluid_Mechanics/14.07%3A_Fluid_Dynamics

14.7: Fluid Dynamics
- Describe the characteristics of flow
- Calculate flow rate
- Describe the relationship between flow rate and velocity
- Explain the consequences of the equation of continuity to the conservation of mass
The first part of this chapter dealt with fluid statics, the study of fluids at rest. The rest of this chapter deals with fluid dynamics, the study of fluids in motion. Even the most basic forms of fluid motion can be quite complex. For this reason, we limit our investigation to ideal fluids in many of the examples. An ideal fluid is a fluid with negligible viscosity . Viscosity is a measure of the internal friction in a fluid; we examine it in more detail in Viscosity and Turbulence . In a few examples, we examine an incompressible fluid—one for which an extremely large force is required to change the volume—since the density in an incompressible fluid is constant throughout.
Characteristics of Flow
Velocity vectors are often used to illustrate fluid motion in applications like meteorology. For example, wind—the fluid motion of air in the atmosphere—can be represented by vectors indicating the speed and direction of the wind at any given point on a map. Figure \(\PageIndex{1}\) shows velocity vectors describing the winds during Hurricane Arthur in 2014.
Another method for representing fluid motion is a streamline . A streamline represents the path of a small volume of fluid as it flows. The velocity is always tangential to the streamline. The diagrams in Figure \(\PageIndex{2}\) use streamlines to illustrate two examples of fluids moving through a pipe. The first fluid exhibits a laminar flow (sometimes described as a steady flow), represented by smooth, parallel streamlines. Note that in the example shown in part (a), the velocity of the fluid is greatest in the center and decreases near the walls of the pipe due to the viscosity of the fluid and friction between the pipe walls and the fluid. This is a special case of laminar flow, where the friction between the pipe and the fluid is high, known as no slip boundary conditions. The second diagram represents turbulent flow , in which streamlines are irregular and change over time. In turbulent flow, the paths of the fluid flow are irregular as different parts of the fluid mix together or form small circular regions that resemble whirlpools. This can occur when the speed of the fluid reaches a certain critical speed.
Flow Rate and its Relation to Velocity
The volume of fluid passing by a given location through an area during a period of time is called flow rate \(Q\), or more precisely, volume flow rate. In symbols, this is written as
\[Q = \frac{dV}{dt} \label{14.13}\]
where \(V\) is the volume and \(t\) is the elapsed time. In Figure \(\PageIndex{3}\), the volume of the cylinder is \(Ax\), so the flow rate is
\[Q = \frac{dV}{dt} = \frac{d}{dt} (Ax) = A \frac{dx}{dt} = Av \ldotp\]
The SI unit for flow rate is m 3 /s, but several other units for \(Q\) are in common use, such as liters per minute (L/min). Note that a liter (L) is 1/1000 of a cubic meter or 1000 cubic centimeters (10 −3 m 3 or 10 3 cm 3 ).
Flow rate and velocity are related, but quite different, physical quantities. To make the distinction clear, consider the flow rate of a river. The greater the velocity of the water, the greater the flow rate of the river. But flow rate also depends on the size and shape of the river. A rapid mountain stream carries far less water than the Amazon River in Brazil, for example. Figure \(\PageIndex{3}\) illustrates the volume flow rate. The volume flow rate is \(Q = \frac{dV}{dt} = Av\), where A is the cross-sectional area of the pipe and v is the magnitude of the velocity.
The precise relationship between flow rate \(Q\) and average speed \(v\) is
\[Q = Av,\]
where \(A\) is the cross-sectional area and \(v\) is the average speed. The relationship tells us that flow rate is directly proportional to both the average speed of the fluid and the cross-sectional area of a river, pipe, or other conduit. The larger the conduit, the greater its cross-sectional area. Figure \(\PageIndex{3}\) illustrates how this relationship is obtained. The shaded cylinder has a volume \(V = Ad\), which flows past the point \(P\) in a time \(t\). Dividing both sides of this relationship by \(t\) gives
\[\frac{V}{t} = \frac{Ad}{t} \ldotp \label{eq14.14A} \]
We note that \(Q = \frac{V}{t}\) and the average speed is \(v = \frac{d}{t}\). Thus Equation \ref{eq14.14A} becomes
\[Q = Av.\]
Figure \(\PageIndex{4}\) shows an incompressible fluid flowing along a pipe of decreasing radius. Because the fluid is incompressible, the same amount of fluid must flow past any point in the tube in a given time to ensure continuity of flow. The flow is continuous because they are no sources or sinks that add or remove mass, so the mass flowing into the pipe must be equal the mass flowing out of the pipe. In this case, because the cross-sectional area of the pipe decreases, the velocity must necessarily increase. This logic can be extended to say that the flow rate must be the same at all points along the pipe. In particular, for arbitrary points 1 and 2,
\[\begin{split} Q_{1} & = Q_{2}, \\ A_{1} v_{1} & = A_{2} v_{2} \ldotp \end{split} \label{14.14}\]
This is called the equation of continuity and is valid for any incompressible fluid (with constant density). The consequences of the equation of continuity can be observed when water flows from a hose into a narrow spray nozzle: It emerges with a large speed—that is the purpose of the nozzle. Conversely, when a river empties into one end of a reservoir, the water slows considerably, perhaps picking up speed again when it leaves the other end of the reservoir. In other words, speed increases when cross-sectional area decreases, and speed decreases when cross-sectional area increases.
Since liquids are essentially incompressible, the equation of continuity is valid for all liquids. However, gases are compressible, so the equation must be applied with caution to gases if they are subjected to compression or expansion.
A nozzle with a diameter of 0.500 cm is attached to a garden hose with a radius of 0.900 cm. The flow rate through hose and nozzle is 0.500 L/s. Calculate the speed of the water:
- in the hose and
- in the nozzle.
Strategy
We can use the relationship between flow rate and speed to find both speeds. We use the subscript 1 for the hose and 2 for the nozzle.
Solution
- We solve the flow rate equation for speed and use \(\pi r_{1}^{2}\) for the cross-sectional area of the hose, obtaining $$v = \frac{Q}{A} = \frac{Q}{\pi r_{1}^{2}} \ldotp$$ Substituting values and using appropriate unit conversions yields $$v = \frac{(0.500\; L/s)(10^{-3}\; m^{3}/L)}{(3.14)(9.00 \times 10^{-3}\; m)^{2}} = 1.96\; m/s \ldotp$$
- We could repeat this calculation to find the speed in the nozzle v 2 , but we use the equation of continuity to give a somewhat different insight. The equation states $$A_{1} v_{1} = A_{2} v_{2} \ldotp$$Solving for v 2 and substituting \(\pi r^{2}\) for the cross-sectional area yields $$v_{2} = \frac{A_{1}}{A_{2}} v_{1} = \frac{\pi r_{1}^{2}}{\pi r_{2}^{2}} v_{1} = \frac{r_{1}^{2}}{r_{2}^{2}} v_{1} \ldotp$$ Substituting known values, $$v_{2} = \frac{(0.900\; cm)^{2}}{(0.250\; cm)^{2}} (1.96\; m/s) = 25.5\; m/s \ldotp$$
Significance
A speed of 1.96 m/s is about right for water emerging from a hose with no nozzle. The nozzle produces a considerably faster stream merely by constricting the flow to a narrower tube.
The solution to the last part of the example shows that speed is inversely proportional to the square of the radius of the tube, making for large effects when radius varies. We can blow out a candle at quite a distance, for example, by pursing our lips, whereas blowing on a candle with our mouth wide open is quite ineffective.
Mass Conservation
The rate of flow of a fluid can also be described by the mass flow rate or mass rate of flow. This is the rate at which a mass of the fluid moves past a point. Refer once again to Figure \(\PageIndex{3}\), but this time consider the mass in the shaded volume. The mass can be determined from the density and the volume:
\[m = \rho V = \rho Ax \ldotp\]
The mass flow rate is then
\[\frac{dm}{dt} = \frac{d}{dt} (\rho Ax) = \rho A \frac{dx}{dt} = \rho Av,\]
where \(\rho\) is the density, A is the cross-sectional area, and v is the magnitude of the velocity. The mass flow rate is an important quantity in fluid dynamics and can be used to solve many problems. Consider Figure \(\PageIndex{5}\). The pipe in the figure starts at the inlet with a cross sectional area of A 1 and constricts to an outlet with a smaller cross sectional area of A 2 . The mass of fluid entering the pipe has to be equal to the mass of fluid leaving the pipe. For this reason the velocity at the outlet (v 2 ) is greater than the velocity of the inlet (v 1 ). Using the fact that the mass of fluid entering the pipe must be equal to the mass of fluid exiting the pipe, we can find a relationship between the velocity and the cross-sectional area by taking the rate of change of the mass in and the mass out:
\[\begin{split} \left(\dfrac{dm}{dt}\right)_{1} & = \left(\dfrac{dm}{dt}\right)_{2} \\ \rho_{1} A_{1} v_{1} & = \rho_{2} A_{2} v_{2} \ldotp \end{split} \label{14.15}\]
Equation \ref{14.15} is also known as the continuity equation in general form. If the density of the fluid remains constant through the constriction—that is, the fluid is incompressible—then the density cancels from the continuity equation,
\[A_{1} v_{1} = A_{2} v_{2} \ldotp\]
The equation reduces to show that the volume flow rate into the pipe equals the volume flow rate out of the pipe.
