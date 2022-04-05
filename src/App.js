
import {React, useEffect, useState} from 'react';

import './App.css';

const ModalButton = ({z, modals, setModals}) => {
  const randTop = Math.floor(Math.random() * (window.innerHeight-200));
  const randLeft = Math.floor(Math.random() * (window.innerWidth-300));

  function handleClick (e) {
    e.preventDefault();
    
    setModals([...modals,  {
      id:modals.length+1,
      index: z+10,
      rTop: randTop,
      rLeft: randLeft
    }])

    console.log(modals)
  }

  return(
    <>
      <button className='ModalButton'  onClick={handleClick}>Modal</button>
    </>
  )

}

const Modal = ({id, index, z, modals, setModals, rTop, rLeft}) =>{
  
  return (

    <div className='modal-wrapper' style={{
      zIndex: index
    }}>
      <div className='Modal' style={{
        zIndex: index+50,
        top: rTop,
        left: rLeft,     
      }}
      >
        <button className='close-modal' onClick={() => setModals(modals.filter(item => item.id !== id))}>X</button>
        <h1 className='ModalTitle'>Modal!</h1>
        <p>This is a new modal window. You did it!</p>
        <ModalButton z={z} setModals={setModals} modals={modals} />
      </div>
    </div>    
  )
}

function App() {

  const [z, setZ] = useState(10);
  const [modals, setModals] = useState([])

  return(
  <div className='container'>
    <h1 className='main-title'>Modal Bonanza</h1>
    <p>Click the button to start making infinite modals!</p>
    <ModalButton z={z} setModals={setModals} modals={modals}  />
      {(modals.length > 0) ?  
        modals.map(modal => {
          return(
          <div key={modal.id} >
          <Modal z={z} modals={modals} setModals={setModals} rTop={modal.rTop} rLeft={modal.rLeft} id={modal.id} index={modal.index} />
          </div>)
        })
      : ''}
  </div>
  )


}

export default App;
