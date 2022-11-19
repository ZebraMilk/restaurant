export const loadInitialHeader = () => {

    const header = document.createElement("header");
    const content = document.getElementById("content");
    const navMenu = document.createElement("nav");

    const navList = ["Home", "Menu", "About"];

    navList.forEach(title => {
        const navDiv = document.createElement("div");
        const navH = document.createElement("h3");
        navH.textContent = `${title}`;
        navDiv.classList.add("nav-opt").appendChild(navH);
        navMenu.appendChild("navDiv");
    });

    header.appendChild(navMenu);
    content.appendChild(header);
};
