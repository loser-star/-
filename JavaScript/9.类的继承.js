/**
 * 1.原型链继承
 * 2.借用构造函数继承
 * 3.组合继承
 * 4.原型式继承
 * 5.寄生式继承
 * 6.寄生组合式继承
 * 7.ES6继承
 */
// 1.原型链继承
function Parent() {
  this.name = "parent";
}
Parent.prototype.getName = function () {
  console.log(this.name);
};
function Child() {
  this.age = 18;
}
Child.prototype = new Parent();
Child.prototype.getAge = function () {
  console.log(this.age);
};
const child = new Child();
console.log(child);
child.getName();
child.getAge();
// // 缺点：1.引用类型的属性被所有实例共享
// // 优点：1.方法在原型上定义，节省内存

// // 2.借用构造函数继承
function Parent1() {
  this.name = "parent";
}
Parent1.prototype.getName = function () {
  console.log(this.name);
};
function Child1() {
  Parent1.call(this);
  this.age = 18;
}
Child1.prototype.getAge = function () {
  console.log(this.age);
};
const child1 = new Child1();
console.log(child1);
// child1.getName();
child1.getAge();
// 缺点：1.方法都在构造函数中定义，每次创建实例都会创建一遍方法
// 优点：1.避免了引用类型的属性被所有实例共享

// // 3.组合继承
function Parent2() {
  this.name = "parent";
}
Parent2.prototype.getName = function () {
  console.log(this.name);
};
function Child2() {
  Parent2.call(this);
  this.age = 18;
}
Child2.prototype = new Parent2();
Child2.prototype.constructor = Child2;
Child2.prototype.getAge = function () {
  console.log(this.age);
};
const child2 = new Child2();
console.log(child2);
child2.getName();
child2.getAge();
// 缺点：1.调用了两次父类构造函数
// 优点：1.避免了引用类型的属性被所有实例共享

// // 4.原型式继承
function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
const person = {
  name: "Tom",
  friends: ["Jerry", "Jack"],
};
const person1 = createObj(person);
const person2 = createObj(person);
person1.name = "person1";
person1.friends.push("person1");
person2.name = "person2";
person2.friends.push("person2");
console.log(person1);
console.log(person2);
// 缺点：1.包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样
// 优点：1.避免了引用类型的属性被所有实例共享

// 5.寄生式继承
function createObj1(o) {
  const clone = Object.create(o);
  clone.sayName = function () {
    console.log("hi");
  };
  return clone;
}
const person3 = {
  name: "Tom",
  friends: ["Jerry", "Jack"],
};
const person4 = createObj1(person3);
console.log(person4);
person4.sayName();
// 缺点：1.跟借用构造函数模式一样，每次创建对象都会创建一遍方法
// 优点：1.避免了引用类型的属性被所有实例共享

// 6.寄生组合式继承
function Parent3() {
  this.name = "parent";
}
Parent3.prototype.getName = function () {
  console.log(this.name);
};
function Child3() {
  Parent3.call(this);
  this.age = 18;
}
Child3.prototype = Object.create(Parent3.prototype);
Child3.prototype.constructor = Child3;
Child3.prototype.getAge = function () {
  console.log(this.age);
};
const child3 = new Child3();
console.log(child3);
child3.getName();
child3.getAge();
// 缺点：1.调用了两次父类构造函数
// 优点：1.避免了引用类型的属性被所有实例共享
