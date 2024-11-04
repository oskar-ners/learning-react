import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../duck/operations';
import { useEffect, useState } from 'react';
import './MovieDetails.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const movieData = await getMovieDetails(movieId);
            if (movieData) {
                setMovie(movieData);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div className="movie-details-container">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-info">
                <h1 className="movie-title">{movie.title}</h1>
                <p className="movie-tagline">{movie.tagline}</p>
                <p className="movie-overview">{movie.overview}</p>
                <div className="movie-details">
                    <p>
                        <strong>Release Date:</strong> {movie.release_date}
                    </p>
                    <p>
                        <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
                    </p>
                    <p>
                        <strong>Runtime:</strong> {movie.runtime} min
                    </p>
                    <p>
                        <strong>Rating:</strong> {movie.vote_average} / 10 ({movie.vote_count} votes)
                    </p>
                    <p>
                        <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
                    </p>
                    <p>
                        <strong>Production Companies:</strong>{' '}
                        {movie.production_companies.map((company) => company.name).join(', ')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
