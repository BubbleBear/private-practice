// assume it's a standard sudoku for simplicity
// O(m^2)
function isSudoku(sudoku, ignores = []) {
    for (let i = 0; i < sudoku.length; i++) {
        const rowSet = new Set();
        const columnSet = new Set();

        for (let j = 0; j < sudoku[0].length; j++) {
            const rowBasedValue = parseInt(sudoku[i][j]);
            const columnBasedValue = parseInt(sudoku[j][i]);

            if (!ignores.includes(rowBasedValue)) {
                if (rowBasedValue < 0 || rowBasedValue > 9 || rowSet.has(rowBasedValue)) {
                    return false;
                }
    
                rowSet.add(rowBasedValue);
            }

            if (!ignores.includes(columnBasedValue)) {
                if (columnBasedValue < 0 || columnBasedValue > 9 || columnSet.has(columnBasedValue)) {
                    return false;
                }
                
                columnSet.add(columnBasedValue);
            }
        }
    }

    for (let offseti = 0; offseti < sudoku.length; offseti += 3) {
        for (let offsetj = 0; offsetj < sudoku[0].length; offsetj += 3) {
            const squareSet = new Set();

            for (let i = 0; i < 9; i++) {
                const value = parseInt(sudoku[i % 3 + offseti][Math.floor(i / 3) + offsetj]);

                if (!ignores.includes(value)) {
                    if (value < 0 || value > 9 || squareSet.has(value)) {
                        return false;
                    }
    
                    squareSet.add(value);
                }
            }
        }
    }

    return true;
}

function arr2matrix(arr, step = 9) {
    const matrix = [];
    let row = [];

    for (let i = 0; i < arr.length; i++) {
        if (i && i % step === 0) {
            matrix.push(row);
            row = [];
        }

        row.push(arr[i]);
    }

    matrix.push(row);

    return matrix;
}

function dfsSudoku(sudoku, cursor = 0) {
    if (cursor == 81) {
        return isSudoku(sudoku);
    }

    if (sudoku[Math.floor(cursor / 9)][cursor % 9] == 0) {
        for (let i = 1; i <= 9; i++) {
            sudoku[Math.floor(cursor / 9)][cursor % 9] = i;

            if (!isSudoku(sudoku, [0])) {
                continue;
            }

            const complete = dfsSudoku(sudoku, cursor + 1);

            if (complete) {
                return true;
            }
        }

        sudoku[Math.floor(cursor / 9)][cursor % 9] = 0;
    } else {
        const complete = dfsSudoku(sudoku, cursor + 1);

        if (complete) {
            return true;
        }
    }

    return false;
}

const sudokus = [
    [
        [0, 0, 0, 0, 4, 0, 5, 3, 0],
        [3, 0, 0, 6, 1, 5, 0, 4, 0],
        [0, 0, 1, 0, 0, 0, 0, 2, 6],
        [7, 0, 0, 9, 2, 8, 6, 0, 0],
        [0, 0, 9, 4, 0, 1, 3, 0, 0],
        [0, 0, 4, 3, 5, 6, 0, 0, 9],
        [6, 3, 0, 0, 0, 0, 8, 0, 0],
        [0, 2, 0, 5, 6, 7, 0, 0, 3],
        [0, 1, 5, 0, 8, 0, 0, 0, 0],
    ],
    [
        [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
        [ '4', '5', '6', '7', '8', '9', '1', '2', '3' ],
        [ '7', '8', '9', '1', '2', '3', '4', '5', '6' ],
        [ '2', '1', '4', '3', '6', '5', '8', '9', '7' ],
        [ '3', '6', '5', '8', '9', '7', '2', '1', '4' ],
        [ '8', '9', '7', '2', '1', '4', '3', '6', '5' ],
        [ '5', '3', '1', '6', '4', '2', '9', '7', '8' ],
        [ '6', '4', '2', '9', '7', '8', '5', '3', '1' ],
        [ '9', '7', '8', '5', '3', '1', '6', '4', '2' ]
    ],
    [
        [ '1', '2', 1, '4', '5', '6', '7', '8', '9' ],
        [ '4', 0, '6', '7', '8', '9', '1', '2', 0 ],
        [ '7', '8', '9', '1', '2', 0, '4', 0, '6' ],
        [ '2', '1', '4', 0, '6', 0, '8', '9', '7' ],
        [ 0, '6', 0, '8', '9', '7', '2', '1', '4' ],
        [ '8', '9', '7', '2', '1', '4', 0, '6', '5' ],
        [ '5', 0, '1', '6', '4', '2', '9', '7', '8' ],
        [ '6', '4', '2', '9', '7', '8', '5', 0, '1' ],
        [ '9', '7', '8', '5', '3', '1', '6', '4', '2' ]
    ],
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
];

sudokus.forEach((sudoku, i) => {
    console.log(`sudoku # ${i}`);

    const a = dfsSudoku(sudoku);

    console.log(sudoku);

    console.log(a);
});
