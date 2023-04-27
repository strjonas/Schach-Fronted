import React from 'react'

import { DragDropContext } from "react-beautiful-dnd";

export default function Board() {

    const handleOnDragEnd = (result) => {
        console.log(result);
    }

  return (
          <DragDropContext
            onDragEnd={handleOnDragEnd}
            onDragStart={(e) => {
              this.isDragging = true;
              this.draggingObj = e;
            }}
          >
                <div>Board</div>
          </DragDropContext>

  )
}
