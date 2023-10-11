"use strict";
(self["webpackChunkmeeting_room_booking_system_frontend_user"] = self["webpackChunkmeeting_room_booking_system_frontend_user"] || []).push([["src_api_index_js"],{

/***/ "./src/api/home.js":
/*!*************************!*\
  !*** ./src/api/home.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchMeetingRoomList: function() { return /* binding */ searchMeetingRoomList; }
/* harmony export */ });
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/services/index.js");



function searchMeetingRoomList(_x, _x2, _x3, _x4, _x5) {
  return _searchMeetingRoomList.apply(this, arguments);
}
function _searchMeetingRoomList() {
  _searchMeetingRoomList = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(name, capacity, equipment, pageNo, pageSize) {
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _services__WEBPACK_IMPORTED_MODULE_2__["default"].get("/meeting-room/list", {
            params: {
              name: name,
              capacity: capacity,
              equipment: equipment,
              pageNo: pageNo,
              pageSize: pageSize
            }
          });
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _searchMeetingRoomList.apply(this, arguments);
}

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserInfo: function() { return /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.getUserInfo; },
/* harmony export */   login: function() { return /* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_0__.login; },
/* harmony export */   register: function() { return /* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_0__.register; },
/* harmony export */   searchMeetingRoomList: function() { return /* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_2__.searchMeetingRoomList; },
/* harmony export */   sendRegisterCaptcha: function() { return /* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_0__.sendRegisterCaptcha; },
/* harmony export */   updateInfo: function() { return /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.updateInfo; },
/* harmony export */   updatePassword: function() { return /* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_0__.updatePassword; },
/* harmony export */   updatePasswordCaptcha: function() { return /* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_0__.updatePasswordCaptcha; },
/* harmony export */   updateUserInfoCaptcha: function() { return /* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_1__.updateUserInfoCaptcha; }
/* harmony export */ });
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/api/login.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./src/api/user.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/api/home.js");




/***/ }),

/***/ "./src/api/login.js":
/*!**************************!*\
  !*** ./src/api/login.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: function() { return /* binding */ login; },
/* harmony export */   register: function() { return /* binding */ register; },
/* harmony export */   sendRegisterCaptcha: function() { return /* binding */ sendRegisterCaptcha; },
/* harmony export */   updatePassword: function() { return /* binding */ updatePassword; },
/* harmony export */   updatePasswordCaptcha: function() { return /* binding */ updatePasswordCaptcha; }
/* harmony export */ });
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/services/index.js");




// 登录
function login(_x, _x2) {
  return _login.apply(this, arguments);
}

// 发送注册验证码
function _login() {
  _login = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(username, password) {
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _services__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user/login", {
            username: username,
            password: password
          });
        case 2:
          return _context.abrupt("return", _context.sent);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _login.apply(this, arguments);
}
function sendRegisterCaptcha(_x3) {
  return _sendRegisterCaptcha.apply(this, arguments);
}

// 注册
function _sendRegisterCaptcha() {
  _sendRegisterCaptcha = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(email) {
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _services__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user/register-captcha?address=".concat(email));
        case 2:
          return _context2.abrupt("return", _context2.sent);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _sendRegisterCaptcha.apply(this, arguments);
}
function register(_x4) {
  return _register.apply(this, arguments);
}

// 发送重置密码验证码
function _register() {
  _register = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3(registerUser) {
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _services__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user/register", registerUser);
        case 2:
          return _context3.abrupt("return", _context3.sent);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _register.apply(this, arguments);
}
function updatePasswordCaptcha(_x5) {
  return _updatePasswordCaptcha.apply(this, arguments);
}

// 重置密码
function _updatePasswordCaptcha() {
  _updatePasswordCaptcha = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4(email) {
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _services__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user/update_password/captcha", {
            params: {
              address: email
            }
          });
        case 2:
          return _context4.abrupt("return", _context4.sent);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _updatePasswordCaptcha.apply(this, arguments);
}
function updatePassword(_x6) {
  return _updatePassword.apply(this, arguments);
}
function _updatePassword() {
  _updatePassword = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee5(data) {
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _services__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user/update_password", data);
        case 2:
          return _context5.abrupt("return", _context5.sent);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _updatePassword.apply(this, arguments);
}

/***/ }),

/***/ "./src/api/user.js":
/*!*************************!*\
  !*** ./src/api/user.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserInfo: function() { return /* binding */ getUserInfo; },
/* harmony export */   updateInfo: function() { return /* binding */ updateInfo; },
/* harmony export */   updateUserInfoCaptcha: function() { return /* binding */ updateUserInfoCaptcha; }
/* harmony export */ });
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/services/index.js");



function getUserInfo() {
  return _getUserInfo.apply(this, arguments);
}
function _getUserInfo() {
  _getUserInfo = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee() {
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log("getUserInfo");
          _context.next = 3;
          return _services__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user/info");
        case 3:
          return _context.abrupt("return", _context.sent);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getUserInfo.apply(this, arguments);
}
function updateInfo(_x) {
  return _updateInfo.apply(this, arguments);
}
function _updateInfo() {
  _updateInfo = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(data) {
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _services__WEBPACK_IMPORTED_MODULE_2__["default"].post("/user/update", data);
        case 2:
          return _context2.abrupt("return", _context2.sent);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _updateInfo.apply(this, arguments);
}
function updateUserInfoCaptcha() {
  return _updateUserInfoCaptcha.apply(this, arguments);
}
function _updateUserInfoCaptcha() {
  _updateUserInfoCaptcha = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3() {
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _services__WEBPACK_IMPORTED_MODULE_2__["default"].get("/user/update/captcha");
        case 2:
          return _context3.abrupt("return", _context3.sent);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _updateUserInfoCaptcha.apply(this, arguments);
}

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");


// import hyRequest from "./request/index";

// export default hyRequest;



var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2__["default"].create({
  baseURL: "http://127.0.0.1:4000",
  timeout: 3000
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  if (config.url === "/login") {
    return config;
  }
  // console.log("请求拦截");

  // 设置Authorization

  var accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers.authorization = "Bearer " + accessToken;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
var refreshing = false;
var queue = [];
axiosInstance.interceptors.response.use(function (response) {
  return response;
}, /*#__PURE__*/function () {
  var _ref = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(error) {
    var _error$response, data, config, res;
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _error$response = error.response, data = _error$response.data, config = _error$response.config;
          console.log(data, config);
          if (!refreshing) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", new Promise(function (resolve) {
            queue.push({
              config: config,
              resolve: resolve
            });
          }));
        case 4:
          if (!(data.code === 401 && !config.url.includes("/user/refresh"))) {
            _context.next = 20;
            break;
          }
          refreshing = true;
          console.log("refreshing" + refreshing);
          _context.next = 9;
          return refreshToken();
        case 9:
          res = _context.sent;
          refreshing = false;
          if (!(res.status === 200)) {
            _context.next = 16;
            break;
          }
          queue.forEach(function (_ref2) {
            var config = _ref2.config,
              resolve = _ref2.resolve;
            resolve(axiosInstance(config));
          });
          return _context.abrupt("return", axiosInstance(config));
        case 16:
          antd__WEBPACK_IMPORTED_MODULE_3__["default"].error(res.data);
          setTimeout(function () {
            window.location.href = "/login";
          }, 1500);
        case 18:
          _context.next = 21;
          break;
        case 20:
          return _context.abrupt("return", error.response);
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
function refreshToken() {
  return _refreshToken.apply(this, arguments);
}
function _refreshToken() {
  _refreshToken = (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
    var res;
    return (0,G_github_my_meeting_room_booking_system_frontend_user_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return axiosInstance.get("/user/refresh", {
            params: {
              refreshToken: localStorage.getItem("refresh_token")
            }
          });
        case 2:
          res = _context2.sent;
          console.log("res" + res);
          localStorage.setItem("access_token", res.data.access_token || "");
          localStorage.setItem("refresh_token", res.data.refresh_token || "");
          return _context2.abrupt("return", res);
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _refreshToken.apply(this, arguments);
}
/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

/***/ })

}]);
//# sourceMappingURL=src_api_index_js.chunk.js.map