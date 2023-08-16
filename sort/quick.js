function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      // Swap elements at i and j
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Swap pivot element with the element at position i+1
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

  return i + 1;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = quickSort(unsortedArray.slice()); // Create a copy to keep the original array unchanged
console.log("Sorted Array:", sortedArray);
