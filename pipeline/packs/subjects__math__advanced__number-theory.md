# Source pack — subjects/math/advanced/number-theory
Lesson title: Number Theory
Level: advanced
Match confidence: 3.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.05 — LibreTexts: 7.1: Introduct to Analytic Number Theory
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Elementary_Number_Theory_(Raji)/07%3A_Introduction_to_Analytic_Number_Theory/7.01%3A_Introduct_to_Analytic_Number_Theory

7.1: Introduct to Analytic Number Theory
It is well known that the harmonic series \(\sum_{n=1}^{\infty}\frac{1}{n}\) diverges. We therefore determine some asymptotic formulas that determines the growth of the \(\sum_{n\leq x}\frac{1}{n}\). We start by introducing Euler’s summation formula that will help us determine the asymptotic formula.
We might ask the following question. What if the sum is taken over all the primes. In this section, we show that the sum over the primes diverges as well. We also show that an interesting product will also diverge. From the following theorem, we can actually deduce that there are infinitely many primes.
Definition: Euler’s Summation Formula
If \(f\) has a continuous derivative on an interval \([a,b]\) where \(a> 0\), then \[\sum_{a<n\leq b}f(n)=\int_{a}^bf(t)dt+\int_{a}^b(\{t\})f'(t)dt+f(b)(\{b\})-f(a)(\{a\}).\] where \(\{t\}\) denotes the fractional part of \(t\).
Proof
For the proof of Euler’s summation formula see .
If \(x\geq 1\), we have that: \[\sum_{n\leq x}\frac{1}{n}=\log x+\gamma+O\left(\frac{1}{x}\right)\]
We use Euler’s summation formula by taking \(f(t)=1/t\). We then get
\[\begin{aligned} \sum_{n\leq x}\frac{1}{n}&=&\int_{1}^x\frac{1}{t}dt-\int_1^x\frac{\{t\}}{t^2}dt+1+O\left(\frac{1}{x}\right)\\ &=& \log x+1-\int_1^{\infty}\frac{\{t\}}{t^2}dt+\int_x^{\infty}\frac{\{t\}}{t^2}dt+O\left(\frac{1}{x}\right)\end{aligned}\]
Notice now that \(\{t\}\leq t\) and hence the two improper integrals exist since they are dominated by integrals that converge. We therefore have
\[0\leq \int_x^\infty\frac{\{t\}}{t^2}dt\leq \frac{1}{x},\]
we also let
\[\gamma=1-\int_1^{\infty}\frac{\{t\}}{t^2}dt\]
and we get the asymptotic formula.
Notice that \(\gamma\) is called Euler’s constant. Notice also that similar steps can be followed to find an asymptotic formulas for other sums involving powers of \(n\).
We now proceed to show that if we sum over the primes instead, we still get a divergent series.
Both \(\sum_p\frac{1}{p}\) and \(\prod_p(1-\frac{1}{p})\) diverge.
Let \(x \geq 2\) and put \[P(x)=\prod_{p\leq x}\left(1-\frac{1}{p}\right)^{-1}, \ \ \ S(x)=\sum_{p\leq x}\frac{1}{p}\] Let \(0<u<1\) and \(m\in \mathbb{Z}\), we have
\[\frac{1}{1-u}>\frac{1-u^{m+1}}{1-u}=1+u+...+u^m.\]
Now taking \(u=\frac{1}{p}\), we get
\[\frac{1}{1-\frac{1}{p}}>1+\frac{1}{p}+...+\left(\frac{1}{p}\right)^m\] As a result, we have that \[P(x)>\prod_{p\leq x}\left(1+\frac{1}{p}+...+\frac{1}{p^m}\right)\]
Choose \(m>0 \in \mathbb{Z}\) such that \(2^{m-1}\leq x\leq 2^m\). Observe also that
\[\prod_{p\leq x}\left(1+\frac{1}{p}+...+\frac{1}{p^m}\right)=1+\sum_{p_i\leq x}\frac{1}{p_1^{m_1}p_2^{m_2}...}\]
where \(1\leq m_i\leq m\). As a result, we get every \(\frac{1}{n}, n\in \mathbb{Z^+}\) where each prime factor of \(n\) is less than or equal to \(x\)(Exercise). Thus we have
\[\prod_{p\leq x}\left(1+\frac{1}{p}+...+\frac{1}{p^m}\right)>\sum_{n=1}^{2^{m-1}}\frac{1}{n}>\sum_{n=1}^{[x/2]}\frac{1}{n}\]
Taking the limit as \(x\) approaches infinity, we conclude that \(P(x)\) diverges.
We proceed now to prove that \(S(x)\) diverges. Notice that if \(u>0\), then
\[\log(1/u-1)<u+\frac{1}{2}(u^2+u^3+...).\]
Thus we have
\[\log(1/u-1)<u+\frac{u^2}{2}(1/1-u), \ \ \ 0<u<1.\]
We now let \(u=1/p\) for each \(p\leq x\), then \[\log\left(\frac{1}{1-1/p}\right)-\frac{1}{p}<\frac{1}{2p(p-1)}\] Thus \[\log P(x)=\sum_{p\leq x}log(1/1-p).\] Thus we have \[\log P(x)-S(x)<\frac{1}{2}\sum_{p\leq x}\frac{1}{p(p-1)}<\frac{1}{2}\sum_{n=1}^{\infty}\frac{1}{n(n-1)}\] This implies that \[S(x)>\log P(x)-\frac{1}{2}\] And thus \(S(x)\) diverges as \(x\) approaches infinity.
[1] For any arithmetic function \(f(n)\), we let \[A(x)=\sum_{n\leq x}f(n)\] where \(A(x)=0\) for \(x<1\). Assume also that \(g\) has a continuous derivative on the interval \([y,x]\), where \(0<y<x\). Then we have
\[\sum_{y<n\leq x}f(n)g(n)=A(x)g(x)-A(y)g(y)-\int_y^xA(t)g'(t)dt.\]
The proof of this theorem can be found in .
Exercises
- Show that one gets every \(\frac{1}{n}, n\in \mathbb{Z^+}\) where each prime factor of \(n\) is less than or equal to \(x\) in the proof of Theorem 1.
- Write down the proof of Abel’s summation formula in details.
Contributors and Attributions
-
Dr. Wissam Raji, Ph.D., of the American University in Beirut. His work was selected by the Saylor Foundation’s Open Textbook Challenge for public release under a Creative Commons Attribution ( CC BY ) license.

## Match 3.04 — LibreTexts: 1.5: Some Algorithms of Elementary Number Theory
License: GNU Free Documentation License · https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/Gentle_Introduction_to_the_Art_of_Mathematics_(Fields)/01%3A_Introduction_and_Notation/1.05%3A_Some_Algorithms_of_Elementary_Number_Theory

1.5: Some Algorithms of Elementary Number Theory
An algorithm is simply a set of clear instructions for achieving some task. The Persian mathematician and astronomer Al-Khwarizmi 1 was a scholar at the House of Wisdom in Baghdad who lived in the \(8^{\text{th}}\) and \(9^{\text{th}}\) centuries A.D. He is remembered for his algebra treatise Hisab al-jabr w’al-muqabala from which we derive the very word “algebra,” and a text on the Hindu-Arabic numeration scheme.
Al-Khwarizmi also wrote a treatise on Hindu-Arabic numerals. The Arabic text is lost but a Latin translation, Algoritmi de numero Indorum (in English Al-Khwarizmi on the Hindu Art of Reckoning) gave rise to the word algorithm deriving from his name in the title. [12]
While the study of algorithms is more properly a subject within Computer Science, a student of Mathematics can derive considerable benefit from it.
There is a big difference between an algorithm description intended for human consumption and one meant for a computer 2 . The two favored humanreadable forms for describing algorithms are pseudocode and flowcharts. The former is text-based and the latter is visual. There are many different modules from which one can build algorithmic structures: for-next loops, do-while loops, if-then statements, goto statements, switch-case structures, etc. We’ll use a minimal subset of the choices available.
- Assignment statements
- If-then control statements
- Goto statements
- Return
We take the view that an algorithm is something like a function, it takes for its input a list of parameters that describe a particular case of some general problem, and produces as its output a solution to that problem. (It should be noted that there are other possibilities – some programs require that the variable in which the output is to be placed be handed them as an input parameter, others have no specific output, their purpose is achieved as a side-effect.) The intermediary between input and output is the algorithm instructions themselves and a set of so-called local variables which are used much the way scrap paper is used in a hand calculation – intermediate calculations are written on them, but they are tossed aside once the final answer has been calculated.
Assignment statements allow us to do all kinds of arithmetic operations (or rather to think of these types of operations as being atomic.) In actuality even a simple procedure like adding two numbers requires an algorithm of sorts, we’ll avoid such a fine level of detail. Assignments consist of evaluating some (possibly quite complicated) formula in the inputs and local variables and assigning that value to some local variable. The two uses of the phrase “local variable” in the previous sentence do not need to be distinct, thus \(x = x + 1\) is a perfectly legal assignment.
If-then control statements are decision makers. They first calculate a Boolean expression (this is just a fancy way of saying something that is either true or false), and send program flow to different locations depending on that result. A small example will serve as an illustration. Suppose that in the body of an algorithm we wish to check if \(2\) variables, \(x\) and \(y\) are equal, and if they are, increment \(x\) by \(1\). This is illustrated in Figure \(1.5.1\) both in pseudocode and as a flowchart.
Notice the use of indentation in the pseudocode example to indicate the statements that are executed if the Boolean expression is true. These examples also highlight the difference between the two senses that the word “equals” (and the symbol \(=\)) has. In the Boolean expression, the sense is that of testing equality, in the assignment statements (as the name implies) an assignment is being made. In many programming languages, this distinction is made explicit, for instance in the C language equality testing is done via the symbol “\(==\)” whereas assignment is done using a single equals sign (\(=\)). In Mathematics the equals sign usually indicates equality testing, when the assignment sense is desired the word “let” will generally precede the equality.
While this brief introduction to the means of notating algorithms is by no means complete, it is hopefully sufficient for our purpose which is solely to introduce two algorithms that are important in elementary number theory. The division algorithm, as presented here, is simply an explicit version of the process one follows to calculate a quotient and remainder using long division. The procedure we give is unusually inefficient – with very little thought one could devise an algorithm that would produce the desired answer using many fewer operations – however the main point here is purely to show that division can be accomplished by essentially mechanical means. The Euclidean algorithm is far more interesting both from a theoretical and a practical perspective. The Euclidean algorithm computes the greatest common divisor (\(\text{gcd}\)) of two integers. The \(\text{gcd}\) of of two numbers \(a\) and \(b\) is denoted \(\text{gcd}(a, b)\) and is the largest integer that divides both \(a\) and \(b\) evenly.
A pseudocode outline of the division algorithm is as follows:
Algorithm: Division
Inputs: integers \(n\) and \(d\).
Local variables: \(q\) and \(r\).
Let \(q = 0\).
Let \(r = n\).
Label \(1\).
If \(r < d\) then
Return \(q\) and \(r\).
End If
Let \(q = q + 1\).
Let \(r = r − d\).
Goto \(1\).
This same algorithm is given in flowchart form in Figure \(1.5.2\).
Note that in a flowchart the action of a “Goto” statement is clear because an arrow points to the location where program flow is being redirected. In pseudocode a “Label” statement is required which indicates a spot where flow can be redirected via subsequent “Goto” statements. Because of the potential for confusion in complicated algorithms that involve multitudes of Goto statements and their corresponding Labels, this sort of redirection is now deprecated in virtually all popular programming environments.
Before we move on to describe the Euclidean algorithm it might be useful to describe more explicitly what exactly it’s for. Given a pair of integers, \(a\) and \(b\), there are two quantities that it is important to be able to compute, the least common multiple or \(\text{lcm}\), and the greatest common divisor or \(\text{gcd}\). The \(\text{lcm}\) also goes by the name lowest common denominator because it is the smallest denominator that could be used as a common denominator in the process of adding two fractions that had \(a\) and \(b\) in their denominators. The \(\text{gcd}\) and the \(\text{lcm}\) are related by the formula
\[\text{lcm}(a,b) = \dfrac{ab}{\text{gcd}(a, b)} \]
so they are essentially equivalent as far as representing a computational challenge.
The Euclidean algorithm depends on a rather extraordinary property of the \(\text{gcd}\). Suppose that we are trying to compute \(\text{gcd}(a, b)\) and that \(a\) is the larger of the two numbers. We first feed \(a\) and \(b\) into the division algorithm to find \(q\) and \(r\) such that \(a = qb + r\). It turns out that \(b\) and \(r\) have the same gcd as did \(a\) and \(b\). In other words, \(\text{gcd}(a, b) = \text{gcd}(b, r)\), furthermore these numbers are smaller than the ones we started with! This is nice because it means we’re now dealing with an easier version of the same problem. In designing an algorithm it is important to formulate a clear ending criterion, a condition that tells you you’re done. In the case of the Euclidean algorithm, we know we’re done when the remainder \(r\) comes out \(0\).
So, here, without further ado is the Euclidean algorithm in pseudocode.
Algorithm: Euclidean
Inputs: integers \(a\) and \(b\).
Local variables: \(q\) and \(r\).
Label \(1\).
Let \((q, r)\) = Division\((a, b)\).
If \(r = 0\) then
Return \(b\).
End If
Let \(a = b\).
Let \(b = r\).
Goto \(1\).
It should be noted that for small numbers one can find the \(\text{gcd}\) and \(\text{lcm}\) quite easily by considering their factorizations into primes. For the moment consider numbers that factor into primes but not into prime powers (that is, their factorizations don’t involve exponents). The \(\text{gcd}\) is the product of the primes that are in common between these factorizations (if there are no primes in common it is \(1\)). The \(\text{lcm}\) is the product of all the distinct primes that appear in the factorizations. As an example, consider \(30\) and \(42\). The factorizations are \(30 = 2 · 3 · 5\) and \(42 = 2 · 3 · 7\). The primes that are common to both factorizations are \(2\) and \(3\), thus \(\text{gcd}(30, 42) = 2 · 3 = 6\). The set of all the primes that appear in either factorization is \(\{2, 3, 5, 7\}\) so \(\text{lcm}(30, 42) = 2 · 3 · 5 · 7 = 210\).
The technique just described is of little value for numbers having more than about \(50\) decimal digits because it rests a priori on the ability to find the prime factorizations of the numbers involved. Factoring numbers is easy enough if they’re reasonably small, especially if some of their prime factors are small, but in general the problem is considered so difficult that many cryptographic schemes are based on it.
Exercises
Trace through the division algorithm with inputs \(n = 27\) and \(d = 5\), each time an assignment statement is encountered write it out. How many assignments are involved in this particular computation?
Find the \(\text{gcd}\)’s and \(\text{lcm}\)’s of the following pairs of numbers.
| \(a\) | \(b\) | \(\text{gcd}(a, b)\) | \(\text{lcm}(a, b)\) |
| 110 | 273 | ||
| 105 | 42 | ||
| 168 | 189 |
Formulate a description of the gcd of two numbers in terms of their prime factorizations in the general case (when the factorizations may include powers of the primes involved).
Trace through the Euclidean algorithm with inputs \(a = 3731\) and \(b = 2730\), each time the assignment statement that calls the division algorithm is encountered write out the expression \(a = qb + r\). (With the actual values involved!)

## Match 3.04 — LibreTexts: 2.1: A Taste of Number Theory
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_(Ernst)/02%3A_New_Page/2.01%3A_New_Page

2.1: A Taste of Number Theory
Before you get started, make sure you have read Chapter 1, which sets the tone for the work we will begin doing here. In addition, you might find it useful to read Appendix A: Elements of Style for Proofs. As stated at the end of Section 1.5, you are encouraged to review this appendix occasionally as you progress through the book as some guidelines may not initially make sense or seem relevant.
It is important to point out that we are diving in head first here. As we get started, we are going to rely on your intuition and previous experience with proofs. This is intentional. What you will likely encounter is a general sense of what a proof entails, but you may not be able to articulate the finer details that you do and do not comprehend. There are going to be some subtle issues that you will be confronted with and one of our goals will be to elucidate as many of them as possible. We need to calibrate and develop an intellectual need for structure. You are encouraged to just try your hand at writing proofs for the problems in this section without too much concern for whether you are “doing it the right way.” In Section 2.2, we will start over and begin to develop a formal foundation for the material in the remainder of the book. Once you have gained more experience and a better understanding of what a proof entails, you should consider returning to this section and reviewing your first attempts at writing proofs. In the meantime, see what you can do!
In this section, we will introduce the basics of a branch of mathematics called number theory , which is devoted to studying the properties of the integers. The integers is the set of numbers given by \[Z:={...,−3,−2,−1,0,1,2,3,...}.\]
The collection of positive integers also have a special name. The set of natural numbers is given by \[N:={1,2,3,...}.\]
Some mathematicians (set theorists, in particular) include 0 in N, but this will not be our convention. If you look closely at the two sets we defined above, you will notice that we wrote \(:=\) instead of =. We use := to mean that the symbol or expression on the left is defined to be equal to the expression on the right. The symbol R is used to denote the set of all real numbers . We will not formally define the real numbers, but instead rely on your prior intuition and understanding.
Because you are so familiar with many of the properties of the integers and real numbers, one of the issues that we will bump into is knowing which facts we can take for granted. As a general rule of thumb, you should attempt to use the definitions provided without relying too much on your prior knowledge. The order in which we develop things is important.
It is common practice in mathematics to use the symbol \(∈\) as an abbreviation for the phrase “is an element of” or sometimes simply “in.” For example, the mathematical expression “n ∈ Z ” means “n is an element of the integers.” However, some care should be taken in how this symbol is used. We will only use the symbol “∈” in expressions of the form \(a ∈ A\), where A is a set and a is an element of A. We will write expressions like \(a,b ∈ A\) as shorthand for “a ∈ A and b ∈ A.” We should avoid writing phrases such as “a is a number ∈ A” and “n ∈ integers”.
We will now encounter our very first definition. In mathematics, a definition is a precise and unambiguous description of the meaning of a mathematical term. It characterizes the meaning of a word by giving all the properties and only those properties that must be true. Check out Appendix B for a list of other mathematical terms that we should be familiar with.
Definition 2.1. An integer n is even if n = 2k for some k ∈ Z. An integer n is odd if n = 2k + 1 for some k ∈ Z.
Notice that we framed the definition of “even” in terms of multiplication as opposed to division. When tackling theorems and problems involving even or odd, be sure to make use of our formal definitions and not some of the well-known divisibility properties. For now, you should avoid arguments that involve statements like, “even numbers have no remainder when divided by two” or “the last digit of an even number is 0, 2, 4, 6, or 8.” Also notice that the notions of even and odd apply to zero and negative numbers. In particular, zero is even since 0 = 2 · 0, where it is worth emphasizing that the occurrence of 0 on the righthand side of the equation is an integer. As another example, we see that −1 is odd since −1 = 2(−1) + 1. Despite the fact that −1 = 2(−1/2), this does not imply that −1 is also even since −1/2 is not an integer. For the remainder of this section, you may assume that every integer is either even or odd but never both.
Our first theorem concerning the integers is stated below. A theorem is a mathematical statement that is proved using rigorous mathematical reasoning. As with most theorems in this book, your task is to try your hand at proving the following theorem. Give it a try.
Theorem 2.2. If n is an even integer, then n 2 is an even integer.
One crux in proving the next theorem involves figuring out how to describe an arbitrary pair of consecutive integers.
Theorem 2.3. The sum of two consecutive integers is odd.
One skill we will want to develop is determining whether a given mathematical statement is true or false. In order to verify that a mathematical statement is false, we should provide a specific example where the statement fails. Such an example is called a counterexample . Notice that it is sufficient to provide a single example to verify that a general statement is not true. On the other hand, if we want to prove that a general mathematical statement is true, it is usually not sufficient to provide just a single example, or even a hundred examples. Such examples are just evidence that the statement is true.
Problem 2.4. Determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.
(a) The product of an odd integer and an even integer is odd.
(b) The product of an odd integer and an odd integer is odd.
(c) The product of an even integer and an even integer is even.
(d) The sum of an even integer and an odd integer is odd.
For the statements that were true in the previous problem, you may cite them later in a future proof as if they are theorems.
Definition 2.5 . Given n,m ∈ Z , we say that n divides m, written \(n|m\), if there exists k ∈ Z such that m = nk. If n|m, we may also say that m is divisible by n or that n is a factor of m.
Problem 2.6. For n,m ∈ Z, how are the following mathematical expressions similar and how are they different? In particular, is each one a sentence or simply a noun?
(a) n|m
(b) \(\dfrac{m}{n}\)
(c) m/n
In this section on number theory, we allow addition, subtraction, and multiplication of integers. In general, we avoid division since an integer divided by an integer may result in a number that is not an integer. The upshot is that we will avoid writing \(\dfrac{m}{n}\). When you feel the urge to divide, switch to an equivalent formulation using multiplication. This will make your life much easier when proving statements involving divisibility.
Theorem 2.7. The sum of any three consecutive integers is always divisible by three.
Problem 2.8. Let a,b,n,m ∈ Z . Determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.
(a) If a|n, then a|mn.
(b) If 6 divides n, then 2 divides n and 3 divides n.
(c) If ab divides n, then a divides n and b divides n.
A theorem that follows almost immediately from another theorem is called a corollary . See if you can prove the next result quickly using a previous result. Be sure to cite the result in your proof.
Corollary 2.9. If a,n ∈ Z such that a divides n, then a divides n 2 . The next two theorems are likely familiar to you.
Theorem 2.10. If a,n ∈ Z such that a divides n, then a divides −n.
Theorem 2.11. If a,n,m ∈ Z such that a divides m and a divides n, then a divides m + n.
Notice that we have been tinkering with statements of the form “If. . . , then. . . ”. Statements of this form are called conditional propositions , which we revisit in the next section. The phrase that occurs after “If” but before “then” is called the hypothesis while the phrase that occurs after “then” is called the conclusion . For example, in Problem 2.8(a), “a|n” is the hypothesis while “a|mn” is the conclusion. Note that conditional propositions can also be written in the form “. . . if . . . ”, where the conclusion is written before “if” and the hypothesis after. For example, we can rewrite Problem 2.8(a) as “a|mn if a|n”. While the order of the hypothesis and conclusion have been reversed in the sentence, their roles have not.
Whenever we encounter a conditional statement in mathematics, we want to get in the habit of asking ourselves what happens when we swap the roles of the hypothesis and the conclusion. The statement that results from reversing the roles of the hypothesis and conclusion in a conditional statement is called the converse of the original statement. For example, the converse of Problem 2.8(a) is “If a|mn, then a|n”, which happens to be false.The converse of Theorem 2.2 is “If n 2 is an even integer, then n is an even integer”. While this statement is true it does not have the same meaning as Theorem 2.2.
Problem 2.12. Determine whether the converse of each of Corollary 2.9, Theorem 2.10, and Theorem 2.11 is true. That is, for a,n,m ∈ Z, determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.
(a) If a divides n2 , then a divides n. (Converse of Corollary 2.9)
(b) If a divides −n, then a divides n. (Converse of Theorem 2.10)
(c) If a divides m + n, then a divides m and a divides n. (Converse of Theorem 2.11)
The next theorem is often referred to as the transitivity of division of integers .
Theorem 2.13. If a,b, c ∈ Z such that a divides b and b divides c, then a divides c.
Once we have proved a few theorems, we should be on the look out to see if we can utilize any of our current results to prove new results. There is no point in reinventing the wheel if we do not have to.
Theorem 2.14. If a,n,m ∈ Z such that a divides m and a divides n, then a divides m − n.
Theorem 2.15. If n ∈ Z such that n is odd, then 8 divides n 2 − 1.
