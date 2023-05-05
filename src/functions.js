export function dataToArray(data){
    let array = []
    for (let i = 0; i < 8; i++) {
        array.push([])
        for (let j = 0; j < 8; j++) {
            array[i].push(data.lists[data.listOrder[i][j]])
        }
    }
    return array
}

/*export function ArrayToData(array){
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
}*/

export function charadeRight(board){
    let y = 0 //var for counting how many fields are occupied
    let result = ''
    if (board[7][7][0] == 'R' && board[7][6] == null && board[7][5] == null && board[7][4][0] == 'K'){
        result += 'K'
    } else y++
    if (board[7][0][0] == 'R' && board[7][1] == null && board[7][2] == null && board[7][3] == null && board[7][4][0] == 'K'){
        result += 'Q'
    } else y++
    if (board[0][7][0] == 'r' && board[0][6] == null && board[0][5] == null && board[0][4][0] == 'k'){
        result += 'k'
    } else y++
    if (board[0][0][0] == 'r' && board[0][1] == null && board[0][2] == null && board[0][3] == null && board[0][4][0] == 'k'){
        result += 'q'
    } else y++

    if (y == 4){
        result += '-'
    }
    return result
}