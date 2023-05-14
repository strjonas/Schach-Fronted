import React from 'react';
import '../styles/PlayerName.css'

export default function App(){
    let user = 'Player01'
    let eng = 'Computer'

    return(
        <div className={'nameBlock'}>
            <div className={'nameField01'} >Computer 01</div>
            <div className={'nameField02'}>Player 01</div>
        </div>

    )
}