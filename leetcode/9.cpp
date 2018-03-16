#include <iostream>

using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        return this->reverse(x) == x;
    }
    
private:
    int reverse(int x) {
        int res = 0;
        while (x) {
            res *= 10;
            res += x % 10;
            x /= 10;
        }
        return abs(res);
    }
};

int main() {
    Solution sol;
    int test = 2147447412;
    int res = sol.isPalindrome(test);
    cout << res;
    return 0;
}
