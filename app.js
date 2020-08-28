const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');

const userRouter = require('./routes/user');
require('./config/config')(passport);
const { hostname, port } = require('./constants/constants');
const { dbConnection } = require('./config/db');

dbConnection();

// --- App config
const app = express();

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// --- Routes
app.use('/', userRouter);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
