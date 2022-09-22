"use strict";
const url = "https://countries.plaul.dk/api/countries/";
let previousCountry;
window.addEventListener("load", init());

function init() {
    document.querySelector("svg").addEventListener("click", (e) => {
        let countryId = e.target.id;
        clearColor();
        fetchCountry(countryId);
    });
}

function fetchCountry(countryId) {
    let currencyList = [];
    fetch(url + countryId).then((res) =>
        res.json().then((country) => {
            console.log(country);
            document.querySelector("#flag").src = country.flag;
            document.querySelector("#country > span").innerText = country.name.common;
            document.querySelector("#un-member > span").innerText = country.unMember;
            for (const property in country.currencies) {
                currencyList.push(property);
            }
            document.querySelector("#currencies > span").innerText = currencyList;
            document.querySelector("#capital > span").innerText = country.capital;
            document.querySelector("#borders > span").innerText = country.borders;
        })
    );

    document.getElementById(countryId).style.fill = "blue";
}

function clearColor() {
    const paths = document.querySelectorAll("path");
    for (let i = 0; i < paths.length; i++) {
        paths[i].style.fill = "#dcdcdc";
    }
}
