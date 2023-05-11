import React from 'react';
import '../styles/Moves.css'

export default function App(){
    let array = ['e4e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'e4e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'e4e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'e4e5', 'Nf3', 'Nc6', 'Bb5', 'a6']

    return (
        <div id={"moveList"}>
            {array.map((move) => (
                <div className={"moves"}>{move}</div>
            ))}
        </div>
    )
}
