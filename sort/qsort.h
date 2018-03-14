#include "utils.h"

using namespace std;

namespace QSort {
    struct Offsets {
        int left;
        int right;
    };

    void randomize(int arr[], int size) {
        int rindex = rand() % size;
        swap(arr[rindex], arr[size - 1]);
    }

    Offsets partition(int arr[], int size) {
        randomize(arr, size);
        int left = 0,
            right = size - 1,
            pivot = arr[right];

        for (int i = 0; i < right; i++) {
            if (arr[i] == pivot) swap(arr[i], arr[--right]);

            if (arr[i] > pivot) {
                if (i != left) swap(arr[i], arr[left]);
                left++;
            }
        }

        for (int i = left, j = size - 1; i < right && j >= right; i++, j--) {
            swap(arr[i], arr[j]);
        }

        Offsets offsets = {left, left + size - right};
        return offsets;
    }

    void divide(int arr[], int size) {
        if (size <= 1) return;
        Offsets offsets = partition(arr, size);
        divide(arr, offsets.left);
        divide(arr + offsets.right, size - offsets.right);
    }

    void run(int a[], int size) {
        divide(a, size);
    }
}
