const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/users');

exports.login = passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login?success=false',
});

exports.register = (req, res) => {
  const { name, email, mobileNo, role, address, password } = req.body;
  User.findOne({ email: email }, async (err, user) => {
    if (err) throw err;
    if (user) res.send('User Exists');
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
