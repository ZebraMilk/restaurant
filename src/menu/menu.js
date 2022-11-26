export default loadMenu;
import "./menuItems.json";

const newCard = (menuItem) => {

    // make all the components of a card, including the container
    const cardContainer = document.createElement("div");
    const description = document.createElement("div");
    const itemName = document.createElement("h4");
    const itemDescription = document.createElement("p");
    const itemPrice = document.createElement("h4");
    const itemImage = document.createElement("img");

    // Add classes to all the new dom objects
    cardContainer.classList.add("card");
    description.classList.add("description")
    itemName.classList.add("item-name");
    itemDescription.classList.add("item-description");
    itemPrice.classList.add("item-price");
    itemImage.classList.add("item-image");

    // populate the new dom objects from the JSON object passed into the function
    itemName.innerText = `${menuItem.name}`;
    itemPrice.innerText = `${menuItem.price}`;
    itemDescription.innerText = `${menuItem.description}`;
    itemImage.src = `${menuItem.imageSource}`;

    // attach the new elements correctly
    description.appendChild(itemName, itemDescription, itemPrice);
    cardContainer.appendChild(description, itemImage)

    // return the card for adding to the page
    return cardContainer;
}

function loadMenu() {
    // make the menuContainer for drinks and food
    const menuContainer = document.createElement("main");
    
    // make the container for the drink cards
    const drinksHeading = document.createElement("h2")
    drinksHeading.classList.add("menu-type");
    drinksHeading.id = "drinks";
    drinksHeading.innerText = "Drinks";

    // attach the first sub-menu
    menuContainer.appendChild(drinksHeading);

    //iterate over the first element in our menuItems JSON file, the drinks part
    for (item in menuItems[0]) {
        menuContainer.appendChild(newCard(item));
    }

    // make the next heading and add it to 
    const foodHeading = document.createElement("h2");
    foodHeading.classList.add("menu-type");
    foodHeading.id = "food";
    foodHeading.innerText = "Food";
    
    menuContainer.appendChild(foodHeading);

    for (item in menuItems[1]) {
        menuContainer.appendChild(newCard(item));
    }

    // make a drink card


    // make the container for the food cards

    // make a food card

    console.log("Menu Loaded");
}