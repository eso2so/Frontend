let btnList = document.querySelectorAll(".btnList li");
btnList.forEach((btn, idx) => {
    btn.addEventListener("click", function () {
        document.querySelector(".slideList").style.transform = `translate(${
            idx * -100
        }%)`;
    });
});
