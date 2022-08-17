import React from 'react';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
      this.props.getBusiness(this.props.match.params.id);
    }

    handleDelete() {
        this.props.eraseBusiness()
            .then( () => this.props.history.push('/') ) // redirect to user page instead once implemented
    }

    render(){
        if (!this.props.business) return null;
        const {currentUser,business} = this.props;

        const display = currentUser ? (
            currentUser.id === business.owner_id ? (
                <div>                
                    <Link to={`/businesses/${this.props.business.id}/edit`} ><button>Edit Business Information</button></Link>
                    <br/>
                    <Link to={'/'} > <button onClick={this.handleDelete}>Delete Business</button> </Link>
                </div>
            ) : (
                <div><p>REVIEW LINK WILL BE HERE</p></div>// Review link here
            )
        ) : (
            <div><p>not logged in text</p></div>// this will be blank
        );
        
        return(
            <div>
                <h1>{this.props.business.name}</h1>
                <h3>show page</h3>
                <p>{this.props.business.location}</p>
                <p>{this.props.business.phone}</p>
                <p>{this.props.business.website}</p>
                {display}
            </div>
        )
    }
}

export default BusinessShow;