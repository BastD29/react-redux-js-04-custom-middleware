// RECALL: middleware runs after an action is dispatched and before that action is passed along to the reducer

const myMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);

  // You can perform additional tasks or modifications here
  if (action.type === "INCREMENT") {
    console.log("Incrementing...");
    action.payload += 1;
  }

  if (action.type === "DECREMENT") {
    console.log("Decrementing...");
    action.payload += 2;
  }

  // Pass the action to the next middleware or the reducer
  const result = next(action);

  // Additional tasks after the action is dispatched
  console.log("Next state:", store.getState());

  return result;
};

export default myMiddleware;
