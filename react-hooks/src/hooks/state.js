export let hookStates = [];
export let hookIndex = 0;

export const setHookIndex = (value) => {
  hookIndex = value
  return hookIndex
}

export const setHookIndexAdd = () => {
  return hookIndex++
}

export const setHookStates = (index,value)=>{
  hookStates[index] = value
}