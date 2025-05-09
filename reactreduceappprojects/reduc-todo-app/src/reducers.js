const intialState = {
  todos: [],
};
function rootReducer(state = intialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
}

export default rootReducer;
