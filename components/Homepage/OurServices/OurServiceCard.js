import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import cloud from '../../../public/images/cloud.png';
import cyber from '../../../public/images/cyber.png';
import data from '../../../public/images/data.png';
import capital from '../../../public/images/capital.png';
import engineering from '../../../public/images/engineering.png';
import it from '../../../public/images/management.png';
import Image from 'next/image';


const useStyles = makeStyles({
    gridItem: {
        padding: 40,
        marginLeft: 10,
    },
    row: {
        marginTop: '30px'
    },
    text: {
        marginTop: '10px',
        marginBottom: '10px',
    }
})

const OurServiceCard = () => {
    const classes = useStyles();

    return (
        <div>
            <div className="container text-center">
                <Grid container spacing={4} className={classes.row}>
                    <Grid item lg={4} >
                        <Paper elevation="disable" className={classes.gridItem}>
                            <Image src={cloud} alt="cloud" height="70px" width="100px"></Image>
                            <Typography 
                            variant="h6"
                            className={classes.text}
                            >
                                Cloud Services
                            </Typography>
                            <Typography>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet…
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* 2nd */}
                    <Grid item lg={4}>
                        <Paper elevation="disable" className={classes.gridItem}>
                        <Image src={cyber} alt="cloud" height="70px" width="100px"></Image>
                        <Typography 
                            variant="h6"
                            className={classes.text}
                            >
                                Cyber Security
                            </Typography>
                            <Typography>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet…
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* 3rd */}
                    <Grid item lg={4}>
                        <Paper elevation="disable" className={classes.gridItem}>
                        <Image src={data} alt="cloud" height="70px" width="100px"></Image>
                        <Typography 
                            variant="h6"
                            className={classes.text}
                            >
                                Data Security
                            </Typography>
                            <Typography>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet…
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* 4th */}
                    <Grid item lg={4}>
                        <Paper elevation="disable" className={classes.gridItem}>
                        <Image src={capital} alt="cloud" height="70px" width="80px"></Image>
                        <Typography 
                            variant="h6"
                            className={classes.text}
                            >
                                Capital Marketing
                            </Typography>
                            <Typography>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet…
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* 5th */}
                    <Grid item lg={4}>
                        <Paper elevation="disable" className={classes.gridItem}>
                        <Image src={engineering} alt="cloud" height="70px" width="80px"></Image>
                        <Typography 
                            variant="h6"
                            className={classes.text}
                            >
                                Content Engineering
                            </Typography>
                            <Typography>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet…
                            </Typography>
                        </Paper>
                    </Grid>
                    {/* 6th */}
                    <Grid item lg={4}>
                        <Paper elevation="disable" className={classes.gridItem}>
                        <Image src={it} alt="cloud" height="70px" width="80px"></Image>
                        <Typography 
                            variant="h6"
                            className={classes.text}
                            >
                                IT Management
                            </Typography>
                            <Typography>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet…
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default OurServiceCard;