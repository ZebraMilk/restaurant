export default loadInitialHeader;

const content = document.getElementById("content");

function loadInitialHeader() {
    const header = document.createElement("header");
    const navMenu = document.createElement("nav");
    navMenu.id = "nav-menu";

    const navList = ["Home", "Menu", "About"];

    navList.forEach(title => {
        const navDiv = document.createElement("div");
        const navH = document.createElement("h3");
        navH.textContent = `${title}`;
        navDiv.classList.add("nav-opt");
        navDiv.appendChild(navH);
        navMenu.appendChild(navDiv);
    });

    header.appendChild(navMenu);
    content.appendChild(header);
};

// clear the displayed page contents except for the nav bar

// load each page onClick

