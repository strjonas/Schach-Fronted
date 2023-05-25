import {dataToArray} from "./funcs.js";
import {initialData} from "../components/initialData.js";


export function boardToFen(board) {
    let result = "";
    for(let y = 0; y < board.length; y++)
    {
        let empty = 0;
        for(const element of board[y])
        {
            let c = element;
            if(c !== '') {
                if(empty > 0) {
                    result += empty.toString();
                    empty = 0;
                }
                result += element[0];
            } else {
                empty += 1;
            }
        }
        if(empty > 0) {
            result += empty.toString();
        }
        if(y < board.length - 1) {   //um letztes / weg zu machen
            result += '/';
        }
    }
    return result;
}
export function fenToBoard(fen) {
    let fenArray = fenToArray(fen);
    let board = dataToArray(initialData);
    let i = 0;
    for(const element of board)
    {
        for(let x = 0; x < element.length; x++)
        {
            element[x] = fenArray[i]
            i++
        }
    }
    return board
}
export function fenToArray(fen) {
    const fenString = fen.split(' ')[0].replace(/\//g, '');
    const fenArrayNums = fenString.split('');
    const fenArray = fenArrayNums.map(digit => {
        if (parseInt(digit)) {
            return [...Array(parseInt(digit)).fill('')];
        };
        return digit;
    }).flat();
    return fenArray;
}
export function evaluateFen(fen){
    let array = fen.split(' ')
    let obj = {
        board: fenToBoard(array[0]),
        player: array[1],
        charade: evaluateCharade(array[2]),
        enPassant: array[3],
        halfmove: array[4],
        fullmove: array[5]
    }
    return obj
}
function evaluateCharade(charade){
    let a = charade.split("")
    a.length = 4
    let charadeOutput = [false, false, false, false]
    if (a.includes('K')){
        charadeOutput[0] = true
    }
    if (a.includes('Q')){
        charadeOutput[1] = true
    }
    if (a.includes('k')){
        charadeOutput[2] = true
    }
    if (a.includes('q')){
        charadeOutput[3] = true
    }
    return charadeOutput
}