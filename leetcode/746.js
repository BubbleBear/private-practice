/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    for (let i = 2; i < cost.length; i++) {
        cost[i] += Math.min(cost[i - 2], cost[i - 1]);
    }

    return Math.min(cost[cost.length - 2] || 0, cost[cost.length - 1] || 0);
};

const cases = [
    [10, 15, 20],
    [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
    [],
    [1],
];

cases.forEach((v, i) => {
    console.log(`case # ${i}`);
    const result = minCostClimbingStairs(v);
    console.log(result);
    console.log();
});
