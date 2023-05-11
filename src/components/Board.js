import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { initialData } from '../data.js';
import '../styles/App.css';



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


  function isLowerCase(str)
    {
        return str === str.toLowerCase() && str !== str.toUpperCase();
    }

  const dataToArray = (data) => {
    let array = [[], [], [], [], [], [], [], []]
    let rows = "12345678".split("").reverse()
    let columns = "abcdefgh".split("")
    rows.forEach(element => {
        columns.forEach(element2 => {
            array[Number(element)-1].push(data.lists[element2 + element])
        });
    });
    return array
}

    const arrayToData = (array, data) => {
        let newData = {
            ...data,
            lists: {
                ...data.lists,
            },
        };
        let rows = "12345678".split("").reverse()
        let columns = "abcdefgh".split("")
        rows.forEach(element => {
            columns.forEach(element2 => {
                console.log(array[Number(element)][columns.indexOf(element2)], element2 + element)
                newData.lists[element2 + element] = array[Number(element)][columns.indexOf(element2)]
            });

        });

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
        return true;
    }

    const rookMoveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        return true;




    }

    const knightMoveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
    
        return true;
    }

    const bishopMoveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        return true;

    }
    const queenMoveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        return true;

    }
    const kingMoveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        if(isKingInCheck(nextBoard, (isLowerCase(sourcePiece.slice(0, 1)) ? 'b' : 'w'))) return false;
        if (destination.droppableId === 'e8' && source.droppableId === 'h8' && rochade[0]) {
            if (board.lists['f1'].length !== 0 || board.lists['g1'].length !== 0) return false;
            return true;
        }
        if (destination.droppableId === 'e8' && source.droppableId === 'a8' && rochade[1]) {
            if (board.lists['b1'].length !== 0 || board.lists['c1'].length !== 0 || board.lists['d1'].length !== 0) return false;

            return true;

        }
        return true;

    }

    const isKingInCheck = (board, color) => {
        // field is an array of 8 arrays, the inner arrays are the rows of the board, they contain a string with the piece or empty string
        let fieldOrg = dataToArray(board)

        // bring field in the right format
        let fieldFull = []

        fieldOrg.forEach((element) => {
            element.forEach((element2) => {
                fieldFull.push(element2)
            })
        })
        
        let field = fieldFull.map((element, index) => {
            if (element.length === 0) return {
                field: index,
                piece: '',
                pieceColor: ''
            }
            return {
                field: index,
                piece: element.slice(0, 1),
                pieceColor: isLowerCase(element.slice(0, 1)) ? 'b' : 'w'
            }
        })


        let king = field.find((element) => element.piece === (color === 'w'? 'K' : 'k'))

        console.log(king)
        let enemyColor = color === 'w' ? 'b' : 'w'
        let enemyPieces = field.filter((element) => element.pieceColor === enemyColor)
        let enemyMoves = []
        enemyPieces.forEach((element) => {
            if (element.piece.length === 0) return
            enemyMoves.push(getLegalMoves(element, field))
        })

        enemyMoves = [...enemyMoves[0], ...enemyMoves[1], ...enemyMoves[2], ...enemyMoves[3], ...enemyMoves[4], ...enemyMoves[5], ...enemyMoves[6], ...enemyMoves[7]]

        return enemyMoves.includes(king.field)
    }

    const getLegalMoves = (piece, field) => {
        let legalMoves = []
        switch (piece.piece.toUpperCase()) {
            case 'P':
                legalMoves = getPawnMoves(piece, field)
                break;
            case 'R':
                legalMoves = getRookMoves(piece, field)
                break;
            case 'N':
                legalMoves = getKnightMoves(piece, field)
                break;
            case 'B':
                legalMoves = getBishopMoves(piece, field)
                break;
            case 'Q':
                legalMoves = getQueenMoves(piece, field)
                break;
            case 'K':
                legalMoves = getKingMoves(piece, field)
                break;
            default:
                break;

        }
        return legalMoves
    }

    const getPawnMoves = (piece, field) => {
        let legalMoves = []
        let index = field.indexOf(piece)
        let color = piece.pieceColor
        let direction = color === 'w' ? 1 : -1
        let pawnMoves = [index + 8 * direction, index + 16 * direction, index + 7 * direction, index + 9 * direction]
       
        pawnMoves.forEach((element) => {
            if (element >= 0 && element <= 63) {

                if (field[element].piece === '') {
                    legalMoves.push(field[element].field)
                }
            }
        })
        return legalMoves
    }

    const getRookMoves = (piece, field) => {
        let legalMoves = []
        let index = field.indexOf(piece)
        let color = piece.pieceColor
        let directions = [1, -1, 8, -8]
        directions.forEach((direction) => {
            let i = index + direction
            while (i >= 0 && i <= 63) {

                if (field[i].piece === '') {
                    legalMoves.push(field[i].field)
                } else if (field[i].pieceColor !== color) {
                    legalMoves.push(field[i].field)
                    break
                } else {
                    break
                }
                i += direction
            }

        })
        return legalMoves
    }

    const getKnightMoves = (piece, field) => {
        let legalMoves = []
        let index = field.indexOf(piece)
        let color = piece.pieceColor
        let directions = [6, 10, 15, 17, -6, -10, -15, -17]
        directions.forEach((direction) => {
            let i = index + direction
            if (i >= 0 && i <= 63) {
                if (field[i].piece === '' || field[i].pieceColor !== color) {
                    legalMoves.push(field[i].field)
                }
            }
        })
        //console.log( "knight moves: " + legalMoves)
        return legalMoves
    }

    const getBishopMoves = (piece, field) => {
        let legalMoves = []
        let index = field.indexOf(piece)

        let color = piece.pieceColor
        let directions = [7, 9, -7, -9]
        directions.forEach((direction) => {
            let i = index + direction
            while (i >= 0 && i <= 63) {

                if (field[i].piece === '') {
                    legalMoves.push(field[i].field)
                } else if (field[i].pieceColor !== color) {
                    legalMoves.push(field[i].field)
                    break
                } else {
                    break
                }
                i += direction
            }

        })
        return legalMoves
    }

    const getQueenMoves = (piece, field) => {

        let legalMoves = []
        let index = field.indexOf(piece)
        let color = piece.pieceColor
        let directions = [1, -1, 8, -8, 7, 9, -7, -9]

        directions.forEach((direction) => {
            let i = index + direction
            while (i >= 0 && i <= 63) {

                if (field[i].piece === '') {
                    legalMoves.push(field[i].field)
                } else if (field[i].pieceColor !== color) {
                    legalMoves.push(field[i].field)
                    break
                } else {
                    break
                }
                i += direction
            }

        })
        return legalMoves
    }

    const getKingMoves = (piece, field) => {
        let legalMoves = []
        let index = field.indexOf(piece)
        let color = piece.pieceColor

        let directions = [1, -1, 8, -8, 7, 9, -7, -9]
        directions.forEach((direction) => {
            let i = index + direction
            if (i >= 0 && i <= 63) {
                if (field[i].piece === '' || field[i].pieceColor !== color) {

                    legalMoves.push(field[i].field)
                }
            }
        })
        return legalMoves
    }


    const isCheckMate = (kingColor, field) => {
        let kingField = field.find((element) => element.piece === 'K' && element.pieceColor === kingColor).field
        let enemyPieces = field.filter((element) => element.pieceColor !== kingColor && element.piece !== '')

        let enemyMoves = enemyPieces.map((element) => {
            return getLegalMoves(element, field)
        })


        let kingMoves = getLegalMoves(field.find((element) => element.piece === 'K' && element.pieceColor === kingColor), field)

        let checkMate = true
        kingMoves.forEach((element) => {
            if (!enemyMoves.includes(element)) {
                checkMate = false
            }
        })
        return checkMate
    }



    // promotion
    const isPromotion = (source, destination, sourcePiece, destinationPiece) => {
        return true;
    }

    const moveIsLegal = (source, destination, sourcePiece, destinationPiece) => {
        let chessPiece = sourcePiece.slice(0, 1);
        console.log(source, destination, sourcePiece, destinationPiece)
   
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

    const returnNewData = (source, destination, sourcePiece) => {
        return {
        ...board,
        lists: {
            ...board.lists,
            [source.droppableId]: '',
            [destination.droppableId]: sourcePiece,
        },
    };
     
    
    }

    const sendMoveToServer = (move) => {

    }

  const onDragEnd = (result) => {
    const { destination, source } = result;

    let sourcePiece = board.lists[source.droppableId];
    let destinationPiece = board.lists[destination.droppableId];
    const newData = returnNewData(source, destination, sourcePiece);
    setNextBoard(newData);
        
    // Basic checks
    if (!checkBasics(source, destination, sourcePiece, destinationPiece)) return;

    // check if move is legal
    if (!moveIsLegal(source, destination, sourcePiece, destinationPiece)) return;
   
    // set new data
    setBoard(newData);

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

