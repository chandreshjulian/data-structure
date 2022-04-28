## Dijkstra Algorithm
to find the shortest path from point A to point B

### Weighted Graph
```
adjacencyList

{
  A: [{ node: B, weight: 8}, { node: D, weight: 2}]
  B: [{ node: A, weight: 8}, { node: D, weight: 4}]
  C: [{ node: D, weight: 4}]
  D: [{ node: A, weight: 2}, { node: B, weight: 4}, { node: C, weight: 4}]
}
```

### Variables needed:
```
Visited: []
Previous: {
  A: null
  B: A
  C: A
  ...
}
ShortestDistance: {
  A: 0
  B: 4
  C: 2
  ...
}
```