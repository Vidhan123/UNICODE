import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useRegisterStyles from './customStyles/registerStyles';
import useValidation from './validation/useValidation';

export default function SignUp() {
  const [isChecked, setChecked] = useState({value:true, initial:true});
  const [warn,setWarn] = useState(false);
  let initVals = { firstName: '', lastName: '', email: '', mobileNo: '', password: '', address: '' };
  const [vals,setVal] = useState(initVals);

  const [err,validate] = useValidation(vals);

  let location = useLocation();

  useEffect(() => {
    const temp = location.search;
    const required = temp.slice(1,temp.length);
    const isInValid = required === 'Invalid' ? true : false;
    setWarn(isInValid);
  }, [location.search])
  const classes = useRegisterStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({...vals, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(vals);
  };
  
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
        href='http://localhost:9000/auth/google'
        >
          Continue with Google
        </Button>
        <Typography component="h6" variant="h6">
          or
        </Typography>
        <form
          className={classes.form}
          id="myForm"
          onSubmit={handleSubmit}
          method="POST"
          action="http://localhost:9000/register">
          <Grid container spacing={2}>
            <Typography component="h6" variant="h6" className={warn ? classes.show : classes.hidden}>
              This e-mail is already registered
            </Typography>
            <FormControl component="fieldset">
              <FormLabel component="legend">&nbsp;&nbsp;&nbsp;&nbsp;Role</FormLabel>
              <RadioGroup row aria-label="role" name="role" defaultValue="start">
                <FormControlLabel
                  value="customer"
                  control={<Radio color="primary" />}
                  label="Customer"
                  labelPlacement="start"
                  checked={isChecked.initial}
                  onChange={(e) => setChecked(prev => !prev)}
                />
                <FormControlLabel
                  value="driver"
                  control={<Radio color="primary" />}
                  label="Driver"
                  labelPlacement="start"
                  onChange={(e) => setChecked(prev => !prev)}
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio color="primary" />}
                  label="Admin"
                  labelPlacement="start"
                  onChange={(e) => setChecked(prev => !prev)}
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
                error={err.fname}
                onChange={handleChange}
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
                error={err.lname}
                onChange={handleChange}
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
                error={err.email}
                onChange={handleChange}
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
                error={err.num}
                onChange={handleChange}
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
                error={err.address}
                onChange={handleChange}
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
                error={err.password}
                onChange={handleChange}
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