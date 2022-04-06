const sequelize = require("../db");
const redisClient = require('../cache/redis')
const cacheClient = require('../cache/nodeCache')
const ApiError = require('../error/ApiError');

class FilmService {
    async getFilmByTitle(title) {
        const query = await sequelize.query(`
SELECT DISTINCT  
title AS "Назва", 
description AS "Опис", 
release_year AS "Рік випуску",
rental_rate AS "Орендна ставка",
rating AS "Рейтинг",
replacement_cost AS "Вартість заміни"
FROM film WHERE film.title = '${title}';`)
        const film = query.shift()
        if(!film.length){
            throw ApiError.NotFound(`Film with title ${title} not found`)
        }
        const cacheData = JSON.stringify(...film)
        await redisClient.setEx(title, process.env.REDIS_CACHE_LIFETIME || 30, cacheData);
        cacheClient.set(title, cacheData)
        return film.shift();
    }
}

module.exports = new FilmService()