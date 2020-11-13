import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Replay from '@material-ui/icons/Replay';
import { GET_ALL_MOVIES_INIT } from '../../Redux/Actions';
import './style.css';

export default function RequestFailed({ actionDispatcher }) {
    return (
        <Box className={"mainContainer"}>
            <Box className={"subContainer"}>

                Sin conexión a internet o al servidor. Por favor intente nuevamente.
                <Button variant="outlined" color="primary" endIcon={<Replay />} onClick={() => actionDispatcher(GET_ALL_MOVIES_INIT, { Akelab: 123456789 })}>
                    Volver a intentar
                </Button>

            </Box>
        </Box>

    );
}