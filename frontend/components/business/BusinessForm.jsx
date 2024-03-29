import React from "react";
import { Link } from "react-router-dom";

class BusinessForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            location:'',
            photo:null,
            photos:[],
            photoUrl:'',
            photoUrls:[],
            phone:'',
            website:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleGallery = this.handleGallery.bind(this)
        this.changeState = this.changeState.bind(this)
        this.deleteThumbnail = this.deleteThumbnail.bind(this)
        this.deleteGallery = this.deleteGallery.bind(this)
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

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        const previous_photo = this.state.oldPhoto||this.state.photoUrl
        reader.onloadend = () => this.setState({ photo: file, oldPhoto: previous_photo, photoUrl: reader.result });
        
        if (file) {
          reader.readAsDataURL(file);
        } else {
          this.setState({ photo: null, photoUrl: previous_photo });
        }
    }

    handleGallery(e) {
        const files = e.target.files;
        const reader = new FileReader();
        let previous = this.state.previousPhotos||this.state.photoUrls;
        let urls = [...previous]
        let index = 0;
        reader.onloadend = () => {
            urls.push(reader.result)
            if (index+1 === files.length) {
                this.setState({ photos: files, previousPhotos: previous, photoUrls: urls })
            } else {
                reader.readAsDataURL(files[++index])
            }
        }
        if (files.length) {
          reader.readAsDataURL(files[0])
        } else {
          this.setState({ photos: [], photoUrls: previous });
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
        for (let i = 0; i < this.state.photos.length; i++) {
          formData.append(`business[photos][]`, this.state.photos[i]);
        }
        if (this.state.id) {
          formData.append('business[id]', this.state.id);
        }
        // for (const value of formData.entries()) {
        //     console.log(value);
        // }
        this.props.processForm(formData)
        .then( (action) => this.props.history.push(`/businesses/${action.bsn.id}`) )
    }

    deleteThumbnail(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('business[id]', this.state.id);
        formData.append('business[photo]', null);
        this.props.processForm(formData)
        .then( () => this.setState({ photo: null, photoUrl: '' }) )
    }

    deleteGallery(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('business[id]', this.state.id);
        formData.append('business[photos][]', null);
        this.props.processForm(formData)
        .then( () => this.setState({ photos: [], photoUrls: [] }) )
    }

    deletePhoto(index) {
        return (e) => {
            e.preventDefault();
            
            const formData = new FormData();
            formData.append('business[id]', this.state.id);
            formData.append('business[photos][]', index);

            let remaining_urls = [...this.state.photoUrls]
            remaining_urls.splice(index,1)

            if (this.state.previousPhotos && !(this.state.previousPhotos.length > index)) {
                let remaining_photos = [...this.state.photos]
                remaining_photos.splice(index-this.state.previousPhotos.length,1)
                this.setState({ photos: remaining_photos, photoUrls: remaining_urls })
            } else {
                this.props.processForm(formData)
                .then( () => this.setState({ photoUrls: remaining_urls }) )
            }
        }
    }

    changeState(newState){
        return (e) => {
            e.preventDefault()
            this.setState(newState)
        }
    }

    render() {
        let {formType,errors} = this.props;
        return (
            <div className='business-form'>
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
                    <label>Thumbnail Photo{' '}
                        <input type="file" onChange={this.handleFile} />
                        {this.state.photo ? <button onClick={this.changeState({photo: null, photoUrl: this.state.oldPhoto||''})} >remove</button> : null}
                        {(formType === 'Edit' && this.state.photoUrl) ? <button onClick={this.deleteThumbnail} >delete photo</button> : null}
                    </label>
                    <br/>
                    {this.state.photoUrl ? <img src={this.state.photoUrl} height='128' width='128' /> : null}
                    <br/>
                    {formType === 'Edit' ? 
                        <label>Add to Gallery{' '}
                            <input type="file" multiple onChange={this.handleGallery} />
                            {this.state.photos.length ? <button onClick={this.changeState({photos: [], photoUrls: this.state.previousPhotos||this.state.photoUrls})} >remove</button> : null}
                            {this.state.photoUrls.length ? <button onClick={this.deleteGallery} >delete all gallery photos</button> : null}
                        </label> 
                    : null}
                    <br/>
                    <div className="gallery">
                        {this.state.photoUrls.map((url,i)=> <input type="image" onClick={this.deletePhoto(i)} key={i} src={url} height='128' width='128' alt="no image :(" />)}
                    </div>
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
                    <button type="submit" className="red-button">{formType}</button>
                    <br/>
                    <br/>
                    <Link to={(this.props.formType === 'Edit' && this.props.business) ? `/businesses/${this.props.business.id}` : '/'} >
                        <button>Cancel</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default BusinessForm;