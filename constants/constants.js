const hostname = 'localhost';

const port = process.env.PORT || 9000;

const DBUrl = 'mongodb://localhost:127.0.0.1:27017/User';

module.exports = {
  hostname,
  port,
  DBUrl,
};
