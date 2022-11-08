import React, { useState } from 'react'
import TodoItems from '../todoComponents/TodoItem'
import { useParams ,Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from 'react';
import axios from "axios"

function SingleTodo() {
  let {id} = useParams();
  const [showData, setShowData] = useState("")
  const getTodoById = useSelector((state) => state.getTodoById);
  const dispatch = useDispatch();
 
  useEffect(() => {

    dispatch(getTodoById())
      // setShowData(data)
    }
    // getTodoById(id)

  ,[id])
  return (
    <div className='single-todo-container'>
    <div className='single-page-todo'>Your Complete Todo is here

        <TodoItems name={showData.name} description={showData.description} />


    </div>
   <Link to="/"> <button className='back-todo-btn'>Back</button></Link>
    </div>
    
    
  )
}

export default SingleTodo