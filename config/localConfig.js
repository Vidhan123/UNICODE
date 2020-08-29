const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/users');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      User.findOne({ email: email }, async (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'You are not registered' });
        }
        await bcrypt.compare(password, user.password, (error, isMatch) => {
          if (error) throw error;
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { message: 'Incorrect Password' });
        });
        return done(null, user);
      });
    })
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
