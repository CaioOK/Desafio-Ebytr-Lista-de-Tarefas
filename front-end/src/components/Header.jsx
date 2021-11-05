import React, { useState } from 'react';

const HEADER_CSS = {
  width: '80vw',
  height: '15vh',
  backgroundColor: '#E3DC95',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const SECTION_CSS = {
  marginLeft: '10px',
  display: 'flex',
  flexDirection: 'column',
  width: '50%'
}

const LEFT_FORM_CSS = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  height: '100%',
}

const RIGHT_FORM_CSS = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
};

const CREATE_TASKS_BTN = {
  width: '9vw',
  height: '5vh',
  fontWeight: '700',
  backgroundColor: '#01A24C',
  borderRadius: '5px',
};

const SHOW_TASKS_BTN = {
  width: '9vw',
  height: '5vh',
  fontWeight: '700',
  backgroundColor: '#43ADEF',
  borderRadius: '5px',
};

const SEARCH_BAR_CSS = {
  width: '79%',
  height: '20px',
}

const SEARCH_CONTAINER_CSS = {
  width: '100%',
  height: 'auto',
}

const SEARCH_BTN_CSS = {
  height: '100%',
  marginLeft: '5px',
}

function Header(props) {
  const [statusCheckBtn1, setStatusCheckBtn1] = useState(false);
  const [statusCheckBtn2, setStatusCheckBtn2] = useState(false);
  const [statusCheckBtn3, setStatusCheckBtn3] = useState(false);

  const handleClick = (event, setBtnStatus) => {
    setStatusCheckBtn1(false);
    setStatusCheckBtn2(false);
    setStatusCheckBtn3(false);

    const status = event.target.checked;

    return setBtnStatus(status);
  }

  return (
    <header style={ HEADER_CSS }>
      <section style={ SECTION_CSS }>
        <span style={ { marginLeft: '5px' } } >Ordenar por:</span>

        <form style={ LEFT_FORM_CSS  }>
          <label htmlFor='order-by-ordem-alfabetica'>
            <input
              type='checkbox'
              checked={ statusCheckBtn1 }
              id='order-by-ordem-alfabetica'
              name='ordem-alfabetica'
              onChange={ (e) => handleClick(e, setStatusCheckBtn1)}
            />
              Ordem alfabética
          </label>

          <label htmlFor='order-by-data'>
            <input
              type='checkbox'
              checked={ statusCheckBtn2 }
              id='order-by-data'
              name='data'
              onChange={ (e) => handleClick(e, setStatusCheckBtn2)}
            />
              Data
          </label>

          <label htmlFor='order-by-status'>
            <input
              type='checkbox'
              checked={ statusCheckBtn3 }
              id='order-by-status'
              name='status'
              onChange={ (e) => handleClick(e, setStatusCheckBtn3)}
            />
              Status
          </label>
        </form>
      </section>
      <form style={ RIGHT_FORM_CSS }>
        <div>
        <button
          type='button'
          style={ CREATE_TASKS_BTN }
          onClick={ () => props.setCreateTask(true) }
        >
          Criar Tarefa
        </button>
        <button
          type='button'
          style={ SHOW_TASKS_BTN }
          onClick={ () => { props.setCreateTask(false); props.setCurrentTaskId(null); } }
        >
          Listar Tarefas
        </button>
        </div>
        <div style={ SEARCH_CONTAINER_CSS }>
        <input type='text' placeholder='Pesquisar' style={ SEARCH_BAR_CSS } />
        <button type='button' style={ SEARCH_BTN_CSS } >🔍</button>
        </div>
      </form>
    </header>
  );
}

export default Header;
