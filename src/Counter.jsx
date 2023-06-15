// import store from "./store";

// console.log(store.getState()); // Initial state: { counter: 0 }

// store.dispatch({ type: "INCREMENT", payload: 5 });
// // Dispatching: { type: 'INCREMENT', payload: 5 }
// // Incrementing...
// // Next state: { counter: 5 }

// store.dispatch({ type: "DECREMENT", payload: 3 });
// // Dispatching: { type: 'DECREMENT', payload: 3 }
// // Next state: { counter: 2 }

// console.log(store.getState());

import { connect } from "react-redux";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch({ type: "INCREMENT", payload: value }),
    decrement: (value) => dispatch({ type: "DECREMENT", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
