import logo from "./milligantechlogosmall.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Sarah Milligan</footer>
      </div>
    </div>
  );
}

