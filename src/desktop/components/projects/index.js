import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import cgschedulePic from '../../../resources/images/cgschedule.png';
import mcm2018Pic from '../../../resources/images/mcm2018.png';
import aocmm2018Pic from '../../../resources/images/aocmm2018.png';
import mcm2019Pic from '../../../resources/images/mcm2019.png';

import PROJECT_MAP from '../../../resources/data/projects.json';

const IMAGE_PROJECT_MAP = {
    cgscheduler: cgschedulePic,
    mcm2018: mcm2018Pic,
    aocmm2018: aocmm2018Pic,
    mcm2019: mcm2019Pic
}

const styles = theme => ({
    card: {
        borderRadius: 10,
        width: '27vw',
        transition: 'all ease 0.2s',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    cardHead: {
        padding: '15px 15px 0 15px'
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
    image = null,
    imageHeight = 0
}) => (
    <Grid item>
        <Link href={link} target="_blank" rel="noopener" className={classes.link}>
            <Card className={classes.card}>
                <div className={classes.cardHead}>
                    <Typography variant="button" component="p" style={{ textAlign: 'left', marginBottom: 10 }}>{period}</Typography>
                    <CardHeader title={title} />
                </div>
                <CardMedia style={{ height: imageHeight }} image={image} />
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

const Projects = ({ classes }) => {
    const leftColProjects = [];
    const rightColProjects = [];
    const projectList = Object.keys(PROJECT_MAP);
    projectList.forEach((projectName, i) => {
        const project = {...PROJECT_MAP[projectName],  image: IMAGE_PROJECT_MAP[projectName]};
        if (i > Math.ceil(projectList.length/2) - 1) {
            rightColProjects.push(project);
        } else {
            leftColProjects.push(project);
        }
    });
    return (
        <div id="projects-content">
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

export default withStyles(styles)(Projects);