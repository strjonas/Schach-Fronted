import {dataToArray} from "./functions.js";
import {initialData} from "./data.js";

let board = dataToArray(initialData)
let fen = "r3k2r/pppppppp/8/8/8/8/PPPPPPPP/R3K2R w KQkq - 0 1"

function boardToFen(board) {
    let result = "";
    for(let y = 0; y < board.length; y++)
    {
        let empty = 0;
        for(let x = 0; x < board[y].length; x++)
        {
            let c = board[y][x];
            if(c != undefined || c != null) {        //nicht schön aber geht
                if(empty > 0)
                {
                    result += empty.toString();
                    empty = 0;
                }
                result += board[y][x][0];
            } else {
                empty += 1;
            }
        }
        if(empty > 0)
        {
            result += empty.toString();
        }
        if(y < board.length - 1)  // Added to eliminate last '/'
        {
            result += '/';
        }
    }
    result += ' w'

    if (board[7][7][0] == 'R' && board[7][6] == null && board[7][5] == null && board[7][4][0] == 'K'){
        result += ' K'
    } else if (board[7][0][0] == 'R' && board[7][1] == null && board[7][2] == null && board[7][3] == null && board[7][4][0] == 'K'){
        result += ' Q'
    } else if (board[7][7][0] == 'R' && board[7][6] == null && board[7][5] == null && board[7][4] == null && board[7][3][0] == 'K'){
        result += ' K'
    } else if (board[0][7][0] == 'r' && board[0][6] == null && board[0][5] == null && board[0][4][0] == 'k'){
        result += ' k'
    } else if (board[0][0][0] == 'R' && board[0][1] == null && board[0][2] == null && board[0][3] == null && board[0][4][0] == 'K'){
        result += ' q'
    } else result += ' -'

    result += ' - 0 1';
    return result;
}

function fenToBoard(fen){
    let fenArray = fenToArray(fen);
    let board = dataToArray(initialData);
    let i = 0;
    for(let y = 0; y < board.length; y++)
    {
        for(let x = 0; x < board[y].length; x++)
        {
            board[y][x] = fenArray[i]
            i++
        }
    }
    return board
}

function fenToArray(fen) {
    const fenString = fen.split(' ')[0].replace(/\//g, '');
    const fenArrayNums = fenString.split('');
    const fenArray = fenArrayNums.map(digit => {
        if (parseInt(digit)) {
            return [...Array(parseInt(digit)).fill(null)];
        };
        return digit;
    }).flat();
    return fenArray;
}

//console.log(board);
let a = fenToBoard(fen)
console.log(a);
console.log(boardToFen(a));
//console.log(fenToBoard(fen));