import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ToDoList from './pages/ToDoList';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <ToDoList /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
