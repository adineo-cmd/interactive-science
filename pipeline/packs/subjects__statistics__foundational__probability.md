# Source pack — subjects/statistics/foundational/probability
Lesson title: Probability Foundations
Level: foundational
Match confidence: 2.04

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.04 — LibreTexts: 7.2: What Does Probability Mean?
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://stats.libretexts.org/Courses/Cerritos_College/Introduction_to_Statistics_with_R/07%3A_Introduction_to_Probability/7.02%3A_What_Does_Probability_Mean

7.2: What Does Probability Mean?
-
- Last updated
- Save as PDF
Let’s start with the first of these questions. What is “probability”? It might seem surprising to you, but while statisticians and mathematicians (mostly) agree on what the rules of probability are, there’s much less of a consensus on what the word really means . It seems weird because we’re all very comfortable using words like “chance”, “likely”, “possible” and “probable”, and it doesn’t seem like it should be a very difficult question to answer. If you had to explain “probability” to a five year old, you could do a pretty good job. 
So I’ll have a go at it. Let’s suppose I want to bet on a soccer game between two teams of robots, Arduino Arsenal and C Milan . After thinking about it, I decide that there is an 80% probability that Arduino Arsenal winning. What do I mean by that? Here are three possibilities…
- They’re robot teams, so I can make them play over and over again, and if I did that, Arduino Arsenal would win 8 out of every 10 games on average.
- For any given game, I would only agree that betting on this game is only “fair” if a $1 bet on C Milan gives a $5 payoff (i.e. I get my $1 back plus a $4 reward for being correct), as would a $4 bet on Arduino Arsenal (i.e., my $4 bet plus a $1 reward).
- My subjective “belief” or “confidence” in an Arduino Arsenal victory is four times as strong as my belief in a C Milan victory.
Each of these seems sensible. However they’re not identical, and not every statistician would endorse all of them. The reason is that there are different statistical ideologies (yes, really!) and depending on which one you subscribe to, you might say that some of those statements are meaningless or irrelevant. In this section, I give a brief introduction the two main approaches that exist in the literature. These are by no means the only approaches, but they’re the two big ones.
frequentist view
The first of the two major approaches to probability, and the more dominant one in statistics, is referred to as the frequentist view , and it defines probability as a long-run frequency . Suppose we were to try flipping a fair coin, over and over again. By definition, this is a coin that has P(H)=0.5. What might we observe? One possibility is that the first 20 flips might look like this:
T,H,H,H,H,T,T,H,H,H,H,T,H,H,T,T,T,T,T,H
In this case 11 of these 20 coin flips (55%) came up heads. Now suppose that I’d been keeping a running tally of the number of heads (which I’ll call N H ) that I’ve seen, across the first N flips, and calculate the proportion of heads N H /N every time. Here’s what I’d get (I did literally flip coins to produce this!):
| number.of.flips | number.of.heads | proportion |
|---|---|---|
| 1 | 0 | 0.00 |
| 2 | 1 | 0.50 |
| 3 | 2 | 0.67 |
| 4 | 3 | 0.75 |
| 5 | 4 | 0.80 |
| 6 | 4 | 0.67 |
| 7 | 4 | 0.57 |
| 8 | 5 | 0.63 |
| 9 | 6 | 0.67 |
| 10 | 7 | 0.70 |
| 11 | 8 | 0.73 |
| 12 | 8 | 0.67 |
| 13 | 9 | 0.69 |
| 14 | 10 | 0.71 |
| 15 | 10 | 0.67 |
| 16 | 10 | 0.63 |
| 17 | 10 | 0.59 |
| 18 | 10 | 0.56 |
| 19 | 10 | 0.53 |
| 20 | 11 | 0.55 |
Notice that at the start of the sequence, the proportion of heads fluctuates wildly, starting at .00 and rising as high as .80. Later on, one gets the impression that it dampens out a bit, with more and more of the values actually being pretty close to the “right” answer of .50. This is the frequentist definition of probability in a nutshell: flip a fair coin over and over again, and as N grows large (approaches infinity, denoted N→∞), the proportion of heads will converge to 50%. There are some subtle technicalities that the mathematicians care about, but qualitatively speaking, that’s how the frequentists define probability. Unfortunately, I don’t have an infinite number of coins, or the infinite patience required to flip a coin an infinite number of times. However, I do have a computer, and computers excel at mindless repetitive tasks.  Actually, I did it four times, just to make sure it wasn’t a fluke. The results are shown in Figure 9.1. As you can see, the proportion of observed heads eventually stops fluctuating, and settles down; when it does, the number at which it finally settles is the true probability of heads.
The frequentist definition of probability has some desirable characteristics. Firstly, it is objective: the probability of an event is necessarily grounded in the world. The only way that probability statements can make sense is if they refer to (a sequence of) events that occur in the physical universe. 142 Secondly, it is unambiguous: any two people watching the same sequence of events unfold, trying to calculate the probability of an event, must inevitably come up with the same answer. However, it also has undesirable characteristics. Firstly, infinite sequences don’t exist in the physical world. Suppose you picked up a coin from your pocket and started to flip it. Every time it lands, it impacts on the ground. Each impact wears the coin down a bit; eventually, the coin will be destroyed. So, one might ask whether it really makes sense to pretend that an “infinite” sequence of coin flips is even a meaningful concept, or an objective one. We can’t say that an “infinite sequence” of events is a real thing in the physical universe, because the physical universe doesn’t allow infinite anything. More seriously, the frequentist definition has a narrow scope. There are lots of things out there that human beings are happy to assign probability to in everyday language, but cannot (even in theory) be mapped onto a hypothetical sequence of events. For instance, if a meteorologist comes on TV and says, “the probability of rain in Adelaide on 2 November 2048 is 60%” we humans are happy to accept this. But it’s not clear how to define this in frequentist terms. There’s only one city of Adelaide, and only 2 November 2048. There’s no infinite sequence of events here, just a once-off thing. Frequentist probability genuinely forbids us from making probability statements about a single event. From the frequentist perspective, it will either rain tomorrow or it will not; there is no “probability” that attaches to a single non-repeatable event. Now, it should be said that there are some very clever tricks that frequentists can use to get around this. One possibility is that what the meteorologist means is something like this: “There is a category of days for which I predict a 60% chance of rain; if we look only across those days for which I make this prediction, then on 60% of those days it will actually rain”. It’s very weird and counterintuitive to think of it this way, but you do see frequentists do this sometimes. And it will come up later in this book (see Section 10.5).
Bayesian view
The Bayesian view of probability is often called the subjectivist view, and it is a minority view among statisticians, but one that has been steadily gaining traction for the last several decades. There are many flavours of Bayesianism, making hard to say exactly what “the” Bayesian view is. The most common way of thinking about subjective probability is to define the probability of an event as the degree of belief that an intelligent and rational agent assigns to that truth of that event. From that perspective, probabilities don’t exist in the world, but rather in the thoughts and assumptions of people and other intelligent beings. However, in order for this approach to work, we need some way of operationalising “degree of belief”. One way that you can do this is to formalise it in terms of “rational gambling”, though there are many other ways. Suppose that I believe that there’s a 60% probability of rain tomorrow. If someone offers me a bet: if it rains tomorrow, then I win $5, but if it doesn’t rain then I lose $5. Clearly, from my perspective, this is a pretty good bet. On the other hand, if I think that the probability of rain is only 40%, then it’s a bad bet to take. Thus, we can operationalise the notion of a “subjective probability” in terms of what bets I’m willing to accept.
What are the advantages and disadvantages to the Bayesian approach? The main advantage is that it allows you to assign probabilities to any event you want to. You don’t need to be limited to those events that are repeatable. The main disadvantage (to many people) is that we can’t be purely objective – specifying a probability requires us to specify an entity that has the relevant degree of belief.  To many people this is uncomfortable: it seems to make probability arbitrary. While the Bayesian approach does require that the agent in question be rational (i.e., obey the rules of probability), it does allow everyone to have their own beliefs; I can believe the coin is fair and you don’t have to, even though we’re both rational. The frequentist view doesn’t allow any two observers to attribute different probabilities to the same event: when that happens, then at least one of them must be wrong. The Bayesian view does not prevent this from occurring. Two observers with different background knowledge can legitimately hold different beliefs about the same event. In short, where the frequentist view is sometimes considered to be too narrow (forbids lots of things that that we want to assign probabilities to), the Bayesian view is sometimes thought to be too broad (allows too many differences between observers).
What’s the difference? And who is right?
Now that you’ve seen each of these two views independently, it’s useful to make sure you can compare the two. Go back to the hypothetical robot soccer game at the start of the section. What do you think a frequentist and a Bayesian would say about these three statements? Which statement would a frequentist say is the correct definition of probability? Which one would a Bayesian do? Would some of these statements be meaningless to a frequentist or a Bayesian? If you’ve understood the two perspectives, you should have some sense of how to answer those questions.
Okay, assuming you understand the different, you might be wondering which of them is right ? Honestly, I don’t know that there is a right answer. As far as I can tell there’s nothing mathematically incorrect about the way frequentists think about sequences of events, and there’s nothing mathematically incorrect about the way that Bayesians define the beliefs of a rational agent. In fact, when you dig down into the details, Bayesians and frequentists actually agree about a lot of things. Many frequentist methods lead to decisions that Bayesians agree a rational agent would make. Many Bayesian methods have very good frequentist properties.
For the most part, I’m a pragmatist so I’ll use any statistical method that I trust. As it turns out, that makes me prefer Bayesian methods, for reasons I’ll explain towards the end of the book, but I’m not fundamentally opposed to frequentist methods. Not everyone is quite so relaxed. For instance, consider Sir Ronald Fisher, one of the towering figures of 20th century statistics and a vehement opponent to all things Bayesian, whose paper on the mathematical foundations of statistics referred to Bayesian probability as “an impenetrable jungle [that] arrests progress towards precision of statistical concepts” Fisher (1922b). Or the psychologist Paul Meehl, who suggests that relying on frequentist methods could turn you into “a potent but sterile intellectual rake who leaves in his merry path a long train of ravished maidens but no viable scientific offspring” Meehl (1967). The history of statistics, as you might gather, is not devoid of entertainment.
In any case, while I personally prefer the Bayesian view, the majority of statistical analyses are based on the frequentist approach. My reasoning is pragmatic: the goal of this book is to cover roughly the same territory as a typical undergraduate stats class in psychology, and if you want to understand the statistical tools used by most psychologists, you’ll need a good grasp of frequen

## Match 2.02 — Algebra-and-Trigonometry-2e-WEB § 13.7 Probability

1299
Chapter Review
1310

Exercises
1313
Proofs, Identities, and Toolkit Functions
1321
A
Answer Key
1333
Index
1503
Access for free at openstax.org

Preface
About OpenStax
OpenStax is part of Rice University, which is a 501(c)(3) nonprofit charitable corporation. As an educational initiative, it's
our mission to transform learning so that education works for every student. Through our partnerships with
philanthropic organizations and our alliance with other educational resource companies, we're breaking down the most
common barriers to learning. Because we believe that everyone should and can have access to knowledge.
About OpenStax Resource
Customization
Algebra and Trigonometry 2e is licensed under a Creative Commons Attribution 4.0 International (CC BY) license, which
means that you can distribute, remix, and build upon the content, as long as you provide attribution to OpenStax and its
content contributors.
Because our books are openly licensed, you are free to use the entire book or pick and choose the sections that are most
relevant to the needs of your course. Feel free to remix the content by assigning your students certain chapters and
sections in your syllabus, in the order that you prefer. You can even provide a direct link in your syllabus to the sections
in the web view of your book.
Instructors also have the option of creating a customized version of their OpenStax book. The custom version can be
made available to students in low-cost print or digital form through their campus bookstore. Visit your book page on
openstax.org for more information.
Art attribution
In Algebra and Trigonometry 2e, most photos and third-party illustrations contain attribution to their creator, rights
holder, host platform, and/or license within the caption. Because the art is openly licensed, anyone may reuse the art as
long as they provide the same attribution to its original source. To maximize readability and content flow, mathematical
expressions that are rendered as art do not include attribution in the text. This art can be assumed to be developed by
OpenStax and can be reused under the CC-BY license with attribution.
Errata
All OpenStax textbooks undergo a rigorous review process. However, like any professional-grade textbook, errors
sometimes occur. Since our books are web based, we can make updates periodically when deemed pedagogically
necessary. If you have a correction to suggest, submit it through the link on your book page on openstax.org. Subject
matter experts review all errata suggestions. OpenStax is committed to remaining transparent about all updates, so you
will also find a list of past errata changes on your book page on openstax.org.
Format
You can access this textbook for free in web view or PDF through openstax.org, and for a low cost in print.
About Algebra and Trigonometry 2e
Algebra and Trigonometry 2e provides a comprehensive exploration of algebraic principles and meets scope and
sequence requirements for a typical introductory algebra and trigonometry course. The modular approach and the
richness of content ensures that the book meets the needs of a variety of courses. Algebra and Trigonometry 2e offers a
wealth of examples with detailed, conceptual explanations, building a strong foundation in the material before asking
students to apply what they’ve learned.
Coverage and Scope
In determining the concepts, skills, and topics to cover, we engaged dozens of highly experienced instructors with a
range of student audiences. The resulting scope and sequence proceeds logically while allowing for a significant amount
of flexibility in instruction.
Chapters 1 and 2 provide both a review and foundation for study of functions that begins in Chapter 3. The authors
recognize that while some institutions may find this material a prerequisite, other institutions have told us that they have
a cohort that needs the prerequisite skills built into the course.
•
Chapter 1: Prerequisites
•
Chapter 2: Equations and Inequalities
Chapters 3-6: The Algebraic Functions
•
Chapter 3: Functions
Preface
1

•
Chapter 4: Linear Functions
•
Chapter 5: Polynomial and Rational Functions
•
Chapter 6: Exponential and Logarithm Functions
Chapters 7-10: A Study of Trigonometry
•
Chapter 7: The Unit Circle: Sine and Cosine Functions
•
Chapter 8: Periodic Functions
•
Chapter 9: Trigonometric Identities and Equations
•
Chapter 10: Further Applications of Trigonometry
Chapters 11-13: Further Study in Algebra and Trigonometry
•
Chapter 11: Systems of Equations and Inequalities
•
Chapter 12: Analytic Geometry
•
Chapter 13: Sequences, Probability, and Counting Theory
Development Overview
OpenStax Algebra and Trigonometry 2e is the product of a collaborative effort by a group of dedicated authors, editors,
and instructors whose collective passion for this project has resulted in a text that is remarkably unified in purpose and
voice. Special thanks is due to our Lead Author, Jay Abramson of Arizona State University, who provided the overall vision
for the book and oversaw the development of each and every chapter, drawing up the initial blueprint, reading
numerous drafts, and assimilating field reviews into actionable revision plans for our authors and editors.
The collective experience of our author team allowed us to pinpoint the subtopics, exceptions, and individual
connections that give students the most trouble. The textbook is therefore replete with well-designed features and
highlights which help students overcome these barriers. As the students read and practice, they are coached in methods
of thinking through problems and internalizing mathematical processes.
Accuracy of the Content
We understand that precision and accuracy are imperatives in mathematics, and undertook a dedicated accuracy
program led by experienced faculty.Examples, art, problems, and solutions were reviewed by dedicated faculty, with a
separate team evaluating the answer key and solutions.
The text also benefits from years of usage by thousands of faculty and students. A core aspect of the second edition
revision process included consolidating and ensuring consistency with regard to any errata and corrections that have
been during in the series' extensive usage and incorporation into homework systems.
Changes to the Second Edition
The Algebra and Trigonometry 2e revision focused on mathematical clarity and accuracy as well as inclusivity. Examples,
Exercises, and Solutions were reviewed by multiple faculty experts. All improvement suggestions and errata updates,
driven by faculty and students from several thousand colleges, were considered and unified across the different formats
of the text.
OpenStax and our authors are aware of the difficulties posed by shifting problem and exercise numbers when textbooks
are revised. In an effort to make the transition to the 2nd edition as seamless as possible, we have minimized any
shifting of exercise numbers.
The revision also focused on supporting inclusive and welcoming learning experiences. The introductory narratives,
example and problem contexts, and even many of the names used for fictional people in the text were all reviewed using
a diversity, equity, and inclusion framework. Several hundred resulting revisions improve the balance and relevance to
the students using the text, while maintaining a variety of applications to diverse careers and academic fields. In
particular, explanations of scientific and historical aspects of mathematics have been expanded to include more
contributors. For example, the authors added additional historical and multicultural context regarding what is widely
known as Pascal’s Triangle, and similarly added details regarding the international process of decoding the Enigma
machine (including the role of Polish college students). Several chapter opening narratives and in-chapter references are
completely new, and contexts across all chapters were specifically reviewed for equity in gender representation and
connotation.
Finally, prior to the release of this edition, OpenStax published a series of Corequisite Skillsheets to support different
models and approaches to instruction. These remain available, and are described in more detail below.
2
Preface
Access for free at openstax.org

Pedagogical Foundations and Features
Learning Objectives
Each chapter is divided into multiple sections (or modules), each of which is organized around a set of learning
objectives. The learning objectives are listed explicitly at the beginning of each section and are the focal point of every
instructional element
Narrative text
Narrative text is used to introduce key concepts, terms, and definitions, to provide real-world context, and to provide
transitions between topics and examples. Throughout this book, we rely on a few basic conventions to highlight the
most important ideas:
•
Key terms are boldfaced, typically when first introduced and/or when formally defined.
•
Key concepts and definitions are called out in a blue box for easy reference.
Examples
Each learning objective is supported by one or more worked examples, that demonstrate the problem-solving
approaches that students must master. The multiple Examples model different approaches to the same type of problem,
or introduce similar problems of increasing complexity.
All Examples follow a simple two- or three-part format. The question clearly lays out a mathematical problem to solve.
The Solution walks through the steps, usually providing context for the approach—in other words, why the instructor is
solving the problem in a specific manner. Finally, the Analysis (for select Examples) reflects on the broader implications
of the Solution just shown. Examples are followed by a Try It question, as explained below.
Figures
Algebra and Trigonometry 2e contains more than 2000 figures and illustrations, the vast majority of which are graphs
and diagrams. Art throughout the text adheres to a clear, understated style, drawing the eye to the most important
information in each figure while minimizing visual distractions. Color contrast is employed with discretion to distinguish
between the different functions or features of a graph.
Supporting Features
Several elements contribute to and check understanding.
•
A “How To” is a list of steps necessary to solve a certain type of problem. A How To typically precedes an Example
that proceeds to demonstrate the steps in action.
•
A “Try It” exercise immediately follows an Example or a set of related Examples, providing the student with an
immediate opportunity to solve a similar problem. In the PDF and the Web View version of the text, answers to the
Try It exercises are located in the Answer Key.
•
A Q&A may appear at any point in the narrative, but most often follows an Example. This feature pre-empts
misconceptions by posing a commonly asked yes/no question, followed by a detailed answer and explanation.
•
The “Media” icon appears at the conclusion of each section, just prior to the Section Exercises. This icon marks a list
Preface
3

of links to online video tutorials that reinforce the concepts and skills introduced in the section.
While we have selected tutorials that closely align to our learning objectives, we did not produce these tutorials, nor
were they specifically produced or tailored to accompany Algebra and Trigonometry 2e.
Section Exercises
Each section of every chapter concludes with a well-rounded set of exercises that can be assigned as homework or used
selectively for guided practice. With over 6300 exercises across the 13 chapters, instructors should have plenty from
which to choose.
Section Exercises are organized by question type, and generally appear in the following order:
•
Verbal questions assess conceptual understanding of key terms and concepts.
•
Algebraic problems require students to apply algebraic manipulations demonstrated in the section.
•
Graphical problems assess students’ ability to interpret or produce a graph.
•
Numeric problems require the student to perform calculations or computations.
•
Technology problems encourage exploration through use of a graphing utility, either to visualize or verify algebraic
results or to solve problems via an alternative to the methods demonstrated in the section.
•
Extensions pose problems more challenging than the Examples demonstrated in the section. They require students
to synthesize multiple learning objectives or apply critical thinking to solve complex problems.
•
Real-World Applications present realistic problem scenarios from fields such as physics, geology, biology, finance,
and the social sciences.
Chapter Review Features
Each chapter concludes with a review of the most important takeaways, as well as additional practice problems that
students can use to prepare for exams.
•
Key Terms provides a formal definition for each bold-faced term in the chapter.
•
Key Equations presents a compilation of formulas, theorems, and standard-form equations.
•
Key Concepts summarizes the most important ideas introduced in each section, linking back to the relevant
Example(s) in case students need to review.
•
Chapter Review Exercises include 40-80 practice problems that recall the most important concepts from each
section.
•
Practice Test includes 25-50 problems assessing the most important learning objectives from the chapter. Note
that the practice test is not organized by section, and may be more heavily weighted toward cumulative objectives
as opposed to the foundational objectives covered in the opening sections.
Corequisite Support
Each Algebra and Trigonometry 2e section is paired with a thoughtfully developed, topically aligned skills module that
prepares students for the course material. Sharon North (St. Louis Community College) developed a coordinated set of
support resources, which provide review, instruction, and practice for algebra students. The author team identified
foundational skills and concepts, then mapped them to each module. The corequisit
