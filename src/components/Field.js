import React from 'react'
import Piece from './Piece'
import { Droppable, Draggable } from "react-beautiful-dnd";

export default function Field({id, index}) {
  return (
    <div>
        <Droppable droppableId={id}>
            {(provided) => (
                <div

                ref={provided.innerRef}
                {...provided.droppableProps}
                >
                    <Draggable draggableId={id} index={index}>
                        {(provided) => (
                            <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            >
                                <Piece/>
                            </div>
                        )}
                    </Draggable>
                </div>
            )}
        </Droppable>
        
        
    </div>
  )
}
