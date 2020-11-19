import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase/firebaseConfig";


const Login = () => {
    const handleLogin = useCallback()
return (
    <div>
        <form onSubmit={handleLogin}>
            <label for="username">Username</label>
            <input type="text" id="username" />
            <label for="password">Password</label>
            <input type="text" id="password" />
            <input type="submit" value="Login" className="submit" /> 
        </form>
    </div>
);
}

export default withRouter(Login);