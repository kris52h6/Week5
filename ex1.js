"use strict";

window.addEventListener("load", ex1());
            function ex1() {
                const divs = document.querySelectorAll("div");
                for (let i = 1; i < divs.length; i++) {
                    divs[i].style.backgroundColor = "pink";
                }

                const element = document.querySelector("#btn");
                element.addEventListener("click", () => {
                    document.querySelector("#div1").style.backgroundColor = "blue";
                    document.querySelector("#div2").style.backgroundColor = "yellow";
                    document.querySelector("#div3").style.backgroundColor = "black";
                });
            }