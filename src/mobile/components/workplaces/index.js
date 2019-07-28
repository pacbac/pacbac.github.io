import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import Workplace from './Workplace';
import NAME_LOGO_MAP from '../../../resources/data/workplaces.json';
import houzzLogo from '../../../resources/images/houzz.png';
import girsLogo from '../../../resources/images/girs.png';
import censusLogo from '../../../resources/images/census.png';
import jhuaplLogo from '../../../resources/images/jhuapl.png';

const CARD_MARGIN_TOP = 30; // px
const ARROW_THICKNESS = 15; // px
const TIMELINE_EDGE_ICON_DIM = 50; // px
const logos = [houzzLogo, girsLogo, censusLogo, jhuaplLogo];

const styles = theme => ({
    expansionPanel: {
        transition: 'all ease 0.1s',
        paddingTop: 16,
    },
    expansionPanelSummary: {
        margin: 0,
        display: 'block',
    },
    expansionPanelDetails: {
        backgroundColor: 'rgba(0,0,0,0.12)',
        display: 'block',
    },
    expandMoreIcon2: {
        color: theme.typography.color.hover,
    },
    title: {
        fontWeight: 500,
        margin: '10vh auto 14vh auto',
        display: 'table',
        padding: 10,
        userSelect: 'none',
        color: 'black',
    },
    timelineCard: {
        position: 'relative',
        width: 'calc(100% - 15% - 25px)',
        marginTop: `${CARD_MARGIN_TOP}px !important`, // override the margins when expansionpanel expanded
        marginBottom: '50px !important',
        left: '15%',
        transform: '',
        '&::after': {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            borderRight: `${ARROW_THICKNESS}px solid white`,
            borderTop: `${ARROW_THICKNESS}px solid transparent`,
            borderBottom: `${ARROW_THICKNESS}px solid transparent`,
            transform: 'translate(-13px, 50%)',
        }
    },
    nowIcon: {
        width: TIMELINE_EDGE_ICON_DIM,
        height: TIMELINE_EDGE_ICON_DIM,
        marginBottom: 0,
        position: 'absolute',
        left: '10%',
        transform: 'translate(-50%, -80%) rotate(180deg)',
        backgroundColor: 'black',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: '100%',
    },
    timelineDot: {
        width: 12,
        height: 12,
        backgroundColor: 'black',
        borderRadius: '100%',
        position: 'absolute',
        top: 0,
        left: '10%',
        transform: `translate(calc(-50% + 2px), ${1.5*ARROW_THICKNESS}px)`, // +0.5x multiplier b/c arrow was also translated down another 50% of its thickness
    },
    timePeriod: {
        color: 'black',
        position: 'absolute',
        top: 0,
        left: '50%',
        backgroundColor: 'white',
        padding: 8,
        boxShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        borderRadius: 8,
        transform: `translate(30px, calc(-25% + ${1.5*ARROW_THICKNESS}px))`,
    },
    pastIcon: {
        backgroundColor: 'black',
        borderRadius: '100%',
        width: 0.7*TIMELINE_EDGE_ICON_DIM,
        height: 0.7*TIMELINE_EDGE_ICON_DIM,
        position: 'absolute',
        left: '10%',
        transform: 'translateX(-50%)',
    },
});

const Workplaces = ({ classes }) => (
    <div id="workplaces-content-mobile">
        <Typography variant="h2" className={classes.title}>
            Work
        </Typography>
        <ExpandMoreIcon className={classes.nowIcon} />
        <div className="timeline-mobile">
            {Object.keys(NAME_LOGO_MAP).map((workplaceObj, i) => (
                <Workplace 
                    classes={classes}
                    {...NAME_LOGO_MAP[workplaceObj]}
                    logo={logos[i]}
                />
            ))}
        </div>
        <MoreHorizIcon className={classes.pastIcon} />
    </div>
);

export default withStyles(styles)(Workplaces);