webpackHotUpdate_N_E("pages/index",{

/***/ "./features/HomePage/index.jsx":
/*!*************************************!*\
  !*** ./features/HomePage/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/Card */ "./core/components/Card.jsx");
/* harmony import */ var _core_components_Nevbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/Nevbar */ "./core/components/Nevbar.jsx");
/* harmony import */ var _core_components_SideMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/components/SideMenu */ "./core/components/SideMenu.jsx");
/* harmony import */ var _stores_homepageStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stores/homepageStore */ "./features/HomePage/stores/homepageStore.jsx");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");




var _jsxFileName = "D:\\homework-ywc\\features\\HomePage\\index.jsx",
    _s = $RefreshSig$();









var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_8___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

function Home() {
  _s();

  var _this = this;

  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_stores_homepageStore__WEBPACK_IMPORTED_MODULE_7__["StoreContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return context.getData();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [context]); // const ref = useRef(context)

  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["useObserver"])(function () {
    var _context$data, _context$data2;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        backgroundImage: "url(".concat(publicRuntimeConfig.staticFolder, "/images/result-bg.png)")
      },
      className: "min-h-screen bg-fixed bg-center bg-cover",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "bg-white",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "relative z-20 bg-white",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "flex items-center justify-between bg-white",
            style: {
              maxWidth: '1280px',
              margin: '0px auto'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_core_components_Nevbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
              provinces: (_context$data = context.data) === null || _context$data === void 0 ? void 0 : _context$data.provinces
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "bg-primary",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "z-10 flex justify-start px-4 py-3 overflow-x-auto md:px-8",
              style: {
                maxWidth: '1280px',
                margin: '0px auto'
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "font-bold text-white underline whitespace-no-wrap false",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                  href: "/",
                  children: "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 15
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mx-3 text-gray-300",
                children: "/"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "pr-8 text-white whitespace-no-wrap null",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "font-semibold",
                  children: "\u0E04\u0E49\u0E19\u0E2B\u0E32"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 15
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          maxWidth: '1600px'
        },
        className: "relative w-full mx-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "mt-0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "px-4 pt-0 pb-4 md:px-4 md:py-8",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "flex items-center justify-between mt-0 mb-8",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "flex-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  style: {
                    letterSpacing: "-0.02em"
                  },
                  className: "mt-0 mb-4 font-sans text-xl font-semibold font-IMB first:mt-0 break-word ",
                  children: "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "flex items-start ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_core_components_SideMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
                categories: (_context$data2 = context.data) === null || _context$data2 === void 0 ? void 0 : _context$data2.categories
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "flex-1",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "flex-1",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("dvi", {
                    className: "grid grid-cols-1 gap-2",
                    children: context.data !== undefined && context.data.merchants.map(function (data, i) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_core_components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        merchants: data
                      }, i, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 23
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 17
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 15
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, _this);
  });
}

_s(Home, "WhLYm+vKrsuGleMurUcbGhtNSXo=", false, function () {
  return [mobx_react_lite__WEBPACK_IMPORTED_MODULE_9__["useObserver"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmVhdHVyZXMvSG9tZVBhZ2UvaW5kZXguanN4Il0sIm5hbWVzIjpbImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJIb21lIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJTdG9yZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwidXNlT2JzZXJ2ZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzdGF0aWNGb2xkZXIiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImRhdGEiLCJwcm92aW5jZXMiLCJsZXR0ZXJTcGFjaW5nIiwiY2F0ZWdvcmllcyIsInVuZGVmaW5lZCIsIm1lcmNoYW50cyIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztpQkFFZ0NBLGtEQUFTLEU7SUFBakNDLG1CLGNBQUFBLG1COztBQUNPLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDQyxrRUFBRCxDQUExQjtBQUVBQyx5REFBUyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRkgsT0FBTyxDQUFDSSxPQUFSLEVBREU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUVOLENBQUNKLE9BQUQsQ0FGTSxDQUFULENBSDZCLENBTzdCOztBQUVBLFNBQU9LLG1FQUFXLENBQUM7QUFBQTs7QUFBQSx3QkFDakI7QUFBSyxXQUFLLEVBQUU7QUFBRUMsdUJBQWUsZ0JBQVNSLG1CQUFtQixDQUFDUyxZQUE3QjtBQUFqQixPQUFaO0FBQWtHLGVBQVMsRUFBQywwQ0FBNUc7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx3QkFBZjtBQUFBLGtDQUNFO0FBQ0UscUJBQVMs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O0dBN0R1QmxCLEk7VUFTZk0sMkQ7OztLQVRlTixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFmMTQ1NmM1NWFjM2FlMDcxMTgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvQ2FyZCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvTmV2YmFyJ1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvU2lkZU1lbnUnXHJcbmltcG9ydCB7IFN0b3JlQ29udGV4dCB9IGZyb20gJy4vc3RvcmVzL2hvbWVwYWdlU3RvcmUnXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXHJcbmltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJ1xyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dClcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGNvbnRleHQuZ2V0RGF0YSgpXHJcbiAgfSwgW2NvbnRleHRdKVxyXG5cclxuICAvLyBjb25zdCByZWYgPSB1c2VSZWYoY29udGV4dClcclxuXHJcbiAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cHVibGljUnVudGltZUNvbmZpZy5zdGF0aWNGb2xkZXJ9L2ltYWdlcy9yZXN1bHQtYmcucG5nKWAgfX0gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWZpeGVkIGJnLWNlbnRlciBiZy1jb3ZlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTIwIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy13aGl0ZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTI4MHB4JywgbWFyZ2luOiAnMHB4IGF1dG8nIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgcHJvdmluY2VzPXtjb250ZXh0LmRhdGE/LnByb3ZpbmNlc30vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXByaW1hcnlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCBmbGV4IGp1c3RpZnktc3RhcnQgcHgtNCBweS0zIG92ZXJmbG93LXgtYXV0byBtZDpweC04XCIgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMjgwcHgnLCBtYXJnaW46ICcwcHggYXV0bycgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtd2hpdGUgdW5kZXJsaW5lIHdoaXRlc3BhY2Utbm8td3JhcCBmYWxzZVwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+4Lir4LiZ4LmJ4Liy4LmB4Lij4LiBPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0zIHRleHQtZ3JheS0zMDBcIj4vPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItOCB0ZXh0LXdoaXRlIHdoaXRlc3BhY2Utbm8td3JhcCBudWxsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+4LiE4LmJ4LiZ4Lir4LiyPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnMTYwMHB4JyB9fSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB0LTAgcGItNCBtZDpweC00IG1kOnB5LThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbGV0dGVyU3BhY2luZzogXCItMC4wMmVtXCIgfX0gY2xhc3NOYW1lPVwibXQtMCBtYi00IGZvbnQtc2FucyB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgZm9udC1JTUIgZmlyc3Q6bXQtMCBicmVhay13b3JkIFwiPlxyXG4gICAgICAgICAgICAgICAgICDguJzguKXguIHguLLguKPguITguYnguJnguKvguLLguJfguLHguYnguIfguKvguKHguJRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IFwiPlxyXG4gICAgICAgICAgICA8U2lkZUJhciBjYXRlZ29yaWVzPXtjb250ZXh0LmRhdGE/LmNhdGVnb3JpZXN9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICAgIDxkdmkgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kYXRhICE9PSB1bmRlZmluZWQgJiYgY29udGV4dC5kYXRhLm1lcmNoYW50cy5tYXAoKGRhdGEsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aX0gbWVyY2hhbnRzPXtkYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kdmk+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=