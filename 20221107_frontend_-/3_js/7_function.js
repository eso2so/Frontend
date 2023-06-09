/* 
    함수(Function)
        - 반복적으로 실행될 코드를 미리 작성 후 재사용한다.
        - function 뒤에 함수의 이름을 작성하고 ()를 붙인다.
            => () 안에는 함수 실행에 필요한 값을 매개 변수(Parameter)로 전달.
            => 매개 변수는 여러 개도 가능하고, 없어도 된다.
            => 매개 변수를 통해서 전달되는 실제 값을 인자(Argument)라고 한다.
        - 반환해 줄 값이 있다면 return 뒤에 표현식을 작성한다.
            => 없다면 생략 가능. => undefined 반환
            => return은 함수의 종료를 의미한다. return 이후의 코드는 실행되지 안흔ㄴ다.
        - 작성한 함수를 실행할 때는 함수 이름(매개변수)의 형태로 작성.
            => 함수를 호출한다(call)고 한다.
            => 함수가 표현한 식의 결과가 올 수 있다.
*/
function sum(a, b) {
    return a + b;
}

function calculate(a, b) {
    return (a / b + b) / a + a + a;
}

console.log(sum(3, 4)); //console.은 객체, log()는 함수, 3,4는 인자(Argument) function의 a,b는 매개변수(Parameter), sum같은 함수 이름은 식별자
console.log(sum(5, 10));

var num = calculate(2, 3);
var num02 = calculate(4, 10);
console.log(num, num02);

let num03 = 10;
let percentage = 5;
// 매개변수와 return(반환값)이 없는 함수
function greeting() {
    console.log("안녕하세요");
}

// 외부에 실행하는데 필요한 값들이 있는 경우 매개 변수를 생략하기도 한다.
function getPercentage() {
    return (num03 * percentage) / 100;
    // return 이후의 코드는 실행되지 않는다.
    console.log("함수 종료");
}
console.log(getPercentage());

greeting();
greeting();
greeting();

// 빼기, 곱하기, 나누기 함수 만들어보기 (두 개의 수)
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// 세 개의 수의 평균을 출력하는 함수 만들어보기
function consoleAverage(a, b, c) {
    console.log((a + b + c) / 3);
}
// consoleAverage(1, 2, 3);

function getTotal(a, b, c) {
    return a + b + c;
}

// 함수는 작은 단위로 쪼개서 사용하는 것이 좋다.
console.log(total);
var total = getTotal(3, 6, 9);
var avg = divide(total, 3);
console.log(avg);

console.log(divide(getTotal(3, 6, 9), 3));

// 기명 함수와 익명 함수

/*  
    기명 함수(Named Function) - 함수 선언식 
        => 함수 호이스팅이 일어난다. => 함수 선언 이전에 호출해도 잘 작동한다. 구현부도 같이 호이스팅 된다.
*/
func();
function func() {
    console.log("기명 함수입니다.");
}

/* 
    익명 함수(Anonymous Function) - 함수 표현식
        => 함수 호이스팅이 일어나지 않는다.  
        => JavaScript는 함수를 값으로 취급한다. => 값으로써 함수를 전달할 때는 익명함수를 사용하면 간결하게 작성할 수 있다.
*/
// getData();
// var getData = function () { 변수 호이스팅은 일어나지만 undefined -> not a funcion 선언부만 끌어올리고 함수는 끌어올리지 못하므로
let getData = function () {
    console.log("익명 함수입니다.");
};

// 식별자가 필요하다 => 함수 선언식 혹은 함수 표현식의 형태로 식별자를 써야 한다.
//  => 값으로 전달되는 경우에는 식별자가 필요없다.
// function (a, b) {
//   return a +b;
// }

/* 
    화살표 함수(Arrow Function)
        => function 키워드를 사용하지 않고 "=>"를 통해서 간겨하게 작성 가능하다.
        => 함수 표현식으로만 작성 가능하다. (변수에 할당하는 식으로 작성)
        => 중괄호와 return 키워드를 생략하면 표현식의 값을 return한다.
            => 기본적으로 {}를 코드블록으로 인식한다.
            => 반환값이 객체라면 () 안에 {}를 작성해야 return 생략이 가능하다.
        => 다른 함수의 값으로 함수를 전달할 때 많이 사용한다.
        => 함수 호이스팅이 일어나지 않는다.
        => this 바인딩이 일어나지 않는다. (이 때문에 사용시 조심해야함)
*/
let add = (a, b) => {
    return a + b;
};

let minus = (a, b) => a - b;
console.log(minus(3, 2));

// 화살표 함수 이용해서 두 문자열을 연결하는 함수 만들기
let sumString = (str1, str2) => str1 + str2;

console.log(add("안녕", "하세요"));
console.log(sumString("안녕", "하세요"));

let getObj = (age, name) => ({ age: age, name: name });

let user = getObj(40, "seok");
console.log(user);

let globalFunc = function () {
    console.log("외부 함수 실행");
    let inner = function () {
        console.log("내부 함수 실행");
    };

    inner();
    console.log("외부 함수 종료");
};
globalFunc();

function foo() {
    return "foo";
}

// () 생략하면 함수 그 자체를 가리킨다. 식별자 return값이 나옴 => 문자열을 가져옴
//  => 함수를 값으로 사용할 때는 호출이 아니라 식별자를 참조해야 한다.
let copyFunc = foo;
console.log(copyFunc());

/* 
    콜백함수 (Callback Function)
        => 함수의 값으로 전달되는 함수.
        => 함수에서 실행되는 코드가 나중에 정해질 때 사용한다.
        => 콜백함수로 익명함수를 많이 사용한다.(코드블록을 그냥 전달할 수 없어 함수 형태로 전달하는 것임)
        => 값으로 전달할 때는 호출이 아니라 함수 자체를 전달해야 한다.(식별자 필요없이, 익명함수처럼 쓰임)
*/

function repeat(repeatCount, callback) {
    for (let i = 0; i < repeatCount; i++) {
        callback();
    }
}

/* function print() {
    console.log("코드 실행!");
}
repeat(5, print);
 */
repeat(5, function () {
    console.log("코드실행!");
});
