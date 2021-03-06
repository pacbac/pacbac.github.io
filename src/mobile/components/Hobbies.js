import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import pianoPic from '../../resources/images/piano.png';
import meleePic from '../../resources/images/melee.jpg';
import sheetMusicPic from '../../resources/images/sheetmusic.png';

const styles = theme => ({
    card: {
        margin: 'auto auto 20px auto',
        position: 'relative',
        borderRadius: 0,
        backgroundColor: '#f2f2f2',
        height: '100%',
    },
    pic: {
        width: '100%',
    },
    fab: {
        margin: 10,
        backgroundColor: '#3b945e',
        color: '#f2f2f2',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'all ease 0.2s',
            backgroundColor: '#3b945e',
        }
    },
    link: theme.link,
    gridChild: {
        display: 'flex',
        alignItems: 'stretch', // make all cards same size
        position: 'relative',
    }
});

class Hobbies extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div id="hobbies-content-mobile">
                <Typography
                    variant="h2"
                    style={{
                        color: 'black',
                        fontWeight: 500,
                        margin: '6% 0',
                        transition: '0.2s',
                    }}
                >Hobbies</Typography>
                <Card className={classes.card}>
                    <CardHeader title="Piano" />
                    <CardMedia component="img" src={pianoPic} className={classes.pic} />
                    <CardContent>
                        <Typography variant="subtitle2">
                            I have been playing piano since the age of 5, focusing mainly on classical pieces.
                            I was classically taught and in early high school finished my piano exams with Trinity Guildhall. Afterward, I decided to continue learning and playing on my own.
                            My repertoire consists of a mix of classical, anime, and game music.
                            Currently, I'm working on playing (and ideally mastering) a handful of the Chopin and Chopin/Godowsky Etudes.
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardHeader title="Music Sheets" />
                    <CardMedia component="img" src={sheetMusicPic} className={classes.pic} />
                    <CardContent>
                        <Typography variant="subtitle2">
                            Once in a while, I create and may release an arrangement for a song (particularly anime soundtracks)
                            if there aren't sheets available. You can see my public sheets on MuseScore:
                        </Typography>
                        <Link target="_blank" rel="noopener" href="https://musescore.com/user/28468108" className={classes.link}>
                            <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                                <MusicNoteIcon />
                                My Sheets
                            </Fab>
                        </Link>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardHeader title="Super Smash Bros. (Melee)" />
                    <CardMedia component="img" src={meleePic} className={classes.pic} />
                    <CardContent>
                        <Typography variant="subtitle2">
                            Although I rarely play Smash now, it is one way I can relax and have fun.
                            I've been a huge fan of the game and the Smash series in general since 2014, and
                            for a long time actively followed the competitive Melee scene.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(Hobbies);