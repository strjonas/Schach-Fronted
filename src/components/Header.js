import React from 'react';
import '../styles/Header.css'
import logo from '../images/CaissaLogo.png'

export default function App(){
    return (
        <div className={"header"}>
            <div className={"logo"}>
                <img src={logo} alt={"Caissa"} draggable={"false"}/>
            </div>
        </div>
    )
}