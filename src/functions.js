import {initialData} from "./data.js";

export function dataToArray(data){
    let array = []
    for (let i = 0; i < 8; i++) {
        array.push([])
        for (let j = 0; j < 8; j++) {
            if (data.lists[data.listOrder[i][j]] != null){
                array[i].push(data.lists[data.listOrder[i][j]])
            } else array[i] = '';
        }
    }
    return array
}

/*export function arrayToData(array){
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

