#include <iostream>

using namespace std;

void log(int*, int);
void logHeap(int*, int);
void swap(int&, int&);
void heapAdjust(int*, int, int);
void heapBuild(int*, int);
void heapSort(int*, int);

int main() {
    int a[] = {3, 2, 4, 6, 5, 1, 7};
    heapSort(a, 7);
    log(a, 7);
    return 0;
}

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

void swap(int &a, int &b) {
    int tmp = a;
    a = b;
    b = tmp;
}

void heapAdjust(int a[], int index, int size) {
    int leftIndex = index * 2 + 1,
        rightIndex = index * 2 + 2,
        indexOfMax;

    if (leftIndex < size) {
        indexOfMax = a[index] > a[leftIndex] ? index : leftIndex;
        if (rightIndex < size && a[rightIndex] > a[indexOfMax]) {
            swap(a[rightIndex], a[index]);
            heapAdjust(a, rightIndex, size);
        } else if (indexOfMax == leftIndex) {
            swap(a[leftIndex], a[index]);
            heapAdjust(a, leftIndex, size);
        }
    } else {
        return;
    }
}

void heapBuild(int a[], int size) {
    for (int i = size / 2 - 1; i >= 0; i--) {
        heapAdjust(a, i, size);
    }
}

void heapSort(int a[], int size) {
    while (size - 1) {
        heapBuild(a, size);
        swap(a[0], a[size - 1]);
        size--;
    }
}
