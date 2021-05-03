import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        background:'#2d3041',
        color:'white'
    },
});

const ProjectCard = ({ data }) => {
    const {projectName,image,description,liveSiteUrl,githubClientURL,id} = data;
    const classes = useStyles();
    return (
        <Grid item xs={10} sm={4}>
            <Card className={classes.root}>
                <CardActionArea component={Link} to={'/project/'+id}>
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
                        <Typography variant="body2"  component="p">
                           {description}
                        </Typography>
                        <Typography variant="body2" component="h6">Click to see more...</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" href={liveSiteUrl}>
                        Live 
                </Button>
                    <Button size="small"  href={githubClientURL}>
                        Git Code
                </Button>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default ProjectCard;