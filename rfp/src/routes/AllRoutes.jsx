import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Contacts />}></Route>
    </Routes>
  )
}

export default AllRoutes