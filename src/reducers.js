import moviesReducer from './movies/duck';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ movies: moviesReducer });

export default rootReducer;
