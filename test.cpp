#include <iostream>
#include "heap_sort.h"
#include "merge_sort.h"
#include "qsort.h"
#include "bubble_sort.h"

using namespace std;

#define RUNS 1

int main() {
    int small[] = {3, 2, 1, 5, 4, 8, 7, 6};
    int large[100000] = {0};
    Utils::fillArray(large, 10);
    Utils::logSortCost(string("qsort"), QSort::run, large, 100000, RUNS);
    // Utils::logSortCost(string("heap sort"), HeapSort::run, large, 100000, RUNS);
    Utils::logSortCost(string("merge sort"), MergeSort::run, large, 100000, RUNS);
    Utils::logSortCost(string("bubble sort"), BubbleSort::run, large, 100000, RUNS);
    return 0;
}
