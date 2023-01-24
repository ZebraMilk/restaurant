export default loadHome;
import lichIcon from "./listing-lich-external.png";





function loadHome() {
  // make the DOM elements
  const content = document.getElementById("content");
  const homeBody = document.createElement("section");
  const homeDescriptionContainer = document.createElement("div");
  const homeHeading = document.createElement("h1");
  const homeImage = document.createElement("img");
  const homeDescription = document.createElement("p");
  const homeVision = document.createElement("h2");

  //give classes to the elements for CSS targeting
  homeBody.classList.add("home home-body");
  homeDescriptionContainer.classList.add("home description-container");
  






  //add content to the elements as needed
  homeHeading.innerText = "HOME";
  content.appendChild(homeHeading);
  homeDescription.innerText = "Here is the description of the tavern."
  homeImage.src = lichIcon;

  //add the DOM elements together in the proper order
  homeBody.appendChild(homeImage);
  homeBody.appendChild(homeDescription);

  content.appendChild(homeBody);

  //when it's all done, log the load
  console.log("Home loaded");
}
