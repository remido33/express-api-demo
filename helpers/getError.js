
const getError = (status, message) => ({
    status,
    message,
    timestamp: new Date().toISOString(),
})

module.exports = getError;
