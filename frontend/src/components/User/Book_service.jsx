import React, { useRef } from 'react';
import Usernav from "./Usernav";
import "./Book_service.css";

export default function Book_service() {
    let appointment_date = useRef("")
    let car_type = useRef("");
    let registration_number = useRef("");
    let car_model = useRef("");
    let types_of_services = useRef("");
    let name = useRef("");
    let phone_number = useRef("");
    let email = useRef("");
    let address = useRef("");
    let city = useRef("");
    let state = useRef("");
    let zip_code = useRef("");

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(appointment_date.current.value);
        console.log(car_type.current.value);
        console.log(registration_number.current.value);
        console.log(car_model.current.value);
        console.log(types_of_services.current.value);
        console.log(name.current.value);
        console.log(phone_number.current.value);
        console.log(email.current.value);
        console.log(address.current.value);
        console.log(city.current.value);
        console.log(state.current.value);
        console.log(zip_code.current.value);
      };
    return (
        <>
            <Usernav></Usernav>
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
                        <input type="date" name="" id="" className='forminput' ref={appointment_date}/>
                        <br /><br />
                        <label htmlFor="car type" className='typelabel'>Car type : </label>
                        <br />
                        <input type="radio" name="cartype" className='cursor'/>
                        <label htmlFor="sedan" className='typelabel' ref={car_type}>Sedan</label>
                        <br />
                        <input type="radio" name="cartype"  className='cursor'/>
                        <label htmlFor="coupe" className='typelabel' ref={car_type}>Coupe</label>
                        <br />
                        <input type="radio" name="cartype"  className='cursor'/>
                        <label htmlFor="coupe" className='typelabel' ref={car_type}>Coupe</label>
                        <br />
                        <input type="radio" name="cartype"  className='cursor'/>
                        <label htmlFor="hatchback" className='typelabel' ref={car_type}>Hatchback</label>
                        <br />
                        <input type="radio" name="cartype"  className='cursor'/>
                        <label htmlFor="Sports car" className='typelabel' ref={car_type}>Sports car</label>
                        <br />
                        <input type="radio" name="cartype"  className='cursor'/>
                        <label htmlFor="Wagon" className='typelabel' ref={car_type}>Wagon</label>
                        <br />
                        <input type="radio" name="cartype"  className='cursor'/>
                        <label htmlFor="Convertable" className='typelabel' ref={car_type}>Convertable</label>
                        <br />
                        <input type="radio" name="cartype"  className='cursor'/>
                        <label htmlFor="Pickup truck" className='typelabel' ref={car_type}>Pickup truck</label>
                        <br />
                        <input type="radio" name="cartype"  className='cursor'/>
                        <label htmlFor="Other" className='typelabel' ref={car_type}>Other</label>
                        <br /><br />
                        <label className="typelabel">Car Registration Number : </label>
                        <input type="text" className='forminput' ref={registration_number}/>
                        <br /><br />
                        <label htmlFor="" className="typelabel">Car model : </label>
                        <input type="text" className='forminput' ref={car_model}/>
                        <br /><br />
                        <label htmlFor="" className="typelabel">Type of service : </label>
                        <br />
                        <input type="checkbox" />
                        <label htmlFor="" className='typelabel cursor' ref={types_of_services}>Car wash</label>
                        <br />
                        <input type="checkbox" />
                        <label htmlFor="" className='typelabel cursor' ref={types_of_services}>Genral Service</label>
                        <br />
                        <input type="checkbox" />
                        <label htmlFor="" className='typelabel cursor' ref={types_of_services}>Engine oil</label>
                        <br />
                        <input type="checkbox" />
                        <label htmlFor="" className='typelabel cursor' ref={types_of_services}>Breake pad change</label>
                        <br />
                        <input type="checkbox" />
                        <label htmlFor="" className='typelabel cursor' ref={types_of_services}>Breake fluid change</label>
                        <br />
                        <input type="checkbox" />
                        <label htmlFor="" className='typelabel cursor' ref={types_of_services}>Air filter change</label>
                        <br />
                        <input type="checkbox" />
                        <label htmlFor="" className='typelabel cursor' ref={types_of_services}>Engine tunning</label>
                        <br />
                        <input type="checkbox" />
                        <label htmlFor="" className='typelabel cursor' ref={types_of_services}>Spark plug change</label>
                        <br />
                        <input type="checkbox" />
                        <label htmlFor="" className='typelabel cursor' ref={types_of_services}>Windscreen wiper change</label>
                        <br />
                    </div>
                    <div className="formhead">
                        <h1>Customer information</h1>
                    </div><br />
                    <div className="inputs">
                        <label htmlFor="name" className='typelabel' ref={name}>Name : </label>
                        <input type="text" className='forminput' />
                        <br /><br />
                        <label htmlFor="Phone number" className='typelabel' ref={phone_number}>Phone number : </label>
                        <input type="tel" className='forminput' />
                        <br /><br />
                        <label htmlFor="Email" className='typelabel' ref={email}>Email : </label>
                        <input type="email" className='forminput' />
                        <br /><br />
                        <label htmlFor="Address" className='typelabel' ref={address}>Address : </label><br />
                        <textarea className='forminput' cols="30" rows=""></textarea>
                        <br /><br />
                        <label htmlFor="City" className='typelabel' ref={city}>City : </label>
                        <input type="text" className='forminput' />
                        <br /><br />
                        <label htmlFor="State" className='typelabel' ref={state}>State : </label>
                        <input type="text" className='forminput' />
                        <br /><br />
                        <label htmlFor="Zip code" className='typelabel' ref={zip_code}>Zip code :  </label>
                        <input type="tel" className='forminput' />
                    </div>
                    <button className="bookbtn" type="submit">
                        BOOK NOW
                    </button>
                </div>
            </form>
        </>
    )
}


