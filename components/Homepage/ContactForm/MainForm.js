import { Button, makeStyles, TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Icon from '@material-ui/core/Icon';
import React from 'react';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles({
    root: {
        width: '100%',
        // '& > * + *': {
        //   marginTop: theme.spacing(2),
        // },
      },
      alerts: {
        display: 'none'
      },
    phone: {
        marginLeft: 40,
        width: 380
    },
    phone2: {
        width: 380,
        marginLeft: 50,
        marginTop: 60
    },
    btn: {
        marginTop: 20,
    }
})

const MainForm = () => {
    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    

    const classes = useStyles();

    return (
        <div className="mt-5">
            <form  noValidate autoComplete="off">
                <TextField className={classes.phone} id="standard-basic" label="Name" />
                <TextField className={classes.phone} id="standard-basic" label="Phone" />
                <br />
                <TextField className={classes.phone2} id="standard-basic" label="Email" />
                <TextField className={classes.phone2} id="standard-basic" label="Description" />
                
            </form>
            <br />
            <Button
                onClick={handleClick}
                variant="contained"
                color="primary"
                className={classes.btn}
            >
                SUBMIT NOW
            </Button>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        Your message sent successfully !
        </Alert>
      </Snackbar>
      <Alert className={classes.alerts} severity="success">Your message sent successfully !</Alert>
        </div>
    );
};

export default MainForm;