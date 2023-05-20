import {hookStates,hookIndex,setHookStates,setHookIndexAdd} from './state'

export function useReducer(reducer, initialState, render) {
   hookStates[hookIndex] = hookStates[hookIndex] || initialState
  let currentIndex = hookIndex;
  function dispatch(action) {
    hookStates[currentIndex] = reducer
      ? reducer(hookStates[currentIndex], action)
      : action;
    render();
  }

  return [hookStates[setHookIndexAdd()], dispatch];
}