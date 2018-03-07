#include <iostream>

using namespace std;

void log(int*, int);
void divide(int*, int);
void merge(int*, int, int*, int);

int main() {
    int a[] = {3, 2, 4, 6, 5, 1, 7};
    divide(a, sizeof(a) / sizeof(int));
    log(a, sizeof(a) / sizeof(int));
    return 0;
}

void log(int a[], int size) {
    for (int i = 0; i < size; i++) {
        cout << a[i] << ' ';
    }
    cout << endl;
}

void divide(int a[], int size) {
    if (size == 1) return;
    int sizea = size / 2;
    int sizeb = (size + 1) / 2;
    divide(a, sizea);
    divide(a + sizea, sizeb);
    merge(a, sizea, a + sizea, sizeb);
}

void merge(int a[], int sizea, int b[], int sizeb) {
    int* tmp = new int(sizea + sizeb);
    int i = 0, j = 0;
    for (;i < sizea && j < sizeb;) {
        if (a[i] < b[j]) {
            tmp[i + j] = a[i];
            i++;
        } else {
            tmp[i + j] = b[j];
            j++;
        }
    }
    for (;i < sizea;) {
        tmp[i + j] = a[i];
        i++;
    }
    for (;j < sizeb;) {
        tmp[i + j] = b[j];
        j++;
    }
    for (i = 0; i < sizea + sizeb; i++) a[i] = tmp[i];
    delete tmp;
}
