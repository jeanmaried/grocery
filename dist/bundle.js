/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//Lab

const store2 = new GroceryStore([['apples', 73], ['pears', 12], ['oranges', 97], ['grapes', 387], ['grapes', 88], ['pears', 33], ['apples', 75], ['grapes', 23], ['oranges', 86], ['kiwis', 201]]);

function GroceryStore(inventory) {
  this.state = {
    inventory,
    originalList: {},
    currentList: {},
    counted: false
  };
}

GroceryStore.prototype.countFruit = function () {
  if (this.counted) return this;
  this.counted = true;

  this.state.originalList = this.state.inventory.reduce((totalList, item) => {
    if (totalList[item[0]]) {
      totalList[item[0]] += item[1];
    } else {
      totalList[item[0]] = item[1];
    }
    return totalList;
  }, {});

  console.log(this.state.originalList);

  if (!Object.keys(this.state.currentList).length) {
    console.log(!Object.keys(this.state.currentList).length);
    return this.state.currentList = this.state.originalList;
  }
  return this;
};

GroceryStore.prototype.stockUp = function (count) {
  if (!this.counted) {
    this.countFruit();
  }

  const { currentList } = this.state;
  console.log(currentList);
  console.log(Object.keys(currentList));
  this.state.currentList = Object.keys(currentList).reduce((restockList, fruit) => {
    console.log(restockList);
    restockList[fruit] = currentList[fruit] + count;
    //apples = 148 + 5 ==>  apples: 153
    //currentList.apple OR currentList[apple]
    return restockList;
  }, {});

  return this;
};

GroceryStore.prototype.explain = function () {
  if (!this.counted) this.countFruit();

  return Object.keys(this.state.currentList).map(fruit => `${this.state.currentList[fruit]} ${fruit}`).join(', ');
};

console.log(store2.countFruit());
console.log(store2.stockUp(5));
console.log(store2.explain());

/***/ })
/******/ ]);