import './style.css'
import SearchInputContainer from '../SearchInput';
import GridContainer from '../Grid/';
import { useEffect } from 'react';
import RequestFailedContainer from '../RequestFailed/';
import { GET_ALL_MOVIES_INIT } from '../../Redux/Actions';

export default function Movies({ moviesReducer, actionDispatcher }) {

    const { moviesData } = moviesReducer;

    useEffect(() => {
        if (Object.keys(moviesData).length === 0) actionDispatcher(GET_ALL_MOVIES_INIT, { Akelab: 123456789 });
    });

    return (
        <div id="movies_wrapper">
            {
                Object.keys(moviesData).length > 0 ?
                    <>
                        <h3>Películas</h3>
                        <SearchInputContainer />
                        <GridContainer />
                    </>
                    :
                    <RequestFailedContainer />
            }
        </div>
    );
}