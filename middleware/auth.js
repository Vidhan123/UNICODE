const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/users');

exports.login = passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login?valid=no',
});

exports.register = (req, res) => {
  const { name, email, mobileNo, role, address, password } = req.body;
  User.findOne({ email: email }, async (err, user) => {
    if (err) throw err;
    if (user) res.send('This Email is used by another account');
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
      res.redirect('/login');
    }
  });
};

exports.ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
  return false;
};
