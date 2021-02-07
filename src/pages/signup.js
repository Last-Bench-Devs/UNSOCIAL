
import React, { Component, useState } from 'react'
import "./signup.css"
import LOGO from './assets/LOGO.png'
import Register from "./register"




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
                <Register/>

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
