const solution = (str) => {
    // let answer = 0;
    // for (let i of str) {
    //     if (i === i.toUpperCase()) answer++;
    // }
    // return answer;

    //아스키코드 이용 A~Z: 65~90 a~z: 97~122
    let answer = 0;
    for (let i of str) {
        let num = i.charCodeAt();
        if (num >= 65 && num <= 90) answer++;
    }
    return answer;
};

const str = 'KoreaTimeGood'
console.log(solution(str));