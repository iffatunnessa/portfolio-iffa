import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginTop: '20px',
        width: 280,
        objectFit:"cover",
        transition: "all .2s ease-in-out",
        "&:hover": {
            objectFit:"cover",
            transform: "scale(1.1)",
        }
    },

});

const BlogCard = ({ data }) => {
    const { id, redirectedLink, photo } = data;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
                <CardActionArea onClick={() => window.open(redirectedLink, "_blank")}>
                    <CardMedia
                        component="img"
                        alt="blog"
                        height="170"
                        image={photo}
                        title='blog'
                    />
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default BlogCard;