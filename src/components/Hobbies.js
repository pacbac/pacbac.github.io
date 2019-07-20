import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import pianoPic from '../resources/images/piano.jpg';
import meleePic from '../resources/images/melee.jpg';

const styles = {
    paper: {
        maxWidth: '50vw',
        margin: 'auto',
        position: 'relative',
    },
    pic: {
        width: '100%',
    }
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
                        margin: '4vw 0',
                        transition: '0.2s',
                    }}
                >Hobbies</Typography>
                <Paper className={classes.paper}>
                    <img src={pianoPic} className={classes.pic} />
                    <img src={meleePic} className={classes.pic} />
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Hobbies);