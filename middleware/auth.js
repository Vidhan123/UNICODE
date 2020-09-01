const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/users');

exports.login = passport.authenticate('local', {
  // successRedirect: '/dashboard',
  failureRedirect: 'http://localhost:3000/login?Invalid',
});

exports.register = (req, res) => {
  const { email, mobileNo, role, address, password } = req.body;
  const name = `${req.body.firstName} ${req.body.lastName}`;
  User.findOne({ email: email }, async (err, user) => {
    if (err) throw err;
    if (user) res.redirect('http://localhost:3000/register?Invalid');
    if (!user) {
      const newUser = new User({
        name,
        email,
        mobileNo,
        role,
        address,
        password,
      });

      newUser.password = await bcrypt.hash(password, 10);
      await newUser.save();
      res.redirect('http://localhost:3000/login');
    }
  });
};

exports.ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('http://localhost:3000/login');
  return false;
};
