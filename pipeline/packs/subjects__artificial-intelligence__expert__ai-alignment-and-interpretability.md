# Source pack — subjects/artificial-intelligence/expert/ai-alignment-and-interpretability
Lesson title: AI Alignment & Interpretability
Level: expert
Match confidence: 1.53

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.53 — LibreTexts: 3.10: Alignment, Justification, and Indentation
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://biz.libretexts.org/Courses/Lumen_Learning/Book%3A_Computer_Applications_for_Managers_(Lumen)/03%3A_Microsoft_Word_Basic_Skills/3.10%3A_Alignment_Justification_and_Indentation

3.10: Alignment, Justification, and Indentation
Learning Objectives
- Change alignment of text.
Alignment
To align or justify text, move your cursor into the paragraph you want to change, then click the left-align, right-align, centered, or justify buttons.
Alignment is how text flows in relation to the rest of the page (or column, table cell, text box, etc.). There are four main alignments: left, right, center, and justified.
- Left-aligned text is text that is aligned with a left edge. You can also left-align your text with the shortcut Ctrl+L ( Cmnd+L) .
- Right-aligned text is text that is aligned with a right edge. You can also right-align your text with the shortcut Ctrl+R ( Cmnd+R ).
- Centered text is text that is centered between two edges. You can also center-align your text with the shortcut Ctrl+E ( Cmnd+E ).
|
Left-aligned
|
Centered |
Right-aligned
|
|---|---|---|
Justification controls the spacing between words. A justified text increases the space between words to fill the entire line so that it is aligned with both the left and right edges. You can also center-align your text with the shortcut Ctrl+J ( Cmnd+J ).
|
|
|
You can also change the alignment and justification settings in the paragraph dialog box.
Practice Question
Paragraph Dialog Box: Justification and Alignment
Open the paragraph dialog box by clicking the small arrow icon in the bottom-right corner of the Paragraph group.
The dropdown menu to change the alignment is near the top of the dialog box.
Indentation
In many documents, indenting is a good way to distinguish the start of a new paragraph, especially when there is no paragraph spacing.
To indent, hit the Tab key once on your keyboard at the start of a paragraph.
For more control over indentation settings, use the paragraph dialog box.
Paragraph Dialog Box: Indentation
Open the paragraph dialog box by clicking the small arrow icon in the bottom-right corner of the Paragraph group.
The indentation section is toward the middle of the dialog box.
The Left and Right settings indent the entire paragraph to the left and right.
| Indentation Comparison |
|---|
|
|
The Special dropdown menu allows you to choose to indent the first line of the paragraph or to create a hanging indent. Upon choosing First or Hanging, another field will appear to let you choose how big the first line or hanging indent will be.
Practice Question
Contributors and Attributions
- Align Left. Authored by : Arthur Shlain. Located at : https://thenounproject.com/term/align-left/60845/ . License : CC BY: Attribution
- Align Center. Authored by : Arthur Shlain. Located at : https://thenounproject.com/term/align-center/60844/ . License : CC BY: Attribution
- Align Right. Authored by : Arthur Shlain. Located at : https://thenounproject.com/term/align-right/60847/ . License : CC BY: Attribution
- Justify Text. Authored by : Arthur Shlain. Located at : https://thenounproject.com/term/justify-text/60846/ . License : CC BY: Attribution
- Alignment and Line Spacing. Authored by : Lumen Learning. License : CC BY: Attribution

## Match 1.53 — LibreTexts: 7.2: Brute Force Alignment
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/3.0/ · https://math.libretexts.org/Bookshelves/Applied_Mathematics/Mathematical_Biology_(Chasnov)/07%3A_Sequence_Alignment/7.02%3A_Brute_Force_Alignment

7.2: Brute Force Alignment
One (bad) approach to sequence alignment is to align the two sequences in all possible ways, score the alignments with an assumed scoring system, and determine the highest scoring alignment. The problem with this brute-force approach is that the number of possible alignments grows exponentially with sequence length; and for sequences of reasonable length, the computation is already impossible. For example, the number of ways to align two sequences of 50 characters each-a rather small alignment problem-is about \(1.5 \times 10^{37}\) , already an astonishingly large number. It is informative to count the number of possible alignments between two sequences since a similar algorithm is used for sequence alignment.
Suppose we want to align two sequences. Gaps in either sequence are allowed but a gap can not be aligned with a gap. By way of illustration, we demonstrate the three ways that the first character of the upper-case alphabet and the lower-case alphabet may align:
and the five ways in which the first two characters of the upper-case alphabet can align with the first character of the lower-case alphabet:
A recursion relation for the total number of possible alignments of a sequence of \(i\) characters with a sequence of \(j\) characters may be derived by considering the alignment of the last character. There are three possibilities that we illustrate by assuming the \(i\) th character is ’ \(\mathrm{F}\) ’ and the \(j\) th character is ’ \(\mathrm{d}\) ’:
(1) \(i-1\) characters of the first sequence are already aligned with \(j-1\) characters of the second sequence, and the \(i\) th character of the first sequence aligns exactly with the \(j\) th character of the second sequence:
(2) \(i-1\) characters of the first sequence are aligned with \(j\) characters of the second sequence and the \(i\) th character of the first sequence aligns with a gap in the second sequence
(3) \(i\) characters of the first sequence are aligned with \(j-1\) characters of the second sequence and a gap in the first sequence aligns with the \(j\) th character of the second sequence iil
\(\cdots d\)
If \(C(i, j)\) is the number of ways to align an \(i\) character sequence with a \(j\) character sequence, then, from our counting,
\[C(i, j)=C(i-1, j-1)+C(i-1, j)+C(i, j-1) \nonumber \]
This recursion relation requires boundary conditions. Because there is only one way to align an \(i>0\) character sequence against a zero character sequence (i.e., \(i\) characters against \(i\) gaps) the boundary conditions are \(C(0, j)=C(i, 0)=1\) for all \(i, j>0\) We may also add the additional boundary condition \(C(0,0)=1\) , obtained from the known result \(C(1,1)=3\) .
Using the recursion relation (7.1), we can construct the following dynamic matrix to count the number of ways to align the two five-character sequences \(a_{1} a_{2} a_{3} a_{4} a_{5}\) and \(b_{1} b_{2} b_{3} b_{4} b_{5}\) :
\(\begin{array}{ccccccc} & - & b_{1} & b_{2} & b_{3} & b_{4} & b_{5} \\[4pt] - & 1 & 1 & 1 & 1 & 1 & 1 \\[4pt] a_{1} & 1 & 3 & 5 & 7 & 9 & 11 \\[4pt] a_{2} & 1 & 5 & 13 & 25 & 41 & 61 \\[4pt] a_{3} & 1 & 7 & 25 & 63 & 129 & 231 \\[4pt] a_{4} & 1 & 9 & 41 & 129 & 321 & 681 \\[4pt] a_{5} & 1 & 11 & 61 & 231 & 681 & 1683\end{array}\)
The size of this dynamic matrix is \(6 \times 6\) , and for convenience we label the rows and columns starting from zero (i.e., row 0 , row \(1, \ldots\) , row 5 ). This matrix was constructed by first writing \(-a_{1} a_{2} a_{3} a_{4} a_{5}\) to the left of the matrix and \(-b_{1} b_{2} b_{3} b_{4} b_{5}\) above the matrix, then filling in ones across the zeroth row and down the zeroth column to satisfy the boundary conditions, and finally applying the recursion relation directly by going across the first row from left-to-right, the second row from left-to-right, etc. To demonstrate the filling in of the matrix, we have across the first row: \(1+1+1=3,1+1+3=5,1+1+5=7\) , etc, and across the second row: \(1+3+1=5,3+5+5=13,5+7+13=25\) , etc. Finally, the last element entered gives the number of ways to align two five character sequences: 1683, already a remarkably large number.
It is possible to solve analytically the recursion relation (7.1) for \(C(i, j)\) using generating functions. Although the solution method is interesting-and in fact was shown to me by a student-the final analytical result is messy and we omit it here. In general, computation of \(C(i, j)\) is best done numerically by constructing the dynamic matrix.

## Match 1.52 — LibreTexts: 9.2: Reading- Brand Positioning and Alignment
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://biz.libretexts.org/Bookshelves/Marketing/Principles_of_Marketing_(Lumen)/09%3A_Branding/9.02%3A_Reading-_Brand_Positioning_and_Alignment

9.2: Reading- Brand Positioning and Alignment
Building Strong Brands: Consistency Matters
In order to make an impression in a market, brands need to stand for something. Inconsistent brands and messages fail to make a lasting impression because it is difficult for customers to trust them or register what these brands represent. On the other hand, when a brand is both consistent and relevant to customers, it builds recognition, credibility, trust, and ultimately loyalty. And loyalty, as you’ve learned, translates into sales.
Consistency is also important when it comes to differentiating a product. Brands simplify decisions for customers. When a brand consistently communicates how and why it is distinct from competitors, it reminds customers why they prefer this brand over others–and why they may be willing to pay more for it.
Finally, consistency is an imperative in the globalized economy in which virtually every business operates today. Brand-related messages and communications circulate around the world at astonishing speed: Just ask any company that has seen a major story break on social media. While it does make sense to target specific messages to different global markets according to consumer needs, those messages should all be aligned to a consistent, centralized brand identity. A brand manager–the marketer responsible for directing and managing brand strategy–must think of herself as an ambassador, advocating and communicating on behalf of that common brand in the various markets where the brand is represented.
Brand Positioning: A Tool for Achieving Consistency
The Brand Platform
As you learned in the previous module, product positioning is an important strategic tool that helps organizations focus their messages and marketing activities around a consistent, differentiating message aimed at a target segment. Brand positioning works on the same principle. The goal of brand positioning—like the positioning for any product or service—is to explain why that brand is different and better for its target customers, and why the differences matter.
At the same time, brands need a consistent, universal identity that is the same regardless of whom you communicate with. For this reason, brand positioning starts with defining precisely what the brand stands for. This is called the brand platform . The brand platform may include a variety of descriptive elements to paint a clear picture of what a brand represents. Some brand platform models are very complex, with ten or more inputs. Others are simpler and more streamlined.
The brand platform begins with the organization’s mission statement, since the ultimate purpose of a brand is to help the organization achieve its mission. It also incorporates the value proposition for whatever the brand promotes. Remember that brands may operate at the company level (needing a company-level value proposition) or at the product or service level (needing an offering-specific value proposition). In addition to the mission statement and value proposition, the basic elements of any brand platform are a brand promise, core values, a brand voice or personality, and a brand-positioning statement. These are discussed below.
The Brand Promise
The brand promise is, in effect, the singular experience your brand promises to provide to your customers. It expresses what you want them to feel when they interact with your products and services. Year in, year out, the brand promise is what your customers count on and, ideally, it’s the reason they keep coming back to you. The brand promise should be unique and linked to your competitive advantage: something other brands do not and cannot deliver in the way you do. It describes the most salient benefits your brand provides, including benefits that create an emotional connection with customers.
The brand promise is important not only for customers, but also for employees and other internal audiences. It sets the tone for how the company operates and for the experience the brand provides to customers across all segments and all points of contact.
Finally, the brand promise should be simple and easily understood, so it’s easy to communicate and reinforce. Some marketers equate the marketing tagline, or advertising slogan, with the brand promise. While there are some exceptions, most brand-promise statements do not use the same marketing language that’s used in ad slogans. For instance, Nike’s “Just Do It” slogan works very well as part of an ad campaign, but it’s not very illuminating as a brand promise. Similarly, fast-food chain Taco Bell never intended its catchy “Make a Run for the Border” tagline to be interpreted as a brand promise. Also, taglines, which are part of marketing communications, may need to be updated more frequently than the brand promise. In contrast, the brand promise should be the global, enduring commitment you stand for over time.
The following are examples of effective brand promises:
- The Coca-Cola Company: to refresh the world in mind, body, and spirit, and inspire moments of optimism [1]
-
TOMS Shoes:
Through your purchases, TOMS helps provide shoes, sight, water, safe birth and
bullying prevention services to people in need. Learn more about what we give. [2] - Target: expect more, pay less [3]
Core (Brand) Values
Core values are guiding principles for how an organization does business. These values express a perspective on the world, and they govern both internal conduct and external behavior. While the brand promise explains what consistent experience a brand will deliver, the core values describe how the company will behave as it delivers that experience.
An excellent example of core values infusing a strong brand comes from online retailer Zappos. The company’s ten “Family Core Values,” listed below, are written for current and prospective employees and describe Zappos’ operating principles. At the same time, these values also set the tone for what customers can expect from Zappos and how they interact with the Zappos brand.
Zappos Family Core Values [4]
- Deliver WOW through Service
- Embrace and Drive Change
- Create Fun and a Little Weirdness
- Be Adventurous, Creative, and Open-Minded
- Pursue Growth and Learning
- Build Open and Honest Relationships with Communication
- Build a Positive Team and Family Spirit
- Do More with Less
- Be Passionate and Determined
- Be Humble
Even if you are unfamiliar with Zappos, these core values give you a strong sense of what the company must be like, either to work for or to do business with.
Not every organization defines ten core values; in fact, most keep the number to six or fewer in order to retain a better focus on defining and expressing the organization’s identity. What does matter is to find ways for the brand to deliver these values, so that they become real for employees and customers. For example, Zappos empowers individual employees to make judgment calls about how they deliver WOW-worthy customer service; every decision doesn’t have to go through manager approval. By encouraging personal initiative in this way, the company also invites creativity, learning, and passion from its employees.
Brand Voice and Personality
Just like people, strong brands have an outlook, tone, and personality that help reinforce the consistency of what and how brand gets communicated to customers, employees, and other stakeholders. The brand voice and personality are rooted in the brand promise and values, but they help flesh out the brand’s distinctive image and presence. A useful template for defining brand voice and personality is the “is/is never” template. Using this template, marketers define the voice and personality attributes of the brand, almost as if it were a person. For example:
- Brand X is strong, authentic, independent, resourceful, and classic.
- Brand X is never frivolous, trendy, or fake.
A well-defined brand voice is a window into the personality of the brand. Together, the brand voice and personality set the linguistic tone for all brand-related communications and promotions. They also guide the choice of visual design, logo, and the look and feel of the brand, ensuring that the overall visual representation is a good match for what the organization wants the brand to convey.
As a short exercise, take a moment and see if you can construct “is/is never” statements for a couple well-known brands. What are the brand voice and personality of, say, GAP clothing compared with another well-known clothing brand, such as Guess?
Brand-Positioning Statement
Brand positioning follows the same process for product and service positioning outlined in the positioning module: understanding market and competitive dynamics, confirming competitive advantages, defining the market niche and positioning strategy, and delivering on that strategy. Fortunately, the brand promise should provide strong guidance around the competitive advantages and market niche that should be represented in the positioning statement.
Brand managers may develop brand-positioning statements according to the same formula used for product positioning (discussed in the positioning module):
To [ target audience ], Brand X is the only [ category or frame of reference ] that [ points of differentiation/benefits delivered ] because [ reasons to believe ]. [5]
Note that the target audience for the brand-positioning statement should include all the audiences for the brand, not just the specific, narrowly defined target segment you’d expect in a product- or service-positioning statement. The brand needs to be relevant to every conceivable audience you are trying to reach (which may include multiple target segments). For that reason, the brand-positioning statement needs to be written in such a way that it has a broad enough appeal to speak to that “larger” audience.
As with a product- or service-positioning statement, the brand-positioning statement becomes a guiding document for decisions about the key messages the organization should communicate about the brand, as well as other marketing activities.
Aligning to Deliver the Brand
It takes strong focus and hard work to get through the brand-positioning process and build a brand platform. But once this work is done, brand managers and marketers have a basis for deciding what they want to achieve with the brand. Next, the fun of brand building can begin.
Because brand encompasses much more than just marketing, it is important for the entire organization to understand the brand and each person’s role in delivering the brand promise to customers. Every employee in every department, from Accounting and Finance to Product Development and Technology (and everyone in between) plays a part. Organizations with great brands look for ways to educate all internal stakeholders about what the brand means and how it connects with their way of doing business. Company leaders provide incentives for employees to innovate and excel at delivering the brand effectively.
Of course, organizations also communicate about their brands to external audiences—to current and future customers, investors, thought leaders, and influencers, for instance. Brand is embedded in every strategy, tactic, and activity associated with a marketing mix for a given target segment. The brand platform is like a filter that lets through the kinds of communication that an organization needs to reach its audience, but it keeps out the distracting noise and chatter that might confuse or alienate that audience. The brand platform gives a brand coherence and helps the company stay on track.
Figure 1, below, illustrates the tools and artifacts marketers use to deliver strong alignment between brand, messaging, and other marketing activities. The brand strategy and positioning are very consistent from year to year, and they rely on the tools and artifacts we’ve discussed in this reading. M arket-specific positioning and messaging are designed to reinforce the brand while promoting the 
