# Source pack — subjects/philosophy/foundational/what-is-philosophy
Lesson title: What Is Philosophy?
Level: foundational
Match confidence: 3.07

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.07 — LibreTexts: 3: Formal Logic in Philosophy
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://human.libretexts.org/Bookshelves/Philosophy/Introduction_to_Philosophy%3A_Logic_(Assadian_et_al.)/03%3A_Formal_Logic_in_Philosophy

3: Formal Logic in Philosophy
This chapter discusses some philosophical issues concerning the nature of formal logic. Particular attention will be given to the concept of logical form, the goal of formal logic in capturing logical form, and the explanation of validity in terms of logical form. We shall see how this understanding of the notion of validity allows us to identify what we call formal fallacies, which are mistakes in an argument due to its logical form. We shall also discuss some philosophical problems about the nature of logical forms. For the sake of simplicity, our focus will be on propositional logic . But many of the results to be discussed do not depend on this choice, and are applicable to more advanced logical systems.
Logic, Validity, and Logical Forms
Different sciences have different subject matters: physics tries to discover the properties of matter, history aims to discover what happened in the past, biology studies the development and evolution of living organisms, mathematics is, or at least seems to be, about numbers, sets, geometrical spaces, and the like. But what is it that logic investigates? What, indeed, is logic?
This is an essentially philosophical question, but its answer requires reflection on the status and behavior of logical rules and inferences. Textbooks typically present logic as the science of the relation of consequence that holds between the premises and the conclusion of a valid argument , where an argument is valid if it is not possible for its premises to be true and the conclusion false. If logic is the science of the relation of consequence that holds between the premises and the conclusion of a valid argument, we can say that logicians will be concerned with whether a conclusion of an argument is or is not a consequence of its premises.
Let us examine the notion of validity with more care. For example, consider the following argument:
- If Alex is a sea bream, then Alex is not a rose.
- Alex is a rose.
- Alex is not a sea bream.
It can be shown that it is not possible for (1) and (2) to be true yet (3) false. Hence, the whole argument is valid. For convenience, let us represent each sentence of the argument into the standard propositional logic, which aims to analyze the structure and meaning of various propositions. To do this, we must first introduce the language of our logic.
\[(\neg )\]
Thus, if we use A for “Alex is a sea bream,” we can represent (1) with , and represent our above argument (1)-(3) as follows:
But, recall, our aim was to examine why this argument, if at all, is valid. The mere representation of “not” by “ ” and “if … then” by “ ” will not be sufficient to verify the validity or invalidity of a given argument: we also need to know what these symbols and the propositions they express mean . But how can we specify the meaning of “ ” and “ ”?
It is plausible to say that if A is true, then its negation is false, and vice versa. For example, if “Alex is a rose” is true, then “Alex is not a rose” is false. This gives us the meaning of “ ”. We can represent this information about the meaning of negation in terms of a truth-table in the following way (with T symbolising true , and F false ):
| T | F |
| F | T |
Here, we can read each row of the truth-table as a way the world could be. That is, in situations or possible worlds where A is true (for example, where Alex is indeed a sea bream), is false (it is false that Alex is a sea bream); and vice versa. Thus construed, a truth-table gives us the situations in which a proposition such as A is true, and those in which it is false. In addition, it tells us in what situations is true, and in what situations it is false.
In a similar way, we can specify the meaning of “ ” by specifying the situations in which conditional propositions of the form “ ” are true or false. Here is the standard truth-table for “ ”:
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |
As can be seen, there is only one row in which is false; i.e. the second row in which the consequent is false, but the antecedent is true. As the first row tells us, if both A and B are true, then so is . Further, the third and fourth rows tell us that if the antecedent is false, then the whole conditional is true, regardless of whether the consequent is true or false. Hence, all conditionals with false antecedents are true.
But how is it possible for a conditional to be true if its antecedent is false? Here is one suggestion to answer this question: if your assumption is false, then you can legitimately conclude whatever you would like to. For example, if you assume that Amsterdam is the capital of England, you can legitimately conclude anything whatsoever; it does not matter whether it’s true or false. Thus, from the assumption that Amsterdam is the capital of England, you can conclude that Paris is the capital of France. You can also conclude that Paris is the capital of Brazil.
We can see that one important piece of information that truth-tables convey concerns how the truth or falsity of complex sentences such as and depends on the truth or falsity of the propositional letters they contain: the truth or falsity of depends solely on the truth or falsity of A and of B . Similarly, the truth or falsity of depends solely on that of A .
Now we are in a position to verify whether our argument (1)-(3) is valid or not. And, as we shall see in a moment, the validity or invalidity of an argument depends on the meaning of the logical connectives (such as “ ” and “ ”) which is specified by the corresponding truth-tables. In other words, if the truth-tables of these connectives were different to what they actually are, we would have a different collection of valid arguments.
We defined an argument as valid if it is not possible for its premises to be true and the conclusion false. By designing a truth-table, we can see under what conditions the premises and the conclusion of our argument (1)-(3) are true or false:
| T | T | F | F | F |
| T | F | F | T | T |
| F | T | T | F | T |
| F | F | T | T | T |
Since in the above truth-table, there is no row in which the premises are true and the conclusion false, the argument is valid. The only row in which the premises are both true is the third row, and in that row the conclusion is also true. In other words, there is no world or situation in which (1) and (2) are true, but (3) is not. This just means that the argument is valid.
Now, consider the following argument:
- If Alex is a tiger, then Alex is an animal.
- Alex is not a tiger.
- Alex is not an animal.
There are situations in which the argument works perfectly well. For example, suppose that Alex is not a tiger but is, in fact, a table. In this case, Alex would not be an animal, either. And thus, the sentences (4), (5), and (6) would be true. But this is not always the case, for we can imagine a situation in which the premises are true but the conclusion false, such as where Alex is not a tiger but is, in fact, a dog. Thus, by imagining the situation just described, we would have produced a counterexample: in this situation, (6) would be false, and hence it would not be a consequence of (4) and (5). The argument is invalid.
That the argument is invalid can also be verified by the method of truth-tables. For we can find a situation in which (4) and (5) are both true and yet (6) false. That is, in the truth-table, if we represent (4) as , (5) as , and (6) as , there will be at least one row in which the premises are true and the conclusion false (which row is that?):
| T | T | T | F | F |
| T | F | F | F | T |
| F | T | T | T | F |
| F | F | T | T | T |
We said that logicians are concerned with validity or invalidity of arguments, and we proposed the method of truth-tables for undertaking this task. But which arguments are valid, and which are not? It is here that the notion of logical form emerges. Suppose that a logician embarks on the ridiculous task of recording each and every valid argument. In this case, she would surely record that (1)-(3) is valid. Now, suppose she faces the following argument:
- If Alice is reading Hegel, she is not frustrated.
- Alice is frustrated.
- Alice is not reading Hegel.
To see whether this argument is valid or not, she can rewrite each sentence of the argument in her logical language: Alice is reading Hegel ; Alice is frustrated ; and, if Alice is reading Hegel, then Alice is not frustrated) . She can then design a suitable truth-table, and check whether there is any row or situation in which the premises are both true and the conclusion false. Since there is no such row (why?), she will correctly announce that the argument is valid.
But it is obvious that in order to check the validity of (7)-(9), our logician did not need to go to this effort. It would suffice if she just noted that the two arguments (1)-(3) and (7)-(9), and their respective truth-tables, are to a great extent similar ; they have the same form . In fact, their only difference is that in the first, the letters A and B have been used, and in the second they have been substituted for P and Q , respectively. The logical connectives and have not changed.
To see the point, let us translate each argument into the language of propositional logic we introduced above:
The two arguments have something in common . Let us say that what they have in common is their logical form . As you can see, the logical connectives of the arguments have not changed. Since the two arguments have the same form, if one is valid, then the other must be valid, too. More generally, all arguments of this same form are valid. The liberating news is that our logician does not need to embark on the exasperating task of checking the validity of each and every argument separately. For if she already knows that a given argument is valid, and if she can also show that another argument has the same form as the first one, then she can be sure that the second argument is valid without having to design its truth-table.
We said that an argument is valid if it is not possible for the premises to be true and the conclusion false. Now, we can say that every argument which shares its form with a valid argument is also valid, and consequently, every argument which shares its form with an invalid argument is also invalid. [1] It is in this sense that the idea of logical form can be used to establish the (in)validity of arguments. For example, suppose that we want to check the validity of the following argument:
- If Alice is reading Russell, then Alice is thinking of logic.
- Alice is not reading Russell.
- Alice is not thinking of logic.
As soon as we see that (10)-(12) has the same form as (4)-(6), which we already know to be invalid, we can be assured that the former is also invalid without having to construct its truth-table.
Thus, we can see that understanding the notion of validity in terms of logical form allows us to identify various formal fallacies . For example, the argument (10)-(12) is an instance of the fallacy of denying the antecedent . Thus, every argument which shares its form with (10)-(12) is also invalid.
There are three further questions we may ask about logical forms: (i) How can we “extract” the logical form from arguments which they share? That is, how can we show that various arguments are instances of a common logical form? (ii) What is the nature of a logical form? Is a logical form a thing , and if so, what sort of thing is it? (iii) Does each argument have only one logical form? In the following three sections, we shall talk about these three questions, respectively.
Extracting Logical Forms
Let us, again, consider the arguments (1)-(3) and (7)-(9) which seem to share one and the same logical form. How can we show that they have a common logical form? First, we should represent them in logical symbols:
To see what these two arguments have in common, we must abstract away from (or ignore or leave aside) the specific contents of thei

## Match 3.06 — LibreTexts: 4.1: Foundations of Educational Philosophy
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://socialsci.libretexts.org/Courses/North_Central_Michigan_College/ED_101%3A_Introduction_to_Education/04%3A_Educational_Philosophies/4.01%3A_Foundations_of_Educational_Philosophy

4.1: Foundations of Educational Philosophy
-
- Last updated
- Save as PDF
- Education Department
- SUNY Oneonta via LumenLearning
A philosophy grounds or guides practice in the study of existence and knowledge while developing an ontology (the study of being) on what it means for something or someone to be—or exist. Educational philosophy, then, provides a foundation which constructs and guides the ways knowledge is generated and passed on to others. Therefore, it is of critical import that teachers begin to develop a clear understanding of philosophical traditions and how the philosophical underpinnings inform their educational philosophies; because, a clear educational philosophy will help guide and develop cohesive reasons for how each teacher designs classroom spaces and learning interactions with both teachers and students. A clear philosophy also frames the curriculum along a spectrum from teacher-centered curriculum to student-centered curriculum to society-centered curriculum.
Over the course of history, philosophy has had several paradigm shifts that influence teaching and learning. Each of these paradigm shifts altered the ontology, epistemology, axiology and school of philosophy, which also shaped what it means to be a teacher within each historical era. While Occidental metaphysical traditions are grounded in the tradition of the Ancient Greeks and the philosophies of Plato and Aristotle, philosophical traditions from the 19th century helped ground the early foundations of educational philosophy and the development of public education in Europe and the United States.
“What does it mean to be?” is the guiding question of ontology, and stemming from one’s stance on this foundational question, a general structure (Table 1) guides an educator’s general stance on epistemology, axiology, educational philosophy, and psychological orientations; these, then, inform, or should inform, an educator’s choice of instructional methods and classroom management techniques.
Visual Literacy Activity
Rather than focusing on the difficult and the abstract, let’s focus on the concrete and work our way up. Use Table 1 to help answer the following questions:
- Choose one instructional activity from Table 1 you feel is an effective method of instruction. Explain why?
- Choose one classroom management technique from Table 1 you feel is an effective classroom management technique. Explain why?
- Do your two choices align in a similar area of the outlined shape? If so, explain why they might align? If not, explain why they might not align.
- Trace your two choices up the table to psychological orientations, educational philosophy, axiology, epistemology, and ontology. Does this line align with where you placed on the philosophy of education assessment survey? If so, you are beginning to construct an outline for your philosophy of education. If not, you may need to explore more on what you feel is important in being a teacher. In either case, you will use the rest of this chapter to help guide your (re)developing philosophy of education.
Contributors and Attributions
- Foundations of Education. Authored by : SUNY Oneonta Education Department. License : CC BY: Attribution

## Match 3.05 — LibreTexts: 5.1: Foundations of Educational Philosophy
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://socialsci.libretexts.org/Bookshelves/Early_Childhood_Education/Foundations_of_Education_(SUNY_Oneonta)/05%3A_Educational_Philosophies/5.01%3A_Foundations_of_Educational_Philosophy

5.1: Foundations of Educational Philosophy
Visual Literacy Activity
Contributors and Attributions
CC licensed content, Original
selected template will load here
This action is not available.
A philosophy grounds or guides practice in the study of existence and knowledge while developing an ontology (the study of being) on what it means for something or someone to be—or exist. Educational philosophy, then, provides a foundation which constructs and guides the ways knowledge is generated and passed on to others. Therefore, it is of critical import that teachers begin to develop a clear understanding of philosophical traditions and how the philosophical underpinnings inform their educational philosophies; because, a clear educational philosophy will help guide and develop cohesive reasons for how each teacher designs classroom spaces and learning interactions with both teachers and students. A clear philosophy also frames the curriculum along a spectrum from teacher-centered curriculum to student-centered curriculum to society-centered curriculum.
Over the course of history, philosophy has had several paradigm shifts that influence teaching and learning. Each of these paradigm shifts altered the ontology, epistemology, axiology and school of philosophy, which also shaped what it means to be a teacher within each historical era. While Occidental metaphysical traditions are grounded in the tradition of the Ancient Greeks and the philosophies of Plato and Aristotle, philosophical traditions from the 19th century helped ground the early foundations of educational philosophy and the development of public education in Europe and the United States.
“What does it mean to be?” is the guiding question of ontology, and stemming from one’s stance on this foundational question, a general structure (Table 1) guides an educator’s general stance on epistemology, axiology, educational philosophy, and psychological orientations; these, then, inform, or should inform, an educator’s choice of instructional methods and classroom management techniques.
Rather than focusing on the difficult and the abstract, let’s focus on the concrete and work our way up. Use Table 1 to help answer the following questions:
