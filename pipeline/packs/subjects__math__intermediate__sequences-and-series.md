# Source pack — subjects/math/intermediate/sequences-and-series
Lesson title: Sequences & Series
Level: intermediate
Match confidence: 3.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.05 — LibreTexts: 12.4: Geometric Sequences and Series
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Algebra/Intermediate_Algebra_1e_(OpenStax)/12%3A_Sequences_Series_and_Binomial_Theorem/12.04%3A_Geometric_Sequences_and_Series

12.4: Geometric Sequences and Series
By the end of this section, you will be able to:
- Determine if a sequence is geometric
- Find the general term (\(n\)th term) of a geometric sequence
- Find the sum of the first \(n\) terms of a geometric sequence
- Find the sum of an infinite geometric series
- Apply geometric sequences and series in the real world
Before you get started, take this readiness quiz.
-
Simplify: \(\frac{24}{32}\).
If you missed this problem, review Example 1.24. -
Evaluate: a. \(3^{4}\) b. \(\left(\frac{1}{2}\right)^{4}\).
If you missed this problem, review Example 1.19. -
If \(f(x)=4 \cdot 3^{x}\), find a. \(f(1)\) b. \(f(2)\) c. \(f(3)\).
If you missed this problem, review Example 3.49.
Determine if a Sequence is Geometric
We are now ready to look at the second special type of sequence, the geometric sequence.
A sequence is called a geometric sequence if the ratio between consecutive terms is always the same. The ratio between consecutive terms in a geometric sequence is \(r\), the common ratio , where \(n\) is greater than or equal to two.
A geometric sequence is a sequence where the ratio between consecutive terms is always the same.
The ratio between consecutive terms, \(\frac{a_{n}}{a_{n-1}}\), is \(r\), the common ratio . \(n\) is greater than or equal to two.
Consider these sequences.
Determine if each sequence is geometric. If so, indicate the common ratio.
- \(4,8,16,32,64,128, \dots\)
- \(-2,6,-12,36,-72,216, \dots\)
- \(27,9,3,1, \frac{1}{3}, \frac{1}{9}, \ldots\)
Solution :
To determine if the sequence is geometric, we find the ratio of the consecutive terms shown.
a. Find the ratio of the consecutive terms
\(\begin{aligned} 4, \quad& \:8, \quad 16, \quad 32, \quad 64, \quad 128, \dots \\ &\frac{8}{4} \quad\frac{16}{8}\quad\frac{32}{16}\quad\frac{64}{32}\quad\frac{128}{64} \\ &\:2 \quad\:\:\: 2 \quad\quad2\quad\quad2\quad\quad2 \end{aligned}\)
The sequence is geometric. The common ration is \(r=2\).
b. Find the ratio of the consecutive terms
\(\begin{aligned}-\:2,\quad &\:\:\:6,\quad -12,\quad 36,\quad \:-72\quad \:\:216,\dots \\ & \frac{6}{-2}\quad\frac{-12}{6}\quad\frac{36}{-12}\quad\frac{-72}{36}\quad\frac{216}{-72} \\ & -3\quad -2\quad\:\: -3\quad \:\:\:-2\quad \:\:-3 \end{aligned}\)
The sequence is not geometric. There is no common ratio.
c. Find the ratio of the consecutive terms
\(\begin{aligned}27,\quad &\:\:9,\quad 3,\quad 1,\quad \frac{1}{3},\quad \frac{1}{9}, \ldots\\ & \frac{9}{27}\quad\frac{3}{9}\quad\frac{1}{3}\quad\frac{\frac{1}{3}}{1}\quad\frac{\frac{1}{9}}{\frac{1}{3}}\\ &\frac{1}{3}\quad\;\:\frac{1}{3}\quad\frac{1}{3}\quad\:\frac{1}{3}\quad\:\frac{1}{3}\end{aligned}\)
The sequence is geometric. The common ratio is \(r=\frac{1}{3}\).
Determine if each sequence is geometric. If so indicate the common ratio.
- \(7,21,63,189,567,1,701, \dots\)
- \(64,16,4,1, \frac{1}{4}, \frac{1}{16}, \dots\)
- \(2,4,12,48,240,1,440, \dots\)
- Answer
-
- The sequence is geometric with common ratio \(r=3\).
- The sequence is geometric with common ratio \(d=\frac{1}{4}\).
- The sequence is not geometric. There is no common ratio.
Determine if each sequence is geometric. If so indicate the common ratio.
- \(-150,-30,-15,-5,-\frac{5}{2}, 0, \dots\)
- \(5,10,20,40,80,160, \dots\)
- \(8,4,2,1, \frac{1}{2}, \frac{1}{4}, \ldots\)
- Answer
-
- The sequence is not geometric. There is no common ratio.
- The sequence is geometric with common ratio \(r=2\).
- The sequence is geometric with common ratio \(r=\frac{1}{2}\).
If we know the first term, \(a_{1}\), and the common ratio, \(r\), we can list a finite number of terms of the sequence.
Write the first five terms of the sequence where the first term is \(3\) and the common ratio is \(r=−2\).
Solution :
We start with the first term and multiply it by the common ratio. Then we multiply that result by the common ratio to get the next term, and so on.
\(\begin{array}{cccc}{a_{1}} & {a_{2}} & {a_{3}} & {a_{4}} & {a_{5}} \\ {3} & {3 \cdot(-2)} & {-6 \cdot(-2)} & {12 \cdot(-2)} & {-24 \cdot(-2)} \\& {-6} & {12} & {-24} & {48}\end{array}\)
Answer :
The sequence is \(3,-6,12,-24,48, \dots\)
Write the first five terms of the sequence where the first term is \(7\) and the common ratio is \(r=−3\).
- Answer
-
\(7,-21,63,-189,567\)
Write the first five terms of the sequence where the first term is \(6\) and the common ratio is \(r=−4\).
- Answer
-
\(6,-24,96,-384,1536\)
Find the General Term (\(n\)th Term) of a Geometric Sequence
Just as we found a formula for the general term of a sequence and an arithmetic sequence, we can also find a formula for the general term of a geometric sequence.
Let’s write the first few terms of the sequence where the first term is \(a_{1}\) and the common ratio is \(r\). We will then look for a pattern.
As we look for a pattern in the five terms above, we see that each of the terms starts with \(a_{1}\).
The first term, \(a_{1}\), is not multiplied by any \(r\). In the second term, the \(a_{1}\) is multiplied by \(r\). In the third term, the \(a_{1}\) is multiplied by \(r\) two times (\(r⋅r\) or \(r^{2}\)). In the fourth term, the \(a_{1}\) is multiplied by \(r\) three times (\(r⋅r⋅r\) or \(r^{3}\)) and in the fifth term, the \(a_{1}\) is multiplied by \(r\) four times. In each term, the number of times \(a_{1}\) is multiplied by \(r\) is one less than the number of the term. This leads us to the following
\(a_{n}=a_{1} r^{n-1}\)
The general term of a geometric sequence with first term \(a_{1}\) and the common ratio \(r\) is
\(a_{n}=a_{1} r^{n-1}\)
We will use this formula in the next example to find the fourteenth term of a sequence.
Find the fourteenth term of a sequence where the first term is \(64\) and the common ratio is \(r=\frac{1}{2}\).
Solution :
\(a_{n}=a_{1} r^{n-1}\)
To find the fourteenth term, \(a_{14}\),use the formula with \(a_{1}=64\) and \(r=\frac{1}{2}\).
\(a_{14}=64\left(\frac{1}{2}\right)^{14-1}\)
Substitute in the values.
\(a_{14}=64\left(\frac{1}{2}\right)^{13}\)
Simplify.
\(a_{14}=\frac{1}{128}\)
Find the thirteenth term of a sequence where the first term is \(81\) and the common ratio is \(r=\frac{1}{3}\).
- Answer
-
\(\frac{1}{6,561}\)
Find the twelfth term of a sequence where the first term is \(256\) and the common ratio is \(r=\frac{1}{4}\).
- Answer
-
\(\frac{1}{16,384}\)
Sometimes we do not know the common ratio and we must use the given information to find it before we find the requested term.
Find the twelfth term of the sequence \(3, 6, 12, 24, 48, 96, …\) Find the general term for the sequence.
Solution :
To find the twelfth term, we use the formula, \(a_{n}=a_{1} r^{n-1}\), and so we need to first determine \(a_{1}\) and the common ratio \(r\).
The first term is three.
\(3,6,12,24,48,96, \dots\)
\(a_{1}=3\)
Find the common ratio.
\(\begin{array}{l}{\frac{6}{3} \quad \frac{12}{6} \quad \frac{24}{12} \quad \frac{48}{24} \quad \frac{96}{48}} \\ {2 \:\:\:\quad 2 \quad \:\:2 \quad\:\:\: 2 \:\:\quad \:2} \\ {\text { The common ratio is } r=2}\end{array}\)
To find the twelfth term, \(a_{12}\),use the formula with \(a_{1}=3\) and \(r=2\).
\(a_{n}=a_{1} r^{n-1}\)
Substitute in the values.
\(a_{12}=3 \cdot 2^{12-1}\)
Simplify.
\(a_{12}=3 \cdot 2^{11}\)
\(a_{12}=6,144\)
Find the general term. We use the formula with \(a_{1}=3\) and \(r=2\).
\(a_{n}=a_{1} r^{n-1}\)
\(a_{n}=3(2)^{n-1}\)
Find the ninth term of the sequence \(6, 18, 54, 162, 486, 1,458, … \) Then find the general term for the sequence.
- Answer
-
\(a_{9}=39,366 .\) The general term is \(a_{n}=6(3)^{n-1}\).
Find the eleventh term of the sequence \(7, 14, 28, 56, 112, 224, …\) Then find the general term for the sequence.
- Answer
-
\(a_{11}=7,168 .\) The general term is \(a_{n}=7(2)^{n-1}\).
Find the Sum of the First \(n\) Terms of a Geometric Sequence
We found the sum of both general sequences and arithmetic sequence. We will now do the same for geometric sequences. The sum, \(S_{n}\), of the first \(n\) terms of a geometric sequence is written as \(S_{n}=a_{1}+a_{2}+a_{3}+\ldots+a_{n}\). We can write this sum by starting with the first term, \(a_{1}\), and keep multiplying by \(r\) to get the next term as:
\(S_{n}=a_{1}+a_{1} r+a_{1} r^{2}+\ldots+a_{1} r^{n-1}\)
Let’s also multiply both sides of the equation by \(r\).
\(r S_{n}=a_{1} r+a_{1} r^{2}+a_{1} r^{3}+\ldots+a_{1} r^{n}\)
Next, we subtract these equations. We will see that when we subtract, all but the first term of the top equation and the last term of the bottom equation subtract to zero.
\(\begin{aligned} S_{n}&= a_{1}+a_{1} r+a_{1} r^{2}+a_{1} r^{3}+\ldots+a_{1} r^{n-1} \\ r S_{n} &= a_{1} r+a_{1} r^{2}+a_{1} r^{3}+\ldots+a_{1} r^{n-1}+a_{1} r^{n}\\\hline S_{n}-r S_{n} &= a_{1} -a_{1}r^{n} \end{aligned}\)
We factor both sides.
\(S_{n}(1-r)=a_{1}\left(1-r^{n}\right)\)
To obtain the formula for \(S_{n}\), divide both sides by \((1-r)\).
\(S_{n}=\frac{a_{1}\left(1-r^{n}\right)}{1-r}\)
The sum, \(S_{n}\), of the first \(n\) terms of a geometric sequence is
\(S_{n}=\frac{a_{1}\left(1-r^{n}\right)}{1-r}\)
where \(a_{1}\) is the first term and \(r\) is the common ratio, and \(r\) is not equal to one.
We apply this formula in the next example where the first few terms of the sequence are given. Notice the sum of a geometric sequence typically gets very large when the common ratio is greater than one.
Find the sum of the first \(20\) terms of the geometric sequence \(7, 14, 28, 56, 112, 224, …\)
Solution :
To find the sum, we will use the formula \(S_{n}=\frac{a_{1}\left(1-r^{n}\right)}{1-r}\). We know \(a_{1}=7\), \(r=2\), and \(n=20\),
Knowing \(a_{1}=7, r=2\), and \(n=20\), use the sum formula.
\(S_{n}=\frac{a_{1}\left(1-r^{n}\right)}{1-r}\)
Substitute in the values.
\(S_{20}=\frac{7\left(1-2^{20}\right)}{1-2}\)
Simplify.
\(S_{20}=7,340,025\)
Find the sum of the first \(20\) terms of the geometric sequence \(3, 6, 12, 24, 48, 96, …\)
- Answer
-
\(3,145,725\)
Find the sum of the first \(20\) terms of the geometric sequence \(6, 18, 54, 162, 486, 1,458, …\)
- Answer
-
\(10,460,353,200\)
In the next example, we are given the sum in summation notation. While adding all the terms might be possible, most often it is easiest to use the formula to find the sum of the first \(n\) terms.
To use the formula, we need \(r\). We can find it by writing out the first few terms of the sequence and find their ratio. Another option is to realize that in summation notation, a sequence is written in the form \(\sum_{i=1}^{k} a(r)^{i}\), where \(r\) is the common ratio.
Find the sum: \(\sum_{i=1}^{15} 2(3)^{i}\).
Solution :
To find the sum, we will use the formula \(S_{n}=\frac{a_{1}\left(1-r^{n}\right)}{1-r}\), which requires \(a_{1}\) and \(r\). We will write out a few of the terms, so we can get the needed information.
| Write out the first few terms. | |
| Identify \(a_{1}\). | |
| Find the common ratio. | |
| Knowing \(a_{1}=6\), \(r=3\), and \(n=15\), use the sum formula. | |
| Substitute in the values. | |
| Simplify. |
Find the sum: \(\sum_{i=1}^{15} 6(2)^{i}\).
- Answer
-
\(393,204\)
Find the sum: \(\sum_{i=1}^{10} 5(2)^{i}\).
- Answer
-
\(10,230\)
Find the Sum of an Infinite Geometric Series
If we take a geometric sequence and add the terms, we have a sum that is called a geometric series. An infinite geometric series is an infinite sum whose first term is \(a_{1}\) and common ratio is \(r\) and is written
\(a_{1}+a_{1} r+a_{1} r^{2}+\ldots+a_{1} r^{n-1}+\ldots\)
An infinite geometric series is an infinite sum whose first term is \(a_{1}\) and common ratio is \(r\) and is written
\(a_{1}+a_{1} r+a_{1} r^{2}+\ldots+a_{1} r^{n-1}+\dots\)
We know how to find the sum of the first \(n\) terms of a geometric series using the formula, \(S_{n}=\frac{a_{1}\left(1-r^{n}\right)}{1-r}\). But how do we find the sum of an infinite sum?
Let’s look at the infinite geometric series \(3+6+12+24+48+96+….\). Each term gets larger and larger so it makes sense that the sum of the infinite number of terms gets larger. Let’s look at a few partial sums for this series. We see 

## Match 3.04 — LibreTexts: 4.12.E: Problems on Sequences and Series of Functions
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_(Zakon)/04%3A_Function_Limits_and_Continuity/4.12%3A_Sequences_and_Series_of_Functions/4.12.E%3A_Problems_on_Sequences_and_Series_of_Functions

4.12.E: Problems on Sequences and Series of Functions
Complete the proof of Theorems 2 and 3.
Complete the proof of Theorem 4.
In Example \((a),\) show that \(f_{n} \rightarrow+\infty\) (pointwise) on \((1,+\infty),\) but not uniformly so. Prove, however, that the limit is uniform on any interval \([a,+\infty), a>1 .\) (Define "lim \(f_{n}=+\infty\) (uniformly)" in a suitable manner.)
Using Theorem 1, discuss \(\lim _{n \rightarrow \infty} f_{n}\) on \(B\) and \(C(\text { as in Example }(a))\) for each of the following.
(i) \(f_{n}(x)=\frac{x}{n} ; B=E^{1} ; C=[a, b] \subset E^{1}\).
(ii) \(f_{n}(x)=\frac{\cos x+n x}{n} ; B=E^{1}\).
(iii) \(f_{n}(x)=\sum_{k=1}^{n} x^{k} ; B=(-1,1) ; C=[-a, a],|a|<1\).
(iv) \(f_{n}(x)=\frac{x}{1+n x} ; C=[0,+\infty)\).
\(\left.\text { [Hint: Prove that } Q_{n}=\sup \frac{1}{n} (1-\frac{1}{n x+1}\right)=\frac{1}{n} .]\)
(v) \(f_{n}(x)=\cos ^{n} x ; B=\left(0, \frac{\pi}{2}\right), C=\left[\frac{1}{4}, \frac{\pi}{2}\right)\).
(vi) \(f_{n}(x)=\frac{\sin ^{2} n x}{1+n x} ; B=E^{1}\).
(vii) \(f_{n}(x)=\frac{1}{1+x^{n}} ; B=[0,1) ; C=[0, a], 0<a<1\).
Using Theorems 1 and \(2,\) discuss \(\lim f_{n}\) on the sets given below, with
\(f_{n}(x)\) as indicated and \(0<a<+\infty .\) (Calculus rules for maxima and minima are assumed known in (v), \((\mathrm{vi}),\) and (vii).)
(i) \(\frac{n x}{1+n x} ;[a,+\infty),(0, a)\).
(ii) \(\frac{n x}{1+n^{3} x^{3}} ;(a,+\infty),(0, a)\).
(iii) \(\sqrt[n]{\cos x} ;\left(0, \frac{\pi}{2}\right),[0, a], a<\frac{\pi}{2}\).
(iv) \(\frac{x}{n} ;(0, a),(0,+\infty)\).
(v) \(x e^{-n x} ;[0,+\infty) ; E^{1}\).
(vi) \(n x e^{-n x} ;[a,+\infty),(0,+\infty)\).
(vii) \(n x e^{-n x^{2}} ;[a,+\infty),(0,+\infty)\).
[Hint: \(\lim f_{n}\) cannot be uniform if the \(f_{n}\) are continuous on a set, but \(\lim f_{n}\) is not.
[For \((\mathrm{v}), f_{n}\) has a maximum at \(x=\frac{1}{n}\); hence find \(Q_{n}\).]
Define \(f_{n} : E^{1} \rightarrow E^{1}\) by
\[
f_{n}(x)=\left\{\begin{array}{ll}{n x} & {\text { if } 0 \leq x \leq \frac{1}{n}} \\ {2-n x} & {\text { if } \frac{1}{n}<x \leq \frac{2}{n}, \text { and }} \\ {0} & {\text { otherwise }}\end{array}\right.
\]
Show that all \(f_{n}\) and \(\lim f_{n}\) are continuous on each interval \((-a, a),\) \(\left.\text { though } \lim f_{n} \text { exists only pointwise. (Compare this with Theorem } 3 .\right)\)
The function \(f\) found in the proof of Theorem 3 is uniquely determined. Why?
\(\Rightarrow 7.\) Prove that if each of the functions \(f_{n}\) is constant on \(B,\) or if \(B\) is finite, then a pointwise limit of the \(f_{n}\) on \(B\) is also a uniform limit; similarly for series.
\(\Rightarrow 8.\) Prove that if \(f_{n} \rightarrow f(\text { uniformly })\) on \(B\) and if \(C \subseteq B,\) then \(f_{n} \rightarrow f\) (uniformly) on \(C\) as well.
\(\Rightarrow 9.\) Show that if \(f_{n} \rightarrow f(\text { uniformly })\) on each of \(B_{1}, B_{2}, \ldots, B_{m},\) then \(f_{n} \rightarrow f\) (uniformly) on \(\bigcup_{k=1}^{m} B_{k}\).
Disprove it for infinite unions by an example. Do the same for series.
\(\Rightarrow 10.\) Let \(f_{n} \rightarrow f(\text { uniformly })\) on \(B\). Prove the equivalence of the following statements:
(i) Each \(f_{n},\) from a certain \(n\) onward, is bounded on \(B\).
(ii) \(f\) is bounded on \(B\).
(iii) The \(f_{n}\) are ultimately uniformly bounded on \(B ;\) that is, all function values \(f_{n}(x), x \in B,\) from a certain \(n=n_{0}\) onward, are in one and the same globe \(G_{q}(K)\) in the range space.
For real, complex, and vector-valued functions, this means that
\[
\left(\exists K \in E^{1}\right)\left(\forall n \geq n_{0}\right)(\forall x \in B) \quad\left|f_{n}(x)\right|<K .
\]
\(\Rightarrow 11.\) Prove for real, complex, or vector-valued functions \(f_{n}, f, g_{n}, g\) that if
\[
f_{n} \rightarrow f \text { and } g_{n} \rightarrow g \text { (uniformly) on } B ,
\]
then also
\[
f_{n} \pm g_{n} \rightarrow f \pm g(\text { uniformly }) \text { on } B .
\]
\(\Rightarrow 12.\) Prove that if the functions \(f_{n}\) and \(g_{n}\) are real or complex (or if the \(g_{n}\) are vector valued and the \(f_{n}\) are scalar valued), and if
\[
f_{n} \rightarrow f \text { and } g_{n} \rightarrow g \text { (uniformly) on } B ,
\]
then
\[
f_{n} g_{n} \rightarrow f g \text { (uniformly) on } B
\]
provided that either \(f\) and \(g\) or the \(f_{n}\) and \(g_{n}\) are bounded on \(B\) (at least from some \(n\) onward); cf. Problem \(11 .\)
Disprove it for the case where only one of \(f\) and \(g\) is bounded.
[Hint: Let \(f_{n}(x)=x\) and \(g_{n}(x)=1 / n\) (constant) on \(B=E^{1} .\) Give some other examples.]
\(\Rightarrow 13.\) Prove that if \(\left\{f_{n}\right\}\) tends to \(f\) (pointwise or uniformly), so does each subsequence \(\left\{f_{n_{k}}\right\}\).
\(\Rightarrow 14.\) Let the functions \(f_{n}\) and \(g_{n}\) and the constants \(a\) and \(b\) be real or complex \(\left.\text { (or let } a \text { and } b \text { be scalars and } f_{n} \text { and } g_{n} \text { be vector valued }\right) .\) Prove that if
\[
f=\sum_{n=1}^{\infty} f_{n} \text { and } g=\sum_{n=1}^{\infty} g_{n} \text { (pointwise or uniformly) } ,
\]
then
\[
a f+b g=\sum_{n=1}^{\infty}\left(a f_{n}+b g_{n}\right) \text { in the same sense. }
\]
(Infinite limits are excluded.)
In particular,
\[
f \pm g=\sum_{n=1}^{\infty}\left(f_{n} \pm g_{n}\right) \quad \text { (rule of termwise addition) }
\]
and
\[
a f=\sum_{n=1}^{\infty} a f_{n} .
\]
\(\text { [Hint: Use Problems } 11 \text { and } 12 .]\)
\(\Rightarrow 15.\) Let the range space of the functions \(f_{m}\) and \(g\) be \(E^{n}\left(\text {*or } C^{n}\right),\) and let \(f_{m}=\left(f_{m 1}, f_{m 2}, \ldots, f_{m n}\right), g=\left(g_{1}, \ldots, g_{n}\right) ;\) see §3, part II. Prove that
\[
f_{m} \rightarrow g \quad \text { (pointwise or uniformly) }
\]
iff each component \(f_{m k}\) of \(f_{m}\) converges (in the same sense) to the corresponding component \(g_{k}\) of \(g ;\) i.e.,
\[
f_{m k} \rightarrow g_{k} \quad \text { (pointwise or uniformly), } k=1,2, \ldots, n .
\]
Similarly,
\[
g=\sum_{m=1}^{\infty} f_{m}
\]
iff
\[
(\forall k \leq n) \quad g_{k}=\sum_{m=1}^{\infty} f_{m k} .
\]
\(\text { (See Chapter } 3, §15, \text { Theorem } 2)\).
\(\Rightarrow 16.\) From Problem 15 deduce for complex functions that \(f_{m} \rightarrow g\) (pointwise or uniformly) iff the real and imaginary parts of the \(f_{m}\) converge to those of \(g\) (pointwise or uniformly). That is, \(\left(f_{m}\right)_{r e} \rightarrow g_{r e}\) and \(\left(f_{m}\right)_{i m} \rightarrow g_{i m}\); similarly for series.
\(\Rightarrow 17.\) Prove that the convergence or divergence (pointwise or uniformly) of a
sequence \(\left\{f_{m}\right\},\) or a series \(\sum f_{m},\) of functions is not affected by deleting or adding a finite number of terms.
Prove also that \(\lim _{m \rightarrow \infty} f_{m}\) (if any) remains the same, but \(\sum_{m=1}^{\infty} f_{m}\) is altered by the difference between the added and deleted terms.
\(\Rightarrow 18.\) Show that the geometric series with ratio \(r\),
\[
\sum_{n=0}^{\infty} a r^{n} \quad\left(a, r \in E^{1} \text { or } a, r \in C\right) ,
\]
converges iff \(|r|<1,\) in which case
\[
\sum_{n=0}^{\infty} a r^{n}=\frac{a}{1-r}
\]
(similarly if \(a\) is a vector and \(r\) is a scalar). Deduce that \(\sum(-1)^{n}\) diverges. (See Chapter 3, §15, Problem 19.)
Theorem 4 shows that a convergent series does not change its sum if every several consecutive terms are replaced by their sum. Show by an example that the reverse process (splitting each term into several terms) may affect convergence.
[Hint: Consider \(\sum a_{n}\) with \(a_{n}=0 .\) Split \(a_{n}=1-1\) to obtain a divergent series: \(\left.\sum(-1)^{n-1}, \text { with partial sums } 1,0,1,0,1, \ldots\right]\)
Find \(\sum_{n=1}^{\infty} \frac{1}{n(n+1)}\).
\(\left.\text { [Hint: Verify: } \frac{1}{n(n+1)}=\frac{1}{n}-\frac{1}{n+1} . \text { Hence find } s_{n}, \text { and let } n \rightarrow \infty .\right]\)
The functions \(f_{n} : A \rightarrow\left(T, \rho^{\prime}\right), A \subseteq(S, \rho)\) are said to be equicontinuous at \(p \in A\) iff
\[
(\forall \varepsilon>0)(\exists \delta>0)(\forall n)\left(\forall x \in A \cap G_{p}(\delta)\right) \quad \rho^{\prime}\left(f_{n}(x), f_{n}(p)\right)<\varepsilon .
\]
Prove that if so, and if \(f_{n} \rightarrow f\) (pointwise) on \(A,\) then \(f\) is continuous at \(p .\)
[Hint: "Imitate" the proof of Theorem 2 .]

## Match 3.03 — LibreTexts: 4.12: Sequences and Series of Functions
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/3.0/ · https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_(Zakon)/04%3A_Function_Limits_and_Continuity/4.12%3A_Sequences_and_Series_of_Functions

4.12: Sequences and Series of Functions
This page is a draft and is under active development.
I. Let
\[f_{1}, f_{2}, \ldots, f_{m}, \dots\]
be a sequence of mappings from a common domain \(A\) into a metric space \(\left(T, \rho^{\prime}\right) .\) For each (fixed) \(x \in A,\) the function values
\[f_{1}(x), f_{2}(x), \ldots, f_{m}(x), \ldots\]
form a sequence of points in the range space \(\left(T, \rho^{\prime}\right).\) Suppose this sequence converges for each \(x\) in a set \(B \subseteq A.\) Then we can define a function \(f : B \rightarrow T\) by setting
\[f(x)=\lim _{m \rightarrow \infty} f_{m}(x) \text { for all } x \in B.\]
This means that
\[(\forall \varepsilon>0)(\forall x \in B)(\exists k)(\forall m>k) \quad \rho^{\prime}\left(f_{m}(x), f(x)\right)<\varepsilon.\]
Here \(k\) depends not only on \(\varepsilon\) but also on \(x,\) since each \(x\) yields a different sequence \(\left\{f_{m}(x)\right\}.\) However, in some cases (resembling uniform continuity), \(k\) depends on \(\varepsilon\) only; i.e., given \(\varepsilon>0,\) one and the same \(k\) fits all \(x\) in \(B.\) In symbols, this is indicated by changing the order of quantifiers, namely,
\[(\forall \varepsilon>0)(\exists k)(\forall x \in B)(\forall m>k) \quad \rho^{\prime}\left(f_{m}(x), f(x)\right)<\varepsilon.\]
Of course, (2) implies (1) , but the converse fails (see examples below). This suggests the following definitions.
With the above notation, we call \(f\) the pointwise limit of a sequence of functions \(f_{m}\) on a set \(B(B \subseteq A)\) iff
\[f(x)=\lim _{m \rightarrow \infty} f_{m}(x) \text { for all } x \text { in } B;\]
i.e., formula (1) holds. We then write
\[f_{m} \rightarrow f(\text {pointwise}) \text { on } B.\]
In case (2) , we call the limit uniform (on \(B )\) and write
\[f_{m} \rightarrow f(\text {uniformly}) \text { on } B.\]
II. If the \(f_{m}\) are real, complex, or vector valued (§3), we can also define \(s_{m}=\sum_{k=1}^{m} f_{k}\) (= sum of the first \(m\) functions) for each \(m\), so
\[(\forall x \in A)(\forall m) \quad s_{m}(x)=\sum_{k=1}^{m} f_{k}(x).\]
The \(s_{m}\) form a new sequence of functions on \(A.\) The pair of sequences
\[\left(\left\{f_{m}\right\},\left\{s_{m}\right\}\right)\]
is called the (infinite) series with general term \(f_{m} ; s_{m}\) is called its \(m\) th partial sum. The series is often denoted by symbols like \(\sum f_{m}, \sum f_{m}(x),\) etc.
The series \(\sum f_{m}\) on \(A\) is said to converge (pointwise or uniformly) to a function \(f\) on a set \(B \subseteq A\) iff the sequence \(\left\{s_{m}\right\}\) of its partial sums does as well.
We then call \(f\) the sum of the series and write
\[f(x)=\sum_{k=1}^{\infty} f_{k}(x) \text { or } f=\sum_{m=1}^{\infty} f_{m}=\lim s_{m}\]
(pointwise or uniformly) on \(B\).
Note that series of constants, \(\sum c_{m},\) may be treated as series of constant functions \(f_{m},\) with \(f_{m}(x)=c_{m}\) for \(x \in A.\)
If the range space is \(E^{1}\) or \(E^{*},\) we also consider infinite limits,
\[\lim _{m \rightarrow \infty} f_{m}(x)=\pm \infty.\]
However, a series for which
\[\sum_{m=1}^{\infty} f_{m}=\lim s_{m}\]
is infinite for some \(x\) is regarded as divergent (i.e., not convergent) at that \(x\).
III. Since convergence of series reduces to that of sequences \(\left\{s_{m}\right\},\) we shall first of all consider sequences. The following is a simple and useful test for uniform convergence of sequences \(f_{m} : A \rightarrow\left(T, \rho^{\prime}\right).\)
Given a sequence of functions \(f_{m} : A \rightarrow\left(T, \rho^{\prime}\right),\) let \(B \subseteq A\) and
\[Q_{m}=\sup _{x \in B} \rho^{\prime}\left(f_{m}(x), f(x)\right).\]
Then \(f_{m} \rightarrow f(\text {uniformly on } B)\) iff \(Q_{m} \rightarrow 0\).
- Proof
-
If \(Q_{m} \rightarrow 0,\) then by definition
\[(\forall \varepsilon>0)(\exists k)(\forall m>k) \quad Q_{m}<\varepsilon.\]
However, \(Q_{m}\) is an upper bound of all distances \(\rho^{\prime}\left(f_{m}(x), f(x)\right), x \in B.\) Hence (2) follows.
Conversely, if
\[(\forall x \in B) \quad \rho^{\prime}\left(f_{m}(x), f(x)\right)<\varepsilon,\]
then
\[\varepsilon \geq \sup _{x \in B} \rho^{\prime}\left(f_{m}(x), f(x)\right),\]
i.e., \(Q_{m} \leq \varepsilon.\) Thus (2) implies
\[(\forall \varepsilon>0)(\exists k)(\forall m>k) \quad Q_{m} \leq \varepsilon\]
and \(Q_{m} \rightarrow 0.\) \(\square\)
(a) We have
\[\lim _{n \rightarrow \infty} x^{n}=0 \text { if }|x|<1 \text { and } \lim _{n \rightarrow \infty} x^{n}=1 \text { if } x=1.\]
Thus, setting \(f_{n}(x)=x^{n},\) consider \(B=[0,1]\) and \(C=[0,1)\).
We have \(f_{n} \rightarrow 0\) (pointwise) on \(C\) and \(f_{n} \rightarrow f(\text { pointwise })\) on \(B,\) with \(f(x)=0\) for \(x \in C\) and \(f(1)=1.\) However, the limit is not uniform on \(C,\) let alone on \(B .\) Indeed,
\[Q_{n}=\sup _{x \in C}\left|f_{n}(x)-f(x)\right|=1 \text { for each } n.\]
Thus \(Q_{n}\) does not tend to \(0,\) and uniform convergence fails by Theorem 1.
(b) In Example (a), let \(D=[0, a], 0<a<1 .\) Then \(f_{n} \rightarrow f\) (uniformly) on \(D\) because, in this case,
\[Q_{n}=\sup _{x \in D}\left|f_{n}(x)-f(x)\right|=\sup _{x \in D}\left|x^{n}-0\right|=a^{n} \rightarrow 0.\]
(c) Let
\[f_{n}(x)=x^{2}+\frac{\sin n x}{n}, \quad x \in E^{1}.\]
For a fixed \(x\),
\[\lim _{n \rightarrow \infty} f_{n}(x)=x^{2} \quad \text { since }\left|\frac{\sin n x}{n}\right| \leq \frac{1}{n} \rightarrow 0.\]
Thus, setting \(f(x)=x^{2},\) we have \(f_{n} \rightarrow f\) (pointwise) on \(E^{1}.\) Also,
\[\left|f_{n}(x)-f(x)\right|=\left|\frac{\sin n x}{n}\right| \leq \frac{1}{n}.\]
Thus \((\forall n) Q_{n} \leq \frac{1}{n} \rightarrow 0.\) By Theorem 1, the limit is uniform on all of \(E^{1}.\)
Let \(f_{m} : A \rightarrow\left(T, \rho^{\prime}\right)\) be a sequence of functions on \(A \subseteq(S, \rho).\) If \(f_{m} \rightarrow f\left(\text {uniformly } \text { on a set } B \subseteq A, \text { and if the } f_{m} \text { are relatively (or uniformly) }\right.\) continuous on \(B\), then the limit function \(f\) has the same property.
- Proof
-
Fix \(\varepsilon>0.\) As \(f_{m} \rightarrow f\) (uniformly) on \(B,\) there is a \(k\) such that
\[(\forall x \in B)(\forall m \geq k) \quad \rho^{\prime}\left(f_{m}(x), f(x)\right)<\frac{\varepsilon}{4}.\]
Take any \(f_{m}\) with \(m>k,\) and take any \(p \in B.\) By continuity, there is \(\delta>0,\) with
\[\left(\forall x \in B \cap G_{p}(\delta)\right) \quad \rho^{\prime}\left(f_{m}(x), f_{m}(p)\right)<\frac{\varepsilon}{4}.\]
Also, setting \(x=p\) in (3) gives \(\rho^{\prime}\left(f_{m}(p), f(p)\right)<\frac{\varepsilon}{4}.\) Combining this with (4) and (3), we obtain \(\left(\forall x \in B \cap G_{p}(\delta)\right)\)
\[\begin{aligned} \rho^{\prime}(f(x), f(p)) & \leq \rho^{\prime}\left(f(x), f_{m}(x)\right)+\rho^{\prime}\left(f_{m}(x), f_{m}(p)\right)+\rho^{\prime}\left(f_{m}(p), f(p)\right) \\ &<\frac{\varepsilon}{4}+\frac{\varepsilon}{4}+\frac{\varepsilon}{4}<\varepsilon. \end{aligned}\]
We thus see that for \(p \in B\),
\[(\forall \varepsilon>0)(\exists \delta>0)\left(\forall x \in B \cap G_{p}(\delta)\right) \quad \rho^{\prime}(f(x), f(p))<\varepsilon,\]
i.e., \(f\) is relatively continuous at \(p(\text { over } B),\) as claimed.
Quite similarly, the reader will show that \(f\) is uniformly continuous if the \(f_{n}\) are. \(\square\)
Note 2. A similar proof also shows that if \(f_{m} \rightarrow f\) (uniformly) on \(B,\) and if the \(f_{m}\) are relatively continuous at a point \(p \in B,\) so also is \(f.\)
Let \(\left(T, \rho^{\prime}\right)\) be complete. Then a sequence \(f_{m} : A \rightarrow T, A \subseteq(S, \rho),\) converges uniformly on a set \(B \subseteq A\) iff
\[(\forall \varepsilon>0)(\exists k)(\forall x \in B)(\forall m, n>k) \quad \rho^{\prime}\left(f_{m}(x), f_{n}(x)\right)<\varepsilon.\]
- Proof
-
If (5) holds then, for any (fixed) \(x \in B,\left\{f_{m}(x)\right\}\) is a Cauchy sequence of points in \(T,\) so by the assumed completeness of \(T,\) it has a limit \(f(x).\) Thus we can define a function \(f : B \rightarrow T\) with
\[f(x)=\lim _{m \rightarrow \infty} f_{m}(x) \text { on } B.\]
To show that \(f_{m} \rightarrow f\) (uniformly) on \(B,\) we use (5) again . Keeping \(\varepsilon, k,\) \(x,\) and \(m\) temporarily fixed, we let \(n \rightarrow \infty\) so that \(f_{n}(x) \rightarrow f(x)\). Then by Theorem 4 of Chapter 3, §15, \(\rho^{\prime}\left(f_{m}(x), f_{n}(x)\right) \rightarrow p^{\prime}\left(f(x), f_{m}(x)\right).\) Passing to the l imit in (5), we thus obtain (2) .
The easy proof of the converse is left to the reader (cf. Chapter 3, §17, Theorem 1). \(\square\)
IV. If the range space \(\left(T, \rho^{\prime}\right)\) is \(E^{1}, C,\) or \(E^{n}\) (*or another normed space), the standard metric applies. In particular, for series we have
\[\begin{aligned} \rho^{\prime}\left(s_{m}(x), s_{n}(x)\right) &=\left|s_{n}(x)-s_{m}(x)\right| \\ &=\left|\sum_{k=1}^{n} f_{k}(x)-\sum_{k=1}^{m} f_{k}(x)\right| \\ &=\left|\sum_{k=m+1}^{n} f_{k}(x)\right| \quad \text { for } m<n. \end{aligned}\]
Replacing here \(m\) by \(m-1\) and applying Theorem 3 to the sequence \(\left\{s_{m}\right\},\) we obtain the following result.
Let the range space of \(f_{m}, m=1,2, \ldots,\) be \(E^{1}, C,\) or \(E^{n}\) (*or another complete normed space). Then the series \(\sum f_{m}\) converges uniformly on \(B\) iff
\[(\forall \varepsilon>0)(\exists q)(\forall n>m>q)(\forall x \in B) \quad\left|\sum_{k=m}^{n} f_{k}(x)\right|<\varepsilon.\]
Similarly, via \(\left\{s_{m}\right\},\) Theorem 2 extends to series of functions. (Observe that the \(s_{m}\) are continuous if the \(f_{m}\) are.) Formulate it!
V. If \(\sum_{m=1}^{\infty} f_{m}\) exists on \(B,\) one may arbitrarily "group" the terms, i.e., replace every several consecutive terms by their sum. This property is stated more precisely in the following theorem.
Let
\[f=\sum_{m=1}^{\infty} f_{m}(\text {pointwise}) \text { on } B.\]
Let \(m_{1}<m_{2}<\cdots<m_{n}<\cdots\) in \(N,\) and define
\[g_{1}=s_{m_{1}}, \quad g_{n}=s_{m_{n}}-s_{m_{n-1}}, \quad n>1.\]
(Thus \(g_{n+1}=f_{m_{n}+1}+\cdots+f_{m_{n+1}}.)\) Then
\[f=\sum_{n=1}^{\infty} g_{n}(\text {pointwise}) \text { on } B \text { as well; }\]
similarly for uniform convergence.
- Proof
-
Let
\[s_{n}^{\prime}=\sum_{k=1}^{n} g_{k}, \quad n=1,2, \ldots\]
Then \(s_{n}^{\prime}=s_{m_{n}}\) (verify!), so \(\left\{s_{n}^{\prime}\right\}\) is a subsequence, \(\left\{s_{m_{n}}\right\},\) of \(\left\{s_{m}\right\} .\) Hence \(s_{m} \rightarrow f(\text { pointwise })\) implies \(s_{n}^{\prime} \rightarrow f\) (pointwise); i.e.,
\[f=\sum_{n=1}^{\infty} g_{n} \text { (pointwise). }\]
For uniform convergence, see Problem 13 (cf. also Problem 19). \(\square\)
