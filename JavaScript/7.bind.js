/**
 * bind() 方法会创建一个新函数。
 * 当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，
 * 之后的一序列参数将会在传递的实参前传入作为它的参数。
 * 
 * 语法：fun.bind(thisArg[, arg1[, arg2[, ...]]])
 * thisArg：当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。
 * arg1, arg2, ...：当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。
 * 返回值：返回由指定的this值和初始化参数改造的原函数拷贝。
 */
Function.prototype.myBind = function (context) {
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
  // 4.返回一个函数
  return function () {
    // 5.调用函数
    const result = context.fn(...args);
    // 6.删除函数
    delete context.fn;
    // 7.返回结果
    return result;
  };
}

