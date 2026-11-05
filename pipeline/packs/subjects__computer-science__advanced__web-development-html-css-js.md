# Source pack — subjects/computer-science/advanced/web-development-html-css-js
Lesson title: Web Development: HTML, CSS, JS
Level: advanced
Match confidence: 2.04

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.04 — LibreTexts: 10.3: Software Development
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://workforce.libretexts.org/Courses/Evergreen_Valley_College/Information_Systems_for_Business_(Revised_1st_Edition_2021)/02%3A_Information_Systems_for_Strategic_Advantage/10%3A_Information_Systems_Development/10.03%3A_Software_Development

10.3: Software Development
-
- Last updated
- Save as PDF
- Ly-Huong T. Pham, Tejal Desai-Naik, Laurie Hammond, & Wael Abdeljabbar
- ASCCC Open Educational Resources Initiative (OERI)
Software Development
Many of the methodologies discussed above are used to manage software development since programming is complex, and sometimes errors are hard to detect. We learned in chapter 2 that software is created via programming, and programming is the process of creating a set of logical instructions for a digital device to follow using a programming language. The programming process is sometimes called “coding” because the syntax of a programming language is not in a form that everyone can understand – it is in “code.”
The process of developing good software is usually not as simple as sitting down and writing some code. True, sometimes a programmer can quickly write a short program to solve a need. But most of the time, the creation of software is a resource-intensive process that involves several different groups of people in an organization. In the following sections, we are going to review several different methodologies for software development.
Sidebar: The project management quality triangle
When developing software or any product or service, there is tension between the developers and the different stakeholder groups, such as management, users, and investors. Fig. 10.5 illustrates the tension of the three requirements: time, cost, and quality that project managers need to make tradeoffs in. From how quickly the software can be developed (time), to how much money will be spent (cost), to how well it will be built (quality). The quality triangle is a simple concept. It states that you can only address two of the following: time, cost, and quality for any product or service being developed.
So what does it mean that you can only address two of the three? It means that the finished product's quality depends on the three variables: scope, schedule, and the allocated budget. Changes in any of these three variables affect the other two, hence, the quality.
For example, if a feature is added, but no additional time is added to the schedule to develop and test, the code's quality may suffer, even if more money is added. There are times when it is not even feasible to make the tradeoff. For example, adding more people to a project where members are so overwhelmed that they don’t have time to manage or train new people. Overall, this model helps us understand the tradeoffs we must make when developing new products and services.
Programming Languages
One of the important decisions that a project team needs to make is to decide which programming language(s) are to be used and associated tools in the development process. As mentioned in chapter 3, software developers create software using one of several programming languages. A programming language is a formal language that provides a way for a programmer to create structured code to communicate logic in a format that the computer hardware can execute. Over the past few decades, many different programming languages have evolved to meet many different needs.
There is no one way to categorize the languages. Still, they are often grouped by type (i.e., query, scripting), or chronologically by year when it was introduced (i.,e. Fortran was introduced in 1954s), by their “generation,” by how it was translated to the machine code, or how it was executed. We will discuss a few categories in this chapter.
Generations of Programming Languages
Early languages were specific to the type of hardware that had to be programmed; each type of computer hardware had a different low-level programming language (in fact, even today, there are differences at the lower level, though higher-level programming languages now obscure them). In these early languages, precise instructions had to be entered line by line – a tedious process.
Some common characteristics are summarized below to illustrate some differences among these generations:
|
First-generation (1GL) |
Second-generation (2GL) |
Third-generation (3GL) |
Fourth-generation (4GL) |
Fifth-generation (5GL) |
|
|---|---|---|---|---|---|
|
Time introduced (est). |
1940s or earlier |
1950s |
1950s-1970s |
1970s-1990s |
1980s-1900s |
|
Instructions |
They are made of binary numbers of 0s and 1s |
Use a set of syntax that is readable by human and programmers |
The syntax is more structured and is made up of more human-like language |
The syntax is friendly to non-programmers |
Still in progress. |
|
Category |
Machine dependent Machine code |
Machine dependent Low level, Assembly Languages |
Machine independent High Level |
Machine independent High-level abstraction, Advanced 3GLs |
Logic programming |
|
Advantage |
Very fast, no need for ‘translation’ to 0s and 1s |
Code can be read and written by programmers easier than learning machine code |
More machine-independent More friendly to programmers General-purpose |
Easy to learn |
May not need programmers to write programs |
|
Disadvantage |
Machine dependent, not portable |
Must be converted to machine code, still machine-dependent |
May go multiple steps to translate to machine code |
More specialized |
Still early in the adoption phase |
|
Today’s usage |
If needed to interact with hardware directly such as drivers (i.e., USB driver) |
If needed to interact with hardware directly such as drivers (i.e., USB driver) |
Modern 3GLs are more commonly used. Early 3GLs are used to maintain existing business programs or scientific programs |
Database, web development |
Limited Visual tools, Artificial intelligence research |
|
Examples |
Machine language |
Assembly language |
Early 3GLs: COBOL, Fortran Modern 3PLs: C, C++, Java, Javascript |
Perl, PhP, Python, SQL, Ruby |
Mercury, OPS5 |
Statista.com reported that by early 2020, Javascript was the most used language among developers worldwide. To see the complete list, please v isit Statista.com for more details.
Sidebar: Examples of languages
First-generation language: machine code. In machine code, programming is done by directly setting actual ones and zeroes (the bits) using binary code. Here is an example program that
adds 1234 and 4321 using machine language:
|
10111001 |
00000000 |
|
11010010 |
10100001 |
|
00000100 |
00000000 |
|
10001001 |
00000000 |
|
00001110 |
10001011 |
|
00000000 |
00011110 |
|
00000000 |
00011110 |
|
00000000 |
00000010 |
|
10111001 |
00000000 |
|
11100001 |
00000011 |
|
00010000 |
11000011 |
|
10001001 |
10100011 |
|
00001110 |
00000100 |
|
00000010 |
00000000 |
Second-generation language . Assembly language gives English-like phrases to the machine-code instructions, making it easier to program. An assembly-language program must be run through an assembler, which converts it into machine code. Here is an example program that adds 1234 and 4321 using assembly language:
MOV CX,1234 MOV DS:[0],CX MOV CX,4321 MOV AX,DS:[0]
MOV BX,DS:[2] ADD AX,BX
MOV DS:[4],AX
Third-generation languages are not specific to the type of hardware they run and are much more like spoken languages. Most third-generation languages must be compiled, a process that converts them into machine code. Well-known third-generation languages include BASIC, C, Pascal, and Java. Here is an example using BASIC:
A=1234 B=4321 C=A+B END
Fourth-generation languages are a class of programming tools that enable fast application development using intuitive interfaces and environments. Many times, a fourth-generation language has a particular purpose, such as database interaction or report-writing. These tools can be used by those with very little formal training in programming and allow for the quick development of applications and/or functionality. Examples of fourth-generation languages include Clipper, FOCUS, FoxPro, SQL, and SPSS.
Why would anyone want to program in a lower-level language when they require so much more work? The answer is similar to why some prefer to drive stick-shift automobiles instead of automatic transmission: control and efficiency. Lower-level languages, such as assembly language, are much more efficient and execute much more quickly. You have finer control over the hardware as well. Sometimes, a combination of higher- and lower-level languages is mixed together to get the best of both worlds: the programmer will create the overall structure and interface using a higher-level language but will use lower-level languages wherever in the program that requires more precision.
Compiled vs. Interpreted
Besides classifying a programming language based on its generation, it can also be classified as compiled or interpreted language. As we have learned, a computer language is written in a human-readable form. In a compiled language, the program code is translated into a machine-readable form called an executable that can be run on the hardware. Some well-known compiled languages include C, C++, and COBOL.
An interpreted language requires a runtime program to be installed to execute. This runtime program then interprets the program code line by line and runs it. Interpreted languages are generally easier to work with but are slower and require more system resources. Examples of popular interpreted languages include BASIC, PHP, PERL, and Python. The web languages such as HTML and Javascript would also be considered interpreted because they require a browser to run.
The Java programming language is an interesting exception to this classification, as it is actually a hybrid of the two. A program written in Java is partially compiled to create a program that can be understood by the Java Virtual Machine (JVM). Each type of operating system has its own JVM, which must be installed, allowing Java programs to run on many different types of operating systems.
Procedural vs. Object-Oriented
A procedural programming language is designed to allow a programmer to define a specific starting point for the program and then execute sequentially. All early programming languages worked this way. As user interfaces became more interactive and graphical, it made sense for programming languages to evolve to allow the user to define the program's flow. The object-oriented programming language is set up to define “objects” that can take certain actions based on user input. In other words, a procedural program focuses on the sequence of activities to be performed; an object-oriented program focuses on the different items being manipulated.
For example, in a human-resources system, an “EMPLOYEE” object would be needed. If the program needed to retrieve or set data regarding an employee, it would first create an employee object in the program and then set or retrieve the values needed. Every object has properties, which are descriptive fields associated with the object. In the example below, an employee object has the properties “Name,” “Employee number,” “Birthdate,” and “Date of hire.” An object also has “methods,” which can take actions related to the object. In the example, there are two methods. The first is “ComputePay(),” which will return the current amount owed to the employee. The second is “ListEmployees(),” which will retrieve a list of employees who report to this employee.
Employee Object
|
Object: EMPLOYEE |
|
First_Name Last_Name Employee_ID Birthdate Date_of_hire |
|
ComputePay() ListEmployees() |
Programming Tools
Another decision that needs to be made during the development of an IS is the set of tools needed to write programs. To write programs, programmers need tools to enter code, check for the code's syntax, and some method to translate their code into machine code. To be more efficient at programming, programmers use integrated tools such as an integrated development environment (IDE) or computer-aided software-engineering (CASE) tools.
Integrated Development Environment (IDE)
For most programming languages, an IDE can be used. An IDE provides various tools for the programmer, all in one place with a consist

## Match 2.04 — LibreTexts: 7.4: Course Development
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://socialsci.libretexts.org/Bookshelves/Education_and_Professional_Development/Book%3A_Education_for_a_Digital_World_-_Advice_Guidelines_and_Effective_Practice_from_Around_Globe_(Hirtz)/07%3A_Untitled_Chapter_7/7.4%3A_Course_Development

7.4: Course Development
-
- Last updated
- Save as PDF
Course development is also referred to as course authoring. Courses made available on the Web are simply collections of web pages designed to help people learn. They may be a group of resources to which a learner is referred, or they may be carefully crafted sequences of learning events that include interactivity, tests and assessments, animations, screen simulations, video, and audio. It is possible to create web-based learning courses by using templates or by programming directly in HTML or Flash but there are course authoring tools available which are designed to simplify the process.
In education LMSs some course authoring capability is usually included. Some instructors may prefer to use additional tools. Course authoring is not usually included in corporate LMSs, but is available separately. as part of an LCMS or as part of a suite of products.
Course authoring tools like Adobe/Macromedia Authorware and SumTotal ToolBook have been around since before the World Wide Web, and have evolved with it. Not all the tools do everything. The more complex ones require considerable expertise and can benefit from programming experience. Simpler ones are easier to use but may be somewhat limited in capability. Some are tools for converting PowerPoint presentations or Word documents to web code. They are often referred to as “rapid e-learning” development tools. Others are specialized to produce software simulations, or tests, and assessments.
In education LMSs course development tools provide the means for teachers to perform the following types of activities:
- Provide and organize resources related to the learning objectives: Most education solutions allow instructors to create simple text pages or web pages. These can be used for a syllabus, a project outline, assignment instructions, grading guidelines, and much more. LMSs usually provide support for multi-media materials such as video and audio streaming or modules or simulations built in other software tools. If instructors are using tools such as Dreamweaver, Flash, or other authoring tools, it is important to obtain an LMS that supports the code generated by these products particularly for any rich media, interactivity, and for recording scores on tests.
- Set up communication tools for the students to use: LMSs often give instructors and students the ability to send email to one another via the LMS. Instructors can also set up group areas, discussion forums, wikis, and other tools to allow students to communicate about general topics with little to no facilitation by the instructor or teaching assistant. For example, you can use a discussion forum as a way for students to introduce themselves, to provide technical support to each other, or to continue an interesting discussion if you run out of time in the classroom. Many LMSs also provide a calendar to which students, instructors, and the LMS itself can add events. Students can schedule study groups, instructors can remind students of special events such as field trips, and the LMS itself will mark events such as quiz dates or assignment due dates.
- Facilitate and manage online interactivity related to the learning objectives: Those same communication tools, and several others, can be used to facilitate online interactivity related to coursework. Depending on the LMS, instructors can use single-question polls to gauge student attitudes or knowledge about a reading, discussion forums to have students analyze a lab procedure before entering the lab, wikis to have students collaboratively solve a problem or work on a project, or chat to let small groups discuss required field work in real time.
- Assess student performance (skills, knowledge, and attitudes): LMSs provide avenues for students to submit assignments and for instructors to evaluate different types of student performance. For example, students can submit written essays in several ways, including, but not limited to, digital drop boxes, discussion forum threads, discussion forum attachments, wikis, or “assignment” modules. Instructors can require students to use different submission pathways to create different types of assignments. You might use a discussion forum to allow peer review, wikis to engage students in collaborative writing exercises, or assignment modules to make it easy to collect all the essays. LMSs usually provide tools for creating and delivering quizzes as part of the courses. Instructors may also use other tools for this purpose such as Questionmark Perception, Respondus, Hot Potatoes, and test banks that publishers provide. If you plan to use these tools, it is important to be sure that your LMS can work with the code generated by these third-party software solutions.
- Assess teaching effectiveness: Many LMSs contain survey tools to allow instructors to collect feedback about specific topics, including teaching effectiveness (see Chapter 24, Evaluating and Improving Your Online Teaching Effectiveness, for more information on this topic). The different LMSs vary the possibilities for instructors and students. Some allow anonymous student responses and some contain specific survey instruments for teaching effectiveness. If the LMS does not do everything you want, you can always link to an external survey tool on the Web. For example, the Free Assessment Summary Tool ( http://getfast.ca ) allows instructors to use a database of more than 350 teaching effectiveness questions, to create twenty questions per survey, and to download the results as an Excel spreadsheet, all for free.
Tip
Be sure your LMS will work with the additional tools that instructors are likely to use for course development.
Course Development in Corporate LMSs
Course authoring tools are not usually included as part of a corporate LMS, but are available separately or as part of an LCMS.
For corporate training there is a strong reliance on pre-packaged, self-directed courses. These can be purchased from third-party vendors like Skillsoft, Thomson NETg (now a part of Skillsoft, making Skillsoft the single largest vendor of such courseware by a substantial margin), ElementK (now owned by NIIT), and Harvard Business School Publishing. Generic courseware is available for learning skills in communication, business, leadership, management, finance, information technology (IT), sales, health and safety, and more specialized topics.
Most companies also have a need to develop courses on for unique situations and proprietary products and services. There are many tools available for this purpose. Most of these are designed primarily for creating self-directed online courses, but they can also be used to develop classroom materials.
Some examples of popular course authoring tools:
- SumTotal ToolBook
- Adobe Authorware, Flash, Dreamweaver, and Acrobat Connect Presenter
- Trivantis Lectora
- ReadyGo Web Course Builder
- MaxIT DazzlerMax
- Outstart Trainer
Course development can be very time consuming. There is a lot of material already available in Microsoft Word or PowerPoint. So-called rapid development, or rapid e-learning tools are designed to quickly convert these documents to e-learning courses. Examples include:
- Articulate
- Impatica
- Adobe Presenter (formerly Macromedia Breeze Presenter)
- KnowledgePresenter
Most of these tools (with the exception of Impatica) convert PowerPoint and Word documents to Flash because it is web-friendly and so widespread. (According to Adobe, Flash is already installed in 97 percent of browsers.)

## Match 2.03 — LibreTexts: 8.5: Employee Training and Development
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://biz.libretexts.org/Courses/Coastline_College/BUS_C100%3A_Introduction_to_Business_(White)/08%3A_Managing_Human_Resources_and_Labor_Relations/8.05%3A_Employee_Training_and_Development

8.5: Employee Training and Development
-
- Last updated
- Save as PDF
4. What types of training and development do organizations offer their employees?
To ensure that both new and experienced employees have the knowledge and skills to perform their jobs successfully, organizations invest in training and development activities. Training and development involves learning situations in which the employee acquires additional knowledge or skills to increase job performance. Training objectives specify performance improvements, reductions in errors, job knowledge to be gained, and/or other positive organizational results. The process of creating and implementing training and development activities is shown in Exhibit 8.8 . Training is done either on the job or off the job.
Exhibit 8.7 Here is the final assembly process on an Airbus 787-10 for Singapore Airlines. This plant is one of Airbus’s largest and most technologically advanced manufacturing facilities. How is technology helping companies develop skilled workers both on and off the job? (Credit: airbus777/Flickr/ Attribution 2.0 Generic (CC BY 2.0))
On-the-Job Training
New-employee training is essential and usually begins with orientation , which entails getting the new employee ready to perform on the job. Formal orientation (often a half-day classroom program) provides information about the company history, company values and expectations, policies, and the customers the company serves, as well as an overview of products and services. More important, however, is the specific job orientation by the new employee’s supervisor concerning work rules, equipment, and performance expectations. This second briefing tends to be more informal and may last for several days or even weeks.
Exhibit 8.8 Employee Training and Development Process (Attribution: Copyright Rice University, OpenStax, under CC BY 4.0 license.)
Beyond employee orientation, job training takes place at the job site or workstation and is directly related to the job. This training involves specific job instruction, coaching (guidance given to new employees by experienced ones), special project assignments, or job rotation. Job rotation is the reassignment of workers to several different jobs over time. At Walmart, management trainees rotate through three or more merchandizing departments, customer service, credit, and even the human resource department during the first year or two on the job.
Two other forms of on-the-job training are apprenticeship and mentoring. An apprenticeship usually combines specific on-the-job instruction with classroom training. It may last as long as four years and can be found in the skilled trades of carpentry, plumbing, and electrical work. Mentoring involves a senior manager or other experienced employee providing job- and career-related information to a mentee. Inexpensive and providing instantaneous feedback, mentoring is becoming increasingly popular with many firms, including FedEx, Merrill Lynch, Dow Chemical, and Bank of America. Whereas mentoring is typically conducted through ongoing face-to-face interactions between mentor and mentee, technology now allows for a long-distance mentoring relationship. Dow Chemical uses e-mail and video conferencing to facilitate long-distance mentoring between persons who are working in different countries. For a mentee whose second language is English, writing e-mail messages in English helps the individual become fluent in English, which is a requirement of all Dow Chemical employees regardless of location and country of origin. 8
EXPANDING AROUND THE GLOBE
Employees on the (International) Move
Working abroad at one of the thousands of American or foreign multinational firms can be exciting and look good on your résumé. But is an international job assignment a step up the ladder to a more rewarding career path or a potential minefield of professional and family risk? The answer depends as much on an employee’s family situation as his or her ambition, as well as how well the company supports and handles a transfer to an international location.
International job experience is increasingly seen as an essential leadership competency; therefore, many companies have developed robust rotational programs designed to give individuals critical global experience. According to the BGRS 2016 Global Mobility Trends Survey, providing high levels of service to relocating employees and their families is a fundamental expectation.
Brookfield Global Relocation Services (BGRS) is a talent mobility and relocation services firm that manages more than 60,000 relocations in 140 countries each year for its corporate and government clients. With 15 offices around the world, the company’s staff (that speaks 40 languages) can tap into their network of 1,900 trusted suppliers to help employees and families acclimate to their new work and home environments.
Increasing numbers of recent college graduates and experienced professionals are offered opportunities for overseas work assignments ranging from a few days to 24 months or longer. But acclimating to a new country and culture, as well as a new work environment, can be daunting and involves some unique challenges.
Challenges face expatriates aside from the demands of work include:
- Choosing schools for children
- Securing housing
- Finding medical facilities
- Opening bank accounts
- Finding transportation and obtaining a driver’s license
- Completing government forms
- Locating food stores
- Learning about community and entertainment offerings
With 189,000 worldwide staff and partners, KPMG International is one of the world’s largest professional services and accounting firms, with a presence in 152 countries. Through programs like the KPMG Global Opportunities (GO) program, the professionals at KPMG can explore job rotation assignments, transfer to a new location, or change to a new job function or group. The company’s Career Mobility Connection tool allows employees to evaluate opportunities based on their interests and to seek guidance from a transition advisor on potential career opportunities.
KPMG has developed several programs and standards to guide employees and establish consistency, whether they work in the United States or abroad. One of the most important is the KPMG Code of Conduct, which defines the values and standards by which KPMG conducts business and is intended to help guide actions and behaviors of its global workforce.
Every year, all KPMG employees and partners are required to affirm their agreement to comply with the Code of Conduct. In addition, all partners and employees are required to complete mandatory training that reinforces the principles of the Code and further builds understanding of the firm’s expectations.
Critical Thinking Questions
- How is KPMG’s Global Code of Conduct intended to influence and guide the personal values and behaviors of its employees and partners?
- Why must the Code of Conduct be affirmed by employees and partners every year? Why does KPMG include their partners in this program?
- What are the top four or five job qualifications an employee should have to be considered for an overseas assignment?
Sources: Corrine Purtill, “Expat Couples Do Best When They’ve Moved for the Woman’s Job,” Quartz at Work , December 6, 2017; https://work.qz.com/1134685/expat-co...he-womans-job/ ; Donald Murray, “The 7 Greatest Challenges of Moving Overseas and How to Resolve Them,” International Living , March 15, 2018, internationalliving.com/the-...-resolve-them/; “KPMG’s Code of Conduct,” Accessed March 15, 2018, home.kpmg.com/us/en/home/abo...f-conduct.html.
Off-the-Job Training
Even with the advantages of on-the-job training, many firms recognize that it is often necessary to train employees away from the workplace. With off-the-job training, employees learn the job away from the job. There are numerous popular methods of off-the-job training. It frequently takes place in a classroom, where cases, role-play exercises, films, videos, lectures, and computer demonstrations are used to develop workplace skills.
Web-based technology is increasingly being used along with more traditional off-the-job training methods. E-learning and e-training involve online computer presentation of information for learning new job tasks. Union Pacific Railroad has tens of thousands of its employees widely dispersed across much of the United States, so it delivers training materials online to save time and travel costs. Technical and safety training at Union Pacific are made available as programmed instruction , an online, self-paced, and highly structured training method that presents trainees with concepts and problems using a modular format. Software provided can make sure that employees receive, undergo, and complete, as well as sign off on, various training modules. 9
Web-based training can also be done using a simulation , for example, a scaled-down version of a manufacturing process or even a mock cockpit of a jet airplane. American Airlines uses a training simulator for pilots to practice hazardous flight maneuvers or learn the controls of a new aircraft in a safe, controlled environment with no passengers. The simulator allows for more direct transfer of learning to the job.
CONCEPT CHECK
- Describe several types of on-the-job training.
- What are the advantages of simulation training?
- How is technology impacting off-the-job training?
