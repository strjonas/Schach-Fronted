export function isLowerCase(str)
{
    return str === str.toLowerCase() && str !== str.toUpperCase();
}

export function dataToArray  (data) {
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

export function  arrayToData  (array, data)  {
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
            //console.log(array[Number(element)][columns.indexOf(element2)], element2 + element)
            newData.lists[element2 + element] = array[Number(element)][columns.indexOf(element2)]
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
        if (element.length === 0) return {
            field: index,
            piece: '',
            pieceColor: ''
        }
        return {
            field: index,
            piece: element,
            pieceColor: isLowerCase(element.slice(0, 1)) ? 'b' : 'w'
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