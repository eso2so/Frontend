/* 
    for문
        - () 안의 조건이 false가 될 때까지 반복 실행한다.
        - (초기값 변수; 조건식; 증감식) 순으로 작성한다.
        - 코드 블록 실행 후 증감식을 통해 값을 변화시켜 종료시점을 정할 수 있다.
            => 조건식과 증감식을 제대로 작성하지 않으면 무한루프에 빠진다.
        - 보통 초기값을 0부터 시작한다.
            => 배열의 인덱스가 0부터 시작하기 때문에 배열의 모든 요소에 접근하기가 쉽다.
            => 배열의 마지막 인덱스는 배열.length - 1과 동일하다.
            => 0부터 시작해서 배열의 길이보다 작을 때(0 < 배열.length)라고 조건을 작성하면 배열의 모든 요소를 참조할 수 있다.
        - for문은 반복횟수가 명확할 때 사용한다.
*/
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// 문제1. numbers의 각 요소를 한 번 씩 출력하기.
var numbers = [1, 10, 4, 5, 70, 10, 10];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// 문제2. numbers의 모든 숫자와 합을 result 변수에 담기
var result = 0;
for (var i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
}
console.log("result : ", result);

// 문제3. 0부터 20 사이의 짝수만 출력.
/* var data3 = i;
var result = 0;
for (i = 0; i <= 10; i++) {
    result = 2 * i;
    console.log(result);
} */

/* for (i = 0; 2 * i < 21; i++) {
    console.log(2 * i);
} */

var loopCount = 0;
for (var i = 0; i <= 20; i++) {
    loopCount++; // 반복 횟수를 세는 용도이기 때문에 if문 밖에서 증가해야 한다.
    if (i % 2 === 0) console.log(i);
}
console.log("loopCount : ", loopCount);

// i가 2씩 증가하여 실행횟수가 반이 된다.
var count02 = 0;
for (var i = 0; i <= 20; i = i + 2) {
    count02++;
    console.log(i);
}
console.log("count02 : ", count02);

// 문제4. 구구단 2단부터 9단
//  => for문도 중첩이 가능하다. 중첩 사용시에는 초기값 변수의 이름이 달라야 한다.
//  => 중첩할 때 증감식을 많이 실수한다. => 무한루프
for (i = 2; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
        //console.log(i + " * " + j, i * j);
        console.log(`${i} * ${j}`, i * j);
    }
}

/* 
    while문
        - 초기값이 없고 () 안에 조건식만 적는다.
        - 조건식이 true라면 실행, false라면 실행x. 조건식이 false가 될 때까지 무한 반복을 한다.
        - 외부에다가 값을 선언하고 while문 내부에서 값을 변화시켜 종료 시점을 정한다.
        - break문 사용 시 while문을 탈출한다. => 조건문과 함께 사용해 특정 조건에서 탈출한다.
            => break문을 만나는 즉시 탈출한다.
            => break 시점 따라 실행되는 양상이 달라진다.
        - 외부에 boolean 변수를 선언해놓고 특정 조건에서 false로 만들어 while 문을 종료한다.(일단 실행)
            var active = true;
            while (active) {
            if (value === 20) active=false;
        - while문은 반복 횟수가 불명확할 때 사용한다.
            => 예를들어 사용자가 특정 값을 입력할 때까지 무한 반복
        - continue는 반복을 아예 중단하진 않고 해당 회차만 건너 뛴다.
*/
var value = 10;
var active = true;
while (true) {
    value++;
    if (value === 18) continue;
    if (value === 20) break;
    console.log("value : ", value);
}

// num을 몇 제곱이 되어야 100000보다 큰 지 알 수 없다. => while문 활용
var num = 2;
var num02 = num;
var squareCount = 0;
while (true) {
    if (num * num02 > 100000) break;
    num = num * num02;
    squareCount++; // 몇 제곱인지 계속 카운트
    console.log(num);
}
console.log(squareCount);

// 문제5. while문을 통해서 num03이 0부터 시작해 20까지 홀수만 출력 => continue문 사용하기
var num03 = 0;
while (true) {
    num03++;
    //  if (num03 % 2 === 0) continue;
    if (num03 % 2 !== 1) continue;
    if (num03 >= 20) break;
    console.log(num03);
}

/* 
    do ~ while문 
        - 일단 한번은 실행한다. => 한번은 무조건 실행하고 조건에 따라 반복을 해야할 때 사용한다.
*/
var num04 = 0;
var hate = false;
do {
    console.log("메롱이다");
} while (hate);
