import React, { useState } from 'react'

const AddTodo = (props) => {
    let headingStyle = {
        borderBottom: '4px solid black',
        width: 'fit-Content'
    }
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (title === "" || desc === "") {
            alert("Title or Description cannot be blank.")
        }else{
            props.addTodo(title, desc)
            setTitle("")
            setDesc("")

        }
    }
    return (
        <>
            <div className='container my-3'>
                <form onSubmit={submit}>
                    <h2 style={headingStyle}>Add a Task</h2>
                    <div className="form-group">
                        <h6><label htmlFor="title">Enter the Task Title</label></h6>
                        <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <h6><label htmlFor="desc">Enter the Description of Task</label></h6>
                        <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <hr />
        </>
    )
}

export default AddTodo
