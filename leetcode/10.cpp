#include <iostream>

using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        cout << s << ' ' << p << ' ';
        for (int i = 0, j = 0; i < s.size(); i++, j++) {
            if (j >= p.size()) {
                cout << "no" << endl;
                return false;
            }
            if (p[j] == '*') {
                j--;
            }
            if (s[i] == p[j]) continue;
            if (p[j] == '.') continue;
            cout << "no" << endl;
            return false;
        }

        cout << "yes" << endl;
        return true;
    }
};

int main() {
    Solution sol;
    sol.isMatch("aa", "a");
    sol.isMatch("aa", "aa");
    sol.isMatch("aa", ".");
    sol.isMatch("aa", ".*");
    sol.isMatch("ab", "a*");
    sol.isMatch("ab", ".*");
    sol.isMatch("aab", "c*a*b");
    return 0;
}
