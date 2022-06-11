import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import Login from "./screens/Login";
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import DishesList from "./screens/DishesList";
import Leaderboard from "./screens/Leaderboard";
import Home from "./screens/Home";
import Navbar from "./screens/Navbar";
import { addPoints } from "./actions/dishesAction";


function App() {


  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    var data = localStorage.getItem("localDishesStore");
    data = JSON.parse(data)
    dispatch(addPoints(data))

    
  },[])

  return (
    
<div>
         {!isLogged?(<Login />):
         (
         <div>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/dishlist" element={<DishesList />} exact></Route>
          <Route path="/leaderboard" element={<Leaderboard />} exact></Route>
        </Routes></div>)}
        </div>
   
  );
  
}

export default App;
