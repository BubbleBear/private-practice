#include <iostream>

using namespace std;

int main() {
    int flag = 0;
    cout << (flag ^= 1) << endl;
    cout << (flag ^= 1) << endl;
    return 0;
}
