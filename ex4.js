"use strict";

const cars = [
    { id: 1, year: 1997, make: "Ford", model: "E350", price: 3000 },
    { id: 2, year: 1999, make: "Chevy", model: "Venture", price: 4900 },
    { id: 3, year: 2000, make: "Chevy", model: "Venture", price: 5000 },
    { id: 4, year: 1996, make: "Jeep", model: "Grand Cherokee", price: 4799 },
    { id: 5, year: 2005, make: "Volvo", model: "V70", price: 44799 },
];

let toggle = false;

updateCars(cars);

document.querySelector("load", init());

function init() {
    // filter button
    document.querySelector("#btn").addEventListener("click", (e) => {
        e.preventDefault();
        const value = document.querySelector("#input").value;
        filterList(value);
    });

    // clear button
    document.querySelector("#clear-btn").addEventListener("click", (e) => {
        document.querySelector("#input").value = "";
        updateCars(cars);
    });

    // price sorting
    document.querySelector("#price-header").addEventListener("click", (e) => {
        sortList();
    });
}

function filterList(value) {
    const list = cars.filter((car) => car.price <= value);
    updateCars(list);
}

function sortList() {
    const sortedList = cars.sort((a, b) => {
        return a.price - b.price;
    });

    if (!toggle) {
        updateCars(sortedList);
        toggle = true;
    } else {
        sortedList.reverse();
        toggle = false;
    }

    updateCars(sortedList);
}

function updateCars(cars) {
    const tableBody = document.querySelector("#tbody");

    tableBody.innerHTML = cars
        .map(
            (car) => `<tr>
                <td>${car.id}</td>
                <td>${car.year}</td>
                <td>${car.make}</td>
                <td>${car.model}</td>
                <td>${car.price}</td>
                </tr>`
        )
        .join("");
}
