# Source pack — subjects/artificial-intelligence/intermediate/machine-learning-in-one-picture
Lesson title: Machine Learning in One Picture
Level: intermediate
Match confidence: 2.03

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.03 — LibreTexts: 7.3: Machine learning
License: Public Domain · https://stats.libretexts.org/Bookshelves/Introductory_Statistics/Book%3A_Visual_Statistics_Use_R_(Shipunov)/07%3A_Multidimensional_Data_-_Analysis_of_Structure/7.03%3A_Machine_learning

7.3: Machine learning
Methods explained in this section are not only visualizations. Together, they frequently called “classification with learning”, “supervised classification”, “machine learning”, or just “classification”. All of them are based on the idea of learning :
... He scrambled through and rose to his feet. ... He saw nothing but colours—colours that refused to form themselves into things. Moreover, he knew nothing yet well enough to see it: you cannot see things till you know roughly what they are\(^{[1]}\). His first impression was of a bright, pale world—a watercolour world out
of a child’s paint-box; a moment later he recognized the flat belt of light blue as a sheet of water, or of something like water, which came nearly to his feet. They were on the shore of a lake or river...
C.S.Lewis. Out of the Silent Planet.
First, small part of data where identity is already known ( training dataset ) used to develop (fit) the model of classification (Figure \(\PageIndex{2}\)). On the next step, this model is used to classify objects with unknown identity ( testing dataset ). In most of these methods, it is possible to estimate the quality of the classification and also assess the significance of the every character.
Let us create training and testing datasets from iris data:
Code \(\PageIndex{1}\) (R):
( iris.unknown is of course the fake unknown so to use it properly, we must specify iris.unknown[, -5] . On the other hand, species information will help to create misclassification table (confusion matrix, see below).)
Learning with regression
Linear discriminant analysis
One of the simplest methods of classification is the linear discriminant analysis (LDA). The basic idea is to create the set of linear functions which “decide” how to classify the particular object.
Code \(\PageIndex{2}\) (R):
Training resulted in the hypothesis which allowed almost all plants (with an exception of seven Iris virginica ) to be placed into the proper group. Please note that LDA does not require scaling of variables.
It is possible to check LDA results with inferential methods. Multidimensional analysis of variation (MANOVA) allows to understand the relation between data and model (classification from LDA):
Code \(\PageIndex{3}\) (R):
Important here are both p-value based on Fisher statistics, and also the value of Wilks’ statistics which is the likelihood ratio (in our case, the probability that groups are not different ).
It is possible to check the relative importance of every character in LDA with ANOVA-like techniques:
Code \(\PageIndex{4}\) (R):
(This idea is applicable to other classification methods too.)
... and also visualize LDA results (Figure \(\PageIndex{3}\)):
Code \(\PageIndex{5}\) (R):
(Please note 95% confidence ellipses with centers.)
To place all points on the plot, we simply used all data as training. Note the good discrimination (higher than in PCA, MDS or clustering), even between close Iris versicolor and I. virginica . This is because LDA frequently overestimates the differences between groups. This feature, and also the parametricity and linearity of LDA made it less used over the last years.
With LDA, it is easy to illustrate one more important concept of machine learning: quality of training . Consider the following example:
Code \(\PageIndex{6}\) (R):
Misclassification error here almost two times bigger! Why?
Code \(\PageIndex{7}\) (R):
Well, using sample() (and particular set.seed() value) resulted in biased training sample, this is why our second model was trained so poorly. Our first way to sample (every 5th iris) was better, and if there is a need to use sample() , consider to sample each species separately .
Now, return to the default random number generator settings:
Code \(\PageIndex{8}\) (R):
Please note that it is widely known that while LDA was developed on biological material, this kind of data rarely meets two key assumptions of this method: (1) multivariate normality and (2) multivariate homoscedasticity. Amazingly, even Fisher’s Iris data with which LDA was invented, does not meet these assumptions! Therefore, we do not recommend to use LDA and keep it here mostly for teaching purposes.
Recursive partitioning
To replace linear discriminant analysis, multiple methods with similar background ideas were invented. Recursive partitioning, or decision trees (regression trees, classification trees), allow, among other, to make and visualize the sort of discrimination key where every step results in splitting objects in two groups (Figure \(\PageIndex{4}\)):
Code \(\PageIndex{9}\) (R):
We loaded first the tree package containing tree() function ( rpart is another package which makes classification trees). Then we again used the whole dataset as training data. The plot shows that all plants with petal length less than 2.45 cm belong to Iris setosa , and from the rest those plants which have petal width less than 1.75 cm and petal length more than 4.95 cm, are I. versicolor ; all other irises belong to I. virginica .
In fact, these trees are result of something similar to “hierarchical discriminant analysis”, and it is possible to use them for the supervised classification:
Code \(\PageIndex{10}\) (R):
Try to find out which characters distinguish species of horsetails described in eq.txt data file. File eq_c.txt contains the description of characters.
Package party offers sophisticated recursive partitioning methods together with advanced tree plots (Figure \(\PageIndex{5}\)):
Code \(\PageIndex{11}\) (R):
(For species names, we used one-letter abbreviations.)
Ensemble learnig
Random Forest
The other method, internally similar to regression trees, rapidly gains popularity. This is the Random Forest . Its name came from the ability to use numerous decision trees and build the complex classification model. Random Forest belongs to bagging ensemble methods ; it uses bootstrap (see in Appendix) to multiply the number of trees in the model (hence “forest”). Below is an example of Random Forest classifier made from the iris data:
Code \(\PageIndex{12}\) (R):
Here results are similar to LDA but Random Forest allows for more. For example, it can clarify the importance of each character (with function
importance()
), and reveal classification distances (proximities) between all objects of training subset (these distances could be in turn used for clustering). Random Forest could also visualize the multidimensional dataset (Figure \(\PageIndex{6}\)):
Code \(\PageIndex{13}\) (R):
(We applied several tricks to show convex hulls and their centroids.)
Package ranger implements even faster variant of Random Forest algorithm, it also can employ parallel calculations.
Gradient boosting
There are many weak classification methods which typically make high misclassification errors. However, many of them are also ultra-fast. So, is it possible to combine many weak learners to make the strong one? Yes! This is what boosting methods do. Gradient boosting employs multi-step optimization and is now among most frequently using learning techniques. In R , there are several gradient boosting packages, for example, xgboost and gbm :
Code \(\PageIndex{14}\) (R):
(Plot is purely technical; in the above form, it will show the marginal effect (effect on membership) of the 1st variable. Please make it yourself. “Membership trick” selects the “best species” from three alternatives as gbm() reports classification result in fuzzy form.)
Learning with proximity
k-Nearest Neighbors algorithm (or kNN) is the “lazy classifier” because it does not work until unknown data is supplied:
Code \(\PageIndex{15}\) (R):
kNN is based on distance calculation and “voting”. It calculates distances from every unknown object to the every object of the training set. Next, it considers several (5 in the case above) nearest neighbors with known identity and finds which id is prevalent. This prevalent id assigned to the unknown member. Function knn() uses Euclidean distances but in principle, any distance would work for kNN.
To illustrate idea of nearest neighbors, we use Voronoi decomposition , the technique which is close to both kNN and distance calculation:
Code \(\PageIndex{16}\) (R):
The plot (Figure \(\PageIndex{7}\)) contains multiple cells which represent neighborhoods of training sample (big dots). This is not exactly what kNN does, but idea is just the same. In fact, Voronoi plot is a good tool to visualize any distance-based approach.
Depth classification based on how close an arbitrary point of the space is located to an implicitly defined center of a multidimensional data cloud:
Code \(\PageIndex{17}\) (R):
Learning with rules
Naïve Bayes classifier is one of the simplest machine learning algorithms which tries to classify objects based on the probabilities of previously seen attributes. Quite unexpectedly, it is typically a good classifier:
Code \(\PageIndex{18}\) (R):
Note that Naïve Bayes classifier could use not only numerical like above, but also nominal predictors (which is similar to correspondence analysis.)
Apriori method is similar to regression trees but instead of classifying objects, it researches association rules between classes of objects. This method could be used not only to find these rules but also to make classification. Note that measurement iris data is less suitable for association rules then nominal data, and it needs discretization first:
Code \(\PageIndex{19}\) (R):
(Rules are self-explanatory. What do you think, does this method performs better for the nominal data? Please find it out.)
Learning from the black box
Famous SVM, Support Vector Machines is a kernel technique which calculates parameters of the hyper-planes dividing multiple groups in the multidimensional space of characters:
Code \(\PageIndex{20}\) (R):
Classification, or prediction grid often helps to illustrate the SVM method. Data points are arranged with PCA to reduce dimensionality, and then classifier predicts the identity for the every point in the artificially made grid (Figure \(\PageIndex{8}\)). This is possible to perform manually but Gradd() function simplifies plotting:
Code \(\PageIndex{21}\) (R):
And finally, neural networks ! This name is used for the statistical technique based on some features of neural cells, neurons . First, we need to prepare data and convert categorical variable Species into three logical dummy variables :
Code \(\PageIndex{22}\) (R):
Now, we call neuralnet package and proceed to the main calculation. The package “wants” to supply all terms in the model explicitly:
Code \(\PageIndex{23}\) (R):
(Note use of set.seed() , this is to make your results similar to presented here.)
Now predict (with compute() function) and check misclassification:
Code \(\PageIndex{24}\) (R):
Results of neural network prediction are fuzzy, similar to the results of fuzzy clustering or regression trees, this is why which.max() was applied for every row. As you see, this is one of the lowest misclassification errors.
It is possible to plot the actual network:
Code \(\PageIndex{25}\) (R):
The plot (Figure 7.4.1) is a bit esoteric for the newbie, but hopefully will introduce into the method because there is an apparent multi-layered structure which is used for neural networks decisions.
References
1. Emphasis mine.

## Match 1.70 — LibreTexts: 6.4: Design Principles for Developing Learning Materials for Emerging Technologies
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://socialsci.libretexts.org/Bookshelves/Education_and_Professional_Development/Book%3A_Education_for_a_Digital_World_-_Advice_Guidelines_and_Effective_Practice_from_Around_Globe_(Hirtz)/06%3A_The_Impact_of_Technology_on_Education/6.4%3A_Design_Principles_for_Developing_Learning_Materials_for_Emerging_Technologies

6.4: Design Principles for Developing Learning Materials for Emerging Technologies
-
- Last updated
- Save as PDF
In developing learning materials for any technology, learning theories must be used for effective and efficient instruction. This section will address theories and design principles for emerging technologies.
Early learning materials development was influenced by behaviourist learning theory. Behaviourists claim that it is the observable behaviour of the learner that indicates whether or not they have learned, not what is going on in the learner’s head. Early instructional methods, such as the teaching machine, were influenced by behaviourist theory. The teaching machine taught by drill and practice, and transferred the repetitiveness of teaching from the instructors to the machine.
Cognitive learning theory influenced the development of learning materials with the introduction of computer-based instruction. Cognitive psychologists see learning as a process involving the use of memory, motivation, and thinking, and that reflection plays an important part in learning. Cognitivists perceive learning as an internal process and claim that the amount learned depends on the processing capacity of the learner, the amount of effort expended during the learning process, the quality of the processing, and the learner’s existing knowledge structure. Cognitive theory was influenced by information processing theory, which proposes that learners use different types of memory during learning.
As technology emerged, there was more emphasis on learner-centred education, which promoted the use of constructivist theory in the development of learning materials. Constructivists claimed that learners interpret information and the world according to their personal reality, and that they learn by observation, processing, and interpretation, and then personalize the information into their own worldview. Also, learners learn best when they can contextualize what they learn for immediate application and to acquire personal meaning. The learner-centred approach allows learners to develop problem-solving skills and learn by doing rather than by being told.
They are many instructional design models for developing learning materials. Dick et al. (2001) proposed a design model with the major components being design, development, implementation, and evaluation of instruction. Another widely used model is by Gagné et al. (1991) who claimed that strategies for learning should be based on learning outcomes. Gagné specifies nine types of instructional events:
- gain the learner’s attention;
- inform the learner of the lesson objectives;
- stimulate recall of prior knowledge;
- present stimuli with distinctive features to aid in perception;
- guide learning to promote semantic encoding;
- elicit performance;
- provide informative feedback;
- assess performance; and
- enhance retention and learning transfer.
Most of the current and past instructional design models were developed for classroom and print-based instruction rather than for learner-centred instruction and e-learning. New instructional design models are needed to develop learning materials for delivery on emerging technologies.
According to Jacobs and Dempsey (2002), some emerging influences that will affect future instructional design include object-oriented distributed learning environments, the use of artificial intelligence techniques, cognitive science, and neuroscience. Below are guidelines for educators to develop learning materials for delivery via emerging technologies.
Tips and Guidelines
- Information should be developed in “chunks” to facilitate processing in working memory since humans have limited working memory capacity. Chunking is important for mobile technologies that have small display screens, such as cell phones, PDAs, etc.
- Content should be broken down into learning objects to allow learners to access segments of learning materials to meet their learning needs. A learning object is defined as any digital resource that can be re-used to achieve a specific learning outcome (Ally, 2004b). Learning materials for emerging technologies should be developed in the form of information objects, which are then assembled to form learning objects for lessons. A learning session using a mobile device can be seen as consisting of a number of information objects sequenced in a pre-determined way, or sequenced, according to the user’s needs. The learning object approach is helpful where learners will access learning materials just in time, as they complete projects using a self-directed, experiential approach. Also, learning objects allow for instant assembly of learning materials by learners and by intelligent software agents to meet learners’ needs.
- Use the constructivist approach to learning to allow learners to explore and personalize the materials during the learning process. Learning should be project-based to allow learners to experience the world by doing things, rather than passively receiving information, to build things, to think critically, and to develop problem-solving skills (Page, 2006). Mobile technologies facilitate project-based learning since learners can learn in their own time and in their own environments. For example, as learners complete a project they can use wireless mobile technology to access just in time information and the instructor as needed.
- Simple interfaces prevent cognitive overload. For example, graphic outlines can be used as interfaces and as navigational tools for learners. The interface should allow the learner to access learning materials with minimal effort and navigate with ease. This is critical for emerging technologies since some output devices are small.
- Use active learning strategies that allow learners to summarize what they learn and to develop critical thinking skills. For example, learners can be asked to generate a concept map to summarize what they learned. A concept map or a network diagram can show the important concepts in a lesson and the relationship between them. Learner-generated concept maps allow learners to process information at a high level. High-level concept maps and networks can represent information spatially, so learners can see the main ideas and their relationships.
- Learning materials should be presented so that information can be transferred from the senses to the sensory store, and then to working memory. The amount of information transferred to working memory depends on the importance assigned to the incoming information and whether existing cognitive structures can make sense of the information. Strategies that check whether learners have the appropriate existing cognitive structures to process the information should be used in emerging technologies delivery. Pre-instructional strategies, such as advance organizers and overviews, should be used if relevant cognitive structures do not exist.
- There should be a variety of learning strategies to accommodate individual differences. Different learners will perceive, interact with, and respond to the learning environment in different ways, based on their learning styles (Kolb, 1984).
According to Kolb, there are four learning style types:
- Divergers are learners who have good people skills. When working in groups, they try to cultivate harmony to assure that everyone works together smoothly.
- Assimilators like to work with details, and are reflective and relatively passive during the learning process.
- Convergers prefer to experiment with, and apply new knowledge and skills, often by trial and error.
- Accommodators are risk-takers, who want to apply immediately what they learn to real-life problems or situations.
Examples of strategies to cater for individual learning preferences include:
- Use visuals at the start of a lesson to present the big picture, before going into the details of the information.
- For the active learners, strategies should provide the opportunity to immediately apply the knowledge.
- To encourage creativity, there must be opportunities to apply what was learned in real-life situations so that learners can go beyond what was presented.
- The use of emerging technologies will make it easier to cater to learners’ individual differences by determining preferences, and using the appropriate learning strategy based on those preferences.
- Provide learners the opportunity to use their meta-cognitive skills during the learning process. Meta-cognition is a learner’s ability to be aware of their cognitive capabilities and to use these capabilities to learn. This is critical in e-learning, since learners will complete the learning materials individually. Exercises with feedback throughout a lesson are good strategies to allow learners to check their progress, and to adjust their learning approach as necessary.
- Learners should be allowed to construct knowledge, rather than passively receive knowledge through instruction. Constructivists view learning as the result of mental construction where learners learn by integrating new information with what they already know.
- Learners should be given the opportunity to reflect on what they are learning and to internalize the information. There should be embedded questions throughout the learning session to encourage learners to reflect on, and process the information in a relevant and meaningful manner. Learners can be asked to generate a journal to encourage reflection and processing. Interactive learning promotes higher-level learning and social presence, and personal meaning (Heinich et al., 2002).
Intelligent agents should be embedded in the technology to design instruction and deliver the instruction based on individual learner needs. An intelligent agent gathers information about learners and them respond based on the what was learned about the student. For example, if a learner consistently gets a question on a concept wrong, the intelligent agent will prescribe other learning strategies until the learner master the concept. As the user interacts with the system, the agent learns more about the learner. This is critical, as learning materials may be accessed by people globally. These agents can be proactive so that they can recognize and react to changes in the learning process. As the intelligent agent interacts with the learner, it gains more experience by learning about the learner and then determining the difficulty of materials to present, the most appropriate learning strategy based on the learner’s style, and the sequence of the instruction (Ally, 2002). The intelligent learning system should reason about a learner’s knowledge, monitor progress, and adapt the teaching strategy to individual’s learning pattern (Woolf, 1987). For example, the intelligent system could monitor learning and build a best practice database for different learning styles. It could also track common errors and prescribe strategies to prevent similar errors in the future.

## Match 1.70 — Introduction_to_Philosophy-WEB_cszrKYp § 2.1 The Brain Is an Inference Machine

LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Describe the role of emotion in thought.
•
Explain how cognitive systems produce inferences without conscious thought.
One of the first steps to becoming a more critical and reflective thinker is to understand how and why you are
prone to making mistakes in thinking. These mistakes are not the result of a lack of intelligence but are a
function of the way our minds work and how they naturally lead us astray.
From a biological perspective, we have been shaped by hundreds of thousands of years of evolution, which
have primed our brains to become extremely effective inference machines. An inference is the mental process
that allows us to draw conclusions from evidence. While we tend to think of inference as a deliberative and
conscious process, we infer all kinds of things unconsciously, effortlessly, and immediately; in fact, most of
sense perception is a kind of inference. Inference making has been crucial to human survival, but our
conclusions are not always correct. By becoming aware of how our brains function to ward off threats and
provide us with “cognitive ease,” or a feeling of well-being and comfort, we can begin to correct for and guard
against faulty thinking.
The Brain’s Adaptive Ability to Plan Ahead
One insight of evolutionary biology is that every cell and organ in our body is adapted to its local environment
for the purpose of making it more likely that our genes will survive into the next generation. Consequently, it’s
helpful to think about the brain’s role in propagating our genes. Our brains facilitate our survival and promote
our ability to find a partner and reproduce by using thought, calculation, prediction, and inference. For this
reason, our natural and genetically primed ways of thinking do not necessarily serve the goals of philosophy,
science, or truth.
42
2 • Critical Thinking, Research, Reading, and Writing
Access for free at openstax.org

FIGURE 2.2 The “mind-brain” problem points to the unclear relationship between our thoughts, feelings, and
perceptions, and the neurological and electrochemical interactions that take place in the brain. (attribution:
Copyright Rice University, OpenStax, under CC BY 4.0 license)
Philosophical Caveats about “Brain Talk”
Before we get much further, note that it is important to be cautious when we talk about brains and minds,
which are distinct concepts. In fact, the relationship between mind and brain is one of the central problems of
metaphysics, known as the “mind-body problem,” which might just as well be called the “mind-brain
problem.” Briefly stated, the mind-body problem is the problem of understanding the relationship between the
organic gray and white matter in our skulls (the brain) and the range of conscious awareness (the mind). We
know that the brain and central nervous system provide the physical basis for our thoughts, perceptions,
emotions, imagination, and desire—in short, our entire mental life. But biology does not tell us what the
relationship is between our private mental life and the neurological, electrochemical interactions that take
place in the brain. Is the relationship of the mind to the brain like the relationship between lightning and
electrical discharge or a rainbow and the refraction of light through water droplets? In other words, is “the
mind” just the term we use to label certain kinds of brain activity? Some philosophers think so. However,
mental activity is not easily associated with any specific brain activity. Additionally, there seems to be
something about the subjective experience of our mental life that is lost when we attempt to explain it fully in
terms of brain activity. So other philosophers maintain that the mind is something different from the brain.
Nonetheless, the mind and the brain are closely and somewhat mysteriously connected. As a result, it can be
helpful to use the resources of psychology and cognitive science (the study of the brain’s processes) to help us
understand how to become better thinkers. We can think of the resources from psychology and cognitive
science as providing us with a description of how the brain actually behaves. By contrast, when we study
critical thinking, we are interested in how we ought to think. Being aware of how we do think may help us
devise effective strategies for how we ought to think, but we should understand that the descriptions provided
by psychology are not determinative. In this chapter, we explore psychological findings that can help you
become more reflective about the ways your thinking can go wrong.
CONNECTIONS
Read more about the nature of the mind and the mind-body problem in the chapter on metaphysics.
2.1 • The Brain Is an Inference Machine
43

Representation as Projection
While you may consider thinking to be made up of ideas or thoughts, philosophers and cognitive scientists use
the term representation to describe the basic elements of thinking. Representations are information-bearing
units of thought. This notion of representation can be traced back to Aristotle and has played a significant role
in the history of philosophy, but in contemporary philosophy the term representation is more precise. When
we think about things, whether through perception, imagination, memory, or desire, we represent those
things. What is represented may be something present and real, or it may be fictitious, imagined in the future,
or remembered from the past. Representations may even be unconscious. That is, the mind may have some
defined content that is directed toward an object without the person being aware that they have produced such
a representation.
During the process of representation, even in a relatively simple case of visual perception, the brain makes a
complex set of inferences. For instance, consider the checkerboard below. You might imagine that when you
perceive something like a checkerboard, your brain passively takes a mental picture of the grid. In this
analogy, the eye functions like the lens of a camera, and the brain develops the picture to present to the mind.
But there are several problems with this model. First, where is the picture in your brain? Who is viewing the
picture in your head? There are further problems with the camera analogy that can be revealed when we
examine optical illusions. Look at the checkered set of squares in Figure 2.2. Are the horizontal lines parallel?
FIGURE 2.3 The horizontal lines on this grid are parallel, but unless you look at the image from the side, it is
impossible to “see” this. This is one of many examples of common perceptual illusions. (credit: “Optical Illusion” by
Selena N. B. H. CC BY 2.0)
In fact, the horizontal lines are parallel, but unless you look at the image from the side, it is impossible to
visualize this. There are countless examples of these types of perceptual illusions. We represent the world
outside as a stable picture that is completely filled in, in full focus, and uniformly colored. In reality, our visual
field is limited and hazy around the edges, and colors change dramatically depending on lighting conditions,
distance, movement, and a host of other factors. In fact, your brain is not passively capturing the world, like a
camera, but is actively projecting the world so that it makes sense to you. In the illusion above, your brain is
automatically adjusting your perception of the colored squares by accounting for the shadow cast by the
cylinder. So your brain presents square B as if it is lighter than A by adjusting the hue of B to account for the
shadow.
Neuroscientist David Eagleman (2011) uses the analogy of the front page of a newspaper to describe how
perception works. The front page is a representation of the world’s events for a given day. Of course, it does not
44
2 • Critical Thinking, Research, Reading, and Writing
Access for free at openstax.org

present a full or complete picture of the world, but a summary intended to highlight the events of
consequence, those that have changed, and those that we are most likely to care about. Like a newspaper
editor, your brain is working overtime to project an image of the world based on what is relevant to your
survival. You unconsciously adjust the images you perceive to give you the impression that they are far away,
nearby, moving, and so forth. Instead of the fully formed, three-dimensional image of the world we seem to
see, we actually perceive a kind of sketch, highlighting what we need to know to navigate safely in our
environment and obtain what we need. You probably think that sense perception is the clearest and most
certain way you can know the world around you. As the adage says, “Seeing is believing.” To become a better
critical thinker, however, you will need to become skeptical of some of your basic beliefs. There are times when
you absolutely should not believe your lying eyes.
Emotions and Reason: Homeostasis and Allostasis
In addition to the editorial license of mental representation, thinking is not always as rational as we imagine.
The neuroscientist Antonio Damasio (1994) was one of the first to popularize the notion that rational thought is
tempered by emotions. He is critical of what he perceives as the philosophical bias against emotion in the
history of philosophy. In Descartes’ Error, he says modern philosophers have neglected the role of emotions in
thought, imagining that the goal of rational thinking is to eliminate the influence of emotions. Instead, his
years of clinical work with patients revealed to him that emotions cannot be separated from reason. Our most
rational thoughts are, in fact, guided, informed, and influenced by emotions. According to Damasio, reasoning
and intelligence function best when we care about something. Without feelings, says Damasio, we are less
rational, not more rational.
Damasio (1994) explains that emotions serve to maintain homeostasis in the brain through the chemical
messengers known as neurotransmitters. Homeostasis is the biological tendency to find a neutral state of
equilibrium (the word stasis means “standing still,” and homeo means “same or similar”). This process relies
on a feedback loop where current bodily states are monitored, observed, and then altered to bring the body
back into balance. Most homeostatic processes in the body are unconscious, but emotions are linked to
conscious awareness. For instance, when your blood sugar is low and your body needs calories, there is a
series of chemical processes that give rise to the feeling of hunger. This is a conscious signal that you need to
eat; it promotes behavior that ensures survival. Similarly, a rustling sound in the bushes at night will trigger a
series of physiological responses (heightened senses, increased heart rate, pupil dilation, etc.) that correspond
to the feeling of fear and promote behavior, such as fight or flight, that are necessary for survival. What
Damasio demonstrates is that emotions have their own feedback mechanism, so that an idea or image can
generate physiological responses even in the absence of an external stimulus. Because emotional responses
and conscious thought are closely linked, decision-making can be influenced by this emotional-physiological
feedback mechanism. Our thinking can go astray because we are afraid of bad outcomes, and that fear
dominates a more rational calculation about which course of action is most beneficial (1994, 172–175).
In addition to maintaining equilibrium, the brain also anticipates future events and circumstances by
projecting likely scenarios based on a catalog of past experiences and concepts generated through social
norms and social interactions. The process of regulation that prepares the body to anticipate future needs
before they arise is called allostasis (allo means “other or different”). Psychologist Lisa Feldman Barrett (2017)
explains that the brain stores neural pathways that are triggered by external or internal stimuli to provide the
closest match to the current situation. The neural pathways form a kind of template of action, promoting
behavior like increased heart rate, pupil dilation, or motion. Feelings are a goal-oriented response to certain
situations: they prepare us to behave and react in certain ways that promote what is beneficial to the body and
sharpen and shape our awareness of the world.
In summary, the brain makes inferences about the world through perceptions, emotions, and concepts that are
largely unconscious and deeply ingrained in our psyches. This process allows us to navigate fluidly and
accurately through a world with so many and varied stimuli. Our reactions to stimuli are partially homeostatic,
2.1 • The Brain Is an Inference Machine
45

meaning that the body tends to bring itself back into an optimal state of equilibrium, and partially allostatic,
meaning that the body prepares for and anticipates future situations. Together, these impulses construct a
picture of the world that we experience seamlessly and dynamically. Our experience is far more complicated
than the crude mental model we imagine. We are projecting and constructing the world we experience as
much as we are recording and viewing it. And that fact has important consequences for the kind of reflective
and critical thought we ought to engage in when we try to think clearly about the world.
The Evolutionary Advantage of Shortcuts
Human beings have evolved to navigate the world most effectively and efficiently by engaging conscious
awareness only when necessary. For that reason, you can walk through the grocery store while thinking about
what you are going to cook for dinner. You do not have to consciously think about where to go, how to slow
down to make way for other people, or how hard to push the shopping cart so that it maintains momentum in
front of you even as its weight changes as you add groceries to the basket. All that biomechanical activity can
be outsourced to unconscious mechanisms as 
