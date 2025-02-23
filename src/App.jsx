import { useState } from "react";
import { Button } from "@mui/material";
import { Delete, ForkRight, Home as HomeIcon } from "@mui/icons-material";
import { useColorScheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

//icon
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

//Box
import Box from "@mui/material/Box";

function SelectSmall() {
    const { mode, setMode } = useColorScheme();
    const handleChange = (event) => {
        setMode(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
                labelId="label-select-dark-light-mode"
                id="select-dark-light-mode"
                value={mode}
                onChange={handleChange}
            >
                <MenuItem value="light">
                    <Box display="flex" alignItems="center" gap={1}>
                        <LightModeIcon fontSize="small" />
                        Light
                    </Box>
                </MenuItem>
                <MenuItem value="dark">
                    <Box display="flex" alignItems="center" gap={1}>
                        <DarkModeOutlinedIcon fontSize="small" />
                        Dark
                    </Box>
                </MenuItem>
                <MenuItem value="system">
                    <Box display="flex" alignItems="center" gap={1}>
                        <SettingsBrightnessIcon fontSize="small" />
                        System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
}

function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    return (
        <Button
            onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
            }}
        >
            {mode === "light" ? "Turn dark" : "Turn light"}
        </Button>
    );
}

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>kha21dev</h1>
            <SelectSmall />
        </>
    );
}

export default App;
