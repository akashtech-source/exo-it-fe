import { makeStyles, Typography } from '@material-ui/core';
import { Grid, Button } from '@material-ui/core';
import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import CallMadeIcon from '@material-ui/icons/CallMade';
import about1 from '../../../public/images/about-1.jpg'
import about2 from '../../../public/images/about-2.jpg'
import Image from 'next/image';


const useStyles = makeStyles({
    aboutText: {
        marginTop: '10px',
        marginBottom: '30px'
    },
    image: {
        borderRadius: '10px',
    },
    
})


const AboutUs = () => {
    const classes = useStyles();

    return (
        <div className="container aboutContainer">
            <div className="mt-5">
                <Grid container spacing={10}>
                    <Grid item lg={6} xs={12}>
                        <h5>ABOUT US</h5>
                        <Typography
                        variant="h4"
                        className={classes.aboutText}
                        >
                            Take a quick tour of about us!
                        </Typography>
                        <Typography>
                        Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper pbero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar
                        </Typography>
                        <div className="mt-4 mb-4">
                            <p><CallMadeIcon color="primary"/> Adipiscing sem neque sed ipsum. Nam quam</p>
                            <p><CallMadeIcon color="primary"/> Honcus, sem quam semper pbero, sit amet adipiscing sem neque</p>
                            <p><CallMadeIcon color="primary"/> Ulamcorper ultricies nisi. Nam eget dui. Etiam rhoncus</p>
                            <p><CallMadeIcon color="primary"/> Maecenas tempus, tellus eget condimentum rhoncus</p>
                        </div>
                            <Button color="primary">More About Us  <ArrowRightAltIcon/></Button>
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <Image className={classes.image} src={about1} alt="about one"></Image>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AboutUs;