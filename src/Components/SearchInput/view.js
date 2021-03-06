import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import SearchIcon from '../../Utils/Assets/Icons/Vector.png';
import FilterIcon from '../../Utils/Assets/Icons/Filter Icon.png'
import OrderByIcon from '../../Utils/Assets/Icons/Arrow Icon.png';
import InputAdornment from '@material-ui/core/InputAdornment';
import GenreDialogContainer from '../GenreDialog';
import OrderByDialogContainer from '../OrderByDialog';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './style.css';
import { FILTER_MOVIE_NAME, SET_SHOW_GENRE_DIALOG, SET_SHOW_ORDER_BY_DIALOG } from '../../Redux/Actions';

export default function SearchInput({ moviesReducer, actionDispatcher }) {

    const { showGenreDialog, showOrderByDialog } = moviesReducer;

    const onTextTyped = (e) => {
        actionDispatcher(FILTER_MOVIE_NAME, { data: e.target.value });
    };

    return (
        <Box className="wrapper">
            <TextField
                className="search_input"
                variant="outlined"
                placeholder="Buscar película"
                onChange={onTextTyped}
                InputProps={{
                    endAdornment: <InputAdornment position="end"><img src={SearchIcon} alt="Search" /></InputAdornment>,
                }}
            />

            <Box className="icons_wrapper" onClick={() => actionDispatcher(SET_SHOW_GENRE_DIALOG, { data: !showGenreDialog })}>
                <img src={FilterIcon} alt="Filter" className="filter_icon" />
            </Box>

            <Box className="orderby_wrapper" onClick={() => actionDispatcher(SET_SHOW_ORDER_BY_DIALOG, { data: !showOrderByDialog })}>
                <Box>Ordenar</Box>
                <Box>{showOrderByDialog ? <ExpandMoreIcon className="arrow_icon"/> : <img src={OrderByIcon} alt="OrderBy" className="arrow_icon" />}</Box>
            </Box>

            <GenreDialogContainer />
            <OrderByDialogContainer />

        </Box>
    );
}