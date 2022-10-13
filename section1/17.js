const solution = (str) => {
    // let answer = str.filter((v, i) => str.indexOf(v) === i);
    // return answer;
    let result = str.reduce((ac, v) => ac.includes(v) ? ac : [...ac, v], []);
    return result;
};

const str = ['good', 'time', 'good', 'time', 'student']
console.log(solution(str));