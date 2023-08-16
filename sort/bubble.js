function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = n; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped)
      break
  }

  return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array:", unsortedArray);

const sortedArray = bubbleSort(unsortedArray.slice()); // Create a copy to keep the original array unchanged
console.log("Sorted Array:", sortedArray);
