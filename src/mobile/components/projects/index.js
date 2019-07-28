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
        padding: 15,
        transition: 'all ease 0.2s',
        '&:hover': {
            transform: 'scale(1.05)',
        },
        margin: 'auto auto 30px auto',
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
    <Link href={link} target="_blank" rel="noopener" className={classes.link}>
        <Card className={classes.card}>
            <Typography variant="button" component="p" style={{ textAlign: 'left', marginBottom: 10 }}>{period}</Typography>
            <CardHeader title={title} />
            <CardContent style={{ padding: 0 }}>
                <div className="project-details-mobile">
                    <Typography variant="subtitle2">{technologies.join(' | ')}</Typography>
                    <div dangerouslySetInnerHTML={{ __html: details }} />
                </div>
            </CardContent>                
        </Card>
    </Link>
);

class Projects extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div id="projects-content-mobile" ref={this.container}>
                <Typography
                    variant="h2"
                    className={classes.title}
                >Projects</Typography>
                {Object.keys(PROJECT_MAP).map(project => <ProjectEntry classes={classes} {...PROJECT_MAP[project]} />)}
            </div>
        );
    }
}

export default withStyles(styles)(Projects);