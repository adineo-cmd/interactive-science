# Source pack — subjects/finance/foundational/compound-interest
Lesson title: Compound Interest and the Time Value of Money
Level: foundational
Match confidence: 1.87

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.87 — ContemporaryMathematics-WEB § 6.4 Compound Interest

Figure 6.6 The impact of compound interest (credit: "English Money" by Images Money/Flickr, CC BY 2.0)
Learning Objectives
After completing this section, you should be able to:
1.
Compute compound interest.
2.
Determine the difference in interest between simple and compound calculations.
3.
Understand and compute future value.
4.
Compute present value.
5.
Compute and interpret effective annual yield.
For a very long time in certain parts of the world, interest was not charged due to religious dictates. Once this restriction
was relaxed, loans that earned interest became possible. Initially, such loans had short terms, so only simple interest was
applied to the loan. However, when loans began to stretch out for years, it was natural to add the interest at the end of
each year, and add the interest to the principal of the loan. After another year, the interest was calculated on the initial
principal plus the interest from year 1, or, the interest earned interest. Each year, more interest was added to the money
owed, and that interest continued to earn interest.
Since the amount in the account grows each year, more money earns interest, increasing the account faster. This growth
follows a geometric series (Geometric Sequences). It is this feature that gives compound interest its power. This module
covers the mathematics of compound interest.
Understand and Compute Compound Interest
As we saw in Simple Interest, an account that pays simple interest only pays based on the original principal and the term
of the loan. Accounts offering compound interest pay interest at regular intervals. After each interval, the interest is
added to the original principal. Later, interest is calculated on the original principal plus the interest that has been added
previously.
After each period, the interest on the account is computed, then added to the account. Then, after the next period, when
interest is computed, it is computed based on the original principal AND the interest that was added in the previous
periods.
6.4 • Compound Interest
579

The following example illustrates how compounded interest works.
EXAMPLE 6.39
Interest Compounded Annually
Abena invests $1,000 in a CD (certificate of deposit) earning 4% compounded annually. How much will Abena’s CD be
worth after 3 years?
Solution
Since the interest is compounded annually, the interest will be computed at the end of each year and added to the CD’s
value. The interest at the end of the following year will be based on the value found form the previous year.
Step 1: After the first year, the interest in Abena’s CD is computed using the interest formula
. The principal
is
= 1,000, the rate, as a decimal, is 0.04, and the time is one year, so
= 1. Using that, the interest earned in the first
year is
, so the interest earned in the first year was $40.00. This is added to the
value of the CD, making the CD worth
.
Step 2: At the end of the second year, interest is again computed, but is computed based on the CD’s new value, $1,040.
Using this new value and the interest formula ( and
are still 0.04 and 1, respectively), we see that the CD earned
, or $41.60. This is added to the value of the CD, making the CD now worth
.
Step 3: At the end of the third year, interest is again computed, but is computed based on Abena’s CD’s new value,
$1,081.60. Using this value and the interest formula ( and
are still 0.04 and 1, respectively), we see that the CD earned
, or $43.26 (remember to round down). This is added to the value of the
CD, making the CD now worth
.
After 3 years, Abena’s CD is worth $1,124.86.
YOUR TURN 6.39
1. Oksana deposits $5,000 in a CD that earns 3% compounded annually. How much is the CD worth after 4 years?
Determine the Difference in Interest Between Simple and Compound Calculations
It is natural to ask, does compound interest make much of a difference? To find out, we revisit Abena’s CD.
EXAMPLE 6.40
Comparing Simple to Compound Interest on a 3-Year CD
Abena invested $1,000 in a CD that earned 4% compounded annually, and the CD was worth $1,124.86 after 3 years. Had
Abena invested in a CD with simple interest, how much would the CD have been worth after 3 years? How much more
did Abena earn using compound interest?
Solution
Had Abena invested $1,000 in a 4% simple interest CD for 3 years, her CD would have been worth
, or $1,120.00. With interest compounded annually, Abena’s CD was
worth $1,124.86. The difference between compound and simple interest is
. So
compound interest earned Abena $4.86 more than the simple interest did.
YOUR TURN 6.40
1. Oksana deposits $5,000 in a CD that earned 3% compounded annually and was worth $5,627.54 after 4 years.
Had Oksana invested in a CD with simple interest, how much would the CD have been worth after 4 years? How
much more did Oksana earn using compound interest?
580
6 • Money Management
Access for free at openstax.org

VIDEO
Compound Interest (https://openstax.org/r/compound_interest_beginners)
Understand and Compute Future Value
Imagine investing for 30 years and compounding the interest every month. Using the method above, there would be 360
periods to calculate interest for. This is not a reasonable approach. Fortunately, there is a formula for finding the future
value of an investment that earns compound interest.
FORMULA
The future value of an investment,
, when the principal
is invested at an annual interest rate of
(in decimal form),
compounded
times per year, for
years, is found using the formula
. This is also referred to as the
future value of the investment.
Note, sometimes the formula is presented with the total number of periods,
, and the interest rate per period, . In
that case the formula becomes
.
EXAMPLE 6.41
Computing Future Value for Compound Interest
In the following, compute the future value of the investment with the given conditions.
1.
Principal is $5,000, annual interest rate is 3.8%, compounded monthly, for 5 years.
2.
Principal is $18,500, annual interest rate is 6.25%, compounded quarterly, for 17 years.
Solution
1.
The principal is
= $5,000, interest rate, in decimal form,
= 0.038, compounded monthly so
= 12, and for
= 5
years. Substituting these values into the formula, we find
The future value of the investment is $6,044.43.
2.
The principal is
= $18,500, interest rate, in decimal form,
= 0.0625, compounded quarterly so
= 4, and for
= 17
years. Substituting these values into the formula, we
The future value of the investment is $53,093.54.
YOUR TURN 6.41
In the following, compute the future value of the investment with the given conditions.
1. Principal is $7,600, annual interest rate is 4.1%, compounded monthly, for 10 years.
6.4 • Compound Interest
581

2. Principal is $13,250, annual interest rate is 2.79%, compounded quarterly, for 25 years.
EXAMPLE 6.42
Interest Compounded Quarterly
Cody invests $7,500 in an account that earns 4.5% interest compounded quarterly (4 times per year). Determine the
value of Cody’s investment after 10 years.
Solution
Cody’s initial investment is $7,500, so
= $7,500. The annual interest rate is 4.5%, which is 0.045 in decimal form.
Compounding quarterly means there are four periods in a year, so
= 4. He invests the money for 10 years. Substituting
those values into the formula, we calculate
After 10 years, Cody’s initial investment of $7,500 is worth $11,732.82.
YOUR TURN 6.42
1. Maggie invests $3,000 in an account that earns 5.1% interest compounded monthly. How much is the account
worth after 13 years?
EXAMPLE 6.43
Interest Compounded Daily
Kathy invests $10,000 in an account that yields 5.6% compounded daily. How much money will be in her account after 20
years?
Solution
Kathy’s initial investment is $10,000, so
= $10,000. The annual interest rate is 5.6%, which is 0.056 in decimal form.
Compounding daily means there are 364 periods in a year, so
= 365. She invests the money for 20 years, so
= 20.
Substituting those values into the formula, we calculate
After 20 years, Kathy’s initial investment of $10,000 is worth $30,645.90.
YOUR TURN 6.43
1. Jacob invests $3,000 in a CD that yields 3.4% compounded daily for 5 years. How much is his CD worth after 5
years?
582
6 • Money Management
Access for free at openstax.org

VIDEO
Compare Simple Interest to Interest Compounded Annually (https://openstax.org/r/
compare_simple_compound_interest1)
Compare Simple Interest and Compound Interest for Different Number of Periods Per Year
(https://openstax.org/r/compare_simple_compound_interest2)
WORK IT OUT
To truly grasp how compound interest works over a long period of time, create a table comparing simple interest to
compound interest, with different numbers of periods per year, for many years would be useful. In this situation, the
principal is $10,000, and the annual interest rate is 6%.
1.
Create a table with five columns. Label the first column YEARS, the second column SIMPLE INTEREST, the third
column COMPOUND ANNUALLY, the fourth column COMPOUND MONTHLY and the last column COMPOUND
DAILY, as shown below.
YEARS
SIMPLE INTEREST
COMPOUND ANNUALLY
COMPOUND MONTHLY
COMPOUND DAILY
2.
In the years column, enter 1, 2, 3, 5, 10, 20, and 30 for the rows.
3.
Calculate the account value for each column and each year.
4.
Compare the results from each of the values you find. How do the number of periods per year (compoundings
per year) impact the account value? How does the number of years impact the account value?
5.
Redo the chart, with an interest rate you choose and a principal you choose. Are the patterns identified earlier
still present?
Understand and Compute Present Value
When investing, there is often a goal to reach, such as “after 20 years, I’d like the account to be worth $100,000.” The
question to be answered in this case is “How much money must be invested now to reach the goal?” As with simple
interest, this is referred to as the present value.
FORMULA
The money invested in an account bearing an annual interest rate of
(in decimal form), compounded
times per
year for
years, is called the present value,
, of the account (or of the money) and found using the formula
, where
is the value of the account at the investment’s end. Always round this value up to the
nearest penny.
EXAMPLE 6.44
Computing Present Value
Find the present value of the accounts under the following conditions.
1.
= $250,000, invested at 6.75 interest, compounded monthly, for 30 years.
2.
= $500,000, invested at 7.1% interest, compounded quarterly, for 40 years.
Solution
1.
To reach a final account value of
= $250,000, invested at 6.75% interest, in decimal form
= 0.0675 (decimal
form!), compounded monthly, so
= 12, for 30 years, substitute those values into the formula for present value.
6.4 • Compound Interest
583

Calculating, we find the present value of the $250,000.
In order for this account to reach $250,000 after 30 years, $33,186.23 needs to be invested.
2.
To reach a final account value of
= $500,000, invested at 7.1% interest, in decimal form
= 0.071, compounded
quarterly, so
= 4, for 40 years, substitute those values into the formula for present value. Calculating, we find the
present value of the $500,000.
In order for this account to reach $500,000 after 40 years, $29,949.69 needs to be invested.
YOUR TURN 6.44
Find the present value of the accounts under the following conditions.
1.
= $1,000,000, invested at 5.75% interest, compounded monthly, for 40 years.
2.
= $175,000, invested at 3.8% interest, compounded quarterly, for 20 years.
EXAMPLE 6.45
Investment Goal with Compound Interest
Pilar plans early for retirement, believing she will need $1,500,000 to live comfortably after the age of 67. How much will
she need to deposit at age 23 in an account bearing 6.35% annual interest compounded monthly?
Solution
Knowing how much to deposit at age 23 to reach a certain value later is a present value question. The target value for
Pilar is $1,500,000. The interest rate is 6.35%, which in decimal form is 0.0635. Compounded monthly means
= 12. She’s
23 and will leave the money in the account until the age of 67, which is 44 years, making
= 44. Using this information
and substituting in the formula for present value, we calculate
584
6 • Money Management
Access for free at openstax.org

Pilar will need to invest $92,442,51 in this account to have $1,500,000 at age 67.
YOUR TURN 6.45
1. Hajun turns 30 this year and begins to think about retirement. He calculates that he will need $1,200,000 to retire
comfortably. He finds a fund to invest in that yields 7.23% and is compounded monthly. How much will Hajun
need to invest in the fund when he turns 30 so that he can reach his goal when he retires at age 65?
Compute and Interpret Effective Annual Yield
As we’ve seen, quarterly compounding pays interest 4 times a year or every 3 months; monthly compounding pays 12
times a year; daily compounding pays interest every day, and so on. Effective annual yield allows direct comparisons
between simple interest and compound interest by converting compound interest to its equivalent simple interest rate.
We can even directly compare different compound interest situations. This gives information that can be used to identify
the best investment from a yield perspective.
Using a formula, we can interpret compound interest as simple interest. The effective annual yield formula stems from
the compound interest formula and is based on an investment of $1 for 1 year.
Effective annual yield is
where
= effective annual yield,
= interest rate in decimal form, and
=
number of times the interest is compounded in a year.
is interpreted as the equivalent annual simple interest rate.
EXAMPLE 6.46
Determine and Interpret Effective Annual Yield for 6% Compounded Quarterly
Suppose you have an investment paying a rate of 6% compounded quarterly. Determine and interpret that effective
annual yield of the investment.
Solution
Here,
= 4 (quarterly) and
= 0.06 (decimal form). Substituting into the formula we find that the effective annual yield is
The

## Match 1.63 — PrinciplesofFinance-WEB § 1.8 Concepts of Time and Value

Why It Matters
Finance is essential to the management of a business or organization. Without good financial protocol,
safeguards, and tools, running a successful business is more difficult. In 1978, Bacon Signs was a family-
owned, regional Midwestern sign company engaged in the manufacture, sale, installation, and maintenance of
commercial signage. The company was about to transition from the second to third generation of family
ownership. Bacon Signs, established in 1901, had weathered the Great Depression, World War II, the Vietnam
War, and the oil embargo and was working its way through historically high rates of inflation and interest
rates. The family business had successfully struggled through the ebb and flow of the regional and national
economy by providing quality products and service to its regional clients.
In the early 1980s, the company’s fortunes changed permanently for the better. The owner recognized that
the custom signs built by his firm were superior in quality to the signs it installed for national franchises. The
owner worked with the company’s banker and vice president of finance and operations to develop a
production, sales, and financing plan that could be offered to the larger national sign companies. The larger
companies agreed to subcontract manufacturing of midsize orders to Bacon Signs. The firm then made a
commitment to build and deliver these signs on time and under budget. As Bacon Signs’ reputation for quality
grew, so did demand for its products. The original financing plan anticipated this potential growth and was
Introduction to Finance
1
1 • Why It Matters
7

designed to meet anticipated capital requirements so that the firm could expand how and when it needed to.
Bacon Signs’ ability to manufacture and deliver a high-quality product at a good price was the true value of the
firm. However, without the planning and ability to raise capital facilitated by the financing plan, the firm would
not have been able to act on its strengths at the critical moment. Financing was the key to expansion and
financial stability for the firm.1
In this book, we demonstrate that business finance is about developing and understanding the tools that help
people make consistently good and repeatable decisions.
1.1
What Is Finance?
Learning Outcomes
By the end of this section, you will be able to:
•
Describe the main areas in finance.
•
Explain the importance of studying finance.
•
Discuss the concepts of risk and return.
Definition of Finance
Finance is the study of the management, movement, and raising of money. The word finance can be used as a
verb, such as when the First National Bank agrees to finance your home mortgage loan. It can also be used as
a noun referring to an entire industry. At its essence, the study of finance is about understanding the uses and
sources of cash, as well as the concept of risk-reward trade-off. Finance is also a tool that can help us be better
decision makers.
Basic Areas in Finance
Finance is divided into three primary areas in the domestic market: business finance, investments, and
financial markets and institutions (see Figure 1.2). We look at each here in turn.
Figure 1.2 The Three Basic Areas of Study in Finance
Business Finance
Business finance looks at how managers can apply financial principles to maximize the value of a firm in a
risky environment. Businesses have many stakeholders. In the case of corporations, the shareholders own the
company, and they hire managers to run the company with the intent to maximize shareholder wealth.
Consequently, all management decisions should run through the filter of these questions: “How does this
decision impact the wealth of the shareholders?” and “Is this the best decision to be made for shareholders?”
In business finance, managers focus on three broad areas (see Figure 1.3).
1 Dun & Bradstreet. “Bacon Signs, Inc.” D&B Business Directory. https://www.dnb.com/business-directory/company-
profiles.bacon_signs_inc.90df737e33956dd7c76717a20e9d56ad.html#financials-anchor
8
1 • Introduction to Finance
Access for free at openstax.org

1.
Working capital management (WCM) is the study and management of short-term assets and liabilities.
The chief financial officer (CFO) and the finance team are responsible for establishing company policy for
how to manage WCM. The finance department determines credit policy, establishes minimum criteria for
the extension of credit to clients, terms of lending, when to extend, and when to take advantage of short-
term creditor financing. The accounting department basically implements the finance department’s
policies. In many firms, the accounting and finance functions operate in the same department; in others,
they are separate.
2.
Capital budgeting is the process of determining which long-term or fixed assets to acquire in an effort to
maximize shareholder value. Capital budgeting decisions add the greatest value to a firm. As such, capital
budgeting is thought to be one of the most important financial functions within a firm. The capital
budgeting process consists of estimating the value of potential investments by forecasting the size,
timing, and risk of cash flows associated with the investments. The finance department develops and
compiles cash flow estimates with input from the marketing, operations, accounting, human resources,
and economics departments to develop a portfolio of investment projects that collectively maximize the
value of the firm.
3.
Capital structure is the process by which managers focus more specifically on long-term debt and
increasing shareholder wealth. Capital structure questions require financial managers to work with
economists, lenders, underwriters, investment bankers, and other sources of external financial
information and financial capital. When Bacon Signs developed its financial plan, the executives included
each of these three aspects of business finance into the plan.
Figure 1.3 How Corporate Finance Decision-Making Activities Relate to the Balance Sheet
Figure 1.3 demonstrates how the three essential decision-making activities of the financial manager are
related to a balance sheet. Working capital management focuses on short-term assets and liabilities, capital
budgeting is focused on long-term assets, and capital structure is concerned with the mix of long-term debt
and equity financing.
Investments
Investments are products and processes used to create and grow wealth. Most commonly, investment topics
include the discussion and application of the different types of financial instruments, delivery vehicles,
regulation, and risk-and-return opportunities. Topics also include a discussion of stocks, bonds, and derivative
securities such as futures and options. A broad coverage of investment instruments would include mutual
funds, exchange-traded funds (ETFs), and investment vehicles such as 401k plans or individual retirement
accounts (IRAs). In addition, real assets such as gold, real estate, and commodities are also common
discussion topics and investment opportunities.
Investments is the most interesting area of finance for many students. Television programs such as Billions
and movies such as Wall Street make investing appear glamorous, dangerous, shady, or intoxicating,
1.1 • What Is Finance?
9

depending on the situation and the attitude of the viewer. In these programs, the players and their decisions
can lead to tremendous wealth or tremendous losses. In reality, most of us will manage our portfolios well shy
of the extremes portrayed by the entertainment industry. However, we will need to make personal and
business investment decisions, and many students reading this material will work in the investment industry
as personal investment advisers, investment analysts, or portfolio managers.
Financial Markets and Institutions
Financial markets and institutions are the firms and regulatory agencies that oversee our financial system.
There is overlap in this area with investments and business finance, as the firms involved are profit seeking
and need good financial management. They also are commonly the firms that facilitate investment practices in
our economy. A financial institution regulated by a federal or state agency will likely handle an individual
investment such as the purchase of a stock or mutual fund.
Much of the US regulatory structure for financial markets and institutions developed in the 1930s as a
response to the stock market crash of 1929 and the subsequent Great Depression. In the United States, the
desire for safety and protection of investors and the financial industry led to the development of many of our
primary regulatory agencies and financial regulations. The Securities and Exchange Commission (SEC) was
formed with the passage of the Securities Act of 1933 and Securities Exchange Act of 1934. Major bank
regulation in the form of the Glass-Steagall Act (1933) and the Banking Act of 1935 gave rise to government-
backed bank deposit insurance and a more robust Federal Reserve Bank.
These regulatory acts separated investment banking from commercial banking. Investment banks and
investment companies continued to underwrite and facilitate new bond and equity issues, provide financial
advice, and manage mutual funds. Commercial banks and other depository institutions such as savings and
loans and credit unions left the equity markets and reduced their loan portfolios to commercial and personal
lending but could purchase insurance for their primary sources of funds, checking, and savings deposits.
Today, the finance industry barely resembles the structure your parents and grandparents grew up and/or
worked in. Forty years of deregulation have reshaped the industry. Investment and commercial bank
operations and firms have merged. The separation of activities between investment and commercial banking
has narrowed or been eliminated. Competition from financial firms abroad has increased, and the US financial
system, firms, and regulators have learned to adapt, change, and innovate to continue to compete, grow, and
prosper.
The Financial Industry Regulatory Authority (FINRA) formed in 2007 to consolidate and replace existing
regulatory bodies. FINRA is an independent, nongovernmental organization that writes and enforces the rules
governing registered brokers and broker-dealer firms in the United States. The Securities Investor
Protection Corporation (SIPC) is a nonprofit corporation created by an act of Congress to protect the clients
of brokerage firms that declare bankruptcy. SIPC is an insurance that provides brokerage customers up to
$500,000 coverage for cash and securities held by the firm.
The regulation of the financial industry kicked into high gear in the 1930s and for those times and conditions
was a necessary development of our financial industry and regulatory oversight. Deregulation of the finance
industry beginning in the 1970s was a necessary pendulum swing in the opposite direction toward more
market-based and less restrictive regulation and oversight. The Great Recession of 2007–2009 resulted in the
reregulation of several aspects of the financial industry. Some would argue that the regulatory pendulum has
swung too far toward deregulation and that the time for more or smarter regulation has returned.
10
1 • Introduction to Finance
Access for free at openstax.org

CONCEPTS IN PRACTICE
The Great Recession
The Great Recession of 2007–2009 exposed many of the weaknesses of our financial system. The ease with
which banks could lower credit standards to allow ill-prepared consumers to purchase real estate and the
resulting speed with which the world economy plunged into recession is astounding.
Regulation to address the economic crisis was also swift. Fortunately, Ben Bernanke, chairman of the
Federal Reserve at the time, had throughout his career conducted extensive research into the causes of and
potential resolution of the Great Depression of the 1930s.2 He was uniquely qualified to lead the economic
response to the crisis. Some resulting laws moved to address the immediate needs and others to correct
the underlying causes of the recession.
One immediate fix was the Troubled Asset Relief Program (TARP). TARP authorized the Treasury to buy
illiquid assets in order to save the financial institutions so important to lubricating our economy. Politically
this was a tough decision, as it appeared that the government bailed out greedy bankers. In the end,
however, the program was justified because the economy immediately began a slow but steady recovery,
most financial institutions did not fail, and the Treasury recouped all of its investment used in the bailout.
However, individual homeowners suffered greatly.
The Dodd-Frank Act of 2008 attempted to address many of the underlying causes of the Great Recession by
reorganizing and toughening the regulatory framework, including tighter oversight of critically important
financial institutions. Dodd-Frank also created the Consumer Financial Protection Bureau (CFPB) to protect
consumers from harm caused by unscrupulous banking activities. Today, the hope is that financial
institutions will be stopped short of the gross negligence evident prior to 2007 and consumers won’t be left
out in the cold due to actions beyond their control.
Sources: History Channel. “Here’s What Caused the Great Recession.” YouTube. May 15, 2018.
https://www.youtube.com/watch?v=yM0uonkloXY. Accessed April 18, 2021; Randall D. Guynn, Davis Polk,
and Wardwell LLP, “The Financial Panic of 2008 and Financial Regulatory Reform.” Harvard Law School
Forum on Corporate Governance. November 20, 2010. https://corpgov.law.harvard.edu/2010/11/20/the-
financial-panic-of-2008-and-financial-regulatory-reform/. Accessed April 18, 2021; Sean Ross. “What Major
Laws Were Created for the Financial Sector Following the 2008 Crisis?” Investopedia. Updated March 31,
2020. https://www.investopedia.com/ask/answers/063015/what-are-major-laws-acts-re

## Match 1.45 — ManagerialAccounting-OP_x3x7rSO § 11.5 Compare and Contrast Non-Time Value-Based Methods and Time Value-Based Methods in Capital

Investment Decisions
Why It Matters
Jerry Price owns Milling Manufacturing, a production facility geared toward entrepreneurial product
development. Initially, Jerry purchased several milling machines, but after seven years, the machines have
become obsolete due to technological advances. Jerry must purchase new machines to continue business
growth, and there are several options available. How does he choose the best machines for his business? What
factors must he consider before purchase?
Jerry must consider several important factors—both financial and non-financial—as he makes this decision.
First, he needs to consider the commitment of his initial capital investment. He also needs to compare
differences between options such as warranties, the production capacities of different machines, and
maintenance and repair costs. Another factor is the useful life of the new equipment—in other words, both its
physical and the technological life. He will also consider how long it will take to recoup the cost of the
investment, the impact on cash flow, and how the passage of time affects the value of the asset to the
Figure 11.1 Milling Manufacturing. Long-term project investment requires careful capital budgeting analysis.
(credit: modification of “Parts for CNC Machine” by Andy Malmin/Flickr, CC BY 2.0)
11
Capital Budgeting Decisions

organization—it’s monetary value that considered depreciation to determine what the asset is actually worth
to the organization in terms of dollars (i.e., “what could we sell it for?”). Jerry will consider the value of the
dollar invested today in purchasing the machine as opposed to the value of the dollar in the future that might
be better spent on another project. This last factor is significant because the new equipment will probably
provide part of his down payment on future replacement equipment. There are also nonfinancial factors to
consider, such as changes to customer satisfaction and employee morale.
Jerry knows this equipment choice goes well beyond color or price preferences. The decision has a long-lasting
influence on company direction and opportunity, and he needs to utilize capital budgeting analysis to help him
make this decision.
11.1
Describe Capital Investment Decisions and How They Are Applied
Assume that you own a small printing store that provides custom printing applications for general business
use. Your printers are used daily, which is good for business but results in heavy wear on each printer. After
some time, and after a few too many repairs, you consider whether it is best to continue to use the printers
you have or to invest some of your money in a new set of printers. A capital investment decision like this one is
not an easy one to make, but it is a common occurrence faced by companies every day. Companies will use a
step-by-step process to determine their capital needs, assess their ability to invest in a capital project, and
decide which capital expenditures are the best use of their resources.
Fundamentals of Capital Investment Decisions
Capital investment (sometimes also referred to as capital budgeting) is a company’s contribution of funds
toward the acquisition of long-lived (long-term or capital) assets for further growth. Long-term assets can
include investments such as the purchase of new equipment, the replacement of old machinery, the expansion
of operations into new facilities, or even the expansion into new products or markets. These capital
expenditures are different from operating expenses. An operating expense is a regularly-occurring expense
used to maintain the current operations of the company, but a capital expenditure is one used to grow the
business and produce a future economic benefit.
Capital investment decisions occur on a frequent basis, and it is important for a company to determine its
project needs to establish a path for business development. This decision is not as obvious or as simple as it
may seem. There is a lot at stake with a large outlay of capital, and the long-term financial impact may be
unknown due to the capital outlay decreasing or increasing over time. To help reduce the risk involved in
capital investment, a process is required to thoughtfully select the best opportunity for the company.
The process for capital decision-making involves several steps:
1.
Determine capital needs for both new and existing projects.
2.
Identify and establish resource limitations.
3.
Establish baseline criteria for alternatives.
4.
Evaluate alternatives using screening and preference decisions.
5.
Make the decision.
The company must first determine its needs by deciding what capital improvements require immediate
attention. For example, the company may determine that certain machinery requires replacement before any
new buildings are acquired for expansion. Or, the company may determine that the new machinery and
building expansion both require immediate attention. This latter situation would require a company to
566
Chapter 11 Capital Budgeting Decisions
This OpenStax book is available for free at http://cnx.org/content/col25479/1.11

consider how to choose which investment to pursue first, or whether to pursue both capital investments
concurrently.
The second step, exploring resource limitations, evaluates the company’s ability to invest in capital
expenditures given the availability of funds and time. Sometimes a company may have enough resources to
cover capital investments in many projects. Many times, however, they only have enough resources to invest in
a limited number of opportunities. If this is the situation, the company must evaluate both the time and
money needed to acquire each asset. Time allocation considerations can include employee commitments and
project set-up requirements. Fund limitations may result from a lack of capital fundraising, tied-up capital in
non-liquid assets, or extensive up-front acquisition costs that extend beyond investment means (Table 11.1).
Once the ability to invest has been established, the company needs to establish baseline criteria for
alternatives.
Resource Limitations
Time Considerations
Money Considerations
•
Employee commitments
•
Project set-up
•
Time-frame necessary to secure financing
•
Lack of liquidity
•
Tied up in non-liquid assets
•
Up-front acquisition costs
Table 11.1 When resources are limited, capital budgeting procedures are needed.
Alternatives are the options available for investment. For example, if a company needs to purchase new
printing equipment, all possible printing equipment options are considered alternatives. Since there are so
many alternative possibilities, a company will need to establish baseline criteria for the investment. Baseline
criteria are measurement methods that can help differentiate among alternatives. Common measurement
methods include the payback method, accounting rate of return, net present value, or internal rate of return.
C O N C E P T S  I N  P R A C T I C E
Brexit
The decision to invest money in capital expenditures may not only be impacted by internal company
objectives, but also by external factors. In 2016, Great Britain voted to leave the European Union (EU)
(termed “Brexit”), which separates their trade interests and single-market economy from other
participating European nations. This has led to uncertainty for United Kingdom (UK) businesses.
Because of this instability, capital spending slowed or remained stagnant immediately following the
Brexit vote and has not yet recovered growth momentum.
[1] The largest decrease in capital spending has
occurred in the expansions of businesses into new markets. The UK is expected to separate from the EU
in 2019.
1
G. Jackson “UK Business Investment Stalls in Year since Brexit Vote.” The Financial Times. August 24, 2017. https://www.ft.com/content/
daff3ffe-88ac-11e7-8bb1-5ba57d47eff7
Chapter 11 Capital Budgeting Decisions
567

These methods have varying degrees of complexity and will be discussed in greater detail in Evaluate the
Payback and Accounting Rate of Return in Capital Investment Decisions and Explain the Time Value of Money
and Calculate Present and Future Values of Lump Sums and Annuities
To evaluate alternatives, businesses will use the measurement methods to compare outcomes. The outcomes
will not only be compared against other alternatives, but also against a predetermined rate of return on the
investment (or minimum expectation) established for each project consideration. The rate of return concept is
discussed in more detail in Balanced Scorecard and Other Performance Measures. A company may use
experience or industry standards to predetermine factors used to evaluate alternatives. Alternatives will first
be evaluated against the predetermined criteria for that investment opportunity, in a screening decision. The
screening decision allows companies to remove alternatives that would be less desirable to pursue given
their inability to meet basic standards. For example, if there were three different printing equipment options
and a minimum return had been established, any printers that did not meet that minimum return requirement
would be removed from consideration.
If one or more of the alternatives meets or exceeds the minimum expectations, a preference decision is
considered. A preference decision compares potential projects that meet screening decision criteria and will
rank the alternatives in order of importance, feasibility, or desirability to differentiate among alternatives.
Once the company determines the rank order, it is able to make a decision on the best avenue to pursue
(Figure 11.2). When making the final decision, all financial and non-financial factors are deliberated.
Figure 11.2
Select Between Alternatives. Screening and preference decisions can narrow alternatives in
making a selection. (attribution: Copyright Rice University, OpenStax, under CC BY-NC-SA 4.0 license)
E T H I C A L  C O N S I D E R AT I O N S
Volkswagen Diesel Emissions Scandal
Sometimes a company makes capital decisions due to outside pressures or unforeseen circumstances.
The New York Times reported in 2015 that the car company Volkswagen was “scarred by an emissions-
cheating scandal,” and “would need to cut its budget next year for new technology and research—a
reversal after years of increased spending aimed at becoming the world’s biggest carmaker.”
[2] This was
a huge setback for Volkswagen, not only because the company had budgeted and planned to become
the largest car company in the world, but also because the scandal damaged its reputation and set it
back financially.
568
Chapter 11 Capital Budgeting Decisions
This OpenStax book is available for free at http://cnx.org/content/col25479/1.11

Let’s broadly consider what the five-step process for capital decision-making looks like for Melanie’s Sewing
Studio. Melanie owns a sewing studio that produces fabric patterns for wholesale.
1.
Determine capital needs for both new and existing projects.
Upon review of her future needs, Melanie determines that her five-year-old commercial sewing machine
could be replaced. The old machine is still working, but production has slowed in recent months with an
increase in repair needs and replacement parts. Melanie expects a new sewing machine to make her
production process more efficient, which could also increase her current business volume. She decides to
explore the possibility of purchasing a new sewing machine.
2.
Identify and establish resource limitations.
Melanie must consider if she has enough time and money to invest in a new sewing machine. The Sewing
Studio has been in business for three years and has shown steady financial growth year over year.
Melanie expects to make enough profit to afford a capital investment of $50,000. If she does purchase a
new sewing machine, she will have to train her staff on how to use the machine and will have to cease
production while the new machine is installed. She anticipates a loss of $20,000 for training and
production time. The estimation of the $20,000 loss is based on the downtime in production for both labor
and product output.
3.
Establish baseline criteria for alternatives.
Melanie is considering two different sewing machines for purchase. Before she evaluates which option is
a better investment, she must establish minimum requirements for the investment. She determines that
the new machine must return her initial investment back to her in three years at a rate of 20%, and the
initial investment cost cannot exceed her future earnings. This established a baseline for what she
considers reasonable for this type of investment, and she will not consider any investment alternative that
does not meet these minimum criteria.
4.
Evaluate alternatives using screening and preference decisions.
Now that she has established minimum requirements for the new machine, she can evaluate each of
these machines to see if they meet or exceed her criteria. The first sewing machine costs $45,000. She is
expected to recoup her initial investment in two-and-a-half years. The return rate is 25%, and her future
earnings would exceed the initial cost of the machine.
The second machine will cost $55,000. She expects to recoup her initial investment in three years. The
return rate is $18%, and her future earnings would be less than the initial cost of the machine.
5.
Make the decision.
Volkswagen “set aside about 9 billion euros ($9.6 billion) to cover costs related to making the cars
compliant with pollution regulations;” however, the sums were “unlikely to cover the costs of potential
legal judgments or other fines.”
[3] All of the costs related to the company’s unethical actions needed to
be included in the capital budget, as company resources were limited. Volkswagen used capital
budgeting procedures to allocate funds for buying back the improperly manufactured cars and paying
any legal claims or penalties. Other companies might take other approaches, but an unethical action that
resul
