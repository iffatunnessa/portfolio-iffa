import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        background: 'none',
        color: 'white',
        marginBottom: 20,
        border:"none",
        objectFit:"cover",
        transition: "all .2s ease-in-out",
        "&:hover": {
            objectFit:"cover",
            transform: "scale(1.1)",
        }
    },
    img: {
        padding: 40,
        height : "200px",
        width : "200px",
        textAlign: "center"
    },
});


const ServiceCard = ({ data }) => {
    const { serviceName, image, description, tools } = data;
    const classes = useStyles();
    return (
        <Grid item sm={4} xs={9}>
            <Card className={classes.root} spacing={4}>
                <CardMedia
                    component="img"
                    alt={serviceName}
                    image={image}
                    title={serviceName}
                    className={classes.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"bolder"}}>
                        {serviceName}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body2" component="h6">Tools: {tools}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ServiceCard;