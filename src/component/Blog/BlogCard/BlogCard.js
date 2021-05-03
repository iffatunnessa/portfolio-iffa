import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
});

const BlogCard = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt='Demo'
                            height="140"
                            image=''
                            title='blog1'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Demo Title
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Demo description.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href='https://medium.com/@iffatunnessa'>
                            See More
                </Button>
                    </CardActions>
                </Card>
            </Grid>

        </div>
    );
};

export default BlogCard;