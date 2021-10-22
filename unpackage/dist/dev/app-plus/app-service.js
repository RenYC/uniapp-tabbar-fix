(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**********************************************!*\
  !*** D:/test-code/uniapp-tabbar-fix/main.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 2));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7OztBQUduQixxRTtBQUNBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBSjtBQUNMRyxZQURLLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICAgIC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************************!*\
  !*** D:/test-code/uniapp-tabbar-fix/pages.json ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}

/***/ }),
/* 2 */
/*!**********************************************!*\
  !*** D:/test-code/uniapp-tabbar-fix/App.vue ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 3);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 6);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDbUs7QUFDbkssZ0JBQWdCLG1MQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHNcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi91dGlscy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************************************************************!*\
  !*** D:/test-code/uniapp-tabbar-fix/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../utils/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../utils/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../utils/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../utils/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 4);\n/* harmony import */ var _utils_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _utils_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _utils_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_utils_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_utils_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStoQixDQUFnQixpbEJBQUcsRUFBQyIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi91dGlscy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL3V0aWxzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vdXRpbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vdXRpbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi91dGlscy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL3V0aWxzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vdXRpbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vdXRpbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/test-code/uniapp-tabbar-fix/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\nvar _utils = __webpack_require__(/*! @/common/utils.js */ 8);var _default =\n\n{\n  globalData: {\n    tabReady: {\n      live: false,\n      news: false,\n      discovery: false,\n      data: false,\n      wonderful: false } },\n\n\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:15\");\n    // tabbar 点击防抖\n    new _utils.Mask(this.globalData).init();\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:20\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:23\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 5)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxpQkFGQTtBQUdBLHNCQUhBO0FBSUEsaUJBSkE7QUFLQSxzQkFMQSxFQURBLEVBREE7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FkQTtBQWVBO0FBQ0E7QUFDQSxHQWpCQTtBQWtCQTtBQUNBO0FBQ0EsR0FwQkEsRSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuXHRpbXBvcnQgeyBNYXNrLCBub3RpY2VCYXJGbiB9IGZyb20gJ0AvY29tbW9uL3V0aWxzLmpzJ1xyXG5cdFxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGdsb2JhbERhdGE6IHtcclxuXHRcdFx0dGFiUmVhZHk6IHtcclxuXHRcdFx0XHRsaXZlOiBmYWxzZSxcclxuXHRcdFx0XHRuZXdzOiBmYWxzZSxcclxuXHRcdFx0XHRkaXNjb3Zlcnk6IGZhbHNlLFxyXG5cdFx0XHRcdGRhdGE6IGZhbHNlLFxyXG5cdFx0XHRcdHdvbmRlcmZ1bDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRvbkxhdW5jaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcclxuXHRcdFx0Ly8gdGFiYmFyIOeCueWHu+mYsuaKllxyXG5cdFx0XHRuZXcgTWFzayh0aGlzLmdsb2JhbERhdGEpLmluaXQoKVxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXHJcblx0XHR9LFxyXG5cdFx0b25IaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC8q5q+P5Liq6aG16Z2i5YWs5YWxY3NzICovXHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 6 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 8 */
/*!******************************************************!*\
  !*** D:/test-code/uniapp-tabbar-fix/common/utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.Mask = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var Mask = /*#__PURE__*/function () {\n  // 全局蒙版\n  // 如果首次进入app，直接对tabbar页面一顿狂点会出现bug。\n  // 所以做一个全局蒙版，在页面 onReady 后关闭。\n  function Mask(globalData) {_classCallCheck(this, Mask);\n    this.mask = new plus.nativeObj.View('test', {\n      bottom: '0',\n      left: '0px',\n      height: '50px',\n      width: '100%' });\n\n    this.globalData = globalData;\n  }_createClass(Mask, [{ key: \"drawRect\", value: function drawRect()\n\n    {\n      // 绘制矩形\n      this.mask.drawRect({\n        color: 'rgba(0,0,0,0)' },\n      {\n        top: '0px',\n        left: '0px',\n        width: '100%',\n        height: '100%' });\n\n    } }, { key: \"onClick\", value: function onClick()\n\n    {var _this = this;\n      this.mask.addEventListener('click', function (res) {\n        _this.bindClick(res);\n      });\n    } }, { key: \"bindClick\", value: function bindClick(\n\n    res) {\n      var width = plus.screen.resolutionWidth / 5;\n      var routes = getCurrentPages();\n      var route = routes[routes.length - 1].route;\n      var page = route.split('/')[route.split('/').length - 1];\n\n      if (res.pageX < width) {\n        // 比赛\n        if (this.globalData.tabReady[page]) {\n          uni.switchTab({\n            url: '/pages/tabbar/live/live' });\n\n        }\n\n      } else if (res.pageX > width && res.pageX < width * 2) {\n        // 新闻\n        if (this.globalData.tabReady[page]) {\n          uni.switchTab({\n            url: '/pages/tabbar/news/news' });\n\n        }\n      } else if (res.pageX > width * 2 && res.pageX < width * 3) {\n        // 发现\n        if (this.globalData.tabReady[page]) {\n          uni.switchTab({\n            url: '/pages/tabbar/discovery/discovery' });\n\n        }\n      } else if (res.pageX > width * 3 && res.pageX < width * 4) {\n        // 数据\n        if (this.globalData.tabReady[page]) {\n          uni.switchTab({\n            url: '/pages/tabbar/data/data' });\n\n        }\n      } else if (res.pageX > width * 4) {\n        // 精彩\n        if (this.globalData.tabReady[page]) {\n          uni.switchTab({\n            url: '/pages/tabbar/wonderful/wonderful' });\n\n        }\n      }\n\n      if (this.globalData.tabReady.live && this.globalData.tabReady.news && this.globalData.tabReady.discovery &&\n      this.\n      globalData.tabReady.data && this.globalData.tabReady.wonderful) {\n        this.close();\n      }\n\n    } }, { key: \"show\", value: function show()\n\n    {\n      this.mask.show();\n    } }, { key: \"hide\", value: function hide()\n\n    {\n      this.mask.hide();\n    } }, { key: \"close\", value: function close()\n\n    {\n      this.mask.close();\n    } }, { key: \"init\", value: function init()\n\n    {\n      this.drawRect();\n      this.onClick();\n      this.show();\n    } }]);return Mask;}();exports.Mask = Mask;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3V0aWxzLmpzIl0sIm5hbWVzIjpbIk1hc2siLCJnbG9iYWxEYXRhIiwibWFzayIsInBsdXMiLCJuYXRpdmVPYmoiLCJWaWV3IiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwiZHJhd1JlY3QiLCJjb2xvciIsInRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXMiLCJiaW5kQ2xpY2siLCJzY3JlZW4iLCJyZXNvbHV0aW9uV2lkdGgiLCJyb3V0ZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJyb3V0ZSIsImxlbmd0aCIsInBhZ2UiLCJzcGxpdCIsInBhZ2VYIiwidGFiUmVhZHkiLCJ1bmkiLCJzd2l0Y2hUYWIiLCJ1cmwiLCJsaXZlIiwibmV3cyIsImRpc2NvdmVyeSIsImRhdGEiLCJ3b25kZXJmdWwiLCJjbG9zZSIsInNob3ciLCJoaWRlIiwib25DbGljayJdLCJtYXBwaW5ncyI6InF2QkFBYUEsSTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGdCQUFZQyxVQUFaLEVBQXdCO0FBQ3ZCLFNBQUtDLElBQUwsR0FBWSxJQUFJQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsSUFBbkIsQ0FBd0IsTUFBeEIsRUFBZ0M7QUFDM0NDLFlBQU0sRUFBRSxHQURtQztBQUUzQ0MsVUFBSSxFQUFFLEtBRnFDO0FBRzNDQyxZQUFNLEVBQUUsTUFIbUM7QUFJM0NDLFdBQUssRUFBRSxNQUpvQyxFQUFoQyxDQUFaOztBQU1BLFNBQUtSLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsRzs7QUFFVTtBQUNWO0FBQ0EsV0FBS0MsSUFBTCxDQUFVUSxRQUFWLENBQW1CO0FBQ2xCQyxhQUFLLEVBQUUsZUFEVyxFQUFuQjtBQUVHO0FBQ0ZDLFdBQUcsRUFBRSxLQURIO0FBRUZMLFlBQUksRUFBRSxLQUZKO0FBR0ZFLGFBQUssRUFBRSxNQUhMO0FBSUZELGNBQU0sRUFBRSxNQUpOLEVBRkg7O0FBUUEsSzs7QUFFUztBQUNULFdBQUtOLElBQUwsQ0FBVVcsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQ0MsR0FBRCxFQUFTO0FBQzVDLGFBQUksQ0FBQ0MsU0FBTCxDQUFlRCxHQUFmO0FBQ0EsT0FGRDtBQUdBLEs7O0FBRVNBLE8sRUFBSztBQUNkLFVBQU1MLEtBQUssR0FBR04sSUFBSSxDQUFDYSxNQUFMLENBQVlDLGVBQVosR0FBOEIsQ0FBNUM7QUFDQSxVQUFNQyxNQUFNLEdBQUdDLGVBQWUsRUFBOUI7QUFDQSxVQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDRyxNQUFQLEdBQWdCLENBQWpCLENBQU4sQ0FBMEJELEtBQXhDO0FBQ0EsVUFBTUUsSUFBSSxHQUFHRixLQUFLLENBQUNHLEtBQU4sQ0FBWSxHQUFaLEVBQWlCSCxLQUFLLENBQUNHLEtBQU4sQ0FBWSxHQUFaLEVBQWlCRixNQUFqQixHQUEwQixDQUEzQyxDQUFiOztBQUVBLFVBQUlQLEdBQUcsQ0FBQ1UsS0FBSixHQUFZZixLQUFoQixFQUF1QjtBQUN0QjtBQUNBLFlBQUksS0FBS1IsVUFBTCxDQUFnQndCLFFBQWhCLENBQXlCSCxJQUF6QixDQUFKLEVBQW9DO0FBQ25DSSxhQUFHLENBQUNDLFNBQUosQ0FBYztBQUNiQyxlQUFHLEVBQUUseUJBRFEsRUFBZDs7QUFHQTs7QUFFRCxPQVJELE1BUU8sSUFBSWQsR0FBRyxDQUFDVSxLQUFKLEdBQVlmLEtBQVosSUFBcUJLLEdBQUcsQ0FBQ1UsS0FBSixHQUFZZixLQUFLLEdBQUcsQ0FBN0MsRUFBZ0Q7QUFDdEQ7QUFDQSxZQUFJLEtBQUtSLFVBQUwsQ0FBZ0J3QixRQUFoQixDQUF5QkgsSUFBekIsQ0FBSixFQUFvQztBQUNuQ0ksYUFBRyxDQUFDQyxTQUFKLENBQWM7QUFDYkMsZUFBRyxFQUFFLHlCQURRLEVBQWQ7O0FBR0E7QUFDRCxPQVBNLE1BT0EsSUFBSWQsR0FBRyxDQUFDVSxLQUFKLEdBQVlmLEtBQUssR0FBRyxDQUFwQixJQUF5QkssR0FBRyxDQUFDVSxLQUFKLEdBQVlmLEtBQUssR0FBRyxDQUFqRCxFQUFvRDtBQUMxRDtBQUNBLFlBQUksS0FBS1IsVUFBTCxDQUFnQndCLFFBQWhCLENBQXlCSCxJQUF6QixDQUFKLEVBQW9DO0FBQ25DSSxhQUFHLENBQUNDLFNBQUosQ0FBYztBQUNiQyxlQUFHLEVBQUUsbUNBRFEsRUFBZDs7QUFHQTtBQUNELE9BUE0sTUFPQSxJQUFJZCxHQUFHLENBQUNVLEtBQUosR0FBWWYsS0FBSyxHQUFHLENBQXBCLElBQXlCSyxHQUFHLENBQUNVLEtBQUosR0FBWWYsS0FBSyxHQUFHLENBQWpELEVBQW9EO0FBQzFEO0FBQ0EsWUFBSSxLQUFLUixVQUFMLENBQWdCd0IsUUFBaEIsQ0FBeUJILElBQXpCLENBQUosRUFBb0M7QUFDbkNJLGFBQUcsQ0FBQ0MsU0FBSixDQUFjO0FBQ2JDLGVBQUcsRUFBRSx5QkFEUSxFQUFkOztBQUdBO0FBQ0QsT0FQTSxNQU9BLElBQUlkLEdBQUcsQ0FBQ1UsS0FBSixHQUFZZixLQUFLLEdBQUcsQ0FBeEIsRUFBMkI7QUFDakM7QUFDQSxZQUFJLEtBQUtSLFVBQUwsQ0FBZ0J3QixRQUFoQixDQUF5QkgsSUFBekIsQ0FBSixFQUFvQztBQUNuQ0ksYUFBRyxDQUFDQyxTQUFKLENBQWM7QUFDYkMsZUFBRyxFQUFFLG1DQURRLEVBQWQ7O0FBR0E7QUFDRDs7QUFFRCxVQUFJLEtBQUszQixVQUFMLENBQWdCd0IsUUFBaEIsQ0FBeUJJLElBQXpCLElBQWlDLEtBQUs1QixVQUFMLENBQWdCd0IsUUFBaEIsQ0FBeUJLLElBQTFELElBQWtFLEtBQUs3QixVQUFMLENBQWdCd0IsUUFBaEIsQ0FBeUJNLFNBQTNGO0FBQ0g7QUFDQzlCLGdCQURELENBQ1l3QixRQURaLENBQ3FCTyxJQUZsQixJQUUwQixLQUFLL0IsVUFBTCxDQUFnQndCLFFBQWhCLENBQXlCUSxTQUZ2RCxFQUVrRTtBQUNqRSxhQUFLQyxLQUFMO0FBQ0E7O0FBRUQsSzs7QUFFTTtBQUNOLFdBQUtoQyxJQUFMLENBQVVpQyxJQUFWO0FBQ0EsSzs7QUFFTTtBQUNOLFdBQUtqQyxJQUFMLENBQVVrQyxJQUFWO0FBQ0EsSzs7QUFFTztBQUNQLFdBQUtsQyxJQUFMLENBQVVnQyxLQUFWO0FBQ0EsSzs7QUFFTTtBQUNOLFdBQUt4QixRQUFMO0FBQ0EsV0FBSzJCLE9BQUw7QUFDQSxXQUFLRixJQUFMO0FBQ0EsSyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1hc2sge1xyXG5cdC8vIOWFqOWxgOiSmeeJiFxyXG5cdC8vIOWmguaenOmmluasoei/m+WFpWFwcO+8jOebtOaOpeWvuXRhYmJhcumhtemdouS4gOmhv+eLgueCueS8muWHuueOsGJ1Z+OAglxyXG5cdC8vIOaJgOS7peWBmuS4gOS4quWFqOWxgOiSmeeJiO+8jOWcqOmhtemdoiBvblJlYWR5IOWQjuWFs+mXreOAglxyXG5cdGNvbnN0cnVjdG9yKGdsb2JhbERhdGEpIHtcclxuXHRcdHRoaXMubWFzayA9IG5ldyBwbHVzLm5hdGl2ZU9iai5WaWV3KCd0ZXN0Jywge1xyXG5cdFx0XHRib3R0b206ICcwJyxcclxuXHRcdFx0bGVmdDogJzBweCcsXHJcblx0XHRcdGhlaWdodDogJzUwcHgnLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnXHJcblx0XHR9KVxyXG5cdFx0dGhpcy5nbG9iYWxEYXRhID0gZ2xvYmFsRGF0YVxyXG5cdH1cclxuXHJcblx0ZHJhd1JlY3QoKSB7XHJcblx0XHQvLyDnu5jliLbnn6nlvaJcclxuXHRcdHRoaXMubWFzay5kcmF3UmVjdCh7XHJcblx0XHRcdGNvbG9yOiAncmdiYSgwLDAsMCwwKSdcclxuXHRcdH0sIHtcclxuXHRcdFx0dG9wOiAnMHB4JyxcclxuXHRcdFx0bGVmdDogJzBweCcsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRcdGhlaWdodDogJzEwMCUnXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLm1hc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAocmVzKSA9PiB7XHJcblx0XHRcdHRoaXMuYmluZENsaWNrKHJlcylcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRiaW5kQ2xpY2socmVzKSB7XHJcblx0XHRjb25zdCB3aWR0aCA9IHBsdXMuc2NyZWVuLnJlc29sdXRpb25XaWR0aCAvIDVcclxuXHRcdGNvbnN0IHJvdXRlcyA9IGdldEN1cnJlbnRQYWdlcygpXHJcblx0XHRjb25zdCByb3V0ZSA9IHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV0ucm91dGVcclxuXHRcdGNvbnN0IHBhZ2UgPSByb3V0ZS5zcGxpdCgnLycpW3JvdXRlLnNwbGl0KCcvJykubGVuZ3RoIC0gMV1cclxuXHJcblx0XHRpZiAocmVzLnBhZ2VYIDwgd2lkdGgpIHtcclxuXHRcdFx0Ly8g5q+U6LWbXHJcblx0XHRcdGlmICh0aGlzLmdsb2JhbERhdGEudGFiUmVhZHlbcGFnZV0pIHtcclxuXHRcdFx0XHR1bmkuc3dpdGNoVGFiKHtcclxuXHRcdFx0XHRcdHVybDogJy9wYWdlcy90YWJiYXIvbGl2ZS9saXZlJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHJcblx0XHR9IGVsc2UgaWYgKHJlcy5wYWdlWCA+IHdpZHRoICYmIHJlcy5wYWdlWCA8IHdpZHRoICogMikge1xyXG5cdFx0XHQvLyDmlrDpl7tcclxuXHRcdFx0aWYgKHRoaXMuZ2xvYmFsRGF0YS50YWJSZWFkeVtwYWdlXSkge1xyXG5cdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3RhYmJhci9uZXdzL25ld3MnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChyZXMucGFnZVggPiB3aWR0aCAqIDIgJiYgcmVzLnBhZ2VYIDwgd2lkdGggKiAzKSB7XHJcblx0XHRcdC8vIOWPkeeOsFxyXG5cdFx0XHRpZiAodGhpcy5nbG9iYWxEYXRhLnRhYlJlYWR5W3BhZ2VdKSB7XHJcblx0XHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvdGFiYmFyL2Rpc2NvdmVyeS9kaXNjb3ZlcnknXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChyZXMucGFnZVggPiB3aWR0aCAqIDMgJiYgcmVzLnBhZ2VYIDwgd2lkdGggKiA0KSB7XHJcblx0XHRcdC8vIOaVsOaNrlxyXG5cdFx0XHRpZiAodGhpcy5nbG9iYWxEYXRhLnRhYlJlYWR5W3BhZ2VdKSB7XHJcblx0XHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvdGFiYmFyL2RhdGEvZGF0YSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHJlcy5wYWdlWCA+IHdpZHRoICogNCkge1xyXG5cdFx0XHQvLyDnsr7lvalcclxuXHRcdFx0aWYgKHRoaXMuZ2xvYmFsRGF0YS50YWJSZWFkeVtwYWdlXSkge1xyXG5cdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL3RhYmJhci93b25kZXJmdWwvd29uZGVyZnVsJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5nbG9iYWxEYXRhLnRhYlJlYWR5LmxpdmUgJiYgdGhpcy5nbG9iYWxEYXRhLnRhYlJlYWR5Lm5ld3MgJiYgdGhpcy5nbG9iYWxEYXRhLnRhYlJlYWR5LmRpc2NvdmVyeSAmJlxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdC5nbG9iYWxEYXRhLnRhYlJlYWR5LmRhdGEgJiYgdGhpcy5nbG9iYWxEYXRhLnRhYlJlYWR5LndvbmRlcmZ1bCkge1xyXG5cdFx0XHR0aGlzLmNsb3NlKClcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRzaG93KCkge1xyXG5cdFx0dGhpcy5tYXNrLnNob3coKTtcclxuXHR9XHJcblxyXG5cdGhpZGUoKSB7XHJcblx0XHR0aGlzLm1hc2suaGlkZSgpO1xyXG5cdH1cclxuXHJcblx0Y2xvc2UoKSB7XHJcblx0XHR0aGlzLm1hc2suY2xvc2UoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmRyYXdSZWN0KClcclxuXHRcdHRoaXMub25DbGljaygpXHJcblx0XHR0aGlzLnNob3coKVxyXG5cdH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ })
],[[0,"app-config"]]]);