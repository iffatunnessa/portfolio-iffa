import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles({
    root: {
        maxWidth: 280,
    },
    img:{
        padding:40,
        textAlign:"center"
    }
});


const ServiceCard = ({ data }) => {
    const { serviceName, image, description, tools } = data;
    const classes = useStyles();
    return (
        <Grid Item xs={4} spacing={2}>
            <Card className={classes.root} >
                <CardMedia
                    component="img"
                    alt={serviceName}
                    height="190"
                    image={image}
                    title={serviceName}
                    className={classes.img} 
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {serviceName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body2" component="h6">Tools: {tools}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ServiceCard;