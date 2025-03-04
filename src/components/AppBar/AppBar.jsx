import { useState } from 'react';
import ModeSelect from '../ModeSelect/ModeSelect';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Profile from './Menus/Profile';

//icon
import AppsIcon from '@mui/icons-material/Apps';
import SvgIcon from '@mui/icons-material/Apps';
import TrelloIcon from '~/assets/trello.svg?react';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function AppBar() {
    const [inputSearch, setInputSearch] = useState('');
    const handleInputSearch = (e) => setInputSearch(e.target.value);


    return (
        <Box
            sx={{
                height: (theme) => theme.trello.appBarHeight,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingX: 2,
                gap: 2,
                overflowX: 'auto',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
                '&::-webkit-scrollbar-track': { m: 2 }
            }}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                gap={2}
            >
                <AppsIcon sx={{ color: 'white' }} />
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    gap={0.5}
                >
                    <SvgIcon
                        component={TrelloIcon}
                        inheritViewBox
                        sx={{ color: 'white' }}
                        fontSize='small'
                    />
                    <Typography
                        variant='span'
                        fontSize={'1.2rem'}
                        fontWeight={'bold'}
                        color={'white'}
                    >
                        Trello
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1, alignItems: 'center' }}>
                    <Workspaces />
                    <Recent />
                    <Starred />
                    <Templates />
                    <Button variant='outlined' startIcon={<LibraryAddIcon />} sx={{ color: 'white', border: 'none', '&:hover': { border: 'none' } }}>Create</Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <TextField
                    value={inputSearch}
                    onChange={handleInputSearch}
                    id='outlined-search'
                    label='Search'
                    type='text'
                    size='small'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: 'white' }} fontSize='small' />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <CloseIcon sx={{ color: 'white', cursor: 'pointer', display: inputSearch === '' ? 'none' : 'block' }} onClick={() => setInputSearch("")} fontSize='small' />
                        )
                    }}
                    sx={{
                        minWidth: '120px', maxWidth: '170px',
                        '& label': { color: 'white' },
                        '& input': { color: 'white' },
                        '& label.Mui-focused': { color: 'white' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' },
                            '&:hover fieldset': { borderColor: 'white' },
                            '&.Mui-focused fieldset': { borderColor: 'white' }
                        }
                    }}
                />

                <ModeSelect sx={{ minWidth: '120px' }} />
                <Tooltip
                    title='Notifications'
                    disableInteractive
                >
                    <Badge
                        color='warning'
                        variant='dot'
                        sx={{ cursor: 'pointer', color: 'white' }}
                    >
                        <NotificationsNoneIcon />
                    </Badge>
                </Tooltip>
                <Tooltip
                    title='Help'
                    disableInteractive
                >
                    <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
                </Tooltip>

                <Profile />
            </Box>
        </Box >
    );
}

export default AppBar;
