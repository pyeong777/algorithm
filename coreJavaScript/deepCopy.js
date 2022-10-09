//target이 객체인 경우 내부 프로퍼티들 순회하며 deepCopy함수 재귀적으로 호출한다.
//target이 객체가 아닌경우 target을 그대로 지정. 
//deepCopy 함수를 사용해 원본과 사본이 다른 데이터 주소를 가르키게 함.
//깊은복사
const deepCopy = (target) => {
    let result = {};
    if (typeof target === 'object' && target !== null) {
        for (let props in target) {
            result[props] = deepCopy(target[props]);
        }
    } else {
        result = target;
    }
    return result;
}


let objA = { id: 1, a: { name: "david" } };
let objB = deepCopy(objA);

objB.a.name = 'daepyeong';

console.log("objB--", objB);
console.log("objA--", objA);