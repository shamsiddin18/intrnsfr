const {
    authErrorMSG
} = require('../components/responseForm');
const {
    get,
    expire
} = require('../interfaces/redis')

module.exports = (app) => {
    openRoutes = ['/api/v1/users/login','/api/v1/encashment/invoice','/api/v1/recount/invoice','/api/v1/transactions/invoice','/api/v1/ATM/collection']
    app.use((req, res, next) => {
        // console.log(req._parsedUrl.pathname);
        if (openRoutes.includes(req._parsedUrl.pathname)) {
            next()
        } else {
            if (req.headers.authtoken && req.headers.authid) {
                var {
                    authtoken,
                    authid
                } = req.headers;
                get("authToken:" + authid).then(token => {
                    if (token == authtoken) {
                        expire("authToken:" + authid).then(() => {
                            get("userData:" + authid).then(str => {
                                req.user = JSON.parse(str)
                                next()
                            });
                        })
                    } else {
                        authErrorMSG(res, 'Cannot authorize')
                    }
                })
            } else {
                authErrorMSG(res, 'Cannot authorize')
            }
        }
    })
}