"use strict";
const url = "http://localhost:8080/api/cars/";
// const options = {
//     headers: {
//         "Content-type": "application/json",
//     },
// };

window.addEventListener("load", init());

function init() {
    document.querySelector("#btn-get-all").addEventListener("click", getAllCars);
    document.querySelector("#btn-get-single").addEventListener("click", getSingleCar);
    document.querySelector("#btn-add-car").addEventListener("click", addCar);
    document.querySelector("#btn-edit-car").addEventListener("click", editCar);
    document.querySelector("#btn-submit-editted-car").addEventListener("click", postCar);
}

function getAllCars() {
    fetch(url).then((res) =>
        res.json().then((cars) => {
            const p = document.querySelector("#allCars");
            console.log(cars);
            p.innerHTML = cars
                .map(
                    (car) => `
                    <p>
                ${car.brand}
                ${car.model}
                ${car.pricePrDay}
                ${car.bestDiscount}
                </p>`
                )

                .join("");
        })
    );
}

function getSingleCar() {
    const userInput = document.querySelector("#text-for-id").value;
    console.log(userInput);

    fetch(url + userInput)
        .then((res) => res.json())
        .then((car) => {
            document.querySelector("#singleCar").innerHTML = `
            ${car.brand}
            ${car.model}
            ${car.pricePrDay}
            ${car.bestDiscount}
            `;
        });
}

function addCar() {
    const carBrand = document.querySelector("#input-field1").value;
    const carModel = document.querySelector("#input-field2").value;
    const carPricePrDay = document.querySelector("#input-field3").value;
    const carBestDiscount = document.querySelector("#input-field4").value;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            brand: carBrand,
            model: carModel,
            pricePrDay: carPricePrDay,
            bestDiscount: carBestDiscount,
        }),
    })
        .then((res) => res.json())
        .then((car) => {
            const postResult = document.querySelector("#addCar");
            postResult.innerHTML = `
        ${car.brand}
        ${car.model}
        ${car.pricePrDay}
        ${car.bestDiscount}
        `;
        });
}

function editCar() {
    const userInput = document.querySelector("#text-for-id2").value;
    let carBrand = document.querySelector("#edit-field1");
    let carModel = document.querySelector("#edit-field2");
    let carPricePrDay = document.querySelector("#edit-field3");
    let carBestDiscount = document.querySelector("#edit-field4");

    fetch(url + userInput).then((res) =>
        res.json().then((car) => {
            console.log(car);
            carBrand.value = car.brand;
            carModel.value = car.model;
            carPricePrDay.value = car.pricePrDay;
            carBestDiscount.value = car.bestDiscount;
        })
    );
}

function postCar() {
    const userInput = document.querySelector("#text-for-id2").value;
    let carBrand = document.querySelector("#edit-field1");
    let carModel = document.querySelector("#edit-field2");
    let carPricePrDay = document.querySelector("#edit-field3");
    let carBestDiscount = document.querySelector("#edit-field4");
    console.log("hej");
    fetch(url + userInput, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            brand: carBrand.value,
            model: carModel.value,
            pricePrDay: carPricePrDay.value,
            bestDiscount: carBestDiscount.value,
        }),
    });
}
