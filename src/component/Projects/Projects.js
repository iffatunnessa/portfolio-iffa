import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import FakeProjectData from '../../FakeData/ProjectsFakeData'
import ProjectCard from './ProjectCard/ProjectCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px'
    },
    control: {
        padding: theme.spacing(2),
    }
}));
const Projects = () => {
    const classes = useStyles();
    const [fakeProjectData, setFakeProjectData] = useState(FakeProjectData);
    return (
        <Grid container className={classes.root}>
            <Grid item xs={3}>
                <Nav />
            </Grid>
            <Grid item xs={8}>
                <Grid container className={classes.root} spacing={4}>
                    {
                        fakeProjectData.map(data => <ProjectCard data={data} />)
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Projects;