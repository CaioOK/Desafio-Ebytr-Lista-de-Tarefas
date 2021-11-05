import React from 'react';
import Header from '../components/Header';
import TaskField from '../components/TaskField';
import TASKS_DATA from '../tasksMock';

const MAIN_CSS = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  height: 'auto',
  backgroundColor: '#FEE35D',
};

const TASKS_LOBBY_CSS = {
  width: '80vw',
  height: '100%',
  backgroundColor: '#152821',
  borderRadius: '3px',
  marginTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

function ToDoList() {

  return(
    <main style={ MAIN_CSS }>
      <Header />
      <section style={ TASKS_LOBBY_CSS }>
        {TASKS_DATA.map((task, index) => <TaskField id={ index } text={ task.task } />)}
      </section>
    </main>
  )
}

export default ToDoList;
