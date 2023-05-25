import React, { useState, useEffect, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { initialData } from './initialData.js';
import '../styles/App.css';
import getLegalMoves  from '../validation/getMoves.js';
import moveIsLegal from '../validation/isMoveLegal.js';
import { indeciesToFields,  boardToField, returnNewData, arrayToData } from '../utils/funcs.js';
import { sendMoveToServer } from '../server/handling.js';


export default function App() {
    const [board, setBoard] = useState(initialData);
    const [nextBoard, setNextBoard] = useState(initialData);
    const [turn, setTurn] = useState('w')
    const [rochade, setRochade] = useState([true, true, true, true]) // [whiteLeft, whiteRight, blackLeft, blackRight
    const [enPassant, setEnPassant] = useState('')

    const [promotion, setPromotion] = useState(null)
    const [check, setCheck] = useState(null)
    const [checkMate, setCheckMate] = useState(null)
    const [staleMate, setStaleMate] = useState(null)
    const [moveHistory, setMoveHistory] = useState([])

    // damit man auf punkte zum moven drucken kann
    const [currentPiece, setCurrentPiece] = useState([])


    const [render, rerender] = useState(false);

    // diese funktion aus anderem file aufrufen klappt noch nicht, muss man sich was ueberlegen, useEffect
    function updateDataFromFenObject (obj){
        setBoard(arrayToData(obj.board, initialData))
        setTurn(obj.player)
        setRochade(obj.rochade)
        setEnPassant(obj.enPassant)

    }

    const onDragEnd = (result) => {
        const { destination, source } = result;

        let sourcePiece = board.lists[source.droppableId];
        let destinationPiece = board.lists[destination.droppableId];
        

        if (sourcePiece === destinationPiece) return;

        let newData = returnNewData(JSON.parse(JSON.stringify(board)), source, destination, sourcePiece);
        setNextBoard(newData);

        // check if move is legal
        if (!moveIsLegal(turn, board, nextBoard, rochade, source, destination, sourcePiece, destinationPiece)) 
            return;

        // remove the valid moves dots and set new data
        setBoard(removeDots(newData))

        // refresh screen
        rerender(!render);

        // send move to server in chess notation i.e. e2e4
        let move = source.droppableId + destination.droppableId	
        sendMoveToServer(move);
        // update move history
        setMoveHistory([...moveHistory, move]);
            
    }
  
    const drawDots = (legalMoves) => {

        let newLists = board.lists



        indeciesToFields(legalMoves).forEach((element) => {
            if(newLists[element] === '')
                newLists[element] = 'dot'
        })


        let newData = board
        newData.lists = newLists
        
        return newData
    }

    const removeDots = (newBoard) => {
        let newLists = newBoard.lists

        initialData.listOrder.flat().forEach((element) => {
            if(newLists[element] === 'dot')
                newLists[element] = ''
        })


        let newData = board
        newData.lists = newLists

        return newData
    }


    const onDragPiece = (result) => {

    setBoard(removeDots(board))
    rerender(!render);

    }

    const moveCurrentPiece = (destination) => {

        let piece = currentPiece[0]
        let previousField = currentPiece[1]
        let field = destination

        let newLists = board.lists
        newLists[previousField] = ''
        newLists[field] = piece

        let newData = board
        newData.lists = newLists


        setBoard(removeDots(newData))

        rerender(!render);

    }


    const onClickPiece = (piece, listId) => {

        setCurrentPiece([piece, listId])

        let field = boardToField(removeDots(board));

        setBoard(drawDots(getLegalMoves(piece, field)))

        rerender(!render);

    }

    return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragPiece} >
        <div className="column">
            {board.listOrder.map((liste, index) => {
                return (

                    <div className="row" key={liste[index]}> 
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

                                            task.id === 'dot' ?
                                            (
                                                <div onClick={() => moveCurrentPiece(listId)} className="center">
                                                    <div className="dot"></div>
                                                </div>
                                            )
                                            :
                                        <Draggable draggableId={task.id} index={index} key={task.id} >
                                            {(provided, snapshot) => (
                                            <div
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                
                                                ref={provided.innerRef}
                                                className={`task ${snapshot.isDragging ? 'dragging' : ''}, piece, ${task.color}`}
                                            >
                                                <img onClick={() => onClickPiece(task.id, listId)} src={require(`./../images/pieces/${task.id.slice(0, 1).toLowerCase()}_${task.color}.png`)} alt="piece" />
                                            </div>
                                            )}
                                        </Draggable>
                                        )
                                        :
                                        (
                                            <div onClick={() => {setBoard(removeDots(board));rerender(!render);}} className="dummy"></div>
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

