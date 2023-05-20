import React from "react";
import ReactDOM from "react-dom/client";
import { useState, setHookIndex,useCallback,useMemo,useEffect,useLayoutEffect,useRef,useContext,useReducer } from "./hooks";
const root = ReactDOM.createRoot(document.getElementById("root"));

// useState, setHookIndex,useCallback,useMemo的使用
let Child =  ({data,onButtonClick})=> {
  console.log('child render');
  return <div>
    <p>{data.count}</p>
    <button onClick={onButtonClick}>add</button>
  </div>
}
function memo(OldComponent){
  return class extends React.Component{
    shouldComponentUpdate(nextProps,nextState){
      return nextProps.data !== this.props.data
    }
    render(){
      return <OldComponent {...this.props}></OldComponent>
    }
  }

}

Child = memo(Child);
function App(){
  console.log('app render');
  const [count, setCount] = useState(0,MyRender);
  const [name, setName] = useState('loser',MyRender);
  let data = useMemo(()=>({count}),[count]);
  let addClick = useCallback(() => { setCount(count + 1) }, [count])


  useEffect(()=>{
    console.log('useEffect')
    console.log(count)
    document.title = `点击了${count}次`
    let timer = setInterval(()=>{
      console.log(count)
    }
    ,1000)
    return ()=>{
      console.log('clear')
      clearInterval(timer)
    }
  },[count])


  return (
    <div>
      <input value={name} onChange={e=>{setName(e.target.value)}}></input>
      <Child data={data} onButtonClick={addClick}></Child>
    </div>
  )
}



// useEffect,useLayoutEffect的使用
function Animation(){
  const red = React.useRef();
  const green = React.useRef();

  useLayoutEffect(() => {
    green.current.style.transform = 'translate(500px)'
    green.current.style.transition = 'all 500ms'
    console.log(green.current.style.width)
  })

  useEffect(() => {
    console.log(red.current.style.width)
    // red.current.style.transform = 'translate(500px)'
    // red.current.style.transition = 'all 500ms'
  })



  let style = { width: 100, height: 100 }

  return (<div>
    <div ref={red} style={{ ...style, backgroundColor: 'red' }}></div>
    <div ref={green} style={{ ...style, backgroundColor: 'green' }}></div>
  </div>)

}

// useContext的使用
let CounterContext = React.createContext();
function Counter(){
  let count = useContext(CounterContext);
  return <h1>{count}</h1>
}

function AppUseContext(){
  let [count,setCount] = useState(0,MyRender);
  return (
    <CounterContext.Provider value={count}>
      <button onClick={()=>{setCount(count+1)}}>add</button>
      <Counter></Counter>
    </CounterContext.Provider>
  )
}



// useReducer的使用
function countrReducer(state,action){
  switch(action.type){
    case 'add':
      return state+1;
    case 'minus':
      return state-1;
    default:
      return state;
  }
}

function AppUseReducer(){
  let [count,dispatch] = useReducer(countrReducer,0,MyRender);
  return (
    <div>


      <button onClick={()=>{dispatch({type:'add'})}}>add</button>
      <button onClick={()=>{dispatch({type:'minus'})}}>minus</button>
      <p>{count}</p>
    </div>
  )
}

function MyRender(){
  setHookIndex(0);
root.render(<Animation />);
}

MyRender();
