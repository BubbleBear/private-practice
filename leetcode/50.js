/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return n > 0 ? qp(x, n) : 1 / qp(x, -n);
};

function qp(x, n) {
    if (n == 0) {
        return 1;
    }

    const halfPow = myPow(x, Math.floor(n / 2));
    return halfPow * halfPow * (n % 2 ? x : 1);
}


const cases = [
    // [2.00000, 10],
    // [2.10000, 3],
    // [2.00000, -2],
    // [0, 10],
    // [10, 0],
    // [-100, Math.pow(2, 31) - 1],
    [8.84372, -5],
    [2, 10],
    [2, 5],
];

cases.forEach(([x, n], i) => {
    console.log(`case # ${i}`);

    console.log(x, n);

    console.log(myPow(x, n));

    console.log();
});
