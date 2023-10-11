"use strict";
(self["webpackChunkmeeting_room_booking_system_frontend_user"] = self["webpackChunkmeeting_room_booking_system_frontend_user"] || []).push([["src_views_menu_index_js"],{

/***/ "./src/views/menu/index.js":
/*!*********************************!*\
  !*** ./src/views/menu/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/menu/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/views/menu/style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Menu() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var items = [{
    key: "1",
    label: "会议室列表"
  }, {
    key: "2",
    label: "预定历史"
  }];
  function getSelectedKeys() {
    if (location.pathname === "/meeting_room_list") {
      return ["1"];
    } else if (location.pathname === "/booking_history") {
      return ["2"];
    } else {
      return ["1"];
    }
  }
  var handleMenuItemClick = function handleMenuItemClick(info) {
    var path = "";
    switch (info.key) {
      case "1":
        path = "/meeting_room_list";
        break;
      case "2":
        path = "/booking_history";
        break;
      default:
        path = "/meeting_room_list";
        break;
    }
    navigate(path);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_1__.MenuWrapper, {
    id: "menu-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "menu-area",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__["default"], {
        defaultSelectedKeys: getSelectedKeys(),
        items: items,
        onClick: handleMenuItemClick
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Outlet, {})
    })]
  });
}

/***/ }),

/***/ "./src/views/menu/style.js":
/*!*********************************!*\
  !*** ./src/views/menu/style.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuWrapper: function() { return /* binding */ MenuWrapper; }
/* harmony export */ });
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject;

var MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: row;\n  .menu-area {\n    width: 200px;\n  }\n"])));

/***/ })

}]);
//# sourceMappingURL=src_views_menu_index_js.chunk.js.map