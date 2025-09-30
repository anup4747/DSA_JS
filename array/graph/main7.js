// JavaScript Program to find the minimum time
// in which all oranges will get rotten

function isSafe(i, j, n, m) {
    return i >= 0 && i < n && j >= 0 && j < m;
}

function orangesRotting(mat) {
    let n = mat.length;
    let m = mat[0].length;

    // to check if any changes are made
    let changed = false;

    // counter of elapsed time
    let elapsedTime = 0;

    // all four directions
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    // iterate until changes are there
    while (true) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {

                // check if the cell was marked in last iteration
                if (mat[i][j] === elapsedTime + 2) {

                    // change 4-directionally connected cells
                    for (const dir of directions) {
                        let x = i + dir[0];
                        let y = j + dir[1];

                        // if cell is in the matrix and
                        // the orange is fresh
                        if (isSafe(x, y, n, m) && mat[x][y] === 1) {
                            mat[x][y] = mat[i][j] + 1;
                            changed = true;
                        }
                    }
                }
            }
        }

        // if no changes are done
        if (!changed) break;
        changed = false;
        elapsedTime++;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {

            // if any orange is found
            // not rotten, return -1
            if (mat[i][j] === 1) return -1;
        }
    }

    return elapsedTime;
}

// Driver Code
const mat = [
    [2, 1, 0, 2, 1], [1, 0, 1, 2, 1], [1, 0, 0, 2, 1] 
];

console.log(orangesRotting(mat));