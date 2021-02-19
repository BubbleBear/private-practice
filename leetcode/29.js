/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const lowerBound = -(1<<31>>>0);
    const upperBound = (1<<31>>>0) - 1;
    const polar = (dividend ^ divisor) >= 0;
    const absDividend = Math.abs(dividend);
    const absDivisor = Math.abs(divisor);

    const absResult = Math.floor(Math.exp(Math.log(absDividend) - Math.log(absDivisor)));

    const result = polar ? absResult : -absResult;

    if (result < lowerBound || result > upperBound) {
        return upperBound;
    }

    return result;
};

const lowerBound = -(1<<31>>>0);
const upperBound = 1<<31>>>0 - 1;

const cases = [
    [0, 1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [lowerBound, 1],
    [lowerBound, -1]
];

cases.forEach(([a, b]) => console.log(divide(a, b)));
