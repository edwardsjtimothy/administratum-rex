
import "./body.css";

import React, { Component } from 'react'
import Axios from "axios";

export default class Body extends Component {
    state = {

    }

    componentDidMount () {
        Axios.get("/api/stats")
        .then(res=> {
            console.log(res)
            this.setState({statArr: res.data})
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
                                <button className="nav-btn btn">Overview</button>
                                <button className="nav-btn btn">things</button>
                                <button className="nav-btn btn">extra</button>
                            </div>
                        </div>
                        <div className="clear-float"></div>
                        <div className="body-con">
                            <div>
                                

                            </div>
                        </div>
                    </div>
                    <div className="col-0 col-sm-0 col-md-1 col-lg-1"></div>
                </div>
            </div>
        )
    }
}


