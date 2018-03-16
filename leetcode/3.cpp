#include <iostream>

using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int a[256] = {0};
        int llsLength = 0;
        for (int i = 1, j = 1; i <= s.length(); i++, j++) {
            j = j < (i - a[s[i - 1]]) ? j : (i - a[s[i - 1]]);
            cout << s[i - 1] << ' ' << j << ' ' << endl;
            llsLength = llsLength > j ? llsLength : j;
            a[s[i - 1]] = i;
        }

        return llsLength;
    }
};

int main() {
    Solution s = Solution();
    string t = "abcabcba";
    int r = s.lengthOfLongestSubstring(t);
    cout << r << endl;
}
