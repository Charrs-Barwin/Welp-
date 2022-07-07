import { connect } from 'react-redux';
import {getBusiness,editBusiness,eraseBusiness} from '../../actions/business'
import BusinessShow from './BusinessShow';

const mapSTP = (state, ownProps) => ({
  business: state.businesses[ownProps.match.params.bsnId]
});

const mapDTP = dispatch => ({
    getBusiness: bsnId => dispatch(getBusiness(bsnId))
});

export default connect(mapSTP, mapDTP)(BusinessShow);