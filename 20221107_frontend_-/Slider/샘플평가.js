// for문을 이용하여 2단~9단까지의 구구단을 아래와 같이 출력하시오.
for (i = 2; i < 10; i++) {
    for (j = 1; j < 10; j++) {
        console.log(`${i} * ${j} =`, i * j);
    }
}

// 로또 번호 생성 프로그램
function myLotto() {
    let result = [];

    while (result.length < 6) {
        let num = Math.floor(Math.random() * 45) + 1;
        if (!result.includes(num)) result.push(num);
    }
    return result.sort();
}
console.log(myLotto());

// 별도의 Arraylist
let thisWeekLotto = [35, 21, 29, 10, 3, 44];
thisWeekLotto.sort();
console.log(thisWeekLotto);
