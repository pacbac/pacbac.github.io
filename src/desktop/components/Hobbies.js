import React, { Component } from 'react';
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import YouTubeIcon from '@material-ui/icons/YouTube';

import pianoPic from '../../resources/images/piano.png';
import sheetMusicPic from '../../resources/images/sheetmusic.png';
import meleePic from '../../resources/images/melee.jpg';
import hikingPic from '../../resources/images/hiking.jpg';


const styles = theme => ({
    card: {
        maxWidth: '25vw',
        margin: 'auto',
        position: 'relative',
        height: '100%',
    },
    pic: {
        width: '100%',
    },
    fab: {
        margin: 10,
        color: '#f2f2f2',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'all ease 0.2s',
        }
    },
    sheetsButton: {
        backgroundColor: '#3b945e',
        '&:hover': {
            backgroundColor: '#3b945e'
        }
    },
    youtubeIcon: {
        marginRight: 5
    },
    youtubeButton: {
        backgroundColor: '#f03224',
        '&:hover': {
            backgroundColor: '#f03224'
        }
    },
    link: theme.link,
    gridChild: {
        display: 'flex',
        alignItems: 'stretch', // make all cards same size
        position: 'relative',
    },
    leftMostCard: {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    rightMostCard: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    }
});

let PianoCard = ({ classes }) => (
    <Grid item>
        <Card className={classNames(classes.card, classes.leftMostCard)}>
            <CardHeader title="Piano" />
            <CardMedia component="img" src={pianoPic} className={classes.pic} />
            <CardContent>
                <Typography variant="subtitle2">
                    I have been playing classical piano since 5 years old, but I really started becoming passionate about the
                    instrument in the last ~5 years. Along with classical, I also play some anime and game music.
                    I have a YouTube channel where I upload game/anime arrangements and classical performances! Check it out here:
                    <br/>
                    <Link target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCxCW-I6tuiFRa91_19vAnOQ" className={classes.link}>
                        <Fab variant="extended" aria-label="Delete" className={classNames(classes.fab, classes.youtubeButton)}>
                            <YouTubeIcon className={classes.youtubeIcon} />
                            My Channel
                        </Fab>
                    </Link>
                </Typography>
            </CardContent>
        </Card>
    </Grid>
);

PianoCard = withStyles(styles)(PianoCard);

let MusicSheetsCard = ({ classes }) => (
    <Grid item>  
        <Card className={classes.card}>
            <CardHeader title="Music Sheets" />
            <CardMedia component="img" src={sheetMusicPic} className={classes.pic} />
            <CardContent>
                <Typography variant="subtitle2">
                    Sometimes, I will create and release an arrangement for a song (particularly anime and game soundtracks),
                    especially if there are a lack of sheets available. You can see my public sheets on MuseScore:
                </Typography>
                <Link target="_blank" rel="noopener" href="https://musescore.com/user/28468108" className={classes.link}>
                    <Fab variant="extended" aria-label="Delete" className={classNames(classes.fab, classes.sheetsButton)}>
                        <MusicNoteIcon />
                        My Sheets
                    </Fab>
                </Link>
            </CardContent>
        </Card>
    </Grid>
);

MusicSheetsCard = withStyles(styles)(MusicSheetsCard);

let HikingCard = ({ classes }) => (
    <Grid item>
        <Card className={classNames(classes.card, classes.rightMostCard)}>
            <CardHeader title="Hiking" />
            <CardMedia component="img" src={hikingPic} className={classes.pic} />
            <CardContent>
                <Typography variant="subtitle2">
                    Recently, I've been going to a lot of local hiking trails that are lesser known.
                    It's pretty crazy how much nature we pass by every day that we don't fully discover.
                    I'm just glad that I get to enjoy the experience of hopping over rocks to cross rivers and climbing over steep hills while I still can.
                </Typography>
            </CardContent>
        </Card>
    </Grid>
);

HikingCard = withStyles(styles)(HikingCard);

const Hobbies = ({ classes }) => (
    <div id="hobbies-content">
        <Typography
            variant="h2"
            style={{
                color: 'black',
                fontWeight: 500,
                margin: '6vw 0',
                transition: '0.2s',
            }}
        >In My Free Time...</Typography>
        <Grid item container
            justify="center"
            spacing={2}
            className={classes.gridParent}
        >
            <PianoCard />
            <MusicSheetsCard />
            <HikingCard />
        </Grid>
    </div>
);

export default withStyles(styles)(Hobbies);