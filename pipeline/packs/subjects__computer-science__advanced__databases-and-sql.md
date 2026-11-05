# Source pack — subjects/computer-science/advanced/databases-and-sql
Lesson title: Databases & SQL
Level: advanced
Match confidence: 3.08

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.08 — LibreTexts: 12.4: Naming Databases
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://biz.libretexts.org/Courses/Lumen_Learning/Book%3A_Computer_Applications_for_Managers_(Lumen)/12%3A_Microsoft_Access_Basic_Skills/12.04%3A_Naming_Databases

12.4: Naming Databases
Learning Objectives
- Name the database and location
- Discuss the role of tables in access
- Differentiate among types of tables
Enter the name of your database in the “File Name” field. The database location can be changed by selecting the box to the right of the “File Name” field and browsing to the location of your choice.
PRactice Question
Understanding Tables
Tables are one of the key objects in Access. Access uses tables to store data. To store data, you create one table for each type of information that you track. Types of information might include customer information, products, or order details.
The example below is taken from the Microsoft Access “Northwind Traders” sample database. It is a table containing a list of orders for the fictitious company with reference to Order Number, Order Date, Order Status, etc.
Types of Tables
There are three types of tables in Access: an object table, a transaction table, and a join table. Object tables contain data relating to a real-world object, like a company or a customer or a product. Transaction tables store information pertaining to events, like when an order is placed for a product or an invoice is sent to a customer. Finally, join tables are used to establish a relationship between two tables, like a product table and a customer table.
We will focus on object tables in this section.
Contributors and Attributions
- Naming Databases. Authored by : Robert Danielson. Provided by : Lumen Learning. License : CC BY: Attribution

## Match 3.05 — LibreTexts: 10.1: R and databases
License: Public Domain · https://stats.libretexts.org/Bookshelves/Introductory_Statistics/Book%3A_Visual_Statistics_Use_R_(Shipunov)/10%3A_Appendix_C-_R_fragments/10.01%3A_R_and_databases

10.1: R and databases
There are many interfaces which connect R with different database management software and there is even package sqldf which allows to work with R data frames through commands from SQL language. However, the R core also can work in the database-like way, even without serious extension. The Table \(\PageIndex{1}\) shows the correspondence between SQL operators and commands of R .
| SELECT | [, subset() |
| JOIN | merge() |
| GROUP BY | aggregate(), tapply() |
| DISTINCT | unique(), duplicated() |
| ORDER BY | order(), sort(), rev() |
| WHERE | which(), %in%, == |
| LIKE | grep() |
| INSERT | rbind() |
| EXCEPT | ! and - |
Table \(\PageIndex{1}\) Approximate correspondence between SQL operators and R functions.
One of the most significant disadvantages there is that many of these R commands (like merge() ) are slow. Below are examples of the user functions which work much faster:
Code \(\PageIndex{1}\) (R):
Now we can operate with multiple data frames as with one. This is important if data is organized hierarchically. For example, if we are measuring plants in different regions, we might want to have two tables: the first with regional data, and the second with results of measurements. To connect these two tables, we need a key , the same column which presents in both tables:
Code \(\PageIndex{2}\) (R):
Here was shown how to work with two related tables and Recode() command. First table contains locations, the second—measurements. Species names are only in the first table. If we want to know the correspondence between species and characters, we might want to merge these tables. The key is N.POP column (location ID).
The recode.r collection of R functions distributed with this book contains ready-to-use Recode() function and related useful tools.
There is another feature related with databasing: quite frequently, there is a need to convert “text to columns”. This is especially important when data contains pieces of text instead of single words:
Code \(\PageIndex{3}\) (R):
(Vectorized function call do.call() constructs a function call its arguments.)
There is also the data encoding operation which converts categorical data into binary (0/1) form. Several ways are possible:
Code \(\PageIndex{4}\) (R):
R and TeX are friendly software so it is possible to make them work together in order to automate book processing. Such books will be “semi-static” where starting data comes from the regularly updated database, and then R scripts and TeX work to create typographically complicated documents.
Flora and fauna manuals and checklists are perfect candidates for these semi-static manuals. This book supplements contain the archived folder manual.zip which illustrates how this approach works on example of imaginary “kubricks” (see above).

## Match 3.04 — LibreTexts: 4.10: Enterprise Databases
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://workforce.libretexts.org/Courses/Evergreen_Valley_College/Information_Systems_for_Business_(Revised_1st_Edition_2021)/01%3A_What_is_an_Information_System/04%3A_Data_and_Databases/4.10%3A_Enterprise_Databases

4.10: Enterprise Databases
-
- Last updated
- Save as PDF
- Ly-Huong T. Pham, Tejal Desai-Naik, Laurie Hammond, & Wael Abdeljabbar
- ASCCC Open Educational Resources Initiative (OERI)
Small and large organizations utilize enterprise databases for managing when collecting large complex data. An enterprise database is robust enough to handle multiple users' queries successfully simultaneously and can handle a range of 100 to 10,000 users at a time. (Technopedia, 2020). Com puters have become networked and are now joined worldwide via the Internet, and a class of databases has emerged that can be accessed by two, ten, or even a million people. These databases are sometimes installed on a single computer to be accessed by a group of people at a single location or a small company. They can also be installed over several servers worldwide, meant to be accessed by millions in large companies. These relational enterprise database packages are built and supported by companies such as Oracle, Microsoft, and IBM. The open-source MySQL is also an enterprise database. Open-source databases are free and can be shared, storing vital information in software that the organization can control. An open-source database allows users to create a system based on their unique requirements and business needs. The source code can be customized to match any user preference. Open-source databases address the need to analyze data from a growing number of new applications at a lower cost. The deluge of social media and the Internet of Things (IoT) has ushered an age of massive data that needs to be collected and analyzed. The data only has value if an enterprise can analyze it to find useful patterns or real-time insights. The data contains vast amounts of information that can overload a traditional database. The flexibility and cost-effectiveness of open source database software have revolutionized database management systems. (Omnisci, 2020).
Sidebar: What Is Metadata?
The term metadata can be understood as “data about data.” For example, when looking at one of Year of Birth's values in the Students table, the data itself may be “1992″. The metadata about that value would be the field name Year of Birth, the last updated time, and the data type (integer). Another example of metadata could be for an MP3 music file, like the one shown in the image below; information such as the song's length, the artist, the album, the file size, and even the album cover art is classified as metadata. When a database is being designed, a “data dictionary” is created to hold the metadata, defining its fields and structure.
Data Governance
Data governance is the process of taking data and managing the availability, integrity, and usability in enterprise systems. Proper data governance ensures the data is consistent, trustworthy, and secured. We are in a time when organizations must pay close attention to privacy regulations and increasingly need to rely more on data analytics to optimize decision making and optimize operations. Data governance can be used at both the micro and macro levels. When we refer to micro, the focus is on the individual organization to ensure high data quality throughout the lifecycle to achieve optimal business objectives. The macro-level refers to cross-border flows by countries which are called international data governance.
References
Omnisci (2020). Definition of an Open Source Database . Retrieved September 1, 2020, from https://www.omnisci.com/technical-glossary/open-source-database#:~:text=An%20open%20source%20database%20has,is%20protected%20to%20prevent%20copying.
Technopedia, (2020) Definition of Enterprise Database. Retrieved September 1, 2020, from https://www.techopedia.com/definition/31683
