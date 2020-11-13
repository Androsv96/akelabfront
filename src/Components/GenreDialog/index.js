import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import View from './view';
import { actionDispatcher } from '../../Redux/Actions';

const mapStateToProps = ({ moviesReducer }) => ({
    moviesReducer
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ actionDispatcher }, dispatch);

const GenreDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default GenreDialogContainer
