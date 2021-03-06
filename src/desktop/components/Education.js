import React from 'react';
import Grow from '@material-ui/core/Grow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import uclaPic from '../../resources/images/uclaeng.png';


const Education = ({ delayGrow, classes }) => (
    <Grow in={delayGrow.edu} key="front">
        <Card className={classes.card} style={{ margin: 'auto auto 20px auto', padding: '10px 0' }}>
            <Typography variant="subtitle1">BS, Computer Science - Dec 2020</Typography>
            <CardMedia component="img" src={uclaPic} style={{ margin: 8, width: 'calc(100% - 16px)' }} />
        </Card>
    </Grow>
);

export default Education;