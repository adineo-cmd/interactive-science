# Source pack — subjects/computer-science/advanced/graphs-and-dynamic-programming
Lesson title: Graphs & Dynamic Programming
Level: advanced
Match confidence: 2.02

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.02 — LibreTexts: 7.3: Dynamic Programming
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/3.0/ · https://math.libretexts.org/Bookshelves/Applied_Mathematics/Mathematical_Biology_(Chasnov)/07%3A_Sequence_Alignment/7.03%3A_Dynamic_Programming

7.3: Dynamic Programming
Two reasonably sized sequences cannot be aligned by brute force. Luckily, there is another algorithm borrowed from computer science, dynamic programming, that makes use of a dynamic matrix.
What is needed is a scoring system to judge the quality of an alignment. The goal is to find the alignment that has the maximum score. We assume that the alignment of character \(a_{i}\) with character \(b_{j}\) has the score \(S\left(a_{i}, b_{j}\right) .\) For example, when aligning two DNA sequences, a match (A-A, C-C, T-T, G-G) may be scored as \(+2\) , and a mismatch \((\mathrm{A}-\mathrm{C}, \mathrm{A}-\mathrm{T}, \mathrm{A}-\mathrm{G}\) , etc. \()\) scored as \(-1\) . We also assume that an indel (a nucleotide aligned with a gap) is scored as \(g\) , with a typical value for DNA alignment being \(g=-2\) . In the next section, we develop a better and more widely used model for indel scoring that distinguishes gap openings from gap extensions.
Now, let \(T(i, j)\) denote the maximum score for aligning a sequence of length \(i\) with a sequence of length \(j .\) We can compute \(T(i, j)\) provided we know \(T(i-\) \(1, j-1), T(i-1, j)\) and \(T(i, j-1)\) . Indeed, our logic is similar to that used when counting the total number of alignments. There are again three ways to compute \(T(i, j):(1) i-1\) characters of the first sequence are aligned with \(j-1\) characters of the second sequence with maximum score \(T(i-1, j-1)\) , and the \(i\) th character of the first sequence aligns with the \(j\) th character of the second sequence with updated maximum score \(T(i-1, j-1)+S\left(a_{i}, b_{j}\right) ;(2) i-1\) characters of the first sequence are aligned with \(j\) characters of the second sequence with maximum score \(T(i-\) \(1, j)\) , and the \(i\) th character of the first sequence aligns with a gap in the second sequence with updated maximum score \(T(i-1, j)+g\) , or; (3) \(i\) characters of the first sequence are aligned with \(j-1\) characters of the second sequence with maximum score \(T(i, j-1)\) , and a gap in the first sequence aligns with the \(j\) th character of the second sequence with updated maximum score \(T(i, j-1)+g\) . We then compare these three scores and assign \(T(i, j)\) to be the maximum; that is,
\[T(i, j)=\max \left\{\begin{array}{l} T(i-1, j-1)+S\left(a_{i}, b_{j}\right) \\[4pt] T(i-1, j)+g \\[4pt] T(i, j-1)+g \end{array}\right. \nonumber \]
Boundary conditions give the score of aligning a sequence with a null sequence of gaps, so that
\[T(i, 0)=T(0, i)=i g, \quad i>0 \nonumber \]
with \(T(0,0)=0\) .
The recursion \((7.2)\) , together with the boundary conditions (7.3), can be used to construct a dynamic matrix. The score of the best alignment is then given by the last filled-in element of the matrix, which for aligning a sequence of length \(n\) with a sequence of length \(m\) is \(T(n, m)\) . Besides this score, however, we also want to determine the alignment itself. The alignment can be obtained by tracing back the path in the dynamic matrix that was followed to compute each matrix element \(T(i, j)\) . There could be more than one path, so that the best alignment may be degenerate.
Sequence alignment is always done computationally, and there are excellent software tools freely available on the web (see $7.6). Just to illustrate the dynamic programming algorithm, we compute by hand the dynamic matrix for aligning two short DNA sequences GGAT and GAATT, scoring a match as \(+2\) , a mismatch as \(-1\) and an indel as \(-2\) :
\(\begin{array}{ccccccc} & - & \mathrm{G} & \mathrm{A} & \mathrm{A} & \mathrm{T} & \mathrm{T} \\[4pt] - & 0 & -2 & -4 & -6 & -8 & -10 \\[4pt] \mathrm{G} & -2 & 2 & 0 & -2 & -4 & -6 \\[4pt] \mathrm{G} & -4 & 0 & 1 & -1 & -3 & -5 \\[4pt] \mathrm{~A} & -6 & -2 & 2 & 3 & 1 & -1 \\[4pt] \mathrm{~T} & -8 & -4 & 0 & 1 & 5 & 3\end{array}\)
In our hand calculation, the two sequences to be aligned go to the left and above the dynamic matrix, leading with a gap character ’ \(^{\prime}\) ’. Row 0 and column 0 are then filled in with the boundary conditions, starting with 0 in position \((0,0)\) and incrementing by the gap penalty \(-2\) across row 0 and down column 0 . The recursion relation (7.2) is then used to fill in the dynamic matrix one row at a time moving from leftto-right and top-to-bottom. To determine the \((i, j)\) matrix element, three numbers must be compared and the maximum taken: (1) inspect the nucleotides to the left of row \(i\) and above column \(j\) and add \(+2\) for a match or \(-1\) for a mismatch to the \((i-1, j-1)\) matrix element; \((2)\) add \(-2\) to the \((i-1, j)\) matrix element; \((3)\) add \(-2\) to the \((i, j-1)\) matrix element. For example, the first computed matrix element 2 at position \((1,1)\) was determined by taking the maximum of \((1) 0+2=2\) , since \(G-G\) is a match; \((2)-2-2=-4 ;(3)-2-2=-4\) . You can test your understanding of dynamic programming by computing the other matrix elements.
After the matrix is constructed, the traceback algorithm that finds the best alignment starts at the bottom-right element of the matrix, here the \((4,5)\) matrix element with entry 3. The matrix element used to compute 3 was either at \((4,4)\) (horizontal move) or at \((3,4)\) (diagonal move). Having two possibilities implies that the best alignment is degenerate. For now, we arbitrarily choose the diagonal move. We build the alignment from end to beginning with GGAT on top and GAATT on bottom:
T
\(\mathrm{T}\)
We illustrate our current position in the dynamic matrix by eliminating all the elements that are not on the traceback path and are no longer accessible:
\(\begin{array}{ccccccc} & - & G & A & A & T & T \\[4pt] - & 0 & -2 & -4 & -6 & -8 & \\[4pt] G & -2 & 2 & 0 & -2 & -4 & \\[4pt] G & -4 & 0 & 1 & -1 & -3 & \\[4pt] A & -6 & -2 & 2 & 3 & 1 & \\[4pt] T & & & & & & 3\end{array}\)
We start again from the 1 entry at \((3,4)\) . This value came from the 3 entry at \((3,3)\) by a horizontal move. Therefore, the alignment is extended to
-T
||
TT
where a gap is inserted in the top sequence for a horizontal move. (A gap is inserted in the bottom sequence for a vertical move.) The dynamic matrix now looks like
\(\begin{array}{lcccccc} & - & G & A & A & T & T \\[4pt] - & 0 & -2 & -4 & -6 & & \\[4pt] G & -2 & 2 & 0 & -2 & & \\[4pt] G & -4 & 0 & 1 & -1 & & \\[4pt] A & -6 & -2 & 2 & 3 & 1 & \\[4pt] T & & & & & & 3\end{array}\)
Starting again from the 3 entry at \((3,3)\) , this value came from the 1 entry at \((2,2)\) in a diagonal move, extending the alignment to
A-T
|||
ATT The dynamic matrix now looks like
Continuing in this fashion (try to do this), the final alignment is
where it is customary to represent a matching character with a colon ’ \(:\) ’. The traceback path in the dynamic matrix is
If the other degenerate path was initially taken, the final alignment would be
GAATT
and the traceback path would be
The score of both alignments is easily recalculated to be the same, with \(2-1+2-\) \(2+2=3\) and \(2-1+2+2-2=3\)
The algorithm for aligning two proteins is similar, except match and mismatch scores depend on the pair of aligning amino acids. With twenty different amino acids found in proteins, the score is represented by a \(20 \times 20\) substitution matrix. The most commonly used matrices are the PAM series and BLOSUM series of matrices, with BLOSUM62 the commonly used default matrix.

## Match 1.40 — LibreTexts: 27.7.2: Dynamic Arrays
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Butte_College/Intro_to_Programming_with_Programming_Fundamentals_and_Python_for_Everyone/27%3A_Additional_Fundamentals_of_Programming/27.07%3A_Arrays_and_Lists/27.7.02%3A_Dynamic_Arrays

27.7.2: Dynamic Arrays
-
- Last updated
- Save as PDF
Overview
A dynamic array is a random access, variable-size list data structure that allows elements to be added or removed. It is supplied with standard libraries in many modern programming languages. Dynamic arrays overcome a limit of static arrays, which have a fixed capacity that needs to be specified at allocation. [1]
Discussion
A limitation of the static arrays discussed so far is that the array size is determined when the array is created and/or allocated. Dynamic arrays allow elements to be added and removed at runtime. Most current programming languages include built-in or standard library functions for creating and managing dynamic arrays.
| Language | Class | Add | Remove |
|---|---|---|---|
| C++ |
#include <list>
std::list
|
insert
|
erase
|
| C# |
System.Collections.Generic.List
|
Add
|
Remove
|
| Java |
java.util.ArrayList
|
add
|
remove
|
| JavaScript |
Array
|
push
,
splice
|
pop
,
splice
|
| Python |
list
|
append
|
remove
|
| Swift |
Array
|
append
|
remove
|
Key Terms
- dynamic array
- A data structure consisting of a collection of elements that allows individual elements to be added or removed.

## Match 1.37 — LibreTexts: 6.7: Reading- Structured Programming
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://workforce.libretexts.org/Bookshelves/Information_Technology/Computer_Applications/Introduction_to_Computer_Applications_and_Concepts_(Lumen)/06%3A_Ethics_and_Software_Development/6.07%3A_Reading-_Structured_Programming

6.7: Reading- Structured Programming
Introduction
Structured programming is a programming paradigm aimed at improving the clarity, quality, and development time of a computer program by making extensive use of subroutines, block structures and for and while loops—in contrast to using simple tests and jumps such as the goto statement which could lead to “spaghetti code” which is difficult both to follow and to maintain.
It emerged in the 1960s—particularly from a famous letter, Go To Statement Considered Harmful .— and was bolstered theoretically by the structured program theorem, and practically by the emergence of languages such as ALGOL with suitably rich control structures.
Elements
Control structures
Following the structured program theorem, all programs are seen as composed of three control structures:
- “Sequence”; ordered statements or subroutines executed in sequence.
-
“Selection”; one or a number of statements is executed depending on the state of the program. This is usually expressed with keywords such as
if..then..else..endif
. -
“Iteration”; a statement or block is executed until the program reaches a certain state, or operations have been applied to every element of a collection. This is usually expressed with keywords such as
while
,repeat
,for
ordo..until
. Often it is recommended that each loop should only have one entry point (and in the original structural programming, also only one exit point, and a few languages enforce this).
Subroutines
Subroutines; callable units such as procedures, functions, methods, or subprograms are used to allow a sequence to be referred to by a single statement.
Blocks
Blocks are used to enable groups of statements to be treated as if they were one statement.
Block-structured
languages have a syntax for enclosing structures in some formal way, such as an if-statement bracketed by
if..fi
as in ALGOL 68, or a code section bracketed by
BEGIN..END
, as in PL/I, whitespace indentation as in Python – or the curly braces
{...}
of C and many later languages.
Structured programming languages
It is possible to do structured programming in any programming language, though it is preferable to use something like a procedural programming language. Some of the languages initially used for structured programming include: ALGOL, Pascal, PL/I and Ada – but most new procedural programming languages since that time have included features to encourage structured programming, and sometimes deliberately left out features – notably GOTO – in an effort to make unstructured programming more difficult. Structured programming (sometimes known as modular programming) is a subset of procedural programming that enforces a logical structure on the program being written to make it more efficient and easier to understand and modify.
History
Theoretical foundation
The structured program theorem provides the theoretical basis of structured programming. It states that three ways of combining programs—sequencing, selection, and iteration—are sufficient to express any computable function. This observation did not originate with the structured programming movement; these structures are sufficient to describe the instruction cycle of a central processing unit, as well as the operation of a Turing machine. Therefore a processor is always executing a “structured program” in this sense, even if the instructions it reads from memory are not part of a structured program. However, authors usually credit the result to a 1966 paper by Böhm and Jacopini, possibly because Dijkstra cited this paper himself. The structured program theorem does not address how to write and analyze a usefully structured program. These issues were addressed during the late 1960s and early 1970s, with major contributions by Dijkstra, Robert W. Floyd, Tony Hoare, Ole-Johan Dahl, and David Gries.
Debate
P. J. Plauger, an early adopter of structured programming, described his reaction to the structured program theorem:
- Us converts waved this interesting bit of news under the noses of the unreconstructed assembly-language programmers who kept trotting forth twisty bits of logic and saying, ‘I betcha can’t structure this.’ Neither the proof by Böhm and Jacopini nor our repeated successes at writing structured code brought them around one day sooner than they were ready to convince themselves.
Donald Knuth accepted the principle that programs must be written with provability in mind, but he disagreed (and still disagrees) with abolishing the GOTO statement. In his 1974 paper, “Structured Programming with Goto Statements”, he gave examples where he believed that a direct jump leads to clearer and more efficient code without sacrificing provability. Knuth proposed a looser structural constraint: It should be possible to draw a program’s flow chart with all forward branches on the left, all backward branches on the right, and no branches crossing each other. Many of those knowledgeable in compilers and graph theory have advocated allowing only reducible flow graphs .
Structured programming theorists gained a major ally in the 1970s after IBM researcher Harlan Mills applied his interpretation of structured programming theory to the development of an indexing system for the New York Times research file. The project was a great engineering success, and managers at other companies cited it in support of adopting structured programming, although Dijkstra criticized the ways that Mills’s interpretation differed from the published work.
As late as 1987 it was still possible to raise the question of structured programming in a computer science journal. Dijkstra did so in that year with a letter, “GOTO considered harmful.” Numerous objections followed, including a response from Frank Rubin that sharply criticized both Dijkstra and the concessions other writers made when responding to him.
Outcome
By the end of the 20th century nearly all computer scientists were convinced that it is useful to learn and apply the concepts of structured programming. High-level programming languages that originally lacked programming structures, such as FORTRAN, COBOL, and BASIC, now have them.
Common deviations
While goto has now largely been replaced by the structured constructs of selection (if/then/else) and repetition (while and for), few languages are purely structured. The most common deviation, found in many languages, is the use of a return statement for early exit from a subroutine. This results in multiple exit points, instead of the single exit point required by structured programming. There are other constructions to handle cases that are awkward in purely structured programming.
Early exit
The most common deviation from structured programming is early exit from a function or loop. At the level of functions, this is a
return
statement. At the level of loops, this is a
break
statement (terminate the loop) or
continue
statement (terminate the current iteration, proceed with next iteration). In structured programming, these can be replicated by adding additional branches or test, but for returns from nested code this can add significant complexity. C is an early and prominent example of these constructs. Some newer languages also have “labeled breaks”, which allow breaking out of more than just the innermost loop. Exceptions also allow early exit, but have further consequences, and thus are treated below.
Multiple exits can arise for a variety of reasons, most often either that the subroutine has no more work to do (if returning a value, it has completed the calculation), or has encountered “exceptional” circumstances that prevent it from continuing, hence needing exception handling.
The most common problem in early exit is that cleanup or final statements are not executed – for example, allocated memory is not unallocated, or open files are not closed, causing memory leaks or resource leaks. These must be done at each return site, which is brittle and can easily result in bugs. For instance, in later development, a return statement could be overlooked by a developer, and an action which should be performed at the end of a subroutine (e.g., a trace statement) might not be performed in all cases. Languages without a return statement, such as standard Pascal don’t have this problem.
Most modern languages provide language-level support to prevent such leaks; see detailed discussion at resource management. Most commonly this is done via unwind protection, which ensures that certain code is guaranteed to be run when execution exits a block; this is a structured alternative to having a cleanup block and a
goto
. This is most often known as
try...finally,
and considered a part of exception handling. Various techniques exist to encapsulate resource management. An alternative approach, found primarily in C++, isResource Acquisition Is Initialization, which uses normal stack unwinding (variable deallocation) at function exit to call destructors on local variables to deallocate resources.
Kent Beck, Martin Fowler and co-authors have argued in their refactoring books that nested conditionals may be harder to understand than a certain type of flatter structure using multiple exits predicated by guard clauses. Their 2009 book flatly states that “one exit point is really not a useful rule. Clarity is the key principle: If the method is clearer with one exit point, use one exit point; otherwise don’t”. They offer a cookbook solution for transforming a function consisting only of nested conditionals into a sequence of guarded return (or throw) statements, followed by a single unguarded block, which is intended to contain the code for the common case, while the guarded statements are supposed to deal with the less common ones (or with errors). Herb Sutter and Andrei Alexandrescu also argue in their 2004 C++ tips book that the single-exit point is an obsolete requirement.
In his 2004 textbook, David Watt writes that “single-entry multi-exit control flows are often desirable”. Using Tennent’s framework notion of sequencer, Watt uniformly describes the control flow constructs found in contemporary programming languages and attempts to explain why certain types of sequencers are preferable to others in the context of multi-exit control flows. Watt writes that unrestricted gotos (jump sequencers) are a bad because the destination of the jump is not self-explanatory to the reader of a program until the reader finds and examines the actual label or address that is the target of the jump. In contrast, Watt argues that the conceptual intent of a return sequencer is clear from its own context, without having to examine its destination. Watt writes that a class of sequencers known as escape sequencers , defined as “sequencer that terminates execution of a textually enclosing command or procedure”, encompasses both breaks from loops (including multi-level breaks) and return statements. Watt also notes that while jump sequencers (gotos) have been somewhat restricted in languages like C, where the target must be an inside the local block or an encompassing outer block, that restriction alone is not sufficient to make the intent of gotos in C self-describing and so they can still produce “spaghetti code”. Watt also examines how exception sequencers differ from escape and jump sequencers; this is explained in the next section of this article.
In contrast to the above, Bertrand Meyer wrote in his 2009 textbook that instructions like
break
and
continue
“are just the old
goto
in sheep’s clothing” and strongly advised against their use.
Exception handling
Based on the coding error from the Ariane 501 disaster, software developer Jim Bonang argues that any exceptions thrown from a function violate the single-exit paradigm, and propose that all inter-procedural exceptions should be forbidden. In C++ syntax, this is done by declaring all function signatures as
throw()
Bonang proposes that all single-exit conforming C++ should be written along the lines of:
boo
