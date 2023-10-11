import React,{Component} from 'react';
import { createStore } from "./redux";
const initialState = { number: 0 };
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
}
  let { store, Provider, connect } = createStore(reducer, initialState);
function Counter(props) {
  return (
    <>
      <p>{props.number}</p>
      <button onClick={props.add}>+</button>
    </>
  );
}
let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({
  add() {
    dispatch({ type: INCREMENT });
  },
  minus() {
    dispatch({ type: DECREMENT });
  }
});
let ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    );
  }
}