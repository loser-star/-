
// useState实现
import {hookStates,hookIndex,setHookStates,setHookIndexAdd} from './state'
export const useState = (initialState,render) => {
  hookStates[hookIndex] = hookStates[hookIndex] || initialState;
  const currentIndex = hookIndex;
  const setState = (newState) => {
    // hookStates[currentIndex] = newState;

    if(typeof newState === 'function'){
      setHookStates(currentIndex,newState(hookStates[currentIndex]))
    }else{
      setHookStates(currentIndex,newState)
    }
    
    render();
  };
  // return [hookStates[hookIndex++], setState];
  return [hookStates[setHookIndexAdd()], setState];
}


