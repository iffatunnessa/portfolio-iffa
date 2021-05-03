import React from 'react';
import Nav from '../../Nav/Nav';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FadeIn from 'react-fade-in';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px',
        marginLeft: '20px'
    },
}));
const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.root}>
                <Grid item xs={9} sm={3}>
                    <Nav />
                </Grid>
                <Grid item xs={9} sm={8}>
                    <FadeIn>
                        <Header />
                    </FadeIn>
                    <FadeIn>
                        <Services />
                    </FadeIn>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;