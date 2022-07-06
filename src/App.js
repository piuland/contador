//import logo from './logo.svg';
import './style/App.css';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import {Paper} from "@mui/material";

function App() {
    let [number, setCount] = useState(0);
    // const contador = () => {
    //     //e.preventDefault();
    //     number++;
    //     return(
    //         <p>Hay {number} personas en el Pub.</p>
    //     );
    // };


    return(
        <div className="App">
            <header className="App-header">
                <Button variant="outlined" onClick={
                    () => setCount(number+1)
                }>Entrada</Button>
                <Button variant="outlined" onClick={
                    () => setCount(number-1)
                }>Salida</Button>
                <Paper>Hay {number} personas en el Pub.</Paper>

            </header>
        </div>
    )
}

export default App;
