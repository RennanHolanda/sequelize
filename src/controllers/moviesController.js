const { Movie } = require("../database/models");

const movieController = {
    list: async (req, res) => {
        const movies = await Movie.findAll();
        return res.render('moviesList', { movies });
    },
    new: (req, res) => {
        res.render('newestMovie', {  title: 'Newest Movie' });
    },  
    recommended: (req, res) => { 
        const movies = await Movie.findAll({ onder : [['rating', 'DESC' ]],limit: 5});   
        res.render('recommendedMovie', { movies }); 
    },
    detail: (req, res) => {
        const { id } = req.params;
        const movie = Movie.findByPk(id);
       return res.send('moviesDetail ' + { movie });
    }
};
    
module.exports = movieController;