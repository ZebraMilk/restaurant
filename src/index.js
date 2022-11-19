import "./style.css";
// import loadInitialHeader from "./load.js";



console.log("it works, thus far");


// loadInitialHeader();

const header = document.createElement("header");
const content = document.getElementById("content");
const navMenu = document.createElement("nav");
navMenu.id = "nav-menu";

const navList = ["Home", "Menu", "About"];

navList.forEach(title => {
    const navDiv = document.createElement("div");
    navDiv.classList.add("nav-opt");
    const navH = document.createElement("h3");
    navH.textContent = `${title}`;
    navDiv.appendChild(navH);
    navMenu.appendChild(navDiv);
});

header.appendChild(navMenu);
content.appendChild(header);




const cards = document.getElementsByClassName("card");

[...cards].forEach((card) => {
    card.classList.add("light");
});
