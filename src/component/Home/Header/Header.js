import React, { Component, useEffect } from 'react';
import profilePicture from "../../../image/dp.jpg";
import { Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px'
    },
    dp: {
        maxWidth: '400px',
        paddingLeft:50,
        marginTop: '20px'
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const Header = () => {
    const classes = useStyles();
    const title = ['Software Engineer', 'MERN Stack Developer', 'Front-end Developer'];
    useEffect(() => {
        const interval =
            setInterval(() => {
                document.getElementById('title').innerText = 'MERN Stack Developer';
            }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12} sm={7}>
                    <h3 className='fade-in-out' id='title'> Software Engineer
                    </h3>
                    <h1 style={{ fontSize: 40 }}>Hi! I'm <span style={{ color: '#9ea9f1', textTransform: "uppercase", fontSize: 50, fontWeight: "bolder" }}>Iffatun Nessa</span></h1>
                    <p style={{ fontSize: 20 }}>I am a passionate Software Engineer. I have tried to balance both my academic and skill development in my undergrad period. I think I am a quick learner and ready to explore more.
                </p>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<GetAppIcon />}
                        href='https://drive.google.com/uc?export=download&id=1jUJToqOTQBvBceYmYV9UuIunkGIxjxRj'
                    >
                        Download Resume
                </Button>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Grid container justify="center" spacing={2}>
                        <img src={profilePicture} alt='' className={classes.dp} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;