export function isLowerCase(str)
{
    return str === str.toLowerCase() && str !== str.toUpperCase();
}

export function dataToArray  (data) {
    let array = [[], [], [], [], [], [], [], []]
    let rows = "12345678".split("")
    let columns = "abcdefgh".split("")
    rows.forEach(element => {
        columns.forEach(element2 => {
            array[Number(element)-1].push(data.lists[element2 + element])
        });
    });
    return array
}

export function numbersToPieces  (array)  {
    let newArray = []
    // since in the original, each peace of the same kind has a unique number, i.e. R1, R2 then r1, r2, p1, p2, etc.
    // we need to make sure that we add numbers again, since the original data does not have them
    let counts = {'p': 1, 'P': 1, 'r': 1, 'R': 1, 'n': 1, 'N': 1, 'b': 1, 'B': 1, 'q': 1, 'Q': 1, 'k': 1, 'K': 1}
    array.forEach(element => {
        let newElement = []
        element.forEach(element2 => {
            if (element2.length === 0) {
                newElement.push('')
            }
            else{
            
            newElement.push(element2 + counts[element2])
            counts[element2] = counts[element2] + 1
            }

        });
        newArray.push(newElement)
    });
    return newArray
}

export function  arrayToData  (array, data)  {
    let newData = {
        ...data,
        lists: {
            ...data.lists,
        },
    };

    // implement in in the correct way, so the board is not flipped over
    let rows = "12345678".split("")
    let columns = "abcdefgh".split("")
    rows.forEach(element => {
        columns.forEach(element2 => {
            newData.lists[element2 + element] = array[8-Number(element)][columns.indexOf(element2)]
        });
    });


    return newData
}

export function  boardToField  (board) {
    let fieldOrg = dataToArray(board)
    
    // bring field in the right format
    let fieldFull = []

    fieldOrg.forEach((element) => {
        element.forEach((element2) => {
            fieldFull.push(element2)
        })
    })
    let field = fieldFull.map((element, index) => {
        if (element.length === 1) return {
            field: index,
            piece: '',
            pieceColor: ''
        }
        return {
            field: index,
            piece: element,
            pieceColor: isLowerCase(element.slice(1, 1)) ? 'b' : 'w'
        }
    })
    return field
}

export function fieldToBoard (field) {
    let board = [[], [], [], [], [], [], [], []]
    field.forEach((element) => {
        board[Math.floor(element.field / 8)].push(element.piece)
    })
    return board
}

export function indeciesToFields  (indecies) {
    let fields = []
    indecies.forEach((element) => {
        let row = Math.floor(element / 8)
        let column = element % 8
        fields.push(String.fromCharCode(97 + column) + (1 + row))
    })
    return fields
}

export function returnNewData (board, source, destination, sourcePiece){

    let newLists = board.lists
    newLists[source.droppableId] = ''
    newLists[destination.droppableId] = sourcePiece

    let newData = board
    newData.lists = newLists
    
    return newData
};