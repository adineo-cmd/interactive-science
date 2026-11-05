# Source pack — subjects/math/advanced/differential-equations
Lesson title: Differential Equations
Level: advanced
Match confidence: 3.07

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.07 — LibreTexts: 1.3: Classification of Differential Equations
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Courses/Lake_Tahoe_Community_College/MAT-204%3A_Differential_Equations_for_Science_(Lebl_and_Trench)/01%3A_Introduction/1.03%3A_Classification_of_Differential_Equations

1.3: Classification of Differential Equations
There are many types of differential equations, and we classify them into different categories based on their properties. Let us quickly go over the most basic classification. We already saw the distinction between ordinary and partial differential equations:
- Ordinary differential equations or (ODE) are equations where the derivatives are taken with respect to only one variable. That is, there is only one independent variable.
- Partial differential equations or (PDE) are equations that depend on partial derivatives of several variables. That is, there are several independent variables.
Let us see some examples of ordinary differential equations: \[\begin{align}\begin{aligned} & \frac{d y}{dt} = ky , & & \text{(Exponential growth)} \\ & \frac{d y}{dt} = k(A-y) , & & \text{(Newton's law of cooling)} \\ & m \frac{d^2 x}{dt^2} + c \frac{dx}{dt} + kx = f(t) . & & \text{(Mechanical vibrations)}\end{aligned}\end{align} \nonumber \] And of partial differential equations: \[\begin{align}\begin{aligned} & \frac{\partial y}{\partial t} + c \frac{\partial y}{\partial x} = 0 , & & \text{(Transport equation)} \\ & \frac{\partial u}{\partial t} = \frac{\partial^2 u}{\partial x^2} , & & \text{(Heat equation)} \\ & \frac{\partial^2 u}{\partial t^2} = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} . & & \text{(Wave equation in 2 dimensions)}\end{aligned}\end{align} \nonumber \]
If there are several equations working together, we have a so-called system of differential equations . For example, \[y' = x , \qquad x' = y \nonumber \] is a simple system of ordinary differential equations. Maxwell's equations for electromagnetics, \[\begin{align}\begin{aligned} & \nabla \cdot \vec{D} = \rho, & & \nabla \cdot \vec{B} = 0 , \\ & \nabla \times \vec{E} = - \frac{\partial \vec{B}}{\partial t}, & & \nabla \times \vec{H} = \vec{J} + \frac{\partial \vec{D}}{\partial t} ,\end{aligned}\end{align} \nonumber \] are a system of partial differential equations. The divergence operator \(\nabla \cdot\) and the curl operator \(\nabla \times\) can be written out in partial derivatives of the functions involved in the \(x\), \(y\), and \(z\) variables.
The next bit of information is the order of the equation (or system). The order is simply the order of the largest derivative that appears. If the highest derivative that appears is the first derivative, the equation is of first order. If the highest derivative that appears is the second derivative, then the equation is of second order. For example, Newton’s law of cooling above is a first order equation, while the mechanical vibrations equation is a second order equation. The equation governing transversal vibrations in a beam, \[a^4 \frac{\partial^4 y}{\partial x^4} + \frac{\partial^2 y}{\partial t^2} = 0, \nonumber \] is a fourth order partial differential equation. It is fourth order as at least one derivative is the fourth derivative. It does not matter that the derivative in \(t\) is only of second order.
In the first chapter, we will start attacking first order ordinary differential equations, that is, equations of the form \(\frac{dy}{dx} = f(x,y)\). In general, lower order equations are easier to work with and have simpler behavior, which is why we start with them.
We also distinguish how the dependent variables appear in the equation (or system). In particular, we say an equation is linear if the dependent variable (or variables) and their derivatives appear linearly, that is only as first powers, they are not multiplied together, and no other functions of the dependent variables appear. In other words, the equation is a sum of terms, where each term is some function of the independent variables or some function of the independent variables multiplied by a dependent variable or its derivative. Otherwise, the equation is called nonlinear . For example, an ordinary differential equation is linear if it can be put into the form \[\label{eq:2} a_n(x) \frac{d^n y}{dx^n} + a_{n-1}(x) \frac{d^{n-1} y}{dx^{n-1}} + \cdots + a_{1}(x) \frac{dy}{dx} + a_{0}(x) y = b(x) . \] The functions \(a_0\), \(a_1\), …, \(a_n\) are called the coefficients . The equation is allowed to depend arbitrarily on the independent variable. So \[\label{eq:3} e^x \frac{d^2 y}{dx^2} + \sin(x) \frac{d y}{dx} + x^2 y = \frac{1}{x} \] is still a linear equation as \(y\) and its derivatives only appear linearly.
All the equations and systems above as examples are linear. It may not be immediately obvious for Maxwell’s equations unless you write out the divergence and curl in terms of partial derivatives. Let us see some nonlinear equations. For example , \[\frac{\partial y}{\partial t} + y \frac{\partial y}{\partial x} = \nu \frac{\partial^2 y}{\partial x^2} , \nonumber \] is a nonlinear second order partial differential equation. It is nonlinear because \(y\) and \(\frac{\partial y}{\partial x}\) are multiplied together. The equation \[\label{eq:4} \frac{dx}{dt} = x^2 \] is a nonlinear first order differential equation as there is a second power of the dependent variable \(x\).
A linear equation may further be called homogenous if all terms depend on the dependent variable. That is, if no term is a function of the independent variables alone. Otherwise, the equation is called homogeneous or inhomogeneous . For example, the exponential growth equation, the wave equation, or the transport equation above are homogeneous. The mechanical vibrations equation above is nonhomogeneous as long as \(f(t)\) is not the zero function. Similarly, if the ambient temperature \(A\) is nonzero, Newton’s law of cooling is nonhomogeneous. A homogeneous linear ODE can be put into the form \[a_n(x) \frac{d^n y}{dx^n} + a_{n-1}(x) \frac{d^{n-1} y}{dx^{n-1}} + \cdots + a_{1}(x) \frac{dy}{dx} + a_{0}(x) y = 0 . \nonumber \] Compare to \(\eqref{eq:2}\) and notice there is no function \(b(x)\).
If the coefficients of a linear equation are actually constant functions, then the equation is said to have constant coefficients . The coefficients are the functions multiplying the dependent variable(s) or one of its derivatives, not the function \(b(x)\) standing alone. A constant coefficient nonhomogeneous ODE is an equation of the form \[a_n \frac{d^n y}{dx^n} + a_{n-1} \frac{d^{n-1} y}{dx^{n-1}} + \cdots + a_{1} \frac{dy}{dx} + a_{0} y = b(x) , \nonumber \] where \(a_0, a_1, \ldots, a_n\) are all constants, but \(b\) may depend on the independent variable \(x\). The mechanical vibrations equation above is a constant coefficient nonhomogeneous second order ODE. The same nomenclature applies to PDEs, so the transport equation, heat equation and wave equation are all examples of constant coefficient linear PDEs.
Finally, an equation (or system) is called autonomous if the equation does not depend on the independent variable. For autonomous ordinary differential equations, the independent variable is then thought of as time. Autonomous equation means an equation that does not change with time. For example, Newton’s law of cooling is autonomous, so is equation \(\eqref{eq:4}\). On the other hand, mechanical vibrations or \(\eqref{eq:3}\) are not autonomous.
Below is a video on defining and classifying differential equations.

## Match 3.05 — LibreTexts: 2.6: Second-Order Differential and Difference Equations
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/3.0/ · https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Introductory_Electrical_Engineering/A_First_Course_in_Electrical_and_Computer_Engineering_(Scharf)/02%3A_The_Exponential_Functions/2.06%3A_Second-Order_Differential_and_Difference_Equations

2.6: Second-Order Differential and Difference Equations
With our understanding of the functions \(e^x\), \(e^{jΘ}\), and the quadratic equation \(z^2 + \frac b a z + \frac c a =0\), we can undertake a rudimentary study of differential and difference equations.
Differential Equations
In your study of circuits and systems you will encounter the homogeneous differential equation
\[\frac {d^2} {dt^2} x(t)+a_1\frac d {dt} x(t)+a_2=0 \nonumber \]
Because the function \(e^{st}\) reproduces itself under differentiation, it is plausible to assume that x(t)=est is a solution to the differential equation. Let's try it:
\[\frac {d^2} {dt^2}(e^{st})+a_1\frac d {dt}(e^{st})+a_2(e^{st})=0 \nonumber \]
\[(s^2+a_1s+a_2)e^{st}=0 \nonumber \]
If this equation is to be satisfied for all \(t\), then the polynomial in \(s\) must be zero. Therefore we require
\[s^2+a_1s+a_2=0 \nonumber \]
As we know from our study of this quadratic equation, the solutions are
\[s_{1,2}=−\frac {a_1} 2 ± \frac 1 2 \sqrt{a^2_1−4a_2} \nonumber \]
This means that our assumed solution works, provided \(s=s_1\) or \(s_2\). It is a fundamental result from the theory of differential equations that the most general solution for x(t) is a linear combination of these assumed solutions:
\[x(t)=A_1e^{s_1t}+A_2e^{s_2t} \nonumber \]
If \(a^2_1−4a_2\) is less than zero, then the roots \(s_1\) and \(s_2\) are complex:
\[s_{1,2}=−\frac {a_1} 2 ± j\frac 1 2 \sqrt{4a_2−a^2_1} \nonumber \]
Let's rewrite this solution as
\[s_{1,2}=σ±jω \nonumber \]
where σ and ω are the constants
\[σ=−\frac {a_1} 2 \nonumber \]
\[ω=\frac 1 2 \sqrt{4a_2−a^2_1} \nonumber \]
With this notation, the solution for x(t) is
\[x(t)=A_1e^{σt}e^{jωt}+A_2e^{σt}e^{−jωt} \nonumber \]
If this solution is to be real, then the two terms on the right-hand side must be complex conjugates. This means that \(A_2=A^∗_1\) and the solution for x(t) is
\[x(t)=A_1e^{σt}e^{jωt}+A^∗_1e^{σt}e^{−Jωt} = 2\mathrm{Re} \{A_1e^{σt} e^{jωt}\} \nonumber \]
The constant \(A_1\) may be written as \(A_1=|A|e^{jφ}\). Then the solution for x(t) is
\[x(t)=2|A|e^{σt}\cos(ωt+φ) \nonumber \]
This “damped cosinusoidal solution” is illustrated in the Figure.
Find the general solutions to the following differential equations:
a. \(\frac {d^2} {dt^2} X(t)+2\frac d {dt} x(t)+2=0\)
b. \(\frac {d^2} {dt^2} x(t)+2\frac d {dt} x(t)−2=0\)
c. \(\frac {d^2} {dt^2} x(t)+2=0\)
Difference Equations
In your study of digital filters you will encounter homogeneous difference equations of the form
\[x_n+a_1x_n−1+a_2x_{n−2}=0 \nonumber \]
What this means is that the sequence \(\{x_n\}\) obeys a homogeneous recursion:
\[x_n=−a_1x_{n−1}−a_2x_{n−2} \nonumber \]
A plausible guess at a solution is the geometric sequence \(x_n=z^n\). With this guess, the difference equation produces the result
\[z^n+a_1z^n−1+a_2z^{n−2}=0 \nonumber \]
\[(1+a_1z^{−1}+a_2z^{−2})z^n=0 \nonumber \]
If this guess is to work, then the second-order polynomial on the left-hand side must equal zero:
\[1+a_1z^{−1}+a_2z^{−2}=0 \nonumber \]
\[z^2+a_1z+a_2=0 \nonumber \]
The solutions are
\[z_{1,2}=−\frac {a_1} 2 ± j\frac 1 2 \sqrt{4a_2−a^2_1} = re^{jθ} \nonumber \]
The general solution to the difference equation is a linear combination of the assumed solutions:
\[x_n=A_1z^n_1+A_2(z^∗_1)^n \nonumber \]
\[=A_1z^n_1+A^∗_1(z^∗_1) \nonumber \]
\[=2\mathrm{Re}{A_1z^n_1} \nonumber \]
\[=2|A|r^n\cos(θn+φ) \nonumber \]
This general solution is illustrated in the Figure.
Find the general solutions to the following difference equations:
a. x_n+2x_{n−1}+2=0
b. x_n−2x_{n−1}+2=0
c. x_n+2x_{n−2}=0

## Match 3.05 — LibreTexts: 5.4: Homework- Introduction to Differential Equations
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Calculus/Informal_Calculus_with_Applications_to_Biological_and_Environmental_Sciences_(Seacrest)/05%3A_Differential_Equations/5.04%3A_Homework-_Introduction_to_Differential_Equations

5.4: Homework- Introduction to Differential Equations
- Describe as best you can at this point in your own words what a differential equation is.
-
Following earnings example from the previous chapter, if the number of employees in a company is growing at a rate of \(0.05\) times the number of employees, what is a differential equation that describes this situation?
\(E'(t) = 0.05 E(t)\).ans
-
Verify the function \(f(x) = e^x - x - 1\) solves the differential equation:
\(f'(x) = f(x) + x\)
We see\[\begin{align*} f'(x) & = f(x) + x \\ e^x - 1 & = (e^x - x - 1) + x \\ e^x - 1 & = e^x - 1 \end{align*}\]
as desired.
ans -
Verify the function \(f(x) = 2 \sqrt{x}\) satisfies the differential equation:
\(f'(x) = \frac{2}{f(x)}.\)
We seeas desired.
ans -
For each differential equation, find \(f'(t)\) for the given value of \(t\), or state there is not enough information.
-
Suppose \(f'(t) = 3 f(t) + 5\) and \(f(3) = -1\). Find \(f'(3)\).
\(2\)ans
-
Suppose \(f'(t) = t + f(t)\), and \(f(7) = 1\). Find \(f'(7)\).
\(8\)ans
-
Suppose \(f'(t) = \frac{1}{ \sqrt{f(t)} }\) and \(f(0) = 9\). Find \(f'(0)\).
\(\frac{1}{3}\)ans
-
Suppose \(f'(t) = e^{-f(t)}\) and \(f(0) = 1\). Find \(f'(1)\).
Not enough information.ans
-
Suppose \(f'(t) = 3 f(t) + 5\) and \(f(3) = -1\). Find \(f'(3)\).
-
For each relationship between the value of a function and its derivative, write down a differential equation. For example, if I said “a function is growing at a rate equal to seven times the value of the function” you’d write down \(f'(t) = 7 f(t)\).
-
A function is growing at a rate equal to twice the function value.
\(f'(t) = 2 f(t)\)ans
-
A function is growing at a rate equal to the square root of the function value.
\(f'(t) = \sqrt{f(t)}\)ans
-
A function is growing at a rate equal to \(t\) times the function value.
\(f'(t) = t f(t)\)ans
-
A function is accelerating at a rate equal to the sum of the function value and how quickly the function is growing.
\(f''(t) = f'(t) + f(t)\).ans
-
A function is growing at a rate equal to twice the function value.
-
Verify that the given solution to each differential equation is correct.
-
Differential equation \(f'(t) = f(t) + 3\), solution \(f(t) = 3 e^t - 3\).
\[\begin{align*} f'(t) & = f(t) + 3 \\ \frac{d}{dt}(3e^t - 3) & = (3e^t - 3) + 3 \\ 3e^t & = 3e^t \end{align*}\]
ans -
Differential equation \(f'(t) = 4\sqrt{f(t)}\), solution \(f(t) = 4 t^2\).
\[\begin{align*} f'(t) & = 4 \sqrt{f(t)} \\ \frac{d}{dt}(4 t^2) & = 4 \sqrt{4 t^2} \\ 8t & = 4(2t) \\ 8t & = 8t. \end{align*}\]
ans -
Differential equation \(f'(t) = (f(t))^2\), solution \(f(t) = -t^{-1}\).
\[\begin{align*} f'(t) & = (f(t))^2 \\ \frac{d}{dt} (-t^{-1}) & = (-t^{-1})^2 \\ t^{-2} & = t^{-2} \end{align*}\]
ans -
Differential equation \(f'(t) = e^{-f(t)}\), solution \(f(t) = \ln(t)\).
\[\begin{align*} f'(t) & = e^{-f(t)} \\ \frac{d}{dt} \ln(t) & = e^{-\ln(t)} \\ \frac{1}{t} & = \frac{1}{e^{\ln(t)}} \\ \frac{1}{t} & = \frac{1}{t} \end{align*}\]
ans
-
Differential equation \(f'(t) = f(t) + 3\), solution \(f(t) = 3 e^t - 3\).
