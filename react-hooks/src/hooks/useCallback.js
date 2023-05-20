import {hookStates,hookIndex,setHookStates,setHookIndexAdd} from './state'


export function useCallback(callback, deps) {
  if (hookStates[hookIndex]) {
    const [lastCallback, lastDeps] = hookStates[hookIndex];
    const same = deps.every((item, index) => item === lastDeps[index]);
    if (same) {
      setHookIndexAdd()
      return lastCallback;
    } else {
      // hookStates[hookIndex++] = [callback, deps];
      setHookStates(setHookIndexAdd(),[callback, deps])
      return callback;
    }
  } else {
    // hookStates[hookIndex++] = [callback, deps];
    setHookStates(setHookIndexAdd(),[callback, deps])
    return callback;
  }
}