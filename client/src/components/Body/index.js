import React, { Component } from 'react'
import Axios from "axios";
import "./body.css";
import Form from "../Form";
import Card from "../Card";
import { Scrollbars } from 'react-custom-scrollbars';

export default class Body extends Component {
    state = {
        data: []
    }

    componentDidMount () {

        Axios.get("/api/stats")
        .then(res=> {
            let data = res.data; 
            console.log(data);   
            this.setState({ data });
        });
    };

    tabFocus() {
        const navTabs = document.querySelector(".nav-tabs");
        navTabs.addEventListener("click", select, false);

       function select(e) {

            if (e.target !== e.currentTarget) {
                let clicked = e.target.id;
                document.getElementById(clicked).style.background = "rgba(46, 49, 49, .9)"
            }
            e.stopPropagation();
        }

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
                                <button className="nav-btn btn" id="tab-1" onClick={this.tabFocus}>Leaderboard</button>
                                <button className="nav-btn btn" id="tab-2" onClick={this.tabFocus}>Your Stats</button>
                                <button className="nav-btn btn" id="tab-3" onClick={this.tabFocus}>Add New</button>
                            </div>
                        </div>
                        <div className="clear-float"></div>
                        <div className="body-con">

                            <Form></Form>
                

                            {/* <div className="card-con">
                                <Scrollbars>
                                {this.state.data.map(stats => (
                                    <Card 
                                    player={stats.player} 
                                    faction={stats.faction} 
                                    sub={stats.sub} 
                                    wins={stats.wins} 
                                    losses={stats.losses} />

                                ))}
                                </Scrollbars>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-0 col-sm-0 col-md-1 col-lg-1"></div>
                </div>
            </div>
        )
    }
}


