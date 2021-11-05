import React, { useState } from 'react';
import Header from '../components/Header';
import TaskField from '../components/TaskField';
import TaskEditor from '../components/TaskEditor';
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
  const [editOrCreateTask, setEditOrCreateTask] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const [tasksData, setTasksData] = useState(TASKS_DATA);

  return(
    <main style={ MAIN_CSS }>
      <Header
        setCreateTask={ setEditOrCreateTask }
        setCurrentTaskId={ setCurrentTaskId }
      />

      <section style={ TASKS_LOBBY_CSS }>
        {
          editOrCreateTask
          ? <TaskEditor
              currentTaskId={ currentTaskId }
              tasksData= { tasksData }
              setCurrentTaskId={ setCurrentTaskId }
              setEditTask={ setEditOrCreateTask }
              setTasksData={ setTasksData }
            />
          : tasksData.map((task) =>
              <TaskField
                key={ task.id }
                taskId={ task.id }
                tasksData= { tasksData }
                text={ task.task }
                setCurrentTaskId={ setCurrentTaskId }
                setEditTask={ setEditOrCreateTask }
                setTasksData={ setTasksData }
              />)
        }
      </section>
    </main>
  )
}

export default ToDoList;
