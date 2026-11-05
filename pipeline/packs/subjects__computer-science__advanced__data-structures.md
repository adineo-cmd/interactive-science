# Source pack — subjects/computer-science/advanced/data-structures
Lesson title: Data Structures: Lists, Trees, Hashes
Level: advanced
Match confidence: 1.44

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 1.44 — LibreTexts: 2.1: Sequential Data Structures
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://phys.libretexts.org/Bookshelves/Mathematical_Physics_and_Pedagogy/Computational_Physics_(Chong)/02%3A_Scipy_Tutorial_(Part_2)/2.01%3A_Sequential_Data_Structures

2.1: Sequential Data Structures
In the previous part of the tutorial, we worked through a simple example of a Scipy program which calculates the electric potential produced by a collection of charges in 1D. At the time, we did not explain much about the data structures that we were using to store numerical information (such as the values of the electric potential at various points). Let's do that now.
There are three common data structures that will be used in a Scipy program for scientific computing: arrays, lists, and tuples. These structures store linear sequences of Python objects, similar to the concept of "vectors" in physics and mathematics. However, these three types of data structures all have slightly different properties, which you should be aware of.
2.1.1 Arrays
An array is a data structure that contains a sequence of numbers. Let's do a quick recap. From a fresh Python command prompt, type the following:
>>> from scipy import * >>> x = linspace(-0.5, 0.5, 9) >>> x array([-0.5 , -0.375, -0.25 , -0.125, 0. , 0.125, 0.25 , 0.375, 0.5 ])
The first line, as usual, is used to import the
scipy
module. The second line creates an array named
x
by calling
linspace
, which is a function defined by
scipy
. With the given inputs, the function returns an array of 9 numbers between -0.5 and 0.5, inclusive. The third line shows the resulting value of
x
.
The array data structure is provided specifically by the Scipy scientific computing module. Arrays can only contain numbers (furthermore, each individual array can only contain numbers of one type, e.g. integers or complex numbers; we'll discuss this in the next article). Arrays also support special facilities for doing
numerical linear algebra
. They are commonly created using one of these functions from the
scipy
module:
- linspace , which creates an array of evenly-spaced values between two endpoints.
- arange , which creates an array of integers in a specified range.
- zeros , which creates an array whose elements are all \(0.0\).
- ones , which creates an array whose elements are all \(1.0\).
- empty , which creates an array whose elements are uninitialized (this is usually used when you want to set the elements later).
Of these, we've previously seen examples of the
linspace
and
zeros
functions being used. As another example, to create an array of 500 elements all containing the number \(-1.2\), you can use the
ones
function and a multiplication operation:
x = -1.2 * ones(500)
An alternative method, which is
slightly
faster, is to generate the array using
empty
and then use the
fill
method to populate it:
x = empty(500); x.fill(-1.2)
One of the most important things to know about an array is that its size is fixed at the moment of its creation. When creating an array, you need to specify exactly how many numbers you want to store. If you ever need to revise this size, you must create a new array, and transfer the contents over from the old array. (For very big arrays, this might be a slow operation, because it involves copying a lot of numbers between different parts of the computer memory.)
You can pass arrays as inputs to functions in the usual way (e.g., by supplying its name as the argument to a function call). We have already encountered the
len
function, which takes an array input and returns the array's length (an integer). We have also encountered the
abs
function, which accepts an array input and returns a new array containing the corresponding absolute values. Similar to
abs
, many mathematical functions and operations accept arrays as inputs; usually, this has the effect of applying the function or operation to each element of the input array, and returning the result as another array. The returned array has the same size as the input array. For example, the
sin
function with an array input
x
returns another array whose elements are the sines of the elements of
x
:
>>> y = sin(x) >>> y array([-0.47942554, -0.36627253, -0.24740396, -0.12467473, 0. , 0.12467473, 0.24740396, 0.36627253, 0.47942554])
You can access individual elements of an array with the notation
a[j]
, where
a
is the variable name and
j
is an integer index (where the first element has index 0, the second element has index 1, etc.). For example, the following code sets the first element of the
y
array to the value of its second element:
>>> y[0] = y[1] >>> y array([-0.36627253, -0.36627253, -0.24740396, -0.12467473, 0. , 0.12467473, 0.24740396, 0.36627253, 0.47942554])
Negative indices count backward from the end of the array. For example:
>>> y[-1] 0.47942553860420301
Instead of setting or retrieving individual values of an array, you can also set or retrieve a sequence of values. This is referred to as slicing , and is described in detail in the Scipy documentation . The basic idea can be demonstrated with a few examples:
>>> x[0:3] = 2.0 >>> x array([ 2. , 2. , 2. , -0.125, 0. , 0.125, 0.25 , 0.375, 0.5 ])
The above code accesses the elements in array
x
, starting from index 0 up to but not including 3 (i.e. indices 0, 1, and 2), and assigns them the value of
2.0
. This changes the contents of the array
x
.
>>> z = x[0:5:2] >>> z array([ 2., 2., 0.])
The above code retrieves a subset of the elements in array
x
, starting from index 0 up to but not including 5, and stepping by 2 (i.e., the indices 0, 2, and 4), and then groups those elements into an array named
z
. Thereafter,
z
can be treated as an array.
Finally, arrays can also be multidimensional. If we think of an ordinary (1D) array as a vector, then a 2D array is equivalent to a matrix, and higher-dimensional arrays are like tensors. We will see practical examples of higher-dimensional arrays later. For now, here is a simple example:
>>> y = zeros((4,2)) # Create a 2D array of size 4x2 >>> y[2,0] = 1.0 >>> y[0,1] = 2.0 >>> y array([[ 0., 2.], [ 0., 0.], [ 1., 0.], [ 0., 0.]])
2.1.2: Lists
There is another type of data structure called a list . Unlike arrays, lists are built into the Python programming language itself, and are not specific to the Scipy module. Lists are general-purpose data structures which are not optimized for scientific computing (for example, we will need to use arrays, not lists, when we want to do linear algebra).
The most convenient thing about Python lists is that you can specify them explicitly, using
[...]
notation. For example, the following code creates a list named
u
, containing the integers \(1,\: 1,\: 2,\: 3,\) and \(5\):
>>> u = [1, 1, 2, 3, 5] >>> u [1, 1, 2, 3, 5]
This way of creating lists is also useful for creating Scipy arrays. The array function accepts a list as an input, and returns an array containing the same elements as the input list. For example, to create an array containing the numbers \(0.2,\: 0.1,\) and \(0.0\):
>>> x = array([0.2, 0.1, 0.0]) >>> x array([ 0.2, 0.1, 0. ])
In the first line, the square brackets create a list object containing the numbers \(0.2,\: 0.1,\) and \(0.0\), then passes that list directly as the input to the
array
function. The above code is therefore equivalent to the following:
>>> inputlist = [0.2, 0.1, 0.0] >>> inputlist [0.2, 0.1, 0.0] >>> x = array(inputlist) >>> x array([ 0.2, 0.1, 0. ])
Usually, we will do number crunching using arrays rather than lists. However, sometimes it is useful to work directly with lists. One convenient thing about lists is that they can contain arbitrary Python objects, of any data type; by contrast, arrays are allowed only to contain numerical data.
For example, a Python list can store character strings:
>>> u = [1, 2, 'abracadabra', 3] >>> u [1, 2, 'abracadabra', 3]
And you can set or retrieve individual elements of a Python list in the same way as an array:
>>> u[1] = 0 >>> u [1, 0, 'abracadabra', 3]
Another great advantage of lists is that, unlike arrays, you can dynamically increase or decrease the size of a list:
>>> u.append(99) # Add 99 to the end of the list u >>> u.insert(0, -99) # Insert -99 at the front (index 0) of the list u >>> u [-99, 1, 0, 'abracadabra', 3, 99] >>> z = u.pop(3) # Remove element 3 from list u, and name it z >>> u [-99, 1, 0, 3, 99] >>> z 'abracadabra'
Aside: About Methods
In the above example,
append
,
insert
, and
pop
are called
methods
. You can think of a method as a special kind of function which is "attached" to an object and relies upon it in some way. Just like a function, a method can accept inputs, and give a return value. For example, when
u
is a list, the code
z = u.pop(3)
means to take the list
u
, find element index 3 (specified by the input to the method), remove it from the list, and return the removed list element. In this case, the returned element is named
z
.
See here for a summary of Python list methods
. We'll see more examples of methods as we go along.
2.1.3 Tuples
Apart from lists, Python provides another kind of data structure called a
tuple
. Whereas lists can be constructed using square bracket
[...]
notation, tuples can be constructed using parenthetical
(...)
notation:
>>> v = (1, 2, 'abracadabra', 3) >>> v (1, 2, 'abracadabra', 3)
Like lists, tuples can contain any kind of data type. But whereas the size of a list can be changed (using methods like
append
,
insert
, and
pop
, as described in the previous subsection), the size of a tuple is fixed once it's created, just like an array.
Tuples are mainly used as a convenient way to "group" or "ungroup" named variables. Suppose we want to split the contents of
v
into four separate named variables. We could do it like this:
>>> dog, cat, apple, banana = v >>> dog 1 >>> cat 2 >>> apple 'abracadabra' >>> banana 3
On the left-hand side of the
=
sign, we're actually specifying a tuple of four variables, named
dog
,
cat
,
apple
, and
banana
. In cases like this, it is OK to omit the parentheses; when Python sees a group of variable names separated by commas, it automatically treats that group as a tuple. Thus, the above line is equivalent to
>>> (dog, cat, apple, banana) = v
We saw a similar example in the previous part of the tutorial, where there was a line of code like this:
pmin, pmax = -50, 50
This assigns the value \(-50\) to the variable named
pmin
, and \(50\) to the variable named
pmax
. We'll see more examples of tuple usage as we go along.

## Match 1.43 — LibreTexts: 17.11: Other Useful Data Structures
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://stats.libretexts.org/Courses/Cerritos_College/Introduction_to_Statistics_with_R/17%3A_Preparing_Datasets_and_Other_Pragmatic_Matters/17.11%3A_Other_Useful_Data_Structures

17.11: Other Useful Data Structures
-
- Last updated
- Save as PDF
Up to this point we have encountered several different kinds of variables. At the simplest level, we’ve seen numeric data, logical data and character data. However, we’ve also encountered some more complicated kinds of variables, namely factors, formulas, data frames and lists. We’ll see a few more specialised data structures later on in this book, but there’s a few more generic ones that I want to talk about in passing. None of them are central to the rest of the book (and in fact, the only one we’ll even see anywhere else is the matrix), but they do crop up a fair bit in real life.
Matrices
In various different places in this chapter I’ve made reference to an R data structure called a
matrix
, and mentioned that I’d talk a bit more about matrices later on. That time has come. Much like a data frame, a matrix is basically a big rectangular table of data, and in fact there are quite a few similarities between the two. However, there are also some key differences, so it’s important to talk about matrices in a little detail. Let’s start by using
rbind()
to create a small matrix:
126
row.1 <- c( 2,3,1 ) # create data for row 1
row.2 <- c( 5,6,7 ) # create data for row 2
M <- rbind( row.1, row.2 ) # row bind them into a matrix
print( M ) # and print it out...
## [,1] [,2] [,3]
## row.1 2 3 1
## row.2 5 6 7
The variable
M
is a matrix, which we can confirm by using the
class()
function. Notice that, when we bound the two vectors together, R retained the names of the original variables as row names. We could delete these if we wanted by typing
rownames(M)<-NULL
, but I generally prefer having meaningful names attached to my variables, so I’ll keep them. In fact, let’s also add some highly unimaginative column names as well:
colnames(M) <- c( "col.1", "col.2", "col.3" )
print(M)
## col.1 col.2 col.3
## row.1 2 3 1
## row.2 5 6 7
You can use square brackets to subset a matrix in much the same way that you can for data frames, again specifying a row index and then a column index. For instance,
M[2,3]
pulls out the entry in the 2nd row and 3rd column of the matrix (i.e.,
7
), whereas
M[2,]
pulls out the entire 2nd row, and
M[,3]
pulls out the entire 3rd column. However, it’s worth noting that when you pull out a column, R will print the results horizontally, not vertically. The reason for this relates to how matrices (and arrays generally) are implemented. The original matrix
M
is treated as a two-dimensional objects, containing 2 rows and 3 columns. However, whenever you pull out a single row or a single column, the result is considered to be one-dimensional. As far as R is concerned there’s no real reason to distinguish between a one-dimensional object printed vertically (a column) and a one-dimensional object printed horizontally (a row), and it prints them all out horizontally.
127
There is also a way of using only a single index, but due to the internal structure to how R defines a matrix, it works very differently to what we saw previously with data frames.
The single-index approach is illustrated in Table 7.5 but I don’t really want to focus on it since we’ll never really need it for this book, and matrices don’t play anywhere near as large a role in this book as data frames do. The reason for these differences is that for this is that, for both data frames and matrices, the “row and column” version exists to allow the human user to interact with the object in the psychologically meaningful way: since both data frames and matrices are basically just tables of data, it’s the same in each case. However, the single-index version is really a method for you to interact with the object in terms of its internal structure, and the internals for data frames and matrices are quite different.
Table 7.5: The row and column version, which is identical to the corresponding indexing scheme for a data frame of the same size.
| Row | Col.1 | Col.2 | Col.3 |
|---|---|---|---|
| Row 1 | [1,1] | [1,2] | [1,3] |
| Row 2 | [2,1] | [2,2] | [2,3] |
Table 7.5: The single-index version, which is quite different to what we would get with a data frame.
| Row | Col.1 | Col.2 | Col.3 |
|---|---|---|---|
| Row 1 | 1 | 3 | 5 |
| Row 2 | 2 | 4 | 6 |
The critical difference between a data frame and a matrix is that, in a data frame, we have this notion that each of the columns corresponds to a different variable: as a consequence, the columns in a data frame can be of different data types. The first column could be numeric, and the second column could contain character strings, and the third column could be logical data. In that sense, there is a fundamental asymmetry build into a data frame, because of the fact that columns represent variables (which can be qualitatively different to each other) and rows represent cases (which cannot). Matrices are intended to be thought of in a different way. At a fundamental level, a matrix really is just one variable: it just happens that this one variable is formatted into rows and columns. If you want a matrix of numeric data, every single element in the matrix must be a number. If you want a matrix of character strings, every single element in the matrix must be a character string. If you try to mix data of different types together, then R will either spit out an error, or quietly coerce the underlying data into a list. If you want to find out what class R secretly thinks the data within the matrix is, you need to do something like this:
class( M[1] )
## [1] "numeric"
You can’t type
class(M)
, because all that will happen is R will tell you that
M
is a matrix: we’re not interested in the class of the matrix itself, we want to know what class the underlying data is assumed to be. Anyway, to give you a sense of how R enforces this, let’s try to change one of the elements of our numeric matrix into a character string:
M[1,2] <- "text"
M
## col.1 col.2 col.3
## row.1 "2" "text" "1"
## row.2 "5" "6" "7"
It looks as if R has coerced all of the data in our matrix into character strings. And in fact, if we now typed in
class(M[1])
we’d see that this is exactly what has happened. If you alter the contents of one element in a matrix, R will change the underlying data type as necessary.
There’s only one more thing I want to talk about regarding matrices. The concept behind a matrix is very much a mathematical one, and in mathematics a matrix is a most definitely a two-dimensional object. However, when doing data analysis, we often have reasons to want to use higher dimensional tables (e.g., sometimes you need to cross-tabulate three variables against each other). You can’t do this with matrices, but you can do it with
arrays
. An array is just like a matrix, except it can have more than two dimensions if you need it to. In fact, as far as R is concerned a matrix is just a special kind of array, in much the same way that a data frame is a special kind of list. I don’t want to talk about arrays too much, but I will very briefly show you an example of what a 3D array looks like. To that end, let’s cross tabulate the
speaker
and
utterance
variables from the
nightgarden.Rdata
data file, but we’ll add a third variable to the cross-tabs this time, a logical variable which indicates whether or not I was still awake at this point in the show:
dan.awake <- c( TRUE,TRUE,TRUE,TRUE,TRUE,FALSE,FALSE,FALSE,FALSE,FALSE )
Now that we’ve got all three variables in the workspace (assuming you loaded the
nightgarden.Rdata
data earlier in the chapter) we can construct our three way cross-tabulation, using the
table()
function.
xtab.3d <- table( speaker, utterance, dan.awake )
xtab.3d
## , , dan.awake = FALSE
##
## utterance
## speaker ee onk oo pip
## makka-pakka 0 2 0 2
## tombliboo 0 0 1 0
## upsy-daisy 0 0 0 0
##
## , , dan.awake = TRUE
##
## utterance
## speaker ee onk oo pip
## makka-pakka 0 0 0 0
## tombliboo 1 0 0 0
## upsy-daisy 0 2 0 2
Hopefully this output is fairly straightforward: because R can’t print out text in three dimensions, what it does is show a sequence of 2D slices through the 3D table. That is, the
, , dan.awake = FALSE
part indicates that the 2D table that follows below shows the 2D cross-tabulation of
speaker
against
utterance
only for the
dan.awake = FALSE
instances, and so on.
128
Ordered factors
One topic that I neglected to mention when discussing factors previously (Section 4.7 is that there are actually two different types of factor in R, unordered factors and ordered factors. An unordered factor corresponds to a nominal scale variable, and all of the factors we’ve discussed so far in this book have been unordered (as will all the factors used anywhere else except in this section). However, it’s often very useful to explicitly tell R that your variable is
ordinal scale
, and if so you need to declare it to be an
ordered factor
. For instance, earlier in this chapter we made use of a variable consisting of Likert scale data, which we represented as the
likert.raw
variable:
likert.raw
## [1] 1 7 3 4 4 4 2 6 5 5
We can declare this to be an ordered factor in by using the
factor()
function, and setting
ordered = TRUE
. To illustrate how this works, let’s create an ordered factor called
likert.ordinal
and have a look at it:
likert.ordinal <- factor( x = likert.raw, # the raw data
levels = seq(7,1,-1), # strongest agreement is 1, weakest is 7
ordered = TRUE ) # and it's ordered
print( likert.ordinal )
## [1] 1 7 3 4 4 4 2 6 5 5
## Levels: 7 < 6 < 5 < 4 < 3 < 2 < 1
Notice that when we print out the ordered factor, R explicitly tells us what order the levels come in. Because I wanted to order my levels in terms of
increasing
strength of agreement, and because a response of 1 corresponded to the strongest agreement and 7 to the strongest disagreement, it was important that I tell R to encode 7 as the lowest value and 1 as the largest. Always check this when creating an ordered factor: it’s very easy to accidentally encode your data “upside down” if you’re not paying attention. In any case, note that we can (and should) attach meaningful names to these factor levels by using the
levels()
function, like this:
levels( likert.ordinal ) <- c( "strong.disagree", "disagree", "weak.disagree",
"neutral", "weak.agree", "agree", "strong.agree" )
print( likert.ordinal )
## [1] strong.agree strong.disagree weak.agree neutral
## [5] neutral neutral agree disagree
## [9] weak.disagree weak.disagree
## 7 Levels: strong.disagree < disagree < weak.disagree < ... < strong.agree
One nice thing about using ordered factors is that there are a lot of analyses for which R automatically treats ordered factors differently from unordered factors, and generally in a way that is more appropriate for ordinal data. However, since I don’t discuss that in this book, I won’t go into details. Like so many things in this chapter, my main goal here is to make you aware that R has this capability built into it; so if you ever need to start thinking about ordinal scale variables in more detail, you have at least some idea where to start looking!
Dates and times
Times and dates are very annoying types of data. To a first approximation we can say that there are 365 days in a year, 24 hours in a day, 60 minutes in an hour and 60 seconds in a minute, but that’s not quite correct. The length of the solar day is not exactly 24 hours, and the length of solar year is not exactly 365 days, so we have a complicated system of corrections that have to be made to keep the time and date system working. On top of that, the measurement of time is usually taken relative to a local time zone, and most (but not all) time zones have both a standard time and a daylight savings time, though the date at which the switch occurs is not at all standardised.  Unfortunately, they’re also important. Sometimes it’s possible to avoid having to use any complicated system for dealing with times and dates. Often you just want to know what year something happened in, so you can just

## Match 1.27 — LibreTexts: 6.12: Arrays and Lists
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Butte_College/Intro_to_Programming_with_Programming_Fundamentals_and_Python_for_Everyone/06%3A_Math_and_Variables/6.12%3A_Arrays_and_Lists

6.12: Arrays and Lists
-
- Last updated
- Save as PDF
Overview
An array is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. [1]
Depending on the language, array types may overlap (or be identified with) other data types that describe aggregates of values, such as lists and strings. Array types are often implemented by array data structures, but sometimes by other means, such as hash tables, linked lists, or search trees. [2] In Python, the built-in array data structure is a list.
Discussion
An array is a sequenced collection of elements of the same data type with a single identifier name. Python lists are similar to arrays in other languages but are not restricted to a single data type. The term ‘array’ as used in this chapter will generally also apply to Python lists unless otherwise noted.
Arrays can have multiple axes (more than one axis). Each axis is a dimension . Thus a single-dimension array is also known as a list . A two-dimension array is commonly known as a table (a spreadsheet like Excel is a two dimension array). In real life, there are occasions to have data organized into multiple-dimension arrays. Consider a theater ticket with section, row, and seat (three dimensions). Most single-dimension arrays are visualized vertically.
Most programmers are familiar with a special type of array called a string. Strings are basically a single dimension array of characters. Unlike other single dimension arrays, we usually envision a string as a horizontal stream of characters and not vertically as a list.
We refer to the individual values as members (or elements) of the array. Programming languages implement the details of arrays differently. Because there is only one identifier name assigned to the array, we have operators that allow us to reference or access the individual members of an array. The operator commonly associated with referencing array members is the index operator. It is important to learn how to define an array and initialize its members.
Defining an Array
| Language | Example |
|---|---|
| C++ |
int ages[] = {49, 48, 26, 19, 16};
|
| C# |
int[] ages = {49, 48, 26, 19, 16};
|
| Java |
int[] ages = {49, 48, 26, 19, 16};
|
| JavaScript |
var ages = [49, 48, 26, 19, 16];
|
| Python |
ages = [49, 48, 26, 19, 16]
|
| Swift |
var ages:[Int] = [49, 48, 26, 19, 16]
|
This is the
defining of storage space
. The square brackets
[]
are used here to create the array with five integer members and the identifier name of ages. The assignment with braces (that is a block) establishes the initial values assigned to the members of the array. Note the use of the sequence or comma operator. We could have also done something similar to:
| Language | Example | Initial Values |
|---|---|---|
| C++ |
int ages[5];
|
undefined |
| C# |
int[] ages = new int[5];
|
0 |
| Java |
int[] ages = new int[5];
|
0 |
| JavaScript |
var ages = Array(5);
|
undefined |
| Python |
ages = [None] * 5
|
None |
This would have declared the storage space of five integers with the identifier name of ages but their initial values would have been unknown values or initialized as indicated, depending on the programming language. We could assign values later in our program by doing the following (leaving off the semicolons in Python):
ages[0] = 49; ages[1] = 48; ages[2] = 26; ages[3] = 19; ages[4] = 16;
Note: The members of the array go from 0 to 4; NOT 1 to 5. This is explained in more detail on the next page.
Key Terms
- dimension
- An axis of an array.
- list
- A single dimension array.
- table
- A two-dimension array.
