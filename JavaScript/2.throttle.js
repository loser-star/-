/**
 * 函数节流
 * @param {Function} fn 需要节流的函数
 * @param {Number} delay 延迟时间
 * @returns {Function} 返回一个节流函数
 * @description
 * 1. 节流函数的作用：降低函数的执行频率
 * 2. 节流函数的实现：在一定时间内只执行一次
 * 3. 节流函数的应用场景：鼠标不断点击触发，mousedown(单位时间内只触发一次)
 * 4. 节流函数的实现原理：每次触发事件时都判断当前是否有等待执行的延时函数
 */
function throttle(fn, delay) {
  let timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn();
        timer = null;
      }, delay);
    }
  };
}

// 测试throttle
function testThrottle() {
  console.log("throttle");
}
const testThrottleFn = throttle(testThrottle, 1000);
testThrottleFn();
testThrottleFn();
testThrottleFn();
testThrottleFn();
