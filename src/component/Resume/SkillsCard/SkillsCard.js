import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    yearNumber: {
        // border: "2px solid white",
        borderRadius: 4,
        padding: 4,
        fontSize: 14,
        textAlign: "center",
        margin:3,
        color: "white",
        background : "#636574"
    }
}));
const SkillsCard = ({ data }) => {
    const classes = useStyles();
    return (
        <div>
            <Box
                display="flex"
                flexWrap="wrap"
                p={1}
                m={1}
            >
                {
                    data.map(element =>
                        <Box className={classes.yearNumber}> {element}</Box>
                    )
                }

            </Box>
            <hr style={{ marginBottom: 20 }} />
        </div>
    );
};

export default SkillsCard;