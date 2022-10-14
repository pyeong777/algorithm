var arr = [1, 2, 3, 4, 5];
var obj = {
    vals: [1, 2, 3],
    logValues: function (v, i) {
        if (this.vals) {
            console.log(this.vals, v, i);
        } else {
            console.log(this, v, i);
        }
    }
};

obj.logValues(1, 2);
// 여기서 logValues는 메소드로써 obj가 호출한것임(앞에.이 붙어있다), 이때의 this는 그러므로 obj임.

arr.forEach(obj.logValues);
//여기서는 forEach가 (콜백)함수로 obj.logValues를 전달받은것임. 따라서 이때의 this는 전역객체임.
//그렇다면 만약에 this를 obj로 지정하고싶으면 어떻게 할까?
//1. bind메소드를 사용해 arr.forEach(obj.Values.bind(obj));
//2. forEach의 두번째 매개변수로 thisArg를 넘겨서 arr.forEach(obj.Values, obj); 