"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');\\n\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  color: white;\\n  font-family: 'Fira Code', monospace;\\n  scroll-behavior: smooth;\\n  transition: 1s;\\n\\n}\\n\\n.webgl {\\n  position: fixed;\\n  display: block;\\n  top: 0;\\n  left: 0;\\n  z-index: -1;\\n  outline: none;\\n}\\n\\n.label-container {\\n  position: absolute;\\n  bottom: 16px;\\n  left: 16px;\\n}\\n\\n.label {\\n  color: white;\\n  margin-bottom: 8px;\\n}\\n\\na,\\na:visited {\\n  color: inherit;\\n}\\n\\n.container-main {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n\\n}\\n\\n@media only screen and (max-width:600px) {\\n\\n  .border,\\n  .card-container,\\n  .scrollable {\\n    width: 90vw;\\n    height: 90vh;\\n  }\\n\\n  .name-title h1 {\\n    font-size: 2rem;\\n  }\\n\\n  .card-inner div {\\n    display: flex;\\n    flex-direction: column;\\n    /* min-width: 20rem; */\\n    max-width: 95%;\\n  }\\n}\\n\\n@media only screen and (min-width:600px) {\\n\\n  .border,\\n  .card-container,\\n  .scrollable {\\n    width: 95vw;\\n    height: 90vh;\\n  }\\n\\n  .card-inner div {\\n    display: flex;\\n    flex-direction: column;\\n    /* min-width: 20rem; */\\n    max-width: 50%;\\n  }\\n}\\n\\n.border {\\n  border: 2px white solid;\\n  transition: 1s;\\n  position: fixed;\\n  overflow: hidden;\\n  /* z-index: 10; */\\n  /* filter: blur(4px); */\\n\\n}\\n\\n.scrollable {\\n  overflow: hidden;\\n  position: fixed;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n}\\n\\n.blur {\\n  position: absolute;\\n  width: inherit;\\n  height: inherit;\\n  /* background-color: rgba(0, 0, 0, .5);\\n  filter: blur(4px); */\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  position: fixed;\\n  z-index: 100;\\n\\n\\n}\\n\\n.border:hover {\\n  transition: 1s;\\n}\\n\\n.nav_btn {\\n  background-color: rgba(255, 255, 255, 0);\\n  color: #fff;\\n  border: none;\\n  border: white solid 2px;\\n  padding: .7rem;\\n  transition: 0.25s;\\n  z-index: 100;\\n  -webkit-backdrop-filter: blur(7px);\\n          backdrop-filter: blur(7px);\\n  max-height: 3rem;\\n\\n  &:hover,\\n  &:focus {\\n    color: #000;\\n    box-shadow: inset 0 3.25em 0 0 white;\\n  }\\n}\\n\\n.name-title {\\n  padding: 1rem;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: baseline;\\n  flex-direction: column;\\n}\\n\\n.name-title h1 {\\n  font-size: 4rem;\\n}\\n\\n.card-container {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  /* overflow-y: auto; */\\n}\\n\\n.card {\\n  /* position: relative; */\\n  width: 80vw;\\n  /* height: 50vh; */\\n  margin: 2rem;\\n  background-color: rgba(20, 20, 20, .5);\\n  -webkit-backdrop-filter: blur(7px);\\n          backdrop-filter: blur(7px);\\n  border: solid 2px #fff;\\n  padding: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.card h1 {\\n  margin-bottom: 2rem;\\n}\\n\\n.card-inner {\\n  display: flex;\\n  flex-wrap: wrap;\\n  /* grid-template-columns: 2fr 3fr; */\\n  height: 100%;\\n\\n}\\n\\n.card video {\\n  max-width: 90%;\\n  border-radius: 10px;\\n}\\n\\n.logo {\\n  max-height: inherit;\\n}\\n\\n.text-right>* {\\n  margin-bottom: 1rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,+FAA+F;;;AAG/F;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,mCAAmC;EACnC,uBAAuB;EACvB,cAAc;;AAEhB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,MAAM;EACN,OAAO;EACP,WAAW;EACX,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;;AAEpB;;AAEA;;EAEE;;;IAGE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,cAAc;EAChB;AACF;;AAEA;;EAEE;;;IAGE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,cAAc;EAChB;AACF;;AAEA;EACE,uBAAuB;EACvB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;;AAEzB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf;sBACoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,eAAe;EACf,YAAY;;;AAGd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,wCAAwC;EACxC,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,kCAA0B;UAA1B,0BAA0B;EAC1B,gBAAgB;;EAEhB;;IAEE,WAAW;IACX,oCAAoC;EACtC;AACF;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,sCAAsC;EACtC,kCAA0B;UAA1B,0BAA0B;EAC1B,sBAAsB;EACtB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,YAAY;;AAEd;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');\\n\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  color: white;\\n  font-family: 'Fira Code', monospace;\\n  scroll-behavior: smooth;\\n  transition: 1s;\\n\\n}\\n\\n.webgl {\\n  position: fixed;\\n  display: block;\\n  top: 0;\\n  left: 0;\\n  z-index: -1;\\n  outline: none;\\n}\\n\\n.label-container {\\n  position: absolute;\\n  bottom: 16px;\\n  left: 16px;\\n}\\n\\n.label {\\n  color: white;\\n  margin-bottom: 8px;\\n}\\n\\na,\\na:visited {\\n  color: inherit;\\n}\\n\\n.container-main {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n\\n}\\n\\n@media only screen and (max-width:600px) {\\n\\n  .border,\\n  .card-container,\\n  .scrollable {\\n    width: 90vw;\\n    height: 90vh;\\n  }\\n\\n  .name-title h1 {\\n    font-size: 2rem;\\n  }\\n\\n  .card-inner div {\\n    display: flex;\\n    flex-direction: column;\\n    /* min-width: 20rem; */\\n    max-width: 95%;\\n  }\\n}\\n\\n@media only screen and (min-width:600px) {\\n\\n  .border,\\n  .card-container,\\n  .scrollable {\\n    width: 95vw;\\n    height: 90vh;\\n  }\\n\\n  .card-inner div {\\n    display: flex;\\n    flex-direction: column;\\n    /* min-width: 20rem; */\\n    max-width: 50%;\\n  }\\n}\\n\\n.border {\\n  border: 2px white solid;\\n  transition: 1s;\\n  position: fixed;\\n  overflow: hidden;\\n  /* z-index: 10; */\\n  /* filter: blur(4px); */\\n\\n}\\n\\n.scrollable {\\n  overflow: hidden;\\n  position: fixed;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n}\\n\\n.blur {\\n  position: absolute;\\n  width: inherit;\\n  height: inherit;\\n  /* background-color: rgba(0, 0, 0, .5);\\n  filter: blur(4px); */\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  position: fixed;\\n  z-index: 100;\\n\\n\\n}\\n\\n.border:hover {\\n  transition: 1s;\\n}\\n\\n.nav_btn {\\n  background-color: rgba(255, 255, 255, 0);\\n  color: #fff;\\n  border: none;\\n  border: white solid 2px;\\n  padding: .7rem;\\n  transition: 0.25s;\\n  z-index: 100;\\n  backdrop-filter: blur(7px);\\n  max-height: 3rem;\\n\\n  &:hover,\\n  &:focus {\\n    color: #000;\\n    box-shadow: inset 0 3.25em 0 0 white;\\n  }\\n}\\n\\n.name-title {\\n  padding: 1rem;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: baseline;\\n  flex-direction: column;\\n}\\n\\n.name-title h1 {\\n  font-size: 4rem;\\n}\\n\\n.card-container {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  /* overflow-y: auto; */\\n}\\n\\n.card {\\n  /* position: relative; */\\n  width: 80vw;\\n  /* height: 50vh; */\\n  margin: 2rem;\\n  background-color: rgba(20, 20, 20, .5);\\n  backdrop-filter: blur(7px);\\n  border: solid 2px #fff;\\n  padding: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.card h1 {\\n  margin-bottom: 2rem;\\n}\\n\\n.card-inner {\\n  display: flex;\\n  flex-wrap: wrap;\\n  /* grid-template-columns: 2fr 3fr; */\\n  height: 100%;\\n\\n}\\n\\n.card video {\\n  max-width: 90%;\\n  border-radius: 10px;\\n}\\n\\n.logo {\\n  max-height: inherit;\\n}\\n\\n.text-right>* {\\n  margin-bottom: 1rem;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLG1IQUFtSCxJQUFJLG1CQUFtQixTQUFTLGNBQWMsZUFBZSxpQkFBaUIsd0NBQXdDLDRCQUE0QixtQkFBbUIsS0FBSyxZQUFZLG9CQUFvQixtQkFBbUIsV0FBVyxZQUFZLGdCQUFnQixrQkFBa0IsR0FBRyxzQkFBc0IsdUJBQXVCLGlCQUFpQixlQUFlLEdBQUcsWUFBWSxpQkFBaUIsdUJBQXVCLEdBQUcsbUJBQW1CLG1CQUFtQixHQUFHLHFCQUFxQixpQkFBaUIsa0JBQWtCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixLQUFLLDhDQUE4QyxtREFBbUQsa0JBQWtCLG1CQUFtQixLQUFLLHNCQUFzQixzQkFBc0IsS0FBSyx1QkFBdUIsb0JBQW9CLDZCQUE2QiwyQkFBMkIsdUJBQXVCLEtBQUssR0FBRyw4Q0FBOEMsbURBQW1ELGtCQUFrQixtQkFBbUIsS0FBSyx1QkFBdUIsb0JBQW9CLDZCQUE2QiwyQkFBMkIsdUJBQXVCLEtBQUssR0FBRyxhQUFhLDRCQUE0QixtQkFBbUIsb0JBQW9CLHFCQUFxQixvQkFBb0IsNEJBQTRCLE9BQU8saUJBQWlCLHFCQUFxQixvQkFBb0IscUJBQXFCLHVCQUF1QixHQUFHLFdBQVcsdUJBQXVCLG1CQUFtQixvQkFBb0IsMkNBQTJDLHVCQUF1QixLQUFLLFVBQVUsa0JBQWtCLDRCQUE0QixtQ0FB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b0JBQW9CLHFCQUFxQix1QkFBdUIsR0FBRyxXQUFXLHVCQUF1QixtQkFBbUIsb0JBQW9CLDJDQUEyQyx1QkFBdUIsS0FBSyxVQUFVLGtCQUFrQiw0QkFBNEIsbUNBQW1DLG9CQUFvQixpQkFBaUIsT0FBTyxtQkFBbUIsbUJBQW1CLEdBQUcsY0FBYyw2Q0FBNkMsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsbUJBQW1CLHNCQUFzQixpQkFBaUIsK0JBQStCLHFCQUFxQiwyQkFBMkIsa0JBQWtCLDJDQUEyQyxLQUFLLEdBQUcsaUJBQWlCLGtCQUFrQixrQkFBa0IsaUJBQWlCLGtCQUFrQiw0QkFBNEIsMEJBQTBCLDJCQUEyQixHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxxQkFBcUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLHlCQUF5QixLQUFLLFdBQVcsMkJBQTJCLGtCQUFrQixxQkFBcUIsbUJBQW1CLDJDQUEyQywrQkFBK0IsMkJBQTJCLGtCQUFrQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRyxjQUFjLHdCQUF3QixHQUFHLGlCQUFpQixrQkFBa0Isb0JBQW9CLHVDQUF1QyxtQkFBbUIsS0FBSyxpQkFBaUIsbUJBQW1CLHdCQUF3QixHQUFHLFdBQVcsd0JBQXdCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLG1CQUFtQjtBQUNwN1A7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/YTYzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdGaXJhIENvZGUnLCBtb25vc3BhY2U7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHRyYW5zaXRpb246IDFzO1xcblxcbn1cXG5cXG4ud2ViZ2wge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubGFiZWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTZweDtcXG4gIGxlZnQ6IDE2cHg7XFxufVxcblxcbi5sYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uY29udGFpbmVyLW1haW4ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xcblxcbiAgLmJvcmRlcixcXG4gIC5jYXJkLWNvbnRhaW5lcixcXG4gIC5zY3JvbGxhYmxlIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG5cXG4gIC5uYW1lLXRpdGxlIGgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLmNhcmQtaW5uZXIgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogbWluLXdpZHRoOiAyMHJlbTsgKi9cXG4gICAgbWF4LXdpZHRoOiA5NSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDBweCkge1xcblxcbiAgLmJvcmRlcixcXG4gIC5jYXJkLWNvbnRhaW5lcixcXG4gIC5zY3JvbGxhYmxlIHtcXG4gICAgd2lkdGg6IDk1dnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG5cXG4gIC5jYXJkLWlubmVyIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIG1pbi13aWR0aDogMjByZW07ICovXFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG4uYm9yZGVyIHtcXG4gIGJvcmRlcjogMnB4IHdoaXRlIHNvbGlkO1xcbiAgdHJhbnNpdGlvbjogMXM7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogei1pbmRleDogMTA7ICovXFxuICAvKiBmaWx0ZXI6IGJsdXIoNHB4KTsgKi9cXG5cXG59XFxuXFxuLnNjcm9sbGFibGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5ibHVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICBmaWx0ZXI6IGJsdXIoNHB4KTsgKi9cXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDA7XFxuXFxuXFxufVxcblxcbi5ib3JkZXI6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcbi5uYXZfYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xcbiAgcGFkZGluZzogLjdyZW07XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIHotaW5kZXg6IDEwMDtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcbiAgbWF4LWhlaWdodDogM3JlbTtcXG5cXG4gICY6aG92ZXIsXFxuICAmOmZvY3VzIHtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMy4yNWVtIDAgMCB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLm5hbWUtdGl0bGUge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmFtZS10aXRsZSBoMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xcbn1cXG5cXG4uY2FyZCB7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICB3aWR0aDogODB2dztcXG4gIC8qIGhlaWdodDogNTB2aDsgKi9cXG4gIG1hcmdpbjogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCwgLjUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjZmZmO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCBoMSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY2FyZC1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyOyAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4uY2FyZCB2aWRlbyB7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi50ZXh0LXJpZ2h0Pioge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwrRkFBK0Y7OztBQUcvRjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7O0FBRXBCOztBQUVBOztFQUVFOzs7SUFHRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTs7RUFFRTs7O0lBR0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmO3NCQUNvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixZQUFZOzs7QUFHZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixnQkFBZ0I7O0VBRWhCOztJQUVFLFdBQVc7SUFDWCxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdGaXJhIENvZGUnLCBtb25vc3BhY2U7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHRyYW5zaXRpb246IDFzO1xcblxcbn1cXG5cXG4ud2ViZ2wge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubGFiZWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTZweDtcXG4gIGxlZnQ6IDE2cHg7XFxufVxcblxcbi5sYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uY29udGFpbmVyLW1haW4ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xcblxcbiAgLmJvcmRlcixcXG4gIC5jYXJkLWNvbnRhaW5lcixcXG4gIC5zY3JvbGxhYmxlIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG5cXG4gIC5uYW1lLXRpdGxlIGgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLmNhcmQtaW5uZXIgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogbWluLXdpZHRoOiAyMHJlbTsgKi9cXG4gICAgbWF4LXdpZHRoOiA5NSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDBweCkge1xcblxcbiAgLmJvcmRlcixcXG4gIC5jYXJkLWNvbnRhaW5lcixcXG4gIC5zY3JvbGxhYmxlIHtcXG4gICAgd2lkdGg6IDk1dnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG5cXG4gIC5jYXJkLWlubmVyIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIG1pbi13aWR0aDogMjByZW07ICovXFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG4uYm9yZGVyIHtcXG4gIGJvcmRlcjogMnB4IHdoaXRlIHNvbGlkO1xcbiAgdHJhbnNpdGlvbjogMXM7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogei1pbmRleDogMTA7ICovXFxuICAvKiBmaWx0ZXI6IGJsdXIoNHB4KTsgKi9cXG5cXG59XFxuXFxuLnNjcm9sbGFibGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5ibHVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICBmaWx0ZXI6IGJsdXIoNHB4KTsgKi9cXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDA7XFxuXFxuXFxufVxcblxcbi5ib3JkZXI6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcbi5uYXZfYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xcbiAgcGFkZGluZzogLjdyZW07XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcbiAgbWF4LWhlaWdodDogM3JlbTtcXG5cXG4gICY6aG92ZXIsXFxuICAmOmZvY3VzIHtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMy4yNWVtIDAgMCB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLm5hbWUtdGl0bGUge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmFtZS10aXRsZSBoMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xcbn1cXG5cXG4uY2FyZCB7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICB3aWR0aDogODB2dztcXG4gIC8qIGhlaWdodDogNTB2aDsgKi9cXG4gIG1hcmdpbjogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCwgLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjZmZmO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCBoMSB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY2FyZC1pbm5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyOyAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4uY2FyZCB2aWRlbyB7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi50ZXh0LXJpZ2h0Pioge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});