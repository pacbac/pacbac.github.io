import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    typography: {
        fontFamily: 'Poppins',
        fontWeight: 300,
        color: {
            normal: 'white',
            hover: '#3b945e',
        }
    },
    card: {
        main: '#f2f2f2'
    },
    link: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
        }
    },
});