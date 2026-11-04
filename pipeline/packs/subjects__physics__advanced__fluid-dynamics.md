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


## Match 2.05 — College_Physics-WEB_2s5sHvR § 12.6 Motion of an Object in a Viscous Fluid

A moving object in a viscous fluid is equivalent to a stationary object in a flowing fluid stream. (For example, when you ride a
bicycle at 10 m/s in still air, you feel the air in your face exactly as if you were stationary in a 10-m/s wind.) Flow of the stationary
fluid around a moving object may be laminar, turbulent, or a combination of the two. Just as with flow in tubes, it is possible to
predict when a moving object creates turbulence. We use another form of the Reynolds number
, defined for an object
moving in a fluid to be
where
is a characteristic length of the object (a sphere’s diameter, for example),
the fluid density,
its viscosity, and
the
object’s speed in the fluid. If
is less than about 1, flow around the object can be laminar, particularly if the object has a
smooth shape. The transition to turbulent flow occurs for
between 1 and about 10, depending on surface roughness and so
on. Depending on the surface, there can be a turbulent wake behind the object with some laminar flow over its surface. For an
between 10 and
, the flow may be either laminar or turbulent and may oscillate between the two. For
greater than
about
, the flow is entirely turbulent, even at the surface of the object. (See Figure 12.18.) Laminar flow occurs mostly when
the objects in the fluid are small, such as raindrops, pollen, and blood cells in plasma.
EXAMPLE 12.10
Does a Ball Have a Turbulent Wake?
Calculate the Reynolds number
for a ball with a 7.40-cm diameter thrown at 40.0 m/s.
Strategy
We can use
to calculate
, since all values in it are either given or can be found in tables of density and viscosity.
Solution
Substituting values into the equation for
yields
Discussion
This value is sufficiently high to imply a turbulent wake. Most large objects, such as airplanes and sailboats, create significant
turbulence as they move. As noted before, the Bernoulli principle gives only qualitatively-correct results in such situations.
One of the consequences of viscosity is a resistance force called viscous drag
that is exerted on a moving object. This force
typically depends on the object’s speed (in contrast with simple friction). Experiments have shown that for laminar flow (
less than about one) viscous drag is proportional to speed, whereas for
between about 10 and
, viscous drag is
proportional to speed squared. (This relationship is a strong dependence and is pertinent to bicycle racing, where even a small
headwind causes significantly increased drag on the racer. Cyclists take turns being the leader in the pack for this reason.) For
greater than
, drag increases dramatically and behaves with greater complexity. For laminar flow around a sphere,
is proportional to fluid viscosity , the object’s characteristic size
, and its speed . All of which makes sense—the more viscous
the fluid and the larger the object, the more drag we expect. Recall Stoke’s law
. For the special case of a small
12.55
12.56
12.6 • Motion of an Object in a Viscous Fluid
503

sphere of radius
moving slowly in a fluid of viscosity , the drag force
is given by
Figure 12.18 (a) Motion of this sphere to the right is equivalent to fluid flow to the left. Here the flow is laminar with
less than 1. There
is a force, called viscous drag
, to the left on the ball due to the fluid’s viscosity. (b) At a higher speed, the flow becomes partially
turbulent, creating a wake starting where the flow lines separate from the surface. Pressure in the wake is less than in front of the sphere,
because fluid speed is less, creating a net force to the left
that is significantly greater than for laminar flow. Here
is greater than
10. (c) At much higher speeds, where
is greater than
, flow becomes turbulent everywhere on the surface and behind the sphere.
Drag increases dramatically.
An interesting consequence of the increase in
with speed is that an object falling through a fluid will not continue to
accelerate indefinitely (as it would if we neglect air resistance, for example). Instead, viscous drag increases, slowing
acceleration, until a critical speed, called the terminal speed, is reached and the acceleration of the object becomes zero. Once
this happens, the object continues to fall at constant speed (the terminal speed). This is the case for particles of sand falling in
the ocean, cells falling in a centrifuge, and sky divers falling through the air. Figure 12.19 shows some of the factors that affect
terminal speed. There is a viscous drag on the object that depends on the viscosity of the fluid and the size of the object. But
there is also a buoyant force that depends on the density of the object relative to the fluid. Terminal speed will be greatest for
low-viscosity fluids and objects with high densities and small sizes. Thus a skydiver falls more slowly with outspread limbs than
when they are in a pike position—head first with hands at their side and legs together.
Knowledge of terminal speed is useful for estimating sedimentation rates of small particles. We know from watching mud settle
out of dirty water that sedimentation is usually a slow process. Centrifuges are used to speed sedimentation by creating
accelerated frames in which gravitational acceleration is replaced by centripetal acceleration, which can be much greater,
increasing the terminal speed.
12.57
Take-Home Experiment: Don’t Lose Your Marbles
By measuring the terminal speed of a slowly moving sphere in a viscous fluid, one can find the viscosity of that fluid (at that
temperature). It can be difficult to find small ball bearings around the house, but a small marble will do. Gather two or three
fluids (syrup, motor oil, honey, olive oil, etc.) and a thick, tall clear glass or vase. Drop the marble into the center of the fluid
and time its fall (after letting it drop a little to reach its terminal speed). Compare your values for the terminal speed and see
if they are inversely proportional to the viscosities as listed in Table 12.1. Does it make a difference if the marble is dropped
near the side of the glass?
504
Chapter 12 • Fluid Dynamics and Its Biological and Medical Applications
Access for free at openstax.org.

Figure 12.19 There are three forces acting on an object falling through a viscous fluid: its weight
, the viscous drag
, and the buoyant
force
.

## Match 2.05 — APCollegePhysics-OP_js6ZFp7 § 12.6 Motion of an Object in a Viscous Fluid

Learning Objectives
By the end of this section, you will be able to:
•
Calculate the Reynolds number for an object moving through a fluid.
•
Explain whether the Reynolds number indicates laminar or turbulent flow.
•
Describe the conditions under which an object has a terminal speed.
A moving object in a viscous fluid is equivalent to a stationary object in a flowing fluid stream. (For example, when you ride a
bicycle at 10 m/s in still air, you feel the air in your face exactly as if you were stationary in a 10-m/s wind.) Flow of the stationary
fluid around a moving object may be laminar, turbulent, or a combination of the two. Just as with flow in tubes, it is possible to
predict when a moving object creates turbulence. We use another form of the Reynolds number N′R , defined for an object
moving in a fluid to be
(12.91)
N′R = ρvL
η (object in fluid)
where L is a characteristic length of the object (a sphere's diameter, for example), ρ the fluid density, η its viscosity, and v
the object's speed in the fluid. If N′R is less than about 1, flow around the object can be laminar, particularly if the object has a
smooth shape. The transition to turbulent flow occurs for N′R between 1 and about 10, depending on surface roughness and so
on. Depending on the surface, there can be a turbulent wake behind the object with some laminar flow over its surface. For an
N′R between 10 and 106 , the flow may be either laminar or turbulent and may oscillate between the two. For N′R greater
than about 106 , the flow is entirely turbulent, even at the surface of the object. (See Figure 12.19.) Laminar flow occurs mostly
when the objects in the fluid are small, such as raindrops, pollen, and blood cells in plasma.
Example 12.10 Does a Ball Have a Turbulent Wake?
Calculate the Reynolds number N′R for a ball with a 7.40-cm diameter thrown at 40.0 m/s.
Strategy
We can use N′R = ρvL
η
to calculate N′R , since all values in it are either given or can be found in tables of density and
viscosity.
Solution
Substituting values into the equation for N′R yields
(12.92)
N′R =
ρvL
η
= (1.29 kg/m3)(40.0 m/s)(0.0740 m)
1.81×10−5 1.00 Pa ⋅ s
= 2.11×105 .
Discussion
This value is sufficiently high to imply a turbulent wake. Most large objects, such as airplanes and sailboats, create
significant turbulence as they move. As noted before, the Bernoulli principle gives only qualitatively-correct results in such
situations.
One of the consequences of viscosity is a resistance force called viscous drag FV that is exerted on a moving object. This
force typically depends on the object's speed (in contrast with simple friction). Experiments have shown that for laminar flow (
N′R less than about one) viscous drag is proportional to speed, whereas for N′R between about 10 and 106 , viscous drag is
proportional to speed squared. (This relationship is a strong dependence and is pertinent to bicycle racing, where even a small
headwind causes significantly increased drag on the racer. Cyclists take turns being the leader in the pack for this reason.) For
N′R greater than 106 , drag increases dramatically and behaves with greater complexity. For laminar flow around a sphere,
FV is proportional to fluid viscosity η , the object's characteristic size L , and its speed v . All of which makes sense—the more
Chapter 12 | Fluid Dynamics and Its Biological and Medical Applications
519

viscous the fluid and the larger the object, the more drag we expect. Recall Stoke's law FS = 6πrηv . For the special case of a
small sphere of radius R moving slowly in a fluid of viscosity η , the drag force FS is given by
(12.93)
FS = 6πRηv.
Figure 12.19 (a) Motion of this sphere to the right is equivalent to fluid flow to the left. Here the flow is laminar with N′R less than 1. There is a force,
called viscous drag FV , to the left on the ball due to the fluid's viscosity. (b) At a higher speed, the flow becomes partially turbulent, creating a wake
starting where the flow lines separate from the surface. Pressure in the wake is less than in front of the sphere, because fluid speed is less, creating a
net force to the left F′V that is significantly greater than for laminar flow. Here N′R is greater than 10. (c) At much higher speeds, where N′R is
greater than 106 , flow becomes turbulent everywhere on the surface and behind the sphere. Drag increases dramatically.
An interesting consequence of the increase in FV with speed is that an object falling through a fluid will not continue to
accelerate indefinitely (as it would if we neglect air resistance, for example). Instead, viscous drag increases, slowing
acceleration, until a critical speed, called the terminal speed, is reached and the acceleration of the object becomes zero. Once
this happens, the object continues to fall at constant speed (the terminal speed). This is the case for particles of sand falling in
the ocean, cells falling in a centrifuge, and sky divers falling through the air. Figure 12.20 shows some of the factors that affect
terminal speed. There is a viscous drag on the object that depends on the viscosity of the fluid and the size of the object. But
there is also a buoyant force that depends on the density of the object relative to the fluid. Terminal speed will be greatest for
low-viscosity fluids and objects with high densities and small sizes. Thus a skydiver falls more slowly with outspread limbs than
when they are in a pike position—head first with hands at their side and legs together.
Take-Home Experiment: Don't Lose Your Marbles
By measuring the terminal speed of a slowly moving sphere in a viscous fluid, one can find the viscosity of that fluid (at that
temperature). It can be difficult to find small ball bearings around the house, but a small marble will do. Gather two or three
fluids (syrup, motor oil, honey, olive oil, etc.) and a thick, tall clear glass or vase. Drop the marble into the center of the fluid
and time its fall (after letting it drop a little to reach its terminal speed). Compare your values for the terminal speed and see
if they are inversely proportional to the viscosities as listed in Table 12.1. Does it make a difference if the marble is dropped
near the side of the glass?
Knowledge of terminal speed is useful for estimating sedimentation rates of small particles. We know from watching mud settle
out of dirty water that sedimentation is usually a slow process. Centrifuges are used to speed sedimentation by creating
accelerated frames in which gravitational acceleration is replaced by centripetal acceleration, which can be much greater,
increasing the terminal speed.
520
Chapter 12 | Fluid Dynamics and Its Biological and Medical Applications
This OpenStax book is available for free at http://cnx.org/content/col11844/1.14

Figure 12.20 There are three forces acting on an object falling through a viscous fluid: its weight w , the viscous drag FV , and the buoyant force
FB .
