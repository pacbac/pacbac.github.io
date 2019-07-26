import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grow from '@material-ui/core/Grow';

import SectionsBar from './SectionsBar';
import Workplaces from './Workplaces';
import Education from './Education';
import profilePic from '../resources/images/profilepic.jpg';

const styles = theme => ({
    aboutMeHeader: {
        color: theme.typography.color.darkGreen,
        marginBottom: 15,
    },
    pic: {
        maxWidth: 400,
        maxHeight: 400,
    },
    expandMoreIcon: {
        color: 'white',
        margin: '50px 0',
        width: 70,
        height: 70,
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
        padding: 40,
        borderRadius: 0,
        maxWidth: '50vw',
        maxHeight: 'calc(100% - 40px)',
        margin: 'auto',
    }
});

class Home extends Component {

    static TITLE_MARGIN = 12; // vh

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

    /**
     * Restriction: we only allow one work experience to be expanded at a time (to prevent the card from being too long)
     * If the current panel open is equal to the the one being "changed" (being clicked), it means to close the panel
     * If the user clicked on a different panel, though, expand that one instead
     * 
     * @param i the workplace component's index (in the list of work experiences)
     */
    handlePanelChange = i => this.setState(({ openPanel }) => ({ openPanel: openPanel === i ? -1 : i }));

    render() {
        const { classes } = this.props;
        const { openPanel, delayGrow } = this.state;
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
                <div id="about-me-content">
                    <Paper className={classes.aboutMe}>
                        <img src={profilePic} className={classes.pic} />
                        <div className="about-me">
                            <a className="jump-links">
                                <Typography variant="h4"
                                    classes={{ root: classes.aboutMeHeader }}
                                    id="about-me"
                                >A Little About Me</Typography>
                            </a>
                            <Typography variant="body1" component="p" style={{ marginBottom: 15 }}>
                                I am a UCLA student pursuing a Bachelors in computer science.
                                My primary interests are in software engineering 
                                and mathematical modeling, with machine learning and 
                                other applied mathematical topics as secondary interests.
                            </Typography>
                            <Education classes={classes} delayGrow={delayGrow} />
                        </div>
                    </Paper>
                </div>
                <Workplaces />
            </div>  
        );
    }
}

export default withStyles(styles)(Home);