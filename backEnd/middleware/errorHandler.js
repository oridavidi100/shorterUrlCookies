function errorHandlerMiddleware (err, req, res, next) {
    console.log(err.status + " "+ err.messege);
    if(!err.status) { //other error
        console.log(err)
        return res.status(500).send({"error": "internal server error"});
    }
    return res.status(err.status).send({"error": err.messege}) ;  
}

module.exports = {errorHandlerMiddleware}