# Source pack — subjects/computer-science/intermediate/algorithms-searching-and-sorting
Lesson title: Algorithms: Searching & Sorting
Level: intermediate
Match confidence: 2.38

Source text: OpenStax (https://openstax.org), CC BY 4.0. Adapted and simplified for Interactive Atlas; interactive widgets added.

## Match 2.38 — LibreTexts: 9.1: Activity 1 - Sorting Algorithms by insertion method
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Folsom_Lake_College/CISP_430%3A_Data_Structures_(Aljuboori)/09%3A_Sorting_Algorithms/9.01%3A_Activity_1_-_Sorting_Algorithms_by_insertion_method

9.1: Activity 1 - Sorting Algorithms by insertion method
-
- Last updated
- Save as PDF
This activity will present two insertion based sorting algorithms, the insertion sort and the binary tree sort algorithms.
Activity Details
Insertion sort Algorithm
The insertion sort is good for sorting moderately sized arrays (up to some tens of elements). For larger arrays, we will see later a much faster algorithm. The basic idea of insertion sort is as follows: Assume that at the start of iteration i of the algorithm, the first i elements of the array are already sorted. The array therefore consists of a left part which is sorted and a right part which is unsorted, as shown in Figure 3.1.1 .
Next the algorithm takes the (i+1)-th element x and inserts it into the appropriate position of the sorted part to the left of x by shifting the elements larger than x one position to the right. Thus, we have that the first i+1 element sorted. After n iterations (where n is the length of the array), the whole array is sorted. The insertion sort algorithm is presented below:
insertionSort(int[] a) { int n = a.length; for (int i = 1; i < n; i++) { // a is sorted from 0 to i-1 int x = a[i]; int j = i-1; while (j >= 0 && a[j] > x) { a[j+1] = a[j]; j = j-1; } a[j+1] = x; }
The algorithm uses the variable x as a temporary buffer to hold the value of a[i] while the larger elements in the sorted part of the array are shifted one position to the right. When all elements have been shifted, this value is written back into the appropriate position of the array.
In the first iteration of the outer loop, the algorithm performs at most one comparison operation, in the second iteration at most two, and so on. The worst case occurs when the input array is sorted in descending order, in which we have that
1+2+...+(n-1) = n*(n-1)/2 = n2/2
comparisons (the number of element swap operations is approximately the same). Therefore, the time complexity of the algorithm is quadratic in the length n of the array. In average, however, in each iteration of the outer loop only half of the maximum number of comparisons has to be performed until the appropriate insertion point is found. Why? In this case the algorithm performs an average of approximately n2/4 steps.
Sorting an array by this algorithm is therefore much slower than searching for an element in an array (which takes at most n steps, if the array is unsorted, and at most log2 n steps, if the array is sorted). For instance, if the size of the array is 1024, approximately 262000 comparison operations have to be performed to sort the array. If the array has 8192 elements, approximately 16 million comparisons have to be performed.
However, for data that are already sorted or almost sorted, the insertion sort does much better. When data is in order, the inner loop is never executed. Why? In this case, the algorithm needs only n steps. If the data is almost sorted, the inner loop is only very infrequently executed and the algorithm runs in “almost” n steps. It is therefore a simple and efficient way to order a collection that is only slightly out of order.
Binary Tree Sort Algorithm
Given an array of elements to sort, the tree sort algorithms proceeds as follows:
- Build a binary search tree out of the elements
- Traverse the tree in order and copy the elements back into the array.
This algorithm time complexity is as follows:
Worst case - Occurs when the binary search tree is unbalanced, for example when the data is already sorted. Building the binary search tree takes O(n2), and to traverse the binary tree takes O(n) time. The total is O(n2) + O(n) = O(n2).
Best case - Building the binary search tree takes O(n log n) and to traverse the binary tree takes O(n). The total is O(n log n) + O(n) = O(n log n).
Conclusion
This activity presented two sorting algorithms based on the insertion method. Both algorithms' performance were quadratic in the worst case. Such algorithms may be suited to sorting small data collections.
Assessment
-
Write one to three sentences to answer each of the following questions:
- Insertion sort is better for nearly-sorted lists than reverse-ordered lists. Why?
- How much extra memory is required for each sort?
- If the list is composed of four identical elements, how many elements change position when insertion sort is used? Why?
-
For each of the following lists, draw the result of each insertion of the insertion sorting routine. You do not need to show the result of each comparison, just the final insertion of the element.
- [ 5 | 4 | 1 ]
- [ 3 | 1 | 3 ]
- [ 2 | 5 | 4 | 0 ]
- Consider the following unsorted list: [ 6 | 8 | 3 | 5 | 1 | 9 | 2 | 2 ]. Show the steps used by the tree sort algorithm to obtain a sorted list.

## Match 2.04 — LibreTexts: 9.2: Activity 2 - Sorting Algorithms by selection method
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Folsom_Lake_College/CISP_430%3A_Data_Structures_(Aljuboori)/09%3A_Sorting_Algorithms/9.02%3A_Activity_2_-_Sorting_Algorithms_by_selection_method

9.2: Activity 2 - Sorting Algorithms by selection method
Introduction
This activity will present two selection based sorting algorithms, the selection sort and the heap sort algorithms.
Activity Details
Selection sort
The selection sort algorithm works by repeatedly exchanging elements: first finds the smallest in the array and exchange it with the element in the first position, then find the second smallest element and exchange it with the element in the second position, and continue in this way until the entire array is sorted. Below we present the selection sort algorithm:
SELECTION_SORT (A)
for i ← 1 to n-1 do min j ← i; min x ← A[i] for j ← i + 1 to n do If A[j] < min x then min j ← j min x ← A[j] A[min j] ← A [i] A[i] ← min x
Selection sort is among the simplest of sorting techniques and it work very well for small files. Furthermore, despite its evident “simplistic approach”, selection sort has a quite important application because each item is actually moved at most once, thus selection sort is a method of choice for sorting files with very large objects (records) and small keys. Below we present the selection sort implementation:
void selectionSort(int numbers[], int array_size) { int i, j; int min, temp; for (i = 0; i < array_size-1; i++) { min = i; for (j = i+1; j < array_size; j++) { if (numbers[j] < numbers[min]) min = j; } temp = numbers[i]; numbers[i] = numbers[min]; numbers[min] = temp; }
The complexity of the selection sort algorithm is as follows. The worst case occurs if the array is already sorted in descending order. Nonetheless, the time required by selection sort algorithm is not very sensitive to the original order of the array to be sorted: the test “if A[j] < min x” is executed exactly the same number of times in every case. The variation in time is only due to the number of times the “then” part (i.e., min j ← j; min x ← A[j] of this test are executed. Selection sort is quadratic in both the worst and the average case, and requires no extra memory.
Note that for each i from 1 to n - 1, there is one exchange and n - i comparisons, so there is a total of n -1 exchanges and (n -1) + (n -2) + . . . + 2 + 1 = n(n -1)/2 comparisons. These observations hold no matter what the input data is. In the worst case, this could be quadratic, but in the average case, this quantity is O(n log n). It implies that the running time of selection sort does not depend on how the input may be organized.
Heaps Sort
We can use heap for sorting a collection in a specific order efficiently. Suppose we want to sort elements of array Arr in ascending order. We can use max heap to perform this operation through the following steps:
- Build a max heap of elements in Arr.
- Now the root element, Arr[1], contains maximum element of Arr. Exchange this element with the last element of Arr and again build a max heap excluding the last element which is already in its correct position. Thus decreases the length of heap by one.
- Repeat step (ii) until all elements are in their correct position.
- Get a sorted array.
In the following the implementation of heap sort algorithm is provided (Assuming there are N elements stored in array Arr):
void heap_sort(int Ar[ ]) { int heap_size = N; build_maxheap(Arr); for(int i = N; i>=2 ; i-- ) { swap|(Arr[ 1 ], Arr[ i ]); heap_size = heap_size-1; max_heapify(Arr, 1, heap_size); }
The time complexity of the heap-sort algorithm is as follows: Recall from Chapter 8 that max_heapify has complexity O(logN), build_maxheap has complexity O(N) and the fact that the algorithm calls max_heapify N-1 times, therefore the complexity of heap_sort function is O(N logN).
We now demonstrate the steps of the heap sort algorithm using an example of an unsorted array Arr having 6 elements and corresponding max-heap as in Figure \(\PageIndex{1}\).
After building the corresponding max-heap, the elements in the array Arr are now as in Figure \(\PageIndex{2}\).
The subsequent algorithm processing steps are outlined below and further depicted in Figure \(\PageIndex{3}\).
- 8 is swapped with 5.
- 8 is disconnected from heap as 8 is in correct position now and.
- Max-heap is created and 7 is swapped with 3.
- 7 is disconnected from heap.
- Max heap is created and 5 is swapped with 1.
- 5 is disconnected from heap.
- Max heap is created and 4 is swapped with 3.
- 4 is disconnected from heap.
- Max heap is created and 3 is swapped with 1.
- 3 is disconnected.
Upon completion of all the steps, we obtain a sorted array shown in Figure \(\PageIndex{4}\).
Conclusion
In this activity the selection based sorting algorithms were presented, the selection sort and the heap sort. The complexity analysis for the two algorithms shows that the heap sort is more efficient, since the selection sort has a quadratic worst case performance. The selection sort is suited to sorting small collections, and the order of input does not influence its performance.
Assessment
-
Show the steps taken when sorting the following list of integers [80, 30, 50, 70, 60, 90, 20, 30, 40] using
- Selection sort

## Match 2.04 — LibreTexts: 9: Sorting Algorithms
License: Creative Commons - Attribution Share-Alike - https://creativecommons.org/licenses/by-sa/4.0/ · https://eng.libretexts.org/Courses/Folsom_Lake_College/CISP_430%3A_Data_Structures_(Aljuboori)/09%3A_Sorting_Algorithms

9: Sorting Algorithms
Unit Introduction
A sorting algorithm is an algorithm that puts elements of a collection such as array or list in a certain order. The most used orders are numerical order and lexicographical order. Efficient sorting is important to optimizing the use of other algorithms, such as in search and merge algorithms that require sorted collections to work correctly. It is also often useful for normalization of data and for producing human-readable output. More precisely, the output must satisfy two conditions (i) the output is in non-decreasing order (each element is no smaller than the previous element according to the desired total order) and (ii) the output is a permutation, or reordering, of the input.
The Sorting algorithms used in computer science are often classified by:
- Computational complexity (worst, average and best case behavior) in terms of the size of the list (n) - For typical sorting algorithms good behavior is O(n log n) and bad behavior is O(n2). Ideal behavior for a sort is O(n). Sort algorithms which only use an abstract key comparison operation often require at least O(n log n) comparisons on average.
- Memory usage (and use of other computer resources) - In particular, some sorting algorithms are “in place”, such that little memory is needed beyond the items being sorted, while others need to create auxiliary locations for data to be temporarily stored.
- Stability - Stable sorting algorithms maintain the relative order of records with equal keys (i.e. values). That is, a sorting algorithm is stable if whenever there are two records R and S with the same key and with R appearing before S in the original list, R will appear before S in the sorted list.
- Whether or not is a comparison sort - A comparison sort examines the data only by comparing two elements with a comparison operator.
- General sort method – whether uses insertion, exchange, selection, merging, etc.
Table \(\PageIndex{1}\) provides a summary of some sorting algorithms and their classification. When equal elements are indistinguishable, such as with integers, stability is not an issue. However, assume that the following pairs of numbers are to be sorted by their first coordinate: (4, 1) (3, 1) (3, 7) (5, 6). In this case, two different results are possible, that is, one which maintains the relative order of records with equal keys, and one which does not as shown below:
(3, 1) (3, 7) (4, 1) (5, 6) (order maintained)
(3, 7) (3, 1) (4, 1) (5, 6) (order changed)
Unstable sorting algorithms may change the relative order of records with equal keys, but stable sorting algorithms never do so. Unstable sorting algorithms can be specially implemented to be stable. One way of doing this is to artificially extend the key comparison, so that comparisons between two objects with otherwise equal keys are decided using the order of the entries in the original data order as a tie-breaker. Remembering this order, however, often involves an additional space cost.
Table \(\PageIndex{1}\), presents a classification summary of the sorting algorithms considered in this unit. In the table, n is the number of records to be sorted. The columns “Best”, “Average”, and “Worst” give the time complexity in each case. “Memory” denotes the amount of auxiliary storage needed beyond that used by the collection list itself. “Cmp” indicates whether the sort is a comparison sort.
Table \(\PageIndex{1}\): A Sorting Algorithms Classification
|
Name |
Best |
Average |
Worst |
Memory |
Stable |
Cmp |
Method |
|---|---|---|---|---|---|---|---|
|
Selection sort |
O(n2) |
O(n2) |
O(n2) |
O(1) |
No |
Yes |
Selection |
|
Insertion sort |
O(n) |
— |
O(n2) |
O(1) |
Yes |
Yes |
Insertion |
|
Binary tree sort |
O(nlog(n)) |
— |
O(nlog(n)) |
O(1) |
Yes |
Yes |
Insertion |
|
Merge sort |
O(nlog(n)) |
— |
O(nlog(n)) |
O(n) |
Yes |
Yes |
Merging |
|
Heap sort |
O(nlog(n)) |
— |
O(nlog(n)) |
O(1) |
No |
Yes |
Selection |
|
Quick sort |
O(nlog(n)) |
O(nlog(n)) |
O(n2) |
O(log n) |
No |
Yes |
Partitioning |
Unit Objectives
Upon completion of this unit you should be able to:
- Demonstrate understanding of various sorting algorithm
- Select best sorting method based on performance requirement
- Apply sorting algorithms in problem solving
Key Terms
Sorting : A process that puts elements of a collection such as array or list in a certain order
