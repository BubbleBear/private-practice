#include <iostream>
#include "merge_sort.h"

using namespace std;

int main() {
    int small[] = {3, 2, 1, 5, 4, 6};
    int large[100000] = {0};
    MergeSort::run(small, sizeof(small) / sizeof(int));
    Utils::log(small, sizeof(small) / sizeof(int));
    return 0;
}
