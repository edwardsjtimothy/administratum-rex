import Axios from "axios";
import "./login.css";
import {Redirect} from "react-router-dom"
import React, { Component } from "react";


export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            signedUp: false,
            badPassword: false
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

    signupUser = (event)=>{
        event.preventDefault();
        if(this.state.password !== this.state.confirmPassword){
            this.setState({badPassword: true})
        }
        else{
        Axios.post("/registerUser", {
            username: this.state.username,
            password: this.state.password,
        }).then((data)=>{
            console.log("signed up")
            this.setState({signedUp: true})
        }).catch((err)=>{
            console.log(err)
        })
    }
    }


    render() {
        if(!this.state.signedUp) {
        return <div class="container">
        <div class="row">
            <div class="col-0 col-sm-0 col-md-3 col-lg-3"></div>
            <div class="form-con col-12 col-sm-12 col-md-6 col-lg-6">
                <form id="login-form">
                    <h3 class="underline">Login</h3>
                    <div class="form-group">
                        <label for="Username">Username</label>
                        <input type="user name" class="form-control" name="username" placeholder="RobGirrrlyman" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="Password">Password</label>
                        <input type="password" class="form-control" name="password" placeholder="UltraBluBerries4Eva12" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label for="Password">Confirm Password</label>
                        <input type="password" class="form-control" name="confirmPassword" placeholder="UltraBluBerries4Eva12" value={this.state.confirmPassword} onChange={this.handleChange}/>
                    </div>
                    <button id="create-acc" type="button" class="btn btn-warning">Create Account</button>
                    <button id="login" type="button" class="btn btn-dark" onClick={this.signupUser}>Login</button>
                </form>
            </div>
            <div class="col-0 col-sm-0 col-md-3 col-lg-3"></div>
        </div>
        </div>
            }
     else {
            return <Redirect to="/" />
        }
        
    }
}

  