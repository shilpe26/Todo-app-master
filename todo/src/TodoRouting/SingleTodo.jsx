import React, { useCallback, useEffect } from "react";
import TodoItems from "../todoComponents/TodoItem";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTodoByIdRenderCall } from "../actions/todoActions";

function SingleTodo() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const getTodoById = useSelector((state) => state.getTodoById);

  const { todo, loading, error, success } = getTodoById;

  // TODO : Learn and implement useCallback hook
  useEffect(() => {
    getTodoByIdData();
  }, []);

  // const getTodoByIdData = () => {
  //   dispatch(getTodoByIdRenderCall(id));
  // };

  const getTodoByIdData = useCallback(() => {
    dispatch(getTodoByIdRenderCall(id));
  }, []);
  return (
    <div className="single-todo-container">
      {loading ? (
        <h1>App is Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : success ? (
        <div className="single-page-todo">
          Your Complete Todo is here
          <TodoItems name={todo?.name} description={todo?.description} />
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
