// const bcrypt = require('bcryptjs');
const passport = require('passport');
// const User = require('../models/users');

exports.login = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

exports.callback = passport.authenticate('google', {
  failureRedirect: '/login',
});
