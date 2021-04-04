import {ADD_TODOS, GET_TODOS} from '../actions/todos';

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      const updatedTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: updatedTodos,
      };

    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};

export default todosReducer;
