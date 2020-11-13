import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import View from './view';

/* Redux-action */
import { actionDispatcher } from '../../Redux/Actions';

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ actionDispatcher }, dispatch);

const RequestFailedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(View)

export default RequestFailedContainer
