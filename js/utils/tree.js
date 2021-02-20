class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = this.right = null;
    }
}

function array2BinaryTree(arr) {
    if (arr.length === 0) {
        return null;
    }

    const root = new BinaryTreeNode(arr[0]);
    const queue = [root];

    let cur = null;
    let index = 1;

    while (queue.length) {
        cur = queue.shift();

        if (!cur) {
            continue;
        }

        if (arr[index] !== null && arr[index] !== undefined) {
            cur.left = new BinaryTreeNode(arr[index]);
        }

        if (arr[index + 1] !== null && arr[index + 1] !== undefined) {
            cur.right = new BinaryTreeNode(arr[index + 1]);
        }

        index += 2;
        queue.push(cur.left);
        queue.push(cur.right);
    }

    return root;
}

module.exports = {
    array2BinaryTree,
};

if (require.main === module) {
    // const a = [1,null,2,3];
    // const a = [1];
    const a = [1, 2, 3, null, 4, null, 5, null, null, 6, null, 7, null, null, 8]
    const r = array2BinaryTree(a);

    console.dir(r, {
        depth: null,
    });
}
