# Source pack — subjects/linguistics/intermediate/morphology
Lesson title: Morphology
Level: intermediate
Match confidence: 3.06

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.06 — LibreTexts: 9: Morphology
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://socialsci.libretexts.org/Bookshelves/Linguistics/Corpus_Linguistics%3A_A_Guide_to_the_Methodology_(Stefanowitsch)/09%3A_Morphology

9: Morphology
selected template will load here
This action is not available.
We saw in Chapter 8 that the wordform-centeredness of most corpora and corpus-access tools requires a certain degree of ingenuity when studying structures larger than the word. It does not pose particular problems for corpus-based morphology, which studies structures smaller than the word. Corpus morphology is mostly concerned with the distribution of affixes, and retrieving all occurrences of an affix plausibly starts with the retrieval of all strings potentially containing this affix. We could retrieve all occurrences of -ness , for example, with a query like \(\langle\text{[word=".+ness(es)?"%c]}\rangle\). The recall of this query will be close to 100 percent, as all words containing the suffix -ness end in the string ness, optionally followed by the string es in the case of plurals. Depending on the tokenization of the corpus, this query might miss cases where the word containing the suffix -ness is the first part of a hyphenated compound, such as usefulness-rating or consciousness-altering ; we could alter the query to something like \(\langle\text{[word=".+ness(es)?(--.+=)?"%c]}\rangle\) if we believe that including these cases in our sample is crucial. The precision of such a query will not usually be 100 percent, as it will also retrieve words that accidentally happen to end with the string specified in our query – in the case of -ness , these would be words like witness , governess or place names like Inverness . The degree of precision will depend on how unique the string in our query is for the affix in question; for -ness and -ity it is fairly high, as there are only a few words that share the same string accidentally (examples like those just mentioned for -ness and words like city and pity for -ity ), for a suffix like -ess (‘female animate entity’) it is quite low, as a query like \(\langle\text{[word=".+ess(es)?"%c]}\rangle\) will also retrieve all words with the suffixes -ness and -less , as well as many words whose stem ends in ess , like process , success , press , access , address , dress , guess and many more.
However, once we have extracted and – if necessary – manually cleaned up our data set, we are faced with a problem that does not present itself when studying lexis or grammar: the very fact that affixes do not occur independently but always as parts of words, some of which (like wordform-centeredness in the first sentence of this chapter) have been created productively on the fly for a specific purpose, while others (like ingenuity in the same sentence) are conventionalized lexical items that are listed in dictionaries, even though they are theoretically the9 Morphology result of attaching an affix to a known stem (like ingen- , also found in ingenious and, confusingly, its almost-antonym ingenuous ). We have to keep the difference between these two kinds of words in mind when constructing morphological research designs; since the two kinds are not always clearly distinguishable, this is more difficult than it sounds. Also, the fact that affixes always occur as parts of words has consequences for the way we can, and should, count them; in quantitative corpus-linguistics, this is a crucial point, so I will discuss it in quite some detail before we turn to our case studies.

## Match 3.03 — LibreTexts: 6.4: Derivational Morphology
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://socialsci.libretexts.org/Bookshelves/Linguistics/Essentials_of_Linguistics_1e_(Anderson)/06%3A_Combining_Words/6.04%3A_Derivational_Morphology

The other job that morphemes do is derivation, the process that creates new words. In English, one of the most common ways to derive a new word is by adding a derivational affix to a base. The newly-derived word can then serve as a base for another affix.
A YouTube element has been excluded from this version of the text. You can view it online here:
https://ecampusontario.pressbooks.pub/essentialsoflinguistics/?p=119
Video Script
The last unit talked about inflection, which is one of the jobs that morphology can do. The other big job that morphemes have is a
derivation
. The derivation is the process of creating a new word. The new, derived word is related to the original word, but it has some new component of meaning to it, and often it belongs to a new category.
One of the most common ways that English derives new words is by affixing a derivational morpheme to a
base
. For example, if we start with a verb that describes an action, like
teach
and we add the morpheme
–er
, we derive a morphologically complex noun,
teacher
, that refers to the person who does the action of teaching. That same
-er
morpheme does the same job in
singer
,
dancer
,
baker,
and
writer
.
|
Verb
|
Suffix
|
Noun
|
|
teach
|
-er
|
teacher
|
|
sing
|
-er
|
singer
|
|
dance
|
-er
|
dancer
|
|
bake
|
-er
|
baker
|
|
write
|
-er
|
writer
|
If we start with an adjective like
happy
and add the suffix
–ness,
we derive the noun that refers to the state of being that adjective,
happiness
.
|
Verb
|
Suffix
|
Noun
|
|
teach
|
-er
|
teacher
|
|
sing
|
-er
|
singer
|
|
dance
|
-er
|
dancer
|
|
bake
|
-er
|
baker
|
|
write
|
-er
|
writer
|
Adding the suffix
–ful
to a noun derives an adjective, like
hopeful
.
|
Noun
|
Suffix
|
Adjective
|
|
hope
|
-ful
|
hopeful
|
|
joy
|
-ful
|
joyful
|
|
care
|
-ful
|
careful
|
|
dread
|
-ful
|
dreadful
|
Adding the suffix
–ize
to an adjective like
final
derives a verb like
finalize
.
|
Adjective
|
Suffix
|
Verb
|
|
final
|
-ize
|
finalize
|
|
modern
|
-ize
|
modernize
|
|
social
|
-ize
|
socialize
|
|
public
|
-ize
|
publicize
|
Notice that each of the morphologically complex derived words is related in meaning to the base, but it has a new meaning of its own. English also derives new words by prefixing, and while adding a derivational prefix does lead to a new word with a new meaning, it often doesn’t lead to a category change.
|
Prefix
|
Verb
|
Verb
|
|
re-
|
write
|
rewrite
|
|
re-
|
read
|
reread
|
|
re-
|
examine
|
reexamine
|
|
re-
|
assess
|
reassess
|
Each instance of derivation creates a new word, and that new word could then serve as the
base
for another instance of derivation, so it’s possible to have words that are quite complex morphologically.
For example, say you have a machine that you use to compute things; you might call it a
computer
(
compute
+
-er
).Then if people start using that machine to perform a task, you could say that they’re going to
computerize
(
computer
+
-ize
) that task. Perhaps the
computerization
(
computerize
+
-ation
) of that task makes it much more efficient. You can see how many words have many steps in their derivations.
An interesting thing to note is that once a base has been inflected, then it can no longer go through any derivations. We can inflect the word
computer
so that we can talk about plural computers, but then we can’t do derivation on the plural form (
*computers-ize
). Likewise, we can add tense inflection to the verb
computerize
and talk about how yesterday we
computerized
something, but then we can’t take that inflected form and use it as the base for a new derivation (
*computerized-ation
). Inflection always occurs as the last step in word formation.

## Match 3.03 — LibreTexts: 6.3: Inflectional Morphology
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://socialsci.libretexts.org/Bookshelves/Linguistics/Essentials_of_Linguistics_1e_(Anderson)/06%3A_Combining_Words/6.03%3A_Inflectional_Morphology

Bound morphemes can do one of two different jobs. Inflectional morphology conveys grammatical information, such as number, tense, agreement or case. English has relatively few inflectional morphemes, but many other languages have much richer systems of inflectional morphology.
A YouTube element has been excluded from this version of the text. You can view it online here:
https://ecampusontario.pressbooks.pub/essentialsoflinguistics/?p=117
Check Yourself
1. What type of grammatical information does the inflectional affix in the word
speeches
communicate?
-
Number.
-
Tense.
-
Subject agreement.
-
Case.
2. What type of grammatical information does the inflectional affix in the word
climbed
communicate?
-
Number.
-
Tense.
-
Subject agreement.
-
Case.
3. What type of grammatical information does the inflectional difference between
he
and
him
indicate?
-
Number.
-
Tense.
-
Subject agreement.
-
Case.
Answers
Video Script
We saw in our last units that words can be made up of morphemes, which are the smallest linguistic unit that links form with meaning. Morphemes can do a couple of quite different jobs in a word.
Inflectional
morphemes are morphemes that add grammatical information to a word. When a word is inflected, it still retains its core meaning, and its category stays the same. We’ve actually already talked about several different inflectional morphemes:
The
number
on a noun is inflectional morphology. For most English nouns the inflectional morpheme for the
plural
is an
–s
or
–es
(e.g.,
books, cars, dishes
) that gets added to the singular form of the noun, but there are also a few words with irregular plural morphemes. Some languages also have a special morpheme for the
dual
number, to indicate exactly two of something. Here’s an example from Manam, one of the many languages spoken in Papua New Guinea. You can see that there’s a morpheme on the noun woman that indicates dual, for exactly two women, and a different morpheme for plural, that is, more than two women.
|
Manam (Papua New Guinea)
|
|
|
|
/áine ŋara/
|
that woman
|
singular
|
|
/áine ŋara
diaru
/
|
those two women
|
dual
|
|
/áine ŋara
di
/
|
those women
|
plural
|
The
tense
on a verb is also inflectional morphology. For many English verbs, the past tense is spelled with an
–ed
, (
walked, cooked, climbed
) but there are also many English verbs where the tense inflection is indicated with a change in the vowel of the verb (
sang, wrote, ate
). English does not have a bound morpheme that indicates future tense, but many languages do.
Another kind of inflectional morphology is
agreement
on verbs. If you’ve learned French or Spanish or Italian, you know that the suffix at the end of a verb changes depending on who the subject of the verb is. That’s agreement inflection. Here are some examples from French. You can see that there’s a different morpheme on the end of each verb depending on who’s doing the singing.
|
French
|
|
1st
|
je chante
|
I sing
|
|
2d
|
tu chantes
|
you sing
|
|
3d
|
elle chante
|
she sings
|
|
1st
|
nous chantons
|
we sing
|
|
2d
|
vous chantez
|
you (pl.) sing
|
|
3d
|
elles chantent
|
they sing
|
And in some languages, the morphology on a noun changes depending on the noun’s role in a sentence; this is called
case
inflection. Take a look at these two sentences in German: The first one,
Der Junge sieht Sofia
, means that, “The boy sees Sofia”. Look at the form of the phrase,
the boy, “der Junge”
. Now, look at this other sentence,
Sofia sieht den Jungen
, which means that “Sofia sees the boy”. In the first sentence, the boy is doing the seeing, but in the second, the boy is getting seen, and the word for boy,
Junge
has a different morpheme on it to indicate its different role in the sentence. That’s an example of
case
morphology, which is another kind of inflection.
|
German
|
|
Der Junge sieht Sofia.
|
The boy sees Sofia.
|
|
Sofia sieht den Jungen
|
Sofia sees the boy.
|
