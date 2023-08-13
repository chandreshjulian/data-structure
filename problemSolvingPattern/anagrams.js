// frequancy counter

const isAnagram = (first, second) => {
  if(first.length !== second.length)
    return false

  const lookup = {}

  for(let i = 0; i < first.length; i++) {
    const letter = first[i]
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  let check = true
  for(let j = 0; j < second.length; j++) {
    const letter = second[j]
    if(!lookup[letter]) {
      check = false
      break
    } else {
      lookup[letter] -=1
    }
  }

  return check
}

console.log(isAnagram("anagram", "nagaram"))