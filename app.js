const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRouter = require('./routes/user');

const url = 'mongodb://localhost:127.0.0.1:27017/User';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const hostname = 'localhost';
const port = 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRouter);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
