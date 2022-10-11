const solution = (str) => {
    let answer = '';
    for (let i of str) {
        if (i === 'A') {
            answer += '#';
        } else {
            answer += i;
        }
    }
    return answer;

    // let answer = str.replace(/A/g, '#');
    // return answer;

    // let answer = str.replaceAll('A', '#');
    // return answer;
};

const word = 'BANANA'
console.log(solution(word));