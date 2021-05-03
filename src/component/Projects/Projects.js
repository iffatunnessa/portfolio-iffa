import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import FakeProjectData from '../../FakeData/ProjectsFakeData'
import ProjectCard from './ProjectCard/ProjectCard';
import FadeIn from 'react-fade-in';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px',
        marginLeft: 10
    },
    control: {
        padding: theme.spacing(2),
    },
    header: {
        textAlign: 'center',
        fontSize: 50,
        marginTop: 80,
    }
}));
const Projects = () => {
    const classes = useStyles();
    const [fakeProjectData, setFakeProjectData] = useState(FakeProjectData);
    return (
        <div>
            <FadeIn><h1 className={classes.header}>My Projects</h1>
                <hr style={{ width: "300px", border: "2px solid rgba(170, 170, 170, 0.623)" }} />
            </FadeIn>

            <Grid container className={classes.root}>
                <Grid item xs={12} sm={3}>
                    <Nav />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <FadeIn>
                        <Grid container className={classes.root} spacing={4}>
                            {
                                fakeProjectData.map(data => <ProjectCard data={data} />)
                            }
                        </Grid>
                    </FadeIn>
                </Grid>
            </Grid>
        </div>
    );
};

export default Projects;