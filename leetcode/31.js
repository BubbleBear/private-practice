/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function inPlaceSort(nums, start, end) {
    const sorted = nums.slice(start, end).sort((a, b) => a - b);
    nums.splice(start, end - start, ...sorted);
}

function swap(nums, ia, ib) {
    const temp = nums[ia];
    nums[ia] = nums[ib];
    nums[ib] = temp;
}

var nextPermutation = function(nums) {
    let spot = nums.length - 1;

    for (; spot >= 0; spot--) {
        if (spot === 0) {
            return inPlaceSort(nums, 0, nums.length);
        }

        if (nums[spot] > nums[spot - 1]) {
            break;
        }
    }

    let swapSpot = spot;

    for (; swapSpot < nums.length; swapSpot++) {
        if (nums[swapSpot] <= nums[spot - 1]) {
            break;
        }
    }

    swap(nums, spot - 1, --swapSpot);

    inPlaceSort(nums, spot, nums.length);
};

const cases = [
    [1, 5, 3, 2, 4], [1, 5, 3, 4, 2], [1, 5, 4, 2, 3],
    [1, 4, 5, 3, 2], [3, 2, 1], [1, 3, 2], [1, 5, 1],
    [1, 4, 3, 2],
    [11,12,0,27,3,11,21,9,0,15,26,27,17,24,0,16,4,17,14,8,15,8,2,16,10,6,6,24,16,2,18,19,6,10,17,10,21,0,11,13,7,7,2,16,24,25,2,20,12,9,20,19],
];

const a = Array.from(cases[8]);

nextPermutation(a);

console.log(a);
