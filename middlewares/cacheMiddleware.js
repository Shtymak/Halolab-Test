const cacheClient = require('../cache/nodeCache')
module.exports = async function(req, res, next) {
    const {title} = req.params
    if (!cacheClient.has(title)) {
        return next()
    }
    const data = cacheClient.get(title)
    console.log("From node cache")
    res.json(JSON.parse(data))
}