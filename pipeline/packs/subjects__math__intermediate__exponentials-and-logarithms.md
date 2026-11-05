# Source pack — subjects/math/intermediate/exponentials-and-logarithms
Lesson title: Exponentials & Logarithms
Level: intermediate
Match confidence: 3.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.05 — LibreTexts: 3.5: Exponentials, Logarithms, and Trig Functions
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Calculus/Informal_Calculus_with_Applications_to_Biological_and_Environmental_Sciences_(Seacrest)/03%3A_Rules_for_Derivatives/3.05%3A_Exponentials_Logarithms_and_Trig_Functions

3.5: Exponentials, Logarithms, and Trig Functions
The function \(e^x\)
Recall that exponential functions like \(2^x\), \(3^x\), and \(e^x\). Note that \(e\) is just a number, equal to about \(2.718\), and is very special when it is the base of an exponential function. All these exponential functions grow extremely quickly. Here is \(e^x\), and watch how quickly it flies out of the picture.
We can modify it so it doesn’t grow so fast. Consider \(e^{0.1x}\):
But even this starts to grow very quickly when \(x\) gets large. Here is \(e^{0.1x}\) again for larger values of \(x\).
Hey, that looks a lot like the graph of \(e^x\) did! Why is that?
Exponentials at various rates of growth model a wide array of phenomena, including population growth, economic growth, radioactive decay, and more. And the reason \(e^x\) is a very special function is one of the most amazing formulas in math:
\(\boxed{\cfrac{d}{dx} e^x = e^x}\)
That’s right; \(e^x\) doesn’t change when you take the derivative!
The function \(\ln(x)\)
Logarithms, on the other hand, are some of the slowest growing functions. Here is \(\ln(x)\), which is \(\log_e(x)\), for large values of \(x\):
Notice even for large values of \(x\), the function does not get larger than \(4\) in this picture. Natural log \(\ln(x)\), which again is the log with base \(e\), also has a special derivative.
\(\boxed{\cfrac{d}{dx} \ln(x) = \frac{1}{x}}\)
Here is \(\ln(x)\) in blue plotted with its derivative \(\frac{1}{x}\) in green.
Find the following derivatives.
-
\(\frac{d}{dx} (e^x + \ln(x))\)
We just need to take the derivative of each term. The \(e^x\) stays the same when you take the derivative, so we just leave that piece. The \(\ln(x)\), as we saw above, has derivative \(\frac{1}{x}\). Hence
\(\frac{d}{dx} (e^x + \ln(x)) = \boxed{e^x + \frac{1}{x}}.\)
-
\(\frac{d}{dx} (5x^2 + 3e^x)\)
We can use the power rule on \(5x^2\) — multiply by the two, and subtract one from the two, to get \(10x\). We then see that \(e^x\) is \(e^x\), and the \(3\) stays along for the ride. So
\(\frac{d}{dx} (5x^2 + 3e^x) = \boxed{10x + 3e^x}.\)
-
\(\frac{d}{dx} \left( \frac{1}{x} + 4\ln(x) \right) \)
Remember that to take the derivative of \(\frac{1}{x}\), we rewrite as \(x^{-1}\) and use the power rule, and we have \(-1 x^{-2}\). For \(4 \ln(x)\), the \(\ln(x)\) becomes \(\frac{1}{x}\), and the four multiplies. Therefore we have
\(\frac{d}{dx} \left( \frac{1}{x} + 4 \ln(x) \right) = -1 x^{-2} + 4\left(\frac{1}{x} \right)\)
But wait — these fraction actually can be added together. First, change the \(x^{-2}\) back into \(\frac{1}{x^2}\). Then we’ll get a common denominator, and simplify.
\[\begin{align*} -1 x^{-2} + 4\left(\frac{1}{x} \right) & = \frac{-1}{x^2} + \frac{4}{x} \\ & = \frac{-1}{x^2} + \frac{4}{x} \cdot \frac{x}{x} \\ & = \frac{-1}{x^2} + \frac{4x}{x^2} \\ & = \frac{4x - 1}{x^2} \end{align*}\]
Hence we have
\(\frac{d}{dx} \left(\frac{1}{x} + 4 \ln(x)\right) = \boxed{\frac{4x - 1}{x^2}}.\)
Two more quick formulas.
\(\boxed{\cfrac{d}{dx} a^x= \ln(a) \cdot a^x}\)
\(\boxed{\cfrac{d}{dx} \log_a(x) = \frac{1}{\ln(a) \cdot x}}\)
We’ll prove the first rule once we have the chain rule up and running. For the second rule, the proof only requires the base change formula.
- \(\cfrac{d}{dx} \log_a(x) = \frac{1}{\ln(a) \cdot x}\)
We use the base change formula, which states
\(\log_a(x) = \frac{\ln(x)}{\ln(a)} = \frac{1}{\ln(a)} \ln(x)\)
From this we see
\[\begin{align*} \frac{d}{dx} \ \log_a(x) & = \frac{d}{dx} \ \frac{1}{\ln(a)} \ln(x) \\ & = \frac{1}{\ln(a)} \frac{d}{dx} \ \ln(x) \\ & = \frac{1}{\ln(a)} \cdot \frac{1}{x} \\ & = \frac{1}{\ln(a) \cdot x}. \end{align*}\]
Now this proof demonstrates a tricky thing in calculus: sometimes we can just “bring things out” of the derivative like we did with \(\frac{1}{\ln(a)}\), and other times we cannot. The reason we could take the \(\frac{1}{\ln(a)}\) out is that it is considered a constant . The derivative \(\frac{d}{dx}\) is only measuring the change as \(x\) changes, not as \(a\) changes. So \(\frac{1}{\ln(a)}\) is a constant, or unchanging value as \(x\) changes. Therefore, by the constant multiple rule, we can just take it out of the derivative.
Now to use the new rules.
Compute the following derivatives.
-
\(\frac{d}{dx} \ (2^x + 3^x)\)
We use the formula on \(2^x\) and see the derivative is \(\ln(2) \cdot 2^x\). Same goes for \(\frac{d}{dx} \ 3^x = \ln(3) \cdot 3^x\). So the end result is \(\boxed{\ln(2)\cdot 2^x + \ln(3) \cdot 3^x}\).
-
\(\frac{d}{dx} \ 3\log_2(x)\)
We use the formula to get \(\frac{d}{dx} \log_2(x) = \frac{1}{\ln(2) x}\), and multiply the answer by \(3\) and get \(\boxed{\frac{3}{\ln(2) x}}\).
-
We have
\[\begin{align*} \frac{d}{dx} \frac{5^x}{\ln(5)} & = \frac{1}{\ln(5)} \frac{d}{dx} 5^x \\ & = \frac{1}{\ln(5)} \ln(5) \cdot 5^x \\ & = \boxed{5^x} \end{align*}\]
The functions \(\sin(x)\) and \(\cos(x)\)
The sine function, denoted \(\sin(x)\), captures oscillating behavior of waves, circles, pendulums, and more. Cosine, denoted \(\cos(x)\), is a similar function that does the same thing. Here are \(\sin(x)\) and \(\cos(x)\) on a graph.
A few important values to know for \(\sin(x)\) and \(\cos(x)\) are given by the table below.
First note that the \(x\) values have a \(\pi\) in them — this is actually a way of measuring angles called radians. You can also use \(\sin\) and \(\cos\) with degree angle measurements, but for calculus, it works much better in radians. Make sure your calculator is in radian mode for this class. Notice also that the outputs for \(\sin(x)\) and \(\cos(x)\) with \(x = 0\) are the same as with \(x = 2 \pi\). That’s not a coincidence — \(\sin\) and \(\cos\) functions repeat over and over again every \(\Delta x = 2 \pi\).
The functions \(\sin(x)\) and \(\cos(x)\) work very well with calculus, as shown by these important formulas:
\(\boxed{\cfrac{d}{dx} \ \sin(x) = \ \ \cos(x)}\)
\(\boxed{\cfrac{d}{dx} \ \cos(x) = - \sin(x)}\)
Compute the following:
-
\(\frac{d}{dx} \ -2 \cos(x)\)
Using the formulas from this section and earlier in the chapter, we see
\(\frac{d}{dx} \ -2 \cos(x) = -2 (-\sin(x)) = \boxed{2 \sin(x)}\)
-
\(\frac{d}{dx} (\sin(x) + \cos(x) + e^x + \ln(x))\)
\(\frac{d}{dx} (\sin(x) + \cos(x) + e^x + \ln(x)) = \boxed{\cos(x) - \sin(x) + e^x + \frac{1}{x}}.\)

## Match 3.05 — LibreTexts: 8.5: Solving Exponentials for Time- Logarithms
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/3.0/ · https://math.libretexts.org/Bookshelves/Applied_Mathematics/Math_in_Society_(Lippman)/08%3A_Growth_Models/8.05%3A_Solving_Exponentials_for_Time-_Logarithms

8.5: Solving Exponentials for Time- Logarithms
Earlier, we found that since Olympia, WA had a population of 245 thousand in 2008 and had been growing at 3% per year, the population could be modeled by the equation
\[P_{n}=(1+0.03)^{n}(245,000) \nonumber \]
or equivalently,
\[P_{n}=245,000(1.03)^{n}. \nonumber \]
Using this equation, we were able to predict the population in the future.
Suppose we wanted to know when the population of Olympia would reach 400 thousand. Since we are looking for the year n when the population will be 400 thousand, we would need to solve the equation
\begin{aligned}
&400,000=245,000(1.03)^{n} \quad \text { dividing both sides by } 245,000 \text { gives }\\
&1.6327=1.03^{n}
\end{aligned}
One approach to this problem would be to create a table of values, or to use technology to draw a graph to estimate the solution.
From the graph, we can estimate that the solution will be around 16 to 17 years after 2008 (2024 to 2025). This is pretty good, but we’d really like to have an algebraic tool to answer this question. To do that, we need to introduce a new function that will undo exponentials, similar to how a square root undoes a square. For exponentials, the function we need is called a logarithm. It is the inverse of the exponential, meaning it undoes the exponential. While there is a whole family of logarithms with different bases, we will focus on the common log, which is based on the exponential 10 x .
The common logarithm , written \(\log(x)\), undoes the exponential \(10^x\)
This means that
\[\log(10^x) = x \nonumber \]
and likewise
\[10^{\log(x)} = x \nonumber \]
This also means the statement \(10^a = b\) is equivalent to the statement \(\log(b) = a\)
\(\log(x)\) is read as “\(\log\) of \(x\)”, and means “the logarithm of the value \(x\)”. It is important to note that this is not multiplication – the log doesn’t mean anything by itself, just like √ doesn’t mean anything by itself; it has to be applied to a number.
Evaluate each of the following
- \(\log(100)\)
- \(\log(1000)\)
- \(\log(10000)\)
- \(\log(1/100)\)
- \(\log(1)\)
Solution
- \(\log(100)\) can be written as \(\log(10^2)\). Since the log undoes the exponential, \(\log(10^2) = 2\)
- \(\log(1000) = \log(10^3) = 3\)
- \(\log(10000) = \log(10^4) = 4\)
- Recall that \(x^{-n}=\frac{1}{x^{n}}\). \(\log \left(\frac{1}{100}\right)=\log \left(10^{-2}\right)=-2\)
- Recall that \(x^0 = 1\). \(\log(1) = \log(10^0) = 0\)
It is helpful to note that from the first three parts of the previous example that the number we’re taking the log of has to get \(10\) times bigger for the log to increase in value by 1.
Of course, most numbers cannot be written as a nice simple power of 10. For those numbers, we can evaluate the log using a scientific calculator with a log button.
Evaluate \(\log(300)\)
Solution
Using a calculator, \(\log(300)\) is approximately \(2.477121\)
With an equation, just like we can add a number to both sides, multiply both sides by a number, or square both sides, we can also take the logarithm of both sides of the equation and end up with an equivalent equation. This will allow us to solve some simple equations.
- Solve \(10^x = 1000\)
- Solve \(10^x = 3\)
- Solve \(2(10^x) = 8\)
Solution
a) Taking the log of both sides gives \(\log(10^x) = \log(1000)\)
Since the log undoes the exponential, \(\log(10^x) = x\). Similarly \(\log(1000) = \log(10^3) = 3\).
The equation simplifies then to \(x = 3\).
b) Taking the log of both sides gives \(\log(10^x) = \log(3)\).
On the left side, \(\log(10^x) = x\), so \(x = \log(3)\). We can approximate this value with a calculator. \(x \approx 0.477\)
c) Here we would first want to isolate the exponential by dividing both sides of the equation by 2, giving
\(10^x = 4\).
Now we can take the log of both sides, giving \(\log(10^x) = \log(4)\), which simplifies to
\(x = \log(4) \approx 0.602\)
This approach allows us to solve exponential equations with powers of 10, but what about problems like \(2 = 1.03^n\) from earlier, which have a base of 1.03? For that, we need the exponent property for logs.
\(\log \left(A^{r}\right)=r \log (A)\)
To show why this is true, we offer a proof.
Since the logarithm and exponential undo each other, \(10^{\log A}=A\). So
\[A^{r}=\left(10^{\log \cdot A}\right)^{r} \nonumber \]
Utilizing the exponential rule that states \(\left(x^{a}\right)^{b}=x^{a b}\),
\[A^{r}=\left(10^{\log A}\right)^{r}=10^{r \log A} \nonumber \]
So then
\[\log \left(A^{r}\right)=\log \left(10^{r \log A}\right) \nonumber \]
Again utilizing the property that the log undoes the exponential on the right side yields the result
\[\log \left(A^{r}\right)=r \log A \nonumber \]
Rewrite log(25) using the exponent property for logs
Solution
\[\log (25)=\log \left(5^{2}\right)=2 \log (5) \nonumber \]
This property will finally allow us to answer our original question.
- Isolate the exponential. In other words, get it by itself on one side of the equation. This usually involves dividing by a number multiplying it.
- Take the log of both sides of the equation.
- Use the exponent property of logs to rewrite the exponential with the variable exponent multiplying the logarithm.
- Divide as needed to solve for the variable.
If Olympia is growing according to the equation, \(P_{n}=245(1.03)^{n}\), where n is years after 2008, and the population is measured in thousands. Find when the population will be 400 thousand.
Solution
We need to solve the equation
\(\begin{array}{ll} 400=245(1.03)^{n} & \text{Begin by dividing both sides by 245 to isolate the exponential} \\
1.633=1.03^{n} & \text{Now take the log of both sides} \\ \log (1.633)=\log \left(1.03^{n}\right) & \text{Use the exponent property of logs on the right side} \\ \log (1.633)=n \log (1.03) & {\text{Now we can divide by} \log (1.03)} \\
\frac{\log (1.633)}{\log (1.03)}=n &
\text{We can approximate this value on a calculator} \\
n \approx 16.591^{\circ} \end{array}\)
Alternatively, after applying the exponent property of logs on the right side, we could have evaluated the logarithms to decimal approximations and completed our calculations using those approximations, as you’ll see in the next example. While the final answer may come out slightly differently, as long as we keep enough significant values during calculation, our answer will be close enough for most purposes.
Polluted water is passed through a series of filters. Each filter removes 90% of the remaining impurities from the water. If you have 10 million particles of pollutant per gallon originally, how many filters would the water need to be passed through to reduce the pollutant to 500 particles per gallon?
Solution
In this problem, our “population” is the number of particles of pollutant per gallon. The initial pollutant is 10 million particles per gallon, so \(P_0 = 10,000,000\). Instead of changing with time, the pollutant changes with the number of filters, so \(n\) will represent the number of filters the water passes through.
Also, since the amount of pollutant is decreasing with each filter instead of increasing, our “growth” rate will be negative, indicating that the population is decreasing instead of increasing, so \(r = -0.90\).
We can then write the explicit equation for the pollutant:
\[ P_{n} =10,000,000(1-0.90)^{n} \\[4pt] =10,000,000(0.10)^{n} \nonumber \]
To solve the question of how many filters are needed to lower the pollutant to 500 particles per gallon, we can set \(P_n\) equal to 500, and solve for \(n\).
\(\begin{array}{ll} 500=10,000,000(0.10)^{n} & \text{Divide both sides by} 10,000,000 \\
0.00005=0.10^{n} & \text{Take the log of both sides} \\ \log (0.00005)=\log \left(0.10^{n}\right) &
\text{Use the exponent property of logs on the right side} \\ \log (0.00005)=n \log (0.10) &
\text{Evaluate the logarithms to a decimal approximation} \\ -4.301=n(-1) & \text{Divide by} -1,\text{ the value multiplying }n \\ 4.301=n \end{array}\)
It would take about 4.301 filters. Of course, since we probably can’t install 0.3 filters, we would need to use 5 filters to bring the pollutant below the desired level.
India had a population in 2008 of about 1.14 billion people. The population is growing by about 1.34% each year. If this trend continues, when will India’s population reach 1.2 billion?
- Answer
-
\(1.14(1.0134)^{n}=1.2\). \(n = 3.853\), which is during 2011

## Match 1.56 — LibreTexts: 4.3.3: Properties of Logarithms
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Courses/City_University_of_New_York/College_Algebra_and_Trigonometry-_Expressions_Equations_and_Graphs/04%3A_Introduction_to_Trigonometry_and_Transcendental_Expressions/4.03%3A_Exponential_and_Logarithmic_Expressions/4.3.03%3A_Properties_of_Logarithms

4.3.3: Properties of Logarithms
By the end of this section, you will be able to:
- Use the properties of logarithms
- Use the Change of Base Formula
Before you get started, take this readiness quiz.
1. Evaluate
a. \(b^{0}\)
b. \(b^{1}\)
2. Write \(\sqrt[3]{x^{2} y}\) with a rational exponent.
3. Round \(2.5646415\) to three decimal places.
Use the Properties of Logarithms
Now that we have learned about exponential and logarithmic expressions, we can introduce some of the properties of logarithms. These will be very helpful as we continue to solve both exponential and logarithmic equations.
The first two properties derive from the definition of logarithms. Since \(b^{0}=1\), we can convert this to logarithmic form and get \(\log _{b} (1)=0\). Also, since \(b^{1}=b\), we get \(\log _{b} (b)=1\).
\(\log _{b} (1)=0\)
\(\log _{b} (b)=1\)
In the next example we could evaluate the logarithm by converting to exponential form, as we have done previously, but recognizing and then applying the properties saves time.
Evaluate using the properties of logarithms:
a. \(\log _{8} (1)\)
b. \(\log _{6} (6)\)
Solution
a.
| \(\quad \log _{8} (1)\) | |
|---|---|
| Use the property, \(\log_{b} (1)=0\). | \(=0\) |
b.
| \(\quad \log _{6} (6)\) | |
|---|---|
| Use the property, \(\log_{b} (b)=1\). | \(=1\) |
Evaluate using the properties of logarithms:
a. \(\log _{13} (1)\)
b. \(\log _{9} (9)\)
- Answer
-
a. \(0\)
b. \(1\)
Evaluate using the properties of logarithms:
a. \(\log _{5} (1)\)
b. \(\log _{7} (7)\)
- Answer
-
a. \(0\)
b. \(1\)
The next two properties can also be verified by converting them from exponential form to logarithmic form, or the reverse.
The exponential equation \(b^{\log _{b} (x)}=x\) converts to the logarithmic equation \(\log _{b} (x)=\log _{b} (x)\), which is a true statement for positive values for \(x\) only.
The logarithmic equation \(\log _{b} \left(b^{x}\right)=x\) converts to the exponential equation \(b^{x}=b^{x}\), which is also a true statement (for all values of \(x\)).
These two properties are called inverse properties because, when we have the same base, raising to a power “undoes” the log and taking the log “undoes” raising to a power.
For \(b>0\) and \(b \neq 1\),
\(b^{\log _{b} (x)}=x \) for \(x>0\) and \(\log _{b} \left(b^{x}\right)=x.\)
In the next example, we apply the inverse properties of logarithms.
Evaluate using the properties of logarithms:
a. \(4^{\log _{4} (9)}\)
b. \(\log _{3} \left(3^{5}\right)\)
Solution
a.
| \(\quad 4^{\log _{4}(9)}\) | |
|---|---|
| Use the property, \(b^{\log _{b} (x)}=x\). | \(=9 \) |
b.
| \(\quad \log _{3} \left(3^{5}\right)\) | |
|---|---|
| Use the property, \(\log _{b} \left(b^{x}\right)=x\). | \(=5\) |
Evaluate using the properties of logarithms:
a. \(5^{\log _{5} \left(15\right)}\)
b. \(\log _{7} \left(7^{4}\right)\)
- Answer
-
a. \(15\)
b. \(4\)
Evaluate using the properties of logarithms:
a. \(2^{\log _{2} \left(8\right)}\)
b. \(\log _{2} \left(2^{15}\right)\)
- Answer
-
a. \(8\)
b. \(15\)
There are three more properties of logarithms that will be useful in our work. We know exponential expressions and logarithmic expressions are very interrelated. Our definition of logarithm shows us that a logarithm is the exponent of the equivalent exponential. The properties of exponents have related properties for exponents.
In the Product Property of Exponents, \(b^{m} b^{n}=b^{m+n}\), we see that to multiply the same base, we add the exponents. The Product Property of Logarithms , \(\log_{b} (MN)=\log_{b} (M)+\log_{b} (N)\), tells us that to take the log of a product, we add the log of the factors (here we use \(M=b^{m}\) and \(N= b^{n}\) and note that \(\log_b \left(b^{m+n}\right)=m+n=\log_b \left(b^m\right)+\log_b \left(b^n\right)\).
If \(M>0\), \(N>0\), \(b>0\) and \(b\neq 1,\) then
\(\log _{b}(MN)=\log _{b} (M)+\log _{b} (N).\)
The logarithm of a product is the sum of the logarithms.
We use this property to write the log of a product as a sum of the logs of each factor.
Use the Product Property of Logarithms to write each logarithm as a sum of logarithms. Simplify, if possible:
a. \(\log _{3} (7 x)\)
b. \(\log _{4} (64 x y)\)
Solution
a.
| \(\quad \log _{3} (7 x)\) | |
|---|---|
| Use the Product Property, \(\log _{b}(M N)=\log_{b} (M)+\log_{b} (N)\). | \(=\log _{3} (7)+\log _{3} (x)\) |
b.
| \(\quad\log _{4}(64 x y)\) | |
|---|---|
| Use the Product Property, \(\log _{b}(M N)=\log _{b} (M)+\log _{b} (N)\). | \(=\log _{4} (64)+\log _{4} (x)+\log _{4} (y)\) |
| Simplify by evaluating \(\log _{4} (64)\). | \(=3+\log _{4} (x)+\log _{4} (y)\) |
Use the Product Property of Logarithms to write each logarithm as a sum of logarithms. Simplify, if possible.
a. \(\log _{3} (3 x)\)
b. \(\log _{2} (8 x y)\)
- Answer
-
a. \(1+\log _{3} (x)\)
b. \(3+\log _{2} (x)+\log _{2} (y)\)
Use the Product Property of Logarithms to write each logarithm as a sum of logarithms. Simplify, if possible.
a. \(\log _{9} (9 x)\)
b. \(\log _{3} (27 x y)\)
- Answer
-
a. \(1+\log _{9} (x)\)
b. \(3+\log _{3} (x)+\log _{3} (y)\)
Similarly, in the Quotient Property of Exponents, \(\dfrac{b^{m}}{b^{n}}=b^{m-n}\), we see that to divide the same base, we subtract the exponents. The Quotient Property of Logarithms , \(\log_{b} \left(\dfrac{M}{N}\right)=\log_{b} (M)-\log_{b} (N)\) tells us to take the log of a quotient, we subtract the log of the numerator and denominator.
If \(M>0\), \(N>0\), \(b>0\) and \(b \neq 1,\) then
\(\log_{b} \left(\dfrac{M}{N}\right)=\log_{b} (M)-\log_{b} (N).\)
The logarithm of a quotient is the difference of the logarithms.
Note that \(\log_{b} (M)-\log_{b} (N) \not=\log_{b}(M-N)!\).
We use this property to write the log of a quotient as a difference of the logs of each factor.
Use the Quotient Property of Logarithms to write each logarithm as a difference of logarithms. Simplify, if possible.
a. \(\log _{5} \left(\dfrac{5}{7}\right)\)
b. \(\log \left(\dfrac{x}{100}\right)\)
Solution
- a.
-
\(\quad\log _{5} \left(\dfrac{5}{7}\right)\) Use the Quotient Property, \(\log_{b} \left(\dfrac{M}{N}\right)=\log_{b} (M)-\log_{b} (N)\). \(=\log _{5} (5)-\log _{5} (7)\) Simplify. \(=1-\log _{5} (7)\) b.
\(\quad\log \left(\dfrac{x}{100}\right)\) Use the Quotient Property, Use the Quotient Property, \(\log_{b} \left(\dfrac{M}{N}\right)=\log_{b} (M)-\log_{b} (N)\). \(=\log (x)-\log (100)\) Simplify. \(=\log (x)-2\)
Use the Quotient Property of Logarithms to write each logarithm as a difference of logarithms. Simplify, if possible.
a. \(\log _{4} \left(\dfrac{3}{4}\right)\)
b. \(\log \left(\dfrac{x}{1000}\right)\)
- Answer
-
a. \(\log _{4} (3)-1\)
b. \(\log (x)-3\)
Use the Quotient Property of Logarithms to write each logarithm as a difference of logarithms. Simplify, if possible.
a. \(\log _{2} \left(\dfrac{5}{4}\right)\)
b. \(\log \left(\dfrac{10}{y}\right)\)
- Answer
-
a. \(\log _{2} (5)-2\)
b. \(1-\log (y)\)
The third property of logarithms is related to the Power Property of Exponents, \(\left(a^{m}\right)^{n}=a^{m \cdot n}\), we see that to raise a power to a power, we multiply the exponents. The Power Property of Logarithms , \(\log_{b} M^{p}=p \log_{b} M\) tells us to take the log of a number raised to a power, we multiply the power times the log of the number.
If \(M>0\), \(b>0\), \(b \neq 1\) and \(p\) is any real number then,
\(\log_{b} \left(M^{p}\right)=p \log_{b} (M).\)
The log of a number raised to a power as the product product of the power times the log of the number.
We use this property to write the log of a number raised to a power as the product of the power times the log of the number. We essentially take the exponent and throw it in front of the logarithm.
Use the Power Property of Logarithms to write each logarithm as a product of logarithms. Simplify, if possible.
a. \(\log _{5} \left(4^{3}\right)\)
b. \(\log \left(x^{10}\right)\)
Solution
a.
| \(\quad\log _{5} \left(4^{3}\right)\) | |
|---|---|
| Use the Power Property, \(\log_{b}\left( M^{p}\right)=p \log_{b}(M)\). | \(=3 \log _{5} (4)\) |
b.
| \(\quad\log \left(x^{10}\right)\) | |
|---|---|
| Use the Power Property, \(\log_{b} \left(M^{p}\right)=p \log_{b} (M)\). | \(=10\log (x)\) |
Use the Power Property of Logarithms to write each logarithm as a product of logarithms. Simplify, if possible.
a. \(\log _{7} \left(5^{4}\right)\)
b. \(\log \left(x^{100}\right)\)
- Answer
-
a. \(4\log _{7} (5)\)
b. \(100 \log (x)\)
Use the Power Property of Logarithms to write each logarithm as a product of logarithms. Simplify, if possible.
a. \(\log _{2} \left(3^{7}\right)\)
b. \(\log \left(x^{20}\right)\)
- Answer
-
a. \(7\log _{2} (3)\)
b. \(20\log (x)\)
We summarize the Properties of Logarithms here for easy reference. While the natural logarithms are a special case of these properties, it is often helpful to also show the natural logarithm version of each property.
Properties of Logarithms
If \(M>0\), \(b>0\), \(b \neq 1\) and \(p\) is any real number, then
| Property | Base \(b\) | Base \(e\) |
|---|---|---|
| \(\log_{b} (1)=0\) | \(\ln (1)=0\) | |
| \(\log_{b} (b)=1\) | \(\ln (e)=1\) | |
| Inverse Properties |
\(b^{\log_{b} (x)}=x\)
\(\log_{b} \left(b^{x}\right)=x\) |
\(e^{\ln (x)}=x\)
\(\ln \left(e^{x}\right)=x\) |
| Product Property of Logarithms | \(\log_{b}(M N)=\log_{b} (M)+\log_{b} (N)\) | \(\ln (M N)=\ln (M)+\ln (N)\) |
| Quotient Property of Logarithms | \(\log_{b} \left(\dfrac{M}{N}\right)=\log_{b} (M)-\log_{b} (N)\) | \(\ln \left(\dfrac{M}{N}\right)=\ln (M)-\ln (N)\) |
| Power Property of Logarithms | \(\log_{b} \left(M^{p}\right)=p \log_{b} (M)\) | \(\ln \left(M^{p}\right)=p \ln (M)\) |
Now that we have the properties we can use them to “expand” a logarithmic expression. This means to write the logarithm as a sum or difference and without any powers.
We generally apply the Product and Quotient Properties before we apply the Power Property.
Use the Properties of Logarithms to expand the logarithm \(\log _{4}\left(2 x^{3} y^{2}\right)\). Simplify, if possible.
Solution
| \(\quad \log _{4}\left(2 x^{3} y^{2}\right)\) | |
|---|---|
| Use the Product Property, \(\log_{b} (M N)=\log_{b} (M)+\log_{b} (N)\). | \(=\log _{4}\left(2\right) +\log_4\left(x^{3}\right)+\log_4\left( y^{2}\right)\) |
| Use the Power Property, \(\log_{b} \left(M^{p}\right)=p \log_{b} (M)\), on the last two terms. |
\(=\log _{4}\left(4^{1/2}\right) +3\log_4\left(x\right)+2\log_4\left(y\right)\) \(=\dfrac{1}{2}\log _{4}(4) +3\log_4\left(x\right)+2\log_4\left(y\right)\) |
| Simplify. | \(=\dfrac{1}{2}+\dfrac{3}{2}\log_4\left(x\right)+\log_4\left(y\right)\) |
Use the Properties of Logarithms to expand the logarithm \(\log _{2}\left(5 x^{4} y^{2}\right)\). Simplify, if possible.
- Answer
-
\(\log _{2} (5)+4 \log _{2} (x)+2 \log _{2} (y)\)
Use the Properties of Logarithms to expand the logarithm \(\log _{3}\left(7 x^{5} y^{3}\right)\). Simplify, if possible.
- Answer
-
\(\log _{3} (7)+5 \log _{3} (x)+3 \log _{3} (y)\)
When we have a radical in the logarithmic expression, it is helpful to first write its radicand as a rational exponent.
Use the Properties of Logarithms to expand the logarithm \(\log _{2} \left(\sqrt[4]{\dfrac{x^{3}}{3 y^{2} z}}\right)\). Simplify, if possible.
Solution
| \(\log _{2} \left(\sqrt[4]{\dfrac{x^{3}}{3 y^{2} z}}\right)\) | |
|---|---|
| Rewrite the radical with a rational exponent. | \(=\log _{2}\left(\dfrac{x^{3}}{3 y^{2} z}\right)^{1/4}\) |
|
Use the Power Property, \(\log_{b} \left(M^{p}\right)=p \log_{b} (M)\). |
\(=\dfrac{1}{4} \log _{2}\left(\dfrac{x^{3}}{3 y^{2} z}\right)\) |
| Use the Quotient Property, \(\log_{b} (M N)=\log_{b} (M)-\log_{b} (N)\). | \(=\dfrac{1}{4}\left(\log _{2}\left(x^{3}\right)-\log _{2}\left(3 y^{2} z\right)\right)\) |
| Use the Product Property, \(\log_{b}(MN)=\log_{b} (M)+\log_{b} (N)\), in the second term. |
\(=\dfrac{1}{4}\left(\log _{2}\left(x^{3}\right)-\left(\log _{2} (3)+\log _{2} \left(y^{2}\right)+\log _{2} (z)\right)\right)\) |
|
Use the Power Property, \(\log_{b} \left(M^{p}\right)=p \log_{b}(M)\), inside the parentheses. |
\(=\dfrac{1}{4}\left(3 
