import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost() {
  const classes = useStyles();
 
  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${require('../assets/images/homepage.jpg')})` }}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6} lg={4}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              VUber
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              VUber offers the safest and easiest way to ride, with multiple travel options and well-protected rides. With more than 3,00,000 vehicles in 100+ cities including Bangalore, Chennai, Delhi, Mumbai, Hyderabad, Kolkata, and Pune, VUber is the most popular ride hailing service in India.
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Where are you planning to go next? Complete our quick sign-up process and book your first ride.
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Some of the popular travel options available are: Micro, Mini, Prime and more.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}