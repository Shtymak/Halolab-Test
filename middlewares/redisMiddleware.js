const redisClient = require('../cache/redis')

module.exports = async function (req, res, next) {
    const {title} = req.params;
    const data = await redisClient.get(title)
    if(!data){
       return next()
    }
    console.log("From redis cache")
    res.json(JSON.parse(data))
}