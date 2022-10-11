const solution = (str, a) => {
    let answer = 0;
    for (let i of str) {
        if (i === a) answer++;
    }
    return answer;


};

const str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));