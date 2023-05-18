

export default function getLegalMoves (piece, field) {
    let legalMoves = []
    switch (piece.slice(0, 1).toUpperCase()) {
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
    let index = 0;

    // find index
    field.forEach((field) => {
        if(field.piece === piece) {
            index = field.field
        }
    })

    let color = field[index].pieceColor
    let direction = color === 'w' ? -1 : 1
    let pawnMoves = [index + 8 * direction]
    // check if pawn is on starting position
    if (color === 'w' && index >= 48 && index <= 55) {
        // check if field is occupied
        if (field[index-8].piece === '') {
            pawnMoves.push(index - 16)
        }
    } else if (color === 'b' && index >= 8 && index <= 15) {
        if (field[index+8].piece === '') {
            pawnMoves.push(index + 16)
        }
    }
    console.log(legalMoves, index)
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
    let index = 0
    // find index
    field.forEach((field) => {
        if(field.piece === piece) {
            index = field.field
        }
    })


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
            

            // break if end of row or column is reached
            if (i % 8 === 0 && direction === -1) {
                break
            }
            else if (i % 8 === 7 && direction === 1) {
                break
            }
            else if (i >= 56 && direction === 8) {
                break
            }
            else if (i <= 7 && direction === -8) {
                break
            }

            i += direction
            
        }

    })
    return legalMoves
}

const getKnightMoves = (piece, field) => {
    let legalMoves = []
    let index = ""
    // find index
    field.forEach((field) => {
        if(field.piece === piece) {
            index = field.field
        }
    })


    let color = piece.pieceColor
    let directions = [6, 10, 15, 17, -6, -10, -15, -17]
    directions.forEach((direction) => {
        let i = index + direction
        if (i >= 0 && i <= 63) {
            // check if knight would go out of bounds
            if(Math.abs(i % 8 - index % 8) <= 2 && Math.abs(Math.floor(i / 8) - Math.floor(index / 8)) <= 2) {
                if (field[i].piece === '' || field[i].pieceColor !== color) {
                    legalMoves.push(field[i].field)
                }
            }
        }
    })
    //console.log( "knight moves: " + legalMoves)
    return legalMoves
}

const getBishopMoves = (piece, field) => {
    let legalMoves = []
    let index = ""
    // find index
    field.forEach((field) => {
        if(field.piece === piece) {
            index = field.field
        }
    })


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

            // break if end of row or column is reached
            if (direction === 7 || direction === -9) {
                if (i % 8 === 0) {
                    break
                }
            }
            else if (direction === 9 || direction === -7) {
                if (i % 8 === 7) {
                    break
                }
            }



            i += direction
        }

    })
    return legalMoves
}

const getQueenMoves = (piece, field) => {

    let legalMoves = []
    let index = ""
    // find index
    field.forEach((field) => {
        if(field.piece === piece) {
            index = field.field
        }
    })


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
            
            // break if end of row or column is reached
            if (i % 8 === 0 && direction === -1) {
                break
            }
            else if (i % 8 === 7 && direction === 1) {
                break
            }
            else if (i >= 56 && direction === 8) {
                break
            }
            else if (i <= 7 && direction === -8) {
                break
            }
            else if (direction === 7 || direction === -9) {
                if (i % 8 === 0) {
                    break
                }
            }
            else if (direction === 9 || direction === -7) {
                if (i % 8 === 7) {
                    break
                }
            }

            i += direction

        }

    })
    
    return legalMoves
}

const getKingMoves = (piece, field) => {
    let legalMoves = []
    let index = 0
    // find index
    field.forEach((field) => {
        if(field.piece === piece) {

            index = field.field
            
        }
    }
    )


    let color = piece.pieceColor
    let directions = [1, -1, 8, -8, 7, 9, -7, -9]
    directions.forEach((direction) => {
        let i = index + direction
        if (i >= 0 && i <= 63) {

                if (field[i].piece === '' || field[i].pieceColor !== color) {
                    legalMoves.push(field[i].field)
                }
            
        }
    }
    )
    return legalMoves

}