import React from "react";
import { Redirect, Link } from "react-router-dom";

class BusinessForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {// this.props.formtype === 'Edit' ? this.props.business : {
            name:'',
            location:'',
            photo:null,
            photoUrl:'',
            phone:'',
            website:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.deletePhoto = this.deletePhoto.bind(this)
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

    // handleFile() {
    //     return (e) => {
    //         this.setState({ photo: e.currentTarget.files[0] })
    //     }
    // }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () => this.setState({ photo: file, photoUrl: reader.result });
        
        if (file) {
          reader.readAsDataURL(file);
        } else {
          this.setState({ photo: null, photoUrl: '' });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('business[name]', this.state.name);
        formData.append('business[location]', this.state.location);
        formData.append('business[phone]', this.state.phone);
        formData.append('business[website]', this.state.website);
        if (this.state.photo) {
          formData.append('business[photo]', this.state.photo);
        }
        if (this.state.id) {
          formData.append('business[id]', this.state.id);
        }
        this.props.processForm(formData)
        .then( (action) => this.props.history.push(`/businesses/${action.bsn.id}`) )
    }

    deletePhoto(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('business[id]', this.state.id);
        formData.append('business[photo]', null);
        this.props.processForm(formData)
        .then( () => this.setState({ photo: null, photoUrl: '' }) )
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
                    <label>Photo{' '}
                        <input type="file" multiple onChange={this.handleFile} />
                        {(formType === 'Edit' && this.state.photoUrl) ? <button onClick={this.deletePhoto} >delete photo</button> : null}
                    </label>
                    <br/>
                    {this.state.photoUrl ? <img src={this.state.photoUrl} height='128' width='128' /> : null}
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
                    <Link to={this.props.formType === 'Edit' ? `/businesses/${this.props.business.id}` : '/'} >
                        <button>Cancel</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default BusinessForm;