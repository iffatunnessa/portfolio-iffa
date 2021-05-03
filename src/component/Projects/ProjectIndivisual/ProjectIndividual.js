import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Nav from '../../Nav/Nav';
import fakeProjectData from '../../../FakeData/ProjectsFakeData'
import ProjectAutoCarousel from './ProjectAutoCarousel';
import ProjectDetails from './ProjectDetails';
import ProjectTools from './ProjectTools';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px'
    },
    header: {
        textAlign: 'center',
        fontSize: 50
    }
}));

const ProjectIndividual = () => {
    const { id } = useParams();
    const project = fakeProjectData.find(project => project.id === id);
    const { projectName, tools, liveSiteUrl, githubClientURL , fullDetails } = project;
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.header}>{projectName}</h1>
            <hr style={{ width: "300px", border: "2px solid rgba(170, 170, 170, 0.623)" }} />
            <Grid container className={classes.root}>
                <Grid item xs={3}>
                    <Nav />
                </Grid>
                <Grid item xs={8}>
                    <ProjectAutoCarousel />
                    <Grid container className={classes.root} spacing={4}>
                        <Grid item xs={8}>
                            <ProjectDetails details={fullDetails}/>
                        </Grid>
                        <Grid item xs={4}>
                            <ProjectTools tools={tools} />
                            <Button onClick={()=> window.open(githubClientURL, "_blank")}>git code</Button>
                            <Button onClick={()=> window.open(liveSiteUrl, "_blank")}>Website</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProjectIndividual;