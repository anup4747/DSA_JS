// The below implementation takes a source as an input and prints only those vertices that are reachable from the source and  would not print all vertices in case of disconnected graph. 

function bfsTransversal(adj) {
    let V = adj.length;
    let s = 0; // source node is 0
    let res = []; // array to store transversal
    // create a queue for BFS
    let q = [];

    // initially mark all the vertices as not visited
    let visited = new Array(V).fill(false);
    // Mark source code as visited and enqueue it
    visited[s] = true;
    q.push(s);

    while (q.length > 0) {
        // Dequeue a vertex from queue and store it
        let curr = q.shift();
        res.push(curr)
        // console.log(res)

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

let adj = [[1, 2], [0, 2, 3], [0, 4], [1, 4], [2, 3]];
let ans = bfsTransversal(adj)
for (let i of ans) {
    process.stdout.write(i + " ");
}