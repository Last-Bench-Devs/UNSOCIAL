import React, { Component } from 'react';
import './signup.css'


class Login extends Component {
    render() {
        return (
            <div className="Register">
                <form className="sign-up-form">
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" name="username" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" name="email" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" name="password" />
                    </div>
                    <input type="submit" className="btn" value="Sign up" />


                </form>
            </div>
        )
    }
}

export default Login;
