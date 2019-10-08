import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {BrowserRouter} from "react-router-dom";
import {Switch, Route} from "react-router-dom";


function App() {

  return (

    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/home">
          <Nav />
          <Body />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


