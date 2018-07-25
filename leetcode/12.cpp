#include <iostream>
#include <vector>
#include <cmath>
#include <sstream>

using namespace std;

class Solution {
public:
    string intToRoman(int num) {
        stringstream roman;

        while (num / 1000) {
            roman << 'M';
            num -= 1000;
        }

        if (num / 100) {
            roman << this->subRoman(num / 100, "C", "D", "M");
            num %= 100;
        }

        if (num / 10) {
            roman << this->subRoman(num / 10, "X", "L", "C");
            num %= 10;
        }

        roman << this->subRoman(num, "I", "V", "X");

        return roman.str();
    }

private:
    string subRoman(int num, string low, string mid, string high) {
        string roman;

        switch (num) {
            case 3: roman += low;
            case 2: roman += low;
            case 1: roman += low; break;
            case 4: roman += low;
            case 5: roman += mid; break;
            case 8: roman += low;
            case 7: roman += low;
            case 6: roman.insert(0, mid += low); break;
            case 9: roman += low;
            case 10: roman += high; break;
            default: break;
        }

        return roman;
    }
};

int main() {
    Solution s;
    
    string r = s.intToRoman(1000);

    cout << r;
}
