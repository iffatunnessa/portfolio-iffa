import { Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ServiceFakeData from '../../../FakeData/ServiceFake'
import ServiceCard from './ServiceCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '20px'
    },
    control: {
        padding: theme.spacing(2),
    }
}));
const Services = () => {
    const classes = useStyles();
    const [service, setService] = useState(ServiceFakeData);
    return (
        <div style={{ marginTop: 100 }}>
            <h1>What I do</h1>
            <Grid className={classes.root}
                container
                direction="row"
            >
                {/* <Grid> */}
                {
                    service.map(element => <ServiceCard data={element} />)
                }
                {/* </Grid> */}
            </Grid>
        </div>
    );
};

export default Services;