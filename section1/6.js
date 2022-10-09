const solution = (a, b, c, d, e, f, g) => {
    let answer = [];
    let arr = [a, b, c, d, e, f, g];
    let sum = 0;

    let oddArr = arr.filter((it) => it % 2 !== 0);
    oddArr.forEach((it) => sum += it);

    let minValue = Math.min(...oddArr);

    answer.push(sum);
    answer.push(minValue);

    return answer;
};

console.log(solution(12, 77, 38, 41, 53, 92, 85));