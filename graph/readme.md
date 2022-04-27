## Terms of graphs:
- Vertex - a node
- Edge - connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - directions assigned to distanced between vertices

## Types of storing data for graph
- Adjacency List
  - Add vertex: 1
  - Add edge: 1
  - Remove vertex: V+E
  - Remove edge: E
  - Query: V+E
  - Storage: V+E

  ```
    A: [B, E]
    B: [A, C]
    C: [B, D]
    D: [C, E]
    E: [D, A]
  ```

- Adjacency Array
  - Add vertex: V^2
  - Add edge: 1
  - Remove vertex: V^2
  - Remove edge: 1
  - Query: 1
  - Storage: V^2

  ```
    - A B C D E
    A 0 1 0 0 1
    B 1 0 1 0 0
    C 0 1 0 1 0
    D 1 0 0 0 1
    E 1 0 0 1 0
  ```