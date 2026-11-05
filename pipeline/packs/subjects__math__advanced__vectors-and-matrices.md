# Source pack — subjects/math/advanced/vectors-and-matrices
Lesson title: Vectors & Matrices
Level: advanced
Match confidence: 3.08

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.08 — LibreTexts: 6.1: Complex Numbers, Vectors and Matrices
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Linear_Algebra/Matrix_Analysis_(Cox)/06%3A_Complex_Analysis_I/6.01%3A_Complex_Numbers_Vectors_and_Matrices

6.1: Complex Numbers, Vectors and Matrices
Complex Numbers
A complex number is simply a pair of real numbers. In order to stress however that the two arithmetics differ we separate the two real pieces by the symbol \(i\). More precisely, each complex number, \(z\), may be uniquely expressed by the combination \(x+iy\), where \(x\) and \(y\) are real and \(i\) denotes \(\sqrt{-1}\). We call \(x\) the real part and \(y\) the imaginary part of z. We now summarize the main rules of complex arithmetic.
If \(z_{1} = x_{1}+iy_{1}\) and \(z_{2} = x_{2}+iy_{2}\) then
\[z_{1}+z_{2} \equiv x_{1}+x_{2}+i(y_{1}+y_{2}) \nonumber\]
\[z_{1}+z_{2} \equiv (x_{1}+iy_{1})(x_{2}+iy_{2}) = x_{1}x_{2}-y_{1}y_{2}+i(x_{1}y_{2}+x_{2}y_{1}) \nonumber\]
\[\overline{z_{1}} \equiv x_{1}-iy_{1} \nonumber\]
\[\frac{z_{1}}{z_{2}} \equiv \frac{z_{1}}{z_{2}} \frac{\overline{z_{2}}}{\overline{z_{2}}} = \frac{x_{1}x_{2}+y_{1}y_{2}+i(x_{2}y_{1}-x_{1}y_{2})}{x_{2}^{2}+y_{2}^{2}} \nonumber\]
\[|z_{1}| \equiv = \sqrt{z_{1} \overline{z_{1}}} = \sqrt{x_{1}^{2}+y_{1}^{2}} \nonumber\]
Polar Representation
In addition to the Cartesian representation \(z = x+iy\) one also has the polar form
\[z = |z|(\cos(\theta)+i \sin(\theta)) \nonumber\]
where \(\theta = \arctan(yx)\)
This form is especially convenient with regards to multiplication. More precisely,
\[\begin{align*} z_{1}z_{2} &= |z_{1}||z_{2}|(\cos(\theta_{1})\cos(\theta_{2})-\sin(\theta_{1})\sin(\theta_{2})+i(\cos(\theta_{1}) \sin(\theta_{2})+\sin(\theta_{1}) \cos(\theta_{2}))) \\[4pt] &=|z_{1}||z_{2}|(\cos(\theta_{1}+\theta_{2})+i \sin(\theta_{1}+\theta_{2})) \end{align*}\]
As a result:
\[z^{n} = (|z|)^{n}(\cos(n \theta)+i \sin(n \theta)) \nonumber\]
Complex Vectors and Matrices
A complex vector (matrix) is simply a vector (matrix) of complex numbers. Vector and matrix addition proceed, as in the real case, from elementwise addition. The dot or inner product of two complex vectors requires, however, a little modification. This is evident when we try to use the old notion to define the length of a complex vector. To wit, note that if:
\[z = \begin{pmatrix} {1+i}\\ {1-i} \end{pmatrix} \nonumber\]
then
\[z^{T} z = (1+i)^2+(1-i)^2 = 1+2i-1+1-2i-1 = 0 \nonumber\]
Now length should measure the distance from a point to the origin and should only be zero for the zero vector. The fix, as you have probably guessed, is to sum the squares of the magnitudes of the components of \(z\). This is accomplished by simply conjugating one of the vectors. Namely, we define the length of a complex vector via:
\[(z) = \sqrt{\overline{z}^{T} z} \nonumber\]
In the example above this produces
\[\sqrt{(|1+i|)^2+(|1-i|)^2} = \sqrt{4} = 2 \nonumber\]
As each real number is the conjugate of itself, this new definition subsumes its real counterpart.
The notion of magnitude also gives us a way to define limits and hence will permit us to introduce complex calculus. We say that the sequence of complex numbers, \(\left \{ z_{n}| n = \begin{pmatrix} {1}\\ {2}\\ {\cdots} \end{pmatrix} \right \} \nonumber\), converges to the complex number \(z_{0}\) and write
\[z_{n} \rightarrow z_{0} \nonumber\]
or
\[z_{0} = \lim_{n \rightarrow \infty} z_{n} \nonumber\]
when, presented with any \(\epsilon > 0\) one can produce an integer \(N\) for which \(|z_{n}-z_{0}| < \epsilon\) when \(n \ge N\). As an example, we note that \((\frac{i}{2})^{n} \rightarrow 0\).
As an example both of a complex matrix and some of the rules of complex arithmetic, let us examine the following matrix:
\[F = \begin{pmatrix} {1}&{1}&{1}&{1}\\ {1}&{i}&{-1}&{-i}\\ {1}&{-1}&{1}&{-1}\\ {1}&{-i}&{-1}&{i} \end{pmatrix} \nonumber\]
Let us attempt to find \(F \overline{F}\). One option is simply to multiply the two matrices by brute force, but this particular matrix has some remarkable qualities that make the job significantly easier. Specifically, we can note that every element not on the diagonal of the resultant matrix is equal to 0. Furthermore, each element on the diagonal is 4. Hence, we quickly arrive at the matrix
\[\begin{align*} F \overline{F} &= \begin{pmatrix} {4}&{0}&{0}&{0}\\ {0}&{4}&{0}&{0}\\ {0}&{0}&{4}&{0}\\ {0}&{0}&{0}&{4} \end{pmatrix} \\[4pt] &= 4i \end{align*}\]
This final observation, that this matrix multiplied by its transpose yields a constant times the identity matrix, is indeed remarkable. This particular matrix is an example of a Fourier matrix, and enjoys a number of interesting properties. The property outlined above can be generalized for any \(F_{n}\), where \(F\) refers to a Fourier matrix with \(n\) rows and columns:
\[F_{n} \overline{F}_{n} = nI \nonumber\]

## Match 3.06 — LibreTexts: 8.7: Vectors and Matrices
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/3.0/ · https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Introductory_Electrical_Engineering/A_First_Course_in_Electrical_and_Computer_Engineering_(Scharf)/08%3A_An_Introduction_to_MATLAB/8.07%3A_Vectors_and_Matrices

8.7: Vectors and Matrices
As its name indicates, MATLAB is especially designed to handle matrices. The simplest way to enter a matrix is to use an explicit list. In the list, the elements are separated by blanks or commas, and the semicolon (;) is used to indicate the end of a row. The list is surrounded by square brackets [ ]. For example, the statement
≫ A = [1 2 3;4 5 6;7 8 9]
results in the output
A = 1 2 3 4 5 6 7 8 9
The variable A is a matrix of size 3×3. Matrix elements can be any MATLAB expression. For example, the command
≫ x = [-1.3 sqrt(3) (1+2+3)*4/5]
results in the matrix
x = -1.3000 1.7321 4.8000
We call a matrix with just one row or one column a vector, and a 1×1 matrix is a scalar. Individual matrix elements can be referenced with indices that are placed inside parentheses. Type
x(5) = abs(x(1))
to produce the new vector
x = -1.3000 1.7321 4.8000 0.000 1.3000
Note that the size of
x
has been automatically adjusted to accommodate the new element and that elements not referenced are set equal to 0 (here x(4)). New rows or columns can be added very easily. Try typing
r = [10 11 12],A = [A;r]
. Dimensions in the command must coincide. Try
r = [13 14],A = [A;r]
.
The command
size(A)
gives the number of rows and the number of columns of
A
. The output from
size(A)
is itself a matrix of size 1×2. These numbers can be stored if necessary by the command
[m n] = size(A)
. In our previous example,
A = [A;r]
is a 4×3 matrix, so the variable
m
will contain the number 4 and
n
will contain the number 3. A vector is a matrix for which either
m
or
n
is equal to 1. If
m
is equal to 1, the matrix is a row vector; if
n
is equal to 1, the matrix is a column vector. Matrices and vectors may contain complex numbers. For example, the statement
≫ A = [1 2;3 4]+j*[5 6;7 8]
and the statement
≫ A = [1+5*j 2+6*j;3+7*j 4+8*j]
are equivalent, and they both produce the matrix
A = 1.0000+5.0000i 2.0000+6.0000i 3.0000+7.0000i 4.0000+8.0000i
Note that blanks must be avoided in the second expression for
A
. Try typing
≫A = [1 + 5*j 2 + 6*j 2 + 6*j;3 +7*j 4 + 8*j]
What is the size of
A
now?
MATLAB has several built-in functions to manipulate matrices. The special character, ', for prime denotes the transpose of a matrix. The statement
A = [ 1 2 3;4 5 6;7 8 9]'
produces the matrix
A = 1 4 7 2 5 8 3 6 9
The rows of
A'
are the column of
A
, and vice versa. If
A
is a complex matrix, then
A
is its complex conjugate transpose or hermitian transpose. For an “unconjugate” transpose, use the two-character operator dot-prime (. '). Matrix and vector variables can be added, subtracted, and multiplied as regular variables if the sizes match. Only matrices of the same size can be added or subtracted. There is, however, an easy way to add or subtract a common scalar from each element of a matrix. For example,
x = [1 2 3 4],x = x-1
produces the output
x = 1 2 3 4 x = 0 1 2 3
As discussed in
the chapter on linear algebra
, multiplication of two matrices is only valid if the inner sizes of the matrices are equal. In other words,
A*B
is valid if the second size of
A
(number of columns) is the same as the first size of
B
(number of rows). Let ai,jai,j represent the element of
A
in the \(i^{\text {th}}\) row and the \(j^{\text {th}}\) column. Then the matrix
A*B
consists of elements
\[(\mathrm{AB})_{i, j}=\sum_{k=1}^{n} \mathrm{a}_{i, k} b_{k, j} \nonumber \]
where nn is the number of columns of
A
and the number of rows of
B
. Try typing
A = [1 2 3;4 5 6];B = [7;8;9]; A*B
. You should get the result
ans = 50 112
The inner product between two column vectors
x
and
y
is the scalar defined as the product
x'*y
or equivalently as
y'*x
For example,
x = [1;2],y = [3;4],x'*y
, leads to the result
ans = 11
Similarly, for row vectors the inner product is defined as
x*y'
. The Euclidean norm of a vector is defined as the square root of the inner product between a vector and itself. Try to compute the norm of the vector
[1 2 3 4]
. You should get
5.4772
. The outer product of two column (row) vectors is the matrix
x*y' (x'*y)
.
Any scalar can multiply or be multiplied by a matrix. The multiplication is then performed element by element. Try
A = [1 2 3;4 5 6;7 8 9];A*2
. You should get
ans = 2 4 6 8 10 12 14 26 28
Verify that
2*A
gives the same result.
The inverse of a matrix is computed by using the function
inv
(A)
and is only valid if
A
is square. If the matrix is singular, meaning that it has no inverse, a message will appear. Try typing
inv
(A)
. You should get
Warning: Matrix is close to singular or badly scaled. Results may be inaccurate. RCOND=2.937385e-18 ans = 1.0e+16* 0.3152 -0.6304 0.3152 -0.6304 1.2609 -0.6304 0.3152 -0.6304 0.3152
The inverse of a matrix may be used to solve a linear system of equations. For example, to solve the system you could type
A = [1 2 3;1 -2 4;0 -2 1]; b = [2;7;3];
inv
(A)*b
and get
ans = 1 -1 1
\[\left[\begin{array}{lll}
1 & 2 & 3 \\
1 & -2 & 4 \\
0 & -2 & 1
\end{array}\right]\left[\begin{array}{l}
x_{1} \\
x_{2} \\
x_{3}
\end{array}\right]=\left[\begin{array}{l}
2 \\
7 \\
3
\end{array}\right] \nonumber \]
Check to see that this is the correct answer by typing
A*[1;-1;1]
. What do you see?
MATLAB offers another way to solve linear systems, based on Gauss elimination, that is faster than computing the inverse. The syntax is
A\b
and is valid whenever
A
has the same number of rows as
b
. Try it.
The “Dot” Operator
Sometimes you may want to perform an operation element by element. In MATLAB, these element-by-element operations are called array operations. Of course, matrix addition and subtraction are already element-by-element operations. The operation
A
.
*B
denotes the multiplication, element by element, of the matrices
A
and
B
. Make two 3×3 matrices,
A
and
B
, and try
≫ A*B ≫ A.*B
Suppose we want to find the square of each number in
A
. The proper way to specify this calculation is
≫ A_squared=A.^2
where the period (dot) indicates an “array operation” to be performed on each element of
A
. Without the dot,
A
is multiplied by
A
according to the rules of matrix multiplication described in Chapter 4, giving a totally different result:
≫ A^2
Subtleties
Because MATLAB can do so many different mathematical functions with just a few keystrokes, there are times when a very slight change in what you type will lead to a different result. Using the matrix
A
entered earlier, type the following two lines:
≫ 2.^A ≫ 2 .^A %with a space after the 2.
In the first case, the dot is “absorbed” by the 2 as a decimal point and the ^ is taken as a matrix exponential. But, when the dot is separated from the 2 by a space, it becomes part of the operator (.^) and specifies that 2 should be raised to the power of each element in A. The point is, you should be very careful to type what you mean in an unambiguous way until you are familiar enough with MATLAB to know how the subtle situations will be interpreted. An unambiguous way of typing the preceding lines is
≫ (2.)^A %for matrix exponential ≫ (2).^A %for array exponential.

## Match 3.06 — LibreTexts: 11.1: A.1- Vectors, Mappings, and Matrices
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Courses/Lake_Tahoe_Community_College/MAT-204%3A_Differential_Equations_for_Science_(Lebl_and_Trench)/11%3A_Appendix_A-_Linear_Algebra/11.01%3A_A.1-_Vectors_Mappings_and_Matrices

11.1: A.1- Vectors, Mappings, and Matrices
-
- Last updated
- Save as PDF
In real life, there is most often more than one variable. We wish to organize dealing with multiple variables in a consistent manner, and in particular organize dealing with linear equations and linear mappings, as those are both rather useful and rather easy to handle. Mathematicians joke that And well, they (the engineers) are not wrong. Quite often, solving an engineering problem is figuring out the right finite-dimensional linear problem to solve, which is then solved with some matrix manipulation. Most importantly, linear problems are the ones that we know how to solve, and we have many tools to solve them. For engineers, mathematicians, physicists, and anybody else in a technical field, it is absolutely vital to learn linear algebra.
As motivation, suppose we wish to solve \[\begin{align}\begin{aligned} & x-y = 2 , \\ & 2x+y = 4 , \end{aligned}\end{align} \nonumber \] for \(x\) and \(y\). That is, we desire numbers \(x\) and \(y\) such that the two equations are satisfied. Let us perhaps start by adding the equations together to find \[x+2x-y+y = 2+4, \qquad \text{or} \qquad 3x = 6 . \nonumber \]
In other words, \(x=2\). Once we have that, we plug \(x=2\) into the first equation to find \(2-y=2\), so \(y=0\). OK, that was easy. What is all this fuss about linear equations. Well, try doing this if you have \(5000\) unknowns \(^{1}\) . Also, we may have such equations not just of numbers, but of functions and derivatives of functions in differential equations. Clearly we need a systematic way of doing things. A nice consequence of making things systematic and simpler to write down is that it becomes easier to have computers do the work for us. Computers are rather stupid, they do not think, but are very good at doing lots of repetitive tasks precisely, as long as we figure out a systematic way for them to perform the tasks.
Vectors and operations on Vectors
Consider \(n\) real numbers as an \(n\)-tuple: \[(x_1,x_2,\ldots,x_n). \nonumber \] The set of such \(n\)-tuples is the so-called \(n\)-dimensional space , often denoted by \({\mathbb R}^n\). Sometimes we call this the \(n\)-dimensional euclidean space \(^{2}\) . In two dimensions, \({\mathbb R}^2\) is called the cartesian plane \(^{3}\) . Each such \(n\)-tuple represents a point in the \(n\)-dimensional space. For example, the point \((1,2)\) in the plane \({\mathbb R}^2\) is one unit to the right and two units up from the origin.
When we do algebra with these \(n\)-tuples of numbers we call them vectors \(^{4}\) . Mathematicians are keen on separating what is a vector and what is a point of the space or in the plane, and it turns out to be an important distinction, however, for the purposes of linear algebra we can think of everything being represented by a vector. A way to think of a vector, which is especially useful in calculus and differential equations, is an arrow. It is an object that has a direction and a magnitude . For instance, the vector \((1,2)\) is the arrow from the origin to the point \((1,2)\) in the plane. The magnitude is the length of the arrow. See Figure \(\PageIndex{1}\). If we think of vectors as arrows, the arrow doesn’t always have to start at the origin. If we do move it around, however, it should always keep the same direction and the same magnitude.
As vectors are arrows, when we want to give a name to a vector, we draw a little arrow above it: \[\vec{x} \nonumber \]
Another popular notation is \(\mathbf{x}\), although we will use the little arrows. It may be easy to write a bold letter in a book, but it is not so easy to write it by hand on paper or on the board. Mathematicians often don’t even write the arrows. A mathematician would write \(x\) and just remember that \(x\) is a vector and not a number. 
The magnitude can be computed using the Pythagorean theorem. The vector \((1,2)\) drawn in the figure has magnitude \(\sqrt{1^2+2^2} = \sqrt{5}\). The magnitude is denoted by \(\lVert \vec{x} \rVert\), and, in any number of dimensions, it can be computed in the same way: \[\lVert \vec{x} \rVert = \lVert (x_1,x_2,\ldots,x_n) \rVert = \sqrt{x_1^2+x_2^2+\cdots+x_n^2} . \nonumber \]
For reasons that will become clear in the next section, we often write vectors as so-called column vectors : \[\vec{x} = \begin{bmatrix} x_{1} \\ x_2 \\ \vdots \\ x_n \end{bmatrix} . \nonumber \]
Don’t worry. It is just a different way of writing the same thing, and it will be useful later. For example, the vector \((1,2)\) can be written as \[\begin{bmatrix} 1 \\ 2 \end{bmatrix} . \nonumber \]
The fact that we write arrows above vectors allows us to write several vectors \(\vec{x}_1\), \(\vec{x}_2\), etc., without confusing these with the components of some other vector \(\vec{x}\).
So where is the algebra from linear algebra ? Well, arrows can be added, subtracted, and multiplied by numbers. First we consider addition . If we have two arrows, we simply move along one, and then along the other. See Figure \(\PageIndex{2}\).
It is rather easy to see what it does to the numbers that represent the vectors. Suppose we want to add \((1,2)\) to \((2,-3)\) as in the figure. We travel along \((1,2)\) and then we travel along \((2,-3)\). What we did was travel one unit right, two units up, and then we travelled two units right, and three units down (the negative three). That means that we ended up at \(\bigl(1+2,2+(-3)\bigr) = (3,-1)\). And that’s how addition always works: \[\begin{bmatrix} x_{1} \\ x_2 \\ \vdots \\ x_n \end{bmatrix} + \begin{bmatrix} y_{1} \\ y_2 \\ \vdots \\ y_n \end{bmatrix} = \begin{bmatrix} x_1 + y_{1} \\ x_2+ y_2 \\ \vdots \\ x_n + y_n \end{bmatrix} . \nonumber \]
Subtracting is similar. What \(\vec{x}- \vec{y}\) means visually is that we first travel along \(\vec{x}\), and then we travel backwards along \(\vec{y}\). See Figure \(\PageIndex{3}\). It is like adding \(\vec{x}+ (- \vec{y})\) where \(-\vec{y}\) is the arrow we obtain by erasing the arrow head from one side and drawing it on the other side, that is, we reverse the direction. In terms of the numbers, we simply go backwards both horizontally and vertically, so we negate both numbers. For instance, if \(\vec{y}\) is \((-2,1)\), then \(-\vec{y}\) is \((2,-1)\).
Another intuitive thing to do to a vector is to scale it. We represent this by multiplication of a number with a vector. Because of this, when we wish to distinguish between vectors and numbers, we call the numbers scalars . For example, suppose we want to travel three times further. If the vector is \((1,2)\), traveling 3 times further means going 3 units to the right and 6 units up, so we get the vector \((3,6)\). We just multiply each number in the vector by 3. If \(\alpha\) is a number, then \[\alpha \begin{bmatrix} x_{1} \\ x_2 \\ \vdots \\ x_n \end{bmatrix} = \begin{bmatrix} \alpha x_{1} \\ \alpha x_2 \\ \vdots \\ \alpha x_n \end{bmatrix} . \nonumber \] Scaling (by a positive number) multiplies the magnitude and leaves direction untouched. The magnitude of \((1,2)\) is \(\sqrt{5}\). The magnitude of 3 times \((1,2)\), that is, \((3,6)\), is \(3\sqrt{5}\).
When the scalar is negative, then when we multiply a vector by it, the vector is not only scaled, but it also switches direction. Multiplying \((1,2)\) by \(-3\) means we should go 3 times further but in the opposite direction, so 3 units to the left and 6 units down, or in other words, \((-3,-6)\). As we mentioned above, \(-\vec{y}\) is a reverse of \(\vec{y}\), and this is the same as \((-1)\vec{y}\).
In Figure \(\PageIndex{4}\), you can see a couple of examples of what scaling a vector means visually.
We put all of these operations together to work out more complicated expressions. Let us compute a small example: \[3 \begin{bmatrix} 1 \\ 2 \end{bmatrix} + 2 \begin{bmatrix} -4 \\ -1 \end{bmatrix} - 3 \begin{bmatrix} -2 \\ 2 \end{bmatrix} = \begin{bmatrix} 3(1)+2(-4)-3(-2) \\ 3(2)+2(-1)-3(2) \end{bmatrix} = \begin{bmatrix} 1 \\ -2 \end{bmatrix} . \nonumber \]
As we said a vector is a direction and a magnitude. Magnitude is easy to represent, it is just a number. The direction is usually given by a vector with magnitude one. We call such a vector a unit vector . That is, \(\vec{u}\) is a unit vector when \(\lVert \vec{u} \rVert = 1\). For instance, the vectors \((1,0)\), \((\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}})\), and \((0,-1)\) are all unit vectors.
To represent the direction of a vector \(\vec{x}\), we need to find the unit vector in the same direction. To do so, we simply rescale \(\vec{x}\) by the reciprocal of the magnitude, that is \(\frac{1}{\lVert \vec{x} \rVert} \vec{x}\), or more concisely \(\frac{\vec{x}}{\lVert \vec{x} \rVert}\).
As an example, the unit vector in the direction of \((1,2)\) is the vector \[\frac{1}{\sqrt{1^2+2^2}} (1,2) = \left( \frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}} \right) . \nonumber \]
Linear Mappings and Matrices
A vector-valued function \(F\) is a rule that takes a vector \(\vec{x}\) and returns another vector \(\vec{y}\). For example, \(F\) could be a scaling that doubles the size of vectors: \[F(\vec{x}) = 2 \vec{x} . \nonumber \] Applied to say \((1,3)\) we get \[F \left( \begin{bmatrix} 1 \\ 3 \end{bmatrix} \right) = 2 \begin{bmatrix} 1 \\ 3 \end{bmatrix} = \begin{bmatrix} 2 \\ 6 \end{bmatrix} . \nonumber \] If \(F\) is a mapping that takes vectors in \({\mathbb R}^2\) to \({\mathbb R}^2\) (such as the above), we write \[F \colon {\mathbb R}^2 \to {\mathbb R}^2 . \nonumber \]
The words function and mapping are used rather interchangeably, although more often than not, mapping is used when talking about a vector-valued function, and the word function is often used when the function is scalar-valued.
A beginning student of mathematics (and many a seasoned mathematician), that sees an expression such as \[f(3x+8y) \nonumber \] yearns to write \[3f(x)+8f(y) . \nonumber \]
After all, who hasn’t wanted to write \(\sqrt{x+y} = \sqrt{x} + \sqrt{y}\) or something like that at some point in their mathematical lives. Wouldn’t life be simple if we could do that? Of course we can’t always do that (for example, not with the square roots!) But there are many other functions where we can do exactly the above. Such functions are called linear .
A mapping \(F \colon {\mathbb R}^n \to {\mathbb R}^m\) is called linear if \[F(\vec{x}+\vec{y}) = F(\vec{x})+F(\vec{y}), \nonumber \] for any vectors \(\vec{x}\) and \(\vec{y}\), and also \[F(\alpha \vec{x}) = \alpha F(\vec{x}) , \nonumber \] for any scalar \(\alpha\). The \(F\) we defined above that doubles the size of all vectors is linear. Let us check: \[F(\vec{x}+\vec{y}) = 2(\vec{x}+\vec{y}) = 2\vec{x}+2\vec{y} = F(\vec{x})+F(\vec{y}) , \nonumber \] and also \[F(\alpha \vec{x}) = 2 \alpha \vec{x} = \alpha 2 \vec{x} = \alpha F(\vec{x}) . \nonumber \]
We also call a linear function a linear transformation . If you want to be really fancy and impress your friends, you can call it a linear operator . When a mapping is linear we often do not write the parentheses. We write simply \[F \vec{x} \nonumber \] instead of \(F(\vec{x})\). We do this because linearity means that the mapping \(F\) behaves like multiplying \(\vec{x}\) by That something is a matrix.
A matrix is an \(m \times n\) array of numbers (\(m\) rows and \(n\) columns). A \(3 \times 5\) matrix is \[A = \begin{bmatrix} a_{11} & a_{12} & a_{13} & a_{14} & a_{15} \\ a_{21} & a_{22} & a_{23} & a_{24} & a_{25} \\ a_{31} & a_{32} & a_{33} & a_{34} & a_{35} \end{bmatrix} . \nonumber \] The numbers \(a_{ij}\) are called elements or entries .
A column vector is simply an \(m \times 1\) matrix. Similarly to a column vector there is also a row vector , which is a \(1 \times n\) matrix. If we have an \(n \times n\) matrix, then we say that it is a square matrix .
Now how does a matrix \(A\) relate to a linear mapping? Well a matrix tells you where certain special vectors go. Let’s give a name to those certain vectors. The standard bas
