const ClientErrors = Object.freeze({
    BAD_REQUEST:400,
    UNAUTHARISED:401,
    NOT_FOUND:404,
})

const SuccessCodes = Object.freeze({
    OK: 200,
    CREATED: 201
});


const ServerErrors = Object.freeze({
    INTERNAL_SERVER_ERROR:500,
    NOT_IMPLEMENTED:501,
})

module.exports = {
    ClientErrors,
    ServerErrors,
    SuccessCodes
};