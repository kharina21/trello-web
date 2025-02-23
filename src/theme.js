import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { teal, deepOrange, cyan, orange, blue } from "@mui/material/colors";

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: blue,
        secondary: orange,
      },
    },
  }, components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {}
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: 0,
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          // border: `1px solid ${theme.palette.primary.main}`,
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light,
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            },
          },
          '& fieldset': {
            borderWidth: '1px !important',
          }
        })
      },
    }, MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({ color: theme.palette.primary.main, fontSize: '0.875rem' }),
      },
    },
  },
});

export default theme;
