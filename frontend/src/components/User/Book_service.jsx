import axios from 'axios';
import React, { useState } from 'react';
import Usernav from "./Usernav";
import "./Book_service.css";

export default function Book_service() {
    const [appointment_date, setAppointmentDate] = useState("");
    const [car_type, setCarType] = useState("");
    const [registration_number, setRegistrationNumber] = useState("");
    const [car_model, setCarModel] = useState("");
    const [types_of_services, setTypesOfServices] = useState([]);
    const [name, setName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip_code, setZipCode] = useState("");

    const handleServiceChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setTypesOfServices([...types_of_services, value]);
        } 
    };

    const handlesubmit = async(e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/bookservice", {
            appointment_date,
            car_type,
            registration_number,
            car_model,
            types_of_services,
            name,
            phone_number,
            email,
            address,
            city,
            state,
            zip_code
        });
        console.log(response.data);
    };

    return (
        <>
            <Usernav />
            <form onSubmit={handlesubmit}>
                <div className="bookform">
                    <div className="formhead">
                        <h1>Car Service Booking</h1>
                        <img src="form.png" className='formimg' />
                    </div><hr /><br />
                    <div className="formhead">
                        <h1>Car information</h1>
                    </div><br />
                    <div className="inputs">
                        <label htmlFor="date" className='typelabel'>Select an appointment date : </label>
                        <input type="date" className='forminput' value={appointment_date} onChange={(e) => setAppointmentDate(e.target.value)} />
                        <br /><br />
                        <label htmlFor="car type" className='typelabel'>Car type : </label>
                        <br />
                        <input type="radio" name="cartype" value="Sedan" onChange={(e) => setCarType(e.target.value)} />
                        <label htmlFor="sedan" className='typelabel' >Sedan</label>
                        <br />
                        <input type="radio" name="cartype" value="Coupe" onChange={(e) => setCarType(e.target.value)} />
                        <label htmlFor="coupe" className='typelabel'>Coupe</label>
                        <br />
                        <input type="radio" name="cartype" value="Hatchback" onChange={(e) => setCarType(e.target.value)} />
                        <label htmlFor="hatchback" className='typelabel'>Hatchback</label>
                        <br />
                        <input type="radio" name="cartype" value="Sports car" onChange={(e) => setCarType(e.target.value)} />
                        <label htmlFor="Sports car" className='typelabel'>Sports car</label>
                        <br />
                        <input type="radio" name="cartype" value="Wagon" onChange={(e) => setCarType(e.target.value)} />
                        <label htmlFor="Wagon" className='typelabel'>Wagon</label>
                        <br />
                        <input type="radio" name="cartype" value="Convertible" onChange={(e) => setCarType(e.target.value)} />
                        <label htmlFor="Convertable" className='typelabel'>Convertible</label>
                        <br />
                        <input type="radio" name="cartype" value="Pickup truck" onChange={(e) => setCarType(e.target.value)} />
                        <label htmlFor="Pickup truck" className='typelabel'>Pickup truck</label>
                        <br />
                        <input type="radio" name="cartype" value="Other" onChange={(e) => setCarType(e.target.value)} />
                        <label htmlFor="Other" className='typelabel'>Other</label>
                        <br /><br />
                        <label className="typelabel">Car Registration Number : </label>
                        <input type="text" className='forminput' value={registration_number} onChange={(e) => setRegistrationNumber(e.target.value)} />
                        <br /><br />
                        <label htmlFor="" className="typelabel">Car model : </label>
                        <input type="text" className='forminput' value={car_model} onChange={(e) => setCarModel(e.target.value)} />
                        <br /><br />
                        <label htmlFor="" className="typelabel">Type of service : </label>
                        <br />
                        <input type="checkbox" value="Car wash" onChange={handleServiceChange} />
                        <label htmlFor="" className='typelabel cursor'>Car wash</label>
                        <br />
                        <input type="checkbox" value="General Service" onChange={handleServiceChange} />
                        <label htmlFor="" className='typelabel cursor'>General Service</label>
                        <br />
                        <input type="checkbox" value="Engine oil" onChange={handleServiceChange} />
                        <label htmlFor="" className='typelabel cursor'>Engine oil</label>
                        <br />
                        <input type="checkbox" value="Brake pad change" onChange={handleServiceChange} />
                        <label htmlFor="" className='typelabel cursor'>Brake pad change</label>
                        <br />
                        <input type="checkbox" value="Brake fluid change" onChange={handleServiceChange} />
                        <label htmlFor="" className='typelabel cursor'>Brake fluid change</label>
                        <br />
                        <input type="checkbox" value="Air filter change" onChange={handleServiceChange} />
                        <label htmlFor="" className='typelabel cursor'>Air filter change</label>
                        <br />
                        <input type="checkbox" value="Engine tuning" onChange={handleServiceChange} />
                        <label htmlFor="" className='typelabel cursor'>Engine tuning</label>
                        <br />
                        <input type="checkbox" value="Spark plug change" onChange={handleServiceChange} />
                        <label htmlFor="" className='typelabel cursor'>Spark plug change</label>
                        <br />
                        <input type="checkbox" value="Windscreen wiper change" onChange={handleServiceChange} />
                        <label htmlFor="" className='typelabel cursor'>Windscreen wiper change</label>
                        <br />
                    </div>
                    <div className="formhead">
                        <h1>Customer information</h1>
                    </div><br />
                    <div className="inputs">
                        <label htmlFor="name" className='typelabel' >Name : </label>
                        <input type="text" className='forminput' value={name} onChange={(e) => setName(e.target.value)} />
                        <br /><br />
                        <label htmlFor="Phone number" className='typelabel'>Phone number : </label>
                        <input type="tel" className='forminput' value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <br /><br />
                        <label htmlFor="Email" className='typelabel' >Email : </label>
                        <input type="email" className='forminput' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <br /><br />
                        <label htmlFor="Address" className='typelabel' >Address : </label><br />
                        <textarea className='forminput' cols="30" rows="" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                        <br /><br />
                        <label htmlFor="City" className='typelabel' >City : </label>
                        <input type="text" className='forminput' value={city} onChange={(e) => setCity(e.target.value)} />
                        <br /><br />
                        <label htmlFor="State" className='typelabel' >State : </label>
                        <input type="text" className='forminput' value={state} onChange={(e) => setState(e.target.value)} />
                        <br /><br />
                        <label htmlFor="Zip code" className='typelabel' >Zip code :  </label>
                        <input type="tel" className='forminput' value={zip_code} onChange={(e) => setZipCode(e.target.value)} />
                    </div>
                    <button className="bookbtn" type="submit">
                        BOOK NOW
                    </button>
                </div>
            </form>
        </>
    );
}
