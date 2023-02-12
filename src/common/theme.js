import { createTheme } from '@mui/material/styles';
import BKamran from 'assets/fonts/BKamran/BKamran.ttf';
import { faIR } from '@mui/material/locale';

export const theme = createTheme({
    palette: {
        secondary: {
            light: '#8b3386',
            main: '#262626',
            dark: '#4d0048'
        },
        primary: {
            light: "#C0C0C0",
            main: "#BDBDBD",
            dark: "#848484"
        },
        warning: {
            light: '#8C8C8C',
            main: '#404040',
            dark: '#ff9909'
        },
        Error: {
            light: '#eb5b7a',
            main: '#e63359',
            dark: '#a1233e'
        },
        info: {
            light: '#92c2e0',
            main: '#77b3d9',
            dark: '#537d97'
        },
        pink: {
            main: '#D95032',

        },
        yellow: {
            light: '#F6F6F6',
            main: '#ffbe21',
            dark: '#b28517'
        }
    },
    typography: {
        htmlFontSize: 22,
        fontFamily: 'BKamran',
        fontSize: 25,
        fontWeightLight: 700,
        fontWeightRegular: 800,
        fontWeightMedium: 800,
        fontWeightBold: 900,
        h1: {
            fontSize: "3rem",
            fontWeight: 500
        },
        subtitle1: {
            fontSize: 20,
            fontWeight: 900
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'BKamran';
              font-style: normal;
              font-display: swap;
              src: local('BKamran'), local('BKamran-Regular'), url(${BKamran}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
    }
}, faIR);

