import React from "react"
import "./login.css"

export default function index() {
    return (
        <div class="container">
        <div class="row">
            <div class="col-0 col-sm-0 col-md-3 col-lg-3"></div>
            <div class="form-con col-12 col-sm-12 col-md-6 col-lg-6">
                <form id="login-form">
                    <h3 class="underline">Login</h3>
                    <div class="form-group">
                        <label for="Username">Username</label>
                        <input type="user name" class="form-control" id="user_name" placeholder="RobGirrrlyman"/>
                    </div>
                    <div class="form-group">
                        <label for="Password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="UltraBluBerries4Eva12"/>
                    </div>
                    <button id="create-acc" type="submit" class="btn btn-warning">Create Account</button>
                    <button id="login" type="submit" class="btn btn-dark">Login</button>
                </form>
            </div>
            <div class="col-0 col-sm-0 col-md-3 col-lg-3"></div>
        </div>
        </div>
    )
}
