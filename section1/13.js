const solution = (str) => {
    let answer = '';
    for (let i of str) {
        if (i === i.toUpperCase()) answer += i.toLowerCase();
        else { answer += i.toUpperCase() };
    }
    return answer;
};

const str = 'StuDyJavAscRipT'
console.log(solution(str));