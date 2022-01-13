import React from 'react';
import Playfield from "./Playfield";

function App() {
  return <div>
  <div className="navbar navbar-brand navbar-dark"><h1 className="appTitle">Tic Tac Toe</h1></div>
  <Playfield />
  <footer className="footerBox">~ App made by Shivam ~</footer>
  </div>;
}

export default App;
