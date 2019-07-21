import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
                    <img className="workplace-logo" src={logo} width={width} style={{ marginBottom: 5 }} alt={name} />
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

export default Workplace;