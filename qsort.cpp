#include <iostream>
#include "qsort.h"

using namespace std;

int main() {
    int arr[] = {3, 2, 1, 5, 4, 6};
    QSort::qsort(arr, 6);
    Utils::log(arr, sizeof(arr) / sizeof(int));
    return 0;
}
