import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grow from '@material-ui/core/Grow';

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

const styles = {
    grid: {
        marginBottom: 20,
        width: '100%',
    },
    card: {
        maxWidth: '30vw',
        position: 'relative',
        borderRadius: 0,
    },
    cardContent: {
        padding: '16px 0',
        '&:last-child': {
            padding: 0,
        },
    },
    divider: {
        margin: '0 16px',
    },
    pic: {
        width: '100%',
    },
    expansionPanel: {
        boxShadow: '0 0 0',
        position: 'static',
        margin: '16px 0 0 0 !important',
    },
    expansionPanelSummary: {
        margin: 0,
        display: 'block',
    },
    expansionPanelDetails: {
        backgroundColor: '#f0f0f0',
        display: 'block',
    },
};

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
            <div>
                <Grow in>
                    <Typography
                        variant="h2"
                        style={{
                            color: 'white',
                            fontWeight: 500,
                            marginTop: `${Home.TITLE_MARGIN}vh`,
                            transition: '0.2s',
                        }}
                    >Hi! I'm Clayton.</Typography>
                </Grow>
                <ExpandMoreIcon className="bounce" style={{ color: 'white', margin: '50px 0', width: 70, height: 70 }} />
                <Grid
                    className={classes.grid}
                    container
                    justify="center"
                    spacing={2}
                >
                    <Grid item>
                        <Grow in={delayGrow.about}>
                            <Card className={classes.card}>
                                <a className="jump-links" href="#about-me">
                                    <CardHeader
                                        id="about-me"
                                        title="A Little About Me" 
                                        subheader="UCLA CS student + aspiring software engineer"
                                    />
                                </a>
                                <CardMedia component="img" src={profilePic} className={classes.pic} />
                                <CardContent>
                                    <Typography variant="body1" component="p">
                                        I am a UCLA student pursuing a Bachelors in computer science.
                                        My primary interests are in software engineering 
                                        and mathematical modeling, with machine learning and 
                                        other applied mathematical topics as secondary interests.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grow>             
                    </Grid>
                    <Grid item>
                        <Grow in={delayGrow.work}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <a className="jump-links" href="#about-me">
                                        <CardHeader
                                            title="Where I've Worked"
                                            subheader="Places I've Contributed My Skills To"
                                        />
                                    </a>
                                    <div className="home-workplaces">
                                        {Object.keys(NAME_LOGO_MAP).map((workplace, i) => (
                                            <Workplace 
                                                index={i}
                                                expanded={openPanel === i}
                                                handlePanelChange={this.handlePanelChange}
                                                classes={classes}
                                                {...NAME_LOGO_MAP[workplace]}
                                            />))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Grow>
                    </Grid>
                </Grid>
                <Education classes={classes} delayGrow={delayGrow} />
            </div>  
        );
    }
}

export default withStyles(styles)(Home);