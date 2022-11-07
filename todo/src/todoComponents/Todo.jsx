import React, { useEffect, useState } from "react";
import TodoItems from "./TodoItem";
import {  deleteTodos, getTodos, toggleTodoStatus } from "./Api";

import AddTodo from "./AddTodo";

const Todo = ({addNewTodo}) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getAllTodos();
	}, []);

//rendering all json server data
	const getAllTodos = () => {
		getTodos()
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {});
	}



	//handling the toggle feature 
	const handleToggle = (id, newStatus) => {
		toggleTodoStatus({ id, newStatus }).then(() => getAllTodos());
	};
	
	const handleDelete = (id) => {
		deleteTodos(id).then(() => {
			getAllTodos();
		});
	};

    const callbackAfterAddTodoSuccess = () => {
        getAllTodos();
    }

	return (
		<div>
			<AddTodo addNewTodo={addNewTodo} callbackAfterAddTodoSuccess = {callbackAfterAddTodoSuccess}/>
			<div className="todo-list">
				{data.map((t) => (
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
	);
};

export default Todo;
