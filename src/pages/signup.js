
import React from 'react'
import "./signup.css"
import LOGO from './assets/LOGO.png'




function Signup() {
    
    function sign_in_btn(){
        document.querySelector(".container").classList.remove("sign-up-mode");
    }

    function sign_up_btn(){
        document.querySelector(".container").classList.add("sign-up-mode");
    }

    
    
    
    return (
        <div>


            <div className="container">
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
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />


                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                UNSOCIAL
            </p>
                            <button className="btn transparent"  onClick={sign_up_btn}>
                                Sign up
            </button>
                        </div>
                        <img src={LOGO} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Unsocial
            </p>
                            <button className="btn transparent"  onClick={sign_in_btn}>
                                Sign in
            </button>
                        </div>
                        <img src={LOGO} className="image" alt="" />
                    </div>
                </div>
            </div>

        </div>

)



    

        

    
}

export default Signup
