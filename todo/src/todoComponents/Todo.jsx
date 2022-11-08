import React, { useEffect, useState } from "react";
import TodoItems from "./TodoItem";
import {  deleteTodos, getTodos, toggleTodoStatus } from "./Api";
import {useDispatch,useSelector} from 'react-redux'
import {listTodos} from "../actions/todoActions";

import AddTodo from "./AddTodo";

const Todo = ({addNewTodo}) => {
	const todoData = useSelector((state)=>state.todoList)
	const {todos,loading,error,description} = todoData
	const dispatch = useDispatch();

	useEffect(() => {
		getAllTodos();
	}, []);

	const getAllTodos = () => {
		// getTodos()
		// 	.then((res) => {
		// 		setData(res.data);
		// 	})
		// 	.catch((err) => {});
		dispatch(listTodos())
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
	);
};

export default Todo;
