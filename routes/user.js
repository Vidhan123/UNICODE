const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../middleware/auth');

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
  .post(auth.login);

userRouter
  .route('/register')
  .get((req, res) => {
    res.send('Registration Page');
  })
  .post(auth.register);

userRouter.get('/dashboard', (req, res) => {
  res.send('Dashboard');
});

module.exports = userRouter;
