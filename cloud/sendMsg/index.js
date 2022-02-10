const cloud = require('wx-server-sdk')
cloud.init({
    env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
    try {
        const result = await cloud.openapi.subscribeMessage.send({
            "touser": event.openid,
            "page": 'pages/msg/msg',
            "lang": 'zh_CN',
            "data": {
                "name3": {
                    "value": event.name
                },
                "date4": {
                    "value": '2015年01月05日'
                }
            },
            "templateId": event.tmplid,
            "miniprogramState": 'developer'
        })
        return result
    } catch (err) {
        return err
    }
}