# Source pack — subjects/linguistics/foundational/how-language-works
Lesson title: How Language Works
Level: foundational
Match confidence: 2.06

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.06 — LibreTexts: 7.7: Language Development in the School-Age Child
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://socialsci.libretexts.org/Courses/Moraine_Park_Technical_College/Child_Growth_and_Develpment_(MPTC_Version)/07%3A_Middle_Childhood_-_Cognitive__Development/7.07%3A_Language_Development_in_the_School-Age_Child

7.7: Language Development in the School-Age Child
selected template will load here
This action is not available.
Human language is the most complex behavior on the planet and, at least as far as we know, in the universe. Language involves both the ability to comprehend (receptive) spoken and written (expressive) words and to create communication in real-time when we speak or write. Most languages are oral, generated through speaking. Speaking involves a variety of complex cognitive, social, and biological processes including operation of the vocal cords, and the coordination of breath with movements of the throat and mouth, and tongue. Other languages are sign languages, in which the communication is expressed by movements of the hands. The most common sign language is American Sign Language (ASL), currently spoken by more than 500,000 people in the United States alone.
Although language is often used for the transmission of information (“turn right at the next light and then go straight,” “Place tab A into slot B”), this is only its most mundane function. Language also allows us to access existing knowledge, to draw conclusions, to set and accomplish goals, and to understand and communicate complex social relationships. Language is fundamental to our ability to think, and without it, we would be nowhere near as intelligent as we are.
Language can be conceptualized in terms of sounds, meaning, and the environmental factors that help us understand it. Phonemes are the elementary sounds of our language, morphemes are the smallest units of meaning in a language, syntax is the set of grammatical rules that control how words are put together, and contextual information is the elements of communication that are not part of the content of language but that help us understand its meaning. Understanding how language works means reaching across many branches of psychology—everything from basic neurological functioning to high-level cognitive processing. Language shapes our social interactions and brings order to our lives. Complex language is one of the defining factors that make us human.49
49. Beginning Psychology – Intelligence and Language by Charles Stangor is licensed under CC BY-NC-SA 3.0

## Match 2.05 — LibreTexts: 4.3: Structured Query Language
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://workforce.libretexts.org/Courses/Evergreen_Valley_College/Information_Systems_for_Business_(Revised_1st_Edition_2021)/01%3A_What_is_an_Information_System/04%3A_Data_and_Databases/4.03%3A_Structured_Query_Language

4.3: Structured Query Language
selected template will load here
This action is not available.
Once you have a database designed and loaded with data, how will you do something useful with it? The primary way to work with a relational database is to use Structured Query Language, SQL (pronounced “sequel,” or stated as S-Q-L). Almost all applications that work with databases (such as database management systems, discussed below) use SQL to analyze and manipulate relational data. As its name implies, SQL is a language that can be used to work with a relational database or for streaming processing in a relational data stream management system. From a simple request for data to a complex update operation, SQL is a mainstay of programmers and database administrators. 
• The following query will retrieve a list of the first and last names of the club presidents:
SELECT "First Name," "Last Name" FROM "Students" WHERE "Students.ID" =
• The following query will create a list of the number of students in each club, listing the club name and then the number of members:
SELECT "Clubs.Club Name", COUNT("Memberships.Student ID") FROM "Clubs"
An in-depth description of how SQL works is beyond this introductory text's scope. Still, these examples should give you an idea of the power of using SQL to manipulate relational data. Many database packages, such as Microsoft Access, allow you to visually create the query you want to construct and then generate the SQL query for you.
In a relational database, all the tables are related by one or more fields so that it is possible to connect all the tables in the database through the field(s) they have in common. For each table, one of the fields is identified as a primary key. This key is the unique identifier for each record in the table. To help you understand these terms further, let’s walk through the process of designing the following database.

## Match 2.04 — LibreTexts: 12.4.1.4: Structured Query Language (SQL)
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Prince_Georges_Community_College/INT_1010%3A_Concepts_in_Computing/12%3A_Information_Systems_for_Business/12.04%3A_Data_and_Databases/12.4.01%3A_Relational_Database/12.4.1.04%3A_Structured_Query_Language_(SQL)

<IP_ADDRESS>: Structured Query Language (SQL)
selected template will load here
This action is not available.
Once you have a database designed and loaded with data, how will you do something useful with it? The primary way to work with a relational database is to use Structured Query Language, SQL (pronounced “sequel,” or simply stated as S-Q-L). Almost all applications that work with databases (such as database management systems, discussed below) make use of SQL as a way to analyze and manipulate relational data. As its name implies, SQL is a language that can be used to work with a relational database. From a simple request for data to a complex update operation, SQL is a mainstay of programmers and database administrators. 
SELECT "First Name", "Last Name" FROM "Students" WHERE "Students.ID" = "Clubs.President"
SELECT "Clubs.Club Name", COUNT("Memberships.Student ID") FROM "Clubs" LEFT JOIN "Memberships" ON "Clubs.Club ID" = "Memberships.Club ID"
An in-depth description of how SQL works is beyond the scope of this introductory text, but these examples should give you an idea of the power of using SQL to manipulate relational data. Many database packages, such as Microsoft Access, allow you to visually create the query you want to construct and then generate the SQL query for you.
