/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout() {\n    const content = document.getElementById(\"content\");\n    const about = document.createElement(\"h1\")\n    about.innerText = \"ABOUT\";\n    content.appendChild(about);\n\n    console.log(\"About loaded\");\n};\n\n//# sourceURL=webpack://01-restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n    const content = document.getElementById(\"content\");\n    const home = document.createElement(\"h1\")\n    home.innerText = \"HOME\";\n    content.appendChild(home);\n\n    console.log(\"Home loaded\");\n};\n\n//# sourceURL=webpack://01-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n\n\n\n// always load the nav menu on initial load\n(0,_load_js__WEBPACK_IMPORTED_MODULE_1__.loadInitialHeader)();\n\n// grab all the nav options to add listeners\nconst navOptions = document.getElementsByClassName(\"nav-opt\");\n[...navOptions].forEach((option) => {\n    // what if I define a generic load() function that I can pass the page ID, which calls the function from load.js which calls the appropriate load function from the relevant page.js?\n    const nav = option.lastChild.innerText.toLowerCase();\n    option.addEventListener(\"click\", (e) => {\n        (0,_load_js__WEBPACK_IMPORTED_MODULE_1__.clearPage)();\n        console.log(nav);\n        (0,_load_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)(nav);\n    })\n});\n\n// load the home page \n(0,_load_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)(\"home\");\n\nconsole.log(\"it works, thus far\");\n\n//# sourceURL=webpack://01-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearPage\": () => (/* binding */ clearPage),\n/* harmony export */   \"loadInitialHeader\": () => (/* binding */ loadInitialHeader),\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.js */ \"./src/menu/menu.js\");\nconst content = document.getElementById(\"content\");\n\n\n\n\nfunction loadInitialHeader() {\n    const header = document.createElement(\"header\");\n    const navMenu = document.createElement(\"nav\");\n    navMenu.id = \"nav-menu\";\n    header.id = \"nav-container\";\n\n    const navList = [\"Home\", \"Menu\", \"About\"];\n\n    navList.forEach(title => {\n        const navDiv = document.createElement(\"div\");\n        const navH = document.createElement(\"h3\");\n        navH.textContent = `${title}`;\n        navDiv.classList.add(\"nav-opt\");\n        // add lowercase ID for making event listeners\n        navDiv.id = `${title}`;\n        navDiv.appendChild(navH);\n        navMenu.appendChild(navDiv);\n    });\n\n    header.appendChild(navMenu);\n    content.appendChild(header);\n};\n\n// clear the displayed page contents except for the nav bar\nconst clearPage = () => {\n    // grab the header div that was loaded initially\n    const content = document.getElementById(\"content\");\n    while (content.firstChild != content.lastChild) {\n        content.removeChild(content.lastElementChild);\n    };\n};\n\n// load each page onClick\n// generic load function that is exported and calls on the appropriate page when passed an ID value from main.js\nfunction loadPage(page) {\n    if (page == \"home\") {\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else if (page == \"about\") {\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } else if (page == \"menu\") {\n        (0,_menu_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else console.log(\"OOPS\");\n};\n\n\n//# sourceURL=webpack://01-restaurant/./src/load.js?");

/***/ }),

/***/ "./src/menu/assets/drink001.png":
/*!**************************************!*\
  !*** ./src/menu/assets/drink001.png ***!
  \**************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://01-restaurant/./src/menu/assets/drink001.png?");

/***/ }),

/***/ "./src/menu/assets/food001.png":
/*!*************************************!*\
  !*** ./src/menu/assets/food001.png ***!
  \*************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://01-restaurant/./src/menu/assets/food001.png?");

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menuItems_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems.json */ \"./src/menu/menuItems.json\");\n/* harmony import */ var _assets_drink001_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/drink001.png */ \"./src/menu/assets/drink001.png\");\n/* harmony import */ var _assets_drink001_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_drink001_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_food001_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/food001.png */ \"./src/menu/assets/food001.png\");\n/* harmony import */ var _assets_food001_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_food001_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n\n\nconst newCard = (menuItem) => {\n\n    // make all the components of a card, including the container\n    const cardContainer = document.createElement(\"div\");\n    const description = document.createElement(\"div\");\n    const itemName = document.createElement(\"h4\");\n    const itemDescription = document.createElement(\"p\");\n    const itemPrice = document.createElement(\"h4\");\n    const itemImage = document.createElement(\"img\");\n\n    // Add classes to all the new dom objects\n    cardContainer.classList.add(\"card\");\n    description.classList.add(\"description\")\n    itemName.classList.add(\"item-name\");\n    itemDescription.classList.add(\"item-description\");\n    itemPrice.classList.add(\"item-price\");\n    itemImage.classList.add(\"item-image\");\n\n    // populate the new dom objects from the JSON object passed into the function\n    itemName.innerText = `${menuItem.name}`;\n    itemPrice.innerText = `${menuItem.price}`;\n    itemDescription.innerText = `${menuItem.description}`;\n\n    // have to do this better, inside this function...\n    itemImage.src = (_assets_drink001_png__WEBPACK_IMPORTED_MODULE_1___default());\n\n    // attach the new elements correctly\n    description.append(itemName, itemDescription, itemPrice);\n    cardContainer.append(description, itemImage)\n\n    // return the card for adding to the page\n    return cardContainer;\n};\n\nfunction loadMenu() {\n    // make the menuContainer for drinks and food\n    const menuContainer = document.createElement(\"main\");\n    menuContainer.id = \"menu-container\";\n    document.getElementById(\"content\")\n            .appendChild(menuContainer);\n\n    // make the container for the drink cards\n    const drinksHeading = document.createElement(\"h2\")\n    drinksHeading.classList.add(\"menu-type\");\n    drinksHeading.id = \"drinks\";\n    drinksHeading.innerText = \"Drinks\";\n\n    // attach the first sub-menu\n    menuContainer.appendChild(drinksHeading);\n\n    //iterate over the first element in our menuItems JSON file, the drinks part\n    _menuItems_json__WEBPACK_IMPORTED_MODULE_0__.drinks.forEach((item) => {\n        menuContainer.appendChild(newCard(item));\n    });\n\n    // make the next heading and add it to \n    const foodHeading = document.createElement(\"h2\");\n    foodHeading.classList.add(\"menu-type\");\n    foodHeading.id = \"food\";\n    foodHeading.innerText = \"Food\";\n    \n    menuContainer.appendChild(foodHeading);\n\n    // make cards for the food items \n    _menuItems_json__WEBPACK_IMPORTED_MODULE_0__.food.forEach((item) => {\n        menuContainer.appendChild(newCard(item));\n    });\n\n    console.log(\"Menu loaded\");\n};\n\n//# sourceURL=webpack://01-restaurant/./src/menu/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @font-face {\\n|     font-family: \\\"ComicNeue\\\";\\n|     src: url('./ComicNeueAngular-Regular.woff2') format('woff2'),\");\n\n//# sourceURL=webpack://01-restaurant/./src/style.css?");

/***/ }),

/***/ "./src/menu/menuItems.json":
/*!*********************************!*\
  !*** ./src/menu/menuItems.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"drinks\":[{\"name\":\"Bumbo\",\"price\":\"5 silver\",\"description\":\"Sword Coast spice mix, Chultian dark rum, limes from the Greenhouse Arcana in Silverymoon, and sugar-free sweet from prestidigitation nation.\",\"imageSource\":\"Bumbo\"},{\"name\":\"Knee of Bee\",\"price\":\"3 silver\",\"description\":\"In-house free-range apiary honey, local organic herb-infused neutral spirit, cruelty-free lemon juice\",\"imageSource\":\"KneeofBee\"},{\"name\":\"Old Fashioned\",\"price\":\"6 silver\",\"description\":\"Proprietary blend of Waterdhavian whiskey, Agave Spirit imported from Darkhold, a bitters from the Apothecary of Candlekeep\",\"imageSource\":\"OldFashioned\"}],\"food\":[{\"name\":\"Dragon Egg Benedict\",\"price\":\"2 gold\",\"description\":\"Poached Dragon Egg*, Luskandaise, choice of sourdough or flapjills. <br> *Not real dragon egg...\",\"imageSource\":\"DragonEggBenedict\"},{\"name\":\"Crock of Beef\",\"price\":\"9 silver\",\"description\":\"Braised beef, savory stock, barrel-aged salt.\",\"imageSource\":\"CrockofBeef\"},{\"name\":\"Basilisk Fillet\",\"price\":\"5 gold\",\"description\":\"Chef\\'s specialty, only the choicest cut of Basilisk tail steak. Cooked rare, no exceptions.\",\"imageSource\":\"BasiliskFillet\"}]}');\n\n//# sourceURL=webpack://01-restaurant/./src/menu/menuItems.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;