import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { initialData } from '../data.js';
import '../styles/App.css';



export default function App() {
    const [board, setBoard] = useState(initialData);
    const [turn, setTurn] = useState('w')
    const [rochade, setRochade] = useState([true, true, true, true]) // [whiteLeft, whiteRight, blackLeft, blackRight
    const [enPassant, setEnPassant] = useState('')

    const [promotion, setPromotion] = useState(null)
    const [check, setCheck] = useState(null)
    const [checkMate, setCheckMate] = useState(null)
    const [staleMate, setStaleMate] = useState(null)
    const [moveHistory, setMoveHistory] = useState([])


  function isLowerCase(str)
    {
        return str === str.toLowerCase() && str !== str.toUpperCase();
    }

  const dataToArray = (data) => {
    let array = []
    for (let i = 0; i < 8; i++) {
        array.push([])
        for (let j = 0; j < 8; j++) {
            array[i].push(data.lists[data.listOrder[i][j]])
        }
    }
    return array
    }

    const arrayToData = (array, data) => {
        let newData = {
            ...data,
            lists: {
                ...data.lists,
            },
        };
        for (let i = 0; i < 8; i++) {

            for (let j = 0; j < 8; j++) {
                newData.lists[newData.listOrder[i][j]] = array[i][j]
            }
        }
        return newData
    }

    // implementiert elias noch
    const evaluateFen = (fenstring) => {}
    
    function onReceiveFenFromServer(fenstring){
        let obj = evaluateFen(fenstring)
        setBoard(arrayToData(obj.board, board))
        setTurn(obj.player)
        setRochade(obj.rochade)
        setEnPassant(obj.enPassant)
    }

    const checkBasics = (source, destination, sourcePiece) => {
        // Basic checks
        if (!destination) return false;
        
        // check if piece that is moved is actually a piece
        if (sourcePiece.length === 0) return false;

        return !(destination.droppableId === source.droppableId &&
        destination.index === source.index);
    }

    const pawnMoveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        // check if pawn is moved two fields
        if (Math.abs(source.index - destination.index) === 16) {
            // check if pawn is moved two fields but is not on starting position
            if (source.index > 15 && source.index < 48) return false;
            // check if pawn is moved two fields but is blocked by another piece
            if (destinationPiece.length !== 0) return false;
            // check if pawn is moved two fields but is blocked by another piece
            if (board.lists[destination.droppableId.slice(0, 1) + (destination.index + 8).toString()].length !== 0) return false;
        }

        // check if pawn is moved one field
        if (Math.abs(source.index - destination.index) === 8) {
            // check if pawn is moved one field but is blocked by another piece
            if (destinationPiece.length !== 0) return false;
        }

        // check if pawn is moved diagonally
        if (Math.abs(source.index - destination.index) === 7 || Math.abs(source.index - destination.index) === 9) {
            // false if field is empty and its not en passant
            if (destinationPiece.length === 0 && enPassant !== destination.droppableId) return false;
        }

    }

    const rookMoveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        // check if rook is moved diagonally
        if (Math.abs(source.index - destination.index) % 8 !== 0 && Math.abs(source.index - destination.index) > 7) return false;
        // check if rook is moved horizontally
        if (Math.abs(source.index - destination.index) % 8 === 0 && Math.abs(source.index - destination.index) > 7) {
            // check if rook is blocked by another piece
            if (source.index < destination.index) {
                for (let i = source.index + 8; i < destination.index; i += 8) {
                    if (board.lists[destination.droppableId.slice(0, 1) + i.toString()].length !== 0) return false;
                }
            } else {

                for (let i = source.index - 8; i > destination.index; i -= 8) {
                    if (board.lists[destination.droppableId.slice(0, 1) + i.toString()].length !== 0) return false;
                }
            }
        }

        // check if rook is moved vertically
        if (Math.abs(source.index - destination.index) % 8 !== 0 && Math.abs(source.index - destination.index) < 8) {
            // check if rook is blocked by another piece
            if (source.index < destination.index) {
                for (let i = source.index + 1; i < destination.index; i++) {
                    if (board.lists[destination.droppableId.slice(0, 1) + i.toString()].length !== 0) return false;
                }
            } else {
                for (let i = source.index - 1; i > destination.index; i--) {
                    if (board.lists[destination.droppableId.slice(0, 1) + i.toString()].length !== 0) return false;
                }
            }
        }
    }

    const knightMoveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        // either x is 2 and y is 1 or x is 1 and y is 2
        return true;
    }

    const bishopMoveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        return true;

    }
    const queenMoveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        return true;

    }
    const kingMoveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        return true;

    }

    const isKingInCheck = (board, field) => {
        return true;
    }

    // promotion
    const isPromotion = (source, destination, sourcePiece, destinationPiece) => {
        return true;
    }

    const moveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        let chessPiece = source.droppableId.slice(0, 1);
        console.log(source, destination, sourcePiece, destinationPiece)
        return true;
        // check if it was the players turn
        if (isLowerCase(chessPiece) && turn === 'w') return false;
        if (!isLowerCase(chessPiece) && turn === 'b') return false;

        // check if field was occupied by own piece
        if (destinationPiece.length !== 0) {
            if (isLowerCase(sourcePiece) === isLowerCase(destinationPiece)) return false;
        }

        switch (chessPiece.toUpperCase()) {
            case 'P':
                return pawnMoveIsLegal(source, destination, sourcePiece, destinationPiece)
            case 'R':
                return rookMoveIsLegal(source, destination, sourcePiece, destinationPiece)
            case 'N':
                return knightMoveIsLegal(source, destination, sourcePiece, destinationPiece)
            case 'B':
                return bishopMoveIsLegal(source, destination, sourcePiece, destinationPiece)
            case 'Q':
                return queenMoveIsLegal(source, destination, sourcePiece, destinationPiece)
            case 'K':
                return kingMoveIsLegal(source, destination, sourcePiece, destinationPiece)
            default:
                return false
        }

        // if in check, check if move removes check
      


    }

    const setNewData = (source, destination, sourcePiece) => {
        const newData = {
        ...board,
        lists: {
            ...board.lists,
            [source.droppableId]: '',
            [destination.droppableId]: sourcePiece,
        },
    };
    setBoard(newData);
    }

    const sendMoveToServer = (move) => {

    }

  const onDragEnd = (result) => {
    const { destination, source } = result;

    let sourcePiece = board.lists[source.droppableId];
    let destinationPiece = board.lists[destination.droppableId];

        
    // Basic checks
    if (!checkBasics(source, destination, sourcePiece)) return;

    // check if move is legal
    if (!moveIsLegal(source, destination)) return;
   

    // set new data
    setNewData(source, destination, sourcePiece);

    // send move to server in chess notation i.e. e2e4
    let move = source.droppableId + destination.droppableId	
    sendMoveToServer(move);
    // update move history
    setMoveHistory([...moveHistory, move]);
        
  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className="column">
            {board.listOrder.map((liste, index) => {
                return (

                    <div className="row" key={index}> 
                        {liste.map((listId, index) => {
                            
                            const list = board.lists[listId];

                            const task = board.tasks[list]

                            return (
                                <Droppable droppableId={listId} key={listId}>
                                    {(provided, snapshot) => (
                                    <div
                                        
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className={`list ${snapshot.isDraggingOver ? 'dragging-over' : ''}, field`}
                                    >
                                        
                                    {  
                                        task !== undefined ?
                                        (
                                        <Draggable draggableId={task.id} index={index} key={task.id}>
                                            {(provided, snapshot) => (
                                            <div
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}
                                                className={`task ${snapshot.isDragging ? 'dragging' : ''}, piece, ${task.color}`}
                                            >
                                                <img src={require(`./../images/pieces/${task.id.slice(0, 1).toLowerCase()}_${task.color}.png`)} alt="piece" />
                                            </div>
                                            )}
                                        </Draggable>
                                        )
                                        :
                                        (
                                            <div  className="piece, dummy"></div>
                                        )
                                    }
                                        {provided.placeholder}
                                    </div>
                                    )}
                                </Droppable>
                            );
                        })}
                    </div>
                );
            })}
    </div>
    </DragDropContext>
  );
}

