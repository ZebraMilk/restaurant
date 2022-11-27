import "./style.css";
import { loadInitialHeader, clearPage, loadPage } from "./load.js";

// always load the nav menu on initial load
loadInitialHeader();

// grab all the nav options to add listeners
const navOptions = document.getElementsByClassName("nav-opt");
[...navOptions].forEach((option) => {
    // what if I define a generic load() function that I can pass the page ID, which calls the function from load.js which calls the appropriate load function from the relevant page.js?
    const nav = option.lastChild.innerText.toLowerCase();
    option.addEventListener("click", (e) => {
        clearPage();
        console.log(nav);
        loadPage(nav);
    })
});

// load the home page 
loadPage("home");


console.log("it works, thus far");
