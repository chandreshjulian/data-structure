class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    #addRight(value) {
        if(this.right)
            return this.right.add(value)

        this.right = new Node(value)
        return "Leaf added ("+value+")"
    }

    #addLeft(value) {
        if(this.left)
            return this.left.add(value)
        this.left = new Node(value)     
        return "Leaf added ("+value+")"
    }

    #search(value) {
        if(value > this.value)
            return this.right ? this.right.search(value) : false
        else if(value < this.value)
        return this.left ? this.left.search(value) : false
        else
            return this
    }

    find(value) {
        return this.#search(value)
    }

    contains(value) {
        return !!this.#search(value)
    }

    add(value) {
        if(value > this.value)
            return this.#addRight(value)
        else if(value < this.value)
            return this.#addLeft(value)
        else
            return "Error: Node ("+value+") is already available"
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    find(value) {
        if(!this.root) return false

        return this.root.find(value)
    }

    contains(value) {
        if(!this.root) return false

        return this.root.contains(value)
    }

    add(value) {
        if(!this.root) {
            this.root = new Node(value)
            return "Root added"
        }

        return this.root.add(value)
    }
}

var tree = new BinarySearchTree()

// tree.root = new Node(10)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)
// tree.root.right = new Node(15)

console.log(tree.add(14))
console.log(tree.add(12))
console.log(tree.add(13))
console.log(tree.add(15))
console.log(tree.add(16))
console.log(tree.add(16))
console.log(tree.add(14))
console.log()
console.log(tree)
console.log()
console.log(tree.find(14))
console.log(tree.contains(14))

