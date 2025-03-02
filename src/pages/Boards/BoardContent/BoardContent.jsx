
import Box from "@mui/material/Box";
import ListColumn from './ListColumns/ListColumn';
import { sortByOrderedArr } from "~/utils/sorts";
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core';
import { useEffect, useState } from "react";
import { arrayMove, } from '@dnd-kit/sortable';



function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 100, tolerance: 5 } })
  // const sensors = useSensors(pointerSensor)
  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumn, setorderedColumn] = useState([]);
  useEffect(() => {
    setorderedColumn(sortByOrderedArr(board?.columns, board?.columnOrderIds, '_id'));
  }, [board])
  const handleDragEnd = (event) => {
    console.log('handleDragEvent: ', event)
    const { active, over } = event;

    if (!over) return;
    if (active.id !== over.id) {
      console.log('keo tha')
      const oldIndex = orderedColumn.findIndex(c => c._id === active.id)
      const newIndex = orderedColumn.findIndex(c => c._id === over.id)
      //move column
      const dndOrderedColumns = arrayMove(orderedColumn, oldIndex, newIndex)
      setorderedColumn(dndOrderedColumns);
      //luu vao database la done

    }
  }
    ;
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          width: "100%",
          height: (theme) => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >


        <ListColumn columns={orderedColumn} />
      </Box >
    </DndContext>

  );
}

export default BoardContent;
