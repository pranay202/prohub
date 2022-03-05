import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
        h1:{ 
            fontFamily: ['"Crafty Girls"', 'Open Sans'].join(',')
        }
       }
})

export default theme;
