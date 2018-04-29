const express = require('express');
const parser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const app = express();
const taskRoute = require('./routes/task.route');

require('./modules/database');

app.use(express.static('server/public'));
app.use(parser.json());

app.use('/task', taskRoute);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});