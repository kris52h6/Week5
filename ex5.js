"use strict";

// it aint pretty

const display = document.querySelector("#display");
document.querySelector("load", init());

function init() {
    const btns = document.querySelector("#buttons");
    const display = document.querySelector("#display");
    const calculate = document.querySelector("#calculate");

    btns.addEventListener("click", (e) => {
        display.innerHTML = display.innerHTML + e.target.innerText;
    });

    calculate.addEventListener("click", (e) => {
        e.stopPropagation();
        getDisplay();
    });
}

function getDisplay() {
    const paragraph = display.innerText;
    if (paragraph.indexOf("*") == 1) {
        const split = paragraph.split("*");
        display.innerHTML = calculateDisplay("*", split);
    }
    if (paragraph.indexOf("/") == 1) {
        const split = paragraph.split("/");
        display.innerHTML = calculateDisplay("/", split);
    }
    if (paragraph.indexOf("-") == 1) {
        const split = paragraph.split("-");
        display.innerHTML = calculateDisplay("-", split);
    }
    if (paragraph.indexOf("+") == 1) {
        const split = paragraph.split("+");
        display.innerHTML = calculateDisplay("+", split);
    }
}

function calculateDisplay(str, paragraph) {
    const n1 = Number(paragraph[0]);
    const n2 = Number(paragraph[1]);

    switch (str) {
        case "*":
            console.log(n1 * n2);
            return n1 * n2;
        case "/":
            console.log(n1 / n2);
            return n1 / n2;
        case "-":
            console.log(n1 - n2);
            return n1 - n2;
        case "+":
            console.log(n1 + n2);
            return n1 + n2;
    }
}
