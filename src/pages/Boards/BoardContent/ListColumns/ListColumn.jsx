import Box from '@mui/material/Box'
import Button from "@mui/material/Button";
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';

function ListColumn({ columns }) {
    /*
    SortableContext yêu cầu items là một mạng dạng ['id-1','id-2'] chứ không phải [{id: 'id-1'}, {id:'id-2'}]
    nếu khôngg đúng thì vẫn kéo thả được nhưng không có animation
    */
    return (
        //trong items la tra ve mot object chua cac id cua cot 
        <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
            <Box sx={{
                width: '100%', height: '100%', display: 'flex',
                overflowX: 'auto',
                overflowY: 'hidden',
                '&::-webkit-scrollbar-track': { m: 2 }
            }}>
                {columns?.map(column => <Column key={column?._id} column={column} />)}
                {/* add new column */}
                <Box sx={{
                    minWidth: '200px',
                    maxWidth: '200px',
                    mx: 2,
                    borderRadius: '6px',
                    height: 'fit-content',
                    bgcolor: '#ffffff3d'
                }}>
                    <Button startIcon={<NoteAddIcon />}
                        sx={{ color: 'white', width: '100%', justifyContent: 'start', pl: 2.5, py: 1 }}>
                        Add new column
                    </Button>
                </Box>
            </Box>
        </SortableContext>
    );
}

export default ListColumn;