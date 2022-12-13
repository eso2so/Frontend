// userList 안의 객체들 중 age 프로퍼티의 값이 30 이상인 객체의 이름만 모아서 result 배열에 담기

// 배열의 고차함수들을 이용 => 필터링과 데이터 변형
let userList = [
    { name: "Minsu", age: 20 },
    { name: "Seok", age: 30 },
    { name: "Yeji", age: 23 },
    { name: "Minseok", age: 43 },
];

let result = userList.filter(function (age) {
    return userList.age >= 30;
});

console.log(result);

let result02 = userList.map(function (age) {
    return age >= 30;
});
console.log(result02);
