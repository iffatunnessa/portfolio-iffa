import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    yearNumber: {
        border: "2px solid",
        borderRadius: 4,
        padding: 10,
        width: 60,
        fontSize: 14,
        textAlign: "center",
        marginRight: 30,
        color: "#636574"
    }
}));
const EducationCard = ({ data }) => {
    const { programName, institution, department, cgpa, year } = data;
    const classes = useStyles();
    return (
        <div>
            <Box
                display="flex"
                flexWrap="wrap"
                p={1}
                m={1}>
                <h5 className={classes.yearNumber}>{year}</h5>
                <h5 style={{ fontSize: 15, color: "#636574", paddingTop: '10px' }}>  {programName} </h5>
            </Box>
            <div style={{ marginLeft: 90 }}>
                <p>{institution}</p>
                <p>{department}</p>
                <p>{cgpa}</p>

            </div>
            <hr style={{ width: 200, marginBottom: 20 }} />
        </div>
    );
};

export default EducationCard;