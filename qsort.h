#include "utils.h"

using namespace std;

namespace QSort {
    int conquer(int arr[], int size) {
        int left = 0,
            right = size - 1,
            pivot = arr[left];

        while (left < right) {
            while (left < right && arr[right] < pivot) right--;
            arr[left] = arr[right];
            while (left < right && arr[left] > pivot) left++;
            arr[right] = arr[left];
        }

        arr[left] = pivot;

        return left;
    }

    void divide(int arr[], int size) {
        if (size <= 1) return;
        int offset = conquer(arr, size);
        divide(arr, offset);
        divide(arr + offset + 1, size - offset - 1);
    }

    void run(int a[], int size) {
        divide(a, size);
    }
}
