require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.APP_PORT || 5000;
const routes = require('./src/routes');
const log = require('./src/helpers/log');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes);
// app.use(log)

app.get('/', log, (req, res) => res.send('server running well'));
app.get('*', log, (req, res) => res.send('endpoint not found'));

app.listen(port, console.log('server running on port', port));

module.exports = app
