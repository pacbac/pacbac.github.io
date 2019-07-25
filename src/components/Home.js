import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grow from '@material-ui/core/Grow';

import SectionsBar from './SectionsBar';
import Workplace from './Workplace';
import Education from './Education';
import profilePic from '../resources/images/profilepic.jpg';
import houzzLogo from '../resources/images/houzz.png';
import girsLogo from '../resources/images/girs.png';
import censusLogo from '../resources/images/census.png';
import jhuaplLogo from '../resources/images/jhuapl.png';

const NAME_LOGO_MAP = {
    houzz: {
        name: "Houzz",
        logo: houzzLogo,
        position: "Software Engineering Intern",
        period: "Summer 2019",
        link: "https://houzz.com",
        technologies: ['React', 'PHP', 'SQL', 'GraphQL', 'Thrift', 'Java'],
        details: "At Houzz, I worked on the Marketplace Ads Team and Trade Growth team. In my time there, I worked on a project to add new legal consent components for advertisers on the houzz.com website, helped build a platform to assist vendors in pricing their products on the website, and implemented site perks to promote the Houzz Pro program.",
        width: 150,
    },
    girs: {
        name: "UCLA Garrick Institute of Risk Sciences",
        logo: girsLogo,
        position: "Student Software Engineer",
        period: "Since Nov 2018",
        link: "https://risksciences.ucla.edu",
        technologies: ['React', 'Material-UI', 'REST', 'Django'],
        details: "At GIRS, I develop risk engineering tools used NASA JPL and Japan's Nuclear Regulation Authority. I have helped develop numerous frontend features, from automated academic report summaries of risk models to platform-wide internationalization to UI components for troubleshooting.",
        width: 350,
    },
    census: {
        name: "US Census Bureau",
        logo: censusLogo,
        position: "Software Development Intern",
        period: "Summer 2018",
        link: "http://census.gov",
        technologies: ['HTML', 'CSS', 'jQuery', 'Java', 'SAS'],
        details: "At the Census, I worked with a team of ~20 analysts and developers to develop and maintain an internal website used to store data and extract statistics from the Commodity Flow Survey. I also helped to clean the data used for their shipment calculation software, improving the accuracy of its results.",
        width: 150,
    },
    jhuapl: {
        name: "Johns Hopkins University Applied Physics Laboratory",
        logo: jhuaplLogo,
        position: "High School ASPIRE Intern",
        period: "Summer 2015",
        link: "https://www.jhuapl.edu/",
        technologies: ['MATLAB', 'Java'],
        details: "At APL, I contributed to an intern project where moving robots communicated with each other as a swarm to explore and map out their environment. I helped on creating the virtual environment as a test for the robot's algorithms, running tests on physical environments, and writing sections of the research paper.",
        width: 180,
    },
};

const styles = theme => ({
    grid: {
        marginBottom: 20,
        width: '100%',
    },
    card: {
        position: 'relative',
        borderRadius: 0,
        maxWidth: '30vw',
        overflow: 'visible',
        margin: 'auto',
    },
    cardHeader: {
        color: theme.typography.color.darkGreen,
        marginBottom: 15,
    },
    cardContent: {
        padding: '16px 0',
        '&:last-child': {
            padding: 0,
        },
    },
    divider: {
        backgroundColor: theme.typography.color.hover,
        margin: 'auto 20px',
    },
    pic: {
        maxWidth: 400,
        maxHeight: 400,
    },
    expansionPanel: {
        boxShadow: '0 0 0',
        position: 'static',
        transition: 'all ease 0.1s',
        paddingTop: 16,
        margin: '0 !important',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
        }
    },
    expansionPanelSummary: {
        margin: 0,
        display: 'block',
    },
    expansionPanelDetails: {
        backgroundColor: '#d5ebe7',
        display: 'block',
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
    expandMoreIcon2: {
        color: theme.typography.color.hover,
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
            openPanel: -1, // -1 = no panel open
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
                                    classes={{ root: classes.cardHeader }}
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
                
            </div>  
        );
    }
}

export default withStyles(styles)(Home);