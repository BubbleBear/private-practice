#include <iostream>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int firstUniqChar(string s) {
        unordered_map<char, int> m;
        unordered_map<char, int>::iterator it;
        int leastIndex = s.size();

        for (int i = 0; i < s.size(); i++) {
            it = m.find(s[i]);

            if (it != m.end()) {
                m[s[i]] = -1;
            } else {
                m[s[i]] = i;
            }
        }

        for (it = m.begin(); it != m.end(); ++it) {
            int v = it->second;

            if (v != -1) {
                leastIndex = leastIndex < v ? leastIndex : v;
            }
        }

        return leastIndex == s.size() ? -1 : leastIndex;
    }
};

int main() {
    Solution solution;

    string s = "loveleetcodev";

    int index = solution.firstUniqChar(s);

    cout << index << endl;
}
