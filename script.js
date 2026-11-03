const colorBox = document.querySelector(".w-72.h-20");

const colorCode = document.querySelector(".w-40 h1");

const copyButton = document.querySelector(".w-40 button");

const colorCircles = document.querySelectorAll(".flex.flex-wrap > div");

const randomButton = document.querySelector(".w-64.h-12");

const mainBackground = document.querySelector(".main-bg");

function changeColor(color) {

    colorBox.style.backgroundColor = color;

    mainBackground.style.backgroundColor = color;

    colorCode.innerText = rgbToHex(color);

}

function rgbToHex(color) {

    let rgb = color.match(/\d+/g);

    let hex = "#" + rgb.map(function(value) {

        return Number(value).toString(16).padStart(2, "0");

    }).join("");

    return hex.toUpperCase();

}

colorCircles.forEach(function(circle) {

    circle.addEventListener("click", function() {

        let color = getComputedStyle(circle).backgroundColor;

        changeColor(color);

    });

});

copyButton.addEventListener("click", function() {

    let color = colorCode.innerText;

    navigator.clipboard.writeText(color);

    alert("Color Copied: " + color);

});

randomButton.addEventListener("click", function() {

    let randomColor = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    randomColor = randomColor.toUpperCase();

    changeColor(randomColor);

});