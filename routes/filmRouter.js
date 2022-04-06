const Router = require('express');
const router = new Router();
const filmController = require('../controllers/filmController')
const redisMiddleware = require('../middlewares/redisMiddleware')
const cacheMiddleware = require('../middlewares/cacheMiddleware')
router.get('/:title', cacheMiddleware, redisMiddleware, filmController.getOne)
module.exports = router;