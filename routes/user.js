const express = require('express');
const bodyParser = require('body-parser');

const auth = require('../middleware/auth');
const oauth = require('../middleware/oauth');
const jwtauth = require('../middleware/jwtauth');

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.get('/', (req, res) => {
  res.redirect('http://localhost:3000');
});

userRouter
  .route('/login')
  .get((req, res) => {
    res.redirect('http://localhost:3000/login');
  })
  .post(auth.login, jwtauth.login);

userRouter
  .route('/register')
  .get((req, res) => {
    res.redirect('http://localhost:3000/register');
  })
  .post(auth.register);

userRouter.get('/dashboard', auth.ensureAuthenticated, (req, res) => {
  res.redirect(`http://localhost:3000/dashboard/?${req.user.name}`);
});

// oauth routes
userRouter.get('/auth/google', oauth.login);
userRouter.get('/auth/google/callback', oauth.callback, jwtauth.login);

module.exports = userRouter;
