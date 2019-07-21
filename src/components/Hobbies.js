import React, { Component } from 'react';
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

import pianoPic from '../resources/images/piano.jpg';
import meleePic from '../resources/images/melee.jpg';
import sheetMusicPic from '../resources/images/sheetmusic.png';

const styles = {
    card: {
        maxWidth: '30vw',
        margin: 'auto',
        position: 'relative',
        borderRadius: 0,
    },
    pic: {
        width: '100%',
    },
    fab: {
        margin: 10,
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'all ease 0.2s',
        }
    },
};

class Hobbies extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div id="hobbies-content">
                <Typography
                    variant="h2"
                    style={{
                        color: 'white',
                        fontWeight: 500,
                        margin: '6vw 0',
                        transition: '0.2s',
                    }}
                >In My Free Time...</Typography>
                <Grid container spacing={5}>
                    <Grid item container
                        justify="center"
                        spacing={5}
                    >
                        <Grid item>
                            <Card className={classes.card}>
                                <CardHeader title="Piano" />
                                <CardMedia component="img" src={pianoPic} className={classes.pic} />
                                <CardContent>
                                    <Typography variant="subtitle2">
                                        I have been playing piano since the age of 5, focusing mainly on classical pieces.
                                        I was classically taught and in early high school, received a distinction in the 
                                        Grade 8 piano exam from Trinity Guildhall. Afterward, I decided to continue learning and playing on my own.
                                        Nowadays, I play mostly game and anime piano arrangements, although I'm looking to go back
                                        to playing classical music in the near future.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card className={classes.card}>
                                <CardHeader title="Super Smash Bros. (Melee)" />
                                <CardMedia component="img" src={meleePic} className={classes.pic} />
                                <CardContent>
                                    <Typography variant="subtitle2">
                                        I enjoy playing Smash with friends as a way to relax and have fun.
                                        I've been a huge fan of the game and the Smash series in general since 2014, and
                                        follow the competitive Melee scene actively.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item container justify="center">  
                        <Card className={classes.card}>
                            <CardHeader title="Music Sheets" />
                            <CardMedia component="img" src={sheetMusicPic} className={classes.pic} />
                            <CardContent>
                                <Typography variant="subtitle2">
                                    Once in a while, I create and may release an arrangement for a song (particularly anime soundtracks)
                                    if there aren't sheets available. You can see my public sheets on MuseScore:
                                </Typography>
                                <Link target="_blank" rel="noopener" href="https://musescore.com/user/28468108">
                                    <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                                        <MusicNoteIcon />
                                        My Sheets
                                    </Fab>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Hobbies);