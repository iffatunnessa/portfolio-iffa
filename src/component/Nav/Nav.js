import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import profilePicture from "../../image/dp.jpg";
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: "23%",
        flexShrink: 0,
    },
    drawerPaper: {
        width: "23%",
    },
    large: {
        width: "200px",
        height: "200px",
        marginLeft: "20%",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    }
}));

const Nav = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Avatar alt="Iffatun Nessa" src={profilePicture} className={classes.large} />
                <div>
                    <IconButton color="secondary" aria-label="upload picture" href='https://github.com/iffatunnessa'>
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </IconButton>
                    <IconButton color="primary" aria-label="upload picture" href='https://www.linkedin.com/in/iffatun-nessa/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button component={Link} to='/home'>
                        <ListItemIcon> <HomeIcon /></ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <ListItem button component={Link} to='/resume'>
                        <ListItemIcon> <InsertDriveFileIcon /> </ListItemIcon>
                        <ListItemText primary={'Resume'} />
                    </ListItem>
                    <ListItem button component={Link} to='/projects'>
                        <ListItemIcon> <AssignmentTurnedInIcon /></ListItemIcon>
                        <ListItemText primary={'Projects'} />
                    </ListItem>
                    <ListItem button component={Link} to='/blog'>
                        <ListItemIcon> <DescriptionIcon /></ListItemIcon>
                        <ListItemText primary={'Blog'} />
                    </ListItem>
                    <ListItem button component={Link} to='/contact'>
                        <ListItemIcon> <MailIcon /></ListItemIcon>
                        <ListItemText primary={'Contact Me'} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default Nav;