# Source pack — subjects/finance/advanced/options-and-derivatives
Lesson title: Options & Derivatives
Level: advanced
Match confidence: 1.52

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.52 — LibreTexts: 3.13: Multirule Derivatives
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Calculus/Informal_Calculus_with_Applications_to_Biological_and_Environmental_Sciences_(Seacrest)/03%3A_Rules_for_Derivatives/3.13%3A_Multirule_Derivatives

3.13: Multirule Derivatives
Okay, let’s talk about \(\frac{d}{dx} \ e^{x^2 + x} \sin(x)\). If you’re thinking this looks like a product rule, but it also looks like a chain rule, you’re right. To compute this derivative, we need to do the chain rule and the product rule. This is because it is a multirule problem. Let’s do this example
The way I like to break this down is to consider a little rule and a big rule. In this case, the little rule is the chain rule problem \(\frac{d}{dx} \ e^{x^2 + x}\). If we do this problem, we see that \(f = e^x\), \(f' = e^x\), \(g = x^2 + x\) and \(g' = 2x + 1\). So we have
\[\begin{equation*} \frac{d}{dx} \ e^{x^2 + x} = {\color{red} e^{x^2 + x} (2x + 1)}. \end{equation*}\]
Now we are ready to do the big rule, which is the product rule. At this point we go back to the original problem \(\frac{d}{dx} \ e^{x^2 + x} \sin(x)\). For this product rule, we see \(f = e^{x^2 + x}\), \(g = \sin(x)\), \(g' = \cos(x)\). What is \({\color{red} f'}\)? Why, that’s what we just computed in the equation above! So \({\color{red} f' = e^{x^2 + x}(2x+1)}\). Putting this all together with the product rule \(f g' + g f'\), we have
\[\begin{align*} \frac{d}{dx} \ e^{x^2 + x} \sin(x) & = f g' + g {\color{red} f'} \\ & = \boxed{e^{x^2 + x} \cos(x) + \sin(x) {\color{red} e^{x^2 + x} (2x + 1)}} . \end{align*}\]
little chain rule: \(\frac{d}{dx} \sin(x^2 + x)\)
\(\begin{array}{ll} f = \sin(x) & g = x^2 + x \\ f' = \cos(x) & g' = 2x + 1 \end{array}\)
Result: \({\color{red} \cos(x^2 + x) \cdot (2x+1)}\)
Big quotient rule (aka the whole problem):\(\frac{d}{dx} \frac{x}{\sin(x^2 + x)}\)
\(\begin{array}{ll} f = x & g = \sin(x^2 + x) \\ f' = 1 & g' = {\color{red} \cos(x^2 + x) \cdot (2x+1)} \end{array}\)
Result: \(\boxed{\frac{\sin(x^2 + x) \cdot 1 - x \cos(x^2 + x) \cdot (2x+1)}{(\sin(x^2+x))^2}}\)

## Match 1.52 — LibreTexts: 8.11.E: Problems on Radon-Nikodym Derivatives and Lebesgue Decomposition
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_(Zakon)/08%3A_Measurable_Functions_and_Integration/8.11%3A_The_RadonNikodym_Theorem._Lebesgue_Decomposition/8.11.E%3A_Problems_on_Radon-Nikodym_Derivatives_and_Lebesgue_Decomposition

8.11.E: Problems on Radon-Nikodym Derivatives and Lebesgue Decomposition
Fill in all proof details in Lemma 2 and Theorem 1.
Verify the statement following formula ( 3 ). Also prove the following:
(i) If \(P \in \mathcal{M}\) along with \(-P \in \mathcal{M},\) then \(s \perp t\) implies \(t \perp s\);
(ii) \(s \perp t\) iff \(v_{s} \perp t\).
Prove Corollary 1.
[Hints: Here \(\mathcal{M}\) is a \(\sigma\)-ring. Suppose \(s\) and \(u\) reside in \(P^{\prime}\) and \(P^{\prime \prime},\) respectively, and \(v_{t} P^{\prime}=0=v_{t} P^{\prime \prime} .\) Let \(P=P^{\prime} \cup P^{\prime \prime} \in \mathcal{M} .\) Verify that \(v_{t} P=0\) (use Problem 8 in Chapter \(7, §11 \text { ). Then show that both } s \text { and } u \text { reside in } P .]\)
Show that if \(s: \mathcal{M} \rightarrow E^{*}\) is a signed measure in \(S \in \mathcal{M},\) then \(s^{+} \perp s^{-}\) and \(s^{-} \perp s^{+}\).
Fill in all details in the proof of Theorem \(2 .\) Also prove the following:
(i) \(s^{\prime}\) and \(v_{s^{\prime}}\) are absolutely \(t\)-continuous.
[Hint: Use Theorem 2 in Chapter 7, §11.]
(ii) \(v_{s}=v_{s^{\prime}}+v_{s^{\prime \prime}}, v_{s^{\prime \prime}} \perp t\).
(iii) If \(s\) is a measure \((\geq 0),\) so are \(s^{\prime}\) and \(s^{\prime \prime}\).
Verify Note 3 for Theorem 1 and Corollary \(3 .\) State and prove both generalized propositions precisely.

## Match 1.52 — LibreTexts: 8.5: Filters and Advanced Search Options in OneSearch
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://human.libretexts.org/Bookshelves/Research_and_Information_Literacy/Introduction_to_College_Research_(Butler_Sargent_and_Smith)/08%3A_Finding_Materials_in_the_Library/8.05%3A_Filters_and_Advanced_Search_Options_in_OneSearch

8.5: Filters and Advanced Search Options in OneSearch
Filters
OneSearch provides you with many options to filter your results. We have already discussed “Availability” and “Resource Type.” Other filters that you might see at your library include Publication Date, Subject, Author, and Language.
Advanced Search
You can also click on an option called “Advanced Search” next to the search box at the top of your results (you might have to do a search first to see this depending on how your library has it set up). This option will allow you to be much more specific with your search. For example, let’s say you wanted to find books that have “American Revolution” in the title because you feel that those books will be most relevant to your topic. You also want to find books that address the causes of the American Revolution. This is hard to do in a simple search box. But in the Advanced Search option, you have much more control.
Below is an image of the Advanced Search from OneSearch. You should be able to see that in the first line, the search is set up so that the Title contains “American Revolution.” Then in the second line, there is the option that any field should contain the word “causes.” The search is also limited to a Material Type of “Books.” This Advanced Search has additional menus with other options we could use, such as language and date. You can even add additional keywords by choosing “Add a New Line.”
