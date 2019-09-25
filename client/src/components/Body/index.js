import React, { Component } from 'react'
import Axios from "axios";
import "./body.css";
import Card from "../Card"

export default class Body extends Component {
    state = {

    }

    componentDidMount () {

        Axios.get("/api/stats")
        .then(res=> {
            let data = res.data;    
            this.setState({data})
        })
    }
    render() {
        return (
            <div className="body-wrap container">
                <div className="row">
                    <div className="col-0 col-sm-0 col-md-1 col-lg-1"></div>
                    <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                        <div className="sub-nav">
                            <h1 className="nav-user">Tim</h1>
                            <div className="nav-tabs">
                                <button className="nav-btn btn">Your Stats</button>
                                <button className="nav-btn btn">Search</button>
                                <button className="nav-btn btn">Add New</button>
                            </div>
                        </div>
                        <div className="clear-float"></div>
                        <div className="body-con">
                            <div>
                                <Card stats={this.state.statArr}/>

                            </div>
                        </div>
                    </div>
                    <div className="col-0 col-sm-0 col-md-1 col-lg-1"></div>
                </div>
            </div>
        )
    }
}


