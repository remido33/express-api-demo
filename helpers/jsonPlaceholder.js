
const axios = require('axios');

const jsonPlaceholder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

module.exports = jsonPlaceholder;
