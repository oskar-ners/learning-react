import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNowPlayingMovies } from '../duck/operations';
import MovieCard from './MovieCard';
import './MoviesContainer.css';

const MoviesContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNowPlayingMovies());
    }, [dispatch]);

    const movies = useSelector((state) => state.movies);

    return (
        <div>
            <ul className="movies-list">
                {movies.list.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    );
};

export default MoviesContainer;
