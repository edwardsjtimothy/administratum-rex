import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Login from "./components/Login";
import {Redirect} from "react-router-dom";

function App() {

  return (

    <div className="App">
      <Login />
      {/* <Nav />
      <Body user="Tim" /> */}
    </div>
  );
}

export default App;


