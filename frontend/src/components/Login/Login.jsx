import axios from 'axios';
import { useRef ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
export default function Login() {
  let email = useRef("");
  let password = useRef("");
  let str=''
  const nav = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    try {
      const response = await axios.post("http://localhost:3000/login",{
        email:email.current.value,
        password:password.current.value 
      })
      if(response.data.status){
        nav("/userhome")
      }else{
        console.log("incorrect pass");
        
      }
    } catch (err) {
      str=err;
    }
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="main">
          <div className="card1">
            <div className="card2">
              <img src="car-service.png" alt="" className="img" />
            </div>
            <div className="card3">
              <div className="head">
                <button type="submit" className="btn1">
                  LOGIN
                </button>
                <button className="btn2" onClick={() => nav("/signin")}>
                  SIGN UP
                </button>
              </div>
              <div className="title">
                <h1>Welcome back</h1>
                <p>Login to your account </p>
                <h4>{str}</h4>
              </div>
              <br />
              <br />
              <div className="inputs">
                <label htmlFor="email" className="loginlabel">Your email</label>
                <br />
                <input type="email" ref={email} className="logininput"/>
                <br />
                <br />
                <label htmlFor="pass" className="loginlabel">Password</label>
                <br />
                <input type="password" ref={password} className="logininput"/>
                <br />
                <a href="" className="forgot">Forgot password?</a>
                <br />
                <br />
                <button type="submit" className="subbtn">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
