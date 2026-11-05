# Source pack — subjects/computer-science/expert/compilers-and-languages
Lesson title: Compilers & Languages
Level: advanced
Match confidence: 1.54

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.54 — LibreTexts: 3.2: Architecture support from Low level to High level languages
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://workforce.libretexts.org/Bookshelves/Information_Technology/Information_Technology_Hardware/Advanced_Computer_Organization_Architecture_(Njoroge)/03%3A_Computer_Organization_and_low-level_Programming/3.02%3A_Architecture_support_from_Low_level_to_High_level_languages

3.2: Architecture support from Low level to High level languages
Introduction
This section introduces learners to the various supports offered by programming languages starting with the low-level to the high level programming languages.
Activity Details
Architecture support from low level to high level languages is in the following ways;
Abstraction in software design;
1. Assemble-level abstraction
A programmer who writes directly with the raw machine instruction set. Expressing the program in terms of instructions, addresses, registers, bytes and words
2. High-level languages
Allows the programmer to think in terms of abstractions that are above the machine level. The programmer may not even know on which machine the program will ultimately run. The RISC philosophy focusing instruction set design on flexible primitive operations from which the complier can build its high level operations
3. Data types
a) ARM support for characters
For handling characters is the unsigned byte load and store instruction
b) ANSI (American National Standards Institute) C basic data types
Defines the following basic data types –
-
Signedandunsignedcharactersofatleasteightbits–Signedand unsigned short integers of at least 16 bits – Signed and unsigned integers of at least 16 bits – Signed and unsigned long integers of at least 32 bits – Floating-point, double and long double floating-point numbers – Enumerated types – Bit fields (sets of Boolean variables).
-
The ARM C compiler adopts the minimum sizes for each of these types
-
The standard integer uses 32-bit values
c) ANCI C derived data types
-
Defines derived data types – Arrays, Functions, Structures, Pointers, Unions
-
ARM pointers are 32 bits long and resemble unsigned integers
-
The ARM C compiler aligns characters on byte boundaries, short integers at even addresses and all other types on word boundaries
d) ARM architectural support for C data types
-
Provides native support for signed and unsigned 32-bit integers and for unsigned bytes, covering the C integer, long integer and unsigned character types
-
For arrays and structures: base plus scaled index addressing
-
Current versions of the ARM include signed byte and signed and unsigned 16-bit loads and stores, providing some native support for short integer and signed character types
4. Expressions
a) Register use
- The key to the efficient evaluation of a complex expression is to get the required values into the registers in the right order and to ensure that frequently used values are normally resident in registers
- Optimizing this trade-off between the number of values that can be held in registers and the number of registers remaining is a major task for the complier
b) ARM support
- The 3-address instruction format used by the ARM gives the compiler the maximum flexibility
- Thumb instructions (generally 2-address) – restricts the compiler’s freedom to some extent – smaller number of general registers also makes its job harder
c) Accessing operands
- A procedure will normally work with operands that are presented in one of the following ways, and can be accessed as indicated as an argument passed through a register – The value is already in a register, so no further work is necessary as a argument passed on the stack – Stack pointer (r13) relative addressing with an immediate offset known at compile-time allows the operand to be collected with a single LDR
- As a constant in the procedure’s literal pool – PC-relative addressing, again with an immediate offset known at compile-time, gives access with a single LDR
-
As a local variable – Local variables are allocated space on the stack and are accessed by
- a stack pointer relative LDR
- As a global variable – Global (and static) variables are allocated space in the static area and are accessed by static base (is usually in r9) relative addressing
d) Pointer arithmetic
- Arithmetic on pointers depends on the size of the data types that the pointers are pointing to
- If a variable is used as an offset it must be scaled at run-time
- If p is held in r0 and i in r1, the change top may be compiled as: ADD r0, r0, r1, LSL #2 ; scale r1 to int
(e) Arrays
- The declaration: int a[10]; – a reference to a[i] is equivalent to the pointer-plus-offset form *(a+i)
Conclusion
The section lists several supports that can be got by using the various programming level operations. This can include abstraction, pointer arithmetic, arrays etc.
Assessment
1. Explain the following supports as obtainable in application of the various programming levels
-
Abstraction; is a technique for managing complexity of computer systems. It works by establishing a level of complexity on which a person interacts with the system, suppressing the more complex details below the current level.
-
Pointer arithmetic: is another way to traverse through an array.
2. Describe Low-level programming language; is a programming language that provides little or no abstraction from a computer’s instruction set architecture—commands or functions in the language map closely to processor instructions. it refers to refers to either machine code or assembly language. The word “low” refers to the small or nonexistent amount of abstraction between the language and machine language; because of this, low-level languages are sometimes described as being “close to the hardware.” Because of the close relationship between the language and the hardware architecture programs written in low-level languages tend to be relatively non-portable. Low-level languages can convert to machine code without a compiler or interpreter. A program written in a low-level language can be made to run very quickly, with a small memory footprint.

## Match 1.53 — LibreTexts: 16.14: What performance assessments can be used for secondary foreign languages?
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://socialsci.libretexts.org/Bookshelves/Education_and_Professional_Development/Foundations_of_Education_and_Instructional_Assessment_(Kidd_et_al.)/16%3A_Instructional_Assessment-_Performance_Assessment_and_Rubrics/16.14%3A_What_performance_assessments_can_be_used_for_secondary_foreign_languages

16.14: What performance assessments can be used for secondary foreign languages?
Introduction
What is Performance Assessment?
Types of performance assessments
Conclusion
- Answer
selected template will load here
This action is not available.
By: Brian Breshears
While studying a language there are a myriad of ways that a student may be assessed. Testing students on their knowledge of vocabulary or placement of accent marks by way of a written response test or a research paper are just a couple of options. The unique thing about learning a language is that it is meant to be performed. Reading and writing are important aspects of the language, but its true purpose is verbal communication. This chapter will explore options for performance assessment as it pertains to the Spanish language.
Learning Objectives
According to the Alverno College, which implemented assessments for its students in 1973, assessment is defined as the following:
• a process integral to learning
• involving observation and judgment of each student's performance
• based on public criteria
• with self assessment
• with feedback for student improvement of learning and faculty improvement of teaching (Albromeit, Accessed on 18, March 2009)
More specifically they define performance assessment as “Demonstration of abilities in action in the kind of integrated situation in which students would use them in their life beyond campus” (Albromeit, Accessed on 18, March 2009).
Note
depts.alverno.edu/saal/ Performance Assessments are founded in a curriculum based on eight abilities
Getting students to speak the language is probably the most challenging thing about being a Spanish teacher. To get students started on a path to proficiency, a teacher must be able to remove the obstacles standing in front of them. One major obstruction facing the students is a fear of speaking in front of others. The easiest way to overcome this is through group conversation.
In group conversation the teacher splits the class into groups of two or three. In order to make the students feel comfortable about speaking another language in front of their peers, the teacher will create a template from which the students should follow in order to create their conversation. The groups are then responsible for creating a conversation in Spanish in their own words, but using the template as a road map for their conversation. They will then present the final conversation in front of the class. Each student must use the vocabulary they have studied leading up to the presentation.
This task promotes self education by allowing the students to speak about things that interest them, but also keeps them focused on a specific format for their conversation. A student is more likely to look up and retain words he/she doesn’t know when talking in front of his/her peers.
Another assessment is an extended oral presentation. The teacher can give the student a written test in Spanish, have them memorize it and then present it in front of the class. The Spanish teacher at Hugo Owen’s Middle School, Laura Agudelo, gives an example of this, “I find the Pledge of Allegiance works perfectly. It’s short enough that it’s not too intimidating to memorize and it’s a text that is familiar to them” (Agudelo, 2009). According to Mrs. Agudelo the rubric by which she assesses her students is based on correct pronunciation and fluidity of speech. The students feel comfortable with the text and it is also something they can practice in their homeroom every morning.
Performance assessment can be very rewarding for both the teacher and students when used properly. It can also give students confidence to speak in front of others.
Exercise \(\PageIndex{1}\)
1. 
a. dispelling cultural differences
b. getting the students to speak the language
c. getting to work on time
d. learning how to speak another language
2. What are two examples of performance assessment?
a. Class projects and Smartboard lessons
b. Computer games and hooked on phonics
c. Extended oral presentation and conversation
d. Written test and quiz performance
3. It what ways could Mrs. Agudelo assess her student’s performance of the language?
a. Ask them questions in the language and grade their competency.
b. Have them memorize the pledge of allegiance and grade their pronunciation
c. Assign them conversations and grade their fluency
d. All of the above
4. What would be an effective way for Mrs. Agudelo to reinforce a vocabulary list?
a. Have the students write them repeatedly.
b. Have students create conversations using the vocabulary list.
c. Stand in front of the class and yell the words until they get them
d. 
1) b
2) c
3) d
4) b
Agudelo, L. (2009). Direct quote. Chesapeake Public Schools.
Albromeit, J. (Accessed on 18, March 2009). Assessment Essentials. depts.alverno.edu/saal/essentials.html.

## Match 1.53 — LibreTexts: 2.1.10: Covered Structures for First-order Languages
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://human.libretexts.org/Bookshelves/Philosophy/Sets_Logic_Computation_(Zach)/02%3A_II-_First-order_Logic/2.01%3A_Syntax_and_Semantics/2.1.10%3A_Covered_Structures_for_First-order_Languages

2.1.10: Covered Structures for First-order Languages
Recall that a term is closed if it contains no variables.
If \(t\) is a closed term of the language \(\Lang L\) and \(\Struct M\) is a structure for \(\Lang L\) , the value \(\Value{t}{M}\) is defined as follows:
- If \(t\) is just the constant symbol \(c\) , then \(\Value{c}{M} = \Assign{c}{M}\) .
- If \(t\) is of the form \(\Atom{f}{t_1, \ldots, t_n}\) , then \[\Value{t}{M} = \Assign{f}{M}(\Value{t_1}{M}, \ldots, \Value{t_n}{M}).\nonumber\]
A structure is covered if every element of the domain is the value of some closed term.
Let \(\Lang L\) be the language with constant symbols \(\Obj{zero}\) , \(\Obj{one}\) , \(\Obj{two}\) , …, the binary predicate symbol \(<\) , and the binary function symbols \(+\) and \(\times\) . Then a structure \(\Struct M\) for \(\Lang L\) is the one with domain \(\Domain M = \{0, 1, 2, \ldots \}\) and assignments \(\Assign{\Obj{zero}}{M} = 0\) , \(\Assign{\Obj{one}}{M} = 1\) , \(\Assign{\Obj{two}}{M} = 2\) , and so forth. For the binary relation symbol \(<\) , the set \(\Assign{<}{M}\) is the set of all pairs \(\tuple{c_1, c_2} \in \Domain{M}^2\) such that \(c_1\) is less than \(c_2\) : for example, \(\tuple{1, 3} \in \Assign{<}{M}\) but \(\tuple{2, 2} \notin \Assign{<}{M}\) . For the binary function symbol \(+\) , define \(\Assign{+}{M}\) in the usual way—for example, \(\Assign{+}{M}(2,3)\) maps to \(5\) , and similarly for the binary function symbol \(\times\) . Hence, the value of \(\Obj{four}\) is just \(4\) , and the value of \(\times(\Obj{two}, +(\Obj{three},\Obj{zero}))\) (or in infix notation, \(\Obj{two} \times (\Obj{three} + \Obj{zero})\) ) is \[\begin{gathered} \begin{aligned} \Value{\times(\Obj{two}, +(\Obj{three},\Obj{zero})}{M} & =\Assign{\times}{M}(\Value{\Obj{two}}{M}, \Value{+(\Obj{three}, \Obj{zero})}{M})\\ & = \Assign{\times}{M}(\Value{\Obj{two}}{M}, \Assign{+}{M}(\Value{\Obj{three}}{M}, \Value{\Obj{zero}}{M})) \\ & = \Assign{\times}{M}(\Assign{\Obj{two}}{M}, \Assign{+}{M}(\Assign{\Obj{three}}{M}, \Assign{\Obj{zero}}{M})) \\ & = \Assign{\times}{M}(2, \Assign{+}{M}(3, 0)) \\ & = \Assign{\times}{M}(2, 3) \\ & = 6 \end{aligned}\end{gathered}\]
Is \(\Struct N\) , the standard model of arithmetic, covered? Explain.
