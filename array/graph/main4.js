// Let us see the algorithm that prints all vertices without any source and  the graph maybe disconnected. 

// The algorithm is simple, instead of calling BFS for a single vertex, we call the above implemented BFS for all not yet visited vertices one by one. 

function bfsOfGraph(adj, s, visited, res) {

    // Create a queue for BFS
    let q = [];

    // Mark source node as visited and enqueue it
    visited[s] = true;
    q.push(s);

    // Iterate over the queue
    while (q.length > 0) {

        // Dequeue a vertex and store it
        let curr = q.shift();
        res.push(curr);

        // Get all adjacent vertices of the dequeued 
        // vertex curr If an adjacent has not been 
        // visited, mark it visited and enqueue it
        for (let x of adj[curr]) {
            if (!visited[x]) {
                visited[x] = true;
                q.push(x);
            }
        }
    }
    return res;
}

function bfsDisconnected(adj) {
    let V = adj.length;
    // create an array to store the traversal
    let res = [];
    // Initially mark all the vertices as not visited
    let visited = new Array(V).fill(false);
    // perform BFS for each node
    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            bfsOfGraph(adj, i, visited, res);
        }
    }
    return res;
}

// Main execution
let adj = [[1, 2], [0], [0], [4], [3, 5], [4]];
let ans = bfsDisconnected(adj);
for (let i of ans) {
    process.stdout.write(i + " ");
}
