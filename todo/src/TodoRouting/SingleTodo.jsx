import React, { useCallback, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  getTodoByIdRenderCall,
  toggleTodo,
} from "../actions/todoActions";

import SingleTodoListing from "../todoComponents/SingleTodoListing";
import { MdDoneOutline, MdPendingActions } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

function SingleTodo() {
  let { id, name, description, status } = useParams();
  const dispatch = useDispatch();
  const getTodoById = useSelector((state) => state.getTodoById);
  const deletetodo = useSelector((state) => state.deleteTodo);
  const toggleTodoData = useSelector((state) => state.toggleTodoData);
  const { todo, loading, error, success } = getTodoById;

  const getTodoByIdData = useCallback(() => {
    dispatch(getTodoByIdRenderCall(id));
  }, [dispatch, id]);

  useEffect(() => {
    getTodoByIdData();
  }, [getTodoByIdData]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id, newStatus) => {
    const toggleTodoParams = { id, newStatus };
    dispatch(toggleTodo(toggleTodoParams, () => getTodoByIdData()));
  };

  return (
    <div className="single-todo-container">
      {loading ? (
        <h1>App is Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : success ? (
        <div className="single-page-todo">
          Your Complete Todo is here
          {/* <SingleTodoListing
          name={name}
          id={id}
          description={description}
          status={status}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        /> */}
          <div>{todo?.name}</div>
          <div>{todo?.description}</div>
          <div>
            <button onClick={() => handleToggle(id, !todo?.status)}>
              {todo?.status ? <MdDoneOutline /> : <MdPendingActions />}
            </button>
            <Link to="/">
              <button onClick={() => handleDelete(id)}>
                <AiFillDelete />
              </button>
            </Link>
          </div>
        </div>
      ) : null}

      <Link to="/">
        {" "}
        {loading ? (
          <h1>App is laoding</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : success ? (
          <button className="back-todo-btn">Back</button>
        ) : null}
      </Link>
    </div>
  );
}

export default SingleTodo;
