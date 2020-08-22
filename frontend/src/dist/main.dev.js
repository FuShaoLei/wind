"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

require("./assets/layout.styl");

var _mavonEditorUpdate = _interopRequireDefault(require("mavon-editor-update"));

require("mavon-editor-update/dist/css/index.css");

var _highlight = _interopRequireDefault(require("highlight.js"));

require("highlight.js/styles/googlecode.css");

var _axios = _interopRequireDefault(require("axios"));

require("./plugins/element.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Vue-cli生成的工程文件的src/main.js
//样式文件
//导入axios->跨域请求
// 挂载axios
_vue["default"].prototype.$http = _axios["default"]; //设置访问路径

_axios["default"].defaults.baseURL = "http://localhost:9000";

_vue["default"].use(_mavonEditorUpdate["default"]);

_vue["default"].config.productionTip = false;

_vue["default"].directive('highlight', function (el) {
  var blocks = el.querySelectorAll('pre code');
  blocks.forEach(function (block) {
    _highlight["default"].highlightBlock(block);
  });
});

new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');