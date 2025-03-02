import Box from '@mui/material/Box';
import ListColumn from './ListColumns/ListColumn';
import { sortByOrderedArr } from '~/utils/sorts';
import {
    DndContext,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors,
    MouseSensor,
    TouchSensor,
    defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import { useEffect, useState } from 'react';
import { arrayMove } from '@dnd-kit/sortable';

import Column from './ListColumns/Column/Column';
import Card from './ListColumns/Column/ListCard/Card/Card';

const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
    CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD',
};

function BoardContent({ board }) {
    const pointerSensor = useSensor(PointerSensor, {
        activationConstraint: { distance: 10 },
    });

    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: { distance: 10 },
    });

    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: { delay: 100, tolerance: 5 },
    });

    // const sensors = useSensors(pointerSensor)
    const sensors = useSensors(mouseSensor, touchSensor);

    const [orderedColumn, setorderedColumn] = useState([]);
    const [activeDragItemId, setActiveDragItemId] = useState(null);
    const [activeDragItemType, setActiveDragItemType] = useState(null);
    const [activeDragItemData, setActiveDragItemData] = useState(null);

    useEffect(() => {
        setorderedColumn(
            sortByOrderedArr(board?.columns, board?.columnOrderIds, '_id')
        );
    }, [board]);

    const handleDragStart = (event) => {
        console.log('handleDragStart: ', event);
        setActiveDragItemId(event?.active?.id);
        setActiveDragItemType(
            event?.active?.data?.current?.columnId
                ? ACTIVE_DRAG_ITEM_TYPE.CARD
                : ACTIVE_DRAG_ITEM_TYPE.COLUMN
        );
        setActiveDragItemData(event?.active?.data?.current);
    };

    const handleDragEnd = (event) => {
        console.log('handleDragEnd: ', event);
        const { active, over } = event;

        if (!over) return;
        if (active.id !== over.id) {
            console.log('keo tha');
            const oldIndex = orderedColumn.findIndex(
                (c) => c._id === active.id
            );
            const newIndex = orderedColumn.findIndex((c) => c._id === over.id);
            //move column
            const dndOrderedColumns = arrayMove(
                orderedColumn,
                oldIndex,
                newIndex
            );
            setorderedColumn(dndOrderedColumns);
            //luu vao database la done
        }

        setActiveDragItemId(null);
        setActiveDragItemType(null);
        setActiveDragItemData(null);
    };

    const customDropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({
            styles: {
                active: {
                    opacity: '0.5',
                },
            },
        }),
    };
    return (
        <DndContext
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            sensors={sensors}
        >
            <Box
                sx={{
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
                    width: '100%',
                    height: (theme) => theme.trello.boardContentHeight,
                    p: '10px 0',
                }}
            >
                <ListColumn columns={orderedColumn} />
                <DragOverlay dropAnimation={customDropAnimation}>
                    {!activeDragItemType && null}
                    {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
                        <Column column={activeDragItemData} />
                    )}
                    {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
                        <Card card={activeDragItemData} />
                    )}
                </DragOverlay>
            </Box>
        </DndContext>
    );
}

export default BoardContent;
