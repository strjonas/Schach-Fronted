/* eslint-disable no-unused-vars */

  const dataToArray = (data) => {
    let array = []
    for (let i = 0; i < 8; i++) {
        array.push([])
        for (let j = 0; j < 8; j++) {
            array[i].push(data.lists[data.listOrder[i][j]])
        }
    }
    return array
    }

    const arrayToData = (array, data) => {
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
    }