import React, { useState } from 'react'
import TodoItems from '../todoComponents/TodoItem'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios"

function SingleTodo() {
  let {id} = useParams();
  const [showData, setShowData] = useState("")
 
  
  useEffect(() => {
    async function getTodoById(id){
      const {data} = await axios.get(`http://localhost:8080/todo/${id}`)
      setShowData(data)
  
    }
    getTodoById(id)
  },[id])
  return (
    <div>Your Single Todo is here

 
        <TodoItems id={showData.id} name={showData.name} />

    </div>
  )
}

export default SingleTodo