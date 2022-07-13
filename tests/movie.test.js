const { Movie } = require('../src/database/models');
const {Op} = require('sequelize');

async function getMovies() {
    const movies = await Movie.findAll({
        where: {
            // title: {
            //     [Op.like]: 'Harry Potter%'
            // },
            genreId: [1, 3, 8]
        },
        order: [
            ['releaseDate', 'DESC']
        ],
        limit : 2,

    });

    movies.forEach(movie => console.log('Movie: ' + movie.genreId + " - " + movie.releaseDate.toLocaleDateString('pt-BR') + " - " +movie.title));
}

getMovies()
