function topoSort(graph) {
    const indegrees = Array(graph.length).fill(0);
    const sorted = [];

    graph.forEach((row, from) => {
        row.forEach((pointing, to) => {
            pointing && indegrees[to]++;
        });
    });

    for (let i = 0; i < indegrees.length; i++) {
        for (let j = 0; j < indegrees.length; j++) {
            if (indegrees[j] === 0) {
                indegrees[j]--;
                sorted.push(j);

                for (let k = 0; k < indegrees.length; k++) {
                    if (graph[j][k]) {
                        indegrees[k]--;
                    }
                }
            }
        }
    }

    return sorted;
}

if (require.main === module) {
    const graphs = [
        [
            [0, 1, 1, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 1, 0],
        ],
    ];

    graphs.forEach((graph) => {
        const sorted = topoSort(graph);

        console.log(sorted);
    });
}
