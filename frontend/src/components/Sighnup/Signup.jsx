import axios from 'axios';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
export default function Sighup() {
  let name = useRef("");
  let email = useRef("");
  let password = useRef("");
  const nav = useNavigate();
  const handlesubmit = async(e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    const response = await axios.post("http://localhost:3000/signup",{
      name:name.current.value,
      email:email.current.value,
      password:password.current.value
    });
    if(response.data.status){
      nav("/")
    }else{
      console.log(response.data.msg)
    }
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="mainS" >
          <div className="card1S">
            <div className="card2S">
              <img src="car-service-2.png" alt="" className="imgS" />
            </div>
            <div className="card3S">
              <div className="headS">
                <button type="submit" className="btn1S" onClick={() => nav("/")}>
                  LOGIN
                </button>
                <button className="btn2S" >
                  SIGN UP
                </button>
              </div>
              <div className="titleS">
                <h1>Welcome</h1>
                <p>Sign up for free </p>
              </div>
              <br />
              <br />
              <div className="inputS">
                <label htmlFor="n" className="signuplabel">Your name</label>
                <br />
                <input type="text" ref={name} className="signupinput"/>
                <br />
                <br />
                <label htmlFor="email" className="signuplabel">Your email</label>
                <br />
                <input type="email" ref={email} className="signupinput"/>
                <br />
                <br />
                <label htmlFor="pass" className="signuplabel">Password</label>
                <br />
                <input type="password" ref={password} className="signupinput"/>
                <br />
                <br />
                <br />
                <button className="btnS" type="submit">
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
