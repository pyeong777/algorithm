const solution = (arr) => {
    let sum = arr.reduce((a, b) => a + b, 0)
    // arr.forEach((it) => {
    //     sum += it;
    // })

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (sum - (arr[i] + arr[j]) === 100) {
                arr.splice(j, 1);
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};

arr = [20, 7, 13, 19, 10, 23, 15, 8, 45]
console.log(solution(arr));