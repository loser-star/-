// 有限状态机

let Tokenslist = []
let currentToken;
let ast = /[0-9]/
const Number = 'number'
const Punctuator = 'Punctuator'
function start(value) {
  if(ast.test(value)){
    currentToken = {type:Number,value:''}
    return number(value)
  
  }

}
function emit(value) {
  currentToken = {type:'',value:''}
  Tokenslist.push(value)
}
function number(value) {
  if(ast.test(value)){
    currentToken.value += value
    return number
  }else if (value === '+') {
    emit(currentToken)
    emit({type:Punctuator,value:'+'})
    return start
  }

}
function token(tokens) {
  let state = start;
  for (const iterator of tokens) {
    state = state(iterator)
  }
  if (currentToken.value.length > 0) {
    emit(currentToken)
  }
}

token('10+20')
console.log(Tokenslist)