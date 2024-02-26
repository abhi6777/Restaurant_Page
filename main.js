/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\r\n\r\nlet about = () => {\r\n     content.innerHTML = \"\";\r\n\r\n     const contact = document.createElement(\"h1\");\r\n     contact.innerHTML = \"Contact\";\r\n     content.appendChild(contact);\r\n\r\n     const contactMe = document.createElement(\"h2\");\r\n     contactMe.innerHTML = \"Abhimanyu Mahto\";\r\n     content.appendChild(contactMe);\r\n     const number = document.createElement(\"p\");\r\n     number.innerHTML = \"1111111111\";\r\n     content.appendChild(number);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://webpack/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page.js */ \"./src/initial-page.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\ndocument.body.style.backgroundColor = \"green\";\r\n\r\n(0,_initial_page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nconst homeBtn = document.querySelector(\"#home\");\r\nconst menuBtn = document.querySelector(\"#menu\");\r\nconst aboutBtn = document.querySelector(\"#about\");\r\n\r\nhomeBtn.addEventListener(\"click\", () => {\r\n  (0,_initial_page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\naboutBtn.addEventListener(\"click\", () => {\r\n  (0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\nmenuBtn.addEventListener(\"click\", () => {\r\n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\r\n\r\nlet home = () => {\r\n     content.innerHTML = \"\";\r\n\r\n     const restaurant = document.createElement(\"h1\");\r\n     restaurant.innerHTML = \"Eat Fresh\";\r\n     content.appendChild(restaurant);\r\n\r\n     const intro = document.createElement('p');\r\n     intro.innerHTML = \"Welcome to EatFresh, your one-stop shop for all things delicious. We offer a wide variety of dishes from all over the world, so you're sure to find something to your taste. Whether you're in the mood for a classic burger or something more adventurous, we've got you covered.\";\r\n     content.appendChild(intro);\r\n\r\n     const timing = document.createElement(\"h2\");\r\n     timing.innerHTML = \"Hours\";\r\n     content.appendChild(timing);\r\n\r\n     const timingDetails = document.createElement(\"p\");\r\n     let detail = \"EveryDay 9AM TO 9PM\";\r\n     timingDetails.innerHTML = detail;\r\n\r\n     content.appendChild(timingDetails);\r\n\r\n     const location = document.createElement('h2');\r\n     location.innerHTML = \"Location\";\r\n     content.appendChild(location);\r\n\r\n     const address = document.createElement(\"p\");\r\n     address.innerHTML = \"Rajdah, surat, hawrah\";\r\n     content.appendChild(address);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://webpack/./src/initial-page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\r\n\r\nlet menu = () => {\r\n     content.innerHTML = \"\";\r\n\r\n     const restaurant = document.createElement(\"h1\");\r\n     restaurant.innerHTML = \"Menu\";\r\n     content.appendChild(restaurant);\r\n\r\n     const beverages = document.createElement(\"h2\");\r\n     beverages.innerHTML = \"Beverages\";\r\n     content.appendChild(beverages);\r\n\r\n     const tea = document.createElement(\"h2\");\r\n     tea.innerHTML = \"Tea\";\r\n     content.appendChild(tea);\r\n     const teaDes = document.createElement(\"p\");\r\n     teaDes.innerHTML = \"Tea is an aromatic beverage made by pouring hot or boiling water over the leaves of the Camellia sinensis plant. The Camellia sinensis plant is an evergreen shrub native to East Asia, probably originating in the borderlands of southwestern China and northern Myanmar.\";\r\n     content.appendChild(teaDes);\r\n\r\n     const kulhadTea = document.createElement(\"h2\");\r\n     kulhadTea.innerHTML = \"Kulahad Tea\";\r\n     content.appendChild(kulhadTea);\r\n     const kulhadTeaDes = document.createElement(\"p\");\r\n     kulhadTeaDes.innerHTML = \"A Kullad or Kulhad is a traditional clay cup, made like all earthenware, by firing in kiln. The earthen cup tends to soak up a bit of the hot fluids poured into i. So, when you pour hot tea into a Kullad, a bit of the tea soaks into the clay and the two flavours intermingle and what creates the earthy flavour everyone \";\r\n     content.appendChild(kulhadTeaDes);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://webpack/./src/menu.js?");

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