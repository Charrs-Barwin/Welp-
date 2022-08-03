import React from "react";
// import { Redirect, Link } from "react-router-dom";

class BusinessForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {// this.props.formtype === 'Edit' ? this.props.business : {
            name:'',
            location:'',
            phone:'',
            website:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        if (this.props.formType === 'Edit'){
          this.props.getBusiness()
            .then(()=>this.setState(this.props.business))
        }
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.processForm(this.state)
        .then( (action) => {
            this.props.history.push(`/businesses/${action.bsn.id}`)
            // this.props.errors.body ? this.setState({errors: true}) : this.props.history.push('/') 
        })
        // .then()
        // this.props.history.push('/')
    }

    render() {
        let {formType,errors} = this.props;
        return (
            <div className='session-form'>
                <h3>{formType} Business</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Business name{' '}
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
                </form>
            </div>
        )
    }
}

export default BusinessForm;