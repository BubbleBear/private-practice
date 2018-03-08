#include <iostream>
#include "heap_sort.h"
#include "merge_sort.h"
#include "qsort.h"

using namespace std;

int main() {
    int a[] = {3, 2, 1, 5, 4, 8, 7, 6};
    Utils::logSortCost(string("qsort"), QSort::qsort, a, 8, 10000000);
    Utils::logSortCost(string("heap sort"), HeapSort::heapSort, a, 8, 10000000);
    Utils::logSortCost(string("merge sort"), MergeSort::mergeSort, a, 8, 10000000);
    return 0;
}
