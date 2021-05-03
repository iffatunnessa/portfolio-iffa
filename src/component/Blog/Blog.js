import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import FadeIn from 'react-fade-in';
import Nav from '../Nav/Nav';
import BlogCard from './BlogCard/BlogCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px'
    },
    control: {
        padding: theme.spacing(2),
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
            <FadeIn><h1 className={classes.header}>Blog</h1>
                <hr style={{ width: "300px", border: "2px solid rgba(170, 170, 170, 0.623)" }} />
            </FadeIn>
            <Grid container className={classes.root}>
                <Grid item xs={3}>
                    <Nav />
                </Grid>
                <Grid item xs={8}>
                    <FadeIn>
                        <Grid container className={classes.root} >
                            {/* <BlogCard /> */}
                            <h3 className='fade-in-out'>Blogs are coming soon...</h3>
                        </Grid>
                    </FadeIn>
                </Grid>
            </Grid>
        </div>
    );
};

export default Blog;