import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavigationBar_Signout() {
    const navigate=useNavigate();
    async function handleLogin(event) {
        event.preventDefault();
        try {
        
          alert("you are logged out successfully")
          navigate('/');
          console.log('done')
         
        }
        catch (error) {
          console.log('error in login', error.message)
          alert("Error in Sign In")
        }
        console.log("clicked")
      }
  return (
    <header className="header">
      <Link classname="link" to="/">
        <label className="logo">DEV@DEAKIN</label>
      </Link>

      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="options">
        <button className="option">POST</button>

   
        <button className="option" onClick={handleLogin}>SignOut</button>
      </div>

      <Outlet />
    </header>
  );
}
export default NavigationBar_Signout;
