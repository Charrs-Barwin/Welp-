import { connect } from 'react-redux';
import BusinessIndex from './BusinessIndex'
import { getBusinesses, getBusiness } from '../../actions/business'

const mapSTP = state => ({
  businesses: Object.values(state.entities.businesses)
});

const mapDTP = dispatch => ({
  getBusinesses: () => dispatch(getBusinesses()),
  // getBusiness: bsnId => dispatch(getBusiness(bsnId))
});

export default connect(mapSTP, mapDTP)(BusinessIndex);