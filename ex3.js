"use strict";

const list = ["Lars", "Peter", "Jan", "Ian"];
window.addEventListener("load", init());

function init() {
    const ul = document.querySelector("#ul");
    ul.innerHTML = list.map((name) => `<li>${name}</li>`).join("");

    // Add eventlisteners for buttons
    document.querySelector("#btn1").addEventListener("click", (e) => addName(e));
    document.querySelector("#btn2").addEventListener("click", (e) => removeFirst(e));
    document.querySelector("#btn3").addEventListener("click", (e) => removeLast(e));
}

function addName(e) {
    e.preventDefault();
    const name = document.querySelector("#form-input").value;

    list.push(name);
    updateList();
}

function removeFirst(e) {
    e.preventDefault();
    list.shift();
    updateList();
}

function removeLast(e) {
    e.preventDefault();
    list.pop();
    updateList();
}

function updateList() {
    ul.innerHTML = list.map((name) => `<li>${name}</li>`).join("");
}
