import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import './style.css';
import Typography from "@material-ui/core/Typography";
import YellowStar from '../../Utils/Assets/Icons/Star 3.png';
import GreyStar from '../../Utils/Assets/Icons/Star 5.png';

export default function MoviesGrid({ moviesReducer }) {

    const { moviesData, movieToFind, genres } = moviesReducer;
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

            console.log(results)
        }

        if (movieToFind) {
            let newReg = new RegExp(movieToFind.toLowerCase());
            results = results.filter(val => newReg.test(val.title.toLowerCase()));
        }

    }

    filterMovies();

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

