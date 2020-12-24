/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const result = [];

    const board = Array(n).fill().map(() => Array(n).fill('.'));
    _solveNQueens(result, board, 0);

    return result;
};

function _solveNQueens(result, board, row, prevCovered) {
    const n = board.length;

    if (row === n) {
        result.push(board.map((v) => v.join('')));
        return;
    }

    if (prevCovered === undefined) {
        prevCovered = Array(n).fill().map(() => Array(n).fill(0))
    }

    for (let i = 0; i < n; i++) {
        if (prevCovered[row][i]) {
            continue;
        }

        board[row][i] = 'Q';
        const covered = coverMove(board);
        const legal = noCollision(covered);

        if (legal) {
            _solveNQueens(result, board, row + 1, covered);
        }

        board[row][i] = '.';
    }
}

function coverMove(board) {
    const n = board.length;
    const covered = Array(n).fill().map(() => Array(n).fill(0));

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (board[i][j] === 'Q') {
                for (let k = 0; k < n; ++k) {
                    covered[i][k]++;
                    covered[k][j]++;

                    if (i - k >= 0 && j - k >= 0) {
                        covered[i - k][j - k]++;
                    }

                    if (i + k < n && j + k < n) {
                        covered[i + k][j + k]++;
                    }

                    if (i - k >= 0 && j + k < n) {
                        covered[i - k][j + k]++;
                    }

                    if (i + k < n && j - k >= 0) {
                        covered[i + k][j - k]++;
                    }
                }
            }
        }
    }

    return covered;
}

function noCollision(covered) {
    const n = covered.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (covered[i][j] > 6) {
                return false;
            }
        }
    }

    return true;
}

const coverMoveCases = [
    [
        "....",
        "....",
        "Q...",
        "..Q."
    ],
    [
        "..Q.",
        "Q...",
        "...Q",
        ".Q.."
    ],
    [
        "Q.......",
        "..Q.....",
        "....Q...",
        "......Q.",
        ".Q......",
        "...Q....",
        ".....Q..",
        ".......Q",
    ],
];

const result = solveNQueens(5);
const formatted = JSON.stringify(result, undefined, 4);

console.log(formatted);
console.log();
