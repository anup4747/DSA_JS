function addEdge(mat, i, j) {
    mat[i][j] = 1; // Graph is 
    mat[j][i] = 1; // undirected
}

function displayMatrix(mat) {
    // Display the adjacency matrix
    for (const row of mat) {
        console.log(row.join(" ")); 
    }
}

const V = 4; // Number of vertices

 // Initialize matrix
let mat = Array.from({ length: V }, () => Array(V).fill(0));

// Add edges to the graph
addEdge(mat, 0, 1);
addEdge(mat, 0, 2);
addEdge(mat, 1, 2);
addEdge(mat, 2, 3);

// Display adjacency matrix
console.log("Adjacency Matrix:");
console.log(mat)
displayMatrix(mat);