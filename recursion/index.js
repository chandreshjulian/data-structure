const countDown = (num) => {
    if(isNaN(num)) {
        console.log("input is not a number")
        return
    }
    console.log(num)
    if(num === 0) {
        return console.log("all done")
    }
    return countDown(--num)
};

const factorial = (num) => {
    if(num === 1) return 1
    return num * factorial(--num)
}


console.log("countDown")
countDown(3)

console.log("")

console.log("factorial")
console.log(factorial(5))