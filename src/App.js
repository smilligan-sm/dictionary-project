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
          <Dictionary defaultKeyword="learning"/>
        </main>
      </div>
      <footer className="App-footer">
        Built by <a href="https://www.linkedin.com/in/sarahlouisemilligan/" target="_blank" rel="noreferrer">Sarah Milligan</a>, is open-sourced on <a href="https://github.com/smilligan-sm/dictionary-project" target="_blank" rel="noreferrer">Github</a> and hosted on <a href="https://sm-dictionary.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
        </footer>
    </div>
  );
}

