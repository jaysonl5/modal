
import {React, useState} from 'react';

import './App.css';

const ModalButton = ({modals, setModals, setIsLoading}) => {
  const randTop = Math.floor(Math.random() * (window.innerHeight-400));
  const randLeft = Math.floor(Math.random() * (window.innerWidth-400));

  async function handleClick (e) {
    e.preventDefault();
    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    setIsLoading(true);
    await delay(2000);

    if(modals.length > 10){
      modals.shift();
    }

    setModals([...modals,  {
      id:Math.floor(Math.random() * 1000),
      rTop: randTop,
      rLeft: randLeft
    }])
    setIsLoading(false);
    console.log(modals)
  }

  return(
    <>
      <button className='modal-button'  onClick={handleClick}>Make a modal</button>
    </>
  )

}

const Modal = ({id, setIsLoading, modals, setModals, rTop, rLeft}) =>{
  
  return (

    <div className='modal-wrapper'>
      <div className='Modal' style={{top: rTop,left: rLeft}}
      >
        
        <h1 className='ModalTitle'>
          <img src="djkahlid.png" style={{width: "300px"}}/>
          Anotha one!</h1>
        <p>Click Create a Modal to make another modal!</p>
        <button className='close-modal' onClick={() => setModals(modals.filter(item => item.id !== id))}>Close modal</button>
        <ModalButton setIsLoading={setIsLoading}  setModals={setModals} modals={modals} />
        
      </div>
    </div>    
  )
}

function App() {

  const [modals, setModals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return(
  <div className='container'>
    {isLoading ? <div className="dataLoading">
      <div className="spinner"></div>DATA LOADING</div> : ''}
    <h1 className='main-title'>Modal Generator</h1>
    <p>Click the button below to create modals on modals!</p>
    <ModalButton setIsLoading={setIsLoading} setModals={setModals} modals={modals}  />
      {(modals.length > 0) ?  
        modals.map(modal => {
          return(
          <div key={modal.id} >
          <Modal  setIsLoading={setIsLoading} modals={modals} setModals={setModals} rTop={modal.rTop} rLeft={modal.rLeft} id={modal.id} index={modal.index} />
          </div>)
        })
      : ''}
  </div>
  )


}

export default App;
