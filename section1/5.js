const solution = (arr) => {
    let answer;
    // Math.min 함수 이용 -> answer = Math.min(...arr);
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;
};

let arr = [11, 17, 22, 31, 13];

console.log(solution(arr));