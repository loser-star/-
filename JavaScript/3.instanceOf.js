/**
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 * 语法：object instanceof constructor
 * 参数：object 要检测的对象。constructor 某个构造函数。
 * 返回值：如果 object 是 constructor 的实例，则返回 true。否则返回 false。
 * 
 * instanceof的作用：
 * 1.判断一个实例是否属于某种类型
 * 2.判断一个实例是否属于某种类型的子类型
 * 3.判断一个实例是否属于某种类型的父类型
 * 
 * instanceof的实现原理：
 * 1.获取实例的原型对象
 * 2.获取构造函数的原型对象
 * 3.判断实例的原型对象是否等于构造函数的原型对象
 * 4.如果不等于，就获取实例的原型对象的原型对象，重复步骤3
 * 5.如果等于，就返回true
 * 6.如果实例的原型对象为null，就返回false
 * 
 * instanceof的应用场景：
 * 1.判断一个实例是否属于某种类型
 * 2.判断一个实例是否属于某种类型的子类型
 * 3.判断一个实例是否属于某种类型的父类型
 */
function myInstanceOf(instance, constructor) {
  // 1.获取实例的原型对象
  let instanceProto = instance.__proto__;
  // 2.获取构造函数的原型对象
  let constructorProto = constructor.prototype;
  // 3.判断实例的原型对象是否等于构造函数的原型对象
  while (true) {
    if (instanceProto === null) {
      return false;
    }
    if (instanceProto === constructorProto) {
      return true;
    }
    instanceProto = instanceProto.__proto__;
  }
}

// 测试myInstanceOf
function Person() {}
const person = new Person();
console.log(myInstanceOf(person, Person)); // true
console.log(myInstanceOf(person, Object)); // true
console.log(myInstanceOf(person, Array)); // false
console.log(myInstanceOf(person, Function)); // false
console.log(myInstanceOf(person, Date)); // false
console.log(myInstanceOf(person, RegExp)); // false
console.log(myInstanceOf(person, Number)); // false
console.log(myInstanceOf(person, String)); // false
console.log(myInstanceOf(person, Boolean)); // false
console.log(myInstanceOf(person, Symbol)); // false
console.log(myInstanceOf(person, Error)); // false
console.log(myInstanceOf(person, Promise)); // false
console.log(myInstanceOf(person, Set)); // false
console.log(myInstanceOf(person, Map)); // false
console.log(myInstanceOf(person, WeakSet)); // false
console.log(myInstanceOf(person, WeakMap)); // false
console.log(myInstanceOf(person, ArrayBuffer)); // false
console.log(myInstanceOf(person, DataView)); // false