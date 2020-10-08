import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grow from '@material-ui/core/Grow';

import SectionsBar from './SectionsBar';
import Education from './Education';
import profilePic from '../../resources/images/profilepic.jpg';

const styles = theme => ({
    aboutMeHeader: {
        marginBottom: 15,
    },
    pic: {
        width: 400,
        height: 400,
        borderRadius: 15,
    },
    expandMoreIcon: {
        color: 'white',
        margin: '50px 0 120px 0',
        width: 70,
        height: 70,
        transition: 'color ease 0.2s',
        '&:hover': {
            color: theme.typography.color.hover,
        }
    },
    title: {
        color: 'white',
        fontWeight: 500,
        margin: `calc(40vh - 80px) auto calc(28vh - 80px) auto`,
        transform: 'translateY(-50%)',
        transition: '0.2s',
        borderBottom: 'solid #3b945e 3px',
        display: 'table',
        padding: 10,
        userSelect: 'none',
    },
    aboutMe: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 15,
        maxWidth: '50%',
        maxHeight: 'calc(100% - 40px)',
        margin: 'auto',
        position: 'relative',
        padding: 40
    }
});

class Home extends Component {

    static TITLE_MARGIN = 12; // vh
    static COLOR_CHANGE_MARGIN = 30; // give some flexibility for the app bar color to change
    static THROTTLE_DELAY = 200;

    constructor(props) {
        super(props);
        this.state = {
            titleMargin: 8,
            delayGrow: {
                about: false,
                work: false,
                edu: false,
            },
        }
    }

    growOnDelay = component => (
        setTimeout(() => this.setState(({ delayGrow }) => ({
            delayGrow: {
                ...delayGrow,
                [component]: true,
            },
        })), 80)
    );

    componentDidMount() {
        this.growOnDelay('about');
    }

    componentDidUpdate() {
        const { delayGrow: { about, work, edu } } = this.state;
        if (about && !work && !edu) {
            this.growOnDelay('work')
        } else if (about && work && !edu) {
            this.growOnDelay('edu');
        }
    }

    render() {
        const { classes } = this.props;
        const { delayGrow } = this.state;
        return (
            <div className="home-content">
                <div id="cover-content">
                    <Grow in>
                        <Typography
                            variant="h2"
                            className={classes.title}
                        >HI! I'M CLAYTON<span className="punc">.</span></Typography>
                    </Grow>
                    <a href="#about-me-content">
                        <ExpandMoreIcon className={"bounce " + classes.expandMoreIcon} />
                    </a>
                    <SectionsBar />
                </div>
                <div id="about-me-content" ref={this.props.container}>
                    <Paper className={classes.aboutMe}>
                        <img src={profilePic} className={classes.pic} alt="profile" />
                        <div className="about-me">
                            <Typography variant="h4"
                                classes={{ root: classes.aboutMeHeader }}
                                id="about-me"
                            >A Little About Me</Typography>
                            <Typography variant="body1" component="p" style={{ marginBottom: 15 }}>
                            I am a UCLA student pursuing a Bachelors in computer science.
                            My primary interests are in distributed systems and machine learning,
                            with mathematical modeling and other applied mathematical topics as secondary interests.
                            </Typography>
                            <Education classes={classes} delayGrow={delayGrow} />
                        </div>
                    </Paper>
                </div>
            </div>  
        );
    }
}

export default withStyles(styles)(Home);