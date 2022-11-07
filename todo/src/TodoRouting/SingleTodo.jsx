import React from 'react'
import TodoItems from '../todoComponents/TodoItem'

function SingleTodo({id, name}) {
  return (
    <div>Your Single Todo is here
        <TodoItems id={id} name={name} />

    </div>
  )
}

export default SingleTodo