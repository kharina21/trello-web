import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

///////////////MUI
import { useColorScheme } from "@mui/material/styles";

//icon
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
//Box
import Box from "@mui/material/Box";
import { WrapText } from "@mui/icons-material";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <FormControl size="small" sx={{
      '& fieldset': { borderColor: 'white!important', minWidth: 106 }


    }}>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        onChange={handleChange}
        sx={{
          color: 'white',
          '& .MuiSvgIcon-root': { color: 'white!important' }
        }}
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

export default ModeSelect;
