import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  todoListReducer,
  createTodoReducer,
  getTodoByIdReducer,
} from "./reducers/todoReducers";

const reducer = combineReducers({
  todoList: todoListReducer,
  createTodoData: createTodoReducer,
  getTodoById: getTodoByIdReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
