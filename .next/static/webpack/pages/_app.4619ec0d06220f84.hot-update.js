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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');\\n\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  color: white;\\n  font-family: 'Fira Code', monospace;\\n  scroll-behavior: smooth;\\n}\\n\\n.webgl {\\n  position: fixed;\\n  display: block;\\n  top: 0;\\n  left: 0;\\n  z-index: -1;\\n  outline: none;\\n}\\n\\n.label-container {\\n  position: absolute;\\n  bottom: 16px;\\n  left: 16px;\\n}\\n\\n.label {\\n  color: white;\\n  margin-bottom: 8px;\\n}\\n\\na,\\na:visited {\\n  color: inherit;\\n}\\n\\n.container-main {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n\\n}\\n\\n@media only screen and (max-width:600px) {\\n  .border, .card-container, .scrollable {\\n    width: 90vw;\\n    height: 90vh;\\n  }\\n  .name-title h1{\\n    font-size: 2rem;\\n  }\\n}\\n\\n@media only screen and (min-width:600px) {\\n  .border, .card-container, .scrollable {\\n    width: 95vw;\\n    height: 90vh;\\n  }\\n}\\n\\n.border {\\n  border: 2px white solid;\\n  transition: 1s;\\n  position: fixed;\\n  overflow: hidden;\\n  /* z-index: 10; */\\n  /* filter: blur(4px); */\\n\\n}\\n.scrollable{\\n  overflow: hidden;\\n  position: fixed;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n}\\n.blur{\\n  position: absolute;\\n  width: inherit;\\n  height: inherit;\\n  /* background-color: rgba(0, 0, 0, .5);\\n  filter: blur(4px); */\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  position: fixed;\\n  z-index: 100;\\n\\n\\n}\\n\\n.border:hover {\\n  transition: 1s;\\n}\\n\\n.nav_btn {\\n  background-color: rgba(255, 255, 255, 0);\\n  color: #fff;\\n  border: none;\\n  border: white solid 2px;\\n  padding: .7rem;\\n  transition: 0.25s;\\n  z-index: 100;\\n  -webkit-backdrop-filter: blur(7px);\\n          backdrop-filter: blur(7px);\\n  max-height: 3rem;\\n\\n  &:hover,\\n  &:focus {\\n    color: #000;\\n    box-shadow: inset 0 3.25em 0 0 white;\\n  }\\n}\\n\\n.name-title{\\n  padding: 1rem;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: baseline;\\n  flex-direction: column;\\n}\\n.name-title h1{\\n  font-size: 4rem;\\n}\\n\\n.card-container {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  /* overflow-y: auto; */\\n}\\n\\n.card {\\n  /* position: relative; */\\n  width: 80vw;\\n  /* height: 50vh; */\\n  margin: 2rem;\\n  background-color: rgba(20, 20, 20, .5);\\n  -webkit-backdrop-filter: blur(7px);\\n          backdrop-filter: blur(7px);\\n  border: solid 2px #fff;\\n  padding: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.card-inner{\\n  display: flex;\\n  /* grid-template-columns: 2fr 3fr; */\\n  height: 100%;\\n}\\n.card-inner div {\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: column;\\n}\\n.card video {\\n  max-width: 90%;\\n  border-radius: 10px;\\n}\\n.logo{\\n  max-height: inherit;\\n}\\n\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,+FAA+F;;;AAG/F;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,mCAAmC;EACnC,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,MAAM;EACN,OAAO;EACP,WAAW;EACX,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;;AAEpB;;AAEA;EACE;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE,uBAAuB;EACvB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;;AAEzB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf;sBACoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,eAAe;EACf,YAAY;;;AAGd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,wCAAwC;EACxC,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,kCAA0B;UAA1B,0BAA0B;EAC1B,gBAAgB;;EAEhB;;IAEE,WAAW;IACX,oCAAoC;EACtC;AACF;;AAEA;EACE,aAAa;EACb,aAAa;EACb,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,sBAAsB;AACxB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,sCAAsC;EACtC,kCAA0B;UAA1B,0BAA0B;EAC1B,sBAAsB;EACtB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,YAAY;AACd;AACA;EACE,aAAa;EACb,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap');\\n\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  color: white;\\n  font-family: 'Fira Code', monospace;\\n  scroll-behavior: smooth;\\n}\\n\\n.webgl {\\n  position: fixed;\\n  display: block;\\n  top: 0;\\n  left: 0;\\n  z-index: -1;\\n  outline: none;\\n}\\n\\n.label-container {\\n  position: absolute;\\n  bottom: 16px;\\n  left: 16px;\\n}\\n\\n.label {\\n  color: white;\\n  margin-bottom: 8px;\\n}\\n\\na,\\na:visited {\\n  color: inherit;\\n}\\n\\n.container-main {\\n  width: 100vw;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n\\n}\\n\\n@media only screen and (max-width:600px) {\\n  .border, .card-container, .scrollable {\\n    width: 90vw;\\n    height: 90vh;\\n  }\\n  .name-title h1{\\n    font-size: 2rem;\\n  }\\n}\\n\\n@media only screen and (min-width:600px) {\\n  .border, .card-container, .scrollable {\\n    width: 95vw;\\n    height: 90vh;\\n  }\\n}\\n\\n.border {\\n  border: 2px white solid;\\n  transition: 1s;\\n  position: fixed;\\n  overflow: hidden;\\n  /* z-index: 10; */\\n  /* filter: blur(4px); */\\n\\n}\\n.scrollable{\\n  overflow: hidden;\\n  position: fixed;\\n  overflow-y: auto;\\n  overflow-x: hidden;\\n}\\n.blur{\\n  position: absolute;\\n  width: inherit;\\n  height: inherit;\\n  /* background-color: rgba(0, 0, 0, .5);\\n  filter: blur(4px); */\\n}\\n\\n.nav {\\n  display: flex;\\n  align-items: flex-start;\\n  justify-content: space-between;\\n  position: fixed;\\n  z-index: 100;\\n\\n\\n}\\n\\n.border:hover {\\n  transition: 1s;\\n}\\n\\n.nav_btn {\\n  background-color: rgba(255, 255, 255, 0);\\n  color: #fff;\\n  border: none;\\n  border: white solid 2px;\\n  padding: .7rem;\\n  transition: 0.25s;\\n  z-index: 100;\\n  backdrop-filter: blur(7px);\\n  max-height: 3rem;\\n\\n  &:hover,\\n  &:focus {\\n    color: #000;\\n    box-shadow: inset 0 3.25em 0 0 white;\\n  }\\n}\\n\\n.name-title{\\n  padding: 1rem;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: baseline;\\n  flex-direction: column;\\n}\\n.name-title h1{\\n  font-size: 4rem;\\n}\\n\\n.card-container {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  /* overflow-y: auto; */\\n}\\n\\n.card {\\n  /* position: relative; */\\n  width: 80vw;\\n  /* height: 50vh; */\\n  margin: 2rem;\\n  background-color: rgba(20, 20, 20, .5);\\n  backdrop-filter: blur(7px);\\n  border: solid 2px #fff;\\n  padding: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.card-inner{\\n  display: flex;\\n  /* grid-template-columns: 2fr 3fr; */\\n  height: 100%;\\n}\\n.card-inner div {\\n  display: flex;\\n  flex-wrap: wrap;\\n  flex-direction: column;\\n}\\n.card video {\\n  max-width: 90%;\\n  border-radius: 10px;\\n}\\n.logo{\\n  max-height: inherit;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLG1IQUFtSCxJQUFJLG1CQUFtQixTQUFTLGNBQWMsZUFBZSxpQkFBaUIsd0NBQXdDLDRCQUE0QixHQUFHLFlBQVksb0JBQW9CLG1CQUFtQixXQUFXLFlBQVksZ0JBQWdCLGtCQUFrQixHQUFHLHNCQUFzQix1QkFBdUIsaUJBQWlCLGVBQWUsR0FBRyxZQUFZLGlCQUFpQix1QkFBdUIsR0FBRyxtQkFBbUIsbUJBQW1CLEdBQUcscUJBQXFCLGlCQUFpQixrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLEtBQUssOENBQThDLDJDQUEyQyxrQkFBa0IsbUJBQW1CLEtBQUssbUJBQW1CLHNCQUFzQixLQUFLLEdBQUcsOENBQThDLDJDQUEyQyxrQkFBa0IsbUJBQW1CLEtBQUssR0FBRyxhQUFhLDRCQUE0QixtQkFBbUIsb0JBQW9CLHFCQUFxQixvQkFBb0IsNEJBQTRCLE9BQU8sY0FBYyxxQkFBcUIsb0JBQW9CLHFCQUFxQix1QkFBdUIsR0FBRyxRQUFRLHVCQUF1QixtQkFBbUIsb0JBQW9CLDJDQUEyQyx1QkFBdUIsS0FBSyxVQUFVLGtCQUFrQiw0QkFBNEIsbUNBQW1DLG9CQUFvQixpQkFBaUIsT0FBTyxtQkFBbUIsbUJBQW1CLEdBQUcsY0FBYyw2Q0FBNkMsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsbUJBQW1CLHNCQUFzQixp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QWtCLDRCQUE0QiwwQkFBMEIsMkJBQTJCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLHFCQUFxQix1QkFBdUIsa0JBQWtCLDJCQUEyQix3QkFBd0IseUJBQXlCLEtBQUssV0FBVywyQkFBMkIsa0JBQWtCLHFCQUFxQixtQkFBbUIsMkNBQTJDLCtCQUErQiwyQkFBMkIsa0JBQWtCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLGdCQUFnQixrQkFBa0IsdUNBQXVDLG1CQUFtQixHQUFHLG1CQUFtQixrQkFBa0Isb0JBQW9CLDJCQUEyQixHQUFHLGVBQWUsbUJBQW1CLHdCQUF3QixHQUFHLFFBQVEsd0JBQXdCLEdBQUcsdUJBQXVCO0FBQ3hvTztBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz9hNjNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEA0MDA7NTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ0ZpcmEgQ29kZScsIG1vbm9zcGFjZTtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4ud2ViZ2wge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubGFiZWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTZweDtcXG4gIGxlZnQ6IDE2cHg7XFxufVxcblxcbi5sYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uY29udGFpbmVyLW1haW4ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xcbiAgLmJvcmRlciwgLmNhcmQtY29udGFpbmVyLCAuc2Nyb2xsYWJsZSB7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuICAubmFtZS10aXRsZSBoMXtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjAwcHgpIHtcXG4gIC5ib3JkZXIsIC5jYXJkLWNvbnRhaW5lciwgLnNjcm9sbGFibGUge1xcbiAgICB3aWR0aDogOTV2dztcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgfVxcbn1cXG5cXG4uYm9yZGVyIHtcXG4gIGJvcmRlcjogMnB4IHdoaXRlIHNvbGlkO1xcbiAgdHJhbnNpdGlvbjogMXM7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogei1pbmRleDogMTA7ICovXFxuICAvKiBmaWx0ZXI6IGJsdXIoNHB4KTsgKi9cXG5cXG59XFxuLnNjcm9sbGFibGV7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuLmJsdXJ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgZmlsdGVyOiBibHVyKDRweCk7ICovXFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTAwO1xcblxcblxcbn1cXG5cXG4uYm9yZGVyOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IDFzO1xcbn1cXG5cXG4ubmF2X2J0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IHdoaXRlIHNvbGlkIDJweDtcXG4gIHBhZGRpbmc6IC43cmVtO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxuICB6LWluZGV4OiAxMDA7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG4gIG1heC1oZWlnaHQ6IDNyZW07XFxuXFxuICAmOmhvdmVyLFxcbiAgJjpmb2N1cyB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDMuMjVlbSAwIDAgd2hpdGU7XFxuICB9XFxufVxcblxcbi5uYW1lLXRpdGxle1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubmFtZS10aXRsZSBoMXtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIG92ZXJmbG93LXk6IGF1dG87ICovXFxufVxcblxcbi5jYXJkIHtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gIHdpZHRoOiA4MHZ3O1xcbiAgLyogaGVpZ2h0OiA1MHZoOyAqL1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgMjAsIDIwLCAuNSk7XFxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcXG4gIGJvcmRlcjogc29saWQgMnB4ICNmZmY7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWlubmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjsgKi9cXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmNhcmQtaW5uZXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY2FyZCB2aWRlbyB7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5sb2dve1xcbiAgbWF4LWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwrRkFBK0Y7OztBQUcvRjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCOztBQUV6QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZjtzQkFDb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsWUFBWTs7O0FBR2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtDQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsZ0JBQWdCOztFQUVoQjs7SUFFRSxXQUFXO0lBQ1gsb0NBQW9DO0VBQ3RDO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStDb2RlOndnaHRANDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdGaXJhIENvZGUnLCBtb25vc3BhY2U7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLndlYmdsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmxhYmVsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDE2cHg7XFxuICBsZWZ0OiAxNnB4O1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmNvbnRhaW5lci1tYWluIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcXG4gIC5ib3JkZXIsIC5jYXJkLWNvbnRhaW5lciwgLnNjcm9sbGFibGUge1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgfVxcbiAgLm5hbWUtdGl0bGUgaDF7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYwMHB4KSB7XFxuICAuYm9yZGVyLCAuY2FyZC1jb250YWluZXIsIC5zY3JvbGxhYmxlIHtcXG4gICAgd2lkdGg6IDk1dnc7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG59XFxuXFxuLmJvcmRlciB7XFxuICBib3JkZXI6IDJweCB3aGl0ZSBzb2xpZDtcXG4gIHRyYW5zaXRpb246IDFzO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIHotaW5kZXg6IDEwOyAqL1xcbiAgLyogZmlsdGVyOiBibHVyKDRweCk7ICovXFxuXFxufVxcbi5zY3JvbGxhYmxle1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbi5ibHVye1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gIGZpbHRlcjogYmx1cig0cHgpOyAqL1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDtcXG5cXG5cXG59XFxuXFxuLmJvcmRlcjpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiAxcztcXG59XFxuXFxuLm5hdl9idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAycHg7XFxuICBwYWRkaW5nOiAuN3JlbTtcXG4gIHRyYW5zaXRpb246IDAuMjVzO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XFxuICBtYXgtaGVpZ2h0OiAzcmVtO1xcblxcbiAgJjpob3ZlcixcXG4gICY6Zm9jdXMge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAzLjI1ZW0gMCAwIHdoaXRlO1xcbiAgfVxcbn1cXG5cXG4ubmFtZS10aXRsZXtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm5hbWUtdGl0bGUgaDF7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBvdmVyZmxvdy15OiBhdXRvOyAqL1xcbn1cXG5cXG4uY2FyZCB7XFxuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICB3aWR0aDogODB2dztcXG4gIC8qIGhlaWdodDogNTB2aDsgKi9cXG4gIG1hcmdpbjogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAsIDIwLCAyMCwgLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjZmZmO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZC1pbm5lcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7ICovXFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jYXJkLWlubmVyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNhcmQgdmlkZW8ge1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ubG9nb3tcXG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/globals.css\n"));

/***/ })

});