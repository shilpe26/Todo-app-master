import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TODO_CREATE_RESET } from "../constants/todoConstants";
import { createTodos } from "../actions/todoActions";

const initTodoState = {
  title: "",
  description: "",
  status: false,
};

function AddTodo({ callbackAfterAddTodoSuccess }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: TODO_CREATE_RESET });
  }, [dispatch]);

  const [todo, setTodo] = useState({
    ...initTodoState,
  });
  const [errors, setErrors] = useState({});

  const addTodoFormRules = (data) => {
    const error = {};
    const { title, description } = data;
    if (!title) {
      error.title = "Title is required";
    }
    if (!description) {
      error.description = "Description is required";
    }
    if (title.length < 3) {
      error.title = "Title should be 3 characters long!";
    }
    if (description.length < 10) {
      error.description = "Discription should be 10 characters long!";
    }
    return error;
  };

  const handleTodoFormSubmit = (e) => {
    e.preventDefault();
    const error = addTodoFormRules(todo);
    if (Object.keys(error).length > 0 || Object.keys(errors).length > 0) {
      console.log(error);
      setErrors({ ...error });
      return;
    }
    const { title, description, status } = todo;
    const addTodoParams = { name: title, description, status };

    dispatch(createTodos(addTodoParams, callbackAfterAddTodoSuccess));

    setTodo({ ...initTodoState });
  };

  const handleTodoFormChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const error = { ...errors };
    delete error[fieldName];
    setErrors(error);
    setTodo({ ...todo, [fieldName]: fieldValue });
  };

  return (
    <form className="add-todo" onSubmit={handleTodoFormSubmit}>
      <input
        placeholder="Write todo..."
        type="text"
        name="title"
        value={todo.title}
        onChange={handleTodoFormChange}
      />
      {errors["title"] && (
        <span className="title-err-handler">{errors["title"]}</span>
      )}
      <div className="textarea-field">
        <textarea
          value={todo.description}
          name="description"
          onChange={handleTodoFormChange}
          placeholder="write your complete todo"
        ></textarea>
        {errors["description"] && (
          <span className="title-err-handler">{errors["description"]}</span>
        )}
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
}

export default AddTodo;
