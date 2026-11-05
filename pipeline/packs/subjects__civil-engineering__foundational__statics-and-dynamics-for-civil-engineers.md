# Source pack — subjects/civil-engineering/foundational/statics-and-dynamics-for-civil-engineers
Lesson title: Statics and Dynamics for Civil Engineers
Level: foundational
Match confidence: 1.32

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.32 — LibreTexts: 1: Principles of Statics
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://eng.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Statics_(NWTC)/01%3A_Principles_of_Statics

1: Principles of Statics
Introduction
Statics is a branch of Mechanics , which is a subset of Physical Sciences . It involves the study of bodies that are at rest or move with constant velocity. Unlike Dynamics, which deals with bodies in motion, Statics focuses on mechanical systems in equilibrium.
The fundamental concept in Statics is the equilibrium of forces . This means that for a system to be in equilibrium, the net force and the net torque (moment of force) acting on it must be zero. This is based on Newton’s First Law of Motion , which states that an object at rest tends to stay at rest, and an object in motion tends to stay in motion, unless acted upon by an external force.
Statics is used in many fields of engineering, especially in the design of structures and machines. Engineers use the principles of statics to calculate forces in structures like bridges, buildings, and mechanical devices, ensuring they can withstand the forces they encounter.
Statics is the foundation for future courses like Strength of Materials . In Statics, when we solve problems, all bodies are considered ridged and do not deform. When we get to Strength of Materials, then we will study the relationships between external forces acting on bodies at rest and the internal responses generated. In Strength of Materials, bodies are assumed to be deformable (real world deformation).
In summary, Statics is a crucial area of study in physics and engineering that helps us understand and predict the behavior of stationary objects and structures. It provides the foundation for designing safe and efficient structures and machines. Understanding statics can also give us insights into the natural world, helping us understand how objects and structures, from the smallest machine to the largest skyscraper, withstand the forces they experience.
-
- 1.2: Oblique Triangles
- Trigonometry literally means 'measuring triangles', we are more than prepared to do just that. The main goal of this section is to develop theorems which allow us to 'solve' triangles -- that is, find the length of each side of a triangle and the measure of each of its angles.

## Match 1.04 — LibreTexts: 6.3: Dynamics of Rotational Motion- Rotational Inertia
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://phys.libretexts.org/Bookshelves/Conceptual_Physics/Introduction_to_Physics_(Park)/03%3A_Unit_2-_Mechanics_II_-_Energy_and_Momentum_Oscillations_and_Waves_Rotation_and_Fluids/06%3A_Rotation/6.03%3A_Dynamics_of_Rotational_Motion-_Rotational_Inertia

6.3: Dynamics of Rotational Motion- Rotational Inertia
Learning Objectives
- Understand the relationship between torque, rotational inertia and angular acceleration.
- Study the turning effect of torque.
- Study the analogy between force and torque, mass and moment of inertia, and linear acceleration and angular acceleration.
If you have ever spun a bike wheel or pushed a merry-go-round, you know that force is needed to change angular velocity as seen in Figure \(\PageIndex{1}\). In fact, your intuition is reliable in predicting many of the factors that are involved. For example, we know that a door opens slowly if we push too close to its hinges. Furthermore, we know that the more massive the door, the more slowly it opens. The first example implies that the farther the force is applied from the pivot, the greater the angular acceleration; another implication is that angular acceleration is inversely proportional to mass. These relationships should seem very similar to the familiar relationships among force, mass, and acceleration embodied in Newton’s second law of motion. There are, in fact, precise rotational analogs to both force and mass.
To develop the precise relationship among force, mass, radius, and angular acceleration, consider what happens if we exert a force \(F\) on a point mass \(m\) that is at a distance \(r\) from a pivot point, as shown in Figure \(\PageIndex{2}\). Because the force is perpendicular to \(r\), an acceleration \(a=\frac{F}{m}\) is obtained in the direction of \(F\). We can rearrange this equation such that \(F=m a\) and then look for ways to relate this expression to expressions for rotational quantities. We note that \(a=r \alpha\), and we substitute this expression into \(F=m a\), yielding
\[F=m r \alpha . \nonumber \]
The turning effectiveness of force is called torque . Intuitively, torque increases with a larger lever arm , or the perpendicular distance between the center of rotation and the point at which force is being applied (think of a see-saw; to balance the weight of a heavier child on one side with a lighter child on the other side, the lighter child needs to sit farther from the pivot point). So, torque is given by \(\tau=r F\). So, if we multiply both sides of the equation above by \(r\), we get torque on the left-hand side. That is,
\[r F=m r^{2} \alpha \nonumber \]
or
\[\tau=m r^{2} \alpha. \nonumber \]
This last equation is the rotational analog of Newton’s second law (\(F=m a\)), where torque is analogous to force, angular acceleration is analogous to translational acceleration, and \(m r^{2}\) is analogous to mass (or inertia). The quantity \(m r^{2}\) is called the rotational inertia or moment of inertia of a point mass \(m\) a distance \(r\) from the center of rotation.
MAKING CONNECTIONS: ROTATIONAL MOTION DYNAMICS
Dynamics for rotational motion is completely analogous to linear or translational dynamics. Dynamics is concerned with force and mass and their effects on motion. For rotational motion, we will find direct analogs to force and mass that behave just as we would expect from our earlier experiences.
Rotational Inertia and Moment of Inertia
Before we can consider the rotation of anything other than a point mass like the one in Figure \(\PageIndex{2}\), we must extend the idea of rotational inertia to all types of objects. To expand our concept of rotational inertia, we define the moment of inertia \(I\) of an object to be the sum of \(m r^{2}\) for all the point masses of which it is composed. That is, \(I=\sum m r^{2}\). Here \(I\) is analogous to \(m\) in translational motion. Because of the distance \(r\), the moment of inertia for any object depends on the chosen axis. Actually, calculating \(I\) is beyond the scope of this text except for one simple case—that of a hoop, which has all its mass at the same distance from its axis. A hoop’s moment of inertia around its axis is therefore \(M R^{2}\), where \(M\) is its total mass and \(R\) its radius. (We use \(M\) and \(R\) for an entire object to distinguish them from \(m\) and \(r\) for point masses.) Figure \(\PageIndex{3}\) shows a variety of formulas of rotational inertia for many different shapes (deriving these formulas require calculus). For our purposes, it is good enough for you to see that rotational inertia is proportional to mass, and that it's proportional to size of object squared. Note that \(I\) has units of mass multiplied by distance squared (\(\mathrm{kg} \cdot \mathrm{m}^{2}\)), as we might expect from its definition.
The general relationship among torque, moment of inertia, and angular acceleration is
\[\text { net } \tau=I \alpha \nonumber \]
or
\[\alpha=\frac{\text { net } \tau}{I}, \nonumber \]
where net \(\tau\) is the total torque from all forces relative to a chosen axis. For simplicity, we will only consider torques exerted by forces in the plane of the rotation. Such torques are either positive or negative and add like ordinary numbers. The relationship in \(\tau=I \alpha\), \(\alpha=\frac{\text { net } \tau}{I}\) is the rotational analog to Newton’s second law and is very generally applicable. This equation is actually valid for any torque, applied to any object, relative to any axis.
As we might expect, the larger the torque is, the larger the angular acceleration is. For example, the harder a child pushes on a merry-go-round, the faster it accelerates. Furthermore, the more massive a merry-go-round, the slower it accelerates for the same torque. The basic relationship between moment of inertia and angular acceleration is that the larger the moment of inertia, the smaller is the angular acceleration. But there is an additional twist. The moment of inertia depends not only on the mass of an object, but also on its distribution of mass relative to the axis around which it rotates. For example, it will be much easier to accelerate a merry-go-round full of children if they stand close to its axis than if they all stand at the outer edge. The mass is the same in both cases, but the moment of inertia is much larger when the children are at the edge.
TAKE-HOME EXPERIMENT
Cut out a circle that has about a 10 cm radius from stiff cardboard. Near the edge of the circle, write numbers 1 to 12 like hours on a clock face. Position the circle so that it can rotate freely about a horizontal axis through its center, like a wheel. (You could loosely nail the circle to a wall.) Hold the circle stationary and with the number 12 positioned at the top, attach a lump of blue putty (sticky material used for fixing posters to walls) at the number 3. How large does the lump need to be to just rotate the circle? Describe how you can change the moment of inertia of the circle. How does this change affect the amount of blue putty needed at the number 3 to just rotate the circle? Change the circle’s moment of inertia and then try rotating the circle by using different amounts of blue putty. Repeat this process several times.
MAKING CONNECTIONS
In statics, the net torque is zero, and there is no angular acceleration. In rotational motion, net torque is the cause of angular acceleration, exactly as in Newton’s second law of motion for rotation.
Exercise \(\PageIndex{1}\)
Torque is the analog of force and moment of inertia is the analog of mass. Force and mass are physical quantities that depend on only one factor. For example, mass is related solely to the numbers of atoms of various types in an object. Are torque and moment of inertia similarly simple?
- Answer
-
No. Torque depends on three factors: force magnitude, force direction, and point of application. Moment of inertia depends on both mass and its distribution relative to the axis of rotation. So, while the analogies are precise, these rotational quantities depend on more factors.
Section Summary
- The farther the force is applied from the pivot, the greater is the angular acceleration; angular acceleration is inversely proportional to mass.
- The torque applied on an object is given by lever arm times the applied force: \(\tau=r F\).
- Using the torque, we can discover the rotational version of Newton's Second Law. It says \(\tau=I \alpha\), where \(I\) is rotational inertia, defined for a point mass moving in a circle of radius \(r\) as \(I=m r^{2}\).
- The formula for rotational inertia of an extended body can be complicated. But they are all proportional to the mass of the object and proportional to the square of the size of the object.
Glossary
- torque
- the turning effectiveness of a force
- lever arm
- the perpendicular distance between the center of rotation and the point at which force is being applied
- rotational inertia
- resistance to change of angular velocity; also called moment of inertia ; for a point mass, \(I=m r^{2}\)

## Match 1.04 — LibreTexts: 4.1: Dynamics and motion
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Introductory_Dynamics%3A_2D_Kinematics_and_Kinetics_of_Point_Masses_and_Rigid_Bodies_(Steeneken)/01%3A_Introduction/04%3A_Introduction_to_Dynamics/4.01%3A_Dynamics_and_motion

4.1: Dynamics and motion
Motion is all around you, the universe is full of moving matter and objects. This motion is surprisingly predictable and can therefore accurately be described by laws: Newton’s laws of motion. The field of science and engineering studying the time-dependent motion of matter in the presence of forces is called dynamics. During several centuries dynamical models have been developed that enable scientists to understand many time-dependent processes in nature and have allowed engineers to use this understanding to design and control motion to an extremely high degree. Examples include precise robots, fast formula one racing cars and remotely controlled spacecrafts, all of which have been designed by engineers by applying the concepts that are introduced in this textbook. And who knows? Maybe you will design the next generation of dynamic machines and devices in the future.
Since the early history of mankind people have been studying motion. Astronomers in ancient times were observing the trajectories of celestial objects like moons and planets. Also, motion of objects on earth were being studied, like in the experiment in 1586 where Simon Stevin dropped two balls with different mass from the Nieuwe Kerk in Delft, providing evidence that they fall at the same rate. In 1687 Newton introduced the famous laws of motion in his Principia, which were based on the mathematics he had developed with Leibniz for solving differential and integral equations.
Newton’s laws, which are the building blocks for the field of dynamics, provide a mathematical model to describe the experimentally observed motion of objects in our universe, which is accurate to a very high degree. Deviations from the model occur only in the case where speeds become comparable to the speed of light, such that Einstein’s theory of relativity is needed or if sizes and energies and masses become very small, such that quantum mechanical effects start to play a role. These exceptions, which were only discovered in the \(20^{\text {th }}\) century, belong to the field of modern physics and are outside the scope
of this course, which focuses on classical mechanics and dynamics. In this textbook we will discuss the theoretical models of dynamics based on Newton’s laws as if they represent a perfect description of experimental observations. Nevertheless, it remains important to realise that there is a difference between these models and the experimental observations they attempt to describe, since despite the high degree of accuracy of current physical models, there are still experiments that cannot be captured by them and are subject of thorough scientific investigations. For instance the model for describing the dynamics of stars rotating around the centre of a galaxy is still debated (gravity rotation problem) and the dynamics of particles that were observed to travel upstream into a small waterfall still remains to be explained. See also https:
//en.Wikipedia.org/wiki/List_of_unsolved_problems_in_physics
.
We note here that Newton’s laws are not the only way to describe the experimentally observed motion of objects. Alternative popular formulations of dynamics are Lagrangian and Hamiltonian mechanics, which are dealt with in more advanced textbooks in dynamics. These formulations, yield completely identical results as Newton’s laws, but can in some cases be advantageous to simplify the mathematical analysis.
