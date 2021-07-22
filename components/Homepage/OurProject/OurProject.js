import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const useStyles = makeStyles({
    txt: {
        textAlign: 'right'
    },
    card: {
        marginTop: '50px'
    }
})

const OurProject = () => {
    const classes = useStyles();

    return (
        <div>
            <div className="container mt-5">
                <Grid container>
                    <Grid item lg={6} xs={12}>
                        <Typography>CASE STUDY</Typography>
                        <Typography
                        variant="h4"
                        >
                        Check our latest <br /> project,doen for client!
                        </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <Typography
                        className={classes.txt}
                        >
                        Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel
                        </Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.card} container spacing={3}>
                    <Grid item lg={4} xs={12}>
                        <ProjectCard />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ProjectCard />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ProjectCard />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ProjectCard />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ProjectCard />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ProjectCard />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default OurProject;