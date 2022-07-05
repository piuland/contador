//import logo from './logo.svg';
import './App.css';
import React from "react";
import Button from '@mui/material/Button';

let number=0;
const contador = () => { number++ };


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Button variant="outlined" onclick="contador()">Contador</Button>
          <p>Hay {number} personas en el Pub.</p>
          {/*<div className="sacarPorPantalla">*/}
          {/*    <p>It is {new Date().toLocaleTimeString()}.</p>*/}
          {/*</div>*/}

      </header>
    </div>
  );
}

export default App;
