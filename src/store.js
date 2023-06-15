import { applyMiddleware, legacy_createStore as createStore } from "redux";
import myMiddleware from "./middleware";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer, applyMiddleware(myMiddleware));

export default store;
