import React from 'react';
import classNames from 'classnames'
import { Typography, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from '@material-ui/core/Link';

import linkedinWhiteIcon from '../../resources/icons/linkedinwhite.png';
import githubWhiteIcon from '../../resources/icons/githubwhite.png';
import linkedinBlackIcon from '../../resources/icons/linkedinblack.png';
import githubBlackIcon from '../../resources/icons/githubblack.png';

const styles = {
    nameRoot: {
        color: 'white',
    },
    buttonRoot: {
        color: 'white',
        position: 'relative',
        top: 3,
        '&:hover': {
            transform: 'scale(1.2)',
            transition: 'all ease 0.2s',
        },
    },
    header: {
        backgroundColor: 'transparent',
        boxShadow: '0 0 0',
        height: 70,
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

const HeaderLayer = ({ classes: { nameRoot, buttonRoot, header }, appBarFontColor }) => {
    const buttonStyle = { backgroundColor: 'transparent'};
    return (
        <AppBar position="sticky" className="App-header" color="primary" classes={{ root: header }}>
            <Toolbar>
                <Grid container
                    justify="space-between"
                    alignItems="center"
                    spacing={24}
                >
                    <Grid item>
                        <Typography variant="h5" style={{ color: appBarFontColor }} classes={{ root: nameRoot }}>Clayton Chu</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton classes={{ root: buttonRoot }} style={buttonStyle} disableRipple>
                            <a href="https://www.youtube.com/channel/UCxCW-I6tuiFRa91_19vAnOQ" style={{ color: appBarFontColor, textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                                <YouTubeIcon fontSize="large" />
                            </a>
                        </IconButton> 
                        <IconButton className="App-header__icon" style={buttonStyle} disableRipple>
                            <GithubIcon color={appBarFontColor} />
                        </IconButton>
                        <IconButton className="App-header__icon" style={buttonStyle} disableRipple>
                            <LinkedInIcon color={appBarFontColor} />
                        </IconButton>
                        <IconButton classes={{ root: buttonRoot }} style={buttonStyle} disableRipple>
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