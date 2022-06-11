import React from "react";
import {useSelector} from "react-redux";
import Login from "./screens/Login";
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import DishesList from "./screens/DishesList";
import Leaderboard from "./screens/Leaderboard";
import Home from "./screens/Home";


function App() {

  const isLogged = useSelector(state => state.isLogged);
  const dishes = useSelector(state=> state.dishes)

  console.log(dishes);

  return (
    <div className="App">
         {!isLogged?<Login />:<Home />}
         
          
    </div>
  );
}

export default App;
