import "./style.css";
import loadInitialHeader from "./load.js";
import "./home.js";
import "./menu.js";
import "./about.js";




loadInitialHeader();

const cards = document.getElementsByClassName("card");

[...cards].forEach((card) => {
    card.classList.add("light");
});

console.log("it works, thus far");
