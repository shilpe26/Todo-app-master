import React, { useCallback, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTodoByIdRenderCall } from "../actions/todoActions";
import SingleTodoListing from "../todoComponents/SingleTodoContainer";

function SingleTodo() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const getTodoById = useSelector((state) => state.getTodoById);
  const { loading, error, success } = getTodoById;

  const getTodoByIdData = useCallback(() => {
    dispatch(getTodoByIdRenderCall(id));
  }, [dispatch, id]);

  useEffect(() => {
    getTodoByIdData();
  }, [getTodoByIdData]);

  return (
    <div className="single-todo-container">
      <SingleTodoListing id={id} />

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
