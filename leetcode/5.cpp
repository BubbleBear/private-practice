#include <iostream>

using namespace std;

class Solution {
public:
    string longestPalindrome(string s) {
        string res, tmp;
        for (int i = 0; i < s.size(); i++) {
            tmp = this->grow(s, i, i);
            res = tmp.size() > res.size() ? tmp : res;
            // cout << res << endl;
            if (i > 0 && s[i - 1] == s[i]) {
                tmp = this->grow(s, i - 1, i);
                res = tmp.size() > res.size() ? tmp : res;
                // cout << res << endl;
            }
        }

        return res;
    }

private:
    string grow(string s, int kernell, int kernelr) {
        while (kernell > 0 && kernelr < s.size() - 1 && s[kernell - 1] == s[kernelr + 1]) {
            kernell--;
            kernelr++;
        }
        return s.substr(kernell, kernelr - kernell + 1);
    }
};

int main() {
    Solution sol;
    string test = "babadbbb";
    string res = sol.longestPalindrome(test);
    cout << res;
    return 0;
}
