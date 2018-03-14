#include <iostream>
#include "heap_sort.h"

using namespace std;

int main() {
    int a[] = {3, 2, 4, 6, 5, 1, 7};
    HeapSort::run(a, 7);
    Utils::log(a, 7);
    return 0;
}

