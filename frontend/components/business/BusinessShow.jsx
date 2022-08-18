import React from 'react';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
    constructor(props){
        super(props);

        this.state = 
        {
            rating: 0,
            reviews: [],
            reviewFormShow: false,
            reviewRating: 0,
            reviewBody: ''
        }

        this.handleDelete = this.handleDelete.bind(this)
        this.showReviewForm = this.showReviewForm.bind(this)
        this.hideReviewForm = this.hideReviewForm.bind(this)
    }

    componentDidMount() {
        this.props.getBusiness(this.props.match.params.id)
        // this.props.getReviews()
        .then(response => {
            this.props.getReviews()
            .then(r2 => {
                let _reviews = [];
                Object.values(r2.reviews).forEach(r => {
                    if (r.business_id === response.bsn.id) {_reviews.push(r)}
                })
                this.setState({reviews: _reviews})
            })
        })
    }

    showReviewForm() {
        this.setState({reviewFormShow: true})
    }

    hideReviewForm() {
        this.setState({reviewFormShow: false})
    }

    handleDelete() {
        this.props.eraseBusiness()
            .then( () => this.props.history.push('/') ) // redirect to user page instead once implemented
    }

    render(){
        if (!this.props.business) return null;
        const {currentUser,business} = this.props;

        const input = currentUser ? (
            currentUser.id === business.owner_id ? (
                <div>                
                <Link to={`/businesses/${this.props.business.id}/edit`} ><button>Edit Business Information</button></Link>
                <br/>
                <Link to={'/'} > <button onClick={this.handleDelete}>Delete Business</button> </Link>
                </div>
            ) : !this.state.reviewFormShow ? (
                <button onClick={this.showReviewForm}>write review</button>
            ) : (
                <div>
                <p>review form here</p>
                <button onClick={this.hideReviewForm}>cancel</button>
                </div>
            )
        ) : !this.state.reviewFormShow ? (
            <button onClick={this.showReviewForm}>write review</button>
        ) : (
            <p>please log in to write reviews</p>
        );

        return(
            <div>
                <h1>{this.props.business.name}</h1>
                <h6>rating </h6>
                <h6>{this.props.business.rating}</h6>
                <h3>show page</h3>
                <p>{this.props.business.location}</p>
                <p>{this.props.business.phone}</p>
                <p>{this.props.business.website}</p>
                {input}                
                <ul>
                {
                this.state.reviews.map(review => (
                    <div key={review.id}>
                    <h3>{review.rating}</h3>
                    <h5>{review.body}</h5>
                    </div>
                ))
                }
                </ul>
            </div>
        )
    }
}

export default BusinessShow;