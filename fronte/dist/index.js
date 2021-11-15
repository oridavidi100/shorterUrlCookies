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

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_public_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/public/style.css */ \"./app/styles/public/style.css\");\n\ndocument.getElementById('submit').addEventListener('click', shortApi);\ndocument.getElementById('statistic').addEventListener('click', showData);\ndocument.getElementById('copy').addEventListener('click', copyTextfunction);\nlet id;\nlet userName;\nlet shortUrl;\nconst baseUrl = 'http://localhost:3000/';\nfunction removeAllChildNodes(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\nasync function shortApi() {\n  let div = document.getElementById('shorter');\n  removeAllChildNodes(div);\n  removeAllChildNodes(document.getElementById('data'));\n  userName = document.getElementById('userName').value;\n  let longUrl = document.getElementById('url_input').value;\n  document.getElementById('short').style.display = 'block';\n  try {\n    let response = await axios.post(`${baseUrl}/api`, {\n      userName: userName,\n      longUrl: longUrl,\n    });\n    shortUrl = response.data.shortUrl;\n    let p = document.createElement('span');\n    p.innerText = 'your new url:\\n' + '  ' + shortUrl;\n    p.setAttribute('id', 'shorter');\n    div.appendChild(p);\n    id = response.data.id;\n  } catch (error) {\n    div.innerText = error.response.data.error;\n  }\n}\n\nasync function showData() {\n  if (userName === '') userName = 'DB';\n  let div = document.getElementById('data');\n  removeAllChildNodes(div);\n  let response = await axios.get(`${baseUrl}/api/statistic/${id}/${userName}`);\n  let data = response.data;\n  let p = document.createElement('p');\n  p.innerText = `creation Date:${data.date}  \n        redirect Count:${data.redirectCount}`;\n  div.appendChild(p);\n}\n\nfunction copyTextfunction() {\n  /* Get the text field */\n  var copyText = shortUrl;\n  console.log(shortUrl);\n  const url = copyText.split('copy')[0];\n  navigator.clipboard.writeText(url);\n}\n\n//login\ndocument.getElementById('login-nav-btn').addEventListener('click', () => {\n  const loginBar = document.querySelector('.login-form');\n  loginBar.style.display = 'flex';\n});\nconst loginBtn = document.getElementById('login-btn');\nloginBtn.addEventListener('click', async () => {\n  const userName = document.getElementById('userNamelogin').value;\n  const passWord = document.getElementById('loginPassWord').value;\n  console.log(userName, passWord);\n  const loginform = document.querySelector('.login-form');\n  loginform.style.display = 'none';\n  try {\n    let response = await axios.post('api/login', {\n      userName: userName,\n      passWord: passWord,\n    });\n    console.log(response);\n  } catch (error) {\n    console.log(error);\n  }\n});\n\n//signUp\n\ndocument.getElementById('signUp-nav-btn').addEventListener('click', () => {\n  const signUpBar = document.querySelector('.signUp-form');\n  signUpBar.style.display = 'flex';\n});\n\nconst signUpBtn = document.getElementById('signUp-btn');\nsignUpBtn.addEventListener('click', async () => {\n  const userName = document.getElementById('signUpUserName').value;\n  const passWord = document.getElementById('signUpPassWord').value;\n  console.log(userName, passWord);\n  const signUpform = document.querySelector('.signUp-form');\n  signUpform.style.display = 'none';\n  try {\n    const response = await axios.post('api/newUser', {\n      userName: userName,\n      passWord: passWord,\n    });\n    console.log('הצליח ');\n    console.log(response);\n  } catch {}\n});\n\n\n//# sourceURL=webpack://calc/./app/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/styles/public/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/styles/public/style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<?xml version=\"1.0\" encoding=\"utf-8\"?><svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"1296px\" height=\"768px\" viewBox=\"0 0 1296 768\" enable-background=\"new 0 0 1296 768\" xml:space=\"preserve\"><g><polygon fill=\"#8694D1\" points=\"766.6,1.2 -0.2,768 200.7,768 967.5,1.2 \t\"/></g><g><polygon fill=\"#8694D1\" points=\"1094.8,1.2 328,768 528.9,768 1295.7,1.2 \t\"/></g></svg> */ \"data:image/svg+xml;utf8,<?xml version=\\\"1.0\\\" encoding=\\\"utf-8\\\"?><svg version=\\\"1.1\\\" id=\\\"Livello_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\"\\t width=\\\"1296px\\\" height=\\\"768px\\\" viewBox=\\\"0 0 1296 768\\\" enable-background=\\\"new 0 0 1296 768\\\" xml:space=\\\"preserve\\\"><g><polygon fill=\\\"#8694D1\\\" points=\\\"766.6,1.2 -0.2,768 200.7,768 967.5,1.2 \\t\\\"/></g><g><polygon fill=\\\"#8694D1\\\" points=\\\"1094.8,1.2 328,768 528.9,768 1295.7,1.2 \\t\\\"/></g></svg>\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dongle&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* #shorter{\\n  width: 5em;\\n} */\\ninput{\\n  border: 0.1em solid;\\n  border-radius: 1em;\\n\\n  text-align: center;\\n  font-size: 0.35em;\\n  font-style: italic;\\n  letter-spacing: 0.05em;\\n\\n  transition: all .5s ease-in-out;\\n  /* background-color: #b3ecf0; */\\n  min-width: 300px;\\n}\\nbody {\\n  font-size:30px;\\n  color: #222;\\n  text-align: center;\\n  line-height: 1.4em;\\n  background-color: #d3cbb1;\\n  font-family: 'Dongle', sans-serif;\\n}\\n\\nbutton{\\n  color: white;\\n  font-weight: bold;\\n  font-size:0.7854rem;\\n  text-decoration: none;\\n  text-transform: uppercase;\\n  /* padding: 10px 23px; */\\n  width: 5.9em;\\n  height: 3.9em;\\n  background-color: #182e9b;\\n  transition: transform 500ms;\\n  /* background-position 800ms $ease-in-out-back;\\n  box-shadow 500ms linear; */\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); \\n  background-size: contain;\\n  background-position: -200px center;\\n  background-repeat: no-repeat;\\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\\n  border-radius: 35%;\\n}\\n  button:hover{\\n    transform: scale(1.1);\\n    background-position: -60px;\\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\\n  }\\n  button:active{\\n    transform: scale(1);\\n    background-position: 500px;\\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\\n  }\\n\\n\\nsection{\\n  background-color:   blanchedalmond;\\n}\\n\\nmain {\\n  padding: 0;\\n  margin-top: 40px;\\n}\\n\\nh3 {\\n  margin-top: 30px;\\n}\\n\\n\\n\\n.user-stories li {\\n  margin-bottom: 1em;\\n}\\n\\na {\\n  color: #2574a9;\\n}\\n\\nform {\\n  margin: 10px auto;\\n  padding: 20px;\\n  max-width: 600px;\\n}\\n\\nlabel {\\n  margin-right: 10px;\\n}\\n\\ninput {\\n  padding: 5px;\\n}\\n\\ninput[type='text'] {\\n  width: 220px;\\n  text-align: center;\\n}\\n\\nfooter {\\n  background-color: rgb(177, 214, 206);\\n  /* margin-right: 15%;\\n  margin-left: 15%; */\\n  width: 100%;\\n  position: fixed;\\n  /* top:100%; */\\n  bottom:0%;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  height: 70px;\\n  font-size: 15px;\\n  padding-bottom: 2.23em;\\n}\\n\\n*:focus,\\n*:active {\\n  outline: none !important;\\n  -webkit-tap-highlight-color: transparent;\\n}\\n.wrapper {\\n  display: inline-flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.wrapper .icon {\\n  position: relative;\\n  background-color: #ffffff;\\n  border-radius: 50%;\\n  padding: 16px;\\n  margin-top: 5px;\\n  margin-left: 25px;\\n  width: 15px;\\n  height: 10px;\\n  font-size: 17px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\\n  cursor: pointer;\\n  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\n  color: #222;\\n}\\n\\n.wrapper .tooltip {\\n  position: absolute;\\n  top: 0;\\n  font-size: 19.5px;\\n  background-color: #ffffff;\\n  color: #ffffff;\\n  padding: 5px 8px;\\n  border-radius: 5px;\\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);\\n  opacity: 0;\\n  pointer-events: none;\\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\n}\\n\\n.wrapper .tooltip::before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 8px;\\n  width: 8px;\\n  background-color: #ffffff;\\n  bottom: -3px;\\n  left: 50%;\\n  transform: translate(-50%) rotate(45deg);\\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\\n}\\n\\n.wrapper .icon:hover .tooltip {\\n  top: -75px;\\n  opacity: 1;\\n  visibility: visible;\\n  pointer-events: auto;\\n}\\n\\n.wrapper .icon:hover span,\\n.wrapper .icon:hover .tooltip {\\n  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);\\n}\\n\\n.wrapper .facebook:hover,\\n.wrapper .facebook:hover .tooltip,\\n.wrapper .facebook:hover .tooltip::before {\\n  background-color: #3b5999;\\n  color: #ffffff;\\n}\\n\\n.wrapper .instagram:hover,\\n.wrapper .instagram:hover .tooltip,\\n.wrapper .instagram:hover .tooltip::before {\\n  background-color: #e1306c;\\n  color: #ffffff;\\n}\\n\\n.wrapper .github:hover,\\n.wrapper .github:hover .tooltip,\\n.wrapper .github:hover .tooltip::before {\\n  background-color: #333333;\\n  color: #ffffff;\\n}\\n\\n\\n#short{\\n  position: block;\\n  width: 50%;\\n  height: auto;\\n  margin: 0 auto;\\n  overflow: hidden;\\n  padding:20px;\\n  text-align: center;\\n  background-color:blanchedalmond;\\n  display:none;\\n}\\n@media screen {\\n\\n\\n}\\n/* login */\\n.login-form {\\n  display: none;\\n  flex-direction: column;\\n  justify-content: center;\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  border: 2px solid black;\\n  border-radius: 1em;\\n  background-color: whitesmoke;\\n  /* width: 250px; */\\n  max-width: 90%;\\n  min-width: 60%;\\n  /* height: 250px; */\\n  max-height: 90%;\\n  min-height: 40%;\\n  text-align: center;\\n  font-size: 3em;\\n  font-weight: bold;\\n  background-image: linear-gradient(180deg, #fafae2b0, #000000);\\n\\n  background-color: #859fd6;\\n  color: rgb(0, 0, 0);\\n}\\n.header {\\n  position: absolute;\\n  /* top: calc(50% - 35px); */\\n  left: calc(50% - 255px);\\n  z-index: 2;\\n}\\n\\n.header div {\\n  /* float: left; */\\n  color: #fff;\\n  font-family: 'Exo', sans-serif;\\n  font-size: 55px;\\n  font-weight: 200;\\n}\\n\\n.header div span {\\n  color: #5379fa !important;\\n}\\n\\n.login {\\n  position: absolute;\\n  top: calc(50% - 75px);\\n  left: calc(50% - 50px);\\n  height: 150px;\\n  width: 350px;\\n  padding: 10px;\\n  z-index: 2;\\n}\\n\\n.login input[type='text'] {\\n  width: 250px;\\n  height: 30px;\\n  background: transparent;\\n  border: 2px solid rgba(255, 255, 255, 0.6);\\n  border-radius: 4px;\\n  color: #fff;\\n  font-family: 'Exo', sans-serif;\\n  font-size: 20px;\\n  font-weight: 400;\\n  padding: 4px;\\n}\\n\\n.login input[type='password'] {\\n  width: 250px;\\n  height: 30px;\\n  background: transparent;\\n  border: 2px solid rgba(255, 255, 255, 0.6);\\n  border-radius: 4px;\\n  color: #fff;\\n  font-family: 'Exo', sans-serif;\\n  font-size: 20px;\\n  font-weight: 400;\\n  padding: 4px;\\n  margin-top: 10px;\\n}\\n\\n.login input[type='button'] {\\n  width: 260px;\\n  height: 35px;\\n  background: #fff;\\n  border: 1px solid #fff;\\n  cursor: pointer;\\n  border-radius: 2px;\\n  color: #a18d6c;\\n  font-family: 'Exo', sans-serif;\\n  font-size: 16px;\\n  font-weight: 400;\\n  padding: 6px;\\n  margin-top: 10px;\\n}\\n\\n.login input[type='button']:hover {\\n  opacity: 0.8;\\n}\\n\\n.login input[type='button']:active {\\n  opacity: 0.6;\\n}\\n\\n.login input[type='text']:focus {\\n  outline: none;\\n  border: 2px solid rgba(255, 255, 255, 0.9);\\n}\\n\\n.login input[type='password']:focus {\\n  outline: none;\\n  border: 2px solid rgba(255, 255, 255, 0.9);\\n}\\n\\n.login input[type='button']:focus {\\n  outline: none;\\n}\\n\\n::-webkit-input-placeholder {\\n  color: rgba(255, 255, 255, 0.6);\\n}\\n\\n::-moz-input-placeholder {\\n  color: rgba(255, 255, 255, 0.6);\\n}\\n\\n/* ----navbar---- */\\n#log {\\n  display: flex;\\n  color: black;\\n  font-weight: bold;\\n}\\nul {\\n  list-style-type: none;\\n  margin: 0;\\n  padding: 0;\\n  overflow: hidden;\\n  background-color: rgb(75, 117, 156);\\n}\\nli {\\n  float: left;\\n  border-right: 1px solid lightblue;\\n}\\nli a {\\n  font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;\\n  display: block;\\n  color: white;\\n  text-align: center;\\n  padding: 10px 10px;\\n  text-decoration: none;\\n}\\n\\nli a:hover:not(#log) {\\n  background-color: rgb(67, 95, 156);\\n}\\n.active {\\n  border-left: 1px solid lightblue;\\n  float: right;\\n  color: #ffffff;\\n}\\n\\n\\n/* signUp */\\n\\n.signUp-form {\\n  display: none;\\n  flex-direction: column;\\n  justify-content: center;\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  border: 2px solid black;\\n  border-radius: 1em;\\n  background-color: whitesmoke;\\n  /* width: 250px; */\\n  max-width: 90%;\\n  min-width: 60%;\\n  /* height: 250px; */\\n  max-height: 90%;\\n  min-height: 40%;\\n  text-align: center;\\n  font-size: 3em;\\n  font-weight: bold;\\n  background-image: linear-gradient(180deg, #fafae2b0, #000000);\\n\\n  background-color: #859fd6;\\n  color: rgb(0, 0, 0);\\n}\\n.headersignUp {\\n  position: absolute;\\n  /* top: calc(50% - 35px); */\\n  left: calc(50% - 255px);\\n  z-index: 2;\\n}\\n\\n.headersignUp div {\\n  /* float: left; */\\n  color: #fff;\\n  font-family: 'Exo', sans-serif;\\n  font-size: 55px;\\n  font-weight: 200;\\n}\\n\\n.headersignUp div span {\\n  color: #5379fa !important;\\n}\\n\\n.signUp {\\n  position: absolute;\\n  top: calc(50% - 75px);\\n  left: calc(50% - 50px);\\n  height: 150px;\\n  width: 350px;\\n  padding: 10px;\\n  z-index: 2;\\n}\\n\\n.signUp input[type='text'] {\\n  width: 250px;\\n  height: 30px;\\n  background: transparent;\\n  border: 2px solid rgba(255, 255, 255, 0.6);\\n  border-radius: 4px;\\n  color: #fff;\\n  font-family: 'Exo', sans-serif;\\n  font-size: 20px;\\n  font-weight: 400;\\n  padding: 4px;\\n}\\n\\n.signUp input[type='password'] {\\n  width: 250px;\\n  height: 30px;\\n  background: transparent;\\n  border: 2px solid rgba(255, 255, 255, 0.6);\\n  border-radius: 4px;\\n  color: #fff;\\n  font-family: 'Exo', sans-serif;\\n  font-size: 20px;\\n  font-weight: 400;\\n  padding: 4px;\\n  margin-top: 10px;\\n}\\n\\n.signUp input[type='button'] {\\n  width: 260px;\\n  height: 35px;\\n  background: #fff;\\n  border: 1px solid #fff;\\n  cursor: pointer;\\n  border-radius: 2px;\\n  color: #a18d6c;\\n  font-family: 'Exo', sans-serif;\\n  font-size: 16px;\\n  font-weight: 400;\\n  padding: 6px;\\n  margin-top: 10px;\\n}\\n\\n.signUp input[type='button']:hover {\\n  opacity: 0.8;\\n}\\n\\n.signUp input[type='button']:active {\\n  opacity: 0.6;\\n}\\n\\n.signUp input[type='text']:focus {\\n  outline: none;\\n  border: 2px solid rgba(255, 255, 255, 0.9);\\n}\\n\\n.signUp input[type='password']:focus {\\n  outline: none;\\n  border: 2px solid rgba(255, 255, 255, 0.9);\\n}\\n\\n.signUp input[type='button']:focus {\\n  outline: none;\\n}\\n\\n::-webkit-input-placeholder {\\n  color: rgba(255, 255, 255, 0.6);\\n}\\n\\n::-moz-input-placeholder {\\n  color: rgba(255, 255, 255, 0.6);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calc/./app/styles/public/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./app/styles/public/style.css":
/*!*************************************!*\
  !*** ./app/styles/public/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./app/styles/public/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calc/./app/styles/public/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "data:image/svg+xml;utf8,<?xml version=\"1.0\" encoding=\"utf-8\"?><svg version=\"1.1\" id=\"Livello_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t width=\"1296px\" height=\"768px\" viewBox=\"0 0 1296 768\" enable-background=\"new 0 0 1296 768\" xml:space=\"preserve\"><g><polygon fill=\"#8694D1\" points=\"766.6,1.2 -0.2,768 200.7,768 967.5,1.2 \t\"/></g><g><polygon fill=\"#8694D1\" points=\"1094.8,1.2 328,768 528.9,768 1295.7,1.2 \t\"/></g></svg>":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 width="1296px" height="768px" viewBox="0 0 1296 768" enable-background="new 0 0 1296 768" xml:space="preserve"><g><polygon fill="#8694D1" points="766.6,1.2 -0.2,768 200.7,768 967.5,1.2 	"/></g><g><polygon fill="#8694D1" points="1094.8,1.2 328,768 528.9,768 1295.7,1.2 	"/></g></svg> ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;utf8,<?xml version=\\\"1.0\\\" encoding=\\\"utf-8\\\"?><svg version=\\\"1.1\\\" id=\\\"Livello_1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\"\\t width=\\\"1296px\\\" height=\\\"768px\\\" viewBox=\\\"0 0 1296 768\\\" enable-background=\\\"new 0 0 1296 768\\\" xml:space=\\\"preserve\\\"><g><polygon fill=\\\"#8694D1\\\" points=\\\"766.6,1.2 -0.2,768 200.7,768 967.5,1.2 \\t\\\"/></g><g><polygon fill=\\\"#8694D1\\\" points=\\\"1094.8,1.2 328,768 528.9,768 1295.7,1.2 \\t\\\"/></g></svg>\";\n\n//# sourceURL=webpack://calc/data:image/svg+xml;utf8,%3C?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/main.js");
/******/ 	
/******/ })()
;