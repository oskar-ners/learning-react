import { getPopularMovies } from '../duck/operations';
import { getTopRatedMovies } from '../duck/operations';
import { getUpcomingMovies } from '../duck/operations';
import { getNowPlayingMovies } from '../duck/operations';
import { useDispatch } from 'react-redux';
import actions from '../duck/actions';

const FilterMovies = () => {
    const dispatch = useDispatch();

    const setPopularMovies = () => {
        dispatch(getPopularMovies());
    };
    const setTopRatedMovies = () => {
        dispatch(getTopRatedMovies());
    };
    const setUpcomingMovies = () => {
        dispatch(getUpcomingMovies());
    };
    const setPlayingNowMovies = () => {
        dispatch(getNowPlayingMovies());
    };
    const setFavouriteMovies = () => {
        dispatch(actions.setFavouriteMovies());
    };

    return (
        <div className="filter-movies">
            <button onClick={setPopularMovies}>Popular</button>
            <button onClick={setTopRatedMovies}>Top Rated</button>
            <button onClick={setUpcomingMovies}>Upcoming</button>
            <button onClick={setPlayingNowMovies}>Playing Now</button>
            <button onClick={setFavouriteMovies}>Favourite Movies</button>
        </div>
    );
};

export default FilterMovies;
