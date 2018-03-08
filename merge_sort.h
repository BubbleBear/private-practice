#include "utils.h"

using namespace std;

namespace MergeSort {
    void merge(int a[], int sizea, int sizeb) {
        int *tmp = new int[sizea + sizeb];
        int *b = a + sizea;
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
        for (;i < sizea; i++) tmp[i + j] = a[i];
        for (;j < sizeb; j++) tmp[i + j] = b[j];
        for (i = 0; i < sizea + sizeb; i++) a[i] = tmp[i];
        delete[] tmp;
    }

    void divide(int a[], int size) {
        if (size == 1) return;
        int sizea = size / 2;
        int sizeb = (size + 1) / 2;
        divide(a, sizea);
        divide(a + sizea, sizeb);
        merge(a, sizea, sizeb);
    }

    void run(int a[], int size) {
        divide(a, size);
    }
}
