"use strict";
const url = "https://api.punkapi.com/v2/beers";
let beerList;

window.addEventListener("load", init());

function init() {
    document.querySelector("#abv-btn").addEventListener("click", filterBeers);
    fetchBeers();
}

function fetchBeers() {
    fetch(url)
        .then((res) => res.json())
        .then((beers) => {
            displayBeers(beers);
            beerList = beers;
        });
}

function filterBeers() {
    const value = document.querySelector("#filter-abv").value;
    console.log(beerList);
    const list = beerList.filter((beer) => beer.abv <= value);
    displayBeers(list);
}

function displayBeers(list) {
    const tableBody = document.querySelector("#tbl1");

    const listItems = list.map(
        (beer) =>
            `<tr>
                <td>${beer.name}</td>
                <td>${beer.tagline}</td>
                <td>${beer.abv}</td>
                <td>${beer.ibu}</td>
            </tr>`
    );
    tableBody.innerHTML = listItems.join("");
}
