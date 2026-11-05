# Source pack — subjects/computer-science/advanced/operating-systems-basics
Lesson title: Operating Systems Basics
Level: advanced
Match confidence: 2.07

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.07 — LibreTexts: 1.1: Introduction to Operating Systems
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Delta_College/Operating_System%3A_The_Basics/01%3A_The_Basics_-_An_Overview/1.01%3A_Introduction_to_Operating_Systems

1.1: Introduction to Operating Systems
Introduction to Operating System
An operating system acts as an intermediary between the user of a computer and computer hardware. The purpose of an operating system is to provide an environment in which a user can execute programs in a convenient and efficient manner.
An operating system is a software that manages the computer hardware. The hardware must provide appropriate mechanisms to ensure the correct operation of the computer system and to prevent user programs from interfering with the proper operation of the system.
Operating System – Definition:
- An operating system is a program that controls the execution of application programs and acts as an interface between the user of a computer and the computer hardware.
- A more common definition is that the operating system is the one program running at all times on the computer (usually called the kernel), with all else being application programs.
- An operating system is concerned with the allocation of resources and services, such as memory, processors, devices, and information. The operating system correspondingly includes programs to manage these resources, such as a traffic controller, a scheduler, memory management module, I/O programs, and a file system.
Functions of Operating system – Operating system performs three functions:
- Convenience: An OS makes a computer more convenient to use.
- Efficiency: An OS allows the computer system resources to be used in an efficient manner.
- Ability to Evolve: An OS should be constructed in such a way as to permit the effective development, testing and introduction of new system functions at the same time without interfering with service.
Operating system as User Interface –
- User
- System and application programs
- Operating system
- Hardware
Every general-purpose computer consists of the hardware, operating system, system programs, and application programs. The hardware consists of memory, CPU, ALU, and I/O devices, peripheral device, and storage device. System program consists of compilers, loaders, editors, OS, etc. The application program consists of business programs, database programs.
Every computer must have an operating system to run other programs. The operating system coordinates the use of the hardware among the various system programs and application programs for various users. It simply provides an environment within which other programs can do useful work.
The operating system is a set of special programs that run on a computer system that allows it to work properly. It performs basic tasks such as recognizing input from the keyboard, keeping track of files and directories on the disk, sending output to the display screen and controlling peripheral devices.
OS is designed to serve two basic purposes:
- It controls the allocation and use of the computing System’s resources among the various user and tasks.
- It provides an interface between the computer hardware and the programmer that simplifies and makes feasible for coding, creation, debugging of application programs.
The Operating system must support the following tasks. The task are:
- Provides the facilities to create, modification of programs and data files using an editor.
- Access to the compiler for translating the user program from high level language to machine language.
- Provide a loader program to move the compiled program code to the computer’s memory for execution.
- Provide routines that handle the details of I/O programming.
I/O System Management –
The module that keeps track of the status of devices is called the I/O traffic controller. Each I/O device has a device handler that resides in a separate process associated with that device.
The I/O subsystem consists of
- A memory Management component that includes buffering caching and spooling.
- A general device driver interface.
Drivers for specific hardware devices.
Assembler – The input to an assembler is an assembly language program. The output is an object program plus information that enables the loader to prepare the object program for execution. At one time, the computer programmer had at their disposal a basic machine that interpreted, through hardware, certain fundamental instructions. The programmer would program the computer by writing a series of ones and zeros (machine language), and place them into the memory of the machine.
Compiler/Interpreter – The high-level languages - for example C/C++, are processed by compilers and interpreters. A compiler is a program that accepts source code written in a “high-level language “and produces a corresponding object program. An interpreter is a program that directly executes a source program as if it was machine language.
Loader – A loader is a routine that loads an object program and prepares it for execution. There are various loading schemes: absolute, relocating and direct-linking. In general, the loader must load, relocate and link the object program. The loader is a program that places programs into memory and prepares them for execution. In a simple loading scheme, the assembler outputs the machine language translation of a program on a secondary device and a loader places it in the core. The loader places into memory the machine language version of the user’s program and transfers control to it. Since the loader program is much smaller than the assembler, those make more core available to the user’s program.
History of Operating system –
Operating system has been evolving through the years. Following Table shows the history of OS.
| Generation | Year | Electronic device used | Types of OS Device |
|---|---|---|---|
| First | 1945-55 | Vacuum Tubes | Plug Boards |
| Second | 1955-65 | Transistors | Batch Systems |
| Third | 1965-80 | Integrated Circuits(IC) | Multiprogramming |
| Fourth | Since 1980 | Large Scale Integration | PC |
Adapted from:
"Introduction of Operating System – Set 1"
by Unknown,
Geeks for Geeks
is licensed under
CC BY-SA 4.0

## Match 2.06 — LibreTexts: 2.2.1: Types of Operating Systems (continued)
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Delta_College/Operating_System%3A_The_Basics/02%3A_Operating_System_Overview/2.02%3A_Types_of_Operating_Systems/2.2.01%3A_Types_of_Operating_Systems_(continued)

2.2.1: Types of Operating Systems (continued)
3. Distributed Operating System
Various autonomous interconnected computers communicate each other using a shared communication network. Independent systems possess their own memory unit and CPU. These are referred as
loosely coupled systems
or distributed systems. These system’s processors differ in size and function. The major benefit of working with these types of operating system is that it is always possible that one user can access the files or software which are not actually present on his system but on some other system connected within this network i.e., remote access is enabled within the devices connected in that network.
Advantages of Distributed Operating System:
- Failure of one will not affect the other network communication, as all systems are independent from each other
- Electronic mail increases the data exchange speed
- Since resources are being shared, computation is highly fast and durable
- Load on host computer reduces
- These systems are easily scalable as many systems can be easily added to the network
- Delay in data processing reduces
Disadvantages of Distributed Operating System:
- Failure of the main network will stop the entire communication
- To establish distributed systems the language which are used are not well defined yet
- These types of systems are not readily available as they are very expensive. Not only that the underlying software is highly complex and not understood well yet
Examples of Distributed Operating System are- LOCUS .
4. Network Operating System
Historically operating systems with networking capabilities were described as network operating system, because they allowed personal computers (PCs) to participate in computer networks and shared file and printer access within a local area network (LAN). This description of operating systems is now largely historical, as common operating systems include a network stack to support a
client–server model
.
These limited client/server networks were gradually replaced by Peer-to-peer networks, which used networking capabilities to share resources and files located on a variety of computers of all sizes. A peer-to-peer network sets all connected computers equal; they all share the same abilities to use resources available on the network. The most popular peer-to-peer networks as of 2020 are Ethernet, Wi-Fi and the Internet protocol suite. Software that allowed users to interact with these networks, despite a lack of networking support in the underlying manufacturer's operating system, was sometimes called a network operating system. Examples of such add-on software include Phil Karn's KA9Q NOS (adding Internet support to CP/M and MS-DOS), PC/TCP Packet Drivers (adding Ethernet and Internet support to MS-DOS), and LANtastic (for MS-DOS, Microsoft Windows and OS/2), and Windows for Workgroups (adding NetBIOS to Windows). Examples of early operating systems with peer-to-peer networking capabilities built-in include MacOS (using AppleTalk and LocalTalk), and the Berkeley Software Distribution.
Today, distributed computing and groupware applications have become the norm. Computer operating systems include a networking stack as a matter of course. During the 1980s the need to integrate dissimilar computers with network capabilities grew and the number of networked devices grew rapidly. Partly because it allowed for multi-vendor interoperability, and could route packets globally rather than being restricted to a single building, the Internet protocol suite became almost universally adopted in network architectures. Thereafter, computer operating systems and the firmware of network devices tended to support Internet protocols.
Advantages of Network Operating System:
- Highly stable centralized servers
- Security concerns are handled through servers
- New technologies and hardware up-gradation are easily integrated to the system
- Server access are possible remotely from different locations and types of systems
Disadvantages of Network Operating System:
- Servers are costly
- User has to depend on central location for most operations
- Maintenance and updates are required regularly
Examples of Network Operating System are: Microsoft Windows Server 2003, Microsoft Windows Server 2008, UNIX, Linux, Mac OS X, Novell NetWare, and BSD etc.
Adapted from:
"Types of Operating Systems"
by
akash1295
,
Geeks for Geeks
is licensed under
CC BY-SA 4.0
"Network operating system"
by
Multiple Contributors
,
Wikipedia
is licensed under
CC BY-SA 3.0

## Match 2.06 — LibreTexts: 2.2: Types of Operating Systems
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Delta_College/Operating_System%3A_The_Basics/02%3A_Operating_System_Overview/2.02%3A_Types_of_Operating_Systems

2.2: Types of Operating Systems
What are the Types of Operating Systems
An Operating System performs all the basic tasks like managing file,process, and memory. Thus operating system acts as manager of all the resources, i.e. resource manager . Thus operating system becomes an interface between user and machine.
Types of Operating Systems: Some of the widely used operating systems are as follows-
1. Batch Operating System
This type of operating system does not interact with the computer directly. There is an operator which takes similar jobs having same requirement and group them into batches. It is the responsibility of operator to sort the jobs with similar needs.
Advantages of Batch Operating System:
- It is very difficult to guess or know the time required by any job to complete. Processors of the batch systems know how long the job would be when it is in queue
- Multiple users can share the batch systems
- The idle time for batch system is very less
- It is easy to manage large work repeatedly in batch systems
Disadvantages of Batch Operating System:
- The computer operators should be well known with batch systems
- Batch systems are hard to debug
- It is sometime costly
- The other jobs will have to wait for an unknown time if any job fails
Examples of Batch based Operating System: Payroll System, Bank Statements etc.
2. Time-Sharing Operating Systems
Each task is given some time to execute, so that all the tasks work smoothly. Each user gets time of CPU as they use single system. These systems are also known as Multitasking Systems. The task can be from single user or from different users also. The time that each task gets to execute is called quantum. After this time interval is over OS switches over to next task.
Advantages of Time-Sharing OS:
- Each task gets an equal opportunity
- Less chances of duplication of software
- CPU idle time can be reduced
Disadvantages of Time-Sharing OS:
- Reliability problem
- One must have to take care of security and integrity of user programs and data
- Data communication problem
Examples of Time-Sharing OSs are: Linux, Unix etc.
Adapted from:
"Types of Operating Systems"
by
akash1295
,
Geeks for Geeks
is licensed under
CC BY-SA 4.0
