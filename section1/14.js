const solution = (arr) => {
    let answer;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i of arr) {
        if (i.length > max) {
            max = i.length;
            answer = i;
        }
    };
    return answer;
}
let arr = ['teacher', 'time', 'student', 'beautiful', 'good', 'helloooooooooooo'];
console.log(solution(arr))
