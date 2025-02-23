// Board Details
import Container from '@mui/material/Container';
import AppBoard from '../../components/AppBar';
import BoardBar from './BoadBar';
import BoardContent from './BoardContent';
function Board() {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ height: '100vh' }}
        >
            <AppBoard />
            <BoardBar />
            <BoardContent />
        </Container>
    );
}

export default Board;
