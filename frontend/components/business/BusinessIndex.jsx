import React from 'react';
// import BusinessIndexItem from './business_index_item';
import { Link } from 'react-router-dom';
import AddBusiness from './new_business_container';

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.getBusinesses();
  }

  render() {
    return (
      <ul>
        {
          this.props.businesses.map(bsn => (
            <div key={bsn.id}>
              <Link to={`/businesses/${bsn.id}`} >{bsn.name}</Link>
              <br/>
            </div>
          ))
        }
      </ul>
    );
  }
}

export default BusinessIndex;