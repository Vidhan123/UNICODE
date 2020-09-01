const authenticate = require('../config/jwtConfig');

exports.login = (req, res) => {
  const token = authenticate.getToken({ email: req.user.email });
  // res.json({ success: true, token: token, status: 'Logged In' });
  res.cookie('access_token', token, { httpOnly: true, sameSite: true });
  res.redirect('/dashboard');
};

const { verifyUser } = authenticate;
exports.verify = verifyUser;
