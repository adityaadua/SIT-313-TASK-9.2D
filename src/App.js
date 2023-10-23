import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import NavigationBar from './NavigationBar';
import Homepage from './Homepage';
import Payment from './Payment';
import { PrivateRoute } from './PrivateRoute';
import NavigationBar_Signout from './NavigationBar_Signout';
import Selection from './Selection';

function App() {

  return (
    <>
      <Routes>

        <Route path='/' index element={<NavigationBar />} />
        <Route index element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/post' element={<Selection />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/NavigationBar_Signout' element={<NavigationBar_Signout />} />
        <Route path="/payment" element={<Payment />} />
        
      </Routes>
    </>
  );
}

export default App;
