# Source pack — subjects/math/intermediate/counting-and-combinatorics
Lesson title: Counting & Combinatorics
Level: intermediate
Match confidence: 2.06

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.06 — LibreTexts: 1.5: Combinatorics- First Counts
License: GNU Free Documentation License · https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Discrete_Mathematics_for_Computer_Science_(Fitch)/01%3A_Basics/1.05%3A_Combinatorics-_First_Counts

1.5: Combinatorics- First Counts
Combinatorics is the mathematics of counting.
Terminology
Alphabet is an undefined term referring to a set of objects typically thought of as symbols such as the alphabets used in western European languages, Cyrillic, digits of numbers, or emojis.
A string or word is an ordered set of characters from an alphabet.
A few words from the alphabet \(\{a,b,c\}\) are the following: c, abc, bc, cab, ccb, aaa. A few words from the alphabet \(\{0,1,2,3,4,5,6,7,8,9\}\)
are 301, 112, 5.
A permutation of a string is any arrangement of the characters in that string including the same order.
Practice
Checkpoint \(\PageIndex{3}\) Generate a list of all possible strings of length two from the alphabet \(\{0,1\}\).
Checkpoint \(\PageIndex{4}\) How many strings of length three are possible from the alphabet \(\{0,1\}\)? Do not use a formula.
Checkpoint \(\PageIndex{5}\) How many strings of length three are possible from the alphabet \(\{0,1,2\}\)? Do not use a formula.
Checkpoint \(\PageIndex{6}\) Write all permutations of the string “mat”.
Checkpoint \(\PageIndex{7}\) How many permutations are there of the string “eat”.
Checkpoint \(\PageIndex{8}\) Write all permutations of the string “math”.
Checkpoint \(\PageIndex{9}\) How many permutations are there of the string “heat”.
Checkpoint \(\PageIndex{10}\) How many permutations are there of the string “great”.

## Match 2.06 — LibreTexts: 17.7: Partition Functions of Indistinguishable Molecules Must Avoid Over Counting States
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Physical_Chemistry_(LibreTexts)/17%3A_Boltzmann_Factor_and_Partition_Functions/17.07%3A_Partition_Functions_of_Indistinguishable_Molecules_Must_Avoid_Over_Counting_States

17.7: Partition Functions of Indistinguishable Molecules Must Avoid Over Counting States
In the previous section, the definition of the the partition function involves a sum of state formulism:
\[Q = \sum_i e^{-\beta E_i} . \label{1} \]
However, under most conditions, full knowledge of each member of an ensemble is missing and hence we have to operate with a more reduced knowledge. This is demonstrated via a simple model of two particles in a two-energy level system in Figure \(\PageIndex{1}\). Each particle (red or blue) can occupy either the \(E_1=0\) energy level or the \(E_2=\epsilon\) energy level resulting in four possible states that describe the system. The corresponding partition function for this system is then (via Equation \ref{1}):
\[Q_{\text{distinguishable}}=e^0+ e^{-\beta\epsilon} + e^{-\beta\epsilon} + e^{-2 \beta\epsilon}=q^2 \label{Q1} \]
and is just the molecular partition function (\(q\)) squared.
However, if the two particles are indistinguishable (e.g., both the same color as in Figure \(\PageIndex{2}\)) then while four different combinations can be generated like in Figure \(\PageIndex{1}\), there is no discernible way to separate the two middle states. Hence, there are effectively only three states observable for this system.
The corresponding partition function for this system (again using Equation \ref{1}) can be constructed:
\[ Q(N,V,\beta) =e^0+ e^{-\beta\epsilon} + e^{-2 \beta\epsilon} \neq q^2 \label{Q2} \]
and this is not equal to the square of the molecular partition function. If Equation \ref{Q1} were used to describe the indistinguishable particle case, then it would overestimate the number of observable states. From combinatorics, using \(q^N\) for a large \(N\)-particle system of indistinguishable particles will overestimate the number of states by a factor of \(N!\). Therefore Equation \ref{1} requires a slight modification to account for this over counting.
\[ Q(N,V,\beta) = \dfrac{\sum_i{e^{-\beta E_i}}}{N!} \label{2} \]
If we have \(N\) molecules, we can perform \(N!\) permutations that should not affect the outcome. To avoid over counting (making sure we do not count each state more than once), the partition function becomes:
\[Q(N,V,\beta) = \dfrac{q(V,\beta)^N}{N!} \nonumber \]
As you may have noticed, using Equation \ref{2} to estimate of \(Q\) for the two-indistinguishable particle discussed case above with \(N=2\) is incorrect (i.e., Equation \ref{2} is not equal to Equation \ref{Q2}). That is because the \(N!\) factor is only applicable for large \(N\).

## Match 2.04 — LibreTexts: 7: Proof Techniques III - Combinatorics
License: GNU Free Documentation License · https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/Gentle_Introduction_to_the_Art_of_Mathematics_(Fields)/07%3A_Proof_Techniques_III_-_Combinatorics

7: Proof Techniques III - Combinatorics
Tragedy is when I cut my finger. 
–Mel Brooks
-
- 7.1: Counting
- The title of this section, “Counting,” is not intended to evoke the usual process of counting sheep, or counting change. What we want is to be able to count some collection in principle so that we will be able to discover a formula for its size. There are two principles that will be indispensable in counting things: the “multiplication rule” which tells us when we should multiply, and the “addition rule” which tells us when we should add.
-
- 7.2: Parity and Counting Arguments
- This section is concerned with two very powerful elements of the proofmaking arsenal: “Parity” is a way of referring to the result of an even/odd calculation; Counting arguments most often take the form of counting some collection in two different ways – and then comparing those results. These techniques have little to do with one another, but when they are applicable they tend to produce really elegant little arguments.
-
- 7.3: The Pigeonhole Principle
- The word “pigeonhole” can refer to a hole in which a pigeon roosts (i.e. pretty much what it sounds like) or a series of roughly square recesses in a desk in which one could sort correspondence. Whether you prefer to think of roosting birds or letters being sorted, the first and easiest version of the pigeonhole principle is that if you have more “things” than you have “containers” there must be a container holding at least two things.
-
- 7.4: The Algebra of Combinations
- A binomial is a polynomial with two terms. It seems likely that you will have already seen the arrangement of these binomial coefficients into a triangular array – known as Pascal’s triangle. The thing that makes this triangle so nice and that leads to the strange name “binomial coefficients” for the number of k-combinations of an n-set is that you can use the triangle to (very quickly) compute powers of binomials.
