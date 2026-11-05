# Source pack — subjects/computer-science/expert/cryptography
Lesson title: Cryptography
Level: expert
Match confidence: 3.04

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.04 — LibreTexts: 2.5: Application of Matrices in Cryptography
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Courses/Los_Angeles_City_College/Math_230-Mathematics_for_Liberal_Arts_Students/02%3A_Matrices/2.05%3A_Application_of_Matrices_in_Cryptography

2.5: Application of Matrices in Cryptography
-
- Last updated
- Save as PDF
Learning Objectives
In this section, we will learn to find the inverse of a matrix, if it exists. Later, we will use matrix inverses to solve linear systems. In this section you will learn to
- encode a message using matrix multiplication.
- decode a coded message using the matrix inverse and matrix multiplication
Encryption dates back approximately 4000 years. Historical accounts indicate that the Chinese, Egyptians, Indian, and Greek encrypted messages in some way for various purposes. One famous encryption scheme is called the Caesar cipher, also called a substitution cipher, used by Julius Caesar, involved shifting letters in the alphabet, such as replacing A by C, B by D, C by E, etc, to encode a message. Substitution ciphers are too simple in design to be considered secure today.
In the middle ages, European nations began to use encryption. A variety of encryption methods were used in the US from the Revolutionary War, through the Civil War, and on into to modern times.
Applications of mathematical theory and methods to encryption became widespread in military usage in the 20 th century. The military would encode messages before sending and the recipient would decode the message, in order to send information about military operations in a manner that kept the information safe if the message was intercepted. In World War II, encryption played an important role, as both Allied and Axis powers sent encrypted messages and devoted significant resources to strengthening their own encryption while also trying to break the opposition’s encryption.
In this section we will examine a method of encryption that uses matrix multiplication and matrix inverses. This method, known as the Hill Algorithm, was created by Lester Hill, a mathematics professor who taught at several US colleges and also was involved with military encryption. The Hill algorithm marks the introduction of modern mathematical theory and methods to the field of cryptography.
These days, the Hill Algorithm is not considered a secure encryption method; it is relatively easy to break with modern technology. However, in 1929 when it was developed, modern computing technology did not exist. This method, which we can handle easily with today’s technology, was too cumbersome to use with hand calculations. Hill devised a mechanical encryption machine to help with the mathematics; his machine relied on gears and levers, but never gained widespread use. Hill’s method was considered sophisticated and powerful in its time and is one of many methods influencing techniques in use today. Other encryption methods at that time also utilized special coding machines. Alan Turing, a computer scientist pioneer in the field of artificial intelligence, invented a machine that was able to decrypt messages encrypted by the German Enigma machine, helping to turn the tide of World War II.
With the advent of the computer age and internet communication, the use of encryption has become widespread in communication and in keeping private data secure; it is no longer limited to military uses. Modern encryption methods are more complicated, often combining several steps or methods to encrypt data to keep it more secure and harder to break. Some modern methods make use of matrices as part of the encryption and decryption process; other fields of mathematics such as number theory play a large role in modern cryptography.
To use matrices in encoding and decoding secret messages, our procedure is as follows.
We first convert the secret message into a string of numbers by arbitrarily assigning a number to each letter of the message. Next we convert this string of numbers into a new set of numbers by multiplying the string by a square matrix of our choice that has an inverse. This new set of numbers represents the coded message.
To decode the message, we take the string of coded numbers and multiply it by the inverse of the matrix to get the original string of numbers. Finally, by associating the numbers with their corresponding letters, we obtain the original message.
In this section, we will use the correspondence shown below where letters A to Z correspond to the numbers 1 to 26, a space is represented by the number 27, and punctuation is ignored.
\[\begin{array}{cccccccccccccc}
\mathrm{A} & \mathrm{B} & \mathrm{C} & \mathrm{D} & \mathrm{E} & \mathrm{F} & \mathrm{G} & \mathrm{H} & \mathrm{I} & \mathrm{J} & \mathrm{K} & \mathrm{L} & \mathrm{M} \\
1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 \\
\hline \mathrm{N} & \mathrm{O} & \mathrm{P} & \mathrm{Q} & \mathrm{R} & \mathrm{S} & \mathrm{T} & \mathrm{U} & \mathrm{V} & \mathrm{W} & \mathrm{X} & \mathrm{Y} & \mathrm{Z} \\
14 & 15 & 16 & 17 & 18 & 19 & 20 & 21 & 22 & 23 & 24 & 25 & 26
\end{array} \nonumber \]
Example \(\PageIndex{1}\)
Use matrix \(A=\left[\begin{array}{ll}
1 & 2 \\
1 & 3
\end{array}\right]\) to encode the message: ATTACK NOW!
Solution
We divide the letters of the message into groups of two.
\[\begin{array}{lllll}\text { AT } & \text { TA } & \text { CK } & \text { -N } & \text { OW }\end{array} \nonumber \]
We assign the numbers to these letters from the above table, and convert each pair of numbers into \(2 \times 1\) matrices. In the case where a single letter is left over on the end, a space is added to make it into a pair.
\[\left[\begin{array}{c}
\mathrm{A} \\
\mathrm{T}
\end{array}\right]=\left[\begin{array}{c}
1 \\
20
\end{array}\right] \quad\left[\begin{array}{l}
\mathrm{T} \\
\mathrm{A}
\end{array}\right]=\left[\begin{array}{c}
20 \\
1
\end{array}\right] \quad\left[\begin{array}{l}
\mathrm{C} \\
\mathrm{K}
\end{array}\right]=\left[\begin{array}{l}
3 \\
11
\end{array}\right] \nonumber \]
\[\left[\begin{array}{c}
- \\
\mathrm{N}
\end{array}\right]=\left[\begin{array}{l}
27 \\
14
\end{array}\right] \quad\left[\begin{array}{l}
\mathrm{O} \\
\mathrm{W}
\end{array}\right]=\left[\begin{array}{l}
15 \\
23
\end{array}\right] \nonumber \]
So at this stage, our message expressed as \(2 \times 1\) matrices is as follows.
\[\left[\begin{array}{c}
1 \\
20
\end{array}\right]\left[\begin{array}{c}
20 \\
1
\end{array}\right]\left[\begin{array}{c}
3 \\
11
\end{array}\right]\left[\begin{array}{c}
27 \\
14
\end{array}\right]\left[\begin{array}{c}
15 \\
23
\end{array}\right] \quad \bf{(I)} \nonumber \]
Now to encode, we multiply, on the left, each matrix of our message by the matrix \(A\). For example, the product of \(A\) with our first matrix is: \(\left[\begin{array}{ll}
1 & 2 \\
1 & 3
\end{array}\right]\left[\begin{array}{c}
1 \\
20
\end{array}\right]=\left[\begin{array}{l}
41 \\
61
\end{array}\right]\)
And the product of \(A\) with our second matrix is: \(\left[\begin{array}{ll}
1 & 2 \\
1 & 3
\end{array}\right]\left[\begin{array}{l}
20 \\
1
\end{array}\right]=\left[\begin{array}{l}
22 \\
23
\end{array}\right]\)
Multiplying each matrix in \(\bf{(I)}\) by matrix \(A\), in turn, gives the desired coded message:
\[\left[\begin{array}{l}
41 \\
61
\end{array}\right]\left[\begin{array}{l}
22 \\
23
\end{array}\right]\left[\begin{array}{l}
25 \\
36
\end{array}\right]\left[\begin{array}{l}
55 \\
69
\end{array}\right]\left[\begin{array}{l}
61 \\
84
\end{array}\right] \nonumber \]
Example \(\PageIndex{2}\)
Decode the following message that was encoded using matrix \(A=\left[\begin{array}{ll}
1 & 2 \\
1 & 3
\end{array}\right]\).
\[\left[\begin{array}{l}
21 \\
26
\end{array}\right]\left[\begin{array}{l}
37 \\
53
\end{array}\right]\left[\begin{array}{l}
45 \\
54
\end{array}\right]\left[\begin{array}{c}
74 \\
101
\end{array}\right]\left[\begin{array}{l}
53 \\
69
\end{array}\right] \quad(\bf { II }) \nonumber \]
Solution
Since this message was encoded by multiplying by the matrix \(A\) in Example \(\PageIndex{1}\), we decode this message by first multiplying each matrix, on the left, by the inverse of matrix \(A\) given below.
\[A^{-1}=\left[\begin{array}{cc}
3 & -2 \\
-1 & 1
\end{array}\right] \nonumber \]
For example: \(\left[\begin{array}{cc}
3 & -2 \\
-1 & 1
\end{array}\right]\left[\begin{array}{c}
21 \\
26
\end{array}\right]=\left[\begin{array}{c}
11 \\
5
\end{array}\right]\)
By multiplying each of the matrices in \(\bf{(II)}\) by the matrix \(A^{-1}\), we get the following.
\[\left[\begin{array}{c}
11 \\
5
\end{array}\right]\left[\begin{array}{c}
5 \\
16
\end{array}\right]\left[\begin{array}{c}
27 \\
9
\end{array}\right]\left[\begin{array}{c}
20 \\
27
\end{array}\right]\left[\begin{array}{c}
21 \\
16
\end{array}\right] \nonumber \]
Finally, by associating the numbers with their corresponding letters, we obtain:
\[\left[\begin{array}{l}
\mathrm{K} \\
\mathrm{E}
\end{array}\right]\left[\begin{array}{l}
\mathrm{E} \\
\mathrm{P}
\end{array}\right]\left[\begin{array}{l}
- \\
\mathrm{I}
\end{array}\right]\left[\begin{array}{l}
\mathrm{T} \\
-
\end{array}\right]\left[\begin{array}{l}
\mathrm{U} \\
\mathrm{P}
\end{array}\right] \nonumber \]
And the message reads: KEEP IT UP.
Now suppose we wanted to use a \(3 \times 3\) matrix to encode a message, then instead of dividing the letters into groups of two, we would divide them into groups of three.
Example \(\PageIndex{3}\)
Using the matrix \(B=\left[\begin{array}{ccc}
1 & 1 & -1 \\
1 & 0 & 1 \\
2 & 1 & 1
\end{array}\right] \nonumber\), encode the message: ATTACK NOW!
Solution
We divide the letters of the message into groups of three.
ATT ACK -NO W- -
Note that since the single letter "W" was left over on the end, we added two spaces to make it into a triplet.
Now we assign the numbers their corresponding letters from the table, and convert each triplet of numbers into \(3 \times 1\) matrices. We get
\[\left[\begin{array}{l}
\mathrm{A} \\
\mathrm{T} \\
\mathrm{T}
\end{array}\right]=\left[\begin{array}{c}
1 \\
20 \\
20
\end{array}\right]\left[\begin{array}{l}
\mathrm{A} \\
\mathrm{C} \\
\mathrm{K}
\end{array}\right]=\left[\begin{array}{l}
1 \\
3 \\
11
\end{array}\right]\left[\begin{array}{l}
- \\
\mathrm{N} \\
\mathrm{O}
\end{array}\right]=\left[\begin{array}{l}
27 \\
14 \\
15
\end{array}\right]\left[\begin{array}{l}
\mathrm{W} \\
- \\
-
\end{array}\right]=\left[\begin{array}{l}
23 \\
27 \\
27
\end{array}\right] \nonumber \]
So far we have,
\[\left[\begin{array}{c}
1 \\
20 \\
20
\end{array}\right]\left[\begin{array}{c}
1 \\
3 \\
11
\end{array}\right]\left[\begin{array}{c}
27 \\
14 \\
15
\end{array}\right]\left[\begin{array}{c}
23 \\
27 \\
27
\end{array}\right] \quad \bf{(III)} \nonumber \]
We multiply, on the left, each matrix of our message by the matrix \(B\). For example,
\[\left[\begin{array}{ccc}
1 & 1 & -1 \\
1 & 0 & 1 \\
2 & 1 & 1
\end{array}\right]\left[\begin{array}{c}
1 \\
20 \\
20
\end{array}\right]=\left[\begin{array}{c}
1 \\
21 \\
42
\end{array}\right] \nonumber \]
By multiplying each of the matrices in \(\bf{(III)}\) by the matrix \(B\), we get the desired coded message as follows:
\[\left[\begin{array}{c}
1 \\
21 \\
42
\end{array}\right]\left[\begin{array}{c}
-7 \\
12 \\
16
\end{array}\right]\left[\begin{array}{c}
26 \\
42 \\
83
\end{array}\right]\left[\begin{array}{c}
23 \\
50 \\
100
\end{array}\right] \nonumber \]
If we need to decode this message, we simply multiply the coded message by \(B^{-1}\), and associate the numbers with the corresponding letters of the alphabet.
In Example \(\PageIndex{4}\) we will demonstrate how to use matrix \(B^{-1}\) to decode an encrypted message.
Example \(\PageIndex{4}\)
Decode the following message that was encoded using matrix \(B=\left[\begin{array}{lll}
1 & 1 & -1 \\
1 & 0 & 1 \\
2 & 1 & 1
\end{array}\right] \).
\[\left[\begin{array}{l}
11 \\
20 \\
43
\end{array}\right]\left[\begin{array}{l}
25 \\
10 \\
41
\end{array}\right]\left[\begin{array}{l}
22 \\
14 \\
41
\end{array}\right] \quad \bf{(IV)} \nonumber \]
Solution
Since this message was encoded by multiplying by the matrix \(B\). We first determine inverse of \(B\).
\[\mathrm{B}^{-1}=\left[\begin{array}{ccc}
1 & 2 & -1 \\
-1 & -3 & 2 \\
-1 & -1 & 1
\end{array}\right] \non

## Match 3.03 — LibreTexts: 16.5: Public Key Cryptography
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/3.0/ · https://math.libretexts.org/Bookshelves/Applied_Mathematics/Math_in_Society_(Lippman)/16%3A_Cryptography/16.05%3A_Public_Key_Cryptography

16.5: Public Key Cryptography
Suppose that you are connecting to your bank’s website. It is possible that someone could intercept any communication between you and your bank, so you’ll want to encrypt the communication. The problem is that all the encryption methods we’ve discussed require than both parties have already agreed on a shared secret encryption key. How can you and your bank agree on a key if you haven’t already?
This becomes the goal of public key cryptography – to provide a way for two parties to agree on a key without a snooping third party being able to determine the key. The method relies on a one-way function; something that is easy to do one way, but hard to reverse. We will explore the Diffie-Hellman-Merkle key exchange method.
As an example, let’s consider mixing paint. It’s easy to mix paint to make a new color, but much harder to separate a mixed paint into the two original colors used.[1][2]
Using this analogy, Alice and Bob publically agree on a common starter color. Each then mixes in some of their own secret color. They then exchange their mixed colors.
Since separating colors is hard, even if a snooper were to obtain these mixed colors, it would be hard to obtain the original secret colors.
Once they have exchanged their mixed colors, Alice and Bob both add their secret color to the mix they obtained from the other person. In doing so, both Alice and Bob now have the same common secret color, since it contains a mix of the original common color, Alice’s secret color, and Bob’s secret color.
They now have a common secret color they can use as their encryption key, even though neither Alice nor Bob knows the other’s secret color.
Likewise, there is no way for a snooper to obtain the common secret color without separating one of the mixed colors.
To get this process to work for computer communication, we need to have the process result in a share common number to act as the common secret encryption key. For this, we need a numerical one-way function.
Modular arithmetic
If you think back to doing division with whole numbers, you may remember finding the whole number result and the remainder after division.
Modulus [3]
The modulus is another name for the remainder after division.
For example, 17 mod 5 = 2, since if we divide 17 by 5, we get 3 with remainder 2.
Modular arithmetic is sometimes called clock arithmetic, since analog clocks wrap around times past 12, meaning they work on a modulus of 12. If the hour hand of a clock currently points to 8, then in 5 hours it will point to 1. While \(8+5 = 13\), the clock wraps around after 12, so all times can be thought of as modulus 12. Mathematically, 13 mod 12 = 1.
Compute: a) 10 mod 3 b) 15 mod 5 c) \(2^{7}\) mod 5
Solution
a) Since 10 divided by 3 is 3 with remainder 1,10 mod \(3=1\)
b) Since 15 divided by 5 is 3 with no remainder, 15 mod \(5=0\)
c) \(2^{7}=128.128\) divide by 5 is 25 with remainder \(3,\) so \(2^{7}\) mod \(5=3\)
Compute: a) 23 mod 7 b) 15 mod 7 c) 2034 mod 7
- Answer
-
a) 2 b) 1 c) 4
Recall that when we divide 17 by 5, we could represent the result as 3 remainder 2, as the mixed number \(3\frac{2}{5}\), or as the decimal 3.4. Notice that the modulus, 2, is the same as the numerator of the fractional part of the mixed number, and that the decimal part 0.4 is equivalent to the fraction . We can use these conversions to calculate the modulus of not-too-huge numbers on a standard calculator.
To calculate \(a\) mod \(n\) on a standard calculator
- Divide \(a\) by \(n\)
- Subtract the whole part of the resulting quantity
- Multiply by \(n\) to obtain the modulus
Calculate 31345 mod 419
Solution
\(\begin{array}{ll} 31345 / 419=74.8090692 & \text{Now subtract 74 to get just the decimal remainder} \\ 74.8090692-74=0.8090692 & \text{Multiply this by 419 to get the modulus} \\ 0.8090692 \times 419=339 & \text{This tells us 0.8090692 was equivalent to }\frac{339}{419} \end{array}\)
In the text above, only a portion of the decimal value was written down. In practice, you should try to avoid writing down the intermediary steps, and instead allow your calculator to retain as many decimal values as it can.
The one-way function
When you use a prime number \(p\) as a modulus, you can find a special number called a generator, \(g,\) so that \(g^{n}\) mod \(p\) will result in all the values from 1 to \(p-1\)
\(\begin{array}{|l|l|l|}
\hline n & 3^{n} & 3^{n} \mathrm{mod} 7 \\
\hline 1 & 3 & 3 \\
\hline 2 & 9 & 2 \\
\hline 3 & 27 & 6 \\
\hline 4 & 81 & 4 \\
\hline 5 & 243 & 5 \\
\hline 6 & 729 & 1 \\
\hline
\end{array}\)
In the table to the top, notice that when we give values of \(n\) from 1 to \(6,\) we get out all values from 1 to \(6 .\) This means 3 is a generator when 7 is the modulus.
This gives us our one-way function. While it is easy to compute the value of \(g^{n}\) mod \(p\) when we know \(n\), it is difficult to find the exponent \(n\) to obtain a specific value.
For example, suppose we use \(p=23\) and \(g=5 .\) If I pick \(n\) to be \(6,\) I can fairly easily calculate \(5^{6}\) mod \(23=15625\) mod \(23=8\)
If someone else were to tell you \(5^{n} \bmod 23=7\), it is much harder to find \(n\). In this particular case, we’d have to try 22 different values for \(n\) until we found one that worked – there is no known easier way to find \(n\) other than brute-force guessing.
While trying 22 values would not take too long, when used in practice much larger values for \(p\) are used, typically with well over 500 digits. Trying all possibilities would be essentially impossible.
The key exchange
Before we can begin the key exchange process, we need a couple more important facts about modular arithmetic.
\(\left(a^{b} \bmod n\right)=(a \bmod n)^{b} \bmod n\)
Compute \(12^{5}\) mod 7 using the exponentiation rule.
Solution
Evaluated directly: \(12^{5}=248,832,\) so \(12^{5}\) mod \(7=248,823\) mod \(7=3\)
Using the rule above, \(12^{5}\) mod \(7=(12 \bmod 7)^{5} \bmod 7=5^{5} \bmod 7=3125 \bmod 7=3\)
You may remember a basic exponent rule from algebra:
\[\left(a^{b}\right)^{c}=a^{b c}=a^{c b}=\left(a^{c}\right)^{b} \nonumber \]
For example:
\[64^{2}=\left(4^{3}\right)^{2}=4^{6}=\left(4^{2}\right)^{3}=16^{3} \nonumber \]
We can combine the modular exponentiation rule with the algebra exponent rule to define the modular exponent power rule.
\[\left(a^{b} \bmod n\right)^{c} \bmod n=\left(a^{b c} \bmod n\right)=\left(a^{c} \bmod n\right)^{b} \bmod n \nonumber \]
Verify the rule above if \(a=3, b=4, c=5,\) and \(n=7\)
Solution
\(\left(3^{4} \bmod 7\right)^{5} \bmod 7=(81 \bmod 7)^{5} \bmod 7=4^{5} \bmod 7=1024 \bmod 7=2\)
\(\left(3^{5} \bmod 7\right)^{4} \bmod 7=(243 \bmod 7)^{4} \bmod 7=5^{4} \bmod 7=625 \bmod 7=2,\) the same result.
Use the modular exponent rule to calculate \(10000 \bmod 7,\) by noting \(10000=10^{4}\)
- Answer
-
\(10000 \bmod 7=10^{4} \bmod 7=(10 \bmod 7)^{4} \bmod 7=3^{4} \bmod 7=81 \bmod 7=4\)
This provides us the basis for our key exchange. While it will be easier to understand in the following example, here’s the process:
- Alice and Bob agree publically on values a prime \(p\) and generator \(g\).
- Alice picks some secret number \(a,\) while Bob picks some secret number \(b\).
- Alice computes \(A=g^{a} \bmod p\) and sends it to Bob.
- Bob computes \(B=g^{b}\) mod \(p\) and sends it to Alice.
- Alice computes \(B^{a} \bmod p,\) which is \(\left(g^{b} \bmod p\right)^{a} \bmod p\).
- Bob computes \(A^{b} \bmod p,\) which is \(\left(g^{a} \bmod p\right)^{b} \bmod p\).
The modular exponent power rule tells us \(\left(g^{a} \bmod p\right)^{b} \bmod p=\left(g^{b} \bmod p\right)^{a} \bmod p,\) so Alice and Bob will arrive at the same shared value to use as a key, even though neither knows the other's secret number, and no eavesdropper can determine this value knowing only \(g, p, A,\) and \(B\)
Alice and Bob publically share a generator and prime modulus. In this case, we’ll use 3 as the generator and 17 as the prime.
Solution
\(\begin{array}{llll} & \textbf{Alice} & & \textbf{Bob} \\ \text{Alice and Bob publically} & g=3, p=17 & \text{Common info} & g=3, p=17 \\ \text{share a generator and prime} & & & \\ \text{modulus.} & & & \\ \text{Each then secretly picks a} & n = 8 & \text{secret number} & n=6 \\ \text{number n of their own.} & & & \\ \text{Each calculates } g^n \bmod p & 3^{8} \bmod 17=16 & & 3^{6} \bmod 17=15 \\ \text{They then exchange these} & A=16 & & B=15 \\ \text{resulting values.} & B=15 & & A=16\\ \text{Each then raises the value} & B^{n} \bmod p= & \text{mix in secret} & A^{n} \bmod p=\\ \text{they received to the power of } & & \text{number} & \\ \text{their secret }n \bmod p & 15^{8} \bmod 17=1 & & 16^{6} \bmod 17=1\\ \text{The result is the shared secret key.} & 1 & \text{shared secret key} & 1 \end{array}\)
The shared secrets come out the same because of the modular exponent power rule
\(\left(a^{b} \bmod n\right)^{c} \bmod n=\left(a^{c} \bmod n\right)^{b} \bmod n .\) Alice computed \(\left(3^{6} \bmod 17\right)^{8} \bmod 17\) while Bob computed \(\left(3^{8} \bmod 17\right)^{6} \bmod 17,\) which
the rule says will give the same results.
Notice that even if a snooper were to obtain both exchanged values \(A=16\) and \(B=15\), there is no way they could obtain the shared secret key from these without having at least one of Alice or Bob’s secret numbers. There is no easy way to obtain the secret numbers from the shared values, since the function was a one-way function.
Using this approach, Alice and Bob can now use the shared secret key obtained as the key for a standard encryption algorithm like DES or AES.
Suppose you are doing a key exchange with Kylie using generator 5 and prime 23. Your secret number is 2. What number do you send to Kylie? If Kylie sends you the value 8, determine the shared secret key.
- Answer
-
To compute the number we'd send to Kylie, we raise the generator to the power of our secret number modulus the prime: \(5^{2} \bmod 23=25 \bmod 23=2\).
If Kylie sends us the value \(8,\) we determine the shared secret by raising her number to the power of our secret number modulus the prime: \(8^{2} \bmod 23=64 \bmod 23=18.18\) would be the shared secret.
RSA
There are several other public-key methods used, including RSA, which is very commonly used. RSA involves distributing a public encryption key, which anyone can use to encrypt messages to you, but which can only be decrypted using a separate private key. You can think of this as sending an open padlock to someone – they can lock up information, but no one can unlock it without the key you kept secret.
RSA’s security relies on the difficulty of factoring large numbers. For example, it’s easy to calculate that 53 times 59 is 3127, but given the number 12,317 that is a product of two primes, it’s much harder to find the numbers that multiply to give that number. It’s exponentially harder when the primes each have 100 or more digits. Suppose we find two primes \(p\) and \(q\) and multiply them to get \(n=p q\). This number will be very hard to factor. If we also know \(p\) and \(q\), there are shortcuts to find two numbers \(e\) and \(d\) so that \(m^{e d} \bmod n=m \bmod n\) for all numbers \(m\). Without knowing the factorization of \(n\), finding these values is very hard.
To use RSA, we generate two primes \(p\) and \(q\) and multiply them to get \(n=p q\). since we know the factorization, we can easily find \(e\) and \(d\) so \(m^{e d}=m \bmod n .\) Now, we lock away \(p\)
\(q,\) and \(d .\) We then send the values \(e\) and \(n\) out publically. To encrypt a message \(m,\) the sender computes \(S=m^{e} \bmod n .\) As we saw earlier, the modulus is a one-way function which makes the original message very hard to recover from \(S\). However, we have our private key \(d\) we can use to decrypt the message. When we receive the secret message \(S\), we compute \(S^{d} \bmod n=\left(m^{e}\right)^{d} \bmod n=m^{e d} \bmod n=m \bmod n,\) recovering the original message[4].
Suppose that Alice has co

## Match 3.03 — LibreTexts: 7.1: Private Key Cryptography
License: GNU Free Documentation License · https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_(Judson)/07%3A_Introduction_to_Cryptography/7.01%3A_Private_Key_Cryptography

7.1: Private Key Cryptography
In single or private key cryptosystems the same key is used for both encrypting and decrypting messages. To encrypt a plaintext message, we apply to the message some function which is kept secret, say \(f\text{.}\) This function will yield an encrypted message. Given the encrypted form of the message, we can recover the original message by applying the inverse transformation \(f^{-1}\text{.}\) The transformation \(f\) must be relatively easy to compute, as must \(f^{-1}\text{;}\) however, \(f\) must be extremely difficult to guess from available examples of coded messages.
One of the first and most famous private key cryptosystems was the shift code used by Julius Caesar. We first digitize the alphabet by letting \(\text{A} = 00, \text{B} = 01, \ldots, \text{Z} = 25\text{.}\) The encoding function will be
\[ f(p) = p + 3 \bmod 26; \nonumber \]
that is, \(A \mapsto D, B \mapsto E, \ldots, Z \mapsto C\text{.}\)
Solution
The decoding function is then
\[ f^{-1}(p) = p - 3 \bmod 26 = p + 23 \bmod 26\text{.} \nonumber \]
Suppose we receive the encoded message DOJHEUD. To decode this message, we first digitize it:
\[ 3, 14, 9, 7, 4, 20, 3\text{.} \nonumber \]
Next we apply the inverse transformation to get
\[ 0, 11, 6, 4, 1, 17, 0\text{,} \nonumber \]
or ALGEBRA. Notice here that there is nothing special about either of the numbers \(3\) or \(26\text{.}\) We could have used a larger alphabet or a different shift.
Cryptanalysis is concerned with deciphering a received or intercepted message. Methods from probability and statistics are great aids in deciphering an intercepted message; for example, the frequency analysis of the characters appearing in the intercepted message often makes its decryption possible.
Suppose we receive a message that we know was encrypted by using a shift transformation on single letters of the \(26\)-letter alphabet. To find out exactly what the shift transformation was, we must compute \(b\) in the equation \(f(p) = p + b \bmod 26\text{.}\)
Solution
We can do this using frequency analysis. The letter \(\text{E} = 04\) is the most commonly occurring letter in the English language. Suppose that \(\text{S} = 18\) is the most commonly occurring letter in the ciphertext. Then we have good reason to suspect that \(18 = 4 + b \bmod 26\text{,}\) or \(b= 14\text{.}\) Therefore, the most likely encrypting function is
\[ f(p) = p + 14 \bmod 26\text{.} \nonumber \]
The corresponding decrypting function is
\[ f^{-1}(p) = p + 12 \bmod 26\text{.} \nonumber \]
It is now easy to determine whether or not our guess is correct.
Simple shift codes are examples of monoalphabetic cryptosystems . In these ciphers a character in the enciphered message represents exactly one character in the original message. Such cryptosystems are not very sophisticated and are quite easy to break. In fact, in a simple shift as described in Example \(7.1\), there are only \(26\) possible keys. It would be quite easy to try them all rather than to use frequency analysis.
Let us investigate a slightly more sophisticated cryptosystem. Suppose that the encoding function is given by
\[ f(p) = ap + b \bmod 26\text{.} \nonumber \]
We first need to find out when a decoding function \(f^{-1}\) exists. Such a decoding function exists when we can solve the equation
\[ c = ap + b \bmod 26 \nonumber \]
for \(p\text{.}\) By Proposition \(3.4\), this is possible exactly when \(a\) has an inverse or, equivalently, when \(\gcd( a, 26) =1\text{.}\) In this case
\[ f^{-1}(p) = a^{-1} p - a^{-1} b \bmod 26\text{.} \nonumber \]
Such a cryptosystem is called an affine cryptosystem .
Let us consider the affine cryptosystem \(f(p) = ap + b \bmod 26\text{.}\)
Solution
For this cryptosystem to work we must choose an \(a \in {\mathbb Z}_{26}\) that is invertible. This is only possible if \(\gcd(a, 26) = 1\text{.}\) Recognizing this fact, we will let \(a = 5\) since \(\gcd(5, 26) = 1\text{.}\) It is easy to see that \(a^{-1} = 21\text{.}\) Therefore, we can take our encryption function to be \(f(p) = 5p + 3 \bmod 26\text{.}\) Thus, ALGEBRA is encoded as \(3, 6, 7, 23, 8, 10, 3\text{,}\) or DGHXIKD. The decryption function will be
\[ f^{-1}(p) = 21 p - 21 \cdot 3 \bmod 26 = 21 p + 15 \bmod 26\text{.} \nonumber \]
A cryptosystem would be more secure if a ciphertext letter could represent more than one plaintext letter. To give an example of this type of cryptosystem, called a polyalphabetic cryptosystem , we will generalize affine codes by using matrices. The idea works roughly the same as before; however, instead of encrypting one letter at a time we will encrypt pairs of letters. We can store a pair of letters \(p_1\) and \(p_2\) in a vector
\[ {\mathbf p} = \begin{pmatrix} p_1 \\ p_2 \end{pmatrix}\text{.} \nonumber \]
Let \(A\) be a \(2 \times 2\) invertible matrix with entries in \({\mathbb Z}_{26}\text{.}\) We can define an encoding function by
\[ f({\mathbf p}) = A {\mathbf p} + {\mathbf b}\text{,} \nonumber \]
where \({\mathbf b}\) is a fixed column vector and matrix operations are performed in \({\mathbb Z}_{26}\text{.}\) The decoding function must be
\[ f^{-1}({\mathbf p}) = A^{-1} {\mathbf p} - A^{-1} {\mathbf b}\text{.} \nonumber \]
Suppose that we wish to encode the word HELP. The corresponding digit string is \(7, 4, 11, 15\text{.}\) If
\[ A = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}\text{,} \nonumber \]
Solution
then
\[ A^{-1} = \begin{pmatrix} 2 & 21 \\ 25 & 3 \end{pmatrix}\text{.} \nonumber \]
If \({\mathbf b} = ( 2, 2)^\transpose\text{,}\) then our message is encrypted as RRGR. The encrypted letter R represents more than one plaintext letter.
Frequency analysis can still be performed on a polyalphabetic cryptosystem, because we have a good understanding of how pairs of letters appear in the English language. The pair th appears quite often; the pair qz never appears. To avoid decryption by a third party, we must use a larger matrix than the one we used in Example \(7.4\).
