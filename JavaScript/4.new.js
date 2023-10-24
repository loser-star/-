/**
 * new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。
 * new 关键字会进行如下的操作：
 * 1. 创建一个空的简单JavaScript对象（即{}）；
 * 2. 链接该对象（即设置该对象的构造函数）到另一个对象 ；
 * 3. 将步骤1新创建的对象作为this的上下文 ；
 * 4. 如果该函数没有返回对象，则返回this。
 */
function myNew() {
  // 创建一个空的简单JavaScript对象（即{}）；
  const obj = {};
  // 链接该对象（即设置该对象的构造函数）到另一个对象 ；
  // 将步骤1新创建的对象作为this的上下文 ；
  const Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  // 如果该函数没有返回对象，则返回this。
  const result = Constructor.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}

// 测试myNew
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = myNew(Person, "Tom", 18);
console.log(person); // Person { name: 'Tom', age: 18 }
