"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _layout = _interopRequireDefault(require("../views/layout.vue"));

var _index = _interopRequireDefault(require("../views/index.vue"));

var _post = _interopRequireDefault(require("../views/post.vue"));

var _login = _interopRequireDefault(require("../views/management/login.vue"));

var _home = _interopRequireDefault(require("../views/management/home.vue"));

var _edit = _interopRequireDefault(require("../views/management/edit.vue"));

var _posts = _interopRequireDefault(require("../views/management/posts.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Layout',
  component: _layout["default"],
  children: [{
    path: '/',
    name: 'Index',
    component: _index["default"]
  }, {
    path: '/blog/:blogId',
    name: 'Post',
    component: _post["default"]
  }]
}, {
  path: '/login',
  name: 'Login',
  component: _login["default"]
}, {
  path: '/home',
  name: 'Home',
  component: _home["default"],
  redirect: '/home/posts',
  children: [{
    path: '/home/posts',
    name: 'Posts',
    component: _posts["default"]
  }, {
    path: '/home/edit',
    name: 'Edit',
    component: _edit["default"]
  }, {
    path: '/home/edit/:blogId',
    name: 'Edited',
    component: _edit["default"]
  }]
}];
var router = new _vueRouter["default"]({
  routes: routes
}); // router.beforeEach((to,from,next)=>{
//   if(to.path == '/backhome') return next();
// })

var _default = router;
exports["default"] = _default;