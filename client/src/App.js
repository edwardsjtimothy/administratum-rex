import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Nav user="Tim" />
      <Body  />
    </div>
  );
}

export default App;
