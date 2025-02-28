import Box from '@mui/material/Box'
import Card from './Card/Card';


function ListCard() {

    return (
        < Box sx={{
            p: '0 5px', margin: '0 5px', display: 'flex', flexDirection: 'column', gap: 1, overflowX: 'hidden', overflowY: 'auto',
            maxHeight: theme => `calc( 
              ${theme.trello.boardContentHeight} - 
              ${theme.spacing(5)} -
              ${theme.trello.columnHeaderHeight} - 
              ${theme.trello.columnFooterHeight}
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
            <Card />
        </Box >
    );
}

export default ListCard;