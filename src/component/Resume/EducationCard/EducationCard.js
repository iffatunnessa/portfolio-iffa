import { makeStyles } from '@material-ui/core';
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
    }
}));
const EducationCard = ({ data }) => {
    const { programName, institution, department, cgpa, year } = data;
    const classes = useStyles();
    return (
        <div>
            <h5 style={{ fontSize: 15, color: "#636574" }}> <span className={classes.yearNumber}>{year}</span> {programName} </h5>
            <div style={{ marginLeft: 90 }}>
                <p>{institution}</p>
                <p>{department}</p>
                <p>{cgpa}</p>

            </div>
            <hr style={{ marginBottom: 20 }} />
        </div>
    );
};

export default EducationCard;