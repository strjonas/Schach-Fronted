// import helper functions from utils/funcs.js
import { isLowerCase, boardToField, indeciesToFields } from '../utils/funcs.js';
import  getLegalMoves from './getMoves.js';

export default function moveIsLegal  (turn, board, nextBoard, rochade, source, destination, sourcePiece, destinationPiece)  {

    let chessPiece = sourcePiece.slice(0, 1);

    // check basics
    if (!checkBasics(source, destination, sourcePiece)) return false;

    // check if it was the players turn
    if (isLowerCase(chessPiece) && turn === 'w') return false;
    if (!isLowerCase(chessPiece) && turn === 'b') return false;

    // check if field was occupied by own piece
    if (destinationPiece.length !== 0) {
        if (isLowerCase(sourcePiece) === isLowerCase(destinationPiece)) return false;
    }


    // check if the movement of the piece is legal
    if (!moveIsLegalByPiece(board, destination, sourcePiece)) return false;


    // check extra things for certain pieces
    switch (chessPiece.toUpperCase()) {
        case 'P':
            // promotion? Passed pawn?
            return pawnMoveIsLegal(source, destination, sourcePiece, destinationPiece)
        case 'K':
            // rochade? check? if in check, check if move removes check
            return kingMoveIsLegal(board, nextBoard, rochade, source, destination, sourcePiece, destinationPiece)
        default:
            // nothing special
            return true
    }

}

const moveIsLegalByPiece = (board, destination, sourcePiece) => {
    let move = destination.droppableId
    let field = boardToField(board)

    
    let legalMoves = getLegalMoves(sourcePiece, field)

    let fieldsInChessNotation = indeciesToFields(legalMoves)

    return fieldsInChessNotation.includes(move)
}


const checkBasics = (source, destination, sourcePiece) => {
    // Basic checks
    if (!destination) return false;
    
    // check if piece that is moved is actually a piece
    if (sourcePiece.length === 0) return false;

    return !(destination.droppableId === source.droppableId &&
    destination.index === source.index);
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

const isPromotion = (source, destination, sourcePiece, destinationPiece) => {
    return true;
}

const pawnMoveIsLegal = (board, source, destination, sourcePiece, destinationPiece) => {
    return true;

}

const kingMoveIsLegal = (board, nextBoard, rochade, source, destination, sourcePiece, destinationPiece) => {
    if(isKingInCheck(nextBoard, (isLowerCase(sourcePiece.slice(0, 1)) ? 'b' : 'w'))) return false;
    if (destination.droppableId === 'e8' && source.droppableId === 'h8' && rochade[0]) {
        return !(board.lists['f1'].length !== 0 || board.lists['g1'].length !== 0);
    }
    if (destination.droppableId === 'e8' && source.droppableId === 'a8' && rochade[1]) {
        return !(board.lists['b1'].length !== 0 || board.lists['c1'].length !== 0 || board.lists['d1'].length !== 0);

    }
    return true;

}

const isKingInCheck = (board, color) => {
    // field is an array of 8 arrays, the inner arrays are the rows of the board, they contain a string with the piece or empty string
    let field = boardToField(board)
    let king = field.find((element) => element.piece.slice(0, 1) === (color === 'w'? 'K' : 'k'))

    let enemyColor = color === 'w' ? 'b' : 'w'
    let enemyPieces = field.filter((element) => element.pieceColor === enemyColor)
    let enemyMoves = []

    enemyPieces.forEach((element) => {
        if (element.piece.length === 0) return
        enemyMoves.push(getLegalMoves(element.piece, field))
    })

    enemyMoves = enemyMoves.flat()

    return enemyMoves.includes(king.field)
}


