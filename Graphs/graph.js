class Graph {
  constructor() {
    this.adjacentcyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentcyList[vertex]) this.adjacentcyList[vertex] = [];
  }
  addEdge(vertex, connector) {
    if (Object.keys(this.adjacentcyList).includes(connector)) {
      this.adjacentcyList[vertex].push(connector);
      this.adjacentcyList[connector].push(vertex);
    } else {
      this.addVertex(connector);
      this.adjacentcyList[vertex].push(connector);
      this.adjacentcyList[connector].push(vertex);
    }
  }

  removeEdge(v1, v2) {
    this.adjacentcyList[v1] = this.adjacentcyList[v1].filter(
      (ele) => ele !== v2
    );
    this.adjacentcyList[v2] = this.adjacentcyList[v2].filter(
      (ele) => ele !== v1
    );
  }

  removeVertex(vertex) {
    while (this.adjacentcyList[vertex].length) {
      const adjacentVertex = this.adjacentcyList[vertex][0]; // Always get the first element
      this.removeEdge(vertex, adjacentVertex); // Remove edge with that vertex
    }
    delete this.adjacentcyList[vertex];
    // for (let i = 0; i < this.adjacentcyList[vertex].length; i++) {
    //   const adjacentVertex = this.adjacentcyList[vertex][i];
    //   this.removeEdge(vertex, adjacentVertex);
    // }

    // // Finally, delete the vertex from the adjacency list
    // delete this.adjacentcyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacentcyList = this.adjacentcyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacentcyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);
    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacentcyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacentcyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("A", "B");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(graph.breadthFirst("A"));
