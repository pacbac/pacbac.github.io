import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grow from '@material-ui/core/Grow';

import profilePic from '../resources/images/profilepic.jpg';
import uclaPic from '../resources/images/uclaeng.png';
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
        technologies: ['React', 'PHP', 'SQL', 'GraphQL', 'Java'],
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

const Workplace = ({
    classes,
    expanded,
    index,
    handlePanelChange,
    name,
    logo,
    width,
    position,
    period,
    details,
    technologies,
}) => (
    <React.Fragment>
        <Divider className={classes.divider} />
        <ExpansionPanel
            expanded={expanded}
            classes={{ root: classes.expansionPanel }}
            onChange={() => handlePanelChange(index)}
        >
            <ExpansionPanelSummary 
                classes={{ content: classes.expansionPanelSummary }}
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography variant="button" component="p" style={{ textAlign: 'left', marginBottom: 10 }}>{period}</Typography>
                <div className="workplace">
                    <img className="workplace-logo" src={logo} width={width} style={{ marginBottom: 5 }} />
                    <Typography variant="subtitle1" component="p" style={{ marginBottom: 10 }}>{position}</Typography>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <Typography variant="subtitle2">{technologies.join(' | ')}</Typography>
                {details}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </React.Fragment>
);

class Home extends Component {

    static TITLE_MARGIN = 12; // vh

    constructor(props) {
        super(props);
        this.state = {
            openPanel: -1, // -1 = no panel open
            titleMargin: 8,
            delayGrow: false,
        }
        this.title = React.createRef();
    }

    componentDidMount() {
        window.onscroll = this.resizeHeaderOnScroll;
        this.title.current.style.marginTop = `${Home.TITLE_MARGIN}vh`;
        setTimeout(() => this.setState({ delayGrow: true }), 80)
    }

    resizeHeaderOnScroll = () => {
        if (document.scrollingElement.scrollTop > 50) {
            // const margin = 
            // if (margin > 1) {

            // }
        } else {
            this.title.current.style.fontSize = "3.75rem";
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
                <Typography
                    variant="h2"
                    style={{
                        color: 'white',
                        fontWeight: 500,
                        marginTop: `${Home.TITLE_MARGIN}vh`,
                        transition: '0.2s',
                    }}
                    ref={this.title}
                >Hi! I'm Clayton.</Typography>
                <ExpandMoreIcon className="bounce" style={{ color: 'white', margin: '50px 0', width: 70, height: 70 }} />
                <Grid
                    className={classes.grid}
                    container
                    justify="center"
                    spacing={2}
                >
                    <Grid item>
                        <Grow in>
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
                        <Grow in={delayGrow}>
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
                <Card className={classes.card} style={{ margin: 'auto auto 20px auto' }}>
                    <CardHeader title="Education" />
                    <Typography variant="subtitle1">BS Computer Science - 2021</Typography>
                    <CardMedia component="img" src={uclaPic} style={{ margin: 8, width: 'calc(100% - 16px)' }} />
                </Card>
            </div>  
        );
    }
}

export default withStyles(styles)(Home);