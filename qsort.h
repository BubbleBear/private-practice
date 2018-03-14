#include "utils.h"

using namespace std;

namespace QSort {
    void randomize(int arr[], int size) {
        int rindex = rand() % size;
        swap(arr[rindex], arr[size - 1]);
    }

    int partition(int arr[], int size) {
        randomize(arr, size);
        int left = 0,
            right = size - 1,
            pivot = right;

        for (int i = 0; i < right; i++) {
            if (arr[i] <= arr[pivot]) {
                if (i != left) swap(arr[i], arr[left]);
                left++;
            }
        }

        swap(arr[left], arr[pivot]);

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
