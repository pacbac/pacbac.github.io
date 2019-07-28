import React, { useState } from 'react';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

const Workplace = ({
    classes,
    isLeft,
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
                className={classNames(
                    classes.timelineCard, {
                        [classes.timelineLeft]: isLeft,
                        [classes.timelineRight]: !isLeft
                    }
                )}
                onChange={() => setExpanded(!expanded)}
                classes={{ root: classes.expansionPanel }}
            >
                <ExpansionPanelSummary classes={{ content: classes.expansionPanelSummary }}>
                    <Typography variant="button" component="p" style={{ textAlign: isLeft ? 'left' : 'right', marginBottom: 10 }}>{location}</Typography>
                    <div className="workplace">
                        <img className="workplace-logo" src={logo} width={width} style={{ marginBottom: 5 }} alt={name} />
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
            <Typography
                variant="button"
                className={classNames(
                    classes.timePeriod, {
                        [classes.timePeriodLeft]: isLeft,
                        [classes.timePeriodRight]: !isLeft
                    }
                )}
            >{period}</Typography>
        </div>
    );
}

export default Workplace;