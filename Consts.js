const HTTP_CODES = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202;
    PARTIAL_CONTENT: 206,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    PRECONDITION_FAILED: 412,
    SEVER_ERROR: 401,
}

const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

const Const = {
    DATABASE: {
        MONGOB: {
            URL: 'mongod://localhost/combutivel'
        }
    },
    REQUEST: {
     METHODS: HTTP_METHODS,
     HTTP: HTTP_CODES,
    }

}
module.exports = Const;