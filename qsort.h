#include "utils.h"

using namespace std;

namespace QSort {
    int partition(int arr[], int size) {
        int left = 1,
            right = size - 1,
            pivot = 0;

        while (left < right) {
            while (arr[right] < arr[pivot] && left < right) right--;
            if (left < right) {
                swap(arr[right], arr[pivot]);
                pivot = right;
                right--;
            }
            while (arr[left] > arr[pivot] && left < right) left++;
            if (left < right) {
                swap(arr[left], arr[pivot]);
                pivot = left;
                left++;
            }
        }

        return pivot;
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
