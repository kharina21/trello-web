import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { deepOrange, orange, blue } from '@mui/material/colors';

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

// Create a theme instance.
const theme = extendTheme({
    trello: {
        appBarHeight: APP_BAR_HEIGHT,
        boardBarHeight: BOARD_BAR_HEIGHT,
        boardContentHeight: BOARD_CONTENT_HEIGHT,
        columnHeaderHeight: COLUMN_HEADER_HEIGHT,
        columnFooterHeight: COLUMN_FOOTER_HEIGHT,
    },
    colorSchemes: {
        //     light: {
        //         palette: {
        //             primary: {
        //                 main: "#0288d1"
        //             },
        //             secondary: deepOrange,
        //         },
        //     },
        //     dark: {
        //         palette: {
        //             primary: blue,
        //             secondary: orange,
        //         },
        //     },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0, // Thêm để reset margin mặc định của body
                    padding: 0, // Thêm để reset padding mặc định của body
                    '& *': {
                        boxSizing: 'border-box'
                    },

                    '*::-webkit-scrollbar': {
                        height: '8px',
                        width: '8px'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#dcdde1',
                        borderRadius: '8px',
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#fff',
                    },


                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderWidth: 0.5
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    // color: theme.palette.primary.main,
                    fontSize: '0.875rem',
                    // border: `1px solid ${theme.palette.primary.main}`,
                    // '.MuiOutlinedInput-notchedOutline': {
                    //     borderColor: theme.palette.primary.light,
                    // },
                    // '&:hover': {
                    //     '.MuiOutlinedInput-notchedOutline': {
                    //         borderColor: theme.palette.primary.main,
                    //     },
                    // },
                    '& fieldset': {
                        borderWidth: '0.5px !important'
                    },
                    '&:hover fieldset': {
                        borderWidth: '1.5px !important',
                    },
                    '&.Mui-focused fieldset': {
                        borderWidth: '1.5px !important',
                    }
                }),
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: '0.875rem',
                }),
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.MuiTypography-body1': {
                        fontSize: '0.875rem'
                    }
                },
            },
        },
    },
});

export default theme;
