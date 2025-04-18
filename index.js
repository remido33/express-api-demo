
const express = require('express');
const app = express();
require('dotenv').config();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.use('/posts', require('./routes/posts'));

app.use(require('./helpers/errorHandler'));

app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
});