import { evaluateFen } from "../utils/fen"
import  updateDataFromFenObject  from "../components/Board"

export function onReceiveFenFromServer(fenstring){
    let obj = evaluateFen(fenstring)

    updateDataFromFenObject(obj)

}

export function  sendMoveToServer (move)  {

}