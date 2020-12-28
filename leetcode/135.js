// /**
//  * @param {number[]} ratings
//  * @return {number}
//  */
// var candy = function(ratings) {
//     if (ratings.length === 0) {
//         return 0;
//     }

//     let candies = [1];
//     let currentCandy = 1;
    
//     for (let i = 1; i < ratings.length; i++) {
//         if (ratings[i] > ratings[i - 1]) {
//             ++currentCandy;
//         } else {
//             currentCandy = 1;
//         }

//         candies.push(currentCandy);

//         for (let j = i - 1; j >= 0 && ratings[j] > ratings[j + 1] && candies[j] === candies[j + 1]; j--) {
//             ++candies[j];
//         }
//     }

//     return candies.reduce((a, c) => a + c);
// };

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if (ratings.length === 0) {
        return 0;
    }

    let candies = [1];

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        } else {
            candies[i] = 1;
        }
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1;
        }
    }

    return candies;
};

const cases = [
    [1, 0, 2],  // 5
    [0, 2, 1],   // 4
    [1, 2, 2],  // 4
    [1, 2, 2, 1],   // 6
    [1, 2, 3],   // 6
    [1, 2, 3, 1],   // 7
    [1, 3, 2, 1],   // 7
    [1, 2, 3, 2, 1],   // 9
    [1, 2, 3, 4, 5, 2, 1], // 18
];

cases.forEach((v, i) => {
    console.log(v);
    console.log(candy(v));
    console.log(candy(v).reduce((acc, cur) => acc + cur));
    console.log();
});
