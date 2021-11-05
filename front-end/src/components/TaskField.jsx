import React, { useState } from "react";

const TASK_FIELD_CSS = {
  width: '80%',
  height: '80px',
  backgroundColor: 'white',
  marginTop: '8px',
  borderRadius: '5px',
  display: 'flex',
  flexFlow: 'row',
  justifyContent: 'space-evenly ',
  alignItems: 'center',
};

const TEXT_CSS = {
  width: '400px',
  height: '40px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'center',
};

const EDIT_BTN_CSS = {
  backgroundColor: 'inherit',
  fontSize: '30px',
  border: 0,
  opacity: 0.5,
};

function TaskField(props) {
  const [taskFieldCSS, setTaskFieldCSS] = useState(TASK_FIELD_CSS);
  const [textCSS, setTextCss] = useState(TEXT_CSS);
  const [editBtnCSS, setEditBtnCSS] = useState(EDIT_BTN_CSS);

  function handleHoverField() {
    setTaskFieldCSS({ ...TASK_FIELD_CSS, height: '200px', transition: '500ms' });
    setTextCss({ ...TEXT_CSS, overflow: 'unset', height: 'auto', transition: '500ms' });
  }

  function handleUnHoverField() {
    setTaskFieldCSS({ ...TASK_FIELD_CSS, transition: '500ms' });
    setTextCss({ ...TEXT_CSS, overflow: 'hidden', transition: '500ms' });
  }

  function handleHoverEditBtn() {
    setEditBtnCSS({ ...EDIT_BTN_CSS, opacity: 1 })
  };

  function handleUnHoverEditBtn() {
    setEditBtnCSS({ ...EDIT_BTN_CSS, opacity: 0.5 })
  };

  function handleClickEditBtn() {
    props.setCurrentTaskId(props.taskId);
    props.setEditTask(true);
  }

  return(
    <div
      style={ taskFieldCSS }
      onMouseEnter={ handleHoverField }
      onMouseLeave={ handleUnHoverField }
    >
      <p
        style={ textCSS }
      >
        { props.text }
      </p>
      <button
        type='button'
        style={ editBtnCSS }
        onMouseEnter={ handleHoverEditBtn }
        onMouseLeave={ handleUnHoverEditBtn }
        onClick={ handleClickEditBtn }
      >
        📝
      </button>
    </div>
  );
}

export default TaskField;