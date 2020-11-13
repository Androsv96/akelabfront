import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { SET_GENRE_CHECKBOX_SELECTED, SET_SHOW_GENRE_DIALOG } from '../../Redux/Actions';

export default function GenreDialog({ moviesReducer, actionDispatcher }) {

    const { genres, showGenreDialog } = moviesReducer;

    const onChecked = (e) => {
        let newSelectedGenres = [...genres];

        let index = newSelectedGenres.findIndex(genre => genre.name === e.target.id);
        newSelectedGenres[index] = { ...newSelectedGenres[index], checked: !newSelectedGenres[index]["checked"] };

        actionDispatcher(SET_GENRE_CHECKBOX_SELECTED, { data: newSelectedGenres });
    }

    return (
        <Dialog open={showGenreDialog} onClose={() => actionDispatcher(SET_SHOW_GENRE_DIALOG, { data: false })} >
            <DialogTitle>Género</DialogTitle>
            <List>
                {
                    genres.map((val, idx) =>
                        <ListItem key={idx} >
                            <Checkbox
                                id={val.name}
                                checked={genres[idx].checked || false}
                                onChange={onChecked}
                            />
                            <ListItemText primary={val.name} />
                        </ListItem>
                    )
                }
            </List>
        </Dialog>
    )
}