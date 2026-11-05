# Source pack — subjects/math/expert/abstract-algebra
Lesson title: Abstract Algebra
Level: expert
Match confidence: 3.07

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.07 — LibreTexts: 1.1: What is Abstract Algebra?
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_(Ernst)/01%3A_Introduction/1.01%3A_What_is_Abstract_Algebra

1.1: What is Abstract Algebra?
Abstract algebra is the subject area of mathematics that studies algebraic structures, such as groups, rings, fields, modules, vector spaces, and algebras. This course is an introduction to abstract algebra. We will spend most of our time studying groups. Group theory is the study of symmetry, and is one of the most beautiful areas in all of mathematics. It arises in puzzles, visual arts, music, nature, the physical and life sciences, computer science, cryptography, and of course, throughout mathematics. This book covers the basic concepts of group theory, and a special effort will be made to emphasize the intuition behind the concepts and motivate the subject matter. In the final chapter, we will also introduce rings and fields.
Mathematics, rightly viewed, possesses not only truth, but supreme beauty—a beauty cold and austere, like that of sculpture, without appeal to any part of our weaker nature, without the gorgeous trappings of painting or music, yet sublimely pure, and capable of a stern perfection such as only the greatest art can show. The true spirit of delight, the exaltation, the sense of being more than Man, which is the touchstone of the highest excellence, is to be found in mathematics as surely as poetry.
- Bertrand Russell, philosopher & mathematician

## Match 2.03 — LibreTexts: 19.3: The Algebra of Electrical Circuits
License: GNU Free Documentation License · https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_(Judson)/19%3A_Lattices_and_Boolean_Algebras/19.03%3A_The_Algebra_of_Electrical_Circuits

19.3: The Algebra of Electrical Circuits
The usefulness of Boolean algebras has become increasingly apparent over the past several decades with the development of the modern computer. The circuit design of computer chips can be expressed in terms of Boolean algebras. In this section we will develop the Boolean algebra of electrical circuits and switches; however, these results can easily be generalized to the design of integrated computer circuitry.
A switch is a device, located at some point in an electrical circuit, that controls the flow of current through the circuit. Each switch has two possible states: it can be open , and not allow the passage of current through the circuit, or a it can be closed , and allow the passage of current. These states are mutually exclusive. We require that every switch be in one state or the other—a switch cannot be open and closed at the same time. Also, if one switch is always in the same state as another, we will denote both by the same letter; that is, two switches that are both labeled with the same letter \(a\) will always be open at the same time and closed at the same time.
Given two switches, we can construct two fundamental types of circuits. Two switches \(a\) and \(b\) are in series if they make up a circuit of the type that is illustrated in Figure \(19.25\). Current can pass between the terminals \(A\) and \(B\) in a series circuit only if both of the switches \(a\) and \(b\) are closed. We will denote this combination of switches by \(a \wedge b\text{.}\) Two switches \(a\) and \(b\) are in parallel if they form a circuit of the type that appears in Figure \(19.26\). In the case of a parallel circuit, current can pass between \(A\) and \(B\) if either one of the switches is closed. We denote a parallel combination of circuits \(a\) and \(b\) by \(a \vee b\text{.}\)
\(Figure \text { } 19.25.\) \(a \wedge b\)
\(Figure \text { } 19.26.\) \(a \vee b\)
We can build more complicated electrical circuits out of series and parallel circuits by replacing any switch in the circuit with one of these two fundamental types of circuits. Circuits constructed in this manner are called series-parallel circuits .
We will consider two circuits equivalent if they act the same. That is, if we set the switches in equivalent circuits exactly the same we will obtain the same result. For example, in a series circuit \(a \wedge b\) is exactly the same as \(b \wedge a\text{.}\) Notice that this is exactly the commutative law for Boolean algebras. In fact, the set of all series-parallel circuits forms a Boolean algebra under the operations of \(\vee\) and \(\wedge\text{.}\) We can use diagrams to verify the different axioms of a Boolean algebra. The distributive law, \(a \wedge ( b \vee c ) = (a \wedge b ) \vee ( a \wedge c )\text{,}\) is illustrated in Figure \(19.27\). If \(a\) is a switch, then \(a'\) is the switch that is always open when \(a\) is closed and always closed when \(a\) is open. A circuit that is always closed is \(I\) in our algebra; a circuit that is always open is \(O\text{.}\) The laws for \(a \wedge a' = O\) and \(a \vee a' = I\) are shown in \(Figure 19.28\).
\(Figure \text { } 19.27.\) \(a \wedge ( b \vee c ) = (a \wedge b ) \vee ( a \wedge c )\)
\(Figure \text { } 19.28.\) \(a \wedge a' = O\) and \(a \vee a' = I\)
Example \(19.29\)
Every Boolean expression represents a switching circuit. For example, given the expression \((a \vee b) \wedge (a \vee b') \wedge (a \vee b)\text{,}\)
Solution
we can construct the circuit in Figure \(19.32\).
Theorem \(19.30\)
The set of all circuits is a Boolean algebra
We leave as an exercise the proof of this theorem for the Boolean algebra axioms not yet verified. We can now apply the techniques of Boolean algebras to switching theory.
Example \(19.31\)
Given a complex circuit, we can now apply the techniques of Boolean algebra to reduce it to a simpler one. Consider the circuit in Figure \(19.32\). Since
Solution
we can replace the more complicated circuit with a circuit containing the single switch \(a\) and achieve the same function.
\(Figure \text { } 19.32.\) \((a \vee b) \wedge (a \vee b') \wedge (a \vee b)\)
Historical Note
George Boole (1815–1864) was the first person to study lattices. In 1847, he published The Investigation of the Laws of Thought , a book in which he used lattices to formalize logic and the calculus of propositions. Boole believed that mathematics was the study of form rather than of content; that is, he was not so much concerned with what he was calculating as with how he was calculating it. Boole's work was carried on by his friend Augustus De Morgan (1806–1871). De Morgan observed that the principle of duality often held in set theory, as is illustrated by De Morgan's laws for set theory. He believed, as did Boole, that mathematics was the study of symbols and abstract operations.
Set theory and logic were further advanced by such mathematicians as Alfred North Whitehead (1861–1947), Bertrand Russell (1872–1970), and David Hilbert (1862–1943). In Principia Mathematica , Whitehead and Russell attempted to show the connection between mathematics and logic by the deduction of the natural number system from the rules of formal logic. If the natural numbers could be determined from logic itself, then so could much of the rest of existing mathematics. Hilbert attempted to build up mathematics by using symbolic logic in a way that would prove the consistency of mathematics. His approach was dealt a mortal blow by Kurt Gödel (1906–1978), who proved that there will always be “undecidable” problems in any sufficiently rich axiomatic system; that is, that in any mathematical system of any consequence, there will always be statements that can never be proven either true or false.
As often occurs, this basic research in pure mathematics later became indispensable in a wide variety of applications. Boolean algebras and logic have become essential in the design of the large-scale integrated circuitry found on today's computer chips. Sociologists have used lattices and Boolean algebras to model social hierarchies; biologists have used them to describe biosystems.

## Match 2.03 — LibreTexts: 6.7: Abstract Index Notation
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Bookshelves/Relativity/Special_Relativity_(Crowell)/06%3A_Waves/6.07%3A_Abstract_Index_Notation

6.7: Abstract Index Notation
Learning Objectives
- Developing some mathematical notation related to waves
This chapter has centered on the physics of waves, but along the way we’ve found it helpful to build up some mathematical ideas such as covectors, which have applications in a much broader physical context. In this section we’ll develop some related notation.
Expressions in birdtracks notation such as
can be awkward to type on a computer, which is why we’ve already been occasionally resorting to more linear notations such as \((∇C)\to s\). For more complicated birdtracks, the diagrams sometimes look like complicated electrical schematics, and the problem of generating them on a keyboard get more acute. There is in fact a systematic way of representing any such expression using only ordinary subscripts and superscripts. This is called abstract index notation, and was introduced by Roger Penrose at around the same time he invented birdtracks. For practical reasons, it was the abstract index notation that caught on.
The idea is as follows. Suppose we wanted to describe a complicated birdtrack verbally, so that someone else could draw it. The diagram would be made up of various smaller parts, a typical one looking something like the scalar product \(u\to v\). The verbal instructions might be: “ We have an object u with an arrow coming out of it. For reference, let’s label this arrow as \(a\). Now remember that other object \(v\) I had you draw before? There was an arrow coming into that one, which we also labeled a. Now connect up the two arrows labeled a. ”
Shortening this lengthy description to its bare minimum, Penrose renders it like this: \(u_a v^a\). Subscripts depict arrows coming out of a symbol (think of water ﬂowing from a tank out through a pipe below). Superscripts indicate arrows going in. When the same letter is used as both a superscript and a subscript, the two arrows are to be piped together.
Abstract index notation evolved out of an earlier one called the Einstein summation convention, in which superscripts and subscripts referred to specific coordinates. For example, we might take \(0\) to be the time coordinate, \(1\) to be \(x\), and so on. A symbol like \(u_λ\) would then indicate a component of the dual vector \(u\), which could be its \(x\) component if \(λ\) took on the value \(1\). Repeated indices were summed over.
The advantage of the birdtrack and abstract index notations is that they are coordinate-independent, so that an equation written in them is valid regardless of the choice of coordinates. The Einstein and abstract-index notations look very similar, so for example if we want to take a general result expressed in abstract-index notation and apply it in a specific coordinate system, there is essentially no translation required. In fact, the two notations look so similar that we need an explicit way to tell which is which, so that we can tell whether or not a particular result is coordinate-independent. We therefore use the convention that Latin indices represent abstract indices, whereas Greek ones imply a specific coordinate system and can take on numerical values, e.g., \(λ = 1\).
The following are some examples of equivalent equations written side by side in birdtracks and abstract index notations.
Observer \(o\)’s displacement in spacetime is a vector:
\[\to o\; \; \; \; o^a\]
In Einstein notation, it’s awkward to express a vector as a whole, because in a notation like \(o^λ\), \(λ\) is supposed to take on a particular value. If we used \(o^λ\) to mean the whole vector, it would be an abuse of notation. In abstract index notation, however, the a is simply a name we gave to a pipe coming into vector \(o\); the fact that we didn’t need to refer to the name in order to connect it to some other pipe is irrelevant.
A wave’s frequency is a covector:
\[\omega \to \; \; \; \; \omega _a\]
An observer experiences proper time \(τ\):
\[o \to o = \tau ^2 \; \; \; \; o_a o^a = \tau ^2\]
There are no external arrows in the birdtracks version, and in the abstract-index version all lower indices (pipes coming out) have been paired with upper indices (pipes coming in); this indicates that the proper time is a scalar, and therefore independent of any choice of coordinate system. In Einstein notation, this becomes \(o_\lambda o^\lambda\), with an implied sum over the repeated index, \(\sum _\lambda o_\lambda o^\lambda\). The \(λ\) refers to a particular coordinate system, so in the Einstein notation it is no longer obvious that the equation holds regardless of our choice of coordinates.
A world-line along which a wave propagates lies along a vector that is orthogonal to the wave’s frequency covector:
\[\omega \to u = 0 \; \; \; \; \omega _a u^a = 0\]
The frequency covector is the gradient of the phase:
The following grammatical rules apply to both abstract-index and Einstein notation:
- Repeated indices occur in pairs, with one up and one down and the two factors multiplying each other.
- Disregarding indices that are paired as in rule 1, all other indices must appear uniformly in all terms and on both sides of an equation. “Appear uniformly” means that an index can’t be missing and can’t be a superscript in some places but a subscript in others.
- For reasons to be explained in section 7.4, a partial derivative with respect to a coordinate, such as \(\partial /\partial x^k\), is treated as if the index were a subscript, and conversely \(\partial /\partial x_k\) is considered to have a superscripted \(k\).
In abstract-index notation, rule 1 follows because the indices are simply labels describing how, in birdtracks notation, the pipes should be hooked up. Violating rule 1, as in an expression like \(v^a v^a\), produces a quantity that does not actually behave as a scalar. An example of a violation of rule 2 is \(v^a = ω_a\). This doesn’t make sense, for the same reason that it doesn’t make sense to equate a row vector to a column vector in linear algebra. Even if an equation like this did hold in one frame of reference, it would fail in another, since the left-hand and right-hand sides transform differently under a boost.
In
section 6.4 we discussed the notion of finding the covector that was dual to a given vector, and the vector dual to a given covector. Because the distinction between vectors and covectors is represented in index notation by placing the index on the top or on the bottom, relativists refer to this kind of thing as raising and lowering indices. In general, this type of manipulation is called “index gymnastics.” Here’s what raising and lowering indices looks like.Converting a vector to its covector form:
\[u_a = g_{ab}u^b\]
Changing a covector to the corresponding vector:
\[u^a = g^{ab}u_b\]
The symbol \(g^{ab}\) refers to the inverse of the matrix \(g_{ab}\).
