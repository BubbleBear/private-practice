#include "utils.h"

using namespace std;

namespace QSort {
    int partition(int arr[], int size) {
        int left = 0,
            right = size,
            pivot = arr[left];

        while (left < right) {
            while (arr[right--] < pivot && left < right);
            arr[left] = arr[right];
            while (arr[left++] > pivot && left < right);
            arr[right] = arr[left];
        }

        arr[left] = pivot;

        return left;
    }

    void divide(int arr[], int size) {
        if (size <= 1) return;
        int offset = partition(arr, size);
        divide(arr, offset);
        divide(arr + offset + 1, size - offset - 1);
    }

    void run(int a[], int size) {
        divide(a, size);
    }
}
