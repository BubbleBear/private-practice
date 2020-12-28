function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0) return null;

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);
    const inorderRootIndex = inorder.indexOf(rootVal);

    preorder.shift();
    const left = inorder.slice(0, inorderRootIndex);
    const right = inorder.slice(inorderRootIndex + 1, inorder.length);

    root.left = buildTree(preorder, left);
    root.right = buildTree(preorder, right);

    return root;
};

const a = buildTree([3,20,15,7,9], [15,20,7,3,9]);

console.log(a);
