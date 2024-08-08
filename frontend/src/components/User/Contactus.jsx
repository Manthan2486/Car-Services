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
            <div className="info">
                <div className="info1">
                    <img src="location.png" className='location' alt="location" />
                    <p className='locationtxt'>Mithakhali Circle, CG Road, <br />Ahmedabad-320008, <br />Gujrat, India.</p>
                </div>
                <div className="info2">
                    <img src="call.png" className='call' alt="call" />
                    <p className="calltxt">+91 8980824806</p>
                </div>
                <div className="info3">
                    <img src="mail.png" alt="email" className="email" />
                    <p className="emailtxt">m.manthan006@gmail.com</p>
                </div>
            </div>
        </>
    )
}

export default Contactus