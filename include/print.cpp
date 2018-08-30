#include "print.h"

using namespace std;

void print(vector<int> v) {
    for (vector<int>::iterator it = v.begin(); it < v.end(); it++) {
        cout << *it << ' ';
    }
    cout << endl;
}
