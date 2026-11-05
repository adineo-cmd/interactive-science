# Source pack — subjects/statistics/expert/statistical-computing
Lesson title: Statistical Computing (R/Python)
Level: expert
Match confidence: 1.38

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.38 — LibreTexts: 3.1: A Model of Computing
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Bookshelves/Mathematical_Physics_and_Pedagogy/Computational_Physics_(Chong)/03%3A_Numbers_Arrays_and_Scaling/3.01%3A_A_Model_of_Computing

3.1: A Model of Computing
A modern computer is a tremendously complex system, with many things to understand at the level of the hardware, the operating system, and the programming software (e.g. Python). It is helpful to consider a simplified computing model , which is basically a "cartoon" representation of a computer that omits the unimportant facts about how it operates, and focuses on the most important aspects of what a computer program does.
The standard paradigm of computing that we use today is the Von Neumann architecture , which divides a computer into three inter-connected units: processor, memory, and input/output devices. We'll use this as the basis of our simplified model, with an emphasis on the processor and memory parts.
A computer's memory is essentially a chunk of space where we can store numbers. For now, we won't concern ourselves with how the contents of memory are organized or formatted. The processor can read one or more numbers from any locations (or addresses ) in memory, perform some basic operations on them, and then write the results into any other addresses. We also make three other important assumptions:
- The capacity is effectively infinite; we don't worry about running out.
- The memory is random-access memory (RAM), meaning that the processor can access any addresses in memory, one after another, with the same speed. (In real life, not all types of memory are random-access. Disk drives, for instance, are not, because the scanning head must physically move to different positions in order to read different parts of memory. However, ordinary computer programs can ignore such details, which are left to the operating system to manage.)
- The processor can only do one thing at a time. For example, if you ask it to read two numbers from memory, that takes twice as long as reading a single number from memory. (Again, real computers violate this assumption to some extent; computers now commonly have multiple processors that can performs multiple operations simultaneously. Our present simple model ignores these complications.)
A
program
is a set of instructions for the processor. For example, the following line of code is a program (or part of a program) that tells the processor to add up four numbers that are currently stored in memory, and save the result to another memory address labeled
x
:
x = a + b + c + d
Because the processor can only do one thing at a time, even a simple line of code like this involves several sequential steps. The processor can't simultaneously read all four memory addresses (corresponding to
a
through
d
); it must read them one at a time. The following figure shows how the processor might carry out the above addition program:

## Match 1.09 — LibreTexts: 1.13: Putting It Together- Types of Statistical Studies and Producing Data
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Courses/Lumen_Learning/Concepts_in_Statistics_(Lumen)/01%3A_Types_of_Statistical_Studies_and_Producing_Data/1.13%3A_Putting_It_Together-_Types_of_Statistical_Studies_and_Producing_Data

1.13: Putting It Together- Types of Statistical Studies and Producing Data
Let’s Summarize
-
There are four steps in a statistical investigation:
- Ask a question that can be answered by collecting data.
- Decide what to measure, and then collect data.
- Summarize and analyze.
- Draw a conclusion, and communicate the results.
-
There are two types of statistical studies:
- Observational studies: An observational study observes individuals and measures variables of interest. We conduct observational studies to investigate questions about a population or about an association between two variables. An observational study alone does not provide convincing evidence of a cause-and-effect relationship.
- Experiments: An experiment intentionally manipulates one variable in an attempt to cause an effect on another variable. The primary goal of an experiment is to provide evidence for a cause-and-effect relationship between two variables.
- In statistics, a variable is information we gather about individuals or objects.
Observational Studies
- In an observational study, we draw a conclusion about the population on the basis of a sample. To draw a valid conclusion, the sample must be representative of the population. A representative sample is a subset of the population. It also reflects the characteristics of the population.
- A sample is biased if it systematically favors a certain outcome. Voluntary response samples (such as Internet polls) and convenience samples (such as surveys at a mall) are biased.
- Random selection eliminates bias. In a simple random sample, everyone in the population has an equal chance of being chosen. In this way, random selection helps ensure that the sample is representative of the population.
- Larger samples tend to be more accurate than smaller samples if the samples are chosen randomly. The size of the population does not affect the accuracy of a random sample as long as the population is large.
- If an attempt is made to include every individual from a population in a sample, then the investigation is called a census.
Experiments
The goal of the experiment is to provide evidence for a cause-and-effect relationship between two variables. When we investigate a relationship between two variables, we identify an explanatory variable and a response variable. To establish a cause-and-effect relationship, we want to make sure the explanatory variable is the only factor that impacts the response variable. But other factors, called confounding variables , may also influence the response.
- A well-designed experiment takes steps to eliminate the effects of confounding variables. These steps include direct control, random assignment of people to treatment groups, use of a control or placebo, and blind conditions. Incorporating such precautions, a well-designed experiment provides convincing evidence of cause-and-effect.
- Random assignment uses random chance to assign participants to treatments, which creates similar treatment groups. With random assignment, we can be fairly confident that any differences we observe in the response of treatment groups is due to the explanatory variable. In this way, we have evidence for a cause-and-effect relationship.
- A well-designed experiment provides evidence for a cause-and-effect relationship. But even in a well-designed experiment, differences in the response might be due to chance. We learn to describe chance behavior when we study probability later in the course.
Contributors and Attributions
CC licensed content, Shared previously
- Concepts in Statistics. Provided by : Open Learning Initiative. Located at : http://oli.cmu.edu . License : CC BY: Attribution

## Match 1.08 — LibreTexts: 7.14: Putting It Together- Linking Probability to Statistical Inference
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Courses/Lumen_Learning/Concepts_in_Statistics_(Lumen)/07%3A_Linking_Probability_to_Statistical_Inference/7.14%3A_Putting_It_Together-_Linking_Probability_to_Statistical_Inference

7.14: Putting It Together- Linking Probability to Statistical Inference
Let’s Summarize
Overview of Statistical Inference
- Inference is based on probability.
- A parameter is a number that describes a population. A statistic is a number that describes a sample. In inference, we use a statistic to draw a conclusion about a parameter. These conclusions include a probability statement that describes the strength of the evidence or our certainty.
- For a categorical variable, the parameter and statistics are proportions. For a quantitative variable, the parameter and statistics are means.
- For a given situation, we assume the parameter is fixed. It does not change. In contrast, statistics always vary. When we take random samples, the fluctuation in statistics is due to chance. We create simulations and mathematical models to describe the variability we expect to see in sample statistics.
Sampling Distribution for a Sample Proportion
- Larger samples have less variability.
- For a categorical variable we assume that population has a proportion p of successes. When we select random samples from this population, the sample proportions have a pattern in the long run. We can describe this pattern with a mathematical model of the sampling distribution. The model has the following center, spread, and shape.
Center: Mean of the sample proportions is p , the population proportion.
Spread: Standard deviation of the sample proportions is
Shape: A normal model is a good fit if the expected number of successes and failures is at least 10. We can translate these conditions into formulas: .
- When a normal is a good fit for the sampling distribution, we can calculate a z -score, which allows us to use the standard normal model to find probabilities associated with the sampling distribution.
We can also write this as one formula:
Introduction to Statistical Inference
This course presents two types of inference procedures: confidence intervals and hypothesis tests. The goal of a confidence interval is to estimate a parameter value. The goal of a hypothesis test is to test a claim about a parameter. Both types of inference are based on the sampling distribution of sample statistics. For both, we report probabilities that state what would happen if we used the inference method many times.
Confidence Intervals
The purpose of a confidence interval is to estimate a population parameter on the basis of a sample statistic. Sample statistics vary, so there is always error in our estimate, but we never know how much. We therefore use the standard error, which is the average error in our sample estimates, to create a margin of error. The margin of error is related to our confidence that the interval contains the population parameter.
We investigated the 95% confidence interval for a population proportion in depth. When a normal model is a good fit for the sampling distribution, the 95% confidence interval has a margin of error equal to 2 standard errors.
We say we are 95% confident that the calculated interval contains the population proportion. This means that 95% of the time, these intervals will actually contain the population proportion, and we will be right. Five percent of the time, we will be wrong. We can never tell if a confidence interval does or does not contain the population proportion we are trying to estimate.
Hypothesis Tests
The purpose of a hypothesis test is to use sample data to test a claim about a population parameter. We investigated testing a claim about a population proportion informally.
We make a claim about a population proportion. From the claim, we state an assumption about the value of the population proportion. Could the data have come from this population? Or is the sample proportion too far off? It depends on how much random samples from this population vary. We construct a simulation or a normal model to represent the sampling distribution that occurs when sampling from a population with this assumed value. We make a judgment about whether the sample proportion is likely or unlikely to occur in the sampling distribution. If the data supports our claim and is unlikely, then we doubt our assumption about the population proportion.
Likely or unlikely? It depends on how much the sample proportions vary. If the normal model is a good fit for the sampling distribution, we can find a z -score and use a simulation to associate a probability with our “likely” or “unlikely” statement.
Contributors and Attributions
- Concepts in Statistics. Provided by : Open Learning Initiative. Located at : http://oli.cmu.edu . License : CC BY: Attribution
