#include "utils.h"

using namespace std;

namespace HeapSort {
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
}
