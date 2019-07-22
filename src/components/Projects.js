import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import handleViewport from 'react-in-viewport';
import throttle from 'lodash.throttle';
import Link from '@material-ui/core/Link';
import theme from '../theme';

// import cgschedulePic from '../resources/images/cgschedule.png';

const PROJECT_MAP = {
    mcm2019: {
        title: "Analysis of US Opioid Trends",
        details: "This project consists of a group of mathematical/ML models that aims to describe and analyze properties of the US Opioid Crisis, a widespread drug-related issue in the US. <br/>I worked with a team of three to design and implement some models and helped in writing part of the paper. Project and paper were made for the Mathematical Contest in Modeling 2019 competition.",
        technologies: ["Python", "Jupyter"],
        link: "https://github.com/pacbac/opioid-trends",
        period: "Feb 2019",
    },
    cgscheduler: {
        title: "Cell Group Meeting Scheduler",
        // snapshot: cgschedulePic,
        details: "This is a small, customized app I made for about ~25 people to easily view and schedule their biweekly meetup group. <br/>I have also built in certain features such as automatically notifying the scheduler of date/role conflicts, autogenerating certain columns, etc. It is still being actively used to this day.",
        technologies: ["React", "Redux", "SASS", "Python", "PostgreSQL", "jQuery", "Shell"],
        link: "https://github.com/pacbac/cgscheduler",
        period: "Jun - Sep 2018",
    },
    aocmm2018: {
        title: "ViralSim",
        details: "I worked with a team to design and implement graphical models to measure time for news to spread to a percentage of users in a social network. I also performed sensitivity analysis (adjusting parameters and analyzing how the model behaved upon these changes) to verify credibility of each model. <br/>This was one of the models that won 2nd place (Alpha Prize) out of 120+ teams in AoCMM 2018 Math Modeling Competition.",
        technologies: ["Python", "Jupyter"],
        link: "https://github.com/pacbac/viral-sim",
        period: "Sep - Oct 2018",
    },
    mcm2018: {
        title: "Interdisciplinary Analysis of the Energy Profiles of Various States",
        details: "I worked in a team of three to provide a mathematical analysis of the energy profiles of certain states in the US based on over 100,000 lines of data from 1960 to 2009 provided by the US Energy Information Administration. I helped to implement the model, which predicts the energy usage of the states up to 40 years.<br/> As a team, we wrote a paper that explained the approach of the model and the findings. This was made for the Mathematical Contest in Modeling 2018, which we received an honorable mention in.",
        technologies: ["Python"],
        link: "https://github.com/pacbac/energy-models",
        period: "Feb 2018",
    },
};

const styles = theme => ({
    card: {
        borderRadius: 0,
        width: '25vw',
        padding: 15,
        transition: 'all ease 0.2s',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    pic: {
        marginBottom: 10,
        width: '100%',
    },
    link: theme.link,
    title: {
        color: 'black',
        fontWeight: 500,
        margin: '6vh auto',
    },
});

const ProjectEntry = ({
    classes,
    title,
    details,
    technologies,
    period,
    link,
    snapshot,
}) => (
    <Grid item>
        <Link href={link} target="_blank" rel="noopener" className={classes.link}>
            <Card className={classes.card}>
                <Typography variant="button" component="p" style={{ textAlign: 'left', marginBottom: 10 }}>{period}</Typography>
                <CardHeader title={title} />
                <CardContent style={{ padding: 0 }}>
                    <div className="project-details">
                        <Typography variant="subtitle2">{technologies.join(' | ')}</Typography>
                        <div dangerouslySetInnerHTML={{ __html: details }} />
                    </div>
                </CardContent>                
            </Card>
        </Link>
    </Grid>
);

const ViewportProjectEntry = handleViewport(ProjectEntry);

class Projects extends Component {

    static COLOR_CHANGE_MARGIN = 30; // give some flexibility for the app bar color to change
    static THROTTLE_DELAY = 200;

    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.throttleChangeFontColor = throttle(this.shouldChangeFontColor, Projects.THROTTLE_DELAY);
    }

    shouldChangeFontColor = () => {
        const { offsetTop, offsetHeight } = this.container.current;
        const { appBarFontColor } = this.props;
        if (window.scrollY + Projects.COLOR_CHANGE_MARGIN > offsetTop
            && window.scrollY + Projects.COLOR_CHANGE_MARGIN < offsetTop + offsetHeight) {
                if(appBarFontColor !== 'black') {
                    this.props.changeAppBarFontColor('black');
                }
        } else if (appBarFontColor !== 'white') {
            this.props.changeAppBarFontColor('white');
        }
    }

    componentDidMount() {
        document.addEventListener("scroll", this.throttleChangeFontColor);
    }

    componentWillUnMount() {
        document.removeEventListener("scroll", this.throttleChangeFontColor);
    }

    render() {
        const { classes } = this.props;
        const leftColProjects = [];
        const rightColProjects = [];
        const projectList = Object.keys(PROJECT_MAP);
        projectList.forEach((projectName, i) => {
            if (i > Math.ceil(projectList.length/2) - 1) {
                rightColProjects.push(PROJECT_MAP[projectName]);
            } else {
                leftColProjects.push(PROJECT_MAP[projectName]);
            }
        });
        return (
            <div id="projects-content" ref={this.container}>
                <Typography
                    variant="h2"
                    className={classes.title}
                >Personal Projects</Typography>
                <Grid container spacing={2}>
                    <Grid item container justify="center">
                        <ProjectEntry classes={classes} {...{
                            title: "This website!",
                            details: "",
                            technologies: ["React", "Material-UI"],
                            link: "https://github.com/pacbac/pacbac.github.io",
                            period: "Jul 2019",
                        }} />
                    </Grid>
                    <Grid item container justify="center" spacing={2}>
                        {leftColProjects.map(project => (
                            <ProjectEntry
                                classes={classes}
                                {...project}
                            />
                        ))}
                    </Grid>
                    <Grid item container justify="center" spacing={2}>
                        {rightColProjects.map(project => (
                            <ViewportProjectEntry classes={classes} {...project} onEnterViewport={() => console.log('hello')} />
                        ))}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Projects);