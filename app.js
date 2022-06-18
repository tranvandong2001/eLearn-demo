const elAnimation = document.querySelectorAll(".show-on-scroll");

function animationEl(el) {
    var rect = el.getClientRects()[0];
    var height = window.innerHeight;

    if (!(rect.bottom < 0 || rect.top > height)) {
        el.classList.add("start");
    }
}
function checkAnimation() {
    elAnimation.forEach((el) => {
        animationEl(el);
    });
}

window.onscroll = checkAnimation;

//bars

const bars = document.querySelector(".bars");
const overlight = document.querySelector(".overlight");
const navMobile = document.querySelector(".nav__item-mobile");
const closeBar = document.querySelector(".close");

bars.addEventListener("click", function (e) {
    let initial = false;
    if (!initial) {
        overlight.style.transform = "translateX(0)";
        navMobile.style.transform = "translateX(0)";
        overlight.style.transition = "0.5s";
    }
    closeBar.addEventListener("click", function () {
        navMobile.style.transform = "translateX(-100%)";
        overlight.style.transform = "translateX(-100%)";
        overlight.style.transition = "2s";
    });
});

const downMobile = document.querySelector(".down__mobile");
const showListChildrenMobile = document.querySelector(".list__children-mobile");

downMobile.addEventListener("click", function () {
    downMobile.style.border = "1px solid var(--text-hover)";

    showListChildrenMobile.classList.toggle("show");
});
