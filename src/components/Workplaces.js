import React from 'react';

const Workplaces = () => (
    <Card className={classes.card}>
        <CardHeader
            title="Where I've Worked"
            subheader="Places I've Contributed My Skills To"
        />
        <CardContent className={classes.cardContent}>
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
);

export default Workplaces;