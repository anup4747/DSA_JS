// DFS from a Given Source of Undirected Graph

// The algorithm starts from a given source and explores all reachable vertices from the given source. It is similar to Preorder Tree Traversal 
// where we visit the root, then recur for its children. In a graph, there might be loops. 
// So we use an extra visited array to make sure that we do not process a vertex again.

function dfsRec(adj, visited, s, res) {
    visited[s] = true;
    res.push(s);

    // recursively visit al adjacent verices that are not visited yet
    for (let i = 0; i < adj.length; i++) {
        if (adj[s][i] === 1 && !visited[i]) {
            console.log(s , " " , i )
            console.log(adj[s][i])
            dfsRec(adj, visited, i, res);
        }
    }
}

function dfsTransversal(adj) {
    let V = adj.length;
    let visited = new Array(V).fill(false);
    let res = [];
    dfsRec(adj, visited, 0, res); // start dfs from vertex 0
    return res;
}

function addEdge(adj, s, t) {
    adj[s][t] = 1;
    adj[t][s] = 1; // Since it's an undirected graph
}

let V = 5;
// Define the edges of the graph
let adj = Array.from({ length: V }, () => new Array(V).fill(0))

// indexs
let edges = [[1, 2], [1, 0], [2, 0], [2, 3], [2, 4]];

// Populate the adjacency matrix with edges
edges.forEach(([s, t]) => addEdge(adj, s, t))

// console.log(adj)

// Perform DFS
let res = dfsTransversal(adj)

console.log(res)