# Source pack — subjects/computer-science/expert/distributed-systems
Lesson title: Distributed Systems
Level: expert
Match confidence: 2.07

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.07 — LibreTexts: 12.4.2: Database Management Systems
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Prince_Georges_Community_College/INT_1010%3A_Concepts_in_Computing/12%3A_Information_Systems_for_Business/12.04%3A_Data_and_Databases/12.4.02%3A_Database_Management_Systems

12.4.2: Database Management Systems
-
- Last updated
- Save as PDF
Database Management Systems
To the computer, a database looks like one or more files. In order for the data in the database to be read, changed, added, or removed, a software program must access it. Many software applications have this ability: iTunes can read its database to give you a listing of its songs (and play the songs); your mobile-phone software can interact with your list of contacts. But what about applications to create or manage a database? What software can you use to create a database, change a database’s structure, or simply do analysis? That is the purpose of a category of software applications called database management systems (DBMS).
DBMS packages generally provide an interface to view and change the design of the database, create queries, and develop reports. Most of these packages are designed to work with a specific type of database, but generally are compatible with a wide range of databases.
For example, Apache OpenOffice.org Base (see screen shot) can be used to create, modify, and analyze databases in open-database (ODB) format. Microsoft’s Access DBMS is used to work with databases in its own Microsoft Access Database format. Both Access and Base have the ability to read and write to other database formats as well.
Microsoft Access and Open Office Base are examples of personal database-management systems. These systems are primarily used to develop and analyze single-user databases. These databases are not meant to be shared across a network or the Internet, but are instead installed on a particular device and work with a single user at a time.
Enterprise Databases
A database that can only be used by a single user at a time is not going to meet the needs of most organizations. As computers have become networked and are now joined worldwide via the Internet, a class of database has emerged that can be accessed by two, ten, or even a million people. These databases are sometimes installed on a single computer to be accessed by a group of people at a single location. Other times, they are installed over several servers worldwide, meant to be accessed by millions. These relational enterprise database packages are built and supported by companies such as Oracle, Microsoft, and IBM. The open-source MySQL is also an enterprise database.
As stated earlier, the relational database model does not scale well. The term scale here refers to a database getting larger and larger, being distributed on a larger number of computers connected via a network. Some companies are looking to provide large-scale database solutions by moving away from the relational model to other, more flexible models. For example, Google now offers the App Engine Datastore, which is based on NoSQL. Developers can use the App Engine Datastore to develop applications that access data from anywhere in the world. Amazon.com offers several database services for enterprise use, including Amazon RDS, which is a relational database service, and Amazon DynamoDB, a NoSQL enterprise solution.

## Match 2.05 — LibreTexts: 1.9 Multiprocessor and Multicore Systems
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Delta_College/Operating_System%3A_The_Basics/01%3A_The_Basics_-_An_Overview/1.9_Multiprocessor_and_Multicore_Systems

1.9 Multiprocessor and Multicore Systems
MultiProcessor System
Two or more processors or CPUs present in same computer, sharing system bus, memory and I/O is called MultiProcessing System. It allows parallel execution of different processors. These systems are reliable since failure of any single processor does not affect other processors. A quad-processor system can execute four processes at a time while an octa-processor can execute eight processes at a time. The memory and other resources may be shared or distributed among processes.
Advantages :
- Since more than one processor are working at the same time, throughput will get increased.
- More reliable since failure in one CPU does not affect other.
- It needs little complex configuration.
- Parallel processing (more than one process executing at same time) is achieved through MultiProcessing.
Disadvantages :
- It will have more traffic (distances between two will require longer time).
- Throughput may get reduced in shared resources system where one processor using some I/O then another processor has to wait for its turn.
- As more than processors are working at particular instant of time. So, coordination between these is very complex.
Multicore System
A processor that has more than one core is called Multicore Processor while one with single core is called Unicore Processor or Uniprocessor. Nowadays, most of systems have four cores (Quad-core) or eight cores (Octa-core). These cores can individually read and execute program instructions, giving feel like computer system has several processors but in reality, they are cores and not processors. Instructions can be calculation, data transferring instruction, branch instruction, etc. Processor can run instructions on separate cores at same time. This increases overall speed of program execution in system. Thus heat generated by processor gets reduced and increases overall speed of execution.
Multicore systems support MultiThreading and Parallel Computing . Multicore processors are widely used across many application domains, including general-purpose, embedded, network, digital signal processing (DSP), and graphics (GPU). Efficient software algorithms should be used for implementation of cores to achieve higher performance. Software that can run in parallel is preferred because the desire is to achieve parallel execution with the help of multiple cores.
Advantages :
- These cores are usually integrated into single IC (integrated circuit) die, or onto multiple dies but in single chip package. Thus allowing higher Cache Coherency.
- These systems are energy efficient since they allow higher performance at lower energy. A challenge in this, however, is additional overhead of writing parallel code.
- It will have less traffic(cores integrated into single chip and will require less time).
Disadvantages :
- Dual-core processor do not work at twice speed of single processor. They get only 60-80% more speed.
- Some Operating systems are still using single core processor.
- OS compiled for multi-core processor will run slightly slower on single-core processor
Adapted from:
"Difference between MultiCore and MultiProcessor System"
by
Ganeshchowdharysadanala
,
Geeks for Geeks
is licensed under
CC BY-SA 4.0

## Match 2.05 — LibreTexts: 4.4: Distributed Forces
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_et_al.)/04%3A_Statically_Equivalent_Systems/4.04%3A_Distributed_Forces

4.4: Distributed Forces
A distributed force is any force where the point of application of the force is an area or a volume . This means that the "point of application" is not really a point at all. Though distributed forces are more difficult to analyze than point forces, distributed forces are quite common in real world systems so it is important to understand how to model them.
Distributed forces can be broken down into surface forces and body forces . Surface forces are distributed forces where the point of application is an area (a surface on the body). Body forces are forces where the point of application is a volume (the force is exerted on all molecules throughout the body). Below are some examples of surface and body forces.
Representing Distributed Forces:
Distributed forces are represented as a field of vectors. This is drawn as a number of discrete vectors along a line, over a surface, or over a volume, that are connected with a line or a surface as shown below.
Though these representations show a discrete number of individual vectors, there is actually a magnitude and direction at all points along the line, surface, or body. The individual vectors represent a sampling of these magnitudes and directions.
It is also important to realize that the magnitudes of distributed forces are given in force per unit distance, area, or volume. We must integrate the distributed force over its entire range to convert the force into the usual units of force.
Analyzing Distributed Forces:
For analysis purposes in statics and dynamics, we will usually substitute in a single point force that is statically equivalent to the distributed force in the problem. This single point force is called the equivalent point load , and it will cause the same accelerations or reaction forces as the distributed force while simplifying the math. However, in analysis that focuses on the strength of materials where the bodies are not rigid, this substitution will not work as the distributed forces will not cause the same deformations and stresses as the point force.
