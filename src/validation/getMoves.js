

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
        pawnMoves.push(index - 16)
    } else if (color === 'b' && index >= 8 && index <= 15) {
        pawnMoves.push(index + 16)
    }
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
    let index = ""
    // find index
    field.forEach((field) => {
        if(field.piece === piece) {
            index = field.field
        }
    })


    console.log(field, piece)
    console.log( "index: " + index	)
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