import actions from './actions';

const API_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjYxNGM5MTUxMTZkNGQ5ZGQ2NzAzMDYwMTcxMzY0NiIsIm5iZiI6MTczMDcxODUxOC40Mzg4MzA5LCJzdWIiOiI2NzI4YWE3ZDU5MTgxMzdjZmMzOWJhYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NLlME08IOCzAjdIZk9rrE65Z9tcKQ_P98joKip0F9MM';

const fetchMovies = async (endpoint) => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}?language=en-US&page=1`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        return json.results;
    } catch (error) {
        console.error(`Failed to fetch ${endpoint}:`, error);
        return [];
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await fetch(`${API_URL}/${movieId}?language=en-US`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(`Failed to fetch ${movieId}:`, error);
        return [];
    }
};

export const getPopularMovies = () => {
    return async (dispatch) => {
        const movies = await fetchMovies('popular');
        dispatch(actions.setPopularMovies(movies));
    };
};

export const getNowPlayingMovies = () => {
    return async (dispatch) => {
        const movies = await fetchMovies('now_playing');
        dispatch(actions.setPlayingNowMovies(movies));
    };
};

export const getTopRatedMovies = () => {
    return async (dispatch) => {
        const movies = await fetchMovies('top_rated');
        dispatch(actions.setTopRatedMovies(movies));
    };
};

export const getUpcomingMovies = () => {
    return async (dispatch) => {
        const movies = await fetchMovies('upcoming');
        dispatch(actions.setUpComingMovies(movies));
    };
};
