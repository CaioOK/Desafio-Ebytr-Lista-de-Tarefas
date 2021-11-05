import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ToDoList from './pages/ToDoList';
import Test from './pages/Test';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/todolist' element={ <ToDoList /> } />
        <Route path='/' element={ <Test /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
