"use strict";

const url = "https://jsonplaceholder.typicode.com/users/";
const ul = document.querySelector("#ul");

window.addEventListener("load", init());

function init() {
    document.querySelector("#get-single-btn").addEventListener("click", getSingleUser);
    document.querySelector("#load-data-btn").addEventListener("click", loadData);
}

function getSingleUser() {
    const value = document.querySelector("#user-input").value;
    const single_user = document.querySelector("#user");
    fetch(url + value)
        .then((res) => res.json())
        .then((user) => {
            single_user.innerHTML = `
            ${user.id}
            ${user.name}
            ${user.email}
            `;
        });
}

function loadData() {
    fetch(url)
        .then((res) => res.json())
        .then((names) => {
            const listItems = names.map((name) => `<li>${name.name}</li>`);
            ul.innerHTML = listItems.join("");
        });
}
