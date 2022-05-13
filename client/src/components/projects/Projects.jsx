import React from 'react';
import Banner from './Banner';
import Posts from './Posts';
import { Grid, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../../theme"
import Categories from './Categories';

const useStyles = makeStyles({
    category: {
        position: 'sticky',
    }
})

function Projects() {

    const classes = useStyles();

    return (
        <>
        <ThemeProvider theme={theme}>
        <Banner />
        </ThemeProvider>
        <Grid container item>
            <Grid item lg={2} xs={12} sm={2}>
                <Categories />
            </Grid>
            <Grid container item lg={10} xs={12} sm={10}>
                <Posts />
            </Grid>
        </Grid>
        </>
    )
}

export default Projects;
