// multiple pointer

const sumZero = (arr) => {
  let left = 0
  let right = arr.length - 1
  
  while(left < right) {
    const sum = arr[left] + arr[right]
    if(sum === 0)
      return [arr[left], arr[right]]
    else if(sum > 0)
      right -= 1
    else
      left += 1
  }
}

console.log(sumZero([-5, -3, -1, 1, 4, 6]))