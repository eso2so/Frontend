/* 
    조건문(Conditional Statement) 
        - 조건에 따라서 실행할 코드를 선택한다. => 조건에 따라 프로그램을 제어한다.
*/

{
    // 코드 블록은 {} 안의 코드를 하나의 실행 단위로 작성한다. => 제어문이나 함수의 구현부분을 작성한다.
    console.log("코드 블록 실행");
    console.log("코드 블록은 여러 코드를 실행하는 하나의 뭉치다.");
}

/* 
    if문
        - () 안의 조건식이 true라면 코드 블록을 실행하고, false라면 실행하지 않는다.
        - 조건식과 코드 블록 중 하나라도 작성하지 않으면 오류가 발생한다.
        - 실행할 코드가 한 줄이라면 {} 생략이 가능하다.
*/
var num = 1;
if (num > 0) {
    console.log("num은 양수입니다.");
}
if (num < 0) {
    console.log("num은 음수입니다.");
}

/* 
    if ~ else 문
        - 조건식이 true라면 if문의 코드 블록을 실행하고, false라면 else문의 코드 블록을 실행한다.
*/
var age = 25;
if (age < 40 && age >= 30) {
    console.log("30대 입니다.");
} else {
    console.log("30대 아닙니다.");
}

/* 
    else if
        - 앞의 if문의 조건식이 false인 경우 else if의 조건에 해당하는지 확인 후, true라면 실행, false라면 실행하지 않는다.
        - else if문은 몇개든지 더 붙일 수 있다.
        - 앞에서 else if문을 사용했다면 else문은 무조건 마지막에 와야 한다.
*/
var num02 = 0;
if (num02 > 0) {
    console.log("num02는 양수입니다.");
} else if (num02 < 0) {
    console.log("num02는 음수입니다.");
} else {
    console.log("num02는 0입니다.");
}

// 문제1. 변수 num03 값이 짝수인지 홀수인지 출력해보기
var num03 = 105;
if (num03 % 2 === 0) {
    console.log("num03은 짝수입니다.");
} else {
    console.log("num03은 홀수입니다.");
}

// 문제2. 변수 num03의 값이 5의 배수이면서 100 보다 크면 num03의 값을 출력해보기
if (num03 % 5 === 0 && num03 > 100) {
    console.log(num03);
}
// if문의 중첩 => 분기처리를 더 구체적으로 해야할 때 사용한다. 그리고 가독성이 좋다.
if (num03 % 5 === 0) {
    if (num03 > 100) {
        console.log(num03);
    } else {
    }
}

/*  문제3. 변수 data의 데이터 타입이 
    1) 문자열이라면 문자열(string)입니다. 
    2) 숫자라면 숫자형(number)입니다. 
    3) 둘다 아니면 문자열도 숫자형도 아닙니다.
*/
var data = {};
if (typeof data === "string") {
    console.log("문자열(string)입니다.");
} else if (typeof data === "number") {
    console.log("숫자형(number)입니다.");
} else {
    console.log("문자열도 숫자형도 아닙니다.");
}

/* 
    switch문
    - () 안의 값(표현식)으로 비교를 각 case문의 값과 비교해서 해당하는 케이스를 실행한다.
    - 해당하는 case문에 도달하면 이후의 모든 case문을 실행한다.
        => break문을 사용하면 이후의 case문을 실행하지 않고 switch문을 "탈출"한다.
    - default문은 기본으로 실행되는 문이다.
*/
var age02 = 45;
// parseInt() 실수를 적으면 정수로 바꿔준다(내림)
// math.floor()는 소수점 이하의 숫자를 버린다
switch (Math.floor(age02 / 10)) {
    case 3:
        console.log("30대입니다.");
        break;
    case 4:
        console.log("40대입니다.");
        break;
    default:
        console.log("30대도 40대도 아닙니다.");
}

// 문제4. 문제3을 switch문으로 바꿔보기
var data2 = 100;
switch (typeof data2) {
    case "string":
        console.log("문자열(string)입니다.");
        break;
    case "number":
        console.log("숫자형(number)입니다.");
        break;
    default:
        console.log("문자열도 숫자형도 아닙니다.");
}

// 문제5. score의 변수의 값에 따라서 grade 변수의 값을 변경
// 90점 이상 A, 80~89점 B, 70~79점 C, 60~69점 D, 미만은 F
var score = 100;
var grade;
switch (Math.floor(score / 10)) {
    // 여러 case문을 묶을 때 break문을 생략하여 작성
    case 10:
    case 9:
        grade = "A";
        break;
    case 8:
        grade = "B";
        break;
    case 7:
        grade = "C";
        break;
    case 6:
        grade = "D";
        break;
    default:
        grade = "F";
}
console.log(grade);

// 조건으로 따질 때는 if문, 값을 비교해야할 때는 switch
