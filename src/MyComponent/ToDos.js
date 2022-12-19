import React from 'react'
import ToDoItem from "./ToDoItem";

const ToDos = (props) => {
  let headingStyle = {
    borderBottom: '4px solid black',
    width: 'fit-Content'
  }
  return (
    <div className='container'>
      <h2 style={headingStyle}>To do list</h2>
      {props.tasks.length === 0 ? <h3>No Tasks to Display</h3> :
        props.tasks.map((todos) => {
          return <>
           <ToDoItem todos={todos} key={todos.sno} onDelete={props.onDelete} /><hr/>
           </>
        })
      }

    </div>
  )
}

export default ToDos
