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
}

const graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("San Francisco");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Tokyo", "San Francisco");
graph.addEdge("Tokyo", "Jumanji");
graph.addEdge("Dallas", "Jumanji");
graph.addEdge("San Francisco", "Jumanji");
// graph.removeEdge("Tokyo", "Jumanji");
graph.removeVertex("Jumanji");
console.log(graph.adjacentcyList);
