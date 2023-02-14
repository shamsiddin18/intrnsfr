const moment = require('moment');
module.exports = async (res, data, type) => {
    var {
        req: {
            method,
            baseUrl,
            headers: {
                appName,
                uuid,
                origin,
                authid,
                authtoken,
                mongoMethod
            }
        }
    } = res
    if (mongoMethod) {
        process.stdout.write(JSON.stringify({
            timestamp: moment().unix(),
            appName,
            uuid,
            method,
            baseUrl,
            origin,
            response: type,
            authid,
            authtoken,
            data
        }) + '\n');
    }
}