/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    const rope = [0, 0, 1];

    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= i / 2; ++j) {
            rope[i] = Math.max(rope[i] || 0, Math.max(rope[j], j) * Math.max(rope[i - j], i - j)) % 1000000007;
        }
    }

    return rope[n];
};

const cases = [
    100,    // 703522804
    101,    // 55284199
    102,    // 582926301
];

cases.forEach((v) => {
    const a = cuttingRope(v);

    console.log(a);
    console.log();
});
