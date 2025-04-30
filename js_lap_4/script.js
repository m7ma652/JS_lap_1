let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");
let img = document.getElementById("slideshow");

let count = 1;
let intervalId;

function rightSlide() {
    count++;
    if (count > 3) count = 1;
    img.src = `images/${count}.avif`;
}

function leftSlide() {
    count--;
    if (count < 1) count = 3;
    img.src = `images/${count}.avif`;
}

rightBtn.onclick = rightSlide;
leftBtn.onclick = leftSlide;

function start_slide_show() {
    if (!intervalId) {
        intervalId = setInterval(rightSlide, 2000);
    }
}

function stop_slide_show() {
    clearInterval(intervalId);
    intervalId = null;
}
