"use strict";

window.addEventListener("load", ex2());

function ex2() {
    // exercise a
    // const divs = document.querySelectorAll("div");
    // console.log(divs);
    // for (let i = 1; i < divs.length; i++) {
    //     divs[i].addEventListener("click", (e) => {
    //         console.log("Hi I'm from " + e.target.id);
    //     });
    // }

    // exercise b
    // const div = document.querySelector("#outer");
    // div.addEventListener("click", (e) => {
    //     console.log("Hi I'm from " + e.target.id);
    // });

    // exercise c
    const div = document.querySelector("#outer");
    const paragraph = document.querySelector("#paragraph");
    div.addEventListener("click", (e) => {
        paragraph.innerHTML = "Hi I'm from " + e.target.id;
    });
}
