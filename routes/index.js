const Router = require('express');
const router = new Router();
const filmRouter = require('./filmRouter')
router.use('/film', filmRouter)
module.exports = router;
