import React, { useEffect } from "react";
import TodoItems from "./TodoItem";
import { deleteTodos, toggleTodoStatus } from "./Api";
import { useDispatch, useSelector } from "react-redux";
import { listTodos } from "../actions/todoActions";

import AddTodo from "./AddTodo";
import { useCallback } from "react";
// TODO 2 : Clean up code
const Todo = () => {
  const todoData = useSelector((state) => state.todoList);
  const { todos, loading, error, success } = todoData;
  const dispatch = useDispatch();

  useEffect(() => {
    getAllTodos();
  }, []);

  const getAllTodos = useCallback(() => {
    dispatch(listTodos());
  }, []);

  //handling the toggle feature
  const handleToggle = (id, newStatus) => {
    toggleTodoStatus({ id, newStatus }).then(() => getAllTodos());
  };

  //handling delete feature
  const handleDelete = (id) => {
    deleteTodos(id).then(() => {
      getAllTodos();
    });
  };

  const callbackAfterAddTodoSuccess = useCallback(() => {
    getAllTodos();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>App is laoding</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : success ? (
        <div>
          <AddTodo callbackAfterAddTodoSuccess={callbackAfterAddTodoSuccess} />
          <div className="todo-list">
            {todos?.map((t) => (
              <ul key={t.id}>
                <TodoItems
                  className="todo-items"
                  handleDelete={handleDelete}
                  key={t.id}
                  name={t.name}
                  id={t.id}
                  status={t.status}
                  handleToggle={handleToggle}
                />
              </ul>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Todo;
