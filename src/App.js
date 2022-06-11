import React from "react";
import {useSelector} from "react-redux";
import Login from "./screens/Login";
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import DishesList from "./screens/DishesList";
import Leaderboard from "./screens/Leaderboard";
import Home from "./screens/Home";
import Navbar from "./screens/Navbar";


function App() {

  const isLogged = useSelector(state => state.isLogged);
  const dishes = useSelector(state=> state.dishes)

  console.log(dishes);

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
