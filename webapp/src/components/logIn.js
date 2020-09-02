import React, { useEffect, useState }  from 'react';
import { useLocation } from 'react-router-dom';
import { Avatar, Button, CssBaseline, TextField, Link, Paper, Grid, Typography} from '@material-ui/core';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useLoginStyles from './customStyles/loginStyles';

export default function SignInSide() {
  const [warn,setWarn] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const temp = location.search;
    const required = temp.slice(1,temp.length);
    const isInValid = required === 'Invalid' ? true : false;
    setWarn(isInValid);
  }, [location.search])

  const classes = useLoginStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} lg={8} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} lg={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
          <form className={classes.form} method="POST" action="http://localhost:9000/login">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Typography component="h6" variant="h6" className={warn ? classes.show : classes.hidden}>
              Invalid Credentials
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}