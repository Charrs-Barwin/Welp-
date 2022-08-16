import React from "react";
import { Redirect, Link } from "react-router-dom";

class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {// this.props.formtype === 'Edit' ? this.props.review : {
            name:'',
            location:'',
            phone:'',
            website:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        if (this.props.formType === 'Edit'){
          this.props.getReview()
            .then(()=>this.setState(this.props.review))
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        // e.preventDefault();
        // debugger
        this.props.processForm(this.state)
        .then( (action) => {
            this.props.history.push(`/reviews/${action.review.id}`)
            // this.props.errors.body ? this.setState({errors: true}) : this.props.history.push('/') 
        })
        // .then()
        // this.props.history.push('/')
    }

    render() {
        let {formType,errors} = this.props;
        return (
            <div className='session-form'>
                <h3>{formType} Review</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Review name{' '}
                        <input type="text" value={this.state.name} onChange={this.handleInput('name')}/>
                    </label>
                    <br/>
                    <label>Location{' '}
                        <input type="text" value={this.state.location} onChange={this.handleInput('location')}/>
                    </label>
                    <br/>
                    <label>Phone number{' '}
                        <input type="text" value={this.state.phone} onChange={this.handleInput('phone')}/>
                    </label>
                    <br/>
                    <label>Website{' '}
                        <input type="text" value={this.state.website} onChange={this.handleInput('website')}/>
                    </label>
                    <br/>

                    {errors.forEach(err => <p>{err}<br/></p>)}
                    <br/>
                    <button type="submit">{formType}</button>
                    <Link to={this.props.formType === 'Edit' ? `/reviews/${this.props.review.id}` : '/'} >
                        <button>Cancel</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default ReviewForm;