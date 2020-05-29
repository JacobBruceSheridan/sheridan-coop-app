import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import googleIcon from './images/google.png';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        // maxWidth: 600,
    },
    icon: {
        width: '3rem',
        marginBottom: '1rem'
    }
});

export default function Login({ auth }) {
    const classes = useStyles();
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#1e8feb",
                textAlign: 'center'
            }}
            elevation={0}
        >
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item >
                    <Card>
                        <Card className={classes.root}>
                            <CardContent>
                                <h1>Use your Google account to login!</h1>
                                <img className={classes.icon} src={googleIcon} alt="" />
                                <br />
                                <Button variant="contained" color="primary" onClick={auth} className="Login-btn">
                                    Login with google
                                </Button>
                            </CardContent>
                        </Card>
                    </Card>
                </Grid>
            </Grid>
        </Paper>


    )
}
