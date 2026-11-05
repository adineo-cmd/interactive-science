# Source pack — subjects/design/advanced/interaction-design
Lesson title: Interaction Design
Level: advanced
Match confidence: 2.05

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.05 — LibreTexts: 4.6: Keyboard Interaction
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://workforce.libretexts.org/Bookshelves/Information_Technology/Computer_Applications/Web_Accessibility_for_Developers_-_Essential_Skills_for_Web_Developers/04%3A_Basic_WAI-ARIA/4.06%3A_Keyboard_Interaction

4.6: Keyboard Interaction
Keyboard access is perhaps the most important accessibility feature that can go into a website, widget, or web application. However, it is often overlooked by developers, who are typically mouse users and may not have keyboard usability as a part of their testing regimen. People who are blind are typically unable to use a mouse, so any feature that relies on a mouse alone to function will likely be inaccessible to them. Fortunately, it is relatively easy to include keyboard access. It’s more a matter of remembering to add it when mouse access is added.
The following is a simple example of including both mouse and keyboard events when defining interaction for a widget or web application. Examine the JavaScript to see how mouse and keyboard events are handled, then under the Result tab , try operating the button with a keyboard and mouse while using ChromeVox. How you go about implementing both mouse and keyboard doesn’t really matter, as long as it is possible to interact with both.
You may notice some inconsistencies in ChromeVox support for the live region used to present the messages in the example, more specifically the
aria-atomic
attribute. Live regions will be covered more thoroughly later in this unit.
Predictability, Consistency, and Convention
Here we will introduce the basics of keyboard interaction, and we’ll go into greater detail when we start looking more closely at particular widgets and design patterns as they are introduced in the units that follow.
As the heading for this section suggests, keyboard interaction needs to be predictable, consistent, and should follow convention. That is, users should have a good idea of the path that the focus will follow (predictable). When navigating with the Tab key, that path should be the same throughout an application or website (consistent). Finally, it should be like it is in other applications, websites, or operating systems (convention).
Take for example a combo box (aka, a select menu). Regardless of the operating system being used, combo boxes work the same way. If you are developing a widget out of divs that function like a combo box, it should operate like a standard HTML combo box.
Conventional keyboard interaction for a combo box:
- Tab to navigate into the combo box
- While in focus, tab to navigate beyond the combo box
- While in focus, Shift + Tab to navigate before the combo box
- While in focus, Down Arrow to show next option
- While in focus, Up Arrow to show previous option
- While in focus, Alt + Down Arrow to display options list
- While options list is open, Alt + Up Arrow to close the options list
- While options list is open, Esc to close the options list and return to default state
- While an option is in focus, Enter to select that option
When developing a custom combobox — typically, a text box and list of options — a grid, a tree, or a dialog are combined into a functional unit that should operate like a standard HTML select menu. Functionality in addition to that described above may be added to the custom combobox, e.g., to add autocompletion . As the user types letters into the text box, options beginning with the string type are displayed below as a list or the first option with those letters is displayed inline in the text box.
Try This: Using your keyboard, try the keyboard interactions described above to confirm whether or not the combobox functions in a conventional way. Try it with a few different browsers and notice any variations in how different browsers handle combobox interaction.
Toolkit: For a list of design patterns, and keyboard interaction conventions, review the following widget development best practices. Scan for now. They will be covered more thoroughly in later units.

## Match 2.04 — LibreTexts: 4.6: Learning Environment Design
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://socialsci.libretexts.org/Bookshelves/Education_and_Professional_Development/Book%3A_Education_for_a_Digital_World_-_Advice_Guidelines_and_Effective_Practice_from_Around_Globe_(Hirtz)/04%3A_Addressing_Diversity_in_Design_of_Online_Courses/4.6%3A_Learning_Environment_Design

4.6: Learning Environment Design
-
- Last updated
- Save as PDF
Success indicator or effectiveness of any learning environment design is judged by students’ satisfaction and success rate. Both satisfaction and success depend on sustaining interest and motivation for learning. Much research is needed to identify the different motivating factors for learning and the strategies for sustaining learners’ motivation in online courses. Most of the online courses are attended by the students who are busy professionals, or who do not have access to face-to-face education. These students are highly motivated to learn, although they have different motivations or objectives for learning. So our challenges are to sustain students’ motivation in the online environment, provide challenges, provide support, and facilitate learning. One of the primary aspects of sustaining interest in online courses is to provide opportunities for interactions. People are, above all else, members of social groups and products of the historical experiences of those groups (Wood, 2004).
Some of the basic principles of instructional (interaction) design are:
- Design and use learning activities that engage students in active learning.
- Provide meaningful and authentic learning experiences that help learners apply course concepts and achieve course objectives.
- Use strategies that consider the different learning styles of students.
The teacher as the leader and designer of the learning environment must possess and inculcate fundamentals of embracing diversity (Sonnenschein, 1999) which include:
- Respect—for others, for differences, for ourselves.
- Tolerance—for ambiguities in language, style, behaviour.
- Flexibility—in situations that are new, difficult and challenging.
- Self-awareness—be sure you understand your reactions and know what you bring to the diverse workplace (learning environment).
- Empathy—to feel what someone different from you might be feeling in new and strange surroundings.
- Patience—for change that can be slow, and diversity situations that might be difficult.
- Humour—because when we lose our sense of humour, we lose our sense of humanity, as well as perspectives (p. 9).
The instructor or designer has to be creative, and use several different activities and interactivity to engage students and enhance their learning experience in an online course. These could be done through introduction of case studies, reflective journals, research reports, eportfolios, wikis, blogs, podcasts, simulations and games, authentic group projects through problem-based or inquiry-based learning, tests, quizzes, synchronous chat and asynchronous discussion forums, audio-videoconferences via Internet, etc. The instructor will have to develop strategies and techniques for establishing and maintaining learning communities among distance learners through the use of learning technologies. This will help to overcome the isolation that students can experience when taking an online course and also provide opportunities for collaboration and sharing knowledge and expertise.
We have conducted online collaborative problem-based learning for distance students. It was initially very difficult for the students to adapt to the new learning environment. By the end of the course, students realized that much learning had taken place by working in collaborative groups and participating in synchronous and asynchronous interactions using Internet tools. Student reflections revealed that the learning environment allowed them to choose their own problem to work on. They could schedule their work in negotiation with other group members. Students felt a sense of ownership of their work. Some students indicated that they were so involved in finding solutions for a problem or resolving an issue that at times they forgot that they were doing the activities for a course assignment. Assessment was done for the acquisition of higher order cognitive skills, e.g., critical thinking, decision-making, reflection, problem solving, scientific, and research skills. Self reflection, peer assessment and feedback are also a part of the peer-based learning process. In the process students also acquired valuable social and interpersonal skills through collaborative activities (Bhattacharya, 2004).
We have introduced e-portfolios in various courses and programs over the years. E-portfolios allow students to integrate and identify the links between the various activities they do in and outside of their formal education. Students can bring in their personal experiences and demonstrate how they have applied the knowledge and skills acquired in actual practice through e-portfolios. Developing e-portfolios and reflecting on the activities allow students to learn about their strengths, weaknesses, interests, and provide them directions for future. It also provides opportunities for teachers to learn about their students: their motivations, their previous experiences, their background, their skills, their attitudes, etc. Students can personalize their learning, and develop communication, organization, presentation, and design skills through development of e-portfolios (Bhattacharya, 2006).
In recent times we have used a combination of freeware for conducting interactive sessions in our online courses. Students were consulted before combining and using the technologies. A quick survey revealed the pros and cons of different technologies. Students and faculty agreed upon a set of tools which would work for them. The process of selecting tools, particularly criteria for selection, preferences, and justifications for using particular tools provided useful data for identifying tools and technologies to mashup to suit different purposes. Examples include Skype, Googledoc, Googlechat, or Skypechat for collaborative group assignments for an online and distance education course. WebCT discussion forums were used for asynchronous interactions among group members. In this course all the synchronous interactions were recorded for future reference and feedback.

## Match 2.04 — LibreTexts: 13.7: How Does E-Teaching Style Affect Design?
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://socialsci.libretexts.org/Bookshelves/Education_and_Professional_Development/Book%3A_Education_for_a_Digital_World_-_Advice_Guidelines_and_Effective_Practice_from_Around_Globe_(Hirtz)/13%3A_Planning_Your_Online_Course/13.7%3A_How_Does_E-Teaching_Style_Affect_Design

13.7: How Does E-Teaching Style Affect Design?
-
-
Last updated
-
-
Save as PDF
-
The design team needs to consider the teaching styles promoted by the philosophy of the institution, the styles exhibited by the program’s instructors, and expert knowledge about effective and empowering e-learning and e-teaching theory. Grasha (2002) identified several categories of teaching styles that are relevant when planning online courses. Characteristics of Grasha’s teaching style model are summarized in Table \(\PageIndex{1}\)
Grasha's Teaching Style Characteristics
Table \(\PageIndex{1}\)provides some general considerations for the design of the course environment. Interactivity capabilities are important; the means to give immediate feedback and foster both group and individual interaction and dialogue are also critical to effective teaching; as is the ability for creative and appealing organization of course content. Dynamism can be supported with the inclusion of multimedia and other multi-sensory content. Discussion functions such as forums, journals, chat-rooms and group work areas all need to be robust, reliable, easily accessible, and seamless to support spontaneous as well as planned interaction activities.
Table \(\PageIndex{1}\): Teacher style characteristics (adapted from Grasha, 2002, p. 24)
|
CHARACTERISTIC
|
DEFINITION
|
|
Analytic/Synthetic Approach
|
The ability to present and discuss theoretical issues and new discoveries from a wide-scope perspective, addressing a variety of views; and contrasting implications of a variety of theories
|
|
Organization and Clarity
|
Course objectives and organization is clear, materials are well-prepared and learner-friendly
|
|
Teacher—Group Interaction
|
Discussions and mutual sharing of ideas are supported within the learning environment
|
|
Teacher—Individual Learner Interaction
|
Teacher is approachable and accessible; lines of communication are seamless and can occur at the learner’s discretion; good feedback mechanisms in place
|
|
Dynamism and Enthusiasm
|
Degree that the teaching is energetic, stimulating, enjoyable
|
|
General Teaching Ability
|
Teacher’s expertise, consistency, adaptability
|
|
Overload
|
Amount of assigned course work, level of difficulty
|
|
Structure
|
Structure Ability to plan lesson details, organize course within milieu
|
|
Quality
|
Expectations for learner work quality and performance
|
|
Learner—Teacher Rapport
|
Nature and quality of interactions; interactivity level of online milieu
|
Grasha (2002) also identified four psychological temperaments that teachers exhibit, which are loosely based on Carl Jung’s (1971) work These four temperaments are summarized in Table \(\PageIndex{2}\) Again, the design team can ensure that all temperaments are supported within the course design.
The four temperaments mentioned in Table \(\PageIndex{2}\) culminate in being expressed within five teaching styles, according to Grasha (2002). These styles include the expert, formal authority, personal model, facilitator, and delegator (see Table \(\PageIndex{3}\) for more detail on how the design team can facilitate the teaching styles of the future instructors who will teach the course.
Table \(\PageIndex{2}\):Teacher psychological temperament and course design (adapted from Grasha, 2002, pp. 44–45)
|
Teacher Psychological Temperament
|
Design Considerations
|
|
Dionysian: Sensation-Perception (SP)
|
Enable group projects, demonstrations, games, multimedia, practical quizzes and tests, spontaneous action, proactive interactivity, chatrooms, forums, journals, seamless emails
|
|
Epimethean: Sensation-Judging (SJ)
|
Enable lecture/text areas, demonstrations, tests and quizzes, high organization, needs structure and control, prefers record of learner activity, outcomes, methodical, Socratic dialogue
|
|
Promethean: Intuitive-Thinking (NT)
|
Promote learner independence, individual projects, reports, high standards and mechanisms for giving formal feedback
|
|
Apollonian: Intuitive-Feeling (NF)
|
Enable small and large group projects, discussions, simulations, self discovery learning experiences, spontaneous personable interaction with learners, workshops, emotional values-focused expression
|
Table \(\PageIndex{3}\):Grasha’s (2002) teaching styles and design team considerations
|
Teaching Style
|
Design Considerations
|
|
Expert
|
Interesting information transmittal venues, robust resources for learning, high standards
|
|
Formal Authority
|
Feedback mechanisms important, high organization and structure, formal evaluation
|
|
Personal Model
|
Stimulating, multi-sensory milieu, spontaneity, demonstrations, observation, simulations
|
|
Facilitator
|
Personable interaction, support learner independence, Group Project work, Flexibility
|
|
Delegator
|
Empowers learner autonomy, independent projects, spontaneous interaction
|
Constructivist Approaches to Design Decisions
Current educational literature purports that a constructivist approach to e-teaching is recommended in order to meet the needs of 21st century learners (Sims, 2006). “Constructivist epistemology assumes that learners construct their own knowledge on the basis of interaction with their environment. Four epistemological assumptions are at the heart of what we refer to as “constructivist learning”:
-
“Knowledge is physically constructed by learners who are involved in active learning.
-
Knowledge is symbolically constructed by learners who are making their own representations of action.
-
Knowledge is socially constructed by learners who convey their meaning making to others.
-
Knowledge is theoretically constructed by learners who try to explain things they don’t completely understand” (Gagnon and Colley, 2001, p. 1)
Colon et al. (2000, p. 9) described how constructivist instructional design can be applied to support this style of teaching and learning. The authors outlined the fundamental creation tasks of the course design:
-
surface characteristics—screen layout, typography, language, graphics, illustrations, sound;
-
interface—look and feel, user interaction, help, support, navigation, metaphors;
-
scenario—sequence of video cases, options/choices, comparisons;
-
supporting hypertext and hypermedia instructional content;
-
instructional strategies—“chunking” of content.
It can be concluded that both e-learning and e-teaching styles are important considerations for the design team to keep in mind as they collaborate to plan the course creation. This is facilitated through attending to the structure and organization of the course content and environment—in other words, in the packaging.
