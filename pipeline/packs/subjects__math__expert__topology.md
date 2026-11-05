# Source pack — subjects/math/expert/topology
Lesson title: Topology
Level: expert
Match confidence: 3.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.05 — LibreTexts: 5.2: Standard Topology of the Real Line
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_(Ernst)/05%3A_New_Page/5.02%3A_New_Page

5.2: Standard Topology of the Real Line
In this section, we will introduce the notions of open, closed, compact, and connected as they pertain to subsets of the real numbers. These properties form the underpinnings of a branch of mathematics called topology (derived from the Greek words tópos , meaning ‘place, location’, and ology , meaning ‘study of’). Topology, sometimes called “rubber sheet geometry," is concerned with properties of spaces that are invariant under any continuous deformation (e.g., bending, twisting, and stretching like rubber while not allowing tearing apart or gluing together). The fundamental concepts in topology are continuity, compactness, and connectedness, which rely on ideas such as “arbitrary close" and “far apart". These ideas can be made precise using open sets.
Once considered an abstract branch of pure mathematics, topology now has applications in biology, computer science, physics, and robotics. The goal of this section is to introduce you to the basics of the set-theoretic definitions used in topology and to provide you with an opportunity to tinker with open and closed subsets of the real numbers. In Section 8.5, we will revisit these concepts and explore continuous functions.
For this entire section, our universe of discourse is the set of real numbers. You may assume all the usual basic algebraic properties of the real numbers (addition, subtraction, multiplication, division, commutative property, distribution, etc.). We will often refer to an element in a subset of real numbers as a point .
Definition 5.53. A set \(U\) is called an open set if for every \(x \in U\) , there exists a bounded open interval \((a,b)\) containing \(x\) such that \((a,b)\subseteq U\) .
It follows immediately from the definition that every open set is a union of bounded open intervals.
Problem 5.54. Determine whether each of the following sets is open. Justify your assertions.
- \((1,2)\)
- \((1,\infty)\)
- \((1,2)\cup (\pi,5)\)
- \([1,2]\)
- \((-\infty,\sqrt{2}]\)
- \(\{4,17,42\}\)
- \(\{\frac{1}{n}\mid n\in \mathbb{N}\}\)
- \(\{\frac{1}{n}\mid n\in \mathbb{N}\}\cup \{0\}\)
- \(\mathbb{R}\)
- \(\mathbb{Q}\)
- \(\mathbb{Z}\)
- \(\emptyset\)
As expected, every open interval (i.e., intervals of the form \((a,b)\) , \((-\infty,b)\) , \((a,\infty)\) , or \((-\infty,\infty)\) ) is an open set.
Theorem 5.55. Every open interval is an open set.
However, it is important to point out that open sets can be more complicated than a single open interval.
Problem 5.56. Provide an example of an open set that is not a single open interval.
Theorem 5.57. If \(U\) and \(V\) are open sets, then
- \(U\cup V\) is an open set, and
- \(U\cap V\) is an open set.
According to the next two theorems, the union of arbitrarily many open sets is open while the intersection of a finite number of open sets is open.
Theorem 5.58. If \(\{U_{\alpha}\}_{\alpha\in\Delta}\) is a collection of open sets, then \(\bigcup_{\alpha\in\Delta} U_{\alpha}\) is an open set.
Consider using induction to prove the next theorem.
Theorem 5.59. If \(\{U_{i}\}_{i=1}^n\) is a finite collection of open sets for \(n\in \mathbb{N}\) , then \(\bigcap_{i=1}^n U_{i}\) is an open set.
Problem 5.60. Explain why we cannot utilize induction to prove that the intersection of infinitely many open sets indexed by the natural numbers is open.
Problem 5.61. Give an example of each of the following.
- A collection of open sets \(\{U_{\alpha}\}_{\alpha\in\Delta}\) such that \(\bigcap_{\alpha\in\Delta} U_{\alpha}\) is an open set.
- A collection of open sets \(\{U_{\alpha}\}_{\alpha\in\Delta}\) such that \(\bigcap_{\alpha\in\Delta} U_{\alpha}\) is not an open set.
According to the previous problem, the intersection of infinitely many open sets may or may not be open. So, we know that there is no theorem that states that the intersection of arbitrarily many open sets is open. We only know for certain that the intersection of finitely many open sets is open by Theorem 5.59.
Definition 5.62. Suppose \(A\subseteq \mathbb{R}\) . A point \(p\in \mathbb{R}\) is an accumulation point of \(A\) if for every bounded open interval \((a,b)\) containing \(p\) , there exists a point \(q \in (a,b)\cap A\) such that \(q\neq p\) .
Notice that if \(p\) is an accumulation point of \(A\) , then \(p\) may or may not be in \(A\) . Loosely speaking, \(p\) is an accumulation point of a set \(A\) if there are points in \(A\) arbitrarily close to \(p\) . That is, if we zoom in on \(p\) , we should always see points in \(A\) nearby.
Problem 5.63. Consider the open interval \(I=(1,2)\) . Prove each of the following.
- The points \(1\) and \(2\) are accumulation points of \(I\) .
- If \(p\in I\) , then \(p\) is an accumulation point of \(I\) .
- If \(p<1\) or \(p>2\) , then \(p\) is not an accumulation point of \(I\) .
Theorem 5.64. A point \(p\) is an accumulation point of the intervals \((a,b)\) , \((a,b]\) , \([a,b)\) , and \([a,b]\) if and only if \(p\in [a,b]\) .
Problem 5.65. Prove that the point \(p=0\) is an accumulation point of \(A=\{\frac{1}{n}\mid n \in \mathbb{N}\}\) . Are there any other accumulation points of \(A\) ?
Problem 5.66. Provide an example of a set \(A\) with exactly two accumulation points.
Consider using Theorems 5.51 and 5.52 when proving the next result.
Theorem 5.67. If \(p\in\mathbb{R}\) , then \(p\) is an accumulation point of \(\mathbb{Q}\) .
Definition 5.68. A set \(A\subseteq \mathbb{R}\) is called closed if \(A\) contains all of its accumulation points.
Problem 5.69. Determine whether each of the sets in Problem 5.54 is closed. Justify your assertions.
The upshot of Parts (i) and (l) of Problems 5.54 and 5.69 is that \(\mathbb{R}\) and \(\emptyset\) are both open and closed. It turns out that these are the only two subsets of the real numbers with this property. One issue with the terminology that could potentially create confusion is that the open interval \((-\infty, \infty)\) is both an open and a closed set.
Problem 5.70. Provide an example of each of the following. You do not need to prove that your answers are correct.
- A set that is open but not closed.
- A set that is closed but not open.
- [prob:open vs closed last] A set that neither open nor closed.
Another potentially annoying feature of the terminology illustrated by Problem 5.70 is that if a set is not open, it may or may not be closed. Similarly, if a set is not closed, it may or may not be open. That is, open and closed are not opposites of each other.
The next result justifies referring to \([a,b]\) as a closed interval.
Theorem 5.71. Every interval of the form \([a,b]\) , \((-\infty,b]\) , \([a,\infty)\) , or \((-\infty,\infty)\) is a closed set.
Theorem 5.72. Every finite subset of \(\mathbb{R}\) is closed.
Despite the fact that open and closed are not opposites of each other, there is a nice relationship between open and closed sets in terms of complements.
Theorem 5.73. Let \(U\subseteq \mathbb{R}\) . Then \(U\) is open if and only if \(U^C\) is closed.
Theorem 5.74. If \(A\) and \(B\) are closed sets, then
- \(A\cup B\) is a closed set, and
- \(A\cap B\) is a closed set.
The next two theorems are analogous to Theorems 5.58 and 5.59.
Theorem 5.75. If \(\{A_{\alpha}\}_{\alpha\in\Delta}\) is a collection of closed sets, then \(\bigcap_{\alpha\in \Delta} A_{\alpha}\) is a closed set.
Theorem 5.76. If \(\{A_{i}\}_{i=1}^n\) is a finite collection of closed sets for \(n\in \mathbb{N}\) , then \(\bigcup_{i=1}^n A_{i}\) is a closed set.
Problem 5.77. Provide an example of a collection of closed sets \(\{A_{\alpha}\}_{\alpha\in\Delta}\) such that \(\bigcup_{\alpha\in \Delta} A_{\alpha}\) is not a closed set.
Problem 5.78. Determine whether each of the following sets is open, closed, both, or neither.
- \(\displaystyle V=\bigcup_{n=2}^{\infty} \left(n - \frac{1}{2},n\right)\)
- \(\displaystyle W=\bigcap_{n=2}^{\infty} \left(n - \frac{1}{2},n\right)\)
- \(\displaystyle X=\bigcap_{n=1}^{\infty} \left(-\frac{1}{n}, \frac{1}{n}\right)\)
- \(\displaystyle Y=\bigcap_{n=1}^{\infty} \left(-n, n\right)\)
- \(Z=(0,1)\cap \mathbb{Q}\)
Problem 5.79. Prove or provide a counterexample: Every non-closed set has at least one accumulation point.
We now introduce three special classes of subsets of \(\mathbb{R}\) : compact, connected, and disconnected.
Definition 5.80. A set \(K\subseteq\mathbb{R}\) is called compact if \(K\) is both closed and bounded.
It is important to point out that there is a more general definition of compact in an arbitrary topological space. However, using our notions of open and closed, it is a theorem that a subset of the real line is compact if and only if it is closed and bounded.
Problem 5.81. Determine whether each of the following sets is compact. Briefly justify your assertions.
- \([0,1)\cup [2,3]\)
- \([0,1)\cup (1,2]\)
- \([0,1)\cup [1,2]\)
- \(\mathbb{R}\)
- \(\mathbb{Q}\)
- \(\mathbb{R}\setminus\mathbb{Q}\)
- \(\mathbb{Z}\)
- \(\{\frac{1}{n}\mid n\in\mathbb{N}\}\)
- \([0,1]\cup\{1+\frac{1}{n}\mid n\in\mathbb{N}\}\)
- \(\{17,42\}\)
- \(\{17\}\)
- \(\emptyset\)
Problem 5.82. Is every finite set compact? Justify your assertion.
The next theorem says that every nonempty compact set contains its greatest lower bound and its least upper bound. That is, every nonempty compact set attains a minimum and a maximum value.
Theorem 5.83. If \(K\) is a nonempty compact subset of \(\mathbb{R}\) , then \(\sup(K),\inf(K)\in K\) .
Definition 5.84. A set \(A\subseteq \mathbb{R}\) is disconnected if there exists two disjoint open sets \(U_1\) and \(U_2\) such that \(A\cap U_1\) and \(A\cap U_2\) are nonempty but \(A\subseteq U_1\cup U_2\) (equivalently, \(A=(A\cap U_1)\cup(A\cap U_2)\) ). If a set is not disconnected, then we say that it is connected .
In other words, a set is disconnected if it can be partitioned into two nonempty subsets such that each subset does not contain points of the other and does not contain any accumulation points of the other. Showing that a set is disconnected is generally easier than showing a set is connected. To prove that a set is disconnected, you simply need to exhibit two open sets with the necessary properties. However, to prove that a set is connected, you need to prove that no such pair of open sets exists.
Problem 5.85. Determine whether each of the sets in Problem 5.81 is is connected or disconnected. Briefly justify your assertions.
Theorem 5.86. If \(a\in\mathbb{R}\) , then \(\{a\}\) is connected.
The proof of the next theorem is harder than you might expect. Consider a proof by contradiction and try to make use of the Completeness Axiom.
Theorem 5.87. Every closed interval \([a,b]\) is connected.
It turns out that every connected set in \(\mathbb{R}\) is either a singleton or an interval. We have not officially proved this claim, but we do have the tools to do so. Feel free to try your hand at proving this fact.

## Match 3.02 — LibreTexts: 8: Cosmic Topology
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Geometry/Geometry_with_an_Introduction_to_Cosmic_Topology_(Hitchman)/08%3A_Cosmic_Topology

8: Cosmic Topology
Cosmic topology can be described as the effort to determine the shape of our universe through observational techniques. In this chapter we discuss two programs of research in cosmic topology: the cosmic crystallography method and the circles-in-the-sky method. Both programs search for topology by assuming the universe is finite in volume without boundary. The chapter begins with a discussion of three-dimensional geometry and some \(3\)-manifolds that have been given consideration as models for the shape of our universe.
-
- 8.1: Three-Dimensional Geometry and 3-Manifolds
- Euclidean geometry is the geometry of our experience in three dimensions. Planes look like infinite tabletops, lines in space are Euclidean straight lines. Any planar slice of 3-space inherits two-dimensional Euclidean geometry. The Poincaré disk model of hyperbolic geometry may also be extended to three dimensions. Three-dimensional elliptic geometry is derived from the fact that the 3-sphere consists of all points in 4-dimensional space one unit from the origin.
-
- 8.2: Cosmic Crystallography
- Imagine once again that we are two-dimensional beings living in a two-dimensional universe. In fact, suppose we are living in the torus in Figure 8.2.1 at point E (for Earth). Our world is homogeneous and isotropic, and adheres to Euclidean geometry. Our lines of sight follow Euclidean lines. If we can see far enough, we ought to be able to see an object, say G (for galaxy), in different directions. Three different lines of sight are given in the figure.
-
- 8.3: Circles in the Sky
- Immediately after the big bang, the universe was so hot that the usual constituents of matter could not form. Photons could not move freely in space, as they were constantly bumping into free electrons. Eventually, about 350,000 years after the big bang, the universe had expanded and cooled to the point that light could travel unimpeded. This free radiation is called the cosmic microwave background (CMB) radiation, and much of it is still travelling today.
-
- 8.4: Our Universe
- Our universe appears to be homogeneous and isotropic. The presence of cosmic microwave background radiation is evidence of this: it is coming to us from every direction with more or less constant temperature. The assumptions of isotropy and homogeneity are remarkably fruitful when one approaches the geometry and topology of the universe from a mathematical point of view. The mathematical point of view gives us our candidate geometries.

## Match 3.02 — LibreTexts: 10.5: Tree topology, tree shape, and tree balance under a birth-death model
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://bio.libretexts.org/Bookshelves/Evolutionary_Developmental_Biology/Phylogenetic_Comparative_Methods_(Harmon)/10%3A_Introduction_to_Birth-Death_Models/10.05%3A_Tree_topology%2C_tree_shape%2C_and_tree_balance_under_a_birth-death_model

10.5: Tree topology, tree shape, and tree balance under a birth-death model
Tree topology summarizes the patterns of evolutionary relatedness among a group of species independent of the branch lengths of a phylogenetic tree. Two different trees have the same topology if they define the exact same set of clades. This is important because sometimes two trees can look very different and yet still have the same topology (e.g. Figure 10.6 A, B, and C).
Tree shape ignores both branch lengths and tree tip labels. For example, the two trees in figure 10.7 A and B have the same tree shape even though they share no tips in common. What they do share is that their nodes have the same patterns in terms of the number of descendants on each “side” of the bifurcation. By contrast, the phylogenetic tree in 10.7 C has a different shape. (Note that what I am calling tree shape is sometimes referred to as “unlabeled” tree topology; e.g. Felsenstein 2004) .
Finally, tree balance is a way of expressing differences in the number of descendants between pairs of sister lineages at different points in a phylogenetic tree. For example, consider the phylogenetic tree depicted in figure 10.7B. The deepest split in that tree separates a clade with five species (trout, hippo, bluejay, periwinkle snail, glass squid) from a clade with a single species (Shiitake mushroom), and so that node in the tree is unbalanced with a (5, 1) pattern. By contrast, the deepest split in 10.7C separates two clades of equal size. In that tree, the deepest node is balanced with a (3, 3) pattern. A number of approaches in macroevolution use balance at nodes and across whole trees to try to capture important evolutionary patterns.
We can start to understand these approaches by considering the balance of a single node n in a phylogenetic tree. There are two clades descended from this node; let’s call them a and b . We assume that the total number of species descended from the node N t o t a l = N a + N b is constant and that neither N a nor N b is zero. An important result, first discussed by Farris (1976) for a pure-birth model, is that all possible numerical divisions of N t o t a l into N a + N b are equally probable. For example, if N t o t a l = 10, then all possible divisions: 1 + 9, 2 + 8, 3 + 7, 4 + 6, 5 + 5, 6 + 4, 7 + 3, 8 + 2, and 9 + 1 are all equally probable, so that each will be predicted to occur with a probability 1/9. Formally,
\[ p(N_a \mid N_{total})=\frac{1}{N_{total}-1} \label{19.17}\]
Note that there is a subtle difference between equation 10.2 above and some equations in the literature, e.g. Slowinski and Guyer (1993) . This difference has to do with whether we label the two descendent clades, a and b, or not; if the clades are unlabeled, then there is no difference between 4+6 and 6+4, so that the probability that the largest clade, whichever it might be, has 6 species is twice what is given by my equation.
Equation 10.17 applies even if there is extinction, as long as both sister clades have the same speciation and extinction rates (Slowinski and Guyer 1993) . This equation has been used to compare diversification rates between sister clades, either for a single pair or across multiple pairs (see Chapter 11).
Tree balance statistics provide a way of comparing numbers of taxa across all of the nodes in a phylogenetic tree simultaneously. There are a surprisingly large number of tree balance statistics, but all rely on summarizing information about the balance of each node across a whole tree. Colless’ index I c (Colless 1982) is one of the simplest – and, perhaps, most commonly used – indices of tree balance. I c is the sum of the difference in the number of tips subtended on each side of every node in the tree, standardized by the maximum that such a sum can achieve:
\[ I_C = \frac{\sum\limits_{all nodes} (N_L - N_R)}{(N-1)(N-2)/2} \label{10.18}\]
If the tree is perfectly balanced (only possible when N is some power of 2, e.g. 2, 4, 8, 16, etc.), then I C = 0 (Figure 10.7C). By contrast, if the tree is completely pectinate, which means that each split in the tree contrasts a clade with 1 species with the rest of the species in the clade, then I C = 1 (Figure 10.7A). All phylogenetic trees have values of I C between 0 and 1 (Figure 10.7B).
There are a number of other indices of phylogenetic tree balance (reviewed in Mooers and Heard 1997) . All of these indices are used in a similar way: one can then compare the value of the tree index to what one might expect under a particular model of diversification, typically birth-death. In fact, since these indices focus on tree topology and ignore branch lengths, one can actually consider their general behavior under a set of equal-rates Markov (ERM) models. This set includes any model where birth and death rates are equal across all lineages in a phylogenetic tree at a particular time. ERM models include birth-death models as described above, but also encompass models where birth and/or death rates change through time.
