import React from "react";
import logo from "./milligantechlogosmall.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>Sarah's English Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Learning"/>
        </main>
      </div>
      <footer className="App-footer">Coded by Sarah Milligan</footer>
    </div>
  );
}

