# Source pack — subjects/math/advanced/integration
Lesson title: Integration
Level: advanced
Match confidence: 3.06

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.06 — LibreTexts: 9.6: Integration and differentiation over angles
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Introductory_Dynamics%3A_2D_Kinematics_and_Kinetics_of_Point_Masses_and_Rigid_Bodies_(Steeneken)/03%3A_Rigid_Body_Dynamics/09%3A_Kinematics_of_Rigid_Bodies/9.06%3A_Integration_and_differentiation_over_angles

9.6: Integration and differentiation over angles
The vector equations from the previous sections are very useful for determining the kinematics of points in the rigid body at a certain time instant. However, to predict the motion at all times, the coordinate functions \(x_{A}(t), y_{A}(t)\) and
\(\phi_{B / A}(t)\) need to be determined. Using Equation 9.5 we can then describe the planar time-dependent motion of a point \(B\) as follows:
\[\overrightarrow{\boldsymbol{r}}_{B, 2 D}(t)=\overrightarrow{\boldsymbol{r}}_{A}(t)+\left|\overrightarrow{\boldsymbol{r}}_{B / A}\right| \cos \phi_{B / A}(t) \hat{\boldsymbol{\imath}}+\left|\overrightarrow{\boldsymbol{r}}_{B / A}\right| \sin \phi_{B / A}(t) \hat{\boldsymbol{\jmath}} \tag{9.66} \label{9.66}\]
The kinematics to describe the motion \(\overrightarrow{\boldsymbol{r}}_{A}(t)\) of point \(A\) is exactly the same as for the kinematics of point masses that were described in Ch. 5, using different coordinate systems and path curves. The new aspect is that for rigid bodies we also have to describe the time dependent angle \(\phi(t) \equiv \phi_{B / A}(t)\).
Luckily, for planar kinematics in 2D the required mathematics is completely the same as that for the path coordinate \(s_{A}\), such that the methods we discussed in Sec. 5.7 and Sec. 5.8 can be directly applied to the angle \(\phi(t)\). This thus just requires replacing \(s\) by \(\phi, v\) by \(\omega\) and \(a\) by \(\alpha\). For completeness we provide all the resulting equations for angles here. For time differentiation we get:
\[\begin{align} \phi(t) & \rightarrow \tag{9.67} \label{9.67}\\[4pt] \omega(t) & =\dot{\phi}(t) \rightarrow \tag{9.68} \label{9.68}\\[4pt] \alpha(t) & =\dot{\omega}(t)=\ddot{\phi}(t) \tag{9.69} \label{9.69}\end{align}\]
For time integration we obtain:
\[\begin{align} \alpha(t) & \rightarrow \tag{9.70} \label{9.70}\\[4pt] \omega\left(t_{2}\right) & =\omega\left(t_{1}\right)+\int_{t_{1}}^{t_{2}} \alpha(t) \mathrm{d} t \rightarrow \tag{9.71} \label{9.71}\\[4pt] \phi\left(t_{2}\right) & =\phi\left(t_{1}\right)+\int_{t_{1}}^{t_{2}} \omega(t) \mathrm{d} t \tag{9.72} \label{9.72}\end{align}\]
Similar to having functions along the path curve like \(a_{s}(s)\) and \(v_{s}(s)\), we can have functions for angle dependent angular velocity \(\omega_{\phi}(\phi)\) and angular acceleration \(\alpha_{\phi}(\phi)\). Differentiation and integration over these functions is similar to that over the path coordinate \(s\) :
\[\begin{align} \alpha_{\phi}(\phi)=\frac{\mathrm{d} \omega_{\phi}}{\mathrm{d} \phi} \omega_{\phi}(\phi) \tag{9.73} \label{9.73}\\[4pt] \omega_{\phi}^{2}\left(\phi_{2}\right)=\omega_{\phi}^{2}\left(\phi_{1}\right)+2 \int_{\phi_{1}}^{\phi_{2}} \alpha_{\phi}(\phi) \mathrm{d} \phi \tag{9.74} \label{9.74}\end{align}\]
Gearwheel \(A\) in Figure 9.8 has a constant acceleration \(\alpha_{A}\) and \(\omega_{A}=0, \phi_{A}=0\) at \(t=0\). Determine the time dependent angle \(\phi_{A}(t)\).
Solution
It is straightforward to obtain the solution by integration:
\[\begin{align} \omega_{A}(t) & =\omega_{A}(0)+\int_{0}^{t} \alpha_{A} \mathrm{~d} t=\alpha_{A} t \tag{9.75} \label{9.75}\\[4pt] \phi_{A}(t) & =\phi_{A}(0)+\int_{0}^{t} \alpha_{A} t \mathrm{~d} t=\frac{1}{2} \alpha_{A} t^{2} \tag{9.76} \label{9.76}\end{align}\]

## Match 3.04 — LibreTexts: 17.3: Centroids in Volumes and Center of Mass via Integration
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_et_al.)/17%3A_Appendix_2_-_Moment_Integrals/17.3%3A_Centroids_in_Volumes_and_Center_of_Mass_via_Integration

17.3: Centroids in Volumes and Center of Mass via Integration
The centroid of a volume can be thought of as the geometric center of that shape. It is often denoted as \(C\), being being located at the coordinates \((\bar{x}, \bar{y}, \bar{z})\). If this volume represents a part with a uniform density (like most single material parts) then the centroid will also be the center of mass, a point usually labeled as \(G\).
Just as with the centroids of an area, centroids of volumes and the center of mass are useful for a number of situations in the mechanics course sequence, including the analysis of distributed forces, simplifying the analysis of gravity (which is itself a distributed force), and as an intermediate step in determining mass moments of inertia.
Just as with areas, the location of the centroid (or center of mass) for a variety of common shapes can simply be looked up in tables, such as this one . However, we will often need to determine the centroid or center of mass for other shapes, and to do this we will generally use one of two methods.
- We can use the first moment integral to determine the centroid or center of mass location.
- We can use the method of composite parts along with centroid tables to determine the centroid or center of mass location.
On this page we will only discuss the first method, as the method of composite parts is discussed in a later section. However, the tables used in the method of composite parts are derived via the first moment integral, so both methods ultimately rely on first moment integrals.
Finding the Centroid of a Volume via the First Moment Integral
When we find the centroid of a three-dimensional shape, we will be looking for the \(x\), \(y\), and \(z\) coordinates (\(\bar{x}\), \(\bar{y}\), and \(\bar{z}\)) of the point that is the centroid of the shape.
Much like the centroid calculations we did with two-dimensional shapes, we are looking to find the shape's average coordinate in each dimension. We do this by summing up all the little bits of volume times the \(x\), \(y\), or \(z\) coordinate of that bit of volume and then dividing that sum by the total volume of the shape. Again we will use calculus to sum up an infinite number of infinitely small volumes. Specifically this sum will be the first rectangular volume moment integral for the shape.
\[ C = G = (\bar{x}, \bar{y}, \bar{z}) \quad \text{for constant-density shapes} \nonumber\]
Working in each of the three coordinate directions we wind up with the following three equations.
\[\begin{align*} \bar{x} &= \dfrac{\displaystyle \int_V (dV * x)}{V} \\[4pt] \bar{y} &= \dfrac{\displaystyle \int_V (dV * y)}{V} \\[4pt] \bar{z} &= \dfrac{\displaystyle \int_V (dV * z)}{V} \end{align*}\]
With these new equations we have the variable \(dV\) rather than \(dA\), because we are integrating over a volume rather than an area. This represents the rate of change of the volume as we move along an axis from one end to another. The rate of change of the volume at any point on the shape will be the cross-sectional area that is perpendicular to that axis times the rate at which we are moving along that axis. Since cross-sectional area may vary as we move along the axis, we will need to determine a formula for the cross sectional area at any point along that axis.
Using the first moment integral and the equations shown above, we can theoretically find the centroid of any volume as long as we can write an equation to describe the cross section area for each direction. For more complex shapes, however, determining these equations and then integrating these equations may become very time-consuming. For these complex shapes, the method of composite parts or computer tools will most likely be much faster.
Using Symmetry as a Shortcut
Just as with 2D areas, shape symmetry can provide a shortcut in many centroid calculations. Remember that the centroid coordinate is the average \(x\), \(y\), and \(z\) coordinate for all the points in the shape. If the volume has a plane of symmetry, that means each point on one side of the line must have an equivalent point on the other side of the line. This means that the average value (AKA the centroid) must lie within that plane. If the volume has more than one plane of symmetry, then the centroid must exist at the intersection of those planes.
Finding the Center of Mass for Non-Uniform Density Shapes
If a body has a non-uniform density, then the centroid of the volume and the center of mass will no longer be the same point. In these cases, we will be integrating with respect to mass, rather than integrating the volume. To do this, we will use something called a density function, which will provide the density (the mass per unit volume) in terms of the \(x\), \(y\), and/or \(z\) location. In the end, we will also be dividing by total mass, rather than dividing by total volume. The generalized equations for the center of mass are shown in the equations below.
\[ C \neq G \]
\[ G = (x_G, y_G, z_G) \]
\begin{align} x_G &= \dfrac{\int_m (dm*x)}{m} = \dfrac{\int_V (\rho (x,y,z) * dV * x)}{m} \\[4pt] y_G &= \dfrac{\int_m (dm*y)}{m} = \dfrac{\int_V (\rho (x,y,z) * dV * y)}{m} \\[4pt] z_G &= \dfrac{\int_m (dm*z)}{m} = \dfrac{\int_V (\rho (x,y,z) * dV * z)}{m} \end{align}
In instances of uniform density (where the density function did not vary with location and was therefore just a constant), the density constant could be moved outside of the integral. On the bottom, we could also write mass as density times volume, and the density terms on the top and bottom of the fraction would cancel out. That is why for uniform-density parts, the centroid and center of mass will be the same point.
When we have a density function that is not a constant, we will have to come up with a mathematical function for the density in terms of \(x\) and/or \(y\) and/or \(z\) locations. If density varies along more than one axis, determining the function and then integrating it may become quite difficult, and computer modeling may be advisable in these situations.
Once you have the density function, you will multiply that by the relevant \(dV\) function as discussed earlier on the page and multiply it by the variable for the relevant axis. This entire function is integrated from left to right, bottom to top, or back to front, and then that quantity is divided by mass to find the location of the center of mass.
Example \(\PageIndex{1}\)
The cone shown below is four inches tall and has a four-inch-diameter base. Find the \(x\), \(y\), and \(z\) coordinates of the centroid.
- Solution:
Example \(\PageIndex{2}\)
Find the y coordinate of the centroid for the tetrahedron shown in the image below. (The fourth vertex is at the origin)
- Solution:
Example \(\PageIndex{3}\)
A water and ceramic slurry with a uniform density of 1100 kilograms per meter cubed enters a settling tank with a height of 1 meter and a diameter of 1 meter. After one hour in the tank, the density of the slurry at the top of the tank is measured to be 1000 kilograms per meter cubed and the density at the bottom of the tank is measured to be 1200 kilograms per meter cubed. Assume the density of the slurry varies linearly between the top and the bottom. How far has the center of mass of the slurry dropped between the initial conditions and the current state?
- Solution:

## Match 3.04 — LibreTexts: 3.4: Double Integration with Polar Coordinates
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Courses/Oxnard_College/Multivariable_Calculus/03%3A_Multiple_Integration/3.04%3A_Double_Integration_with_Polar_Coordinates

3.4: Double Integration with Polar Coordinates
-
- Last updated
- Save as PDF
We have used iterated integrals to evaluate double integrals, which give the signed volume under a surface, \(z=f(x,y)\), over a region \(R\) of the \(xy\)-plane. The integrand is simply \(f(x,y)\), and the bounds of the integrals are determined by the region \(R\).
Some regions \(R\) are easy to describe using rectangular coordinates -- that is, with equations of the form \(y=f(x)\), \(x=a\), etc. However, some regions are easier to handle if we represent their boundaries with polar equations of the form \(r=f(\theta)\), \(\theta = \alpha\), etc.
The basic form of the double integral is \(\displaystyle \iint_R f(x,y)\ dA\). We interpret this integral as follows: over the region \(R\), sum up lots of products of heights (given by \(f(x_i,y_i)\)) and areas (given by \(\Delta A_i\)). That is, \(dA\) represents "a little bit of area.'' In rectangular coordinates, we can describe a small rectangle as having area \(dx\ dy\) or \(dy\,dx\) -- the area of a rectangle is simply length\(\times\)width -- a small change in \(x\) times a small change in \(y\). Thus we replace \(dA\) in the double integral with \(dx\,dy\) or \(dy \,dx\).
FIGURE \(\PageIndex{1} \label{double_pol_intro}\)
Now consider representing a region \(R\) with polar coordinates. Consider Figure \(\PageIndex{1a}\). Let \(R\) be the region in the first quadrant bounded by the curve. We can approximate this region using the natural shape of polar coordinates: portions of sectors of circles. In the figure, one such region is shaded, shown again in part (b) of the figure.
As the area of a sector of a circle with radius \(r\), subtended by an angle \(\theta\), is \(A = \frac12r^2\theta\), we can find the area of the shaded region. The whole sector has area \(\frac12r_2^2\Delta \theta\), whereas the smaller, unshaded sector has area \(\frac12r_1^2\Delta \theta\). The area of the shaded region is the difference of these areas:
\[\Delta A_i = \frac12r_2^2\Delta\theta-\frac12r_1^2\Delta\theta = \frac12\big(r_2^2-r_1^2\big)\big(\Delta\theta\big) = \frac{r_2+r_1}{2}\big(r_2-r_1\big)\Delta\theta.\]
Note that \((r_2+r_1)/2\) is just the average of the two radii.
To approximate the region \(R\), we use many such subregions; doing so shrinks the difference \(r_2-r_1\) between radii to 0 and shrinks the change in angle \(\Delta \theta\) also to 0. We represent these infinitesimal changes in radius and angle as \(dr\) and \(d\theta\), respectively. Finally, as \(dr\) is small, \(r_2\approx r_1\), and so \((r_2+r_1)/2\approx r_1\). Thus, when \(dr\) and \(d\theta\) are small,
\[\Delta A_i \approx r_i \,dr \,d\theta.\]
Taking a limit, where the number of subregions goes to infinity and both \(r_2-r_1\) and \(\Delta\theta\) go to 0, we get \[dA = r \,dr \,d\theta.\]
So to evaluate \( \displaystyle \iint_Rf(x,y)\ dA\), replace \(dA\) with \(r \,dr \,d\theta\). Convert the function \(z=f(x,y)\) to a function with polar coordinates with the substitutions \(x=r\cos\theta\), \(y=r\sin\theta\). Finally, find bounds \(g_1(\theta)\leq r\leq g_2(\theta)\) and \(\alpha\leq\theta\leq\beta\) that describe \(R\). This is the key principle of this section, so we restate it here as a Key Idea.
Key Idea: Evaluating Double Integrals with Polar Coordinates
Let \(R\) be a plane region bounded by the polar equations \(\alpha\leq\theta\leq\beta\) and \(g_1(\theta)\leq r\leq g_2(\theta)\). Then
\[\iint_Rf(x,y)\ dA = \int_\alpha^\beta\int_{g_1(\theta)}^{g_2(\theta)} f\big(r\cos\theta,r\sin\theta\big)\ \,r \,dr \,d\theta.\]
Examples will help us understand this Key Idea.
Example \(\PageIndex{1}\): Evaluating a double integral with polar coordinates
Find the signed volume under the plane \(z= 4-x-2y\) over the circle with equation \(x^2+y^2=1\).
Solution
The bounds of the integral are determined solely by the region \(R\) over which we are integrating. In this case, it is a circle with equation \(x^2+y^2=1\). We need to find polar bounds for this region. It may help to review polar coordinates earlier in this text; bounds for this circle are \(0\leq r\leq 1\) and \(0\leq \theta\leq 2\pi\).
We replace \(f(x,y)\) with \(f(r\cos\theta,r\sin\theta)\). That means we make the following substitutions:
\[4-x-2y \quad \Rightarrow \quad 4-r\cos\theta-2r\sin\theta.\nonumber\]
Finally, we replace \(dA\) in the double integral with \(r \,dr \,d\theta\). This gives the final iterated integral, which we evaluate:
\[\begin{align*}
\iint_Rf(x,y)\ dA &= \int_0^{2\pi}\int_0^1\big(4-r\cos\theta-2r\sin\theta\big)r \,dr \,d\theta\\
&= \int_0^{2\pi}\int_0^1\big(4r-r^2(\cos\theta-2\sin\theta)\big) dr \,d\theta\\
&= \int_0^{2\pi}\left.\left(2r^2-\frac13r^3(\cos\theta-2\sin\theta)\right)\right|_0^1d\theta\\
&= \int_0^{2\pi} \left(2-\frac13\big(\cos\theta-2\sin\theta\big)\right) d\theta\\
&= \left.\left(2\theta -\frac13\big(\sin\theta+2\cos\theta\big)\right)\right|_0^{2\pi} \\
&= 4\pi \approx 12.566.
\end{align*}\]
FIGURE \(\PageIndex{2}\)
The surface and region \(R\) are shown in Figure \(\PageIndex{2}\).
Example \(\PageIndex{2}\): Evaluating a double integral with polar coordinates
Find the volume under the paraboloid \(z=4-(x-2)^2-y^2\) over the region bounded by the circles \((x-1)^2+y^2=1\) and \((x-2)^2+y^2=4\).
Solution
At first glance, this seems like a very hard volume to compute as the region \(R\) (shown in Figure \(\PageIndex{3a}\)) has a hole in it, cutting out a strange portion of the surface, as shown in part (b) of the figure. However, by describing \(R\) in terms of polar equations, the volume is not very difficult to compute.
FIGURE \(\PageIndex{3}\)
It is straightforward to show that the circle \((x-1)^2+y^2=1\) has polar equation \(r=2\cos\theta\), and that the circle \((x-2)^2+y^2=4\) has polar equation \(r=4\cos\theta\). Each of these circles is traced out on the interval \(0\leq\theta\leq\pi\). The bounds on \(r\) are \(2\cos\theta\leq r\leq 4\cos\theta.\)
Replacing \(x\) with \(r\cos\theta\) in the integrand, along with replacing \(y\) with \(r\sin \theta\), prepares us to evaluate the double integral \(\displaystyle \iint_Rf(x,y)\ dA\):
\[\begin{align*}
\iint_Rf(x,y)\ dA &= \int_0^{\pi}\int_{2\cos\theta}^{4\cos\theta} \Big(4-\big(r\cos\theta-2\big)^2-\big(r\sin\theta\big)^2\Big)r \,dr \,d\theta\\
%&=\int_0^{\pi}\int_{2\cos\theta}^{4\cos\theta} \big(r^3\cos^2\theta + r^3\sin^2\theta -4r^2\cos \theta+4r\big) dr \,d\theta\\
&= \int_0^{\pi}\int_{2\cos\theta}^{4\cos\theta} \big(-r^3+4r^2\cos \theta\big) dr \,d\theta\\
&= \int_0^\pi \left.\left(-\frac14r^4+\frac43r^3\cos\theta\right)\right|_{2\cos\theta}^{4\cos\theta}d\theta\\
&=\int_0^\pi \left(\left[-\frac14(256\cos^4\theta)+\frac43(64\cos^4\theta)\right]-\right.\\
&\ \left.\left[-\frac14(16\cos^4\theta)+\frac43(8\cos^4\theta)\right]\right) d\theta\\
&=\int_0^\pi\frac{44}3\cos^4\theta \,d\theta. \end{align*}\]
To integrate \(\cos^4\theta\), rewrite it as \(\cos^2\theta\cos^2\theta\) and employ the power-reducing formula twice:
\[\begin{align*}\cos^4\theta &=\cos^2\theta\cos^2\theta\\
&= \frac12\big(1+\cos(2\theta)\big)\frac12\big(1+\cos(2\theta)\big) \\
&= \frac14\big(1+2\cos(2\theta)+\cos^2(2\theta)\big)\\
&=\frac14\Big(1+2\cos(2\theta)+\frac12\big(1+\cos(4\theta)\big)\Big)\\
&= \frac38+\frac12\cos(2\theta)+\frac18\cos(4\theta).\end{align*}\]
Picking up from where we left off above, we have
\[\begin{align*} &=\int_0^\pi\frac{44}3\cos^4\theta \,d\theta\\
&=\int_0^\pi \frac{44}3\left(\frac38+\frac12\cos(2\theta)+\frac18\cos(4\theta)\right)d\theta\\
&= \left.\frac{44}3\left(\frac{3}8\theta+\frac14\sin(2\theta)+\frac{1}{32}\sin(4\theta)\right)\right|_0^\pi\\
&=\frac{11}2\pi\approx 17.279.
\end{align*}\]
While this example was not trivial, the double integral would have been much harder to evaluate had we used rectangular coordinates.
Example \(\PageIndex{3}\): Evaluating a double integral with polar coordinates
Find the volume under the surface \( f(x,y) =\dfrac1{x^2+y^2+1}\) over the sector of the circle with radius \(a\) centered at the origin in the first quadrant, as shown in Figure \(\PageIndex{4}\).
FIGURE \(\PageIndex{4}\)
Solution
The region \(R\) we are integrating over is a circle with radius \(a\), restricted to the first quadrant. Thus, in polar, the bounds on \(R\) are \(0\leq r\leq a\), \(0\leq\theta\leq\pi/2\). The integrand is rewritten in polar as
\[\frac{1}{x^2+y^2+1} \Rightarrow \frac{1}{r^2\cos^2\theta+r^2\sin^2\theta+1} = \frac1{r^2+1}.\]
We find the volume as follows:
\[\begin{align*}
\iint_Rf(x,y)\ dA &= \int_0^{\pi/2}\int_0^a\frac{r}{r^2+1} \,dr \,d\theta\\
&= \int_0^{\pi/2} \frac12\big(\ln|r^2+1|\big)\Big|_0^a \,d\theta\\
&=\int_0^{\pi/2} \frac12\ln(a^2+1) \,d\theta\\
&= \left.\left(\frac12\ln(a^2+1)\theta\right)\right|_0^{\pi/2}\\
&= \frac{\pi}{4}\ln(a^2+1).
\end{align*}\]
Figure \(\PageIndex{4}\) shows that \(f\) shrinks to near 0 very quickly. Regardless, as \(a\) grows, so does the volume, without bound.
Note:
Previous work has shown that there is finite
area
under \(\frac{1}{x^2+1}\) over the entire \(x\)-axis. However, Example \(\PageIndex{3}\) shows that there is infinite
volume
under \(\dfrac{1}{x^2+y^2+1}\) over the entire \(xy\)-plane.
Example \(\PageIndex{4}\): Finding the volume of a sphere
Find the volume of a sphere with radius \(a\).
Solution
The sphere of radius \(a\), centered at the origin, has equation \(x^2+y^2+z^2=a^2\); solving for \(z\), we have \(z=\sqrt{a^2-x^2-y^2}\). This gives the upper half of a sphere. We wish to find the volume under this top half, then double it to find the total volume.
The region we need to integrate over is the circle of radius \(a\), centered at the origin. Polar bounds for this equation are \(0\leq r\leq a\), \(0\leq\theta\leq2\pi\).
All together, the volume of a sphere with radius \(a\) is:
\[ 2\iint_R\sqrt{a^2-x^2-y^2}\ dA = 2\int_0^{2\pi}\int_0^a\sqrt{a^2-(r\cos\theta)^2-(r\sin\theta)^2}\,r \,dr \,d\theta\\
=2\int_0^{2\pi}\int_0^ar\sqrt{a^2-r^2} \,dr \,d\theta.\]
We can evaluate this inner integral with substitution. With \(u=a^2-r^2\), \(du = -2r \,dr\). The new bounds of integration are \(u(0) = a^2\) to \(u(a)=0\). Thus we have:
\[\begin{align*} &= \int_0^{2\pi}\int_{a^2}^0\big(-u^{1/2}\big) du \,d\theta\\
&= \int_0^{2\pi}\left.\left(-\frac23u^{3/2}\right)\right|_{a^2}^0 \,d\theta\\
&= \int_0^{2\pi}\left(\frac23a^3\right) d\theta\\
&= \left.\left(\frac23a^3\theta\right)\right|_0^{2\pi}\\
&= \frac43\pi a^3.
\end{align*}\]
Generally, the formula for the volume of a sphere with radius \(r\) is given as \(4/3\pi r^3\); we have justified this formula with our calculation.
Example \(\PageIndex{5}\): Finding the volume of a solid
A sculptor wants to make a solid bronze cast of the solid shown in Figure \(\PageIndex{5}\), where the base of the solid has boundary, in polar coordinates, \(r=\cos(3\theta)\), and the top is defined by the plane \(z=1-x+0.1y\). Find the volume of the solid.
FIGURE \(\PageIndex{5}\)
Solution
From the outset, we should recognize that knowing
how to set up
this problem is probably more important than knowing
how to compute the integrals
. The iterated integral to come is not "hard'' to evaluate, though it is long, requiring lots of algebra. Once the proper iterated integral is determined, one can use readily--available technology to help compute the final answer.
The region \(R\) that we are integrating over is bound by \(0\leq r\leq \cos(3\theta)\), for \(0\leq \theta\leq\pi\) (note that this rose curve is traced out on the interval \([0,\pi]\), not \([0,2\pi]\)). This gives us our bounds of integration. The integrand is \(z=1-x+0.1y\); converting to polar, we have that the volume \(V\) is:
\[V = \iint_R f(x,y)\ dA = \int_0^\pi\int_0^{\cos(3\theta)}\big(1-r\cos\theta+0.1r\sin\theta\big)r \,dr \,d\theta.\nonumber\]
Distributing the \(r\), the inner integral is easy to evaluate, leading to
\[ \int_0^\pi \left(\frac12\cos^2(3\theta)-\frac13\cos^3(3\theta)\cos\theta+\frac{0.1}3\cos^3(3\theta)\sin\theta\right) \,d\theta.\nonumber\]
This integ
