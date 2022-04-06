const filmService = require('../services/filmService')
const ApiError = require('../error/ApiError')

class FilmController {
    async getOne(req, res, next) {
        try {
            const {title} = req.params
            const films = await filmService.getFilmByTitle(title)
            res.json(films)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

}

module.exports = new FilmController()