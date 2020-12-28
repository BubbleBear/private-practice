/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let ans = 0;

    const reach = Array(m).fill().map(() => Array(n).fill(0));

    reach[0][0] = 1;

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (digitSum(i) + digitSum(j) <= k) {
                if (i > 0 && reach[i - 1][j]) {
                    reach[i][j] = reach[i - 1][j];
                }
                if (j > 0 && reach[i][j - 1]) {
                    reach[i][j] = reach[i][j - 1];
                }
                ans += reach[i][j];
            }
        }
    }

    return ans;
}

function digitSum(n) {
    let res = 0;

    while (n) {
        res += n % 10;
        n = Math.floor(n / 10);
    }

    return res;
}

const cases = [
    // [3, 2, 3],
    // [2, 2, 1],
    // [2, 3, 3],
    // [2, 3, 2],
    // [5, 2, 10],
    // [11, 8, 16],
    [16, 8, 4],
];

cases.forEach((v) => {
    const res = movingCount(...v);

    console.log(res);
    console.log();
});
