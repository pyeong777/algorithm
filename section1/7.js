const solution = (day, arr) => {
    let answer = 0;
    arr.map((it) => {
        if (it % 10 === day) {
            answer++;
        }
    })
    return answer;
};

const arr = [25, 23, 11, 47, 53, 17, 33]

console.log(solution(3, arr));