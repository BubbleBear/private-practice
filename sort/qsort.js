function quicksort(target, lower = 0, upper = target.length, { partition = lumoto, getPivot } = {}) {
    if (lower < upper) {
        const partitionIndex = partition(target, lower, upper, { getPivot });
        quicksort(target, lower, partitionIndex - 1);
        quicksort(target, partitionIndex + 1, upper);
    }
}

// partition
function lumoto(target, lower, upper, { getPivot = (target, lower, upper) => target[upper - 1] } = {}) {
    const pivot = getPivot(target, lower, upper);

    let partitionIndex = lower;

    for (let i = lower; i < upper - 1; i++) {
        if (target[i] < pivot) {
            swap(target, i, partitionIndex);
            partitionIndex++;
        }
    }

    return partitionIndex;
}

function hoare(target, lower, upper, { getPivot = (target, lower, upper) => target[(lower + upper - 1) / 2] }) {}

function swap(array, indexa, indexb) {
    const temp = array[indexa];
    array[indexa] = array[indexb];
    array[indexb] = temp;
}

if (require.main === module) {
    const cases = [
        Array(10).fill().map((_, index) => index + 1),
        Array(9).fill().map((_, index) => index + 1),
        Array(10).fill().map(() => 0),
        Array(10).fill().map((_, index) => index + 1).reverse(),
    ];

    cases.forEach((testCase, index) => {
        const clonedCase = Array.from(testCase);
        console.log(`test against case #${index}: `);
        console.log(`origin: ${testCase}`);
        quicksort(clonedCase);
        console.log(`sorted: ${clonedCase}`);
        console.log(`origin: ${testCase}`);
        console.log();
    });
}
