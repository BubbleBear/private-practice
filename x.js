/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    const wordSets = words.map((word) => new Set([...word]));
    const puzzleDescriptors = puzzles.map((puzzle) => ({ first: puzzle[0], set: new Set([...puzzle]) }));

    const results = [];

    for (let i = 0; i < puzzleDescriptors.length; ++i) {
        const { first, set } = puzzleDescriptors[i];

        let count = 0;

        for (let j = 0; j < wordSets.length; ++j) {
            const wordSet = wordSets[j];
            const word = [...wordSet];

            if (wordSet.has(first)) {
                let k = 0;

                while (k < word.length) {
                    if (!set.has(word[k])) {
                        break;
                    }

                    ++k;
                }

                if (k === word.length) {
                    ++count;
                }
            }
        }

        results.push(count);
    }

    return results;
};

const cases = [
    [
        ["aaaa","asas","able","ability","actt","actor","access"],
        ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"],
    ],
];

cases.forEach((v, i) => {
    const r = findNumOfValidWords(...v);
    console.log(r);
    console.log();
});
