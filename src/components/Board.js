import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { initialData } from '../data';
import '../styles/App.css';


export default function App() {
  const [data, setData] = useState(initialData);


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

    const arrayToData = (array) => {
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
    


  const onDragEnd = (result) => {
    const { destination, source } = result;

    // Basic checks
    if (!destination) return;
    

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    let sourcePiece = data.lists[source.droppableId];
    let destinationPiece = data.lists[destination.droppableId];

    // check if piece that is moved is actually a piece
    if (sourcePiece.length === 0) return


    console.log(dataToArray(data))
    


    // TODO zugvalidierung

    // field is occupied    
    if (destinationPiece.length > 0) return




    // TODO



    

      
    // hier wurde vorher geschaut ob sourceList === destinationList, ich weiss net warum, falls was nicht klappt, mal checken

    
    // Daten Setzen
    const newData = {
        ...data,
        lists: {
            ...data.lists,
            [source.droppableId]: '',
            [destination.droppableId]: sourcePiece,
        },
    };
    setData(newData);
    
  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className="column">
            {data.listOrder.map((liste, index) => {
                return (

                    <div className="row" key={index}> 
                        {liste.map((listId, index) => {
                            
                            const list = data.lists[listId];

                            const task = data.tasks[list]

                            return (
                                <Droppable droppableId={listId} key={listId}>
                                    {(provided, snapshot) => (
                                    <div
                                        
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className={`list ${snapshot.isDraggingOver ? 'dragging-over' : ''}, field`}
                                    >
                                        
                                    {  
                                        task !== undefined ?
                                        (
                                        <Draggable draggableId={task.id} index={index} key={task.id}>
                                            {(provided, snapshot) => (
                                            <div
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}
                                                className={`task ${snapshot.isDragging ? 'dragging' : ''}, piece, ${task.color}`}
                                            >
                                                <img src={require(`./../images/pieces/${task.id.slice(0, 1).toLowerCase()}_${task.color}.png`)} alt="piece" />
                                            </div>
                                            )}
                                        </Draggable>
                                        )
                                        :
                                        (
                                            <div  className="piece, dummy"></div>
                                        )
                                    }
                                        {provided.placeholder}
                                    </div>
                                    )}
                                </Droppable>
                            );
                        })}
                    </div>
                );
            })}
    </div>
    </DragDropContext>
  );
}

