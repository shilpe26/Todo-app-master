import React, { useCallback, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdDoneOutline, MdPendingActions } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	deleteTodo,
	getTodoByIdRenderCall,
	toggleTodo,
} from "../actions/todoActions";

function SingleTodoListing({ id }) {
	const dispatch = useDispatch();
	const getTodoById = useSelector((state) => state.getTodoById);
	const { todo, loading, error, success } = getTodoById;

	const getTodoByIdData = useCallback(() => {
		dispatch(getTodoByIdRenderCall(id));
	}, [dispatch, id]);

	useEffect(() => {
		getTodoByIdData();
	}, []);
	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	const handleToggle = (id, newStatus) => {
		const toggleTodoParams = { id, newStatus };
		dispatch(toggleTodo(toggleTodoParams, () => getTodoByIdData()));
	};
	return (
		<div>
			{loading ? (
				<h1>App is Loading</h1>
			) : error ? (
				<h1>{error}</h1>
			) : success ? (
				// Single todo lsiting page
				<div className="single-page-todo">
					Your Complete Todo is here
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
		</div>
	);
}

export default SingleTodoListing;
