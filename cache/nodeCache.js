const NodeCache = require('node-cache')
const filmCache = new NodeCache({
    stdTTL: process.env.NODE_CACHE_LIFETIME || 15
})

module.exports = filmCache