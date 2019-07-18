import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import EmailIcon from '@material-ui/icons/Email';

import linkedinIcon from '../resources/icons/linkedin.png';

const styles = {
    nameRoot: {
        color: 'white',
    },
    emailRoot: {
        color: 'white',
        position: 'relative',
        top: 3,
    },
    headerColorPrimary: {
        backgroundColor: 'rgba(0,0,0,0.3)',
    }
};

const LinkedInIcon = () => (
    <a href="https://linkedin.com/in/claytonjc" target="_blank">
        <img width={36} className="social-media-icon" src={linkedinIcon} />
    </a>
);

const HeaderLayer = ({ classes: { nameRoot, emailRoot, headerColorPrimary } }) => {
    return (
        <AppBar position="sticky" className="App-header" color="primary" classes={{ colorPrimary: headerColorPrimary }}>
            <Toolbar>
                <Grid container
                    justify="space-between"
                    alignItems="center"
                    spacing={24}
                >
                    <Grid item>
                        <IconButton>
                            <Typography variant="h5" classes={{ root: nameRoot }}>Clayton Chu</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className="App-header__icon">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton classes={{ root: emailRoot }}>
                            <EmailIcon fontSize="large" />
                        </IconButton> 
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(HeaderLayer);