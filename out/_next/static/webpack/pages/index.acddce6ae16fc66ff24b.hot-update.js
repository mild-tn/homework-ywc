webpackHotUpdate_N_E("pages/index",{

/***/ "./core/components/Nevbar.jsx":
/*!************************************!*\
  !*** ./core/components/Nevbar.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _DropdownProvince__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownProvince */ "./core/components/DropdownProvince.jsx");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\homework-ywc\\core\\components\\Nevbar.jsx";




var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

function Navbar(_ref) {
  var provinces = _ref.provinces;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "px-4 md:px-8",
      style: {
        height: '60px',
        paddingTop: '10px',
        paddingBottom: '10px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "/",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "".concat(publicRuntimeConfig.staticFolder, "/images/halfhalf-logo.png"),
          className: "hidden md:block",
          style: {
            height: '40px',
            width: 'auto'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "".concat(publicRuntimeConfig.staticFolder, "/images/halfhalf-logo-mini.png"),
          className: "block md:hidden",
          style: {
            height: '40px',
            width: 'auto'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex items-center h-auto h-full ml-auto mr-4 overflow-hidden border rounded-lg above-the-fold-input md:mr-8",
      style: {
        flex: '1 1 0%',
        boxShadow: 'black 0px 0px 1px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "hidden w-full h-10 sm:w-48 md:mt-0 md:block",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full h-10 text-sm sm:w-48 md:h-10",
          style: {
            borderRadius: '0px',
            border: '0px'
          },
          id: "antd-selector-search",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DropdownProvince__WEBPACK_IMPORTED_MODULE_2__["default"], {
            provinces: provinces
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "relative flex w-full h-10 ml-2 border-transparent",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: {
            backgroundColor: '#F5F5F5'
          },
          className: "absolute top-0 right-0 z-10 w-1/12 h-full p-3 leading-snug text-center bg-gray-400 rounded text-bar-code-icon text-primary-300",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiOutlineSearch"], {
            className: "ml-3 text-base text-gray-900"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "w-full h-full px-3 py-2 overflow-hidden leading-tight text-gray-700 border-none shadow appearance-none focus:outline-none focus:shadow-outline",
          type: "text",
          placeholder: "\u0E04\u0E49\u0E19\u0E2B\u0E32 \u0E0A\u0E37\u0E48\u0E2D \u0E23\u0E49\u0E32\u0E19\u0E2D\u0E32\u0E2B\u0E32\u0E23 \u0E41\u0E25\u0E30\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E14\u0E37\u0E48\u0E21 \u0E23\u0E49\u0E32\u0E19\u0E18\u0E07\u0E1F\u0E49\u0E32 \u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32 OTOP \u0E41\u0E25\u0E30\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}
_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29yZS9jb21wb25lbnRzL05ldmJhci5qc3giXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIk5hdmJhciIsInByb3ZpbmNlcyIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwic3RhdGljRm9sZGVyIiwid2lkdGgiLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O2lCQUVnQ0Esa0RBQVMsRTtJQUFqQ0MsbUIsY0FBQUEsbUI7O0FBRU8sU0FBU0MsTUFBVCxPQUErQjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUM1QyxzQkFDRDtBQUFBLDRCQUNHO0FBQ0QsZUFBUyxFQUFDLGNBRFQ7QUFFRCxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFLE1BQVY7QUFBa0JDLGtCQUFVLEVBQUUsTUFBOUI7QUFBc0NDLHFCQUFhLEVBQUU7QUFBckQsT0FGTjtBQUFBLDZCQUlEO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQSxnQ0FDQztBQUNDLGFBQUcsWUFBS0wsbUJBQW1CLENBQUNNLFlBQXpCLDhCQURKO0FBRUMsbUJBQVMsRUFBQyxpQkFGWDtBQUdDLGVBQUssRUFBRTtBQUFFSCxrQkFBTSxFQUFFLE1BQVY7QUFBa0JJLGlCQUFLLEVBQUU7QUFBekI7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBTUM7QUFDQyxhQUFHLFlBQUtQLG1CQUFtQixDQUFDTSxZQUF6QixtQ0FESjtBQUVDLG1CQUFTLEVBQUMsaUJBRlg7QUFHQyxlQUFLLEVBQUU7QUFBRUgsa0JBQU0sRUFBRSxNQUFWO0FBQWtCSSxpQkFBSyxFQUFFO0FBQXpCO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZUFrQkc7QUFBSyxlQUFTLEVBQUMsNkdBQWY7QUFBNkgsV0FBSyxFQUFFO0FBQUVDLFlBQUksRUFBRSxRQUFSO0FBQWtCQyxpQkFBUyxFQUFFO0FBQTdCLE9BQXBJO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDZDQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHFDQUFmO0FBQXFELGVBQUssRUFBRTtBQUFFQyx3QkFBWSxFQUFFLEtBQWhCO0FBQXVCQyxrQkFBTSxFQUFFO0FBQS9CLFdBQTVEO0FBQW1HLFlBQUUsRUFBQyxzQkFBdEc7QUFBQSxpQ0FDRSxxRUFBQyx5REFBRDtBQUFrQixxQkFBUyxFQUFFVDtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUssaUJBQVMsRUFBQyxtREFBZjtBQUFBLGdDQUNFO0FBQ0UsZUFBSyxFQUFFO0FBQUVVLDJCQUFlLEVBQUU7QUFBbkIsV0FEVDtBQUVFLG1CQUFTLEVBQUMsZ0lBRlo7QUFBQSxpQ0FJRSxxRUFBQyw4REFBRDtBQUFpQixxQkFBUyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0U7QUFBTyxtQkFBUyxFQUFDLGdKQUFqQjtBQUFrSyxjQUFJLEVBQUMsTUFBdks7QUFBOEsscUJBQVcsRUFBQztBQUExTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCSDtBQUFBLGtCQURDO0FBcUNEO0tBdEN1QlgsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hY2RkY2U2YWUxNmZjNjZmZjI0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWlPdXRsaW5lU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCBEcm9wZG93blByb3ZpbmNlIGZyb20gJy4vRHJvcGRvd25Qcm92aW5jZSc7XHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnXHJcblxyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoeyBwcm92aW5jZXMgfSkge1xyXG4gIHJldHVybiAoXHJcblx0PD5cclxuICAgIDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPVwicHgtNCBtZDpweC04XCJcclxuXHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiAnNjBweCcsIHBhZGRpbmdUb3A6ICcxMHB4JywgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19XHJcbiAgICA+XHJcblx0XHRcdDxhIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0c3JjPXtgJHtwdWJsaWNSdW50aW1lQ29uZmlnLnN0YXRpY0ZvbGRlcn0vaW1hZ2VzL2hhbGZoYWxmLWxvZ28ucG5nYH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiXHJcblx0XHRcdFx0XHRzdHlsZT17eyBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICdhdXRvJyB9fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0c3JjPXtgJHtwdWJsaWNSdW50aW1lQ29uZmlnLnN0YXRpY0ZvbGRlcn0vaW1hZ2VzL2hhbGZoYWxmLWxvZ28tbWluaS5wbmdgfVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgbWQ6aGlkZGVuXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IGhlaWdodDogJzQwcHgnLCB3aWR0aDogJ2F1dG8nIH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtYXV0byBoLWZ1bGwgbWwtYXV0byBtci00IG92ZXJmbG93LWhpZGRlbiBib3JkZXIgcm91bmRlZC1sZyBhYm92ZS10aGUtZm9sZC1pbnB1dCBtZDptci04XCIgc3R5bGU9e3sgZmxleDogJzEgMSAwJScsIGJveFNoYWRvdzogJ2JsYWNrIDBweCAwcHggMXB4JyB9fSA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHctZnVsbCBoLTEwIHNtOnctNDggbWQ6bXQtMCBtZDpibG9ja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMTAgdGV4dC1zbSBzbTp3LTQ4IG1kOmgtMTBcIiBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICcwcHgnLCBib3JkZXI6ICcwcHgnfX0gaWQ9XCJhbnRkLXNlbGVjdG9yLXNlYXJjaFwiPlxyXG4gICAgICAgICAgPERyb3Bkb3duUHJvdmluY2UgcHJvdmluY2VzPXtwcm92aW5jZXN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCB3LWZ1bGwgaC0xMCBtbC0yIGJvcmRlci10cmFuc3BhcmVudFwiPlxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjVGNUY1JyB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB6LTEwIHctMS8xMiBoLWZ1bGwgcC0zIGxlYWRpbmctc251ZyB0ZXh0LWNlbnRlciBiZy1ncmF5LTQwMCByb3VuZGVkIHRleHQtYmFyLWNvZGUtaWNvbiB0ZXh0LXByaW1hcnktMzAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QWlPdXRsaW5lU2VhcmNoIGNsYXNzTmFtZT1cIm1sLTMgdGV4dC1iYXNlIHRleHQtZ3JheS05MDBcIiAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBweC0zIHB5LTIgb3ZlcmZsb3ctaGlkZGVuIGxlYWRpbmctdGlnaHQgdGV4dC1ncmF5LTcwMCBib3JkZXItbm9uZSBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLguITguYnguJnguKvguLIg4LiK4Li34LmI4LitIOC4o+C5ieC4suC4meC4reC4suC4q+C4suC4oyDguYHguKXguLDguYDguITguKPguLfguYjguK3guIfguJTguLfguYjguKEg4Lij4LmJ4Liy4LiZ4LiY4LiH4Lif4LmJ4LiyIOC4o+C5ieC4suC4meC4hOC5ieC4siBPVE9QIOC5geC4peC4sOC4quC4tOC4meC4hOC5ieC4suC4l+C4seC5iOC4p+C5hOC4m1wiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHQ8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=