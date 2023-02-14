const {
    sismember
} = require('../interfaces/redis');

const {
    forbiddenMSG
} = require('../components/responseForm');

function getRole(type) {
    return new Promise(resolve => {
        var role = ''
        switch (type) {
            case 99: {
                role = 'adminrole'
                break;
            }
            case 1: {
                role = 'cashierRole'
                break;
            }
            case 2: {
                role = 'cashierLordRole'
                break;
            }
            case 3: {
                role = 'frontRole'
                break;
            }
            default: {
                role = ''
            }
        }
        resolve(role)
    })
}

module.exports.auth = (item) => function (req, res, next) {
    next()
    // getRole(req.user.type).then(role => {
    //     sismember(role, item).then(result => {
    //         result ? next() : forbiddenMSG(res, 'Access Restricted')
    //     })
    // })
}