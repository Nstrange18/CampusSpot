import React from 'react'
import '../../../styles/ModalPopUp.css'
const modalPopUp = ({ setOpenModal }) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='title'>
                <h2>Contact Landlord</h2>
            </div>
            <div className='body'>
                <div className='contacts'>
                    <img src="call.png" />
                    <h3 id='callNumber'>0803607895</h3>
                </div>
                <div className='contacts'>
                    <img src="whatsapp.png" />
                    <h3 id='whatsappNumber'>+234803607895</h3>
                </div>
                <div className='contacts'>
                    <img src="email.png" />
                    <h3 id='emailAddress'>Olachigrace196@gmail.com</h3>
                </div>
             
            </div>
            <div className='footer'>
                <button onClick={() => setOpenModal(false)} className='cancelBtn'>Cancel</button>
                {/* <button className='sendBtn'>Send Mail</button> */}
            </div>
        </div>
    </div>
  )
}

export default modalPopUp
