import React from 'react';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { useParams } from 'react-router';
import ProjectScreenShots from '../../../FakeData/ProjectScreenShots';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    image:{
        margin:'5%',
        width:800,
        height: 400,
    }
}));
const ProjectAutoCarousel = () => {
    const { id } = useParams();
    const project = ProjectScreenShots.find(project => project.id === id);
    const { image, screenshot1, screenshot2, screenshot3, screenshot4 } = project;
    const classes = useStyles();
    return (
        <Carousel
            NextIcon={<KeyboardArrowRightIcon />}
            PrevIcon={<KeyboardArrowLeftIcon />}
            animation = 'slide'
            style={{textAlign: 'center'}}
        >
            <img className={classes.image} src={image} alt='' />
            <img className={classes.image} src={screenshot1} alt='' />
            <img className={classes.image} src={screenshot2} alt='' />
            <img className={classes.image} src={screenshot3} alt='' />
            <img className={classes.image} src={screenshot4} alt='' />
        </Carousel>
    );
};

export default ProjectAutoCarousel;