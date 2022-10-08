const solution = (a) => {
    let answer = 0;
    for (let i = 0; i <= a; i++) {
        answer += i;
    }
    return answer;
};

console.log(solution(10));