// DFS for Complete Traversal of Disconnected Undirected Graph
//The above implementation takes a source as an input and prints only those vertices that are reachable from the source and 
// would not print all vertices in case of disconnected graph. 
// Let us now talk about the algorithm that prints all vertices without any source and the graph maybe disconnected. 

function addEdge(adj,s,t){
    adj[s].push(t);
    adj[t].push(s);
}

// Recursive function for DFS traversal
function dfsRec(adj, visited, s, res){
    visited[s] = true;
    res.push(s);
     // Recursively visit all adjacent vertices that are not visited yet
    for (let i of adj[s]){
        if (!visited[i])
            dfsRec(adj, visited, i, res)
    }
}

// Main DFS function to perform DFS for the entire graph
function dfsTransversal(adj){
    let visited = new Array(adj.length).fill(false);
    let res = [];

    // Loop through all vertices to handle disconnected graphs
    for (let i = 0; i < adj.length; i++){
        if (!visited[i]){
            dfsRec(adj, visited, i, res)
        }
    }
    return res; 
}

let V = 6; 
let adj = Array.from({length: V}, () => [])
let edges = [[1, 2], [2, 0], [0, 3], [4, 5]];

// Populate the adjacency list with edges
for (const e of edges){
    addEdge(adj, e[0], e[1]);
}

console.log(adj)

let res = dfsTransversal(adj)
console.log("DFS Transversal : ",res)