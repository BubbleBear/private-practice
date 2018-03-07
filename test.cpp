#include <iostream>
#include "heap_sort.h"
#include "merge_sort.h"
#include "qsort.h"

using namespace std;

int main() {
    int a[] = {3, 2, 1, 5, 4, 8, 7, 6};
    float cost;
    // cost = Utils::sortCost(QSort::qsort, a, 8);
    cost = Utils::sortCost(MergeSort::mergeSort, a, 8);
    // cost = Utils::sortCost(HeapSort::heapSort, a, 8);
    cout << cost;
    return 0;
}
