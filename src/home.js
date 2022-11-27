export default function loadHome() {
    const content = document.getElementById("content");
    const home = document.createElement("h1")
    home.innerText = "HOME";
    content.appendChild(home);

    console.log("Home loaded");
};