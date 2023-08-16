# Sorting Algos

## Bubble Sort
The bubbleSort function takes an array as input and sorts it using the Bubble Sort algorithm. The outer do-while loop keeps running as long as there are swaps being made in the inner loop. The inner loop compares adjacent elements and swaps them if they're in the wrong order. This process continues until no more swaps are needed, indicating that the array is sorted.

Please note that Bubble Sort is not the most efficient sorting algorithm for larger datasets and should generally be avoided in favor of more efficient algorithms like Quick Sort or Merge Sort.

## Selection Sort
The selectionSort function repeatedly selects the minimum element from the remaining unsorted part of the array and swaps it with the first element of that unsorted part. This process is carried out until the entire array is sorted.

Selection Sort has a time complexity of O(n^2), making it less efficient than other sorting algorithms like Quick Sort and Merge Sort. It's mainly useful for educational purposes or for small datasets.

## Insertion Sort
The insertionSort function builds the sorted array in-place by iteratively inserting each element into its correct position among the previously sorted elements. The inner while loop helps shift elements to the right to create space for the insertion of the current element.

Insertion Sort has a time complexity of O(n^2), similar to Bubble Sort and Selection Sort, but it performs well on small arrays or nearly sorted arrays.

## Merge Sort
The mergeSort function recursively divides the array into smaller halves until they become single elements. Then, the merge function is used to combine these sorted halves in a way that maintains the sorted order.

Merge Sort is more efficient than Bubble Sort, especially for larger datasets, as it has a time complexity of O(n log n), which makes it suitable for sorting large arrays or lists.

## Quick Sort
The quickSort function uses a pivot element to partition the array into two sub-arrays. Elements less than the pivot are moved to its left, and elements greater than the pivot are moved to its right. The process is then recursively applied to the sub-arrays until the entire array is sorted.

Quick Sort has an average-case time complexity of O(n log n), making it one of the most efficient sorting algorithms. It's widely used and performs well on both small and large datasets.

## Heap Sort
The heapSort function uses the Heap Sort algorithm to sort an array. The first step is to build a max heap from the array. Then, the largest element (the root of the max heap) is repeatedly removed and placed at the end of the array. After each removal, the max heap property is restored through the heapify function.

Heap Sort has an average-case time complexity of O(n log n), making it efficient for large datasets. It's particularly useful when you need to maintain a partially sorted structure, like a priority queue.

## Counting Sort

## Radix Sort
The radixSort function sorts an array of integers using the Radix Sort algorithm. It iterates through each digit position (from least significant to most significant) and applies counting sort to sort the elements based on that digit position.

Radix Sort has a time complexity of O(nk), where n is the number of elements and k is the number of digits in the maximum number. It's often used when sorting integers with a fixed number of digits or when the range of input values is known and not too large.

## Bucket Sort

## Shell Sort

## Tim Sort

## Cocktail Shaker Sort

## Comb Sort

## Pigeonhole Sort

## Cycle Sort

## Gnome Sort

## Odd-Even Sort

## Bitonic Sort

## Pancake Sorting

## Bogo Sort (not practical, mainly used for educational purposes)
