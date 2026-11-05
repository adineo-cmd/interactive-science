# Source pack — subjects/computer-science/intermediate/programming-fundamentals
Lesson title: Programming Fundamentals
Level: intermediate
Match confidence: 2.03

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.03 — LibreTexts: 27.2.6: Practice- Introduction to Programming
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Butte_College/Intro_to_Programming_with_Programming_Fundamentals_and_Python_for_Everyone/27%3A_Additional_Fundamentals_of_Programming/27.02%3A_Introduction_to_Programming/27.2.06%3A_Practice-_Introduction_to_Programming

27.2.6: Practice- Introduction to Programming
-
- Last updated
- Save as PDF
Review Questions
True / False:
- Beginning programmers participate in all phases of the Systems Development Life Cycle.
- Coding the program in a language like C++ is the first task of planning. You plan as you code.
- Pseudocode is the only commonly used planning tool.
- Pseudocode has a strict set of rules and is the same everywhere in the computer programming industry.
- Test data is developed for testing the program once it is code into a language like C++.
- The word pseudo means false and includes the concepts of fake or imitation.
- Many programmers pick up the bad habit of not completing the planning step before starting to code the program.
- IDE means Integer Division Expression.
- Most modern compilers are really an IDE type of software, not just a compiler.
- Programming errors are extremely easy to understand and fix.
Answers:
- false
- false
- false
- false
- false
- true
- true
- false
- true
- false
Short Answer:
- List the steps of the Systems Development Life Cycle and indicate which step you are likely to work in as a new computer professional.
- List and describe what might cause the four (4) types of errors encountered in a program using a compiler and an Integrated Development Environment software product.
Activities
Pseudocode and Flowcharts
The following activities focus on software planning and testing using pseudocode and / or flowcharts.
- Search the Internet for pseudocode for making a peanut butter and jelly sandwich. Based on the examples you find, create pseudocode to make your own favorite sandwich or other prepared meal. Test your pseudocode by reading the instructions out loud as someone else follows your directions.
- Search the Internet for a flowchart for making a peanut butter and jelly sandwich. Use a free online or downloadable flowchart tool to create a flowchart that describes how to make your favorite sandwich or other prepared meal. Test your flowchart by reading the instructions out loud while someone else follows your directions.
- Create pseudocode or a flowchart for a program that would interact with bank customers and help them determine the value of a bag or jar of coins brought in for deposit. Include counts for pennies, nickels, dimes and quarters and calculate the total value of all of the coins deposited. Test your program by having someone else follow the instructions and guide them as they use your program.
- Create pseudocode or a flowchart for a program that allows the user to enter gallons of gas and converts it to liters (metric system). NOTE: One US gallon equals 3.7854 liters. Test your program by having someone else follow the instructions and guide them as they use your program.
- A major restaurant sends a chef to purchase fruits and vegetables every day. Upon returning to the store the chef must enter two pieces of data for each item purchased: the quantity (Example: 2 cases) and the price paid (Example: $4.67). The program has a list of 20 items and after the chef enters the information, the program provides a total for the purchases for that day. Prepare test data for five (5) items: apples, oranges, bananas, lettuce, and tomatoes.
Programming Languages and Integrated Development Environments
The following activities focus on selecting a programming language and testing integrated development environments.
- Research different programming languages and select a programming language to use with this textbook. Copy the Hello World example code for your selected programming language and use one of the free cloud-based IDEs to try running the Hello World program.
-
Modify the example Hello World program to instead display
Hello <name>!
, where<name>
is your name. Include comments at the top of the program and test the program to verify that it works correctly. - Research free downloadable tools for your selected programming language (interpreter/compiler, IDE, etc.). Consider downloading and installing a development environment on your system. If you set up your own development environment, test the environment using your Hello Name program written above.
References
- cnx.org: Programming Fundamentals – A Modular Structured Approach using C++
- Wikiversity: Computer Programming

## Match 1.57 — LibreTexts: 28.1: A quick intro to programming
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Courses/Berea_College/Introductory_Physics%3A_Berea_College/28%3A_The_Python_Programming_Language/28.01%3A_A_quick_intro_to_programming

28.1: A quick intro to programming
-
- Last updated
- Save as PDF
In Python, as in other programming languages, the equal sign is called the assignment operator . Its role is to assign the value on its right to the variable on its left. The following code does the following:
-
assigns
the value of
2
to the variablea
-
assigns
the values of
2*a
to the variableb
-
prints out the value of the variable
b
python code \(\PageIndex{1}\)
Declaring variables in Python
#This is a comment, and is ignored by Python a = 2 b = 2*a print(b)
Output
4
Note that any text that follows a pound sign (
#
) is intended as a comment and will be ignored by Python. Inserting comments in your code is very important for being able to understand your computer program in the future or if you are sharing your code with someone who would like to understand it. In the above example, we called the
print()
function
and passed to it the variable
b
as an
argument
; this allowed us to print (display) the value of the variable
b
and verify that it was indeed equal to the number \(4\).
In Python, if you want to have access to “functions”, which are a more complex series of operations, then you typically need to load the module that defines those operations.
A large number of functions are provided in Python. Most of these functions need to be “imported” from “modules”. For example, if you want to be able to take the square root of a number, then you need to load (import) the “math module” which contains the square root function, as in the following example:
python code \(\PageIndex{1}\)
Using functions from modules
#First, we load (import) the math module import math as m a = 9 b = m.sqrt(a) print (b)
Output
3
In the above code, we loaded the math module (and renamed it
m
); this then allows us to use the functions that are part of that module, including the square root function (
m.sqrt()
).

## Match 1.55 — LibreTexts: 4.1: Modular Programming
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Butte_College/Intro_to_Programming_with_Programming_Fundamentals_and_Python_for_Everyone/04%3A_Functions_and_Events/4.01%3A_Modular_Programming

4.1: Modular Programming
-
- Last updated
- Save as PDF
Overview
Modular programming is a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality. [1]
Concept of Modularization
One of the most important concepts of programming is the ability to group some lines of code into a unit that can be included in our program. The original wording for this was a sub-program. Other names include: macro, sub-routine, procedure, module and function. We are going to use the term function for that is what they are called in most of the predominant programming languages of today. Functions are important because they allow us to take large complicated programs and to divide them into smaller manageable pieces. Because the function is a smaller piece of the overall program, we can concentrate on what we want it to do and test it to make sure it works properly. Generally, functions fall into two categories:
- Program Control – Functions used to simply sub-divide and control the program. These functions are unique to the program being written. Other programs may use similar functions, maybe even functions with the same name, but the content of the functions are almost always very different.
- Specific Task – Functions designed to be used with several programs. These functions perform a specific task and thus are usable in many different programs because the other programs also need to do the specific task. Specific task functions are sometimes referred to as building blocks. Because they are already coded and tested, we can use them with confidence to more efficiently write a large program.
The main program must establish the existence of functions used in that program. Depending on the programming language, there is a formal way to:
- define a function (its definition or the code it will execute)
- call a function
- declare a function (a prototype is a declaration to a compiler)
Program Control functions normally do not communicate information to each other but use a common area for variable storage. Specific Task functions are constructed so that data can be communicated between the calling program piece (which is usually another function) and the function being called. This ability to communicate data is what allows us to build a specific task function that may be used in many programs. The rules for how the data is communicated in and out of a function vary greatly by programming language, but the concept is the same. The data items passed (or communicated) are called parameters. Thus the wording: parameter passing . The four data communication options include:
- no communication in with no communication out
- no communication in with some communication out
- some communication in with some communication out
- some communication in with no communication out
Program Control Function
The main program piece in many programming languages is a special function with the identifier name of main. The special or uniqueness of main as a function is that this is where the program starts executing code and this is where it usually stops executing code. It is often the first function defined in a program and appears after the area used for includes, other technical items, declaration of prototypes, the listing of global constants and variables and any other items generally needed by the program. The code to define the function main is provided; however, it is not prototyped or usually called like other functions within a program.
Specific Task Function
We often have the need to perform a specific task that might be used in many programs.
General layout of a function in a statically-typed language such as C++, C#, and Java:
<return value data type> function identifier name(<data type> <identifier name for input value>) { //lines of code; return <value>; }
General layout of a function in a dynamically typed language such as JavaScript and Python:
function identifier name(<identifier name for input value>) { //lines of code; return <value>; } def function identifier name(<identifier name for input value>): //lines of code return <value>
In some programming languages, functions have a set of braces {} used for identifying a group or block of statements or lines of code. Other languages use indenting or some type of begin and end statements to identify a code block. There are normally several lines of code within a function.
Programming languages will either have specific task functions defined before or after the main function, depending on coding conventions for the given language.
When you call a function you use its identifier name and a set of parentheses. You place any data items you are passing inside the parentheses. After our program is compiled and running, the lines of code in the main function are executed, and when it gets to the calling of a specific task function, the control of the program moves to the function and starts executing the lines of code in the function. When it’s done with the lines of code, it will return to the place in the program that called it (in our example the function main) and continue with the code in that function.
Program Layout
Most programs have several items before the functions, including:
- Documentation – Most programs have a comment area at the start of the program with a variety of comments pertinent to the program.
- Include or import statements used to access standard library functions.
- Language-specific code such as namespace references or function prototypes.
- Global or module-level constants and variables, when required.
Key Terms
- braces
- Used to identify a block of code in languages such as C++, C#, Java, and JavaScript.
- function
- What modules are called in many predominant programming languages of today.
- function call
- A function’s using or invoking of another function.
- function definition
- The code that defines what a function does.
- function prototype
- A function’s communications declaration to a compiler.
- identifier name
- The name given by the programmer to identify a function or other program items such as variables.
- modularization
- The ability to group some lines of code into a unit that can be included in our program.
- parameter passing
- How the data is communicated in to and out of a function.
- program control
- Functions used to simply subdivide and control the program.
- specific task
- Functions designed to be used with several programs.
