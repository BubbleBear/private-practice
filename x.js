/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];

    function recur(assembly = [], segment = 0, i = 0) {
        if (assembly.length === 4) {
            if (i === s.length) {
                result.push(assembly.join('.'));
            }

            return;
        }

        if (i === s.length) {
            return;
        }

        const next = segment * 10 + Number(s[i]);

        if (next > 255) {
            return;
        }

        recur([...assembly, next], 0, i + 1);

        if (next === 0) {
            return;
        }

        recur([...assembly], next, i + 1);
    }

    recur();

    return result;
};

const cases = [
    "25525511135",
    "0000",
    "1111",
    "010010",
    "101023",
];

cases.forEach((v, i) => {
    const r = restoreIpAddresses(v);
    console.log(r);
    console.log();
});
