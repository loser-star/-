"use strict";
(self["webpackChunkmeeting_room_booking_system_frontend_user"] = self["webpackChunkmeeting_room_booking_system_frontend_user"] || []).push([["src_views_register_index_js"],{

/***/ "./src/views/register/index.js":
/*!*************************************!*\
  !*** ./src/views/register/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Register; }
/* harmony export */ });
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_es_form_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/form/Form */ "./node_modules/antd/es/form/hooks/useForm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/form/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/views/register/style.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api */ "./src/api/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












function Register() {
  var _useForm = (0,antd_es_form_Form__WEBPACK_IMPORTED_MODULE_8__["default"])(),
    _useForm2 = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_useForm, 1),
    form = _useForm2[0];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var onFinish = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)( /*#__PURE__*/function () {
    var _ref = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee(values) {
      var res;
      return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log(values);
            if (!(values.password !== values.confirmPassword)) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", antd__WEBPACK_IMPORTED_MODULE_10__["default"].error("两次密码不一致"));
          case 3:
            _context.next = 5;
            return (0,_api__WEBPACK_IMPORTED_MODULE_6__.register)(values);
          case 5:
            res = _context.sent;
            if (res.status === 201 || res.status === 200) {
              antd__WEBPACK_IMPORTED_MODULE_10__["default"].success("注册成功");
              setTimeout(function () {
                navigate("/login");
              }, 1500);
            } else {
              antd__WEBPACK_IMPORTED_MODULE_10__["default"].error(res.data.data || "系统繁忙，请稍后再试");
            }
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [navigate]);
  var sendCaptcha = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().mark(function _callee2() {
    var address, res;
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          address = form.getFieldValue("email");
          _context2.next = 3;
          return (0,_api__WEBPACK_IMPORTED_MODULE_6__.sendRegisterCaptcha)(address);
        case 3:
          res = _context2.sent;
          if (res.status === 201 || res.status === 200) {
            antd__WEBPACK_IMPORTED_MODULE_10__["default"].success(res.data.data);
          } else {
            antd__WEBPACK_IMPORTED_MODULE_10__["default"].error(res.data.data || "系统繁忙，请稍后再试");
          }
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })), [form]);
  var layout1 = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  };
  var layout2 = {
    labelCol: {
      span: 0
    },
    wrapperCol: {
      span: 24
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_5__.RegisterWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
      children: "\u4F1A\u8BAE\u5BA4\u9884\u8BA2\u7CFB\u7EDF"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_11__["default"], (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layout1), {}, {
      form: form,
      onFinish: onFinish,
      colon: false,
      autoComplete: "off",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
        label: "\u7528\u6237\u540D",
        name: "username",
        rules: [{
          required: true,
          message: "请输入用户名!"
        }],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
        label: "\u6635\u79F0",
        name: "nickName",
        rules: [{
          required: true,
          message: "请输入昵称!"
        }],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
        label: "\u5BC6\u7801",
        name: "password",
        rules: [{
          required: true,
          message: "请输入密码!"
        }],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__["default"].Password, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
        label: "\u786E\u8BA4\u5BC6\u7801",
        name: "confirmPassword",
        rules: [{
          required: true,
          message: "请输入确认密码!"
        }],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__["default"].Password, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
        label: "\u90AE\u7BB1",
        name: "email",
        rules: [{
          required: true,
          message: "请输入邮箱!"
        }, {
          type: "email",
          message: "请输入合法邮箱地址!"
        }],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "captcha-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__["default"].Item, {
          label: "\u9A8C\u8BC1\u7801",
          name: "captcha",
          rules: [{
            required: true,
            message: "请输入验证码!"
          }],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__["default"], {
          type: "primary",
          onClick: sendCaptcha,
          children: "\u53D1\u9001\u9A8C\u8BC1\u7801"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__["default"].Item, (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layout2), {}, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "links",
          children: ["\u5DF2\u6709\u8D26\u53F7\uFF1F\u53BB", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Link, {
            to: "/login",
            children: "\u767B\u5F55"
          })]
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__["default"].Item, (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layout1), {}, {
        label: " ",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__["default"], {
          className: "btn",
          type: "primary",
          htmlType: "submit",
          children: "\u6CE8\u518C"
        })
      }))]
    }))]
  });
}

/***/ }),

/***/ "./src/views/register/style.js":
/*!*************************************!*\
  !*** ./src/views/register/style.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterWrapper: function() { return /* binding */ RegisterWrapper; }
/* harmony export */ });
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _templateObject;

var RegisterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 400px;\n  margin: 100px auto 0 auto;\n  text-align: center;\n\n  .links {\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  .btn {\n    width: 100%;\n  }\n\n  .captcha-wrapper {\n    display: flex;\n    justify-content: flex-end;\n  }\n"])));

/***/ })

}]);
//# sourceMappingURL=src_views_register_index_js.chunk.js.map