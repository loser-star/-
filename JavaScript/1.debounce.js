/* 
  实现防抖函数
  1. 防抖函数的作用：防止函数在短时间内多次触发，只执行最后一次
  2. 防抖函数的实现：在短时间内多次触发同一个函数，只执行最后一次，或者只在开始时执行
  3. 防抖函数的应用场景：搜索框输入，只需用户最后一次输入完，再发送请求
  4. 防抖函数的实现原理：每次触发事件时都取消之前的延时调用方法
*/
function debounce(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  };
}

// 测试debounce
function testDebounce() {
  console.log("debounce");
}
const testDebounceFn = debounce(testDebounce, 1000);
testDebounceFn();
testDebounceFn();
testDebounceFn();
testDebounceFn();
