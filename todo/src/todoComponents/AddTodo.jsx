import React, { useState } from "react";
import { addTodo } from "./Api";


function AddTodo({callbackAfterAddTodoSuccess}) {
	const [todo, setTodo] = useState({
		title:"",
		description:"",
		status:false
	});

	const handleTodoFormSubmit = (e) => {
		e.preventDefault()
		
		const {title,description,status} = todo;
		const addTodoParams = {name:title,description,status}
		//1) TODO : Check Form Validation
		//2) TODO : Only proceed if form is validated
		if(title !== "" && description !== ""){
			addTodo(addTodoParams)	
			.then((data)=> { 
				callbackAfterAddTodoSuccess()
				console.log(data)
			})
			.catch((error) => console.log("Issue while adding todo",error))
		}else{
			console.log("Fill the fields")
		}
		setTodo("");
	}

	const handleTodoFormChange = (e) => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;
		setTodo({...todo,[fieldName]:fieldValue})
	}

	return (
		<form className="add-todo" onSubmit={handleTodoFormSubmit}>
			<input
				placeholder="Write todo..."
				type="text"
				name="title"
				value={todo.title}
				onChange={handleTodoFormChange}
			/>
			<div className="textarea-field">
			<textarea value={todo.description} name="description" onChange={handleTodoFormChange} placeholder="write your complete todo">
			
			</textarea>
			</div>

			<button className="add-btn">
				Add
			</button>
			
		</form>
	);
}

export default AddTodo;
