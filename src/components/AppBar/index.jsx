import ModeSelect from '../../components/ModeSelect';
import Box from '@mui/material/Box';
function AppBoard() {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.light',
                height: (theme) => theme.trello.appBarHeight,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <ModeSelect />
        </Box>
    );
}

export default AppBoard;
