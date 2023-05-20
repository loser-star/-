import { hookStates, hookIndex, setHookStates, setHookIndexAdd } from "./state";
export const useEffect = (callback, deps) => {
  if (hookStates[hookIndex]) {
    const [oldDestroy, lastDeps] = hookStates[hookIndex];
    const same = deps.every((item, index) => item === lastDeps[index]);
    if (same) {
      setHookIndexAdd();
    } else {
      oldDestroy();
      setHookStates(setHookIndexAdd(), [callback, deps]);
      setTimeout(callback);
    }
  } else {
    // let destroy = setTimeout(callback)

    let destroy = callback();

    setHookStates(setHookIndexAdd(), [destroy, deps]);
  }
};

export function useLayoutEffect(callback, deps) {
  if (hookStates[hookIndex]) {
    const lastDeps = hookStates[hookIndex];
    const same = deps.every((item, index) => item === lastDeps[index]);
    if (same) {
      setHookIndexAdd();
    } else {
      setHookStates(setHookIndexAdd(), deps);
      queueMicrotask(callback);
    }
  } else {
    queueMicrotask(callback);
    setHookStates(setHookIndexAdd(), deps);
  }
}
