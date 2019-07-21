import React, { Component } from 'react';
import Grow from '@material-ui/core/Grow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FlipToBackIcon from '@material-ui/icons/FlipToBack';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import IconButton from '@material-ui/core/IconButton';
import ReactCardFlip from 'react-card-flip';

import uclaPic from '../resources/images/uclaeng.png';

const classList = [
    "CS 32: Data Structures",
    "CS 33: Computer Organization",
    "CS 35L: Software Construction Laboratory",
    "CS 180: Algorithms",
    "MATH 115A: Abstract Linear Algebra",
    "CS 111: Operating Systems",
    "CS 131: Programming Languages",
    "CS 143: Database Systems",
    "CS M51A: Logic Design of Digital Systems",
    "CS 188: Human Computer Interaction",
    "CEE 110: Probability and Statistics",
    "CS M117: Computer Networks - Physical Layer",
];


class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false,
        };
    }

    toggleFlip = () => this.setState(({ isFlipped }) => ({ isFlipped: !isFlipped }));

    render() {
        const { delayGrow, classes } = this.props;
        const { isFlipped } = this.state;
        const flipLabel = <Typography variant="overline" style={{ display: 'inline' }}>Flip</Typography>;

        return (
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" style={{ transition: 'all ease 0.2s' }}>
                <Grow in={delayGrow.edu} key="front">
                    <Card className={classes.card} style={{ margin: 'auto auto 20px auto' }}>
                        <IconButton style={{ float: 'right' }} onClick={this.toggleFlip}>
                            {flipLabel}<FlipToBackIcon />
                        </IconButton>
                        <CardHeader title="Education" />
                        <Typography variant="subtitle1">BS Computer Science - 2021</Typography>
                        <CardMedia component="img" src={uclaPic} style={{ margin: 8, width: 'calc(100% - 16px)' }} />
                    </Card>
                </Grow>
                <Card
                    className={classes.card}
                    style={{ margin: 'auto auto 20px auto' }}
                    key="back"
                >
                    <IconButton style={{ float: 'right' }} onClick={this.toggleFlip}>
                        {flipLabel}<FlipToFrontIcon />
                    </IconButton>
                    <CardHeader title="Classes I've Taken" />
                    <CardContent style={{ textAlign: 'left', paddingTop: 0 }}>
                        <ul style={{ margin: 0 }}>
                            {classList.map(classElem => <li style={{ listStyleType: 'none' }}>{classElem}</li>)}
                        </ul>
                    </CardContent>
                </Card>
            </ReactCardFlip>
        );
    }
}

export default Education;