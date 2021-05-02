import React from 'react';
import profilePicture from "../../../image/dp.jpg";
import { Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
      marginTop: '20px'
  },
  dp: {
      maxWidth: '300px',
  },
  button: {
      margin: theme.spacing(1),
  },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
        <Grid item xs={7}>
            <h3>Software Engineer</h3>
            <h1>Hi! I'm <span>Iffatun Nessa</span></h1>
            <p>Hi! I am Iffa. I am a passionate Software Engineer. I have tried to balance both my academic and skill development in my undergrad period. I've learned different JavaScript technologies (eg. Express, Node, React, Rest API) and front-end frameworks (Bootstrap, Material-UI). I have spent most of my time in skill development either it's academic or non-academic. I am skilled in making digital illustrations and video editing software. I think I am a quick learner and ready to explore more.
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
        <Grid item xs={5}>
            <Grid container justify="center" spacing={2}>
                <img src={profilePicture} alt='' className={classes.dp} />
            </Grid>
        </Grid>
    </Grid>
    );
};

export default Header;