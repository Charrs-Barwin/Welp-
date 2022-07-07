import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessIndex from './BusinessIndex'
import { getBusinesses, getBusiness } from '../../actions/business'

const mapSTP = state => {
  // debugger
  return {businesses: Object.values(state.entities.businesses)}
  // return {businesses: Object.values(getBusinesses())}
};

const mapDTP = dispatch => ({
  getBusinesses: () => dispatch(getBusinesses()),
  getBusiness: bsnId => dispatch(getBusiness(bsnId))
});

export default withRouter(connect(mapSTP, mapDTP)(BusinessIndex));