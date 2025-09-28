// Adjacency List Representation
// An array of Lists is used to store edges between two vertices. The size of array is equal to the number of vertices (i.e, n). Each index in this array represents a specific vertex in the graph. The entry at the index i of the array contains a linked list containing the vertices that are adjacent to vertex i. Let's assume there are n vertices in the graph So, create an array of list of size n as adjList[n].

function addEdge(adj, i, j) {
    adj[i].push(j);
    adj[j].push(i); // Undirected
}

function displayAdjList(adj) {
    for (let i = 0; i < adj.length; i++) {
        console.log(`${i}: `); 
        for (const j of adj[i]) {
             console.log(`${j} `); 
        }
        console.log(); 
    }
}

// Create a graph with 4 vertices and no edges
const V = 4;
const adj = Array.from({ length: V }, () => []);

// Now add edges one by one
addEdge(adj, 0, 1);
addEdge(adj, 0, 2);
addEdge(adj, 1, 2);
addEdge(adj, 2, 3);

console.log("Adjacency List Representation:");
console.log(adj)
displayAdjList(adj);