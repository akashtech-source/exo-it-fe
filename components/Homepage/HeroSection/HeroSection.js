import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const useStyles = makeStyles({
    main: {
        fontWeight: 600,
        fontFamily: 'Lato',
        marginBottom: '30px'
    }
})


const HeroSection = () => {
    const classes = useStyles();

    return (
        <main className="hero-section row ">
            <Navbar />
            <div className="col-md-6 hero-text ms-md-5 ms-3">
                <Typography
                variant="h2"
                className={classes.main}
                >
                    Modern IT & Tech <br /> Service Solutions
                </Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt omnis adipisci minima nam, non iste nesciunt officia illo voluptatem.</Typography>
                <br />
                <Button variant="contained" color="primary">
                    CONTACT US
                </Button>
            </div>
        </main>
    );
};

export default HeroSection;