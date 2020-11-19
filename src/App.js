import React, { useState } from "react";
import "./App.css";
import { useSpring, animated } from "react-spring";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Timer from "./Auth/Timer";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
       

// var firebase = {
//   apiKey: "AIzaSyBxQ5z6D2tqd30r2LxzW2N3j5ohShRszUc",
//   authDomain: "apptest-cd8ca.firebaseapp.com",
//   databaseURL: "https://apptest-cd8ca.firebaseio.com",
//   projectId: "apptest-cd8ca",
//   storageBucket: "apptest-cd8ca.appspot.com",
//   messagingSenderId: "638226939854",
//   appId: "1:638226939854:web:a94132a302772edf1f759f",
//   measurementId: "G-G9HE3JJ7YP"
// };

function App() {

// var firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/firestore");

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

  // const [displayName, setDisplayName] = useState(""); 
  // const [error, setError] = useState(null);
  // const createUser = (event, email, password) => {
  //   event.preventDefault();
  //   //setEmail("");
  //   //setPassword("");
  //   setDisplayName("");
  // }

  // const onChangeHandler = event => {
  //   const { name, value } = event.currentTarget;
  //   if (name === "userEmail") {
  //     //setEmail(value);
  //   } else if (name === "userPassword") {
  //     //setPassword(value);
  //   } else if (name === "displayName") {
  //     setDisplayName(value);
  //   }
  // };

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
          {/* <TimerForm /> */}
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
      {/* <label for="username">Username</label>
      <input type="text" id="username" />
      <label for="password">Password</label>
      <input type="text" id="password" />
      <input type="submit" value="Login" className="submit" /> */}
      <Router>
        <Route exact path="./Auth/Login" component={Login} />
      </Router>
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="./Auth/Regidter" component={Register} />
      </Router>
      
      {/* <label for="firstname">Firstname</label>
      <input type="text" id="firstname" />
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" />
      <label for="email">Email</label>
      <input type="text" id="email" />
      <label for="password">Password</label>
      <input type="text" id="password" />
      <input type="submit" value="Register" class="submit" /> */}
      {/* <div>
      <img src={timer} alt="timer" />
      </div> */}
    </React.Fragment>
  );
}

function TimerForm() {
  return (
    <React.Fragment>
     <Router>
       <PrivateRoute exact path="./Auth/Timer" component={Timer} />
     </Router>
    </React.Fragment>
  )
}


export default App;
