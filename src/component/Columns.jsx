import React, { useEffect, useState, useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import { useUpdateBoardMutation } from '../features/api/apiSlice';

// import StrictModeDroppable from '../helpers/StrictModeDroppable';
import Column from './Column';
import GenericModal from './GenericModal';

function Columns() {
  const { currentBoard } = useSelector((state) => state.content);
  const [updateBoard] = useUpdateBoardMutation();
  const [localColumns, setLocalColumns] = useState(currentBoard.columns);

  useEffect(() => {
    setLocalColumns(currentBoard?.columns);
  }, [currentBoard]);

  const handleDragEnd = useCallback((result) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId
			&& source.index === destination.index
    ) {
      return;
    }
    const updatedColumns = structuredClone(localColumns);

    const sourceColumnIndex = updatedColumns.findIndex(
      (column) => column.columnId === source.droppableId,
    );
    const sourceColumn = updatedColumns[sourceColumnIndex];
    const [removedTask] = sourceColumn.tasks.splice(source.index, 1);

    const destinationColumnIndex = updatedColumns.findIndex(
      (column) => column.columnId === destination.droppableId,
    );

    const destinationColumn = updatedColumns[destinationColumnIndex];
    destinationColumn.tasks.splice(destination.index, 0, removedTask);

    setLocalColumns(updatedColumns);
    const updatedCurrentBoard = structuredClone(currentBoard);
    updatedCurrentBoard.columns = updatedColumns;
    updateBoard(updatedCurrentBoard);
  }, [localColumns, currentBoard, updateBoard]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="columns-wrapper">
        {localColumns.map((column, index) => (
          <Column
            key={column.columnId}
            column={column}
            index={index}
          />
        ))}
        <GenericModal />
      </div>
    </DragDropContext>
  );
}

export default Columns;
