import { GET_All_MOVIES_SUCCESS, FILTER_MOVIE_NAME, SET_GENRE_CHECKBOX_SELECTED, SET_SHOW_GENRE_DIALOG } from '../Actions/'

const initialState = {
    moviesData: {},
    movieToFind: "",
    genres: [],
    showGenreDialog: false,
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

        default:
            return state;
    }
}