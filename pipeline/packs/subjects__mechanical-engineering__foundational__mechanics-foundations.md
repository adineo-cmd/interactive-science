# Source pack — subjects/mechanical-engineering/foundational/mechanics-foundations
Lesson title: Mechanics Foundations
Level: foundational
Match confidence: 1.58

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.58 — LibreTexts: 9.1.1: Mechanics
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://phys.libretexts.org/Courses/Joliet_Junior_College/JJC_-_PHYS_110/09%3A_A_Physics_Formulary/9.01%3A_Physics_Formulas_(Wevers)/9.1.01%3A_Mechanics

9.1.1: Mechanics
-
- Last updated
- Save as PDF
Point-kinetics in a fixed coordinate system
Definitions
The position \(\vec{r}\), the velocity \(\vec{v}\) and the acceleration \(\vec{a}\) are defined by: \(\vec{r}=(x,y,z)\), \(\vec{v}=(\dot{x},\dot{y},\dot{z})\), \(\vec{a}=(\ddot{x},\ddot{y},\ddot{z})\). The following holds:
\[s(t)=s_0+\int|\vec{v}(t)|dt~;~~~\vec{r}(t)=\vec{r}_0+\int\vec{v}(t)dt~;~~~\vec{v}(t)=\vec{v}_0+\int\vec{a}(t)dt\]
When the acceleration is constant this gives: \(v(t)=v_0+at\) and \(s(t)=s_0+v_0t+ \frac{1}{2} at^2\).
For the unit vectors in a direction \(\perp\) to the orbit \(\vec{e}_{\rm t}\) and parallel to it \(\vec{e}_{\rm n}\):
\[\vec{e}_{\rm t}=\frac{\vec{v}}{|\vec{v}|}=\frac{d\vec{r}}{ds}~~~\dot{\vec{e}_{\rm t}}= \frac{v}{\rho}\vec{e}_{\rm n}~;~~~\vec{e}_{\rm n}=\frac{\dot{\vec{e}_{\rm t}}}{|\dot{\vec{e}_{\rm t}}|}\]
For the curvature \(k\) and the radius of curvature \(\rho\): \[\vec{k}=\frac{d\vec{e}_{\rm t}}{ds}=\frac{d^2\vec{r}}{ds^2}=\left|\frac{d\varphi}{ds}\right| ~;~~~\rho=\frac{1}{|k|}\]
Polar coordinates
Polar coordinates are defined by: \(x=r\cos(\theta)\), \(y=r\sin(\theta)\). So, for the unit coordinate vectors: \(\dot{\vec{e}_{r}}=\dot{\theta}\vec{e}_{\theta}\), \(\dot{\vec{e}_{\theta}}=-\dot{\theta}\vec{e}_{r}\)
The velocity and the acceleration are derived from: \[\vec{r}=r\vec{e}_{r} \; ,\;\; \vec{v}=\dot{r}\vec{e}_{r}+r\dot{\theta}\vec{e}_{\theta} \; ,\;\; \vec{a}=(\ddot{r}-r\dot{\theta}^2)\vec{e}_{r}+(2\dot{r}\dot{\theta}+r\ddot{\theta})\vec{e}_{\theta}\].
Relative motion
For the motion of a point D w.r.t. a point Q: \(\displaystyle\vec{r}_{\rm D}=\vec{r}_{\rm Q}+\frac{\vec{\omega}\times\vec{v}_{\rm Q}}{\omega^2}\) with \(\vec{\rm QD}=\vec{r}_{\rm D}-\vec{r}_{\rm Q}\) and \(\omega=\dot{\theta}\).
Further a prime on a symbol \(\alpha=\ddot{\theta}\) \('\) means that the quantity is defined in a moving system of coordinates. In a moving system: \(\vec{v}=\vec{v}_{Q}+\vec{v}\,'+\vec{\omega}\times\vec{r}\,'\) and \(\vec{a}=\vec{a}_{Q}+\vec{a}\,'+\vec{\alpha}\times\vec{r}\,'+2\vec{\omega}\times\vec{v}\,'+\vec{\omega}\times(\vec{\omega}\times\vec{r}\,')\) with \(\vec{\omega}\times(\vec{\omega}\times\vec{r}\,')=-\omega^2\vec{r}\,'_n\)
Point-dynamics in a fixed coordinate system
Force, (angular)momentum and energy
Newton’s 2nd law connects the force on an object and the resulting acceleration of the object where the momentum is given by \(\vec{p}=m\vec{v}\):
\[\vec{F}(\vec{r},\vec{v},t)=\frac{d\vec{p}}{dt}=\frac{d(m\vec{v}\,)}{dt}=m\frac{d\vec{v}}{dt}+ \vec{v}\,\frac{dm}{dt}\mathop{=}\limits^{m={\rm const}}m\vec{a}\] Newton’s 3rd law is given by: \(\vec{F}_{\rm action}=-\vec{F}_{\rm reaction}\).
For the power \(P\): \(P=\dot{W}=\vec{F}\cdot\vec{v}\). For the total energy \(W\), the kinetic energy \(T\) and the potential energy \(U\): \(W=T+U~;~~~\dot{T}=-\dot{U}\) with \(T= \frac{1}{2} mv^2\).
The kick \(\vec{S}\) is given by: \(\displaystyle\vec{S}=\Delta\vec{p}=\int\vec{F}dt\)
The work \(A\), delivered by a force, is \(\displaystyle A=\int\limits_1^2\vec{F}\cdot d\vec{s}=\int\limits_1^2F\cos(\alpha)ds\)
The torque \(\vec{\tau}\) is related to the angular momentum \(\vec{L}\): \(\vec{\tau}=\dot{\vec{L}}=\vec{r}\times\vec{F}\); and
\(\vec{L}=\vec{r}\times\vec{p}=m\vec{v}\times\vec{r}\), \(|\vec{L}|=mr^2\omega\). The following equation is valid:
\[\tau=-\frac{\partial U}{\partial \theta}\]
Hence, the conditions for a mechanical equilibrium are: \(\sum\vec{F}_i=0\) and \(\sum\vec{\tau}_i=0\).
The force of friction is usually proportional to the force perpendicular to the surface, except when the motion starts, when a threshold has to be overcome: \(F_{\rm fric}=f\cdot F_{\rm norm}\cdot\vec{e}_{\rm t}\).
Conservative force fields
A conservative force can be written as the gradient of a potential: \(\vec{F}_{\rm cons}=-\vec{\nabla}U\). From this follows that \(\nabla\times\vec{F}=\vec{0}\). For such a force field also:
\[\oint\vec{F}\cdot d\vec{s}=0~\Rightarrow~U=U_0-\int\limits_{r_0}^{r_1}\vec{F}\cdot d\vec{s}\]
So the work delivered by a conservative force field depends not on the trajectory covered but only on the starting and ending points of the motion.
Gravitation
The Newtonian law of gravitation is (in GRT one also uses \(\kappa\) instead of \(G\)):
\[\vec{F}_{\rm g}=-G\frac{m_1 m_2}{r^2}\vec{e}_{r}\]
The gravitational potential is then given by \(V=-Gm/r\). From Gauss' law it then follows: \(\nabla^2 V=4\pi G\varrho\).
Orbital equations
If \(V=V(r)\) one can derive from the equations of Lagrange for \(\phi\) the conservation of angular momentum:
\[\frac{\partial {\cal L}}{\partial \phi}=\frac{\partial V}{\partial \phi}=0\Rightarrow\frac{d}{dt}(mr^2\phi)=0\Rightarrow L_z=mr^2\phi=\mbox{constant}\]
For the radial position as a function of time it can be found that:
\[\left(\frac{dr}{dt}\right)^2=\frac{2(W-V)}{m}-\frac{L^2}{m^2r^2}\]
The angular equation is then:
\[\phi-\phi_0=\int\limits_0^r\left[\frac{mr^2}{L}\sqrt{\frac{2(W-V)}{m}-\frac{L^2}{m^2r^2}}~\right]^{-1}dr \stackrel{r^{-2}{\rm field}}{=} \arccos\left(1+\frac{\frac{1}{r}-\frac{1}{r_0}}{\frac{1}{r_0}+km/L_z^2}\right)\]
If \(F=F(r)\): \(L=\) constant, if \(F\) is conservative: \(W=\) constant, if \(\vec{F}\perp\vec{v}\) then \(\Delta T=0\) and \(U=0\).
Kepler’s orbital equations
In a force field \(F=kr^{-2}\), the orbits are conic sections with the origin of the force in one of the foci ( Kepler’s 1st law ). The equation of the orbit is:
\[r(\theta)=\frac{\ell}{1+\varepsilon\cos(\theta-\theta_0)}~,~~\mbox{or:~~} x^2+y^2=(\ell-\varepsilon x)^2\]
with
\[\ell=\frac{L^2}{G\mu^2M_{\rm tot}}~;~~~\varepsilon^2=1+\frac{2WL^2}{G^2\mu^3M^2_{\rm tot}}=1-\frac{\ell}{a} ~;~~~a=\frac{\ell}{1-\varepsilon^2}=\frac{k}{2W}\]
\(a\) is half the length of the long axis of the elliptical orbit in case the orbit is closed. Half the length of the short axis is \(b=\sqrt{a\ell}\). \(\varepsilon\) is the excentricity of the orbit. Orbits with an equal \(\varepsilon\) are of equal shape. Now, five types of orbits are possible:
- \(k<0\) and \(\varepsilon=0\): a circle.
- \(k<0\) and \(0<\varepsilon<1\): an ellipse.
- \(k<0\) and \(\varepsilon=1\): a parabola.
- \(k<0\) and \(\varepsilon>1\): a hyperbola, curved towards the centre of force.
- \(k>0\) and \(\varepsilon>1\): a hyperbola, curved away from the centre of force.
Other combinations are not possible: the total energy in a repulsive force field is always positive so \(\varepsilon>1\).
If the surface between the orbit covered between \(t_1\) and \(t_2\) and the focus C around which the planet moves is \(A(t_1,t_2)\), Kepler’s 2nd law is
\[A(t_1,t_2)=\frac{L_{\rm C}}{2m}(t_2-t_1)\]
Kepler’s 3rd law is, with \(T\) the period and \(M_{\rm tot}\) the total mass of the system is:
\[\frac{T^2}{a^3}=\frac{4\pi^2}{GM_{\rm tot}}\]
The virial theorem
The virial theorem for one particle is:
\[\left\langle m\vec{v}\cdot\vec{r} \right\rangle=0\Rightarrow\left\langle T \right\rangle=-\frac{1}{2}\left\langle \vec{F}\cdot\vec{r} \right\rangle=\frac{1}{2}\left\langle r\frac{dU}{dr} \right\rangle=\frac{1}{2} n\left\langle U \right\rangle\mbox{ if } U=-\frac{k}{r^n}\]
The virial theorem for a collection of particles is:
\[\left\langle T \right\rangle=-\frac{1}{2}\left\langle \sum\limits_{\rm particles}\vec{F}_i\cdot\vec{r}_i+ \sum\limits_{\rm pairs}\vec{F}_{ij}\cdot\vec{r}_{ij} \right\rangle\]
These propositions can also be written as: \(2E_{\rm kin}+E_{\rm pot}=0\).
Point dynamics in a moving coordinate system
Fictitious forces
The total force in a moving coordinate system can be found by subtracting the fictitious forces from the forces working in the reference frame: \(\vec{F}\,'=\vec{F}-\vec{F}_{\rm app}\). The different fictictous forces are:
- Transformation of the origin: \(F_{\rm or}=-m\vec{a}_a\)
- Rotation: \(\vec{F}_{\alpha}=-m\vec{\alpha}\times\vec{r}\,'\)
- Coriolis force: \(F_{\rm cor}=-2m\vec{\omega}\times\vec{v}\)
- Centrifugal force: \(\vec{F}_{\rm cf}=m\omega^2\vec{r}_n\,'=-\vec{F}_{\rm cp}\) ; \(\displaystyle\vec{F}_{\rm cp}=-\frac{mv^2}{r}\vec{e}_{r}\)
Tensor notation
Transformation of the Newtonian equations of motion to \(x^\alpha=x^\alpha(x)\) gives:
\[\frac{dx^\alpha}{dt}=\frac{\partial x^\alpha}{\partial \bar{x}^\beta}\frac{d\bar{x}^\beta}{dt};\]
The chain rule gives:
\[\frac{d}{dt}\frac{dx^\alpha}{dt}=\frac{d^2x^\alpha}{dt^2}=\frac{d}{dt} \left(\frac{\partial x^\alpha}{\partial \bar{x}^\beta}\frac{d\bar{x}^\beta}{dt}\right)= \frac{\partial x^\alpha}{\partial \bar{x}^\beta}\frac{d^2\bar{x}^\beta}{dt^2}+ \frac{d\bar{x}^\beta}{dt}\frac{d}{dt}\left(\frac{\partial x^\alpha}{\partial \bar{x}^\beta}\right)\]
so:
\[\frac{d}{dt}\frac{\partial x^\alpha}{\partial \bar{x}^\beta}=\frac{\partial }{\partial \bar{x}^\gamma}\frac{\partial x^\alpha}{\partial \bar{x}^\beta}\frac{d\bar{x}^\gamma}{dt}= \frac{\partial^2x^\alpha}{\partial\bar{x}^\beta\partial\bar{x}^\gamma}\frac{d\bar{x}^\gamma}{dt}\]
This leads to:
\[\frac{d^2x^\alpha}{dt^2}=\frac{\partial x^\alpha}{\partial \bar{x}^\beta}\frac{d^2\bar{x}^\beta}{dt^2}+ \frac{\partial^2x^\alpha}{\partial\bar{x}^\beta\partial\bar{x}^\gamma}\frac{d\bar{x}^\gamma}{dt} \left(\frac{d\bar{x}^\beta}{dt}\right)\]
Hence the Newtonian equation of motion
\[m\frac{d^2x^\alpha}{dt^2}=F^\alpha\]
will be transformed into:
\[m\left\{\frac{d^2x^\alpha}{dt^2}+\Gamma_{\beta\gamma}^\alpha \frac{dx^\beta}{dt}\frac{dx^\gamma}{dt}\right\}=F^\alpha\]
The apparent forces are projected from the origin to the side affected by \(\displaystyle\Gamma_{\beta\gamma}^\alpha\frac{dx^\beta}{dt}\frac{dx^\gamma}{dt}\).
Dynamics of masspoint collections
The centre of mass
The velocity w.r.t. the centre of mass \(\vec{R}\) is given by \(\vec{v}-\dot{\vec{R}}\). The coordinates of the centre of mass are given by:
\[\vec{r}_{\rm m}=\frac{\sum m_i\vec{r}_i}{\sum m_i}\]
In a 2-particle system, the coordinates of the centre of mass are given by:
\[\vec{R}=\frac{m_1\vec{r}_1+m_2\vec{r}_2}{m_1+m_2}\]
With \(\vec{r}=\vec{r}_1-\vec{r}_2\), the kinetic energy becomes: \( frac{1}{2} T=M_{\rm tot}\dot{R}^2+ frac{1}{2} \mu\dot{r}^2\), with the reduced mass \(\mu\) given by:
\[\displaystyle\frac{1}{\mu}=\frac{1}{m_1}+\frac{1}{m_2}\]
The motion of the centre of mass and relative to it can be separated:
\[\dot{\vec{L}}_{\rm outside}=\vec{\tau}_{\rm outside}~;~~~ \dot{\vec{L}}_{\rm inside}=\vec{\tau}_{\rm inside}\] \[\vec{p}=m\vec{v}_{\rm m}~;~~~\vec{F}_{\rm ext}=m\vec{a}_{\rm m}~;~~~\vec{F}_{12}=\mu\vec{u}\]
Collisions
With collisions, where B are the coordinates of the collision and C an arbitrary other position: \(\vec{p}=m\vec{v}_{\rm m}\) is constant, and \(T= \frac{1}{2} m\vec{v}_{\rm m}^{\,2}\) is constant. The changes in the relative velocities can be derived from: \(\vec{S}=\Delta\vec{p}=\mu(\vec{v}_{\rm aft}-\vec{v}_{\rm before})\). Further \(\Delta\vec{L}_{\rm C}=\vec{\rm CB}\times\vec{S}\), \(\vec{p}~\parallel~\vec{S}=\)constant and \(\vec{L}\) w.r.t. B is constant.
Dynamics of rigid bodies
Moment of Inertia
The angular momentum in a moving coordinate system is given by:
\[\vec{L}'=I\vec{\omega}+\vec{L}_n'\]
where \(I\) is the moment of inertia with respect to a central axis, which is given by:
\[I=\sum\limits_i m_i\vec{r}_i~^2~;~~~T'=W_{\rm rot}=\frac{1}{2} \omega I_{ij}\vec{e}_i\vec{e}_j=\frac{1}{2} I\omega^2\]
or, in the continuous case:
\[I=\frac{m}{V}\int{r'}^2_ndV=\int{r'}^2_ndm\]
Further:
\[L_i=I^{ij}\omega_j~;~~~I_{ii}=I_i~;~~~I_{ij}=I_{ji}=-\sum\limits_km_kx_i'x_j'\]
Steiner’s theorem is: \(I_{\rm w.r.t. D}=I_{\rm w.r.t. C}+m(DM)^2\) if axis C \(\parallel\) axis D.
| Object | \(I\) | Object | \(I\) |
|---|---|---|---|
|
Hollow cylinder |
\(I=mR^2\) | Massive cylinder | \(I= \frac{1}{2} mR^2\) |
|
Disc, axis in plane disc through m |
\(I= \frac{1}{4} mR^2\) | Dumbbell | \(I= \frac{1}{2} \mu R^2\) |
|
Hollow sphere |
\(I=\frac{2}{3}mR^2\) | Massive sphere | \(I=\frac{2}{5}mR^2\) |
|
Bar, axis \(\perp\) through c.o.m. |
\(I=\frac{1}{2}ml^2\) | Bar, axis \(\perp\) through end | \(I=\frac{1}{3}ml^2\) |
|
Rectangle, axis \(\perp\) plane thr. c.o

## Match 1.58 — LibreTexts: 1: Basics of Newtonian Mechanics
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_et_al.)/01%3A_Basics_of_Newtonian_Mechanics

Skip to main content
1: Basics of Newtonian Mechanics
-
-
Last updated
-
-
Save as PDF
-
-
-
1.0: Video Introduction to Chapter 1
-
Video introduction to the main focus of this chapter: the impact of forces and moments on bodies.
-
-
1.1: Bodies
-
Defines a body in the context of engineering mechanics. Discusses the differences between rigid and deformable bodies, and between particles and extended bodies.
-
-
1.2: Forces
-
Definition of a force. Quantities of interest of a force: magnitude, direction, points of application.
-
-
1.3: Moments
-
Definition and vector representation of moments. Brief overview of how to calculate moments. Lecture video covering topics from this section can be found at bottom of this page.
-
-
1.4: Free Body Diagrams
-
The process for drawing free body diagrams, and an overview of the types of forces commonly encountered in problems involving these diagrams. Contains multiple worked examples.
-
-
1.5: Newton's First Law
-
Explanation of Newton's First Law, relating force and velocity. Includes the role of net force and the law's application to rotational motion.
-
-
1.6: Newton's Second Law
-
Newton's Second Law and its application to both translational and rotational motion.
-
-
1.7: Newton's Third Law
-
Explanation of Newton's Third Law and Third Law force pairs, using real-world several examples.
-
-
1.8: Chapter 1 Homework Problems
-

## Match 1.56 — LibreTexts: 10.1: Example- Equations of Motion in Classical Mechanics
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Bookshelves/Mathematical_Physics_and_Pedagogy/Computational_Physics_(Chong)/10%3A_Numerical_Integration_of_ODEs/10.01%3A_Example-_Equations_of_Motion_in_Classical_Mechanics

10.1: Example- Equations of Motion in Classical Mechanics
The above standard formulation of the initial-value problem can be used to describe a very large class of time-dependent ODEs found in physics. For example, suppose we have a classical mechanical particle with position \(\vec{r}\), subject to an arbitrary external space-and-time-dependent force \(\vec{f}(\vec{r},t)\) and a friction force \(-\lambda d\vec{r}/dt\) (where \(\lambda\) is a damping coefficient). Newton's second law gives the following equation of motion:
\[m \frac{d^2 \vec{r}}{dt^2} = - \lambda \frac{d\vec{r}}{dt} + \vec{f}(\vec{r}, t).\]
This is a second-order ODE, whereas the standard initial-value problem involves a first-order ODE. However, we can turn it into a first-order ODE with the following trick. Define the velocity vector
\[\vec{v} = \frac{d\vec{r}}{dt},\]
and define the state vector by combining the position and velocity vectors:
\[\vec{y} = \begin{bmatrix}\vec{r} \\ \vec{v}\end{bmatrix}.\]
Then the equation of motion takes the form
\[\frac{d\vec{y}}{dt} = \frac{d}{dt}\begin{bmatrix}\vec{r} \\ \vec{v}\end{bmatrix} = \begin{bmatrix}\vec{v} \\ - (\lambda/m) \vec{v} + \vec{f}(\vec{r}, t)/m\end{bmatrix},\]
which is a first-order ODE, as desired. The quantity on the right-hand side is the derivative function \(\vec{F}(\vec{y},t)\) for the initial-value problem. Its dependence on \(\vec{r}\) and \(\vec{v}\) is simply regarded as a dependence on the upper and lower portions of the state vector \(\vec{y}\). In particular, note that the derivative function does not need to be linear, since \(\vec{f}\) can have any arbitrary nonlinear dependence on \(\vec{r}\), e.g. it could depend on the quantity \(|\vec{r}|\).
The "initial state", \(\vec{y}(t_0)\), requires us to specify both the initial position and velocity of the particle, which is consistent with the fact that the original equation of motion was a second-order equation, requiring two sets of initial values to fully specify a solution. In a similar manner, ODEs of higher order can be converted into first-order form, by defining the higher derivatives as state variables and increasing the size of the state vector.
