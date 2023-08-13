// multiple pointer

const countUniqueValues = (arr) => {
  if(!arr.length) return 0
  
  let i = 0
  let j = 1
  while(j < arr.length) {
    if(arr[i] !== arr[j]) {
      arr[i+1] = arr[j]
      i++
    }
    j++
  }

  console.log(arr)
  return i + 1
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))