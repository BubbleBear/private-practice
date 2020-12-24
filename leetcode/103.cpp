#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        vector<vector<int>> result;
        int level = 0;
        queue<TreeNode*> que;

        que.push(root);

        vector<int> *levelResult = new vector<int>;

        while (que.size()) {
            int size = que.size();
            for (int i = 0; i < size; i++) {
                TreeNode *current = que.front();
                que.pop();
                if (current == nullptr) {
                    continue;
                };

                que.push(current->left);
                que.push(current->right);

                levelResult->push_back(current->val);
            }

            if (level++ % 2) {
                reverse(levelResult->begin(), levelResult->end());
            }

            if (levelResult->size()) {
                result.push_back(*levelResult);
            }

            levelResult = new vector<int>;
        }

        return result;
    } 
};

int main() {
    TreeNode *root = new TreeNode(3);
    root->left = new TreeNode(9);
    TreeNode *right = root->right = new TreeNode(20);
    right->left = new TreeNode(15);
    right->right = new TreeNode(7);

    // TreeNode *root = new TreeNode(1);
    // TreeNode *left = root->left = new TreeNode(2);
    // TreeNode *right = root->right = new TreeNode(3);
    // left->left = new TreeNode(4);
    // left->right = new TreeNode(5);
    // right->left = new TreeNode(6);
    // right->right = new TreeNode(7);

    Solution s;
    vector<vector<int>> result = s.zigzagLevelOrder(root);

    for (auto v: result) {
        for (auto x: v) {
            cout << x << ' ';
        }
        cout << endl;
    }
}
