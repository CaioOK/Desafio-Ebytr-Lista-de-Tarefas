import React, { useState } from 'react';
import Header from '../components/Header';
import TaskField from '../components/TaskField';
import TASKS_DATA from '../tasksMock';

const MAIN_CSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  height: 'auto%',
  minHeight: '100vh',
  backgroundColor: '#FEE35D',
};

const TASKS_LOBBY_CSS = {
  width: '80vw',
  height: 'auto',
  minHeight: '80vh',
  backgroundColor: '#152821',
  borderRadius: '3px',
  marginTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

function ToDoList() {
  const [editTask, setEditTask] = useState(false);

  return(
    <main style={ MAIN_CSS }>
      <Header />
      <section style={ TASKS_LOBBY_CSS }>
        {
          editTask
          ? <h1>Editando tarefa...</h1>
          : TASKS_DATA.map((task, index) =>
              <TaskField id={ index } text={ task.task } />)
        }
      </section>
    </main>
  )
}

export default ToDoList;
