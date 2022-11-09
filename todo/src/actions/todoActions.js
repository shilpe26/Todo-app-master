import {
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_FAIL,
  TODO_CREATE_REQUEST,
  TODO_CREATE_SUCCESS,
  TODO_CREATE_FAIL,
  TODO_BY_ID_REQUEST,
  TODO_BY_ID_SUCCESS,
  TODO_BY_ID_FAIL,
  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  TODO_DELETE_FAIL,
  TODO_TOGGLE_REQUEST,
  TODO_TOGGLE_SUCCESS,
  TODO_TOGGLE_FAIL,
} from "../constants/todoConstants";
import {
  addTodo,
  getTodos,
  getTodoByIdApiCall,
  deleteTodos,
  toggleTodoStatus,
} from "../todoComponents/Api";

export const listTodos = () => async (dispatch) => {
  try {
    dispatch({ type: TODO_LIST_REQUEST });

    const { data } = await getTodos();

    dispatch({
      type: TODO_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TODO_LIST_FAIL,
      payload: "Something went wrong",
    });
  }
};

export const createTodos = (todo, callback) => async (dispatch) => {
  try {
    dispatch({
      type: TODO_CREATE_REQUEST,
    });
    const { data } = await addTodo(todo);
    callback();

    dispatch({
      type: TODO_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TODO_CREATE_FAIL,
      payload: "Something went wrong",
    });
  }
};

export const getTodoByIdRenderCall = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TODO_BY_ID_REQUEST,
    });
    const { data } = await getTodoByIdApiCall(id);

    dispatch({
      type: TODO_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TODO_BY_ID_FAIL,
      payload: "Something went wrong",
    });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TODO_DELETE_REQUEST,
    });

    await deleteTodos(id);

    dispatch({
      type: TODO_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: TODO_DELETE_FAIL,
      payload: "Something went wrong",
    });
  }
};

export const toggleTodo = (params, callback) => async (dispatch) => {
  try {
    dispatch({
      type: TODO_TOGGLE_REQUEST,
    });

    const { data } = await toggleTodoStatus(params);
    callback();
    dispatch({
      type: TODO_TOGGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TODO_TOGGLE_FAIL,
      payload: "Something went wrong",
    });
  }
};
