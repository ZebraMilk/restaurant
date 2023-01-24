export default function loadHome() {
  const content = document.getElementById("content");
  const home = document.createElement("h1");
  home.innerText = "HOME";
  content.appendChild(home);

  const homeBody = document.createElement("section");
  const homeImage = document.createElement("img");
  const homeDetails = document.createElement("p");
  homeDetails.innerText = "Here is the description of the tavern."
  homeImage.src = "./src/icon.jpg";
  homeBody.appendChild(homeImage);
  homeBody.appendChild(homeDetails);

  content.appendChild(homeBody);

  console.log("Home loaded");
}
