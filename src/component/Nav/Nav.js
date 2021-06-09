import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import { AppBar, createMuiTheme, Hidden, IconButton, MuiThemeProvider, Toolbar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    large: {
        width: "200px",
        height: "200px",
        marginLeft: "17%",
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(5),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        background: '#121212',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(5),
    },
    links:{
        objectFit:"cover",
        transition: "all .2s ease-in-out",
        "&:hover": {
            objectFit:"cover",
            transform: "scale(1.1)",
        }
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.10)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.5)',
            outline: '1px solid slategrey'
        }
      
    }
}));

const Nav = () => {
    // const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Avatar alt="Iffatun Nessa" src={profilePicture} className={classes.large} />
            <div style={{paddingLeft: '30%', paddingTop:'10%'}}>
                <IconButton style={{color: "#6e5494", fontSize:40}} className={classes.links} aria-label="upload picture" onClick={() => window.open('https://github.com/iffatunnessa', "_blank")}>
                    <FontAwesomeIcon icon={faGithubSquare} />
                </IconButton>
                <IconButton style={{color: "#00a0dc", fontSize:40}} className={classes.links} aria-label="upload picture" onClick={() => window.open('https://www.linkedin.com/in/iffatun-nessa/', "_blank")}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </IconButton>
            </div>
            <Divider style={{backgroundColor:'#2b2b2b'}} />
            <List>
                <ListItem button component={Link} to='/home'>
                    <ListItemIcon> <HomeIcon style={{ color: 'white' }} /></ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
                <ListItem button component={Link} to='/resume'>
                    <ListItemIcon> <InsertDriveFileIcon style={{ color: 'white' }}/> </ListItemIcon>
                    <ListItemText primary={'Resume'} />
                </ListItem>
                <ListItem button component={Link} to='/projects'>
                    <ListItemIcon> <AssignmentTurnedInIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary={'Projects'} />
                </ListItem>
                <ListItem button component={Link} to='/blog'>
                    <ListItemIcon> <DescriptionIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary={'Blog'} />
                </ListItem>
                <ListItem button component={Link} to='/contact'>
                    <ListItemIcon> <MailIcon style={{ color: 'white' }}/></ListItemIcon>
                    <ListItemText primary={'Contact Me'} />
                </ListItem>
            </List>
        </div>);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                {/* <Toolbar> */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    // edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                {/* </Toolbar> */}
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        // container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div >

    );
}

export default Nav;