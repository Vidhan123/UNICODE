const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../middleware/auth');
const oauth = require('../middleware/oauth');

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.get('/', (req, res) => {
  res.send('Home Page');
});

userRouter
  .route('/login')
  .get((req, res) => {
    const msg = req.query.valid === 'no' ? 'Invalid Credentials' : '';
    res.send(`Login Page\n${msg}`);
  })
  .post(auth.login);

userRouter
  .route('/register')
  .get((req, res) => {
    res.send('Registration Page');
  })
  .post(auth.register);

userRouter.get('/dashboard', auth.ensureAuthenticated, (req, res) => {
  res.send(`${req.user.name}'s Dashboard`);
});

// oauth routes
userRouter.get('/auth/google', oauth.login);
userRouter.get('/auth/google/callback', oauth.callback, (req, res) => {
  res.redirect('/dashboard');
});

module.exports = userRouter;
