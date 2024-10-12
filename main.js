/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Box sizing rules */
*,
*::before,
*::after {
	box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
	padding: 0;
}

/* Remove default margin */
* {
	margin: 0;
}

/* Set core body defaults */
body {
	min-height: 100vh;
	scroll-behavior: smooth;
	text-rendering: optimizeSpeed;
	line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
	list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
	text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
	max-width: 100%;
	display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
	margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
	font: inherit;
}

select {
	border: none;
	padding: 0 1em 0 0;
	margin: 0;
	width: 100%;
	font-family: inherit;
	font-size: inherit;
	cursor: inherit;
	line-height: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}
`, "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;;;CAGC,sBAAsB;AACvB;;AAEA,2BAA2B;AAC3B;;CAEC,UAAU;AACX;;AAEA,0BAA0B;AAC1B;CACC,SAAS;AACV;;AAEA,2BAA2B;AAC3B;CACC,iBAAiB;CACjB,uBAAuB;CACvB,6BAA6B;CAC7B,gBAAgB;AACjB;;AAEA,iEAAiE;AACjE;;CAEC,gBAAgB;AACjB;;AAEA,0DAA0D;AAC1D;CACC,8BAA8B;AAC/B;;AAEA,oCAAoC;AACpC;CACC,eAAe;CACf,cAAc;AACf;;AAEA,mDAAmD;AACnD;CACC,eAAe;AAChB;;AAEA,yCAAyC;AACzC;;;;CAIC,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,SAAS;CACT,WAAW;CACX,oBAAoB;CACpB,kBAAkB;CAClB,eAAe;CACf,oBAAoB;AACrB;;AAEA,iFAAiF;AACjF;CACC;EACC,qCAAqC;EACrC,uCAAuC;EACvC,sCAAsC;EACtC,gCAAgC;CACjC;AACD","sourcesContent":["/* Box sizing rules */\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n/* Remove default padding */\nul[class],\nol[class] {\n\tpadding: 0;\n}\n\n/* Remove default margin */\n* {\n\tmargin: 0;\n}\n\n/* Set core body defaults */\nbody {\n\tmin-height: 100vh;\n\tscroll-behavior: smooth;\n\ttext-rendering: optimizeSpeed;\n\tline-height: 1.5;\n}\n\n/* Remove list styles on ul, ol elements with a class attribute */\nul[class],\nol[class] {\n\tlist-style: none;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n\ttext-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg {\n\tmax-width: 100%;\n\tdisplay: block;\n}\n\n/* Natural flow and rhythm in articles by default */\narticle > * + * {\n\tmargin-top: 1em;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n\tfont: inherit;\n}\n\nselect {\n\tborder: none;\n\tpadding: 0 1em 0 0;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-family: inherit;\n\tfont-size: inherit;\n\tcursor: inherit;\n\tline-height: inherit;\n}\n\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n\t* {\n\t\tanimation-duration: 0.01ms !important;\n\t\tanimation-iteration-count: 1 !important;\n\t\ttransition-duration: 0.01ms !important;\n\t\tscroll-behavior: auto !important;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* GENERAL */

:root {
	--white: #fcfcfc;
	--black: #202020;
	--gray: #777777;
	--light-gray: #f5f5f5;
	--High-priority: #e72929;
	--Medium-priority: #fb9048;
	--Low-priority: #87a2ff;

	--border-radius-btns: 10px;
}

button {
	background: none;
	border: none;
	outline: 0px;
	cursor: pointer;
	transition: all 200ms ease;
}

button:hover {
	transition: all 200ms ease;
}

.material-symbols-rounded {
	font-weight: 300;
	font-size: 2rem;
}

li {
	display: flex;
	align-items: center;
}

/* CONTAINER */

.container {
	display: flex;
	width: 100vw;
	height: 100vh;
	padding: 8px;
	background: var(--white);
	overflow-x: hidden;
	font-family: "DM Sans", Helvetica, sans-serif;
}

/* SIDEBAR */

.sidebar {
	display: flex;
	flex-direction: column;
	background: var(--light-gray);
	padding: 15px 0px;
	width: 0px;
	gap: 40px;
	border-radius: 15px;
	overflow: hidden;
	transition: all 200ms ease;
}

.sidebar h1,
#add-new-project-btn > * {
	flex-shrink: 0;
	word-break: keep-all;
}

.sidebar h1 {
	font-size: 1.6rem;
	font-weight: 500;
}

.sidebar.open {
	flex: 1;
	padding: 15px 25px;
	transition: all 200ms ease;
}

@media (max-width: 750px) {
	.sidebar {
		z-index: 2;
	}

	.sidebar.open {
		position: absolute;
		height: 98%;
		width: 65%;
	}
}

.sidebar div:nth-child(1) {
	display: flex;
	justify-content: space-between;
	padding: 0;
}

#sidebar-toggle-btn {
	display: flex;
	position: relative;
	transition: all 200ms ease;
}

#sidebar-toggle-btn.closed {
	animation: return 200ms ease-out;
	position: absolute;
	top: 20px;
	left: 8px;
	transition: all 200ms ease;
}

@keyframes return {
	0% {
		left: 150px;
	}
	100% {
		left: 8px;
	}
}

.default-sidebar-list {
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.sidebar-projects h2 {
	font-size: 1.2rem;
	font-weight: 500;
}

.sidebar-project-btn,
.project-btn {
	width: 100%;
	display: flex;
	justify-content: start;
	align-items: center;
	padding: 3px 0px;
	gap: 8px;
	font-weight: 400;
	font-size: 1.1rem;
	border-radius: 5px;
}

.sidebar-project-btn:active {
	scale: 1.02;
}

.sidebar-project-btn:hover,
.project-btn:hover {
	background: #f1f1f1;
}

#add-new-project-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	width: 100%;
	height: 40px;
	margin: 15px 0px 0px 0px;
	background: #e4e4e4;
	border-radius: var(--border-radius-btns);
	color: var(--gray);
	font-size: 1rem;
	font-weight: 600;
	transition: background-color 100ms ease;
}

#add-new-project-btn:hover {
	transition: background-color 100ms ease;
	background: var(--black);
	color: var(--white);
}

#add-new-project-btn:active {
	scale: 1.02;
}

.projects-sidebar-list {
	display: flex;
	gap: 5px;
	flex-direction: column;
	margin-top: 10px;
	width: 100%;
}

.projects-sidebar-list li {
	width: 100%;
}

button.project-btn {
	width: 100%;
}

/* MAIN TODO CONTENT */

.main-to-do-list-container {
	display: flex;
	flex-direction: column;
	gap: 20px;
	flex: 4;
	padding: 25px 80px;
	background: var(--white);
	transition: all 200ms ease;
}

.main-to-do-list-container div:nth-child(1) {
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.main-to-do-list-container.closed {
	padding: 25px 120px;
	transition: all 200ms ease;
}

@media (max-width: 750px) {
	.main-to-do-list-container {
		padding: 60px 10px;
	}

	.main-to-do-list-container.closed {
		padding: 60px 10px;
	}
}

ul#to-do-list {
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 0;
	overflow: hidden;
}

#project-name {
	font-size: clamp(1.2rem, 2vw + 2rem, 3rem);
	color: var(--black);
	padding: 0;
	line-height: 1;
}

#to-dos-length {
	margin-top: -8px;
	font-weight: 400;
	color: var(--gray);
}

.division-line {
	width: 100%;
	background: var(--gray);
	opacity: 0.2;
	height: 1px;
}

.to-do-item {
	position: relative;
	display: flex;
	left: 0;
	align-items: center;
	gap: 20px;
	cursor: pointer;
	height: 40px;
	padding-left: 10px;
	border-radius: 5px;
	border: 1px solid var(--light-gray);
	transition: background-color 100ms ease, left 1s ease, opacity 1s ease;
	opacity: 1;
}

@media (max-width: 750px) {
	.to-do-item {
		height: 60px;
	}
}

.to-do-item.completed {
	left: 100px;
	opacity: 0;
}

.to-do-item:hover {
	transition: all 200ms ease;
	background: var(--light-gray);
}

#new-to-do-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	width: 150px;
	height: 40px;
	margin: 0;
	background: var(--black);
	border-radius: 8px;
	color: var(--white);
	font-size: 1rem;
	font-weight: 600;
	transition: background-color 100ms ease;
}

#new-to-do-btn:hover {
	transition: background-color 100ms ease;
	background: var(--white);
	color: var(--black);
	border: 2px solid var(--light-gray);
}

#new-to-do-btn:active {
	scale: 1.02;
}

input[type="checkbox"] {
	appearance: none;
	width: 20px;
	height: 20px;
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 5px;
	cursor: pointer;
}

input[type="checkbox"]:checked::after {
	content: "\\e834";
	font-family: "Material Icons";
	font-size: 24px;
	color: var(--black);
	position: relative;
	border-radius: 15px;
	top: -9px;
	left: -3px;
	opacity: 1;
	transition: opacity 0.2s ease-in-out;
}

.to-do-date-text {
	display: flex;
	align-items: center;
	margin-left: auto;
	color: var(--gray);
}

.to-do-priority {
	display: flex;
	align-items: center;
	transition: all 200ms ease-in-out;
	cursor: pointer;
}

.to-do-priority:hover {
	transition: all 200ms ease-in-out;
	scale: 1.09;
	transition: all 200ms ease-in-out;
	scale: 1.09;
}

.to-do-priority:active {
	transition: all 200ms ease-in-out;
	scale: 1.2;
}

.to-do-priority i {
	margin-top: 1px;
	scale: 0.7;
}

i.none {
	color: var(--gray);
}

i.high {
	color: var(--High-priority);
}

i.medium {
	color: var(--Medium-priority);
}

i.low {
	color: var(--Low-priority);
}

#color-pop-up {
	display: none;
	position: absolute;
	background: var(--light-gray);
}

#color-pop-up.active {
	display: flex;
	padding: 5px 0px;
	justify-content: space-between;
	flex-direction: column;
	border-radius: 10px;
}

#color-pop-up i {
	scale: 0.7;
	cursor: pointer;
	transition: all 100ms ease;
}

#color-pop-up i:hover {
	scale: 0.75;
	transition: all 100ms ease;
}

/* CREATE TODO POP UP */

#to-do-pop-up,
#new-project-pop-up {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	gap: 10px;
	position: absolute;
	width: 700px;
	height: 450px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	padding: 25px;
	background: var(--white);
	border: 1px solid var(--light-gray);
	z-index: 999;
	border-radius: 15px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

@media (max-width: 750px) {
	#to-do-pop-up,
	#new-project-pop-up {
		width: 95%;
		height: 70%;
	}

	#to-do-pop-up div:nth-child(1) {
		display: flex;
		gap: 50px;
	}
}

/* TODO'S POP UP INPUTS */

#to-do-pop-up input[type="text"] {
	border: none;
	outline: 0px;
	background-color: inherit;
	padding: 0;
}

#to-do-pop-up select {
	border: none;
	color: var(--black);
	font-weight: 500;
	font-family: "DM Sans", Helvetica, sans-serif;
	padding: 5px 5px;
	border-radius: 5px;
	width: 30%;
	cursor: pointer;
	line-height: 1.1;
	background: var(--light-gray);
}

option {
	text-align: left;
	font-weight: 500;
	background: var(--light-gray);
}

option:hover {
	background: red;
}

#to-do-priority option:nth-of-type(2) {
	color: var(--Low-priority);
}

#to-do-priority option:nth-of-type(3) {
	color: var(--Medium-priority);
}

#to-do-priority option:nth-of-type(4) {
	color: var(--High-priority);
}

/* TODO INPUTS */

#to-do-pop-up input[type="text"]:focus {
	border-bottom: 1px solid var(--gray);
}

#to-do-pop-up div {
	margin: 5px 0px;
}

#to-do-pop-up > div:first-child {
	display: flex;
	justify-content: space-between;
	gap: 20px;
}

#to-do-pop-up div p {
	font-weight: 500;
	font-size: 1rem;
	margin-bottom: 5px;
}

#to-do-pop-up button {
	padding: 3px 20px;
	transition: all 200ms ease;
	border-radius: 5px;
	font-weight: 500;
}

#to-do-pop-up button#save-to-do,
button#save-edited-btn {
	background: var(--black);
	color: var(--white);
}

#to-do-pop-up button#save-to-do:hover,
button#save-edited-btn:hover {
	background-color: var(--light-gray);
	color: var(--black);
	transition: all 200ms ease;
}

button#close-pop-up {
	background: none;
	display: flex;
	height: 35px;
	padding: 0;
	justify-content: center;
	align-items: center;
}

button#close-pop-up:hover {
	background: var(--light-gray);
}

#to-do-title {
	flex: 1;
	color: var(--black);
	font-weight: 600;
	font-size: 2rem;
}

#to-do-pop-up input[type="text"]#to-do-title {
	width: 30px;
}

#to-do-description {
	color: var(--gray);
}

#date-container {
	display: flex;
	gap: 10px;
	align-items: center;
}

#date-container i {
	cursor: pointer;
}

.flatpickr-calendar {
	font-family: "DM Sans", Arial, Helvetica, sans-serif;
}

input#to-do-date.flatpickr-input {
	border: 1px solid #ccc;
	padding: 5px 10px;
	border-radius: 10px;
}

#buttons-container {
	width: 100%;
	display: flex;
	gap: 10px;
	justify-content: space-between;
}

#buttons-container button {
	flex: 1;
}

#buttons-container button#delete-to-do-btn {
	background: var(--High-priority);
	color: white;
}

/* NEW PROJECT POP UP */

#new-project-pop-up {
	display: flex;
	flex-direction: row;
	height: 100px;
	width: 400px;
	align-items: end;
	justify-content: space-between;
}

@media (max-width: 750px) {
	#new-project-pop-up {
		width: 95%;
	}
}

#new-project-pop-up input {
	flex: auto;
	padding: 0px 0px 0px 20px;
	height: 100%;
	font-weight: 600;
	color: var(--black);
	border: none;
	font-size: 1.1rem;
	background: var(--light-gray);
	border-radius: 10px;
}

#new-project-pop-up input:focus {
	outline: 1px solid var(--gray);
}

#new-project-pop-up button {
	padding: 0;
}

#new-project-pop-up button:active {
	scale: 1.1;
}

.project-btn {
	background: #f1f1f1;
	position: relative;
}

.project-btn:hover {
	background: #e9e9e9;
}

.project-btn span {
	line-height: 1;
}

.delete-project-btn {
	position: absolute;
	right: 10px;
	top: 7px;
	color: var(--gray);
}

.delete-project-btn i.material-symbols-rounded {
	font-size: 1.6rem;
}

/* BLURRY BACKGROUND */

#to-do-pop-up-container,
#new-project-pop-up-container {
	position: fixed;
	overflow: hidden;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 0px;
	width: 100%;
	background: rgba(255, 255, 255, 0.19);
	border-radius: 0;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(3px);
	-webkit-backdrop-filter: blur(2.8px);
	z-index: 2;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,
		height 0.3s ease-in-out;
}

#to-do-pop-up-container.active,
#new-project-pop-up-container.active {
	opacity: 1;
	visibility: visible;
	height: 100%;
	transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,
		height 0.3s ease-in-out;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* GENERAL */\n\n:root {\n\t--white: #fcfcfc;\n\t--black: #202020;\n\t--gray: #777777;\n\t--light-gray: #f5f5f5;\n\t--High-priority: #e72929;\n\t--Medium-priority: #fb9048;\n\t--Low-priority: #87a2ff;\n\n\t--border-radius-btns: 10px;\n}\n\nbutton {\n\tbackground: none;\n\tborder: none;\n\toutline: 0px;\n\tcursor: pointer;\n\ttransition: all 200ms ease;\n}\n\nbutton:hover {\n\ttransition: all 200ms ease;\n}\n\n.material-symbols-rounded {\n\tfont-weight: 300;\n\tfont-size: 2rem;\n}\n\nli {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n/* CONTAINER */\n\n.container {\n\tdisplay: flex;\n\twidth: 100vw;\n\theight: 100vh;\n\tpadding: 8px;\n\tbackground: var(--white);\n\toverflow-x: hidden;\n\tfont-family: \"DM Sans\", Helvetica, sans-serif;\n}\n\n/* SIDEBAR */\n\n.sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: var(--light-gray);\n\tpadding: 15px 0px;\n\twidth: 0px;\n\tgap: 40px;\n\tborder-radius: 15px;\n\toverflow: hidden;\n\ttransition: all 200ms ease;\n}\n\n.sidebar h1,\n#add-new-project-btn > * {\n\tflex-shrink: 0;\n\tword-break: keep-all;\n}\n\n.sidebar h1 {\n\tfont-size: 1.6rem;\n\tfont-weight: 500;\n}\n\n.sidebar.open {\n\tflex: 1;\n\tpadding: 15px 25px;\n\ttransition: all 200ms ease;\n}\n\n@media (max-width: 750px) {\n\t.sidebar {\n\t\tz-index: 2;\n\t}\n\n\t.sidebar.open {\n\t\tposition: absolute;\n\t\theight: 98%;\n\t\twidth: 65%;\n\t}\n}\n\n.sidebar div:nth-child(1) {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: 0;\n}\n\n#sidebar-toggle-btn {\n\tdisplay: flex;\n\tposition: relative;\n\ttransition: all 200ms ease;\n}\n\n#sidebar-toggle-btn.closed {\n\tanimation: return 200ms ease-out;\n\tposition: absolute;\n\ttop: 20px;\n\tleft: 8px;\n\ttransition: all 200ms ease;\n}\n\n@keyframes return {\n\t0% {\n\t\tleft: 150px;\n\t}\n\t100% {\n\t\tleft: 8px;\n\t}\n}\n\n.default-sidebar-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5px;\n}\n\n.sidebar-projects h2 {\n\tfont-size: 1.2rem;\n\tfont-weight: 500;\n}\n\n.sidebar-project-btn,\n.project-btn {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: start;\n\talign-items: center;\n\tpadding: 3px 0px;\n\tgap: 8px;\n\tfont-weight: 400;\n\tfont-size: 1.1rem;\n\tborder-radius: 5px;\n}\n\n.sidebar-project-btn:active {\n\tscale: 1.02;\n}\n\n.sidebar-project-btn:hover,\n.project-btn:hover {\n\tbackground: #f1f1f1;\n}\n\n#add-new-project-btn {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 5px;\n\twidth: 100%;\n\theight: 40px;\n\tmargin: 15px 0px 0px 0px;\n\tbackground: #e4e4e4;\n\tborder-radius: var(--border-radius-btns);\n\tcolor: var(--gray);\n\tfont-size: 1rem;\n\tfont-weight: 600;\n\ttransition: background-color 100ms ease;\n}\n\n#add-new-project-btn:hover {\n\ttransition: background-color 100ms ease;\n\tbackground: var(--black);\n\tcolor: var(--white);\n}\n\n#add-new-project-btn:active {\n\tscale: 1.02;\n}\n\n.projects-sidebar-list {\n\tdisplay: flex;\n\tgap: 5px;\n\tflex-direction: column;\n\tmargin-top: 10px;\n\twidth: 100%;\n}\n\n.projects-sidebar-list li {\n\twidth: 100%;\n}\n\nbutton.project-btn {\n\twidth: 100%;\n}\n\n/* MAIN TODO CONTENT */\n\n.main-to-do-list-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\tflex: 4;\n\tpadding: 25px 80px;\n\tbackground: var(--white);\n\ttransition: all 200ms ease;\n}\n\n.main-to-do-list-container div:nth-child(1) {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 15px;\n}\n\n.main-to-do-list-container.closed {\n\tpadding: 25px 120px;\n\ttransition: all 200ms ease;\n}\n\n@media (max-width: 750px) {\n\t.main-to-do-list-container {\n\t\tpadding: 60px 10px;\n\t}\n\n\t.main-to-do-list-container.closed {\n\t\tpadding: 60px 10px;\n\t}\n}\n\nul#to-do-list {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5px;\n\tpadding: 0;\n\toverflow: hidden;\n}\n\n#project-name {\n\tfont-size: clamp(1.2rem, 2vw + 2rem, 3rem);\n\tcolor: var(--black);\n\tpadding: 0;\n\tline-height: 1;\n}\n\n#to-dos-length {\n\tmargin-top: -8px;\n\tfont-weight: 400;\n\tcolor: var(--gray);\n}\n\n.division-line {\n\twidth: 100%;\n\tbackground: var(--gray);\n\topacity: 0.2;\n\theight: 1px;\n}\n\n.to-do-item {\n\tposition: relative;\n\tdisplay: flex;\n\tleft: 0;\n\talign-items: center;\n\tgap: 20px;\n\tcursor: pointer;\n\theight: 40px;\n\tpadding-left: 10px;\n\tborder-radius: 5px;\n\tborder: 1px solid var(--light-gray);\n\ttransition: background-color 100ms ease, left 1s ease, opacity 1s ease;\n\topacity: 1;\n}\n\n@media (max-width: 750px) {\n\t.to-do-item {\n\t\theight: 60px;\n\t}\n}\n\n.to-do-item.completed {\n\tleft: 100px;\n\topacity: 0;\n}\n\n.to-do-item:hover {\n\ttransition: all 200ms ease;\n\tbackground: var(--light-gray);\n}\n\n#new-to-do-btn {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 5px;\n\twidth: 150px;\n\theight: 40px;\n\tmargin: 0;\n\tbackground: var(--black);\n\tborder-radius: 8px;\n\tcolor: var(--white);\n\tfont-size: 1rem;\n\tfont-weight: 600;\n\ttransition: background-color 100ms ease;\n}\n\n#new-to-do-btn:hover {\n\ttransition: background-color 100ms ease;\n\tbackground: var(--white);\n\tcolor: var(--black);\n\tborder: 2px solid var(--light-gray);\n}\n\n#new-to-do-btn:active {\n\tscale: 1.02;\n}\n\ninput[type=\"checkbox\"] {\n\tappearance: none;\n\twidth: 20px;\n\theight: 20px;\n\tbackground-color: #fff;\n\tborder: 1px solid #ccc;\n\tborder-radius: 5px;\n\tcursor: pointer;\n}\n\ninput[type=\"checkbox\"]:checked::after {\n\tcontent: \"\\e834\";\n\tfont-family: \"Material Icons\";\n\tfont-size: 24px;\n\tcolor: var(--black);\n\tposition: relative;\n\tborder-radius: 15px;\n\ttop: -9px;\n\tleft: -3px;\n\topacity: 1;\n\ttransition: opacity 0.2s ease-in-out;\n}\n\n.to-do-date-text {\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-left: auto;\n\tcolor: var(--gray);\n}\n\n.to-do-priority {\n\tdisplay: flex;\n\talign-items: center;\n\ttransition: all 200ms ease-in-out;\n\tcursor: pointer;\n}\n\n.to-do-priority:hover {\n\ttransition: all 200ms ease-in-out;\n\tscale: 1.09;\n\ttransition: all 200ms ease-in-out;\n\tscale: 1.09;\n}\n\n.to-do-priority:active {\n\ttransition: all 200ms ease-in-out;\n\tscale: 1.2;\n}\n\n.to-do-priority i {\n\tmargin-top: 1px;\n\tscale: 0.7;\n}\n\ni.none {\n\tcolor: var(--gray);\n}\n\ni.high {\n\tcolor: var(--High-priority);\n}\n\ni.medium {\n\tcolor: var(--Medium-priority);\n}\n\ni.low {\n\tcolor: var(--Low-priority);\n}\n\n#color-pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\tbackground: var(--light-gray);\n}\n\n#color-pop-up.active {\n\tdisplay: flex;\n\tpadding: 5px 0px;\n\tjustify-content: space-between;\n\tflex-direction: column;\n\tborder-radius: 10px;\n}\n\n#color-pop-up i {\n\tscale: 0.7;\n\tcursor: pointer;\n\ttransition: all 100ms ease;\n}\n\n#color-pop-up i:hover {\n\tscale: 0.75;\n\ttransition: all 100ms ease;\n}\n\n/* CREATE TODO POP UP */\n\n#to-do-pop-up,\n#new-project-pop-up {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\tgap: 10px;\n\tposition: absolute;\n\twidth: 700px;\n\theight: 450px;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n\tpadding: 25px;\n\tbackground: var(--white);\n\tborder: 1px solid var(--light-gray);\n\tz-index: 999;\n\tborder-radius: 15px;\n\tbox-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n}\n\n@media (max-width: 750px) {\n\t#to-do-pop-up,\n\t#new-project-pop-up {\n\t\twidth: 95%;\n\t\theight: 70%;\n\t}\n\n\t#to-do-pop-up div:nth-child(1) {\n\t\tdisplay: flex;\n\t\tgap: 50px;\n\t}\n}\n\n/* TODO'S POP UP INPUTS */\n\n#to-do-pop-up input[type=\"text\"] {\n\tborder: none;\n\toutline: 0px;\n\tbackground-color: inherit;\n\tpadding: 0;\n}\n\n#to-do-pop-up select {\n\tborder: none;\n\tcolor: var(--black);\n\tfont-weight: 500;\n\tfont-family: \"DM Sans\", Helvetica, sans-serif;\n\tpadding: 5px 5px;\n\tborder-radius: 5px;\n\twidth: 30%;\n\tcursor: pointer;\n\tline-height: 1.1;\n\tbackground: var(--light-gray);\n}\n\noption {\n\ttext-align: left;\n\tfont-weight: 500;\n\tbackground: var(--light-gray);\n}\n\noption:hover {\n\tbackground: red;\n}\n\n#to-do-priority option:nth-of-type(2) {\n\tcolor: var(--Low-priority);\n}\n\n#to-do-priority option:nth-of-type(3) {\n\tcolor: var(--Medium-priority);\n}\n\n#to-do-priority option:nth-of-type(4) {\n\tcolor: var(--High-priority);\n}\n\n/* TODO INPUTS */\n\n#to-do-pop-up input[type=\"text\"]:focus {\n\tborder-bottom: 1px solid var(--gray);\n}\n\n#to-do-pop-up div {\n\tmargin: 5px 0px;\n}\n\n#to-do-pop-up > div:first-child {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 20px;\n}\n\n#to-do-pop-up div p {\n\tfont-weight: 500;\n\tfont-size: 1rem;\n\tmargin-bottom: 5px;\n}\n\n#to-do-pop-up button {\n\tpadding: 3px 20px;\n\ttransition: all 200ms ease;\n\tborder-radius: 5px;\n\tfont-weight: 500;\n}\n\n#to-do-pop-up button#save-to-do,\nbutton#save-edited-btn {\n\tbackground: var(--black);\n\tcolor: var(--white);\n}\n\n#to-do-pop-up button#save-to-do:hover,\nbutton#save-edited-btn:hover {\n\tbackground-color: var(--light-gray);\n\tcolor: var(--black);\n\ttransition: all 200ms ease;\n}\n\nbutton#close-pop-up {\n\tbackground: none;\n\tdisplay: flex;\n\theight: 35px;\n\tpadding: 0;\n\tjustify-content: center;\n\talign-items: center;\n}\n\nbutton#close-pop-up:hover {\n\tbackground: var(--light-gray);\n}\n\n#to-do-title {\n\tflex: 1;\n\tcolor: var(--black);\n\tfont-weight: 600;\n\tfont-size: 2rem;\n}\n\n#to-do-pop-up input[type=\"text\"]#to-do-title {\n\twidth: 30px;\n}\n\n#to-do-description {\n\tcolor: var(--gray);\n}\n\n#date-container {\n\tdisplay: flex;\n\tgap: 10px;\n\talign-items: center;\n}\n\n#date-container i {\n\tcursor: pointer;\n}\n\n.flatpickr-calendar {\n\tfont-family: \"DM Sans\", Arial, Helvetica, sans-serif;\n}\n\ninput#to-do-date.flatpickr-input {\n\tborder: 1px solid #ccc;\n\tpadding: 5px 10px;\n\tborder-radius: 10px;\n}\n\n#buttons-container {\n\twidth: 100%;\n\tdisplay: flex;\n\tgap: 10px;\n\tjustify-content: space-between;\n}\n\n#buttons-container button {\n\tflex: 1;\n}\n\n#buttons-container button#delete-to-do-btn {\n\tbackground: var(--High-priority);\n\tcolor: white;\n}\n\n/* NEW PROJECT POP UP */\n\n#new-project-pop-up {\n\tdisplay: flex;\n\tflex-direction: row;\n\theight: 100px;\n\twidth: 400px;\n\talign-items: end;\n\tjustify-content: space-between;\n}\n\n@media (max-width: 750px) {\n\t#new-project-pop-up {\n\t\twidth: 95%;\n\t}\n}\n\n#new-project-pop-up input {\n\tflex: auto;\n\tpadding: 0px 0px 0px 20px;\n\theight: 100%;\n\tfont-weight: 600;\n\tcolor: var(--black);\n\tborder: none;\n\tfont-size: 1.1rem;\n\tbackground: var(--light-gray);\n\tborder-radius: 10px;\n}\n\n#new-project-pop-up input:focus {\n\toutline: 1px solid var(--gray);\n}\n\n#new-project-pop-up button {\n\tpadding: 0;\n}\n\n#new-project-pop-up button:active {\n\tscale: 1.1;\n}\n\n.project-btn {\n\tbackground: #f1f1f1;\n\tposition: relative;\n}\n\n.project-btn:hover {\n\tbackground: #e9e9e9;\n}\n\n.project-btn span {\n\tline-height: 1;\n}\n\n.delete-project-btn {\n\tposition: absolute;\n\tright: 10px;\n\ttop: 7px;\n\tcolor: var(--gray);\n}\n\n.delete-project-btn i.material-symbols-rounded {\n\tfont-size: 1.6rem;\n}\n\n/* BLURRY BACKGROUND */\n\n#to-do-pop-up-container,\n#new-project-pop-up-container {\n\tposition: fixed;\n\toverflow: hidden;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\theight: 0px;\n\twidth: 100%;\n\tbackground: rgba(255, 255, 255, 0.19);\n\tborder-radius: 0;\n\tbox-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n\tbackdrop-filter: blur(3px);\n\t-webkit-backdrop-filter: blur(2.8px);\n\tz-index: 2;\n\topacity: 0;\n\tvisibility: hidden;\n\ttransition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,\n\t\theight 0.3s ease-in-out;\n}\n\n#to-do-pop-up-container.active,\n#new-project-pop-up-container.active {\n\topacity: 1;\n\tvisibility: visible;\n\theight: 100%;\n\ttransition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,\n\t\theight 0.3s ease-in-out;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function createProject(projectName) {
	___WEBPACK_IMPORTED_MODULE_0__.userProjects.push(projectName);
}


/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoFactory: () => (/* binding */ createTodoFactory)
/* harmony export */ });
function createTodoFactory(
	title,
	description = "",
	dueDate = "No due date",
	priority = "Low",
	project = ""
) {
	return {
		title,
		description,
		dueDate,
		priority,
		project,
	};
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   userProjects: () => (/* binding */ userProjects)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _createTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTodo */ "./src/createTodo.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfDay.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfDay.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");







const mainContainer = document.querySelector(".container");
const newTodoBtn = document.querySelector("#new-to-do-btn");
const toDoPopUpContainer = document.querySelector("#to-do-pop-up-container");
const toDoPopUp = document.querySelector("#to-do-pop-up");
const closePopUpBtn = document.querySelector("#close-pop-up");
const toDoTitle = document.querySelector("#to-do-title");
const toDoDescription = document.querySelector("#to-do-description");
const toDoProject = document.querySelector("#to-do-project");
const toDoDueDate = document.querySelector("#to-do-date");
const toDoPriority = document.querySelector("#to-do-priority");
const toDoList = document.querySelector("#to-do-list");
const newProjectPopUp = document.querySelector("#new-project-pop-up-container");
const newProjectBtn = document.querySelector("#add-new-project-btn");
const saveNewProjectBtn = document.querySelector("#save-project-pop-up");
const closeProjectPopUp = document.querySelector("#close-project-pop-up");
const newProjectInput = document.querySelector("#new-project-title");
const projectSidebarList = document.querySelector(".projects-sidebar-list");
const mainPageTitle = document.querySelector("#project-name");
const inboxBtn = document.querySelector("#inbox-btn");
const todayBtn = document.querySelector("#today-btn");
const upcomingBtn = document.querySelector("#upcoming-btn");
const toggleSidebarBtn = document.querySelector("#sidebar-toggle-btn");
const contentListContainer = document.querySelector(
	".main-to-do-list-container"
);
const sidebar = document.querySelector(".sidebar");

let currentProject = "inbox";
const todoItems = (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.getTodosFromLocalStorage)();

const userProjects = (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.getProjectsFromLocalStorage)();

loadMainPage(currentProject);

// Save new todo button

// Toggle to do pop up div
newTodoBtn.addEventListener("click", () => {
	toggleProjectInput();

	// Create save button
	const saveBtn = document.querySelector("#save-to-do");
	if (saveBtn) {
		toDoPopUp.removeChild(saveBtn);
	}

	const editedBtnsContainer = document.querySelector("#buttons-container");
	if (editedBtnsContainer) {
		toDoPopUp.removeChild(editedBtnsContainer);
	}

	const saveNewTodoBtn = document.createElement("button");
	saveNewTodoBtn.textContent = "Save task";
	saveNewTodoBtn.id = "save-to-do";
	toDoPopUp.appendChild(saveNewTodoBtn);

	saveNewTodoBtn.addEventListener("click", () => {
		if (toDoTitle.value.trim() == "") {
			alert("Please enter a task name");
		} else {
			toDoPopUpContainer.classList.remove("active");

			addTodo(getTodoValues());
			loadTask(currentProject);
			clearInputFields();
			toDoPopUp.removeChild(saveNewTodoBtn);
		}
	});

	// Show pop up
	toDoPopUpContainer.classList.add("active");
});

// Close pop up
closePopUpBtn.addEventListener("click", () => {
	const saveBtn = document.querySelector("#save-to-do");
	if (saveBtn) {
		toDoPopUp.removeChild(saveBtn);
	}
	clearInputFields();
	toDoPopUpContainer.classList.remove("active");
});

// Date picker - flatpickr
const datePicker = document.querySelector("#date-container");
flatpickr(datePicker, { wrap: true });

// Save new todo function
function addTodo() {
	const newTodo = (0,_createTodo__WEBPACK_IMPORTED_MODULE_2__.createTodoFactory)(
		toDoTitle.value,
		toDoDescription.value,
		toDoDueDate.value,
		toDoPriority.value,
		toDoProject.value.toLowerCase()
	);

	todoItems.push(newTodo);
}

// Create new project

newProjectBtn.addEventListener("click", () => {
	newProjectPopUp.classList.add("active");
});

saveNewProjectBtn.addEventListener("click", () => {
	const projectName = newProjectInput.value;
	if (projectName == "") {
		alert("Please enter a project name");
	} else {
		newProjectPopUp.classList.remove("active");
		(0,_createProject__WEBPACK_IMPORTED_MODULE_3__.createProject)(projectName);

		// Update sidebar projects

		currentProject = projectName;
		loadProjects();
		newProjectInput.value = "";
	}
});

closeProjectPopUp.addEventListener("click", () => {
	newProjectInput.value = "";
	newProjectPopUp.classList.remove("active");
});

// inbox btn event listener
inboxBtn.addEventListener("click", () => {
	currentProject = "inbox";
	loadMainPage("inbox");
	toggleProjectInput();
});

// Today section

todayBtn.addEventListener("click", () => {
	currentProject = "today";
	loadMainPage(currentProject);
});

// Today section

upcomingBtn.addEventListener("click", () => {
	currentProject = "upcoming";
	loadMainPage(currentProject);
});

// Toggle sidebar

toggleSidebarBtn.addEventListener("click", () => {
	sidebar.classList.toggle("open");
	toggleSidebarBtn.classList.toggle("closed");
	contentListContainer.classList.toggle("closed");
});

function loadProjects() {
	projectSidebarList.innerHTML = "";

	(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveProjectsToLocalStorage)(userProjects);

	for (let i = 0; i < userProjects.length; i++) {
		// Create project item
		const projectItem = document.createElement("li");

		const projectBtn = document.createElement("button");
		projectBtn.type = "button";
		projectBtn.className = "project-btn";

		projectBtn.addEventListener("click", () => {
			currentProject = userProjects[i];
			loadMainPage(currentProject);
			toggleProjectInput();
		});

		// Create icon
		const icon = document.createElement("i");
		icon.className = "material-symbols-rounded icon";
		icon.textContent = "stat_0";
		projectBtn.appendChild(icon);

		const span = document.createElement("span");
		span.textContent = userProjects[i];
		projectBtn.appendChild(span);

		// Create delete and project name
		const deleteBtn = document.createElement("button");
		deleteBtn.type = "button";
		deleteBtn.className = "delete-project-btn";

		const deleteIcon = document.createElement("i");
		deleteIcon.className = "material-symbols-rounded icon";
		deleteIcon.textContent = "delete";
		deleteBtn.appendChild(deleteIcon);

		deleteBtn.addEventListener("click", (e) => {
			const confirmation = confirm(
				"Are you sure you want to delete this?"
			);

			if (confirmation) {
				const indexOfWord = userProjects.indexOf(userProjects[i]);
				if (indexOfWord !== -1) {
					userProjects.splice(indexOfWord, 1);
				}

				currentProject = "inbox";
				loadMainPage("inbox");
				toggleProjectInput();
				loadProjects();
				loadTask(currentProject);
				e.stopPropagation();
			}
		});

		projectBtn.appendChild(deleteBtn);
		projectItem.appendChild(projectBtn);
		projectSidebarList.appendChild(projectItem);
	}

	loadProjectOptions();
}

function loadMainPage(project) {
	mainPageTitle.textContent =
		project.charAt(0).toUpperCase() + project.slice(1);

	loadTask(project);
	loadProjects();
}

function loadProjectOptions() {
	toDoProject.innerHTML = "";

	// Create inbox option
	const option = document.createElement("option");
	option.value = "inbox";
	option.textContent = "Inbox";
	toDoProject.appendChild(option);

	// Create projects option
	userProjects.forEach((project) => {
		const option = document.createElement("option");
		option.value = project;
		option.textContent = project;
		toDoProject.appendChild(option);
	});
}

// Load tasks

function loadTask(project) {
	checkWindowWidth();
	toDoList.innerHTML = "";

	const filteredTodoItems = todoItems.filter((todo) => {
		if (project === "inbox") {
			return true;
		} else if (project === "today") {
			return isForToday(todo);
		} else if (project === "upcoming") {
			return isForUpcoming(todo);
		} else {
			return todo.project === project; // Filter items based on the specified project
		}
	});

	// Delete to do's if theirs project is deleted
	todoItems.forEach((item, i) => {
		if (
			!isValidProject(item.project, userProjects) &&
			item.project != "inbox"
		) {
			todoItems.splice(i, 1);
			updateNumberOfTasks(filteredTodoItems.length);
		}
	});

	updateNumberOfTasks(filteredTodoItems ? filteredTodoItems.length : 23);

	filteredTodoItems.forEach((item, i) => {
		const toDoItem = document.createElement("li");
		toDoItem.classList.add("to-do-item");

		// Complete checkbox
		const completeInput = document.createElement("input");
		completeInput.type = "checkbox";
		completeInput.name = "to-do-complete";

		completeInput.addEventListener("click", () => {
			setTimeout(() => {
				toDoItem.classList.add("completed");
			}, 100);

			setTimeout(() => {
				todoItems.splice(i, 1);
				toDoList.removeChild(toDoItem);

				const toDosLength = document.querySelectorAll(".to-do-item");
				loadTask(currentProject);
				updateNumberOfTasks(toDosLength.length);
			}, 500);
		});

		// To do Title
		const toDoTitleText = document.createElement("p");
		toDoTitleText.classList.add("to-do-title");
		toDoTitleText.textContent = item.title;

		// Date text
		const toDoDateText = document.createElement("p");
		toDoDateText.classList.add("to-do-date-text");

		if (!item.dueDate) {
			toDoDateText.textContent = "No date";
		} else if (isForToday(item)) {
			toDoDateText.textContent = "Today";
		} else {
			const date = new Date(item.dueDate);
			const options = { month: "short", day: "numeric" };
			const formmatedDate = date.toLocaleDateString("en-US", options);

			toDoDateText.textContent = formmatedDate;
		}

		// Priority Btn
		const priorityBtn = document.createElement("button");
		priorityBtn.classList.add("to-do-priority");

		let colorPopupActive = false;
		priorityBtn.addEventListener("click", () => {
			colorPopupActive = !colorPopupActive;

			if (colorPopupActive) {
				const colorPopUps = document.querySelectorAll("#color-pop-up");
				if (colorPopUps.length > 0) {
					colorPopUps.forEach((popUp) => {
						mainContainer.removeChild(popUp);
					});
				}

				// Create priorities Pop up
				const colorPopup = document.createElement("div");
				colorPopup.id = "color-pop-up";

				const icons = [
					{ className: "none" },
					{ className: "low" },
					{ className: "medium" },
					{ className: "high" },
				];

				icons.forEach((icon) => {
					const iconElement = document.createElement("i");
					iconElement.className = `material-symbols-rounded icon ${icon.className}`;
					iconElement.textContent = "radio_button_checked";
					colorPopup.appendChild(iconElement);
				});

				mainContainer.appendChild(colorPopup);

				colorPopup.addEventListener("click", (event) => {
					const clickedElement = event.target;
					if (clickedElement.classList.contains("icon")) {
						item.priority = clickedElement.classList[2];
						colorPopup.classList.remove("active");
						loadTask(currentProject);
					}
				});

				colorPopup.classList.add("active");

				// Get the button's position
				const buttonRect = priorityBtn.getBoundingClientRect();

				// Calculate the options div's position
				const optionsLeft = buttonRect.left;
				const optionsTop = buttonRect.top;

				// Set the options div's position
				colorPopup.style.left = optionsLeft + 10 + "px";
				colorPopup.style.top = optionsTop + "px";
			} else {
				const colorPopUps = document.querySelectorAll("#color-pop-up");
				if (colorPopUps.length > 0) {
					colorPopUps.forEach((popUp) => {
						mainContainer.removeChild(popUp);
					});
				}
			}
		});

		const priorityIcon = document.createElement("i");
		priorityIcon.classList.add(
			"material-symbols-rounded",
			"icon",
			item.priority
		);
		priorityIcon.textContent = "radio_button_checked";

		priorityBtn.appendChild(priorityIcon);

		// Append items to To Do
		toDoItem.appendChild(completeInput);
		toDoItem.appendChild(toDoTitleText);
		toDoItem.appendChild(toDoDateText);
		toDoItem.appendChild(priorityBtn);

		// Append To do to List
		toDoList.appendChild(toDoItem);

		// Edit todos
		toDoItem.addEventListener("click", (e) => {
			if (
				e.target.classList.contains("to-do-title") ||
				e.target.classList.contains("to-do-item")
			) {
				// Paste values into pop up
				toDoPopUpContainer.classList.add("active");
				toDoTitle.value = item.title;
				toDoDescription.value = item.description;

				if (project != "inbox") {
					const projectIndex = userProjects.indexOf(item.project);
					toDoProject.selectedIndex = projectIndex + 1;
				} else {
					toDoProject.selectedIndex = 0;
				}

				toDoDueDate.value = item.dueDate;

				const priorityIndex = ["none", "low", "medium", "high"].indexOf(
					item.priority
				);

				toDoPriority.selectedIndex = priorityIndex;

				// Create save edited todo button
				const buttonsContainer = document.createElement("div");
				buttonsContainer.id = "buttons-container";
				toDoPopUp.appendChild(buttonsContainer);

				const checkBtnsContainer =
					document.querySelector("#buttons-container");
				if (checkBtnsContainer) {
					toDoPopUp.removeChild(checkBtnsContainer);
				}

				const saveEditedTaskBtn = document.createElement("button");
				saveEditedTaskBtn.textContent = "Save task";
				saveEditedTaskBtn.id = "save-edited-btn";
				buttonsContainer.appendChild(saveEditedTaskBtn);
				toDoPopUp.appendChild(buttonsContainer);

				// Create delete to do button
				const deleteToDoBtn = document.createElement("button");
				deleteToDoBtn.id = "delete-to-do-btn";
				deleteToDoBtn.textContent = "Delete";
				buttonsContainer.appendChild(deleteToDoBtn);

				deleteToDoBtn.addEventListener("click", () => {
					const confirmation = confirm(
						"Are you sure you want to delete this?"
					);

					if (confirmation) {
						todoItems.splice(i, 1);
						toDoList.removeChild(toDoItem);
						const toDosLength =
							document.querySelectorAll(".to-do-item");
						updateNumberOfTasks(toDosLength.length);

						toDoPopUpContainer.classList.remove("active");
						toDoPopUp.removeChild(buttonsContainer);
						clearInputFields();
						loadTask(currentProject);
					}
				});

				saveEditedTaskBtn.addEventListener("click", () => {
					if (toDoTitle.value.trim() == "") {
						alert("Please enter a task name");
					} else {
						toDoPopUpContainer.classList.remove("active");

						// Set new values for task item
						const [title, description, date, priority, project] =
							getTodoValues();

						item.title = title;
						item.description = description;
						item.dueDate = date;
						item.priority = priority;
						item.project = project.toLowerCase();

						loadTask(currentProject);
						clearInputFields();
						toDoPopUp.removeChild(buttonsContainer);
					}
				});
			}
		});
	});

	(0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveTodosToLocalStorage)(todoItems);
}

function isValidProject(project, validProjects) {
	const projectSet = new Set(validProjects);
	return projectSet.has(project);
}

function toggleProjectInput() {
	// Select option for current project
	const options = toDoProject.querySelectorAll("option");
	for (let i = 0; i < options.length; i++) {
		if (options[i].value === currentProject) {
			options[i].selected = true;
		} else {
			options[i].selected = false;
		}
	}
}

function updateNumberOfTasks(length) {
	const numberOfTasks = document.querySelector("#to-dos-length");
	numberOfTasks.textContent = `${length} Tasks`;
}

function isForToday(todo) {
	const today = new Date();

	if (!todo.dueDate) {
		return false; // Exclude todos without dates
	}
	const [year, month, day] = todo.dueDate.split("-");
	const todoDate = new Date(year, month - 1, day);

	const startOfDayToday = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.startOfDay)(today);
	const endOfDayToday = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.endOfDay)(today);

	const isForToday = todoDate >= startOfDayToday && todoDate <= endOfDayToday;

	return isForToday;
}

function isForUpcoming(todo) {
	const today = new Date();

	if (!todo.dueDate) {
		return false;
	}
	const [year, month, day] = todo.dueDate.split("-");
	const todoDate = new Date(year, month - 1, day);

	const startOfDayToday = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.startOfDay)(today);

	const isForUpcoming = todoDate > startOfDayToday;

	return isForUpcoming;
}

function getTodoValues() {
	return [
		toDoTitle.value,
		toDoDescription.value,
		toDoDueDate.value,
		toDoPriority.value,
		toDoProject.value,
	];
}

function clearInputFields() {
	toDoTitle.value = "";
	toDoDescription.value = "";
	toDoDueDate.value = "";
	toDoPriority.selectedIndex = 0;
	toDoProject.selectedIndex = 0;
}

function checkWindowWidth() {
	if (window.innerWidth < 450) {
		sidebar.classList.remove("open");
		toggleSidebarBtn.classList.add("closed");
		contentListContainer.classList.add("closed");
	}
}

window.addEventListener("resize", checkWindowWidth);


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectsFromLocalStorage: () => (/* binding */ getProjectsFromLocalStorage),
/* harmony export */   getTodosFromLocalStorage: () => (/* binding */ getTodosFromLocalStorage),
/* harmony export */   saveProjectsToLocalStorage: () => (/* binding */ saveProjectsToLocalStorage),
/* harmony export */   saveTodosToLocalStorage: () => (/* binding */ saveTodosToLocalStorage)
/* harmony export */ });
function getTodosFromLocalStorage() {
	const storedTodos = localStorage.getItem("todos");
	return storedTodos ? JSON.parse(storedTodos) : [];
}

function saveTodosToLocalStorage(todos) {
	localStorage.setItem("todos", JSON.stringify(todos));
}

function getProjectsFromLocalStorage() {
	const storedProjects = localStorage.getItem("projects");
	return storedProjects ? JSON.parse(storedProjects) : [];
}

function saveProjectsToLocalStorage(projects) {
	localStorage.setItem("projects", JSON.stringify(projects));
}


/***/ }),

/***/ "./node_modules/date-fns/constants.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFromSymbol: () => (/* binding */ constructFromSymbol),
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./node_modules/date-fns/constants.js");


/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);

  if (date && typeof date === "object" && _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol in date)
    return date[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol](value);

  if (date instanceof Date) return new date.constructor(value);

  return new Date(value);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/endOfDay.js":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/endOfDay.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   endOfDay: () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link endOfDay} function options.
 */

/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.js":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ "./node_modules/date-fns/toDate.js");


/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ "./node_modules/date-fns/constructFrom.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(context || argument, argument);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map