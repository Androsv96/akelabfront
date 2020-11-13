import {
    GET_All_MOVIES_SUCCESS, FILTER_MOVIE_NAME, SET_GENRE_CHECKBOX_SELECTED, SET_SHOW_GENRE_DIALOG, SET_SHOW_ORDER_BY_DIALOG, SET_MOVIES_ORDER
} from '../Actions/';
import { MOVIES_ORDER_BY_AGE_OLD_TO_NEW, MOVIES_ORDER_BY_CALIFICATION_MAX_TO_MIN, } from '../../Utils/constants';

const initialState = {
    moviesData: {},
    movieToFind: "",
    genres: [],
    showGenreDialog: false,
    showOrderByDialog: false,
    moviesOrder: MOVIES_ORDER_BY_AGE_OLD_TO_NEW,
};

export default function MoviesReducer(state = initialState, action) {
    switch (action.type) {

        case GET_All_MOVIES_SUCCESS:
            return {
                ...state,
                moviesData: action.response.data,
                genres: action.response.data.genres
            }

        case FILTER_MOVIE_NAME:
            return {
                ...state,
                movieToFind: action.payload.data
            }

        case SET_GENRE_CHECKBOX_SELECTED:
            return {
                ...state,
                genres: action.payload.data
            }

        case SET_SHOW_GENRE_DIALOG:
            return {
                ...state,
                showGenreDialog: action.payload.data
            }

        case SET_SHOW_ORDER_BY_DIALOG:
            return {
                ...state,
                showOrderByDialog: action.payload.data
            }

        case SET_MOVIES_ORDER:
            return {
                ...state,
                moviesOrder: action.payload.data
            }

        default:
            return state;
    }
}