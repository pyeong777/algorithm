const solution = (a, b, c) => {
    return (
        a + b > c && a + c > b && b + c > a ? 'yes' : 'no'
    )
};

console.log(solution(6, 7, 11));