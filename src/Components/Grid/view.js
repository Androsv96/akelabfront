import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import './style.css';
import Typography from "@material-ui/core/Typography";
import YellowStar from '../../Utils/Assets/Icons/Star 3.png';
import GreyStar from '../../Utils/Assets/Icons/Star 5.png';
import {
    MOVIES_ORDER_BY_AGE_NEW_TO_OLD, MOVIES_ORDER_BY_AGE_OLD_TO_NEW, MOVIES_ORDER_BY_CALIFICATION_MIN_TO_MAX, MOVIES_ORDER_BY_CALIFICATION_MAX_TO_MIN
} from '../../Utils/constants';

export default function MoviesGrid({ moviesReducer }) {

    const { moviesData, movieToFind, genres, moviesOrder } = moviesReducer;
    let { results } = moviesData;

    const getMovieGenres = (genresIds) => {
        let genres = "";
        genresIds.forEach(genreId => {
            let genre = moviesData.genres.find(e => e.id === genreId);
            genres += `${genre.name}, `
        })
        return genres;
    }

    const filterMovies = () => {

        let selectedGenres = genres.filter(e => e.checked);
        if (selectedGenres.length > 0) {
            selectedGenres = selectedGenres.map(e => e.id);
            let tempNewGenres = [];
            for (let i = 0; i < results.length; i++) {
                for (let j = 0; j < selectedGenres.length; j++) {
                    if (results[i].genre_ids.includes(selectedGenres[j])) {
                        tempNewGenres = tempNewGenres.concat(results[i]);
                        continue;
                    }
                }
            }
            results = [...new Set(tempNewGenres)];
        }

        if (movieToFind) {
            let newReg = new RegExp(movieToFind.toLowerCase());
            results = results.filter(val => newReg.test(val.title.toLowerCase()));
        }

    }

    const orderMovies = () => {
        switch (moviesOrder) {
            case MOVIES_ORDER_BY_AGE_NEW_TO_OLD:
                results = results.sort((a, b) => (a.release_date > b.release_date) ? -1 : ((b.release_date > a.release_date) ? 1 : 0))
                break;

            case MOVIES_ORDER_BY_AGE_OLD_TO_NEW:
                results = results.sort((a, b) => (a.release_date > b.release_date) ? 1 : ((b.release_date > a.release_date) ? - 1 : 0));
                break;


            case MOVIES_ORDER_BY_CALIFICATION_MAX_TO_MIN:
                results = results.sort((a, b) => (a.vote_average > b.vote_average) ? -1 : ((b.vote_average > a.vote_average) ? 1 : 0))
                break;

            case MOVIES_ORDER_BY_CALIFICATION_MIN_TO_MAX:
                results = results.sort((a, b) => (a.vote_average > b.vote_average) ? 1 : ((b.vote_average > a.vote_average) ? - 1 : 0));
                break;


            default:
                results = results.sort((a, b) => (a.release_date > b.release_date) ? -1 : ((b.release_date > a.release_date) ? 1 : 0))
                break;
        }
    }

    filterMovies();
    orderMovies();

    return (
        <Box className="main_wrapper">
            <Grid container spacing={1}>

                {results.map((data, index) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} xl={4} key={index} >
                            <Paper className="paper">
                                <Box className="movie_title">{data.title}</Box>
                                <Box className="movie_data_container">
                                    <Box className="movie_image_container">
                                        <img src={`${moviesData.images_url}${data.poster_path}`} alt="movieImg" className="movie_image" />
                                    </Box>
                                    <Box className="movie_info_container">
                                        <Box className="movie_description">{data.overview}</Box>
                                        <Box className="movie_rating">
                                            <Typography className="movie_rating_text"><span className="movie_rating_title">Título: </span> {data.title}</Typography>
                                            <Typography className="movie_rating_text"><span className="movie_rating_title">
                                                Clasificación: </span> {data.vote_average}
                                                {[1, 2, 3, 4,].map((_, idx) => <img src={YellowStar} alt="YelloStarIcon" key={idx} />)}
                                                < img src={GreyStar} alt="GreyStarIcon" />
                                            </Typography>
                                            <Typography className="movie_rating_text"><span className="movie_rating_title">Género: </span> {getMovieGenres(data.genre_ids)}</Typography>
                                            <Typography className="movie_rating_text"><span className="movie_rating_title">Fecha de realización: </span> {data.release_date}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
}

