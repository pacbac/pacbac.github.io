import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

import PROJECT_MAP from '../../../resources/data/projects.json';
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

class Projects extends Component {
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
                        {leftColProjects.map(project => <ProjectEntry classes={classes} {...project} />)}
                    </Grid>
                    <Grid item container justify="center" spacing={2}>
                        {rightColProjects.map(project => <ProjectEntry classes={classes} {...project} />)}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Projects);