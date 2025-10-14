import React from 'react'
import '../../../styles/ModalPopUp.css'
const modalPopUp = ({ setOpenModal }) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='title'>
                <h3>Contact Landlord</h3>
                <span>Send an inquiry about <span id='propertyAdress'></span></span>
            </div>
            <div className='body'>
                <input 
                className='subject'
                type='text'
                value={`Inquiries about this building`}
                readOnly />
                <textarea 
                placeholder='Write your message here'
                rows={6}
                cols={50}
               
                />
            </div>
            <div className='footer'>
                <button onClick={() => setOpenModal(false)} className='cancelBtn'>Cancel</button>
                <button className='sendBtn'>Send Mail</button>
            </div>
        </div>
    </div>
  )
}

export default modalPopUp
