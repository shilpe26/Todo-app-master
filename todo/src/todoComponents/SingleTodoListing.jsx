import React, { useCallback, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdPendingActions, MdDoneOutline } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import {
//   deleteTodo,
//   getTodoByIdRenderCall,
//   toggleTodo,
// } from "../actions/todoActions";

function SingleTodoListing({
  id,
  name,
  description,
  status,
  handleDelete,
  handleToggle,
}) {
  //   const dispatch = useDispatch();
  //   const getTodoById = useSelector((state) => state.getTodoById);
  //   const { todo, loading, error, success } = getTodoById;

  //   const getTodoByIdData = useCallback(() => {
  //     dispatch(getTodoByIdRenderCall(id));
  //   }, [dispatch, id]);

  //   useEffect(() => {
  //     getTodoByIdData();
  //   }, [getTodoByIdData]);

  //   const handleDelete = (id) => {
  //     dispatch(deleteTodo(id));
  //   };

  //   const handleToggle = (id, newStatus) => {
  //     const toggleTodoParams = { id, newStatus };
  //     dispatch(toggleTodo(toggleTodoParams, () => getTodoByIdData()));
  //   };

  return (
    <div>
      <h2 className="todo-id">
        {id}
        <Link to={`/todo/${id}`}>
          <div className="todo-name">
            {name}
            <div className="todo-desc">{description}</div>
          </div>
        </Link>
      </h2>
      <button onClick={() => handleToggle(id, !status)}>
        {status ? <MdDoneOutline /> : <MdPendingActions />}
      </button>
      <button onClick={() => handleDelete(id)}>
        <AiFillDelete />
      </button>
    </div>
  );
}
export default SingleTodoListing;
