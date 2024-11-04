import types from './types';

const setPlayingNowMovies = (movies) => ({ type: types.SET_PLAYING_NOW_MOVIES, payload: movies });
const setPopularMovies = (movies) => ({ type: types.SET_POPULAR_MOVIES, payload: movies });
const setTopRatedMovies = (movies) => ({ type: types.SET_TOP_RATED_MOVIES, payload: movies });
const setUpComingMovies = (movies) => ({ type: types.SET_UPCOMING_MOVIES, payload: movies });
const addMovieToFavorites = (movie) => ({ type: types.ADD_MOVIE_TO_FAVORITES, payload: movie });
const setFavouriteMovies = () => ({ type: types.SET_FAVOURITE_MOVIES });

const actions = {
    setPlayingNowMovies,
    setPopularMovies,
    setTopRatedMovies,
    setUpComingMovies,
    addMovieToFavorites,
    setFavouriteMovies,
};

export default actions;
