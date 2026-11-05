# Source pack — subjects/sports-science/advanced/periodisation-and-programming
Lesson title: Periodisation & Programming
Level: advanced
Match confidence: 1.54

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.54 — LibreTexts: 4.3: Linear Programming - Maximization Applications
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Under_Construction/Purgatory/MAT_1320_Finite_Mathematics/04%3A_Solving_Systems_of_Inequalities/4.03%3A_Linear_Programming_-_Maximization_Applications

4.3: Linear Programming - Maximization Applications
Learning Objectives
In this section, you will learn to:
- Recognize the typical form of a linear programming problem.
- Formulate maximization linear programming problems.
- Graph feasible regions for maximization linear programming problems.
- Determine optimal solutions for maximization linear programming problems.
Prerequisite Skills
Before you get started, take this prerequisite quiz.
1. Graph this system of inequalities:
\(\left\{\begin{array} {l} 2x+4y\leq 10\\3x−5y<15\end{array}\right.\)
- Click here to check your answer
-
If you missed this problem, review Section 4.2 . (Note that this will open in a new window.)
2. Graph this system of inequalities:
\(\left\{\begin{array} {l} y\leq 2x+1\\y\leq-3x+6\\x\geq0\\y\geq0\end{array}\right.\)
- Click here to check your answer
-
(The solution is in the center region.)
If you missed this problem, review Section 4.2 . (Note that this will open in a new window.)
Application problems in business, economics, and social and life sciences often ask us to make decisions on the basis of certain conditions. The conditions or constraints often take the form of inequalities. In this section, we will begin to formulate, analyze, and solve such problems, at a simple level, to understand the many components of such a problem.
A typical linear programming problem consists of finding an extreme value of a linear function subject to certain constraints. We are either trying to maximize or minimize the value of this linear function, such as to maximize profit or revenue, or to minimize cost. That is why these linear programming problems are classified as maximization or minimization problems , or just optimization problems . The function we are trying to optimize is called an objective function , and the conditions that must be satisfied are called constraints .
When we graph all constraints, the area of the graph that satisfies all constraints is called the feasible region . The Fundamental Theorem of Linear Programming states that the maximum (or minimum) value of the objective function always takes place at the vertices of the feasible region. We call these vertices critical points. These are found using any methods from Chapter 3 as we are looking for the points where any two of the boundary lines intersect.
A typical example is to maximize profit from producing several products, subject to limitations on materials or resources needed for producing these items; the problem requires us to determine the amount of each item produced. Another type of problem involves scheduling; we need to determine how much time to devote to each of several activities in order to maximize income from (or minimize cost of) these activities, subject to limitations on time and other resources available for each activity.
In this chapter, we will work with problems that involve only two variables, and therefore, can be solved by graphing. Here are the steps we'll follow:
The Maximization Linear Programming Problems
- Define the unknowns.
- Write the objective function that needs to be maximized.
-
Write the constraints.
- For the standard maximization linear programming problems, constraints are of the form: \(ax + by ≤ c\)
- Since the variables are non-negative, we include the constraints: \(x ≥ 0\); \(y ≥ 0\).
- Graph the constraints.
- Shade the feasible region.
- Find the corner points.
- Find the value of the objective function at each corner point to determine the corner point that gives the maximum value.
Example \(\PageIndex{1}\)
Niki holds two part-time jobs, Job I and Job II. She never wants to work more than a total of 12 hours a week. She has determined that for every hour she works at Job I, she needs 2 hours of preparation time, and for every hour she works at Job II, she needs one hour of preparation time, and she cannot spend more than 16 hours for preparation.
If Niki makes $40 an hour at Job I, and $30 an hour at Job II, how many hours should she work per week at each job to maximize her income?
Solution
We start by defining our unknowns.
- Let the number of hours per week Niki will work at Job I = \(x\).
- Let the number of hours per week Niki will work at Job II = \(y\).
Now we write the objective function. Since Niki gets paid $40 an hour at Job I, and $30 an hour at Job II, her total income I is given by the following equation.
\[I = 40x + 30y \nonumber\]
Our next task is to find the constraints. The second sentence in the problem states, "She never wants to work more than a total of 12 hours a week." This translates into the following constraint:
\[x + y \leq 12 \nonumber \]
The third sentence states, "For every hour she works at Job I, she needs 2 hours of preparation time, and for every hour she works at Job II, she needs one hour of preparation time, and she cannot spend more than 16 hours for preparation." The translation follows.
\[2x + y \leq 16 \nonumber\]
The fact that \(x\) and \(y\) can never be negative is represented by the following two constraints:
\[x \geq 0 \text{, and } y \geq 0 \nonumber.\]
Well, good news! We have formulated the problem. We restate it as
\[\begin{array}{ll}
\textbf { Maximize } & \mathrm{I}=40 \mathrm{x}+30 \mathrm{y} \\
\textbf { Subject to: } & \mathrm{x}+\mathrm{y} \leq 12 \\
& 2 \mathrm{x}+\mathrm{y} \leq 16 \\
& \mathrm{x} \geq 0 ; \mathrm{y} \geq 0
\end{array}\nonumber\]
In order to solve the problem, we graph the constraints and shade the region that satisfies all the inequality constraints.
Any appropriate method can be used to graph the lines for the constraints. However often the easiest method is to graph the line by plotting the x-intercept and y-intercept.
The line for a constraint will divide the plane into two region, one of which satisfies the inequality part of the constraint. A test point is used to determine which portion of the plane to shade to satisfy the inequality. Any point on the plane that is not on the line can be used as a test point.
- If the test point satisfies the inequality, then the region of the plane that satisfies the inequality is the region that contains the test point.
- If the test point does not satisfy the inequality, then the region that satisfies the inequality lies on the opposite side of the line from the test point.
In the graph below, after the lines representing the constraints were graphed, the point (0,0) was used as a test point to determine that
- (0,0) satisfies the constraint \(x + y \leq 12\) because \(0 + 0 < 12\)
- (0,0) satisfies the constraint \(2x + y \leq 16\) because \(2(0) + 0 < 16\)
Therefore, in this example, we shade the region that is below and to the left of both constraint lines, but also above the x axis and to the right of the y axis, in order to further satisfy the constraints \(x \geq 0\) and \(y \geq 0\).
The shaded region where all conditions are satisfied is the feasible region or the feasible polygon.
The Fundamental Theorem of Linear Programming states that the maximum (or minimum) value of the objective function always takes place at the vertices of the feasible region.
Therefore, we will identify all the vertices (corner points) of the feasible region. These are found using any methods from Chapter 3 as we are looking for the points where any two of the boundary lines intersect. They are listed as (0, 0), (0, 12), (4, 8), (8, 0). To maximize Niki's income, we will substitute these points in the objective function to see which point gives us the highest income per week. We list the results below.
| Critical Points | Income |
|---|---|
| (0, 0) | 40(0) + 30(0) = $0 |
| (0, 12) | 40(0) + 30(12) = $360 |
| (4, 8) | 40(4) + 30(8) = $400 |
| (8, 0) | 40(8) + 30(0) = $320 |
Clearly, the point (4, 8) gives the most profit: $400.
Therefore, we conclude that Niki should work 4 hours at Job I, and 8 hours at Job II.
Example \(\PageIndex{2}\)
A factory manufactures two types of gadgets, regular and premium. Each gadget requires the use of two operations, assembly and finishing, and there are at most 12 hours available for each operation. A regular gadget requires 1 hour of assembly and 2 hours of finishing, while a premium gadget needs 2 hours of assembly and 1 hour of finishing. Due to other restrictions, the company can make at most 7 gadgets a day. If a profit of $20 is realized for each regular gadget and $30 for a premium gadget, how many of each should be manufactured to maximize profit?
Solution
We define our unknowns:
- Let the number of regular gadgets manufactured each day = \(x\).
- and the number of premium gadgets manufactured each day = \(y\).
The objective function is
\[P = 20x + 30y \nonumber\]
We now write the constraints. The fourth sentence states that the company can make at most 7 gadgets a day. This translates as
\[x + y \leq 7 \nonumber\]
Since the regular gadget requires one hour of assembly and the premium gadget requires two hours of assembly, and there are at most 12 hours available for this operation, we get
\[x + 2y \leq 12 \nonumber\]
Similarly, the regular gadget requires two hours of finishing and the premium gadget one hour. Again, there are at most 12 hours available for finishing. This gives us the following constraint.
\[2x + y \leq 12 \nonumber \]
The fact that \(x\) and \(y\) can never be negative is represented by the following two constraints:
\[x \geq 0 \text{, and } y \geq 0 \nonumber.\]
We have formulated the problem as follows:
\[\begin{array}{ll}
\textbf { Maximize } & \mathrm{P}=20 \mathrm{x}+30 \mathrm{y} \\
\textbf { Subject to: } & \mathrm{x}+\mathrm{y} \leq 7 \\
& \mathrm{x}+2\mathrm{y} \leq 12 \\
& 2\mathrm{x} +\mathrm{y} \leq 12 \\
& \mathrm{x} \geq 0 ; \mathrm{y} \geq 0
\end{array} \nonumber\]
In order to solve the problem, we next graph the constraints and feasible region.
Again, we have shaded the feasible region, where all constraints are satisfied.
Since the extreme value of the objective function always takes place at the vertices of the feasible region, we identify all the critical points. They are listed as (0, 0), (0, 6), (2, 5), (5, 2), and (6, 0). To maximize profit, we will substitute these points in the objective function to see which point gives us the maximum profit each day. The results are listed below.
| Critical Point | Income |
|---|---|
| (0, 0) | 20(0) + 30(0) = $0 |
|
(0, 6) |
20(0) + 30(6) = $180 |
|
(2, 5) |
20(2) + 30(5) = $190 |
|
(5, 2) |
20(5) + 30(2) = $160 |
| (6,0) |
20(6) + 30(0) = $120 |
The point (2, 5) gives the most profit, and that profit is $190.
Therefore, we conclude that we should manufacture 2 regular gadgets and 5 premium gadgets daily to obtain the maximum profit of $190.
So far we have focused on “ standard maximization problems ” in which
- The objective function is to be maximized
- All constraints are of the form \(ax + by \leq c\)
- All variables are constrained to by non-negative (\(x ≥ 0\), \(y ≥ 0\))
We will next consider an example where that is not the case. Our next problem is said to have “ mixed constraints ”, since some of the inequality constraints are of the form \(ax + by ≤ c\) and some are of the form \(ax + by ≥ c\). The non-negativity constraints are still an important requirement in any linear program.
Example \(\PageIndex{3}\)
Solve the following maximization problem graphically.
\[\begin{array}{ll}
\textbf { Maximize } & \mathrm{P}=10 \mathrm{x}+15 \mathrm{y} \\
\textbf { Subject to: } & \mathrm{x}+\mathrm{y} \geq 1 \\
& \mathrm{x}+2\mathrm{y} \leq 6 \\
& 2\mathrm{x} +\mathrm{y} \leq 6 \\
& \mathrm{x} \geq 0 ; \mathrm{y} \geq 0
\end{array} \nonumber\]
Solution
The graph is shown below.
The five critical points are listed in the above figure. The reader should observe that the first constraint \(x + y ≥ 1\) requires that the feasible region must be bounded below by the line \(x + y =1\); the test point (0,0) does not satisfy \(x + y ≥ 1\), so we shade the region on the opposite side of the line from test point (0,0).
| Critical point | Income |
|---|---|
| (1, 0) 

## Match 1.53 — LibreTexts: 28: The Python Programming Language
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Courses/Berea_College/Introductory_Physics%3A_Berea_College/28%3A_The_Python_Programming_Language

28: The Python Programming Language
This appendix gives a very brief introduction to programming in python and is primarily aimed at introducing tools that are useful for the experimental side of physics.
- Be able to perform simple algebra using python.
- Be able to plot a function in python.
- Be able to propagate uncertainties in python.
- Be able to plot and fit data to a straight line.
- Understand how to use Python to numerically calculate any integral.
In this textbook, we will encourage you to use computers to facilitate making calculations and displaying data. We will make use of a popular programming language called Python, as well as several “modules” from Python that facilitate working with numbers and data. Do not worry if you do not have any programming experience; we assume that you have none and hope that by the end of this book, you will have some capability to decrease your workload by using computer programming.
The only way to become proficient at programming is through practice. If you want to effectively learn from this chapter, it is important that you take the time to actually type the commands into a Python environment rather than simply reading through the chapter. Reading through the chapter will at least give you a sense of what is possible and some terminology, but it will not teach you programming!

## Match 1.53 — LibreTexts: 9.1: Introduction to Linear Programming Applications in Business, Finance, Medicine, and Social Science
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Courses/Fresno_City_College/New_FCC_DS_21_Finite_Mathematics_-_Spring_2023/09%3A_Linear_Programming_-_The_Simplex_Method/9.01%3A_Introduction_to_Linear_Programming_Applications_in_Business_Finance_Medicine_and_Social_Science

9.1: Introduction to Linear Programming Applications in Business, Finance, Medicine, and Social Science
In this section, you will learn about real-world applications of linear programming and related methods.
The linear programs we solved in Chapter 7 contain only two variables, \(x\) and \(y\), so that we could solve them graphically. In practice, linear programs can contain thousands of variables and constraints. Later in this chapter, we’ll learn to solve linear programs with more than two variables using the simplex algorithm, which is a numerical solution method that uses matrices and row operations. However, in order to make the problems practical for learning purposes, our problems will still have only several variables. Now that we understand the main concepts behind linear programming, we can also consider how linear programming is currently used in large-scale real-world applications.
Linear programming is used in business and industry in production planning, transportation and routing, and various types of scheduling. Airlines use linear programs to schedule their flights, taking into account both scheduling aircraft and scheduling staff. Delivery services use linear programs to schedule and route shipments to minimize shipment time or minimize cost. Retailers use linear programs to determine how to order products from manufacturers and organize deliveries with their stores. Manufacturing companies use linear programming to plan and schedule production. Financial institutions use linear programming to determine the mix of financial products they offer, or to schedule payments transferring funds between institutions. Health-care institutions use linear programming to ensure the proper supplies are available when needed. And as we’ll see below, linear programming has also been used to organize and coordinate life-saving health care procedures.
In some of the applications, the techniques used are related to linear programming but are more sophisticated than the methods we study in this class. One such technique is called integer programming. In these situations, answers must be integers to make sense, and can not be fractions. Problems, where solutions must be integers, are more difficult to solve than the linear programs we’ve worked with. In fact, many of our problems have been very carefully constructed for learning purposes so that the answers just happen to turn out to be integers, but in the real world unless we specify that as a restriction, there is no guarantee that a linear program will produce integer solutions. There are also related techniques that are called non-linear programs, where the functions defining the objective function and/or some or all of the constraints may be non-linear rather than straight lines.
Many large businesses that use linear programming and related methods have analysts on their staff who can perform the analyses needed, including linear programming and other mathematical techniques. Consulting firms specializing in use of such techniques also aid businesses who need to apply these methods to their planning and scheduling processes.
When used in business, many different terms may be used to describe the use of techniques such as linear programming as part of mathematical business models. Optimization, operations research, business analytics, data science, industrial engineering hand management science are among the terms used to describe mathematical modeling techniques that may include linear programming and related met
In the rest of this section, we’ll explore six real-world applications, and investigate what they are trying to accomplish using optimization, as well as what their constraints might represent.
Airline Scheduling
Airlines use techniques that include and are related to linear programming to schedule their aircrafts to flights on various routes, and to schedule crews to the flights. In addition, airlines also use linear programming to determine ticket pricing for various types of seats and levels of service or amenities, as well as the timing at which ticket prices change.
The process of scheduling aircraft and departure times on flight routes can be expressed as a model that minimizes cost, of which the largest component is generally fuel costs.
Constraints involve considerations such as:
- Each aircraft needs to complete a daily or weekly tour to return back to its point of origin.
- Scheduling sufficient flights to meet demand on each route.
- Scheduling the right type and size of aircraft on each route to be appropriate for the route and for the demand for number of passengers.
- Aircraft must be compatible with the airports it departs from and arrives at - not all airports can handle all types of planes.
A model to accomplish this could contain thousands of variables and constraints. Highly trained analysts determine ways to translate all the constraints into mathematical inequalities or equations to put into the model.
After aircraft are scheduled, crews need to be assigned to flights. Each flight needs a pilot, a co-pilot, and flight attendants. Each crew member needs to complete a daily or weekly tour to return back to his or her home base. Additional constraints on flight crew assignments take into account factors such as:
- Pilot and co-pilot qualifications to fly the particular type of aircraft they are assigned to
- Flight crew have restrictions on the maximum amount of flying time per day and the length of mandatory rest periods between flights or per day that must meet certain minimum rest time regulations.
- Numbers of crew members required for a particular type or size of aircraft.
When scheduling crews to flights, the objective function would seek to minimize total flight crew costs, determined by the number of people on the crew and pay rates of the crew members. However, the cost for any particular route might not end up being the lowest possible for that route, depending on tradeoffs to the total cost of shifting different crews to different routes.
An airline can also use linear programming to revise schedules on short notice on an emergency basis when there is a schedule disruption, such as due to weather. In this case the considerations to be managed involve:
- Getting aircrafts and crews back on schedule as quickly as possible
- Moving aircraft from storm areas to areas with calm weather to keep the aircraft safe from damage and ready to come back into service as quickly and conveniently as possible
- Ensuring crews are available to operate the aircraft and that crews continue to meet mandatory rest period requirements and regulations.
Kidney Donation Chain
For patients who have kidney disease, a transplant of a healthy kidney from a living donor can often be a lifesaving procedure. Criteria for a kidney donation procedure include the availability of a donor who is healthy enough to donate a kidney, as well as a compatible match between the patient and donor for blood type and several other characteristics. Ideally, if a patient needs a kidney donation, a close relative may be a match and can be the kidney donor. However often there is not a relative who is a close enough match to be the donor. Considering donations from unrelated donor allows for a larger pool of potential donors. Kidney donations involving unrelated donors can sometimes be arranged through a chain of donations that pair patients with donors. For example a kidney donation chain with three donors might operate as follows:
- Donor A donates a kidney to Patient B.
- Donor B, who is related to Patient B, donates a kidney to Patient C.
- Donor C, who is related to Patient C, donates a kidney to Patient A, who is related to Donor A.
Linear programming is one of several mathematical tools that have been used to help efficiently identify a kidney donation chain. In this type of model, patient/donor pairs are assigned compatibility scores based on characteristics of patients and potential donors.
The objective is to maximize the total compatibility scores. Constraints ensure that donors and patients are paired only if compatibility scores are sufficiently high to indicate an acceptable match.
Advertisements in Online Marketing
Did you ever make a purchase online and then notice that as you browse websites, search, or use social media, you now see more ads related the item you purchased?
Marketing organizations use a variety of mathematical techniques, including linear programming, to determine individualized advertising placement purchases.
Instead of advertising randomly, online advertisers want to sell bundles of advertisements related to a particular product to batches of users who are more likely to purchase that product. Based on an individual’s previous browsing and purchase selections, he or she is assigned a “propensity score” for making a purchase if shown an ad for a certain product. The company placing the ad generally does not know individual personal information based on the history of items viewed and purchased, but instead has aggregated information for groups of individuals based on what they view or purchase. However, the company may know more about an individual’s history if he or she logged into a website making that information identifiable, within the privacy provisions and terms of use of the site.
The company’s goal is to buy ads to present to specified size batches of people who are browsing. The linear program would assign ads and batches of people to view the ads using an objective function that seeks to maximize advertising response modeled using the propensity scores. The constraints are to stay within the restrictions of the advertising budget.
Loans
A car manufacturer sells its cars through dealers. Dealers can offer loan financing to customers who need to take out loans to purchase a car. Here we will consider how car manufacturers can use linear programming to determine the specific characteristics of the loan they offer to a customer who purchases a car. In a past chapter, we will learn how to do the financial calculations related to loans.
A customer who applies for a car loan fills out an application. This provides the car dealer with information about that customer. In addition, the car dealer can access a credit bureau to obtain information about a customer’s credit score.
Based on this information obtained about the customer, the car dealer offers a loan with certain characteristics, such as interest rate, loan amount, and length of loan repayment period.
Linear programming can be used as part of the process to determine the characteristics of the loan offer. The linear program seeks to maximize the profitability of its portfolio of loans. The constraints limit the risk that the customer will default and will not repay the loan. The constraints also seek to minimize the risk of losing the loan customer if the conditions of the loan are not favorable enough; otherwise, the customer may find another lender, such as a bank, which can offer a more favorable loan.
Production Planning and Scheduling in Manufacturing
Consider the example of a company that produces yogurt. There are different varieties of yogurt products in a variety of flavors. Yogurt products have a short shelf life; it must be produced on a timely basis to meet demand, rather than drawing upon a stockpile of inventory as can be done with a product that is not perishable. Most ingredients in yogurt also have a short shelf life, so can not be ordered and stored for long periods of time before use; ingredients must be obtained in a timely manner to be available when needed but still be fresh. Linear programming can be used in both production planning and scheduling.
To start the process, sales forecasts are developed to determine demand to know how much of each type of product to make.
There are often various manufacturing plants at which the products may be produced. The appropriate ingredients need to be at the production facili
