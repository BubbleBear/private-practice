#include <iostream>
#include "qsort.h"

using namespace std;

int main() {
    int small[] = {3, 2, 1, 5, 4, 6};
    int all0[10] = {0};
    int large[100000] = {0};
    Utils::fillArray(all0, sizeof(all0) / sizeof(int));
    QSort::run(all0, sizeof(all0) / sizeof(int));
    Utils::log(all0, sizeof(all0) / sizeof(int));
    return 0;
}
