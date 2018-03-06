#include <iostream>

using namespace std;

void divide(int*, int);
int conquer(int*, int);
void log(int*, int);
void swap(int*, int*);

int main() {
    int arr[] = {3, 2, 1, 5, 4, 6};
    divide(arr, 6);
    log(arr, sizeof(arr) / sizeof(int));
    return 0;
}

void divide(int arr[], int size) {
    if (size <= 1) return;
    int offset = conquer(arr, size);
    divide(arr, offset);
    divide(arr + offset + 1, size - offset - 1);
}

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

void log(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << ' ';
    }
    cout << endl;
}
