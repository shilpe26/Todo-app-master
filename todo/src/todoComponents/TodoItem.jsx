import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdPendingActions, MdDoneOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function TodoItems({
  name,
  id,
  status,
  handleDelete,
  handleToggle,
  description,
}) {
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
export default TodoItems;
