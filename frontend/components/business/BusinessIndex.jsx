import React from 'react';
import BusinessIndexItem from './business_index_item';
import AddBusiness from './new_business_container';

class BusinessIndex extends React.Component {
  componentDidMount() {
    this.props.getBusinesses();
    // debugger
  }

  render() {
    const { businesses, getBusiness } = this.props;

    return (
      <div>
        <h1>INDEX PAGE </h1>
        <ul>
          {
            businesses.map(bsn => (
              <BusinessIndexItem
                bsn={bsn}
                getBusiness={getBusiness}
                key={bsn.id}
              />
            ))
          }
        </ul>
        <AddBusiness/>
      </div>
    );
  }
}

export default BusinessIndex;