import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actions from '../duck/actions';

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();

    const addToFavourite = (event, movie) => {
        event.preventDefault();
        dispatch(actions.addMovieToFavorites(movie));
    };
    return (
        <li key={movie.id} className="movie-item">
            <Link to={`/movie-details/${movie.id}`}>
                <div className="movie-poster">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="poster-image"
                    />
                </div>
                <div className="movie-info">
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-overview">{movie.overview}</p>
                    <p className="movie-release-date">
                        Release Date: {new Date(movie.release_date).toLocaleDateString()}
                    </p>
                    <p className="movie-rating">
                        Rating: {movie.vote_average} ({movie.vote_count} votes)
                    </p>
                    <button onClick={(event) => addToFavourite(event, movie)}>Add to Favourite</button>
                </div>
            </Link>
        </li>
    );
};

export default MovieCard;
