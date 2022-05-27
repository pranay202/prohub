import React from 'react';
import Banner from './Banner';
import Posts from './Posts';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../../theme"
import Categories from './Categories';

function Projects() {

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
