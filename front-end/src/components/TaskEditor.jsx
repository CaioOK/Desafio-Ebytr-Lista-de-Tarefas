import React, { useState } from 'react';
import TASKS_DATA from '../tasksMock';

const TASK_EDITOR_CSS = {
  width: '70vw',
  height: '40vh',
  backgroundColor: 'white',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const FORM_CSS = {
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const TEXT_AREA_CSS = {
  width: '100%',
  height: '60%',
  minHeight: '30vh',
};

const SAVE_BTN_CSS = {
  marginTop: '5px',
  width: '9vw',
  height: '5vh',
  fontWeight: '700',
  backgroundColor: '#01A24C',
  borderRadius: '5px',
};

function TaskEditor(props) {
  const { currentTaskId } = props;
  const taskData = TASKS_DATA.find((task) => task.id === currentTaskId);
  const taskText = taskData ? taskData.task : '';
  const [textAreaValue, setTextAreaValue] = useState(taskText);

  function handleChangeText(event) {
    setTextAreaValue(event.target.value);
  };

  function handleClickSaveBtn() {
    const index = TASKS_DATA.findIndex((item) => item.id === currentTaskId);

    if (currentTaskId || currentTaskId === 0) TASKS_DATA[index].task = textAreaValue;

    else {
      const id = TASKS_DATA.length + 1;

      TASKS_DATA.push({ id, task: textAreaValue });
    }

    return props.setEditTask(false);
  }

  return(
    <section style={ TASK_EDITOR_CSS }>
      <form style={ FORM_CSS }>
        <textarea
          style={ TEXT_AREA_CSS }
          value={ textAreaValue }
          spellCheck={ false }
          onChange={ (e) => handleChangeText(e)}
        />
        <input
          type='button'
          value='Salvar'
          style={ SAVE_BTN_CSS }
          onClick={ handleClickSaveBtn }
        />
      </form>
    </section>
  )
}

export default TaskEditor;