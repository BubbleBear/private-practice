#include "utils.h"

using namespace std;

namespace BubbleSort {
    void run(int a[], int size) {
        for (int loopTime = 0; loopTime < size; loopTime++) {
            for (int i = 0; i < size - loopTime - 1; i++) {
                if (a[i] > a[i + 1]) swap(a[i], a[i + 1]);
            }
        }
    }
}
