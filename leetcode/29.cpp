#include <iostream>
#include <vector>
#include <cmath>
#include <sstream>

using namespace std;

class Solution {
public:
    int divide(int dividend, int divisor) {
        if (dividend == 0) return 0;

        if (dividend == INT_MIN) {
            if (divisor == 1) {
                return INT_MIN;
            }

            if (divisor == -1) {
                return INT_MAX;
            }
        }

        bool neg = (dividend < 0) ^ (divisor < 0);
        int result = 0;
        long long ldividend = abs(dividend);
        long long ldivisor = abs(divisor);

        cout << ldividend << ' ' << ldivisor << endl;

        while (ldividend >= ldivisor) {
            ldividend -= ldivisor;
            result++;
        }

        if (neg) {
            return ~result + 1;
        } else {
            return result;
        }
    }
};

int main() {
    Solution s;
    
    int r = s.divide(INT_MIN, 1);

    cout << r << endl;
}
