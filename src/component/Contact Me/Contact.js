import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Alert from '@material-ui/lab/Alert';
import { Button, Container,  Grid, makeStyles, TextField } from '@material-ui/core';
import Nav from '../Nav/Nav';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100px',

        },
    }, container: {
        marginTop: 50,
        paddingTop: 20,
        paddingBottom: 60,
        borderRadius: 5,
        background: '#2d3041',
        color: 'white',
        objectFit:"cover",
        transition: "all .2s ease-in-out",
        "&:hover": {
            objectFit:"cover",
            transform: "scale(1.1)",
        }
    },
    btn: {
        marginTop: 20
    },
    header: {
        textAlign: 'center',
        fontSize: 50
    }
}));

const Contact = () => {
    const [state, handleSubmit] = useForm("meqvezpr");
    const classes = useStyles();
    if (state.succeeded) {
        return <Alert severity="success">Thank you! Your Message has been sent!</Alert>;
    }
    return (

        <Grid container className={classes.root}>
            <Grid item xs={3}>
                <Nav />
            </Grid>
            <Grid item xs={8} >
                <h1 className={classes.header}>Get in Touch</h1>
                <hr style={{ width: "300px", border: "2px solid rgba(170, 170, 170, 0.623)" }} />
                <Container maxWidth="sm" className={classes.container}>
                    <Grid container className={classes.root} >
                        <Grid item xs={12}>
                            <form onSubmit={handleSubmit}>
                                <TextField id="standard-basic" label="Email Address" htmlFor="email"
                                    id="email"
                                    type="email"
                                    name="email"
                                    fullWidth='true'
                                    required='true'
                                    InputLabelProps={{
                                        style: { color: '#fff' }, 
                                     }}
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                                <TextField id="standard-basic" label="Message"
                                    multiline='true'
                                    rowsMax={4}
                                    id="message"
                                    name="message"
                                    fullWidth='true'
                                    required='true'
                                    InputLabelProps={{
                                        style: { color: '#fff' }, 
                                     }}
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <Button type="submit" className={classes.btn} disabled={state.submitting} color='primary' variant="contained">
                                    Submit
                        </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    );
};

export default Contact;