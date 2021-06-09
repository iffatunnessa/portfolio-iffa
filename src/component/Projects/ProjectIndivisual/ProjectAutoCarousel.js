import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useParams } from 'react-router';
import ProjectScreenShots from '../../../FakeData/ProjectScreenShots';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    image: {
        margin: '5%',
        width: 800,
        height: 400,
    },
    mb: {
        paddingTop: '5%',
        paddingLeft: '30%',
        width: 'auto',
        height: 'auto',
    }
}));
const ProjectAutoCarousel = () => {
    const { id } = useParams();
    const project = ProjectScreenShots.find(project => project.id === id);
    const { image, screenshot1, screenshot2, screenshot3, screenshot4 } = project;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Carousel
                NextIcon={<KeyboardArrowRightIcon />}
                PrevIcon={<KeyboardArrowLeftIcon />}
                animation='slide'
                style={{ textAlign: 'center' }}
            >
                <img className={classes.image} src={image} alt='' />
                <img className={classes.image} src={screenshot1} alt='' />
                <img className={classes.image} src={screenshot2} alt='' />
                <img className={classes.image} src={screenshot3} alt='' />
                <img className={classes.image} src={screenshot4} alt='' />
                {/* {screenshot5 !== undefined && <img className={classes.image} src={screenshot5} alt='' />}
            {screenshot5 !== undefined && <img className={classes.image} src={screenshot6} alt='' />}
            {screenshot5 !== undefined && <img className={classes.image} src={screenshot7} alt='' />}
            {screenshot5 !== undefined && <img className={classes.image} src={screenshot8} alt='' />}
            {screenshot5 !== undefined && <img className={classes.mb} src={screenshotmb} alt='' />} */}

            </Carousel>
        </Grid>
    );
};

export default ProjectAutoCarousel;