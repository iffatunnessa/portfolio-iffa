import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Nav from '../Nav/Nav';
import BlogCard from './BlogCard/BlogCard';
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

const Blog = () => {
    const classes = useStyles();
    return (
        <div>
            <h1 className={classes.header}>Blog</h1>
            <hr style={{ width: "300px", border: "2px solid rgba(170, 170, 170, 0.623)" }} />
            <Grid container className={classes.root}>
            <Grid item xs={3}>
                <Nav />
            </Grid>
            <Grid item xs={8}>
                <Grid container className={classes.root} spacing={4}>
                   <BlogCard/>
                </Grid>
            </Grid>
        </Grid>
        </div>
    );
};

export default Blog;