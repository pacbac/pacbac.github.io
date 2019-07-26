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

import PROJECT_MAP from './projects.json';
// import cgschedulePic from '../resources/images/cgschedule.png';

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