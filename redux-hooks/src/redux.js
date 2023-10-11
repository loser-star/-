// import React from 'react';

// const Context = React.createContext();

// export function createStore(initialState, reducer) {
//   let store = {}
//   const Provider = props => {
//     const [state, dispatch] = React.useReducer(reducer, initialState);
//     store.getState = () => state;
//     if(store.dispatch){
//       store.dispatch = dispatch;
//     }
//     return <Context.Provider value={store}>{props.children}</Context.Provider>;
//   };

//   function connect(mapStateToProps, mapDispatchToProps) {
//     return function (Component) {
//       return function (props) {
//         if (store.getState) state = mapStateToProps(store.getState());
//         actions = mapDispatchToProps(store.dispatch);
//         return <Component {...props} {...stateToProps} {...dispatchToProps} />;
//       };
//     };
//   }


//   return { store, connect, Provider };
// }


// // export function connect(mapStateToProps, mapDispatchToProps) {
// //   return function (Component) {
// //     return function (props) {
// //       const [state, dispatch] = React.useContext(Context);
// //       const stateToProps = mapStateToProps(state);
// //       const dispatchToProps = mapDispatchToProps(dispatch);
// //       return <Component {...props} {...stateToProps} {...dispatchToProps} />;
// //     };
// //   };
// // }



import React from "react";
const Context = React.createContext();
export function createStore(reducer, initialState) {
  let store = {};
  const Provider = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    store.getState = () => {
      return state;
    };
    store.dispatch = dispatch;
    return (
      <Context.Provider value={state}>
        {React.cloneElement(props.children)}
      </Context.Provider>
    );
  };

  function connect(mapStatetoProps,mapDispatchToProps) {
    return function(Component) {
      let state = initialState;
      let actions ={};
      return props => {
        if (store.getState) state = mapStatetoProps(store.getState());
        actions = mapDispatchToProps(store.dispatch);
        return <Component {...state} {...props} dispatch={store.dispatch} {...actions}/>;
      };
    };
  }
  return { store, connect, Provider };
}