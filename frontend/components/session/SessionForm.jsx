import React from "react";
import { Redirect, Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
        .then( () => {
            if (this.props.location.state) {this.props.history.push(this.props.location.state.previous)}
            else {this.props.history.goBack()}
        })
    }

    emailPrompt(formType) {
        return formType==='signup' ? (
            <div>
                <label>email{' '}
                    <input type="email" value={this.state.email} onChange={this.handleInput('email')}/>
                </label>
                <br/>
            </div>
        ) : (
            <div></div>
        );
    }

    render() {
        let {currentUser,formType,otherForm,errors} = this.props;
        if (currentUser){Redirect}
        return (
            <div className='session-form'>
                <h2>{formType}</h2>
                <Link to={{pathname:("/"+otherForm),state:{previous: this.props.location.state.previous}}} >{otherForm}</Link>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <label>Username{' '}
                        <input type="text" value={this.state.name} onChange={this.handleInput('name')}/>
                    </label>
                    <br/>
                    {this.emailPrompt(formType)}
                    <label>password{' '}
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>

                    {errors.forEach(err => <p>{err}<br/></p>)}
                    <br/>
                    <button type="submit">{formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;