const solution = (arr) => {
    let answer = [];
    let arr2 = arr.filter((v, i) => v > arr[i - 1]);
    answer.push(arr[0], ...arr2)

    return answer;
};

const arr = [7, 3, 9, 5, 6, 12]
console.log(solution(arr)); 