#include <iostream>
#include "merge_sort.h"

using namespace std;

int main() {
    int a[] = {3, 2, 4, 6, 5, 1, 7};
    MergeSort::mergeSort(a, sizeof(a) / sizeof(int));
    Utils::log(a, sizeof(a) / sizeof(int));
    return 0;
}
