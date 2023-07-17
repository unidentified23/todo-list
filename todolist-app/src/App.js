// src/App.js

import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'


import { useState } from "react";
import { v4 as uuid } from 'uuid';

export default function App() {

  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = ( text, priority) => {

    const newTodo = {
      id: uuid(),
      text:text,
      priority:priority,
    };
    setTodos([...todos, newTodo]);
  
  }; 

 

const handledelete = (Id)=>{
  const updatedItems = todos.filter((iterm) => iterm.Id !== Id);
  setTodos(updatedItems);
  console.log(updatedItems)

}

const handleUpdate = (Id) =>{ 
    const task = todos.find((todo) => todo.id === Id);
    if (task) {
      searchTerm(task.text, task.priority);
    }
  };
   
  return (
    
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login />}   />
     <Route path="/home"  element={<Home  add={handleSubmit}  listItems={todos}  delete= {handledelete} update={handleUpdate}  />} />
     <Route path="/Registration" element={<Registration />} />  
    </Routes>
    </BrowserRouter>

   
  )
}




