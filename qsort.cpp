#include <iostream>
#include "qsort.h"

using namespace std;

int main() {
    int small[] = {3, 2, 1, 5, 4, 6};
    int large[100000] = {0};
    Utils::fillArray(large, 100000);
    QSort::run(small, sizeof(small) / sizeof(int));
    Utils::log(small, sizeof(small) / sizeof(int));
    return 0;
}
