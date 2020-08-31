const hostname = process.env.HOST || 'localhost';

const port = Number(process.env.PORT) || 9000;

const DBUrl =
  process.env.DB_CONNECTION_URL || 'mongodb://localhost:127.0.0.1:27017/User';

module.exports = {
  hostname,
  port,
  DBUrl,
};
