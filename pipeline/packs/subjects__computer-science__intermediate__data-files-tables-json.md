# Source pack — subjects/computer-science/intermediate/data-files-tables-json
Lesson title: Data: Files, Tables & JSON
Level: intermediate
Match confidence: 1.81

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.81 — LibreTexts: 17.9: Reading Unusual Data Files
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://stats.libretexts.org/Courses/Cerritos_College/Introduction_to_Statistics_with_R/17%3A_Preparing_Datasets_and_Other_Pragmatic_Matters/17.09%3A_Reading_Unusual_Data_Files

17.9: Reading Unusual Data Files
-
- Last updated
- Save as PDF
In this section I’m going to switch topics (again!) and turn to the question of how you can load data from a range of different sources. Throughout this book I’ve assumed that your data are stored as an
.Rdata
file or as a “properly” formatted CSV file. And if so, then the basic tools that I discussed in Section 4.5 should be quite sufficient. However, in real life that’s not a terribly plausible assumption to make, so I’d better talk about some of the other possibilities that you might run into.
Loading data from text files
The first thing I should point out is that if your data are saved as a text file but aren’t
quite
in the proper CSV format, then there’s still a pretty good chance that the
read.csv()
function (or equivalently,
read.table()
) will be able to open it. You just need to specify a few more of the optional arguments to the function. If you type
?read.csv
you’ll see that the
read.csv()
function actually has several arguments that you can specify. Obviously you need to specify the
file
that you want it to load, but the others all have sensible default values. Nevertheless, you will sometimes need to change them. The ones that I’ve often found myself needing to change are:
-
header
. A lot of the time when you’re storing data as a CSV file, the first row actually contains the column names and not data. If that’s not true, you need to setheader = FALSE
. -
sep
. As the name “comma separated value” indicates, the values in a row of a CSV file are usually separated by commas. This isn’t universal, however. In Europe the decimal point is typically written as,
instead of.
and as a consequence it would be somewhat awkward to use,
as the separator. Therefore it is not unusual to use;
over there. At other times, I’ve seen a TAB character used. To handle these cases, we’d need to setsep = ";"
orsep = "\t"
. -
quote
. It’s conventional in CSV files to include a quoting character for textual data. As you can see by looking at thebooksales.csv}
file, this is usually a double quote character,"
. But sometimes there is no quoting character at all, or you might see a single quote mark'
used instead. In those cases you’d need to specifyquote = ""
orquote = "'"
. -
skip
. It’s actually very common to receive CSV files in which the first few rows have nothing to do with the actual data. Instead, they provide a human readable summary of where the data came from, or maybe they include some technical info that doesn’t relate to the data. To tell R to ignore the first (say) three lines, you’d need to setskip = 3
-
na.strings
. Often you’ll get given data with missing values. For one reason or another, some entries in the table are missing. The data file needs to include a “special” string to indicate that the entry is missing. By default R assumes that this string isNA
, since that’s what it would do, but there’s no universal agreement on what to use in this situation. If the file uses???
instead, then you’ll need to setna.strings = "???"
.
It’s kind of nice to be able to have all these options that you can tinker with. For instance, have a look at the data file shown pictured in Figure 7.1. This file contains almost the same data as the last file (except it doesn’t have a header), and it uses a bunch of wacky features that you don’t normally see in CSV files. In fact, it just so happens that I’m going to have to change all five of those arguments listed above in order to load this file. Here’s how I would do it:
data <- read.csv( file = "./rbook-master/data/booksales2.csv", # specify the name of the file
header = FALSE, # variable names in the file?
skip = 8, # ignore the first 8 lines
quote = "*", # what indicates text data?
sep = "\t", # what separates different entries?
na.strings = "NFI" ) # what is the code for missing data?
If I now have a look at the data I’ve loaded, I see that this is what I’ve got:
head( data )
## V1 V2 V3 V4
## 1 January 31 0 high
## 2 February 28 100 high
## 3 March 31 200 low
## 4 April 30 50 out
## 5 May 31 NA out
## 6 June 30 0 high
Because I told R to expect
*
to be used as the quoting character instead of
"
; to look for tabs (which we write like this:
\t
) instead of commas, and to skip the first 8 lines of the file, it’s basically loaded the right data. However, since
booksales2.csv
doesn’t contain the column names, R has made them up. Showing the kind of imagination I expect from insentient software, R decided to call them
V1
,
V2
,
V3
and
V4
. Finally, because I told it that the file uses “NFI” to denote missing data, R correctly figures out that the sales data for May are actually missing.
In real life you’ll rarely see data this stupidly formatted. 125
Loading data from SPSS (and other statistics packages)
The commands listed above are the main ones we’ll need for data files in this book. But in real life we have many more possibilities. For example, you might want to read data files in from other statistics programs. Since SPSS is probably the most widely used statistics package in psychology, it’s worth briefly showing how to open SPSS data files (file extension
.sav
). It’s surprisingly easy. The extract below should illustrate how to do so:
library( foreign ) # load the package
X <- read.spss( "./rbook-master/data/datafile.sav" ) # create a list containing the data
X <- as.data.frame( X ) # convert to data frame
If you wanted to import from an SPSS file to a data frame directly, instead of importing a list and then converting the list to a data frame, you can do that too:
X <- read.spss( file = "datafile.sav", to.data.frame = TRUE )
And that’s pretty much it, at least as far as SPSS goes. As far as other statistical software goes, the
foreign
package provides a wealth of possibilities. To open SAS files, check out the
read.ssd()
and
read.xport()
functions. To open data from Minitab, the
read.mtp()
function is what you’re looking for. For Stata, the
read.dta()
function is what you want. For Systat, the
read.systat()
function is what you’re after.
Loading Excel files
A different problem is posed by Excel files. Despite years of yelling at people for sending data to me encoded in a proprietary data format, I get sent a lot of Excel files. In general R does a pretty good job of opening them, but it’s bit finicky because Microsoft don’t seem to be terribly fond of people using non-Microsoft products, and go to some lengths to make it tricky. If you get an Excel file, my suggestion would be to open it up in Excel (or better yet, OpenOffice, since that’s free software) and then save the spreadsheet as a CSV file. Once you’ve got the data in that format, you can open it using
read.csv()
. However, if for some reason you’re desperate to open the
.xls
or
.xlsx
file directly, then you can use the
read.xls()
function in the
gdata
package:
library( gdata ) # load the package
X <- read.xls( "datafile.xlsx" ) # create a data frame
This usually works. And if it doesn’t, you’re probably justified in “suggesting” to the person that sent you the file that they should send you a nice clean CSV file instead.
Loading Matlab (& Octave) files
A lot of scientific labs use Matlab as their default platform for scientific computing; or Octave as a free alternative. Opening Matlab data files (file extension
.mat
) slightly more complicated, and if it wasn’t for the fact that Matlab is so very widespread and is an extremely good platform, I wouldn’t mention it. However, since Matlab is so widely used, I think it’s worth discussing briefly how to get Matlab and R to play nicely together. The way to do this is to install the
R.matlab
package (don’t forget to install the dependencies too). Once you’ve installed and loaded the package, you have access to the
readMat()
function. As any Matlab user will know, the
.mat
files that Matlab produces are workspace files, very much like the
.Rdata
files that R produces. So you can’t import a
.mat
file as a data frame. However, you can import it as a list. So, when we do this:
library( R.matlab ) # load the package
data <- readMat( "matlabfile.mat" ) # read the data file to a list
The
data
object that gets created will be a list, containing one variable for every variable stored in the Matlab file. It’s fairly straightforward, though there are some subtleties that I’m ignoring. In particular, note that if you don’t have the
Rcompression
package, you can’t open Matlab files above the version 6 format. So, if like me you’ve got a recent version of Matlab, and don’t have the
Rcompression
package, you’ll need to save your files using the
-v6
flag otherwise R can’t open them.
Oh, and Octave users? The
foreign
package contains a
read.octave()
command. Just this once, the world makes life easier for you folks than it does for all those cashed-up swanky Matlab bastards.
Saving other kinds of data
Given that I talked extensively about how to load data from non-R files, it might be worth briefly mentioning that R is also pretty good at writing data into other file formats besides it’s own native ones. I won’t discuss them in this book, but the
write.csv()
function can write CSV files, and the
write.foreign()
function (in the
foreign
package) can write SPSS, Stata and SAS files. There are also a lot of low level commands that you can use to write very specific information to a file, so if you really, really needed to you could create your own
write.obscurefiletype()
function, but that’s also a long way beyond the scope of this book. For now, all that I want you to recognise is that this capability is there if you need it.
done yet?
Of course not.  This listing doesn’t even come close to exhausting the possibilities. Databases are supported by the
RODBC
,
DBI
, and
RMySQL
packages among others. You can open webpages using the
RCurl
package. Reading and writing JSON objects is supported through the
rjson
package. And so on. In a sense, the right question is not so much “can R do this?” so much as “whereabouts in the wilds of CRAN
is
the damn package that does it?”

## Match 1.56 — LibreTexts: 11.2.4: How to Incorporate Data Files in Your Code Blocks- For Python
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://chem.libretexts.org/Courses/Remixer_University/Construction_Guide_for_LibreTexts_2e/11%3A_Interactive_Elements/11.02%3A_Jupyter_Notebooks_(Executable_Programming_Code_and_Figures)/11.2.04%3A_How_to_Incorporate_Data_Files_in_Your_Code_Blocks-_For_Python

11.2.4: How to Incorporate Data Files in Your Code Blocks- For Python
There are a number of ways data files and can be incorporated into code blocks. However, ensure that you have already followed the steps in the introduction to the CKEditor Binder Plugin Tutorial here .
Method 1: Using wget
The first method that can be used to get a data file in your code block is with wget. Follow the example below and replace the example URL with the one attained in the previous step.
Remember to press the "Run" button prior to pressing "OK". Printing both the code and output without, will the below result, to avoid this simply check "Insert Code Only" after pressing "Run".
Once the data file has been loaded, use Python code that you may normally use to read out the lines in the data file. An example code block has been provided below.
To ensure that the above code block runs successfully, the user needs to run the wget code prior to running the above code if both parts are added in separately.
Method 2: Using Python Libraries
The CKEditor Binder Plugin supports Python 3, libraries that are supported by this version of Python may be used to read in the file. An example code block is provided below.

## Match 1.54 — LibreTexts: 10.1: Data Tables and Ranges
License: Creative Commons - Attribution - https://creativecommons.org/licenses/by/4.0/ · https://workforce.libretexts.org/Bookshelves/Information_Technology/Computer_Applications/Workplace_Software_and_Skills_(OpenStax)/10%3A_Advanced_Excel_Formulas_Functions_and_Techniques/10.01%3A_Data_Tables_and_Ranges

10.1: Data Tables and Ranges
By the end of this section, you will be able to:
- Differentiate between a spreadsheet and a Data Table
- Explain the advantages of a Data Table
- Create/insert a Data Table from data in a spreadsheet
- Define a cell range
- Select and name a cell range
- Differentiate between a cell range and an array
WorldCorp has sufficient savings for capital investment for the Fairfax project, yet the chief financial officer (CFO) wants to borrow from a bank about 50 percent of the amount of the estimate for the new addition. There are many banks in Fairfax, each offering different interest rates and years to pay back the loan. The CFO is not sure which offer is best, as the longer the loan period is, the more interest WorldCorp will end up paying, yet the shorter the loan period, the higher the payment will be. The CFO is also analyzing the different interest rates and how they affect the installments and subsequently the total interest charge over the life of the loan.
This case shows why it’s important to learn the intricacies of using Microsoft Excel’s Data Tables. Data Tables can be helpful to assist management in determining the best course of action by evaluating interest charges and monthly payments. In this section, you will create a data table from existing data and will discover the advantages of using the Data Table tool in the What-If Analysis, plus related concepts and definitions, such as data ranges and arrays. The Data Table’s powerful analysis options will be further explored in Organizing and Presenting Data.
Differentiating Between a Spreadsheet and a Data Table
Spreadsheets have a wide variety of applications and can be used for accounting, budgeting, data collection and analysis, and operations efficiency. Spreadsheets are used in all departments of corporations, such as marketing or operations. These departments can use spreadsheets in a variety of ways, such as compiling information from market studies, or performing statistical analysis on operations from the manufacturing plant.
A Data Table is a scenario-building tool. It lets users choose a set of cells on the spreadsheet, and then outputs different solutions or forecasts depending on different scenarios. The difference between a Data Table and a spreadsheet is that a spreadsheet is a file with blank cells that can be formatted using the various tools and commands contained in the application. A Data Table can be part of (embedded in) a spreadsheet, but a spreadsheet can also include a graph, some text for information, or the listing of the inputs for the Data Table. The Data Table feature of Excel automatically builds a table of data based on certain inputs that is part of the spreadsheet. Figure 10.2 shows an example of an Excel-generated Data Table, as well as the data used in the scenarios. You will build a Data Table after learning more about its uses.
The Advantages of a Data Table
The advantages of Data Tables are many. One of their most important advantages is their ability to automate scenario-building. Another advantage is increased accuracy due to less manual entry of data. If you were to create a scenario from a blank workbook, you would need to build out the formulas initially and then copy them through the desired levels of the inputs. This increases the possibility of user error caused by inputting values or formulas incorrectly. By using the Data Table feature, all that work is done automatically—and quickly. Data Tables allow users to view all the levels of inputs in a single table without inputting multiple formulas.
Consider the example of expanding Fairfax’s WorldCorp location. You have gathered the needed information to determine the amount of the loan you will need to finance the added capacity. You have the loan terms from banks in the area and you know that the loan payment period will be ten years. WorldCorp is working on its annual budget, so the CFO wants you to investigate the annual payments, not the monthly payments. The CFO also wants to examine the variability of the annual installment if the interest rate is increased by 0.5 percent increments per year over the life of the loan. The Data Table in the What-If Analysis will automatically perform the annual payment calculations for each increment. The CFO will then be able to look at the results and determine which loan from which bank will best meet the company’s needs.
The first step in this analysis is to set up your data. Since you’re looking at how the interest rate affects the annual payment, you can use Excel’s Payment (PMT) function, which uses the present value (the value of the loan), the number of payments, and the rate. The PMT function is in the Financial library of functions found on the Formulas tab. The present value (PV) is principal to be borrowed; in this case, we will use $750,000, which is half of the total cost of the expansion. This was determined by the initial research by the CFO as the amount needed to finance the company growth. The time period of the loan has been set at ten years. Most loans are paid monthly, but since you are analyzing the annual payments, you will use 10 (not 120) for N (shown as Nper in the function builder) to define the number of payments. After gathering all the interest rates offered by the banks, it was determined that the average interest rate (I) of all is 6.5 percent. Using these input values, the yearly payment can be determined using the financial PMT function. Figure 10.3 shows the building of the PMT function in Excel.
The result is an annual payment on the loan of $104,328.52 (Figure 10.4). The output for Excel with the PMT function is negative by default, which is displayed in parentheses and in red. This is to indicate that the loan total will decrease by that amount each year after the payment is made. Keep this in mind as you examine the output.
The next step in the analysis is to compare the payments with different loan terms. You can calculate the payment manually using the PMT function many times—that is, every time you change the interest rate. You can play around with it by changing the interest rate and seeing how it affects the payment. If the rate is lower, the payment will be lower, and if the rate is higher, the payment will be higher. For example, in Figure 10.3, if you change the rate to 5 percent, the payment automatically updates to $97,128.43. However, this approach does not retain all of the options easily. Unless you make a separate table to capture the impact of changes in the interest rate on the payment, that information is lost each time you make a change to the inputs. If you do create a table, you would need to format it in a manner suitable for additional analysis and decision making. It would be a time-consuming exercise to record all of the data for each interest rate, and then you would need to take an extra step to summarize it in an easy-to-follow table. By creating a Data Table, you can use various levels of the interest rate to calculate the payment and summarize it in one concise table.
PMT is a useful tool for comparing different interest rates and their impact on monthly payment. It can also be used to determine a mortgage payoff schedule. Paying down a mortgage at a faster pace than agreed upon can lead to significant savings in interest payments. Even one additional payment a year can have a large impact on the amount of interest paid. You can find any number of amortization templates available online, either where you input the information and the site calculates it for you, or through an Excel template. Do some online research to find an Excel template to help you calculate your mortgage payoff schedule. Open the template and review the formulas. Notice the use of IF and PMT functions throughout. Using the template, locate a home to purchase and determine the payoff schedule for the home using today’s interest rates. If you own a home already, determine what one additional payment per year will do to your final home cost upon payoff.
Creating a Data Table from Data in a Spreadsheet
To facilitate the process of comparing various interest rates on the annual payment, you can create a Data Table . To do so, the information must be arranged on the spreadsheet in a specific way. First, make a list in a column of the interest rates being examined. The order doesn’t matter to Excel, but it makes the data easier to analyze if you put them in numerical order, either lowest rate to highest or vice versa. In the next column to the right and one row above, use the PMT function to calculate the payment at the current rate (recall, you used 6.5 percent), as shown in Figure 10.5.
Next, select the area of the spreadsheet where the changing input values are contained. In this example, that is cells E1:F8. On the Data tab, you will see the What-If Analysis menu group on the right side. Select the drop-down arrow and choose Data Table (Figure 10.6).
When the Data Table tool is selected, a dialog box appears for inputting data. Because the interest rates are listed in columns, use the “Column input cell” box. In this cell, place the cell reference for the original interest rate used in the PMT function. Notice the dollar sign ($) in front of the letter and number in the cell reference. This will set the column input cell to always refer to the value in cell B2. This is referred to as an absolute reference . You will learn more about absolute references in Absolute Cell References. For this example, the cell is B2 (Figure 10.7).
The Data Table will automatically calculate the payment at each of the interest rates listed in the column below the PMT, as shown in Figure 10.8. You will need to format the data to be Accounting or Currency.
This process will save a lot of time, as it eliminates manually creating a formula for each cell. Furthermore, with the same Data Table, any of the values in the list can be changed and the information will automatically update to the correct value. For example, to see the payments for a 6.4 percent interest rate instead of 6.5 percent, simply change that one value, and the row’s value will be autofilled to calculate the new installment payment. The rest of the data table stays the same, as you can see in Figure 10.9.
Suppose you have taken this Data Table to the WorldCorp CFO, who tells you that the company will not pay high interest rates and will only negotiate and meet with the executives of banks that offer rates at or below 7 percent. There is no need to create a new Data Table that only includes the data for that range of rates because you may need the information at a later point. Instead, you can temporarily hide the values that exceed the 7 percent maximum using Excel’s filtering tools. 
To use a filter within the Data Table, select the rate column, and then go to the Data tab. In the Sort & Filter command group, select Filter (the funnel icon). When Filter is selected, a small arrow will appear at the top of the column, as shown in Figure 10.10a. Select that arrow and go to Number Filters, then select Less Than Or Equal To.... On the dialog box that appears next, select 7.00% from the choices, and then click OK. The result is that the Data Table will only show values that are less than or equal to 7 percent, as shown in Figure 10.10b.
Now that you have created a Data Table with one variable, you will follow a similar process to analyze two variables. With the added capacity in Fairfax, WorldCorp can sell more products to help the company reach its strategic goals. Increasing unit sales could also allow the company to reduce its price per unit. You would like to better understand the impact of the increased sales and price changes on the annual revenue for WorldCorp. Let’s assume that in 2020, WorldCorp sold 5,000 RX-500 digital scales in the state of Virginia, at the retail price of $17.99 per unit. That would mean an annual revenue of $89,950 for this item. What would happ
