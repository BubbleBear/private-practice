/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let e = 0, dot = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '+' || s[i] === '-') {
            if (isDigit(s[i + 1]) === false) {
                return false;
            }
            
            continue;
        }

        if (s[i] === '.') {
            if (isDigit(s[i - 1]) === false || isDigit(s[i + 1]) === false) {
                return false;
            }

            if (dot) {
                return false;
            }

            ++dot;

            continue;
        }
        
        if (s[i] === 'e' || s[i] === 'E') {
            const a = isDigit(s[i - 1]) === false;
            const b = isDigit(s[i + 1]) === false;
            const c = s[i + 1] !== '+' && s[i + 1] !== '-';
            if ((isDigit(s[i - 1]) === false || isDigit(s[i + 1]) === false) && s[i + 1] !== '+' && s[i + 1] !== '-') {
                return false;
            }

            if (e) {
                return false;
            }

            ++e;
            ++dot;

            continue;
        }

        if (isDigit(s[i]) === false) {
            return false;
        }
    }

    return true;
};

function isDigit(x) {
    const n = parseInt(x);
    return typeof n === 'number' && !Number.isNaN(n);
}

const cases = [
    " ",
    "0",
    "+100",
    "5e2",
    "-123",
    "3.1416",
    "-1E-16",
    "0123",
    "12e",
    "1a3.14",
    "1.2.3",
    "+-5",
    "12e+5.4",
];

cases.forEach((v) => {
    const res = isNumber(v);

    console.log(v, res);
    console.log();
})
