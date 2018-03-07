#include "utils.h"

using namespace std;

namespace QSort {
    int conquer(int arr[], int size) {
        int target = 0,
            head = 0,
            tail = size - 1,
            flag = 1;

        while (head < tail) {
            if (flag ^= 1) {
                swap(arr[tail], arr[target]);
                target = tail;
                while (arr[head] > arr[target] && head < size) head++;
            } else {
                swap(arr[head], arr[target]);
                target = head;
                while (arr[tail] < arr[target] && tail > 0) tail--;
            }
        }

        return target;
    }

    void divide(int arr[], int size) {
        if (size <= 1) return;
        int offset = conquer(arr, size);
        divide(arr, offset);
        divide(arr + offset + 1, size - offset - 1);
    }

    void qsort(int a[], int size) {
        divide(a, size);
    }
}
