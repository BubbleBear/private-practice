#include <iostream>

using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int a[256] = {0}, b[256] = {0};
        int llsLength = 0, cursor = 0;
        for (int i = 0, j = 1; i < s.length(); i++) {
            if (a[s[i]] && b[s[i]] >= cursor) {
                j -= a[s[i]];
                cursor = i;
            }
            cout << s[i] << ' ' << j << endl;
            llsLength = llsLength > j ? llsLength : j;
            a[s[i]] = j;
            b[s[i]] = i;
        }

        return llsLength;
    }
};

int main() {
    Solution s = Solution();
    string t = "abcabcbb";
    int r = s.lengthOfLongestSubstring(t);
    cout << r << endl;
}
