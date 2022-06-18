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

const studentNumber = document.querySelector(".evaluate__number.student");
const teacherNumber = document.querySelector(".evaluate__number.teacher");
const classesNumber = document.querySelector(".evaluate__number.classes");
const ratingNumber = document.querySelector(".evaluate__number.rating");

function numberEvaluator(el, to) {
    var i = 0;
    var time = 200;
    var step = to / time;

    var number = setInterval(() => {
        i += step;
        if (i > to) {
            clearInterval(number);
            el.innerText = to;
        } else {
            el.innerText = Math.round(i);
        }
    }, 1);
}
numberEvaluator(studentNumber, 1000);
numberEvaluator(teacherNumber, 2500);
numberEvaluator(classesNumber, 906);
numberEvaluator(ratingNumber, 2000);
