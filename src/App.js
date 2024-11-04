import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesContainer from './movies/components/MoviesContainer';
import FilterMovies from './movies/components/FilterMovies';
import MovieDetails from './movies/components/MovieDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <FilterMovies />
                                <MoviesContainer />
                            </>
                        }
                    ></Route>
                    <Route path="/movie-details/:movieId" element={<MovieDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
