import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
export default function Login() {
  let email = useRef("");
  let password = useRef("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
  };

  const nav = useNavigate();
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
                <button type="submit" className="subbtn " onClick={() => nav("/userhome")}>
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
