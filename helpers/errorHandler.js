
const errorHandler = (error, req, res, next) => {

    const { status, } = error;

    if(!status) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error", 
            timestamp: new Date().toISOString(),
        })
    }
    res.status(status).json({ ...error, })
};

module.exports = errorHandler;
