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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');\\n\\n:root{\\n  \\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n  color: white;\\n  font-family: 'Fira Code', monospace;\\n  scroll-behavior: smooth;\\n  transition: 1s;\\n\\n}\\n\\nul {\\n  padding-left: 2rem;\\n}\\n\\n.webgl {\\n  position: fixed;\\n  display: block;\\n  top: 0;\\n  left: 0;\\n  z-index: -1;\\n  outline: none;\\n}\\n\\n.label-container {\\n  position: absolute;\\n  bottom: 16px;\\n  left: 16px;\\n}\\n\\n.label {\\n  color: white;\\n  margin-bottom: 8px;\\n}\\n\\na,\\na:visited {\\n  color: inherit;\\n}\\n\\n.container-main {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n\\n}\\n\\n@media only screen and (max-width:600px) {\\n\\n  .border,\\n  .card-container,\\n  .scrollable {\\n    width: 90vw;\\n    height: 90vh;\\n  }\\n\\n  .name-title h1 {\\n    font-size: 2rem;\\n  }\\n\\n  .card-inner div {\\n    display: flex;\\n    flex-direction: column;\\n    max-width: 95%;\\n  }\\n}\\n\\n@media only screen and (min-width:600px) {\\n\\n  .border,\\n  .card-container,\\n  .scrollable {\\n    width: 95vw;\\n    height: 90vh;\\n  }\\n\\n  .card-inner div {\\n    display: flex;\\n    flex-direction: column;\\n    max-width: 50%;\\n  }\\n}\\n\\n.border {\\n  border: 2px white solid;\\n  transition: 1s;\\n  position: fixed;\\n  overflow: hidden;\\n  /* z-index: 10; */\\n  /* filter: blur(4px); */\\n\\n}\\n\\n.scrollable {\\n  overflow: hidden;\\n  position: fixed;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n}\\n\\n.blur {\\n  position: absolute;\\n  width: inherit;\\n  height: inherit;\\n  /* background-color: rgba(0, 0, 0, .5);\\n  filter: blur(4px); */\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  position: fixed;\\n  z-index: 100;\\n\\n\\n}\\n\\n.border:hover {\\n  transition: 1s;\\n}\\n\\n.nav_btn {\\n  background-color: rgba(255, 255, 255, 0);\\n  color: #fff;\\n  border: none;\\n  border: white solid 2px;\\n  padding: .7rem;\\n  transition: 0.25s;\\n  z-index: 100;\\n  -webkit-backdrop-filter: blur(7px);\\n          backdrop-filter: blur(7px);\\n  max-height: 3rem;\\n\\n  &:hover,\\n  &:focus {\\n    color: #000;\\n    box-shadow: inset 0 3.25em 0 0 white;\\n  }\\n}\\n\\n.name-title {\\n  padding: 1rem;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: baseline;\\n  flex-direction: column;\\n}\\n\\n.name-title h1 {\\n  font-size: 4rem;\\n}\\n\\n.card-container {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  /* overflow-y: auto; */\\n}\\n\\n.card {\\n  /* position: relative; */\\n  width: 80vw;\\n  max-height: 90vh;\\n  /* height: 50vh; */\\n  margin: 2rem;\\n  background-color: rgba(20, 20, 20, .5);\\n  -webkit-backdrop-filter: blur(7px);\\n          backdrop-filter: blur(7px);\\n  border: solid 2px #fff;\\n  padding: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.card h1 {\\n  margin-bottom: 2rem;\\n}\\n\\n.card-inner {\\n  display: flex;\\n  flex-wrap: wrap;\\n  /* grid-template-columns: 2fr 3fr; */\\n  height: 100%;\\n\\n}\\n\\n.portf-left {\\n  align-items: center;\\n  justify-content: flex-start;\\n}\\n.portf-left div {\\n  margin-bottom: 0;\\n}\\n.portf-left>* {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin-bottom: 2rem;\\n}\\n\\n.card video {\\n  max-width: 75%;\\n  border-radius: 10px;\\n}\\n\\n.logo {\\n  max-height: 1.5rem;\\n  padding-top: 1rem;\\n}\\n\\n.text-right>* {\\n  margin-bottom: 1rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,+FAA+F;;AAE/F;;AAEA;AACA;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,mCAAmC;EACnC,uBAAuB;EACvB,cAAc;;AAEhB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,MAAM;EACN,OAAO;EACP,WAAW;EACX,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;;AAEpB;;AAEA;;EAEE;;;IAGE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,cAAc;EAChB;AACF;;AAEA;;EAEE;;;IAGE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,cAAc;EAChB;AACF;;AAEA;EACE,uBAAuB;EACvB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;;AAEzB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf;sBACoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,eAAe;EACf,YAAY;;;AAGd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,wCAAwC;EACxC,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,kCAA0B;UAA1B,0BAA0B;EAC1B,gBAAgB;;EAEhB;;IAEE,WAAW;IACX,oCAAoC;EACtC;AACF;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,sCAAsC;EACtC,kCAA0B;UAA1B,0BAA0B;EAC1B,sBAAsB;EACtB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,YAAY;;AAEd;;AAEA;EACE,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');\\n\\n:root{\\n  \\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n  color: white;\\n  font-family: 'Fira Code', monospace;\\n  scroll-behavior: smooth;\\n  transition: 1s;\\n\\n}\\n\\nul {\\n  padding-left: 2rem;\\n}\\n\\n.webgl {\\n  position: fixed;\\n  display: block;\\n  top: 0;\\n  left: 0;\\n  z-index: -1;\\n  outline: none;\\n}\\n\\n.label-container {\\n  position: absolute;\\n  bottom: 16px;\\n  left: 16px;\\n}\\n\\n.label {\\n  color: white;\\n  margin-bottom: 8px;\\n}\\n\\na,\\na:visited {\\n  color: inherit;\\n}\\n\\n.container-main {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n\\n}\\n\\n@media only screen and (max-width:600px) {\\n\\n  .border,\\n  .card-container,\\n  .scrollable {\\n    width: 90vw;\\n    height: 90vh;\\n  }\\n\\n  .name-title h1 {\\n    font-size: 2rem;\\n  }\\n\\n  .card-inner div {\\n    display: flex;\\n    flex-direction: column;\\n    max-width: 95%;\\n  }\\n}\\n\\n@media only screen and (min-width:600px) {\\n\\n  .border,\\n  .card-container,\\n  .scrollable {\\n    width: 95vw;\\n    height: 90vh;\\n  }\\n\\n  .card-inner div {\\n    display: flex;\\n    flex-direction: column;\\n    max-width: 50%;\\n  }\\n}\\n\\n.border {\\n  border: 2px white solid;\\n  transition: 1s;\\n  position: fixed;\\n  overflow: hidden;\\n  /* z-index: 10; */\\n  /* filter: blur(4px); */\\n\\n}\\n\\n.scrollable {\\n  overflow: hidden;\\n  position: fixed;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n}\\n\\n.blur {\\n  position: absolute;\\n  width: inherit;\\n  height: inherit;\\n  /* background-color: rgba(0, 0, 0, .5);\\n  filter: blur(4px); */\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  position: fixed;\\n  z-index: 100;\\n\\n\\n}\\n\\n.border:hover {\\n  transition: 1s;\\n}\\n\\n.nav_btn {\\n  background-color: rgba(255, 255, 255, 0);\\n  color: #fff;\\n  border: none;\\n  border: white solid 2px;\\n  padding: .7rem;\\n  transition: 0.25s;\\n  z-index: 100;\\n  backdrop-filter: blur(7px);\\n  max-height: 3rem;\\n\\n  &:hover,\\n  &:focus {\\n    color: #000;\\n    box-shadow: inset 0 3.25em 0 0 white;\\n  }\\n}\\n\\n.name-title {\\n  padding: 1rem;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: baseline;\\n  flex-direction: column;\\n}\\n\\n.name-title h1 {\\n  font-size: 4rem;\\n}\\n\\n.card-container {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  /* overflow-y: auto; */\\n}\\n\\n.card {\\n  /* position: relative; */\\n  width: 80vw;\\n  max-height: 90vh;\\n  /* height: 50vh; */\\n  margin: 2rem;\\n  background-color: rgba(20, 20, 20, .5);\\n  backdrop-filter: blur(7px);\\n  border: solid 2px #fff;\\n  padding: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.card h1 {\\n  margin-bottom: 2rem;\\n}\\n\\n.card-inner {\\n  display: flex;\\n  flex-wrap: wrap;\\n  /* grid-template-columns: 2fr 3fr; */\\n  height: 100%;\\n\\n}\\n\\n.portf-left {\\n  align-items: center;\\n  justify-content: flex-start;\\n}\\n.portf-left div {\\n  margin-bottom: 0;\\n}\\n.portf-left>* {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin-bottom: 2rem;\\n}\\n\\n.card video {\\n  max-width: 75%;\\n  border-radius: 10px;\\n}\\n\\n.logo {\\n  max-height: 1.5rem;\\n  padding-top: 1rem;\\n}\\n\\n.text-right>* {\\n  margin-bottom: 1rem;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLG1IQUFtSCxJQUFJLG1CQUFtQixVQUFVLE9BQU8sS0FBSyxjQUFjLGVBQWUsaUJBQWlCLHdDQUF3Qyw0QkFBNEIsbUJBQW1CLEtBQUssUUFBUSx1QkFBdUIsR0FBRyxZQUFZLG9CQUFvQixtQkFBbUIsV0FBVyxZQUFZLGdCQUFnQixrQkFBa0IsR0FBRyxzQkFBc0IsdUJBQXVCLGlCQUFpQixlQUFlLEdBQUcsWUFBWSxpQkFBaUIsdUJBQXVCLEdBQUcsbUJBQW1CLG1CQUFtQixHQUFHLHFCQUFxQixpQkFBaUIsa0JBQWtCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixLQUFLLDhDQUE4QyxtREFBbUQsa0JBQWtCLG1CQUFtQixLQUFLLHNCQUFzQixzQkFBc0IsS0FBSyx1QkFBdUIsb0JBQW9CLDZCQUE2QixxQkFBcUIsS0FBSyxHQUFHLDhDQUE4QyxtREFBbUQsa0JBQWtCLG1CQUFtQixLQUFLLHVCQUF1QixvQkFBb0IsNkJBQTZCLHFCQUFxQixLQUFLLEdBQUcsYUFBYSw0QkFBNEIsbUJBQW1CLG9CQUFvQixxQkFBcUIsb0JBQW9CLDRCQUE0QixPQUFPLGlCQUFpQixxQkFBcUIsb0JBQW9CLHFCQUFxQix1QkFBdUIsR0FBRyxXQUFXLHVCQUF1QixtQkFBbUIsb0JBQW9CLDJDQUEyQyx1QkFBdUIsS0FBSyxVQUFVLGtCQUFr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UjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz9hNjNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdHtcXG4gIFxcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0ZpcmEgQ29kZScsIG1vbm9zcGFjZTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgdHJhbnNpdGlvbjogMXM7XFxuXFxufVxcblxcbnVsIHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLndlYmdsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmxhYmVsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDE2cHg7XFxuICBsZWZ0OiAxNnB4O1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmNvbnRhaW5lci1tYWluIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcXG5cXG4gIC5ib3JkZXIsXFxuICAuY2FyZC1jb250YWluZXIsXFxuICAuc2Nyb2xsYWJsZSB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuXFxuICAubmFtZS10aXRsZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5jYXJkLWlubmVyIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogOTUlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjAwcHgpIHtcXG5cXG4gIC5ib3JkZXIsXFxuICAuY2FyZC1jb250YWluZXIsXFxuICAuc2Nyb2xsYWJsZSB7XFxuICAgIHdpZHRoOiA5NXZ3O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuXFxuICAuY2FyZC1pbm5lciBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG59XFxuXFxuLmJvcmRlciB7XFxuICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZDtcXG4gIHRyYW5zaXRpb246IDFzO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIHotaW5kZXg6IDEwOyAqL1xcbiAgLyogZmlsdGVyOiBibHVyKDRweCk7ICovXFxuXFxufVxcblxcbi5zY3JvbGxhYmxlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uYmx1ciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgZmlsdGVyOiBibHVyKDRweCk7ICovXFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwO1xcblxcblxcbn1cXG5cXG4uYm9yZGVyOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDFzO1xcbn1cXG5cXG4ubmF2X2J0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IHdoaXRlIHNvbGlkIDJweDtcXG4gIHBhZGRpbmc6IC43cmVtO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICB6LWluZGV4OiAxMDA7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG4gIG1heC1oZWlnaHQ6IDNyZW07XFxuXFxuICAmOmhvdmVyLFxcbiAgJjpmb2N1cyB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDMuMjVlbSAwIDAgd2hpdGU7XFxuICB9XFxufVxcblxcbi5uYW1lLXRpdGxlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hbWUtdGl0bGUgaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogb3ZlcmZsb3cteTogYXV0bzsgKi9cXG59XFxuXFxuLmNhcmQge1xcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgd2lkdGg6IDgwdnc7XFxuICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgLyogaGVpZ2h0OiA1MHZoOyAqL1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAuNSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG4gIGJvcmRlcjogc29saWQgMnB4ICNmZmY7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIGgxIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5jYXJkLWlubmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7ICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxufVxcblxcbi5wb3J0Zi1sZWZ0IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5wb3J0Zi1sZWZ0IGRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ucG9ydGYtbGVmdD4qIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY2FyZCB2aWRlbyB7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5sb2dvIHtcXG4gIG1heC1oZWlnaHQ6IDEuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4udGV4dC1yaWdodD4qIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsK0ZBQStGOztBQUUvRjs7QUFFQTtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjs7QUFFcEI7O0FBRUE7O0VBRUU7OztJQUdFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7O0VBRUU7OztJQUdFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmO3NCQUNvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixZQUFZOzs7QUFHZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixnQkFBZ0I7O0VBRWhCOztJQUVFLFdBQVc7SUFDWCxvQ0FBb0M7RUFDdEM7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErQ29kZTp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290e1xcbiAgXFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBDb2RlJywgbW9ub3NwYWNlO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICB0cmFuc2l0aW9uOiAxcztcXG5cXG59XFxuXFxudWwge1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4ud2ViZ2wge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubGFiZWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTZweDtcXG4gIGxlZnQ6IDE2cHg7XFxufVxcblxcbi5sYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uY29udGFpbmVyLW1haW4ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xcblxcbiAgLmJvcmRlcixcXG4gIC5jYXJkLWNvbnRhaW5lcixcXG4gIC5zY3JvbGxhYmxlIHtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG5cXG4gIC5uYW1lLXRpdGxlIGgxIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLmNhcmQtaW5uZXIgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LXdpZHRoOiA5NSU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MDBweCkge1xcblxcbiAgLmJvcmRlcixcXG4gIC5jYXJkLWNvbnRhaW5lcixcXG4gIC5zY3JvbGxhYmxlIHtcXG4gICAgd2lkdGg6IDk1dnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG5cXG4gIC5jYXJkLWlubmVyIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogNTAlO1xcbiAgfVxcbn1cXG5cXG4uYm9yZGVyIHtcXG4gIGJvcmRlcjogMnB4IHdoaXRlIHNvbGlkO1xcbiAgdHJhbnNpdGlvbjogMXM7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogei1pbmRleDogMTA7ICovXFxuICAvKiBmaWx0ZXI6IGJsdXIoNHB4KTsgKi9cXG5cXG59XFxuXFxuLnNjcm9sbGFibGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5ibHVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxuICBmaWx0ZXI6IGJsdXIoNHB4KTsgKi9cXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDA7XFxuXFxuXFxufVxcblxcbi5ib3JkZXI6aG92ZXIge1xcbiAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcbi5uYXZfYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xcbiAgcGFkZGluZzogLjdyZW07XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcbiAgbWF4LWhlaWdodDogM3JlbTtcXG5cXG4gICY6aG92ZXIsXFxuICAmOmZvY3VzIHtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMy4yNWVtIDAgMCB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLm5hbWUtdGl0bGUge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmFtZS10aXRsZSBoMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xcbn1cXG5cXG4uY2FyZCB7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICB3aWR0aDogODB2dztcXG4gIG1heC1oZWlnaHQ6IDkwdmg7XFxuICAvKiBoZWlnaHQ6IDUwdmg7ICovXFxuICBtYXJnaW46IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCAyMCwgMjAsIC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZjtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQgaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmNhcmQtaW5uZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjsgKi9cXG4gIGhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxuLnBvcnRmLWxlZnQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLnBvcnRmLWxlZnQgZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5wb3J0Zi1sZWZ0Pioge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5jYXJkIHZpZGVvIHtcXG4gIG1heC13aWR0aDogNzUlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgbWF4LWhlaWdodDogMS41cmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi50ZXh0LXJpZ2h0Pioge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});