const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.get('/', (req, res) => {
  res.send('Home Page');
});

userRouter
  .route('/login')
  .get((req, res) => {
    res.send('Login Page');
  })
  .post((req, res) => {
    res.send('Logged In');
  });

userRouter
  .route('/register')
  .get((req, res) => {
    res.send('Registration Page');
  })
  .post((req, res) => {
    res.send('Registered');
  });

userRouter.get('/dashboard', (req, res) => {
  res.send('Dashboard');
});

module.exports = userRouter;
