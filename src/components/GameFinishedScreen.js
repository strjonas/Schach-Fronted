import React from 'react'

export default function GameFinishedScreen({gameState, update}) {

    
    if (gameState === "notStarted") return <h3>Initializing game ...</h3>
    return (
        <div className="gameFinishedScreenOverlay">
            <div className="gameFinishedScreen">
                <h1>Game finished!</h1>
                {gameState === "draw" && <h3>Draw!</h3>}
                {gameState === "black" && <h3>Black won!</h3>}
                {gameState === "white" && <h3>White won!</h3>}
                <button className='newGameButton' onClick={(e) => {window.location.reload(true); update("isStarted")}}>New Game</button>
            </div>
        </div>

    )
    
}
