const partitionOffsetEnum = {
    lumoto: 0,
    hoare: 1,
};

function quicksort(target, lower = 0, upper = target.length, { partition = hoare, getPivot } = {}) {
    if (lower < upper - 1) {
        const partitionIndex = partition(target, lower, upper, { getPivot });
        quicksort(target, lower, partitionIndex);
        quicksort(target, partitionIndex + 1, upper);

        // console.log(`partitionIndex: ${partitionIndex}`);
        // console.log(`left: `, target.slice(lower, partitionIndex + partitionOffsetEnum[partition.name]));
        // console.log(`right: `, target.slice(partitionIndex + 1, upper));
    }
}

// partition
function lumoto(target, lower, upper, { getPivot = (target, lower, upper) => target[upper - 1] }) {
    const pivot = getPivot(target, lower, upper);

    let partitionIndex = lower;

    for (let i = lower; i < upper - 1; i++) {
        if (target[i] < pivot) {
            swap(target, i, partitionIndex);
            partitionIndex++;
        }
    }

    swap(target, partitionIndex, upper - 1);

    return partitionIndex;
}

function hoare(target, lower, upper, { getPivot = (target, lower, upper) => target[Math.floor((lower + upper - 1) / 2)] }) {
    const pivot = getPivot(target, lower, upper);

    let i = lower - 1, j = upper;

    while (true) {
        while (target[++i] < pivot);
        while (target[--j] > pivot);

        if (i >= j) {
            return j;
        }

        swap(target, i, j);
    }
}

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
        [5, 2, 9, 4, 3, 8, 7, 10, 1, 6],
    ];

    cases.forEach((testCase, index) => {
        const clonedCase = Array.from(testCase);
        console.log(`test against case #${index + 1}: `);
        console.log(`origin: ${testCase}`);
        console.log(`sorted: ${quicksort(clonedCase), clonedCase}`);
        console.log();
    });
}
