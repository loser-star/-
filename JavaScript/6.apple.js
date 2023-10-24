/**
 * 实现apply
 * @param {*} context
 * @param {*} args
 * @returns
 * @description
 * 1. 判断context是否为null或undefined
 * 2. 将当前函数作为context的一个属性
 * 3. 调用函数
 * 4. 删除函数
 * 5. 返回结果
 */

Function.prototype.myApply = function (context,args) {
  if (context === null || context === undefined) {
    context = window;
  } else {
    context = Object(context);
  }
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

// 测试myApply
function testApply(name, age) {
  console.log(name, age);
  console.log(this);
}
const obj = {
  name: "Tom",
  age: 18,
};
testApply.myApply(obj, ["Jerry", 20]);