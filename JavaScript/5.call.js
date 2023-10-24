/**
 * call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
 * 语法：fun.call(thisArg[, arg1[, arg2[, ...]]])
 * thisArg：在fun函数运行时指定的this值。需要注意的是，指定的this值并不一定是该函数执行时真正的this值，
 * 如果这个函数处于非严格模式下，则指定为null和undefined的this值会自动指向全局对象（浏览器中就是window对象），
 * 同时值为原始值（数字，字符串，布尔值）的this会指向该原始值的自动包装对象。
 * arg1, arg2, ...：指定的参数列表。
 * 返回值：使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。
 * 说明：call() 允许为不同的对象分配和调用属于一个对象的函数/方法。
 * call() 提供新的 this 值给当前调用的函数/方法。你可以使用 call 来实现继承。
 */
Function.prototype.myCall = function (context) {
  // 1.判断context是否为null或undefined
  if (context === null || context === undefined) {
    context = window;
  } else {
    context = Object(context);
  }
  // 2.将当前函数作为context的一个属性
  context.fn = this;
  // 3.获取参数
  const args = [...arguments].slice(1);
  console.log(args);
  // 4.调用函数
  const result = context.fn(...args);
  console.log(result);
  // 5.删除函数
  delete context.fn;
  // 6.返回结果
  return result;
};

// 测试myCall
function testCall(name, age) {
  console.log(name, age);
  console.log(this);
}
const obj = {
  name: "Tom",
  age: 18,
};
testCall.myCall(obj, "Jerry", 20);
