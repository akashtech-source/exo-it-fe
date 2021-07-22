import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MainForm from './MainForm';

const useStyles = makeStyles({
    text: {
        marginTop: 20,
        marginBottom: 20,
    },
})

const ContactForm = () => {
    const classes = useStyles();

    return (
        <div className="mt-5">
            <div className="text-center">
                <Typography>CONTACT</Typography>
                <Typography
                variant="h4"
                className={classes.text}
                >We’d Love to Here From You!</Typography>
                <em>Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. <br /> Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam</em>
                <MainForm />
            </div>
        </div>
    );
};

export default ContactForm;