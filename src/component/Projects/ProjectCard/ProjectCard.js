import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        background: '#2d3041',
        color: 'white',
        objectFit:"cover",
        transition: "all .2s ease-in-out",
        "&:hover": {
            objectFit:"cover",
            transform: "scale(1.1)",
        }
    },
});

const ProjectCard = ({ data }) => {
    const { projectName, image, description, liveSiteUrl, githubClientURL, id } = data;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
                <CardActionArea component={Link} to={'/project/' + id}>
                    <CardMedia
                        component="img"
                        alt={projectName}
                        height="140"
                        image={image}
                        title={projectName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {projectName}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {description}
                        </Typography>
                        <Typography variant="body2" component="h6">Click to see more...</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => window.open(githubClientURL, "_blank")}>git code</Button>
                    <Button onClick={() => window.open(liveSiteUrl, "_blank")}>Website</Button>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default ProjectCard;