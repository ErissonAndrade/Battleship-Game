/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/army.ttf */ "./src/assets/fonts/army.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Army';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    background-color: rgb(30 58 138);\r\n    color: white;\r\n    font-family: 'Army'\r\n}\r\n\r\nheader {\r\n    text-align: center;\r\n    font-size: 5rem;\r\n}\r\n\r\nnav {\r\n    text-align: center;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.name-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\ninput {\r\n    width: 300px;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    border: solid white;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    border: solid white;\r\n}\r\n\r\n#confirm-btn {\r\n    font-size: 1.3rem;\r\n    padding: .5rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.place-ships {\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    transition: ease;\r\n}\r\n\r\n.ships-container {\r\n    display: flex;\r\n    gap: 2rem;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n#select-ship {\r\n    font-size: 1.7rem;\r\n    padding: .5rem;\r\n    border-radius: .2rem;;\r\n}\r\n\r\n.change-axis {\r\n    display: flex;\r\n    gap: .3rem;\r\n    font-size: 1.7rem;\r\n    padding: .5rem;\r\n    border-radius: .2rem;;\r\n}\r\n\r\n.ship-position.active {\r\n    background-color: black;\r\n}\r\n\r\n#start-game {\r\n    font-size: 1.3rem;\r\n    padding: .5rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 4rem;\r\n    font-size: 2rem;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.grid-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.player-board {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr)\r\n}\r\n\r\n.computer-board {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr)\r\n}\r\n\r\n.grid {\r\n    border: solid 1px white;\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;AAEA;;AAEA;IACI,mBAAmB;IACnB,4CAAoC;AACxC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,gCAAgC;IAChC,YAAY;IACZ;AACJ;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,iBAAiB;IACjB,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,YAAY;AAChB","sourcesContent":[":root {\r\n\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Army';\r\n    src: url('../assets/fonts/army.ttf');\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    background-color: rgb(30 58 138);\r\n    color: white;\r\n    font-family: 'Army'\r\n}\r\n\r\nheader {\r\n    text-align: center;\r\n    font-size: 5rem;\r\n}\r\n\r\nnav {\r\n    text-align: center;\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.name-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\ninput {\r\n    width: 300px;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    border: solid white;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    border: solid white;\r\n}\r\n\r\n#confirm-btn {\r\n    font-size: 1.3rem;\r\n    padding: .5rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\n.place-ships {\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    transition: ease;\r\n}\r\n\r\n.ships-container {\r\n    display: flex;\r\n    gap: 2rem;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n}\r\n\r\n#select-ship {\r\n    font-size: 1.7rem;\r\n    padding: .5rem;\r\n    border-radius: .2rem;;\r\n}\r\n\r\n.change-axis {\r\n    display: flex;\r\n    gap: .3rem;\r\n    font-size: 1.7rem;\r\n    padding: .5rem;\r\n    border-radius: .2rem;;\r\n}\r\n\r\n.ship-position.active {\r\n    background-color: black;\r\n}\r\n\r\n#start-game {\r\n    font-size: 1.3rem;\r\n    padding: .5rem;\r\n    border-radius: .5rem;\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 4rem;\r\n    font-size: 2rem;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.grid-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.player-board {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr)\r\n}\r\n\r\n.computer-board {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr)\r\n}\r\n\r\n.grid {\r\n    border: solid 1px white;\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/createGrid.js":
/*!***************************!*\
  !*** ./src/createGrid.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGrid": () => (/* binding */ createGrid)
/* harmony export */ });
const selectPlayer = document.querySelector(".player-board")
const selectComputer = document.querySelector(".computer-board")

function createCoords () {
    const columns = ["A","B","C","D","E","F","G","H","I","J"] 
    let gridCoord = []
    for(let i = 1; i <= 9; i++) {
        columns.forEach(letter => gridCoord.push(i + letter))
    }
    return gridCoord
}

function createDivs (parent) {
    for(let i = 1; i <= 90; i++) {
        const div = document.createElement("div")
        div.classList.add("grid")
        parent.appendChild(div)
        const gridCoords = createCoords()
        div.dataset.selection = gridCoords[i-1]
        div.dataset.isTaken = false
        div.setAttribute("id", gridCoords[i-1])
    } 
}

function createGrid() {
    createDivs(selectPlayer)
    createDivs(selectComputer) 
}



/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


function Gameboard() {
    let gameBoard = {}

    gameBoard.shipsOnBoard = [] 

    gameBoard.coordsAttacked = []   

    gameBoard.endGame = false

    gameBoard.placeShipsOnBoard = (length, coords, position) => {
        const newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(length)
        const shipName = newShip.name()
        const shipLength = newShip.length

        let axis = position
        let getRow = parseInt(coords.split("")[0])
        let getColumn = coords.split("")[1]
        let columnCharCode = getColumn.charCodeAt()
        let getCoords = []

        if(axis == "Y") {
            for(let i = 0; i < shipLength; i ++) {
                getCoords.push(getRow++ + getColumn)
            }
        }
        else {
            for(let i = 0; i < shipLength; i ++) {
                getCoords.push(getRow + String.fromCharCode(columnCharCode++))
            }
        }

        // Sets Maximum Column and Row //
        const filterMaximumRow = getCoords.filter(coords => coords.includes(10))
        const filterMaximumColumn = getCoords.filter(coords => coords.includes("K")) 
        
        // Prevents from adding 2 types of the same ship or 2 ships on the same coord //
        let checkCoords = []
        getCoords.forEach(coord => {
            const check = gameBoard.shipsOnBoard.some(ship => ship.coords.includes(coord))
            checkCoords.push(check)
        })

        const isCoordTaken = checkCoords.includes(true)   
        const isShipOnBoard = gameBoard.shipsOnBoard.map(ship => ship.type).includes(shipName)
        
        if(filterMaximumRow.length == 0 && filterMaximumColumn.length == 0 && isCoordTaken == false && isShipOnBoard == false) {
            gameBoard.shipsOnBoard.push({type: shipName, length: shipLength, coords: getCoords, shipMethods: newShip})
        } 
    } 

    gameBoard.receiveAttack = (coordsSelected) => {
        const getShipDamaged = gameBoard.shipsOnBoard.filter(ship => ship.coords.includes(coordsSelected))
        const isCoordTaken = gameBoard.coordsAttacked.includes(coordsSelected)
        let isShipHit = false
        gameBoard.coordsAttacked.push(coordsSelected)

        if(getShipDamaged.length == 1 && isCoordTaken == false) {
            getShipDamaged.map(ship => ship.shipMethods.hit())
            isShipHit = true
        }
        
        if(isCoordTaken == true) {
            gameBoard.coordsAttacked.pop()
        }

        const isEveryShipSunk = gameBoard.shipsOnBoard.every(ship => ship.shipMethods.isSunk == true)
        if(isEveryShipSunk == true) {
            gameBoard.endGame = true
        }

        return isShipHit
    }

    return gameBoard
}





/***/ }),

/***/ "./src/playGame.js":
/*!*************************!*\
  !*** ./src/playGame.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attackGameBoard": () => (/* binding */ attackGameBoard),
/* harmony export */   "computerAttack": () => (/* binding */ computerAttack),
/* harmony export */   "placeComputerShips": () => (/* binding */ placeComputerShips),
/* harmony export */   "placePlayerShip": () => (/* binding */ placePlayerShip)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");


const gameInfoSelector = document.querySelector('.game-info')
const computerBoardName = document.querySelector('.computer-name')
const placeShipsSelector = document.querySelector('.place-ships')
const mainSelector = document.querySelector('main')
const selectComputerBoard = document.querySelector('.computer-board')

const newPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)('Player')
const newComputer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)('Computer')

function placePlayerShip(length, coordSelected, axis) {
  try {
    const placeShip = newPlayer.placePlayerShip(length, coordSelected, axis)
    const getShip = placeShip.filter((ship) => ship.length.includes(length))
    const getCoords = getShip.map((ship) => ship.coords)[0]
    getCoords.forEach((coord) => {
      document.getElementById(coord).style.backgroundColor = 'green'
    })
  } catch {
    alert(`Please select at least ${length} free spaces!`)
  }
}

function placeComputerShips() {
  if (newPlayer.playerShipsOnBoard == 4) {
    computerBoardName.textContent = 'Computer'
    selectComputerBoard.style.display = 'grid'
    mainSelector.style.gap = '5rem'
    placeShipsSelector.style.display = 'none'
    return newComputer.placeComputerShip();
  }
  alert('You need to poisition all your ships before starting the game!')
}

function attackGameBoard(coord, e) {
  const attack = newComputer.playerAttack(coord)
  const setBackground = e.target.style.backgroundColor

  if (attack == true) {
    e.target.style.backgroundColor = 'red'
    gameInfoSelector.innerHTML = 'You hit a ship!'
    setTimeout(computerAttack, 1000)
  }
  if (attack == false && setBackground == '') {
    e.target.style.backgroundColor = 'white'
    gameInfoSelector.innerHTML = 'You missed the shot!'
    setTimeout(computerAttack, 1000)
  }

  if (attack == null) {
    gameInfoSelector.innerHTML = 'You have sunk all enemy ships!'
  }
}

function computerAttack() {
  const attack = newPlayer.computerAttack();
  const coordsAttacked = newPlayer.computerAttacked;
  const selectCell = document.getElementById(`${coordsAttacked}`)

  if (attack == true) {
    selectCell.style.backgroundColor = 'red'
    gameInfoSelector.innerHTML = 'Computer hit a ship!'
  }
  if (attack == false && selectCell.style.backgroundColor == '') {
    selectCell.style.backgroundColor = 'white'
    gameInfoSelector.innerHTML = 'Computer missed the shot!'
  }

  if (attack == null) {
    gameInfoSelector.innerHTML = 'Computer have sunk all enemy ships!'
  }
}




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/gameBoard.js");


function Player(name) {
    let player = {}

    player.name = name

    player.computerAttacked = null

    const newGameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)()

    let playerAttacks = 0
    player.playerShipsOnBoard = null

    player.placePlayerShip = (shipLength, coords, position) => {
        newGameBoard.placeShipsOnBoard(shipLength, coords, position)
        player.playerShipsOnBoard = newGameBoard.shipsOnBoard.length
        return newGameBoard.shipsOnBoard
    }

    player.placeComputerShip = () => {
        do {
            const lengthSizes = [5, 4, 3, 2]
            const randomRow = Math.floor(Math.random() * 9) + 1;
            const randomColumn = String.fromCharCode(65+Math.floor(Math.random() * 10))
            const randomCoords = randomRow + randomColumn
            const positionsTypes = ["Y", "X"]
            const randomPosition = positionsTypes[Math.floor(Math.random() * positionsTypes.length)]
            const randomLength = lengthSizes[Math.floor(Math.random() * lengthSizes.length)]

            newGameBoard.placeShipsOnBoard(randomLength, randomCoords, randomPosition) 
        } while(newGameBoard.shipsOnBoard.length < 4)

        return newGameBoard.shipsOnBoard
    }

    player.playerAttack = (coords) => {
        playerAttacks++
        return (newGameBoard.endGame == false) ? newGameBoard.receiveAttack(coords) : null
    } 

    player.computerAttack = () => {
        do{
            const randomRow = Math.floor(Math.random() * 9) + 1;
            const randomColumn = String.fromCharCode(65+Math.floor(Math.random() * 10))
            const coords = randomRow + randomColumn
            player.computerAttacked = coords
            return newGameBoard.receiveAttack(coords)
        } while(newGameBoard.coordsAttacked.length < playerAttacks)
    }

    return player
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "shipTypes": () => (/* binding */ shipTypes)
/* harmony export */ });
const shipTypes = [
    {type: "Carrier", length: 5},
    {type: "Battleship", length: 4},
    {type: "Destroyer", length: 3},
    {type: "Boat", length:2}
]

function Ship(length) {
    let ship = {}
    ship.length = length

    ship.name = () => {
        const getShip = shipTypes.filter(type => type.length == ship.length)
        const shipName = getShip[0].type
        return shipName
    }
    
    ship.timesHit = 0
    
    ship.hit = () => {
        ship.timesHit++
        if(ship.timesHit == ship.length) {ship.isSunk = true}
    }
    
    ship.isSunk = false

    return ship
} 




/***/ }),

/***/ "./src/assets/fonts/army.ttf":
/*!***********************************!*\
  !*** ./src/assets/fonts/army.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d47b689392221e27007c.ttf";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _createGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGrid */ "./src/createGrid.js");
/* harmony import */ var _playGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playGame */ "./src/playGame.js");





(0,_createGrid__WEBPACK_IMPORTED_MODULE_1__.createGrid)()

const confirmButton = document.getElementById("confirm-btn")
const placeShipsSelector = document.querySelector(".place-ships")
const input = document.getElementById("player-name")
const gameInfoSelector = document.querySelector(".game-info")
const playerBoardName = document.querySelector(".player-name")
const shipsSelector = document.querySelectorAll("#select-ship")
const changeAxisBtn = document.querySelector(".change-axis")
const axis = document.querySelector(".axis")
const startGame = document.getElementById("start-game")
const mainSelector = document.querySelector("main")
const selectPlayerBoard = document.querySelector(".player-board")
const selectComputerBoard = document.querySelector(".computer-board")
const playerGameBoard = document.querySelectorAll(".player-board > .grid")
const computerGameBoard = document.querySelectorAll(".computer-board > .grid")

placeShipsSelector.style.display = "none"
selectPlayerBoard.style.display = "none"
selectComputerBoard.style.display = "none"
gameInfoSelector.style.display = "none"

function setAxis() {
    if (axis.textContent == "X") { 
        axis.textContent = "Y"
    }
    else {
        axis.textContent = "X"
    }
}

function placeShips(length) {
    playerGameBoard.forEach(cell => {
        cell.addEventListener("click", e => {
            const getCoord = cell.dataset.selection
            ;(0,_playGame__WEBPACK_IMPORTED_MODULE_2__.placePlayerShip)(length, getCoord, axis.innerHTML)
        })
    })     
}

confirmButton.addEventListener("click", e =>  {
    if(input.value !== "") {
        e.target.parentElement.remove()
        placeShipsSelector.style.display = "flex"
        selectPlayerBoard.style.display = "grid"
        mainSelector.style.gap = 0
        gameInfoSelector.style.display = "inline"
        playerBoardName.textContent = input.value
    } else {
        alert("Please enter a name!")
    }
})

shipsSelector.forEach(shipSelected => {
    shipSelected.addEventListener("click", e => {
        const shipLength = shipSelected.dataset.length
        placeShips(shipLength)
        e.target.style.opacity = "0.1"
        e.target.style.cursor = "default"
    })
})

changeAxisBtn.addEventListener("click", e => {
    setAxis()
})


computerGameBoard.forEach(cell => {
    cell.addEventListener("click", e => {
        const getCoord = e.target.id
        ;(0,_playGame__WEBPACK_IMPORTED_MODULE_2__.attackGameBoard)(getCoord, e)
    })
}) 

startGame.addEventListener("click", e => {
    ;(0,_playGame__WEBPACK_IMPORTED_MODULE_2__.placeComputerShips)(playerGameBoard)    
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NyZWF0ZUdyaWQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5R2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvYXJteS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0FybXknO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCA1OCAxMzgpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQXJteSdcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbmZpcm0tYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNlLXNoaXBzIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0LXNoaXAge1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtOztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS1heGlzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAuM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbTs7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBvc2l0aW9uLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhcnQtZ2FtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpXFxyXFxufVxcclxcblxcclxcbi5jb21wdXRlci1ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpXFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztBQUVBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0FybXknO1xcclxcbiAgICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL2FybXkudHRmJyk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCA1OCAxMzgpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQXJteSdcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbmZpcm0tYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNlLXNoaXBzIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcHMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0LXNoaXAge1xcclxcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtOztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYW5nZS1heGlzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAuM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuMnJlbTs7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBvc2l0aW9uLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhcnQtZ2FtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA0cmVtO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXllci1ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpXFxyXFxufVxcclxcblxcclxcbi5jb21wdXRlci1ib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpXFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzZWxlY3RQbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKVxyXG5jb25zdCBzZWxlY3RDb21wdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIilcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvb3JkcyAoKSB7XHJcbiAgICBjb25zdCBjb2x1bW5zID0gW1wiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiXSBcclxuICAgIGxldCBncmlkQ29vcmQgPSBbXVxyXG4gICAgZm9yKGxldCBpID0gMTsgaSA8PSA5OyBpKyspIHtcclxuICAgICAgICBjb2x1bW5zLmZvckVhY2gobGV0dGVyID0+IGdyaWRDb29yZC5wdXNoKGkgKyBsZXR0ZXIpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdyaWRDb29yZFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEaXZzIChwYXJlbnQpIHtcclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gOTA7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImdyaWRcIilcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGl2KVxyXG4gICAgICAgIGNvbnN0IGdyaWRDb29yZHMgPSBjcmVhdGVDb29yZHMoKVxyXG4gICAgICAgIGRpdi5kYXRhc2V0LnNlbGVjdGlvbiA9IGdyaWRDb29yZHNbaS0xXVxyXG4gICAgICAgIGRpdi5kYXRhc2V0LmlzVGFrZW4gPSBmYWxzZVxyXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBncmlkQ29vcmRzW2ktMV0pXHJcbiAgICB9IFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHcmlkKCkge1xyXG4gICAgY3JlYXRlRGl2cyhzZWxlY3RQbGF5ZXIpXHJcbiAgICBjcmVhdGVEaXZzKHNlbGVjdENvbXB1dGVyKSBcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVHcmlkfSIsImltcG9ydCB7U2hpcH0gZnJvbSBcIi4vc2hpcFwiXHJcblxyXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XHJcbiAgICBsZXQgZ2FtZUJvYXJkID0ge31cclxuXHJcbiAgICBnYW1lQm9hcmQuc2hpcHNPbkJvYXJkID0gW10gXHJcblxyXG4gICAgZ2FtZUJvYXJkLmNvb3Jkc0F0dGFja2VkID0gW10gICBcclxuXHJcbiAgICBnYW1lQm9hcmQuZW5kR2FtZSA9IGZhbHNlXHJcblxyXG4gICAgZ2FtZUJvYXJkLnBsYWNlU2hpcHNPbkJvYXJkID0gKGxlbmd0aCwgY29vcmRzLCBwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKGxlbmd0aClcclxuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IG5ld1NoaXAubmFtZSgpXHJcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IG5ld1NoaXAubGVuZ3RoXHJcblxyXG4gICAgICAgIGxldCBheGlzID0gcG9zaXRpb25cclxuICAgICAgICBsZXQgZ2V0Um93ID0gcGFyc2VJbnQoY29vcmRzLnNwbGl0KFwiXCIpWzBdKVxyXG4gICAgICAgIGxldCBnZXRDb2x1bW4gPSBjb29yZHMuc3BsaXQoXCJcIilbMV1cclxuICAgICAgICBsZXQgY29sdW1uQ2hhckNvZGUgPSBnZXRDb2x1bW4uY2hhckNvZGVBdCgpXHJcbiAgICAgICAgbGV0IGdldENvb3JkcyA9IFtdXHJcblxyXG4gICAgICAgIGlmKGF4aXMgPT0gXCJZXCIpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKyspIHtcclxuICAgICAgICAgICAgICAgIGdldENvb3Jkcy5wdXNoKGdldFJvdysrICsgZ2V0Q29sdW1uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArKykge1xyXG4gICAgICAgICAgICAgICAgZ2V0Q29vcmRzLnB1c2goZ2V0Um93ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjb2x1bW5DaGFyQ29kZSsrKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2V0cyBNYXhpbXVtIENvbHVtbiBhbmQgUm93IC8vXHJcbiAgICAgICAgY29uc3QgZmlsdGVyTWF4aW11bVJvdyA9IGdldENvb3Jkcy5maWx0ZXIoY29vcmRzID0+IGNvb3Jkcy5pbmNsdWRlcygxMCkpXHJcbiAgICAgICAgY29uc3QgZmlsdGVyTWF4aW11bUNvbHVtbiA9IGdldENvb3Jkcy5maWx0ZXIoY29vcmRzID0+IGNvb3Jkcy5pbmNsdWRlcyhcIktcIikpIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFByZXZlbnRzIGZyb20gYWRkaW5nIDIgdHlwZXMgb2YgdGhlIHNhbWUgc2hpcCBvciAyIHNoaXBzIG9uIHRoZSBzYW1lIGNvb3JkIC8vXHJcbiAgICAgICAgbGV0IGNoZWNrQ29vcmRzID0gW11cclxuICAgICAgICBnZXRDb29yZHMuZm9yRWFjaChjb29yZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gZ2FtZUJvYXJkLnNoaXBzT25Cb2FyZC5zb21lKHNoaXAgPT4gc2hpcC5jb29yZHMuaW5jbHVkZXMoY29vcmQpKVxyXG4gICAgICAgICAgICBjaGVja0Nvb3Jkcy5wdXNoKGNoZWNrKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGlzQ29vcmRUYWtlbiA9IGNoZWNrQ29vcmRzLmluY2x1ZGVzKHRydWUpICAgXHJcbiAgICAgICAgY29uc3QgaXNTaGlwT25Cb2FyZCA9IGdhbWVCb2FyZC5zaGlwc09uQm9hcmQubWFwKHNoaXAgPT4gc2hpcC50eXBlKS5pbmNsdWRlcyhzaGlwTmFtZSlcclxuICAgICAgICBcclxuICAgICAgICBpZihmaWx0ZXJNYXhpbXVtUm93Lmxlbmd0aCA9PSAwICYmIGZpbHRlck1heGltdW1Db2x1bW4ubGVuZ3RoID09IDAgJiYgaXNDb29yZFRha2VuID09IGZhbHNlICYmIGlzU2hpcE9uQm9hcmQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZ2FtZUJvYXJkLnNoaXBzT25Cb2FyZC5wdXNoKHt0eXBlOiBzaGlwTmFtZSwgbGVuZ3RoOiBzaGlwTGVuZ3RoLCBjb29yZHM6IGdldENvb3Jkcywgc2hpcE1ldGhvZHM6IG5ld1NoaXB9KVxyXG4gICAgICAgIH0gXHJcbiAgICB9IFxyXG5cclxuICAgIGdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrID0gKGNvb3Jkc1NlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2V0U2hpcERhbWFnZWQgPSBnYW1lQm9hcmQuc2hpcHNPbkJvYXJkLmZpbHRlcihzaGlwID0+IHNoaXAuY29vcmRzLmluY2x1ZGVzKGNvb3Jkc1NlbGVjdGVkKSlcclxuICAgICAgICBjb25zdCBpc0Nvb3JkVGFrZW4gPSBnYW1lQm9hcmQuY29vcmRzQXR0YWNrZWQuaW5jbHVkZXMoY29vcmRzU2VsZWN0ZWQpXHJcbiAgICAgICAgbGV0IGlzU2hpcEhpdCA9IGZhbHNlXHJcbiAgICAgICAgZ2FtZUJvYXJkLmNvb3Jkc0F0dGFja2VkLnB1c2goY29vcmRzU2VsZWN0ZWQpXHJcblxyXG4gICAgICAgIGlmKGdldFNoaXBEYW1hZ2VkLmxlbmd0aCA9PSAxICYmIGlzQ29vcmRUYWtlbiA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBnZXRTaGlwRGFtYWdlZC5tYXAoc2hpcCA9PiBzaGlwLnNoaXBNZXRob2RzLmhpdCgpKVxyXG4gICAgICAgICAgICBpc1NoaXBIaXQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGlzQ29vcmRUYWtlbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGdhbWVCb2FyZC5jb29yZHNBdHRhY2tlZC5wb3AoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNFdmVyeVNoaXBTdW5rID0gZ2FtZUJvYXJkLnNoaXBzT25Cb2FyZC5ldmVyeShzaGlwID0+IHNoaXAuc2hpcE1ldGhvZHMuaXNTdW5rID09IHRydWUpXHJcbiAgICAgICAgaWYoaXNFdmVyeVNoaXBTdW5rID09IHRydWUpIHtcclxuICAgICAgICAgICAgZ2FtZUJvYXJkLmVuZEdhbWUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaXNTaGlwSGl0XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdhbWVCb2FyZFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IEdhbWVib2FyZCB9IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuY29uc3QgZ2FtZUluZm9TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLWluZm8nKVxyXG5jb25zdCBjb21wdXRlckJvYXJkTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1uYW1lJylcclxuY29uc3QgcGxhY2VTaGlwc1NlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlLXNoaXBzJylcclxuY29uc3QgbWFpblNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXHJcbmNvbnN0IHNlbGVjdENvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKVxyXG5cclxuY29uc3QgbmV3UGxheWVyID0gUGxheWVyKCdQbGF5ZXInKVxyXG5jb25zdCBuZXdDb21wdXRlciA9IFBsYXllcignQ29tcHV0ZXInKVxyXG5cclxuZnVuY3Rpb24gcGxhY2VQbGF5ZXJTaGlwKGxlbmd0aCwgY29vcmRTZWxlY3RlZCwgYXhpcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwbGFjZVNoaXAgPSBuZXdQbGF5ZXIucGxhY2VQbGF5ZXJTaGlwKGxlbmd0aCwgY29vcmRTZWxlY3RlZCwgYXhpcylcclxuICAgIGNvbnN0IGdldFNoaXAgPSBwbGFjZVNoaXAuZmlsdGVyKChzaGlwKSA9PiBzaGlwLmxlbmd0aC5pbmNsdWRlcyhsZW5ndGgpKVxyXG4gICAgY29uc3QgZ2V0Q29vcmRzID0gZ2V0U2hpcC5tYXAoKHNoaXApID0+IHNoaXAuY29vcmRzKVswXVxyXG4gICAgZ2V0Q29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgYWxlcnQoYFBsZWFzZSBzZWxlY3QgYXQgbGVhc3QgJHtsZW5ndGh9IGZyZWUgc3BhY2VzIWApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZUNvbXB1dGVyU2hpcHMoKSB7XHJcbiAgaWYgKG5ld1BsYXllci5wbGF5ZXJTaGlwc09uQm9hcmQgPT0gNCkge1xyXG4gICAgY29tcHV0ZXJCb2FyZE5hbWUudGV4dENvbnRlbnQgPSAnQ29tcHV0ZXInXHJcbiAgICBzZWxlY3RDb21wdXRlckJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcclxuICAgIG1haW5TZWxlY3Rvci5zdHlsZS5nYXAgPSAnNXJlbSdcclxuICAgIHBsYWNlU2hpcHNTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICByZXR1cm4gbmV3Q29tcHV0ZXIucGxhY2VDb21wdXRlclNoaXAoKTtcclxuICB9XHJcbiAgYWxlcnQoJ1lvdSBuZWVkIHRvIHBvaXNpdGlvbiBhbGwgeW91ciBzaGlwcyBiZWZvcmUgc3RhcnRpbmcgdGhlIGdhbWUhJylcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNrR2FtZUJvYXJkKGNvb3JkLCBlKSB7XHJcbiAgY29uc3QgYXR0YWNrID0gbmV3Q29tcHV0ZXIucGxheWVyQXR0YWNrKGNvb3JkKVxyXG4gIGNvbnN0IHNldEJhY2tncm91bmQgPSBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcclxuXHJcbiAgaWYgKGF0dGFjayA9PSB0cnVlKSB7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xyXG4gICAgZ2FtZUluZm9TZWxlY3Rvci5pbm5lckhUTUwgPSAnWW91IGhpdCBhIHNoaXAhJ1xyXG4gICAgc2V0VGltZW91dChjb21wdXRlckF0dGFjaywgMTAwMClcclxuICB9XHJcbiAgaWYgKGF0dGFjayA9PSBmYWxzZSAmJiBzZXRCYWNrZ3JvdW5kID09ICcnKSB7XHJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbiAgICBnYW1lSW5mb1NlbGVjdG9yLmlubmVySFRNTCA9ICdZb3UgbWlzc2VkIHRoZSBzaG90ISdcclxuICAgIHNldFRpbWVvdXQoY29tcHV0ZXJBdHRhY2ssIDEwMDApXHJcbiAgfVxyXG5cclxuICBpZiAoYXR0YWNrID09IG51bGwpIHtcclxuICAgIGdhbWVJbmZvU2VsZWN0b3IuaW5uZXJIVE1MID0gJ1lvdSBoYXZlIHN1bmsgYWxsIGVuZW15IHNoaXBzISdcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCkge1xyXG4gIGNvbnN0IGF0dGFjayA9IG5ld1BsYXllci5jb21wdXRlckF0dGFjaygpO1xyXG4gIGNvbnN0IGNvb3Jkc0F0dGFja2VkID0gbmV3UGxheWVyLmNvbXB1dGVyQXR0YWNrZWQ7XHJcbiAgY29uc3Qgc2VsZWN0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2Nvb3Jkc0F0dGFja2VkfWApXHJcblxyXG4gIGlmIChhdHRhY2sgPT0gdHJ1ZSkge1xyXG4gICAgc2VsZWN0Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJ1xyXG4gICAgZ2FtZUluZm9TZWxlY3Rvci5pbm5lckhUTUwgPSAnQ29tcHV0ZXIgaGl0IGEgc2hpcCEnXHJcbiAgfVxyXG4gIGlmIChhdHRhY2sgPT0gZmFsc2UgJiYgc2VsZWN0Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJycpIHtcclxuICAgIHNlbGVjdENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG4gICAgZ2FtZUluZm9TZWxlY3Rvci5pbm5lckhUTUwgPSAnQ29tcHV0ZXIgbWlzc2VkIHRoZSBzaG90ISdcclxuICB9XHJcblxyXG4gIGlmIChhdHRhY2sgPT0gbnVsbCkge1xyXG4gICAgZ2FtZUluZm9TZWxlY3Rvci5pbm5lckhUTUwgPSAnQ29tcHV0ZXIgaGF2ZSBzdW5rIGFsbCBlbmVteSBzaGlwcyEnXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHBsYWNlUGxheWVyU2hpcCwgcGxhY2VDb21wdXRlclNoaXBzLCBhdHRhY2tHYW1lQm9hcmQsIGNvbXB1dGVyQXR0YWNrLFxyXG59XHJcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVCb2FyZFwiXHJcblxyXG5mdW5jdGlvbiBQbGF5ZXIobmFtZSkge1xyXG4gICAgbGV0IHBsYXllciA9IHt9XHJcblxyXG4gICAgcGxheWVyLm5hbWUgPSBuYW1lXHJcblxyXG4gICAgcGxheWVyLmNvbXB1dGVyQXR0YWNrZWQgPSBudWxsXHJcblxyXG4gICAgY29uc3QgbmV3R2FtZUJvYXJkID0gR2FtZWJvYXJkKClcclxuXHJcbiAgICBsZXQgcGxheWVyQXR0YWNrcyA9IDBcclxuICAgIHBsYXllci5wbGF5ZXJTaGlwc09uQm9hcmQgPSBudWxsXHJcblxyXG4gICAgcGxheWVyLnBsYWNlUGxheWVyU2hpcCA9IChzaGlwTGVuZ3RoLCBjb29yZHMsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgbmV3R2FtZUJvYXJkLnBsYWNlU2hpcHNPbkJvYXJkKHNoaXBMZW5ndGgsIGNvb3JkcywgcG9zaXRpb24pXHJcbiAgICAgICAgcGxheWVyLnBsYXllclNoaXBzT25Cb2FyZCA9IG5ld0dhbWVCb2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoXHJcbiAgICAgICAgcmV0dXJuIG5ld0dhbWVCb2FyZC5zaGlwc09uQm9hcmRcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXIucGxhY2VDb21wdXRlclNoaXAgPSAoKSA9PiB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGhTaXplcyA9IFs1LCA0LCAzLCAyXVxyXG4gICAgICAgICAgICBjb25zdCByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNvbHVtbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKVxyXG4gICAgICAgICAgICBjb25zdCByYW5kb21Db29yZHMgPSByYW5kb21Sb3cgKyByYW5kb21Db2x1bW5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zVHlwZXMgPSBbXCJZXCIsIFwiWFwiXVxyXG4gICAgICAgICAgICBjb25zdCByYW5kb21Qb3NpdGlvbiA9IHBvc2l0aW9uc1R5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc2l0aW9uc1R5cGVzLmxlbmd0aCldXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUxlbmd0aCA9IGxlbmd0aFNpemVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aFNpemVzLmxlbmd0aCldXHJcblxyXG4gICAgICAgICAgICBuZXdHYW1lQm9hcmQucGxhY2VTaGlwc09uQm9hcmQocmFuZG9tTGVuZ3RoLCByYW5kb21Db29yZHMsIHJhbmRvbVBvc2l0aW9uKSBcclxuICAgICAgICB9IHdoaWxlKG5ld0dhbWVCb2FyZC5zaGlwc09uQm9hcmQubGVuZ3RoIDwgNClcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0dhbWVCb2FyZC5zaGlwc09uQm9hcmRcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXIucGxheWVyQXR0YWNrID0gKGNvb3JkcykgPT4ge1xyXG4gICAgICAgIHBsYXllckF0dGFja3MrK1xyXG4gICAgICAgIHJldHVybiAobmV3R2FtZUJvYXJkLmVuZEdhbWUgPT0gZmFsc2UpID8gbmV3R2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKSA6IG51bGxcclxuICAgIH0gXHJcblxyXG4gICAgcGxheWVyLmNvbXB1dGVyQXR0YWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRve1xyXG4gICAgICAgICAgICBjb25zdCByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSArIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNvbHVtbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKVxyXG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSByYW5kb21Sb3cgKyByYW5kb21Db2x1bW5cclxuICAgICAgICAgICAgcGxheWVyLmNvbXB1dGVyQXR0YWNrZWQgPSBjb29yZHNcclxuICAgICAgICAgICAgcmV0dXJuIG5ld0dhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkcylcclxuICAgICAgICB9IHdoaWxlKG5ld0dhbWVCb2FyZC5jb29yZHNBdHRhY2tlZC5sZW5ndGggPCBwbGF5ZXJBdHRhY2tzKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwbGF5ZXJcclxufVxyXG5cclxuZXhwb3J0IHtQbGF5ZXJ9IiwiY29uc3Qgc2hpcFR5cGVzID0gW1xyXG4gICAge3R5cGU6IFwiQ2FycmllclwiLCBsZW5ndGg6IDV9LFxyXG4gICAge3R5cGU6IFwiQmF0dGxlc2hpcFwiLCBsZW5ndGg6IDR9LFxyXG4gICAge3R5cGU6IFwiRGVzdHJveWVyXCIsIGxlbmd0aDogM30sXHJcbiAgICB7dHlwZTogXCJCb2F0XCIsIGxlbmd0aDoyfVxyXG5dXHJcblxyXG5mdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xyXG4gICAgbGV0IHNoaXAgPSB7fVxyXG4gICAgc2hpcC5sZW5ndGggPSBsZW5ndGhcclxuXHJcbiAgICBzaGlwLm5hbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2V0U2hpcCA9IHNoaXBUeXBlcy5maWx0ZXIodHlwZSA9PiB0eXBlLmxlbmd0aCA9PSBzaGlwLmxlbmd0aClcclxuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IGdldFNoaXBbMF0udHlwZVxyXG4gICAgICAgIHJldHVybiBzaGlwTmFtZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaGlwLnRpbWVzSGl0ID0gMFxyXG4gICAgXHJcbiAgICBzaGlwLmhpdCA9ICgpID0+IHtcclxuICAgICAgICBzaGlwLnRpbWVzSGl0KytcclxuICAgICAgICBpZihzaGlwLnRpbWVzSGl0ID09IHNoaXAubGVuZ3RoKSB7c2hpcC5pc1N1bmsgPSB0cnVlfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaGlwLmlzU3VuayA9IGZhbHNlXHJcblxyXG4gICAgcmV0dXJuIHNoaXBcclxufSBcclxuXHJcblxyXG5leHBvcnQge1NoaXAsIHNoaXBUeXBlc30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvc3R5bGUuY3NzXCJcclxuaW1wb3J0IHsgY3JlYXRlR3JpZCB9IGZyb20gXCIuL2NyZWF0ZUdyaWRcIlxyXG5cclxuaW1wb3J0IHsgcGxhY2VQbGF5ZXJTaGlwLCBwbGFjZUNvbXB1dGVyU2hpcHMsIGF0dGFja0dhbWVCb2FyZCwgY29tcHV0ZXJBdHRhY2sgfSBmcm9tIFwiLi9wbGF5R2FtZVwiXHJcblxyXG5jcmVhdGVHcmlkKClcclxuXHJcbmNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm0tYnRuXCIpXHJcbmNvbnN0IHBsYWNlU2hpcHNTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Utc2hpcHNcIilcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllci1uYW1lXCIpXHJcbmNvbnN0IGdhbWVJbmZvU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtaW5mb1wiKVxyXG5jb25zdCBwbGF5ZXJCb2FyZE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1uYW1lXCIpXHJcbmNvbnN0IHNoaXBzU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NlbGVjdC1zaGlwXCIpXHJcbmNvbnN0IGNoYW5nZUF4aXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZS1heGlzXCIpXHJcbmNvbnN0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF4aXNcIilcclxuY29uc3Qgc3RhcnRHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lXCIpXHJcbmNvbnN0IG1haW5TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpXHJcbmNvbnN0IHNlbGVjdFBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYm9hcmRcIilcclxuY29uc3Qgc2VsZWN0Q29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIilcclxuY29uc3QgcGxheWVyR2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItYm9hcmQgPiAuZ3JpZFwiKVxyXG5jb25zdCBjb21wdXRlckdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItYm9hcmQgPiAuZ3JpZFwiKVxyXG5cclxucGxhY2VTaGlwc1NlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG5zZWxlY3RQbGF5ZXJCb2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuc2VsZWN0Q29tcHV0ZXJCb2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuZ2FtZUluZm9TZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuXHJcbmZ1bmN0aW9uIHNldEF4aXMoKSB7XHJcbiAgICBpZiAoYXhpcy50ZXh0Q29udGVudCA9PSBcIlhcIikgeyBcclxuICAgICAgICBheGlzLnRleHRDb250ZW50ID0gXCJZXCJcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGF4aXMudGV4dENvbnRlbnQgPSBcIlhcIlxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFjZVNoaXBzKGxlbmd0aCkge1xyXG4gICAgcGxheWVyR2FtZUJvYXJkLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldENvb3JkID0gY2VsbC5kYXRhc2V0LnNlbGVjdGlvblxyXG4gICAgICAgICAgICBwbGFjZVBsYXllclNoaXAobGVuZ3RoLCBnZXRDb29yZCwgYXhpcy5pbm5lckhUTUwpXHJcbiAgICAgICAgfSlcclxuICAgIH0pICAgICBcclxufVxyXG5cclxuY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiAge1xyXG4gICAgaWYoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXHJcbiAgICAgICAgcGxhY2VTaGlwc1NlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxyXG4gICAgICAgIHNlbGVjdFBsYXllckJvYXJkLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIlxyXG4gICAgICAgIG1haW5TZWxlY3Rvci5zdHlsZS5nYXAgPSAwXHJcbiAgICAgICAgZ2FtZUluZm9TZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIlxyXG4gICAgICAgIHBsYXllckJvYXJkTmFtZS50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgbmFtZSFcIilcclxuICAgIH1cclxufSlcclxuXHJcbnNoaXBzU2VsZWN0b3IuZm9yRWFjaChzaGlwU2VsZWN0ZWQgPT4ge1xyXG4gICAgc2hpcFNlbGVjdGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcFNlbGVjdGVkLmRhdGFzZXQubGVuZ3RoXHJcbiAgICAgICAgcGxhY2VTaGlwcyhzaGlwTGVuZ3RoKVxyXG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSBcIjAuMVwiXHJcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCJcclxuICAgIH0pXHJcbn0pXHJcblxyXG5jaGFuZ2VBeGlzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgIHNldEF4aXMoKVxyXG59KVxyXG5cclxuXHJcbmNvbXB1dGVyR2FtZUJvYXJkLmZvckVhY2goY2VsbCA9PiB7XHJcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgICBjb25zdCBnZXRDb29yZCA9IGUudGFyZ2V0LmlkXHJcbiAgICAgICAgYXR0YWNrR2FtZUJvYXJkKGdldENvb3JkLCBlKVxyXG4gICAgfSlcclxufSkgXHJcblxyXG5zdGFydEdhbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgcGxhY2VDb21wdXRlclNoaXBzKHBsYXllckdhbWVCb2FyZCkgICAgXHJcbn0pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==