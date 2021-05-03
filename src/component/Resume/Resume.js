import { Grid, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import EducationCard from './EducationCard/EducationCard';
import EducationFake from '../../FakeData/EducationFakeData.json'
import SkillsCard from './SkillsCard/SkillsCard';
import FadeIn from 'react-fade-in';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px'
    },
    header: {
        textAlign: 'center',
        fontSize: 50,
        marginTop: 80,
    }
}));
const Resume = () => {
    const classes = useStyles();
    const [fakeEduData, setFakeEduData] = useState(EducationFake);
    const expertSkills = ['React', 'Node.js', 'Express.js', 'REST API', 'Javascript', 'ES6', 'Bootstrap', 'C/C++', 'PHP', 'MySQL', 'MSSQL', 'Firebase', 'Mongodb', 'MATLAB', 'OOP'];
    const comfortableSkills = ['Material UI', 'Python', 'C#', 'ASP.NET', 'JAVA', 'Deep Learning', 'phpmyadmin'];
    const familiarSkills = ['Redux', 'Angular'];
    const toots = [
        'VSCode', 'Visual Studio', 'Oracle Database', 'Android studio', 'MATLAB', 'Arduino', 'NetBeans', 'xampp'
    ]
    return (
        <div>
            <h1 className={classes.header}>Resume</h1>
            <hr style={{ width: "300px", border: "2px solid rgba(170, 170, 170, 0.623)" }} />
            <Grid container className={classes.root}>
                <Grid item xs={3}>
                    <Nav />
                </Grid>
                <Grid item xs={8}>
                    <Grid container className={classes.root} spacing={4}>
                        <Grid item xs={6}>
                            <h2>Education</h2>
                            <hr style={{ width: "300px", textAlign: "left", border: "1px solid blue" }} />
                            {
                                fakeEduData.map(data => <EducationCard data={data} />)
                            }

                        </Grid>
                        <Grid item xs={6}>
                            <FadeIn>
                                <h2>Programing Skills</h2>
                                <hr style={{ width: "300px", textAlign: "left", border: "1px solid blue" }} />
                                <div>
                                    <h3>Experts In</h3>
                                    {
                                        <SkillsCard data={expertSkills} />
                                    }
                                </div>
                                <div>
                                    <h3>Comfortable With</h3>
                                    {
                                        <SkillsCard data={comfortableSkills} />
                                    }
                                </div>
                                <div>
                                    <h3>Familier With</h3>
                                    {
                                        <SkillsCard data={familiarSkills} />
                                    }
                                </div>
                            </FadeIn>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Resume;