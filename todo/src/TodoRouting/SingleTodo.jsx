import React, { useState } from 'react'
import TodoItems from '../todoComponents/TodoItem'
import axios from "axios"


function SingleTodo({id, name}) {
  // const [showData, setShowData] = useState("")
  // const getTodos = () => {
  //   return axios.get(`http://localhost:8080/todo/${id}`);
  // }
  return (
    <div>Your Single Todo is here

 
        <TodoItems id={id} name={name} />

    </div>
  )
}

export default SingleTodo