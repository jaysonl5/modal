
export default function Modal (props) {
    return(    
      <div className='modal-overlay'>
        <div className='modal-wrapper'>
          <div className='Modal'>
            <button className='modal-close-button' onClick={() => props.setShowModal(!props.showModal)}>x</button>
            
            <h3 className='modal-title'>Modal Window.</h3>
            <div>
              <button onClick={() => props.setStatus('Accepted')}>Accept</button>
              <button onClick={() => props.setStatus('Decline')}>Decline</button>
            </div>
          </div>
        </div>
      </div>
    )
  
  }