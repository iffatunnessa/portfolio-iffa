import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


const ProjectCard = ({ data }) => {
    const {projectName,image,description,tools,liveSiteUrl,githubClientURL} = data;
    const classes = useStyles();
    return (
        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardActionArea>
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
                        <Typography variant="body2" color="textSecondary" component="p">
                           {description}
                        </Typography>
                        <Typography variant="body2" component="h6">Tools: {tools}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" href={liveSiteUrl}>
                        Live 
                </Button>
                    <Button size="small" color="primary" href={githubClientURL}>
                        Git Code
                </Button>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default ProjectCard;