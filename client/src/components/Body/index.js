import React, { Component } from 'react'
import Axios from "axios";
import "./body.css";
import Form from "../Form";
import Card from "../Card";
import Loader from "react-loader-spinner";
import { Scrollbars } from "react-custom-scrollbars";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class Body extends Component {
    state = {
        loading: false,
        data: [],
        currentPlayer: [],
        
    };

    //inital state of home screen w/ loading animation and get call
    
    componentDidMount () {
        this.setState({ loading: true});
        let currentUser = localStorage.getItem("username");
        this.setState({ currentUser: currentUser })
        Axios.get("/api/stats")
        .then(res=> {
            let data = res.data;   
            this.setState({ data });
            this.setState({ loading: false});
            // this.yourStats();
        }); 
    };

    // get route to retreive all records and filter by logged in account
    
    yourStats=()=> {
        Axios.get("/api/stats")
        .then(res=> {
            let data = res.data;  
            this.setState({ data });
            this.setState({ loading: false});
        }); 
       let data = this.state.data;
       let player = data.filter((game)=>{
        return game.player === localStorage.getItem("username"); 
       })
       this.setState({ currentPlayer: player });
    };

    // logic for focusing on tabs

    tabFocus(e) {
        let clicked = e.target.id;
        let tab1 = document.getElementById("tab-1");
        let tab2 = document.getElementById("tab-2");
        let tab3 = document.getElementById("tab-3");

        switch (clicked) {
            case "tab-1":
                tab2.style.background = "rgba(46, 49, 49, .9)";
                tab3.style.background = "rgba(46, 49, 49, .9)";
                break;
            case "tab-2":
                tab1.style.background = "rgba(46, 49, 49, .9)";
                tab3.style.background = "rgba(46, 49, 49, .9)";
                break;
            case "tab-3":
                tab1.style.background = "rgba(46, 49, 49, .9)";
                tab2.style.background = "rgba(46, 49, 49, .9)";
                break;
        };

        document.getElementById(clicked).style.background = "rgba(46, 49, 49, .7)";
    }; 

    render() {
        return (
            <Router>
                <div className="body-wrap container">
                    <div className="row">
                        <div className="col-0 col-sm-0 col-md-1 col-lg-1"></div>
                        <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                            <div className="sub-nav">
                                <h1 className="nav-user">{this.state.currentUser}</h1>
                                <div className="nav-tabs">
                                    <Link to="/home" className="nav-btn btn" id="tab-1" onClick={this.tabFocus}>Leaderboard</Link>
                                    <Link to="/yourstats" className="nav-btn btn" id="tab-2" onClick={(e) => {
                                        this.tabFocus(e);
                                        this.yourStats();
                                    }}>Your Stats</Link>
                                    <Link to="/form" className="nav-btn btn" id="tab-3" onClick={this.tabFocus}>Add New</Link>
                                </div>
                            </div>
                            <div className="clear-float"></div>
                            <div className="body-con">   
                                <div className="card-con">
                                    <Switch>
                                        <Route exact path="/home">
                                            {this.state.loading === true ?
                                                <Loader className="loader"
                                                    type="Grid"
                                                    color="#334d4d"
                                                    height={600}
                                                    width={400}
                                                />
                                                :
                                                <Scrollbars>
                                                    {this.state.data.map(stats => (
                                                        <Card
                                                            player={stats.player}
                                                            faction={stats.faction}
                                                            sub={stats.subfaction}
                                                            wins={stats.wins}
                                                            losses={stats.losses} />
                                                    ))}
                                                </Scrollbars>
                                            }
                                        </Route>
                                        <Route exact path="/yourstats">
                                            <Scrollbars>
                                                {this.state.currentPlayer.map(stats => (
                                                    <Card
                                                        player={stats.player}
                                                        faction={stats.faction}
                                                        sub={stats.subfaction}
                                                        wins={stats.wins}
                                                        losses={stats.losses} />
                                                ))}
                                            </Scrollbars>
                                        </Route>
                                        <Route exact path="/form">
                                            <Form allData = {this.state}></Form>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                        <div className="col-0 col-sm-0 col-md-1 col-lg-1"></div>
                    </div>
                </div>
            </Router>
        )

    }
}



