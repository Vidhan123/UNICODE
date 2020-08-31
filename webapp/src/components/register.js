import React from 'react';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Button
        fullWidth
        variant="outlined"
        color="secondary"
        className={classes.button}
        startIcon={<img src={require('../assets/images/googleicon.png')} height='45' alt="googleicon" />}
        href='/auth/google'
        >
          Continue with Google
        </Button>
        <Typography component="h6" variant="h6">
          or
        </Typography>
        <form className={classes.form} onsubmit="return validate()" method="POST">
          <Grid container spacing={2}>
            <FormControl component="fieldset">
              <FormLabel component="legend">&nbsp;&nbsp;&nbsp;&nbsp;Role</FormLabel>
              <RadioGroup row aria-label="role" name="role" defaultValue="start">
                <FormControlLabel
                  value="customer"
                  control={<Radio color="primary" />}
                  label="Customer"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="driver"
                  control={<Radio color="primary" />}
                  label="Driver"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio color="primary" />}
                  label="Admin"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobileNo"
                label="Mobile Number"
                name="mobileNo"
                autoComplete="mobileNo"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="password2"
                autoComplete="current-password"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}