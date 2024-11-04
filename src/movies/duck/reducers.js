import { produce } from 'immer';
import types from './types';

const INITIAL_STATE = {
    list: [],
    favorites: [],
};

function moviesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SET_PLAYING_NOW_MOVIES:
            return produce(state, (draft) => {
                draft.list = action.payload;
            });
        case types.SET_POPULAR_MOVIES:
            return produce(state, (draft) => {
                draft.list = action.payload;
            });
        case types.SET_TOP_RATED_MOVIES:
            return produce(state, (draft) => {
                draft.list = action.payload;
            });
        case types.SET_UPCOMING_MOVIES:
            return produce(state, (draft) => {
                draft.list = action.payload;
            });
        case types.ADD_MOVIE_TO_FAVORITES:
            return produce(state, (draft) => {
                draft.favorites.push(action.payload);
            });
        case types.SET_FAVOURITE_MOVIES:
            return produce(state, (draft) => {
                draft.list = draft.favorites;
            });
        default:
            return state;
    }
}

export default moviesReducer;
