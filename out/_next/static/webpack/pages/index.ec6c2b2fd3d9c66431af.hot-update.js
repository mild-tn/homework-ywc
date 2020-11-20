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
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");




var _jsxFileName = "D:\\homework-ywc\\features\\HomePage\\index.jsx",
    _s = $RefreshSig$();







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

  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__["useObserver"])(function () {
    var _context$data, _context$data2;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        backgroundImage: 'url(images/result-bg.png)'
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
              lineNumber: 26,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
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
                  lineNumber: 31,
                  columnNumber: 15
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mx-3 text-gray-300",
                children: "/"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 13
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "pr-8 text-white whitespace-no-wrap null",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "font-semibold",
                  children: "\u0E04\u0E49\u0E19\u0E2B\u0E32"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 15
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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
                  lineNumber: 46,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "flex items-start ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_core_components_SideMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
                categories: (_context$data2 = context.data) === null || _context$data2 === void 0 ? void 0 : _context$data2.categories
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
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
                        lineNumber: 58,
                        columnNumber: 23
                      }, _this);
                    })
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 17
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 15
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this);
  });
}

_s(Home, "WhLYm+vKrsuGleMurUcbGhtNSXo=", false, function () {
  return [mobx_react_lite__WEBPACK_IMPORTED_MODULE_8__["useObserver"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmVhdHVyZXMvSG9tZVBhZ2UvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhvbWUiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZUVmZmVjdCIsImdldERhdGEiLCJ1c2VPYnNlcnZlciIsImJhY2tncm91bmRJbWFnZSIsIm1heFdpZHRoIiwibWFyZ2luIiwiZGF0YSIsInByb3ZpbmNlcyIsImxldHRlclNwYWNpbmciLCJjYXRlZ29yaWVzIiwidW5kZWZpbmVkIiwibWVyY2hhbnRzIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsT0FBTyxHQUFHQyx3REFBVSxDQUFDQyxrRUFBRCxDQUExQjtBQUVBQyx5REFBUyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRkgsT0FBTyxDQUFDSSxPQUFSLEVBREU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQUVOLENBQUNKLE9BQUQsQ0FGTSxDQUFULENBSDZCLENBTzdCOztBQUVBLFNBQU9LLG1FQUFXLENBQUM7QUFBQTs7QUFBQSx3QkFDakI7QUFBSyxXQUFLLEVBQUU7QUFBRUMsdUJBQWUsRUFBRTtBQUFuQixPQUFaO0FBQThELGVBQVMsRUFBQywwQ0FBeEU7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyx3QkFBZjtBQUFBLGtDQUNFO0FBQ0UscUJBQVMsRUFBQyw0Q0FEWjtBQUVFLGlCQUFLLEVBQUU7QUFBRUMsc0JBQVEsRUFBRSxRQUFaO0FBQXNCQyxvQkFBTSxFQUFFO0FBQTlCLGFBRlQ7QUFBQSxtQ0FJRSxxRUFBQywrREFBRDtBQUFRLHVCQUFTLG1CQUFFUixPQUFPLENBQUNTLElBQVYsa0RBQUUsY0FBY0M7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRTtBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG1DQUNBO0FBQUssdUJBQVMsRUFBQywyREFBZjtBQUEyRSxtQkFBSyxFQUFFO0FBQUVILHdCQUFRLEVBQUUsUUFBWjtBQUFzQkMsc0JBQU0sRUFBRTtBQUE5QixlQUFsRjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyx5REFBZjtBQUFBLHVDQUNFO0FBQUcsc0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUsseUJBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQUtFO0FBQUsseUJBQVMsRUFBQyx5Q0FBZjtBQUFBLHVDQUNFO0FBQUssMkJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXNCRTtBQUFLLGFBQUssRUFBRTtBQUFFRCxrQkFBUSxFQUFFO0FBQVosU0FBWjtBQUFvQyxpQkFBUyxFQUFDLHlCQUE5QztBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLGdDQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLDZDQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLFFBQWY7QUFBQSx1Q0FDRTtBQUFLLHVCQUFLLEVBQUU7QUFBRUksaUNBQWEsRUFBRTtBQUFqQixtQkFBWjtBQUEwQywyQkFBUyxFQUFDLDJFQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBUUU7QUFBSyx1QkFBUyxFQUFDLG1CQUFmO0FBQUEsc0NBQ0EscUVBQUMsaUVBQUQ7QUFBUywwQkFBVSxvQkFBRVgsT0FBTyxDQUFDUyxJQUFWLG1EQUFFLGVBQWNHO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsZUFFQTtBQUFLLHlCQUFTLEVBQUMsUUFBZjtBQUFBLHVDQUNFO0FBQUssMkJBQVMsRUFBQyxRQUFmO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFDLHdCQUFmO0FBQUEsOEJBRUlaLE9BQU8sQ0FBQ1MsSUFBUixLQUFpQkksU0FBakIsSUFBOEJiLE9BQU8sQ0FBQ1MsSUFBUixDQUFhSyxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixVQUFDTixJQUFELEVBQU9PLENBQVA7QUFBQSwwQ0FDdkQscUVBQUMsNkRBQUQ7QUFBYyxpQ0FBUyxFQUFFUDtBQUF6Qix5QkFBV08sQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUR1RDtBQUFBLHFCQUEzQjtBQUZsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURpQjtBQUFBLEdBQUQsQ0FBbEI7QUFvREQ7O0dBN0R1QmpCLEk7VUFTZk0sMkQ7OztLQVRlTixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjNmMyYjJmZDNkOWM2NjQzMWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL0NhcmQnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL05ldmJhcidcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL1NpZGVNZW51J1xyXG5pbXBvcnQgeyBTdG9yZUNvbnRleHQgfSBmcm9tICcuL3N0b3Jlcy9ob21lcGFnZVN0b3JlJ1xyXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KVxyXG5cclxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgY29udGV4dC5nZXREYXRhKClcclxuICB9LCBbY29udGV4dF0pXHJcblxyXG4gIC8vIGNvbnN0IHJlZiA9IHVzZVJlZihjb250ZXh0KVxyXG5cclxuICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaW1hZ2VzL3Jlc3VsdC1iZy5wbmcpJyB9fSBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZml4ZWQgYmctY2VudGVyIGJnLWNvdmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMjAgYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXdoaXRlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMjgwcHgnLCBtYXJnaW46ICcwcHggYXV0bycgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE5hdmJhciBwcm92aW5jZXM9e2NvbnRleHQuZGF0YT8ucHJvdmluY2VzfS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcHJpbWFyeVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIGZsZXgganVzdGlmeS1zdGFydCBweC00IHB5LTMgb3ZlcmZsb3cteC1hdXRvIG1kOnB4LThcIiBzdHlsZT17eyBtYXhXaWR0aDogJzEyODBweCcsIG1hcmdpbjogJzBweCBhdXRvJyB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZSB1bmRlcmxpbmUgd2hpdGVzcGFjZS1uby13cmFwIGZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj7guKvguJnguYnguLLguYHguKPguIE8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTMgdGV4dC1ncmF5LTMwMFwiPi88L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci04IHRleHQtd2hpdGUgd2hpdGVzcGFjZS1uby13cmFwIG51bGxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7guITguYnguJnguKvguLI8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6ICcxNjAwcHgnIH19IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHQtMCBwYi00IG1kOnB4LTQgbWQ6cHktOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC0wIG1iLThcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBsZXR0ZXJTcGFjaW5nOiBcIi0wLjAyZW1cIiB9fSBjbGFzc05hbWU9XCJtdC0wIG1iLTQgZm9udC1zYW5zIHRleHQteGwgZm9udC1zZW1pYm9sZCBmb250LUlNQiBmaXJzdDptdC0wIGJyZWFrLXdvcmQgXCI+XHJcbiAgICAgICAgICAgICAgICAgIOC4nOC4peC4geC4suC4o+C4hOC5ieC4meC4q+C4suC4l+C4seC5ieC4h+C4q+C4oeC4lFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgXCI+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyIGNhdGVnb3JpZXM9e2NvbnRleHQuZGF0YT8uY2F0ZWdvcmllc30gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGR2aSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRhdGEgIT09IHVuZGVmaW5lZCAmJiBjb250ZXh0LmRhdGEubWVyY2hhbnRzLm1hcCgoZGF0YSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtpfSBtZXJjaGFudHM9e2RhdGF9Lz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2R2aT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==