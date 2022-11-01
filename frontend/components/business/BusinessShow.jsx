import React from 'react';
import { Link } from 'react-router-dom';
import star0 from "../../../app/assets/images/0star.jpg"
import star1 from "../../../app/assets/images/1star.jpg"
import star2 from "../../../app/assets/images/2star.jpg"
import star3 from "../../../app/assets/images/3star.jpg"
import star4 from "../../../app/assets/images/4star.jpg"
import star5 from "../../../app/assets/images/5star.jpg"

class BusinessShow extends React.Component {
    constructor(props){
        super(props);

        this.state = 
        {
            reviewFormShow: false,
            userReview: null,
            reviewRating: null,
            reviewBody: null
        }

        this.handleDelete = this.handleDelete.bind(this)
        this.reviewForm = this.reviewForm.bind(this)
        this.showReviewForm = this.showReviewForm.bind(this)
        this.hideReviewForm = this.hideReviewForm.bind(this)
        this.updateReview = this.updateReview.bind(this)
        this.updateRating = this.updateRating.bind(this)
        this.deleteReview = this.deleteReview.bind(this)
        this.submitReview = this.submitReview.bind(this)
    }

    componentDidMount() {
        this.props.getBusiness(this.props.match.params.id)
        .then(response => {
            this.props.getReviews(response.bsn.id)
            if (this.props.currentUser) {
                let _userReview = response.bsn.reviews.filter(review => review.user_id === this.props.currentUser.id)[0]
                if (_userReview) {
                    this.setState({userReview: _userReview, reviewRating: _userReview.rating, reviewBody: _userReview.body})                        
                }
            }
        })
    }

    reviewForm() {
        return (
            <form className='review-form'>
              <label>Rating:
                <select onChange={this.updateRating} required >
                  <option hidden disabled selected={!this.state.reviewRating} value ></option>
                  <option value={1} selected={this.state.reviewRating == 1} >1</option>
                  <option value={2} selected={this.state.reviewRating == 2} >2</option>
                  <option value={3} selected={this.state.reviewRating == 3} >3</option>
                  <option value={4} selected={this.state.reviewRating == 4} >4</option>
                  <option value={5} selected={this.state.reviewRating == 5} >5</option>
                </select>
              </label>
              <br/>
              <textarea cols="50" rows="4" placeholder='Review' onChange={this.updateReview} value={this.state.reviewBody||''} />
              <br/>
              <input type='submit' value='submit' onClick={this.submitReview}/>
              <br/>
              <br/>
            </form>
        )
    }

    updateRating(e) {
        e.preventDefault();
        this.setState({reviewRating: e.currentTarget.value})
    }

    updateReview(e) {
        e.preventDefault();
        this.setState({reviewBody: e.currentTarget.value})
    }

    submitReview() {
        if (!this.state.reviewRating) {return}
        let _review = {
            body: this.state.reviewBody,
            rating: this.state.reviewRating
        }
        let process;
        if (this.state.userReview) {
            process = this.props.editReview
            _review = Object.assign(this.state.userReview,_review)
        } else {
            process = this.props.addReview
            _review = Object.assign(_review,{business_id: this.props.business.id})
        }
        process(_review)
        .then((response)=>{
            this.props.getBusiness(this.props.match.params.id)
            this.setState({userReview: response.review, reviewFormShow: false})
        })
    }

    deleteReview() {
        this.props.eraseReview(this.state.userReview)
        .then(()=>{
            this.props.getBusiness(this.props.match.params.id)
            this.setState({
                reviewFormShow: false,
                userReview: null,
                reviewRating: null,
                reviewBody: null
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
            .then( () => this.props.history.push('/profile') )
    }

    render(){
        if (!this.props.business) return null;
        const {currentUser,business,reviews} = this.props;
        const stars = [star0,star1,star2,star3,star4,star5]
        if (currentUser) reviews.sort((a, b) => Number(b.user_id == currentUser.id) - Number(a.user_id == currentUser.id))

        const input = currentUser ? (
            currentUser.id === business.owner_id ? (
                <div>                
                <Link to={`/businesses/${business.id}/edit`} ><button>Edit Business Information</button></Link>
                <br/>
                <Link to={'/'} > <button id='delete-button' onClick={this.handleDelete}>Delete Business</button> </Link>
                </div>
            ) : !this.state.reviewFormShow ? (
                this.state.userReview ? (
                    <div>
                    <button onClick={this.showReviewForm}>edit review</button>
                    {/* <br/> */}
                    <button onClick={this.deleteReview}>delete review</button>
                    </div>
                ) : (
                    <div><button onClick={this.showReviewForm}>write review</button></div>
                )
            ) : (
                <div>
                {this.reviewForm()}
                <button onClick={this.hideReviewForm}>cancel</button>
                </div>
            )
        ) : !this.state.reviewFormShow ? (
            <div><button onClick={this.showReviewForm}>write review</button></div>
        ) : (
            <p>please log in to write reviews</p>
        );  // end input
        
        return(
            <div className='showpage'>
                <header>
                    {business.photoUrl ? <img src={business.photoUrl} height='192' width='192' alt="no image :(" /> : null}
                    <div>
                        <h1>{business.name}</h1>
                        <div className='rating-info'>
                            <img className='star-img' src={stars[Math.floor(business.avgRating)]} height='40' width='170' alt="No star img :(" />
                            <h6> {business.avgRating}</h6>
                            <h6> ({business.reviews.length} review{business.reviews.length != 1 ? 's' : ''})</h6>
                        </div>
                    </div>
                </header>

                <br/>
                {business.photoUrls ? business.photoUrls.map((url,i)=> <img key={i} src={url} height='128' width='128' alt="no image :(" />) : null}
                <br/>

                <h5>Location</h5>
                <li>{business.location}</li>
                <br/>
                <h5>Telephone</h5>
                <li>{business.phone}</li>
                <br/>
                <h5>Business website</h5>
                <li>{business.website}</li>

                <br/>
                {input}
                <br/>

                <ul>
                {
                reviews.map(review => (
                    <div key={review.id}>
                        <img className='star-img' src={stars[Math.floor(review.rating)]} height='24' width='100' alt="No star img :(" />
                        <p>"{review.body}"</p>
                        <h6>-{review.author.name}</h6>
                        <br/>
                    </div>
                ))
                }
                </ul>
            </div>
        )
    }
}

export default BusinessShow;