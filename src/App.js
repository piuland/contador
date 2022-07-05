//import logo from './logo.svg';
import './App.css';
import React from "react";
import Button from '@mui/material/Button';

function App() {
    let number=0;
    //let estado = this.state;
    // const contador = () => {
    //     //e.preventDefault();
    //     number++;
    //     return(
    //         <p>Hay {number} personas en el Pub.</p>
    //     );
    // };
    function contador() {
        number++;
        return(
            <p>Hay {number} personas en el Pub.</p>
        )
    }

    return(
        <div className="App">
            <header className="App-header">
                <Button variant="outlined" onClick={ function(e) {
                    this.contador();
                }}
                >Contador</Button>
            </header>
        </div>
    )
}

export default App;
