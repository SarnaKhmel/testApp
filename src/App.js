import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";
import timer from '../src/timer.svg'

function App() {
  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const loginProps = useSpring({ 
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
  });

  // const timerProps = useSpring({
  //   left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
  // });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2px black",  //Animate bottom border of login button
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px black"
      : "solid 0px transparent", //Animate bottom border of register button
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Register
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <RegisterForm />
        </animated.form>
        {/* <animated.form action="" id="timerform" style={timerProps}>
          <TimerForm />
        </animated.form> */}
      </div>

      <animated.div className="forgot-panel" style={loginProps}>
      Don’t have an account yet? Register 
      </animated.div>
    </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label for="username">Username</label>
      <input type="text" id="username" />
      <label for="password">Password</label>
      <input type="text" id="password" />
      <input type="submit" value="Login" className="submit" />
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
    <React.Fragment>
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" />
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" />
      <label for="email">Email</label>
      <input type="text" id="email" />
      <label for="password">Password</label>
      <input type="text" id="password" />
      <input type="submit" value="Register" class="submit" />
      <div>
      <img src={timer} alt="timer" />
      </div>
    </React.Fragment>
  );
}

function TimerForm() {
  return (
    <React.Fragment>
      <div>
      <img src={timer} alt="timer" />
      </div>
    </React.Fragment>
  )
}

export default App;
