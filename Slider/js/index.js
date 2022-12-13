// 2번 버튼 클릭 시 2번 아이템 보이게 처리하기

// 1. 버튼 가져오기
let btnList = document.querySelectorAll(".btnList li");

// 이벤트 위임을 이용하는 것이 좋다.
btnList.forEach((btn, idx) => {
    btn.addEventListener("click", function () {
        document.querySelector(".slideList").style.transform = `translate(${
            idx * -100
        }%)`;
    });
});
/* btnList[0].addEventListener("click", function () {
    document.querySelector(".slideList").style.transform = "translate(0)";
});
btnList[1].addEventListener("click", function () {
    document.querySelector(".slideList").style.transform = "translate(-100%)";
});
btnList[2].addEventListener("click", function () {
    document.querySelector(".slideList").style.transform = "translate(-200%)";
});
 */
// 2. 버튼에 클릭 이벤트 바인딩하기
// 3. 바인딩 함수 작성하기 => 옆으로 이동시키기(뭐를?)
