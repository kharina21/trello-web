import { useState } from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

//icon
import ContentCut from '@mui/icons-material/ContentCut';
import Cloud from '@mui/icons-material/Cloud';
import ExpandMore from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment';


const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '50px'

function BoardContent() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);


  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: "100%",
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}
    >
      <Box sx={{
        width: '100%', height: '100%', display: 'flex', overflowX: 'auto', overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>
        {/* column 1*/}
        <Box sx={{
          minWidth: 300, maxWidth: 300,
          bgcolor: (theme) => theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: theme => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
          overflowX: 'auto',
          overflowY: 'hidden'
        }}>

          {/* header */}
          <Box sx={{ height: COLUMN_HEADER_HEIGHT, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>Column Title</Typography>
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
          </Box>
          {/* content */}
          <Box sx={{
            p: '0 5px', margin: '0 5px', display: 'flex', flexDirection: 'column', gap: 1, overflowX: 'hidden', overflowY: 'auto',
            maxHeight: theme => `calc( 
          ${theme.trello.boardContentHeight} - 
          ${theme.spacing(5)} -
          ${COLUMN_HEADER_HEIGHT} - 
          ${COLUMN_FOOTER_HEIGHT}
          )`,
            '::-webkit-scrollbar': {
              height: '8px',
              width: '8px'
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da',
              borderRadius: '8px',
            },
            '::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf',
            },

          }}>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardMedia
                sx={{ height: 140 }}
                image="./src/assets/kha21dev.jpg"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Kha21dev</Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }} >
                <Button startIcon={<GroupIcon />} size="small">20</Button>
                <Button startIcon={<CommentIcon />} size="small">15</Button>
                <Button startIcon={<AttachmentIcon />} size="small">10</Button>

              </CardActions>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>

          </Box>
          {/* footer */}
          <Box sx={{ height: COLUMN_FOOTER_HEIGHT, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title='drag to move'>
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
        {/* column 2*/}
        <Box sx={{
          minWidth: 300, maxWidth: 300,
          bgcolor: (theme) => theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: theme => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,

        }}>

          {/* header */}
          <Box sx={{ height: COLUMN_HEADER_HEIGHT, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>Column Title</Typography>
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
          </Box>
          {/* content */}
          <Box sx={{
            p: '0 5px', margin: '0 5px', display: 'flex', flexDirection: 'column', gap: 1, overflowX: 'hidden', overflowY: 'auto',
            maxHeight: theme => `calc( 
          ${theme.trello.boardContentHeight} - 
          ${theme.spacing(5)} -
          ${COLUMN_HEADER_HEIGHT} - 
          ${COLUMN_FOOTER_HEIGHT}
          )`,
            '::-webkit-scrollbar': {
              height: '8px',
              width: '8px'
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da',
              borderRadius: '8px',
            },
            '::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf',
            },

          }}>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardMedia
                sx={{ height: 140 }}
                image="./src/assets/kha21dev.jpg"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Kha21dev</Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }} >
                <Button startIcon={<GroupIcon />} size="small">20</Button>
                <Button startIcon={<CommentIcon />} size="small">15</Button>
                <Button startIcon={<AttachmentIcon />} size="small">10</Button>

              </CardActions>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>

          </Box>
          {/* footer */}
          <Box sx={{ height: COLUMN_FOOTER_HEIGHT, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title='drag to move'>
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>

    </Box >
  );
}

export default BoardContent;
