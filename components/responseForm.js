const logger = require('../middleware/customLogger')

exports.successMSG = (res, data) => {
    logger(res, data, 'success')
    return res.status(200).send({
        success: true,
        data,
        message: 'success'
    })
}

exports.errorMSG = (res, data) => {
    logger(res, data, 'error')
    return res.status(404).send({
        success: false,
        data: 'An error occured!',
        message: data
    })
}

exports.authErrorMSG = (res, data) => {
    logger(res, data, 'authError')
    return res.status(401).send({
        success: false,
        data: 'Authorization error!',
        message: data
    })
}

exports.forbiddenMSG = (res, data) => {
    logger(res, data, 'forbidden')
    return res.status(403).send({
        success: false,
        data: 'Forbidden!',
        message: data
    })
}

exports.successATMCollectionMSG = (res, data) => {
    logger(res, data, 'success')
    return res.status(200).send(data)
}

exports.errorATMCollectionMSG = (res, data) => {
    logger(res, data, 'error')
    return res.status(200).send({
        result: 'Wrong ATMID'
    })
}

exports.successATMCollectionDetailsMSG = (res, data) => {
    logger(res, data, 'success')
    return res.status(200).send({
        'ResultList': data.CollectionList.map(item => {
            return {
                atmid: item.atmid,
                result: 'OK'
            }
        })
    })
}

exports.errorATMCollectionDetailsMSG = (res, data) => {
    logger(res, data, 'error')
    return res.status(200).send({
        result: 'Wrong ATMID'
    })
}

exports.errorATMCollectionStructureMSG = (res, data) => {
    logger(res, data, 'error')
    return res.status(200).send({
        result: 'Wrong request data format'
    })
}