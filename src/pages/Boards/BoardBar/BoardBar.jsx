import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button'

const CHIP_BOARDBAR_STYLE = {
    color: 'white', backgroundColor: "transparent", border: 'none', px: '5px', borderRadius: '4px',
    '& .MuiSvgIcon-root': { color: 'white' }, '&:hover': { bgcolor: 'primary.50' }, '&:hover': { backgroundColor: 'primary.30' }
}


function BoardBar() {
    return (
        <Box
            px={2}
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
                height: (theme) => theme.trello.boardBarHeight, width: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, overflowX: 'auto',
                '&::-webkit-scrollbar-track': { m: 2 } //thanh scroll cach ra 16px

            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip icon={<DashboardIcon />} label="Kha21dev" clickable onClick={() => { }}
                    sx={CHIP_BOARDBAR_STYLE} />
                <Chip icon={<VpnLockIcon />} label="Public/Private Workspace" clickable onClick={() => { }}
                    sx={CHIP_BOARDBAR_STYLE} />
                <Chip icon={<AddToDriveIcon />} label="Add to drive" clickable onClick={() => { }}
                    sx={CHIP_BOARDBAR_STYLE} />
                <Chip icon={<ElectricBoltIcon />} label="Automation" clickable onClick={() => { }}
                    sx={CHIP_BOARDBAR_STYLE} />
                <Chip icon={<FilterListIcon />} label="Filter" clickable onClick={() => { }}
                    sx={CHIP_BOARDBAR_STYLE} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button variant='outlined' startIcon={<PersonAddIcon />}
                    sx={{
                        color: 'white', borderColor: 'white',
                        '&:hover': {
                            borderColor: 'white'
                        }
                    }}
                >
                    Invite
                </Button>
                <AvatarGroup max={3} sx={{ gap: '12px', '& .MuiAvatar-root': { height: 34, width: 34, fontSize: 16, border: 'none' } }}>
                    <Tooltip title="Kha21dev">
                        <Avatar alt="Kha21dev" src="src/assets/kha21dev.jpg" />
                    </Tooltip>
                    <Tooltip title="Kha21dev">
                        <Avatar alt="Kha21dev" src="src/assets/huong24.jpg" />
                    </Tooltip>
                    <Tooltip title="Kha21dev">
                        <Avatar alt="Kha21dev" src="src/assets/lan.jpg" />
                    </Tooltip>
                    <Tooltip title="Kha21dev">
                        <Avatar alt="Kha21dev" src="src/assets/lan1.jpg" />
                    </Tooltip>
                </AvatarGroup>
            </Box>
        </Box>
    );
}

export default BoardBar;
