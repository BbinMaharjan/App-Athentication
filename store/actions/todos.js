import axios from 'axios';

export const ADD_TODOS = 'ADD_TODOS';
export const GET_TODOS = 'GET_TODOS';

const BASE_URL = 'https://react-native-7346a-default-rtdb.firebaseio.com';

const addTodos = todo => ({
  type: ADD_TODOS,
  payload: todo,
});

const getTodos = todos => ({
  type: GET_TODOS,
  payload: todos,
});

// Actions

export const addTodosToFirebase = todo => async (dispatch, getState) => {
  const baseUrl = getState().configState.baseURL;
  const response = await axios.post(`${baseUrl}/todos.json`, todo);
  todo.id = response.data.name;
  dispatch(addTodos(todo));
};

export const getAllTodos = () => {
  return async dispatch => {
    const response = await axios.get(`${BASE_URL}/todos.json`);

    const allTodoIds = Object.keys(response.data);
    const todos = allTodoIds.map(id => {
      const todo = response.data[id];
      todo['id'] = id;
      return todo;
    });

    dispatch(getTodos(todos));
  };
};
