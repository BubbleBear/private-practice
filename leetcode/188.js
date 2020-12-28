/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    // prices.push(-1);

    // const diffs = [];

    // for (let i = 0, j = 0; i < prices.length; i++) {
    //     if (prices[i + 1] > prices[i]) {
    //         continue;
    //     } else {
    //         const diff = prices[i] - prices[j];
    //         diff && diffs.push(prices[j], prices[i]);
    //         j = i + 1;
    //     }
    // }

    // k = Math.min(k, diffs.length);

    // function dp(i, j) {
    //     if (j > i + 1) return -Infinity;
    //     if (j === 0) return 0;
    //     return Math.max(dp(i - 1, j), dp(i - 1, j - 1) + Math.pow(-1, j % 2) * prices[i]);
    // }

    // return dp(prices.length - 1, k * 2);

    const dp = Array(prices.length + 1).fill().map(() => Array(k * 2 + 1).fill(-Infinity));
    dp[0][0] = 0;

    // console.log(dp);

    for (let i = 1; i <= prices.length; ++i) {
        for (let j = 1; j <= k * 2; ++j) {
            if (j > i + 1) {
                break;
            }

            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + Math.pow(-1, j % 2) * prices[i - 1]);
        }
    }

    return dp[prices.length].reduce((acc, cur) => Math.max(acc, cur), 0);
};

var maxProfit1 = function(k, prices) {
    const diffs = Array(prices.length).fill().map(() => Array(prices.length).fill(0));

    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j < i; j++) {
            diffs[j][i] = prices[i] - prices[j]
        }
    }

    return diffs;
}

const cases = [
    // [2, [2, 4, 1]],                         // 2
    [2, [3, 2, 6, 5, 0, 3]],                // 6
    // [2, [2, 4, 1, 5, 0, 6]],                // 10
    // [2, [0, 1, 2, 3, 4, 5]],                // 5
    // [2, [0, 4, 0, 0, 1, 4]],                // 8
    // [2, [0, 1, 2, 0, 2, 1]],                // 4
    // [2, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]],    // 13
];

cases.forEach((v) => {
    const diffs = maxProfit(...v);
    // const a = diffs.map((v) => v.map((vi) => vi > 0 ? vi : 0).join(', '));

    // console.log(JSON.stringify(a, undefined, 4));
    console.log(diffs);
    console.log();
});
