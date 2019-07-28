import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

const Workplace = ({
    classes,
    name,
    logo,
    width,
    position,
    period,
    details,
    location,
    technologies,
}) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div style={{ position: 'relative' }}>
        <ExpansionPanel
                className={classes.timelineCard}
                onChange={() => setExpanded(!expanded)}
                classes={{ root: classes.expansionPanel }}
            >
                <ExpansionPanelSummary classes={{ content: classes.expansionPanelSummary }}>
                    <Typography variant="button" component="p" style={{ textAlign: 'right', marginBottom: 10 }}>{location}</Typography>
                    <Typography variant="button" component="p" style={{ textAlign: 'right', marginBottom: 10 }}>{period}</Typography>
                    <div className="workplace-mobile">
                        <img className="workplace-logo" src={logo} style={{ marginBottom: 5, width: '75%' }} alt={name} />
                        <Typography variant="subtitle1" component="p" style={{ marginBottom: 5 }}>{position}</Typography>
                        <IconButton style={{ padding: 2 }}>
                            <ExpandMoreIcon className={classes.expandMoreIcon2} style={{ transform: expanded ? 'rotate(180deg)' : '' }} />
                        </IconButton>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                    <Typography variant="subtitle2">{technologies.join(' | ')}</Typography>
                    {details}
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <div className={classes.timelineDot} />
        </div>
    );
}

export default Workplace;