# Source pack — subjects/veterinary-medicine/foundational/veterinary-biomedical-sciences
Lesson title: Veterinary Biomedical Sciences
Level: foundational
Match confidence: 1.01

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.01 — LibreTexts: 6.2: Logarithmic Scales in Natural Sciences
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Courses/College_of_the_Canyons/Math_100%3A_Liberal_Arts_Mathematics_(Saburo_Matsumoto)/06%3A_Growth_and_Decay/6.02%3A_Logarithmic_Scales_in_Natural_Sciences

6.2: Logarithmic Scales in Natural Sciences
In 2010, a major earthquake struck Haiti, destroying or damaging over 285,000 homes [1] . One year later, another, stronger earthquake devastated Honshu, Japan, destroying or damaging over 332,000 buildings, [2] like those shown in the image above. Even though both caused substantial damage, the earthquake in Japan was 100 times as strong as the earthquake in Haiti. How do we know? The magnitudes of earthquakes are measured on a scale known as the Richter Scale. The Haitian earthquake registered a 7.0 on the Richter Scale [3] whereas the Japanese earthquake registered a 9.0. [4]
The Richter Scale is a base-ten logarithmic scale. In other words, an earthquake of magnitude 8 is not twice as great as an earthquake of magnitude 4. It is 108-4=104=10,000 times as great! In this section, we will investigate the nature of the Richter Scale and the base-ten function upon which it depends.
Converting from Logarithmic to Exponential Form
In order to analyze the magnitude of earthquakes or compare the magnitudes of two different earthquakes, we need to be able to convert between logarithmic and exponential form. For example, suppose the amount of energy released from one earthquake were 500 times greater than the amount of energy released from another. We want to calculate the difference in magnitude. The equation that represents this problem is \(10^{x}=500\), where \(x\) the difference in magnitudes on the Richter Scale. How would we solve for \(x\)?
We have not yet learned a method for solving exponential equations. None of the algebraic tools discussed so far is sufficient to solve \(10^{x}=500\). We know that \(10^{2}=100\) and \(10^{3}=1000\), so it is clear that \(x\) must be some value between 2 and 3, since \(y=10^{x}\) increasing. We can examine a graph, below , to better estimate the solution.
Using Common Logarithms
Sometimes we may see a logarithm written without a base. In this case, we assume that the base is 10. In other words, the expression \(\log (x)\) means \(\log _{10}(x)\). We call a base-10 logarithm a common logarithm . Common logarithms are used to measure the Richter Scale mentioned at the beginning of the section. Scales for measuring the brightness of stars and the pH of acids and bases also use common logarithms.
Definition: Common Logarithm
A common logarithm is a logarithm with base 10. We write \(\log _{10}(x)\) simply as \(\log (x)\). The common logarithm of a positive number \(x\) satisfies the following definition.
For \(x>0\)
\(y=\log (x)\) is equivalent to \(10^{y}=x\)
We read \(\log (x)\) as, “the logarithm with base 10 of \(x\)” or “log base 10 of \(x\).”
The logarithm \(y\) is the exponent to which 10 must be raised to get \(x\).
How to
Given a common logarithm of the form \(y=\log (x)\), evaluate it mentally.
- Rewrite the argument x as a power of \(10: 10^{y}=x\).
- Use previous knowledge of powers of 10 to identify \(y\) by asking, “To what exponent must 10 be raised in order to get \(y\)?
Example \(\PageIndex{1}\): Finding value of a common Logarithm Mentally
Evaluate \(y=\log (1000)\) without using a calculator.
Solution
First we rewrite the logarithm in exponential form: \(10^{y}=1000\). Next, we ask, “To what exponent must 10 be raised in order to get 1000?” We know
\[\begin{aligned}
10^{3}&=1000\\
\therefore \log (1000)&=3
\end{aligned} \nonumber \]
Try it Now 4
Evaluate \(y=\log (1,000,000)\).
How to
Given a common logarithm with the form \(y=\log (x)\), evaluate it using a calculator.
- Press [LOG].
- Enter the value given for x followed by [ ) ].
- Press [ENTER].
Example \(\PageIndex{2}\): Finding value of a common Logarithm using a Calculator
Evaluate \(y=\log (321)\) to four decimal places using a calculator.
Solution
- Press [LOG] .
- Enter 321 , followed by [ ) ] .
- Press [ENTER] .
Rounding to four decimal places, \(\log (321) \approx 2.5065\).
Analysis
Note that \(10^{2}=100\) and that \(10^{3}=1000\). Since 321 is between 100 and 1000, we know that \(\log (321)\) must be between \(\log (100)\) and \(\log (1000)\). This gives us the following:
\[\begin{array}{l}
100<321<1000 \\
2<205065<3
\end{array} \nonumber \]
Try it Now 5
Evaluate \(y = \log(123)\) to four decimal places using a calculator.
Example \(\PageIndex{3}\)
The 1994 Northridge Earthquake in Southern California registered a 6.7 on the Richter scale. Exactly a year later, the 1995 Kobe Earthquake in Japan registered a 6.9. Compare the amount of energy released from these two quakes.
Solution
\[10^{6.9-6.7}=10^{0.2}=1.585 \nonumber \]
The Kobe Earthquake released about 1.56 times the energy (about 56% more) released by the Northridge quake.
Example \(\PageIndex{4}\): Rewriting and solving a real-world exponential model
The amount of energy released from one earthquake was 500 times greater than the amount of energy released from another. The equation \(10^x=500\) represents this situation, where \(x\) is the difference in magnitudes on the Richter Scale. To the nearest thousandth, what was the difference in magnitudes?
Solution
We begin by rewriting the exponential equation in logarithmic form.
\[\begin{aligned}
10^{x} &= 500\\
\log (500) &= x \quad \text {Use the definition of the common log.}
\end{aligned} \nonumber \]
Next we evaluate the logarithm using a calculator:
- Press [LOG] .
- Enter 500, followed by [ ) ] .
- Press [ENTER] .
- To the nearest thousandth, \(\log (500) \approx 2.699\).
The difference in magnitudes was about 2.699. This means that the bigger earthquake has the magnitude about 2.7 more than the magnitude of the smaller earthquake.
Try it Now 6
The amount of energy released from one earthquake was 8,500 times as great as the amount of energy released from another. The equation \(10^x=8500\) represents this situation, where \(x\) is the difference in magnitudes on the Richter Scale. To the nearest thousandth, what was the difference in magnitudes?
Reference
- References (14)
Contributors and Attributions
-
Saburo Matsumoto
CC-BY-4.0

## Match 1.01 — LibreTexts: 1.4: Sociology and the Social Sciences
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://socialsci.libretexts.org/Courses/Collin_College/Introduction_to_Sociology/01%3A_The_Basics/1.04%3A_Sociology_and_the_Social_Sciences

1.4: Sociology and the Social Sciences
-
- Last updated
- Save as PDF
- Anonymous
- LibreTexts
Learning Objectives
- Analyze the similarities and differences between the social sciences
As a social science, sociology involves the application of scientific methods to the study of the human aspects of the world. The social science disciplines also include psychology, political science, and economics, among other fields.  Political science studies the governing of groups and countries; and economics concerns itself with the production and allocation of wealth in society. The use of scientific methods differentiates the social sciences from the humanities.
The Development of Social Science
In ancient philosophy, there was no difference between science and humanities. Only with the development of mathematical proof did there gradually arise a perceived difference between scientific disciplines and the humanities or liberal arts. Thus, Aristotle studied planetary motion and poetry with the same methods; Plato mixed geometrical proofs with his demonstration on the state of intrinsic knowledge.
During the 17 th century, a revolution took place in what constituted science, particularly with the work of Isaac Newton in physics. Newton made a sharp distinction between the natural world, which he asserted was an independent reality that operated by its own laws, and the human or spiritual world. Newton’s ideas differed from other philosophers of the same period (such as Blaise Pascal, Gottfried Leibniz, and Johannes Kepler) for whom mathematical expressions of philosophical ideals were taken to be symbolic of natural human relationships as well; the same laws moved physical and spiritual reality. Newton, along with others, changed the basic framework by which individuals understood what was scientific.
In the realm of other disciplines, this reformulation of the scientific method created a pressure to express ideas in the form of mathematical relationships, that is, unchanging and abstract laws. In the late 19 th century, attempts to discover laws regarding human behavior became increasingly common. The rise of statistics and probability theory in the 20 th century also contributed to the attempt to mathematically model human behavior in the social sciences.
In the attempt to study human behavior using scientific and empirical principles, sociologists always encounter dilemmas, as humans do not always operate predictably according to natural laws. Hence, even as Durkheim and Marx formulated law-like models of the transition from pre-industrial to industrial societies, Weber was interested in the seemingly “irrational” ideas and values, which, in his view, also contributed to the transition. The social sciences occupy a middle position between the “hard” natural sciences and the interpretive bent of the humanities.
Key Points
- In the 17th century, scholars began to define the natural world as a reality separate from human or spiritual reality. As such, they thought the natural world should be studied using scientific and empirical methods.
- The pressure to discover mathematical relationships between objects of study carried into the study of human behavior, thus distinguishing social sciences from the humanities.
- By the 19th century, scholars began studying human behavior from a scientific perspective in an attempt to discover law-like properties of human interaction.
- In the attempt to study human behavior using scientific and empirical principles, sociologists always encounter dilemmas, as humans do not always operate predictably according to natural laws.
- Even as Durkheim and Marx formulated law-like models of the transition from pre-industrial to industrial societies, Weber was interested in the seemingly “irrational” ideas and values, which, in his view, also contributed to the transition.
Key Terms
- humanities : The humanities are academic disciplines that study the human condition, using methods that are primarily analytical, critical, or speculative, as distinguished from the mainly empirical approaches of the natural sciences.
- science : A particular discipline or branch of learning, especially one dealing with measurable or systematic principles rather than intuition or natural ability.
- social science : A branch of science that studies society and the human behavior in it, including anthropology, communication studies, criminology, economics, geography, history, political science, psychology, social studies, and sociology.

## Match 1.01 — LibreTexts: 1.4: Conducting Background Research in the Sciences
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://med.libretexts.org/Bookshelves/Anatomy_and_Physiology/Labs%3A_A_Mixed_Course_Based_Research_Approach_to_Human_Physiology_(Whitmer)/01%3A_Introductory_Material/1.04%3A_Conducting_Background_Research_in_the_Sciences

1.4: Conducting Background Research in the Sciences
Before addressing a research problem with an experiment, it’s important to conduct background research in order to learn what is already known about the problem. It’s a good idea to start any research project by making use of the resources at your institution’s library. The Iowa State University Library has several resource guides available that are specific for an area of study. These can make it much easier to search for the appropriate information for a particular type of research question. Here is the resource guide for Kinesiology at ISU: Kinesiology Research Guide at Iowa State University (external link)
Resource Types
There are many types of resources that may be valuable for a literature search. Primary literature includes original written works such as research published in scholarly journals. Primary literature is the ideal resource for academic work; however, the terminology used may be difficult to understand for beginners in a field of study. Secondary sources include books or review articles that summarize primary research findings. A good example of a secondary resource is a textbook. Today, various internet resources are popular for conducting research. For information on how to wisely use internet resources, please see the section on evaluating internet resources at the end of this chapter.
How to Read a Scientific Article
Reading a scientific article is a complex task. [1] The worst way to approach this task is to treat it like the reading of a textbook—reading from title to literature cited, digesting every word along the way without any reflection or criticism. Rather, you should begin by skimming the article to identify its structure and features. As you read, look for the author’s main points. Generate questions before, during, and after reading. Draw inferences based on your own experiences and knowledge. And to really improve understanding and recall, take notes as you read. This handout discusses each of these strategies in more detail.
Skim the article and identify its structure
Most journals use a conventional IMRD structure: An abstract followed by Introduction, Methods, Results, and Discussion. Each of these sections normally contains easily recognized conventional features, and if you read with an anticipation of these features, you will read an article more quickly and comprehend more.
Features of Abstracts
Abstracts usually contain four kinds of information:
- purpose or rationale of study (why they did it)
- methodology (how they did it)
- results (what they found)
- conclusion (what it means)
Most scientists read the abstract first. Others—especially experts in the field—skip right from the title to the visuals because the visuals, in many cases, tell the reader what kinds of experiments were done and what results were obtained. You should probably begin reading a paper by reading the abstract carefully and noting the four kinds of information outlined above. Then move first to the visuals and then to the rest of the paper.
Features of Introductions
Introductions serve two purposes: creating readers’ interest in the subject and providing them with enough information to understand the article. Generally, introductions accomplish this by leading readers from broad information (what is known about the topic) to more specific information (what is not known) to a focal point (what question the authors asked and answered). Thus, authors describe previous work that led to current understanding of the topic (the broad) and then situate their work (the specific) within the field.
Features of Methods
The Methods section tells the reader what experiments were done to answer the question stated in the Introduction. Methods are often difficult to read, especially for graduate students, because of technical language and a level of detail sufficient for another trained scientist to repeat the experiments. However, you can more fully understand the design of the experiments and evaluate their validity by reading the Methods section carefully.
Features of Results and Discussion
The Results section contains results—statements of what was found, and reference to the data shown in visuals (figures and tables). Normally, authors do not include information that would need to be referenced, such as comparison to others’ results. Instead, that material is placed in the Discussion—placing the work in context of the broader field. The Discussion also functions to provide a clear answer to the question posed in the Introduction and to explain how the results support that conclusion.
Distinguish the Main Points
Because articles contain so much information, it may be difficult to distinguish the main points of an article from the subordinate points. Fortunately, there are many indicators of the author’s main points:
Document level
- Title
- Abstract
- Keywords
- Visuals (especially figure and table titles)
- First sentence or the last 1-2 sentences of the Introduction
Paragraph level: words or phrases to look for
- surprising
- unexpected
- in contrast with previous work
- has seldom been addressed
- we hypothesize that
- we propose
- we introduce
- we develop
- the data suggest
Generate questions and be aware of your understanding
Reading is an active task. Before and during your reading, ask yourself these questions:
- Who are these authors? What journal is this? Might I question the credibility of the work?
- Have I taken the time to understand all the terminology?
- Have I gone back to read an article or review that would help me understand this work better?
- Am I spending too much time reading the less important parts of this article?
- Is there someone I can talk to about confusing parts of this article?
After reading, ask yourself these questions:
- What specific problem does this research address? Why is it important?
- Is the method used a good one? The best one?
- What are the specific findings? Am I able to summarize them in one or two sentences?
- Are the findings supported by persuasive evidence?
- Is there an alternative interpretation of the data that the author did not address?
- How are the findings unique/new/unusual or supportive of other work in the field?
- How do these results relate to the work I’m interested in? To other work I’ve read about?
- What are some of the specific applications of the ideas presented here? What are some further experiments that would answer remaining questions?
Draw inferences
Not everything that you learn from an article is stated explicitly. As you read, rely on your prior knowledge and world experience, as well as the background provided in the article, to draw inferences from the material. Research has shown that readers who actively draw inferences are better able to understand and recall information.
Template for Taking Notes on Research Articles: Easy access for later use
Whenever you read an article, pertinent book chapter, or research on the web, use the following format (or something similar) to make an electronic record of your notes for later easy access. Put quotation marks around any exact wording you write down so that you can avoid accidental plagiarism when you later cite the article.
Complete citation. Author(s), Date of publication, Title (book or article), Journal, Volume #, Issue #, pages:
If web access: url; date accessed
Key Words:
General subject:
Specific subject:
Hypothesis:
Methodology:
Result(s):
Summary of key points:
Context (how this article relates to other work in the field; how it ties in with key issues and findings by others, including yourself):
Significance (to the field; in relation to your own work):
Important Figures and/or Tables (brief description; page number):
Cited References to follow up on (cite those obviously related to your topic AND any papers frequently cited by others because those works may well prove to be essential as you develop your own work):
How to Spot Fake News
Wikipedia
Wikipedia is broadly misunderstood by faculty and students alike. [2] While Wikipedia must be approached with caution, especially with articles that are covering contentious subjects or evolving events, it is often the best source to get a quick, consensus viewpoint on a subject. Because the Wikipedia community has strict rules about sourcing facts to reliable sources, and because authors are asked to adopt a neutral point of view, its articles are often a good introduction to a subject on the web. However, be advised that anyone can edit Wikipedia, and those who write or add to articles may not be experts. Sometimes the claims in Wikipedia articles are blatantly erroneous.
Despite this, the focus on sourcing claims in Wikipedia has a beneficial effect. If you can find a claim expressed in a Wikipedia article, you can follow the footnote on the claim to a reliable source, which may be a primary resource. In this way, scholars can benefit from using Wikipedia to quickly find authoritative sources for claims, and use these primary resources as a starting point for investigating a question.
Evaluating Internet Resources: the CRAAP Test
When you search for information, you’re going to find plenty… but is it accurate and reliable (Fig. 1)? [3] You will have to determine this for yourself, and the CRAAP Test can help. The CRAAP Test is a list of questions to help determine if the information you find is good quality. Your information source may not meet every criterion on this list; different criteria will be more or less important depending on your situation or need. So why guess? Is your source giving you truly credible and useful information or just fake news?
Currency: The timeliness of the information.
- When was the information published or posted?
- Has the information been revised or updated?
- Is the information current or too out-of-date for my topic?
- Are all the links functional or are there dead links?
Reliability: Where did the author get this information?
- Does the creator provide links to sources for data or quotations?
- Do those sources seem reliable?
- Is the information accurate and error-free?
- Can the information be corroborated with another source?
Authority of author: Who is the immediate source of the information?
- Who is the author/publisher/source/sponsor?
- Are the author’s credentials or organizational affiliations given?
- What are the author’s credentials or organizational affiliations?
- What are the author’s qualifications to write on the topic?
- Is there contact information, such as a publisher or e-mail address?
- Does the URL reveal anything about the author or source? Examples: .com .edu .gov .org .net
Authority of organization: Does the resource have a reputable organization behind it?
- Is there a reputable organization behind it?
- What is the organization’s interest (if any) in this information?
- What is the domain (.edu,.com,.org,.net,.uk,.k12,etc)?
- Is the page hosted by an individual? Search who owns the site using a “whois” search engine such as: http://whois.domaintools.com .
- Who else links to the site?
Purpose: The reason the information exists.
- What is the purpose of the information? to inform? teach? sell? entertain? persuade?
- Do the authors/sponsors make their intentions or purpose clear?
- Is the information fact? opinion? propaganda?
- Does the point of view appear objective and impartial?
- Are there political, ideological, cultural, religious, institutional, or personal biases?
- © Mar 28, 2008 The Cain Project in Engineering and Professional Communication. Textbook content produced by The Cain Project in Engineering and Professional Communication is licensed under a Creative Commons Attribution License 2.0 license. Download for free at http://cnx.org/contents/d85e82ee-f854-4953-a194-8ec1baf39348@1 ↵
- Adapted from Web literacy for student fact checkers , by Michael A. Caulfield. CC by 4.0 International license ↵
- Adapted from https://uri.libguides.com/start/craap CC by 4.0 
