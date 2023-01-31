
import Header from './MyComponent/Header';
import ToDos from './MyComponent/ToDos';
import Footer from './MyComponent/Footer';
import AddTodo from './MyComponent/AddTodo';
import About from './MyComponent/About';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  
  let initTodo;
  if (localStorage.getItem("tasks") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("tasks"));
  }

  const onDelete = (todos) => {
    setTasks(tasks.filter((e) => {
      return e !== todos;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (tasks.length === 0) {
      sno = 1;
    }
    else {
      sno = tasks[tasks.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTasks([...tasks, myTodo])
   
  }
  const [tasks, setTasks] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])
  return (
    <BrowserRouter>
      <Header title="My Todos List" searchBar={true}/>
      <Routes>
        <Route exact path='/' element={[<AddTodo addTodo={addTodo} />, <ToDos tasks={tasks} onDelete={onDelete} />]} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


