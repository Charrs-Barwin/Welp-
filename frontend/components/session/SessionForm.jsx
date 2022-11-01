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
        this.handleDemo = this.handleDemo.bind(this)
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

    handleDemo() {
        const demoLogin = {
            name: "demo user",
            email: "demo@email.com",
            password: "123456"
        }
        this.props.processForm(demoLogin)
        .then( () => {
            if (this.props.location.state) {this.props.history.push(this.props.location.state.previous)}
            else {this.props.history.goBack()}
        })
    }

    render() {
        let {currentUser,formType,otherForm,errors} = this.props;
        if (currentUser){Redirect}

        const email = formType==='Signup' ? 
            <div>
                <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')}/>
                <br/>
                <br/>
            </div>
        : null

        const otherformLink = <Link to={{pathname:("/"+otherForm),state:{previous: this.props.location.state ? this.props.location.state.previous : '/'}}} >{otherForm}</Link>

        return (
            <div className='session-form'>

                
                <h3>{formType==='Login' ? 'Log in to Welp' : 'Sign Up for Welp'}</h3>
                {
                formType==='Login' ? 
                    <div>
                        <h4>New to Yelp? {otherformLink}</h4>
                        <br/>
                        <br/>
                        <button onClick={this.handleDemo}> Log in as demo user </button>
                        <br/>
                        <br/>
                        <h4>-- OR --</h4>
                    </div>
                    : <div>
                        <h4>Connect with great local businesses</h4>
                        <br/>
                    </div>
                }

                <form onSubmit={this.handleSubmit}>
                    <br/>
                    <input type="text" placeholder="Username" value={this.state.name} onChange={this.handleInput('name')}/>
                    <br/>
                    <br/>
                    {email}
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')}/>
                    <br/>
                    <br/>
                    <button type="submit">{formType}</button>
                </form>
                <br/>
                {
                formType==='Login' ? 
                    <h5>New to Welp? {otherformLink}</h5>
                    : <h5>Already on Welp? {otherformLink}</h5>
                }

            </div>
        )
    }
}

export default SessionForm;