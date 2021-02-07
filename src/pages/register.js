import React, { Component } from 'react';
import './signup.css'
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/user/'
})



class Register extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             email: '',
             password: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = async () => {
        let res = await api.post('/signup',this.state)
        console.log(res)
    }
    
    render() {
        const { username, email, password } = this.state
        return (
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" className="btn solid" />


                    </form>
                    <form className="sign-up-form" onSubmit={this.submitHandler} >
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" name="username" value={username} onChange={this.changeHandler} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" name="email" value={email} onChange={this.changeHandler} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" name="password" value={password} onChange={this.changeHandler} />
                        </div>
                        <input type="submit" className="btn" value="Sign up" />


                    </form>
                </div>
            </div>
        )
    }
}

export default Register;
