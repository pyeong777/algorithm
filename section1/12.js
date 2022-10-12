const solution = (str) => {
    // const arr = [];

    // for (let i of str) {
    //     arr.push(i.toUpperCase());
    // }
    // const answer = arr.join('');

    // return answer;

    let answer = '';
    for (let i of str) {
        if (i === i.toLowerCase()) answer += i.toUpperCase();
        else { answer += i };
    }
    return answer;

    //아스키코드
    // let answer = '';
    // for (let i of str) {
    //     let num = i.charCodeAt();
    //     if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    //     else { answer += i };
    // }
    // return answer;
};

const str = 'ItIsTimeToStudyyyyy'
console.log(solution(str));