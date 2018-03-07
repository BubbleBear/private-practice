#include <iostream>

#ifndef _UTILS_H
#define _UTILS_H

using namespace std;

namespace Utils {
    void log(int a[], int size) {
        for (int i = 0; i < size; i++) {
            cout << a[i] << ' ';
        }
        cout << endl;
    }

    void logHeap(int a[], int size) {
        int lvlSize = 1,
            treeSize = 0;

        while (treeSize < size) {
            log(a + treeSize, treeSize + lvlSize < size ? lvlSize : size - treeSize);
            treeSize += lvlSize;
            lvlSize *= 2;
        }
    }

    int sortCost(void(*fn)(int*, int), int a[], int size) {
        (*fn)(a, size);
        return 0;
    }
}

#endif
