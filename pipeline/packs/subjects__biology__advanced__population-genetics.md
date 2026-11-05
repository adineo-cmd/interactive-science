# Source pack — subjects/biology/advanced/population-genetics
Lesson title: Population Genetics
Level: advanced
Match confidence: 3.08

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.08 — LibreTexts: 11.6: Population Genetics
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://bio.libretexts.org/Courses/City_College_of_San_Francisco/Introduction_to_Genetics/11%3A_Pedigrees_and_Populations/11.06%3A_Population_Genetics

11.6: Population Genetics
-
- Last updated
- Save as PDF
- Ying Liu
- City College of San Francisco
A population is a large group of individuals of the same species, who are capable of mating with each other. It is useful to know the frequency of particular alleles within a population, since this information can be used to calculate disease risks. Population genetics is also important in ecology and evolution, since changes in allele frequencies may be associated with migration or natural selection.
Allele frequencies may also be studied at the population level
The frequency of different alleles in a population can be determined from the frequency of the various phenotypes in the population. In the simplest system, with two alleles of the same locus (e.g. A , a ), we use the symbol p to represent the frequency of the dominant allele within the population, and q for the frequency of the recessive allele. Because there are only two possible alleles, we can say that the frequency of p and q together represent 100% of the alleles in the population ( p+q=1 ).
We can calculate the values of p and q, in a representative sample of individuals from a population, by simply counting the alleles and dividing by the total number of alleles examined. For a given allele, homozygotes will count for twice as much as heterozygotes.
For example:
| genotype | number of individuals |
|
AA Aa aa |
320 160 20 |
|
A (p) |
a (q) |
|
|
A (p) |
p 2 |
pq |
|
a (q) |
pq |
q 2 |
\[\begin{align} \mathbf{p} &= \mathbf{\dfrac{2(AA) + Aa}{total\: alleles\: counted}}\\ &= \dfrac{2(320) + 160}{2(320) + 2(160) + 2(20)} = 0.8 \end{align}\]
\[\begin{align} \mathbf{q} &= \mathbf{\dfrac{2(aa) + Aa}{total\: alleles\: counted}}\\ &= \dfrac{2(20) + 160}{2(320) + 2(160) + 2(20)} = 0.2 \end{align}\]
Hardy-Weinberg formula
With the allele frequencies of a population we can use an extension of the Punnett Square, and the product rule, to calculate the expected frequency of each genotype following random matings within the entire population. This is the basis of the Hardy-Weinberg formula:
\[p^2 + 2pq + q^2=1 \label{HW}\]
Here \(p^2\) is the frequency of homozygotes AA , \(2pq\) is the frequency of the heterozygotes, and \(q^2\) is the frequency of homozygotes aa . Notice that if we substitute the allele frequencies we calculated above (p=0.8, q=0.2) into the Equation \ref{HW} , we obtain expected probabilities for each of the genotypes that exactly match our original observations:
\[\begin{align} &\mathrm{p^2=0.8^2=0.64} &&0.64 \times 500 = 320 \\ &\mathrm{2pq= 2(0.8)(0.2)=0.32} &&0.32 \times 500 = 160 \\ &\mathrm{q^2=0.2^2=0.04} &&0.04 \times 500 = 20 \end{align}\]
This is a demonstration of the Hardy-Weinberg Equilibrium , where both the genotype frequencies and allele frequencies in a population remain unchanged following successive matings within a population, if certain conditions are met. These conditions are listed in Table \(\PageIndex{1}\). Few natural populations actually satisfy all of these conditions. Nevertheless, large populations of many species, including humans, appear to approach Hardy-Weinberg equilibrium for many loci. In these situations, deviations of a particular gene from Hardy-Weinberg equilibirum can be an indication that one of the alleles affects the reproductive success of organism, for example through natural selection or assortative mating .
Conditions for the Hardy-Weinberg equilibrium
- Random mating : Individuals of all genotypes mate together with equal frequency. Assortative mating, in which certain genotypes preferentially mate together, is a type of non-random mating.
- No natural selection : All genotypes have equal fitness.
- No migration : Individuals do not leave or enter the population.
- No mutation : The allele frequencies do not change due to mutation.
- Large population : Random sampling effects in mating (i.e. genetic drift) are insignificant in large populations.
The Hardy-Weinberg formula can also be used to estimate allele frequencies, when only the frequency of one of the genotypic classes is known. For example, if 0.04% of the population is affected by a particular genetic condition, and all of the affected individuals have the genotype aa, then we assume that q 2 = 0.0004 and we can calculate p, q, and 2pq as follows:
\[\mathrm{q^2 = 0.04\% = 0.0004}\]
\[\mathrm{q = \sqrt{0.0004} = 0.02}\]
\[\mathrm{p= 1-q = 0.98}\]
\[\mathrm{2pq = 2(0.98)(0.02) = 0.04}\]
Thus, approximately 4% of the population is expected to be heterozygous (i.e. a carrier) of this genetic condition. Note that while we recognize that the population is probably not exactly in Hardy-Weinberg equilibrium for this locus, application of the Hardy-Weinberg formula nevertheless can give a reasonable estimate of allele frequencies, in the absence of any other information.

## Match 3.07 — LibreTexts: 19.1B: Population Genetics
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/General_Biology_(Boundless)/19%3A_The_Evolution_of_Populations/19.01%3A_Population_Evolution/19.1B%3A_Population_Genetics

19.1B: Population Genetics
- Define a population gene pool and explain how the size of the gene pool can affect the evolutionary success of a population
Population Genetics
A gene for a particular characteristic may have several variations called alleles. These variations code for different traits associated with that characteristic. For example, in the ABO blood type system in humans, three alleles (I A , I B , or i) determine the particular blood-type protein on the surface of red blood cells. A human with a type I A allele will display A-type proteins (antigens) on the surface of their red blood cells. Individuals with the phenotype of type A blood have the genotype I A I A or I A i, type B have I B I B or I B i, type AB have I A I B , and type O have ii.
A diploid organism can only carry two alleles for a particular gene. In human blood type, the combinations are composed of two alleles such as I A I A or I A I B . Although each organism can only carry two alleles, more than those two alleles may be present in the larger population. For example, in a population of fifty people where all the blood types are represented, there may be more I A alleles than i alleles. Population genetics is the study of how selective forces change a population through changes in allele and genotypic frequencies.
Allele Frequency
The allele frequency (or gene frequency) is the rate at which a specific allele appears within a population. In population genetics, the term evolution is defined as a change in the frequency of an allele in a population. Frequencies range from 0, present in no individuals, to 1, present in all individuals. The gene pool is the sum of all the alleles at all genes in a population.
Using the ABO blood type system as an example, the frequency of one of the alleles, for example I A , is the number of copies of that allele divided by all the copies of the ABO gene in the population, i.e. all the alleles. Allele frequencies can be expressed as a decimal or as a percent and always add up to 1, or 100 percent, of the total population. For example, in a sample population of humans, the frequency of the I A allele might be 0.26, which would mean that 26% of the chromosomes in that population carry the I A allele. If we also know that the frequency of the I B allele in this population is 0.14, then the frequency of the i allele is 0.6, which we obtain by subtracting all the known allele frequencies from 1 (thus: 1 – 0.26 – 0.14 = 0.6). A change in any of these allele frequencies over time would constitute evolution in the population.
Population Size and Evolution
When allele frequencies within a population change randomly with no advantage to the population over existing allele frequencies, the phenomenon is called genetic drift. The smaller a population, the more susceptible it is to mechanisms such as genetic drift as alleles are more likely to become fixed at 0 (absent) or 1 (universally present). Random events that alter allele frequencies will have a much larger effect when the gene pool is small. Genetic drift and natural selection usually occur simultaneously in populations, but the cause of the frequency change is often impossible to determine.
Natural selection also affects allele frequency. If an allele confers a phenotype that enables an individual to better survive or have more offspring, the frequency of that allele will increase. Because many of those offspring will also carry the beneficial allele and, therefore, the phenotype, they will have more offspring of their own that also carry the allele. Over time, the allele will spread throughout the population and may become fixed: every individual in the population carries the allele. If an allele is dominant but detrimental, it may be swiftly eliminated from the gene pool when the individual with the allele does not reproduce. However, a detrimental recessive allele can linger for generations in a population, hidden by the dominant allele in heterozygotes. In such cases, the only individuals to be eliminated from the population are those unlucky enough to inherit two copies of such an allele.
The Founder Effect
The founder effect occurs when part of a population becomes isolated and establishes a separate gene pool with its own allele frequencies. When a small number of individuals become the basis of a new population, this new population can be very different genetically from the original population if the founders are not representative of the original. Therefore, many different populations, with very different and uniform gene pools, can all originate from the same, larger population. Together, the forces of natural selection, genetic drift, and founder effect can lead to significant changes in the gene pool of a population.
Key Points
- A gene pool is the sum of all the alleles (variants of a gene) in a population.
- Allele frequencies range from 0 (present in no individuals) to 1 (present in all individuals); all allele frequencies for a given gene add up to 100 percent in a population.
- The smaller a population, the more susceptible it is to mechanisms like natural selection and genetic drift, as the effects of such mechanisms are magnified when the gene pool is small.
- The founder effect occurs when part of an original population establishes a new population with a separate gene pool, leading to less genetic variation in the new population.
Key Terms
- allele : one of a number of alternative forms of the same gene occupying a given position on a chromosome
- gene pool : the complete set of unique alleles that would be found by inspecting the genetic material of every living member of a species or population
- founder effect : a decrease in genetic variation that occurs when an entire population descends from a small number of founders

## Match 3.06 — LibreTexts: 5: Population Genetics
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/3.0/ · https://math.libretexts.org/Bookshelves/Applied_Mathematics/Mathematical_Biology_(Chasnov)/05%3A_Population_Genetics

5: Population Genetics
Deoxyribonucleic acid, or DNA-a large double-stranded, helical molecule, with rungs made from the four base pairs adenine (A), cytosine (C), thymine (T) and guanine \((G)\) -carries inherited genetic information. The ordering of the base pairs \(A, C\) , \(\mathrm{T}\) and \(\mathrm{G}\) determines the DNA sequence. A gene is a particular DNA sequence that is the fundamental unit of heredity for a particular trait. Some species develop as diploids, carrying two copies of every gene, one from each parent, and some species develop as haploids with only one copy. There are even species that develop as both diploids and haploids.
Consider the pea plant, which develops as a diploid. When we say there is a gene for pea color, say, we mean there is a particular DNA sequence that may vary in a pea plant population, and that there are at least two subtypes, called alleles, where plants with two copies of the yellow-color allele have yellow peas, those with two copies of the green-color allele, green peas. A plant with two copies of the same allele is homozygous for that particular gene (or a homozygote), while a plant carrying two different alleles is heterozygous (or a heterozygote). For the pea color gene, a plant carrying both a yellow- and green-color allele has yellow peas. We say that the green color is a recessive trait (or the green-color allele is recessive), and the yellow color is a dominant trait (or the yellow-color allele is dominant). The combination of alleles carried by the plant is called its genotype, while the actual trait (green or yellow peas) is called its phenotype. A gene that has more than one allele in a population is called polymorphic, and we say the population has a polymorphism for that particular gene.
Population genetics can be defined as the mathematical modeling of the evolution and maintenance of polymorphism in a population. Population genetics together with Charles Darwin’s theory of evolution by natural selection and Gregor Mendel’s theory of biological inheritance forms the modern evolutionary synthesis (sometimes called the modern synthesis, the evolutionary synthesis, the neoDarwinian synthesis, or neo-Darwinism). The primary founders in the early twentieth century of population genetics were Sewall Wright, J. B. S. Haldane and Ronald Fisher.
Allele frequencies in a population can change due to the influence of four primary evolutionary forces: natural selection, genetic drift, mutation, and migration. Here, we mainly focus on natural selection and mutation. Genetic drift is the study of stochastic effects, and it is important in small populations. Migration typically requires consideration of the spatial distribution of a population, and it is usually modeled mathematically by partial differential equations.
The simplified models we will consider assume infinite population sizes (neglecting stochastic effects except in \(\$ 5.5\) ), well-mixed populations (neglecting any spatial distribution), and discrete generations (neglecting any age-structure). Our main purpose is to illustrate the fundamental ways that a genetic polymorphism can be maintained in a population.
| genotype | \(A\) | \(a\) |
| number | \(n_{A}\) | \(n_{a}\) |
| viability fitness | \(g_{A}\) | \(g_{a}\) |
| fertility fitness | \(f_{A}\) | \(f_{a}\) |
