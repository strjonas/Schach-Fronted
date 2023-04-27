import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { initialData } from '../data';
// styling
import '../styles/App.css';





export default function App() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    console.log(destination)
    console.log(source)
    console.log(draggableId)

    console.log(data.lists)
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];

    console.log(sourceList)
    console.log(destinationList)
    

    if (sourceList === destinationList) {
      const newTaskIds = Array.from(sourceList.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newList = {
        ...sourceList,
        taskIds: newTaskIds,
      };

      const newData = {
        ...data,
        lists: {
          ...data.lists,
          [newList.id]: newList,
        },
      };
      console.log("hi1")
      setData(newData);
    } else {
      const sourceTaskIds = Array.from(sourceList.taskIds);
      sourceTaskIds.splice(source.index, 1);
      const newSourceList = {
        ...sourceList,
        taskIds: sourceTaskIds,
      };

      const destinationTaskIds = Array.from(destinationList.taskIds);
      destinationTaskIds.splice(destination.index, 0, draggableId);
      const newDestinationList = {
        ...destinationList,
        taskIds: destinationTaskIds,
      };

      const newData = {
        ...data,
        lists: {
          ...data.lists,
          [newSourceList.id]: newSourceList,
          [newDestinationList.id]: newDestinationList,
        },
      };
      console.log(newDestinationList)
      console.log(newData)
      console.log("hi")
      setData(newData);
    }
  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <div className="column">
            {data.listOrder.map((liste, index) => {
                return (

                    <div className="row" key={index}> 
                        {liste.map((listId) => {
                            
                            const list = data.lists[listId];
                            const tasks = list.taskIds.map((taskId) => data.tasks[taskId]);

                            return (
                            <Droppable droppableId={list.id} key={list.id}>
                                {(provided, snapshot) => (
                                <div
                                    
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={`list ${snapshot.isDraggingOver ? 'dragging-over' : ''}, field`}
                                >
                                    
                                    {tasks.map((task, index) => (
                                    <Draggable draggableId={task.id} index={index} key={task.id}>
                                        {(provided, snapshot) => (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                            className={`task ${snapshot.isDragging ? 'dragging' : ''}, piece`}
                                        >
                                            {task.content}
                                        </div>
                                        )}
                                    </Draggable>
                                    ))}
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

