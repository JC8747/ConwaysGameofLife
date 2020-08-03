import produce from 'immer';

export function generateEmptyMatrix(numRows, numCols){
    const rows = []; // this will become the matrix
    const cols = [];


    for(let i=0; i < numCols; i++){
        cols.push(0);
    };
    for(let i=0; i < numRows; i++){
        rows.push(cols)
    }
    return rows
};

export function generateRandomMatrix(numRows, numCols){

    const matrix = generateEmptyMatrix(numRows, numCols);

    const randomMatrix = matrix.map(row => {
        return row.map(col => {
            if(Math.random() > .6){
                col = 1
            };
            return col
        })
    })

    return randomMatrix
};

export function generateNextMatrix(matrix) {
    const start = performance.now();
    const rows = matrix.length;
    const cols = matrix[0].length;
    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ];

    const newMatrix = produce(matrix, matrixCopy => {
        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                let activeNeighbors = 0;

                directions.forEach(d => {
                    const row = d[0]
                    const col = d[1]
                    if( r + row >= 0 &&
                        r + row < rows &&
                        c + col >= 0 &&
                        c + col < cols) {
                        if(matrix[r + row][c + col]){
                            activeNeighbors += 1
                        };
                    };
                });

                if(activeNeighbors < 2 || activeNeighbors > 3){
                    matrixCopy[r][c] = 0;
                } else if (activeNeighbors === 3){
                    matrixCopy[r][c] = 1;
                };
            };
        };
    });
    const end = performance.now();
    return newMatrix
};

export function preset(matrix, cb, presetStr){

}