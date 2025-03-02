import { useState } from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip'
//icon
import Cloud from '@mui/icons-material/Cloud';
import ExpandMore from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ListCard from './ListCard/ListCard'
import { sortByOrderedArr } from '~/utils/sorts';

//dndkit
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Column({ column }) {

    //dndkit
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: column?._id, data: { ...column } });
    const dndKitColumnStyle = { touchAction: 'none', transform: CSS.Translate.toString(transform), transition, height: '100%', opacity: isDragging ? 0.5 : undefined };

    //
    const sortedArr = sortByOrderedArr(column?.cards, column?.cardOrderIds, '_id')
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    return (


        <div
            ref={setNodeRef}
            style={dndKitColumnStyle}
            {...attributes}
        >
            <Box
                {...listeners}
                sx={{
                    minWidth: 300, maxWidth: 300,
                    bgcolor: (theme) => theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
                    ml: 2,
                    borderRadius: '6px',
                    height: 'fit-content',
                    maxHeight: theme => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
                    // overflowX: 'auto',
                    // overflowY: 'hidden'
                }
                }>
                {/* header */}
                < Box sx={{ height: theme => theme.trello.columnHeaderHeight, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>{column?.title}</Typography>
                    <Box>
                        <Tooltip title='More options'>
                            <ExpandMore id='basic-column-dropdown'
                                aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                                aria-haspopup='true'
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{ color: 'text.primary', cursor: 'pointer' }} />
                        </Tooltip>
                        <Menu
                            id='basic-menu-column-dropdown'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-column-dropdown',
                            }}
                        >
                            <MenuItem>
                                <ListItemIcon><AddCardIcon fontSize='small' /></ListItemIcon>
                                <ListItemText>Add new card</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon><ContentCopy fontSize='small' /></ListItemIcon>
                                <ListItemText>Copy</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon><ContentPaste fontSize='small' /></ListItemIcon>
                                <ListItemText>Paste</ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon><DeleteForeverIcon fontSize='small' /></ListItemIcon>
                                <ListItemText>Remove this column</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon><Cloud fontSize='small' /></ListItemIcon>
                                <ListItemText>Archive this column</ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box >
                <ListCard cards={sortedArr} />
                {/* footer */}
                < Box sx={{ height: theme => theme.trello.columnFooterHeight, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Button startIcon={<AddCardIcon />}>Add new card</Button>
                    <Tooltip title='drag to move'>
                        <DragHandleIcon sx={{ cursor: 'pointer' }} />
                    </Tooltip>
                </Box >
            </Box >
        </div>
    );
}

export default Column;