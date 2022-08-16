import React from 'react';
import { Link } from 'react-router-dom';

class ReviewShow extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
      this.props.getReview(this.props.match.params.id);
    }

    handleDelete() {
        this.props.eraseReview()
            .then( () => this.props.history.push('/') )
        // this.props.history.push('/')
    }

    render(){
        if (!this.props.review) return null;
        return(
            <div>
                <h1>{this.props.review.name}</h1>
                <h3>show page</h3>
                <p>{this.props.review.location}</p>
                <p>{this.props.review.phone}</p>
                <p>{this.props.review.website}</p>
                <Link to={`/reviews/${this.props.review.id}/edit`} ><button>Edit Review Information</button></Link>
                <br/>
                <Link to={'/'} > <button onClick={this.handleDelete}>Delete Review</button> </Link>
            </div>
        )
    }
}

export default ReviewShow;