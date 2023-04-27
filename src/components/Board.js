import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { initialData } from '../data';
import '../styles/App.css';


export default function App() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    
    const sourcePiece = sourceList.taskIds;
    const destinationPiece = destinationList.taskIds;

    // field is occupied    
    if (destinationPiece.length > 0) return

    // check if piece that is moved is actually a piece
    if (sourcePiece.length === 0) return


    // move the peace to the destination
    sourceList.taskIds = '';
    destinationList.taskIds = sourcePiece
      
    // hier wurde vorher geschaut ob sourceList === destinationList, ich weiss net warum, falls was nicht klappt, mal checken

    const newData = {
        ...data,
        lists: {
            ...data.lists,
            [sourceList.id]: sourceList,
            [destinationList.id]: destinationList,
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

                            const task = data.tasks[list.taskIds]

                            return (
                                <Droppable droppableId={list.id} key={list.id}>
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

