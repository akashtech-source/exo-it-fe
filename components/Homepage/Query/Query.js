import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    btn: {
        marginLeft: '60px'
    }
})

const Query = () => {
    const classes = useStyles();

    return (
        <div className="mt-5 queryContainer">
            <div className="d-flex container">
                <Typography
                variant="h5"
                >
                If you have any query about us and our services, then feel free to contact with us
                </Typography>
                <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
                >CONTACT US</Button>
            </div>
        </div>
    );
};

export default Query;