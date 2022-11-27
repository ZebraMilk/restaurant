export default function loadAbout() {
    const content = document.getElementById("content");
    const about = document.createElement("h1")
    about.innerText = "ABOUT";
    content.appendChild(about);

    console.log("About loaded");
};