import Box from '@mui/material/Box'
import Button from "@mui/material/Button";
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function ListColumn({ columns }) {

    return (
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
    );
}

export default ListColumn;