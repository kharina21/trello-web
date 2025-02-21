import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import { Delete, Home as HomeIcon } from "@mui/icons-material";
import { red } from "@mui/material/colors";
function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>kha21dev</h1>
            <div>
                <Button variant="text">Hello button</Button>
                <Button variant="contained">Hello button</Button>
                <Button variant="outlined">Hello button</Button>
            </div>
            <div>
                <HomeIcon color="success" />
            </div>
            <div>
                <Button variant="contained" sx={{ color: red[500] }}>
                    <Delete />
                </Button>
            </div>
        </>
    );
}

export default App;
