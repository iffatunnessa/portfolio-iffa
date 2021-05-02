import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import Nav from '../../Nav/Nav';
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
    
    const classes = useStyles();
    return (
        <div>
        <h1 className={classes.header}></h1>
            <hr style={{ width: "300px", border: "2px solid rgba(170, 170, 170, 0.623)" }} />
            <Grid container className={classes.root}>
                <Grid item xs={3}>
                    <Nav />
                </Grid>
                <Grid item xs={8}>
                    <h1>okay </h1>
                </Grid>
            </Grid>
      </div>           
    );
};

export default ProjectIndividual;