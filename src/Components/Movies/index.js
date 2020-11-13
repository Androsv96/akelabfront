import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import View from './view';

/* Redux-action */
import { actionDispatcher } from '../../Redux/Actions';

const mapStateToProps = ({ moviesReducer }) => ({
    moviesReducer
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ actionDispatcher }, dispatch);

const MoviesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default MoviesContainer
