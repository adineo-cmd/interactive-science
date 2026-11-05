# Source pack — subjects/linguistics/intermediate/semantics-and-pragmatics
Lesson title: Semantics & Pragmatics
Level: intermediate
Match confidence: 1.56

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.56 — LibreTexts: Chapter 5: Formal semantics
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://human.libretexts.org/Bookshelves/Philosophy/An_Introduction_to_Formal_Logic_(Magnus)/Chapter_5%3A_Formal_semantics

Chapter 5: Formal semantics
In this chapter, we describe a formal semantics for SL and for QL. The word ‘semantics’ comes from the greek word for ‘mark’ and means ‘related to meaning.’ So a formal semantics will be a mathematical account of meaning in the formal language.
A formal, logical language is built from two kinds of elements: logical symbols and non-logical symbols. Connectives (like ‘&’) and quantifiers (like ‘∀’) are logical symbols, because their meaning is specified within the formal language. When writing a symbolization key, you are not allowed to change the meaning of the logical symbols. You cannot say, for instance, that the ‘¬’ symbol will mean ‘not’ in one argument and ‘perhaps’ in another. The ‘¬’ symbol always means logical negation. It is used to translate the English language word ‘not’, but it is a symbol of a formal language and is defined by its truth conditions.
The sentence letters in SL are non-logical symbols, because their meaning is not defined by the logical structure of SL. When we translate an argument from English to SL, for example, the sentence letter \(M\) does not have its meaning fixed in advance; instead, we provide a symbolization key that says how \(M\) should be interpreted in that argument. In QL, the predicates and constants are non-logical symbols.
In translating from English to a formal language, we provided symbolization keys which were interpretations of all the non-logical symbols we used in the translation. An interpretation gives a meaning to all the non-logical elements of the language.
It is possible to provide different interpretations that make no formal difference. In SL, for example, we might say that \(D\) means ‘Today is Tuesday’; we might say instead that \(D\) means ‘Today is the day after Monday.’ These are two different interpretations, because they use different English sentences for the meaning of \(D\). Yet, formally, there is no difference between them. All that matters once we have symbolized these sentences is whether they are true or false. In order to characterize what makes a difference in the formal language, we need to know what makes sentences true or false. For this, we need a formal characterization of truth .
When we gave definitions for a sentence of SL and for a sentence of QL, we distinguished between the
object language
and the
metalanguage
. The object language is the language that we are
talking about
: either SL or QL. The metalanguage is the language that we use to talk about the object language: English, supplemented with some mathematical jargon. It will be important to keep this distinction in mind.

## Match 1.54 — LibreTexts: Section 3: Semantics for identity
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://human.libretexts.org/Bookshelves/Philosophy/An_Introduction_to_Formal_Logic_(Magnus)/Chapter_5%3A_Formal_semantics/Section_3%3A_Semantics_for_identity

Section 3: Semantics for identity
Identity is a special predicate of QL. We write it a bit differently than other two-place predicates: \(x\) = \(y\) instead of \(Ixy\). We also do not need to include it in a symbolization key. The sentence \(x\) = \(y\) always means ‘\(x\) is identical to \(y\),’ and it cannot be interpreted to mean anything else. In the same way, when you construct a model, you do not get to pick and choose which ordered pairs go into the extension of the identity predicate. It always contains just the ordered pair of each object in the UD with itself.
The sentence ∀\(xIxx\), which contains an ordinary two-place predicate, is contingent. Whether it is true for an interpretation depends on how you interpret \(I\), and whether it is true in a model depends on the extension of \(I\).
The sentence ∀\(x\) \(x\) = \(x\) is a tautology. The extension of identity will always make it true.
Notice that although identity always has the same interpretation, it does not always have the same extension. The extension of identity depends on the UD. If the UD in a model is the set {Doug}, then extension(=) in that model is {<Doug, Doug>}. If the UD is the set {Doug, Omar}, then extension(=) in that model is {<Doug, Doug>, <Omar, Omar>}. And so on.
If the referent of two constants is the same, then anything which is true of one is true of the other. For example, if referent(\(a\)) = referent(\(b\)), then \(Aa\) ↔ \(Ab\), \(Ba\) ↔ \(Bb\), \(Ca\) ↔ \(Cb\), \(Rca\) ↔ \(Rcb\), ∀\(xRxa\) ↔ ∀\(xRxb\), and so on for any two sentences containing \(a\) and \(b\). However, the reverse is not true.
It is possible that anything which is true of \(a\) is also true of \(b\), yet for \(a\) and \(b\) still to have different referents. This may seem puzzling, but it is easy to construct a model that shows this. Consider this model:
UD = {Rosencrantz, Guildenstern}
referent(\(a\)) = Rosencrantz
referent(\(b\)) = Guildenstern
for all predicates \(\mathcal{P}\), extension(\(\mathcal{P}\)) = ∅
extension(=) = {<Rosencrantz, Rosencrantz>,
<Guildenstern, Guildenstern>}
This specifies an extension for every predicate of QL: All the infinitely-many predicates are empty. This means that both \(Aa\) and \(Ab\) are false, and they are equivalent; both \(Ba\) and \(Bb\) are false; and so on for any two sentences that contain \(a\) and \(b\). Yet \(a\) and \(b\) refer to different things. We have written out the extension of identity to make this clear: The ordered pairhreferent(\(a\)),referent(\(b\))i is not in it. In this model, \(a\) = \(b\) is false and \(a\) ≠ \(b\) is true.

## Match 1.54 — LibreTexts: Section 1: Semantics for SL
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://human.libretexts.org/Bookshelves/Philosophy/An_Introduction_to_Formal_Logic_(Magnus)/Chapter_5%3A_Formal_semantics/Section_1%3A_Semantics_for_SL

Section 1: Semantics for SL
This section provides a rigorous, formal characterization of truth in \(SL\) which builds on what we already know from doing truth tables. We were able to use truth tables to reliably test whether a sentence was a tautology in \(SL\), whether two sentences were equivalent, whether an argument was valid, and so on. For instance: \(\mathcal{A}\) is a tautology in \(SL\) if it is \(T\) on every line of a complete truth table.
This worked because each line of a truth table corresponds to a way the world might be. We considered all the possible combinations of 1 and 0 for the sentence letters that made a difference to the sentences we cared about. The truth table allowed us to determine what would happen given these different combinations.
Once we construct a truth table, the symbols ‘1’ and ‘0’ are divorced from their metalinguistic meaning of ‘true’ and ‘false’. We interpret ‘1’ as meaning ‘true’, but the formal properties of 1 are defined by the characteristic truth tables for the various connectives. The symbols in a truth table have a formal meaning that we can specific entirely in terms of how the connectives operate. For example, if \(A\) is value 1, then \(\neg A\) is value 0.
In short: Truth in \(SL\) just is the assignment of a 1 or a 0.
To formally define truth in \(SL\), then, we want a function that assigns a 1 or 0 to each of the \sentences of \(SL\). We can interpret this function as a definition of truth for \(SL\) if it assigns 1 to all of the true sentences of \(SL\) and 0 to all of the false sentences of \(SL\). Call this function ‘\(v\)’ (for ‘valuation’). We want \(v\) to be a function such that for any sentence \(\mathcal{A}\), \(v(\mathcal{A}) = 1\) if \(\mathcal{A}\) is true and \(v(\mathcal{A}) = 0\) if \(\mathcal{A}\) is false.
Recall that the recursive definition of a wff for \(SL\) had two stages: The first step said that atomic sentences (solitary sentence letters) are wffs. The second stage allowed for wffs to be constructed out of more basic wffs. There were clauses of the definition for all of the sentential connectives. For example, if \(\mathcal{A}\) is a wff, then \(\neg \mathcal{A}\) is a wff.
Our strategy for defining the truth function, \(v\), will also be in two steps. The first step will handle truth for atomic sentences; the second step will handle truth for compound sentences.
Truth in \(SL\)
How can we define truth for an atomic sentence of \(SL\)? Consider, for example, the sentence \(M\). Without an interpretation, we cannot say whether \(M\) is true or false. It might mean anything. If we use \(M\) to symbolize ‘The moon orbits the Earth’, then \(M\) is true. If we use \(M\) to symbolize ‘The moon is a giant turnip’, then \(M\) is false.
Moreover, the way you would discover whether or not \(M\) is true depends on what \(M\) means. If \(M\) means ‘It is Monday,’ then you would need to check a calendar. If \(M\) means ‘Jupiter’s moon Io has significant volcanic activity,’ then you would need to check an astronomy text— and astronomers know because they sent satellites to observe Io.
When we give a symbolization key for \(SL\), we provide an interpretation of the sentence letters that we use. The key gives an English language sentence for each sentence letter that we use. In this way, the interpretation specifies what each of the sentence letters means . However, this is not enough to determine whether or not that sentence is true. The sentences about the moon, for instance, require that you know some rudimentary astronomy.  She could understand what the sentence ‘The moon is a giant turnip’ means, but mistakenly think that it was true.
Consider another example: If \(M\) means ‘It is morning now’, then whether it is true or not depends on when you are reading this. I know what the sentence means, but— since I do not know when you will be reading this— I do not know whether it is true or false.
So an interpretation alone does not determine whether a sentence is true or false. Truth or falsity depends also on what the world is like. If \(M\) meant ‘The moon is a giant turnip’ and the real moon were a giant turnip, then \(M\) would be true. To put the point in a general way, truth or falsity is determined by an interpretation plus a way that the world is.
INTERPRETATION + STATE OF THE WORLD \(\implies\) TRUTH/FALSITY
In providing a logical definition of truth, we will not be able to give an account of how an atomic sentence is made true or false by the world. Instead, we will introduce a truth value assignment . Formally, this will be a function that tells us the truth value of all the atomic sentences. Call this function ‘\(a\)’ (for ‘assignment’). We define a for all sentence letters \(\mathcal{P}\), such that
\( a ( \mathcal { P } ) = \left\{ \begin{array} { l l } { 1 } & { \text { if } \mathcal { P } \text { is true } } \\ { 0 } & { \text { otherwise } } \end{array} \right. \)
This means that a takes any sentence of \(SL\) and assigns it either a one or a zero; one if the sentence is true, zero if the sentence is false. The details of the function \(a\) are determined by the meaning of the sentence letters together with the state of the world. If \(D\) means ‘It is dark outside’, then \(a\)(\(D\)) = 1 at night or during a heavy storm, while \(a\)(\(D\)) = 0 on a clear day.
You can think of \(a\) as being like a row of a truth table.  There are infinitely many sentence letters, and the truth value assignment gives a value to each of them. When constructing a truth table, we only care about sentence letters that affect the truth value of sentences that interest us. As such, we ignore the rest. Strictly speaking, every row of a truth table gives a partial truth value assignment.
It is important to note that the truth value assignment, \(a\), is not part of the language \(SL\). Rather, it is part of the mathematical machinery that we are using to describe \(SL\). It encodes which atomic sentences are true and which are false. We now define the truth function, v, using the same recursive structure that we used to define a wff of \(SL\).
1. If \(\mathcal{A}\) is a sentence letter, then \(v\)(\(\mathcal{A}\)) = \(a\)(\(\mathcal{A}\)).
2. If \(\mathcal{A}\) is ¬\(\mathcal{B}\) for some sentence \(\mathcal{A}\), then
\( v ( \mathcal { A } ) = \left\{ \begin{array} { l l } { 1 } & { \text { if } v ( \mathcal { B } ) = 0 } \\ { 0 } & { \text { otherwise } } \end{array} \right .\)
3. If \(\mathcal{A}\) is (\(\mathcal{B}\) & \(\mathcal{C}\) ) for some sentences \(\mathcal{B}\), \(\mathcal{C}\), then
\( v ( \mathcal { A } ) = \left\{ \begin{array} { l l } { 1 } & { \text { if } v ( \mathcal { B } ) = 1 \text { and } v ( C ) = 1 } \\ { 0 } & { \text { otherwise } } \end{array} \right .\)
It might seem as if this definition is circular, because it uses the word ‘and’ in trying to define ‘and.’ Notice, however, that this is not a definition of the English word ‘and’; it is a definition of truth for sentences of \(SL\) containing the logical symbol ‘&.’ We define truth for object language sentences containing the symbol ‘&’ using the metalanguage word ‘and.’ There is nothing circular about that.
4. If \(\mathcal{A}\) is (\(\mathcal{B}\)∨\(\mathcal{C}\)) for some sentences \(\mathcal{B}\),\(\mathcal{C}\), then
\( v ( \mathcal { A } ) = \left\{ \begin{array} { l l } { 0 } & { \text { if } v ( \mathcal { B } ) = 0 \text { and } v ( \mathcal { C } ) = 0 } \\ { 1 } & { \text { otherwise } } \end{array} \right .\)
5. If \(\mathcal{A}\) is (\(\mathcal{B}\) →\(\mathcal{C}\)) for some sentences \(\mathcal{B}\),\(\mathcal{C}\), then
\( v ( \mathcal { A } ) = \left\{ \begin{array} { l l } { 0 } & { \text { if } v ( \mathcal { B } ) = 1 \text { and } v ( C ) = 0 } \\ { 1 } & { \text { otherwise } } \end{array} \right .\)
6. If \(\mathcal{A}\) is (\(\mathcal{B}\)↔\(\mathcal{C}\)) for some sentences \(\mathcal{B}\),\(\mathcal{C}\), then
\( v ( \mathcal { A } ) = \left\{ \begin{array} { l l } { 1 } & { \text { if } v ( \mathcal { B } ) = v ( C ) } \\ { 0 } & { \text { otherwise } } \end{array} \right .\)
Since the definition of \(v\) has the same structure as the definition of a wff, we know that \(v\) assigns a value to every wff of \(SL\). Since the sentences of \(SL\) and the wffs of \(SL\) are the same, this means that \(v\) returns the truth value of every sentence of \(SL\).
Truth in \(SL\) is always truth relative to some truth value assignment, because the definition of truth for \(SL\) does not say whether a given sentence is true or false. Rather, it says how the truth of that sentence relates to a truth value assignment.
Other concepts in \(SL\)
Working with \(SL\) so far, we have done without a precise definition of ‘tautology’, ‘contradiction’, and so on. Truth tables provided a way to check i f a sentence was a tautology in \(SL\), but they did not define what it means to be a tautology in \(SL\). We will give definitions of these concepts for \(SL\) in terms of entailment.
The relation of semantic entailment, ‘\(\mathcal{A}\) entails \(\mathcal{B}\)’, means that there is no truth value assignment for which \(\mathcal{A}\) is true and \(\mathcal{B}\) is false. Put differently, it means that \(\mathcal{B}\) is true for any and all truth value assignments for which \(\mathcal{A}\) is true.
We abbreviate this with a symbol called the double turnstile : \(\mathcal{A}\) |= \(\mathcal{B}\) means ‘\(\mathcal{A}\) semantically entails \(\mathcal{B}\).’
We can talk about entailment between more than two sentences:
{\(\mathcal{A}\) 1 ,\(\mathcal{A}\) 2 ,\(\mathcal{A}\) 3 ,···}|= \(\mathcal{B}\)
means that there is no truth value assignment for which all of the sentences in the set {\(\mathcal{A}\) 1 ,\(\mathcal{A}\) 2 ,\(\mathcal{A}\) 3 ,···} are true and \(\mathcal{B}\) is false.
We can also use the symbol with just one sentence: |= \(\mathcal{C}\) means that \(\mathcal{C}\) is true for all truth value assignments. This is equivalent to saying that the sentence is entailed by anything.
The double turnstile symbol allows us to give concise definitions for various concepts of \(SL\):
A tautology in \(SL\) is a sentence \(\mathcal{A}\) such that |= \(\mathcal{A}\).
A contradiction in \(SL\) is a sentence \(\mathcal{A}\) such that |= ¬\(\mathcal{A}\).
A sentence is contingent in \(SL\) if and only if it is neither a tautology nor a contradiction.
An argument “ \(\mathcal{P}\) 1 ,\(\mathcal{P}\) 2 ,···, .˙. \(\mathcal{C}\) ” is valid in \(SL\) if and only if {\(\mathcal{P}\) 1 ,\(\mathcal{P}\) 2 ,···}|= \(\mathcal{C}\). Two sentences \(\mathcal{A}\) and \(\mathcal{B}\) are logically equivalent in \(SL\) if and only if both \(\mathcal{A}\) |= \(\mathcal{B}\) and \(\mathcal{B}\) |= \(\mathcal{A}\).
Logical consistency is somewhat harder to define in terms of semantic entailment. Instead, we will define it in this way:
The set {\(\mathcal{A}\) 1 ,\(\mathcal{A}\) 2 ,\(\mathcal{A}\) 3 ,···} is consistent in \(SL\) if and only if there is at least one truth value assignment for which all of the sentences are true. The set is inconsistent in \(SL\) if and if only there is no such assignment.
