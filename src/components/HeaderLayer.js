import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link';

import linkedinWhiteIcon from '../resources/icons/linkedinwhite.png';
import githubWhiteIcon from '../resources/icons/githubwhite.png';
import linkedinBlackIcon from '../resources/icons/linkedinblack.png';
import githubBlackIcon from '../resources/icons/githubblack.png';

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
        backgroundColor: 'transparent',
        boxShadow: '0 0 0',
    }
};

const LinkedInIcon = ({ color }) => (
    <Link href="https://linkedin.com/in/claytonjc" target="_blank" rel="noopener">
        <img width={36} className="social-media-icon" src={color === 'black' ? linkedinBlackIcon : linkedinWhiteIcon} alt="linkedin" />
    </Link>
);

const GithubIcon = ({ color }) => (
    <Link href="https://github.com/pacbac" target="_blank" rel="noopener">
        <img width={36} className="social-media-icon" src={color === 'black' ? githubBlackIcon : githubWhiteIcon} alt="github" />
    </Link>
);

const HeaderLayer = ({ classes: { nameRoot, emailRoot, headerColorPrimary }, appBarFontColor }) => {

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
                            <Typography variant="h5" style={{ color: appBarFontColor }} classes={{ root: nameRoot }}>Clayton Chu</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton className="App-header__icon">
                            <GithubIcon color={appBarFontColor} />
                        </IconButton>
                        <IconButton className="App-header__icon">
                            <LinkedInIcon color={appBarFontColor} />
                        </IconButton>
                        <IconButton classes={{ root: emailRoot }}>
                            <a href="mailto:claytonchu99@gmail.com" style={{ color: appBarFontColor, textDecoration: 'none' }}>
                                <EmailIcon fontSize="large" />
                            </a>
                        </IconButton> 
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(HeaderLayer);