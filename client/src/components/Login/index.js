import React from "react";
import Axios from "axios";
import { Redirect, NavLink } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            loggedIn: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    loginUser = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ badPassword: true });
        } else {
            this.setState({ badPassword: false });
            Axios.post("/loginUser", {
                username: this.state.username,
                password: this.state.password,
            }).then((res) => {
                localStorage.setItem('JWT', res.data.token);
                localStorage.setItem("username", res.data.username);
                this.setState({ loggedIn: true });
                console.log("logged in")
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    render() {
        if (!this.state.loggedIn) {
            return <div class="container">
                <div class="row">
                    <div class="col-0 col-sm-0 col-md-3 col-lg-3"></div>
                    <div class="form-con col-12 col-sm-12 col-md-6 col-lg-6">
                        <form id="login-form">
                            <h3 class="underline">Login</h3>
                            <div class="form-group">
                                <label for="Username">Username</label>
                                <input type="user name" class="form-control" name="username" placeholder="RobGirrrlyman" value={this.state.username} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="Password">Password</label>
                                <input type="password" class="form-control" name="password" placeholder="UltraBluBerries4Eva12" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <div class="form-group">
                                <label for="Password">Confirm Password</label>
                                <input type="password" class="form-control" name="confirmPassword" placeholder="UltraBluBerries4Eva12" value={this.state.confirmPassword} onChange={this.handleChange} />
                            </div>
                            <NavLink to="signup">
                                <button id="create-acc" type="button" class="btn btn-warning">Create Account</button>
                            </NavLink>
                            <button id="login" type="button" class="btn btn-dark" onClick={this.loginUser}>Login</button>
                        </form>
                        <div class="alert alert-danger" role="alert" hidden={!this.state.badPassword}>
                            Passwords don't match!
                    </div>
                    </div>
                    <div class="col-0 col-sm-0 col-md-3 col-lg-3"></div>
                </div>
            </div>
        }
        else {
            return <Redirect to={{ pathname: "/home", state: { loggedIn: true } }} />
        }
    }

}

export default Login;

  