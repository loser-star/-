/**
 * 深浅拷贝
 * 浅拷贝：只拷贝一层，如果有对象嵌套，那么就只拷贝最外层的对象，内层的对象只是拷贝了引用地址
 * 深拷贝：拷贝所有层，包括对象的嵌套
 */

// 浅拷贝
let obj = {
  name: "Tom",
  age: 18,
  hobby: ["eat", "drink", "play"],
  friend: {
    name: "Jerry",
    age: 19,
  },
};

// 1. Object.assign
let obj1 = Object.assign({}, obj);
console.log(obj1);
// 2. 扩展运算符
let obj2 = { ...obj };
console.log(obj2);
// 3. Array.prototype.concat
let obj3 = [].concat(obj);
console.log(obj3);
// 4. Array.from
let obj6 = Array.from(obj);
console.log(obj6);
// 5. JSON.parse(JSON.stringify())
let obj7 = JSON.parse(JSON.stringify(obj));
console.log(obj7);

// 深拷贝
// 1. JSON.parse(JSON.stringify())
let obj8 = JSON.parse(JSON.stringify(obj));
console.log(obj8);
// 2. 递归
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
let obj9 = deepClone(obj);
console.log(obj9);
