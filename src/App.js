
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

    if(modals.length === 10){
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

const CloseButton = ({id, setIsLoading, setModals, modals}) => {

  async function handleClick(e){
    e.preventDefault();
    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    setIsLoading(true);
    await delay(2000);
    setModals(modals.filter(item => item.id !== id))
    setIsLoading(false);
  }

  return(
    <>
      <button className='close-modal' onClick={handleClick}>Close modal</button>  
    </>
  )  
}

const Modal = ({id, setIsLoading, modals, setModals, rTop, rLeft}) =>{
  
  return (
    <div className='modal-wrapper'>
      <div className='Modal' style={{top: rTop,left: rLeft}}>   
        <img alt="DJ Kahled!" src="djkahled.png" style={{width: "300px"}}/>     
        <h1 className='ModalTitle'>Anotha one!</h1>
        <p>Click Create a Modal to make another modal!</p>
        <CloseButton id={id} setIsLoading={setIsLoading}  setModals={setModals} modals={modals} />
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
    {isLoading ? <div className="data-loading">
      <div className="spinner"></div>DATA LOADING</div> : ''}
    <h1 className='main-title'>Modal Generator</h1>
    <p>Click the button below to create modals on modals!</p>
    <ModalButton setIsLoading={setIsLoading} setModals={setModals} modals={modals}  />
      {(modals.length > 0) ?  
        modals.map(modal => {
          return(
          <div key={modal.id} >
          <Modal  setIsLoading={setIsLoading} 
                  modals={modals} 
                  setModals={setModals} 
                  rTop={modal.rTop} 
                  rLeft={modal.rLeft} 
                  id={modal.id} 
                  index={modal.index} />
          </div>)
        })
      : ''}
  </div>
  )


}

export default App;
