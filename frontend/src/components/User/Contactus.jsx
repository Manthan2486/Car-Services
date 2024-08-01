import React from 'react'
import "./Contactus.css"
import Usernav from './Usernav'

const Contactus = () => {
    return (
        <>
            <Usernav></Usernav>
            <div className="contactform">
                <div className='heading'>
                    <h1>Contact us</h1>
                </div>
                <div >
                    <label htmlFor="full name" className='contactlabel'>Full name : </label>
                    <input type="text" className="contactinputs"/><br /><br />
                    <label htmlFor="Email" className='contactlabel'>Email : </label>
                    <input type="email" className="contactinputs"/><br /><br />
                    <label htmlFor="Phone number" className='contactlabel'>Phone number : </label>
                    <input type="tel" className="contactinputs"/><br /><br />
                    <label htmlFor="Message" className='contactlabel'>Message : </label>
                    <textarea className='contactinputs' cols="30" rows="2"></textarea>
                    <button className="sendbtn" type="submit">
                        Send
                    </button>
                </div>
            </div>
        </>
    )
}

export default Contactus