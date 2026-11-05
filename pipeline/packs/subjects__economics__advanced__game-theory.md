# Source pack — subjects/economics/advanced/game-theory
Lesson title: Game Theory
Level: advanced
Match confidence: 3.04

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 3.04 — LibreTexts: 11: Game Theory
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://math.libretexts.org/Bookshelves/Applied_Mathematics/Applied_Finite_Mathematics_(Sekhon_and_Bloom)/11%3A_Game_Theory

11: Game Theory
In this chapter, you will learn to:
- Solve strictly determined games.
- Solve games involving mixed strategies.
Game theory is one of the newest branches of mathematics. It first came to light when a brilliant mathematician named Dr. John von Neumann co-authored with Dr. Morgenstern a book titled Theory of Games and Economic Behavior . Since then it has played an important role in decision making in business, economics, social sciences and other fields.
-
- 11.1: Strictly Determined Games
- In this chapter, we will study games that involve only two players. In these games, since a win for one person is a loss for the other, we refer to them as two-person zero-sum games. Although the games we will study here are fairly simple, they will provide us with an understanding of how games work and how they are applied in practical situations.
-
- 11.2: Non-Strictly Determined Games
- In this section, we study games that have no saddle points. This means that these games do not possess a pure strategy. We call these games non-strictly determined games. If the game is played only once, it will make no difference what move is made. However, if the game is played repeatedly, a mixed strategy consisting of alternating random moves can be worked out.
Thumbnail: From an evolutionary game theory the four alternative social forms of strategic interaction. (Public Domain; Pearson Scott Foresman via Wikipedia)

## Match 3.03 — LibreTexts: 1: What is Game Theory?
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://math.libretexts.org/Bookshelves/Applied_Mathematics/Introduction_to_Game_Theory%3A_A_Discovery_Approach_(Nordstrom)/01%3A_What_is_Game_Theory

1: What is Game Theory?
“Game Theory is not about 'playing games.' It is about conflict resolution among rational but distrustful beings.” Poundstone, Prisoner's Dilemma , p. \(39\).
Although we will play many games throughout this book, our goal is to understand how rational, distrustful players would play the game. These games are meant to serve as models for situations of conflict. We will explore how to “solve” games under certain assumptions about our players. As with any mathematical model, we will need to make assumptions about how our players will behave, what information they have, and the constraints of the game. For example, we will assume that our players will use all information available to them, and that players will follow the rules of the game.
Games can provide hours of recreational enjoyment, and are worth studying for this alone. However, even simple games can be used to model political, social, and economic interactions. Understanding some foundations of game theory can help us interpret, predict, and respond in competitive situations.
-
- 1.1: Players and Strategies
- In this book, most of the games will be played by two players. Each player must decide how he or she will play the game. In order to study games mathematically, we need to make some assumptions about how the players should play the game. This allows us to be able to better predict what our players should do. The example given in this section illustrates the characteristics we will assume about our players.

## Match 2.04 — LibreTexts: 13.8: The Red and Black Game
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://stats.libretexts.org/Bookshelves/Probability_Theory/Probability_Mathematical_Statistics_and_Stochastic_Processes_(Siegrist)/13%3A_Games_of_Chance/13.08%3A_The_Red_and_Black_Game

13.8: The Red and Black Game
In this section and the following three sections, we will study gambling strategies for one of the simplest gambling models. Yet in spite of the simplicity of the model, the mathematical analysis leads to some beautiful and sometimes surprising results that have importance and application well beyond gambling. Our exposition is based primarily on the classic book by Dubbins and Savage, Inequalities for Stochastic Processes (How to Gamble if You Must) by Lester E Dubbins and Leonard J Savage (1965).
Basic Theory
Assumptions
Here is the basic situation: The gambler starts with an initial sum of money. She bets on independent, probabilistically identical games, each with two outcomes—win or lose. If she wins a game, she receives the amount of the bet on that game; if she loses a game, she must pay the amount of the bet. Thus, the gambler plays at even stakes . This particular situation (IID games and even stakes) is known as red and black , and is named for the color bets in the casino game roulette. Other examples are the pass and don't pass bets in craps.
Let us try to formulate the gambling experiment mathematically. First, let \(I_n\) denote the outcome of the \(n\)th game for \(n \in \N_+\), where 1 denotes a win and 0 denotes a loss. These are independent indicator random variables with the same distribution: \[ \P\left(I_j = 1\right) = p_j, \quad \P\left(I_j = 0\right) = q = 1 - p_j \] where \(p \in [0, 1]\) is the probability of winning an individual game. Thus, \(\bs{I} = (I_1, I_2, \ldots)\) is a sequence of Bernoulli trials.
If \(p = 0\), then the gambler always loses and if \(p = 1\) then the gambler always wins. These trivial cases are not interesting, so we will usually assume that \(0 \lt p \lt 1\). In real gambling houses, of course, \(p \lt \frac{1}{2}\) (that is, the games are unfair to the player), so we will be particularly interested in this case.
Random Processes
The gambler's fortune over time is the basic random process of interest: Let \(X_0\) denote the gambler's initial fortune and \(X_i\) the gambler's fortune after \(i\) games. The gambler's strategy consists of the decisions of how much to bet on the various games and when to quit. Let \(Y_i\) denote the amount of the \(i\)th bet, and let \(N\) denote the number of games played by the gambler. If we want to, we can always assume that the games go on forever, but with the assumption that the gambler bets 0 on all games after \(N\). With this understanding, the game outcome, fortune, and bet processes are defined for all times \(i \in \N_+\).
The fortune process is related to the wager process as follows: \[ X_j = X_{j-1} + \left(2 I_j - 1\right) Y_j, \quad j \in \N_+ \]
Strategies
The gambler's strategy can be very complicated. For example, the random variable \(Y_n\), the gambler's bet on game \(n\), or the event \(N = n - 1\), her decision to stop after \(n - 1\) games, could be based on the entire past history of the game, up to time \(n\). Technically, this history forms a \( \sigma \)-algebra: \[ \mathscr{H}_n = \sigma\left\{X_0, Y_1, I_1, Y_2, I_2, \ldots, Y_{n-1}, I_{n-1}\right\} \] Moreover, they could have additional sources of randomness. For example a gambler playing roulette could partly base her bets on the roll of a lucky die that she keeps in her pocket. However, the gambler cannot see into the future (unfortunately from her point of view), so we can at least assume that \(Y_n\) and \(\{N = n - 1\}\) are independent of \(\left(I_1, I_2, \ldots, I_{n-1}\right)\).
At least in terms of expected value, any gambling strategy is futile if the games are unfair.
\(\E\left(X_i\right) = \E\left(X_{i-1}\right) + (2 p - 1) \E\left(Y_i\right)\) for \(i \in \N_+\)
Proof
This follows from the previous result and the assumption of no prescience.
Suppose that the gambler has a positive probability of making a real bet on game \(i\), so that \(\E(Y_i) \gt 0\). Then
- \(\E(X_i) \lt \E(X_{i-1})\) if \(p \lt \frac{1}{2}\)
- \(\E(X_i) \gt \E(X_{i-1})\) if \(p \gt \frac{1}{2}\)
- \(\E(X_i) = \E(X_{i-1})\) if \(p = \frac{1}{2}\)
Proof
This follows from the previous result on the expected value of \( X_i \).
Thus on any game in which the gambler makes a positive bet, her expected fortune strictly decreases if the games are unfair, remains the same if the games are fair, and strictly increases if the games are favorable.
As we noted earlier, a general strategy can depend on the past history and can be randomized. However, since the underlying Bernoulli games are independent, one might guess that these complicated strategies are no better than simple strategies in which the amount of the bet and the decision to stop are based only on the gambler's current fortune. These simple strategies do indeed play a fundamental role and are referred to as stationary, deterministic strategies . Such a strategy can be described by a betting function \(S\) from the space of fortunes to the space of allowable bets, so that \(S(x)\) is the amount that the gambler bets when her current fortune is \(x\).
The Stopping Rule
From now on, we will assume that the gambler's stopping rule is a very simple and standard one: she will bet on the games until she either loses her entire fortune and is ruined or reaches a fixed target fortune \(a\): \[ N = \min\{n \in \N: X_n = 0 \text{ or } X_n = a\} \] Thus, any strategy (betting function) \(S\) must satisfy \(s(x) \le \min\{x, a - x\}\) for \(0 \le x \le a\): the gambler cannot bet what she does not have, and will not bet more than is necessary to reach the target \(a\).
If we want to, we can think of the difference between the target fortune and the initial fortune as the entire fortune of the house. With this interpretation, the player and the house play symmetric roles, but with complementary win probabilities: play continues until either the player is ruined or the house is ruined. Our main interest is in the final fortune \(X_N\) of the gambler. Note that this random variable takes just two values; 0 and \(a\).
The mean and variance of the final fortune are given by
- \(\E(X_N) = a \P(X_N = a)\)
- \(\var(X_N) = a^2 \P(X_N = a) \left[1 - \P(X_N = a)\right]\)
Presumably, the gambler would like to maximize the probability of reaching the target fortune. Is it better to bet small amounts or large amounts, or does it not matter? How does the optimal strategy, if there is one, depend on the initial fortune, the target fortune, and the game win probability?
We are also interested in \(\E(N)\), the expected number of games played. Perhaps a secondary goal of the gambler is to maximize the expected number of games that she gets to play. Are the two goals compatible or incompatible? That is, can the gambler maximize both her probability of reaching the target and the expected number of games played, or does maximizing one quantity necessarily mean minimizing the other?
In the next two sections, we will analyze and compare two strategies that are in a sense opposites:
- Timid Play: On each game, until she stops, the gambler makes a small constant bet, say $1.
- Bold Play: On each game, until she stops, the gambler bets either her entire fortune or the amount needed to reach the target fortune, whichever is smaller.
In the final section of the chapter, we will return to the question of optimal strategies.
