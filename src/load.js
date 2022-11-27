const content = document.getElementById("content");
import loadAbout from "./about.js";
import loadHome from "./home.js";
import loadMenu from "./menu/menu.js"

export function loadInitialHeader() {
    const header = document.createElement("header");
    const navMenu = document.createElement("nav");
    navMenu.id = "nav-menu";
    header.id = "nav-container";

    const navList = ["Home", "Menu", "About"];

    navList.forEach(title => {
        const navDiv = document.createElement("div");
        const navH = document.createElement("h3");
        navH.textContent = `${title}`;
        navDiv.classList.add("nav-opt");
        // add lowercase ID for making event listeners
        navDiv.id = `${title}`;
        navDiv.appendChild(navH);
        navMenu.appendChild(navDiv);
    });

    header.appendChild(navMenu);
    content.appendChild(header);
};

// clear the displayed page contents except for the nav bar
export const clearPage = () => {
    // grab the header div that was loaded initially
    const content = document.getElementById("content");
    while (content.firstChild != content.lastChild) {
        content.removeChild(content.lastElementChild);
    };
};

// load each page onClick
// generic load function that is exported and calls on the appropriate page when passed an ID value from main.js
export function loadPage(page) {
    if (page == "home") {
        loadHome();
    } else if (page == "about") {
        loadAbout();
    } else if (page == "menu") {
        loadMenu();
    } else console.log("OOPS");
};
