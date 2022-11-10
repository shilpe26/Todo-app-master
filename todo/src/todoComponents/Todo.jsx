import React, { useEffect } from "react";
import TodoItems from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, listTodos, toggleTodo } from "../actions/todoActions";
import AddTodo from "./AddTodo";
import { useCallback } from "react";

const Todo = () => {
  const todoData = useSelector((state) => state.todoList);
  const { todos, loading, error, success } = todoData;
  const dispatch = useDispatch();

  const getAllTodos = useCallback(() => {
    dispatch(listTodos());
  }, [dispatch]);

  useEffect(() => {
    getAllTodos();
  }, [getAllTodos]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id, () => getAllTodos()));
  };

  const handleToggle = (id, newStatus) => {
    const toggleTodoParams = { id, newStatus };
    dispatch(toggleTodo(toggleTodoParams, () => getAllTodos()));
  };

  const callbackAfterAddTodoSuccess = useCallback(() => {
    getAllTodos();
  }, [getAllTodos]);

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
            <h4>In Progress Todos</h4>
            {todos
              ?.filter((t) => !t.status)
              ?.map((t) => {
                return (
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
                );
              })}

            <h4>Completed Tasks</h4>

            {todos
              ?.filter((t) => t.status)
              ?.map((t) => {
                return (
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
                );
              })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Todo;
