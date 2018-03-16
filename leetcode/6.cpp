#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    string convert(string s, int numRows) {
        this->init(s, numRows);

        string res;
        int cursor = 0;
        
        while (res.length() < s.length()) {
            res.push_back(s[cursor]);
            this->table[cursor] = false;
            cursor = this->getNext(cursor);
        }

        return res;
    }

private:
    int period;
    vector<bool> table;

    void init(string s, int numRows) {
        this->period = (numRows - 1) * 2;
        if (this->period == 0) this->period++;
        this->table.assign(s.length(), true);
    }

    int getNext(int cur) {
        int res = this->period - cur;
        while (res <= cur) res += this->period;
        if (res >= this->table.size()) {
            res = 0;
            while (this->table[res] == false) res++;
        }
        return res;
    }
};

int main() {
    string s("PAYPALISHIRING");
    Solution sol;
    string r = sol.convert(s, 3);
    cout << r;
    return 0;
}
