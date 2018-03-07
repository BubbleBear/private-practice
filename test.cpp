#include <iostream>
#include "heap_sort.h"
#include "merge_sort.h"
#include "qsort.h"

using namespace std;

int main() {
    int a[] = {3, 2, 1, 5, 4, 8, 7, 6};
    Utils::sortCost(QSort::qsort, a, 8);
    Utils::log(a, 8);
    return 0;
}
