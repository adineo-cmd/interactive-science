# Source pack — subjects/computer-science/advanced/software-engineering-and-version-control
Lesson title: Software Engineering & Version Control
Level: advanced
Match confidence: 1.80

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.80 — LibreTexts: 11.3: Version Control
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Butte_College/Intro_to_Programming_with_Programming_Fundamentals_and_Python_for_Everyone/11%3A_Software_Development_Life_Cycle/11.03%3A_Version_Control

11.3: Version Control
-
- Last updated
- Save as PDF
Overview
Version control , also known as revision control or source control, is the management of changes to documents, computer programs, large websites, and other collections of information. Each revision is associated with a timestamp and the person making the change. Revisions can be compared, restored, and with some types of files, merged. [1]
Version control systems (VCS) most commonly run as stand-alone applications, but may also be embedded in various types of software, including integrated development environments (IDEs).
Discussion
Version control implements a systematic approach to recording and managing changes in files. At its simplest, version control involves taking ‘snapshots’ of your file at different stages. This snapshot records information about when the snapshot was made, and also about what changes occurred between different snapshots. This allows you to ‘rewind’ your file to an older version. From this basic aim of version control, a range of other possibilities is made available. [2]
Version control allows you to: [3]
- Track developments and changes in your files
- Record the changes you made to your file in a way that you will be able to understand later
- Experiment with different versions of a file while maintaining the original version
- ‘Merge’ two versions of a file and manage conflicts between versions
- Revert changes, moving ‘backward’ through your history to previous versions of your file
Version control is particularly useful for facilitating collaboration. One of the original motivations behind version control systems was to allow different people to work on large projects together. Using version control to collaborate allows for a greater deal of flexibility and control than many other solutions. As an example, it would be possible for two people to work on a file at the same time and then merge these together. If there were ‘conflicts’ between the two versions, the version control system would allow you to see these conflicts and make an active decision about how to ‘merge’ these different versions into a new ‘third’ document. With this approach you would also retain a ‘history’ of the previous version should you wish to revert back to one of these later on. [4]
Popular version control systems include: [5]
- Git
- Helix VCS
- Microsoft Team Foundation Server
- Subversion
The remainder of this lesson focuses on using the Git version control system.
Git
Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source code management in software development, but it can be used to keep track of changes in any set of files. Git was created by Linus Torvalds in 2005 for development of the Linux kernel and is free and open source software. [6]
Free public git repositories are available from:
- Bitbucket
- GitHub
Cloning an existing repository requires only a URL to the repository and the following git command:
-
git clone <url>
Once cloned, repositories are synchronized by pushing and pulling changes. If the original source repository has been modified, the following git command is used to pull those changes to the local repository:
-
git pull
Local changes must be added and committed, and then pushed to the remote repository. Note the period (dot) at the end of the first command.
-
git add .
-
git commit -m "reason for commit"
-
git push
If there are conflicts between the local and remote repositories, the changes should be merged and then pushed. If necessary, local changes may be forced upon the remote server using:
-
git push --force
Key Terms
- branch
- A separate working copy of files under version control which may be developed independently from the origin.
- clone
- Create a new repository containing the revisions from another repository.
- commit
- To write or merge the changes made in the working copy back to the repository.
- merge
- An operation in which two sets of changes are applied to a file or set of files.
- push
- Copy revisions from the current repository to a remote repository.
- pull
- Copy revisions from a remote repository to the current repository.
- version control
- The management of changes to documents, computer programs, large websites, and other collections of information.
References
-
Wikipedia: Version control
↵
-
Programming Historian: An Introduction to Version Control Using GitHub Desktop
↵
-
Programming Historian: An Introduction to Version Control Using GitHub Desktop
↵
-
Programming Historian: An Introduction to Version Control Using GitHub Desktop
↵
-
G2Crowd: Best Version Control Systems
↵
-
Wikipedia: Git
↵

## Match 1.55 — LibreTexts: 2.1: Software Basics
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://workforce.libretexts.org/Bookshelves/Information_Technology/Computer_Applications/Workplace_Software_and_Skills_(OpenStax)/02%3A_Essentials_of_Software_Applications_for_Business/2.01%3A_Software_Basics

2.1: Software Basics
By the end of this section, you will be able to:
- Explain what software is and what it does
- Describe each of the main software types used in business
- Understand how to install and maintain software
You learned about the history of computers and basic hardware in the Technology in Everyday Life and Business chapter. While hardware is the backbone of a computer, and knowledge of it and what can go wrong with it helps you to keep vital devices working properly, software is the lifeblood that gets work done personally and in the business world.
This chapter examines the basics of software programs. It also covers the terminology and functions common to most programs. Refer to this chapter as you work through the rest of the material in the textbook, especially when you encounter more advanced concepts.
One final note: Before beginning this chapter, be sure you know how to use your mouse to click and hover. Clicking (sometimes called pressing or selecting) the left side of the mouse tells it you want to activate a command directly on the screen. It is the most direct use of the mouse. Clicking the right side (called “right-clicking”) of the mouse will reveal a little screen with a menu of options. Don’t worry about those yet. And, finally, hovering over portions of the screen such as icons will give you a short descriptor of that tool or menu. When you hover, you do not click the mouse at all but rather direct it over the tool icon.
You will need to hold the Control (Ctrl) key when clicking the mouse to reveal the menu of options, and then hold Command when clicking the mouse to activate a command directly on screen.
What Is Software?
When using a computer, we often hear the terms programs , software , and applications . Sometimes these terms are used interchangeably. However, there are some distinctions. Programs are the instructions that tell the computer how to operate and run specific tasks. Whereas software consists of the step-by-step instructions that tell a computer how to operate with its hardware. Software is essentially a collection of interlinked programs. More specifically, the instructions enable the program to perform specific actions such as printing, saving, or formatting text. These step-by-step instructions are written in computer language or code. Different types of programs include the Microsoft Office suite, educational software, and antivirus software.
There are two major categories of software: system-related software and application software . System software is related to the functioning of the computer. Examples include the computer’s operating system and the software needed to run items such as printers, the keyboard, and antivirus software. Applications are programs that are task-oriented, including those we will cover in this text such as word processing programs and presentation software. Internet browsers are also considered application programs. They are used to search for content on the internet.
There are several facets of programs that are consistent regardless of the type of program. The programs use computer programming to add the functionality for the software or application. For example, there is a specific computer programming language (or code) that is used to simply print a document. This language is the foundation for making the program work. The basic elements of programs are shown in Figure 2.2. They are:
- The graphical user interface (GUI) is the portion of a program that allows the user to interact with it. Commands in Office are organized in groupings called tabs, while in Google Workspace, these groupings are called menus.
- A menu bar , or ribbon, typically at the top of the screen, contains an array of general commands that the user can choose, such as changing the font, printing the file, or adding elements such as pictures or shapes. In Office, this is referred to as the ribbon.
- A toolbar , typically located below the menu bar, contains icons or graphical representations for commonly used commands such as Copy or Save that are more specific than those contained in the menu bar.
- A dialog box provides information or requests inputs. These boxes typically appear after a user action, such as clicking a button or selecting a menu option. For example, see Figure 2.2, which shows more options for changing the font color or size.
- The status bar is located at the bottom of the program window. Its main function is to show the status of the program, such as the number of pages.
Common Applications in Business
Task-oriented applications include word processing, spreadsheet, presentation, and database management programs. Figure 2.3 shows the icons for the popular applications in Google Workspace.
Specialized applications include programs used only for certain disciplines or occupations, such as QuickBooks, which is used for accounting. Mobile applications such as E-reader applications are programs designed primarily for smartphones and tablets.
A word processing application creates text-based documents such as memos, letters, and reports. Just about every organization uses word processing software, especially businesses, colleges, and universities. Microsoft Word is the most widely used word processing application, along with Google Docs and Open Office Writer .
A spreadsheet application organizes, analyzes, and uses numeric data. These applications are common in just about every profession today for compiling data in a table and creating visual displays (graphs and charts) of the information. Sales data from WorldCorp can be analyzed using the tools in a spreadsheet application. The most widely used spreadsheet applications are Microsoft Excel and Google Sheets .
A presentation application combines graphics and text to create attractive slideshows. These applications are used by students in colleges and universities as well as in the business world. The most common presentation applications are Microsoft PowerPoint and Google Slides . Employees at WorldCorp can use presentation applications to prepare sales summaries to present to key executives at the company.
A database application is designed to organize and store large amounts of data. The information in a database program often includes both text and numeric information. Microsoft Access is a database application that can be used to compile and filter a large dataset. WorldCorp can use Access to store customer data in one file that includes information such as the customer address, historical purchase information, key contacts, and other related information.
Specialized applications include programs that are used only in certain disciplines or occupations, such as a design application used in the engineering profession. Another example would be tax software programs that accounting professionals use to prepare taxes for their clients. Desktop publishing enables users to mix text and graphics to create page designs and layouts for brochures, newsletters, and textbooks. Popular types of desktop publishing software include Adobe InDesign and Microsoft Publisher.
Finally, businesses might also use social media applications. Social media applications are used to create virtual networks or communities through which users connect and share information, messages, and/or content such as images and videos. These applications are accessed either through the internet or by downloading the application to your device. These applications are geared to connecting with others in a variety of different scenarios. For example, LinkedIn is a professional networking application that can help you connect with others in your career field. Social media applications will be covered in detail in Content Management Systems and Social Media in Business.
One of the first social media platforms was Myspace, which was used to connect individuals with family and friends, as well as for networking. Then came Facebook (which became more popular than Myspace), Instagram, LinkedIn, TikTok, and Twitter (now X). At WorldCorp, you would most likely use LinkedIn, which is a site tailored to the business world. Companies and workers share news, their résumés, and network through it. Social media also allows virtual collaboration, which plays a role in work life, as individuals can use Zoom or Microsoft Teams for business meetings, a feature that became crucial during the COVID pandemic. Many organizations also use social media for marketing purposes.
In addition to interacting with others, social media users can watch movies and play games on many different types of devices, including tablets, computers, and even cell phones through social media sites. The chapter Content Management Systems and Social Media in Business covers this topic in more depth.
Installing and Maintaining Software
Installing software is an automated process for the most part. Although there are some differences based on both the software and the operating systems ( Windows or macOS ), software installation follows a basic process. Acquisition of the software often begins with visiting the software website and purchasing the software download. Not all software requires a purchase. Some programs are freely available. Also, not all programs are directly downloaded onto your computer. With today’s cloud-based technologies, some software exists in the cloud and instead you are downloading an app on your device to get access to the software.
Once you have identified the software you would like to install, generally you will find a link (or button) on the website that says Download. By clicking on the download, you agree to allow the software components to be added to your computer’s hard drive. Also, although not as common today, software programs can be installed via a CD-ROM . If you have a CD-ROM to install the software, often the installation process will begin once the CD is inserted in the CD drive. You will be prompted with similar dialog windows whether installing from a download or a CD-ROM.
Keep in mind that you need to do your research and use caution when choosing software from the internet to download. There are fake sites that exist for downloading software that could harm your computer. Additionally, sometimes there are options to download other software or additional features to install. These are generally not necessary and could again be potentially harmful to your computer. Take the time to make sure you are downloading software from trusted sites.
The installation begins with downloading a folder that contains the necessary files to install the software program on your computer. Two key files in the folder are the README file and the actual install file, which will have a .exe extension (the execute file). It is a good idea to read the README file. This file is a text file that contains the steps needed to install the program. It will also contain the system requirements information to determine if your computer is suitable for the program. The programs differ based on the computer space needed to store the software files and the version of the operating system needed for the software to function. The download prompter screens will often indicate the amount of space required for the installation.
Installation starts when you click on the .exe file. You will be prompted with a series of approvals at the beginning of the installation. These approvals could include the consent to make changes (add files) to your computer, closing all other open programs, and usage of the software. Some software programs will have options to customize the installation based on the elements you want installed or where you want to place the installation files. You may be prompted with a dialog box asking you the type of installation, which could include options such as basic installation or customized. Often, the software developers will recommend the basic installation for most applications. Unless you have a reason not 

## Match 1.54 — LibreTexts: 6.6: Reading- Software Development
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://workforce.libretexts.org/Bookshelves/Information_Technology/Computer_Applications/Introduction_to_Computer_Applications_and_Concepts_(Lumen)/06%3A_Ethics_and_Software_Development/6.06%3A_Reading-_Software_Development

6.6: Reading- Software Development
Introduction
Software development is the computer programming, documenting, testing, and bug fixing involved in creating and maintaining applications and frameworks involved in a software release life cycle and resulting in a software product. The term refers to a process of writing and maintaining the source code, but in a broader sense of the term it includes all that is involved between the conception of the desired software through to the final manifestation of the software, ideally in a planned and structured process. Therefore, software development may include research, new development, prototyping, modification, reuse, re-engineering, maintenance, or any other activities that result in software products.
Software can be developed for a variety of purposes, the three most common being to meet specific needs of a specific client/business (the case with custom software), to meet a perceived need of some set of potential users (the case with commercial and open source software), or for personal use (e.g. a scientist may write software to automate a mundane task). Embedded software development , that is, the development of embedded software such as used for controlling consumer products, requires the development process to be integrated with the development of the controlled physical product. System software underlies applications and the programming process itself, and is often developed separately.
The need for better quality control of the software development process has given rise to the discipline of software engineering, which aims to apply the systematic approach exemplified in the engineering paradigm to the process of software development.
There are many approaches to software project management, known as software development life cycle models, methodologies, processes, or models. The waterfall model is a traditional version, contrasted with the more recent innovation of agile software development.
Methodologies
A software development methodology (also known as a software development process, model, or life cycle) is a framework that is used to structure, plan, and control the process of developing information systems. A wide variety of such frameworks have evolved over the years, each with its own recognized strengths and weaknesses. There are several different approaches to software development: some take a more structured, engineering-based approach to developing business solutions, whereas others may take a more incremental approach, where software evolves as it is developed piece-by-piece. One system development methodology is not necessarily suitable for use by all projects. Each of the available methodologies is best suited to specific kinds of projects, based on various technical, organizational, project and team considerations.
Most methodologies share some combination of the following stages of software development:
- Analyzing the problem
- Market research
- Gathering requirements for the proposed business solution
- Devising a plan or design for the software-based solution
- Implementation (coding) of the software
- Testing the software
- Deployment
- Maintenance and bug fixing
These stages are often referred to collectively as the software development lifecycle, or SDLC. Different approaches to software development may carry out these stages in different orders, or devote more or less time to different stages. The level of detail of the documentation produced at each stage of software development may also vary. These stages may also be carried out in turn (a “waterfall” based approach), or they may be repeated over various cycles or iterations (a more “extreme” approach). The more extreme approach usually involves less time spent on planning and documentation, and more time spent on coding and development of automated tests. More “extreme” approaches also promote continuous testing throughout the development lifecycle, as well as having a working (or bug-free) product at all times. More structured or “waterfall” based approaches attempt to assess the majority of risks and develop a detailed plan for the software before implementation (coding) begins, and avoid significant design changes and re-coding in later stages of the software development life cycle planning.
There are significant advantages and disadvantages to the various methodologies, and the best approach to solving a problem using software will often depend on the type of problem. If the problem is well understood and a solution can be effectively planned out ahead of time, the more “waterfall” based approach may work the best. If, on the other hand, the problem is unique (at least to the development team) and the structure of the software solution cannot be easily envisioned, then a more “extreme” incremental approach may work best.
Software development activities
Identification of need
The sources of ideas for software products are legion. These ideas can come from market research including the demographics of potential new customers, existing customers, sales prospects who rejected the product, other internal software development staff, or a creative third party. Ideas for software products are usually first evaluated by marketing personnel for economic feasibility, for fit with existing channels distribution, for possible effects on existing product lines, required features, and for fit with the company’s marketing objectives. In a marketing evaluation phase, the cost and time assumptions become evaluated. A decision is reached early in the first phase as to whether, based on the more detailed information generated by the marketing and development staff, the project should be pursued further.
In the book “Great Software Debates” , Alan M. Davis states in the chapter “Requirements,” subchapter “The Missing Piece of Software Development”
Students of engineering learn engineering and are rarely exposed to finance or marketing. Students of marketing learn marketing and are rarely exposed to finance or engineering. Most of us become specialists in just one area. To complicate matters, few of us meet interdisciplinary people in the workforce, so there are few roles to mimic. Yet, software product planning is critical to the development success and absolutely requires knowledge of multiple disciplines.
Because software development may involve compromising or going beyond what is required by the client, a software development project may stray into less technical concerns such as human resources, risk management, intellectual property, budgeting, crisis management, etc. These processes may also cause the role of business development to overlap with software development.
Planning
Planning is an objective of each and every activity, where we want to discover things that belong to the project. An important task in creating a software program is extracting the requirements or requirements analysis. Customers typically have an abstract idea of what they want as an end result, but do not know what software should do. Skilled and experienced software engineers recognize incomplete, ambiguous, or even contradictory requirements at this point. Frequently demonstrating live code may help reduce the risk that the requirements are incorrect.
Once the general requirements are gathered from the client, an analysis of the scope of the development should be determined and clearly stated. This is often called a scope document.
Certain functionality may be out of scope of the project as a function of cost or as a result of unclear requirements at the start of development. If the development is done externally, this document can be considered a legal document so that if there are ever disputes, any ambiguity of what was promised to the client can be clarified.
Designing
Once the requirements are established, the design of the software can be established in a software design document. This involves a preliminary, or high-level design of the main modules with an overall picture (such as a block diagram) of how the parts fit together. The language, operating system, and hardware components should all be known at this time. Then a detailed or low-level design is created, perhaps with prototyping as proof-of-concept or to firm up requirements.
Implementation, testing and documenting
Implementation is the part of the process where software engineers actually program the code for the project.
Software testing is an integral and important phase of the software development process. This part of the process ensures that defects are recognized as soon as possible. In some processes, generally known as test-driven development, tests may be developed just before implementation and serve as a guide for the implementation’s correctness.
Documenting the internal design of software for the purpose of future maintenance and enhancement is done throughout development. This may also include the writing of an API, be it external or internal. The software engineering process chosen by the developing team will determine how much internal documentation (if any) is necessary. Plan-driven models (e.g., Waterfall) generally produce more documentation than Agile models.
Deployment and maintenance
Deployment starts directly after the code is appropriately tested, approved for release, and sold or otherwise distributed into a production environment. This may involve installation, customization (such as by setting parameters to the customer’s values), testing, and possibly an extended period of evaluation.
Software training and support is important, as software is only effective if it is used correctly.
Maintaining and enhancing software to cope with newly discovered faults or requirements can take substantial time and effort, as missed requirements may force redesign of the software.
Subtopics
View model
A view model is a framework that provides the viewpoints on the system and its environment, to be used in the software development process. It is a graphical representation of the underlying semantics of a view.
The purpose of viewpoints and views is to enable human engineers to comprehend very complex systems, and to organize the elements of the problem and the solution around domains of expertise. In the engineering of physically intensive systems, viewpoints often correspond to capabilities and responsibilities within the engineering organization.
Most complex system specifications are so extensive that no one individual can fully comprehend all aspects of the specifications. Furthermore, we all have different interests in a given system and different reasons for examining the system’s specifications. A business executive will ask different questions of a system make-up than would a system implementer. The concept of viewpoints framework, therefore, is to provide separate viewpoints into the specification of a given complex system. These viewpoints each satisfy an audience with interest in some set of aspects of the system. Associated with each viewpoint is a viewpoint language that optimizes the vocabulary and presentation for the audience of that viewpoint.
Business process and data modeling
Graphical representation of the current state of information provides a very effective means for presenting information to both users and system developers.
- A business model illustrates the functions associated with the business process being modeled and the organizations that perform these functions. By depicting activities and information flows, a foundation is created to visualize, define, understand, and validate the nature of a process.
- A data model provides the details of information to be stored, and is of primary use when the final product is the generation of computer software code for an application or the preparation of a functional specification to aid a computer software make-or-buy decision. See the figure on the right for an example of the interaction between business process and data models
