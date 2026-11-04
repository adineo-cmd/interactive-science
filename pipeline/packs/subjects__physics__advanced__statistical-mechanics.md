# Source pack — subjects/physics/advanced/statistical-mechanics
Lesson title: Statistical Mechanics
Level: advanced
Match confidence: 1.56

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.56 — APCollegePhysics-OP_js6ZFp7 § 15.7 Statistical Interpretation of Entropy and the Second Law of

Thermodynamics: The Underlying Explanation
Learning Objectives
By the end of this section, you will be able to:
•
Identify probabilities in entropy.
•
Analyze statistical probabilities in entropic systems.
The information presented in this section supports the following AP® learning objectives and science practices:
•
7.B.1.1 The student is able to construct an explanation, based on atomic-scale interactions and probability, of how a
system approaches thermal equilibrium when energy is transferred to it or from it in a thermal process. (S.P. 6.2)
Figure 15.40 When you toss a coin a large number of times, heads and tails tend to come up in roughly equal numbers. Why doesn't heads come up
100, 90, or even 80% of the time? (credit: Jon Sullivan, PDPhoto.org)
The various ways of formulating the second law of thermodynamics tell what happens rather than why it happens. Why should
heat transfer occur only from hot to cold? Why should energy become ever less available to do work? Why should the universe
become increasingly disorderly? The answer is that it is a matter of overwhelming probability. Disorder is simply vastly more
likely than order.
When you watch an emerging rain storm begin to wet the ground, you will notice that the drops fall in a disorganized manner
both in time and in space. Some fall close together, some far apart, but they never fall in straight, orderly rows. It is not
impossible for rain to fall in an orderly pattern, just highly unlikely, because there are many more disorderly ways than orderly
ones. To illustrate this fact, we will examine some random processes, starting with coin tosses.
Coin Tosses
What are the possible outcomes of tossing 5 coins? Each coin can land either heads or tails. On the large scale, we are
concerned only with the total heads and tails and not with the order in which heads and tails appear. The following possibilities
exist:
(15.67)
5 heads, 0 tails
4 heads, 1 tail
3 heads, 2 tails
2 heads, 3 tails
1 head, 4 tails
0 head, 5 tails
These are what we call macrostates. A macrostate is an overall property of a system. It does not specify the details of the
system, such as the order in which heads and tails occur or which coins are heads or tails.
Using this nomenclature, a system of 5 coins has the 6 possible macrostates just listed. Some macrostates are more likely to
occur than others. For instance, there is only one way to get 5 heads, but there are several ways to get 3 heads and 2 tails,
making the latter macrostate more probable. Table 15.3 lists of all the ways in which 5 coins can be tossed, taking into account
the order in which heads and tails occur. Each sequence is called a microstate—a detailed description of every element of a
system.
664
Chapter 15 | Thermodynamics
This OpenStax book is available for free at http://cnx.org/content/col11844/1.14

Table 15.3 5-Coin Toss
Individual microstates
Number of
microstates
5 heads, 0
tails
HHHHH
1
4 heads, 1 tail
HHHHT, HHHTH, HHTHH, HTHHH, THHHH
5
3 heads, 2
tails
HTHTH, THTHH, HTHHT, THHTH, THHHT HTHTH, THTHH, HTHHT, THHTH,
THHHT
10
2 heads, 3
tails
TTTHH, TTHHT, THHTT, HHTTT, TTHTH, THTHT, HTHTT, THTTH, HTTHT,
HTTTH
10
1 head, 4 tails
TTTTH, TTTHT, TTHTT, THTTT, HTTTT
5
0 heads, 5
tails
TTTTT
1
Total: 32
The macrostate of 3 heads and 2 tails can be achieved in 10 ways and is thus 10 times more probable than the one having 5
heads. Not surprisingly, it is equally probable to have the reverse, 2 heads and 3 tails. Similarly, it is equally probable to get 5
tails as it is to get 5 heads. Note that all of these conclusions are based on the crucial assumption that each microstate is equally
probable. With coin tosses, this requires that the coins not be asymmetric in a way that favors one side over the other, as with
loaded dice. With any system, the assumption that all microstates are equally probable must be valid, or the analysis will be
erroneous.
The two most orderly possibilities are 5 heads or 5 tails. (They are more structured than the others.) They are also the least
likely, only 2 out of 32 possibilities. The most disorderly possibilities are 3 heads and 2 tails and its reverse. (They are the least
structured.) The most disorderly possibilities are also the most likely, with 20 out of 32 possibilities for the 3 heads and 2 tails and
its reverse. If we start with an orderly array like 5 heads and toss the coins, it is very likely that we will get a less orderly array as
a result, since 30 out of the 32 possibilities are less orderly. So even if you start with an orderly state, there is a strong tendency
to go from order to disorder, from low entropy to high entropy. The reverse can happen, but it is unlikely.
Chapter 15 | Thermodynamics
665

Table 15.4 100-Coin Toss
Macrostate
Number of microstates
Heads
Tails
(W)
100
0
1
99
1
1.0×102
95
5
7.5×107
90
10
1.7×1013
75
25
2.4×1023
60
40
1.4×1028
55
45
6.1×1028
51
49
9.9×1028
50
50
1.0×1029
49
51
9.9×1028
45
55
6.1×1028
40
60
1.4×1028
25
75
2.4×1023
10
90
1.7×1013
5
95
7.5×107
1
99
1.0×102
0
100
1
Total: 1.27×1030
This result becomes dramatic for larger systems. Consider what happens if you have 100 coins instead of just 5. The most
orderly arrangements (most structured) are 100 heads or 100 tails. The least orderly (least structured) is that of 50 heads and 50
tails. There is only 1 way (1 microstate) to get the most orderly arrangement of 100 heads. There are 100 ways (100 microstates)
to get the next most orderly arrangement of 99 heads and 1 tail (also 100 to get its reverse). And there are 1.0×1029 ways to
get 50 heads and 50 tails, the least orderly arrangement. Table 15.4 is an abbreviated list of the various macrostates and the
number of microstates for each macrostate. The total number of microstates—the total number of different ways 100 coins can
be tossed—is an impressively large 1.27×1030 . Now, if we start with an orderly macrostate like 100 heads and toss the coins,
there is a virtual certainty that we will get a less orderly macrostate. If we keep tossing the coins, it is possible, but exceedingly
unlikely, that we will ever get back to the most orderly macrostate. If you tossed the coins once each second, you could expect to
get either 100 heads or 100 tails once in 2×1022 years! This period is 1 trillion ( 1012 ) times longer than the age of the
universe, and so the chances are essentially zero. In contrast, there is an 8% chance of getting 50 heads, a 73% chance of
getting from 45 to 55 heads, and a 96% chance of getting from 40 to 60 heads. Disorder is highly likely.
Disorder in a Gas
The fantastic growth in the odds favoring disorder that we see in going from 5 to 100 coins continues as the number of entities in
the system increases. Let us now imagine applying this approach to perhaps a small sample of gas. Because counting
microstates and macrostates involves statistics, this is called statistical analysis. The macrostates of a gas correspond to its
macroscopic properties, such as volume, temperature, and pressure; and its microstates correspond to the detailed description
of the positions and velocities of its atoms. Even a small amount of gas has a huge number of atoms: 1.0 cm3 of an ideal gas
at 1.0 atm and 0º C has 2.7×1019 atoms. So each macrostate has an immense number of microstates. In plain language,
this means that there are an immense number of ways in which the atoms in a gas can be arranged, while still having the same
pressure, temperature, and so on.
666
Chapter 15 | Thermodynamics
This OpenStax book is available for free at http://cnx.org/content/col11844/1.14

The most likely conditions (or macrostates) for a gas are those we see all the time—a random distribution of atoms in space with
a Maxwell-Boltzmann distribution of speeds in random directions, as predicted by kinetic theory. This is the most disorderly and
least structured condition we can imagine. In contrast, one type of very orderly and structured macrostate has all of the atoms in
one corner of a container with identical velocities. There are very few ways to accomplish this (very few microstates
corresponding to it), and so it is exceedingly unlikely ever to occur. (See Figure 15.41(b).) Indeed, it is so unlikely that we have a
law saying that it is impossible, which has never been observed to be violated—the second law of thermodynamics.
Figure 15.41 (a) The ordinary state of gas in a container is a disorderly, random distribution of atoms or molecules with a Maxwell-Boltzmann
distribution of speeds. It is so unlikely that these atoms or molecules would ever end up in one corner of the container that it might as well be
impossible. (b) With energy transfer, the gas can be forced into one corner and its entropy greatly reduced. But left alone, it will spontaneously increase
its entropy and return to the normal conditions, because they are immensely more likely.
The disordered condition is one of high entropy, and the ordered one has low entropy. With a transfer of energy from another
system, we could force all of the atoms into one corner and have a local decrease in entropy, but at the cost of an overall
increase in entropy of the universe. If the atoms start out in one corner, they will quickly disperse and become uniformly
distributed and will never return to the orderly original state (Figure 15.41(b)). Entropy will increase. With such a large sample of
atoms, it is possible—but unimaginably unlikely—for entropy to decrease. Disorder is vastly more likely than order.
The arguments that disorder and high entropy are the most probable states are quite convincing. The great Austrian physicist
Ludwig Boltzmann (1844–1906)—who, along with Maxwell, made so many contributions to kinetic theory—proved that the
entropy of a system in a given state (a macrostate) can be written as
(15.68)
S = klnW,
where k = 1.38×10−23 J/K is Boltzmann's constant, and lnW is the natural logarithm of the number of microstates W
corresponding to the given macrostate. W is proportional to the probability that the macrostate will occur. Thus entropy is
directly related to the probability of a state—the more likely the state, the greater its entropy. Boltzmann proved that this
expression for S is equivalent to the definition ΔS = Q / T , which we have used extensively.
Thus the second law of thermodynamics is explained on a very basic level: entropy either remains the same or increases in
every process. This phenomenon is due to the extraordinarily small probability of a decrease, based on the extraordinarily larger
number of microstates in systems with greater entropy. Entropy can decrease, but for any macroscopic system, this outcome is
so unlikely that it will never be observed.
Example 15.9 Entropy Increases in a Coin Toss
Suppose you toss 100 coins starting with 60 heads and 40 tails, and you get the most likely result, 50 heads and 50 tails.
What is the change in entropy?
Strategy
Noting that the number of microstates is labeled W in Table 15.4 for the 100-coin toss, we can use
ΔS = Sf − Si = klnWf - klnWi to calculate the change in entropy.
Chapter 15 | Thermodynamics
667

Solution
The change in entropy is
(15.69)
ΔS = Sf – Si = klnWf – klnWi,
where the subscript i stands for the initial 60 heads and 40 tails state, and the subscript f for the final 50 heads and 50 tails
state. Substituting the values for W from Table 15.4 gives
(15.70)
ΔS = (1.38×10 – 23 J/K)[ln(1.0×1029 ) – ln(1.4×1028)]
= 2.7×10 – 23 J/K
Discussion
This increase in entropy means we have moved to a less orderly situation. It is not impossible for further tosses to produce
the initial state of 60 heads and 40 tails, but it is less likely. There is about a 1 in 90 chance for that decrease in entropy (
– 2.7×10 – 23 J/K ) to occur. If we calculate the decrease in entropy to move to the most orderly state, we get
ΔS = – 92×10 – 23 J/K . There is about a 1 in 1030 chance of this change occurring. So while very small decreases in
entropy are unlikely, slightly greater decreases are impossibly unlikely. These probabilities imply, again, that for a
macroscopic system, a decrease in entropy is impossible. For example, for heat transfer to occur spontaneously from 1.00
kg of 0ºC ice to its 0ºC environment, there would be a decrease in entropy of 1.22×103 J/K . Given that a
ΔS of 10 – 21 J/K corresponds to about a 1 in 1030 chance, a decrease of this size ( 103 J/K ) is an utter impossibility.
Even for a milligram of melted ice to spontaneously refreeze is impossible.
Problem-Solving Strategies for Entropy
1.
Examine the situation to determine if entropy is involved.
2.
Identify the system of interest and draw a labeled diagram of the system showing energy flow.
3.
Identify exactly what needs to be determined in the problem (identify the unknowns). A written list is useful.
4.
Make a list of what is given or can be inferred from the problem as stated (identify the knowns). You must carefully
identify the heat transfer, if any, and the temperature at which the process takes place. It is also important to identify
the initial and final states.
5.
Solve the appropriate equation for the quantity to be determined (the unknown). Note that the change in entropy can
be determined between any states by calculating it for a reversible process.
6.
Substitute the known value along with their units into the appropriate equation, and obtain numerical solutions
complete with units.
7.
To see if it is reasonable: Does it make sense? For example, total entropy should increase for any real process or be
constant for a reversible process. Disordered states should be more probable and have greater entropy than ordered
states.
Exercise 15.1
(a) If you toss 10 coins, what percent of the time will you get the three most likely macrostates (6 heads and 4 tails, 5 heads
and 5 tails, 4 heads and 6 tails)? (b) You can realistically toss 10 coins and count the number of heads and tails about twice
a minute. At that rate, how long will it take on average to get either 10 hea

## Match 1.56 — College_Physics_2e-WEB_7Zesafu § 15.7 Statistical Interpretation of Entropy and the Second Law of

Thermodynamics: The Underlying Explanation
LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Identify probabilities in entropy.
•
Analyze statistical probabilities in entropic systems.
FIGURE 15.37 When you toss a coin a large number of times, heads and tails tend to come up in roughly equal numbers. Why doesn’t
heads come up 100, 90, or even 80% of the time? (credit: Jon Sullivan, PDPhoto.org)
The various ways of formulating the second law of thermodynamics tell what happens rather than why it happens.
15.7 • Statistical Interpretation of Entropy and the Second Law of Thermodynamics: The Underlying Explanation
661

Why should heat transfer occur only from hot to cold? Why should energy become ever less available to do work?
Why should the universe become increasingly disorderly? The answer is that it is a matter of overwhelming
probability. Disorder is simply vastly more likely than order.
When you watch an emerging rain storm begin to wet the ground, you will notice that the drops fall in a disorganized
manner both in time and in space. Some fall close together, some far apart, but they never fall in straight, orderly
rows. It is not impossible for rain to fall in an orderly pattern, just highly unlikely, because there are many more
disorderly ways than orderly ones. To illustrate this fact, we will examine some random processes, starting with coin
tosses.
Coin Tosses
What are the possible outcomes of tossing 5 coins? Each coin can land either heads or tails. On the large scale, we
are concerned only with the total heads and tails and not with the order in which heads and tails appear. The
following possibilities exist:
These are what we call macrostates. A macrostate is an overall property of a system. It does not specify the details
of the system, such as the order in which heads and tails occur or which coins are heads or tails.
Using this nomenclature, a system of 5 coins has the 6 possible macrostates just listed. Some macrostates are more
likely to occur than others. For instance, there is only one way to get 5 heads, but there are several ways to get 3
heads and 2 tails, making the latter macrostate more probable. Table 15.3 lists of all the ways in which 5 coins can
be tossed, taking into account the order in which heads and tails occur. Each sequence is called a microstate—a
detailed description of every element of a system.
Individual microstates
Number of
microstates
5 heads, 0
tails
HHHHH
1
4 heads, 1
tail
HHHHT, HHHTH, HHTHH, HTHHH, THHHH
5
3 heads, 2
tails
HTHTH, THTHH, HTHHT, THHTH, THHHT HTHTH, THTHH, HTHHT,
THHTH, THHHT
10
2 heads, 3
tails
TTTHH, TTHHT, THHTT, HHTTT, TTHTH, THTHT, HTHTT, THTTH, HTTHT,
HTTTH
10
1 head, 4
tails
TTTTH, TTTHT, TTHTT, THTTT, HTTTT
5
TABLE 15.3 5-Coin Toss
15.67
662
15 • Thermodynamics
Access for free at openstax.org

Individual microstates
Number of
microstates
0 heads, 5
tails
TTTTT
1
Total: 32
TABLE 15.3 5-Coin Toss
The macrostate of 3 heads and 2 tails can be achieved in 10 ways and is thus 10 times more probable than the one
having 5 heads. Not surprisingly, it is equally probable to have the reverse, 2 heads and 3 tails. Similarly, it is equally
probable to get 5 tails as it is to get 5 heads. Note that all of these conclusions are based on the crucial assumption
that each microstate is equally probable. With coin tosses, this requires that the coins not be asymmetric in a way
that favors one side over the other, as with loaded dice. With any system, the assumption that all microstates are
equally probable must be valid, or the analysis will be erroneous.
The two most orderly possibilities are 5 heads or 5 tails. (They are more structured than the others.) They are also
the least likely, only 2 out of 32 possibilities. The most disorderly possibilities are 3 heads and 2 tails and its reverse.
(They are the least structured.) The most disorderly possibilities are also the most likely, with 20 out of 32
possibilities for the 3 heads and 2 tails and its reverse. If we start with an orderly array like 5 heads and toss the
coins, it is very likely that we will get a less orderly array as a result, since 30 out of the 32 possibilities are less
orderly. So even if you start with an orderly state, there is a strong tendency to go from order to disorder, from low
entropy to high entropy. The reverse can happen, but it is unlikely.
Macrostate
Number of microstates
Heads
Tails
(W)
100
0
1
99
1
×
95
5
×
90
10
×
75
25
×
60
40
×
55
45
×
51
49
×
50
50
×
TABLE 15.4 100-Coin Toss
15.7 • Statistical Interpretation of Entropy and the Second Law of Thermodynamics: The Underlying Explanation
663

Macrostate
Number of microstates
49
51
×
45
55
×
40
60
×
25
75
×
10
90
×
5
95
×
1
99
×
0
100
1
Total:
×
TABLE 15.4 100-Coin Toss
This result becomes dramatic for larger systems. Consider what happens if you have 100 coins instead of just 5. The
most orderly arrangements (most structured) are 100 heads or 100 tails. The least orderly (least structured) is that
of 50 heads and 50 tails. There is only 1 way (1 microstate) to get the most orderly arrangement of 100 heads.
There are 100 ways (100 microstates) to get the next most orderly arrangement of 99 heads and 1 tail (also 100 to
get its reverse). And there are
ways to get 50 heads and 50 tails, the least orderly arrangement. Table
15.4 is an abbreviated list of the various macrostates and the number of microstates for each macrostate. The total
number of microstates—the total number of different ways 100 coins can be tossed—is an impressively large
. Now, if we start with an orderly macrostate like 100 heads and toss the coins, there is a virtual
certainty that we will get a less orderly macrostate. If we keep tossing the coins, it is possible, but exceedingly
unlikely, that we will ever get back to the most orderly macrostate. If you tossed the coins once each second, you
could expect to get either 100 heads or 100 tails once in
years! This period is 1 trillion (
) times longer
than the age of the universe, and so the chances are essentially zero. In contrast, there is an 8% chance of getting
50 heads, a 73% chance of getting from 45 to 55 heads, and a 96% chance of getting from 40 to 60 heads. Disorder
is highly likely.
Disorder in a Gas
The fantastic growth in the odds favoring disorder that we see in going from 5 to 100 coins continues as the number
of entities in the system increases. Let us now imagine applying this approach to perhaps a small sample of gas.
Because counting microstates and macrostates involves statistics, this is called statistical analysis. The
macrostates of a gas correspond to its macroscopic properties, such as volume, temperature, and pressure; and its
microstates correspond to the detailed description of the positions and velocities of its atoms. Even a small amount
of gas has a huge number of atoms:
of an ideal gas at 1.0 atm and
has
atoms. So each
macrostate has an immense number of microstates. In plain language, this means that there are an immense
number of ways in which the atoms in a gas can be arranged, while still having the same pressure, temperature, and
so on.
The most likely conditions (or macrostates) for a gas are those we see all the time—a random distribution of atoms
in space with a Maxwell-Boltzmann distribution of speeds in random directions, as predicted by kinetic theory. This
664
15 • Thermodynamics
Access for free at openstax.org

is the most disorderly and least structured condition we can imagine. In contrast, one type of very orderly and
structured macrostate has all of the atoms in one corner of a container with identical velocities. There are very few
ways to accomplish this (very few microstates corresponding to it), and so it is exceedingly unlikely ever to occur.
(See Figure 15.38(b).) Indeed, it is so unlikely that we have a law saying that it is impossible, which has never been
observed to be violated—the second law of thermodynamics.
FIGURE 15.38 (a) The ordinary state of gas in a container is a disorderly, random distribution of atoms or molecules with a Maxwell-
Boltzmann distribution of speeds. It is so unlikely that these atoms or molecules would ever end up in one corner of the container that it
might as well be impossible. (b) With energy transfer, the gas can be forced into one corner and its entropy greatly reduced. But left alone, it
will spontaneously increase its entropy and return to the normal conditions, because they are immensely more likely.
The disordered condition is one of high entropy, and the ordered one has low entropy. With a transfer of energy from
another system, we could force all of the atoms into one corner and have a local decrease in entropy, but at the cost
of an overall increase in entropy of the universe. If the atoms start out in one corner, they will quickly disperse and
become uniformly distributed and will never return to the orderly original state (Figure 15.38(b)). Entropy will
increase. With such a large sample of atoms, it is possible—but unimaginably unlikely—for entropy to decrease.
Disorder is vastly more likely than order.
The arguments that disorder and high entropy are the most probable states are quite convincing. The great Austrian
physicist Ludwig Boltzmann (1844–1906)—who, along with Maxwell, made so many contributions to kinetic
theory—proved that the entropy of a system in a given state (a macrostate) can be written as
where
is Boltzmann’s constant, and
is the natural logarithm of the number of
microstates
corresponding to the given macrostate.
is proportional to the probability that the macrostate will
occur. Thus entropy is directly related to the probability of a state—the more likely the state, the greater its entropy.
Boltzmann proved that this expression for
is equivalent to the definition
, which we have used
extensively.
Thus the second law of thermodynamics is explained on a very basic level: entropy either remains the same or
increases in every process. This phenomenon is due to the extraordinarily small probability of a decrease, based on
the extraordinarily larger number of microstates in systems with greater entropy. Entropy can decrease, but for any
macroscopic system, this outcome is so unlikely that it will never be observed.
15.68
15.7 • Statistical Interpretation of Entropy and the Second Law of Thermodynamics: The Underlying Explanation
665

EXAMPLE 15.9
Entropy Increases in a Coin Toss
Suppose you toss 100 coins starting with 60 heads and 40 tails, and you get the most likely result, 50 heads and 50
tails. What is the change in entropy?
Strategy
Noting that the number of microstates is labeled
in Table 15.4 for the 100-coin toss, we can use
to calculate the change in entropy.
Solution
The change in entropy is
where the subscript i stands for the initial 60 heads and 40 tails state, and the subscript f for the final 50 heads and
50 tails state. Substituting the values for
from Table 15.4 gives
Discussion
This increase in entropy means we have moved to a less orderly situation. It is not impossible for further tosses to
produce the initial state of 60 heads and 40 tails, but it is less likely. There is about a 1 in 90 chance for that
decrease in entropy (
) to occur. If we calculate the decrease in entropy to move to the most
orderly state, we get
. There is about a
chance of this change occurring. So while
very small decreases in entropy are unlikely, slightly greater decreases are impossibly unlikely. These probabilities
imply, again, that for a macroscopic system, a decrease in entropy is impossible. For example, for heat transfer to
occur spontaneously from 1.00 kg of
ice to its
environment, there would be a decrease in entropy of
. Given that a
corresponds to about a
chance, a decrease of this size
(
) is an utter impossibility. Even for a milligram of melted ice to spontaneously refreeze is impossible.
15.69
15.70
Problem-Solving Strategies for Entropy
1.
Examine the situation to determine if entropy is involved.
2.
Identify the system of interest and draw a labeled diagram of the system showing energy flow.
3.
Identify exactly what needs to be determined in the problem (identify the unknowns). A written list is
useful.
4.
Make a list of what is given or can be inferred from the problem as stated (identify the knowns). You must
carefully identify the heat transfer, if any, and the temperature at which the process takes place. It is also
important to identify the initial and final states.
5.
Solve the appropriate equation for the quantity to be determined (the unknown). Note that the change in
entropy can be determined between any states by calculating it for a reversible process.
6.
Substitute the known value along with their units into the appropriate equation, and obtain numerical
solutions complete with units.
7.
To see if it is reasonable: Does it make sense? For example, total entropy should increase for any real
process or be constant for a reversible process. Disordered states should be more probable and have
greater entropy than ordered states.
666
15 • Thermodynamics
Access for free at openstax.org

Glossary
adiabatic process
a process in which no heat transfer
takes place
Carnot cycle
a cyclical process that uses only
reversible processes, the adiabatic and isothermal
processes
Carnot efficiency
the maximum theoretical efficiency
for a heat engine
Carnot engine
a heat engine that uses a Carnot cycle
change in entropy
the ratio of heat transfer to
temperature
coefficient of performance
for a heat pump, it is the
ratio of heat transfer at the output (the hot
reservoir) to the work supplied; for a refrigerator or
air conditioner, it is the ratio of heat transfer from
the cold reservoir to the work supplied
cyclical process
a process in which the path returns
to its original state at the end of every cycle
entropy
a measurement of a system's disorder and
its inability to do work in a system
first law of thermodynamics
states that the change
in internal energy of a system equals the net heat

## Match 1.56 — College_Physics_for_AP_Courses_2e-WEB_DkhNbxV § 15.7 Statistical Interpretation of Entropy and the Second Law of

Thermodynamics: The Underlying Explanation
LEARNING OBJECTIVES
By the end of this section, you will be able to:
•
Identify probabilities in entropy.
•
Analyze statistical probabilities in entropic systems.
FIGURE 15.37 When you toss a coin a large number of times, heads and tails tend to come up in roughly equal numbers. Why doesn’t
heads come up 100, 90, or even 80% of the time? (credit: Jon Sullivan, PDPhoto.org)
The various ways of formulating the second law of thermodynamics tell what happens rather than why it happens.
700
15 • Thermodynamics
Access for free at openstax.org

Why should heat transfer occur only from hot to cold? Why should energy become ever less available to do work?
Why should the universe become increasingly disorderly? The answer is that it is a matter of overwhelming
probability. Disorder is simply vastly more likely than order.
When you watch an emerging rain storm begin to wet the ground, you will notice that the drops fall in a disorganized
manner both in time and in space. Some fall close together, some far apart, but they never fall in straight, orderly
rows. It is not impossible for rain to fall in an orderly pattern, just highly unlikely, because there are many more
disorderly ways than orderly ones. To illustrate this fact, we will examine some random processes, starting with coin
tosses.
Coin Tosses
What are the possible outcomes of tossing 5 coins? Each coin can land either heads or tails. On the large scale, we
are concerned only with the total heads and tails and not with the order in which heads and tails appear. The
following possibilities exist:
These are what we call macrostates. A macrostate is an overall property of a system. It does not specify the details
of the system, such as the order in which heads and tails occur or which coins are heads or tails.
Using this nomenclature, a system of 5 coins has the 6 possible macrostates just listed. Some macrostates are more
likely to occur than others. For instance, there is only one way to get 5 heads, but there are several ways to get 3
heads and 2 tails, making the latter macrostate more probable. Table 15.3 lists of all the ways in which 5 coins can
be tossed, taking into account the order in which heads and tails occur. Each sequence is called a microstate—a
detailed description of every element of a system.
Individual microstates
Number of
microstates
5 heads, 0
tails
HHHHH
1
4 heads, 1
tail
HHHHT, HHHTH, HHTHH, HTHHH, THHHH
5
3 heads, 2
tails
HTHTH, THTHH, HTHHT, THHTH, THHHT HTHTH, THTHH, HTHHT,
THHTH, THHHT
10
2 heads, 3
tails
TTTHH, TTHHT, THHTT, HHTTT, TTHTH, THTHT, HTHTT, THTTH, HTTHT,
HTTTH
10
1 head, 4
tails
TTTTH, TTTHT, TTHTT, THTTT, HTTTT
5
TABLE 15.3 5-Coin Toss
15.67
15.7 • Statistical Interpretation of Entropy and the Second Law of Thermodynamics: The Underlying Explanation
701

Individual microstates
Number of
microstates
0 heads, 5
tails
TTTTT
1
Total: 32
TABLE 15.3 5-Coin Toss
The macrostate of 3 heads and 2 tails can be achieved in 10 ways and is thus 10 times more probable than the one
having 5 heads. Not surprisingly, it is equally probable to have the reverse, 2 heads and 3 tails. Similarly, it is equally
probable to get 5 tails as it is to get 5 heads. Note that all of these conclusions are based on the crucial assumption
that each microstate is equally probable. With coin tosses, this requires that the coins not be asymmetric in a way
that favors one side over the other, as with loaded dice. With any system, the assumption that all microstates are
equally probable must be valid, or the analysis will be erroneous.
The two most orderly possibilities are 5 heads or 5 tails. (They are more structured than the others.) They are also
the least likely, only 2 out of 32 possibilities. The most disorderly possibilities are 3 heads and 2 tails and its reverse.
(They are the least structured.) The most disorderly possibilities are also the most likely, with 20 out of 32
possibilities for the 3 heads and 2 tails and its reverse. If we start with an orderly array like 5 heads and toss the
coins, it is very likely that we will get a less orderly array as a result, since 30 out of the 32 possibilities are less
orderly. So even if you start with an orderly state, there is a strong tendency to go from order to disorder, from low
entropy to high entropy. The reverse can happen, but it is unlikely.
Macrostate
Number of microstates
Heads
Tails
(W)
100
0
1
99
1
×
95
5
×
90
10
×
75
25
×
60
40
×
55
45
×
51
49
×
50
50
×
TABLE 15.4 100-Coin Toss
702
15 • Thermodynamics
Access for free at openstax.org

Macrostate
Number of microstates
49
51
×
45
55
×
40
60
×
25
75
×
10
90
×
5
95
×
1
99
×
0
100
1
Total:
×
TABLE 15.4 100-Coin Toss
This result becomes dramatic for larger systems. Consider what happens if you have 100 coins instead of just 5. The
most orderly arrangements (most structured) are 100 heads or 100 tails. The least orderly (least structured) is that
of 50 heads and 50 tails. There is only 1 way (1 microstate) to get the most orderly arrangement of 100 heads.
There are 100 ways (100 microstates) to get the next most orderly arrangement of 99 heads and 1 tail (also 100 to
get its reverse). And there are
ways to get 50 heads and 50 tails, the least orderly arrangement. Table
15.4 is an abbreviated list of the various macrostates and the number of microstates for each macrostate. The total
number of microstates—the total number of different ways 100 coins can be tossed—is an impressively large
. Now, if we start with an orderly macrostate like 100 heads and toss the coins, there is a virtual
certainty that we will get a less orderly macrostate. If we keep tossing the coins, it is possible, but exceedingly
unlikely, that we will ever get back to the most orderly macrostate. If you tossed the coins once each second, you
could expect to get either 100 heads or 100 tails once in
years! This period is 1 trillion (
) times longer
than the age of the universe, and so the chances are essentially zero. In contrast, there is an 8% chance of getting
50 heads, a 73% chance of getting from 45 to 55 heads, and a 96% chance of getting from 40 to 60 heads. Disorder
is highly likely.
Disorder in a Gas
The fantastic growth in the odds favoring disorder that we see in going from 5 to 100 coins continues as the number
of entities in the system increases. Let us now imagine applying this approach to perhaps a small sample of gas.
Because counting microstates and macrostates involves statistics, this is called statistical analysis. The
macrostates of a gas correspond to its macroscopic properties, such as volume, temperature, and pressure; and its
microstates correspond to the detailed description of the positions and velocities of its atoms. Even a small amount
of gas has a huge number of atoms:
of an ideal gas at 1.0 atm and
has
atoms. So each
macrostate has an immense number of microstates. In plain language, this means that there are an immense
number of ways in which the atoms in a gas can be arranged, while still having the same pressure, temperature, and
so on.
The most likely conditions (or macrostates) for a gas are those we see all the time—a random distribution of atoms
in space with a Maxwell-Boltzmann distribution of speeds in random directions, as predicted by kinetic theory. This
15.7 • Statistical Interpretation of Entropy and the Second Law of Thermodynamics: The Underlying Explanation
703

is the most disorderly and least structured condition we can imagine. In contrast, one type of very orderly and
structured macrostate has all of the atoms in one corner of a container with identical velocities. There are very few
ways to accomplish this (very few microstates corresponding to it), and so it is exceedingly unlikely ever to occur.
(See Figure 15.38(b).) Indeed, it is so unlikely that we have a law saying that it is impossible, which has never been
observed to be violated—the second law of thermodynamics.
FIGURE 15.38 (a) The ordinary state of gas in a container is a disorderly, random distribution of atoms or molecules with a Maxwell-
Boltzmann distribution of speeds. It is so unlikely that these atoms or molecules would ever end up in one corner of the container that it
might as well be impossible. (b) With energy transfer, the gas can be forced into one corner and its entropy greatly reduced. But left alone, it
will spontaneously increase its entropy and return to the normal conditions, because they are immensely more likely.
The disordered condition is one of high entropy, and the ordered one has low entropy. With a transfer of energy from
another system, we could force all of the atoms into one corner and have a local decrease in entropy, but at the cost
of an overall increase in entropy of the universe. If the atoms start out in one corner, they will quickly disperse and
become uniformly distributed and will never return to the orderly original state (Figure 15.38(b)). Entropy will
increase. With such a large sample of atoms, it is possible—but unimaginably unlikely—for entropy to decrease.
Disorder is vastly more likely than order.
The arguments that disorder and high entropy are the most probable states are quite convincing. The great Austrian
physicist Ludwig Boltzmann (1844–1906)—who, along with Maxwell, made so many contributions to kinetic
theory—proved that the entropy of a system in a given state (a macrostate) can be written as
where
is Boltzmann’s constant, and
is the natural logarithm of the number of
microstates
corresponding to the given macrostate.
is proportional to the probability that the macrostate will
occur. Thus entropy is directly related to the probability of a state—the more likely the state, the greater its entropy.
Boltzmann proved that this expression for
is equivalent to the definition
, which we have used
extensively.
Thus the second law of thermodynamics is explained on a very basic level: entropy either remains the same or
increases in every process. This phenomenon is due to the extraordinarily small probability of a decrease, based on
the extraordinarily larger number of microstates in systems with greater entropy. Entropy can decrease, but for any
macroscopic system, this outcome is so unlikely that it will never be observed.
15.68
704
15 • Thermodynamics
Access for free at openstax.org

EXAMPLE 15.9
Entropy Increases in a Coin Toss
Suppose you toss 100 coins starting with 60 heads and 40 tails, and you get the most likely result, 50 heads and 50
tails. What is the change in entropy?
Strategy
Noting that the number of microstates is labeled
in Table 15.4 for the 100-coin toss, we can use
to calculate the change in entropy.
Solution
The change in entropy is
where the subscript i stands for the initial 60 heads and 40 tails state, and the subscript f for the final 50 heads and
50 tails state. Substituting the values for
from Table 15.4 gives
Discussion
This increase in entropy means we have moved to a less orderly situation. It is not impossible for further tosses to
produce the initial state of 60 heads and 40 tails, but it is less likely. There is about a 1 in 90 chance for that
decrease in entropy (
) to occur. If we calculate the decrease in entropy to move to the most
orderly state, we get
. There is about a
chance of this change occurring. So while
very small decreases in entropy are unlikely, slightly greater decreases are impossibly unlikely. These probabilities
imply, again, that for a macroscopic system, a decrease in entropy is impossible. For example, for heat transfer to
occur spontaneously from 1.00 kg of
ice to its
environment, there would be a decrease in entropy of
. Given that a
corresponds to about a
chance, a decrease of this size
(
) is an utter impossibility. Even for a milligram of melted ice to spontaneously refreeze is impossible.
15.69
15.70
PROBLEM-SOLVING STRATEGIES FOR ENTROPY
1.
Examine the situation to determine if entropy is involved.
2.
Identify the system of interest and draw a labeled diagram of the system showing energy flow.
3.
Identify exactly what needs to be determined in the problem (identify the unknowns). A written list is
useful.
4.
Make a list of what is given or can be inferred from the problem as stated (identify the knowns). You must
carefully identify the heat transfer, if any, and the temperature at which the process takes place. It is also
important to identify the initial and final states.
5.
Solve the appropriate equation for the quantity to be determined (the unknown). Note that the change in
entropy can be determined between any states by calculating it for a reversible process.
6.
Substitute the known value along with their units into the appropriate equation, and obtain numerical
solutions complete with units.
7.
To see if it is reasonable: Does it make sense? For example, total entropy should increase for any real
process or be constant for a reversible process. Disordered states should be more probable and have
greater entropy than ordered states.
15.7 • Statistical Interpretation of Entropy and the Second Law of Thermodynamics: The Underlying Explanation
705

Glossary
adiabatic process
a process in which no heat transfer
takes place
Carnot cycle
a cyclical process that uses only
reversible processes, the adiabatic and isothermal
processes
Carnot efficiency
the maximum theoretical efficiency
for a heat engine
Carnot engine
a heat engine that uses a Carnot cycle
change in entropy
the ratio of heat transfer to
temperature
coefficient of performance
for a heat pump, it is the
ratio of heat transfer at the output (the hot
reservoir) to the work supplied; for a refrigerator or
air conditioner, it is the ratio of heat transfer from
the cold reservoir to the work supplied
cyclical process
a process in which the path returns
to its original state at the end of every cycle
entropy
a measurement of a system's disorder and
its inability to do work in a system
first law of thermodynamics
states that the change
in internal energy of a system equals the net heat
