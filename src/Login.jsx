import React, { useState } from "react";
import Input from "./Input"; // Correct import path for Input component
import Button from "./Button"; // Correct import path for Button component
import { Link } from "react-router-dom";
import "./App.css";
import "./Login.css";
import { SignInWithGooglePopup, createUserDocFromAuth } from "./firebase";
import { signinAuthUserWithEmailAndPassword } from './firebase'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate=useNavigate();

  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
};

  const [contact, setContact] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await signinAuthUserWithEmailAndPassword(contact.username, contact.password)
      alert("you are logged in successfully")
      navigate('/NavigationBar_Signout');
      console.log('done')
      console.log(response)
    }
    catch (error) {
      console.log('error in login', error.message)
      alert("Error in Sign In")
    }
    console.log("clicked")
  }
  return (
    <div className="header-div">
      <Input
        name="username"
        type="text"
        placeholder="username"
        onChange={handleChange}
        value={contact.username}
      />

      <br></br>

      <Input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChange}
        value={contact.password}
      />

      <br></br>
      <Link to='/NavigationBar_Signout'>
      <button onClick={handleLogin}>Login</button>

      </Link>
    

      <br></br>

      <button onClick={logGoogleUser}>login with Google</button>

      <br></br>
      <br></br>

      <Link to="/signup">Sign up instead</Link>
    </div>
  );
};

export default Login;
