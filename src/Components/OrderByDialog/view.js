import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { SET_SHOW_ORDER_BY_DIALOG, SET_MOVIES_ORDER } from '../../Redux/Actions';
import {
    MOVIES_ORDER_BY_AGE_NEW_TO_OLD, MOVIES_ORDER_BY_AGE_OLD_TO_NEW,
    MOVIES_ORDER_BY_CALIFICATION_MIN_TO_MAX, MOVIES_ORDER_BY_CALIFICATION_MAX_TO_MIN
} from '../../Utils/constants';
import './style.css'

export default function OrderByDialog({ moviesReducer, actionDispatcher }) {

    const { showOrderByDialog, moviesOrder } = moviesReducer;

    return (
        <Dialog open={showOrderByDialog} onClose={() => actionDispatcher(SET_SHOW_ORDER_BY_DIALOG, { data: false })} >
            <DialogContent>

                <Typography className="titles">Fecha</Typography>

                <List>
                    <ListItem button className={moviesOrder === MOVIES_ORDER_BY_AGE_NEW_TO_OLD ? "currentActiveOrder" : ""}>
                        <ListItemText className="subtitles" primary={"Nuevo - Antiguas"} onClick={() => actionDispatcher(SET_MOVIES_ORDER, { data: MOVIES_ORDER_BY_AGE_NEW_TO_OLD })} />
                    </ListItem>
                    <ListItem button className={moviesOrder === MOVIES_ORDER_BY_AGE_OLD_TO_NEW ? "currentActiveOrder" : ""}>
                        <ListItemText className="subtitles" primary={"Antiguas - Nuevo"} onClick={() => actionDispatcher(SET_MOVIES_ORDER, { data: MOVIES_ORDER_BY_AGE_OLD_TO_NEW })} />
                    </ListItem>
                </List>

                <Typography className="titles">Calificación</Typography>

                <List>
                    <ListItem button className={moviesOrder === MOVIES_ORDER_BY_CALIFICATION_MIN_TO_MAX ? "currentActiveOrder" : ""}>
                        <ListItemText className="subtitles" primary={"0 - 10 puntos"} onClick={() => actionDispatcher(SET_MOVIES_ORDER, { data: MOVIES_ORDER_BY_CALIFICATION_MIN_TO_MAX })} />
                    </ListItem>
                    <ListItem button className={moviesOrder === MOVIES_ORDER_BY_CALIFICATION_MAX_TO_MIN ? "currentActiveOrder" : ""}>
                        <ListItemText className="subtitles" primary={" 10- 0 puntos"} onClick={() => actionDispatcher(SET_MOVIES_ORDER, { data: MOVIES_ORDER_BY_CALIFICATION_MAX_TO_MIN })} />
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>
    );
}