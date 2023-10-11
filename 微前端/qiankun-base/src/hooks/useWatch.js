import { useEffect, useRef } from "react";

const useWatch = (value, fn, config = { immediate: false }) => {
  const oldValue = useRef();
  const isFirst = useRef(false);
  useEffect(() => {
    if (isFirst.current) {
      fn(value, oldValue.current);
    } else {
      isFirst.current = true;

      // 是否要立即执行 fn 回调函数
      if (config.immediate) {
        fn(value, oldValue.current);
      }
    }

    oldValue.current = value;
  }, [value]);
};

export default useWatch;

// react实现这个代码
/**
 * watch: {
  '$route.path': {
    handler: function(val){
      this.isMicroApp = isMicroApp(val)
    }, 
    immediate: true
  }
},
 */

// 1. 首先，我们需要一个变量来保存旧值，这里我们使用 useRef 来保存
// 2. 然后，我们需要一个变量来标记是否是第一次执行，这里我们使用 useRef 来保存
// 3. 接着，我们需要一个 useEffect 来监听 value 的变化，这里我们使用 useEffect 来实现
// 4. 最后，我们需要一个变量来标记是否要立即执行 fn 回调函数，这里我们使用 config.immediate 来实现
