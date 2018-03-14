#include "utils.h"

using namespace std;

namespace HeapSort {
    void siftDown(int a[], int index, int size) {
        int leftIndex = index * 2 + 1,
            rightIndex = index * 2 + 2,
            indexOfMax;

        if (leftIndex < size) {
            indexOfMax = a[index] > a[leftIndex] ? index : leftIndex;
            if (rightIndex < size && a[rightIndex] > a[indexOfMax]) {
                swap(a[rightIndex], a[index]);
                siftDown(a, rightIndex, size);
            } else if (indexOfMax == leftIndex) {
                swap(a[leftIndex], a[index]);
                siftDown(a, leftIndex, size);
            }
        } else {
            return;
        }
    }

    void heapify(int a[], int size) {
        for (int i = size / 2 - 1; i >= 0; i--) {
            siftDown(a, i, size);
        }
    }

    void run(int a[], int size) {
        heapify(a, size);
        while (size - 1) {
            swap(a[0], a[size - 1]);
            size--;
            siftDown(a, 0, size);
        }
    }
}
