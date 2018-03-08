#include <iostream>
#include <time.h>

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

    float sortCost(void(*fn)(int*, int), int a[], int size, int time) {
        clock_t start, end;
        start = clock();
        while (time--) (*fn)(a, size);
        end = clock();
        return (float)(end - start) / CLOCKS_PER_SEC;
    }

    void logSortCost(string label, void(*fn)(int*, int), int a[], int size, int time) {
        float cost = sortCost(fn, a, size, time);
        cout << label << " : " << cost << endl;
    }
}

#endif
