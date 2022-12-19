import React from 'react'

const ToDoItem = (props) => {
  return (
    <div>
      <h4>{props.todos.title}</h4>
      <p>{props.todos.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todos)}}>Delete</button>
    </div>
  )
}

export default ToDoItem
