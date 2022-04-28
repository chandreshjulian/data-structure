class NaivePriorityQueue {
  constructor() {
    this.queue = []
  }

  enqueue(val, priority) {
    this.queue.push({ val, priority })
    this.sort()
  }

  dequeue() {
    const extract = this.queue.shift()
    return extract
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority)
  }
}

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.queue = []
  }

  enqueue(element, priority) {
    this.queue.push(new Node(element, priority))
    this.#bubbleUp(this.queue.length - 1)
  }

  dequeue() {
    const handled = this.queue[0]
    if(!this.queue.length)
      return 'No Patient'
    else if(this.queue.length === 1)
      this.queue.pop()
    else {
      this.queue[0] = this.queue.pop()
      this.#bubbleDown(0)
    }

    return handled
  }

  #bubbleDown(index) {
    const leftChildIndex = (2 * index) + 1 // to find left child
    const rightChildIndex = (2 * index) + 2 // to find right child

    if(!this.queue[leftChildIndex] || !this.queue[rightChildIndex])
      return

    // if(!this.queue[rightChildIndex])
    //   return

    const element = this.queue[index]
    const elementPriority = element.priority
    const leftChildPriority = this.queue[leftChildIndex].priority
    const rightChildPriority = this.queue[rightChildIndex].priority
    let temp

    if(leftChildPriority < rightChildPriority && leftChildPriority < elementPriority) {
      temp = this.queue[leftChildIndex]
      this.queue[leftChildIndex] = element
      this.queue[index] = temp
      this.#bubbleDown(leftChildIndex)
    } else if (rightChildPriority < leftChildPriority && rightChildPriority < elementPriority) {
      temp = this.queue[rightChildIndex]
      this.queue[rightChildIndex] = element
      this.queue[index] = temp
      this.#bubbleDown(rightChildIndex)
    }
  }

  #bubbleUp(index) {
    const parentIndex = Math.floor((index-1)/2) // to find the parent

    if(!this.queue[parentIndex])
      return

    const childPriority = this.queue[index].priority
    const parentPriority = this.queue[parentIndex].priority

    if(this.queue[parentIndex] && childPriority < parentPriority) { // less priority is higher
      const temp = this.queue[parentIndex]
      this.queue[parentIndex] = this.queue[index]
      this.queue[index] = temp
      this.#bubbleUp(parentIndex)
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex])
    this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2,  weight})
    this.adjacencyList[vertex2].push({ node: vertex1,  weight})
  }

  dijkstra(start, end) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    const path = []
    let smallest = null

    // building initial state
    for(let vertex in this.adjacencyList) {
      if(vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      }
      else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }

    console.log(nodes)

    while(nodes.queue.length) {
      smallest = nodes.dequeue().val
      if(smallest === end) {
        while(previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }

      if(smallest || distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].forEach(neighbor => {
          let candidate = distances[smallest] + neighbor.weight
          if(candidate < distances[neighbor.node]) {
            distances[neighbor.node] = candidate
            previous[neighbor.node] = smallest
            nodes.enqueue(neighbor.node, candidate)
          }
        });
      }
    }

    path.push(smallest)
    return path.reverse()
  }
}

const graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("D", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("E", "F", 1)
graph.addEdge("D", "F", 1)

console.log(graph)

console.log(graph.dijkstra("A", "E"))