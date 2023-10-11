// 实现一个vue的类
function Vue(options) {
  // 初始化
  this._init(options);
}
// _init方法 用于初始化
Vue.prototype._init = function (options) {
  var vm = this;
  vm.$options = options;
  initState(vm);
};
// initState 用于初始化状态
function initState(vm) {
  var opts = vm.$options;
  if (opts.data) {
    initData(vm);
  }
}
//  initData 用于初始化data
function initData(vm) {
  var data = vm.$options.data;
  // data可能是对象也可能是函数
  data = vm._data = typeof data === "function" ? data.call(vm) : data || {};
  // 数据代理vm._data.xxx -> vm.xxx
  for (var key in data) {
    // 代理
    proxy(vm, "_data", key);
  }
  // 观察数据
  observe(data);
}
//  proxy 用于数据代理
function proxy(vm, sourceKey, key) {
  Object.defineProperty(vm, key, {
    get: function () {
      console.log("get");
      return vm[sourceKey][key];
    },
    set: function (newValue) {
      console.log("set");
      vm[sourceKey][key] = newValue;
    },
  });
}
//  observe 用于观察数据
function observe(data) {
  if (typeof data !== "object") return;
  // 创建观察者
  return new Observer(data);
}
// Observer 观察者类
function Observer(data) {
  // 将用户的数据使用defineProperty重新定义
  this.walk(data);
}
// walk 用于遍历数据
Observer.prototype.walk = function (data) {
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    // 定义响应式数据
    defineReactive(data, keys[i], data[keys[i]]);
  }
};
// defineReactive 用于定义响应式数据
function defineReactive(data, key, value) {
  observe(value);
  Object.defineProperty(data, key, {
    get: function () {
      return value;
    },
    set: function (newValue) {
      if (value === newValue) return;
      value = newValue;
    },
  });
}

