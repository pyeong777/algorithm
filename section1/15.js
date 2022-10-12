const solution = (str) => {
    let answer = '';
    // if (str.length % 2 == 1) {
    //     let oddNum = (str.length - 1) / 2;
    //     answer = str.substr(oddNum, 1);
    // } else {
    //     let evenNum = str.length / 2 - 1;
    //     answer = str.substr(evenNum, 2);
    // }
    let midNum = Math.floor(str.length / 2);
    if (str.length % 2 == 1) {
        answer = str.substring(midNum, midNum + 1);
    } else {
        answer = str.substring(midNum - 1, midNum + 1);
    }
    return answer;
};


console.log(solution('study'));