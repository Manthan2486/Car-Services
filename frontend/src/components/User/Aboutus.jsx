import React from 'react'
import Usernav from './Usernav';
import "./Aboutus.css";

const Aboutus = () => {
    return (
        <>
            <Usernav></Usernav>
            <h1 className='abouthead'>About Our Car Service</h1>
            <div className="about1">
                <div className="about2">
                <h2>Great Services</h2><br />
                <p>
                    GoMechanic is simply the best car service provider in
                    Ahmedabad. The staff is positive, kind, and does
                    everything possible to provide an outstanding experience
                    with them. I have been getting my car serviced there for
                    the past 3 years. They have always served me with
                    satisfactory and top-notch services. Thank you GoMechanic!
                </p>
                </div>
            </div>
        </>
    )
}

export default Aboutus