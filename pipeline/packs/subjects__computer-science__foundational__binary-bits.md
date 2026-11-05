# Source pack — subjects/computer-science/foundational/binary-bits
Lesson title: Binary and Bits
Level: foundational
Match confidence: 2.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.05 — LibreTexts: 7.3: From Symbols to Binary Codes
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/3.0/ · https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Introductory_Electrical_Engineering/A_First_Course_in_Electrical_and_Computer_Engineering_(Scharf)/07%3A_Binary_Codes/7.03%3A_From_Symbols_to_Binary_Codes

7.3: From Symbols to Binary Codes
Perhaps the most fundamental idea in communication theory is that arbitrary symbols may be represented by strings of binary digits. These strings are called binary words, binary addresses, or binary codes. In the simplest of cases, a finite alphabet consisting of the letters or symbols \(s_{0}, s_{1}, \ldots, s_{M-1}\) is represented by binary codes. The obvious way to implement the representation is to let the \(i^{\text {th }}\) binary code be the binary representation for the subscript \(i\):
\[\begin{gathered}
s_{0} \sim 000=a_{0} \\
s_{1} \sim 001=a_{1} \\
\vdots \\
s_{6} \sim 110=a_{6} \\
s_{7} \sim 111=a_{7} .
\end{gathered} \nonumber \]
The number of bits required for the binary code is \(N\) where
\[2^{N-1}<M \leq 2^{N} \nonumber \]
We say, roughly, that \(N=\log _{2} M\).
Octal Codes
When the number of symbols is large and the corresponding binary codes contain many bits, then we typically group the bits into groups of three and replace the binary code by its corresponding octal code. For example, a seven-bit binary code maps into a three-digit octal code as follows:
\[\begin{gathered}
0000000 \sim 000 \\
0000001 \sim 001 \\
\vdots \\
0100110 \sim 046 \\
\vdots \\
101111 \sim 137 \\
\vdots \\
1111111 \sim 177 .
\end{gathered} \nonumber \]
The octal ASCII codes for representing letters, numbers, and special characters are tabulated in Table 1.
Write out the seven-bit ASCII codes for \(A,q,7\),and {.
| '0 | '1 | '2 | '3 | '4 | '5 | '6 | '7 | |
| '00x | ␀ | ␁ | ␂ | ␃ | ␄ | ␅ | ␆ | ␇ |
| '01x | ␈ | ␉ | ␊ | ␋ | ␌ | ␍ | ␎ | ␏ |
| '02x | ␐ | ␑ | ␒ | ␓ | ␔ | ␕ | ␖ | ␗ |
| '03x | ␘ | ␙ | ␚ | ␛ | ␜ | ␝ | ␞ | ␟ |
| '04x | ␠ | ! | " | # | $ | % | & | ' |
| '05x | ( | ) | * | + | , | - | . | / |
| '06x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| '07x | 8 | 9 | : | ; | < | = | > | ? |
| '10x | @ | A | B | C | D | E | F | G |
| '11x | H | I | J | K | L | M | N | O |
| '12x | P | Q | R | S | T | U | V | W |
| '13x | X | Y | Z | [ | \ | ] | ^ | _ |
| '14x | ` | a | b | c | d | e | f | g |
| '15x | h | i | j | k | l | m | n | o |
| '16x | p | q | r | s | t | u | v | w |
| '17x | x | y | z | { | | | } | ~ | ␡ |
Add a 1 or a 0 to the most significant (left-most) position of the seven-bit ASCII code to produce an eight-bit code that has even parity (even number of 1's). Give the resulting eight-bit ASCII codes and the corresponding three-digit octal codes for %, u, f, 8, and +.
Quantizers and A/D Converters
What if the source alphabet is infinite? Our only hope is to approximate it with a finite collection of finite binary words. For example, suppose the output of the source is an analog voltage that lies between \(−V_0\) and \(+V_0\). We might break this peak-to-peak range up into little voltage cells of size \(\frac{2V}{M} A\) and approximate the voltage in each cell by its midpoint. This scheme is illustrated in Figure 1. In the figure, the cell \(C_i\) is defined to be the set of voltages that fall between \(i_{M^{-} \overline{M}}^{\underline{2} V p V_{\Delta}}\) and \(i^{\underline{2} V} M \Delta+\stackrel{V}{-} M^{\mathrm{A}}\):
\[C_{i}=\left\{V: i . \frac{2 V_{0}}{M}-\frac{V_{0}}{M}<V \leq i \frac{2 V_{0}}{M}+\frac{V_{0}}{M}\right\} \nonumber \]
The mapping from continuous values of \(V\) to a finite set of approximations is
\[Q(V)=i \frac{2 V_{0}}{M}, \text { if } V \in C_{i} \nonumber \]
That is, \(V\) is replaced by the quantized approximation \(i_{M}^{\underline{2} V_{0}}\) whenever \(V\) lies in cell \(C_i\). We may represent the quantized values \(i_{M}^{\underline{2} V_{0}}\) with binary codes by simply representing the subscript of the cell by a binary word. In a subsequent course on digital electronics and microprocessors you will study A/D (analog-to-digital) converters for quantizing variables.
If \(M=8\), corresponding to a three-bit quantizer, we may associate quantizer cells and quantized levels with binary codes as follows:
\(\begin{array}{ll}
V \in C_{-3} & \Rightarrow V_{-3}=(-3) \frac{2 V_{0}}{8} \sim 111 \\
V \in C_{-2} & \Rightarrow V_{-2}=(-2) \frac{2 V_{0}}{8} \sim 110 \\
V \in C_{-1} & \Rightarrow V_{-1}=(-1) \frac{2 V_{0}}{8} \sim 101 \\
V \in C_{0} & \Rightarrow \quad V_{0}=0 \sim 000 \\
V \in C_{1} & \Rightarrow V_{1}=(1) \frac{2 V_{0}}{8} \sim 001 \\
V \in C_{2} & \Rightarrow V_{2}=(2) \frac{2 V_{0}}{8} \sim 010 \\
V \in C_{3} & \Rightarrow V_{3}=(3) \frac{2 V_{0}}{8} \sim 011 .
\end{array}\)
This particular code is called a sign-magnitude code , wherein the most significant bit is a sign bit and the remaining bits are magnitude bits (e.g., \(110 \sim−2\) and \(010 \sim 2\)). One of the defects of the sign-magnitude code is that it wastes one code by using 000 for 0 and 100 for -O. An alternative code that has many other advantages is the 2's complement code . The 2′scomplement codes for positive numbers are the same as the sign-magnitude codes, but the codes for negative numbers are generated by complementing all bits for the corresponding positive number and adding 1:
\(\begin{aligned}
-4 & \sim 100 & \\
-3 &\sim 101 &(100+1) \\
-2 & \sim 110 &(101+1) \\
-1 &\sim 111 &(110+1) \\
0 & \sim 000 \\
1 & \sim 001 \\
2 & \sim 010 \\
3 & \sim 011 .
\end{aligned}\)
Generate the four-bit sign-magnitude and four-bit 2's complement binary codes for the numbers \(-8,-7, \ldots,-1,0,1,2, \ldots, 7\).
Prove that, in the 2's complement representation, the binary codes for \(−n\) and \(+n\) sum to zero. For example,
\[\begin{gathered}
101+011=000 \\
(-3)(3)(0) .
\end{gathered} \nonumber \]
In your courses on computer arithmetic you will learn how to do arithmetic in various binary-coded systems. The following problem illustrates how easy arithmetic is in 2's complement.
Generate a table of sums for all 2's complement numbers between −4 and +3. Show that the sums are correct. Use 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, and 1 + 1 = 0 with a carry into the next bit. For example, 001+001=010.
Binary Trees and Variable-Length Codes
The codes we have constructed so far are constant-length codes for finite alphabets that contain exactly \(M=2^N\) symbols. In the case where \(M=8\) and \(N=3\), then the eight possible three-bit codes may be represented as leaves on the branching tree illustrated in Figure 2(a). The tree grows a left branch for a 0 and a right branch for a 1, until it terminates after three branchings. The three-bit codes we have studied so far reside at the terminating leaves of the binary tree. But what if our source alphabet contains just five symbols or letters? We can represent these five symbols as the three-bit symbols 000 through 100 on the binary tree. This generates a constant-length code with three unused, or illegal, symbols 101 through 111. These are marked with an "\(x\)" in Figure 2(a). These unused leaves and the branches leading to them may be pruned to produce the binary tree of Figure 2(b).
If we admit variable-length codes, then we have several other options for using a binary tree to construct binary codes. Two of these codes and their corresponding binary trees are illustrated in Figure 3. If we disabuse ourselves of the notion that each code word must contain three or fewer bits, then we may construct binary trees like those of Figure 4 and generate their corresponding binary codes. In Figure 4(a), we grow a right branch after each left branch and label each leaf with a code word. In Figure 4(b), we prune off the last right branch and associatea code word with the leaf on the last left branch.
All of the codes we have generated so far are organized in Table 2. For each code, the average number of bits/symbol is tabulated. This average ranges from 2.4 to 3.0. If all symbols are equally likely to appear, then the best variable-length code would be code 2.
All of the codes we have constructed have a common characteristic: each code word is a terminating leaf on a binary tree, meaning that no code word lies along a limb of branches to another code word. We say that no code word is a prefix to another code word. This property makes each of the codes instantaneously decodable , meaning that each bit in a string of bits may be processed instantaneously (or independently) without dependence on subsequent bits.
Decode the following sequence of bits using code 2:
0111001111000000101100111.
| Code # | S0S0 | S1S1 | S2S2 | S3S3 | S4S4 | Average Bits/Symbol |
|---|---|---|---|---|---|---|
| 1 | 000 | 001 | 010 | 011 | 100 | 15/5=3.015/5=3.0 |
| 2 | 000 | 001 | 01 | 10 | 11 | 12/5=2.412/5=2.4 |
| 3 | 000 | 001 | 010 | 011 | 1 | 13/5=2.613/5=2.6 |
| 4 | 1 | 01 | 001 | 0001 | 00001 | 15/5=3.015/5=3.0 |
| 5 | 1 | 01 | 001 | 0001 | 0000 | 14/5=2.8 |
Illustrate the following codes on a binary tree. Which of them are instantaneously decodable? Which can be pruned and remain instantaneously decodable?
\(\begin{array}{ccccc}
S_{0} & S_{1} & S_{2} & S_{3} & S_{4} \\
011 & 100 & 00 & 11 & 101 \\
011 & 100 & 00 & 0 & 01 \\
010 & 000 & 100 & 101 & 111 .
\end{array}\)
Code #2 generated in Table 2 seems like a better code than code #5 because its average number of bits/symbol (2.4) is smaller. But what if symbol \(S_0\) is a very likely symbol and symbol \(S_4\) is a very unlikely one? Then it may well turn out that the average number of bits used by code #5 is less than the average number used by code #2. So what is the best code? The answer depends on the relative frequency of use for each symbol. We explore this question in the next section.

## Match 1.54 — LibreTexts: 8: Searching, Binary Search Trees and Heaps
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Folsom_Lake_College/CISP_430%3A_Data_Structures_(Aljuboori)/08%3A_Searching_Binary_Search_Trees_and_Heaps

8: Searching, Binary Search Trees and Heaps
Unit Introduction
Searching is one of the most fundamental problems in Computer Science. It is the process of finding a particular item in a collection of items. Typically, a search answers whether the item is present in the collection or not. This unit discusses two important search methods: sequential search and binary search. A Sequential (linear) search is the simplest method to solve the searching problem. It finds an item in a collection by looking for it in a collection one at a time from the beginning till the end. Binary Search on the other hand is use a divide and conquer strategy. In divide and conquer, a larger problem is reduced into smaller sub-problems recursively until the problem is small enough that the solution is trivial. A condition for binary search is that the array should be a sorted array.
The unit also discusses two important data structures; a binary search tree (BST) and a heap. A BST is a binary tree based data structure that is viewed to support efficiently the dynamic set operations, including search and insert operations amongst others. A heap on the other hand is a specific tree based data structure in which all the nodes of tree are in a specific order. The maximum number of children of a node in the heap depends on the type of heap. However, a binary heap is the most commonly used heap type, where there are at most 2 children of a node.
Unit Objectives
Upon completion of this unit you should be able to:
- Demonstrate knowledge of searching algorithms
- Implement a searching algorithm based on efficiency requirements
- Demonstrate knowledge of advanced data structures including binary search trees and binary heap
- Implement a data structure based on efficiency requirements
Key Terms
Searching: A process of finding a particular item in a collection of items
Linear search: A search that sequentially looks for an item in a collection from beginning to the end
Binary Search: A search based on divide and conquer strategy
Binary tree: A tree made of nodes, where each node contains a “left” pointer, a “right” pointer, and a data element.
Binary search tree (BST): A type of binary tree where the nodes are arranged in order, that is, for each node all keys in its left sub-tree are less-or-equal to its key and all the keys in its right sub-tree are greater than its key.
In-order Traversal (Walk): A BST walk that recursively prints the BST keys in monotonically increasing order
Red-black trees: A variant of BST that ensure that the tree is balanced, that is, its height is O(lg n), where n is the number of nodes.
Heap: A specific tree based data structure in which all the nodes of tree are in a specific order.

## Match 1.54 — LibreTexts: 2.8: The Binary Mumeral System
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Applied_Mathematics/The_Essence_of_Mathematics_Through_Elementary_Problems_(Borovik_and_Gardiner)/02%3A_Arithmetic/2.08%3A_The_Binary_Mumeral_System

2.8: The Binary Mumeral System
There are all sorts of reasons why one should give thought to numeral systems using bases different from the familiar base 10. This is especially true of base 2, which is the simplest system of all, and is also (in some sense) the most widely used. What follows is only intended to offer a restricted glimpse into this alternative universe.
Problem 71 The numbers in this item are all written in base 2.
(a) Carry out the addition
without changing the numbers into their base 10 equivalents – simply by applying the rules for base 2 column addition and “carrying”.
(b) Carry out these long multiplications without changing the numbers into their base 10 equivalents – simply by applying the rules for base 2 column multiplication.
(i)
(ii)
(iii)
(c) Try to add these fractions (where the numerators and denominators are numerals written in base 2) without changing the fractions into more familiar base 10 form.
The next problem invites you to devise divisibility tests for integers written in base 2 like those for base 10 (that is, tests which implement some check involving the base 2 digits in place of carrying out the actual division).
Problem 72 Let N be a positive integer written in base 2. Describe and justify a simple test, based on the digits of N base2 :
(i) for N to be divisible by 2
(ii) for N to be divisible by 3
(iii) for N to be divisible by 4
(iv) for N to be divisible by 5.
Problem 73 A mathematical merchant has a pair of scales and an infinite set of calibrated integral weights with values (where ), but with only one weight of each value.
(a) Suppose that, for each object of positive integer weight w whose weight is to be determined, when the object is placed in one scale pan, the merchant is able to select some combination of his weights to put in the other scale pan to balance, and hence to determine the weight of, the object to be weighed.
(i) If for each weight w there is a unique choice of weights w i that balance w , prove that the collection of weights must consist of all the powers of 2.
(ii) If every object of unknown integral weight w can be balanced by some collection of the weights w i , but some weights w can be balanced, or “represented”, in more than one way, is it true that the merchant’s collection of weights has to include all the powers of 2?
(b) What can you prove if the merchant’s set of weights allow him to balance every unknown integer weight w in exactly one way by varying his weighing procedure, so that he can place his “known weights” in either scale pan (either in the same scale pan as the unknown weight to add to its weight, or in the opposite scale pan to balance it)?
Problem 74 Explain how to express any fraction
where as a sum of distinct unit fractions with denominator a power of 2.
You may have heard of an algorithm (a bit like long division) which allows one to compute by hand the square root of any number N given in base 10. The algorithm starts by grouping the digits of N in pairs, starting from the decimal point. It then extracts the square root, digit by digit, with the square root having one digit for each successive pair of digits of N , starting with the left-most pair (which may be a single digit).
We all know how to start the process. For example, if the left most pair of digits in N is “12”, then we know that the square root starts with a “3”. Successive digits are then identified using the algebraic identity
where x is the sequence of leading digits in the “partial square root” extracted so far (followed by an appropriate string of 0s), and y stands for the residual part of the required square root.
The key is to concentrate each time on the leading digit Y of the residue “ “, and at each stage to choose the leading digit Y of y so that does not exceed . This sequence of steps is traditionally (and helpfully) laid out in much the same way as long division, where at each stage we subtract the square of the current approximate square root x , from the original number N , and “bring down” the next pair of digits, and then choose the next digit Y in the square root (the leading digit of y ) so that “ “ does not exceed the residue .
In base 10 each stage requires one to juggle possibilities to decide on the next digit in the partial square root. However, in base 2 the process should be simpler, since at each stage we only have to decide whether the next digit is a 1 or a 0.
Problem 75 Work out how to calculate the square root of any square given in base 2.
