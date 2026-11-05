# Source pack — subjects/physics/foundational/newtons-laws
Lesson title: Newton's Three Laws
Level: foundational
Match confidence: 3.09

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.09 — LibreTexts: 14.1: Forces and Newton's Three Laws
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Courses/Merrimack_College/Conservation_Laws_Newton's_Laws_and_Kinematics_version_2.0/14%3A_N1)_Newton's_Laws/14.01%3A_Forces_and_Newton's_Three_Laws

14.1: Forces and Newton's Three Laws
Newton's Laws
Up to this point in the semester, we've been studying the interaction between objects by modeling the interactions with energy and momentum. The transfer and conservation of these quantities allowed us to determine their motion. Now, we would like to describe the interactions between objects using forces . In some ways, this description of the physical world is more intuitive; forces push and pull on objects, much like how we interaction with objects in our everyday lives. Of course, momentum and energy is still being transferred around, but the force description gives us a different perspective, and intuition about the motion is often more direct. On the other hand, since forces are vectors, it requires more mathematical sophistication and care then when dealing with energy.
Forces Are Vectors
When you push or pull on an object, it matters what direction you are pushing or pulling it. This is very natural; if you push in one direction and your friend pushes just as hard in the opposite direction, the object will not move. But what happens if you push in one direction and your friend pushes just as hard, but not quite in the opposite direction? The object might move in some other direction, and that's what we want to know about. All these various direction-and-magnitude complexities can be easily dealt with by modeling all forces as vectors . They must be written as \(\vec{F}=F_x\hat{x}+F_y\hat{y}\) in the \((x,y)\)-coordinate system you specify in order to get any answers right!
Newton's First Law
Newton's first law can be summarized as ``an object in motion tends to stay in motion unless acted on by a net external force''. The converse is also true; ``an object at rest tends to stay at rest unless acted on by a net external force''. An important word here is net , which means sum of all . A hockey puck sliding across the ice will continue to slide forever if there is no friction, but it does have external forces acting on it (gravity and the normal force, in this case). But these forces balance out, so there is no net force on the hockey puck. Newton's first law does not really help us solve problems, but rather it helps with our modeling process. It tells us when we should expect objects to exhibit motion.
Newton's Second Law
Newton's second law is the primary tool we will use to determine the motion of an object given some forces acting on it. We usually remember it as
\[\sum \vec{F}=m\vec{a},\]
where the \(\sum\) symbol means ``add up all the forces''. This is an important thing to remember - an object can have several forces acting on it, but a single object only ever has one acceleration \(\vec{a}\). A very common mistake is to think ``each force makes an acceleration \(F/m\), and I will add them all up to get the acceleration of the object'', but that is incorrect. A single object has only a single path in space, and therefore only has a single acceleration.
We can actually derive Newton's second law from the definition of force and momentum we have already encountered, namely
\[\vec{F}_{net}=\frac{d\vec{p}}{dt}.\]
(Recall that "net" means "sum of all", which is mathematically the same thing as the symbol \(\Sigma\).)To do this, we just use the definition of momentum, \(\vec{p}=m\vec{v}\), and assume the mass is constant in time (as it often is). Then we get:
\[\vec{F}_{net}=\frac{d}{dt}(m\vec{v})=m\frac{d\vec{v}}{dt}=m\vec{a}.\]
I typically write Newton's second law in a slightly different way,
\[\boxed{\vec{a}=\frac{\sum\vec{F}}{m}},\]
which mathematically identical, but reads more like ``the acceleration is the sum of the forces divided by the mass'', which is more like how we use Newton's second law.
Finally, since this is a vector equation, it actually contains several independent equations inside it, one for each direction. For instance, if you are doing a 2d Newton's second law problem, you will actually have components in each direction,
\[a_x=\frac{\sum F_x}{m},\qquad a_y=\frac{\sum F_y}{m},\]
and you will have to solve for these independently.
Newton's Third Law
Newton's third law is ``for every action there is an equal and opposite reaction''. In this case, our ``actions'' are forces. The typical example of this is ``I push on the wall with a force \(\vec{F}\), so the wall pushes on me with a force \(-\vec{F}\)''. Mathematically, if we have a force \(\vec{F}_{AB}\) acting from object A to object B, Newton's third law tells us that we know there must be a force \(\vec{F}_{BA}\) acting from object B to object A. The magnitudes of these forces are equal, and their directions are opposite:
\[|\vec{F}_{AB}|=|\vec{F}_{BA}|,\qquad \vec{F}_{AB}=-\vec{F}_{BA}.\]
Notice the way we've notated this - each force corresponds with a pair of objects , one that creates the force and one that experiences it. All forces have both - you push on a wall ( you and wall are the objects), the force of the floor pushing up on you, etc. In the case of the forces above, we're writing \(\vec{F}_{AB}\) to mean "the force created by A, acting on B", or "the force from A to B". The order of these subscripts is not always that important (since Newton's third law tells us that \(|F_{AB}|=|F_{BA}|\)), but we will try to be careful when we are writing them.

## Match 3.07 — LibreTexts: 5.1: Newton’s Three Laws
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Courses/Berea_College/Introductory_Physics%3A_Berea_College/05%3A_Newtons_Laws/5.01%3A_Newtons_Three_Laws

5.1: Newton’s Three Laws
-
- Last updated
- Save as PDF
Newton’s classical theory of physics is based on the three following laws:
- Law 1 : An object will remain in its state of motion, be it at rest or moving with constant velocity, unless a net external force is exerted on the object.
- Law 2 : An object’s acceleration is proportional to the net force exerted on the object , inversely proportional to the mass of the object, and in the same direction as the net force exerted on the object.
- Law 3 : If one object exerts a force on another object, the second object exerts a force on the first object that is equal in magnitude and opposite in direction.
The three statements above are sufficient to describe almost all of the natural phenomena that we experience in our lives. Concepts such as energy, center of mass, torque, etc, which you may have already encountered, are derived naturally from these three laws. In order to build models to describe specific experiments or observations using Newton’s Laws, one needs to understand the two main mathematical concepts that are introduced by the theory: force and mass. A few comments on each of the three laws are first provided before the concepts of force and mass are developed further.
Newton’s First Law
Newton’s First Law is often referred to as the law of inertia which was originally stated by Galileo. The first law is counter-intuitive, as our experience is that if you push a block on a table and let it go, it will eventually stop. Indeed, Aristotle proposed that the natural state of objects is to be at rest. As a result of Newton’s theory, we now understand that if you model a block sliding on a table, one must include a force of friction between the table and the block that acts to slow it down; a sliding block is thus not in a situation where no net external force is exerted on the object.
Newton’s First Law is useful in defining what we call an “inertial frame of reference”, which is a frame of reference in which Newton’s First Law holds true. A frame of reference can be thought of as a coordinate system which can be moving. For example, if a train is moving with constant velocity, we can consider the train as an inertial frame of reference since objects in the train would follow Newton’s First Law for observers that are in the train. If a train passenger placed an object on a table, they would observe that the object does not spontaneously start moving; if they slide an object on a frictionless table, they would observe that it keeps on sliding at constant velocity.
However, if the train is accelerating forwards, then an object placed on a frictionless table would appear, for observers in the train’s frame of reference, to be accelerating in the direction opposite to that of the train, and violate Newton’s First Law. An accelerating train is thus not an inertial frame of reference. To an observer on the ground, looking into the accelerating train through a window, the object placed on the table would appear to move with the same constant velocity as when it was placed on the table (the velocity of the train at the instant the object is placed on the table). In a similar way, when you are in a car, Newton’s First Law holds if the car is going at constant velocity, but if the car goes around a curve (and thus accelerates even its speed is constant), you will find that all objects in the car suddenly appear to be pushed towards the outside of the curve, in conflict with Newton’s First Law; this is because the accelerating car is not an inertial frame of reference and Newton’s First Law is thus not expected to hold.
Newton’s First Law thus allows us to define an inertial frame of reference; Newton’s Three Laws only hold in inertial frames of reference.
Exercise \(\PageIndex{1}\)
You are in an elevator accelerating upwards.
- The elevator is an inertial frame of reference.
- The elevator is not an inertial frame of reference.
- Answer
- B.
Newton’s Second Law
Newton’s Second Law is often written as a vector equation:
\[\begin{aligned} \sum \vec F = m\vec a\end{aligned}\]
where \(\sum \vec F\) is the vector sum of the forces exerted on an object, \(\vec a\) is the acceleration vector of the object, and \(m\) is the “inertial mass” of the object. As we will see, a force is represented by a vector, and the sum of the force vectors on an object is often called the “net force”. Recall that using vectors to write an equation is just a shorthand for writing the equation out for each component. In three dimensions, this would thus correspond to three independent scalar equations (one for each component of the force and acceleration vectors):
\[\begin{aligned} \sum F_x &= ma_x \\[4pt] \sum F_y &= ma_y \\[4pt] \sum F_z &= ma_z\end{aligned}\]
Newton’s Second Law is the foundation for Classical Physics, in which we seek to quantitatively describe the motion of any object. The motion of an object is fully specified by its acceleration as long as we know the position and velocity at a specific point in time. That is, by knowing the position and velocity of the object at a point in time and its acceleration, we can describe its motion both in the future and in the in past; we call Classical Physics a deterministic theory (as opposed to, say, Quantum Mechanics, which would only tell us the probability that a particle would be at some particular position in the future). The right-hand side of Newton’s Second Law thus contains the kinematic description of the object; if we know the acceleration, we know everything about the motion of the object.
The left-hand side of the equation contains all of the “dynamics” to describe the object; force is the tool that Newton introduced in order to be able to determine the acceleration of an object. Newton’s Second Law thus tells how to determine the kinematics of an object by using the concept of forces; it relates the dynamics to the kinematics. Having already covered kinematics, we will now focus on understanding dynamics and how to develop models that allow us to calculate the net force on an object. The inertial mass, \(m\) , is a specific property of an object that tells us how large an acceleration it will experience based on a given net force. Thus, objects with different masses will experience different accelerations if subject to the same net force.
Exercise \(\PageIndex{1}\)
Object 1 has twice the inertial mass of object 2. If both objects have the same acceleration vector.
- The net force on both objects is the same.
- The net force on object 1 is twice that on object 2.
- The net force on object 1 is half of that on object 2.
- Answer
- B.
Newton’s Third Law
Newton’s Third Law relates the forces that two objects exert on each other. It is important to understand that the forces that are mentioned in the Newton’s Third Law are exerted on different objects. If object A exerts a force on object B, then object B will also exert a force on object A. The two forces have the same magnitude but opposite directions. Sometimes, the forces are called “action” and “reaction” forces, although this is misleading, because it makes it sound like the reaction force is “in response to” some voluntary action force. However, inanimate objects can exert forces, and so this can lead to needless confusion as to which force is the reaction force.
It does not matter which force you choose to call the action (reaction) force. If a block is pushing down on a table (action force), then the table is pushing up on the block (reaction force). However, one could just as well say that the table is pushing up on the block (action force) so the block is pushing down on the table (reaction force). It does not matter which force you call the action force. This can be confusing, because if you choose to push on a wall (exerting an action force), then the wall exerts a force on you (the reaction force). If you choose not to push on the wall (exerting no force), then the wall does not exert the reaction force. This leads to people thinking that the reaction force is in response to an action force exerted by a sentient being, which is not the case. You can call the force that you choose to exert on the wall the reaction force and Newton’s Laws will still work just as well!
Newton’s Third law often leads to confusion when Newton’s Second Law is applied. Recall that Newton’s Second Law involves the sum of the forces on a particular object (the “net force” on that object). The two forces that are mentioned in Newton’s Third Law are not exerted on the same object , so they would never appear together in the sum of the forces from Newton’s Second Law, and they never cancel each other.
Exercise \(\PageIndex{3}\)
You push a heavy block in the North direction. The block is twice as heavy as you are. Which statement is true?
- The block exerts half of the force on you, in the North direction.
- The block exerts the same force on you, but in the South direction.
- The block exerts double of the force on you, in the South direction.
- The block is inanimate and thus does not exert a force on you.
- Answer
- B.

## Match 2.42 — LibreTexts: 4.2: Newton's laws of motion
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Introductory_Dynamics%3A_2D_Kinematics_and_Kinetics_of_Point_Masses_and_Rigid_Bodies_(Steeneken)/01%3A_Introduction/04%3A_Introduction_to_Dynamics/4.02%3A_Newton's_laws_of_motion

4.2: Newton's laws of motion
In his Principia Newton introduced three laws of motion that can mathematically be expressed in vector format as follows:
\[\begin{align} & \text { 1. If } \sum_{j} \overrightarrow{\boldsymbol{F}}_{i j}=\overrightarrow{\mathbf{0}} \text { then } \overrightarrow{\boldsymbol{a}}_{i}=\overrightarrow{\mathbf{0}} \tag{4.1} \label{4.1}\\[4pt] & \text { 2. } \sum_{j} \overrightarrow{\boldsymbol{F}}_{i j}=m_{i} \overrightarrow{\boldsymbol{a}}_{i} \tag{4.2} \label{4.2}\\[4pt] & \text { 3. } \overrightarrow{\boldsymbol{F}}_{i j}=-\overrightarrow{\boldsymbol{F}}_{j i} \tag{4.3} \label{4.3}\end{align}\]
These equations and the variables will be explained and defined in more detail in the next two chapters. It can be seen that Newton’s first law is a direct consequence of Newton’s second law when setting \(\sum \overrightarrow{\boldsymbol{F}}_{i j}=\overrightarrow{\mathbf{0}}\). Newton’s third law (action=-reaction), describes a property of all known fundamental forces of nature, which states that for every force \(\overrightarrow{\boldsymbol{F}}_{i j}\) that acts on point mass \(i\) there is another collinear force \(\overrightarrow{\boldsymbol{F}}_{j i}\) that acts on another point mass \(j\) with equal magnitude and opposite direction. In other words if point mass \(j\) generates a force \(\overrightarrow{\boldsymbol{F}}_{i j}\) on object \(i\), then point mass \(i\) generates a force \(\overrightarrow{\boldsymbol{F}}_{j i}=-\overrightarrow{\boldsymbol{F}}_{i j}\) on point
mass \(j\). The points of action of both forces coincide with the positions of the corresponding point masses. The first and third laws should be familiar if you followed a course in statics. Newton’s second law \(\sum \overrightarrow{\boldsymbol{F}}=m \overrightarrow{\boldsymbol{a}}\) is the essential equation in dynamics.
Note. Newton’s laws are strictly only valid for objects that are point masses, which are so small that they can be described by a single point (position vector) in space. By applying Newton’s laws to each point mass in an object or system that consists of many point masses, new laws can be derived for these larger systems. Much of this textbook is dedicated to deriving and discussing these new laws and using them to analyse more complex dynamical systems, like rigid bodies.
