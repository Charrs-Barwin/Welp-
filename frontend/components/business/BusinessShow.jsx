import React from 'react';
// import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
    componentDidMount() {
      this.props.getBusiness(this.props.match.params.bsnId);
    }

    render(){
        const { business } = this.props;
        return(
            <div>
                <h1>{business.name}</h1>
                <p>{business.location}</p>
                <p>{business.phone}</p>
                <p>{business.website}</p>
                <br/>
                <h3>show page</h3>
            </div>
        )
    }
}

export default BusinessShow;