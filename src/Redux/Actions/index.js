export const GET_ALL_MOVIES_INIT = "GET_ALL_MOVIES_INIT";
export const GET_All_MOVIES_SUCCESS = "GET_All_MOVIES_SUCCESS";

export const SET_NEW_ERROR = "SET_NEW_ERROR";
export const RESET_ERROR = "RESET_ERROR";

export const SET_GENRE_CHECKBOX_SELECTED = "SET_GENRE_CHECKBOX_SELECTED";
export const SET_SHOW_GENRE_DIALOG = "SET_SHOW_GENRE_DIALOG";

export const FILTER_MOVIE_NAME = "FILTER_MOVIE_NAME";

export const actionDispatcher = (action, payload) => ({
    type: action,
    payload
});
