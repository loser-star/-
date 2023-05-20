import {hookStates,hookIndex,setHookStates,setHookIndexAdd} from './state'


export function useMemo(factory, deps) {
  if (hookStates[hookIndex]) {
    let [lastMemo, lastDeps] = hookStates[hookIndex];
    let same = deps.every((item, index) => item === lastDeps[index]);
    if (same) {
      setHookIndexAdd()
      return lastMemo;
    } else {
      let newMemo = factory();
      // hookStates[hookIndex++] = [newMemo, deps];
      setHookStates(setHookIndexAdd(),[newMemo, deps])
      return newMemo;
    }
  } else {
    let newMemo = factory();
    // hookStates[hookIndex++] = [newMemo, deps];
    setHookStates(setHookIndexAdd(),[newMemo, deps])
    return newMemo;
  }
}