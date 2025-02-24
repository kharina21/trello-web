import { useState } from 'react';
import ModeSelect from '../../components/ModeSelect';
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
function AppBar() {
    return (
        <Box
            sx={{
                height: (theme) => theme.trello.appBarHeight,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: 2,
                paddingLeft: 2,
                gap: 2,
                overflowX: 'auto',
            }}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                gap={2}
            >
                <AppsIcon sx={{ color: 'primary.main' }} />
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    gap={0.5}
                >
                    <SvgIcon
                        component={TrelloIcon}
                        inheritViewBox
                        sx={{ color: 'primary.main' }}
                        fontSize='small'
                    />
                    <Typography
                        variant='span'
                        fontSize={'1.2rem'}
                        fontWeight={'bold'}
                        color={'primary.main'}
                    >
                        Trello
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 1, alignItems: 'center' }}>
                    <Workspaces />
                    <Recent />
                    <Starred />
                    <Templates />
                    <Button variant='outlined'>Create</Button>
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
                    id='outlined-search'
                    label='Search'
                    type='search'
                    size='small'
                    sx={{ minWidth: '120px' }}
                />

                <ModeSelect sx={{ minWidth: '120px' }} />
                <Tooltip
                    title='Notifications'
                    disableInteractive
                >
                    <Badge
                        color='secondary'
                        variant='dot'
                        sx={{ cursor: 'pointer', color: 'primary.main' }}
                    >
                        <NotificationsNoneIcon />
                    </Badge>
                </Tooltip>
                <Tooltip
                    title='Help'
                    disableInteractive
                >
                    <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
                </Tooltip>

                <Profile />
            </Box>
        </Box>
    );
}

export default AppBar;
