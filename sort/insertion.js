function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1] that are greater than current
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = insertionSort(unsortedArray.slice()); // Create a copy to keep the original array unchanged
console.log("Sorted Array:", sortedArray);
